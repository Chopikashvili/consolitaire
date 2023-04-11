const { Card } = require('./Card');
const { dealer } = require('./dealer');

class Solitaire {
    deck = dealer.makeDeck();
    tableau;
    stock;
    stockCurrentCard = -1;
    foundations;
    constructor() {
        this.stock = dealer.shuffle(this.deck);
        this.tableau = dealer.makeTableau(this.stock);
        for (let card of this.stock) card.isOpen = true; //opens every card in the stock for display purposes
        for (let pile of this.tableau) pile.at(-1).isOpen = true; //opens every front pile of tableau
        this.foundations = [[], [], [], []];
    }
    printState() {
        console.log(`Stock: ${this.stockCurrentCard === -1 ? '??' : this.stock[this.stockCurrentCard].see()} | ${this.stock.length} cards left`); //TODO: modify for stock use
        const foundations = this.foundations;
        console.log(`Foundations: ${foundations[0].at(-1) ? foundations[0].at(-1).see() : '--'} ${foundations[1].at(-1) ? foundations[1].at(-1).see() : '--'} ${foundations[2].at(-1) ? foundations[2].at(-1).see() : '--'} ${foundations[3].at(-1) ? foundations[3].at(-1).see() : '--'}`);
        console.log('Tableau:');
        let s = '';
        let lengthArray = [];
        for (let pile of this.tableau) lengthArray.push(pile.length);
        for (let i = 0; i < lengthArray.sort((a, b) => a - b).at(-1); i++) {
            for (let j = 0; j < 7; j++) {
                if (this.tableau[j][i]) {
                    s += this.tableau[j][i].see() + ' ';//if the card exists and is open, logs it and a space. Face-down cards return '??'
                    if (this.tableau[j][i].see().length === 2) s += ' ';//adds another space if the card is not 10 for proper formatting
                }
                else s += '  ' + '  ';//if the card doesn't exist, adds empty space for formatting
            }
            console.log(s);
            s = '';
        }
    }
    checkWinCondition() {
        let flag = 0;
        for (let pile of this.tableau) {
            if (pile.find(card => card.isOpen === false)) flag = 1
        }
        if (!flag) return true;
        else return false; //checks if any card is closed
    }
}

module.exports = { Solitaire };