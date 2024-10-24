import { addNewPlayer, getPlayers } from "../controllers/playerControllers";

const routes = (app) => {
  app.route("/players").post(addNewPlayer);
  app.route("/players").get(getPlayers);
};

export default routes;
