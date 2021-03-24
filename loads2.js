function onload(){
var existCondition = setInterval(function() {

	if ($('div.room_name.centered_element').length){ 

		console.log("existCondition Exists!!");
		
		 document.querySelector("div.room_name.centered_element").click();
						clearInterval(existCondition);


	
		}
	}, 5000); 
}onload();
