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
  
  $pdo = $this->db->prepare('SELECT *  FROM users WHERE username=:uid');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->execute();
  $row = $pdo->rowCount();
     
   if (!$row)
        {
        return $response->withStatus(404);
        }
  	else
	{
       $stmt = $this->db->prepare("UPDATE users SET ranking=:ranking WHERE username=:uid");
       $stmt->bindParam("uid", $args['uid']);
       $stmt->bindParam("ranking", $ranking);
       $stmt->execute();
//        return $response->withStatus(200);
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
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

  $pdo = $this->db->prepare('SELECT *  FROM users WHERE username=:uid');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->execute();
  $row = $pdo->rowCount();

   if (!$row)
        {
        return $response->withStatus(404);
        }
        else
        {
       $stmt = $this->db->prepare("UPDATE users SET num_of_games_played=:num_of_games_played WHERE username=:uid");
       $stmt->bindParam("uid", $args['uid']);
       $stmt->bindParam("num_of_games_played", $num_of_games_played);
       $stmt->execute();

//        return $response->withStatus(200);
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
}
});


// update player rating
$app->put('/rating-update/{type}/{uid}', function(Request $request, Response $response, array $args){

  $data = json_decode(file_get_contents("php://input"));
  $rating = $data->rating;

 //  $input = $request->getParsedBody();
 //  $pdo->bindParam("ranking", $args["ranking"]);
  // $pdo->execute();
  // $input['ranking'] = $args['ranking'];
  if( !isset($rating) || empty($rating)){

  return $response->withStatus(403);
  }
   
  // if ($args['type'] == "location") {
   // $stmt = "(update location SET rating=:rating Where locationID=:uid";
    // $stmt->bindParam("uid", $args['uid']);
     //  $stmt->bindParam("rating", $rating);
      // $stmt->execute();

    // $data = array(‘success’ => ‘true’);

//       return $response->withJson($data, 200);

  // }  
//    else 

if ($args['type'] == "user") {


  $pdo = $this->db->prepare('SELECT *  FROM users WHERE username=:uid');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->execute();
  $row = $pdo->rowCount();

   if (!$row)
        {
        return $response->withStatus(404);
        }
        else
        {
       $stmt = $this->db->prepare("UPDATE users SET rating=:rating WHERE username=:uid");
       $stmt->bindParam("uid", $args['uid']);
       $stmt->bindParam("rating", $rating);
       $stmt->execute();
       // return $response->withStatus(200);
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
}

}


});


// update player win/loss
$app->put('/wins-update/[{uid}]', function(Request $request, Response $response, array $args){

  $data = json_decode(file_get_contents("php://input"));
  $wins = $data->wins;

 //  $input = $request->getParsedBody();
 //  $pdo->bindParam("ranking", $args["ranking"]);
  // $pdo->execute();
  // $input['ranking'] = $args['ranking'];
  if( !isset($wins) || empty($wins)){

  return $response->withStatus(403);
  }

  $pdo = $this->db->prepare('SELECT *  FROM users WHERE username=:uid');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->execute();
  $row = $pdo->rowCount();

   if (!$row)
        {
        return $response->withStatus(404);
        }
        else
        {
       $stmt = $this->db->prepare("UPDATE users SET wins=:wins WHERE username=:uid");
       $stmt->bindParam("uid", $args['uid']);
       $stmt->bindParam("wins", $wins);
       $stmt->execute();
       // return $response->withStatus(200);
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
}
});

// update player loss
$app->put('/losses-update/[{uid}]', function(Request $request, Response $response, array $args){

  $data = json_decode(file_get_contents("php://input"));
  $losses = $data->losses;

 //  $input = $request->getParsedBody();
 //  $pdo->bindParam("ranking", $args["ranking"]);
  // $pdo->execute();
  // $input['ranking'] = $args['ranking'];
  if( !isset($losses) || empty($losses)){

  return $response->withStatus(403);
  }

  $pdo = $this->db->prepare('SELECT *  FROM users WHERE username=:uid');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->execute();
  $row = $pdo->rowCount();

   if (!$row)
        {
        return $response->withStatus(404);
        }
        else
        {
       $stmt = $this->db->prepare("UPDATE users SET losses=:losses WHERE username=:uid");
       $stmt->bindParam("uid", $args['uid']);
       $stmt->bindParam("losses", $losses);
       $stmt->execute();

//        return $response->withStatus(200);
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
}
});
