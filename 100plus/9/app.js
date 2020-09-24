var border = document.querySelector('#border');
var mainImage = document.querySelector('#main-image');
mainImage.onmousemove = move;
mainImage.onmouseout = out;
function move() {
	positionBorder('-10px', '0px');
}
function out() {
	positionBorder('-55px', '-55px');
}

function positionBorder(marginLeft, marginTop) {
	border.style.marginLeft = marginLeft;
	border.style.marginTop = marginTop;
}

var names = document.querySelectorAll('.name-item');
var prices = document.querySelectorAll('.price-item');

for (var i = 0; i < names.length; i++) {
	names[i].innerHTML = names[i].dataset.name;
	prices[i].innerHTML = prices[i].dataset.price;
}


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

var searchItem = document.querySelector('#search-item');
var changeInput = searchItem.addEventListener('keyup', function () {
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
})

var src;
var index = 0;

var container = document.querySelector('#container');
var modalItem = document.querySelector('#modal-item');

var images = document.querySelectorAll('.store-img');
var imagesArray = Object.values(images);

for (var i = 0; i < images.length; i++) {
	images[i].addEventListener('click', function (event) {
		var tar = event.target;
		src = tar.getAttribute('src');
		container.style.display = 'flex';
		modalItem.style.background = 'url("' + src + '")' + ' center/cover fixed no-repeat';
		return src;
	});
}

function getIndex() {
	for (var i = 0; i < imagesArray.length; i++) {
		var arrayImageSrc = imagesArray[i].getAttribute('src');
		if (src == arrayImageSrc) {
			index = i;
			return index;
		}
	}
}

var prev = document.querySelector('#btnLeft').addEventListener('click', function () {
	getIndex();
	index--;
	if (index >= 0) {
		setStyle();
	} else if (index < 0) {
		index = imagesArray.length-1;
		setStyle();
	}
});

var next = document.querySelector('#btnRight').addEventListener('click', function () {
	getIndex();
	index++;
	if (index == imagesArray.length) {
		index = 0;
		setStyle();
	} else if (index < imagesArray.length) {
		setStyle();
	}
});

function setStyle () {
	src = imagesArray[index].getAttribute('src');
	modalItem.style.background = 'url("' + src + '")' + ' center/cover fixed no-repeat';
}

var close = document.querySelector('#modal-close').addEventListener('click', function () {
	container.style.display = 'none';
});