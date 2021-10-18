// -----HigherOrderAndCallBack-----
// CHALLENGE 1

const addOne = (arr) => {
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
    let newArr = [];
    arr.forEach(function (item) {
        newArr.push(item+"!"); 
      });
      return newArr;
  };
  
  addExclamation(["one","two","three"]) // => ["one!","two!","three!"]
  
  
// CHALLENGE 3
const addOneByMap = (arr) => {
    let result = arr.map ((element) => {
return element + 1;
     });
     return result;
  };
  addOneByMap([1,2,3]) // => [2,3,4]
  addOneByMap([10,11,12]) // => [11,12,13]
// CHALLENGE 4
const addQuestion = (arr) => {
    let result = arr.map ((element) => {
        return element + "?";
             });
             return result;
  };
  
  addQuestion(["one","two","three"]) // => ["one?","two?","three?"]
  
  
// CHALLENGE 5
const forLoopTwoToThe = (arr) => {
    let result = arr.map ((element) => {
        return element=Math.pow(2,element);
             });
             return result;
  };
  
  forLoopTwoToThe([1,2,3]) // => [2,4,8]
  
// CHALLENGE 6
const typeNum = (arr) => {
    let result = arr.filter((element) => {
        return typeof element == 'number' ;
             });
             return result;
 
  };

  typeNum([1, 'bob' ,3]) // => [1,3]

// CHALLENGE 7
const containsAnd = (arr) => {
    let result = arr.filter((element) => {
        
        return element.indexOf(`and`) ;
             });
             return result;
  };
  containsAnd(['panda', 'ran', 'and']) ;
  
// CHALLENGE 8
const oddValues = (arr) => {
    let result = arr.filter((element) => {
        
        return (element % 2  );
             });
             return result;
  };
  oddValues([1,2,3])//returns [1,3]

// CHALLENGE 9

const addValues = (arr) => {

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
    let result = arr.reduce((acc, element ,index) => {
        acc = ++index;
        return acc;
             });
             return result;
  };
  countNumberOfElements([1,2,3,4]);


//-------Objects--------

//CHALLENGE 1
const checkValues = (obj, value) => {
    return Object.values(obj).includes(value); 
  };
  
//   checkValues({name:"ahmed",age:15},15) // => true
//   checkValues({name:"ahmed",age:15},20) // => false
  
  

//CHALLENGE 2
const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
  const getCourseKeys = (obj) => {
    // Solution code here...
    return Object.keys(obj); 
  };
  
  getCourseKeys(courseInfo)// => ['name', 'duration', 'topics', 'finalExam']

  

//CHALLENGE 3
const employesObj = {
    GraceHopper: '222-303-5938',
    AdaLovelace: '222-349-9842',
    AlanTuring: '222-853-5933'
  }
  
  //HR has asked you to change the data to make it easier to print so that it looks like this: 
  
  const employesArr =[
    'Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'
  ]
  
  
  const updateNumbers = (obj) => {
    const names = Object.keys(obj);
    const phones = Object.values(obj);
    // const arr = {...obj};
const arr = []
for (i=0; i< names.length; i++){
    arr.push(`${names[i]}: ${phones[i]}`)
}
    console.log(arr);
  };
  
//CHALLENGE 4
//CHALLENGE 5
//CHALLENGE 6
