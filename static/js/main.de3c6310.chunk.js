(this.webpackJsonphypertext_event=this.webpackJsonphypertext_event||[]).push([[0],{11:function(e,t,a){e.exports={logo:"Navbar_logo__3q0Vt",navLinks:"Navbar_navLinks__1045q",hamburger:"Navbar_hamburger__21rIQ",open:"Navbar_open__3N5Ok",fade:"Navbar_fade__3zcJs",toggle:"Navbar_toggle__3uyXx",line1:"Navbar_line1__3LO1U",line2:"Navbar_line2__18ZDv",line3:"Navbar_line3__2pqAO"}},12:function(e,t,a){e.exports={darkModeToggle:"ThemeToggler_darkModeToggle__27Gtk",switch:"ThemeToggler_switch__2mj7y",switchToggle:"ThemeToggler_switchToggle__3UOOh"}},14:function(e,t,a){e.exports={slideImg:"Slider_slideImg__3D5sm",slideContent:"Slider_slideContent__1VggL"}},18:function(e,t,a){e.exports={container:"Whoami_container__1G_br",whoamiImage:"Whoami_whoamiImage__1SHa4",whoamiContent:"Whoami_whoamiContent__Mn-h1"}},32:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),i=a(25),c=a.n(i),r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(32);var l=a(13),d=a(6),u=(a(33),a(1));var m=function(){return Object(o.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&"light"===e?document.querySelector(".r2d2").classList.remove("darkr2d2"):document.querySelector(".r2d2").classList.add("darkr2d2")}),[]),Object(u.jsxs)("div",{id:"home",children:[Object(u.jsx)("div",{className:"circle"}),Object(u.jsxs)("div",{id:"section1",children:[Object(u.jsxs)("h2",{children:["Everyone's favorite astromech droid. ",Object(u.jsx)("br",{}),Object(u.jsx)("br",{})," Bleep Boop Boop Beep."]}),Object(u.jsx)("video",{autoPlay:!0,muted:!0,loop:!0,children:Object(u.jsx)("source",{src:"/hypertext/videos/homebg.mp4",type:"video/mp4"})}),Object(u.jsx)("center",{children:Object(u.jsxs)("h1",{className:"r2d2",children:["R2 ",Object(u.jsx)("br",{})," D2"]})})]})]})},h=a(11),j=a.n(h),b=a(27),g=a(12),v=a.n(g);var p=function(){var e=Object(o.useState)(),t=Object(b.a)(e,2),a=t[0],n=t[1];return Object(o.useEffect)((function(){var e=window.localStorage.getItem("theme");e?n(e):(n("dark"),window.localStorage.setItem("theme","dark"))}),[]),Object(o.useEffect)((function(){var e,t;"light"===a?(document.body.classList.remove("dark"),null===(e=document.querySelector(".r2d2"))||void 0===e||e.classList.remove("darkr2d2"),document.querySelectorAll(".cards").forEach((function(e){return e.classList.remove("darkCard")})),document.querySelector("nav").style.backgroundColor="white",document.querySelector(".".concat(v.a.switch)).classList.remove(v.a.switchToggle),document.querySelector(".".concat(v.a.darkModeToggle)).style.backgroundColor="black"):(document.body.classList.add("dark"),null===(t=document.querySelector(".r2d2"))||void 0===t||t.classList.add("darkr2d2"),document.querySelectorAll(".cards").forEach((function(e){return e.classList.add("darkCard")})),document.querySelector("nav").style.backgroundColor="#131418",document.querySelector("nav").style.backgroundColor="#000",document.querySelector(".".concat(v.a.switch)).classList.add(v.a.switchToggle),document.querySelector(".".concat(v.a.darkModeToggle)).style.backgroundColor="white")}),[a]),Object(u.jsx)("button",{onClick:function(){return function(e){"light"===e?(n("dark"),window.localStorage.setItem("theme","dark")):(n("light"),window.localStorage.setItem("theme","light"))}(a)},className:v.a.darkModeToggle,children:Object(u.jsx)("div",{className:"".concat(v.a.switch," ").concat(v.a.light)})})};var f=function(){return Object(u.jsxs)("nav",{children:[Object(u.jsx)("div",{className:j.a.logo}),Object(u.jsxs)("div",{className:"".concat(j.a.hamburger),onClick:function(e){var t=document.querySelector(".".concat(j.a.hamburger)),a=document.querySelector(".navLinks"),o=document.querySelectorAll(".navLinks li");a.classList.toggle(j.a.open),o.forEach((function(e){e.classList.toggle(j.a.fade)})),t.classList.toggle(j.a.toggle)},children:[Object(u.jsx)("div",{className:j.a.line1}),Object(u.jsx)("div",{className:j.a.line2}),Object(u.jsx)("div",{className:j.a.line3})]}),Object(u.jsxs)("ul",{className:"".concat(j.a.navLinks," navLinks"),children:[Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/",children:"home"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/whoami",children:"whoami"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/features",children:"features"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/pricing",children:"pricing"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/testimonials",children:"testimonials"})}),Object(u.jsx)("li",{children:Object(u.jsx)(l.b,{to:"/gallery",children:"gallery"})}),Object(u.jsx)(p,{})]})]})},x=a(18),O=a.n(x);var y=function(){return Object(u.jsxs)("main",{className:"".concat(O.a.container),children:[Object(u.jsx)("div",{className:"".concat(O.a.whoamiImage),children:Object(u.jsx)("img",{src:"/hypertext/images/whoami.png",alt:""})}),Object(u.jsxs)("div",{className:"".concat(O.a.whoamiContent," contentStyle"),children:[Object(u.jsx)("div",{className:"titleStyle",children:"Lorem ipsum dolor sit."}),"Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic temporibus voluptatem ipsam eveniet. Quod, cupiditate. Quibusdam id quos voluptatibus quidem error nemo, sunt tenetur maxime pariatur officiis assumenda optio hic deleniti vero? Harum eveniet nobis fugit numquam. Doloremque sed, nulla animi dolorum amet ipsa quia at velit quae. Delectus quam est amet totam quod, optio ipsum iste eaque ut ea laborum cumque adipisci officia impedit maiores in placeat numquam repellat sapiente magni? Expedita doloremque ipsa laboriosam voluptate iusto a eligendi cum non neque earum, accusamus accusantium, molestiae eius alias, dolores eaque ratione est odio. Nemo nesciunt distinctio assumenda exercitationem facilis?"]})]})};a(40);var w=function(){return Object(u.jsx)("div",{})};var k=function(){return Object(u.jsx)("div",{children:"Pricing"})};a(41),a(42);var _=function(e){var t=e.name,a=e.content,n=e.image,i=e.position;return Object(o.useEffect)((function(){var e=window.localStorage.getItem("theme");e&&"light"===e?document.querySelectorAll(".cards").forEach((function(e){return e.classList.remove("darkCard")})):document.querySelectorAll(".cards").forEach((function(e){return e.classList.add("darkCard")}))}),[]),Object(u.jsxs)("div",{class:"cards ".concat(i),children:[Object(u.jsxs)("div",{class:"review",children:[Object(u.jsx)("h2",{children:t}),Object(u.jsx)("br",{}),Object(u.jsxs)("h6",{children:['"',a,'"']})]}),Object(u.jsx)("img",{src:"".concat("/hypertext","/images/").concat(n),alt:t})]})};var S=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"quote",children:'"A satisfied customer is the best business strategy"'}),Object(u.jsx)("div",{id:"testimonials",children:[{name:"Luke Skywalker",content:"A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",image:"luke.png",position:"first"},{name:"Poe Dameron",content:"A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",image:"poe-dam.png",position:"second"},{name:"Han Solo",content:"A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",image:"hans.png",position:"first"},{name:"Rey Skywalker",content:"A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",image:"rey.png",position:"first"},{name:"Luke Skywalker",content:"A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",image:"luke.png",position:"second"},{name:"Poe Dameron",content:"A brilliant droid. R2D2 saved my life. Granted, he seems a little too arrogant about it, I wouldn't trade him for any other droid.",image:"poe-dam.png",position:"first"}].map((function(e){return Object(u.jsx)(_,{name:e.name,content:e.content,image:e.image,position:e.position})}))})]})},q=a(14),N=a.n(q),L=a(54),I=a(52),C=(a(43),a(44),a(45),a(53)),A=a(49),T=a(50),D=a(51);C.a.use([A.a,T.a,D.a]);var E=function(){return Object(u.jsxs)(L.a,{spaceBetween:30,centeredSlides:!0,autoplay:{delay:5e3,disableOnInteraction:!1},pagination:{clickable:!0},navigation:!0,className:"mySwiper",children:[Object(u.jsxs)(I.a,{children:[Object(u.jsx)("video",{className:N.a.slideImg,autoPlay:!0,muted:!0,loop:!0,children:Object(u.jsx)("source",{src:"/hypertext/videos/slide1.mp4"})}),Object(u.jsx)("h2",{className:N.a.slideContent,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vero corporis fugit. Fugiat, rem. Dicta, quaerat. Aut, quisquam."})]}),Object(u.jsxs)(I.a,{children:[Object(u.jsx)("video",{className:N.a.slideImg,autoPlay:!0,muted:!0,loop:!0,children:Object(u.jsx)("source",{src:"/hypertext/videos/slide1.mp4"})}),Object(u.jsx)("h2",{className:N.a.slideContent,children:"Slide 2"})]}),Object(u.jsxs)(I.a,{children:[Object(u.jsx)("video",{className:N.a.slideImg,autoPlay:!0,muted:!0,loop:!0,children:Object(u.jsx)("source",{src:"/hypertext/videos/slide1.mp4"})}),Object(u.jsx)("h2",{className:N.a.slideContent,children:"Slide 3"})]}),Object(u.jsxs)(I.a,{children:[Object(u.jsx)("video",{className:N.a.slideImg,autoPlay:!0,muted:!0,loop:!0,children:Object(u.jsx)("source",{src:"/hypertext/videos/slide1.mp4"})}),Object(u.jsx)("h2",{className:N.a.slideContent,children:"Slide 4"})]})]})};a(46);var R=function(){return Object(u.jsx)("div",{className:"slider",children:Object(u.jsx)(E,{})})};var P=function(){return Object(u.jsxs)(l.a,{basename:"/hypertext",children:[Object(u.jsx)(f,{}),Object(u.jsx)(d.c,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(d.a,{path:"/",component:m,exact:!0}),Object(u.jsx)(d.a,{path:"/whoami",component:y}),Object(u.jsx)(d.a,{path:"/features",component:w}),Object(u.jsx)(d.a,{path:"/pricing",component:k}),Object(u.jsx)(d.a,{path:"/testimonials",component:S}),Object(u.jsx)(d.a,{path:"/gallery",component:R})]})})]})};c.a.render(Object(u.jsx)(n.a.StrictMode,{children:Object(u.jsx)(P,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hypertext",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hypertext","/service-worker.js");r?(!function(e,t){fetch(e).then((function(a){var o=a.headers.get("content-type");404===a.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):s(t,e)}))}}()}},[[47,1,2]]]);
//# sourceMappingURL=main.de3c6310.chunk.js.map