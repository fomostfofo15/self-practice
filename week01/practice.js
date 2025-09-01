//Week 1: Arrays, Functions, Objects
// Part 1: Arrays

// Basic Access
// สร้าง array ของชื่อเพื่อนอย่างน้อย 5 คน
let friends = ['UV','Namwran','FOFO','BeamBeam','Kong']
// เข้าถึง element ตัวแรก, ตัวกลาง, ตัวสุดท้าย และพิมพ์ออกมา
console.log(friends[0]); //คนแรก
console.log(friends[2]); //คนกลาง
console.log(friends[4]); //คนสุดท้าย
// เพิ่มชื่อใหม่ลงไปท้าย array แล้วลบชื่อแรกออก
friends.push('NewFriend');
friends.pop(2);

// Loop & Calculation

// ให้ array ของตัวเลข [10, 20, 30, 40, 50]
let numbers =[10,20,30,40,50]
// เขียน loop เพื่อหาผลรวม
let sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);
// หาค่าเฉลี่ยของ array นี้
let average = sum / numbers.length;
console.log(average);

// Array Manipulation
// เขียนโปรแกรมรับ array ของตัวเลข แล้วคืน array ใหม่ที่ ทุกตัวถูกคูณ 2
let doubleNumbers = numbers.map(function(num){
    return num * 2 ;
})

console.log(doubleNumbers)

//forEach
doubleNumbers.forEach(function(num){
    console.log(num);
})

let names = ['UV','Namwran','FOFO','BeamBeam','Kong']

names.forEach(function(value, index){
    console.log(`names[${index}]: ${value}`);
});