 var existCondition4 = setInterval(function() {

if ($('.room_element:nth-child(1)')){ 

	if( localStorage.getItem("roomnumber").length < 0)
{
console.log("roomnumber not exist");
  localStorage.setItem('roomnumber',1);

var myroomnumberss = localStorage.getItem("roomnumber");



console.log("existCondition4 Exists!!");

document.querySelector("#container_rooms > div:nth-child(1) > div:nth-child(2) > div > div.room_name.centered_element").click();
$('.room_element:nth-child('+roomnumberss+')').click();
clearInterval(existCondition4);
}
}
}, 2000); 
