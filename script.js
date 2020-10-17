// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  

  //prompt for length of passowrd has to be at least 8 characters and no more than 128

  var inputLength = prompt("How many characters do you want your password to be (Between values 8 - 128)? ");
 

  inputLength = parseInt(inputLength)
  
    while (inputLength < 8 || inputLength > 128) {
      alert("Please enter a valid charactor length from 8 to 128")
      inputLength = prompt("How many characters do you want your password to be (Between values 8 - 128)? ");
    }
    
     
  
  //prompt/confirm for character types to include in password.


  var isLowerCase = confirm("Lowercase?");
  var isUpperCase = confirm("Uppercase?");
  var isNumber = confirm("Numeric?");
  var isSpecialChar = confirm("Special characters?");



  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");

  const numbers = '1234567890'.split("");

  const specialChar = "~`!@#$%^&*()_-+<>?+={}[]|:;',.".split("");

  var newPassword = "";


  var index ;

  //while loop (to go through the values how many times until the user input password length is reached)
 while ( newPassword.length <= inputLength) {

        if (isLowerCase) {
          index = getRandomIndex(lowerCase.length);
          newPassword = newPassword +  lowerCase[index];
        }
       if (isUpperCase) {
         index = getRandomIndex(upperCase.length);
         newPassword = newPassword + upperCase[index];
       }
       if (isNumber) {
        index = getRandomIndex(numbers.length);
        newPassword = newPassword + numbers[index];
      }
      if (isSpecialChar) {
        index = getRandomIndex(specialChar.length);
        newPassword = newPassword + specialChar[index];
      }

  }


  

console.log(newPassword);

  return newPassword
}
//math.random function
function getRandomIndex(max) {

  return Math.floor(Math.random() * max); //The maximum is inclusive and the minimum is inclusive 
}

