$(document).ready(function(){
    
    console.log("HERE");
    $("#search").on('change', function(){
        if($("#search").val() == "nba"){
            display_league("League");
        }
        else if($("#search").val() == "warriors"){
            display_the_town();
        }
        else if($("#search").val() == "cavs"){
            display_cavs();
        }
        else if($("#search").val() == "sort_by_%"){
            display_league_by_wins();
        }
        else if($("#search").val() == "sort_the_town"){
            display_by_wins_the_town();
        }
        else if($("#search").val() == "sort_cavs"){
            display_by_wins_cavs();
        }
        else if($("#search").val() == "sort_the_town_by_pts"){
            display_by_pts_the_town();
        }
        else if($("#search").val() == "sort_cavs_by_pts"){
            display_by_pts_the_cavs();
        }
    });
    
    $("#add_player_war").on('click', function() {
        $("#search_results").html("");
        $("#search_results").html("<input id='add_player_name' type='text' placeholder='Enter Name'/>");
        $("#search_results").append("<input id='add_player_number' type='text' placeholder='Enter Number'/>");
        $("#search_results").append("<input id='add_player_position' type='text' placeholder='Enter Position(Ex: F, G, C)'/>");
        $("#search_results").append("<input id='add_player_ppg' type='text' placeholder='Enter Points Per Game'/><br>");
        $("#search_results").append("<button id='add_player_btn'>Submit</button><br>");
        
        $("#add_player_btn").click(function(){
            if($("#add_player_name").val() != "" && $("#add_player_number").val() != "" && $("#add_player_position").val() != "" &&
                $("#add_player_ppg").val() != "")
            {
                $.ajax({
                    type : "GET",
                    url  : "add_play.php",            
                    dataType : "json",
                    data : {"team" : "Warriors", "name" : $("#add_player_name").val(), "number": $("#add_player_number").val(), "position" : $("#add_player_position").val(), "ppg" : $("#add_player_ppg").val()},            
                    success : function(data){
                        alert("Success!!");
                        $("#search_results").html("");
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                    //   console.log(data.Team_Name);
                    }

            });//AJAX
            }
            else{
                alert("Please don't leave any paramaters empty!");
            }
        });
    });
    
    $("#add_player_cavs").on('click', function() {
        $("#search_results").html("");
        $("#search_results").html("<input id='add_player_name' type='text' placeholder='Enter Name'/>");
        $("#search_results").append("<input id='add_player_number' type='text' placeholder='Enter Number'/>");
        $("#search_results").append("<input id='add_player_position' type='text' placeholder='Enter Position(Ex: F, G, C)'/>");
        $("#search_results").append("<input id='add_player_ppg' type='text' placeholder='Enter Points Per Game'/><br>");
        $("#search_results").append("<button id='add_player_btn'>Submit</button><br>");
        
        $("#add_player_btn").click(function(){
            if($("#add_player_name").val() != "" && $("#add_player_number").val() != "" && $("#add_player_position").val() != "" &&
                $("#add_player_ppg").val() != "")
            {
                $.ajax({
                    type : "GET",
                    url  : "add_play.php",            
                    dataType : "json",
                    data : {"team" : "Cavs", "name" : $("#add_player_name").val(), "number": $("#add_player_number").val(), "position" : $("#add_player_position").val(), "ppg" : $("#add_player_ppg").val()},            
                    success : function(data){
                        alert("Success!!");
                        $("#search_results").html("");
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                    //   console.log(data.Team_Name);
                    }

                });//AJAX
            }
            else{
                alert("Please don't leave any paramaters empty!");
            }
        });
    });
    
    $("#edit_war_player").on('click', function() {
        $("#search_results").html("");
        $("#search_results").html("<input id='edit_player_name' type='text' placeholder='Enter Player Name'/>");
        $("#search_results").append("<input id='edit_player_number' type='text' placeholder='Edit Number'/><br>");
        $("#search_results").append("<button id='edit_player_btn'>Submit</button><br>");
        
        $("#edit_player_btn").click(function(){
            if($("#edit_player_name").val() != "" && $("#edit_player_number").val() != "")
            {
                $.ajax({
                    type : "GET",
                    url  : "edit_play.php",            
                    dataType : "json",
                    data : {"team" : "Warriors", "name" : $("#edit_player_name").val(), "number": $("#edit_player_number").val()},            
                    success : function(data){
                        alert("Success!!");
                        $("#search_results").html("");
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                    //   console.log(data.Team_Name);
                    }

            });//AJAX
            }
            else{
                alert("Please don't leave any paramaters empty!");
            }
        });
    });
    
    $("#edit_cavs_player").on('click', function() {
        $("#search_results").html("");
        $("#search_results").html("<input id='edit_player_name' type='text' placeholder='Enter Player Name'/>");
        $("#search_results").append("<input id='edit_player_number' type='text' placeholder='Edit Number'/><br>");
        $("#search_results").append("<button id='edit_player_btn'>Submit</button><br>");
        
        $("#edit_player_btn").click(function(){
            if($("#edit_player_name").val() != "" && $("#edit_player_number").val() != "")
            {
                $.ajax({
                    type : "GET",
                    url  : "edit_play.php",            
                    dataType : "json",
                    data : {"team" : "Cavs", "name" : $("#edit_player_name").val(), "number": $("#edit_player_number").val()},            
                    success : function(data){
                        alert("Success!!");
                        $("#search_results").html("");
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                    //   console.log(data.Team_Name);
                    }

            });//AJAX
            }
            else{
                alert("Please don't leave any paramaters empty!");
            }
        });
    });
    
    $("#delete_war_player").on('click', function() {
        $("#search_results").html("");
        $("#search_results").html("<input id='delete_player_name' type='text' placeholder='Enter Player Name'/>");
        $("#search_results").append("<button id='delete_player_btn'>Submit</button><br>");
        
        $("#delete_player_btn").click(function(){
            if($("#delete_player_name").val() != "")
            {
                $.ajax({
                    type : "GET",
                    url  : "delete_play.php",            
                    dataType : "json",
                    data : {"team" : "Warriors", "name" : $("#delete_player_name").val()},            
                    success : function(data){
                        alert("Success!!");
                        $("#search_results").html("");
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                    //   console.log(data.Team_Name);
                    }

            });//AJAX
            }
            else{
                alert("Please don't leave any paramaters empty!");
            }
        });
    });
    
    $("#delete_cavs_player").on('click', function() {
        $("#search_results").html("");
        $("#search_results").html("<input id='delete_player_name' type='text' placeholder='Enter Player Name'/>");
        $("#search_results").append("<button id='delete_player_btn'>Submit</button><br>");
        
        $("#delete_player_btn").click(function(){
            if($("#delete_player_name").val() != "")
            {
                $.ajax({
                    type : "GET",
                    url  : "delete_play.php",            
                    dataType : "json",
                    data : {"team" : "Cavs", "name" : $("#delete_player_name").val()},            
                    success : function(data){
                        alert("Success!!");
                        $("#search_results").html("");
                    },
                    complete: function(data,status) { //optional, used for debugging purposes
                    //   console.log(data.Team_Name);
                    }

            });//AJAX
            }
            else{
                alert("Please don't leave any paramaters empty!");
            }
        });
    });
    
    
    $("#clear").on('click', function(){
        $("#search_results").html("");
    });
    
    function display_league(League){
        $("#search_results").html("");
        $("#search_results").html("<tr><th>Team</th><th>Conference</th><th>Division</th><th>Record</th><th>Win Percentage</th></tr>");
        
        $.ajax({
            type : "GET",
            url  : "display_league.php",            
            dataType : "json",
            data : {"League" : League},            
            success : function(data){
                
                for(var i = 0; i < data.length; i++){
                    $("#search_results").append("<tr><td>" + "<img src='img/logos/" + data[i]['image'] + ".gif" +"'></img>" + 
                                                "</td><td>" + data[i]['Conference'] + "</td><td>" + data[i]['Division'] + "</td><td>" + 
                                                data[i]['Record'] + "</td>" + "<td>" + data[i]['Percentage'] + "</td>" + "</tr>");
                    
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //   console.log(data.Team_Name);
            }

        });//AJAX
    }
    
    function display_the_town(){
        $("#search_results").html("");
        // $("#search_results").html("<span>Golden State Warriors Roster</span>");
        $("#search_results").append("<tr><th>Player</th><th>Name</th><th>Number</th><th>Position</th><th>PPG</th></tr>");
        $.ajax({
            type : "GET",
            url  : "display_team.php",            
            dataType : "json",
            data : {"sql" : "SELECT * FROM Warriors ORDER BY Primary_Key ASC"},            
            success : function(data){
                
                for(var i = 0; i < data.length; i++){
                    $("#search_results").append("<tr><td>" + "<img src='img/warriors/" + data[i]['image'] + ".jpg" +"'></img>" + 
                                                "</td><td>" + data[i]['Name'] + "</td><td>" + data[i]['Number'] + "</td><td>" + 
                                                data[i]['Position'] + "</td>" + "<td>" + 
                                                data[i]['Points'] + "</td>" + "</tr>");
                    
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //   console.log(data.Team_Name);
            }

        });//AJAX
    }
    
    function display_cavs(){
        $("#search_results").html("");
        // $("#search_results").html("<span>Cleveland Cavaliers Roster</span>");
        $("#search_results").append("<tr><th>Player</th><th>Name</th><th>Number</th><th>Position</th><th>PPG</th></tr>");
        $.ajax({
            type : "GET",
            url  : "display_team.php",            
            dataType : "json",
            data : {"sql" : "SELECT * FROM Cavs ORDER BY Primary_Key ASC"},            
            success : function(data){
                
                for(var i = 0; i < data.length; i++){
                    $("#search_results").append("<tr><td>" + "<img src='img/cavs/" + data[i]['image'] + ".jpg" +"'></img>" + 
                                                "</td><td>" + data[i]['Name'] + "</td><td>" + data[i]['Number'] + "</td><td>" + 
                                                data[i]['Position'] + "</td>" + "<td>" + data[i]['Points'] + "</td>" + "</td></tr>");
                    
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //   console.log(data.Team_Name);
            }

        });//AJAX
    }
    
    function display_league_by_wins(){
        $("#search_results").html("<tr><th>Player</th><th>Name</th><th>Number</th><th>Position</th><th>Win Percentage</th></tr>");
        $.ajax({
            // type : "GET",
            url  : "display_by_wins.php",            
            dataType : "json",
            // data : {"team" : "Cavs"},            
            success : function(data){
                
                for(var i = 0; i < data.length; i++){
                    $("#search_results").append("<tr><td>" + "<img src='img/logos/" + data[i]['image'] + ".gif" +"'></img>" + 
                                                "</td><td>" + data[i]['Conference'] + "</td><td>" + data[i]['Division'] + "</td><td>" + 
                                                data[i]['Record'] + "</td>" + "<td>" + data[i]['Percentage'] + "</td>" + "</tr>");
                    
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //   console.log(data.Team_Name);
            }

        });//AJAX
    }
    
    function display_by_wins_the_town(){
        $("#search_results").html("");
        // $("#search_results").html("<span>Golden State Warriors Roster</span>");
        $("#search_results").append("<tr><th>Player</th><th>Name</th><th>Number</th><th>Position</th></tr>");
        $.ajax({
            type : "GET",
            url  : "display_team.php",            
            dataType : "json",
            data : {"sql" : "SELECT * FROM Warriors ORDER BY Number ASC"},            
            success : function(data){
                for(var i = 0; i < data.length; i++){
                    $("#search_results").append("<tr><td>" + "<img src='img/warriors/" + data[i]['image'] + ".jpg" +"'></img>" + 
                                                "</td><td>" + data[i]['Name'] + "</td><td>" + data[i]['Number'] + "</td><td>" + 
                                                data[i]['Position'] + "</td></tr>");
                                                
                                                
                                                
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //   console.log(data.Team_Name);
            }

        });//AJAX
    }
    
    function display_by_wins_cavs(){
        $("#search_results").html("");
        // $("#search_results").html("<span>Cleveland Cavaliers Roster</span>");
        $("#search_results").append("<tr><th>Player</th><th>Name</th><th>Number</th><th>Position</th></tr>");
        $.ajax({
            type : "GET",
            url  : "display_team.php",            
            dataType : "json",
            data : {"sql" : "SELECT * FROM Cavs ORDER BY Number ASC"},            
            success : function(data){
                for(var i = 0; i < data.length; i++){
                    $("#search_results").append("<tr><td>" + "<img src='img/cavs/" + data[i]['image'] + ".jpg" +"'></img>" + 
                                                "</td><td>" + data[i]['Name'] + "</td><td>" + data[i]['Number'] + "</td><td>" + 
                                                data[i]['Position'] + "</td></tr>");
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //   console.log(data.Team_Name);
            }

        });//AJAX
    }
    
    function display_by_pts_the_town(){
        $("#search_results").html("");
        // $("#search_results").html("<span>Golden State Warriors Roster</span>");
        $("#search_results").append("<tr><th>Player</th><th>Name</th><th>Number</th><th>Position</th><th>PPG</th></tr>");
        $.ajax({
            type : "GET",
            url  : "display_team.php",            
            dataType : "json",
            data : {"sql" : "SELECT * FROM Warriors ORDER By Points DESC"},            
            success : function(data){
                for(var i = 0; i < data.length; i++){
                    $("#search_results").append("<tr><td>" + "<img src='img/warriors/" + data[i]['image'] + ".jpg" +"'></img>" + 
                                                "</td><td>" + data[i]['Name'] + "</td><td>" + data[i]['Number'] + "</td><td>" + 
                                                data[i]['Position'] + "</td>" + "<td>" + data[i]['Points'] + "</td>" + "</tr>");
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //   console.log(data.Team_Name);
            }

        });//AJAX
    }
    
    function display_by_pts_the_cavs(){
        $("#search_results").html("");
        // $("#search_results").html("<span>Golden State Warriors Roster</span>");
        $("#search_results").append("<tr><th>Player</th><th>Name</th><th>Number</th><th>Position</th><th>PPG</th></tr>");
        $.ajax({
            type : "GET",
            url  : "display_team.php",            
            dataType : "json",
            data : {"sql" : "SELECT * FROM Cavs ORDER By Points DESC"},            
            success : function(data){
                for(var i = 0; i < data.length; i++){
                    $("#search_results").append("<tr><td>" + "<img src='img/cavs/" + data[i]['image'] + ".jpg" +"'></img>" + 
                                                "</td><td>" + data[i]['Name'] + "</td><td>" + data[i]['Number'] + "</td><td>" + 
                                                data[i]['Position'] + "</td>" + "<td>" + data[i]['Points'] + "</td>" + "</td></tr>");
                }
            },
            complete: function(data,status) { //optional, used for debugging purposes
            //   console.log(data.Team_Name);
            }

        });//AJAX
    }   
});