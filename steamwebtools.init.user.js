// ==UserScript==
// @name 	Steam Web Tools
// @namespace 	http://v1t.su/projects/steam/webtools/
// @description Useful tools in Steam web sites
// @version     2.0
// @date 	2014-10-10
// @creator vit@v1t.su
// @icon http://mr-vit.github.io/SteamWebTools/icon-64.png
// @include	http://store.steampowered.com/*
// @include	https://store.steampowered.com/*
// @include	http://steamcommunity.com/*
// @include	https://steamcommunity.com/*
// @homepage	http://v1t.su/projects/steam/webtools/
// ==/UserScript==

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = '//myzmage.github.io/swt/app/steamwebtools.base.js';
document.body.appendChild(script);