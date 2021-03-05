let userInput = prompt('Enter a number to use it is odd or even number');

userInput = parseInt(userInput);
// odd and even condition
if (userInput % 2 == 0){
    alert(' Your inputed ' +  userInput  + ' the number is Even number ');
}
else{
    alert('Your inputed ' +  userInput  + ' the number is Odd number ');
} 