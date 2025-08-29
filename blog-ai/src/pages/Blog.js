import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Moment from 'moment';
import Footer from '../components/Footer';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';

export default function Blog() {
  const { id } = useParams();
  const { axios } = useAppContext();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  // ✅ Fetch single blog
  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/api/blog/${id}`);
      data.success ? setData(data.blog) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ✅ Fetch comments of the blog
  const fetchComments = async () => {
    try {
      const { data } = await axios.post(`/api/blog/comments`, { blogId: id });
      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ✅ Add new comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    try {
      const { data } = await axios.post("/api/blog/add-comment", {
        blogId: id,
        name: "Guest User", // later use logged in user
        content: newComment,
      });

      if (data.success) {
        toast.success("Comment submitted!");
        setNewComment("");
        fetchComments(); // refresh comments
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ✅ Avatar generator
  const getAvatarUrl = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random&color=fff`;
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
  }, []);

  return data ? (
    <div>
      <Navbar />

      {/* Blog header */}
      <div className='text-center mt-20 text-gray-600'>
        <p className='text-primary py-4 font-medium'>
          Published on {Moment(data.createdAt).format('MMMM Do YYYY')}
        </p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>
          {data.title}
        </h1>
        <h2 className='my-5 max-w-ld truncate mx-auto'>
          {data.subTitle}
        </h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>
          Daksh Jain
        </p>
      </div>

      {/* Blog content */}
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-10 text-center">
        <div className="flex justify-center my-6">
          <img
            src={data.image}
            className="w-full max-w-3xl rounded-lg"
            alt={data.title}
          />
        </div>
        <div
          className="prose prose-lg 
          prose-headings:font-semibold 
          prose-p:text-gray-700 prose-p:leading-relaxed 
          prose-a:text-primary hover:prose-a:underline 
          prose-strong:text-gray-900 
          prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 
          prose-li:marker:text-primary 
          mx-auto text-left"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>

      {/* Comments Section */}
      <div className='mt-14 mb-10 max-w-3xl mx-auto'>
        <h2 className='text-3xl font-semibold mb-4 text-gray-800'>Comments</h2>

        {/* Render comments */}
        {comments.length > 0 ? (
          <div className="space-y-4 mb-6">
            {comments.map((c) => (
              <div key={c._id} className="p-4 border rounded-lg shadow-sm bg-gray-50 flex gap-4">
                <img
                  src={getAvatarUrl(c.name)}
                  alt={c.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-800">{c.name}</p>
                  <p className="text-gray-500 text-sm">
                    {Moment(c.createdAt).format("MMMM Do YYYY")}
                  </p>
                  <p className="mt-2 text-gray-700">{c.content}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-gray-600 mb-6'>No comments yet. Be the first to comment!</p>
        )}

        {/* Add comment form */}
        <form onSubmit={handleCommentSubmit} className='flex flex-col space-y-4'>
          <textarea
            className='border border-gray-300 rounded-md p-4 outline-none'
            rows="5"
            placeholder='Write your comment here...'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            required
          />
          <button 
            type='submit' 
            className='bg-primary text-white px-6 py-2 rounded hover:scale-105 transition-all cursor-pointer'
          >
            Post Comment
          </button>
        </form>
      </div>
      <Footer />
    </div>
  ) : (
    <div>
      <h1 className='text-7xl'>Loading...</h1>
    </div>
  );
}
