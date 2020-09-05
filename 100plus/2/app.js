var arrayHEXElements = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function clickBtn(elem) {
	var color = randomColor(arrayHEXElements);
	changeBackground(color);
	document.getElementById('hex').innerHTML = String(color);
}

function randomColor(arr) {
	var color = "#";
	
	for (let i = 1; i <= 6; i++) {
		var elemArr = getRandomInt(0,15);
		color += String(arr[elemArr]);
	}

	return color;
}



function getRandomInt(min,max) {
	return Math.floor(Math.random() * (max-min+1) + min);
}

function changeBackground (color) {
	document.body.style.background = color;
}