import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRouter from "./routes/auth.js";
import usersRouter from "./routes/users.js";
import hotelsRouter from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";

const app = express();
dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGO);
		console.log("Connected to MongoDB.");
	} catch (error) {
		throw error;
	}
};

mongoose.connection.on("disconnected", () => {
	console.log("MongoDB disconnected.");
});

// Middleware
app.use("/api/auth", authRouter);
app.use("/api/users", authRouter);
app.use("/api/hotels", authRouter);
app.use("/api/rooms", authRouter);

app.listen(3000, () => {
	connect();
	console.log("Connected to backend server!");
});
