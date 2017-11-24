<?php

use Slim\Http\Request;
use Slim\Http\Response;

$app->post('/new-location', function (Request $request, Response $response, array $args) {

    $pdo = $this->db;
    

    if ($_SERVER['REQUEST_METHOD'] == 'POST')
	{ 

    $data = json_decode(file_get_contents("php://input"));
    $userid = $data->userid;
    $picture_url = $data->picture_url;
    $des = $data->descriptions;
    $address = $data->address;
}

if(!isset($picture_url) || !isset($userid) || !isset($address) || !isset($des) ||
	empty($picture_url) || empty($userid) || empty($des) || empty($address)) {
   
      //error message forbidden
      return $response->withStatus(403);
    }
   
   // Check if the user  exists
   $stmt = $pdo->prepare('SELECT * FROM users WHERE userid=:userid');
   $stmt->bindParam("userid", $userid);
   $stmt->execute();
   $row = $stmt->fetch(PDO::FETCH_ASSOC);
   if($row== 0)
   {
  
    //error message bad request
   return $response->withStatus(400);
   }

     //Check if the address already exsists
     $stmt = $pdo->prepare('SELECT * FROM location WHERE address=:address');
     $stmt->bindParam("address", $address);
     $stmt->execute();
     $row = $stmt->fetch(PDO::FETCH_ASSOC);
     if($row)

     {
     //error message bad reqest
     return $response->withStatus(400);
     }

    //primary key locationid
    $stmt = $pdo->prepare(
      "INSERT INTO location (
        picture_url, 
        address, 
        description,
        date_created, 
        creator_userid,
        approved)
    VALUES(:picture_url, :address, :des, CURRENT_TIMESTAMP, :userid, 0)"
    );
   
 // Add the entry to the array once all the fields have been verified
    $stmt->bindParam("picture_url", $picture_url);
    $stmt->bindParam("address", $address);
    $stmt->bindParam("des", $des);
    $stmt->bindParam("userid", $userid);
    $stmt->execute();
    return $response->withStatus(200);
});

