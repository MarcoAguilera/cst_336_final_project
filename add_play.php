<?php
    include 'connection.php';
    $con = getDBConnection();
    
    $team = $_GET['team'];
    $name = $_GET['name'];
    $number = $_GET['number'];
    $position = $_GET['position'];
    $ppg = floatval($_GET['ppg']);
    
    $sql = "INSERT INTO $team(Name, Number, Position, image, Points) VALUES ('$name',$number,'$position','new_player',$ppg)";
    $stmt = $con -> prepare($sql);
    $stmt -> execute();
    
    $records = array();
    
    echo json_encode($records);
?>