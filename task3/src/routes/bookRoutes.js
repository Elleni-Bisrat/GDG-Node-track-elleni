import express from "express";
import bookController from "../controllers/bookController.js";
const router = express.Router();

router.get("/", bookController.getBooks);
router.get("/:id", bookController.getbyID);
router.post("/", bookController.createBooks);

export default router;
