// Load the page
$(document).ready(function () {
    var currentScore; // players score counter
    var targetNumber;
    var wins = 0;
    var losses = 0;


    startGame();

    //var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


    function startGame() {

        //reset current score back to zero
        currentScore = 0;
        $("#your-score").text(currentScore);

        // set random target number for game between 19 and 120.
        targetNumber = Math.floor(Math.random() * 102) + 19;
        $("#target-number").text(targetNumber);

        // update wins/losses
        $("#win-count").text(wins);
        $("#loss-count").text(losses);

    };

    // setup onclicks for the buttons
    function buttonSetup(buttonId) {
        var button = document.getElementById(buttonId);
        button.setAttribute("data-value", Math.floor(Math.random() * 12) + 1);

        // setup onclicks for the buttons
        button.onclick = function (event) {
            // stores the clicked button into a variable
            var buttonClicked = event.target;
            // alet the data-value

            button = buttonClicked.getAttribute("data-value")
            button = parseInt(button);
            currentScore += button;
            $("#your-score").text(currentScore);


            if (currentScore === targetNumber) {
                wins++;
                alert("You win!!");
                startGame();
            } else if (currentScore >= targetNumber) {
                losses++;
                alert("You lose!!");
                startGame();
            }



        }


    };

    buttonSetup("button1");
    buttonSetup("button2");
    buttonSetup("button3");
    buttonSetup("button4");



    /*button.onclick = function (event) {
        // stores the clicked button into a variable
        var buttonClicked = event.target;
        // alert the data-value
        alert(buttonClicked.getAttribute("data-value"));
        crystalValue = (buttonClicked.getAttribute("data-value"));
    
        currentScore += crystalValue;
        console.log(crystalValue)
        // $("#button").attr("data-value")
    }
    
    
    /*$("#win-count").text(wins);
    $("#loss-count").text(losses);
    // onclick fires
    
    
    if (currentScore === targetNumber) {
        alert("You win!!")
        wins++;
        startGame();
    }
    
    else if (currentScore > targetNumber) {
        alert("You lose!!")
        losses++;
        startGame();
    }
    
    // Number is added to total
    
    
    // Check to see if they have won
    
    // until the total is equal to the goal
    //if (yourScore === targetNumber) {
    
    //}*/
});

