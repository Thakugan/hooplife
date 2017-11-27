<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// change password
$app->put('/change-password/[{uid}]', function(Request $request, Response $response, array $args){

  $data = json_decode(file_get_contents("php://input"));
  $old_password = $data->old_password;
  $new_password = $data->new_password;

 //  $input = $request->getParsedBody();
 //  $pdo->bindParam("ranking", $args["ranking"]);
  // $pdo->execute();
  // $input['ranking'] = $args['ranking'];
  if( !isset($new_password) || empty($new_password) || !isset($old_password) || empty($old_password)){

  return $response->withStatus(403);
  }

  $hnew_password = md5($new_password);
  $hold_password = md5($old_password);

  $pdo = $this->db->prepare('SELECT *  FROM users WHERE username=:uid AND password=:hold_password');
  $pdo->bindParam("uid", $args['uid']);
  $pdo->bindParam("hold_password", $hold_password);
  $pdo->execute();
  $row = $pdo->rowCount();

   if (!$row)
        {
        return $response->withStatus(403);
        }
        else
        {
      $stmt = $this->db->prepare("UPDATE users SET password=:hnew_password, last_updated=CURRENT_TIMESTAMP WHERE username=:uid");
      $stmt->bindParam("uid", $args['uid']);
      $stmt->bindParam("hnew_password", $hnew_password);
      $stmt->execute();
        return $response->withStatus(200);

}
});

