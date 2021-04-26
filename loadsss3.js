 var existCondition4 = setInterval(function() {

try{
	if( localStorage.getItem("roomnumber").length < 0)
{
console.log("roomnumber not exist");
  localStorage.setItem('roomnumber','1');

var roomnumberss = localStorage.getItem("roomnumber");
}

if ($('.room_element:nth-child(1)')){ 




$('div.room_element:nth-child('+roomnumberss+')').click();


console.log("existCondition4 Exists!!");

clearInterval(existCondition4);

}
}catch(error){

console.log(error)

}
}, 5000); 
