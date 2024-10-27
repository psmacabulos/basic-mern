import mongoose from "mongoose";
import { PlayerSchema } from "../models/playerModel";

// define the Player model to be used in the controllers
const Player = mongoose.model("Player", PlayerSchema);

export const addNewPlayer = async (req, res) => {
  let newPlayer = new Player(req.body);

  try {
    const player = await newPlayer.save();
    res.json(player);
  } catch (err) {
    res.send(err);
  }
};

export const getPlayers = async (req, res) => {
  try {
    const players = await Player.find({});
    res.json(players);
  } catch (error) {
    res.send(error);
  }
};

export const getPlayerId = async (req, res) => {
  try {
    const player = await Player.findById(req.params.playerId);
    res.json(player);
  } catch (error) {
    res.send(error);
  }
};

export const updatePlayerId = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.playerId, req.body, { new: true });
    if (!player) res.json("Player not found");
    else res.json(player);
  } catch (error) {
    res.send(error);
  }
};

export const deletePlayerId = async (req, res) => {
  try {
    const player = await Player.findByIdAndDelete(req.params.playerId);
    if (!player) res.json({ message: "Player not found" });
    else res.json({ message: "Successfully deleted player" });
  } catch (error) {
    res.send(error);
  }
};
