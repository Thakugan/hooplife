<?php

header('Content-type: application/json');
require '../vendor/autoload.php';
use \Mailgun\Mailgun;
use Slim\Http\Request;
use Slim\Http\Response;



function email_verification($email, $last_name, $first_name){

	define('MAILGUN_PUBKEY','pubkey-daa521a3a3c5843b419bd9f89fc8a3b4' );

	


}


// Validating a user's email
$app->get('/token/{token}', function ($request, $response, $args) {
    $pdo = $this->db;

    


    $stmt = $pdo->prepare('UPDATE users SET verified=1, last_updated=CURRENT_TIMESTAMP WHERE username=:username');
    $stmt->bindParam("username", $username);
    $stmt->execute();

    return $response->withStatus(200)
});





