<?php

function getDBConnection() {
    
    //C9 db info
    $host = "localhost";
    $db = "NBA";
    $username = "root";
    $password = "";
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