const { lists } = require('./lists');
const { Card } = require('./Card');

const dealer = {
    makeDeck() {
        let deck = [];
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 13; j++) deck.push(lists.valueList[j] + lists.suitList[i]); //Fills the deck, puts all the cards of one suit first
        }
        for (let i = 0; i < deck.length; i++) deck[i] = new Card(deck[i]);//converts strings into card objects;
        return deck;
    },
    makeTableau(deck) {
        let tableau = [];
        for (let i = 0; i < 7; i++) {
            tableau.push(deck.slice(0, i + 1)); //adds cards to tableau pile #(i + 1)
            deck.splice(0, i + 1); //removes those cards from the stock
        }
        return tableau;
    },
    shuffle(array) {
        let oldArray = array;
        let shuffledArray = [];
        for (let i = array.length; i > 0; i--) {
            let random = Math.floor(Math.random() * i);
            shuffledArray.push(oldArray[random]); //when I figure out XSS I will try to get a list from random.org
            oldArray.splice(random, 1);
        }
        return shuffledArray;
    }
}

module.exports = { dealer };