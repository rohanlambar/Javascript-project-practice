// building a number guessing game
let min = 1;
let max = 100;
let running = true;
let answer = Math.floor(Math.random()*(max-min+1)) + min;
let attempt = 0;
let guess;
while(running){
   guess = window.prompt(`guess number between ${min} - ${max} ,${answer}`);
    guess = Number(guess);
   
    if(isNaN(guess)){
        window.alert("enter a valid number");
    }
    else{
       if(guess == answer) {window.alert(`Congragulation !!! You have guessed the number in ${attempt} attempts`);
    running = false;
}

       else{
             if( guess < answer) {
                window.alert("Your guess is lower ");
                attempt++;
             }
             else{ window.alert("Your guess is higher ");
                attempt++;
             }
    }
    }
}