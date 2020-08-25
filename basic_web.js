// declaring this variable automatically pulls it from movies.js
console.log(movies[1]);

//  convert the array of movies into a string
// join converts the array into a string
let names = movies.join(', ');
console.log(names);

// find the paragraph with the id of para
// p is now holding a piece of element using the id
let p = document.getElementById('para');
console.log(p);
// put the new string into the paragraph
//  textContent adds content to the webpage
p.textContent = names;
