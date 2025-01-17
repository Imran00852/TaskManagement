import { Router } from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import {
  newTask,
  getAllTasks,
  updateTask,
  deleteTask,
} from "../controllers/taskControllers.js";

const router = Router();

router.post("/new", isAuthenticated, newTask);
router.get("/all", isAuthenticated, getAllTasks);
router
  .route("/:id")
  .put(isAuthenticated, updateTask)
  .delete(isAuthenticated, deleteTask);

export default router;
