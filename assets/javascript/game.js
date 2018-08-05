var targetNumber = 53;

$("#number-to-guess").text(targetNumber);

var primes =$("#op");

var counter = 0;

var numberOptions = [10, 5, 3, 7];

for(var i = 0; i < numberOptions.length; i++)
{
    var imageOp = $("<img>");

    imageOp.addClass("img1");

    imageOp.attr("src", "assets/images/OP1.png");

    imageOp.attr("data-op", numberOptions[i]);

    primes.append(imageOp);
}

primes.on("click", ".img1", function()
{
    var imgValue = ($(this).attr("data-op"));
    imgValue = parseInt(imgValue);

    counter += imgValue;

    alert("New score: " + counter);

    if(counter === targetNumber)
    {
        alert("You win");
    }
    else if(counter >= targetNumber)
    {
        alert("You lose");
    }
})

// var increment = numberOptions[Math.round(Math.random())];

// $("#op").on("click", ".img1", function()
// {
//     counter += increment;
//     alert("Your new score is " + counter);

//     if(counter === targetNumber)
//     {
//         alert("Your win");
//     }
//     else if(counter >= targetNumber)
//     {
//         alert("You lose!!!");
//     }
// });