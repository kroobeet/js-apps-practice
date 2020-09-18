var testimonialObj = { 
	1: {
		Photo: './img/customer-1.jpg',
		Name: 'SANDY',
		Testimonial: 'Accusantium, consectetur, eum. Voluptates voluptatem tempora corrupti enim harum, qui, tempore possimus non optio fugit laudantium consequuntur aliquid veritatis, eius adipisci suscipit, iusto eligendi dignissimos! Error, numquam eos mollitia autem!'
	},
	2: {
		Photo: './img/customer-2.jpg',
		Name: 'AMY',
		Testimonial: 'Consequuntur rem suscipit ut beatae laudantium ab eum rerum vero. Obcaecati ipsam atque quia cumque cum quidem, deleniti enim, illum aliquid ea.'
	},
	3: {
		Photo: './img/customer-3.jpg',
		Name: 'TYRELL',
		Testimonial: 'Tempore sed, voluptate commodi, dolor quos doloremque eum reiciendis facere accusamus consectetur molestias perspiciatis suscipit velit. Aut consequuntur facilis laborum vitae itaque.'
	},
	4: {
		Photo: './img/customer-4.jpg',
		Name: 'WANDA',
		Testimonial: 'Voluptatem voluptatum error quidem nemo eaque eveniet quasi temporibus, ea quas nostrum quis dolorem, dolor doloribus omnis eos ab repellat fugiat consequuntur?'
	},
	5: {
		Photo: './img/customer-0.jpg',
		Name: 'JOHN',
		Testimonial: 'Dolorem dicta deserunt voluptas earum itaque corrupti accusantium quos aut molestiae reiciendis, sed suscipit impedit saepe laboriosam beatae eveniet rem, commodi, molestias!'
	}
};

var objItem = 0;

var buttons = document.querySelector('#buttons').addEventListener('click', function(event) {
	var id = event.target.id;
	if (id == 'prev') {
		objItem--;
	} else if (id == 'next') {
		objItem++;
	} else {
		return false;
	}
	checkPosition();
	getValues();
});

function checkPosition() {
	var keys = Object.keys(testimonialObj);
	if (objItem < 1) {
		objItem = keys.length;
	} else if (objItem > keys.length) {
		objItem = 1;
	}
	return objItem;
}

function getValues() {
	var customerPhoto = document.querySelector('#customer-photo');
	var customerName = document.querySelector('#customer-name');
	var customerTestimonial = document.querySelector('#testimonial');
	var photo = testimonialObj[objItem].Photo;
	var name = testimonialObj[objItem].Name;
	var testimonial = testimonialObj[objItem].Testimonial;
	customerPhoto.setAttribute('src', photo);
	customerName.innerHTML = name;
	customerTestimonial.innerHTML = testimonial;
}