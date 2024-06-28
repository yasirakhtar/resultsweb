//ads

document.addEventListener("DOMContentLoaded", function () {
    // Links 
    var adsLink300 = "https://www.mxfly.site";

    document.getElementById('adsLink300').href = adsLink300;
});

// adsLink400
document.addEventListener("DOMContentLoaded", function () {
    // Links 
    var adsLink400 = "https://www.mxfly.site";

    document.getElementById('adsLink400').href = adsLink400;
});

// adsLink728

document.addEventListener("DOMContentLoaded", function () {
    // Links 
    var adsLink728 = "https://www.mxfly.site";

    document.getElementById('adsLink728').href = adsLink728;
});

//adsImgLink 728 -----------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('adsImg728').addEventListener('click', function () {
        window.open('https://www.mxfly.site', '_blank');
    });
});



// ------------------ Change Img Source URL ------------------------------------

// JavaScript to update specific img tag by ID
document.addEventListener("DOMContentLoaded", function () {
    // Img Source Link
    var adsImg300 = "/assets/banner/adsside.png";

    document.getElementById('adsImg300').src = adsImg300;
});

// adsImg 400

// JavaScript to update specific img tag by ID
document.addEventListener("DOMContentLoaded", function () {
    // Img Source Link
    var adsImg400 = "/assets/banner/adssquare.jpg";

    document.getElementById('adsImg400').src = adsImg400;
});

// adsImg 728

// JavaScript to update specific img tag by ID
document.addEventListener("DOMContentLoaded", function () {
    // Img Source Link
    var adsImg728 = "/assets/banner/adstop.jpg";

    document.getElementById('adsImg728').src = adsImg728;
});

// --------------------------------------------------------------

// Change A Tag Url By Using Instagram Class Name

document.addEventListener("DOMContentLoaded", function () {
    var newLink = "https://www.instagram.com/yasirakhtar0";

    var icons = document.querySelectorAll('i.fa-instagram');

    icons.forEach(function (icon) {
        var parentLink = icon.closest('a');
        if (parentLink) {
            parentLink.href = newLink;
        }
    });
});

// Change A Tag Url By Using Facebook Class Name

document.addEventListener("DOMContentLoaded", function () {
    var newLink = "https://facebook.com/yasirakhtar0";

    var icons = document.querySelectorAll('i.fa-facebook');

    icons.forEach(function (icon) {
        var parentLink = icon.closest('a');
        if (parentLink) {
            parentLink.href = newLink;
        }
    });
});

// Change A Tag Url By Using Twitter Class Name

document.addEventListener("DOMContentLoaded", function () {
    var newLink = "https://twitter.com/yasirakhtar0";

    var icons = document.querySelectorAll('i.fa-twitter');

    icons.forEach(function (icon) {
        var parentLink = icon.closest('a');
        if (parentLink) {
            parentLink.href = newLink;
        }
    });
});

// Change A Tag Url By Using Telegram Class Name

document.addEventListener("DOMContentLoaded", function () {
    var newLink = "https://t.me/yasirakhtar0";

    var icons = document.querySelectorAll('i.fa-telegram');

    icons.forEach(function (icon) {
        var parentLink = icon.closest('a');
        if (parentLink) {
            parentLink.href = newLink;
        }
    });
});

// ----- Add Another Js Script File--------------------------------

function addEffectsJs() {
    var script = document.createElement('script');
    script.src = '/assets/default/js/effects.js';
    script.onload = function () {
        console.log('Script loaded successfully.');
    };
    script.onerror = function () {
        console.error('Error loading script.');
    };
    document.body.appendChild(script);
}
addEffectsJs();


// ----- Add AntiInspect Js Script File--------------------------------

function addAntiJs() {
    var script = document.createElement('script');
    script.src = '/assets/default/js/antiscript.js';
    script.onload = function () {
        console.log('Script loaded successfully.');
    };
    script.onerror = function () {
        console.error('Error loading script.');
    };
    document.body.appendChild(script);
}
addAntiJs();
