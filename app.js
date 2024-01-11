console.log("Working!!")


const dice = document.querySelector('#dice')
let counter1 = 0 , counter2 = 0 ,points = document.querySelector('#score1') ;

const rollDice = () => {
    
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    
    switch (randomNumber) {
        case 1:
            dice.src = `./Assets/dice-${randomNumber}.png`
    
        case 2:
            dice.src = `./Assets/dice-${randomNumber}.png`
        
        case 3:
            dice.src = `./Assets/dice-${randomNumber}.png`
       
        case 4:
            dice.src = `./Assets/dice-${randomNumber}.png`
       
        case 5:
            dice.src = `./Assets/dice-${randomNumber}.png`
        
        case 6:
            dice.src = `./Assets/dice-${randomNumber}.png`
    
        default:
            console.log("Please Try Again");
    }
    score(randomNumber);

}


const score = (randomNumber) => {
    
    let points1 = document.querySelector("#score1");
    let points2 = document.querySelector("#score2");

    if(points == points1 && randomNumber != 1){
        counter1 += randomNumber;
        points1.innerHTML = counter1;
       
    }

    else if(points == points2 && randomNumber != 1){
        counter2 += randomNumber;
        points2.innerHTML = counter2;
    }
    
    else if (points == points1 && randomNumber == 1){
        counter1 = 0;
        points1.innerHTML = counter1; 
        turn();
    }
    
    else{
        counter2 = 0;
        points2.innerHTML = counter2; 
        turn();
    }

    
}


const turn = () => {

    if(points == document.querySelector('#score1')){
        points = document.querySelector('#score2');
    }

    else if(points == document.querySelector('#score2')){
        points = document.querySelector('#score1')
    }
}


const hold = () => {

    turn();
    
}

const reset = () => {

 location.reload();
 

}

