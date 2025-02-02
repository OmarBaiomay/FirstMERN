import express from "express";
import {
  createTestimonial,
  getAllTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
} from "../controllers/testimonial.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import upload from "../lib/multer.js";

const router = express.Router();

// Create a new testimonial
router.post("/testimonials",protectRoute, upload.single("userImage"), createTestimonial);

// Get all testimonials
router.get("/testimonials", getAllTestimonials);

// Get a single testimonial by ID
router.get("/testimonials/:id", getTestimonialById);

// Update a testimonial
router.put("/testimonials/:id",protectRoute, upload.single("userImage"), updateTestimonial);

// Delete a testimonial
router.delete("/testimonials/:id",protectRoute, deleteTestimonial);

export default router;
