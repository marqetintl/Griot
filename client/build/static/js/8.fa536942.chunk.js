(this["webpackJsonp@grio/client"]=this["webpackJsonp@grio/client"]||[]).push([[8],{125:function(e,t,c){"use strict";c.d(t,"a",(function(){return d})),c.d(t,"c",(function(){return j})),c.d(t,"b",(function(){return b}));var n=c(4),s=c(8),a=(c(3),c(9)),r=c(95),i=c(0),u=["doc","docSlug","onSuccess"],o=["document"],l=["document"],d=function(e){var t=e.doc,c=e.docSlug,o=e.onSuccess,l=Object(n.a)(e,u);if(!t||t.is_read_only)return null;var d=function(){return r.a.delete(c).then((function(e){Object(s.isFunction)(o)&&o(c)})).catch((function(e){}))};return Object(i.jsx)(a.e,{Icon:a.i.Trash,id:l.id,label:l.label,className:l.className,title:"Supprimer ce document",renderHeader:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("h3",{children:"Supprimer ce document"})})},renderFooter:function(e){var c=e.setOpen;return Object(i.jsxs)("div",{className:"flex-1 d-flex align-items-center justify-content-between",children:[Object(i.jsx)(a.c,{disabled:t.is_read_only,onClick:d,className:"btn-danger",children:"Confirmer"}),Object(i.jsx)(a.c,{onClick:function(){return c(!1)},children:"Annuler"})]})},render:function(){return Object(i.jsxs)("div",{className:"p-4",children:[Object(i.jsx)("p",{children:"Are you sure you want to delete \u201c2. Parties in Payment Gateway business\u201d?"}),Object(i.jsx)("p",{children:"This item will be deleted immediately. You can\u2019t undo this action."})]})},disabled:t.is_read_only})},j=function(e){var t=e.document,c=void 0===t?{}:t;Object(n.a)(e,o);return c&&c.users&&c.users.length?Object(i.jsxs)("span",{className:"me-1 d-flex align-items-center",children:[Object(i.jsx)("span",{className:"count",children:c.users.length}),Object(i.jsx)(a.i.PersonCircle,{})]}):null},b=function(e){var t=e.document,c=void 0===t?{}:t;Object(n.a)(e,l);return c&&c.files&&c.files.length?Object(i.jsxs)("span",{className:"me-1 d-flex align-items-center",children:[Object(i.jsx)("span",{className:"count",children:c.files.length}),Object(i.jsx)(a.i.FileEarmarkText,{})]}):null}},350:function(e,t,c){},354:function(e,t,c){"use strict";c.r(t),c.d(t,"default",(function(){return k}));var n=c(1),s=c(24),a=c(16),r=c(4),i=c(2),u=c(8),o=c(11),l=c(5),d=c(9),j=c(95),b=c(20),m=c(0);function h(e){var t=Object(b.c)({title:""});return Object(m.jsxs)(b.b,{context:t,onSubmit:function(c){c.preventDefault();var n=t.values.title;n?j.a.post({title:n}).then((function(t){return e.onSuccess(t)})).catch((function(e){return t.handleErr(e,!0)})):t.setError("title","Entrez le titre du nouveau document")},className:"document-add-form mb-3",children:[Object(m.jsx)("div",{className:"mb-1",children:Object(m.jsx)(b.b.TextInput,{required:!0,autoComplete:"off",name:"title",placeholder:"Entrez le titre du nouveau document",error:t.errors.title,maxLength:99})}),Object(m.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(m.jsx)("div",{className:"",children:Object(m.jsx)(d.c,{onClick:e.onCancel,children:"Annuler"})}),Object(m.jsx)("div",{className:"",children:Object(m.jsx)(b.b.Submit,{value:"Ajouter",className:"btn btn-primary"})})]})]})}var f=c(17),O=c(3),p=c(125),x=["document"],v=function(e){var t=e.document,c=void 0===t?{}:t,s=Object(r.a)(e,x);c.status;return Object(m.jsxs)(d.p.Tr,{className:Object(O.f)(["ARCHIVED"===c.status&&"archived","border-bottom"]),children:[Object(m.jsx)(d.p.Td,{className:"w-100",children:Object(m.jsxs)(f.b,{to:Object(j.c)(c,s.match.path),children:[Object(m.jsx)("div",{className:"",children:c.title_truncated}),Object(m.jsxs)("div",{className:" d-flex document-meta text-muted ps-1",children:[Object(m.jsx)(p.c,{document:c}),Object(m.jsx)(p.b,{document:c})]})]})}),Object(m.jsx)(d.p.Td,{className:"d-none d-md-table-cell",children:Object(m.jsx)("div",{className:"text-sm",children:c.status})}),Object(m.jsx)(d.p.Td,{className:"d-none d-md-table-cell text-sm",children:Object(j.b)(c.created)}),Object(m.jsx)(d.p.Td,{className:"",children:Object(m.jsx)("div",{className:"actions d-flex",children:Object(m.jsx)(p.a,Object(n.a)(Object(n.a)({},s),{},{docSlug:c.slug,doc:c,className:"border-0",onSuccess:function(e){s.setData(Object(n.a)(Object(n.a)({},s.data),{},{count:s.data.count-1,results:s.data.results.filter((function(t){return t.slug!==e}))}))}}))})})]})};function g(e){var t=e.data,c=void 0===t?{}:t,s=e.setData;return Object(m.jsx)("div",{className:"document-table mb-3",children:Object(m.jsx)(d.m,{className:"w-100",items:c.results,renderItem:function(t){return Object(i.createElement)(v,Object(n.a)(Object(n.a)({},e),{},{document:t,key:t.slug}))},pagination:{count:c.count,next:c.next,previous:c.previous,onPreviousClick:function(){return j.a.listPage(c.previous).then((function(e){s(e)}))},onNextClick:function(){return j.a.listPage(c.next).then((function(e){s(e)}))}}})})}c(350);var N=["search","push"],y=function(e){var t=e.search,c=e.push,n=(Object(r.a)(e,N),new URLSearchParams(t)),s=Object(i.useState)(n.get("q")||""),u=Object(a.a)(s,2),o=u[0],l=u[1];return Object(m.jsxs)("div",{className:"document-search-form flex-1",children:[Object(m.jsx)("div",{className:"icon-wrapper p-1",children:Object(m.jsx)(d.i.Search,{className:"icon"})}),Object(m.jsx)("input",{required:!0,type:"text",name:"q",value:o,onChange:function(e){var t=e.target.value;if(l(t),!t||t.length<3?n.delete("q"):n.set("q",e.target.value),c.current){var s=new URL(window.location.href);c.current("".concat(s.pathname,"?").concat(n))}},className:"miq-input",placeholder:"Chercher un document par titre, reference ou description"})]})};function k(e){var t=Object(i.useState)("loading"),c=Object(a.a)(t,2),r=c[0],b=c[1],f=Object(i.useState)({results:[]}),O=Object(a.a)(f,2),p=O[0],x=O[1],v=Object(i.useState)(!1),N=Object(a.a)(v,2),k=N[0],w=N[1],S=Object(i.useContext)(o.a).perms,C=e.location.search,q=Object(i.useCallback)((function(){return j.a.list.apply(j.a,arguments)}),[]),P=Object(i.useRef)(Object(u.debounce)((function(t){return e.history.push(t)}),300));Object(i.useEffect)((function(){var e=new URLSearchParams(C);Object(s.a)(e.values()).filter((function(e){return e})).length||(e=null),q(e).then((function(e){b(e?"done":"empty"),x(e)})).catch((function(e){b("error")}))}),[q,C]);var _=Object(l.j)(S.perms,["miq_dms.add_document"]),A=new URLSearchParams(C);return Object(m.jsx)(l.g,{title:"Documents",className:"document-list-view mb-4",actions:Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(d.g,{labelFirst:!0,Icon:d.i.Plus,label:"Ajouter",title:_?"Ajouter un nouveau document":"Vous ne pouvez pas ajouter de nouveau document",onClick:function(){return w(!k)},disabled:!_,className:"btn-primary-2"})}),children:Object(m.jsxs)("div",{className:"miq-container-fluid",children:[k&&Object(m.jsxs)("div",{className:"",children:[Object(m.jsx)("h3",{className:"mb-2",children:"Ajouter un nouveau document"}),Object(m.jsx)(h,{onSuccess:function(t){if(_){var c="".concat(e.match.path).concat(t.slug,"/");return e.history.push(c)}},onCancel:function(){return w(!1)}})]}),Object(m.jsxs)("div",{className:"",children:[!k&&Object(m.jsx)("div",{className:"py-2",style:{position:"sticky",top:0},children:Object(m.jsxs)("div",{className:"miq-container d-flex",children:[Object(m.jsx)(y,Object(n.a)(Object(n.a)({},e),{},{status:r,push:P,search:C})),Object(m.jsxs)("select",{className:"miq-select ms-1",value:A.get("filter")||"all",onChange:function(e){var t=e.target.value;if(t&&"all"!==t?A.set("filter",t):A.delete("filter"),P.current){var c=new URL(window.location.href);P.current("".concat(c.pathname,"?").concat(A))}},children:[Object(m.jsx)("option",{value:"all",children:"Tous les documents"}),Object(m.jsx)("option",{value:"archived",children:"Documents archiv\xe9s"}),Object(m.jsx)("option",{value:"sent",children:"Documents envoy\xe9s"}),Object(m.jsx)("option",{value:"received",children:"Documents recus"})]})]})}),Object(m.jsx)("div",{id:"top"}),Object(m.jsx)(g,Object(n.a)(Object(n.a)({},e),{},{data:p,setData:x,status:r}))]})]})})}},95:function(e,t,c){"use strict";c.d(t,"b",(function(){return a})),c.d(t,"c",(function(){return r})),c.d(t,"a",(function(){return i}));c(1);var n=c(5),s=c(3),a=function(e){return Object(s.e)(e,{month:"numeric",day:"numeric",year:"numeric"})},r=function(e,t){var c="".concat(t).concat(e.slug,"/");return e.is_read_only?"".concat(c,"view/"):c},i={path:"documents/",list:function(e){return Object(s.h)(n.a,this.path,e)},listPage:function(e){return Object(s.h)(n.a,e)},get:function(e,t){return Object(s.h)(n.a,"".concat(this.path).concat(e,"/"),t)},post:function(e){return n.k.post("".concat(this.path),e)},patch:function(e,t,c){return n.k.patch("".concat(this.path).concat(e,"/"),t,c)},archive:function(e){return n.k.get("".concat(this.path).concat(e,"/archive/"))},delete:function(e){return n.k.delete("".concat(this.path).concat(e,"/"))},patchFile:function(e,t){return Object.keys(t).includes("action")?n.k.post("".concat(this.path).concat(e,"/files/"),t):Promise.reject("Action required")},patchUserPermission:function(e,t,c){return n.k.post("".concat(this.path).concat(e,"/permission/"),{user_slug:t,permission:c})},getStaffList:function(e){return n.k.get("search-staff/",{q:e})},patchUser:function(e,t){return Object.keys(t).includes("action")?n.k.post("".concat(this.path).concat(e,"/users/"),t):Promise.reject("Action required")}}}}]);
//# sourceMappingURL=8.fa536942.chunk.js.map