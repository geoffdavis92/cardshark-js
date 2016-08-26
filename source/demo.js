const DeckOfCards = (count) => new ShuffledDeck(count);

DeckOfCards(1).get( function(res) {
	const ID = res.deck_id,
		  DECK = new Deck(ID);
	DECK.draw(2,function(res) {
		console.log(res)
		let app = document.getElementById('app'),
			html = app.innerHTML;
		res.cards.forEach(function(el,i) {
			html += `<img src="${el.image}" alt="${el.value} of ${el.suit}">`
		});
		app.innerHTML = html;
	});
});
