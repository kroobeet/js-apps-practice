var border = document.querySelector('#border');
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

var names = document.querySelectorAll('.name-item');
var prices = document.querySelectorAll('.price-item');

for (var i = 0; i < names.length; i++) {
	names[i].innerHTML = names[i].dataset.name;
	prices[i].innerHTML = prices[i].dataset.price;
}

// фильтр по поиску (start)
var searchItem = document.querySelector('#search-item');
var changesInput = document.querySelector('#search-item').addEventListener('keyup', function () {
	var inputValue = searchItem.value;
	var products = getProducts();
	for (var i = 0; i < names.length; i++) {
		var name = names[i].dataset.name;
		if (name.toLowerCase().includes(inputValue.toLowerCase())) {
			products[i].style.display = 'flex';
		} else {
			products[i].style.display = 'none';
		}
	}
});
// фильтр по поиску (end)


function getId () {
	var id = event.target.id;
	if (id != 'store-nav') {
		return showItems(id);
	} else {
		return false;
	}
}

var btnFilterClick = document.querySelector('#store-nav').addEventListener('click', function (event) {
	getId();
});

function showItems(id) {
	var products = getProducts();
	changeStyle(products,id);
}

function changeStyle (products,id) {
	for (var i = 0; i < products.length; i++) {
		if (id == 'All') {
			products[i].style.display = 'flex';
		} else if (products[i].dataset.category != id) {
			products[i].style.display = 'none';
		} else {
			products[i].style.display = 'flex';
		}
	}
}

function getProducts() {
	var products = document.querySelectorAll('.store-item');
	return products;
}