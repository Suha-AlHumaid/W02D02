// CHALLENGE 1

const addOne = (arr) => {
    // Solution code here...
    let newArr = [];
    arr.forEach(function (item) {
        newArr.push(item+1); 
      });
      return newArr;
  };
  addOne([1,2,3]) // => [2,3,4]
  addOne([10,11,12]) // => [11,12,13]
  
  
// CHALLENGE 2
const addExclamation = (arr) => {
    // Solution code here...
    arr.forEach(function (item) {
        item = item + `!`; 
      });
      return arr;
  };
  
  addExclamation(["one","two","three"]) // => ["one!","two!","three!"]
  
  
// CHALLENGE 3
// CHALLENGE 4
// CHALLENGE 5
// CHALLENGE 6
// CHALLENGE 7
// CHALLENGE 8
// CHALLENGE 9
// CHALLENGE 10