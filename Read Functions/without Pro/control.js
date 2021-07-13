var api_key = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";
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
                    window.sessionStorage.setItem("WINDOW", "on"); 
                }   
                else if (obj.value=="0"){
                    document.getElementById("WINDOW").classList.remove("on");
                    sessionStorage.removeItem("WINDOW");  
                }
            }    

            else{
                    alert("Error = "+obj.value);
            }
        }
    };
    xmlhttp.open("GET",base_url+api_key+"/digitalRead?pin="+pin+"&deviceName="+d_name,true);
    xmlhttp.send();
}


function OnClick(){

    digitalRead(0);
}

function ReadAll(){
    if (window.sessionStorage.getItem('WINDOW') == 'on'){
        document.getElementById("WINDOW").classList.add("on"); 
    }
}


ReadAll();


