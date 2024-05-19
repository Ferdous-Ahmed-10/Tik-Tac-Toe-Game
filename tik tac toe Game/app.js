let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".newGame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true; //player X or Player 0

//using 2D array
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>
    {
        console.log("box was clicked")
        if (turn0){
            box.innerText = "O";
            box.style.color = "#ef233c";
            turn0 = false;
        } else{
            box.innerText = "X"
            turn0 = true;
            box.style.color = "#0d1b2a";
        }
    box.disabled= true;
    checkWinners();
    });
});

//for reset game at any time or end of the game
const resetGame = ()  =>{
    turn0 = true;
    enebleBoxes ();
    msgContainer.classList.add("hide");
}


const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;

    }
};

const enebleBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}



const showWinner = (winner) =>{
    msg.innerText = `Congralation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes ();
}

const checkWinners = () => {
    for ( let pattern of winPatterns) {
       
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val !="" && pos2Val != "" && pos3Val !="" ) {
        if(pos1Val=== pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);  
           showWinner(pos1Val);
        }
    }
    }
}


newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);