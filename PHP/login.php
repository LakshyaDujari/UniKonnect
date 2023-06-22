<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the submitted form data
    $username = $_POST['username'];
    $pass = $_POST['password'];
    $user = 'root';
    $password = '';
    $database = 'chandigarh_university'; 
    $port = NULL;
    $mysqli = new mysqli('127.0.0.1', $user, $password, $database, $port);
    if ($mysqli->connect_error) {
        die('Connect Error (' . $mysqli->connect_errno . ') '. $mysqli->connect_error);
    }
    else{
        $sql = "Select UID, Pass From student where UID = '".$username."' Limit 1";
        try{
            $result = $mysqli->query($sql);
            if($result->num_rows > 0 ){
                $row = $result->fetch_assoc();
                if( $pass == $row["Pass"]){
                    $message = 'Login Successfull';
//                    header("Location: loginuniversity.php?message=$message");
//                    exit;
                    header("Location:Homepage.php");
                    exit;
                } else{
                    $error = 'Invalid Username or Password';
                    header("Location: Homepage.php?error=$error");
                    exit;
                }
            } else {
                $error = 'User does not exist';
                header("Location: Homepage.php?error=$error");
                exit;
            }
        }  catch (Exception $e) {
            $error = 'Error 404';
            header("Location: Homepage.php?error=$error");
            exit;
        }
    }
}
?>
