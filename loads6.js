
function sleep(mss) {return new Promise(resolve => setTimeout(resolve, mss));}
	function getRandomString(length) {
    var randomChars = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * (randomChars.length)/20));
    }
    return result;
}

(async ()=>{
try{
var timer2 = setInterval( async function() {

var date = new Date();

  if( date.getMinutes() >= 0){ 

 for (var ii=0;ii<10000;)
   {
var v1 = performance.now();
 var date=new Date();
let milisSec =date.getMilliseconds();
let Sec =date.getSeconds();
var finalresualt=getRandomString(((milisSec/Sec)/ 0.2));
  ++ii
  await sleep(  (20 +Sec)  * Math.random().toString(10).substr(2, 2))





/*  $("#content").val(finalresualt); */
var v2 = performance.now();
var dealys=(((v2-v1).toFixed(0))/1000).toFixed(0);
 if(finalresualt.length<100 && dealys>=1){
        {
console.log(finalresualt,finalresualt.length);
		$("#content").val("aliz khafe kar kon toole sag");

console.log(dealys);
    $("#content").submit();
}

  }
}

clearInterval(timer2);
	
	}
}
}, 500);


}
catch(err)
{
	console.log(err.message);
}
})();
