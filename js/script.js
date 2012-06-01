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
var curHash;
var prevHash;


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

function logoPositionCheck() {

    logoCurPos = $('#logo').css('right');

    if (home === true && logoCurPos !== '0px') {
        $('#logo').css('right', '0px');
    }
    else if (home !== true && logoCurPos !== '-305px') {
        $('#logo').css('right', '-305px');
    }

}

function changeHash() {
    prevHash = curHash;
    curHash = location.hash;

    if (curHash === '#welcome' || curHash === '') {
        home = true;
    } else {
        home = false;
    }

    console.log('prevHash: ' + prevHash + ' curHash ' + curHash + ' home: ' + home);
}

function opacityChange() {

    var curTrans = $('#background').css('opacity');
    console.log('opacity: ' + curTrans + '    hash: ' + curHash + ' home: '+ home);

    if (home) {
        $('#background').animate({'opacity':'+=1'}, "slow");
    } else {
        if (curTrans === '1') {
            $('#background').animate({'opacity':'-=0.85'}, "slow");
        }
    }

    //var curTrans = $('#background').css('opacity')
    //console.log('opacity: ' + curTrans + ' hash: ' + curHash + ' home: '+ home);
}

function animateLogo() {

    logoCurPos = $('#logo').css('right');
    console.log('logoCurPos: ' + logoCurPos + ' hash: ' + curHash + ' home: ' + home);

    if (home === true && logoCurPos !== '0px') {
        $("#logo").animate({"right":"+=305px"}, "slow");
    }
    else if (home === false && logoCurPos !== '-305px') {

        $("#logo").animate({"right":"-=305px"}, "slow");
    }

    //logoCurPos = $('#logo').css('right');
    //console.log('logoCurPos: ' + logoCurPos + ' hash: ' + curHash + ' home: ' + home);
}

$('a').click(function () {
    var id = this.id;
    if (id === 'welcome-link') {
        //change opacity and move logo center
        changeHash();
        animateLogo();
        opacityChange();
        changeHash();
    }
    else if (id === 'work-link' || id === 'offerings-link' || id == 'about-link') {
        changeHash();
        animateLogo();
        opacityChange();
        changeHash();
    }
})

$(document).keyup(function () {
    var key = event.which;

    if (key === 37 || key === 38) {
        changeHash();
        animateLogo();
        opacityChange();
        changeHash();

    } else if (key === 39 || key === 40) {
        changeHash();
        animateLogo();
        opacityChange();
        changeHash();
    }
})

//window.onhashchange = changeHash;

$(document).ready(function () {
    $.deck('.slide');

    changeHash();
    opacityChange();
    logoPositionCheck();


    $(function () {
        setInterval("slideSwitch()", 3000);
    });

});








