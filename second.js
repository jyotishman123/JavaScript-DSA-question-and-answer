// Count unique values
// Implement a function as uniquevalue which accept a sorted array and count the unique values from the array


let array = [1,1,1,2,2,3,4,5,5,6,6,6,9,9,8];



function uniquevalue(arr){
    let i = 0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
    }

    return i + 1
}

console.log(uniquevalue(array))


//Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any //duplicates among the arguments passed in.


// 1st method

function allThreeDuplicate(...arg){
    let i=0;
    let j = 1;

    if(arg.length <= 1){
        return  false
    }

    while(i<j){
        if(arg[i] == arg[j]){
            return true
        }
        else if(j == arg.length - 1){
            i++;
            j = i+1
        }
         
        else if(i == arg.length - 1){
            return false
        }

        else{
            j++
        }
    }
    
}


console.log(allThreeDuplicate(2,3,1,2));



// 2nd method

function allThreeDuplicate2(...arg){
   if(arg.length <=1){
    return false
   }
   let i=0;
   let frequencyCounter = {}

  while(i < arg.length){

    if(frequencyCounter[arg[i]]){
        return true
      }
     
      frequencyCounter[arg[i]] = 1
      i++
      
  }
  return false

}


console.log(allThreeDuplicate2(1,2,3,4,5,6,3,67,2));


// write a function called maxSum array which accept an array of integer and number called n
// The function should calculate the maximum sum of n consecutive elements of the array



 


 



 


 