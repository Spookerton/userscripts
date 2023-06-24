// ==UserScript==
// @version     1.1
// @name        github tweaks
// @include     /^https?:\/\/camo\.githubusercontent\.com/
// @author      spookerton <spkrtn@pm.me> (https://github.com/spookerton)
// @downloadURL https://raw.githubusercontent.com/spookerton/userscripts/main/github.js
// @updateURL   https://raw.githubusercontent.com/spookerton/userscripts/main/github.meta.js
// @namespace   spookerton
// @grant       none
// @run-at      document-start
// ==/UserScript==


const style_tweaks = [
  /* Force images to use nearest neighbour scaling instead of bilinear */
  `img {
    image-rendering: pixelated !important;
  }`,
]
const style = new CSSStyleSheet()
style.replaceSync(style_tweaks.join('\n'))
document.adoptedStyleSheets.push(style)
