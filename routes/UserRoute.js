// 4. membuat router dari express router, dan mengirim data getUser dari controller user
import express from "express";
import {
  getUsers,
  getUserById,
  saveUser,
  updateUser,
  deleteUser,
} from "../controllers/UserController.js";
const router = express.Router();
// membuat route api
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", saveUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
