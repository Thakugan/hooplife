<?php

header('Content-type: application/json');
require '../vendor/autoload.php';
use \Mailgun\Mailgun;
use Slim\Http\Request;
use Slim\Http\Response;



function email_verification($email, $last_name, $first_name, $username, $uid){

	define('MAILGUN_PUBKEY','pubkey-daa521a3a3c5843b419bd9f89fc8a3b4' );
 
 	 
 	 $link = 'http://18.216.208.60:8080/verfy/' . $uid;
  
         $mgClient = new \Mailgun\Mailgun('key-8e43115292421ce6aacc3a9660ff8ab2', new \Http\Adapter\Guzzle6\Client());
 	 $domain = "sandboxebd7f04a98f44fce89d21ec452133e47.mailgun.org";
  
	 $send = $mgClient->sendMessage($domain, array(
      'from'    => 'hooplife <mailgun@sandboxebd7f04a98f44fce89d21ec452133e47.mailgun.org>',
      'to'      => $first_name . ' ' . $last_name . ' <' . $email . '>',
      'subject' => 'Hooplife Yants You Verfy Your Account',
      'html'    =>' <body>

		<p>Dear ' .$first_name. '
		<br><br>
		<br>We are excited to have you as part of the hooplife family<br>
		<br>Please veryfy you email address by clicking on the following link<br>
		<br> '. $link .' <br>

		<br>With regards<br>

		<br>Team Hooplife<br>
		</p>

		</body>
		</html>',
  ));

	


}


// Validating a user's email
$app->get('/verfy/{username}', function ($request, $response, $args) {

    $pdo = $this->db;

   // $update = $pdo->prepare('UPDATE users SET verified='1' WHERE username=:username');
   // $update->bindParam("username", $username);
   // $update->execute();

   // return $response->withStatus(200);
  $check = $this->db->prepare("UPDATE users SET verified='1' WHERE userid=:username ");
  $check->bindParam("username", $args['username']);
  $check->execute();

  echo "Thank you for Validating you email";
//  return $response->withStatus(200);
});





