var a, b, c;

document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.dark=='false'){
        var element = document.body;
        element.classList.toggle("dark-mode");
    }
    document.getElementsByTagName("input")[0].checked = JSON.parse(localStorage.darkCheck);
}, false);

function toggleDark() {
    var element = document.body;
    b = element.classList.toggle("dark-mode");
    localStorage.dark=b; 
    c = document.getElementsByTagName("input")[0].checked 
    localStorage.darkCheck = c 
}

function openSide() {
    if (typeof a == 'undefined'){
        a=true;
    }
    if (a == true){
        document.getElementById("mySidebar").style.width = "225px";
        document.getElementById("main").style.marginLeft = "225px";
        a=false;
    } else{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        a=true;
    } 
}

function closeSide() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    a=true;
    document.getElementsByTagName("input")[1].checked = false
}