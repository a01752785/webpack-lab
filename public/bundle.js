(()=>{"use strict";console.log("Hello"),console.log("Hello again"),console.log("Third hello");const o=document.querySelector("form");console.log(typeof o),o.addEventListener("submit",(e=>{e.preventDefault();const l=(o=>{const e=o.querySelectorAll("input");let l={};return e.forEach((o=>{l[o.id]=o.value})),l})(o);console.log(l)}))})();