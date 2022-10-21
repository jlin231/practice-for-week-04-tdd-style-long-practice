function myMap(inputArray, callback) {
  // Your code here
  let output = [];
  inputArray.forEach((element)=>{
    output.push(callback(element))
  })
  inputArray.map((element) => {element;})
  return output;
  
}

module.exports = myMap;