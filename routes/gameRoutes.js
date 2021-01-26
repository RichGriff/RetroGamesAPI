import express from "express";

import { getAllGames, getGameById, getGameByPlatform } from "../controllers/gamesController.js";

const router = express.Router();

router.route("/").get(getAllGames);
router.route("/platform/:platform").get(getGameByPlatform);
router.route("/:id").get(getGameById);

export default router;
