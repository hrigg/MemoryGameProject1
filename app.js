//Start button, starts timer
let cards = document.querySelectorAll(".card")
let start= document.querySelector('.startBtn')
let seconds= document.querySelector('.seconds')
let minutes= document.querySelector('.mins')
let gameboard= document.querySelector('.gameboard')
// let shuffleButton= document.querySelector('.startBtn')
let cover=document.querySelectorAll(".cover")
let parentCard= document.querySelectorAll('.parent')
let scoreCount=document.querySelector('.score')
let pairCount=document.querySelector('.pairs')
let restart= document.querySelector('.reset')
let scoreBoardDisplay= document.querySelector('.scoreBoard')
//Need to create: TIMER 
//need to make it go when start is clicked

let scoreBoard=[]

let run=true
start.addEventListener('click', timer)
    let sec = 0;
let myInterval
function timer ( value ) {  
    myInterval= setInterval(function(){
        seconds.innerHTML=`${(++sec%60)} sec`;
        minutes.innerHTML=`${(parseInt(sec/60,10))} min`;} , 1000)
    };
    function stopTimer(){
        clearInterval(myInterval)
    }
//console.log(timer)
// else {clearInterval(time)}


//Add image to each card


let images = ['🪴' , '🪴', '🌵', '🌵', '🌴' , '🌴' , '☘️', '☘️', '🍒' , '🍒' , '🌱' , '🌱', '🌷', '🌷', '🌽', '🌽', '🍋', '🍋', '🍉', '🍉', '💐', '💐', '🍄', '🍄', '🌼', '🌼', '🌹', '🌹', '🥑', '🥑']
//console.log(images.length)
//console.log(cards[6])

start.addEventListener('click', shuffleArray)

function shuffleArray(e){
    for (let i=images.length-1; i>0; i--){
        let j= Math.floor(Math.random()* (i+1))
        let x= images[i]
        images[i]=images[j]
        images[j]= x
        
    }
    
    console.log(images)

images.forEach( function(e){
    
    for (let i=0; i<images.length; i++){
    cards[i].innerText=images[i];
    //console.log(cards[i])
}
 }) 
}


let firstCard = ""
let secondCard = ""
let firstCardText=''
let secondCardText=''
let flipped= false
let pairs=0
let score=0

//FLIP CARD

function flipCard(){
    this.classList.add('flip');
//console.log(this)

if (flipped ===false){
    flipped= true;
    firstCardText=this.innerText
    firstCard=this
} else {
    secondCard=this
secondCardText=this.innerText;
flipped=false
//console.log(firstCard, secondCard)


if (firstCardText===secondCardText && firstCard!==secondCard){
    console.log("WE HAVE A MATCH")
    firstCard.classList.add('hidden')
    secondCard.classList.add('hidden')
    pairs=pairs+1
    pairCount.innerText=(`Correct: ${pairs}, ${firstCardText}`)

} else{
    console.log(`try again :) ${firstCardText} ${secondCardText}`)
    setTimeout(()=>{
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')}, 1000
    )
    score=score+1
    scoreCount.innerText=(`Guesses: ${score} Last Guess: ${firstCardText}${secondCardText}`)
        

}
if (pairs===15){
    scoreCount.innerText=(`You took ${score} guesses in ${minutes.innerText} ${seconds.innerText}`)
    stopTimer()
    minutes.innerText= `YAY YOU `
    seconds.innerText= `WON!`
    scoreCount.classList.add('colorful')
    minutes.classList.add('colorful')
    seconds.classList.add('colorful')
    // seconds.classList.add('hidden')
    // minutes.classList.add('hidden')
    scoreBoard.push(`${score} guesses`)
    //console.log(scoreBoard)
    scoreBoardDisplay.innerText= `Scores to Beat: ${scoreBoard}`
        }}

}

parentCard.forEach(card=> card.addEventListener('click',flipCard))

//RESTART BUTTON
//should 1. reshuffle cards    2.restart timer   3.restart scores   3. all cards are visible (none in .hidden)

restart.addEventListener('click', function(){
    parentCard.forEach(card => {
        card.classList.remove('hidden')
        card.classList.remove('flip')
        console.log(card.classList)
       })
       
    shuffleArray()
    pairCount.innerText =`Pairs: 0`
    scoreCount.innerText= `Guesses: 0`
    score=0
    pairs=0
   // console.log(score, pairs)
     sec=0
     stopTimer()
     timer()
    
})





// foodTheme.addEventListener('click', foodImages)

// function foodImages(){
//     if(foodBox.checked===true){
//  images = ['🍎','🍏','🍌','🍋','🥨','🍔','🌭','🍕','🍟','🥞','🥗','🍤','🍭','🍩','🍦','🍎','🍏','🍌','🍋','🥨','🍔','🌭','🍕','🍟','🥞','🥗','🍤','🍭','🍩','🍦']}
// }



