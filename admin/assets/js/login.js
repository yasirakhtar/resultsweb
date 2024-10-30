var valid_name = localStorage.getItem('username')
var valid_pass = localStorage.getItem('password')
var adminUsername = document.getElementById("adminUsername");
var adminImg = document.getElementById("adminImg");

function load() {
    if (valid_name, valid_pass === null) {
        window.location.href = "/admin";
        return false
    } else {
        adminUsername.innerHTML = `${valid_name}`;
        adminImg.src = "/admin/assets/img/admin.jpg";
    }
}
// load();

window.addEventListener("load", function (){
    load();
});

function loginload() {
    var usern = document.getElementById("username")
    var Password = document.getElementById("password")

    localStorage.setItem('username', usern.value)
    localStorage.setItem('password', Password.value)
}

function logout() {
    localStorage.removeItem('username')
    localStorage.removeItem('password')
}