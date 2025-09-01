const shallowEquality = (obj1 , obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(keys1.length !== keys2.length){
        return false; 
    }

    for(let key of keys1){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

function shallowEquality2(obj1,obj2) {

    if(Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for(let key of Object.keys(obj1)){
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}


let book1 = {
    isbn:123456789,
    title: 'JavaScript Basics',
}

let book2 = {
    isbn:123456789,
    title: 'JavaScript Basics',
}

console.log(shallowEquality(book1, book2)); 

//Week 2: Arrays, Functions, and Objects
//Nested Arrays/Objects
// สร้าง array ของ object นักเรียน 3 คน (แต่ละคนมี name, age, scores เป็น array ของคะแนน 3 วิชา)
let students = [{
    names : 'fofo',
    age : 20,
    scores : [80, 90, 85]
},
{
    names : 'shinichi',
    age : 17,
    scores : [89, 91, 87]
},
{
    names : 'yamada',
    age : 15,
    scores : [70, 80, 65]
}]
// เขียนโปรแกรมเพื่อ พิมพ์ชื่อทุกคน
students.forEach(function(student){
    console.log(student.names);
})
// หาค่าเฉลี่ยคะแนนของแต่ละคน
students.forEach(function(student){
    let total = 0;
    student.scores.forEach(function(score){
        total += score;
    })
    let average = total / student.scores.length;
    console.log(`Average score of ${student.names} is ${average}`);
})
//1. Array of Objects
let books = [
    {
        isbn: 1234567489,
        title: 'junjouRomantica',
        author: 'Shungiku Nakamura',
        year: 2002
    },
    {
        isbn: 1234567489,
        title: 'dakaretaiOtoko',
        author: 'Hashimoto Aoi',
        year: 2018
    }
]
//object with Array
let library = {
    name : 'My Library',
    books : books
}
console.log(library.books[0].title);

// 2. Loop กับ Object
for (let book of library.books){
    console.log(`${book.title} (${book.year} by ${book.author})`);
    console.log('-------------------');
    console.log(`ISBN ${book.isbn}`);
}

// 3. Function ที่ return object หรือ array

// ฟังก์ชันสามารถ return อะไรก็ได้ → ทั้ง array และ object
function createBook(isbn, title, author, year){
    return{
        [`isbn`]: isbn,
        [`title`]: title,
        [`author`]: author,
        [`year`]: year
    }
}
console.log(createBook(123456789, 'KaijuNo8','Shinji Nishikawa',2020))