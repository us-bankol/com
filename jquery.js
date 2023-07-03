$(function() { var add_block = $("#add_block"); add_block.click(function() { var keytitle = { 'keytitle': [
{'id':'1', 'title':/ПРИВЕТ/, 'botreturn':'Добрый день'},
{'id':"2", 'title':/ЗДРАВСТВУЙТЕ/, 'botreturn':'Добрый день'},
{'id':"3", 'title':/ДОБРЫЙ ДЕНЬ/, 'botreturn':'Здравствуйте'},
{'id':"4", 'title':/КОМИССИЯ/, 'botreturn':'Вам нужно оплатить комиссию самостиоятельно. Сторонний биллинг не имеет полномочий списывать комиссию с внутреннего счета вашего перевода.'},
{'id':"5", 'title':/КОМИССИЮ/, 'botreturn':'Вам нужно оплатить комиссию самостиоятельно. Сторонний биллинг не имеет полномочий списывать комиссию с внутреннего счета вашего перевода.'},
{'id':"6", 'title':/КОМИССИИ/, 'botreturn':'После оплаты услуги, средства поступят на ваш счёт в полном размере. Сторонний биллинг не имеет полномочий списывать комиссию с внутреннего счета вашего перевода.'},
{'id':"7", 'title':/ЛОХОТРОН/, 'botreturn':'Извините, это не лохотрон! Вам действительно поступил перевод, у вас лимит на карте. Если вы не оплатите комиссию, перевод будет возвращен отправителю.'},
{'id':"8", 'title':/НЕ МОГУ ОПЛАТИТЬ/, 'botreturn':'Могу посоветовать, -попробовать другую карту'},
{'id':"9", 'title':/ЗА ЧТО ПЛАТИТЬ/, 'botreturn':'У Вас лимиты на карте. Комиссию биллинга вам нужно оплатить самостоятельно, биллинг не имеет полномочий списывать комиссию с внутреннего счета вашего перевода.'},
{'id':"10", 'title':/НЕТ ДЕНЕГ/, 'botreturn':'Можете попробовать другую карту, чтобы получить перевод нужна оплата услуги биллинга, иначе Ваш перевод будет возвращен отправителю через 42 часа.'},
{'id':"11", 'title':/НЕ ХВАТАЕТ/, 'botreturn':'Попробуйте повторить оплату другой картой.'},
{'id':"12", 'title':/СПАСИБО/, 'botreturn':'Пожалуйста. Была рада вам помочь.'},
{'id':"13", 'title':/ПОСТУПЯТ ДЕНЬГИ/, 'botreturn':'Сразу после оплаты услуги в течении 10-15 минут.'},
{'id':"14", 'title':/КОГДА ПОСТУПЯТ/, 'botreturn':'Пожалуйста. Была рада вам помочь.'},
{'id':"15", 'title':/НЕ ПОЛУЧАЕТСЯ/, 'botreturn':'Могу посоветовать, -попробовать другую карту'},
{'id':"16", 'title':/В СУД/, 'botreturn':'Извините, в чем дело, что случилось? Качество наших услуг довольно хорошее и тысячи положительных отзывов.'},
{'id':"17", 'title':/ОБМАН/, 'botreturn':'Что случилось? Почему обман? У нас серьезная компания и много положительных отзывов.'},
{'id':"17", 'title':/ПОЛИЦИЮ/, 'botreturn':'Что случилось? Вы не правы! У нас абсолютно серьезная компания и тысячи положительных отзывов.'},
]}; var mymessage = $('.isoppchatmnsendminput').val(); chekmessage(); $("#blocks").append('<div class="mesbl"><div class="mymess">'+mymessage+'</div></div><div class="clear"></div>');
chatscroll(); if(localStorage.getItem('mymessageid')){ localStorage.setItem('mymessageid', Number(localStorage.getItem('mymessageid'))+1); localStorage.setItem('mymessage_'+localStorage.getItem('mymessageid'), mymessage); }else{ localStorage.setItem('mymessageid', '1'); localStorage.setItem('mymessage_1', mymessage);}
$.each(keytitle,function(key,data) { $.each(data, function(index,value) { 
if (mymessage.toUpperCase().match(value['title'])) { let i = 0; while (i < Number(localStorage.getItem('mymessageid'))) { i++; if(value['botreturn']==localStorage.getItem('supportmessage_'+i)){ console.log('Ответ уже был дан'); return false; }}
setTimeout(function(){ $('#writes').html('<img class="writes" src="img/typing-animation-3x.gif">');},3500);	
setTimeout(function(){ $("#blocks").append('<div class="mesbl"><img class="mesava" src="img/970960.png"><div class="mess"><span class="supp_name">Екатерина</span>'+value['botreturn']+'</div></div><div class="clear"></div>'); chatscroll();},9500); 
if(localStorage.getItem('mymessageid')){localStorage.setItem('mymessageid', Number(localStorage.getItem('mymessageid'))+1); localStorage.setItem('supportmessage_'+localStorage.getItem('mymessageid'), value['botreturn']); }}else{}});});});});
function chekmessage(){ var mymessage = $('.isoppchatmnsendminput').val(); document.getElementById("isoppchatmnsendminput").value = ""; }
function localmess(){ let i = 0; while (i < Number(localStorage.getItem('mymessageid'))) { i++; if(localStorage.getItem('mymessage_'+i)==null){ if(localStorage.getItem('supportmessage_'+i)==null){}else{ $("#blocks").append('<div class="mesbl"><img class="mesava" src="img/970960.png"><div class="mess"><span class="supp_name">Екатерина</span>'+localStorage.getItem('supportmessage_'+i)+'</div></div><div class="clear"></div>'); }}else{ $("#blocks").append('<div class="mesbl"><div class="mymess">'+localStorage.getItem('mymessage_'+i)+'</div></div><div class="clear"></div>');}} chatscroll() } function chatscroll() { var block = document.getElementById("chatscroll");  block.scrollTop = 999999;}