import { Router } from "express";
import {SignUp,Login,logout} from "../controllers/auth.controller.js";
import protect from "../middleware/auth.middleware.js";
const authRouter = Router();

authRouter.post("/signup",SignUp);
authRouter.post("/login", Login);
authRouter.get("/dashboard",protect,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to dashboard",
        user:req.user
    })
})
authRouter.post("/logout", logout);

export default authRouter;
