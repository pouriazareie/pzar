function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
(async ()=>{

var date = new Date();
var timer2 = setInterval( async function() {
  if( date.getMinutes() >= startatminss){ 

if(! localStorage.getItem("textsends"))
{
console.log("textsend not exist");
var textsendss= " s h i r a m  d a h a n e t a l i r e z a ";

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

document.querySelector("#content").value=textsendss.shuffle(14," ");
document.querySelector("#submit_button").click();




		console.log(textsendss.shuffle(14," "));
}
(function loop() {
var date = new Date();
    var rand = Math.round(Math.random() *10);
    setTimeout(function() {
      doSomething();
 console.log("Delayed " + rand + " Secs" );
loop();  
    }, rand*date.getMilliseconds());
}());


clearInterval(timer2);


console.log("injected ");

  }
}, 2000);
})();
