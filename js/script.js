var a;

function toggleDark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function openSide() {
    if (typeof a == 'undefined'){
        a=true;
    }
    console.log(a)
    if (a == true){
        document.getElementById("mySidebar").style.width = "225px";
        document.getElementById("main").style.marginLeft = "225px";
        a=false;
    } else{
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
        a=true;
    } 
}

function closeSide() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    a=true;
}

