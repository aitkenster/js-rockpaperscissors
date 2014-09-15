	$(document).ready(function(){
		var player1 = new Player("the player");
		var player2 = new Player("the computer");
		var game 		= new Game(player1, player2);
	$('.choices img').on('click', function(){
		player1.picks($(this).data('pick'));
		player2.randomPick(this.randomPick);

		$('#list').prepend("<li><h2>" + game.victoryStatement() + "</h2></li>");
		$('li:gt(4)').remove();
	})

})