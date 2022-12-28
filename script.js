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
  
  // loop to prompt for correct numnber of characters
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

  // variable storing array of boolean options
  var arrayOfChoices = [passUpprCs, passLwrCs, passNm, passSpcl];

  return {
    passwordLength: passwordLengthPrompt,
    charOptions: arrayOfChoices
  };

}

// Function for getting a random element from an array
function getRandom(arr) {

  // testing remove after
  console.log('getRandom called');

  // pass in boolean of user choices

  // array of all characters

  // for loop to concatenated array of possible characters based on user choice

  // return array of possible characters

}

// Function to generate password with user input
function generatePassword() {
  // creating variable to call getPasswordOptions function
  var passwordOptions = getPasswordOptions();
  // creating variable that calls getRandom function and passes a value into pipe
  var randomArray = getRandom(passwordOptions.charOptions); 
  // variable to store password
  var generatedPassword = 'generated password'; 

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