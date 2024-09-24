let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true // player x, player O

// now will store winning pattern in 2D array



newgamebtn.classList.add("hide");   // This hides the button at the start of the game
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];




boxes.forEach((box) => {                         // har box ko click karne par "box was clicked " print hoga due to "addeventlistener"
    box.addEventListener("click", () => {
        console.log("box was clicked here");
        if(turnO === true)          // ye condition true hai isliye jab ham box pe click karenge tab "O" print hoga aur fir iske baad "turnO = false" is statement ke karan condition false ho jayegi.
        {
            box.innerText = "O";
            turnO= false;
        }
        else{
            box.innerText= "X";     // conditon false hone ke baad , box pe click karne ke baad "X" print hoga. is ke baad fix contion true ho jayegi aur fir box pr click karne ke baad "o" print hoga.
            turnO = true;
        }
        box.Disabled = true;        //  ek baar box click ho jane ke baad box block ho jayega.

        checkWinner();
    })
});

// now we will active new game button

const resetGame = () => {
    enabledboxes();
    turnO = true;
    newgamebtn.classList.add("hide");
    msg.classList.add("hide");

}







const enabledboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


const disabledBoxes = () => {
    for(let box of boxes)
    {
        box.disabled = true;
    }
}


const showWinner = (winner) => {                            // here we can take any  argument for showWinner() function because it will containe the value of showWinner(pos1val). in easy words, the "winner" argument is working as placeholder for  this showWinner(pos1val)
    msg.innerText =  `congratulations, winner is ${winner}`;     // so here in place of ${winner} the X or O will come in the output. 
    // msgcontainer.classList.remove("hide");                  // classList is a property of javascript
    newgamebtn.classList.remove("hide");                    // Show the New Game button
    msg.classList.remove("hide");
    disabledBoxes();                        // once the will finish this function will disbaled all the boxes.
}

const checkWinner= () => {
    for(let pattern of winPatterns) {
        // console.log([pattern[0]], [pattern[1]], [pattern[2]]);                  // this line is used to print all the indexes or position of the winpattern
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);   // this line is used to print X or O  of the clicked boxes or select boxes according to pattern

        let pos1val = boxes[pattern[0]].innerText;          // this line is used to print X or O  of the clicked boxes or select boxes according to pattern
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        // setting winner condition

        if(pos1val != "" && pos2val != "" && pos3val != "")
        {
            if(pos1val === pos2val && pos2val === pos3val)
            {
                console.log("winner", pos1val);   // yaha par, console me pos1val ko add kiya hai kyoki agr if condition true ho jati hai to iska matlb all 3 boxes me same X or O honge. so hamlog chahe pos1val ko or pos2val ko or pos3val in mese kisi ko bhi console me print kar sakte hai because pos1val, pos2val aur pos3val ye tino same hi honge.
                showWinner(pos1val);  // this function is taking the winning value (X or O) and it will pass this value to another showWinner function as the variable "winner"
            }
        }
    }
};

newgamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);