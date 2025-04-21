import express from "express";
import {
  getAllProduct,
  getSingleProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getSingleProduct);
router.post("/", addNewProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
