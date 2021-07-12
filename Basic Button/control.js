function OnClick(){

    var L1 = document.getElementById('WINDOW');

    if (L1.classList.contains("on")){

        document.getElementById("WINDOW").classList.remove("on");
        localStorage.removeItem("WINDOW");  
    }
    else {

        document.getElementById("WINDOW").classList.add("on");
        window.localStorage.setItem("WINDOW", "on"); 
    }
}

function ReadButton(){
    if (window.localStorage.getItem('WINDOW') == 'on'){
        document.getElementById("WINDOW").classList.add("on"); 
    }
}


ReadButton();
