function Gold() {

}
Gold.prototype = {
   Core: {
		changeGold: function(gold) {
			var total = parseInt($('#gold span').html());
			$('#gold span').html(gold + total);
		}
   },
   Event: {
   
   }
}