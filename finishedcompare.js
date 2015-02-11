console.log("hoi");

var possible = ["#E53935","#5E35B1","#039BE5","#43A047","#FBC02D","#F57C00"]

var refArray = [], values = [];

function createCode(){
	for ( y = 0 ; y < 4 ; y++){
		refArray.push(possible[Math.floor(Math.random() * possible.length)]);
	}
}
//Here the game auto starts for now.
createCode();

//this is for testing
//console.log(refArray);

//function clearTurn(){
var clearTurn = function(){
	values.length = 0;
}

var showScore = function(result){
	var okThings = result.ok,
		somewhatOkThings = result.maybe,
		$answersContainer = $('.beurt [data-class=answersContainer]');	

	if(okThings === 4){
		alert('Congratulations, you won!');
	}

	while(okThings > 0){
		var $div = $('<div />').addClass("blackpin");
		$answersContainer.append($div);
		okThings--;
	}

	while(somewhatOkThings > 0){
		var $div = $('<div />').addClass("whitepin");
		$answersContainer.append($div);
		somewhatOkThings--;
	}

	
}

var compareObjects = function (dingB) {
	var dingA = refArray.slice('');
	var result = {
		ok: 0,
		maybe: 0,
		err: 0
	};

	//console.log("De referentie is " + refArray);
	//console.log("De input is " + dingB);

	for (var j = 0 ; j < dingA.length ; j++){
		if (dingA[j] == dingB[j]){
		//	console.log("Dit is gelijk");
			result.ok++
			delete dingA[j];
			delete dingB[j];
		} 
	}
	for (var k = 0 ; k < dingA.length ; k++){
		if ( k in dingB && dingA.indexOf(dingB[k]) > -1) {
			//	console.log("Dit is niet gelijk, maar komt wel voor")
			result.maybe++
			delete dingA[dingA.indexOf(dingB[k])];
			delete dingB[k];
		}
	}
	
	result.err = 4 - result.ok - result.maybe;
	//console.log(result);
	showScore(result);
	return result;
};



