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


