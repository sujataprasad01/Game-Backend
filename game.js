let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=['rock', 'paper', 'scissors']
//   rock, paper, scissors
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx]
}

const showWinner=(userwin, userChoice, compChoice)=>{
    if(userwin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText=`You lose.  ${compChoice} beats Your ${userChoice}`;
    }
}

const playGame=(userChoice)=>{
   console.log("user choice= ", userChoice);
//    Generate computer choice
   const compChoice=genCompChoice();
   console.log("comp choice= ", compChoice);

   if(userChoice===compChoice){
    console.log("Game was draw");
    msg.innerText="Game was Draw. Play again.";
   }else{
    let userwin=true;
    if(userChoice==="rock"){
        // scissors, paper
        userwin=compChoice==="paper"? false: true;
    }
    else if(userChoice==="paper"){
    // rock, scissors
        userwin=compChoice==="scissors"?false:true;
    }else{
        // rock, paper
        userwin=compChoice==="scissors"?false:true;
    }
    showWinner(userwin, userChoice, compChoice);
   }
}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
     console.log("chose was clicked", userChoice)
     playGame(userChoice);
    });
});