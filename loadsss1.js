

function f1(){
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

//clearListCookies();

f2();
}
function f2(){
var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }
        anHttpRequest.open( "GET", aUrl, true );            
        anHttpRequest.send( null );
    }
}
var client = new HttpClient();
client.get('https://raw.githubusercontent.com/pouriazareie/pzar/master/array.txt', function(response) {

console.log(response);
var arrayz =response.split(',');
localStorage.setItem("arrayz",arrayz);
f3();
});

}
async function f3(){

 function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));}
        console.log('waiting ... one min');

var existCondition0 = setInterval(  async function() {
console.log("existCondition0 starting ...");
	await sleep (1000)
		getGuestLogin();


var arrayzz=localStorage.getItem('arrayz');
arrayzz =arrayzz.split(",");




var wrongTitle = `میهن چت | چت | چت روم | چت فارسی | فارسی چت | پرشین چت | چتروم`;
var pageTitle = document.querySelector("head > title").innerText;





if (pageTitle.indexOf(wrongTitle.toString())!==-1){

console.log("yes ...");

	await sleep (1000)
var existCondition2 = setInterval( function() {

var rnduser=arrayzz[Math.floor(Math.random()*arrayzz.length)];
console.log(rnduser);
		console.log("existCondition2 Exists!!");
		$('#guest_username').val(rnduser);
				clearInterval(existCondition2);
		
	}, 500); 
	await sleep (1000)
var existCondition3 = setInterval( function() {
	if ($('.theme_btn.full_button.large_button').length){ 
		console.log("existCondition3 Exists!!");
		$('.theme_btn.full_button.large_button').click();
		clearInterval(existCondition3);

		}
	}, 500); 




	console.log("existCondition0 dont Exists!!");
}
else {
console.log("existCondition0  Exists!!");
clearInterval(existCondition0);
}
}, 10000);

}; 


f1();