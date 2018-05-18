<?php

function getDBConnection() {
    
    //C9 db info
    $host = "us-cdbr-iron-east-04.cleardb.net";
    $db = "NBA";
    $username = "b7e1d569efa02e";
    $password = "9a23454e";
    $charset = 'utf8mb4';
    
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE               => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE    => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES      => false
    ];
    $pdo = new PDO($dsn, $username, $password, $opt);
    
    return $pdo;
}

?>