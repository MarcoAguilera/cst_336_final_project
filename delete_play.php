<?php
    include 'connection.php';
    $con = getDBConnection();
    
    $team = $_GET['team'];
    $name = $_GET['name'];
    
    $sql = "DELETE FROM $team WHERE Name = '$name'";
    $stmt = $con -> prepare($sql);
    $stmt -> execute();
    
    $records = array();
    
    echo json_encode($records);
?>