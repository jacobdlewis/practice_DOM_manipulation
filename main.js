document.querySelector('h1').classList.add('red');

var h2s = document.querySelectorAll('h2');
for (i=0; i < h2s.length; i++) {
  h2s[i].classList.add('blue');
}

// h3s toUpperCase(); 'hello'.toUpperCase() => 'HELLO'
var h3s = document.querySelectorAll('h3');
// for (i=0; i < h3s.length; i++) {
//   h3s[i].textContent = h3s[i].textContent.toUpperCase();
// }

// [] = Array.prototype
[].forEach.call(h3s, function(el){
  el.textContent = el.textContent.toUpperCase();
})

var target = document.querySelector('.target');
var elementString = '<h2>So many GOOGs! -  <a href="google.com">GOOG</a></h2>'
target.innerHTML = elementString;

document.querySelector('#add-element').addEventListener('click', function(){
  target.insertAdjacentHTML('afterend', elementString);
});







setInterval(function () {
  setRandomColor(document.querySelector('h1'))
}, 1000)

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function setRandomColor(element){
  element.style.color = randomColor();
}

function randomColor() {
  var red = getRandomColor();
  var green = getRandomColor();
  var blue = getRandomColor();
  return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

