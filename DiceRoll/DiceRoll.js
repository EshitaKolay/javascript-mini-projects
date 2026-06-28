function rollDice(){
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values =[];   // Stors number of dice rolls
  const images = [];   // images of dice
 
  for(let i=0; i< numOfDice; i++){
    //generate randome number between 1-6 
    //use .floor() function to round up the value
    const value =  Math.floor(Math.random() * 6) + 1;
    values.push(value);

    images.push(`<img src ="dice_images/${value}.png" alt="Dice ${value}">`);
  }

  diceResult.textContent = `dice: ${values.join(`, `)}`;
  diceImages.innerHTML = images.join(``);
}