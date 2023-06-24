// ==UserScript==
// @version     1.0
// @name        Audible Webplayer Volume
// @author      spookerton (https://github.com/spookerton/userscripts)
// @namespace   spookerton
// @include     /https?:\/\/(.*?)audible\.(.*?)/webplayer.*/
// @grant       none
// @run-at      document-idle
// ==/UserScript==

void function () {
  const player = document.querySelector('#audio-shaka-player')
  const volume = document.createElement('input')
  volume.type = 'range'
  volume.min = '0'
  volume.value = localStorage?.getItem('awv-volume') ?? 50
  volume.max = '100'
  volume.style = 'display: block; width: 100%'
  volume.addEventListener('input', function () {
    volume.value = Math.min(Math.max(volume.value, 0), 100)
    localStorage?.setItem('awv-volume', volume.value)
    player.volume =  volume.value * 0.01
  })
  document.querySelector('#adbl-cloud-player-controls').prepend(volume)
}()
