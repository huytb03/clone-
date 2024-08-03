import express from "express";
import postController from "../controllers/post.js";
import Notification from "../controllers/noti.js";

const router = express.Router();
router.post("/create-post", postController.createPost);
router.post("/remove-post/:id", postController.removePost);
router.post("/edit-post/:id", postController.editPost);
router.post("/get-post/:id", postController.getIdPost);
router.post("/tymPost-post/:id", postController.tymPost);
router.post("/getAll-post", postController.getAllPosts);
router.post("/comment-post/:id", postController.commentPost);

router.post("/remove-tym-post/:id", postController.removeTymPost);

//
router.post("/get-noti-post/:id", Notification.getNotiById);
router.post("/get-noti-user/:id", Notification.getAllNotiByUser);

export default router;
