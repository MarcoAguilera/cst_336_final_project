<?php
    include 'connection.php';
    $con = getDBConnection();
    
    $team = $_GET['team'];
    $name = $_GET['name'];
    $number = $_GET['number'];
    
    $sql = "UPDATE $team SET Number = $number WHERE $team .Name = '$name'";
    $stmt = $con -> prepare($sql);
    $stmt -> execute();
    
    $records = array();
    
    echo json_encode($records);
?>