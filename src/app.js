import express from "express";
import authRoutes from "./routes/authRoutes.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
// import listingRoutes from
// import bookingRoutes from
// import paymentRoutes from
// import reviewRoutes from

// configuring dotenv
dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
// routes
app.use("/api/auth", authRoutes);
// app.use('/api/listings', listingRoutes);
// app.use('/api/bookings', bookingRoutes);
// app.use('/api/payments', paymentRoutes);
// app.use('/api/reviews', reviewRoutes);

export default app;
