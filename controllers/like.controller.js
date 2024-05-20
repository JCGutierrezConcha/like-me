import { modelLike } from "../models/like.model.js"

const getAllPosts = async (req, res) => {
    try {
        const posts = await modelLike.findAll()
        return res.json(posts)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

const createPost = async (req, res) => {
    try {
        const { usuario, url, descripcion } = req.body

        if (!usuario || !url || !descripcion)
            return res.status(400).json({ ok: false, msg: "Todos los campos obligatorios" })
        const likes = 0
        const newPost = await modelLike.create({ usuario, url, descripcion, likes })
        return res.status(201).json(newPost)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

const updatePost = async (req, res) => {
    try {
        const { id } = req.query
        const newLike = await modelLike.updateLike(id)
        return res.json(newLike)
    } catch (error) {
        console.error(error)
        return res.status(500).json({ ok: false, msg: "Error de servidor" })
    }
}

export const controllerLike = {
    getAllPosts,
    createPost,
    updatePost
}