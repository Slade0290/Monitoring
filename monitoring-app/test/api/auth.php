<?php

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

  if(isset($_POST) && !empty($_POST)) {
    $login = $_POST['login'];
    $password = $_POST['password'];

    //query mongo to get data and compare
    if($login == 'admin' && $password == 'admin') {
      
      $_SESSION['user'] = 'admin';

      ?>
      {
        "success": true,
        "secret": "This is the secret no one knows but the admin"
      }
      <?php
    } else {
       ?>
     {
      "success": false,
      "message": "Invalid credentials"
     }
     <?php
   }
  } else {
      ?>
      {
        "success": false,
        "message": "Only POST access accepted"
      }
      <?php
    }
      ?>
