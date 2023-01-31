let username_saved = "Shivendra";
let password_saved = "12345@abc";

let input_username = "Shivendra";
let input_password = "12345@abc";
if (username_saved == input_username){
  if (password_saved == input_password){
    console.log("Welcome Shivendra!");
  }
  else{
    console.log("Incorrect password. Please type correct password");
  }
}
else{
  console.log("No user found");
}