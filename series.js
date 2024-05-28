var icerdePlayMusic = document.getElementById("icerde-play-music");
var icerdePauseMusic = document.getElementById("icerde-pause-music");
var icerdeIntro = new Audio("./music/icerde-music.mp3");

var marasliPlayMusic = document.getElementById("marasli-play-music");
var marasliPauseMusic = document.getElementById("marasli-pause-music");
var marasliIntro = new Audio("./music/marasli-music.mp3");

var halkaPlayMusic = document.getElementById("halka-play-music");
var halkaPauseMusic = document.getElementById("halka-pause-music");
var halkaIntro = new Audio("./music/halka-music.mp3");

var teskilatPlayMusic = document.getElementById("teskilat-play-music");
var teskilatPauseMusic = document.getElementById("teskilat-pause-music");
var teskilatIntro = new Audio("./music/teskilat-music.mp3");

var sozPlayMusic = document.getElementById("soz-play-music");
var sozPauseMusic = document.getElementById("soz-pause-music");
var sozIntro = new Audio("./music/soz-music.mp3");

icerdePlayMusic.addEventListener("click", function () {
    if (icerdePlayMusic.style.display === 'none') {
        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'none';

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

    } else {
        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'block';

        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        icerdeIntro.play();

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

        sozIntro.pause();
        sozIntro.currentTime = 0;
    }
})

icerdePauseMusic.addEventListener("click", function () {
    if (icerdePauseMusic.style.display === 'none') {
        icerdePauseMusic.style.display = 'block';
        icerdePlayMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'none';

        icerdeIntro.play();

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

        sozIntro.pause();
        sozIntro.currentTime = 0;

    } else {
        icerdePauseMusic.style.display = 'none';
        icerdePlayMusic.style.display = 'block';

        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;
    }
})

marasliPlayMusic.addEventListener("click", function () {
    if (marasliPlayMusic.style.display === 'none') {
        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'none';

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

    } else {
        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'block';

        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        marasliIntro.play();

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

        sozIntro.pause();
        sozIntro.currentTime = 0;

    }
})

marasliPauseMusic.addEventListener("click", function () {
    if (marasliPauseMusic.style.display === 'none') {
        marasliPauseMusic.style.display = 'block';
        marasliPlayMusic.style.display = 'none';

        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'none';

        marasliIntro.play();

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

        sozIntro.pause();
        sozIntro.currentTime = 0;

    } else {
        marasliPauseMusic.style.display = 'none';
        marasliPlayMusic.style.display = 'block';

        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        marasliIntro.pause();
        marasliIntro.currentTime = 0;
    }
})

halkaPlayMusic.addEventListener("click", function () {
    if (halkaPlayMusic.style.display === 'none') {
        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'none';

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

    } else {
        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'block';

        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        halkaIntro.play();

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

        sozIntro.pause();
        sozIntro.currentTime = 0;
    }
})

halkaPauseMusic.addEventListener("click", function () {
    if (halkaPauseMusic.style.display === 'none') {
        halkaPauseMusic.style.display = 'block';
        halkaPlayMusic.style.display = 'none';

        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'none';

        halkaIntro.play();

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

        sozIntro.pause();
        sozIntro.currentTime = 0;

    } else {
        halkaPauseMusic.style.display = 'none';
        halkaPlayMusic.style.display = 'block';

        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        halkaIntro.pause();
        halkaIntro.currentTime = 0;
    }
})

teskilatPlayMusic.addEventListener("click", function () {
    if (teskilatPlayMusic.style.display === 'none') {
        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'none';

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

    } else {
        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'block';

        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        teskilatIntro.play();

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

        sozIntro.pause();
        sozIntro.currentTime = 0;

    }
})

teskilatPauseMusic.addEventListener("click", function () {
    if (teskilatPauseMusic.style.display === 'none') {
        teskilatPauseMusic.style.display = 'block';
        teskilatPlayMusic.style.display = 'none';

        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'none';

        teskilatIntro.play();

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

        sozIntro.pause();
        sozIntro.currentTime = 0;

    } else {
        teskilatPauseMusic.style.display = 'none';
        teskilatPlayMusic.style.display = 'block';

        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

    }
})

sozPlayMusic.addEventListener("click", function () {
    if (sozPlayMusic.style.display === 'none') {
        sozPlayMusic.style.display = 'block';
        sozPauseMusic.style.display = 'none';

        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'none';

        sozIntro.pause();
        sozIntro.currentTime = 0;
    } else {
        sozPlayMusic.style.display = 'none';
        sozPauseMusic.style.display = 'block';

        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        sozIntro.play();

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

    }
})

sozPauseMusic.addEventListener("click", function () {
    if (sozPauseMusic.style.display === 'none') {
        sozPauseMusic.style.display = 'block';
        sozPlayMusic.style.display = 'none';

        icerdePlayMusic.style.display = 'none';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'none';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'none';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'none';
        teskilatPauseMusic.style.display = 'none';

        sozIntro.play();

        icerdeIntro.pause();
        icerdeIntro.currentTime = 0;

        marasliIntro.pause();
        marasliIntro.currentTime = 0;

        halkaIntro.pause();
        halkaIntro.currentTime = 0;

        teskilatIntro.pause();
        teskilatIntro.currentTime = 0;

    } else {
        sozPauseMusic.style.display = 'none';
        sozPlayMusic.style.display = 'block';

        icerdePlayMusic.style.display = 'block';
        icerdePauseMusic.style.display = 'none';

        marasliPlayMusic.style.display = 'block';
        marasliPauseMusic.style.display = 'none';

        halkaPlayMusic.style.display = 'block';
        halkaPauseMusic.style.display = 'none';

        teskilatPlayMusic.style.display = 'block';
        teskilatPauseMusic.style.display = 'none';

        sozIntro.pause();
        sozIntro.currentTime = 0;
        
    }
})