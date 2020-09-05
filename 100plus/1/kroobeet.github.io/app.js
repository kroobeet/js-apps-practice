function clickBtn(elem) {
	var numberColor = getRandomInt(0,10);
	var arr = [
	"#F67BEF",
	"#FB5959",
	"#955353",
	"#6E76C8",
	"#E6CB6F",
	"#80EA87",
	"#DAB462",
	"#FBE132",
	"#000000",
	"#B9E98E",
	"#97E3E0"];

	for (let i = 0; i < arr.length; i++) {
		if (numberColor == i) {
			changeBackground(String(arr[i]));
			break;
		}
	}
}



function getRandomInt(min,max) {
	return Math.floor(Math.random() * (max-min+1) + min);
}

function changeBackground (color) {
	document.body.style.background = color;
}