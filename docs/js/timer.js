var comingDate = new Date();
comingDate.setMonth((comingDate.getMonth() < 12 ? comingDate.getMonth()+1 : 1));
comingDate.setDay(Math.round((Math.random()*30+1))); //random day
update();

//setTimeout(blink,600);
setTimeout(still("Skept"),500);
    
    
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var hit = setInterval(
function changeText(callback){
    
    var wordList = ["Skept","Speach", "Knowledge", "Ethics", "Philosophy", "Thought"];
    var current = $("#word").html();
    //console.log(current);
    var index = wordList[(wordList.indexOf(current) +1)% wordList.length]; //when it gets to 5 goes to 0
    var ight = setInterval(function(){
                    current = current.substring(0, current.length-1);
                    $("#word").html(current);
                    if(current.length==0){
                        clearInterval(ight);
                        still(index);
                    }

                }, 175+getRandomInt(0,75));
    
}, 4400);

function still(i){
    var c = 0;
   
        
    var type = setInterval(function(){
                    $("#word").append(i[c]);
                    c++;
                    if(c==i.length){
                        clearInterval(type);
                    }

                },175+getRandomInt(0,75));
};

var h = $("#cs").height();

$("#cs").height(0);
$("#cs").animate({height:h,opacity:1},'slow',function(){$("#mNav").animate({opacity:1},1000);});


function update(){
    var currentDate = new Date();
    var milisecondsToDate = comingDate.getTime()-currentDate.getTime();
    var days =  Math.floor(milisecondsToDate/(86400000));
    var hours = Math.floor((milisecondsToDate/(3600000))%24);
    var minutes = Math.floor((milisecondsToDate/(1000*60))%60);
    var seconds = Math.floor((milisecondsToDate/(1000))%60);
    if(currentDate < comingDate){
        $("#d").html(((days==1) ? "Day" : "Days"));
        $("#h").html(((hours==1) ? "Hour" : "Hours"));
        $("#m").html(((minutes==1) ? "Minute" : "Minutes"));
        $("#s").html(((seconds==1) ? "Second" : "Seconds"));

        $("#days").html(((days<10)? "0"+days : days));
        $("#hours").html(((hours<10)? "0"+hours : hours));
        $("#minutes").html(((minutes<10)? "0"+minutes : minutes));
        $("#seconds").html(((seconds<10)? "0"+seconds : seconds));
        setTimeout(update,1000);
    } else{
        $("#d").html("Days");
        $("#h").html("Hours");
        $("#m").html("Minutes");
        $("#s").html("Seconds");

        $("#days").html("00");
        $("#hours").html("00");
        $("#minutes").html("00");
        $("#seconds").html("00");
        
    }
    
}

//function blink(){
//    var op = $("#blinker").css("opacity");
//    $("#blinker").animate({opacity: ((op==1)? 0:1)},30,'linear');
//    setTimeout(blink,600);
//}   



//DOM
$("#mbtn").click(function() { 
    var l = $("#nav").css("left");
    var to = '0';
    if(l == "0px"){to=-30};
    $("#nav").animate({left: to+"%"}, 'fast');
});


$('body').click(function(){
    var l = $("#nav").css("left");
    if(l=="0px"){
        $("#nav").animate({left: "-30%"}, 'fast');
    }

});

$("#signUp").click(function() {
    $(this).html('<i class="fa fa-spinner fa-pulse" aria-hidden="true"></i>');
    $.ajax({
        url: "email.php",
        data: {email: $("#email").val()},
        type: "POST",
        dataType: "html",
        success: function(){
            $(this).html('Submit');
            alert("YAY");
        }
    
    
    });
    
});