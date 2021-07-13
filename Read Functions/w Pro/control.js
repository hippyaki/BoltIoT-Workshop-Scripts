var api_key = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
var d_name = "BOLTXXXXXXX";
var base_url = "https://cloud.boltiot.com/remote/"

function digitalRead(pin) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {

        //document.getElementById(element_id).innerHTML = xmlhttp.responseText;
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          //  alert(xmlhttp.responseText);
            //document.getElementById("javascript_response").innerHTML = "Javascript Response : "+xmlhttp.responseText;
            var obj = JSON.parse(xmlhttp.responseText);
            if(obj.success=="1"){
                if(obj.value=="1"){
                    document.getElementById("WINDOW").classList.add("on");
                    window.localStorage.setItem("WINDOW", "on"); 
                }   
                else if (obj.value=="0"){
                    document.getElementById("WINDOW").classList.remove("on");
                    localStorage.removeItem("WINDOW");  
                }
            }    

            else{
                    alert("Device Offline");
            }
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/digitalRead?pin="+pin+"&deviceName="+d_name,true);
    xmlhttp.send();
}

function ReadAll(){
    if (window.localStorage.getItem('WINDOW') == 'on'){
        document.getElementById("WINDOW").classList.add("on"); 
    }
}
ReadAll();


const interval = setInterval(function(){
                    digitalRead(0);
                }, 500);  



