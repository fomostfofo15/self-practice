// Week 4: Functional Programming (Advanced Thinking)

// Part A: Higher-Order Functions

// เขียนฟังก์ชัน customMap(arr, fn) ที่ทำงานเหมือน .map()
// customMap([1,2,3], x => x*2) // [2,4,6]

// เขียนฟังก์ชัน makeAdder(x) ที่ return ฟังก์ชันใหม่ซึ่งบวกค่า x เข้าไปทุกครั้งที่เรียก
// let add5 = makeAdder(5);
// add5(10); // 15