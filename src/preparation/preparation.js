export function initialPlayer() {
	let player = {
		active: false,
		hp: 30,
		currentManaSlots: 0,
		manaSlots: 0,
		deck: [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8],
		cards: [],
		isWin: false,
		isDead: false,
	};
	return player;
}

export function randomNumber(player) {
	return Math.floor(Math.random() * (player.deck.length - 1)) + 0;
}

export function randomThreeNumbers(player) {
	let randomNums = [];
	let random;
	for (let i = 0; i < 3; i++) {
		//get random index
		random = randomNumber(player);
		if (randomNums.includes(random)) {
			while (randomNums.includes(random)) {
				random = randomNumber(player);
			}
		}
		randomNums.push(random);
	}
	return randomNums;
}

export function randomInitialCards(player) {
	let cards = [];
	const randomNums = randomThreeNumbers(player);
	cards = randomNums.map(index => {
		return player.deck[index];
	});
	player.cards = cards;
	removeChosenCardFromDeck(player, randomNums);
}

export function removeChosenCardFromDeck(player, listNum) {
	player['deck'] = player.deck.filter((value, index) => {
		return !listNum.includes(index);
	});
}
export function removeChosenCardFromCards(player, cardIndex) {
	player['cards'] = player.cards.filter((value, index) => {
		return cardIndex !== index;
	});
}

export function addCard(player, card) {
	player.cards.push(card);
}
