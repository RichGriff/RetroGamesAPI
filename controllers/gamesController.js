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

// @desc    Fetch games by platform
// @route   GET /api/games?platform=platform
// @access  Public
const getGameByPlatform = asyncHandler(async (req, res) => {
  const platform = req.params.platform;
  const game = await Game.find({ platforms: platform });

  if (game.length !== 0) {
    res.json(game);
  } else {
    res.status(404);
    throw new Error(`No Games found on ${platform}`);
  }
});

export { getAllGames, getGameById, getGameByPlatform };
