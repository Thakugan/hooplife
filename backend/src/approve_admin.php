<?php

header('Content-type: application/json');

use Slim\Http\Request;
use Slim\Http\Response;

//a user that is an admin can make another user admin
$app->get('/setadmin[/{AdminUsername}[/{username}]]', function($request, $response, $args){
  
  $check = $this->db->prepare("SELECT *  FROM users where username=:AdminUsername AND isAdmin='1'");
  $check->bindParam("AdminUsername", $args['AdminUsername']);
  $check->execute();
  $row = $check->rowCount();
 
  if (!$row) {
 	return $response->withStatus(403);
 }
  
  else
  
  $check = $this->db->prepare("UPDATE users SET isAdmin='1' WHERE username=:username ");
  $check->bindParam("username", $args['username']);
  $check->execute();
  
  return $response->withStatus(200);

});

