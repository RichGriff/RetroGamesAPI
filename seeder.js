import mongoose from "mongoose";
import dotenv from "dotenv";
import color from "colors";
import connectDB from "./config/db.js";

import games from "./data/gamesData.js";

import Game from "./models/gameModel.js";

dotenv.config();
connectDB();

// Used to import data into the Database as well as clear
const importData = async () => {
  try {
    // Clear Database
    await Game.deleteMany();

    // Insert Games
    await Game.insertMany(games);

    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  // destroyData();
} else {
  importData();
}
