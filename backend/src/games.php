<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// Show list of games nearby
$app->get('/games', function($request, $response, array $args){

  $pdo = $this->db->prepare("SELECT * FROM games");
  $pdo->execute();
  $games = $pdo->fetchAll();
  
  return $this->response->withJson($games);
});


