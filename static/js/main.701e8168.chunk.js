(this.webpackJsonphypertext_event=this.webpackJsonphypertext_event||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(16),r=n.n(a),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}n(24);var l=n(17),d=n(2),h=(n(25),n(1));var u=n(7),g=n.n(u),j=n(19),b=n(8),v=n.n(b);var f=function(){var e=Object(o.useState)(),t=Object(j.a)(e,2),n=t[0],c=t[1];return Object(o.useEffect)((function(){var e=window.localStorage.getItem("theme");e?c(e):(c("light"),window.localStorage.setItem("theme","light"))}),[]),Object(o.useEffect)((function(){"light"===n?(document.body.classList.remove("dark"),document.querySelector(".".concat(v.a.switch)).classList.remove(v.a.switchToggle),document.querySelector(".".concat(v.a.darkModeToggle)).style.backgroundColor="black"):(document.body.classList.add("dark"),document.querySelector(".".concat(v.a.switch)).classList.add(v.a.switchToggle),document.querySelector(".".concat(v.a.darkModeToggle)).style.backgroundColor="white")}),[n]),Object(h.jsx)("button",{onClick:function(){return function(e){"light"===e?(c("dark"),window.localStorage.setItem("theme","dark")):(c("light"),window.localStorage.setItem("theme","light"))}(n)},className:v.a.darkModeToggle,children:Object(h.jsx)("div",{className:"".concat(v.a.switch," ").concat(v.a.light)})})};var m=function(){return Object(h.jsxs)("nav",{children:[Object(h.jsx)("div",{className:g.a.logo}),Object(h.jsxs)("div",{className:"".concat(g.a.hamburger," hamburger"),onClick:function(e){var t=document.querySelector(".hamburger"),n=document.querySelector(".navLinks"),o=document.querySelectorAll(".navLinks li");n.classList.toggle(g.a.open),o.forEach((function(e){e.classList.toggle(g.a.fade)})),t.classList.toggle(g.a.toggle)},children:[Object(h.jsx)("div",{className:g.a.line1}),Object(h.jsx)("div",{className:g.a.line2}),Object(h.jsx)("div",{className:g.a.line3})]}),Object(h.jsxs)("ul",{className:"".concat(g.a.navLinks," navLinks"),children:[Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Solutions"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Products"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Services"})}),Object(h.jsx)("li",{children:Object(h.jsx)("a",{href:"/",children:"Contact Us"})}),Object(h.jsx)(f,{})]})]})};n(27);var _=function(){return Object(h.jsxs)(l.a,{children:[Object(h.jsx)(m,{}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{path:"/",component:"",exact:!0}),Object(h.jsx)(d.a,{path:"/",component:"",exact:!0}),Object(h.jsx)(d.a,{path:"/",component:"",exact:!0})]})]})};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hypertext",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hypertext","/service-worker.js");i?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):s(t,e)}))}}()},7:function(e,t,n){e.exports={logo:"Navbar_logo__3q0Vt",navLinks:"Navbar_navLinks__1045q",loginButton:"Navbar_loginButton__2fxzO",joinButton:"Navbar_joinButton__3YxlD",hamburger:"Navbar_hamburger__21rIQ",open:"Navbar_open__3N5Ok",fade:"Navbar_fade__3zcJs",toggle:"Navbar_toggle__3uyXx",line1:"Navbar_line1__3LO1U",line2:"Navbar_line2__18ZDv",line3:"Navbar_line3__2pqAO"}},8:function(e,t,n){e.exports={darkModeToggle:"ThemeToggler_darkModeToggle__27Gtk",switch:"ThemeToggler_switch__2mj7y",switchToggle:"ThemeToggler_switchToggle__3UOOh"}}},[[33,1,2]]]);
//# sourceMappingURL=main.701e8168.chunk.js.map