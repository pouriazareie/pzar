if (document.location.href.indexOf('https://mihanhp.ir/chat/') > -1){   var timer = setInterval(function() { 
  var date = new Date(); if(date.getHours() === 13 && date.getMinutes() >= 9){ $("#content").val('salam khobid'); $("#content").submit(); clearInterval(timer);  } }, 200); }   
