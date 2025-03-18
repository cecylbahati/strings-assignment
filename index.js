let a="extravaganza";
console.log(a.slice(-4));
let food="The quick brown fox jumps over the lazy dog.";
let insertstring="eat";
let newfood=food.slice(0,4)+insertstring+ food.slice(4);
console.log(newfood);
let story="The quick brown fox jumps over the lazy dog.";
let countouccerrences=(str,word) => {

        return str.toLowerCase().split(word.toLowerCase()).length-1;


    };
    let thecount=countouccerrences(story,"the");
    let brownCount=countouccerrences(story,"brown");
    console.log(thecount);
    console.log(brownCount);
    let string1="The pupils are reading in the library.";
    let string2="The child was sitting on the table before it fell.";
    let findword=(str,word) => {
        return str.includes(word);
    };
    let foundare=findword(string1,"are");
    let foundsitting=findword(string2,"sitting");
    console.log(foundare);
    console.log(foundsitting);
    let str1="wonderful";
    let str2="amazing";
    let str3="UndERneath";
    let str4="A wonderful world";
    let uppercasestr1=str1.toUpperCase();
    let lowercasestr2=str2.toLowerCase();
    let lowercasestr3=str3.toLowerCase();
    let titlecasestr4=str4
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
    console.log(uppercasestr1);
    console.log(lowercasestr2);
    console.log(lowercasestr3);
    console.log(titlecasestr4);

    

