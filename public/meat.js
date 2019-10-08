//event handling below

var backgroundClose = document.querySelector('.fullWidthButton');
var verticalText = document.getElementsByClassName('verticalrl');
var dates = document.querySelector('#dates');
var content = document.querySelectorAll('.content');
var header = document.querySelectorAll('.sectionHeader');
var bubble = document.querySelectorAll('.bubble');
var body = document.querySelector('body');

var wade = document.querySelector('.wade');
var morse = document.querySelector('.morse');
var ngi = document.querySelector('.ngi');
var ecw = document.querySelector('.ecw');

var esb = document.querySelector('.esb');
var steinberg = document.querySelector('.steinberg');
var coconaise = document.querySelector('.coconaise');
var whiteRaven = document.querySelector('.whiteraven');

var steammill = document.querySelector('.steammill');
var meld = document.querySelector('.meld');
var steammill2 = document.querySelector('.steammill2');

var vaporwave = document.querySelector('.vaporwave');
var aeroprobe = document.querySelector('.aeroprobe');
var deli = document.querySelector('.deli');

var uiux = document.querySelector('.uiux');
var german = document.querySelector('.german');
var nrcc = document.querySelector('.nrcc');

var javascript = document.querySelector('.javascript');
var vproduction = document.querySelector('.vproduction');
var webBasics = document.querySelector('.webbasics');

//overarching callback functions 

function openBubble() {
    dates.classList.add('engulf');
    body.style.overflow = 'hidden';
    header[0].classList.add('engulf');
    header[1].classList.add('engulf');
    backgroundClose.classList.remove('hidden');
    for (var i = 0; i < verticalText.length; i += 1){
        verticalText[i].style.display = 'none';
    };
};

function closeBubble() {
    dates.classList.remove('engulf');
    body.style.overflow = 'auto';
    header[0].classList.remove('engulf');
    header[1].classList.remove('engulf');
    for (var i = 0; i < verticalText.length; i += 1){
        verticalText[i].style.display = 'block';
    };
};

