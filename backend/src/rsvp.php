<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;


//show a specfic rsvp for a user
$app->get('/rsvp/user/[{username}]', function(Request $request, Response $response, array $args){
 // $pdo = $this->db->prepare("SELECT * FROM rsvp WHERE userid=:userid");
  $pdo = $this->db->prepare("SELECT * FROM games natural join rsvp
				WHERE username = :username");
  $pdo->bindParam("username", $args["username"]);
  $pdo->execute();
  $rsvpGame = $pdo->fetchAll();
if (!$rsvpGame)
        {
        return $response->withStatus(404);
}
   else {
        return $this->response->withJson($rsvpGame);
}
});


//show a specfic rsvp for a user
$app->get('/rsvp/game/[{GameID}]', function(Request $request, Response $response, array $args){
 // $pdo = $this->db->prepare("SELECT * FROM rsvp WHERE userid=:userid");
 // $pdo = $this->db->prepare("SELECT * FROM games natural join rsvp
 //                               WHERE GameID = :GameID");
   $pdo = $this->db->prepare("SELECT username FROM rsvp WHERE GameID=:GameID");
  $pdo->bindParam("GameID", $args["GameID"]);
  $pdo->execute();
  $rsvpGame = $pdo->fetchAll();
if (!$rsvpGame)
        {
        return $response->withStatus(404);
}
   else {
        return $this->response->withJson($rsvpGame);
}
});


//deletes a specifice RSVP 
$app->delete('/delete-rsvp/{username}/{GameID}', function(Request $request, Response $response, array $args){

  $pdo = $this->db->prepare("DELETE FROM rsvp WHERE GameID=:GameID AND username=:username");
  $pdo->bindParam("GameID", $args["GameID"]);
  $pdo->bindParam("username", $args["username"]);
  $pdo->execute();
  $count = $pdo->rowCount();

  if ($count > 0) {
//    return $this->response->withStatus(200);

	 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);

 } else {

    return $this->response->withStatus(404);

  }



});



//get a specifiv rsvp 
$app->get('/rsvp/[{rsvpid}]', function(Request $request, Response $response, array $args){
 // $pdo = $this->db->prepare("SELECT * FROM rsvp WHERE userid=:userid");
 // $pdo = $this->db->prepare("SELECT r.*, g.* 
   //				FROM rsvp as r INNER JOIN games as g
  //                              WHERE rsvpid = :rsvpid");
 $pdo = $this->db->prepare("SELECT r.GameID, g.*
                                FROM rsvp as r natural join games as g
                                WHERE rsvpid = :rsvpid"); 
 $pdo->bindParam("rsvpid", $args["rsvpid"]);
  $pdo->execute();
  $rsvpGamebyID = $pdo->fetchAll();
if (!$rsvpGamebyID)
        {
        return $response->withStatus(404);
}
   else {
        return $this->response->withJson($rsvpGamebyID);
}
});

//post reservation
$app->post('/rsvp', function(Request $request, Response $response, array $args){

 // $pdo = $this->db->prepare("SELECT * FROM rsvp WHERE userid=:userid");
     
 if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $data = json_decode(file_get_contents("php://input"));
    $gameid = $data->GameID;
    $username = $data->username;
}
  $check = $this->db->prepare("SELECT * FROM rsvp where GameID=:gameid AND username=:username");
  $check->bindParam("gameid", $gameid);
  $check->bindParam("username", $username);
  $check->execute();
  $row = $check->rowCount();

 if ($row) {
    
	return $response->withStatus(401); }
 else {
  $pdo = $this->db->prepare("INSERT INTO rsvp(GameID, username) VALUES (:gameid, :username)");
  $pdo->bindParam("username", $username);
  $pdo->bindParam("gameid", $gameid);
  $pdo->execute();

//  return $response->withStatus(200);}
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
}
});


