import "./index.scss";

var db = false;
var playing = false;
var winner = null;
var game_time = 5;
var plr1_clicks = 0;
var plr2_clicks = 0;


document.getElementById("time_input").addEventListener("input", function () {
    if (playing == false) {
        alert(game_time);
        game_time = parseInt(document.getElementById("time_input").value);
        alert(game_time);
    }
});

document.getElementById("start_button").addEventListener("click", function () {
    if (db == false) {
        db = true;
        console.log("a");
        setTimeout(() => { document.getElementById("start_button").innerText = "3"; }, 1000);
        setTimeout(() => { document.getElementById("start_button").innerText = "2"; }, 2000);
        setTimeout(() => { document.getElementById("start_button").innerText = "1"; }, 3000);
        setTimeout(() => {
            document.getElementById("start_button").innerText = "click";
            playing = true;
        }, 4000);
        setTimeout(() => {
            playing = false;
            if (plr1_clicks > plr2_clicks) {
                winner = "player 1";
            }else if (plr1_clicks < plr2_clicks) {
                winner = "player 2";
            }
            document.getElementById("start_button").innerText = winner + " won";
            plr1_clicks = 0;
            plr2_clicks = 0;
            document.getElementById("plr1_clicks").innerText = plr1_clicks;
            document.getElementById("plr2_clicks").innerText = plr2_clicks;

            db = false;

        }, (game_time * 1000 + 4000));

    }
});

document.addEventListener('keydown', logKey);

function logKey(e) {
    if (playing == true) {
        console.log(` ${e.code}`);
        if (e.code == "KeyA") {
            plr1_clicks++;
            document.getElementById("plr1_clicks").innerText = plr1_clicks;
        } else if (e.code == "KeyL") {
            plr2_clicks++;
            document.getElementById("plr2_clicks").innerText = plr2_clicks;

        }
    }
}