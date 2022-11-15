const NEWaudio = new Audio("newsfx.mp3");
let turn = 'X';
let box = document.getElementsByClassName('cell');
let newGame = document.getElementsByClassName('btn');
box = Array.from(box);

const turnChange = () => {
    return turn === 'X' ? 'O' : 'X';
}

// let name = prompt('Enter your name : ');


box.forEach(function (box) {
    box.addEventListener('click', () => {
        if (box.textContent === '') {
            NEWaudio.play();
            box.textContent = turn;
            turn = turnChange();

            if (turn === 'X') {
                document.getElementById('turn').innerHTML = "X's Turn"
            } else {
                document.getElementById('turn').innerHTML = "0's Turn"
            }

            winCheck();

        }
    });
});


//----------------------------------------winning combinations------------------------------------------------------->

let winCombo = [

    [0, 1, 2], //1
    [3, 4, 5], //2
    [6, 7, 8], //3
    [0, 3, 6], //4
    [1, 4, 7], //5
    [2, 5, 8], //6
    [0, 4, 8], //7
    [2, 4, 6], //8 
];

//----------------------------------------winning logic------------------------------------------------------->

const winAudio = new Audio("win.mp3");

function winCheck() {
    for (let a = 0; a <= 7; a++) {
        let b = winCombo[a];

        if (box[b[0]].innerHTML == "" || box[b[1]].innerHTML == "" || box[b[2]].innerHTML == "") {
            continue;
        } else if (box[b[0]].innerHTML == "X" && box[b[1]].innerHTML == "X" && box[b[2]].innerHTML == "X") {


            winAudio.play();
            setTimeout(() => {
                alert('X won the game');
                resetGame();
            }, 100);


        } else if (box[b[0]].innerHTML == "O" && box[b[1]].innerHTML == "O" && box[b[2]].innerHTML == "O") {


            winAudio.play();
            setTimeout(() => {
                alert('0 won the game');
                resetGame();
            }, 100);

        } else {

            draw();

        }
    }
}



//---------------------------------------------------- Draw---------------------------------------------->
function draw() {



    if (
        box[0].innerHTML != "" && box[1].innerHTML != "" && box[2].innerHTML != "" &&
        box[3].innerHTML != "" && box[4].innerHTML != "" && box[5].innerHTML != "" &&
        box[6].innerHTML !== "" && box[7].innerHTML !== "" && box[8].innerHTML !== "") {


        document.getElementById('turn').innerHTML = "Draw "

    }
}

function resetGame() {

    window.location.reload();
}