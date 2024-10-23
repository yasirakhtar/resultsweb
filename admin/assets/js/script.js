var adminNavLinkBox = document.getElementById('adminNavLinkBox');
var adminHeaderLinks = document.getElementById('adminHeaderLinks');
var adminLogoutBtn = document.getElementById('adminLogoutBtn');

adminHeaderLinks.addEventListener("click", function() {
    if(adminNavLinkBox.style.display == "flex"){
        adminNavLinkBox.style.display = "none";
    }
    else{
        adminNavLinkBox.style.display = "flex";
    }
});

// showAdminProfileLinks();


adminLogoutBtn.addEventListener("click", function () {

    alert("Storage Data Removing ....")

    window.location.href = "/admin"
});


var addAdminPopUpBox = document.getElementById("addAdminPopUpBox");
var addNewAdminOpenPopUpBtn = document.getElementById("addNewAdminOpenPopUpBtn");
var addAdminCancelBtn = document.getElementById("addAdminCancelBtn");

addNewAdminOpenPopUpBtn.addEventListener("click", function() {
    if(addAdminPopUpBox.style.display == "flex"){
        addAdminPopUpBox.style.display = "none";
    }
    else{
        addAdminPopUpBox.style.display = "flex";
    }
});

addAdminCancelBtn.addEventListener("click", function() {
    if(addAdminPopUpBox.style.display == "flex"){
        addAdminPopUpBox.style.display = "none";
    }
    else{
        addAdminPopUpBox.style.display = "flex";
    }
});




// Main Copyright Scripts
var adminCopyrightLink = document.getElementById("adminCopyrightLink");

document.addEventListener("load", function() {
    alert("dsjd")
})

if(adminCopyrightLink.innerHTML != "YASIR AKHTAR"){
    window.location.href = "https://yasirakhtar.co/"
}

if(adminCopyrightLink.href != "https://mxfly.site/"){
    window.location.href = "https://yasirakhtar.co/"
}
