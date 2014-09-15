function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.randomPick = function(){
	var options = ["rock","paper","scissors","lizard","spock"];
	var index = Math.floor(Math.random() * options.length);
	this.pick = options[index];

};
