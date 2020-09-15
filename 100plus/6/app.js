var background = document.querySelector('#content');
var bgItem = 0;
var bgArray = [
	'url("./img/1.jpg") center/cover fixed no-repeat',
	'url("./img/2.jpg") center/cover fixed no-repeat',
	'url("./img/3.jpg") center/cover fixed no-repeat',
	'url("./img/4.jpg") center/cover fixed no-repeat',
	'url("./img/5.jpg") center/cover fixed no-repeat'
];

function left() {
	bgItem--;
	if (bgItem < 0) {
		bgItem = (bgArray.length-1);
		background.style.background = bgArray[bgItem];
	} else {
		background.style.background = bgArray[bgItem];
	}
}

function right() {
	bgItem++;
	if (bgItem == bgArray.length) {
		bgItem = 0;
		background.style.background = bgArray[bgItem];
	} else {
		background.style.background = bgArray[bgItem];
	}
}