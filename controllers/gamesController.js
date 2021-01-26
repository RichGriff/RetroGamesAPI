import asyncHandler from "express-async-handler";
import Game from "../models/gameModel.js";

// @desc    Fetch all games
// @route   GET /api/games
// @access  Public
const getAllGames = asyncHandler(async (req, res) => {
  const games = await Game.find({});
  res.json(games);
});

// @desc    Fetch single game
// @route   GET /api/games/:id
// @access  Public
const getGameById = asyncHandler(async (req, res) => {
  const game = await Game.findById(req.params.id);
  if (game) {
    res.json(game);
  } else {
    res.status(404);
    throw new Error("Game not found");
  }
});

export { getAllGames, getGameById };
