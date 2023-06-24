// ==UserScript==
// @version     1.1
// @name        bandcamp volume
// @include     /^https?:\/\/(.*?)\.bandcamp\.com\/(album)|(track)\/.*/
// @author      spookerton <spkrtn@pm.me> (https://github.com/spookerton)
// @downloadURL https://raw.githubusercontent.com/spookerton/userscripts/main/bandcamp.js
// @updateURL   https://raw.githubusercontent.com/spookerton/userscripts/main/bandcamp.meta.js
// @namespace   spookerton
// @grant       none
// @run-at      document-idle
// ==/UserScript==


const $ = (query, parent = document) => parent.querySelector(query)
const $$ = (query, parent = document) => [...parent.querySelectorAll(query)]
const clamp = (val, min, max) => Math.min(Math.max(min, val), max)


const volume = Object.assign(document.createElement('input'), {
  type: 'range',
  min: '0',
  max: '100',
  style: 'display: block; width: 100%',
  value: clamp(localStorage?.getItem('tweak-volume') ?? 50, 0, 100),
  oninput () {
    const value = clamp(this.value, 0, 100)
    localStorage?.setItem('tweak-volume', value)
    const audio = $('audio[src]')
    if (audio)
      audio.volume = value / 100
  }
})
$('.inline_player')?.append(volume)

for (const button of [...$$('div.play_status'), $('div.playbutton')]) {
  button.addEventListener('click', () => {
    const audio = $('audio[src]')
    if (audio)
      audio.volume = clamp(volume.value, 0, 100) / 100
  })
}
