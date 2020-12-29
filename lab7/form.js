/**Browser detection using duck typing */
var isChrome = !!window.chrome; //returns true if user loads our site in Chrome.
var isFirefox = typeof InstallTrigger !== 'undefined';  //Firefox uses installTrigger to load it's extensions.
var isIE = /*@cc_on!@*/false || !!document.documentMode;  //returns true if site loads in IE.
var flag;

if(isChrome) {
    document.getElementById("browser").innerHTML += " Chrome.";
} else if(isFirefox) {
    document.getElementById("browser").innerHTML += " Firefox.";
} else if(isIE) {
    document.getElementById("browser").innerHTML += " IE.";
} else {
    document.getElementById("browser").innerHTML = "Your browser can't be specified.";
}
/**Timer functionality*/
day = new Date();

clockstart = day.getTime();

function initStopWatch() {
    var myTime = new Date();
    return ((myTime.getTime() - clockstart)/1000);
}

function getSecs() {
    var tSecs = Math.round(initStopWatch());
    var iSecs = tSecs % 60;
    var iMins = Math.round((tSecs-30)/60);
    var sSecs ="" + ((iSecs > 9) ? iSecs : "0" + iSecs);
    var sMins ="" + ((iMins > 9) ? iMins : "0" + iMins);
    document.getElementById("timespent").innerHTML = sMins+":"+sSecs + " minutes.";
    window.setTimeout('getSecs()',1000);

}
getSecs();

/**Checkbox Validation */

function handleData()
{
    var form_data = new FormData(document.querySelector("form"));
    
    
    if(!form_data.has("hobby"))
    {
        document.getElementById("chk_option_error").style.visibility = "visible";
        flag = 0;
    }
    else
    {
        document.getElementById("chk_option_error").style.visibility = "hidden";
        flag=1;
    }
    return false;
}

if(!document.querySelector("input:invalid").checkValidity()) {
    document.querySelector("input:invalid").autofocus;
}

/**If hobby is reading, then type author */
/*function isReading() {
    if(!document.querySelectorAll("checkbox[value=reading]").checked) {
        //return true;
        document.getElementById("hobby").style.visibility="hidden";
        document.getElementById("writer").style.display="none";
  
        
        
    } else {
        document.getElementById("hobby").style.visibility="visible";
        document.getElementById("writer").style.display="block"; 
       
        
    }

}
isReading();*/



//preventDefault for submit
/*document.querySelector('button[type=submit]').addEventListener('click', function(event){
    event.preventDefault();
    

    if(flag===1) {
        loadSuccess();
    }
    
});*/

//load Success page
function loadSuccess() {
    window.location.href = "./success.html";
}

handleData();