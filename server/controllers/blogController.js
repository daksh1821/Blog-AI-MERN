import fs from 'fs';
import imageKit from '../configs/imageKit.js';
import Blog from '../models/blog.js';
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