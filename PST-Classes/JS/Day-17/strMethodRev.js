// concat
let s1="Hello"
let s2="World"
let s3=s1.concat(` ${s2}`)
console.log(s3)

// convert odd index uppercase and even index lowercase;
let str="hello WORLD";
let newstr=str.split('');
for(let i in newstr){
    if (i%2==0){
        newstr[i]=newstr[i].toLowerCase();
    }
    else{
        newstr[i]=newstr[i].toUpperCase();
    }
}
newstr=newstr.join('');
console.log(newstr);

// Declare a new string replace it with a new word using substring concat split;
let string="Din me Yug, Raat me Khatma"
let newStr=string.replace(/Yug/gi,"Mahatma");
console.log(newStr);
let substring = newStr.substring(0,15);
console.log(substring);
let newSubstring=substring.concat("Ramoliya");
console.log(newSubstring);
let split=newSubstring.split('a');
console.log(split);
