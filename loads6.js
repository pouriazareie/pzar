(async ()=>{
var date = new Date();

  if(date.getHours()===9 && date.getMinutes()>=0 && date.getSeconds()>=0)

{ 






function doSomething() {

$("#content").val("tiger shire alireza rideeeeeeeeeeee"+Math.random().toString(10).substr(2, 2) );$("#content").submit();

}

(function loop() {
    var rand = Math.round(Math.random() *10);
    setTimeout(function() {
            doSomething();

           // document.write("Delayed " + rand + " secs."+"\n"+"tiger shire alireza rideeeeeeeeeeee"+Math.random().toString(10).substr(2, 2) );



            loop();  
    }, rand*date.getMilliseconds());
}());


}
})();
