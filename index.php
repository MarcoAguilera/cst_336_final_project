<?php
    if(isset($_POST['username']) && isset($_POST['password'])){
        if($_POST['username'] == "admin" && $_POST['password'] == "admin"){
            header("Location: admin.php");
        }
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
    </head>
    <body >
        <h1>NBA History</h1>
        
        <h4>Display Option's</h4> <br>
        <select id="search">
            <option value="none">-Select One-</option>
            <option value="nba">Whole League</option>
            <option value="warriors">Golden State Warriors Squad</option>
            <option value="cavs">Cleveland Cavs Squad</option>
            <option value="sort_by_%">Sort League by Win %</option>
            <option value="sort_the_town">Sort Golden State by Player Number</option>
            <option value="sort_cavs">Sort Cleveland Cavs by Player Number</option>
            <option value="sort_the_town_by_pts">Sort Golden State by Points</option>
            <option value="sort_cavs_by_pts">Sort Cleveland Cavs by Points</option>
        </select>
        <form method="post">
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/><br>
            <input class="btn btn-secondary" type="submit" value="Enter"/>
        </form>
        <button class="btn btn-secondary" id="clear">Clear</button>
        <table id="search_results"></table>
            
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="js/functions.js"></script>
    </body>
</html>