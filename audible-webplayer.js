// ==UserScript==
// @version     1.2
// @name        audible webplayer tweaks
// @include     /https?:\/\/(.*?)audible\.(.*?)/webplayer.*/
// @author      spookerton <spkrtn@pm.me> (https://github.com/spookerton)
// @downloadURL https://raw.githubusercontent.com/spookerton/userscripts/main/audible-webplayer.js
// @updateURL   https://raw.githubusercontent.com/spookerton/userscripts/main/audible-webplayer.meta.js
// @namespace   spookerton
// @grant       none
// @run-at      document-idle
// ==/UserScript==


const $ = (query, parent = document) => parent.querySelector(query)
const $$ = (query, parent = document) => [...parent.querySelectorAll(query)]
const clamp = (val, min, max) => Math.min(Math.max(min, val), max)


const player = $('#audio-shaka-player')
const volume = Object.assign(document.createElement('input'), {
  type: 'range',
  min: '0',
  max: '100',
  style: 'display: block; width: 100%',
  value: clamp(localStorage?.getItem('tweak-volume') ?? 50, 0, 100),
  oninput () {
    const value = clamp(this.value, 0, 100)
    localStorage?.setItem('tweak-volume', value)
    player.volume =  value / 100
  }
})
$('#adbl-cloud-player-controls').prepend(volume)
