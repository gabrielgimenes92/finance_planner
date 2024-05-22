(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9015:function(e,a,s){Promise.resolve().then(s.bind(s,6587))},6587:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return g}});var l=s(7437);s(6648);var n=s(1076),t=s.n(n),i=s(920),r=s(2265),d=s(6920),c=()=>(0,l.jsx)("div",{children:(0,l.jsxs)("nav",{className:t().navbarWrapper,children:[(0,l.jsx)("img",{src:"https://picsum.photos/48",alt:"",className:t().logo}),(0,l.jsxs)("ul",{className:t().navbar,children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#"})})]}),(0,l.jsx)("div",{className:t().space}),(0,l.jsxs)("ul",{className:t().socialLinks,children:[(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"#"})})]})]})}),o=s(5079),h=e=>(0,l.jsx)("div",{className:t().addFloatingButton,onClick:e.toggleAddModal,children:(0,l.jsx)(d.G,{icon:o.r8p})}),x=e=>(0,l.jsxs)("div",{className:t().entryList,children:[(0,l.jsx)("div",{className:t().tableHead,children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Date"}),(0,l.jsx)("li",{children:"Description"}),(0,l.jsx)("li",{children:"Category"}),(0,l.jsx)("li",{children:"Value"})]})}),(0,l.jsx)("div",{className:t().entry,children:e.entryList.map(a=>(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:a.date.getDate()}),(0,l.jsx)("li",{children:a.description}),(0,l.jsx)("li",{children:a.category}),(0,l.jsx)("li",{children:a.value}),(0,l.jsx)("li",{children:(0,l.jsx)("button",{onClick:()=>e.handleDelete(a.id),children:"delete"})})]},a.id))})]}),p=e=>(0,l.jsxs)("div",{className:t().summary,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Income"}),(0,l.jsx)("p",{children:e.summary.income})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Expenses"}),(0,l.jsx)("p",{children:e.summary.expense})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{children:"Total"}),(0,l.jsx)("p",{children:e.summary.total})]})]});let j=e=>new Date(e+"T00:00"),u=e=>!isNaN(new Date(e)),m=()=>[{id:1,date:new Date("2024-05-20 GMT-7"),description:"Item 1",category:"Groceries",value:-200},{id:2,date:new Date("2024-05-10 GMT-7"),description:"Item 2",category:"Monthly Basic",value:-300},{id:3,date:new Date("2024-05-05 GMT-7"),description:"Item 3",category:"Monthly Basic",value:-100},{id:4,date:new Date("2024-05-12 GMT-7"),description:"Salary",category:"Salary",value:1e3},{id:5,date:new Date("2024-05-3 GMT-7"),description:"Salary",category:"Salary",value:1e3}];var _=e=>(0,l.jsxs)("div",{className:t().openModal,children:[(0,l.jsx)("div",{className:t().overlay,onClick:e.toggleAddModal}),(0,l.jsxs)("div",{className:t().formWrapper,children:[(0,l.jsxs)("div",{className:t().titleWrapper,children:[(0,l.jsx)("h2",{children:"New Entry"}),(0,l.jsx)("div",{className:t().closeButton,children:(0,l.jsx)(d.G,{icon:o.EOp,onClick:e.toggleAddModal})})]}),(0,l.jsxs)("form",{onSubmit:e.onSubmit,className:t().form,children:[(0,l.jsxs)("label",{children:["Date:",(0,l.jsx)("input",{type:"date",name:"date",onChange:e.handleChange})]}),(0,l.jsxs)("label",{children:["Description:",(0,l.jsx)("input",{type:"text",id:"description",name:"description",onChange:e.handleChange})]}),(0,l.jsxs)("label",{children:["Category:",(0,l.jsxs)("select",{onChange:e.handleChange,children:[(0,l.jsx)("option",{value:"Groceries",children:"Groceries"}),(0,l.jsx)("option",{value:"Salary",children:"Salary"}),(0,l.jsx)("option",{value:"Monthly Basic",children:"Monthly Basic"}),(0,l.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,l.jsxs)("label",{children:["Value:",(0,l.jsx)("input",{type:"text",id:"value",name:"value",onChange:e.handleChange})]}),(0,l.jsxs)("div",{className:t().horizontalButtons,children:[(0,l.jsx)("button",{onClick:e.toggleAddModal,children:"Cancel"}),(0,l.jsx)("button",{type:"submit",children:"Save"})]})]})]})]});function g(){let[e,a]=(0,r.useState)(),[s,n]=(0,r.useState)(),[d,o]=(0,r.useState)(""),[g,v]=(0,r.useState)(""),[y,f]=(0,r.useState)(!1),[b,N]=(0,r.useState)(m),[M,C]=(0,r.useState)({income:0,expense:0,total:0});(0,r.useEffect)(()=>{k()},[b]);let D=()=>{f(!y)};async function S(a){a.preventDefault();let l={id:(0,i.Z)(),date:e,description:d,category:"Monthly Basic",value:parseFloat(s)};u(l.date)&&N(e=>[...e,l])}let k=()=>{let e=0,a=0;b.forEach(s=>{s.value<0?a+=s.value:e+=s.value}),C({income:e,expense:a,total:e+a})};return(0,l.jsxs)("main",{className:t().main,children:[(0,l.jsx)(c,{}),(0,l.jsxs)("div",{className:t().mainContent,children:[(0,l.jsx)("div",{className:t().selectedMonth,children:(0,l.jsx)("h1",{children:" < Month >"})}),(0,l.jsx)(p,{summary:M,updateSummary:k}),(0,l.jsx)(x,{entryList:b,handleDelete:e=>{N(b.filter(a=>a.id!==e))}})]}),(0,l.jsx)(h,{toggleAddModal:D}),y?(0,l.jsx)(_,{onSubmit:S,handleChange:e=>{switch(e.target.name){case"date":a(j(e.target.value));break;case"category":v(e.target.value);break;case"value":n(e.target.value);break;case"description":o(e.target.value)}},toggleAddModal:D}):(0,l.jsx)(l.Fragment,{})]})}},1076:function(e){e.exports={main:"page_main__akH3E",mainContent:"page_mainContent__NQxPz",selectedMonth:"page_selectedMonth__r1aMN",summary:"page_summary__Q9kDv",openModal:"page_openModal__fpWkc",overlay:"page_overlay__pj6ni",formWrapper:"page_formWrapper__ERMLj",titleWrapper:"page_titleWrapper__O2YQe",closeButton:"page_closeButton__E72Ud",form:"page_form__WYtrD",navbarWrapper:"page_navbarWrapper__bDLLS",logo:"page_logo__1r_52",space:"page_space__mDMJa",navbar:"page_navbar__l_Nh8",socialLinks:"page_socialLinks__NObPl",entryList:"page_entryList__LL15H",tableHead:"page_tableHead__xdX44",entry:"page_entry__e9u8s",addFloatingButton:"page_addFloatingButton__fnqwr",horizontalButtons:"page_horizontalButtons__2bEPb"}}},function(e){e.O(0,[263,676,410,971,23,744],function(){return e(e.s=9015)}),_N_E=e.O()}]);