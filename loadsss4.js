function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
(async ()=>{
function clearListCookies()
{   
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {   
        var spcook =  cookies[i].split("=");
        deleteCookie(spcook[0]);
		}
}

    function deleteCookie(cookiename)
    {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        var expires = ";expires="+d;
        var name=cookiename;
        console.log(name);
        var value="";
        document.cookie = name + "=" + value + expires + "; path=/";                    
    }
		var existCondition5 = setInterval(async function() {
	if ($('input#content').length){ 
		console.log("existCondition5 Exists!!");
		



if(! localStorage.getItem("textsends"))
{
console.log("textsend not exist");
var textsendss= " s h i r a m  d a h a n e t s e c r e t ";

}


else{

var textsendss =localStorage.getItem("textsends");

}
if(! localStorage.getItem("startatmins"))
{
console.log("startatmin not exist");
var startatminss= 0;

}
else

{

var startatminss =localStorage.getItem("startatmins");

}

var arr=[];
var date = new Date();

  if( date.getMinutes() >= startatminss){ 

 
 
function  doSomething() {
var textsends ="☺☺☺";

String.prototype.shuffle = function() {
	  'use strict';
	  var numberOfSpaces = Math.floor(Math.random() * (this.length - 1));
	  var word = this;
	  for (var i = 0; i < numberOfSpaces; i++) {
		var index = Math.floor(Math.random() * (this.length - 1));
		word = [word.slice(0,index), ' ', word.slice(index)].join('');
	  }
	  return word;
	};



document.querySelector("input#content").value =textsendss.shuffle(14," ");$('input#content').submit();
deleteCookie("PHPSESSID");

		//console.log(textsendss.shuffle(14," "));
}
(function loop() {
var date = new Date();
    var rand = Math.round(Math.random() *8);
    setTimeout(function() {
      doSomething();
 console.log("Delayed " + rand + " Secs" );
loop();  
    }, rand*date.getMilliseconds());
}());


clearInterval(timer2);


console.log("injected ");

  }

		clearInterval(existCondition5);
		}

else{
console.log("existCondition5 dont Exists");



}
	}, 5000); 
})();
