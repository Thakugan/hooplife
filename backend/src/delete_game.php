<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

$app->delete('/game-detail/{GameID}', function (Request $request, Response $response, array $args) {
  $pdo = $this->db->prepare("DELETE FROM games WHERE GameID=:GameID");
  $pdo->bindParam("GameID", $args["GameID"]);
  $pdo->execute();
    return $this->response->withJson($response->getStatusCode());
});
