import React, { useState } from 'react';
import BlogCard from './BlogCard';
import blog_data from '../data/blog_data';

export default function BlogList() {
  const blogCategories = ["All", "Technology", "StartUp", "LifeStyle", "Finance"];
  
  const [menu, setMenu] = useState("All"); // Match case with array

  return (
    <div>
      <div className="flex justify-center gap-4 sm:gap-8 my-10 relative">
        {blogCategories.map((item) => (
          <button
            key={item}
            onClick={() => setMenu(item)}
            className={`cursor-pointer text-sm sm:text-base font-semibold px-4 py-2 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.15)] transition-all duration-300 mt-20
              ${menu === item ? "bg-primary text-white" : "bg-white text-gray-700 hover:bg-gray-100"}
            `}
          >
            {item}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mb-24 mx-8 sm:mx-16 xl:mx-40 mt-20'>
        {blog_data.filter((blog)=>menu==="All"?true:blog.category===menu).map((blog)=><BlogCard key={blog._id} blog ={blog}/>)}
      </div>
    </div>
  );
}
