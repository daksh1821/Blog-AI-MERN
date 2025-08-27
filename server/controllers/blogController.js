import fs from 'fs';
import imageKit from '../configs/imageKit.js';
import Blog from '../models/blog.js';
import Comment from '../models/Comment.js';
export const addBlog = async(req,res)=>{
    try {
        const{ title, description, subTitle, category, isPublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;
        if(!title || !description||!category||!imageFile){
            return res.json({success:false, message:"Missing required feilds"});
        }

        const fileBuffer = fs.readFileSync(imageFile.path);
        const resposne = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: '/blogs'
        });

        const optimizedImageURL = imageKit.url({
            path:resposne.filePath,
            transformation:[
                {quality: 'auto'},
                {format:'webp'},
                {width:'1280'}
            ]
        });

        const image = optimizedImageURL;
        await Blog.create({
            title,
            description,
            subTitle,
            category,
            image,
            isPublished
        });
        res.json({success:true, message:"Blog added successfully"});

    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const getAllBlogs = async(req,res)=>{
    try {
        const blogs = await Blog.find({isPublished:true});
        res.json({success:true, blogs});
    } catch (error) {
        res.json({success:false,message:error.message});        
    }
}

export const getBlogById = async(req,res)=>{
    try {
        const{blogId} = req.params;
        const blog = await Blog.findById(blogId);
        if(!blogId){
            return res.json({success:false,message:"Blog not found"});
        }
        res.json({success:true,blog});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export const deleteBlogById = async(req,res)=>{
    try {
        const{id} = req.body;
        await Blog.findByIdAndDelete(id);
        await Comment.deleteMany({blogs:id});
        res.json({success:true,message:'Blog deleted Successfully'});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export const togglePublish = async(req,res)=>{
    try {
        const{id} = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success:true,message:'Blog Status Updated'});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export const addComment = async(req,res)=>{
    try {
        const {blog,name,content} = req.body;
        await Comment.create({blog,name,content});
        res.json({success:true,message:'comment added for review'});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

export const getBlogComments = async(req,res)=>{
    try {
        const{blogId} = req.body;
        const comments = await Comment.find({blog:blogId,isApproved:true}).sort({createdAt:-1});
        res.json({success:true,comments});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}