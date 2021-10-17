(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],{17:function(e,t,n){},2:function(e,t,n){e.exports={form:"Form_form__2TM1N",title:"Form_title__lNS_Y",label:"Form_label__15SAE",input:"Form_input__2ESfd",btn:"Form_btn__aasqa"}},27:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(17),n(12)),s=n(3),l=n(11),u=n.n(l),b=n(5),m=n.n(b),d=n(0);var j=function(e){var t=e.contacts,n=e.onDeleteContact;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:m.a.title,children:"Contacts"}),Object(d.jsx)("ul",{className:m.a.list,children:t.map((function(e){var t=e.name,a=e.number,c=e.id;return Object(d.jsxs)("li",{className:m.a.item,children:["".concat(t,": ").concat(a),Object(d.jsx)("button",{className:m.a.btn,type:"button",onClick:function(){return n(c)},children:"Delete"})]},c)}))})]})},f=n(2),p=n.n(f);var h=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(""),l=Object(s.a)(o,2),u=l[0],b=l[1],m=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":i(a);break;case"number":b(a);break;default:return}},j=function(){i(""),b("")};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:p.a.title,children:"Phonebook"}),Object(d.jsxs)("form",{className:p.a.form,onSubmit:function(e){e.preventDefault(),t(r,u),j()},children:[Object(d.jsxs)("label",{className:p.a.label,children:["Name",Object(d.jsx)("input",{className:p.a.input,type:"text",name:"name",placeholder:"Rosie Simpson",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:r,onChange:m})]}),Object(d.jsxs)("label",{className:p.a.label,children:["Number",Object(d.jsx)("input",{className:p.a.input,type:"tel",name:"number",placeholder:"+38(0XX)-XXX-XX-XX",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:u,onChange:m})]}),Object(d.jsx)("button",{className:p.a.btn,type:"submit",children:"Add contact"})]})]})},_=n(9),O=n.n(_);var x=function(e){var t=e.value,n=e.onChange;return Object(d.jsxs)("label",{className:O.a.label,children:["Find contacts by name",Object(d.jsx)("input",{className:O.a.input,type:"text",name:"name",placeholder:"Type name for search",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",value:t,onChange:n})]})};var v=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1],r=function(e,t){var n=Object(a.useState)((function(){var n;return null!==(n=JSON.parse(window.localStorage.getItem(e)))&&void 0!==n?n:t})),c=Object(s.a)(n,2),r=c[0],i=c[1];return Object(a.useEffect)((function(){localStorage.setItem(e,JSON.stringify(r))}),[e,r]),[r,i]}("contacts",[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),i=Object(s.a)(r,2),l=i[0],b=i[1],m=function(){c("")},f=function(){var e=n.toLowerCase();return l.filter((function(t){return t.name.toLowerCase().includes(e)}))}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{onSubmit:function(e,t){var n={name:e,number:t,id:u.a.generate()};b((function(e){return[n].concat(Object(o.a)(e))})),l.find((function(t){return t.name===e}))&&alert("".concat(e," is already in contacts"))}}),Object(d.jsx)(x,{onChange:function(e){c(e.currentTarget.value)},value:n}),Object(d.jsx)(j,{contacts:f,onDeleteContact:function(e){b((function(t){return t.filter((function(t){return t.id!==e}))})),m()}})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={title:"ContactList_title__ATLM_",list:"ContactList_list__2T7aG",item:"ContactList_item__3YsZK",btn:"ContactList_btn__1Xk4q"}},9:function(e,t,n){e.exports={label:"Filter_label__3DcZT",input:"Filter_input__2DoVp"}}},[[27,1,2]]]);
//# sourceMappingURL=main.435947bf.chunk.js.map