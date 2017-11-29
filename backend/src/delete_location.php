<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

$app->delete('/location-delete/[{locationID}]', function (Request $request, Response $response, array $args) {
  $pdo = $this->db->prepare("DELETE FROM location WHERE locationID=:locationID");
  $pdo->bindParam("locationID", $args["locationID"]);
  $pdo->execute();
   // return $this->response->withJson($response->getStatusCode());
   return $response->withStatus(200);
});
