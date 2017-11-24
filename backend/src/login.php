<?php

header('Content-type: application/json');
use \Firebase\JWT\JWT;
use Slim\Http\Request;
use Slim\Http\Response;

//session set up with login template implimented 
/**
$app->get('/login',function (Request $request, Response $response, array $args) {

    if(session_id() == ''){

    session_start(); // Starting Session
    }

   //check if there is a session with the particular user
   if(isset($_session['username'])){
   
   return $response->withRedirect('/');
   }
   
});
**/


$app->post('/login', function (Request $request, Response $response, array $args){
    //if(session_id() == ''){

   // session_start(); // Starting Session
    //}
    
    if ($_SERVER['REQUEST_METHOD'] == 'POST')
    {
    $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $password = $data->password;
    }
    $pdo = $this->db;   
    $hash_password= md5($password); 

    $stmt = $pdo->prepare('SELECT *  FROM users WHERE username=:username AND password=:password');
    $stmt->bindParam("username", $username);
    $stmt->bindParam("password", $hash_password);
    $stmt->execute();
    $row = $stmt->rowCount();

   if ($row < 1)
	{
	return $response->withStatus(404);
}
   else {
	//session_start();
	  $payload = [  'username' => $username,    ];
          $token = JWT::encode($payload, $_SERVER['SESSION_PASS']);
          $json = json_encode(array( "jwt" => $token  ));
          $stmt = $pdo->prepare('UPDATE users SET last_updated=CURRENT_TIMESTAMP WHERE username=:username');
          $stmt->bindParam("username", $username);
          $stmt->execute();
          return $response->withJson($json, 200);
	//return $response->withStatus(200);
}


   

});



