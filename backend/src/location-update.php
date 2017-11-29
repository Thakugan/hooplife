<?php

header('Content-type: application/json');
use Slim\Http\Request;
use Slim\Http\Response;

// update a location

$app->put('/location-update/[{id}]', function(Request $request, Response $response, array $args){
  $pdo = $this->db->prepare("SELECT * FROM location  WHERE locationID=:id");
  $pdo->bindParam("id", $args["id"]);
  $pdo->execute();
  $info = $pdo->fetch();
  $picture_url = $info['picture_url'];
  $address = $info['address'];
  $des = $info['description'];
  $rating = $info['rating'];
 
        $data = json_decode(file_get_contents("php://input"));

   //$input = $request->getParsedBody();
   if (!empty($data->picture_url)) {
        $picture_url = $data->picture_url;
        }
   if (!empty($data->address)) {
        $address = $data->address;
        }
   if (!empty($data->des)) {
        $des = $data->des;
        }
   if (!empty($data->rating)) {
        $rating = $data->rating;
        }

   $sql = "UPDATE location SET picture_url=:pic, address=:address, description=:des, rating=:rating WHERE locationID=:id";
   $sth = $this->db->prepare($sql);
   $sth->bindParam("id", $args['id']);
   $sth->bindParam("pic", $picture_url);
   $sth->bindParam("address", $address);
   $sth->bindParam("des", $des);
   $sth->bindParam("rating", $rating);
        $sth->execute();
        return $response->withStatus(200);

});
                                                                                                                                                                                                        
