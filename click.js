console.log("hoi");
//these are quite ugly, but will serve as explanation for now
$(document).on("click", ".toggleExplanation", function(e){
    e.preventDefault;
    $(".explanationText").toggle();
});

$(document).on("click", ".explanationText", function(e){
    e.preventDefault;
    $(".explanationText").toggle();
});
//end of previous message

$(document).on("click" , "#choice", function(e){
	$('.beurt :checked ~span').css("background", $('#choice :checked').val());
    $('.beurt :checked').val($('#choice :checked').val());
	$('#choice').hide(500);
});

$(document).on("click" , ".beurt span" , function(e) {
       // var e = window.event || _e; leaving this in there just in kaas
    $('#choice').hide();
    $('#choice').css({
        'top': e.pageY-60,
        'left': e.pageX-135,
      //  'position':'absolute', 
      //  'padding':'5px',
    });
    $('#choice').show();    
});

$(document).on("submit" , ".beurt" , function(e) {
    e.preventDefault();
    var inputs = $( this ).find('input');
    for (var j=0;j<inputs.length;j++){
        values.push(inputs[j].value);
    }
    //console.log(values);
    compareObjects(values);
    $(this).closest("div").prev().children("form").addClass('beurt');
    $(this).removeClass('beurt');
    clearTurn();
});

$( document ).ready(function() {
    var opKlik = document.querySelectorAll('label');
        for(var i=0; i<opKlik.length; i++){
        	var input = opKlik[i].firstChild;
        	opKlik[i].lastChild.style.backgroundColor = input.value;
        }
});