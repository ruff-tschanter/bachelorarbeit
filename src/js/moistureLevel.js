showMoistureLevel = function(xCoord, yCoord, color){
    if (color === "#2e9800") {
        color = 'green'
        showGreenStatus();
    } else if (color === "#fd7e14"){
        color = 'orange'
        showOrangeStatus();
    } else if (color === "#e6001e"){
        color = 'red'
        showRedStatus();
    } else {
        color = 'blue'
        showBlueStatus();
    }
    //console.log("x coord: "+xCoord+", y coord: "+yCoord+", color: "+color);
}

var level1 = document.getElementById("level1")
var level2 = document.getElementById("level2")
var level3 = document.getElementById("level3")
var waterdrop = "<img src='../images/waterdrop.svg'/>"
var dry = "<img src='../images/weather/no-rain.svg' class='no-rain'/>"


showBlueStatus = function(){
    level1.innerHTML=waterdrop+waterdrop+waterdrop+waterdrop
    level2.innerHTML=waterdrop+waterdrop+waterdrop+waterdrop
    level3.innerHTML=waterdrop+waterdrop+waterdrop+waterdrop
}

showGreenStatus = function(){
    level1.innerHTML=waterdrop+waterdrop+waterdrop
    level2.innerHTML=waterdrop+waterdrop+waterdrop
    level3.innerHTML=waterdrop+waterdrop
}


showOrangeStatus = function(){
    level1.innerHTML=waterdrop+waterdrop
    level2.innerHTML=waterdrop+waterdrop
    level3.innerHTML=waterdrop
}

showRedStatus = function(){
    level1.innerHTML=waterdrop
    level2.innerHTML=waterdrop
    level3.innerHTML=dry
}