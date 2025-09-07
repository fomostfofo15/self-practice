// Week 4: Functional Programming (Advanced Thinking)
// Part A: Higher-Order Functions
// ฟังก์ชันรับฟังก์ชัน
function applyOperation(arr, operation){
    return arr.map(operation);
}
// เขียนฟังก์ชัน customMap(arr, fn) ที่ทำงานเหมือน .map()
// customMap([1,2,3], x => x*2) // [2,4,6]
let nums =[1, 2, 3, 4, 5];
let squared = applyOperation(nums,x => x*x); 
console.log(squared);

// เขียนฟังก์ชัน makeAdder(x) ที่ return ฟังก์ชันใหม่ซึ่งบวกค่า x เข้าไปทุกครั้งที่เรียก
// let add5 = makeAdder(5);
// add5(10); // 15
function makeAdder(x){
    return function(y){
       return x+y;
    }
}
console.log(makeAdder(2)(3));
// Part B : Higher-Order Functions with Array methods (map, filter, reduce)
// เขียนฟังก์ชัน customFilter(arr, fn) ที่ทำงานเหมือน .filter()
// customFilter([1,2,3,4], x => x%2 === 0) // [2,4]
function customFilter(arr, fn){
    const result = [];
    for(let i=0; i < arr.length; i++){
        if(fn(arr[i],i,arr)){
            result.push(arr[i]);
        }
    }
    return result;
}

//เขียนฟังก์ชัน customReduce(arr, fn, initialValue) ที่ทำงานเหมือน .reduce()
function customReducre(arr, fn, initialValue){
    let accumulator = initialValue;
    for(let i=0; i < arr.length; i++){
        accumulator = fn(accumulator, arr[i],i,arr);
    }
    return accumulator;
}

