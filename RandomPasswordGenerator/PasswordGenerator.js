function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
  
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars ="ABCDEFGHIJKLMNOPQRST";
  const numberChars = "1234567890";
  const symbolChars = "!@#$%^&*()_+-=.";

  let allowedChars = "";   //stores all there charecter that are allowed(true)
  let password = "";   //password string to store and display

 //conditions for checking weather its allowed or not and store the char if true
  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

 //When the lenght of password is less then one
  if(length <=0){
    return `(password length must be atleast 1)`;
  }
 //when not a single set of char is selected
  if(allowedChars.length === 0){
    return `(At least ! set of charaters need to be selected)`;
  }
 
 //create for loop according to the length of password to generate random index
 //to select random char from allowed ones
  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex]
  }
  
  return password;
}

//declaring lenght of password and char to  be used
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

// calling function and passing parameters
const password = generatePassword(passwordLength, 
                                  includeLowercase, 
                                  includeUppercase, 
                                  includeNumbers, 
                                  includeSymbols);

//displaying the generated password
console.log(`Generated password: ${password}`);