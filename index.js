const names = ["Charlie", "Samip", "Ali"];
function writeCards(names, event) {
  const thankYouCards = [];
  for (let card = 0; card < names.length; card++) {
    thankYouCards.push(`Thank you, ${names[card]}, for the wonderful ${event} gift!`);
      }
  return thankYouCards;
}
console.log(writeCards(names, "birthday"));
function countDown(integer) {
    while (integer >= 0) {
    console.log(integer);
    integer--;
    }
}
countDown(5);
