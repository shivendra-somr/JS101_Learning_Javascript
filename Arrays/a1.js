let a = [1,2,3,4,6,8,9,10,34,90];
let b = ""
for (let i=1;i<a.length;i++){
  b += "("+ i + ")"+a[i] + " ";
}
console.log(b);