<?php
    if(isset($_POST['logout'])){
        header("Location: index.php");
    }
?>

<!DOCTYPE html>
<html>
    <head>
        <link href="css/styles.css" rel="stylesheet" type="text/css" />
    </head>
    <body>
        
        <h1>NBA History</h1>
        
        Display Option's <br>
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
            <input type="submit" name="logout" value="Logout"/>
        </form>
        
        
        <button id="add_player_war">Add A Player To Golden State</button><br>
        <button id="add_player_cavs">Add A Player To Cavs</button><br>
        <button id="edit_war_player">Edit A Player: Golden State</button><br>
        <button id="edit_cavs_player">Edit A Player: Cleveland</button><br>
        <button id="delete_war_player">Delete A Player: Golden State</button><br>
        <button id="delete_cavs_player">Delete A Player: Cleveland</button><br>
        <button id="clear">Clear</button><br>
        
        
        <table id="search_results">
        </table>
            
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="js/functions.js"></script>
    </body>
</html>