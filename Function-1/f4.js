// Write a function to check if the char is a small case or not.

let char = "A";
checkSmallChar(char);

// Function
function checkSmallChar(test)
  {
    let c = 0;
    let str = "abcdefghijklmnopqrstuvwxyz";
    for (i =0; i<26; i++)
      {
        if (test === str[i])
        {
          c = 1;
          break;
        }
      }
    if (c===1)
    {
      console.log("Small :)");
    }
    else{
      console.log("Not Small :(")
    }
  }