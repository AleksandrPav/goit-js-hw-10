var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};var t={},e=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=a||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,p=Math.min,d=function(){return c.Date.now()};function v(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function y(n){if("number"==typeof n)return n;if(function(n){return"symbol"==typeof n||function(n){return!!n&&"object"==typeof n}(n)&&"[object Symbol]"==l.call(n)}(n))return NaN;if(v(n)){var t="function"==typeof n.valueOf?n.valueOf():n;n=v(t)?t+"":t}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(e,"");var a=i.test(n);return a||r.test(n)?u(n.slice(2),a?2:8):o.test(n)?NaN:+n}t=function(n,t,e){var o,i,r,u,a,f,c=0,l=!1,m=!1,g=!0;if("function"!=typeof n)throw new TypeError("Expected a function");function b(t){var e=o,r=i;return o=i=void 0,c=t,u=n.apply(r,e)}function h(n){return c=n,a=setTimeout($,t),l?b(n):u}function j(n){var e=n-f;return void 0===f||e>=t||e<0||m&&n-c>=r}function $(){var n=d();if(j(n))return T(n);a=setTimeout($,function(n){var e=t-(n-f);return m?p(e,r-(n-c)):e}(n))}function T(n){return a=void 0,g&&o?b(n):(o=i=void 0,u)}function w(){var n=d(),e=j(n);if(o=arguments,i=this,f=n,e){if(void 0===a)return h(f);if(m)return a=setTimeout($,t),b(f)}return void 0===a&&(a=setTimeout($,t)),u}return t=y(t)||0,v(e)&&(l=!!e.leading,r=(m="maxWait"in e)?s(y(e.maxWait)||0,t):r,g="trailing"in e?!!e.trailing:g),w.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=i=a=void 0},w.flush=function(){return void 0===a?u:T(d())},w};const m={inpurt:document.querySelector("#search-box"),list:document.querySelector(".country-list"),info:document.querySelector(".country-info")};console.log(m),m.inpurt.addEventListener("input",t((function(n){const t=n.target.value;!function(n){const t=n.map((({name:n,capital:t,population:e,languages:o,flags:i})=>`\n            <li>\n                <span>${n}</span>\n                <span>${t}</span>\n                <span>${e}</span>\n                <span>${o[0].name}</span>\n                <img src="${i}" alt="${n}">\n                </li>\n                `)).join("");m.list.innerHTML=t}((e=t,void fetch(`https://restcountries.com/v3/name/{${e}}?fields=name;capital;population;flags;languages`).then((n=>n.json())).then((n=>n)).catch((n=>console.log(n)))));var e}),300));
//# sourceMappingURL=index.ce7a8627.js.map