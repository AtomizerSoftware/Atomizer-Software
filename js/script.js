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

    var logoCurPos =  $('#logo').css('right');
    console.log('logoCurPos: ' + logoCurPos);

    if (home === true && logoCurPos !== '0px') {
        console.log('Image is not in correct');

        $('#logo').css('right', '0px');

    }
    else if (home !== true && logoCurPos !== '-350px' ) {
        console.log('Image is not in correct');
        $('#logo').css('right', '-350px');
    }

}

function locationHashChanged() {

    if (location.hash === '#welcome' || location.hash === '') {
        $('#background').removeClass('translucent');
        home = true;
        console.log('Hash: ' + location.hash + ' Home: ' + home);
    } else {
        $('#background').addClass('translucent');
        home = false;
        console.log('Hash: ' + location.hash + ' Home: ' + home);
    }

    logoPositionCheck();
}

function slideSwitch() {
    var $active = $('#slideshow IMG.active');

    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

window.onhashchange = locationHashChanged;

$("#offerings-link").click(function () {
    if (home === true){
    $("#logo").animate({"right": "-=350px"}, "slow");
    }
})
$("#work-link").click(function () {
    if (home == true){
    $("#logo").animate({"right": "-=350px"}, "slow");
    }
})
$("#about-link").click(function () {
    if (home == true){
    $("#logo").animate({"right": "-=350px"}, "slow");
    }
})

$(document).keypress(function () {
    console.log(event.which);
})

$(document).ready(function () {
    $.deck('.slide');

    //check hash initial conditions

    locationHashChanged();
   /* if (location.hash === "#welcome" || location.hash === "") {
        console.log(location.hash);
        $('#background').removeClass("translucent");

    } else {
        $('#background').addClass("translucent");
        console.log(location.hash);
    }     */

    console.log(location.hash);

    $(function() {
        setInterval( "slideSwitch()", 3000 );
    });

});








