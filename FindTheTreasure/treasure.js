$(function () {

//get a random number from 0 to size
    var getRandomNumber = function (size) {
        return Math.floor(Math.random() * size);
    };

// calculate distance between click event and target
    var getDistance = function (event, target) {
        var diffX = event.offsetX - target.x;
        var diffY = event.offsetY - target.y;
        return Math.sqrt((diffX * diffX) + (diffY * diffY));
    };



//set up variables
    var width = 400;
    var height = 400;
    var clicks = 0;

//create a random target location
    var target = {
        x: getRandomNumber(width),
        y: getRandomNumber(height)
    };

//add a click handler to the img element
    $("#map").click(function (event) {
        clicks++;

        // get a string representing the distance

        var currentClicks = "You've clicked " + clicks + " times!";
        var getDistanceHint = function (distance) {
            if (distance < 15) {
                return "Boiling hot! " + currentClicks;
            } else if (distance < 25) {
                return "Really hot. " + currentClicks;
            } else if (distance < 45) {
                return "Hot. " + currentClicks;
            } else if (distance < 85) {
                return "Warm. " + currentClicks;
            } else if (distance < 160) {
                return "Cold. " + currentClicks;
            } else if (distance < 240) {
                return "Really cold. " + currentClicks;
            } else if (distance < 420) {
                return "The winter is coming! " + currentClicks;
            } else {
                return "Freezing! " + currentClicks;
            }
        };
        //get distance between click event and target
        var distance = getDistance(event, target);
        //convert distance to a hint
        var distanceHint = getDistanceHint(distance);
        //update the #distance (p) element with the new hint
        $("#distance").text(distanceHint);


        //if the clicks was close enough, tell them they won
        if (distance < 12) {
            alert("Found the treasure in " + clicks + " clicks!");
        }
        if(clicks >= 30){
            alert("You've over the limit of " + clicks + " GAME OVER!!")
        }
    });


});