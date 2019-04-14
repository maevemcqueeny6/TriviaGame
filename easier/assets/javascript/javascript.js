window.onload = function () {
    $("#questions").hide();
    $("#submit").hide();
    $("#clock").hide();
}

var number = 100;
var intervalID;

$("#clock").text(number);

function run() {
    intervalID = setInterval(decrement, 1000);
    $("#questions").show();
    $("#start").hide();
    $("#submit").show();
    $("#clock").show();
}
function decrement() {
    number--;
    $("#clock").html("Time Left: " + number);
    if (number === 0) {
        clearInterval(intervalID);
    $("#submit").hide();
        alert("Time's Up! You got " + correct + " right and " + wrong + " wrong.")
    }
}

$("#start").on("click", run);


// Questions
var correct = 0;
var wrong = 0;
$('#submit').click(function () {
    for (i = 0; i < rightanswers.length; i++) {
        if (rightanswers[i].is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
    }
    clearInterval(intervalID);
    alert("you got " + correct + " right and " + wrong + " wrong")


});

var rightanswers = [$("#correct1"), $("#correct2"), $("#correct3"), $("#correct4"), $("#correct5")];