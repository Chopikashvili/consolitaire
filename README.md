# Consolitaire

## Overview

Consolitaire is an experimental Node.js app that lets you play Klondike solitaire in the console of your choice. It was developed by GitHub user Chopikashvili in fall of 2022 as their first JavaScript project and converted into a GitHub repo and launched, then relaunched due to a sensitive information leak, in spring of 2023.

## How to play Klondike solitaire

Klondike is played with a standard 52-card deck, without Jokers.

After shuffling, a tableau of seven fanned piles of cards is laid from left to right. From left to right, each pile contains one more card than the last. The first and left-most pile contains a single upturned card, the second pile contains two cards, the third pile contains three cards, the fourth pile contains four cards, the fifth pile contains five cards, the sixth pile contains six cards, and the seventh pile contains seven cards. The topmost card of each pile is turned face up.

The remaining cards form the stock and are placed facedown at the upper left of the layout.

The four foundations are ordered in ascending order by suit from Ace (value 1 in this game) to King, and the tableau piles can be ordered in descending order by alternate  suitcolors. Every face-up card in a partial pile, or a complete pile, can be moved, as a unit, to another tableau pile on the basis of its highest card. Any empty piles can be filled with a King, or a pile of cards with a King. The aim of the game is to build up four stacks of cards starting with Ace and ending with King, all of the same suit, on one of the four foundations, at which time the player would have won.

*Text from [Wikipedia](https://en.wikipedia.org/wiki/Klondike_(solitaire)) with minor changes.*

Note that in this app, the win condition is to have no facedown cards in the tableau, since the original win condition is possible in all cases where such a condition is met.

## How to run

1. Have Node.js and Bash/PowerShell installed.
2. On the repo page, go to Code > Download ZIP.
3. Open ZIP to a folder of your choice.
4. Open your preferred shell and navigate to the folder with the game files
5. Run command "node consoleSolitaire.js"
6. Play! If you're confused, type h in the prompt and/or consult this file.

## License

This app is published under the MIT License.