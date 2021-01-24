// //for loop
// console.log("forloop")

//  var arr = [1,2.2,3,4,5,"99"];
//  len = arr.length
// console.log("Lenth of array is ",len)
// for (i=0;i<arr.length;i++){
// 	//break and continue 
// 	if (i == 2){
// 	 //break;	// yahe pe jaise hee i ki value 2 hui loop break ho gaya 
// 	 continue; // yahe pe sir i==2 [3 ki value skip ho gai] ko skip karenge 
// 	 //aur baaki sab print hoenge
// 	} 
	 	
// 	console.log("Value is ",arr[i])

// }


// //  while loop condition pehle check hoga 
// console.log("while loop")
// let j = 0 
// while (j<len){
// 	console.log(arr[j])
// 	j=j+1
// 	//j+=1
// }
//  // do while loops isme bhale hee condition wrong ho ek baar to loop chalega hee 
// console.log("do while loop")
// let k = 0 
// do {
// 	console.log(arr[k])
// 	k+=1
// }while (k<len)






//Array methods 

let NewArr = [1,2,3,4,5,6,9.9]
//console.log(NewArr)

// console.log(NewArr.length)   // Determines length of array 
// NewArr.pop() 			   // removes last element value of array
// NewArr.push("Harry")		  // last mai harry add karega similar to append
// NewArr.shift() 			 // First element chodh ke baaki sab print karenge 
//NewArr.unshift("Harry") 	// Adds a new value to the first index 
// NewArr.toString()        //converts array to a string 
//NewArr.sort()				// Sorts in ascending order
//delete(NewArr[0])           // deletes 0th index of array .. can delete any element

//console.log(NewArr) 

// String Methods in JS 

let myString = "Harry is a good good boy"
console.log(myString.length)
console.log(myString)
console.log(myString.slice(0,5)) // sirf 0to4 index dikhega baki sab gayab
newStr = myString.replace( "good" , "bad") // replaces first occurence 

console.log(newStr)

// console.log(myString.indexOf("good")) // returns index of first word which is to be found
// console.log(myString.lastIndexOf("good")) // 2nd good ka index diya 

 



