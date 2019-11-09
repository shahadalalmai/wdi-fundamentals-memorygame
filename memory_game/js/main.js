//console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

 //console.log("User flipped queen");

//const cards = ["queen", "queen", "king", "king"];

var cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

const cardsInPlay = [];

function checkForMatch() {

if (cardsInPlay.length === 2){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");

	} else {
		alert("Sorry, try again");
	}
}

};// end of checkForMatch func

function flipCard(cardId){
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	checkForMatch();

// var cardOne = cards[0];
// cardsInPlay.push(cardOne);

// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);



}; //end of flipCard func

flipCard(0);
flipCard(2);

