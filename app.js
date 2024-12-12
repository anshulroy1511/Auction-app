import { config } from "dotenv";
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
config({
    path:"./config/config.env",
});

// use to connect frontend and backend by cors package
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
}));

// middleware
app.use(cookieParser());
app.use(express.json());

export default app;