// ==UserScript==
// @version     1.1
// @name        stackoverflow tweaks
// @include     /^https?://stackoverflow.com/(questions)|(review)/.*/
// @author      spookerton <spkrtn@pm.me> (https://github.com/spookerton)
// @downloadURL https://raw.githubusercontent.com/spookerton/userscripts/main/stackoverflow.js
// @updateURL   https://raw.githubusercontent.com/spookerton/userscripts/main/stackoverflow.meta.js
// @namespace   spookerton
// @grant       none
// @run-at      document-start
// ==/UserScript==


const style_tweaks = [
  /* Widen the main content space */
  `body > .container {
    max-width: 1800px !important;
    width: 1800px !important;
  }
  #content {
    max-width: 1800px !important;
    width: 1800px !important;
  }`,
]
const style = new CSSStyleSheet()
style.replaceSync(style_tweaks.join('\n'))
document.adoptedStyleSheets.push(style)
