import {
	randomNumber,
	removeChosenCardFromDeck,
	removeChosenCardFromCards,
	addCard,
} from '../preparation/preparation';

export function startTurn(player) {
	player.active = true;
}
export function endTurn(player) {
	player.active = false;
}

export function receiveManaSlot(player) {
	if (player.manaSlots < 10) player.manaSlots++;
}
export function refilledManaSlots(player) {
	player.currentManaSlots = player.manaSlots;
}

export function drawCard(player) {
	const random = randomNumber(player);
	addCard(player, player.deck[random]);
	removeChosenCardFromDeck(player, [random]);
}

export function playCard(player, cardIndex, opponent) {
	//check manaslot and choose card
	if (player.cards[cardIndex] <= player.currentManaSlots) {
		removeChosenCardFromCards(player, cardIndex);
		attack(player, cardIndex, opponent);
	}
}
export function getCardDamage(player, cardIndex) {
	return player.cards[cardIndex];
}
export function attack(player, cardIndex, opponent) {
	console.log('opponent', opponent);
	const damage = getCardDamage(player, cardIndex);
	opponent['hp'] -= damage;
	console.log('hp', opponent.hp);
	isDead(player, opponent);
}
export function isDead(player, opponent) {
	if (opponent.hp <= 0) {
		player.isWin = true;
		opponent.isDead = true;
	}
}
