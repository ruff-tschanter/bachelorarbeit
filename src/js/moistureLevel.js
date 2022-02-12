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
    dots = document.getElementsByClassName("dot");
    for (var i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
     }
     
    

    eClassList = e.target.classList; 
    if (eClassList.contains('dot')){
        if (eClassList.contains('active')){
            eClassList.remove('active');
        } else{
            eClassList.add('active');
        }
    }
} 