<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

$app->delete('/delete-game/{GameID}', function (Request $request, Response $response, array $args) {
  $pdo = $this->db->prepare("DELETE FROM games WHERE GameID=:GameID");
  $pdo->bindParam("GameID", $args["GameID"]);
  $pdo->execute();
  $count = $pdo->rowCount();
  if ($count > 0) {
    return $this->response->withStatus(200);
  } else {
    return $this->response->withStatus(404);
  }
});
