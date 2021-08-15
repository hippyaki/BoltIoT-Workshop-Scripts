var A0  = "A0";
var A1  = "A1";
var A2  = "A2";
var A3  = "A3";
var True = "HIGH"
var False = "LOW"
var HIGH = "HIGH"
var LOW  = "LOW"
var debug = 0
var flag;

var api_key = "";
//var dev_arr = ["BOLT8021328","BOLT1234567","BOLT789654"];
var base_url = "https://cloud.boltiot.com/remote/"

var d_name = ""

var temp=""


function apikey_val(){
    api_key = document.getElementById("api").value;
}

function deviceid_val(){
    d_name = document.getElementById("device").value;
    isOnline();
}


function isOnline() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){
                if (obj.value == "online"){
                    ReadAll();
                    document.getElementById('motionbtn').innerHTML='Online!'; 
                    setTimeout(function() {document.getElementById('motionbtn').innerHTML='Check Status';},2000);
                }
                else if (obj.value == "offline"){
                // alert("Device is Offline");
                    document.getElementById('motionbtn').innerHTML='Offline!'; 
                    setTimeout(function() {document.getElementById('motionbtn').innerHTML='Check Status';},2000);
                }
            }
            else if(obj.success=="0"){
                alert(obj.value);
            }
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/isOnline?&deviceName="+d_name,true);
    xmlhttp.send();
}



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


//digitalRead(0);

function ReadAll(){
    if (window.localStorage.getItem('R1') == 'on'){
        document.getElementById("R1").classList.add("on"); 
    }
    if (window.localStorage.getItem('R2') == 'on'){
        document.getElementById("R2").classList.add("on"); 
    }
    if (window.localStorage.getItem('R5') == 'on'){
        document.getElementById("R5").classList.add("on"); 
    }
    if (window.localStorage.getItem('R6') == 'on'){
        document.getElementById("R6").classList.add("on"); 
    }
    if (window.localStorage.getItem('R7') == 'on'){
        document.getElementById("R7").classList.add("on"); 
    }
    

}



function R1(){

    var R1 = document.getElementById('R1');

    if (d_name == ""){
        alert("Enter Device ID");
    }
    else{
        if (R1.classList.contains("on")){
        digitalWrite(0,'LOW');
        document.getElementById("R1").classList.remove("on");
        localStorage.removeItem("R1"); 

        
        }
        else {
            digitalWrite(0,'HIGH');
            document.getElementById("R1").classList.add("on");
            window.localStorage.setItem("R1", "on");
      
        }
    }

}


function R2(){

    var R2 = document.getElementById('R2');

    if (d_name == ""){
        alert("Enter Device ID");
    }

    else{
        if (R2.classList.contains("on")){
        digitalWrite(1,'LOW');
        document.getElementById("R2").classList.remove("on");
        localStorage.removeItem("R2"); 
        
        }
        else {
            digitalWrite(1,'HIGH');
            document.getElementById("R2").classList.add("on");  
            window.localStorage.setItem("R2", "on");
    
        }
    }
}

function R5(){

    var R5 = document.getElementById('R5');

    if (d_name == ""){
        alert("Enter Device ID");
    }
    else{
        if (R5.classList.contains("on")){
        digitalWrite(2,'LOW');
        document.getElementById("R5").classList.remove("on");
        localStorage.removeItem("R5"); 
        }
        else {
            digitalWrite(2,'HIGH');
            document.getElementById("R5").classList.add("on");   
            window.localStorage.setItem("R5", "on");
   
        }
    }
}

function R6(){

    var R6 = document.getElementById('R6');

    if (d_name == ""){
        alert("Enter Device ID");
    }

    else{
        if (R6.classList.contains("on")){
        digitalWrite(3,'LOW');
        document.getElementById("R6").classList.remove("on");
        localStorage.removeItem("R6"); 
        }
        else {
            digitalWrite(3,'HIGH');
            document.getElementById("R6").classList.add("on");
            window.localStorage.setItem("R6", "on");
      
        }
    }
}

function R7(){

    var R7 = document.getElementById('R7');

    if (d_name == ""){
        alert("Enter Device ID");
    }

    else{
        if (R7.classList.contains("on")){
        digitalWrite(4,'LOW');
        document.getElementById("R7").classList.remove("on");
        localStorage.removeItem("R7"); 
        }
        else {
            digitalWrite(4,'HIGH');
            document.getElementById("R7").classList.add("on");   
            window.localStorage.setItem("R7", "on");
   
        }
    }
}



function SHUT(){
    digitalWrite(0,'LOW');
    digitalWrite(1,'LOW');
    digitalWrite(2,'LOW');
    digitalWrite(3,'LOW');
    digitalWrite(4,'LOW');
    document.getElementById("R1").classList.remove("on");
    document.getElementById("R2").classList.remove("on");
    document.getElementById("R5").classList.remove("on");
    document.getElementById("R6").classList.remove("on");
    document.getElementById("R7").classList.remove("on");
    localStorage.removeItem("R1");
    localStorage.removeItem("R2");
    localStorage.removeItem("R5");
    localStorage.removeItem("R6");
    localStorage.removeItem("R7");

}





//----NAV---
$('ul li').on('click', function() {
    $('li').removeClass('active');
    $(this).addClass('active');
});


function analogRead(pin,element_id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        //document.getElementById(element_id).innerHTML = xmlhttp.responseText;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            //alert(xmlhttp.responseText);
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){

                temp = (100*obj.value)/1024;
                var far = (temp*1.8)+32;
                 document.querySelector(element_id).innerHTML = Math.round(temp) + "&deg;C | " + Math.round(far) + "&deg;F";
            }
            else{
                 document.querySelector(element_id).innerHTML = "NaN";
            }
        }
    };s
    xmlhttp.open("GET",base_url+api_key+"/analogRead?pin="+pin+"&deviceName="+d_name,true);
    xmlhttp.send();
}
/*
const interval = setInterval(function(){
                    analogRead(A0,".temp");
                 }, 5000);  
 
*/

$(function() {
  var apibtn = $(".apibtn");
  
  apibtn.on("click", function() {
    if (api_key == ""){
        alert("Enter API KEY");
    }
    else{
    $(this).addClass('apibtn-progress');
    apibtn.addClass('apibtn-complete')
    }
  });
})

$(function() {
  var devbtn = $(".devbtn");
  
  devbtn.on("click", function() {
    if (d_name == ""){
        alert("Enter Device ID");
    }
    else{
    $(this).addClass('devbtn-progress');
    devbtn.addClass('devbtn-complete')
    }
  });
})

//isOnline();