(this["webpackJsonp@grio/client"]=this["webpackJsonp@grio/client"]||[]).push([[18],{361:function(e,t,s){"use strict";s.r(t),s.d(t,"default",(function(){return o}));var c=s(4),n=s(1),a=s(16),i=s(2),l=s(10),r=s(20),d=s(5),j=s(126),b=s(0),m=["data"];function o(e){var t=Object(i.useState)({user:{}}),s=Object(a.a)(t,2),c=s[0],r=s[1],m=e.match.params.compSlug,o=e.match.params.empSlug;return Object(i.useEffect)((function(){o&&m&&j.a.get(o,{company:m}).then((function(e){r(e)})).catch((function(e){}))}),[o,m]),console.log(c),Object(b.jsxs)(d.g,{className:"employee-update-view",title:Object(b.jsx)(b.Fragment,{children:"< ".concat(c.user.name)}),children:[Object(b.jsxs)("div",{className:"d-grid grid-md-3 justify-content-between mb-3",children:[Object(b.jsx)("div",{className:"d-flex justify-content-center",children:Object(b.jsx)(l.a,Object(n.a)(Object(n.a)({},c.user.img_data),{},{style:{height:100,width:100}}))}),Object(b.jsxs)("div",{className:"span-md-2",children:[Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom p-1",children:[Object(b.jsx)("div",{className:"",children:"Role"}),Object(b.jsx)("div",{className:"",children:c.position})]}),c.user&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom p-1",children:[Object(b.jsx)("div",{className:"",children:"Firstname"}),Object(b.jsx)("div",{className:"",children:c.user.first_name})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom p-1",children:[Object(b.jsx)("div",{className:"",children:"Lastname"}),Object(b.jsx)("div",{className:"",children:c.user.last_name})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between p-1",children:[Object(b.jsx)("div",{className:"",children:"Sexe"}),Object(b.jsx)("div",{className:"",children:c.user.gender_label})]})]})]})]}),Object(b.jsxs)("section",{className:"mb-2 p-1",children:[Object(b.jsx)("div",{children:"Contact"}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom p-1",children:[Object(b.jsx)("div",{className:"",children:"Username"}),Object(b.jsx)("div",{className:"",children:c.user.username})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom p-1",children:[Object(b.jsx)("div",{className:"",children:"Phone number"}),Object(b.jsx)("div",{className:"",children:c.user.number||"646 322 2795"})]}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between p-1",children:[Object(b.jsx)("div",{className:"",children:"Email"}),Object(b.jsx)("div",{className:"",children:c.user.email||"user@email.com"})]})]}),Object(b.jsxs)("section",{className:"mb-2 p-1",children:[Object(b.jsx)("div",{children:"Department"}),Object(b.jsx)(u,{data:c})]}),Object(b.jsx)("div",{className:""})]})}var u=function(e){var t=e.data,s=void 0===t?{}:t,n=(Object(c.a)(e,m),Object(i.useState)(!1)),l=Object(a.a)(n,2),d=l[0],j=l[1];return s.department_data?d?Object(b.jsx)(r.b,{className:"",children:Object(b.jsx)("button",{onClick:function(){return j(!1)},children:"Annuler"})}):Object(b.jsxs)("div",{className:"p-1",children:[Object(b.jsx)("span",{children:s.department_data.name}),Object(b.jsx)("button",{onClick:function(){return j(!0)},children:"Update"})]}):null}}}]);
//# sourceMappingURL=18.6fda1f40.chunk.js.map