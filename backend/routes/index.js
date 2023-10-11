import express from "express";
import {getUsers,register,login,logout} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const route = express.Router();

route.get("/users",verifyToken,getUsers) 
route.post("/users",register)
route.post("/login",login)
route.delete("/logout",logout)
route.get("/token",refreshToken)

export default route;