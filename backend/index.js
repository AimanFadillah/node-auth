import express from "express";
import route from "./routes/index.js";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"; 

dotenv.config();

const app = express();

app.use(cors({
    credentials:true,
    origin:"http://localhost:3000"
}))
app.use(cookieParser());
app.use(fileUpload());
app.use(express.json()); 
app.use(route);

app.listen(5000,() => console.log("Server Berjalan di port 5000")) 