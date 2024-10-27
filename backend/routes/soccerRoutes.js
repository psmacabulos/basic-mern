import {
  addNewPlayer,
  deletePlayerId,
  getPlayerId,
  getPlayers,
  updatePlayerId,
} from "../controllers/playerControllers";
import express from "express";

const router = express.Router();

router.get("/player/:playerId", getPlayerId);
router.get("/players", getPlayers);
router.post("/players", addNewPlayer);
router.put("/player/:playerId", updatePlayerId);
router.delete("/player/:playerId", deletePlayerId);

export default router;
