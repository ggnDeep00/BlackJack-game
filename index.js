// let firstCard=getrandomCard() 
// let secondCard=getrandomCard()

let sum= 0
let hasBlackJack=false
let isAlive=false
let message =""
let messageEl=document.getElementById("message-el")
let cardEl=document.getElementById("card-el")

// let playerName="GAGAN"
// let playerChips=145
let player = {
    name: "GAGAN",
    chips:145

}

let playerEl=document.getElementById("player-el")

playerEl.textContent=player.name + ": $" + player.chips

let cards= [] // ordered list of item
let sumel=document.getElementById("sum-el")
// comsole.log(sumel)
// let sumel=document.querySelector("#sum-el")
cardEl.textContent="Cards: "

function startGame(){
    isAlive=true
    let firstCard=getrandomCard() 
    let secondCard=getrandomCard()
    cards=[firstCard,secondCard]    
    sum= firstCard + secondCard
    cardEl.textContent="Cards: "
    renderGame()
}

function renderGame(){
    for(let i=0;i<cards.length ; i+=1){
        cardEl.textContent+=cards[i] + " "
    }

if(sum < 21 ){
    message ="Do you want to draw a new card?"

}else if(sum === 21){
    message="Wohoo! you've got Blackjack!"
    hasBlackJack=true
} else if( sum > 21 ){
    message="You're out of the game!"
    isAlive=false    
}   
messageEl.textContent=message
sumel.textContent= " sum : " + sum

}


function newcard(){
    if(isAlive===true && hasBlackJack===false){
    let card=getrandomCard()
    cards.push(card);
    sum+=card
    
    // cards.push(card)
    cardEl.textContent="Cards: "
    renderGame()}
}


function getrandomCard(){
    let  min=2
    let max=12

    return Math.floor(Math.random() * (max - min) + min);
}







// let featuredPosts=["Check out my Netflix Clone" , 
//                    "Here's the code for my projects",
//                     "I've just relaunched my portfolio "]







let airbnb={
    name:"aggg",
    flags:false,
    number:56,
    names:["bawdi","kila","mehal","fort"]

}