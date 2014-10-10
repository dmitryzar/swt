// ==UserScript==
// @include http://store.steampowered.com/cart*
// @include https://store.steampowered.com/cart*
// ==/UserScript==

(function(){

function getCookie(name) {
	var cookie = " " + document.cookie;
	var search = " " + name + "=";
	var setStr = null;
	var offset = 0;
	var end = 0;
	if (cookie.length > 0) {
		offset = cookie.indexOf(search);
		if (offset != -1) {
			offset += search.length;
			end = cookie.indexOf(";", offset)
			if (end == -1) {
				end = cookie.length;
			}
			setStr = unescape(cookie.substring(offset, end));
		}
	}
	return(setStr);
}

function init() {
	
	var s = getCookie("sessionid");
	
	var $ = window.$J; // jQuery

	var el = document.querySelector('.page_content > .leftcol');

	links = [
		{href:'javascript:document.cookie=\'shoppingCartGID=0; path=/\';location.href=\'/cart/\';', text:'Очистить Корзину'},
		{href:'https://store.steampowered.com/checkout/?purchasetype=gift#fastbuy',blank:1, text:'Быстро купить в инвентарь со Steam Wallet'},
	];

	el.insertAdjacentHTML('afterBegin', createBlock('Steam Web Tools', links));

	$('#addtocartsubids').bind('submit',function(){
		var t = $(this);
		var subids = t.find('input[name="subid"]').val();
		$("input.addsud").replaceWith('<h1 style="float:left;">Добавляем!</h1>');
		t.append('<input type="hidden" name="action" value="add_to_cart">');
		subids = subids.split(',');
		for (var i=0; i < subids.length; i++) {
			t.append('<input type="hidden" name="subid[]" value="'+subids[i].trim()+'"/>');
		}
		t.append('<input type="hidden" name="sessionid" value="'+s+'"/>');
	})
}

// block
function createBlock(title, links){
	var out='<div class="block">\
<div class="block_header"><h4>'+title+'</h4></div>\
<div class="block_content"><div class="block_content_inner">';

	var link;
	for (var i=0; i < links.length; i++) {
		link = links[i];
		out+='<a class="btn_medium btnv6_blue_hoverfade" style="margin-right:20px;" href="'+link.href+'"'+(link.blank ? ' target="_blank"':'')+'><span>'+link.text+'</span></a>'
	}

	out+='<p style="margin-top:10px;font-size:15px;">Добавить SubID\'ы в корзину: </p><form style="margin-top:10px;" id="addtocartsubids" method="post"><input class="addsud" type="text" name="subid" placeholder="1, 2, 3"/><a style="margin:10px;padding:3px 15px;"><input style="border-radius: 5px 5px 5px 5px; padding: 3px; background: none repeat scroll 0px 0px rgb(76, 107, 34); color: rgb(164, 208, 7); cursor: pointer;" type="submit" value="Добавить"></a></form></div></div></div>';

	return out;
}

var state = window.document.readyState;
if((state == 'interactive')||(state == 'complete'))
	init();
else
	window.addEventListener("DOMContentLoaded", init,false);
})();