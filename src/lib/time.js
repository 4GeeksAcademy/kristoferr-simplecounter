// let counter = 0;

// setInterval(function() {
// 	console.log(counter);
// 	counter++;
// }, 1000)

export function calculateSeconds(aCounter, placeValue){
	return Math.floor(aCounter / placeValue) % 10;
}

