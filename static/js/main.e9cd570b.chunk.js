(this.webpackJsonpcontactmanager=this.webpackJsonpcontactmanager||[]).push([[0],{39:function(e,t,a){e.exports=a(72)},44:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),o=a.n(c),l=(a(44),a(2)),i=a(3),s=a(5),m=a(4),u=a(6),p=a(11),h=a(12),d=a(38),b=a(15),f=a(13),v=a.n(f);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach((function(t){Object(b.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=r.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return y({},e,{contacts:e.contacts.filter((function(e){return e.id!==t.payload}))});case"ADD_CONTACT":return y({},e,{contacts:[t.payload].concat(Object(d.a)(e.contacts))});case"UPDATE_CONTACT":return y({},e,{contacts:e.contacts.map((function(e){return e.id===t.payload.id?e=t.payload:e}))});default:return e}},j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){return a.setState((function(t){return g(t,e)}))}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;v.a.get("https://jsonplaceholder.typicode.com/users").then((function(t){return e.setState({contacts:t.data})}))}},{key:"render",value:function(){return r.a.createElement(O.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),C=O.Consumer,N=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!0},a.onDeleteClick=function(e,t){v.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)).then((function(a){return t({type:"DELETE_CONTACT",payload:e})}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.contact,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(C,null,(function(t){var i=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",""," ",r.a.createElement("i",{onClick:function(){return e.setState({showContactInfo:!e.state.showContactInfo})},className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"},onClick:e.onDeleteClick.bind(e,a,i)}),r.a.createElement(p.b,{to:"contact/edit/".concat(a)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)}))}}]),t}(n.Component),k=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(C,null,(function(e){var t=e.contacts;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-danger"},"Contact"),"List"),t.map((function(e){return r.a.createElement(N,{key:e.id,contact:e})})))}))}}]),t}(n.Component),w=a(17),A=a.n(w),D=a(21),S=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{type:o,name:a,className:"form-control form-control-lg",placeholder:c,value:n,onChange:l}))};S.defaultProps={type:"text"};var P=S,T=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:""},a.onSubmit=function(){var e=Object(D.a)(A.a.mark((function e(t,n){var r,c,o,l,i,s,m;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,i={name:c,email:o,phone:l},s=a.props.match.params.id,e.next=6,v.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),i);case 6:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:""}),a.props.history.push("/");case 10:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(b.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(D.a)(A.a.mark((function e(){var t,a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,v.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone;return r.a.createElement(C,null,(function(t){var o=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter name",value:a,onChange:e.onChange}),r.a.createElement(P,{label:"Email",name:"email",placeholder:"Enter email",value:n,onChange:e.onChange}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter phone",value:c,onChange:e.onChange}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-block"}))))}))}}]),t}(n.Component),x=function(e){var t=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm\r navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contact/AddContact",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"}),"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"About"))))))};x.defaultProps={branding:"My App"};var _=x,I=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"About Contact Manager"),r.a.createElement("p",null,"Simple app for manage contact"),r.a.createElement("p",null,"App version: 1.0.0"))},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",body:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then((function(e){return e.json()})).then((function(t){return e.setState({title:t.title,body:t.body})}))}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.body;return r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("p",null,a))}}]),t}(n.Component);function L(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page not found"))}var U=a(37),B=a.n(U),F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:""},a.onSubmit=function(e,t){t.preventDefault();var n=a.state,r=n.name,c=n.email,o=n.phone;e({type:"ADD_CONTACT",payload:{id:B()(),name:r,email:c,phone:o}}),a.setState({name:"",email:"",phone:""}),a.props.history.push("/")},a.onChange=function(e){return a.setState(Object(b.a)({},e.target.name,e.target.value))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone;return r.a.createElement(C,null,(function(t){var o=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onSubmit.bind(e,o)},r.a.createElement(P,{label:"Name",name:"name",placeholder:"Enter name",value:a,onChange:e.onChange}),r.a.createElement(P,{label:"Email",name:"email",placeholder:"Enter email",value:n,onChange:e.onChange}),r.a.createElement(P,{label:"Phone",name:"phone",placeholder:"Enter phone",value:c,onChange:e.onChange}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-block"}))))}))}}]),t}(n.Component),J=(a(70),a(71),function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(_,{branding:"Contact manager"}),r.a.createElement("div",{className:"Container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:k}),r.a.createElement(h.a,{exact:!0,path:"/about",component:I}),r.a.createElement(h.a,{exact:!0,path:"/contact/AddContact",component:F}),r.a.createElement(h.a,{exact:!0,path:"/contact/edit/:id",component:T}),r.a.createElement(h.a,{exact:!0,path:"/test",component:M}),r.a.createElement(h.a,{component:L}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[39,1,2]]]);
//# sourceMappingURL=main.e9cd570b.chunk.js.map