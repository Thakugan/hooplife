<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

//show a specfic rsvp for a user
$app->get('/rsvp/user/[{userid}]', function(Request $request, Response $response, array $args){
 // $pdo = $this->db->prepare("SELECT * FROM rsvp WHERE userid=:userid");
  $pdo = $this->db->prepare("SELECT * FROM games natural join rsvp
				WHERE userid = :userid");
  $pdo->bindParam("userid", $args["userid"]);
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
    $userid = $data->userid;
}
  $check = $this->db->prepare("SELECT * FROM rsvp where GameID=:gameid AND userid=:userid");
  $check->bindParam("gameid", $gameid);
  $check->bindParam("userid", $userid);
  $check->execute();
  $row = $check->rowCount();

 if ($row) {
    
	return $response->withStatus(401); }
 else {
  $pdo = $this->db->prepare("INSERT INTO rsvp(GameID, userid) VALUES (:gameid, :userid)");
  $pdo->bindParam("userid", $userid);
  $pdo->bindParam("gameid", $gameid);
  $pdo->execute();
  return $response->withStatus(200);}

});
