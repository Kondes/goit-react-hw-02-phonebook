(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{15:function(t,e,n){t.exports={main__form:"ContactForm_main__form__34Dsg",btn:"ContactForm_btn__2Bpnz"}},16:function(t,e,n){t.exports={search__form:"Filter_search__form__3_ypX",inpt:"Filter_inpt__1K4Ba"}},17:function(t,e,n){t.exports={list:"ContactItem_list__2KPKR",btn:"ContactItem_btn__1XxAq"}},21:function(t,e,n){t.exports={list:"Contact_list__1E-O2",btn:"Contact_btn__ZzRmL"}},36:function(t,e,n){"use strict";n.r(e);var a,c=n(0),r=n.n(c),i=n(7),o=n.n(i),s=n(18),l=n(5),u=n(10),b=n(3),d=n(4),j=n(20),m=n.n(j),h=n(6),f=n(2),O=n(38),p={addContact:Object(b.b)("contact/add",(function(t){var e=t.name,n=t.number;return{payload:{id:Object(O.a)(),name:e,number:n}}})),deleteContact:Object(b.b)("contact/delete"),changeFilter:Object(b.b)("filter/change")},_=Object(b.c)([],(a={},Object(h.a)(a,p.addContact,(function(t,e){var n=e.payload;return[].concat(Object(u.a)(t),[n])})),Object(h.a)(a,p.deleteContact,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),a)),x=Object(b.c)("",Object(h.a)({},p.changeFilter,(function(t,e){return e.payload}))),C=Object(f.b)({items:_,filter:x}),v=Object(u.a)(Object(b.d)({serializableCheck:{ignoredActions:[d.a,d.f,d.b,d.c,d.d,d.e]}})),g={key:"contacts",storage:m.a,blacklist:["filter"]},y=Object(b.a)({reducer:{contacts:Object(d.g)(g,C)},middleware:v,devTools:!1}),k={store:y,persistor:Object(d.h)(y)},N=(n(34),n(8)),A=n(9),w=n(12),F=n(11),S=n(1),z=function(t){var e=t.children;return Object(S.jsx)("div",{children:e})},B=function(t){var e=t.title,n=t.children;return Object(S.jsxs)("section",{children:[Object(S.jsx)("h2",{children:e}),n]})},Z=n(15),q=n.n(Z),D=function(t){Object(w.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(N.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(h.a)({},a,c))},t.handleSubmit=function(e){if(e.preventDefault(),t.props.contacts.find((function(e){return e.name===t.state.name})))return alert("already add"),void t.reset();t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(A.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("form",{className:q.a.main__form,onSubmit:this.handleSubmit,children:[Object(S.jsxs)("label",{children:["Name",Object(S.jsx)("input",{value:this.state.name,onChange:this.handleChange,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(S.jsxs)("label",{children:["Number",Object(S.jsx)("input",{value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(S.jsx)("button",{className:q.a.btn,type:"submit",children:"Add contact"})]})}}]),n}(c.Component),I=Object(l.b)((function(t){return{contacts:t.contacts.items}}),(function(t){return{onSubmit:function(e,n){return t(p.addContact(e,n))}}}))(D),J=n(16),K=n.n(J),L=Object(l.b)((function(t){return{value:t.contacts.filter}}),(function(t){return{onChange:function(e){return t(p.changeFilter(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(S.jsxs)("label",{className:K.a.search__form,children:["Find contacts by name",Object(S.jsx)("input",{className:K.a.inpt,type:"text",value:e,onChange:n})]})})),E=n(17),M=n.n(E),P=function(t){var e=t.id,n=t.name,a=t.number,c=t.onClick;return Object(S.jsxs)("li",{className:M.a.list,children:[n,": ",a,Object(S.jsx)("button",{className:M.a.btn,type:"button",onClick:function(){c(e)},children:"Delete"})]})},R=n(21),T=n.n(R),X=function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))},$=Object(l.b)((function(t){return{list:X(t.contacts.items,t.contacts.filter)}}),(function(t){return{onClick:function(e){return t(p.deleteContact(e))}}}))((function(t){var e=t.list,n=t.onClick;return e.length?Object(S.jsx)("ul",{className:T.a.list,children:e.map((function(t){return Object(S.jsx)(P,{id:t.id,onClick:n,name:t.name,number:t.number},t.id)}))}):Object(S.jsx)("p",{children:"No matches found"})})),G=function(t){Object(w.a)(n,t);var e=Object(F.a)(n);function n(){return Object(N.a)(this,n),e.apply(this,arguments)}return Object(A.a)(n,[{key:"render",value:function(){return Object(S.jsxs)(z,{children:[Object(S.jsx)(B,{title:"Phonebook",children:Object(S.jsx)(I,{})}),Object(S.jsxs)(B,{title:"Contacts",children:[Object(S.jsx)(L,{}),Object(S.jsx)($,{})]})]})}}]),n}(c.Component);o.a.render(Object(S.jsx)(r.a.StrictMode,{children:Object(S.jsx)(l.a,{store:k.store,children:Object(S.jsx)(s.a,{loading:null,persistor:k.persistor,children:Object(S.jsx)(G,{})})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.b720a9e5.chunk.js.map