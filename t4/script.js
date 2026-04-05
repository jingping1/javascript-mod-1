
const studentName = prompt("What is your name, young wizard?");

const randomValue = Math.floor(Math.random() * 4) + 1;

let house = "";


if (randomValue === 1) {
    house = "Gryffindor";
} else if (randomValue === 2) {
    house = "Slytherin";
} else if (randomValue === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

document.querySelector('#target').innerHTML = studentName + ", you are " + house + ".";