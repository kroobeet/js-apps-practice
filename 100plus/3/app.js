var quotes = {
	1: {
		Quote: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
		Author: "Life"
	},
	2: {
		Quote: "God save me from my friends. I can protect myself from my enemies.",
		Author: "Claude Louis Hector De Villars"
	},
	3: {
		Quote: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
		Author: "John Kenneth Galbraith"
	},
	4: {
		Quote: "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
		Author: "Tyne Daly"
	},
	5: {
		Quote: "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance.",
		Author: "Charles Lindbergh"
	},
};


function generateQuote() {
	var quote = document.getElementById('quote');
	var author = document.getElementById('author');

	var q = '<i class="fa fa-quote-left fa-3x" id="q"></i>';

	var valueQuote = takeQuote();

	quote.innerHTML = q + valueQuote.Quote;
	author.innerHTML = valueQuote.Author;
}

function getRandomInt(min,max) {
	return Math.floor(Math.random() * (max-min+1) + min);
}

function takeQuote() {
	var number = getRandomInt(1,5)
	var quote = quotes[number];
	return quote;
}