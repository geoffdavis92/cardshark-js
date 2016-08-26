class ShuffledDeck {
	constructor(count) {
		this.count = count;
		this.endpoint = `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=`;
	}
	get(callback=r=>console.log(r)) {
		AJAX.get(`${this.endpoint}${this.count}`,null,function(response) {
			return callback(response);
		});
	}
}

class Deck {
	constructor(ID) {
		this.ID = ID;
		this.endpoint = `http://deckofcardsapi.com/api/deck/${ID}`;
		this.get = function(endpoint,args,callback) {
			return AJAX.get(`${endpoint}${args}`,null,function(response) {
				return callback(response);
			});
		}
	}
	draw(count,callback) {
		this.get(`${this.endpoint}/draw/`,`?count=${count}`,function(res) {
			callback(res);
		})
		return this;
	}
	shuffle(callback) {
		return this;
	}
}