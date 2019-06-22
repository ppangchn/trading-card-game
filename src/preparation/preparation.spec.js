const chai = require('chai');
const should = chai.should();
const { expect } = chai;
import {
	initialPlayer,
	randomNumber,
	randomThreeNumbers,
	randomInitialCards,
	removeChosenCardFromDeck,
	removeChosenCardFromCards,
} from './preparation';

describe('preparation', function() {
	let player;
	describe('initialPlayer', function() {
		beforeEach(() => {
			player = initialPlayer();
		});
		it('object element correctly', function() {
			expect(player).to.have.all.keys(
				'active',
				'hp',
				'currentManaSlots',
				'manaSlots',
				'deck',
				'cards',
				'isWin',
				'isDead'
			);
		});
		it('player should have 30 Health', function() {
			expect(player.hp).eql(30);
		});
		it('player should have 0 Mana slots', function() {
			expect(player.manaSlots).eql(0);
		});
		it('player should have 20 Damage cards', function() {
			expect(player.deck).to.have.lengthOf(20);
		});
		it('20 Damage cards have the correct Mana costs', function() {
			player.deck.should.deep.equal([
				0,
				0,
				1,
				1,
				2,
				2,
				2,
				3,
				3,
				3,
				3,
				4,
				4,
				4,
				5,
				5,
				6,
				6,
				7,
				8,
			]);
		});
	});
	describe('randomNumber', function() {
		let random;
		beforeEach(() => {
			random = randomNumber(player);
		});
		it('should be a number', function() {
			expect(random).to.be.a('Number');
		});
	});
	describe('randomThreeNumbers', function() {
		let randomNums;
		before(() => {
			randomNums = randomThreeNumbers(player);
		});
		it('array with 3 items', function() {
			expect(randomNums).to.have.lengthOf(3);
		});
		it('should have 3 different numbers', function() {
			//
		});
	});
	describe('randomInitialCards', function() {
		before(() => {
			randomInitialCards(player);
		});
		it('player should have 3 random cards', function() {
			expect(player.cards).to.have.lengthOf(3);
		});
		it('player deck should have 17 cards after random', function() {
			expect(player.deck).to.have.lengthOf(17);
		});
	});
	describe('removeChosenCardFromDeck', function() {
		let player = {
			active: false,
			hp: 30,
			manaSlots: 0,
			deck: [0, 0, 1, 1, 2, 2],
			cards: [],
		};
		let listNum = [1, 2, 3];
		before(() => {
			removeChosenCardFromDeck(player, listNum);
		});
		it('cards in player.deck should be removed correctly', function() {
			player.deck.should.deep.equal([0, 2, 2]);
		});
	});
	describe('removeChosenCardFromCards', function() {
		let player = {
			active: false,
			hp: 30,
			manaSlots: 0,
			deck: [0, 0, 1, 1, 2, 2],
			cards: [1, 1, 3],
		};
		let cardIndex = 1;
		before(() => {
			removeChosenCardFromCards(player, cardIndex);
		});
		it('cards in player.cards should be removed correctly', function() {
			player.cards.should.deep.equal([1, 3]);
		});
	});
});
