(this["webpackJsonp@grio/client"]=this["webpackJsonp@grio/client"]||[]).push([[13],{102:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var c=n(5),r=n(3),a={path:"departments/",list:function(t){return Object(r.h)(c.a,this.path,t)},listPage:function(t){return Object(r.h)(c.a,t)},get:function(t,e){return Object(r.h)(c.a,"".concat(this.path).concat(t,"/"),e)},post:function(t){return c.k.post("".concat(this.path),t)},patch:function(t,e,n){return c.k.patch("".concat(this.path).concat(t,"/"),e,n)},delete:function(t){return c.k.delete("".concat(this.path).concat(t,"/"))}}},331:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var c=n(5),r=n(2),a=n(6),i=n(9),s=n(19),u=n(16),o=n(3),h=n(102),l=n(0);function p(t){var e=t.match.params.compSlug,n=Object(r.useState)({results:[]}),a=Object(s.a)(n,2),p=a[0],j=a[1];return Object(r.useEffect)((function(){h.a.list({company:e}).then((function(t){j(t)})).catch((function(t){}))}),[e]),Object(l.jsx)(c.g,{title:"Departments",className:"department-list-view",children:Object(l.jsx)(i.k,{items:p.results,renderItem:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{user:{}},n=Object(o.c)(t.match.url);return Object(l.jsx)(u.c,{to:"".concat(n).concat(e.slug,"/"),children:Object(l.jsx)("div",{className:"department-list-item",children:e.name})},e.slug)},pagination:{count:p.count,next:p.next,previous:p.previous,onPreviousClick:function(){},onNextClick:function(){}}})})}var j=Object(r.lazy)((function(){return n.e(15).then(n.bind(null,339))}));function m(t){var e=t.match.path;return Object(l.jsx)(r.Suspense,{fallback:Object(l.jsx)(i.l,{}),children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(c.e,{path:"".concat(e,":depSlug/"),component:j,requiredPerms:["miq_hrm.change_department"]}),Object(l.jsx)(c.e,{path:e,component:p,requiredPerms:["miq_hrm.view_department"]})]})})}}}]);
//# sourceMappingURL=13.24ae3ecf.chunk.js.map