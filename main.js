document.querySelector('h1').classList.add('red');

//create a variable that holds all h2s. loop through
//the list and add a class of 'blue' to each item
var h2s = document.querySelectorAll('h2');
for (i=0; i<h2s.length; i++) {
  h2s[i].classList.add('button_like');
}

var h3s = document.querySelectorAll('h3');
for (x=0; x<h3s.length; x++) {
  h3s[x].textContent = h3s[x].textContent.toUpperCase();
}

