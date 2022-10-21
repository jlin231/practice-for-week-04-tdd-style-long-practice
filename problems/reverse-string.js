function reverseString(string) {
  let output = "";
  if(typeof string !== "string"){
    throw TypeError('Not a String!')
  }
  for(let i = string.length-1 ; i >= 0; i--){
    output += string[i]; 
  }
  return output; 
};


module.exports = reverseString;