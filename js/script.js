/*  script.js
 *
 * @license Copyright (C) 2012, Atomizer Software
 * http://atomizersoft.net
 * @author Atomizer Software
 *
 *
 */

function locationHashChanged() {

    if (location.hash === "#welcome" || location.hash === "") {
        console.log(location.hash);
        $('#background').removeClass("translucent");

    } else {
        $('#background').addClass("translucent");
        console.log(location.hash);
    }
}

window.onhashchange = locationHashChanged;

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

$(document).ready(function () {
    $.deck('.slide');

    //check hash initial conditions
    if (location.hash === "#welcome" || location.hash === "") {
        console.log(location.hash);
        $('#background').removeClass("translucent");

    } else {
        $('#background').addClass("translucent");
        console.log(location.hash);
    }

    if ("onhashchange" in window) {
       console.log("The browser supports the hashchange event!");
    }

    console.log(location.hash);

    $(function() {
        setInterval( "slideSwitch()", 3000 );
    });

});






