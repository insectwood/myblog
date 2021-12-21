import express from 'express'
import Post from "../../models/post"

const router = express.Router()

router.get('/', async(req, res)=> {
    const result = await Post.find()
    console.log(result, "Find all posts")
    res.json(result)
})

router.post('/',async(req, res, next)=> {
    try{
        console.log(req, "req")
        const {title, contents, file_url, creator} = req.body
        const newPost = await Post.create({
            title: title,
            contents: contents,
            file_url: file_url,
            creator: creator});

        res.json(newPost)
    }catch (e) {
        console.log(e)
    }
})

export default router