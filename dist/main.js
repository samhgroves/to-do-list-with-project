(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(537),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([e.id,'body {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.active {\n  color: blue;\n}\n\nh1 {\n  text-align: center;\n  display: block;\n}\n\n.content {\n  display: flex;\n}\n\n.projects {\n  width: 20%;\n  float: left;\n}\n\n.tasks {\n  margin: 0 auto;\n  width: 60%;\n}\n\n#project-list,\n#to-do-list {\n  border: 1px solid black;\n  height: 300px;\n  overflow-y: auto;\n  padding: 10px;\n  text-decoration: dashed;\n}\n\n.done {\n  text-decoration: line-through;\n}\n',"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,4DAA4D;AAC9D;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,WAAW;AACb;;AAEA;EACE,cAAc;EACd,UAAU;AACZ;;AAEA;;EAEE,uBAAuB;EACvB,aAAa;EACb,gBAAgB;EAChB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;AAC/B",sourcesContent:['body {\n  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.active {\n  color: blue;\n}\n\nh1 {\n  text-align: center;\n  display: block;\n}\n\n.content {\n  display: flex;\n}\n\n.projects {\n  width: 20%;\n  float: left;\n}\n\n.tasks {\n  margin: 0 auto;\n  width: 60%;\n}\n\n#project-list,\n#to-do-list {\n  border: 1px solid black;\n  height: 300px;\n  overflow-y: auto;\n  padding: 10px;\n  text-decoration: dashed;\n}\n\n.done {\n  text-decoration: line-through;\n}\n'],sourceRoot:""}]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),r="/*# ".concat(a," */");return[t].concat([r]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var A=a(f,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:A,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=o(e,a),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),i=n.n(r),c=n(565),s=n.n(c),d=n(216),l=n.n(d),u=n(589),p=n.n(u),f=n(426),A={};A.styleTagTransform=p(),A.setAttributes=s(),A.insert=i().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=l(),t()(f.Z,A),f.Z&&f.Z.locals&&f.Z.locals;const v=[];function h(e){let t={name:e,active:!1,toDoList:[],addToProjects:function(){v.push(t)},addToDo:function(e){this.toDoList.push(e)}};return t}const m=h("general");m.addToProjects(),m.active=!0;let E=m;function C(e){let t=document.getElementById("project-list");for(;t.firstChild;)t.removeChild(t.lastChild);let n=!1;e.forEach((o=>{let a=document.createElement("div");a.textContent=o.name,a.addEventListener("click",(function(){B(o),t.querySelectorAll(".active").forEach((e=>{e.classList.remove("active")})),a.classList.add("active"),e.forEach((e=>{e!==o&&(e.active=!1),o.active=!0,function(){for(let e=0;e<v.length;e++)if(!0===v[e].active){E=v[e];break}}()}))}));let r=document.createElement("button");r.textContent="X",a.appendChild(r),r.addEventListener("click",(function(){let n=e.indexOf(o);-1!==n&&e.splice(n,1),t.removeChild(a)})),n||(a.classList.add("active"),n=!0),t.appendChild(a)}))}C(v);const y=document.getElementById("project-input");document.getElementById("add-project").addEventListener("click",(function(){h(y.value).addToProjects(),C(v),y.value=""}));const g=document.getElementById("to-do-input");function b(e){return{task:e,done:!1}}document.getElementById("add-to-do").addEventListener("click",(function(){const e=b(g.value);E.addToDo(e),B(E),g.value=""}));const x=b("make dinner");function B(e){let t=document.getElementById("to-do-list"),n=e.toDoList;for(;t.firstChild;)t.removeChild(t.lastChild);n.forEach((e=>{let o=document.createElement("div");o.textContent=e.task,t.appendChild(o);let a=document.createElement("button");a.textContent="Done",a.addEventListener("click",(function(){o.classList.toggle("done"),e.done=!e.done}));let r=document.createElement("button");r.textContent="Delete",r.addEventListener("click",(function(){let a=n.indexOf(e);-1!==a&&n.splice(a,1),t.removeChild(o)})),e.done&&o.classList.add("active"),o.appendChild(a),o.appendChild(r)}))}m.addToDo(x),B(m)})()})();
//# sourceMappingURL=main.js.map