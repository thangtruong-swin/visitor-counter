let countEL = document.getElementById("counter-el");
let saveEL = document.getElementById("save-el");

// console.log(countEL);
let count = 0;
function increment() {
	// console.log("Button was clicked");
	count += 1;
	countEL.textContent = count;
}

function Decrement() {
	count -= 1;
	countEL.innerText = count;
}

function save() {
	// console.log(count);
	let countStr = count + " - ";
	saveEL.textContent += countStr;
	countEL.textContent = 0;
	count = 0;
}

function reset() {
	countEL.textContent = 0;
	count = 0;
	saveEL.textContent = "The previous entered: ";
}
