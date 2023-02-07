// Given an array find the unique items in the array
let array = ["Masai","School","Javascript","School","DSA","Masai"];

let object = {};
for (let i = 0; i<array.length;i++)
  {
    object[array[i]] = 1;
  }
console.log(object);