<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// Show specific game
$app->get('/game-detail/{id}', function(Request $request, Response $response, array $args){
  $pdo = $this->db->prepare("SELECT * FROM games WHERE GameID=:id");
  $pdo->bindParam("id", $args["id"]);
  $pdo->execute();
  $game = $pdo->fetchAll();
	return $this->response->withJson($game);
});

// Submit a new game
$app->post('/new-game', function(Request $request, Response $response){
  $input = $request->getParsedBody();
  $pdo = $this->db->prepare("INSERT INTO games (picture_url, location, description, time_created, UserID, date_of_game) VALUES (:picture_url, :location, :description, CURRENT_TIMESTAMP, :UserID, :date_of_game)");
  $pdo->bindParam("picture_url", $input["picture_url"]);
  $pdo->bindParam("location", $input["location"]);
  $pdo->bindParam("description", $input["description"]);
  $pdo->bindParam("UserID", $input["UserID"]);
  $pdo->bindParam("date_of_game", $input["date_of_game"]);
  $pdo->execute();
        return $this->response->withJson($input);
});

// Update game details
$app->put('/game-detail/{GameID}', function(Request $request, Response $response, array $args) {
  $input = $request->getParsedBody();
  $pdo = $this->db->prepare("UPDATE games SET picture_url=:picture_url, location=:location, description=:description, date_of_game=:date_of_game WHERE GameID=:GameID");
  $pdo->bindParam("GameID", $args["GameID"]);
  $pdo->bindParam("picture_url", $input["picture_url"]);
  $pdo->bindParam("location", $input["location"]);
  $pdo->bindParam("description", $input["description"]);
  $pdo->bindParam("date_of_game", $input["date_of_game"]);
  $pdo->execute();
  $input['GameID'] = $args['GameID'];
        return $this->response->withJson($input);
});
