// const { maxSatisfying } = require('semver');

// document.getElementById (id) - returns 1 element Node
let foot = document.getElementById('foot');
let p = document.getElementById('para');
p.textContent = 'First Paragraph';

// document.querySelector(css) - returns 1 element node
//  returns only first match of query
let p2 = document.querySelector('.main p.some');
p2.textContent = 'Second Paragraph';

// document.querySelectorAll(css) -returns a nodelist
// A nodelist is like an array, but every single element in it is a node
//  You must use a loop to get to/ target all peices of the nodelist

let ps = document.querySelectorAll('.main p');
for (var i = 0, num = ps.length; i < num; i++) {
	ps[i].textContent += 'Lopped';
}

// 4. Creating Html content with js

//  document.createElement(tagname) = returns 1 Element node
//  document.createTextNode(text) = returns 1 text node
//  parent.appendChild(node) = adds child to parent
//  parent.removeChild(node) = removes node from parent

// element.innerHTML
// element.textContent

let main = document.querySelector('.main');
//  selecting with the variable name is better
// let h2 = main.querySelector('h2');
// //  text is a child node of h2
// //  textContent is a shortcut to get to it
// h2.textContent = 'Loading Movies';

//  change/add tag to html
let p3 = main.querySelector('p');
// innerhtml allows you to add text and some html
p3.innerHTML = 'And now a list of <strong>Movies</strong>?';

//  Create a series of list item tags and insert it into a parent ul
let ul = document.createElement('ul');
// append child adds the tag to the page, always the last in the parent
main.appendChild(ul);

// for each provides us with 3 values: the items, the index and the array
movies.forEach(function(item) {
	let li = document.createElement('li');
	// creates text that will go into the list items
	let txt = document.createTextNode(item);
	li.appendChild(txt);
	ul.appendChild(li);
});

//  to strip off everything inside ul:
// works like magic
// main.removeChild(ul);

// 5 Traversing the DOM
// parent.children: is a NodeList of customElements
// parent.firstElementChild: is 1 Element Node
// parent.lastElementChild: is 1 element Node
// Node.nextElementSibling: is 1 element Node
// node.previousElementSibling: is 1 element Node
// node.parentNode is 1 element node
// parent.contains(node): returns Boolean

// how many children does main have
//  children gives you the number of elements
// let c = main.children;
// console.log(c.length);
// // childnode includes text ndoes
// let c2 = main.childNodes;
// console.log(c2.length);

let ul2 = main.children[4];
// let h2 = main.firstElementChild;
// let ul3 = h2.nextElementSibling;
// let h2a = ul3.previousElementSibling;
// console.log(h2a);

//  Grab lis in ul
let lis = ul2.children;
//  same as ul.firstElementChild
let firstli = lis[0];

//  lets access the text in the first li
//  the text in it
var txt = firstli.textContent;
// or
//  go to its first child, a text node, and extract its value
var txt2 = firstli.firstChild.nodeValue;
console.log(txt, txt2);

//  lets now manipulate this text content
//  by changing it to uppercase
firstli.firstChild.nodeValue = txt.toUpperCase();

var bool = main.contains(firstli);
console.log(bool);

//  finding a parent
//  Even though its says node, it will be an element node
// cos you cannot have text that is the parent of anothe ele
console.log(main.parentNode);
