(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{60:function(e,t,n){},61:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(7),s=n.n(r),c=(n(60),n(61),n(13)),j=n(17),o=n(42),d=n(4),h=n(102),l=n(22),b=n(114),u=n(106),O=n(107),x=n(104),p=n(110),f=n(39),g=n(109),m=n(108),w=n(47),v=n.n(w),S=n(48),y=n.n(S),N=n(49),C=n.n(N),k=n(111),B=n(112),P=n(113),D=n(43),F=n.n(D),I=n(44),T=n.n(I),E=n(3),R=240,A=Object(h.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(R,"px)"),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:R},title:{flexGrow:1},hide:{display:"none"},drawer:{width:R,flexShrink:0},drawerPaper:{width:R},drawerHeader:Object(o.a)(Object(o.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-start"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginRight:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginRight:0}}}));function G(){var e=A(),t=Object(l.a)(),n=i.a.useState(!1),a=Object(j.a)(n,2),r=a[0],s=a[1];return Object(E.jsxs)("div",{className:e.root,children:[Object(E.jsx)(x.a,{}),Object(E.jsx)(u.a,{position:"fixed",className:Object(d.a)(e.appBar,Object(c.a)({},e.appBarShift,r)),children:Object(E.jsxs)(O.a,{children:[Object(E.jsx)(f.a,{variant:"h6",noWrap:!0,className:e.title}),Object(E.jsx)(m.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:function(){s(!0)},className:Object(d.a)(r&&e.hide),children:Object(E.jsx)(v.a,{})})]})}),Object(E.jsxs)(b.a,{className:e.drawer,variant:"persistent",anchor:"right",open:r,classes:{paper:e.drawerPaper},children:[Object(E.jsx)("div",{className:e.drawerHeader,children:Object(E.jsx)(m.a,{onClick:function(){s(!1)},children:"rtl"===t.direction?Object(E.jsx)(y.a,{}):Object(E.jsx)(C.a,{})})}),Object(E.jsx)(g.a,{}),Object(E.jsx)(p.a,{children:["Inbox","Starred","Send email","Drafts"].map((function(e,t){return Object(E.jsxs)(k.a,{button:!0,children:[Object(E.jsx)(B.a,{children:t%2===0?Object(E.jsx)(F.a,{}):Object(E.jsx)(T.a,{})}),Object(E.jsx)(P.a,{primary:e})]},e)}))}),Object(E.jsx)(g.a,{}),Object(E.jsx)(p.a,{children:["All mail","Trash","Spam"].map((function(e,t){return Object(E.jsxs)(k.a,{button:!0,children:[Object(E.jsx)(B.a,{children:t%2===0?Object(E.jsx)(F.a,{}):Object(E.jsx)(T.a,{})}),Object(E.jsx)(P.a,{primary:e})]},e)}))})]})]})}function H(){return Object(E.jsx)(G,{})}n(68);function J(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),c=s[0],o=s[1];Object(a.useEffect)((function(){fetch("https://goweather.herokuapp.com/weather/".concat(n)).then((function(e){return e.json()})).then((function(e){o(e)}))}),[n]),Object(a.useEffect)((function(){fetch("https://goweather.herokuapp.com/weather/Paris").then((function(e){return e.json()})).then((function(e){o(e)}))}),[n]);var d="",h="",l="";return void 0!==c&&(d=c.temperature,h=c.wind,l=c.description,c.forecast),Object(E.jsxs)("div",{className:"main",children:[Object(E.jsx)("input",{type:"text",placeholder:"enter city name  (e.g. Paris)",value:n,onChange:function(e){return i(e.target.value)}}),Object(E.jsxs)("div",{className:"top",children:[Object(E.jsxs)("div",{className:"today",children:[Object(E.jsx)("h1",{className:"title",children:" Wheather for Today "}),Object(E.jsxs)("h3",{children:[" temperature: ",d," "]}),Object(E.jsxs)("h3",{children:[" wind: ",h," "]}),Object(E.jsxs)("h3",{children:[" description: ",l," "]})]}),Object(E.jsx)("h1",{children:"Coming Days:"}),n?c.forecast.map((function(e){return Object(E.jsxs)("div",{className:"nextDays",children:[Object(E.jsxs)("h3",{children:[" Day ",e.day,". "]}),Object(E.jsxs)("h3",{children:[" temperature: ",e.temperature," "]}),Object(E.jsxs)("h3",{children:[" wind: ",e.wind," "]})]})})):""]})]})}var L=function(){return Object(E.jsxs)("div",{className:"App",children:[Object(E.jsx)(H,{}),Object(E.jsx)(J,{})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.render(Object(E.jsx)(i.a.StrictMode,{children:Object(E.jsx)(L,{})}),document.getElementById("root")),W()}},[[70,1,2]]]);
//# sourceMappingURL=main.eed570c6.chunk.js.map