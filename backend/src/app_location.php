<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

//approve loc
$app->put('/locapprove[/{AdminID}[/{locid}]]', function($request, $response, $args){

  $check = $this->db->prepare("SELECT *  FROM users where userid=:AdminID AND isAdmin='1'");
  $check->bindParam("AdminID", $args['AdminID']);
  $check->execute();
  $row = $check->rowCount();

 if (!$row) 
 {
 	return $response->withStatus(403);
 }
 
 if ($row) 
 {
  $check = $this->db->prepare("SELECT *  FROM location where locationID=:locid");
  $check->bindParam("locid", $args['locid']);
  $check->execute();
  $row1 = $check->rowCount();
  if (!$row1) 
   {
	return $response->withStatus(404);
   }
  else
  {
  $check = $this->db->prepare("UPDATE location SET approved='1' WHERE locationID=:locid ");
  $check->bindParam("locid", $args['locid']);
  $check->execute();
  return $response->withStatus(200);
  }
  }

});
