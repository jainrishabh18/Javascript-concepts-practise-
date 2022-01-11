console.log('hello');

// let element = document.getElementById('myfirst');
//  element = document.getElementById('myfirst');
//  element = document.getElementsByClassName('container');


// HTML element selectors(jsquery)  

// single element selector using jsquery

let sel = document.querySelector('#myfirst');


sel = document.querySelector('h1');
// change colour of heading to red
sel.style.color = 'purple';



sel = document.querySelector('#myfirst');
sel.innerText = 'changing the text of myfirst id using queryselector';

sel.innerHTML = '<h2><b>changing the text of myfirst id using queryselector</b></h2>';

// console.log(sel);

// multi element selector using jsquery


sel = document.querySelector('.container');
// it will make the colour of all the elements of container to purple
sel.style.color = 'purple';

// multielement selector without jsquery

let elem = document.getElementsByClassName('clrform');
// elem.style.color = 'red';

console.log(elem);


Array.from(elem).forEach(function(element) {
    console.log(element);
    element.style.color ='red';
})
