<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// update a profile

$app->put('/profile-update/[{id}]', function(Request $request, Response $response, array $args){
  $pdo = $this->db->prepare("SELECT * FROM users  WHERE username=:id");
  $pdo->bindParam("id", $args["id"]);
  $pdo->execute();
  $info = $pdo->fetch();
  $first_name = $info['first_name'];
  $last_name = $info['last_name'];
  $email = $info['email'];
  $year = $info['year'];
  $pic_url = $infor['pic_url'];
 
        $data = json_decode(file_get_contents("php://input"));

   //$input = $request->getParsedBody();
   if (!empty($data->first_name)) {
        $first_name = $data->first_name;
        }
   if (!empty($data->last_name)) {
        $last_name = $data->last_name;
        }
   if (!empty($data->email)) {
        $email = $data->email;
        }
   if (!empty($data->year)) {
        $year = $data->year;
        }
   if (!empty($data->pic_url)) {
        $pic_url = $data->pic_url;
        }
   $sql = "UPDATE users SET first_name=:fn, last_name=:ln, email=:em, year=:yr,last_updated=CURRENT_TIMESTAMP, pic_url=:pic WHERE username=:id";
   $sth = $this->db->prepare($sql);
   $sth->bindParam("id", $args['id']);
   $sth->bindParam("fn", $first_name);
   $sth->bindParam("ln", $last_name);
   $sth->bindParam("em", $email);
   $sth->bindParam("yr", $year);
   $sth->bindParam("pic", $pic_url);
        $sth->execute();
        return $response->withStatus(200);

});
                                                                                                                                                                                                        
