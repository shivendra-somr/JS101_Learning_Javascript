// Given a string print, the number of times each character appears
let str = "Javascript"

let object = {};
for (let i = 0; i < str.length; i++) {
  if (object[str[i]] == undefined) {
    object[str[i]] = 1;
  }
  else {
    object[str[i]]++;
  }
}
console.log(object);