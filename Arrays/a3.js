let a = [1,2,3,4,6,8,9,10,34,90];
let sum = 0;
let k = 0;
for (let i =0; i<a.length;i++){
  if (a[i]%2==0){
    sum +=a[i];
    k++;
  }
}
console.log(sum/k);