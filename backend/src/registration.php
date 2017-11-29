<?php
use Slim\Http\Request;
use Slim\Http\Response;

$app->post('/registration', function ($request,$response, array $args) {

    $pdo = $this->db;
    //$json = $request->getBody();
    //$data = json_decode($json);
    //$username = $_POST['username'];
    //$first_name = $_POST['first_name'];
   // $last_name = $_POST['last_name'];
    //$email = $_POST['email'];
    //$plain_password = $_POST['password'];
    if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
  $data = json_decode(file_get_contents("php://input"));
    $username = $data->username;
    $first_name = $data->first_name;
    $last_name = $data->last_name;
    $email = $data->email;
    $plain_password = $data->password;
    $year = $data->year;
}


    //when building html form, using ajax or js to prevent non-value params
    // checking if json is valid
    if( !isset($username) || !isset($email)|| !isset($last_name) || !isset($year) || !isset($first_name) || !isset($plain_password) ||
      empty($username) || empty($year) || empty($first_name) || empty($last_name) || empty($email) || empty($plain_password)) {

      //error message forbidden
      return $response->withStatus(403);
    }

    // Check if username alreadyy exists
   $stmt = $pdo->prepare('SELECT * FROM users WHERE username=:username');
   $stmt->bindParam("username", $username);
   $stmt->execute();
   $row = $stmt->fetch(PDO::FETCH_ASSOC);
   if($row)
   {
   //error message bad request
   return $response->withStatus(400);
   }

     //Check if email already exists
     $stmt = $pdo->prepare('SELECT * FROM users WHERE email=:email');
     $stmt->bindParam("email", $email);
     $stmt->execute();
     $row = $stmt->fetch(PDO::FETCH_ASSOC);
     if($row)
     {
     //error message bad reqest
     return $response->withStatus(400);
     }

    // Hash the password
    $password = md5($plain_password);

    //primary key userid
    //forigne key groupid
    $stmt = $pdo->prepare(
      "INSERT INTO users (
        username, 
        first_name , 
        last_name , 
        email ,
        password, 
        groupid,
        verified, 
        date_joined , 
        last_updated , 
        num_of_games_played,
        isAdmin,
        wins,
	losses,
	year)
    VALUES(:username, :first_name, :last_name, :email, :password, 2, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 0, 0, 0, 0, :year)"
    );

    // Add the entry to the array once all the fields have been verified
    $stmt->bindParam("username", $username);
    $stmt->bindParam("first_name", $first_name);
    $stmt->bindParam("last_name", $last_name);
    $stmt->bindParam("email", $email);
    $stmt->bindParam("password", $password);
    $stmt->bindParam("year", $year);
    $stmt->execute();

    return $response->withStatus(200);
});

