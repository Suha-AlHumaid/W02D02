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
    let newArr = [];
    arr.forEach(function (item) {
        newArr.push(item+"!"); 
      });
      return newArr;
  };
  
  addExclamation(["one","two","three"]) // => ["one!","two!","three!"]
  
  
// CHALLENGE 3
const addOneByMap = (arr) => {
    // Solution code here...
    let result = arr.map ((element) => {
return element + 1;
     });
     return result;
  };
  addOneByMap([1,2,3]) // => [2,3,4]
  addOneByMap([10,11,12]) // => [11,12,13]
// CHALLENGE 4
const addQuestion = (arr) => {
    // Solution code here...
    let result = arr.map ((element) => {
        return element + "?";
             });
             return result;
  };
  
  addQuestion(["one","two","three"]) // => ["one?","two?","three?"]
  
  
// CHALLENGE 5
const forLoopTwoToThe = (arr) => {
    // Solution code here...
    let result = arr.map ((element) => {
        return element=Math.pow(2,element);
             });
             return result;
  };
  
  forLoopTwoToThe([1,2,3]) // => [2,4,8]
  
// CHALLENGE 6
const typeNum = (arr) => {
    // Solution code here...
    let result = arr.filter((element) => {
        return typeof element == 'number' ;
             });
             return result;
 
  };

  typeNum([1, 'bob' ,3]) // => [1,3]

// CHALLENGE 7
// CHALLENGE 8
// CHALLENGE 9
// CHALLENGE 10