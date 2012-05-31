/*  script.js
 *
 * @license Copyright (C) 2012, Atomizer Software
 * http://atomizersoft.net
 * @author Atomizer Software
 *
 *
 */

var home;
var logoCurPos;


function logoPositionCheck() {

    logoCurPos = $('#logo').css('right');
    //console.log('logoCurPos: ' + logoCurPos);

    if (home === true && logoCurPos !== '0px') {
        //console.log('Image is not in correct');
        $('#background').removeClass('translucent');
        $('#logo').css('right', '0px');

    }
    else if (home !== true && logoCurPos !== '-350px') {
        //console.log('Image is not in correct');
        $('#logo').css('right', '-350px');
        $('#background').addClass('translucent');
    }

}

function opacityChange() {

    console.log('opacityChange() called');

    if (location.hash === '#welcome' || location.hash === '') {
        $('#background').removeClass('translucent');
        home = true;
        //console.log('Hash: ' + location.hash + ' Home: ' + home);
    } else {
        $('#background').addClass('translucent');
        home = false;
        //console.log('Hash: ' + location.hash + ' Home: ' + home);
    }
}

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ($active.length == 0) $active = $('#slideshow IMG:last');

    var $next = $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    $active.addClass('last-active');

    $next.css({opacity:0.0})
        .addClass('active')
        .animate({opacity:1.0}, 1000, function () {
            $active.removeClass('active last-active');
        });
}

window.onhashchange = opacityChange;


$("#logo").click(function () {
    if (home === false) {
        console.log("#logo clicked");
        animateLogo();
        //$("#logo").animate({"right": "+=350px"}, "slow");
    }
})

$("#offerings-link").click(function () {
    if (home === true) {
        console.log(home);
        animateLogo();
        //$("#logo").animate({"right": "-=350px"}, "slow");
    }
})
$("#work-link").click(function () {
    if (home === true) {
        console.log(home);
        animateLogo();
        //$("#logo").animate({"right": "-=350px"}, "slow");
    }
})
$("#about-link").click(function () {
    if (home === true) {
        console.log(home);
        animateLogo();
        //$("#logo").animate({"right": "-=350px"}, "slow");
    }
})

function animateLogo() {

    logoCurPos = $('#logo').css('right');

    console.log('hash: ' + location.hash + ' home: ' + home + ' logoCurPos: ' + logoCurPos);

    if (home === true && logoCurPos === '0px') {
        $("#logo").animate({"right":"-=350px"}, "slow");
    }
    if (home === false && logoCurPos === '-350px') {
        $("#logo").animate({"right":"+=350px"}, "slow");
    }
}

$(document).keyup(function () {
    var key = event.which;

    if (key === 37 || key === 38) {
        //console.log('move back');

        animateLogo();
        opacityChange();


    } else if (key === 39 || key === 40) {
        //console.log('move forward')

        animateLogo();
        opacityChange();
    }

})

$(document).ready(function () {
    $.deck('.slide');

    opacityChange();
    logoPositionCheck();


    $(function () {
        setInterval("slideSwitch()", 3000);
    });

});








