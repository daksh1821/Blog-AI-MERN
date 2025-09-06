import React, { useEffect, useRef, useState } from 'react'
import Quill from 'quill';
import { blogCategories } from '../../data/blogCategories';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import {parse} from 'marked';

export default function AddBlog() {
  const { axios } = useAppContext();
  const [isAdding, setIsAdding] = useState(false);
  const [loading,setLoading] = useState(false);
  const editorRef = useRef(null);
  const quillRef = useRef(null);
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [category, setCategory] = useState('Startup');
  const [isPublished, setIsPublished] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Frontend validation
    if (!title || !subTitle || !image || !quillRef.current.root.innerHTML.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setIsAdding(true);

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished
      };

      const formData = new FormData();
      formData.append('blog', JSON.stringify(blog));
      formData.append('image', image);

      const { data } = await axios.post('/api/blog/add', formData);

      if (data.success) {
        toast.success("Blog added successfully!");
        setTitle('');
        setSubTitle('');
        setImage(null);
        quillRef.current.root.innerHTML = "";
        setCategory("Startup");
        setIsPublished(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  const generateContent = async () => {
    if(!title){
      toast.error("Please enter title first");
    }
      try {
        setLoading(true);
        const {data} = await axios.post('/api/blog/generate',{prompt:title});
        if(data.success){
          quillRef.current.root.innerHTML = parse(data.content);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
      finally{
        setLoading(false);
      }
  };


  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image']
          ]
        }
      });
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        
        {/* Thumbnail */}
        <p>Upload thumbnail</p>
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : '/fileupload.png'}
            alt="Thumbnail"
            className="mt-2 h-16 rounded cursor-pointer"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        {/* Title */}
        <p className='mt-4'>Blog title</p>
        <input 
          type="text" 
          placeholder='Type Here' 
          required 
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' 
          onChange={e=> setTitle(e.target.value)} 
          value={title} 
        />

        {/* SubTitle */}
        <p className='mt-4'>Sub title</p>
        <input 
          type="text" 
          placeholder='Type Here' 
          required 
          className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded' 
          onChange={e=> setSubTitle(e.target.value)} 
          value={subTitle} 
        />

        {/* Blog Description */}
        <p className='mt-4'>Blog Description</p>
        <div className="relative border border-gray-300 rounded mt-2">
          <div ref={editorRef} className="min-h-[150px] p-2"></div>
          <button 
            disabled={loading}
            type="button"
            onClick={generateContent}
            className="absolute bottom-2 right-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
          >
            Generate with AI
          </button>
        </div>

        {/* Category */}
        <p className='mt-4'>Blog category</p>
        <select 
          onChange={e=> setCategory(e.target.value)} 
          value={category}
          className='mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded'
        >
          <option value="">Select Category</option>
          {blogCategories.map((item,index)=>(
            <option key={index} value={item.value}>{item.label}</option>
          ))}
        </select>

        {/* Publish Toggle */}
        <div className='flex gap-2 mt-4'>
          <label className='flex items-center gap-2 mt-4'>
            <input 
              type="checkbox" 
              checked={isPublished} 
              className='scale-125 cursor-pointer'
              onChange={e => setIsPublished(e.target.checked)} 
            />
            <span>Publish</span>
          </label>
        </div>

        {/* Submit Button */}
        <button 
          disabled={isAdding} 
          type="submit" 
          className='mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm'
        >
          {isAdding ? 'Adding...' : 'Add Blog'}
        </button>
      </div>
    </form>
  );
}
