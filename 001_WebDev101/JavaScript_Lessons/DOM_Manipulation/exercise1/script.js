const container = document.querySelector('#container');


const paraContent1 = document.createElement('p');
paraContent1.style.color = 'red';
paraContent1.textContent = 'Hey I\'m red!';
container.appendChild(paraContent1);

const h3Content1 = document.createElement('h3');
h3Content1.style.color = 'blue';
h3Content1.textContent = 'I\'m a blue h3!';
container.appendChild(h3Content1);


const divContainer1 = document.createElement('div');
divContainer1.style.cssText = 'width: 300px; text-align: center; border: 3px solid black; background: pink';

const h1Content1 = document.createElement('h1');
h1Content1.textContent = 'I\'m a div';
divContainer1.appendChild(h1Content1);
const paraContent2 = document.createElement('p');
paraContent2.textContent = 'ME TOO!';
divContainer1.appendChild(paraContent2);

container.appendChild(divContainer1);

/*
const button1 = document.createElement('button');
button1.setAttribute("onclick", "alert('Hello World')");
button1.textContent = 'Click Me';
container.appendChild(button1);
*/

let btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World');

let btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('Hello World');
});

/*Method 1:*/
function alertFunction() {
  alert('YAY! YOU DID IT!');
}

/*Method 2:*/
let btn5 = document.querySelector('#btn5');
btn5.onclick = alertFunction

/*Method 3:*/
let btn6 = document.querySelector('#btn6');
btn6.addEventListener('click', alertFunction);

let btn7 = document.querySelector('#btn7');
btn7.addEventListener('click', function(e){
  e.target.style.background = 'blue'
})
/* The e in that function is an object that references the event itself. Within that object you have access to many useful properties and function such as which mouse button or key pressed, or information about the event's target - the DOM node that was clicked.*/

/*Adding listeners to groups of nodes*/

/* buttons is a node list. It looks and acts much like an array. */
const buttons = document.querySelectorAll('button');
/* we use the .forEach method to iterate through each button */
buttons.forEach((button) => {
  /* and for each one we add a 'click' listener */
  button.addEventListener('click', (e) => {
    alert(button.id);
  });
});
