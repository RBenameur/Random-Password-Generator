// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {

  // prompt password length
  var passwordLengthPrompt = parseInt(prompt('How many characters would you like your password to contain (between 10 - 64)?'));
  
  // loop to prompt for correct number of characters
  for (;;) {
    var checkLngth = passwordLengthPrompt >= 10 && passwordLengthPrompt <= 64;

    if(checkLngth) break;
    passwordLengthPrompt =  parseInt(prompt('Please confirm a number between 10 and 64.'));
  };

  // prompt character choices
  for (;;) {
    var passUpprCs = confirm('Would you like uppercase characters?');
    var passLwrCs = confirm('Would you like lowercase characters?');
    var passNm = confirm('Would you like numeric characters?');
    var passSpcl = confirm('Would you like special characters (i.e., $%£&)?');

    var breakLoop = !passUpprCs && !passLwrCs && !passNm && !passSpcl;

    if(!breakLoop) break;

    alert('Please select at least one character type.');
  };

  // variable storing array of boolean of character options
  var arrayOfChoices = [passUpprCs, passLwrCs, passNm, passSpcl];

  // returning object of user choices
  return {
    passwordLength: passwordLengthPrompt,
    charOptions: arrayOfChoices
  };

}

// Function for getting a random element from an array
function getRandom(arr) {

  // testing remove after
  console.log('getRandom called');

  // empty array to accept concatenated array of character options based on user choices
  var concatArrOfChar = []; 

  // array of all characters
  var arrOfAllChar = [upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters];

  // for loop to concatenated array of possible characters based on user choice
  for (var index in arr) {
    if(arr[index]) {
      var char = arrOfAllChar[index];
      concatArrOfChar = concatArrOfChar.concat(char);
    };
  };

  //testing array of user choices
  console.log(concatArrOfChar);

  // return array of possible characters
  return concatArrOfChar;

}

// Function to generate password with user input
function generatePassword() {

  // creating variable to call getPasswordOptions function
  var passwordOptions = getPasswordOptions();

  // creating variable that calls getRandom function and passes a value into pipe
  var arrayOfPossibleCharacters = getRandom(passwordOptions.charOptions);

  // variable storing password length
  var generatedpasswordLength = passwordOptions.passwordLength;

  // variable to store password
  var generatedPassword = ''; 

  // for loop to get an element from an array 
  for (var i = 0; i < generatedpasswordLength; i++) {
    var generateRandomIndex = Math.floor(Math.random() * arrayOfPossibleCharacters.length);
    generatedPassword += arrayOfPossibleCharacters[generateRandomIndex];
  };

  // testing remove after
  console.log(passwordOptions);

  return generatedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);