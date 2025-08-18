// Convert Celsius to Fahrenheit Write a program that takes a temperature 
// in Celsius from the user and converts it to Fahrenheit.
function celsiusToFahrenheit(Celsius){
    return (Celsius * 9/5 ) +32;
}
console.log(celsiusToFahrenheit(25));

// Check Even or Odd
// Write a program that takes an integer from the user and determines whether it is even or odd.
function isEvenOrOdd(number){
    if(number % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(isEvenOrOdd(10))

// Sum of Numbers from 1 to N
function sumOfNumber(N){
    let sum = 0;
    for(let i = 1; i<= N; i++){
        sum += i;
    }
    return sum;
}
console.log(sumOfNumber(10))

//Write a program that takes a string from the user and counts the number of vowels (a, e, i, o, u) in it.
function countVowels(str){
    const vowels = 'aeiouAEIOU';
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count ++;
        }

    }
    return count;
}
// Write a program that takes a string from the user and prints it in reverse order.
function reverseString(str){
    let reversed = '';
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i];
    }
    return reversed;
}

//built-in methods
function reverseStringBuiltin(str){
    return str.split('').reverse().join('');
}