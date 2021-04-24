 var existCondition4 = setInterval(function() {
var roomnumberss = localStorage.getItem("roomnumbers");
if ($('.room_element:nth-child(1)')){ 
console.log("existCondition4 Exists!!");


$('.room_element:nth-child('+roomnumberss+')').click();
clearInterval(existCondition4);
}
}, 2000); 