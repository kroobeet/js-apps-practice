/*var border = document.querySelector('#border');
var image = document.querySelector('#main-image');
image.onmousemove = move;
image.onmouseout = out;
function move() {
	border.style.marginLeft = '-10px';
	border.style.marginTop = '0px';
}

function out() {
	border.style.marginLeft = '-55px';
	border.style.marginTop = '-55px';
}
*/
var names = document.querySelectorAll('.name-item');
var prices = document.querySelectorAll('.price-item');

for (let i = 0; i < names.length; i++) {
	names[i].innerHTML = names[i].dataset.name;
	prices[i].innerHTML = prices[i].dataset.price;
}

var btnFilterClick = document.querySelector('#store-nav').addEventListener('click', function (event) {
	var id = event.target.id;
	if (id != 'store-nav') {
		return showItems(id);
	} else {
		return false;
	}
});

function showItems(id) {
	var products = document.querySelectorAll('.store-item');
	for (let i = 0; i < products.length; i++) {
		if (id == 'All') {
			products[i].style.display = 'flex';
		} else if (products[i].dataset.category != id) {
			products[i].style.display = 'none';
		} else {
			products[i].style.display = 'flex';
		}
	}
}