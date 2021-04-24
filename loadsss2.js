 var existCondition4 = setInterval(function() {

if ($('.room_element:nth-child(1)')){ 

	if( localStorage.getItem("roomnumber").length < 0)
{
console.log("roomnumber not exist");
  localStorage.setItem('roomnumber',1);
var myroomnumberss = localStorage.getItem("roomnumber");

}


$('div.room_element:nth-child(1)').click();


console.log("existCondition4 Exists!!");

clearInterval(existCondition4);

}
}, 2000); 
