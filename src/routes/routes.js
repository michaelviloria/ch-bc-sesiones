import { Router } from "express";
import { home, login, destroy } from "../controllers/controllers.js";
import auth from "../middlewares/auth.js";
const router = Router();

router.get("/", auth, home);

router.post("/", login);

// router.get("/logout", logout);

router.post("/logout", destroy);

export default router;
