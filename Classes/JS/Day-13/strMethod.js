let a="Hello"
let b=new String("Hello")

/*String Methods:
1. length: It returns the length of the string
2. charAt(index): It returns the character at the specified index
3. substring(start, end): It returns a substring from the start index to the end index (exclusive)
4. indexOf(searchValue): It returns the index of the first occurrence of the searchValue in the string
5. toUpperCase(): It converts all lowercase characters in the string to uppercase
6. toLowerCase(): It converts all uppercase characters in the string to lowercase
7. includes(searchValue): It returns true if the string contains the searchValue, false otherwise
8. replace(searchValue, replacementValue): It returns a new string with the first occurrence of the searchValue replaced with the replacementValue
9. split(separator): It splits the string into an array of substrings based on the separator
10. trim(): It splits the string into an array
11. slice():
 0  1  2  3  4
 H  e  l  l  o
-5 -4 -3 -2 -1
*/
let str="Hello"; 
console.log(str.slice(-3)) // llo
console.log(str.slice(-3,-2)) // l (-3 is included where as -2 is not)
console.log(str.slice(3,-1)) // l
console.log(str.slice(3)) // lo

let x="hello"
console.log(x.charAt(0)) // it is not taking negative value
console.log(x.at(-2)) // it is taking negative value

let msg="Din me Yug, Raat me Andhi"
let newmsg=msg.replace(/yug/gi,"Gandhi")
// let newmsg1=msg.replaceAll(/yug/gi,"Ramoliya")
// console.log(newmsg1)
console.log(newmsg)
console.log(msg)


// Date object
let d=new Date('1971-10-23')
console.log(d)
console.log(d.getTime())
console.log(d.getFullYear())
console.log(d.getMonth())
console.log(d.getDate())
console.log(d.getHours())
console.log(d.getMinutes())
console.log(d.getMilliseconds())
console.log(d.getSeconds())