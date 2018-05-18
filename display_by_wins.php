<?php
    include 'connection.php';
    $con = getDBConnection();
    
    $sql = "SELECT * FROM League ORDER BY Percentage DESC";
    $stmt = $con -> prepare($sql);
    $stmt -> execute();
    
    $records = $stmt->fetchAll();
    
    echo json_encode($records);
?>