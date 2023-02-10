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
      // console.log("Not a prime");
      return ;
    }
    else{
      // console.log("Prime");
      return i;
    }
  }

// Use the above function to print the Primes from 2 to a given limit
let n = 102
for (i = 2; i<=n ; i++)
  {
    if (checkPrime(i))
    {
      console.log(i);
    }
  }