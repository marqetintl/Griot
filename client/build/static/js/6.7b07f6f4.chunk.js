(this["webpackJsonp@grio/client"]=this["webpackJsonp@grio/client"]||[]).push([[6],{105:function(t,e,c){"use strict";c.d(e,"a",(function(){return o})),c.d(e,"b",(function(){return u}));var n=c(1),s=c(10),r=c(3),a=c(0),i=function(t){var e=t.context,c=void 0===e?Object(r.j)("section context"):e,n=t.form,i=void 0===n?Object(r.j)("form context"):n,o=t.data,u=void 0===o?Object(r.j)("section data"):o;return Object(a.jsx)(s.g,{Icon:s.i.ArrowUpCircle,label:"Save",className:"section-btn",title:"Save",onClick:function(e){var n=u.text!==i.values.text;if(console.log("Saving",n),!n)return c.setEdit(!c.isEdit);t.onSave&&t.onSave()}})},o=function(t){console.log(t);var e=t.context,c=void 0===e?Object(r.j)("section context"):e,i=t.data,o=void 0===i?Object(r.j)("section data"):i;return Object(a.jsx)(s.g,Object(n.a)(Object(n.a)({},t),{},{Icon:s.i.Trash,className:"section-btn btn-danger",title:"Delete",onClick:function(){return c.remove(o.slug)}}))},u=function(t){var e=t.context,c=void 0===e?Object(r.j)("section context"):e,o=c.isEdit;return o?Object(a.jsx)(i,Object(n.a)({},t)):Object(a.jsx)(s.g,{Icon:o?s.i.Eye:s.i.PencilSquare,className:"section-btn",title:o?"Preview Mode":"Edit Mode",onClick:function(){return c.setEdit(!o)}})}},106:function(t,e,c){"use strict";c.d(e,"a",(function(){return r})),c.d(e,"c",(function(){return a})),c.d(e,"b",(function(){return i}));var n=c(3),s=c(0),r=function(t){var e=t.children,c=t.id,r=t.className;return Object(s.jsx)("div",{id:c,className:Object(n.f)(["section-body",r]),children:e})},a=function(t){var e=t.children,c=t.Icon,r=t.id,a=t.className;return Object(s.jsxs)("div",{id:r,className:Object(n.f)(["section-header",a]),children:[c&&Object(s.jsx)("div",{className:"",children:Object(s.jsx)(c,{className:"icon"})}),e]})},i=function(t){var e=t.children,c=t.id,r=t.className;return Object(s.jsx)("div",{id:c,className:Object(n.f)(["section-footer",r]),children:e})}},107:function(t,e,c){"use strict";c.d(e,"a",(function(){return r}));c(18),c(1),c(4);var n=c(3),s=c(22),r={path:"pages/",list:function(t){return Object(n.h)(s.a,this.path,t)},get:function(t,e){return Object(n.h)(s.a,"".concat(this.path).concat(t,"/"),e)}}},129:function(t,e,c){},130:function(t,e,c){},131:function(t,e,c){},364:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return I}));var n=c(16),s=c(2),r=c(4),a=c(3),i=(c(129),c(1)),o=c(10),u=c(105),l=c(106),j=(c(130),c(0)),d=function(t){return Object(j.jsx)("div",{className:"",children:"TxtSectionEdit"})},b=function(t){return t.context.isEdit?Object(j.jsx)(d,Object(i.a)({},t)):Object(j.jsx)("div",{className:"",children:"Prev"})},O=Object(s.forwardRef)((function(t,e){return Object(j.jsxs)("div",{id:t.id,ref:e,className:Object(a.f)([t.className]),children:[Object(j.jsx)(l.c,{Icon:o.i.TextareaT}),Object(j.jsx)(l.a,{children:Object(j.jsx)(b,Object(i.a)({},t))}),Object(j.jsx)(l.b,{children:Object(j.jsxs)("div",{className:"actions",children:[Object(j.jsx)(u.a,Object(i.a)(Object(i.a)({},t),{},{label:"Delete"})),Object(j.jsx)(u.b,{context:t.context})]})})]})}));a.b&&(O.displayName="TextSection");var f=O,v=(c(131),Object(s.createContext)());function h(t){var e=t.data,r=void 0===e?Object(a.j)("section data props"):e,o=r.slug,u=r.type,l=Object(s.useRef)(),d=Object(s.useState)(t.isEdit||!1),b=Object(n.a)(d,2),O=b[0],h=b[1],x=Object(s.useMemo)((function(){return{isEdit:O,setEdit:h}}),[O]);if(!o)return null;var N=function(t){switch(t){case"MD":return Object(s.lazy)((function(){return Promise.all([c.e(2),c.e(12)]).then(c.bind(null,365))}));case"IMG":return Object(s.lazy)((function(){return c.e(11).then(c.bind(null,360))}));default:return f}}(u);return Object(j.jsx)(s.Suspense,{fallback:Object(j.jsx)("div",{children:"Loading ..."}),children:Object(j.jsx)(v.Provider,{value:x,children:Object(j.jsx)(N,Object(i.a)(Object(i.a)({},t),{},{context:x,ref:l,className:Object(a.f)(["section",O&&"active"])}))})})}var x={path:"sections/",list:function(t,e){return console.log(e),Object(a.h)(t,this.path,e,"SET_SECTIONS")},get:function(t,e){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"PREPEND_SECTION";return actions.get("".concat(this.path).concat(t,"/"),e,c)},post:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"PREPEND_SECTION";return actions.post("".concat(path),t,e)},patch:function(t,e,c){return actions.patch("".concat(path).concat(t,"/"),e,c,"UPDATE_SECTION")},delete:function(t){return actions.delete("".concat(path).concat(t,"/"),t,"REMOVE_SECTION")}},N=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{results:[]},e=arguments.length>1?arguments[1]:void 0,c=e.type,n=e.payload,s=void 0===n?{}:n,r=s.results;switch(c){case"SET_SECTIONS":return Object(i.a)({},s);case"APPEND_SECTION":return r=addOrUpdateArrayObject(t.results,s,"slug",!0),Object(i.a)(Object(i.a)({},t),{},{results:r});case"PREPEND_SECTION":case"UPDATE_SECTION":return r=addOrUpdateArrayObject(t.results,s),Object(i.a)(Object(i.a)({},t),{},{results:r});case"REMOVE_SECTION":return r=t.results.filter((function(t){return t.slug!==s.slug})),Object(i.a)(Object(i.a)({},t),{},{results:r});default:return Object(i.a)({},t)}},g=["sourceSlug","children"],E=["sourceSlug","request"];function p(t){var e=t.sourceSlug,c=(void 0===e&&Object(a.j)("source slug"),t.children);Object(r.a)(t,g);return Object(j.jsx)("div",{className:"",children:c})}var S=function(t){var e=t.sourceSlug,c=void 0===e?Object(a.j)("source slug"):e,i=t.request,o=void 0===i?Object(a.j)("request"):i,u=(Object(r.a)(t,E),Object(s.useReducer)(N,{results:[]})),l=Object(n.a)(u,2),d=l[0],b=l[1];return Object(s.useEffect)((function(){c&&x.list(o,{source:c}).then((function(t){b({type:"SET_SECTIONS",payload:t})}))}),[c,o]),Object(j.jsx)("div",{className:"editor-panel",children:Object(j.jsxs)("div",{className:"editor-content",children:[Object(j.jsx)("div",{className:"editor-label"}),Object(j.jsx)("div",{className:"editor-sections",children:d.results.map((function(t){return Object(j.jsx)(h,{data:t},t.slug)}))}),Object(j.jsx)("div",{className:"editor-actions"})]})})},m=c(107),T=c(22);function I(t){var e=t.match.params.pageSlug,c=Object(s.useState)({}),r=Object(n.a)(c,2),a=r[0],i=r[1];return Object(s.useEffect)((function(){e&&m.a.get(e).then((function(t){return i(t)})).catch((function(t){}))}),[e]),a&&a.slug?Object(j.jsx)(p,{sourceSlug:a.slug,className:"",children:Object(j.jsxs)("div",{className:"",children:[a.slug,Object(j.jsx)(S,{sourceSlug:a.slug,request:T.a})]})}):null}}}]);
//# sourceMappingURL=6.7b07f6f4.chunk.js.map