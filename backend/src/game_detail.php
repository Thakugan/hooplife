<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// Show specific game
$app->get('/game/{id}', function(Request $request, Response $response, array $args){
  $pdo = $this->db->prepare("SELECT * FROM games WHERE GameID=:id");
  $pdo->bindParam("id", $args["id"]);
  $pdo->execute();
  $game = $pdo->fetchAll();

  if (!$game)
        {
        return $response->withStatus(404);
}
   else {

        return $this->response->withJson($game);
}

});

// Submit a new game
$app->post('/new-game', function(Request $request, Response $response){
  $input = $request->getParsedBody();
  $pdo = $this->db->prepare("INSERT INTO games (picture_url, description, time_created, creator_username, date_of_game, minimum_rank, locationID) VALUES (:picture_url, :description, CURRENT_TIMESTAMP, :creator_username, :date_of_game, :minimum_rank, :locationID)");
  $pdo->bindParam("picture_url", $input["picture_url"]);
  $pdo->bindParam("locationID", $input["locationID"]);
  $pdo->bindParam("description", $input["description"]);
  $pdo->bindParam("creator_username", $input["creator_username"]);
  $pdo->bindParam("date_of_game", $input["date_of_game"]);
  $pdo->bindParam("minimum_rank", $input["minimum_rank"]);
  $pdo->execute();
        return $this->response->withStatus(200);
});

// Update game details
$app->put('/game/{GameID}/edit', function(Request $request, Response $response, array $args) {
  $input = $request->getParsedBody();
  $pdo = $this->db->prepare("UPDATE games SET picture_url=:picture_url, locationID=:locationID, description=:description, time_created=CURRENT_TIMESTAMP, date_of_game=:date_of_game, minimum_rank=:minimum_rank  WHERE GameID=:GameID");
  $pdo->bindParam("GameID", $args["GameID"]);
  $pdo->bindParam("picture_url", $input["picture_url"]);
  $pdo->bindParam("locationID", $input["locationID"]);
  $pdo->bindParam("description", $input["description"]);
  $pdo->bindParam("date_of_game", $input["date_of_game"]);
  $pdo->bindParam("minimum_rank", $input["minimum_rank"]);
  $pdo->execute();
        return $this->response->withStatus(200);
});
