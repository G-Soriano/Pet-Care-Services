function moveToSelected(element) {

    if (element == "next") {
        var selected = $(".fifth").next(); }
        else if ( element == "prev") {
        var selected = $(".fifth").prev(); }
        else {
        var selected = element;
        }

    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();

    $(selected).removeClass().addClass("fifth");

    $(prev).removeClass().addClass("fourth");
    $(next).removeClass().addClass("sixth");

    $(prevSecond).removeClass().addClass("third");
    $(nextSecond).removeClass().addClass("seventh");

    $(prevSecond).removeClass().addClass("second");
    $(nextSecond).removeClass().addClass("eighth");

    $(prevSecond).prevAll().removeClass().addClass("first");
    $(nextSecond).nextAll().removeClass().addClass("ninth");
    
    $(nextSecond).nextAll().removeClass().addClass("tenth");
    $(nextSecond).nextAll().removeClass().addClass("eleventh");
    $(nextSecond).nextAll().removeClass().addClass("twelvth");


}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
            moveToSelected('prev');
        break;

        case 39:
            moveToSelected('next');
        break;

        default: return;
    }
    e.preventDefault();
});

$('.two div').click(function () {
    moveToSelected($(this));
});

$('#prev').click(function() {
    moveToSelected('prev');
  });
  
  $('#next').click(function() {
    moveToSelected('next');
  });




