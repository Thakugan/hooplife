<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

//a user that is an admin can make another user admin
$app->put('/setadmin[/{AdminID}[/{userid}]]', function($request, $response, $args){

  $check = $this->db->prepare("SELECT *  FROM users where userid=:AdminID AND isAdmin='1'");
  $check->bindParam("AdminID", $args['AdminID']);
  $check->execute();
  $row = $check->rowCount();

 if (!$row) {
 	return $response->withStatus(403);
 }
 else
  $check = $this->db->prepare("UPDATE users SET isAdmin='1' WHERE userid=:userid ");
  $check->bindParam("userid", $args['userid']);
  $check->execute();
  return $response->withStatus(200);

});
