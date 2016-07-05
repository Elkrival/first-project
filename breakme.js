
var deal = function() {
  card = Math.floor(Math.random()*52+1);
  return card;
};
var suits = (deal());
console.log(suits);

    if(card <= 13){
        suits = ' of Hearts'
    }else if(card >= 14  && card < 26){
        suits = ' of Diamonds'
    }else if(card >= 27 && card < 39){
    suits = ' of Clubs'
  }else if(card >= 40 && card < 52){
        suits = ' of Spades'
};


var card1 = deal();
var card2 = deal();
var card3 = deal();
var card4 = deal();

var score = function(card) {

  if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12){
      return 10
  }else if(card % 13 === 1){

  return 1
  }else{
      return card % 13
  }

}
var player1 = function() {
  return score(card1) + score(card2)
};
var player2 = function() {
  return score(card3) + score(card4)
}
console.log("You have cards " + (score(card1) + suits) + " and " + (score(card2) + suits) + " for a total of "
 + player1() + " points. Player2 has " + (score(card3) + suits) + " and " + (score(card4) + suits)+ ' for a total of ' +
 player2() + " points.");

if (player1() > player2()){
    console.log('player 1 wins!')
  }else if(player2() > player1()){
      console.log('player2 wins')
    }else{
      console.log('tie')
    }
