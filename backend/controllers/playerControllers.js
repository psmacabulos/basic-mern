import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = async (req, res) => {
  let newPlayer = new Player(req.body);

  try {
    const player = await newPlayer.save();
  } catch (err) {
    res.send(err);
  }
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    if (players) {
      console.log(players);
    }
  } catch (error) {
    res.send(error);
  }
};
