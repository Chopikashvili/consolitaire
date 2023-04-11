const prompt = require('prompt');
const { actions } = require('./actions');
const { Solitaire } = require('./Solitaire');

async function playGame() {
    let solitaireInstance = new Solitaire();
    while(true) {
        solitaireInstance.printState();
        let inputObject = await prompt.get('Your move');
        let input = inputObject['Your move'];
        if (input === 'exit' || input === 'e') {
            main();
            break;
        }
        else {
            let inputParts = input.split(' '); //splits input into substrings of action and parameters
            switch (inputParts[0]) {
                case 'ptp':
                    if (inputParts.length < 3) console.log('Not enough parameters!');
                    else actions.movePileToPile(solitaireInstance, Number.parseInt(inputParts[1]), Number.parseInt(inputParts[2]));
                    break;
                case 'c':
                    actions.cycleStock(solitaireInstance);
                    break;
                case 'stp':
                    if (inputParts.length < 2) console.log('Not enough parameters!');
                    else actions.moveStockToPile(solitaireInstance, Number.parseInt(inputParts[1]));
                    break;
                case 'ptf':
                    if (inputParts.length < 3) console.log('Not enough parameters!');
                    else actions.movePileToFoundation(solitaireInstance, Number.parseInt(inputParts[1]), inputParts[2]);
                    break;
                case 'stf':
                    if (inputParts.length < 2) console.log('Not enough parameters!');
                    else actions.moveStockToFoundation(solitaireInstance, inputParts[1]);
                    break;
                case 'help': case 'h':
                    console.log('ptp [x] [y]: move cards from pile x to pile y');
                    console.log('c: cycle stock');
                    console.log('stp [x]: move current stock card to pile');
                    console.log('ptf [x] [s]: move card from pile x to foundation of suit s');
                    console.log('stf [s]: move current stock card to foundation of suit s');
                    console.log('exit/e: exit current game');
                    break;
            }
            if(solitaireInstance.stockCurrentCard === solitaireInstance.stock.length) solitaireInstance.stockCurrentCard = -1;
        }
        if(solitaireInstance.checkWinCondition()) {
            solitaireInstance.printState();
            console.log('Congratulations! You won!');
            break;
        }
    }
}

async function main() {
    const startInput = await prompt.get('Menu');
    switch (startInput['Menu']) {
        case 'start': case 's':
            playGame();
            break;
        case 'help': case 'h':
            console.log('start, s: start new game\nexit, e: exit program');
            main();
            break;
        case 'exit': case 'e':
            console.log('Game exited');
            break;
        default:
            console.log('Not a valid command!');
            main();
    }
}

module.exports = { main };