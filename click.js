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
    $('div:not(#choice label span)').css({
        'opacity': '1'
    });
    $('#choice label span').removeClass('openChoice');
    $('.beurt > button').removeAttr('disabled');
	$('.beurt :checked ~span').css("background", $('#choice :checked').val());
    $('.beurt :checked').val($('#choice :checked').val());
	$('#choice').hide();
    
});

$(document).on("click" , ".beurt span" , function(e) {
       // var e = window.event || _e; leaving this here just in kaas
    $('#choice').hide();
    $("div:not(.wrap,#ezchoice)").css({
        'opacity': '0.7'
    });
    $('.beurt > button').attr('disabled', 'disabled');
    $('#choice').css({
        //First 2 lines are on click, this is ugly because of the offset you need.
        //Second 2 lines are on element pos. Still ugly because of pixel offset.
        //'top': e.pageY-60,
       // 'left': e.pageX-135,
       'top': (e.currentTarget.offsetTop-40) / 16 + "em",
       'left': (e.currentTarget.offsetLeft-118) / 16 +"em",
    });
    $('#choice label span').addClass('openChoice');
    $('#choice').show(); 
});

$(document).on("submit" , ".beurt" , function(e) {
    e.preventDefault();
    var inputs = $( this ).find('input');
    for (var j=0;j<inputs.length;j++){
        values.push(inputs[j].value);
    }

    compareObjects(values);
    $(this).closest("div").prev().children("form").addClass('beurt');
    $(this).removeClass('beurt');
    clearTurn();
});
