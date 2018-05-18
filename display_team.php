<?php
    include 'connection.php';
    $con = getDBConnection();
    
    $sql = $_GET['sql'];
    $stmt = $con -> prepare($sql);
    $stmt -> execute();
    
    $records = $stmt->fetchAll();
    
    echo json_encode($records);
?>