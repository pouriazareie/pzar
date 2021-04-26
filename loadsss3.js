 var existCondition4 = setInterval(function() {

try{
	if( localStorage.getItem("roomnumbers").length < 0)
{
console.log("roomnumbers not exist");
  localStorage.setItem('roomnumbers','1');

var roomnumberss = localStorage.getItem("roomnumbers");
}

if ($('.room_element:nth-child(1)')){ 




$('div.room_element:nth-child('+roomnumberss+')').click();


console.log("existCondition4 Exists!!");

clearInterval(existCondition4);

}
}catch(error){

console.log(error)

}
}, 2000); 
