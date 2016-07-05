myClick();
var ccc1;
var ccc2;
var ccc3;
var ccc4;

var click_count;
function myClick(event) {
  click_count++ ;
  if (click_count === 1){
    start.removeEventListener("click", begin)
  }
}
var reload = document.getElementById('reload')
reload.addEventListener("click", begin)

  var start = document.getElementById('start')
  start.addEventListener("click", begin)

    function begin(){
      ccc1 = "";
      ccc2 = "";
      ccc3 = "";
      ccc4 = "";

    var body = document.querySelector('body')

    var c1 = document.getElementById('card1');
    var c2 = document.getElementById('card2');
    var c3 = document.getElementById('card3');
    var c4 = document.getElementById('card4');

    var cc1 = document.createElement('p')
    var cc2 = document.createElement('p')
    var cc3 = document.createElement('p')
    var cc4 = document.createElement('p')




  var deal= function(start) {
  card = Math.floor(Math.random()*52+1);
  return card;
  }

//dividing the deck into 4 suits. The 13 card suits are
//separate by sets of 13
var suits = (deal());
console.log(suits);

    if(card <= 13){
        suits = ' of Lannisters'
    }else if(card >= 14  && card < 26){
        suits = ' of Starks'
    }else if(card >= 27 && card < 39){
    suits = ' of Targaryan'
  }else if(card >= 40 && card < 52){
        suits = ' of Tyrell'
};


var card1 = deal();
var card2 = deal();
var card3 = deal();
var card4 = deal();

var score = function(card) {

  if(card % 13 === 0 || card % 13 === 11 || card % 13 === 12){
      return 10
  }else if(card % 13 === 1){

  return 11
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

ccc1 = document.createTextNode(score(card1) + suits);
ccc2 = document.createTextNode(score(card2) + suits);
ccc3 = document.createTextNode(score(card3) + suits);
ccc4 = document.createTextNode(score(card4) + suits);

c1.appendChild(cc1);
cc1.appendChild(ccc1);
c2.appendChild(cc2);
cc2.appendChild(ccc2);
c3.appendChild(cc3);
cc3.appendChild(ccc3);
c4.appendChild(cc4);
cc4.appendChild(ccc4);



  console.log("You have cards " + (score(card1) + suits) + " and " + (score(card2) + suits) + " for a total of "
 + player1() + " points. Player2 has " + (score(card3) + suits) + " and " + (score(card4) + suits)+ ' for a total of ' +
 player2() + " points.");

if (player1() > player2()){
    alert('player 1 wins!')
  }else if(player2() > player1()){
      alert('player2 wins')
    }else{
      alert('tie')
    }






    // function(){
    //   body.reload(start);
    // })
  };

  var deal = Math.floor(Math.random()* this.length)
   playerTwoHand = this.splice(deal, 2);
