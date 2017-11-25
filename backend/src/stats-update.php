<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// update a user ranking
$app->put('/rank-update/[{uid}]', function(Request $request, Response $response, array $args){                                                                                                        
  
  $data = json_decode(file_get_contents("php://input"));
  $ranking = $data->ranking;
  
 //  $input = $request->getParsedBody();
 //  $pdo->bindParam("ranking", $args["ranking"]);
  // $pdo->execute();
  // $input['ranking'] = $args['ranking'];
  if( !isset($ranking) || empty($ranking)){
  
  return $response->withStatus(403);
  }
  
  $pdo = $this->db->prepare('SELECT *  FROM users WHERE userid=:uid');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->execute();
  $row = $pdo->rowCount();
     
   if (!$row)
        {
        return $response->withStatus(404);
        }
  	else
	{
       $stmt = $this->db->prepare("UPDATE users SET ranking=:ranking WHERE userid=:uid");
       $stmt->bindParam("uid", $args['uid']);
       $stmt->bindParam("ranking", $ranking);
       $stmt->execute();
        return $response->withStatus(200);

}
});


// update number of games played
$app->put('/games-played-update/[{uid}]', function(Request $request, Response $response, array $args){

  $data = json_decode(file_get_contents("php://input"));
  $num_of_games_played = $data->num_of_games_played;

 //  $input = $request->getParsedBody();
 //  $pdo->bindParam("ranking", $args["ranking"]);
  // $pdo->execute();
  // $input['ranking'] = $args['ranking'];
  if( !isset($num_of_games_played) || empty($num_of_games_played)){

  return $response->withStatus(403);
  }

  $pdo = $this->db->prepare('SELECT *  FROM users WHERE userid=:uid');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->execute();
  $row = $pdo->rowCount();

   if (!$row)
        {
        return $response->withStatus(404);
        }
        else
        {
       $stmt = $this->db->prepare("UPDATE users SET num_of_games_played=:num_of_games_played WHERE userid=:uid");
       $stmt->bindParam("uid", $args['uid']);
       $stmt->bindParam("num_of_games_played", $num_of_games_played);
       $stmt->execute();
        return $response->withStatus(200);

}
});


// update player rating
$app->put('/rating-update/[{uid}]', function(Request $request, Response $response, array $args){

  $data = json_decode(file_get_contents("php://input"));
  $rating = $data->rating;

 //  $input = $request->getParsedBody();
 //  $pdo->bindParam("ranking", $args["ranking"]);
  // $pdo->execute();
  // $input['ranking'] = $args['ranking'];
  if( !isset($rating) || empty($rating)){

  return $response->withStatus(403);
  }

  $pdo = $this->db->prepare('SELECT *  FROM users WHERE userid=:uid');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->execute();
  $row = $pdo->rowCount();

   if (!$row)
        {
        return $response->withStatus(404);
        }
        else
        {
       $stmt = $this->db->prepare("UPDATE users SET rating=:rating WHERE userid=:uid");
       $stmt->bindParam("uid", $args['uid']);
       $stmt->bindParam("rating", $rating);
       $stmt->execute();
        return $response->withStatus(200);

}
});
