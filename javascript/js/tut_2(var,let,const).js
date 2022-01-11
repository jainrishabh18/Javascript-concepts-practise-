/*
var = declared in global scope(can change it)

const = in global scope only but can be declared and used once repetition not allowed

let = declare locally , it is a block level content ,

*/


var rishabh='jain';
console.log(rishabh);
console.clear();
var r1  =245;
console.log(r1);
var arr1= [2,4,45,`rishabh`,`jain`]
// console.log(arr1);
arr1=[4545,31];
console.log(arr1);
// below rj,na,aj is counted as one string; 
const arr2= [45,'rj,na,aj'];
console.log(arr2);

// const arr2= [4,'rj,na,aj'];
// it will not print as it is const and repea twice willl throw error
// console.log(arr2);
{
let rishabh = `rishabh jain`;
// it will print rishabh jain as declared locally in block 
console.log(rishabh);
}
// it will print jain bcz declared globally. 
console.log(rishabh);


// data types


let harry = "gives tutuorial";
console.log('data type of harry is ' ,typeof(harry));
//  returns string


function find()
{

};
console.log('data type of harry is ' ,typeof(find));



//Type cohersion

let mystr = Number("965");
let mynum = 456;
console.log(mystr + mynum);


let myval1=String(654 );
let myval2=Boolean(rishabh);
console.log(myval1  +  myval2);










