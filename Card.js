const { lists } = require('./lists');

class Card {
    content;
    value;
    suit;
    isOpen = false;

    constructor(content){
        if (typeof content === 'string') {
            this.content = content;
            this.value = lists.valueList.indexOf(content.substring(0, content.length - 1)); 
            /*takes first part of card string, converts to number, assigns to value. 
            Can be -1 to move A cards to foundation*/
            this.suit = lists.suitList.indexOf(content.substring(content.length - 1)); //takes second part of card string, converts to number, assigns to suit
        }
        else console.log('Tried to assign card an invalid value.');
    }
    
    see() {
        if (this.isOpen) return this.content;
        else return '??'; //method to display cards
    }
}

module.exports = { Card };