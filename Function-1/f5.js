// Write a function to replace spaces in a given string with - .

let str = "Masai Java Script Class"

console.log(replaceSpaces(str));

function replaceSpaces(test)
  {
    let a = ""
    for (i = 0; i<test.length ; i++)
      {
        if (test[i]===" ")
        {
          a += "-";
        }
        else
        {
          a += test[i];
        }
      }
    return a;
  }