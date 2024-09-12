
function checkDigitsInName(name){
  if(typeof name !== 'string'){
    return 'Invalid Input'
  }
  for(let i = 0; i < name.length; i++){
    if(!isNaN(name[i])){
      return true;
    }
    
  }
  return false;
}
console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));