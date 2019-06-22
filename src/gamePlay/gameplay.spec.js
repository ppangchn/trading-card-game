const chai = require('chai');
const should = chai.should();
const { expect } = chai;
import {
	startTurn,
	endTurn,
	receiveManaSlot,
	refilledManaSlots,
	drawCard,
	getCardDamage,
	attack,
	isDead,
	playCard,
} from './gameplay';
import { before } from 'mocha';

describe('gamePlay', function() {
	let player = {
		active: false,
		hp: 30,
		currentManaSlots: 10,
		manaSlots: 9,
		deck: [0, 0, 1, 1, 2, 2],
		cards: [1, 2],
		isWin: false,
		isDead: false,
	};
	let opponent = {
		active: false,
		hp: 30,
		currentManaSlots: 10,
		manaSlots: 0,
		deck: [0, 0, 1, 1, 2, 2],
		cards: [],
		isWin: false,
		isDead: false,
	};
	describe('startTurn', function() {
		beforeEach(() => {
			startTurn(player);
		});
		it('player.active should be true', function() {
			expect(player.active).eq(true);
		});
	});
	describe('endTurn', function() {
		beforeEach(() => {
			endTurn(player);
		});
		it('player.active should be false', function() {
			expect(player.active).eq(false);
		});
	});
	describe('receiveManaSlot', function() {
		beforeEach(() => {
			receiveManaSlot(player);
		});
		it('player.manaSlots should plus by 1', function() {
			expect(player.manaSlots).eq(10);
		});
		it('player.manaSlots should not exceed 10', function() {
			expect(player.manaSlots).eq(10);
		});
	});
	describe('refilledManaSlots', function() {
		beforeEach(() => {
			refilledManaSlots(player);
		});
		it('player.currentManaSlots should equal to player.manaSlots', function() {
			expect(player.currentManaSlots).eq(player.manaSlots);
		});
	});
	describe('drawCard', function() {
		before(() => {
			drawCard(player);
		});
		it('player.deck number should decrease by 1', function() {
			expect(player.deck).to.have.lengthOf(5);
		});
		it('player.card number should increase by 1', function() {
			expect(player.cards).to.have.lengthOf(3);
		});
	});
	describe('playCard', function() {
		before(() => {
			playCard(player, 2, opponent);
		});
		it('card manaslots should be less than or equal to player.manaSlots', function() {
			//do sth
		});
	});
	describe('getCardDamage', function() {
		let damage;
		beforeEach(() => {
			damage = getCardDamage(player, 1);
		});
		it('should return value correctly', function() {
			expect(damage).eql(2);
		});
	});
	describe('attack', function() {
		before(() => {
			attack(player, 0, opponent);
		});
		it('opponent hp should decrease by damage', function() {
			expect(opponent.hp).eql(29);
		});
	});
	describe('isDead', function() {
		let opponent = {
			active: false,
			hp: 0,
			currentManaSlots: 10,
			manaSlots: 0,
			deck: [0, 0, 1, 1, 2, 2],
			cards: [],
			isWin: false,
			isDead: false,
		};
		beforeEach(() => {
			isDead(player, opponent);
		});
		it("opponent's hp is less than or equal to 0 -> player should win", function() {
			expect(player.isWin).eql(true);
		});
		it("opponent's hp is less than or equal to 0 -> opponent should be dead", function() {
			expect(opponent.isDead).eql(true);
		});
	});
});
