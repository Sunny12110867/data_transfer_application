import { Router } from "express";
import ShowController from "../controller/ShowController.js";

const router = Router();

router.route('/').get(ShowController);

export default router