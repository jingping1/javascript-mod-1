'use strict';

// 1. Open a prompt window to ask for the user's name
const name = prompt("Please enter your name:");

// 2. Target the HTML element with id 'target' and update its content
document.querySelector('#target').innerHTML = "Hello, " + name + "!";