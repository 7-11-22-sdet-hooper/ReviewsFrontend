(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(5298)}])},5298:function(a,b,c){"use strict";c.r(b),c.d(b,{default:function(){return r}});var d=c(5893);c(9008),c(5675);var e=c(797),f=c(9669),g=c.n(f),h=c(7294),i=function(){var a=(0,h.useState)(null),b=a[0],c=a[1],f=(0,h.useState)([]),i=f[0],j=f[1];(0,h.useEffect)(function(){g().get("http://137.184.139.89/vocab",{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(a){j((0,e.Z)(a.data)),console.log(a)}).catch(function(a){console.log(a)})},[]);var k=function(a){a.preventDefault(),b==a.target.id?c(null):c(a.target.id)};return(0,d.jsx)("div",{className:"card-con",children:i.map(function(a){return(0,d.jsxs)("div",{className:"card",onClick:k,id:a.vocab_id,children:[b==a.vocab_id?"":(0,d.jsx)("div",{className:"card-keyword-con",children:(0,d.jsx)("h1",{className:b==a.vocab_id?"card-active card-keyword":"card-keyword",children:a.word})}),(0,d.jsxs)("div",{className:b==a.vocab_id?"active-circle-con":"circle-con",children:[(0,d.jsx)("div",{className:b==a.vocab_id?"active-circle":"big-circle",children:b==a.vocab_id?(0,d.jsx)("div",{className:"card-keyword-con",children:(0,d.jsx)("h1",{className:"card-active-keyword card-keyword",children:a.word})}):""}),(0,d.jsxs)("p",{className:"card-def",children:[b==a.vocab_id?a.wordDefinition:""," "]})]})]},a.word+a.vocab_id+"")})})},j=i,k=c(3750),l=c(5434),m=c(1664),n=c.n(m),o=function(){var a=(0,h.useState)(null),b=a[0],c=a[1],e=function(a){a.preventDefault(),c(function(a){return!a})};return(0,d.jsxs)("div",{className:"sidebar-con",children:[(0,d.jsxs)("span",{className:"sidebar-header",children:[(0,d.jsx)("h1",{children:"Vocab"}),(0,d.jsx)("h1",{id:"sidebar-header-two",children:"App"})]}),(0,d.jsx)("a",{className:"sidebar-list-con active",children:(0,d.jsxs)("span",{className:"sidebar-list-span",children:[(0,d.jsx)(k.qW2,{}),(0,d.jsx)("h3",{className:"sidebar-list",children:"Cards"})]})}),(0,d.jsx)("a",{className:"sidebar-list-con",children:(0,d.jsxs)("span",{className:"sidebar-list-span",children:[(0,d.jsx)(l.OWq,{}),(0,d.jsx)("h3",{className:"sidebar-list",children:"Quiz"})]})}),b?(0,d.jsxs)("div",{className:"sidebar-acc-links-con",children:[(0,d.jsx)(n(),{href:"login",className:"sidebar-acc-links-button",children:"Login"}),(0,d.jsx)(n(),{href:"register",className:"sidebar-acc-links-button",children:"Register"})]}):"",(0,d.jsx)("div",{className:"sidebar-user-con",onClick:e,children:(0,d.jsx)("h3",{children:"Not logged in."})})]})},p=o,q=function(){return(0,d.jsxs)("div",{children:[(0,d.jsx)(p,{}),(0,d.jsx)("div",{className:"dashboard-con",children:(0,d.jsx)("div",{className:"dashboard-card-con",children:(0,d.jsx)(j,{})})})]})},r=q}},function(a){a.O(0,[13,228,949,801,774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])