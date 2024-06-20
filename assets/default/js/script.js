//ads

// Set Link Using Js
document.addEventListener("DOMContentLoaded", function() {
    // Links 
    var adsLink300 = "https://www.mxfly.site3";

    document.getElementById('adsLink300').href = adsLink300;
});

// adsLink400

// Set Link Using Js
document.addEventListener("DOMContentLoaded", function() {
    // Links 
    var adsLink400 = "https://www.mxfly.site4";

    document.getElementById('adsLink400').href = adsLink400;
});

// adsLink728

// Set Link Using Js
document.addEventListener("DOMContentLoaded", function() {
    // Links 
    var adsLink728 = "https://www.mxfly.site7";

    document.getElementById('adsLink728').href = adsLink728;
});



// ------------------ Change Img Source URL ------------------------------------

// JavaScript to update specific img tag by ID
document.addEventListener("DOMContentLoaded", function() {
    // Img Source Link
    var adsImg300 = "/assets/banner/ads300.png";

    document.getElementById('adsImg300').src = adsImg300;
});

// adsImg 400

// JavaScript to update specific img tag by ID
document.addEventListener("DOMContentLoaded", function() {
    // Img Source Link
    var adsImg400 = "/assets/banner/DEMO400.jpg";

    document.getElementById('adsImg400').src = adsImg400;
});

// adsImg 728

// JavaScript to update specific img tag by ID
document.addEventListener("DOMContentLoaded", function() {
    // Img Source Link
    var adsImg728 = "/assets/banner/ads728.jpg";

    document.getElementById('adsImg728').src = adsImg728;
});

// --------------------------------------------------------------

// Change A Tag Url By Using Specific Class 

document.addEventListener("DOMContentLoaded", function() {
    var newLink = "https://www.instagram.com/yasirakhtar0";

    var icons = document.querySelectorAll('i.fa-instagram');

    icons.forEach(function(icon) {
        var parentLink = icon.closest('a');
        if (parentLink) {
            parentLink.href = newLink;
        }
    });
});