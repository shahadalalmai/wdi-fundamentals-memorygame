//console.log("Up and running!");

// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";

 //console.log("User flipped queen");

const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

function checkForMatch() {

if (cardsInPlay.length === 2){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log("You found a match!");

	} else {
		console.log("Sorry, try again");
	}
}

};// end of checkForMatch func

function flipCard(cardId){
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);

	checkForMatch();

// var cardOne = cards[0];
// cardsInPlay.push(cardOne);

// var cardTwo = cards[2];
// cardsInPlay.push(cardTwo);



}; //end of flipCard func

flipCard(0);
flipCard(2);

