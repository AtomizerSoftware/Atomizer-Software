/*  script.js
 *
 * @license Copyright (C) 2012, Atomizer Software
 * http://atomizersoft.net
 * @author Atomizer Software
 *
 *
 */

function locationHashChanged() {

    if (location.hash === "#welcome" || null) {
        console.log(location.hash);
        $('#background').removeClass("translucent");

    } else {
        $('#background').addClass("translucent");
        console.log(location.hash);
    }
}

window.onhashchange = locationHashChanged;


$(document).ready(function () {
    $.deck('.slide');

    //check hash initial conditions
    if (location.hash === "#welcome" || null) {
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

});





