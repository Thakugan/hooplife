<?php

header('Content-type: application/json');

use Slim\Http\Request;
use Slim\Http\Response;

// Show list of approved location
$app->get('/approved-location', function(Request $request, Response $response, array $args){
  $pdo = $this->db->prepare("SELECT * FROM location where approved =1 ORDER BY date_created");
  $pdo->execute();
  $locations = $pdo->fetchAll();
  
  return $this->response->withJson($locations);
});

// Show list of un-approved location
$app->get('/non-approved-location', function(Request $request, Response $response, array $args){
  $pdo = $this->db->prepare("SELECT * FROM location where approved =0 ORDER BY date_created");
  $pdo->execute();
  $locations = $pdo->fetchAll();
  
  return $this->response->withJson($locations);
        
});


// Show specific location
$app->get('/location/{locationID}', function(Request $request, Response $response, array $args){
  $pdo = $this->db->prepare("SELECT * FROM location WHERE locationID=:locationID");
  
  $pdo->bindParam("locationID", $args["locationID"]);
  $pdo->execute();
  $location = $pdo->fetchAll();
if (!$location)
        {
        return $response->withStatus(404);
}
   else {
        return $this->response->withJson($location);
}


});
