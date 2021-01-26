import express from "express";

import { getAllGames, getGameById } from "../controllers/gamesController.js";

const router = express.Router();

router.route("/").get(getAllGames);
router.route("/:id").get(getGameById);

export default router;
