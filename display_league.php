<?php
    include 'connection.php';
    $con = getDBConnection();
    
    $sql = "SELECT * FROM League ORDER BY Primary_Key ASC";
    $stmt = $con -> prepare($sql);
    $stmt -> execute();
    
    $records = $stmt->fetchAll();
    
    echo json_encode($records);
?>