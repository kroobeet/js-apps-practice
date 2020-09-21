var products = {
	'Cakes': {
		1: {
			Photo: './img/cake-1.jpeg',
			Name: 'Cake Item',
			Price: 5
		},
		2: {
			Photo: './img/cake-2.jpeg',
			Name: 'Cake Item',
			Price: 10
		},
		3: {
			Photo: './img/cake-3.jpeg',
			Name: 'Cake Item',
			Price: 15
		}
	},
	'Cupcakes': {
		1: {
			Photo: './img/cupcake-1.jpeg',
			Name: 'Cupcake Item',
			Price: 5
		},
		2: {
			Photo: './img/cupcake-1.jpeg',
			Name: 'Cupcake Item',
			Price: 5
		},
		3: {
			Photo: './img/cupcake-1.jpeg',
			Name: 'Cupcake Item',
			Price: 5
		}
	},
	'Sweet': {
		1: {
			Photo: './img/sweets-1.jpeg',
			Name: 'Sweet Item',
			Price: 5
		},
		2: {
			Photo: './img/sweets-2.jpeg',
			Name: 'Sweet Item',
			Price: 10
		},
		3: {
			Photo: './img/sweets-3.jpeg',
			Name: 'Sweet Item',
			Price: 15
		}
	},
	'Doughnuts': {
		1: {
			Photo: './img/doughnut-1.jpeg',
			Name: 'Dougnut Item',
			Price: 5
		},
		2: {
			Photo: './img/doughnut-2.jpeg',
			Name: 'Dougnut Item',
			Price: 10
		},
		3: {
			Photo: './img/doughnut-3.jpeg',
			Name: 'Dougnut Item',
			Price: 15
		}
	}
}

var border = document.querySelector('#border');
function move() {
	border.style.marginLeft = '-10px';
	border.style.marginTop = '0px';
}

function out() {
	border.style.marginLeft = '-55px';
	border.style.marginTop = '-55px';
}