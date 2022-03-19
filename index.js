// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
  }
*/

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
  
    return gifts;
  }
  
  wrapGifts(gifts);


function writeCards(names, event) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
      let newCard = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      cards.push(newCard);
    }
    return cards;
}

function countDown(count) {
    while (count >= 0) {
        console.log(count--);
    }
}