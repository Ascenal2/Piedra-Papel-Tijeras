// piedra = 0
// papel = 1
// tijeras = 2


function getComputerChoice(){
    let computerChoice = Math.random()*3
    return Math.floor(computerChoice)
}
function getHumanChoice(){
    let choice = prompt("Elige piedra, papel o tijeras")
    if(choice.toLowerCase() == 'piedra'){
        return 0
    }
    if(choice.toLowerCase()== 'papel'){
        return 1
    }
    if(choice.toLowerCase()== 'tijeras'){
        return 2
    }
    else{
        return undefined
    }
}
let humanScore=0
let computerScore= 0



function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice) {
        console.log("Empate joder");
    }
    else if(
        (humanChoice === 0 && computerChoice === 2) || // Piedra vence a tijeras
        (humanChoice === 1 && computerChoice === 0) || // Papel vence a piedra
        (humanChoice === 2 && computerChoice === 1)    // Tijeras vence a papel
    ) {
        console.log("Has ganado a una IA, eres MEJOR!!!");
        humanScore += 1;
    } else {
        console.log("Has perdido en contra de la maquina NT, intentalo la siguiente ronda");
        computerScore += 1;
    }
}
function playGame(){
    let round = 0
    while (round < 5) {
        let humanSelection = getHumanChoice()
        let computerChoice = getComputerChoice()  
        playRound(humanSelection,computerChoice)
        round++
    }
    if(humanScore>computerScore){
        console.log("Has ganado tio")
    }
    else{
        console.log("NT TIO")
    }
}
playGame()