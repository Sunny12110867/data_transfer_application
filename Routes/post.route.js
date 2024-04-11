import { Router } from "express";
import { upload_data } from "../controller/post-data.controller.js";

const router = Router()

router.route('/').post(upload_data);

export default router
