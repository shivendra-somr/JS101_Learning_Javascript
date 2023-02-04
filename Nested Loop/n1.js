//Print the Calendar date in the below format
//1-1
for (let i = 1;i<=12;i++){
    switch (i){
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
          for (let j = 1; j<=31;j++){
            console.log(j+"-"+i);
          }
          break;
      case 4:
      case 6:
      case 9:
      case 11:
          for (let j = 1; j<=30;j++){
            console.log(j+"-"+i);
          }
          break;
      case 2:
          for (let j = 1; j<=28;j++){
            console.log(j+"-"+i);
          }
          break;
    }
 }  