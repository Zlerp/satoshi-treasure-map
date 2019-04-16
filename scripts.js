var paths = document.getElementsByTagName('path');

function drawMap(){
    for (i = 0; i < paths.length; i++) {
        var path = paths[i];
        var length = path.getTotalLength();
        $(path).attr('data-length', length).css({'stroke-dashoffset': length, 'stroke-dasharray': length, 'stroke': '#00ff66'});

        console.log($(path).attr('data-length'));

        $(path).animate({'stroke-dashoffset': 0}, {
            duration: 2*length,
            easing: 'linear',
        });
    }

}




var options = {
    strings: ["Welcome to <i>Satoshi's Treasure Map</i>", "This will show all the <i>Treasure Hunt's Keys</i> locations", "begin loading world..."],
    typeSpeed: 20,
    backSpeed: 10,
    cursorChar: '_',
    smartBackspace: false,
    backDelay: 3000,
    startDelay: 1000,
    onComplete: function() {
        setTimeout(function(){
            drawMap();
        }, 500);
        setTimeout(function(self){
            $('.blink').show(500);
            setInterval(blink_text, 1000);
            typed.destroy();
        }, 4800);

    },
    onDestroy: function(){
        completeWorld();
    }

}


function completeWorld(){
    var options = {
        strings: ['Loading world completed...'],
        typeSpeed: 20,
        backSpeed: 10,
        cursorChar: '_',
        smartBackspace: false,
        backDelay: 3000,
        startDelay: 200,
    }
    var typed2 = new Typed("#typedtext", options);

}

var typed = new Typed("#typedtext", options);


function blink_text() {

    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
}
