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
