console.log("understand dom");

// let a=document;
// a = document.all;
// // a = document.forms;
// // a = document.body;
// // a = document.links[0].href;
// // a = document.images[0];

// Array.from(a).forEach(function(element) {
//     console.log(element);

// })


// webcrawler and extraction


let extractLinks = document.links;

let string = "harry";

Array.from(extractLinks).forEach(function(element) {
    if(element.href.includes(string)){
        console.log(element.href);
    }
})





// below code is used in  code with harry website to extract all links having string "harry" in that (succefully extracted)

Array.from(document.links).forEach(function(element){
    if(element.href.includes("harry")){console.log(element.href)};
})


// extracted all scripts from code with harry website.

Array.from(document.scripts).forEach(function(element){
    console.log(element.src.toString());
 })


// extracted all images from code with harry website. 
Array.from(document.images).forEach(function(element){
    console.log(element.src.toString());
 })

