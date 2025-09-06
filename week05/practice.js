//passingScore
const studentScore = [
    {
        name : 'Alice', score : 85
    },{
        name : 'Bob', score : 78
    },{
        name : 'Charlie', score : 92
    }
]
const passingNames = studentScore.filter(student => student.score >= 70).map(student => student.name);
console.log(passingNames);

console.log(Array.isArray([]))
console.log(Array.isArray("[]")) 

//merge string
const arr1 = ['Hello', 'World'];
const arr2 = ['Welcome', 'to', 'JavaScript'];
const merged = arr1.concat(arr2).join(' ');
console.log(merged);

//reverse
const nums = [13,5,7]
nums.reverse();
console.log(nums);

//sort
const array = [1, 30, 4, 21, 100000];
array.sort((a,b) => a - b);
console.log(array);
// Expected output: Array [1, 100000, 21, 30, 4]

//เรียงชื่อ ตามลำดับตัวอักษร
const stds = [
  { id: 1, name: "Tisanai", email: "tisanai@sit.kmutt.ac.th" },
  { id: 5, name: "Pornchai", email: "pornchai@sit.kmutt.ac.th" },
  { id: 2, name: "Suda", email: "suda@sit.kmutt.ac.th" },
]
const name = stds.sort((a,b) => a.name.localeCompare(b.name));
console.log(name);

//commonJS
function echo(value){
    return value;
}
module.exports = echo;

//practice2
// Write a function addProperty(obj, key, value) that adds a new 
// property to an object and returns the updated object
function addProperty(obj, key, value){
    obj[key] = value;
    return obj;
}
console.log(addProperty({Food: 'Hamburger'}, 'Calories', 500));
// console.log(addProperty({}, 'City', 'Bangkok'));

// Write a function removeProperty(obj, key) that removes a property
function removeProperty(obj, key){
    delete obj[key];
    return obj;
}
console.log(removeProperty({'City': 'Bangkok', 'Country':'Thailand'},'City'))
// Write a function mergeObject(obj1, obj2) and return merges two 
// objects.
function mergeObject(obj1, obj2){
    return{...obj1,...obj2};
}
console.log(mergeObject({'Name': 'Focus'},{'Age': 19}))

//Write a function getFreqOfWords(sentence) that returns an object with keys representing 
// unique words in lowercase and values representing the frequency of occurrences of each 
// word with ignore case in the sentence. If the input string is null or undefined, return 
// undefined.
function getFreqOfWords(sentence){
    if(sentence === null || sentence === undefined) return undefined;
    const words = sentence.toLowerCase().split(" ");
    const freq = {};
    for(let word of words){
        if(freq[word]){
            freq[word]++;
        }else{
            freq[word] = 1;
        }
    }
    return freq;
}
console.log(getFreqOfWords("Hello hello HELLO"));
console.log(getFreqOfWords(null));
console.log(getFreqOfWords(undefined));

//Write a function getLongestWord(sentence) that returns the longest word in a sentence.
function getLongestWord(sentence){
    const words = sentence.split(" ");
    let longest = "";
    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(getLongestWord("I love programming in JavaScript"));
console.log(getLongestWord("The quick brown fox jumps over the lazy dog"));
console.log(getLongestWord("A journey of a thousand miles begins with a single step"));

//Write a function capitalizeWords(sentence) that capitalizes the first letter of each word in a sentence.
function capitalizesWords(sentence){
    if(!sentence) return "";
    const words = sentence.split(" ");
    for(let i = 0; i < words.length; i++){
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    return words.join(" ");
}
console.log(capitalizesWords("hello world! this is a test."));
console.log(capitalizesWords("JAVA is fun"));
console.log(capitalizesWords(""));

//Write a function isPalindrome(str) that checks if a given string is a palindrome.
function isPalindrome(str){
    const sentence = str.toLowerCase().split(" ").join("");
    const reversed = sentence.split("").reverse().join("");
    if(sentence === reversed){
        return sentence + " is a palindrome";
    }else{
        return sentence + " is not a palindrome";
    }
}
console.log(isPalindrome("A man a plan a canal Panama"));
console.log(isPalindrome("Hello World"));

//Write a function extractAndRename(obj) that extracts properties 
// name and age from an object, renames them to fullName and 
// yearsOld, and returns a new object with these properties.
function extractAndRename(obj){
    const {name, age} = obj;
    return{fullName : name, yearsOld: age};
}
console.log(extractAndRename({name: "Alice", age: 30, city: "New York"}));
console.log(extractAndRename({name: "Bob", age: 25, country: "USA"}));

//Write a function filterAdults(people) that takes an array of
// objects representing people with properties name and age,
// and returns a new array containing only the people who are
// 18 years old or older.
function filterAdults(people){
    return people.filter(person => person.age >= 18);
}
console.log(filterAdults([{name: "Alice", age: 30}, {name: "Bob", age: 17}, {name: "Charlie", age: 25}]));
console.log(filterAdults([{name: "David", age: 15}, {name: "Eve", age: 20}, {name: "Frank", age: 18}]));

// Write a function mergeAndDestructure(obj1, obj2) that merges two 
// objects using the spread operator, and then destructures the merged 
// object to extract specific properties. Return an object with the extracted 
// properties.
function mergeAndDestructure(obj1, obj2){
    const merged = {...obj1,...obj2};
    const{name,age}= merged;
    return {name,age};
}
console.log(mergeAndDestructure({name: "Alice", age: 30}, {city: "New York", country: "USA"}));
console.log(mergeAndDestructure({name: "Bob", age: 25}, {city: "Los Angeles", country: "USA"}));

//  Write a function removeDuplicateWords(sentence) that takes a string as input and returns a new 
// string with all duplicate words removed, while preserving the order of the first occurrence of 
// each word. The function should be case insensitive, but the output should maintain the original 
// casing. If the input is null, undefined, or an empty string, return an empty string.

function removeDuplicateWords(sentence){
    if(!sentence) return "";
    const words = sentence.split(" ");
    const seen = new Set();
    const result = [];
    for(let word of words){ 
    }

}