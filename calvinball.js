/*
            Calvinball (http://www.picpak.net/calvin/oldsite/images/oogy.gif) is a game with a very complicated scoring system. Your job is to write a piece of code which determines a player's final score, given their starting scrore, and various other details about the player which are relevant to the game. 

            Provided below are three different player's starting scores. Uncomment one at a time to calculate the final score for that player.

            Calvinball Rules:
                1. A player's score is equal to 500 if their score is not already a number. (this is implemented below).
                2. A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
                3. A player's score is reduced by 77 if their last play was "Q"
                4. A player gets an extra 395 points if they are in a tree, unless their last play was a number.
                5. A player's score is doubled if they are holding the broom handle, but it is tripled if they have the broom brush. Otherwise the player's score is halved.
                6. A player's score is multiplied by 1.5 if they are carrying the ball but only if they are not in a tree. Disregard this rule if the player is crying.
                7. If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        */


        //Player One
        var score = 193;
        var last_play = "Q";
        var broom = "handle";
        var has_ball = false;
        var is_in_tree = false;
        var crying = false;


       
        // // //Player Two
        // // var score = 394;
        // // var last_play = "W";
        // // var broom = "none";
        // // var has_ball = true;
        // // var is_in_tree = true;
        // // var crying = false;
       

        
        // //Player Three
        // var score = "f";
        // var last_play = 1.5;
        // var broom = "brush";
        // var has_ball = true;
        // var is_in_tree = false;
        // var crying = true;
        
        //A player's score is equal to 500 if their score is not already a number. 
        if (typeof(score)==="string") {
            console.log("string");
            score=500;
        } else {
            console.log("number");
        }

        //A player's score is reduced by 300 if they are crying. Otherwise it is increased by 50.
        if (crying ===true) {
            console.log("was crying");
           score = score-300;
        } else { 
            console.log("not crying");
            score=score + 50;
        }

        // A player's score is reduced by 77 if their last play was "Q"
        if (last_play==="Q") {
            console.log("Q");
            score=score-77;
        }

        //A player gets an extra 395 points if they are in a tree, unless their last play was a number.
        if(is_in_tree===true && (typeof(last_play) === "string")) {
            colsole.log("tree true and last play is not a number")
            score=score+395;
        } else{
            console.log("no points");
        }

        //A player's score is doubled if they are holding the broom handle, 
        //but it is tripled if they have the broom brush. Otherwise the player's score is halved.
        if (broom==="handle") {
            console.log("handle")
            score=score*2;
        } else if (broom==="brush") {
            console.log("brush");
            score=score*3;
        } else {
            console.log("neither");
            score=score/2;
        }

        //A player's score is multiplied by 1.5 if they are carrying the ball 
        // but only if they are not in a tree. Disregard this rule if the player is crying.
        if (crying===true) {
            console.log("crying")
        } else if (has_ball===true && is_in_tree===false) {
            console.log("has ball");
            score=score*1.5;
        } else{
            console.log("no points");
        }

        //If the player's last play was a number (not a letter), the player's score is multiplied by that amount.
        if (typeof(last_play)!=="string") {
            console.log("last play is not a string")
            score=score*(last_play)
            }

        console.log(score)



        
