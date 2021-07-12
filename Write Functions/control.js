var debug = 0

var api_key = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var d_name = "BOLTXXXXXX";
var base_url = "https://cloud.boltiot.com/remote/"
 

function digitalWrite(pin,val){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200 && debug == 1) {
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            alert(xmlhttp.responseText);
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){

            }
        }
    };  
    xmlhttp.open("GET", base_url+api_key+"/digitalWrite?pin="+pin+"&state="+val+"&deviceName="+d_name,true);
    xmlhttp.send();    
}


function L1(){

    var L1 = document.getElementById('L1');

    if (L1.classList.contains("on")){

        digitalWrite(1,'LOW');
        document.getElementById("L1").classList.remove("on");
        localStorage.removeItem("L1");  
    }
    else {
        digitalWrite(1,'HIGH');
        document.getElementById("L1").classList.add("on");
        window.localStorage.setItem("L1", "on"); 
    }
}

function L2(){

    var L2 = document.getElementById('L2');
 
    if (L2.classList.contains("on")){
        digitalWrite(2,'LOW');
        document.getElementById("L2").classList.remove("on");
        localStorage.removeItem("L2");     
    }
    else {
       digitalWrite(2,'HIGH');
        document.getElementById("L2").classList.add("on");
        window.localStorage.setItem("L2", "on");
    }
}


function ReadAll(){
    if (window.localStorage.getItem('L1') == 'on'){
        document.getElementById("L1").classList.add("on"); 
    }
    if (window.localStorage.getItem('L2') == 'on'){
        document.getElementById("L2").classList.add("on"); 
    }
}


ReadAll();
