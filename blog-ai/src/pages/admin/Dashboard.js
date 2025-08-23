import React, { useState } from 'react'
import { useEffect } from 'react';
import BlogTableItem from '../../components/admin/BlogTableItem';

export default function Dashboard() {

  // Random dashboard mock data
const dashboard_data = {
  blogs: 12,
  comments: 58,
  drafts: 4,
  recentblogs: [
    {
      id: 1,
      title: "The Future of AI in Blogging",
      createdAt: "2025-08-10",
      views: 320,
    },
    {
      id: 2,
      title: "Top 10 Tips for Writing Engaging Content",
      createdAt: "2025-08-05",
      views: 210,
    },
    {
      id: 3,
      title: "How to Optimize Blogs for SEO in 2025",
      createdAt: "2025-07-28",
      views: 415,
    },
    {
      id: 4,
      title: "Why Personal Branding Matters for Bloggers",
      createdAt: "2025-07-20",
      views: 180,
    },
  ],
};

  const[dashboardData,setDashboardData] = useState({
    blogs:0,
    comments:0,
    drafts:0,
    recentblogs:[]
  })

  // Simulating fetching data
  const fetchDashboard = async ()=>{
    setDashboardData(dashboard_data)
  }
  useEffect(()=>{
    fetchDashboard();
  },[])
  return (
    <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>
      <div className='flex flex-wrap gap-5'>
        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hove:scale-105 transition-all'>
          <img className='w-12' src="dashboardicon.png" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
            <p className='text-gray-400 font-light'>Blogs</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hove:scale-105 transition-all'>
          <img className='w-12' src="commentsicon.png" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
            <p className='text-gray-400 font-light'>Comments</p>
          </div>
        </div>

        <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hove:scale-105 transition-all'>
          <img className='w-12' src="draftsicon.png" alt="" />
          <div>
            <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
            <p className='text-gray-400 font-light'>Drafts</p>
          </div>
        </div>
      </div>

      <div>
        <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
          <img className='w-10' src="latesticon.png" alt="" />
          <p>Latest Blogs</p>
        </div>
        <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
          <table className='w-full text-sm text-gray-500'>
            <thead className='yexy-xs text-gray-600 text-left uppercase'>
              <tr>
                <th scope='col' className='px-2 py-4 xl:px-6'>S No.</th>
                <th scope='col' className='px-2 py-4'>Blog Title</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Date</th>
                <th scope='col' className='px-2 py-4 max-sm:hidden'>Status</th>
                <th scope='col' className='px-2 py-4'>Action</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.recentblogs.map((blog,index)=>{
                return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index +1}/>
              })}
            </tbody>
          </table>
        </div>
      </div>
      
    </div>
  )
}
