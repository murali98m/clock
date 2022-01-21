var noon = 12;
var evening = 18; // 6PM
var wakeUpTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM




function clock(){
    // display the string on the webpage
  
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var meridian=document.getElementById("pm");

    var currentTime = new Date();

    var hours1 = currentTime.getHours();
    var minutes1 = currentTime.getMinutes();
    var seconds1 = currentTime.getSeconds();
    var meridian1 = "AM";

    // Set hours
    // if (hours1 >= noon)
    // {
    //     meridian = "PM";
    // }
    if (hours1 > noon)
    {
        hours1 = hours1 - 12;
        meridian1="PM";
    }

    // Set Minutes
    if (minutes1 < 10)
    {
        minutes1 = "0" + minutes1;
    }

    // Set Seconds
    if (seconds1 < 10)
    {
        seconds1 = "0" + seconds1;
    }

    // put together the string that displays the time
    hours.innerHTML=hours1 ;
    minutes.innerHTML=minutes1 ;
    seconds.innerHTML=seconds1 ;
    pm.innerHTML=meridian1 ;


    
}

// updateClock();

var oneSecond = 1000;

setInterval(clock,oneSecond);



 // div box disply
    function Makediv(){
        var container=document.createElement('div');
        container.className="grid";
        container.id="dynamic-block";
        
        document.getElementById('con6').appendChild(container);
    
        var invalue=document.getElementById('wakeUpTimeSelector');
        var value=invalue.options[invalue.selectedIndex].text;
        document.getElementById("dynamic-block").innerHTML="wake up time <b style='color:red;'>" +value +"</b>" ;

        var container=document.createElement('div1');
        container.className="grid";
        container.id="dynamic-block1";
        
        document.getElementById('con6').appendChild(container);

        var invalue1=document.getElementById('lunchTimeSelector');
        var value1=invalue1.options[invalue1.selectedIndex].text;
        document.getElementById("dynamic-block1").innerHTML="Lunch time <b style='color:red;'>" +value1 +"</b>";

        var container=document.createElement('div2');
        container.className="grid";
        container.id="dynamic-block2";
        
        document.getElementById('con6').appendChild(container);

        var invalue2=document.getElementById('napTimeSelector');
        var value2=invalue2.options[invalue2.selectedIndex].text;
        document.getElementById("dynamic-block2").innerHTML="Nap time <b style='color:red;'>" +value2 +"</b>";
        
        
    }
//time selector
function setTime(){
    var i = document.getElementById("wakeUpTimeSelector").value;  
    var j = document.getElementById("lunchTimeSelector").value;  
    var k = document.getElementById("napTimeSelector").value;  
    var time = new Date().getHours();

    if(i==time){
        document.getElementById("lolcat").style.backgroundImage = "url(./image/wakeup_image.png)";
        document.getElementById("timeEvent").innerHTML="IT IS TIME TO WAKEUP";
    }
    else if(j==time){
        document.getElementById("lolcat").style.backgroundImage = "url(./image/lunch_image.png)";
        document.getElementById("timeEvent").innerHTML="IT IS TIME TO LUNCH";
    }
    else if(k==time){
        document.getElementById("lolcat").style.backgroundImage = "url(./image/goodnight_image.png)";
        document.getElementById("timeEvent").innerHTML="IT IS TIME TO SLEEP";
    }
    Makediv();
}