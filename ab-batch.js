// ==UserScript==
// @name         Animebytes Downloader
// @namespace    http://tampermonkey.net/animebytes-downloader
// @version      0.1
// @description  Utility to download all torrents on AnimeBytes' "Recent Uploads" page. Works for all browse pages.
// @author       bellyjeans55
// @match        https://animebytes.tv/torrents*
// @grant        none
// ==/UserScript==

var navbar = document.getElementById("browse_search");
var button = document.createElement('div');
var download_link = document.createElement('a');
download_link.appendChild(document.createTextNode('Download All'));
download_link.onclick = AnimeBytes;
download_link.style.cursor = "pointer";
button.appendChild(download_link);
navbar.appendChild(button);

function downloadAll(urls) {
  var link = document.createElement('a');
  link.setAttribute('download', null);
  link.style.display = 'none';
  document.body.appendChild(link);

  for (var i = 0; i < urls.length; i++) {
    link.setAttribute('href', urls[i]);
    link.click();
  }
  document.body.removeChild(link);
}

function AnimeBytes() {
    var links = Array.prototype.slice.call(document.querySelectorAll('[title="Download"]'));
    downloadAll(links);
}
