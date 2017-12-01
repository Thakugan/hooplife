<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// Show all comments for a game, location, or user
$app->get('/{type}/{id}/comments', function(Request $request, Response $response, array $args){
  if ($args['type'] == "game") {
    $sql = "SELECT username, comments.rating, Date, Comment, comments.GameID from comments JOIN games WHERE comments.GameID=games.GameID AND comments.GameID=:id ORDER BY Date";
  } else if ($args['type'] == "location") {
    $sql = "SELECT comments.username, comments.rating, Date, Comment, comments.locationID from comments JOIN location WHERE comments.locationID=location.locationID AND comments.locationID=:id ORDER BY Date";
  } else if ($args['type'] == "user") {
    $sql = "SELECT comments.username, comments.rating, Date, Comment, target_username FROM comments JOIN users WHERE comments.username=users.username AND comments.target_username=:id ORDER BY Date";
  } else {
    return $this->response->withStatus(404);
  }
  $pdo = $this->db->prepare($sql);
  $pdo->bindParam("id", $args['id']);
  $pdo->execute();
  $comments = $pdo->fetchAll();
	return $this->response->withJson($comments);
});

// Post a new comment
$app->post('/newcomment', function(Request $request, Response $response, array $args){
  $input = $request->getParsedBody();
  if ($input['type'] == "game") {
   $sql = "INSERT INTO comments (username, Comment, Date, GameID, rating) VALUES (:username, :Comment, CURRENT_TIMESTAMP, :id, :rating)";
  } else if ($input['type'] == "location") {
    $sql = "INSERT INTO comments (username, Comment, Date,  locationID, rating) VALUES (:username, :Comment, CURRENT_TIMESTAMP,  :id, :rating)";
  } else if ($input['type'] == "user") {
    $sql = "INSERT INTO comments (username, Comment, Date, target_username, rating) VALUES (:username, :Comment, CURRENT_TIMESTAMP, :id, :rating)";
  } else {
    return $this->response->withStatus(404);
  }
  $pdo = $this->db->prepare($sql);
  $pdo->bindParam("username", $input["username"]);
  $pdo->bindParam("Comment", $input["Comment"]);
  $pdo->bindParam("rating", $input["rating"]);
   // $pdo->bindParam("target_id", $input["target_id"]);
  $pdo->bindParam("id", $input["id"]);
  $pdo->execute();
//        return $this->response->withStatus(200);
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
});

// Update a comment
$app->put('/{type}/{id}/comments/{CommentID}/edit', function(Request $request, Response $response, array $args){
  $input = $request->getParsedBody();
  $sql = "UPDATE comments SET Comment=:Comment WHERE CommentID=:CommentID";
  $pdo = $this->db->prepare($sql);
  $pdo->bindParam("Comment", $input["Comment"]);
  $pdo->bindParam("CommentID", $input["CommentID"]);
  $pdo->execute();
//        return $this->response->withStatus(200);
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
});

// Delete a comment
$app->delete('/{type}/{id}/delete-comment/{CommentID}', function (Request $request, Response $response, array $args) {
  $pdo = $this->db->prepare("DELETE FROM comments WHERE CommentID=:CommentID");
  $pdo->bindParam("CommentID", $args["CommentID"]);
  $pdo->execute();
      //  return $this->response->withStatus(200);
 $data = array(‘success’ => ‘true’);

       return $response->withJson($data, 200);
});
