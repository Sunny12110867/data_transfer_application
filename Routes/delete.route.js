import { Router } from "express";
import deleteData from "../controller/deletedata.controller.js";

const router = Router()

router.route('/:id')
  .delete(deleteData);

export default router
