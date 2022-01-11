console.log("tut9");


// created a element named element added unorderedlist ul in it gave id ,class,title to the li also added text node in it

// made a unorderedlist element and added innerhtml list in it

//creating element



let element = document.createElement('ul');
let text=document.createTextNode("rishabh made this ");
element.appendChild(text);
    element.className = 'childul';
    element.id = 'createdli';
    element.setAttribute('title','mytitle');
    element.setAttribute('href','//www.codewithharry.com');
    element.innerHTML = '<li><b>creating  a html inside class made by rishabh,</b></li>';
    // console.log(element);

// now giving jsquery to select query where we want to append our li element;

let ul =document.querySelector('ul.recently-named-class');
//this will add the element under important points

// append element 
ul.appendChild(element);

let div = document.querySelector('.child22');
// console.log(div);
//this will append under child22
div.appendChild(element);




// replacing element with other elements

let elem2 = document.createElement('h3');
let tnode1 = document.createTextNode(' created node ');
elem2.id="elem2";
elem2.className="elem2";
elem2.appendChild(tnode1);
// elem2.setAttribute('href','//www.codewithharry.com')
console.log(elem2);

// replaced element with elem2

element.replaceWith(elem2);

let replaceid= document.getElementById('recently-named-id');

// console.log(replaceid);
replaceid.replaceChild(elem2,document.getElementById('new'));

// 
let elem3 = document.createElement('a');
let tnode2 = document.createTextNode(' Go to CodeWithHarry');
elem3.id="elem3";
elem3.className="elem3";
elem3.appendChild(tnode2);
elem3.setAttribute('href','//www.codewithharry.com');

console.log(elem3);

let c44 = document.querySelector('.child44');
c44.appendChild(elem3);