//open wade bubble
wade.addEventListener('click', function(){
    this.classList.remove('wade');
    this.classList.add('popupCol1');
    content[0].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close wade bubble
    backgroundClose.addEventListener('click', function() {
        wade.classList.remove('popupCol1');
        wade.classList.add('wade');
        content[0].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open morse bubble
morse.addEventListener('click', function(){
    this.classList.remove('morse');
    this.classList.add('popupCol1');
    bubble[1].style.marginTop = '-90px';
    content[1].style.display = 'block';
    dates.classList.add('engulf');
    openBubble();
    this.scrollTop = 1000;

    //close morse bubble
    backgroundClose.addEventListener('click', function() {
        morse.classList.remove('popupCol1');
        morse.classList.add('morse');
        bubble[1].style.marginTop = null;
        content[1].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open ngi bubble
ngi.addEventListener('click', function(){
    this.classList.remove('ngi');
    this.classList.add('popupCol1');
    bubble[2].style.marginTop = '-400px';
    content[2].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close ngi bubble
    backgroundClose.addEventListener('click', function() {
        ngi.classList.remove('popupCol1');
        ngi.classList.add('ngi');
        bubble[2].style.marginTop = null;
        content[2].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open ecw bubble
ecw.addEventListener('click', function(){
    this.classList.remove('ecw');
    this.classList.add('popupCol1');
    bubble[3].style.marginTop = '-800px';
    content[3].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close ecw bubble
    backgroundClose.addEventListener('click', function() {
        ecw.classList.remove('popupCol1');
        ecw.classList.add('ecw');
        bubble[3].style.marginTop = null;
        content[3].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open esb bubble
esb.addEventListener('click', function(){
    this.classList.remove('esb');
    this.classList.add('popupCol2');
    bubble[4].style.marginTop = '-20px';
    content[4].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close esb bubble
    backgroundClose.addEventListener('click', function() {
        esb.classList.remove('popupCol2');
        esb.classList.add('esb');
        bubble[4].style.marginTop = null;
        content[4].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open steinberg bubble
steinberg.addEventListener('click', function(){
    this.classList.remove('steinberg');
    this.classList.add('popupCol2');
    bubble[5].style.marginTop = '-200px';
    content[5].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close steinberg bubble
    backgroundClose.addEventListener('click', function() {
        steinberg.classList.remove('popupCol2');
        steinberg.classList.add('steinberg');
        bubble[5].style.marginTop = null;
        content[5].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open coconaise bubble
coconaise.addEventListener('click', function(){
    this.classList.remove('coconaise');
    this.classList.add('popupCol2');
    bubble[6].style.marginTop = '-450px';
    content[6].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close coconaise bubble
    backgroundClose.addEventListener('click', function() {
        coconaise.classList.remove('popupCol2');
        coconaise.classList.add('coconaise');
        bubble[6].style.marginTop = null;
        content[6].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open whiteraven bubble
whiteRaven.addEventListener('click', function(){
    this.classList.remove('whiteRaven');
    this.classList.add('popupCol2');
    bubble[7].style.marginTop = '-600px';
    content[7].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close whiteraven bubble
    backgroundClose.addEventListener('click', function() {
        whiteRaven.classList.remove('popupCol2');
        whiteRaven.classList.add('whiteraven');
        bubble[7].style.marginTop = null;
        content[7].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open steammill bubble
steammill.addEventListener('click', function(){
    this.classList.remove('steammill');
    this.classList.add('popupCol3');
    bubble[8].style.marginTop = '-20px';
    content[8].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close steammill bubble
    backgroundClose.addEventListener('click', function() {
        steammill.classList.remove('popupCol3');
        steammill.classList.add('steammill');
        bubble[8].style.marginTop = null;
        content[8].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open meld bubble
meld.addEventListener('click', function(){
    this.classList.remove('meld');
    this.classList.add('popupCol3');
    bubble[9].style.marginTop = '-300px';
    content[9].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close meld bubble
    backgroundClose.addEventListener('click', function() {
        meld.classList.remove('popupCol3');
        meld.classList.add('meld');
        bubble[9].style.marginTop = null;
        content[9].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open steammill second bubble
steammill2.addEventListener('click', function(){
    this.classList.remove('steammill2');
    this.classList.add('popupCol3');
    bubble[10].style.marginTop = '-650px';
    content[10].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close steammill second bubble
    backgroundClose.addEventListener('click', function() {
        steammill2.classList.remove('popupCol3');
        steammill2.classList.add('steammill2');
        bubble[10].style.marginTop = null;
        content[10].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open vaporwave bubble
vaporwave.addEventListener('click', function(){
    this.classList.remove('vaporwave');
    this.classList.add('popupCol4');
    bubble[11].style.marginTop = null;
    content[11].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close vaporwave second bubble
    backgroundClose.addEventListener('click', function() {
        vaporwave.classList.remove('popupCol4');
        vaporwave.classList.add('vaporwave');
        bubble[11].style.marginTop = null;
        content[11].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open aeroprobe bubble
aeroprobe.addEventListener('click', function(){
    this.classList.remove('aeroprobe');
    this.classList.add('popupCol4');
    bubble[12].style.marginTop = '-100px';
    content[12].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close aeroprobe second bubble
    backgroundClose.addEventListener('click', function() {
        aeroprobe.classList.remove('popupCol4');
        aeroprobe.classList.add('aeroprobe');
        bubble[12].style.marginTop = null;
        content[12].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open delimart bubble
deli.addEventListener('click', function(){
    this.classList.remove('deli');
    this.classList.add('popupCol4');
    bubble[13].style.marginTop = '-800px';
    content[13].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close delimart bubble
    backgroundClose.addEventListener('click', function() {
        deli.classList.remove('popupCol4');
        deli.classList.add('deli');
        bubble[13].style.marginTop = null;
        content[13].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open uiux bubble
uiux.addEventListener('click', function(){
    this.classList.remove('uiux');
    this.classList.add('popupCol5');
    bubble[14].style.marginTop = '0px';
    content[14].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close uiux bubble
    backgroundClose.addEventListener('click', function() {
        uiux.classList.remove('popupCol5');
        uiux.classList.add('uiux');
        bubble[14].style.marginTop = null;
        content[14].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open german bubble
german.addEventListener('click', function(){
    this.classList.remove('german');
    this.classList.add('popupCol5');
    bubble[15].style.marginTop = '-300px';
    content[15].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close german bubble
    backgroundClose.addEventListener('click', function() {
        german.classList.remove('popupCol5');
        german.classList.add('german');
        bubble[15].style.marginTop = null;
        content[15].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open nrcc bubble
nrcc.addEventListener('click', function(){
    this.classList.remove('nrcc');
    this.classList.add('popupCol5');
    bubble[16].style.marginTop = '-650px';
    content[16].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close nrcc bubble
    backgroundClose.addEventListener('click', function() {
        nrcc.classList.remove('popupCol5');
        nrcc.classList.add('nrcc');
        bubble[16].style.marginTop = null;
        content[16].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open javascript bubble
javascript.addEventListener('click', function(){
    this.classList.remove('javascript');
    this.classList.add('popupCol6');
    bubble[17].style.marginTop = '0px';
    content[17].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close javascript bubble
    backgroundClose.addEventListener('click', function() {
        javascript.classList.remove('popupCol6');
        javascript.classList.add('javascript');
        bubble[17].style.marginTop = null;
        content[17].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open vproduction bubble
vproduction.addEventListener('click', function(){
    this.classList.remove('vproduction');
    this.classList.add('popupCol6');
    bubble[18].style.marginTop = '-250px';
    content[18].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close vproduction bubble
    backgroundClose.addEventListener('click', function() {
        vproduction.classList.remove('popupCol6');
        vproduction.classList.add('vproduction');
        bubble[18].style.marginTop = null;
        content[18].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});

//open javascript bubble
webBasics.addEventListener('click', function(){
    this.classList.remove('webbasics');
    this.classList.add('popupCol6');
    bubble[19].style.marginTop = '-650px';
    content[19].style.display = 'block';
    openBubble();
    this.scrollTop = 1000;

    //close javascript bubble
    backgroundClose.addEventListener('click', function() {
        webBasics.classList.remove('popupCol6');
        webBasics.classList.add('webbasics');
        bubble[19].style.marginTop = null;
        content[19].style.display = 'none';
        this.classList.add('hidden');
        closeBubble();
    });
});