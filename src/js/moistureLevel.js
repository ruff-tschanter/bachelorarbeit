var dropCount = null;

showMoistureLevel = function(xCoord, yCoord, color, dropCount){
    if (color === "#7bccc4") {
        color = 'green'
        showGreenStatus();
    } else if (color === "#ccebc5"){
        color = 'teal'
        if (dropCount === 4) {
            showfourDrops();
        } else {
            showTealStatus();
        }
    } else if (color === "#fffcbb"){
        color = 'yellow'
        showYellowStatus();
    } else {
        color = 'blue'
        showBlueStatus();
    }
    //drawLine(xCoord, yCoord);
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

showfourDrops = function(){
    level1.innerHTML=waterdrop+waterdrop
    level2.innerHTML=waterdrop
    level3.innerHTML=waterdrop
}

showTealStatus = function(){
    level1.innerHTML=waterdrop+waterdrop
    level2.innerHTML=waterdrop+waterdrop
    level3.innerHTML=waterdrop
}

showYellowStatus = function(){
    level1.innerHTML=waterdrop
    level2.innerHTML=waterdrop
    level3.innerHTML=dry
}



window.onclick = e => {
    dots = document.getElementsByClassName("clickableDot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
     }
     
    

    eClassList = e.target.classList; 
    if (eClassList.contains('clickableDot')){
        if (eClassList.contains('active')){
            eClassList.remove('active');
        } else{
            eClassList.add('active');
        }
    }
} 


document.addEventListener("DOMContentLoaded", function() {
    showMoistureLevel(3, 4.2, '#7bccc4')
});


var origin = document.getElementById('kegel');  

drawLine = function (xCoord, yCoord){
    if (xCoord < 6.0) {
        console.log("x smaller than 6");
        if (yCoord < 6.0) {
            console.log("y smaller than 6");
            origin.setAttribute("points", "500,-30 "+(xCoord*3)+","+(yCoord*4.5)+" 500,140")
        } else if (yCoord >= 6.0 && yCoord < 12.0) {
            console.log("y between 6 and 12");
            origin.setAttribute("points", "500,-30 "+(xCoord*2.5)+","+(yCoord*3.75)+" 500,140")
        } else {
            console.log("else");
            origin.setAttribute("points", "500,-230 "+(xCoord*2)+","+(yCoord*3.3)+" 500,60")
        }
    }
    else {
        if (yCoord < 6.0) {
            console.log("y smaller than 6");
            origin.setAttribute("points", "500,-30 "+(xCoord*2.6)+","+(yCoord*6)+" 500,140")
        } else if (yCoord >= 6.0 && yCoord < 12.0) {
            console.log("y between 6 and 12");
            origin.setAttribute("points", "500,-170 "+(xCoord*2.6)+","+(yCoord*3.6)+" 500,100")
        } else {
            console.log("else");
            origin.setAttribute("points", "500,-240 "+(xCoord*2.5)+","+(yCoord*3.4)+" 500,20")
        }
    }
} 
