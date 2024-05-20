import { controllerLike } from "../controllers/like.controller.js"
import { Router } from "express"

const router = Router()

router.get("/posts", controllerLike.getAllPosts)
router.post("/post", controllerLike.createPost)
router.put("/post", controllerLike.updatePost)

export default router