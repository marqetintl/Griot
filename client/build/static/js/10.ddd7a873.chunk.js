(this["webpackJsonp@grio/client"]=this["webpackJsonp@grio/client"]||[]).push([[10],{150:function(e,t,c){},376:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return y}));var n=c(1),a=c(4),s=c(2),m=c(9),r=c(12),o=(c(5),c(3)),l=c(6),i=(c(150),c(17)),j=(new l.j("companies/"),c(0)),b=["company"],d=function(e){var t=e.company,c=void 0===t?{name:""}:t,n=(Object(a.a)(e,b),Object(i.c)({name:c.name}));return Object(j.jsxs)(i.b,{context:n,onSubmit:function(e){e.preventDefault()},children:[Object(j.jsxs)("div",{className:"d-grid mb-2",children:[Object(j.jsx)(i.b.Label,{value:"Company name",className:"d-block mb-1"}),Object(j.jsx)(i.b.TextInput,{name:"name"})]}),Object(j.jsx)("div",{className:"",children:Object(j.jsx)(i.b.Submit,{value:"Save",className:"btn btn-primary"})})]})};function p(e){var t=Object(s.useContext)(r.a).company;return t&&t.slug?(console.log(t),Object(j.jsxs)(l.g,{children:[Object(j.jsx)(l.g.Section,{title:"Company profile",text:"Update company profile details",children:Object(j.jsx)(d,Object(n.a)(Object(n.a)({},e),{},{company:t}))}),Object(j.jsx)(l.g.Section,{title:"Segmentation",children:Object(j.jsx)("div",{className:"text-muted text-sm",children:"All Users | % Male/Female/Others"})})]})):null}var u=["company"],O=Object(s.lazy)((function(){return c.e(18).then(c.bind(null,377))})),h=Object(s.lazy)((function(){return c.e(15).then(c.bind(null,378))})),x=function(e){var t=e.company,c=void 0===t?{}:t,n=Object(a.a)(e,u),s=Object(o.e)(n.match.url);return Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)(l.d,{exact:!0,to:s,label:"Profile",requiredPerms:["miq_hrm.change_company"],className:"btn-secondary-2 me-1"}),Object(j.jsx)(l.d,{to:"".concat(s).concat(c.slug,"/employees/"),label:"Employees",requiredPerms:["miq_hrm.view_employee"],className:"btn-secondary-2 me-1"}),Object(j.jsx)(l.d,{to:"".concat(s).concat(c.slug,"/departments/"),label:"Departments",requiredPerms:["miq_hrm.view_department"],className:"btn-secondary-2"})]})};function y(e){var t=e.match.path,c=Object(s.useContext)(r.a).company;return c?Object(j.jsx)(l.g,{title:Object(j.jsx)("h2",{className:"text-md d-none d-md-block",children:c.name}),actions:Object(j.jsx)(x,Object(n.a)(Object(n.a)({},e),{},{company:c})),className:"hrm-routes",children:Object(j.jsxs)(m.d,{children:[Object(j.jsx)(l.e,{path:"".concat(t,":compSlug/employees/"),component:O,requiredPerms:["miq_hrm.view_employee"]}),Object(j.jsx)(l.e,{path:"".concat(t,":compSlug/departments/"),component:h,requiredPerms:["miq_hrm.view_department"]}),Object(j.jsx)(l.e,{path:t,component:p,requiredPerms:["miq_hrm.change_company"]})]})}):Object(j.jsx)(CompanyCreateView,Object(n.a)({},e))}}}]);
//# sourceMappingURL=10.ddd7a873.chunk.js.map