import {
  addNewPlayer,
  getPlayers,
  getPlayer,
  updatePlayer,
  deletePlayer
} from "../controllers/playerControllers";

const routes = app => {
  app
    .route("/players")
    .post(addNewPlayer)
    .get(getPlayers);

  app
    .route("/player/:id")
    .get(getPlayer)
    .put(updatePlayer)
    .delete(deletePlayer);
};

export default routes;
