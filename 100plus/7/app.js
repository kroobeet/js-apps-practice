//1: создадим этот объект с объектами
var testimonialObj = { 
	1: {
		Photo: './img/customer-1.jpg',
		Name: 'Sandy',
		Testimonial: 'Accusantium, consectetur, eum. Voluptates voluptatem tempora corrupti enim harum, qui, tempore possimus non optio fugit laudantium consequuntur aliquid veritatis, eius adipisci suscipit, iusto eligendi dignissimos! Error, numquam eos mollitia autem!'
	},
	2: {
		Photo: './img/customer-2.jpg',
		Name: 'Amy',
		Testimonial: 'Consequuntur rem suscipit ut beatae laudantium ab eum rerum vero. Obcaecati ipsam atque quia cumque cum quidem, deleniti enim, illum aliquid ea.'
	},
	3: {
		Photo: './img/customer-3.jpg',
		Name: 'Tyrell',
		Testimonial: 'Tempore sed, voluptate commodi, dolor quos doloremque eum reiciendis facere accusamus consectetur molestias perspiciatis suscipit velit. Aut consequuntur facilis laborum vitae itaque.'
	},
	4: {
		Photo: './img/customer-4.jpg',
		Name: 'Wanda',
		Testimonial: 'Voluptatem voluptatum error quidem nemo eaque eveniet quasi temporibus, ea quas nostrum quis dolorem, dolor doloribus omnis eos ab repellat fugiat consequuntur?'
	},
	5: {
		Photo: './img/customer-0.jpg',
		Name: 'John',
		Testimonial: 'Dolorem dicta deserunt voluptas earum itaque corrupti accusantium quos aut molestiae reiciendis, sed suscipit impedit saepe laboriosam beatae eveniet rem, commodi, molestias!'
	}
};
// переменная objItem равна ноль, потому что изначально у нас будет текст по умолчанию 
var objItem = 0;

// 2: функция получения элементов
function getValues() {
	var customerPhoto = document.querySelector('#customer-photo');
	var customerName = document.querySelector('#customer-name');
	var customerTestimonial = document.querySelector('#testimonial');

	// 3: функция установки значений в элементы
	function setValues() {
		var photo = testimonialObj[objItem].Photo;
		var name = testimonialObj[objItem].Name;
		var testimonial = testimonialObj[objItem].Testimonial;
		customerPhoto.setAttribute('src', photo);
		customerName.innerHTML = name;
		customerTestimonial.innerHTML = testimonial;
	}
	// 4: вернём функцию установки значений в элементы
	// когда обратимся к функции getValues() - она дополнительно вернёт setValues()
	// чтобы значения были установлены
	return setValues();
}

// 5: функция проверки позиции отзыва
function checkPosition() {
	var keys = Object.keys(testimonialObj);
	if (objItem < 1) {
		objItem = keys.length;
	} else if (objItem > keys.length) {
		objItem = 1;
	}
	return objItem;
}

// 6: реализация события click
// Узнаём на какой кнопке (prev или next) произошло событие click
// и выполняем соответствующие инструкции
var buttons = document.querySelector('#buttons').addEventListener('click', function(event) {
	var id = event.target.id;
	if (id == 'prev') {
		objItem--;
	} else if (id == 'next') {
		objItem++;
	} else {
		/*
		если не установить return false, то операция переключения отзывов будет работать
		даже если кликнуть вне кнопки (prev или next)
		*/
		return false;
	}
	checkPosition();
	getValues();
});