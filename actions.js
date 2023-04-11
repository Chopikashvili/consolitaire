const { Card } = require('./Card');
const { lists } = require('./lists');
const { Solitaire } = require('./Solitaire');

const actions =  {
    movePileToPile(instance, pile1Index, pile2Index) {
        if ([1, 2, 3, 4, 5, 6, 7].includes(pile1Index) && [1, 2, 3, 4, 5, 6, 7].includes(pile2Index)) { //checks if input is valid
            pile1 = instance.tableau[pile1Index - 1];
            pile2 = instance.tableau[pile2Index - 1];
            const card1 = pile1.find(element => element.isOpen);
            const card2 = pile2.at(-1); //selects base cards for the move
            if (((card1 && !card2) && card1.value === 12) || ((card1 && card2) && card2.value - card1.value === 1 && (card1.suit < 2) != (card2.suit < 2))) { //checks if card is eligible to move
                const cardArray = pile1.slice(pile1.indexOf(card1)); //stores part of pile that is moved
                for (let card of cardArray) {
                    pile2.push(card);
                    pile1.pop();
                }
                if (pile1.at(-1) && pile1.at(-1).isOpen == false) pile1.at(-1).isOpen = true;
                /*opens the last card in the pile that was moved from. 
                if statement is written that way to avoid problems with nonexistent cards */
            }
        }
        else console.log('Invalid pile!');
    },
    cycleStock(instance) {
        stock = instance.stock;
        if (instance.stockCurrentCard === stock.length - 1) instance.stockCurrentCard = -1; //sets the stock to not show a card
        else instance.stockCurrentCard++; //changes the card of the stock being viewed
    },
    moveStockToPile(instance, pileIndex) {
        if ([1, 2, 3, 4, 5, 6, 7].includes(pileIndex)) {
            const card1 = instance.stockCurrentCard != -1 ? instance.stock[instance.stockCurrentCard] : 0;
            const card2 = instance.tableau[pileIndex - 1].at(-1);
            if (((card1 && !card2) && card1.value === 12) || ((card1 && card2) && card2.value - card1.value === 1 && (card1.suit < 2) != (card2.suit < 2))) { //checks if card is eligible to move
                instance.tableau[pileIndex - 1].push(card1);
                instance.stock.splice(instance.stockCurrentCard, 1); //removes card from stock
            }
        }
    },
    movePileToFoundation(instance, pileIndex, foundationsSuit) {
        foundationsIndex = lists.suitLetterList.indexOf(foundationsSuit); //turns suit into index of that suit's foundation
        if ([1, 2, 3, 4, 5, 6, 7].includes(pileIndex) && foundationsIndex != -1) {
            const card1 = instance.tableau[pileIndex - 1].at(-1);
            const card2 = instance.foundations[foundationsIndex].at(-1) || new Card('0' + lists.suitList[lists.suitLetterList.indexOf(foundationsSuit)]); //if card doesn't exist, makes new card with -1 value
            if ((card1 && card1.value - card2.value === 1) && card1.suit == card2.suit) {
                instance.foundations[foundationsIndex].push(card1);
                instance.tableau[pileIndex - 1].pop();
                if (instance.tableau[pileIndex - 1].at(-1) && instance.tableau[pileIndex - 1].at(-1).isOpen == false) instance.tableau[pileIndex - 1].at(-1).isOpen = true;
            }
        }
    },
    moveStockToFoundation(instance, foundationsSuit) {
        foundationsIndex = lists.suitLetterList.indexOf(foundationsSuit);
        if (foundationsIndex != -1 && instance.stockCurrentCard != -1) {
            const card1 = instance.stock[instance.stockCurrentCard];
            const card2 = instance.foundations[foundationsIndex].at(-1) || new Card('0' + lists.suitList[lists.suitLetterList.indexOf(foundationsSuit)]); //if card doesn't exist, makes new card with -1 value
            if (card1 && card1.value - card2.value === 1 && card1.suit == card2.suit) {
                instance.foundations[foundationsIndex].push(card1);
                instance.stock.splice(instance.stockCurrentCard, 1); //removes card from stock
            }
        }
    }
}

module.exports = { actions };