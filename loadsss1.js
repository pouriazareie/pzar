function f1(){
	function clearListCookies()
{   
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++)
    {   
        var spcook =  cookies[i].split("=");
        deleteCookie(spcook[0]);
		}
}
    function deleteCookie(cookiename)
    {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        var expires = ";expires="+d;
        var name=cookiename;
        console.log(name);
        var value="";
        document.cookie = name + "=" + value + expires + "; path=/";                    
    }//clearListCookies();
deleteCookie("PHPSESSID");
   deleteCookie("__cfduid");

}



f1();
