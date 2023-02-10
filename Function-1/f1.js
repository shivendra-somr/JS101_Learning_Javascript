// Create a function to check if a number is Prime or Not

function checkPrime(num)
  {
    let c = 0;
    for (i=2;i<num;i++)
      if (num%i===0)
      {
        c++;
      }
    if (c>0 || num==1)
    {
      console.log("Not a prime");
    }
    else{
      console.log("Prime");
    }
  }
checkPrime(13);