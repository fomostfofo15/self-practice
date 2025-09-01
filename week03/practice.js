//Week 3: Array Methods (Intermediate)
// Part A: map, filter, reduce

// ให้ array [1, 2, 3, 4, 5]
let numbers = [1, 2, 3, 4, 5];
// ใช้ .map() เพื่อสร้าง array ที่เป็นกำลังสองของทุกตัว
let squares = numbers.map(function(num){
    return num * num;
})
// ใช้ .filter() เพื่อเลือกเลขที่มากกว่า 2
let filtered = numbers.filter(function(num){
    return num > 2;
})
// ใช้ .reduce() เพื่อหาผลรวม
let sum = numbers.reduce(function(accumulator , currentvalue){
    return accumulator + currentvalue;
})
// Part B: find, some, every

// ให้ array ของ object นักเรียน
let students = [
    { name: "Ben", score: 45 },
    { name: "Alice", score: 78 },
    { name: "Mike", score: 55 }
];
// ใช้ .find() เพื่อหานักเรียนที่ชื่อ "Ben"
let studentBen = students.find(function(student){
    return student.name === "Ben";
})
// ใช้ .some() เพื่อตรวจว่ามีใครได้คะแนนต่ำกว่า 50 หรือไม่
let hasFailed = students.some(function(student){
    return student.score < 50 ;
})
console.log(hasFailed);
// ใช้ .every() เพื่อตรวจว่านักเรียนทุกคนสอบผ่าน (>= 50) หรือไม่
let allPassed = students.every(function(student){
    return student.score >= 50;
})


// Part C: Challenge

// Shopping Cart

// ใช้ .map() เพื่อสร้าง array ของชื่อสินค้าเท่านั้น
let productName = products.map(function(product){
    return product.name;
})

// ใช้ .reduce() เพื่อหายอดรวมทั้งหมด (price * qty)
let totalAmount = products.reduce(function(accumulator, currentProduct){
    return accumulator + (currentProduct.price * currentProduct.qty);
}, 0);
// ใช้ .some() ตรวจว่าสินค้าตัวไหนราคามากกว่า 100 หรือไม่
let hasExpensiveItem = products.some(function(product){
    return product.price > 100;
})
// ใช้ .every() ตรวจว่าทุกสินค้ามีจำนวน (qty) อย่างน้อย 1 หรือไม่
let allInStock = products.every(function(product){
    return product.qty >= 1;
})