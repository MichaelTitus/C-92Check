var player1_name = localStorage.getItem("playername1");
var player2_name = localStorage.getItem("playername2");

player1score = 0;
player2score = 0;

document.getElementById("player1name").innerHTML = "<h4>" + player1_name + ":</h4>";
document.getElementById("player2name").innerHTML = "<h4>" + player2_name + ":</h4>";

document.getElementById("player1score").innerHTML = "<h4>" + player1score + "</h4>";
document.getElementById("player2score").innerHTML = "<h4>" + player2score + "</h4>";

document.getElementById("player_question").innerHTML = "question turn-" + player1_name;
document.getElementById("player_answer").innerHTML = "answer turn-" + player2_name;

function send() {
    var getword = document.getElementById("word").value;
    var word = getword.toLowerCase();
    console.log(word);

    charat1 = word.charAt(1);
    console.log(charat1);

    lengthdivideby2 = Math.floor(word.length / 2);
    charat2 = word.charAt(lengthdivideby2);
    console.log(charat2);

    lengthminus1 = word.length - 1;
    charat3 = word.charAt(lengthminus1);
    console.log(charat3);

    removecharat1 = word.replace(charat1, "_");
    removecharat2 = removecharat1.replace(charat2, "_");
    removecharat3 = removecharat2.replace(charat3, "_");
    console.log(removecharat3);

    /*how to bring display*/

    var questionword = "<h4 id='word_display'> Q. " + removecharat3 + "</h4>";
    var inputbox = "<br>Answer: <input type='text' id='input_check_box'>";
    var checkbutton = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    var row = questionword + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check() {
    var get_answer = document.getElementById("input_check_box").value;
    var answer = get_answer.toLowerCase();
    console.log(answer);

    if (answer == word) {
        console.log("yes");
        if (answer_turn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = "<h4>" + player1score + "</h4>";
            console.log("player1score" + player1score);

        }
        else {
            player2score = player2score + 1;
            document.getElementById("player2score").innerHTML = "<h4>" + player2score + "</h4>";
            console.log("player2score" + player2score);
        }

    }

    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn -" + player2name;
        console.log(question_turn);
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn -" + player1name;
        console.log(question_turn);

    }

    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn -" + player2name;
        console.log(answer_turn);
    }
    else {
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn -" + player1name;
        console.log(answer_turn);

    }
}