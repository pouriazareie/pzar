 var existCondition4 = setInterval(function() {
	if( localStorage.getItem("roomnumber").length < 0)
{
console.log("roomnumber not exist");
  localStorage.setItem('roomnumber',1);

var myroomnumberss = localStorage.getItem("roomnumber");
}

if ($('.room_element:nth-child(1)')){ 
console.log("existCondition4 Exists!!");


$('.room_element:nth-child('+roomnumberss+')').click();
clearInterval(existCondition4);
}
}, 2000); 
