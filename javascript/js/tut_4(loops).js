let array =[2,4,6,4,'rishabh','rohit'];

// way of itterating an array instead of using for loops
array.forEach(function(element) {
    console.log(element);
})

let myobj={
    name : 'rishabh',
    age :'21',
    pursuing :'Btech',
    goal : '6 month hustle cracking any mnc and  getting big package',
    laptop :'Lenovo',

}
// way of iterating objects in javascript
for(let key in myobj){
    console.log(` ${key} -> ${myobj[key]}`)
}
// console.log(myobj['age']);
