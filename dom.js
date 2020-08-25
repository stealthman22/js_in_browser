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
