import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import adminRouter from './routes/adminRoutes.js';
import blogRouter from './routes/blogRoutes.js';
const app = express();
await connectDB()
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3000;  
app.get('/', (req,res)=>{
    res.send('Welcome to the server!');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Import routes
app.use('/api/admin', adminRouter);
app.use('/api/blog', blogRouter);

  


export default app;