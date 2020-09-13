var result = document.getElementById('result');
var num = Number(result.innerHTML);
function checkNum() {
	if (num > 0) {
		result.style.color = " green";
	} else if (num < 0) {
		result.style.color = " red";
	} else {
		result.style.color = " #333333";
	}
}


function lowerNum() {
	num--;
	result.innerHTML = num;
	checkNum();
}

function addNum() {
	num++;
	result.innerHTML = num;
	checkNum();
}