// Created variables needed for this game
var targetNumber;
var wins = 0;
var loss = 0;
// loop to start the game that chooses a random number 
for(var i = 20; i < 85; i++)
{
    targetNumber = Math.floor(Math.random() * i) + 15;
}
// This area connects the html with text or variables to use in this game
$("#number-to-guess").text(targetNumber);
// From this area text is also shown on the screen
var button = $("#button1");
$("#numWins").text(wins);
$("#numLose").text(loss);
// The four cols are turned to variables to use in the Jquery
var primes =$("#ruby");
var sapGem = $("#sap");
var emerGem = $("#emerald");
var diamGem = $("#diam");
//counter to add value from the gems
var counter = 0;
//counter transfered to text to show
$("#counter-number").text(counter);
//value options each gem can have
var numberOptions = [10, 5, 2, 7];
// background image
function image()
{
    document.getElementById("body1").style.backgroundImage = "url(assets/images/back.jpg)";
    document.getElementById("body1").style.backgroundSize = "cover";
    document.getElementById("body1").style.backgroundPositionY = "0px";
}
//info for gem 1 the ruby 
function gem1()
{
    // chooses a random number from the array
    var random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
    //the next five lines addes the info to the image with the pic and stats and append them to it
    var imageOp = $("<img>");

    imageOp.addClass("img1");

    imageOp.attr("src", "assets/images/ruby.jpg");

    imageOp.attr("data-op", random);

    primes.append(imageOp);

// this shows when the image is clicked to add value and calculate win or loss
primes.on("click", ".img1", function()
{
    // the value is transfered to integer to use to add up counter
    var imgValue = ($(this).attr("data-op"));
    imgValue = parseInt(imgValue);

    counter += imgValue;
    // counter transferred back to text to display
    $("#counter-number").text(counter);
    // if counter equals the targetnumber then add a win, set counter back to 0 and restart 
    // also checks if wins equals 3 to show you won the game
    if(counter === targetNumber)
    {
        counter = 0;
        wins++;
        if(wins === 3)
        {
            $("#text2").text("Congratulation you have enough gems to save your village")
        }
        $("#counter-number").text(counter);
        // chooses a random number again here 
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        //displays new info here 
        random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        $("#numWins").text(wins);
        $("#number-to-guess").text(targetNumber);
        $("#text1").text("You win Yayyyy!!!");

    }
    // if counter is bigger than targetNumber then add to loss and counter is reset
    //check if loss equals 3 to show game over and reset to start over 
    else if(counter >= targetNumber)
    {
        counter = 0; 
        loss++;
        if(loss === 3)
        {
        $("#text2").text("You failed your village and failed to find enough gems press reset to start over");
        }
        $("#counter-number").text(counter);
        //get new random number
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        //update stats
        random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        $("#numLose").text(loss);
        $("#number-to-guess").text(targetNumber);
        $("#text1").text("Aww You Lost");
    }
})
}
//info for gem 2 the sap
function gem2()
{

    var random = numberOptions[Math.floor(Math.random()*numberOptions.length)];

    var imageOp1 = $("<img>");

    imageOp1.addClass("img2");

    imageOp1.attr("src", "assets/images/sap.jpeg");

    imageOp1.attr("data-ops", random);

    emerGem.append(imageOp1);

emerGem.on("click", ".img2", function()
{
    var imgValue1 = ($(this).attr("data-ops"));
    imgValue1 = parseInt(imgValue1);

    counter += imgValue1;
    $("#counter-number").text(counter);
    // if counter equals the targetnumber then add a win, set counter back to 0 and restart 
    // also checks if wins equals 3 to show you won the game
    if(counter === targetNumber)
    {
        counter = 0;
        wins++;
        if(wins === 3)
        {
            $("#text2").text("Congratulation you have enough gems to save your village")
        }
        $("#counter-number").text(counter);
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        imageOp1.attr("data-ops", random);
        $("#numWins").text(wins);
        $("#number-to-guess").text(targetNumber);
        $("#text1").text("You win Yayyyy!!!");
    }
    // if counter is bigger than targetNumber then add to loss and counter is reset
    //check if loss equals 3 to show game over and reset to start over 
    else if(counter >= targetNumber)
    {
        counter = 0; 
        loss++;
        if(loss === 3)
        {
        $("#text2").text("You failed your village and failed to find enough gems press reset to start over");
        }
        $("#counter-number").text(counter);
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        imageOp1.attr("data-ops", random);
        $("#numLose").text(loss);
        $("#number-to-guess").text(targetNumber);
        $("#text1").text("Aww You Lost");
    }
})
}
//info for gem 3 the emerald
function gem3()
{

    var random = numberOptions[Math.floor(Math.random()*numberOptions.length)];

    var imageOp2 = $("<img>");

    imageOp2.addClass("img3");

    imageOp2.attr("src", "assets/images/em.jpg");

    imageOp2.attr("data-ops", random);

    sapGem.append(imageOp2);


sapGem.on("click", ".img3", function()
{
    var imgValue = ($(this).attr("data-ops"));
    imgValue = parseInt(imgValue);

    counter += imgValue;
    $("#counter-number").text(counter);
// if counter equals the targetnumber then add a win, set counter back to 0 and restart 
    // also checks if wins equals 3 to show you won the game
    if(counter === targetNumber)
    {
        counter = 0;
        wins++;
        if(wins === 3)
        {
            $("#text2").text("Congratulation you have enough gems to save your village")
        }
        $("#counter-number").text(counter);
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        imageOp2.attr("data-ops", random);
        $("#numWins").text(wins);
        $("#number-to-guess").text(targetNumber);
        $("#text1").text("You win Yayyyy!!!");
    }
    // if counter is bigger than targetNumber then add to loss and counter is reset
    //check if loss equals 3 to show game over and reset to start over 
    else if(counter >= targetNumber)
    {
        counter = 0;
        loss++; 
        if(loss === 3)
        {
        $("#text2").text("You failed your village and failed to find enough gems press reset to start over");
        }
        $("#counter-number").text(counter);
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        imageOp2.attr("data-ops", random);
        $("#numLose").text(loss);
        $("#number-to-guess").text(targetNumber);
        $("#text1").text("Aww You Lost");
    }
})
}
//info for gem 4 the diamond
function gem4()
{

    var random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
    var imageOp = $("<img>");

    imageOp.addClass("img4");

    imageOp.attr("src", "assets/images/dia.jpg");

    imageOp.attr("data-ops", random);

    diamGem.append(imageOp);

diamGem.on("click", ".img4", function()
{
    var imgValue = ($(this).attr("data-ops"));
    imgValue = parseInt(imgValue);

    counter += imgValue;
    $("#counter-number").text(counter);
// if counter equals the targetnumber then add a win, set counter back to 0 and restart 
    // also checks if wins equals 3 to show you won the game
    if(counter === targetNumber)
    {
        counter = 0;
        wins++;
        if(wins === 3)
        {
            $("#text2").text("Congratulation you have enough gems to save your village")
        }
        $("#counter-number").text(counter);
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        imageOp.attr("data-ops", random);
        $("#numWins").text(wins);
        $("#number-to-guess").text(targetNumber);
        $("#text1").text("You win Yayyyy!!!");
    }
    // if counter is bigger than targetNumber then add to loss and counter is reset
    //check if loss equals 3 to show game over and reset to start over 
    else if(counter >= targetNumber)
    {
        counter = 0; 
        loss++;
        if(loss === 3)
        {
        $("#text2").text("You failed your village and failed to find enough gems press reset to start over");
        }
        $("#counter-number").text(counter);
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        random = numberOptions[Math.floor(Math.random()*numberOptions.length)];
        imageOp.attr("data-ops", random);
        $("#numLose").text(loss);
        $("#number-to-guess").text(targetNumber);
        $("#text1").text("Aww You Lost");

    }
})
}
//reset function that resets everything from counter, wins, losses, and displays them to screen
//only happens when button is pushed 
//with new random number 
function reset()
{
        for(var i = 20; i < 85; i++)
        {
        targetNumber = Math.floor(Math.random() * i) + 15;
        }
        counter = 0; 
        wins = 0;
        loss = 0;
        console.log(counter);
        $("#numWins").text(wins);
        $("#numLose").text(loss);
        $("#counter-number").text(counter);
        $("#number-to-guess").text(targetNumber);
        $("#text2").text("");
}
//call on all functions
reset();
image();
gem1();
gem2();
gem3();
gem4();
