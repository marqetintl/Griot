(this["webpackJsonp@grio/client"]=this["webpackJsonp@grio/client"]||[]).push([[9],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var c=n(1),a=n(23),s=n(11),r=n(2),i=n(6),l=n(12),o=n(7),u=n(5),j=n(21),d=n(17),b=n(0);function m(e){var t=Object(d.c)({title:""});return Object(b.jsxs)(d.b,{context:t,onSubmit:function(n){n.preventDefault();var c=t.values.title;c?j.a.post({title:c}).then((function(t){return e.onSuccess(t)})).catch((function(e){return t.handleErr(e,!0)})):t.setError("title","Entrez le titre du nouveau document")},className:"document-add-form mb-3",children:[Object(b.jsx)("div",{className:"mb-1",children:Object(b.jsx)(d.b.TextInput,{required:!0,autoComplete:"off",name:"title",placeholder:"Entrez le titre du nouveau document",error:t.errors.title,maxLength:99})}),Object(b.jsxs)("div",{className:"d-flex align-items-center justify-content-between",children:[Object(b.jsx)("div",{className:"",children:Object(b.jsx)(u.d,{onClick:e.onCancel,children:"Annuler"})}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)(d.b.Submit,{value:"Ajouter",className:"btn btn-primary"})})]})]})}var h=n(52);n(167);function v(e){var t=Object(r.useState)("loading"),n=Object(s.a)(t,2),d=n[0],v=n[1],O=Object(r.useContext)(u.s),f=Object(r.useState)({results:[]}),x=Object(s.a)(f,2),p=x[0],g=x[1],N=Object(r.useState)(!1),w=Object(s.a)(N,2),y=w[0],C=w[1],S=Object(r.useContext)(l.a).perms,q=e.location.search,k=Object(r.useCallback)((function(){return j.a.list.apply(j.a,arguments)}),[]),D=Object(r.useRef)(Object(i.debounce)((function(t){return e.history.push(t)}),300));Object(r.useEffect)((function(){var e=new URLSearchParams(q);Object(a.a)(e.values()).filter((function(e){return e})).length||(e=null),k(e).then((function(e){v(e?"done":"empty"),g(e)})).catch((function(e){v("error"),O.error({message:"Something went wrong"})}))}),[k,q]);var L=Object(o.k)(S.perms,["miq_dms.add_document"]),A=new URLSearchParams(q);return Object(b.jsx)(o.g,{title:"Documents",className:"document-list-view mb-4",actions:Object(b.jsx)(u.h,{labelFirst:!0,Icon:u.j.Plus,label:"Ajouter",title:L?"Ajouter un nouveau document":"Vous ne pouvez pas ajouter de nouveau document",onClick:function(){return C(!y)},disabled:!L,className:"btn-primary-2"}),children:Object(b.jsxs)("div",{className:"miq-container-fluid",children:[y&&Object(b.jsxs)("div",{className:"",children:[Object(b.jsx)("p",{className:"fw-bold mb-2",children:"Ajouter un nouveau document"}),Object(b.jsx)(m,{onSuccess:function(t){if(L){var n="".concat(e.match.path).concat(t.slug,"/");return e.history.push(n)}},onCancel:function(){return C(!1)}})]}),Object(b.jsxs)("div",{className:"",children:[!y&&Object(b.jsx)("div",{className:"py-2",style:{position:"sticky",top:0},children:Object(b.jsxs)("div",{className:"miq-container d-flex mb-3",children:[Object(b.jsx)("div",{className:"flex-1",children:Object(b.jsx)(u.p,{initialValue:A.get("q"),onChange:function(e){var t=e.e,n=t.target.value;if(!n||n.length<3?A.delete("q"):A.set("q",t.target.value),D.current){var c=new URL(window.location.href);D.current("".concat(c.pathname,"?").concat(A))}},maxLength:99})}),Object(b.jsxs)("select",{className:"miq-select ms-1",value:A.get("filter")||"all",onChange:function(e){var t=e.target.value;if(t&&"all"!==t?A.set("filter",t):A.delete("filter"),D.current){var n=new URL(window.location.href);D.current("".concat(n.pathname,"?").concat(A))}},children:[Object(b.jsx)("option",{value:"all",children:"Tous les documents"}),Object(b.jsx)("option",{value:"archived",children:"Documents archiv\xe9s"}),Object(b.jsx)("option",{value:"sent",children:"Documents envoy\xe9s"}),Object(b.jsx)("option",{value:"received",children:"Documents recus"})]})]})}),Object(b.jsx)("div",{id:"top"}),Object(b.jsx)(h.a,Object(c.a)(Object(c.a)({},e),{},{data:p,setData:g,status:d}))]})]})})}},167:function(e,t,n){}}]);
//# sourceMappingURL=9.faf5be14.chunk.js.map