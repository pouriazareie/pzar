 var timer = setInterval(function() { 
  var date = new Date(); if(date.getHours() === 1 && date.getMinutes() >= 19){   console.log('ok');
 clearInterval(timer);  } }, 200);
