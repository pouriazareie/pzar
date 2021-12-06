//----------------part 1
addJquery = document.createElement('script'); 
  addJquery.setAttribute('src', '//ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'); 
  document.getElementsByTagName('head')[0].appendChild(addJquery); 
  addJquery.onload = function () {alert('add jquery version 3.6.0')} 
//----------------part 2 

function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); } 
 
async function deletes(){ 
try{ 
//-------تعداد ای پی برای پاک شدن در هر صحفه 
var loopcount=9; 
for(var i=0;i<loopcount;){ 
 
//---کلیک بروی ایکون ضربدر ذیلت 
document.querySelector("[aria-label*='Delete']").parentElement.click(); 
 
//---(نیم ثانیه) تاخیر نیم دهم ثانیه 
await sleep(500);  
 
//---کلیک بزوی کانفرم 
 
$("*:contains('Confirm')").click(); 
//--- تاخیر دو ثانیه 
 
await sleep(6000);  
++i 
 
} 
}catch(errer){} 
 
}deletes();
