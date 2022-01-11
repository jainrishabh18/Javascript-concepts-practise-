let greeting = 'good morning';
let Name = 'John';

console.log(greeting +' '+ Name);
let fruits = 'orange and bananas';
let html;
html = `<h1>this is the heading of this page </h1>
        <p>hello ${Name} what is your MORNING schedule?</p>
        <h3> do you eat ${fruits} in the morning?</h3>`
html = html.concat('this', ' is rishabh here');
// html = html.length;
// html = html.toLowerCase();

html = html.toUpperCase();
// html = html.indexOf('HEADING');
// html = html.lastIndexOf('>');
// html = html.charAt(58);
// html = html.endsWith('e');
// html = html.includes('RISHABH');

// html = html.substring(1,90);
// html = html.slice(0,60);
// html = html.split('>');
html = html.replace('THIS','[]');



   






console.log(html);
document.body.innerHTML=html;