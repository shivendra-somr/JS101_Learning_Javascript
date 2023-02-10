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
      return i;
    }
    else
    {
      return ;
    }
  }
// Use the same function to print Non-Primes from 2 to a given limit
let n = 13;
for (i = 2; i<=n ; i++)
  {
    if (checkPrime(i))
    {
      console.log(i);
    }
  }