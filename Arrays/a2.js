let char = "g";

let low_char =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upp_char = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
for (let i = 0;i<low_char.length;i++){
  if (char == low_char[i]){
    console.log(upp_char[i]);
  }
}