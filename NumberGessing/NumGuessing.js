//NUMBER GUESSING GAME

const minNum =1; 
const maxNum =100;
const answer = Math.floor(Math.random()*(maxNum-minNum +1)) +minNum;

let attempts = 0; //counting how many attemps the user has taken
let guess;
let running = true;   //to exit game when its over

while(running){
   guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
   guess=Number(guess);
   if(isNaN(guess)){   //When user enters a string
      window.alert("Please enter a valid number");
   }
   else if( guess <  minNum || guess > maxNum){   // when user enters number which is not with in the range
      window.alert("Please enter a valid number");
   }
   else{   // when number is with in the range
      attempts++;
      if(guess < answer){
         window.alert("TOO LOW! TRY AGAIN!");
      }
      else if(guess > answer){
         window.alert("TOO HIGH! TRY AGAIN!");
      }
      else{
         window.alert(`CORRECT! THE ANSWER WAS ${answer}. It took you ${attempts} attempts`);
         running = false;
      }
   }

}