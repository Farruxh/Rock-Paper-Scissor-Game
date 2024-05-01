let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const mes = document.querySelector("#msg");
const yourNo = document.querySelector("#you");
const compNo = document.querySelector("#comp");
choices.forEach((ch) =>{
    ch.addEventListener("click" , () =>{
            const userChoice = ch.getAttribute("id");
            playGame(userChoice);
    });
});
const draw = () =>{
    mes.innerText = "Game has been drawn";
    mes.style.backgroundColor = "#081b31";
}
const result = (userWin) =>{
    if(userWin){
        mes.innerText = "You win!";
        mes.style.backgroundColor = "green";
        yourNo.innerText++;
    }
    else{
        mes.innerText = "You lose.";
        mes.style.backgroundColor = "red";
        compNo.innerText++;
    }
}
let gencompChoice = () =>{
    const arr = ["rock" , "paper" , "scissor"];
    const comp = Math.floor(Math.random()*3);
    return arr[comp];
}
function playGame(userChoice){
    console.log("You :" , userChoice);
    const compChoice = gencompChoice();
    console.log("Computer : " , compChoice);
    if(userChoice === compChoice){
          draw();
    }
    else{  let userWin = true;
        if(userChoice === "rock"){
          userWin = compChoice === "scissor"? true : false;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock"? true : false;
          }
        else{
            userWin = compChoice === "paper"? true : false;
        } 
        result(userWin); 
    }
};







// let btn = document.querySelector("button");
// let mode = "light";
// btn.addEventListener("click" , () =>{
//     if(mode === "dark"){
//         document.querySelector("body").classList.add(".light");
//         document.querySelector("body").classList.remove(".dark");
//         mode = "light";
//     }
//     else{
//         document.querySelector("body").classList.add(".dark");
//         document.querySelector("body").classList.remove(".light");
//         mode = "dark";
//     }
// });