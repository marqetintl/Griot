(this["webpackJsonp@grio/client"]=this["webpackJsonp@grio/client"]||[]).push([[11],{332:function(e,c,t){},360:function(e,c,t){"use strict";t.r(c);var n=t(16),s=t(1),i=t(2),a=t(10),r=t(3),j=(t(332),t(105)),l=t(106),b=t(0),o=function(e){var c=e.children;return Object(b.jsx)("div",{className:"",onClick:function(){return console.log("Uploading...")},children:c})},d=function(e){var c=e.tab;return"library"===c?Object(b.jsx)(u,Object(s.a)({},e)):"unsplash"===c?Object(b.jsx)(x,Object(s.a)({},e)):Object(b.jsxs)("div",{className:"tab-upload",children:[Object(b.jsx)("div",{className:"",children:"Click to upload an image"}),Object(b.jsx)("div",{className:"",children:"or"}),Object(b.jsx)("div",{className:"",children:"Paste url"})]})},u=function(e){return Object(b.jsx)("div",{className:"tab-library",children:"Images from library"})},x=function(e){return Object(b.jsx)("div",{className:"tab-unsplash",children:"Images from unsplash"})},O=function(e){var c=Object(i.useState)("new"),t=Object(n.a)(c,2),s=t[0],a=t[1];return Object(b.jsxs)("div",{className:"section-edit",children:[Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("button",{onClick:function(){return a("new")},children:"New"}),Object(b.jsx)("button",{onClick:function(){return a("library")},children:"Library"}),Object(b.jsx)("button",{onClick:function(){return a("unsplash")},children:"Unsplash"})]}),Object(b.jsx)(d,{tab:s}),Object(b.jsx)(o,{})]})},f=function(e){var c=e.data;if(e.context.isEdit)return Object(b.jsx)(O,Object(s.a)({},e));return Object(b.jsxs)("div",{className:Object(r.f)(["section-preview",!c.image&&"empty"]),onClick:function(){return e.context.setEdit(!e.context.isEdit)},children:[Object(b.jsx)(a.j,{Icon:a.i.CloudArrowUp,src:"https://images.unsplash.com/photo-1621570070821-2e2b1358fae3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wxfDF8YWxsfDF8fHx8fHwyfHwxNjIxOTkyNDMw&ixlib=rb-1.2.1&q=80&w=2000"}),!c.image&&Object(b.jsx)("span",{children:"Click to upload an image"})]})},h=Object(i.forwardRef)((function(e,c){return Object(b.jsxs)("div",{id:e.id,ref:c,className:Object(r.f)([e.className,"section-img"]),children:[Object(b.jsx)(l.c,{Icon:a.i.Image}),Object(b.jsx)(l.a,{children:Object(b.jsx)(f,Object(s.a)({},e))}),Object(b.jsx)(l.b,{children:Object(b.jsx)("div",{className:"actions",children:Object(b.jsx)(j.a,Object(s.a)({},e))})})]})}));r.b&&(h.displayName="ImageSection"),c.default=h}}]);
//# sourceMappingURL=11.ab4e65e9.chunk.js.map