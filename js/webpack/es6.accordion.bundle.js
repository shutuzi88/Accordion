(()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(void 0,o=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,"string");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(i.key),"symbol"===t(o)?o:String(o)),i)}var o}var r=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var n=e.selector,r=e.auto,i=void 0===r||r,o=e.index,l=void 0===o?0:o,a=e.cls,s=void 0===a?["fa-plus","fa-minus"]:a,c=e.collapsible,u=void 0===c||c;this.selector=n,this.auto=i,this.index=l,this.cls=null!=s?s:["a","b"],this.collapsible=u,this.initialize()}var r,i;return r=t,(i=[{key:"items",get:function(){return this.selector.querySelectorAll("[data-toggle-item]")}},{key:"buttons",get:function(){return this.selector.querySelectorAll("[data-toggle-btn]")}},{key:"contents",get:function(){return this.selector.querySelectorAll("[data-toggle-content]")}},{key:"toggleClass",value:function(t,n){var r,i,o=(r=this.cls,i=2,function(t){if(Array.isArray(t))return t}(r)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,i,o,l,a=[],s=!0,c=!1;try{if(o=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(a.push(r.value),a.length!==e);s=!0);}catch(t){c=!0,i=t}finally{try{if(!s&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw i}}return a}}(r,i)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(r,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=o[0],a=o[1];n?(t.add(a),t.remove(l)):(t.add(l),t.remove(a))}},{key:"initialize",value:function(){var t=this,e=this.contents,n=this.buttons,r=this.items;if(r.forEach((function(t){return t.display=!1})),n.forEach((function(t){return t.setAttribute("data-toggle-btn",!1)})),this.index>=0&&this.index<=r.length){var i=r[this.index];i.display=!0,n[this.index].setAttribute("data-toggle-btn",i.display),e[this.index].style.display=i.display?"block":"none",this.toggleClass(n[this.index].children[0].classList,i.display)}r.forEach((function(i){i.onclick=function(){if(!i.display||i.display!==!t.collapsible){var o=i.children[0],l=i.children[1];t.auto&&n.forEach((function(n,o){"true"===n.getAttribute("data-toggle-btn")&&(t.toggleClass(n.children[0].classList,!1),n.setAttribute("data-toggle-btn",!1),e[o].style.display="none",r[o].display=i.display)})),i.display=!i.display,o.setAttribute("data-toggle-btn",i.display),t.toggleClass(o.children[0].classList,i.display),l.style.display=i.display?"block":"none"}}}))}}])&&n(r.prototype,i),Object.defineProperty(r,"prototype",{writable:!1}),t}();window.Accordion=r})();