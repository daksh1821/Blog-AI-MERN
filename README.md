📝 Blog AI – MERN Stack + AI Content Generator

An intelligent blogging platform built with MERN (MongoDB, Express, React, Node.js) that allows users to:

✍️ Write blogs with a rich-text editor (Quill)

🤖 Generate blog content using AI assistance

🖼 Upload blog thumbnails & manage categories

🔐 Secure Admin Dashboard to manage blogs & comments

📢 Publish or keep blogs as drafts


🚀 Features

✅ User-friendly Editor – Quill-based rich-text editor
✅ AI Content Generation – Generate blog drafts from titles
✅ Image Upload – Upload thumbnails for each blog
✅ Category System – Organize blogs by categories
✅ Admin Panel – Manage blogs, comments, and dashboard stats
✅ Secure API – Node.js + Express backend with MongoDB

🖥️ Tech Stack

Frontend

⚛️ React + Tailwind CSS

🎨 Quill Editor

🔥 React Hot Toast for notifications

Backend

🟢 Node.js + Express

🗄 MongoDB + Mongoose

🖼 Multer for image uploads

🤖 AI Content Generation API

Other Tools

🔗 Axios for API calls

🌐 REST API integration


Project Structure:-
Blog-AI-MERN/
│── blog-ai/             # React frontend
│   ├── src/
│   │   ├── components/  # UI components
│   │   ├── pages/       # Pages (Admin, Blogs, etc.)
│   │   ├── context/     # Global context
│   │   ├── data/        # Static data (categories, etc.)
│
│── server/              # Backend
│   ├── routes/          # API routes
│   ├── models/          # Mongoose models
│   ├── controllers/     # API logic
│   └── app.js           # Main server file
│
└── README.md

⚡ Getting Started
1. Clone the repo
git clone https://github.com/your-username/Blog-AI-MERN.git
cd Blog-AI-MERN

2️. Install dependencies
# Frontend
cd blog-ai
npm install

# Backend
cd ../server
npm install

3️. Setup Environment Variables

Create a .env file inside server/ with:

MONGO_URI=your_mongodb_connection
PORT=5000
AI_API_KEY=your_api_key_here

4️. Run the project
# Run frontend
cd blog-ai
npm start

# Run backend
cd ../server
npm run dev

⭐ Show your support

If you like this project, give it a star ⭐ on GitHub – it really helps!
