 function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));}

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
var arrayzz=localStorage.getItem('arrayz');
arrayzz =arrayzz.split(",");
var wrongTitle = `میهن چت - چت - چت روم - چت فارسی - فارسی چت - پرشین چت - چتروم`;
var pageTitle = document.querySelector("head > title").innerText;
if (pageTitle.indexOf(wrongTitle.toString())!==-1){
console.log("yes ...");
	await sleep (1000)
var existCondition2 = setInterval(async function() {



			if(document.querySelector("button.intro_guest_btn.large_button_rounded.default_btn")){
var rnduser=arrayzz[Math.floor(Math.random()*arrayzz.length)];
//console.log(rnduser);
	document.querySelector("button.intro_guest_btn.large_button_rounded.default_btn").click();
	await sleep (1000)


if(	document.querySelector("#guest_username")){

	console.log("existCondition2 Exists!!");
		document.querySelector("#guest_username").value=rnduser;
				clearInterval(existCondition2);
}
			}
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
}, 5500);
}; 
 
f2();
