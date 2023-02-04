//Print Prime Numbers from 1 to given limit
let num = 100;
for (let i = 2; i<=num; i++){
  let p = 0;
  for (let j = 2;j<i;j++){
    if (i%j == 0 ){
      p++;
    }
  }
  if (p<=0){
    console.log(i);
  }  
}