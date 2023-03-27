// Write a function which taka a string and return counts of every character in the strings


// 1st method

function Count(str){
   // declare and empty object
   let frequencyCounter = {}

   // Loop the string
   for(let i=0; i<str.length; i++){
      let val = str[i]
      if(frequencyCounter[val] > 0){
        frequencyCounter[val] += 1
      }else{
        frequencyCounter[val] = 1
      }
   }

   return frequencyCounter


}


console.log(Count("Hellow"))


// 2 method

function Count2(str){
   let frequencyCounter = {}
   for(let val of str){
      frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
   }
   return frequencyCounter
}


console.log(Count2("hello"))


// Write a function which accept two array the function should be return true if every value in the array have its corresponding value in
// the second array

// 1 method

 
 function sameValue(arr1,arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
      let index = arr2.indexOf(arr1[i] ** 2);
      if(index == -1){
         return false
      }
      arr2.splice(index,1)
    }
    return true
 }

 console.log(sameValue([1,2,3,5,4],[1,16,9,4,25]))

// 2nd method

function sameValue2(arr1,arr2){

   if(arr1.length !== arr2.length){
      return false
   }
   let frequency1 = {}
   let frequency2 = {}


   for(let val of arr1){
      frequency1[val] = (frequency1[val] || 0) + 1
   }
   for(let val of arr2){
      frequency2[val] = (frequency2[val] || 0)  + 1
   }

  for(let keys in frequency1){
   if(!(keys ** 2 in frequency2)){
      return false
   }
   if(frequency2[keys ** 2] !== frequency1[keys]){
      return false
   }
  }
    
   return  true

}
console.log(sameValue2([1,2,3,5,4],[25,16,9,4,1]))


//Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,


function sameString(str1,str2){
   let freq1 = {}
   let freq2 = {}
   for(let val of str1){
      freq1[val] = (freq1[val] || 0) + 1
   };
    
   for(let val of str2){
      freq2[val] = (freq2[val] || 0) + 1
   };

   for(let key in freq1){
      if(!key in freq2){
         return false
      }
      if(freq1[key] !== freq2[key]){
         return false
      }
   }

   return true
   
}


console.log(sameString('abcd','dcab'))
 

// Write a function to get the 0 from the pair

// 1st method

function count(arr){
   let i = 0;
   let j = arr.length - 1

  while( i < j){
   let sum = arr[i] + arr[j]
   if(sum == 0){
      return [arr[i],arr[j]]
   }
   else if(sum > 0){
      j--
   }else{
      i++
   }
  }
  return false

}

console.log(count([-3,-2,-1,-0,1,2,5,6,8,9]));



// 2nd method

function count2(arr){
  for(let i=0; i<arr.length; i++){
    for(let j = i + 1; j< arr.length; j++){
      if(arr[i] + arr[j] == 0){
         return [arr[i] , arr[j]]
      }
    }
  }
  return false
}

console.log(count2([-3,-2,-1,-0,1,2,5,6,8,9]));
