const express = require("express")
const router = express.Router()
const postsService = require("../service/postsService")

router.get('/posts', async function (req, res)  {
    try {
        const posts = await postsService.getPosts()
        res.json(posts)
    } catch (e) {
      next(e)  
    }
})

router.post('/posts', async function (req, res) {
    const post = req.body
    try {
        const newPost = await postsService.savePost(post)
        res.status(201).json(newPost)
    } catch (e) {
        if (e.message === 'Post already exists') {
            res.status(409).send(e.message)
        }
        else {
            res.status(500).send(e.message)
        }
    }
})

router.put('/posts/:id', async function (req, res) {
    const post = req.body
    try {
        await postsService.updatePost(req.params.id, post)
        res.status(204).end()
    } catch (e) {
        if (e.message === 'Post not found') {
            res.status(404).send(e.message)
        }
        else {
            res.status(500).send(e.message)
        }
    }
})

router.delete('/posts/:id', async function (req, res) {
    try {
        await postsService.deletePost(req.params.id)
        res.status(204).end()
    } catch (e) {
        if (e.message === 'Post not found') {
            res.status(404).send(e.message)
        }
        else {
            res.status(500).send(e.message)
        }
    }
})

module.exports = router