var direct = document.getElementById("pz");
direct.style.direction = "rtl";

function displays() {
if(direct.style.direction === "ltr")
{
direct.style.direction = "rtl";

}

else {
direct.style.direction = "ltr";


}

}

$(window).keydown(function(event) {
if(event.ctrlKey && event.keyCode == 66) { 
console.log("Ctrl+B event captured!");

event.preventDefault(); 
displays() ;

}

});
