// ==UserScript==
// @version     1.1
// @name        boot.dev tweaks
// @match       https://*.boot.dev/*
// @author      spookerton <spkrtn@pm.me> (https://github.com/spookerton)
// @downloadURL https://raw.githubusercontent.com/spookerton/userscripts/main/bootdev.js
// @updateURL   https://raw.githubusercontent.com/spookerton/userscripts/main/bootdev.meta.js
// @namespace   spookerton
// @grant       none
// @run-at      document-start
// ==/UserScript==


const style_tweaks = [
  /* glassmorph and bg-glassmorph apply large, frequently stacked blurs
    * to large sections of page. That causes a lot of time to be spent
    * on rendering, most noticeably on the blog. This replaces the effect
    * with a simple translucent black background. */
  `.glassmorph, .bg-glassmorph {
    -webkit-backdrop-filter: none !important;
    backdrop-filter: none !important;
    background: rgba(0, 0, 0, 0.5) !important;
  }`,
]
const style = new CSSStyleSheet()
style.replaceSync(style_tweaks.join('\n'))
document.adoptedStyleSheets.push(style)
