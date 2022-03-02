// // program to check if the string is palindrome or not

// function checkPalindrome(str) {

//     // find the length of a string
//     const len = string.length;

//     // loop through half of the string
//     for (let i = 0; i < len / 2; i++) {

//         // check if first and last string are same
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// // take input
// const string = "madam"

// // call the function
// const value = checkPalindrome(string);

// console.log(value);



const sush=(ma)=>{
    const ba =ma.length
    console.log(ba);
    for (let index = 0; index <ba/2; index++) {
        if(str[index]!==str[ba-1-index]){
            return "it is not plaindrome"
        }
        
        
    }
    return "the is palindrome"




}
const str="madam"
const da=sush(str)
console.log(da);



