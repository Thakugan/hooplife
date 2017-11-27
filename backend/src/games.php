<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// Show list of games nearby
$app->get('/games', function(Request $request, Response $response, array $args){
  $pdo = $this->db->prepare("SELECT * FROM games ORDER BY date_of_game");
  $pdo->execute();
  $games = $pdo->fetchAll();
  //if(empty($games)) {
    return $this->response->withJson($games);
    // return $response->withStatus(200);
  //} else {
    //return $response->withStatus(404);
  //}
});


