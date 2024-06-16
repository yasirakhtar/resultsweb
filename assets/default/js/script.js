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

    document.getElementById('ads-img-300').src = adsImg300;
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

// JavaScript to update 'a' tags containing 'i' tag with specific class
document.addEventListener("DOMContentLoaded", function() {
    // Nayi link jo aap set karna chahte hain
    var newLink = "https://www.instagram.com/yasirakhtar01";

    // Sabhi 'i' tags ko select karna jinki class 'special-icon' hai
    var icons = document.querySelectorAll('i.fa-instagram');

    // Har selected 'i' tag ka parent 'a' tag ka href attribute update karna
    icons.forEach(function(icon) {
        var parentLink = icon.closest('a'); // Parent 'a' tag ko dhundhna
        if (parentLink) {
            parentLink.href = newLink; // 'a' tag ka href attribute update karna
        }
    });
});