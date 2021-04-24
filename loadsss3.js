function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
(async ()=>{

var textsendss= localStorage.getItem("textsends");


var date = new Date();
var timer2 = setInterval( async function() {
  if($("#content").length )
{ 
function doSomething() {
$("#content").val(textsendss+"  "+Math.random().toString(10).substr(2, 24) );$("#content").submit();
}
(function loop() {
var date = new Date();
    var rand = Math.round(Math.random() *7);
    setTimeout(function() {
      doSomething();
 console.log("Delayed " + rand + " secs." );
loop();  
    }, rand*date.getMilliseconds());
}());
clearInterval(timer2);
  console.log("injected ");
}
}, 1000);
})();