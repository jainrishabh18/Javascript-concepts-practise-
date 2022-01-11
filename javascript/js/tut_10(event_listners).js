console.log(" learn event listners here"); 
// used "click" eventlitener here

let getid =document.getElementById("heading").addEventListener('click',function(e) {
    console.log("you clicked on heading");

    document.body.style.backgroundColor=`blue`;





    // let variable =e.target; //will head to the element like it take us to h1  where heading was written

    // variable =Array.from(e.target.classlist);
    
    // click on heading it will redirect us to code with harry
    // location.href="//codewithharry.com"
    // console.log(variable);
})

// let variable =e.target;

getid =document.getElementById("myfirst").addEventListener('mousemove',
function(e) {
    // document.body.style.backfaceVisibility="hidden";
    document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},${e.offsetY},150)`;


})

let getid1 =document.getElementById("practice1").addEventListener('mousemove',
function(e) {
    // document.body.style.backfaceVisibility="hidden";
    // document.body.style.backgroundColor="red";
    document.body.style.border="thick dotted black";

})



//here are some of the mouse event listners we can use

// "click",  "mouseup/down"  ,  "mouseover/mouseout"  ,  "dblclick"   ,   "mouseenter/leave" 