import React, { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // You can add your login API logic here
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      <div className='w-full max-w-sm p-6 max-md:m-6 border border-primary/30 shadow-xl shadow-primary/15 rounded-lg'>
        <div className='flex flex-col items-center justify-center'>
          <img className='w-40' src="logo.png" alt="logo" />
          <div className='w-full py-6 text-center font-bold'>
            <h1><span className='text-primary'>Admin</span> Login</h1>
            <p className='font-light'>Enter your credentials to access the admin panel</p>
          </div>

          <form onSubmit={handleSubmit} className='mt-6 w-full sm:max-w-md text-gray-600'>
            {/* Email */}
            <div className='flex flex-col'>
              <label>Email</label>
              <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
                placeholder='Enter your email' 
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary' 
              />
            </div>

            {/* Password */}
            <div className='flex flex-col'>
              <label className='mt-5'>Password</label>
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
                placeholder='Enter your password' 
                className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary' 
              />
            </div>

            {/* Button */}
            <button 
              type="submit"
              className='w-full py-3 font-medium mt-10 bg-primary text-white rounded cursor-pointer hover:bg-primary/90 transition-all'
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
