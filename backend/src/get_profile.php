<?php

header('Content-type: application/json');

use Slim\Http\Request;
use Slim\Http\Response;

//changed from using user seesion to JWT
//comment part is commented out because I implimented it in its own route
$app->get('/profile/{username}', function (Request $request, Response $response, array $args){
	$db = $this->db;
	
        //Query users table for data on current user based on userID passed in
	//Query results will tie to $targetUser
	$userQuery = $db->prepare("SELECT username, userid, first_name, last_name, num_of_games_played, email, date_joined, last_updated, last_login, year, isAdmin, ranking, rating, wins, losses, pic_url  FROM users WHERE username=:username");
	$userQuery->bindParam("username", $args['username']);
	$userQuery->execute();
	$targetUser = $userQuery->fetchObject();
        $row = $userQuery->rowCount();

  	 if (!$row)
        {
        return $response->withStatus(404);
        }
  	
        //Fetch userid of current user to determine if user is viewing own page
	//Attach viewingOwnPage boolean to targetUser object
	//$sessionQuery = $db->prepare("SELECT userid FROM Sessions WHERE sessionid = :sid");
	//$sessionQuery->bindParam("sid", $args['sessionId']);
	//$sessionQuery->execute();
	//if ($targetUser->userid === $sessionQuery->fetchObject()->userid) 
	
	//	$targetUser->viewingOwnPage = true;
	
	//else
		//$targetUser->viewingOwnPage = false;
	//Fetch comments on the user's page
	
	//If there are comments, add them to the targetUser object
      //	$commentsQuery = $db->prepare("SELECT Comment, Date, username, target_id, target_username, URL FROM comments WHERE target_username =:username");
//	$commentsQuery->bindParam("username", $args['username']);
//	$commentsQuery->execute();
//	$numOfComments = $commentsQuery->rowCount();
//	
//	if ($numOfComments > 0)
//		$targetUser->comments = $commentsQuery->fetchAll();
//	
//	//Format user information into json and send response
	$jsonResponse = json_encode($targetUser);
	$this->response->getBody()->write($jsonResponse);
	
 	return $this->response;

});


