if (document.location.href.indexOf('https://mihanhp.ir/chat/') > -1){   var timer = setInterval(function() { 
  var date = new Date(); if(date.getHours() === 12 && date.getMinutes() >= 40){ $("#content").val('salam khobid'); $("#content").submit(); clearInterval(timer);  } }, 200); }   
