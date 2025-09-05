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