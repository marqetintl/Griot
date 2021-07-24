(this["webpackJsonp@grio/client"]=this["webpackJsonp@grio/client"]||[]).push([[12],{329:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var c=n(1),s=n(24),a=n(19),r=n(2),i=n(16),u=n(11),o=n(3),l=n(10),j=n(5),h=n(9),m=n(92),d=n(20),b=n(0);function f(e){var t=Object(d.c)({title:""});return Object(b.jsxs)(d.b,{context:t,onSubmit:function(n){n.preventDefault();var c=t.values.title;c?m.a.post({title:c}).then((function(t){return e.onSuccess(t)})).catch((function(e){return t.handleErr(e,!0)})):t.setError("title","Entrez le titre du nouveau document")},className:"document-add-form mb-3",children:[Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsx)(d.b.TextInput,{required:!0,autoComplete:"off",name:"title",placeholder:"Entrez le titre du nouveau document",error:t.errors.title,maxLength:99})}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(b.jsx)("div",{className:"",children:Object(b.jsx)(h.c,{onClick:e.onCancel,children:"Annuler"})}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)(d.b.Submit,{value:"Ajouter",className:"btn"})})]})]})}function p(e){var t=Object(r.useState)("loading"),n=Object(a.a)(t,2),i=(n[0],n[1]),o=Object(r.useState)({results:[]}),d=Object(a.a)(o,2),p=d[0],x=d[1],v=Object(r.useState)(!1),g=Object(a.a)(v,2),N=g[0],k=g[1],y=Object(r.useContext)(l.a).perms,C=e.location.search,S=new URLSearchParams(C),q=Object(r.useState)(S.get("q")||""),w=Object(a.a)(q,2),P=w[0],A=w[1],E=Object(r.useCallback)((function(){return m.a.list.apply(m.a,arguments)}),[]);Object(r.useEffect)((function(){var e=new URLSearchParams(C);Object(s.a)(e.values()).filter((function(e){return e})).length||(e=null),E(e).then((function(e){i(e?"done":"empty"),x(e)})).catch((function(e){i("error")}))}),[E,C]);var _=Object(j.j)(y.perms,["miq_dms.add_document"]),L=Object(r.useRef)(Object(u.debounce)((function(t){return e.history.push(t)}),300));return Object(b.jsxs)(j.g,{title:"Documents",className:"document-list-view mb-4",actions:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(h.f,{labelFirst:!0,Icon:h.h.Plus,label:"Ajouter",title:_?"Ajouter un nouveau document":"Vous ne pouvez pas ajouter de nouveau document",onClick:function(){return k(!N)},disabled:!_})}),children:[Object(b.jsx)("div",{className:"miq-container",children:N?Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("h3",{className:"mb-2",children:"Ajouter un nouveau document"}),Object(b.jsx)(f,{onSuccess:function(t){if(_){var n="".concat(e.match.path).concat(t.slug,"/");return e.history.push(n)}},onCancel:function(){return k(!1)}})]}):Object(b.jsxs)("div",{className:"mb-3",children:[Object(b.jsx)("input",{required:!0,type:"text",name:"q",value:P||"",onChange:function(e){var t=e.target.value;if(A(t),!t||t.length<3?S.delete("q"):S.set("q",e.target.value),L.current){var n=new URL(window.location.href);L.current("".concat(n.pathname,"?").concat(S))}},className:"miq-input",placeholder:"Chercher un document par titre, reference ou description"}),"Search tous-tous les Documents elements envoye elements recus archive"]})}),Object(b.jsx)("div",{className:"document-list mb-3",children:Object(b.jsx)(h.k,{items:p.results,renderItem:function(t){return Object(r.createElement)(O,Object(c.a)(Object(c.a)(Object(c.a)({},e),t),{},{key:t.slug}))},pagination:{count:p.count,next:p.next,previous:p.previous,onPreviousClick:function(){return m.a.listPage(p.previous).then((function(e){x(e)}))},onNextClick:function(){return m.a.listPage(p.next).then((function(e){x(e)}))}}})})]})}var O=function(e){if(!e.slug)return null;var t=e.status,n=e.is_read_only,c="ARCHIVED"===t,s="".concat(e.match.path).concat(e.slug,"/");return n&&(s="".concat(s,"view/")),Object(b.jsx)(i.b,{to:s,className:"document-list-link",children:Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsxs)("div",{className:"document-title flex-1",children:[Object(b.jsx)("div",{className:"",children:e.title_truncated}),Object(b.jsx)("span",{className:"text-sm",children:Object(o.e)(e.created,{month:"numeric",day:"numeric",year:"numeric"})}),c&&Object(b.jsx)("span",{className:"text-sm",children:" - Archiv\xe9"})]}),Object(b.jsxs)("div",{className:"document-meta text-muted ps-1",children:[e.users.length>0&&Object(b.jsxs)("span",{className:"me-1 d-flex align-items-center",children:[Object(b.jsx)("span",{className:"count",children:e.users.length}),Object(b.jsx)(h.h.PersonCircle,{})]}),e.files.length>0&&Object(b.jsxs)("span",{className:"me-1 d-flex align-items-center",children:[Object(b.jsx)("span",{className:"count",children:e.files.length}),Object(b.jsx)(h.h.FileEarmarkText,{})]})]})]})})}},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(1);var c=n(5),s=n(3),a={path:"documents/",list:function(e){return Object(s.h)(c.a,this.path,e)},listPage:function(e){return Object(s.h)(c.a,e)},get:function(e,t){return Object(s.h)(c.a,"".concat(this.path).concat(e,"/"),t)},post:function(e){return c.k.post("".concat(this.path),e)},patch:function(e,t,n){return c.k.patch("".concat(this.path).concat(e,"/"),t,n)},archive:function(e){return c.k.get("".concat(this.path).concat(e,"/archive/"))},delete:function(e){return c.k.delete("".concat(this.path).concat(e,"/"))},patchUserPermission:function(e,t,n){return c.k.post("".concat(this.path).concat(e,"/permission/"),{user_slug:t,permission:n})},getStaffList:function(e){return c.k.get("search-staff/",{q:e})},patchUser:function(e,t){return Object.keys(t).includes("action")?c.k.post("".concat(this.path).concat(e,"/users/"),t):Promise.reject("Action required")}}}}]);
//# sourceMappingURL=12.d7de7615.chunk.js.map