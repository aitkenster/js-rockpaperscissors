function Player(name) {
  // 'initialize' method goes here!
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.defeats = function(opponent) {
	return Game.prototype.PAIRS[this.pick]["beats"].indexOf(opponent.pick)!== -1 
}

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.PAIRS = {
 	rock: 		{beats: ["scissors", "lizard"]},
  paper: 		{beats: ["rock", "spock"]},
  scissors: {beats: ["paper", "lizard"]},
  lizard: 	{beats: ["spock", "paper"]},
  spock: 		{beats: ["scissors", "rock"]}
};

Game.prototype._isSamePick = function() {
	return this.player1.pick === this.player2.pick;
}

Game.prototype.winner = function() {

	if (this._isSamePick()) return null;

	else if (this.player1.defeats(this.player2)){
  	return this.player1;
	}
	else {
		return this.player2;
	}

};




