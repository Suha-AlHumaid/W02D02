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
const containsAnd = (arr) => {
    // Solution code here...
    let result = arr.filter((element) => {
        
        return element.indexOf(`and`) ;
             });
             return result;
  };
  containsAnd(['panda', 'ran', 'and']) ;
  
// CHALLENGE 8
const oddValues = (arr) => {
    // Solution code here...
    let result = arr.filter((element) => {
        
        return (element % 2  );
             });
             return result;
  };
  oddValues([1,2,3])//returns [1,3]

// CHALLENGE 9

const addValues = (arr) => {
    // Solution code here...
    let result = arr.reduce((acc, element ,index) => {
        acc += element ;
        return acc;
             });
             return result;
  };
  
  addValues([1,2,3,4]) // => 10
  addValues([15,10,15,5]) // => 45
  
  
  
// CHALLENGE 10
const countNumberOfElements = (arr) => {
    // Solution code here...
    let result = arr.reduce((acc, element ,index) => {
        acc = ++index;
        return acc;
             });
             return result;
  };
  countNumberOfElements([1,2,3,4]);
