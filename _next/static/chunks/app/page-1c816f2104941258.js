(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9015:function(e,a,t){Promise.resolve().then(t.bind(t,6587))},6587:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return y}});var n=t(7437);t(6648);var s=t(1076),l=t.n(s),i=t(920),r=t(2265),c=t(6920),o=()=>(0,n.jsx)("div",{children:(0,n.jsxs)("nav",{className:l().navbarWrapper,children:[(0,n.jsx)("img",{src:"https://picsum.photos/48",alt:"",className:l().logo}),(0,n.jsxs)("ul",{className:l().navbar,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})})]}),(0,n.jsx)("div",{className:l().space}),(0,n.jsxs)("ul",{className:l().socialLinks,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})})]})]})}),d=t(5079),h=e=>(0,n.jsx)("div",{className:l().addFloatingButton,onClick:e.toggleAddModal,children:(0,n.jsx)(c.G,{icon:d.r8p})}),u=e=>(0,n.jsxs)("div",{className:l().entryList,children:[(0,n.jsx)("div",{className:l().tableHead,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Date"}),(0,n.jsx)("li",{children:"Description"}),(0,n.jsx)("li",{children:"Category"}),(0,n.jsx)("li",{children:"Value"}),(0,n.jsx)("li",{children:"Actions"})]})}),(0,n.jsx)("div",{className:l().entry,children:e.entryList.map(a=>(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:a.date.toLocaleDateString("en-us",{day:"numeric",month:"short",year:"numeric"})}),(0,n.jsx)("li",{children:a.description}),(0,n.jsx)("li",{children:a.category}),(0,n.jsx)("li",{children:a.value}),(0,n.jsxs)("li",{children:[(0,n.jsx)(c.G,{className:l().editButton,icon:d.Yai}),(0,n.jsx)(c.G,{className:l().deleteButton,icon:d.Vui,onClick:()=>e.handleDelete(a.id)})]})]},a.id))})]}),x=e=>(0,n.jsxs)("div",{className:l().summary,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Income"}),(0,n.jsx)("p",{children:e.summary.income})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Expenses"}),(0,n.jsx)("p",{children:e.summary.expense})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Total"}),(0,n.jsx)("p",{children:e.summary.total})]})]});let p=e=>new Date(e+"T00:00"),j=e=>!isNaN(new Date(e)),m=new Date,_=()=>{let e=m.getMonth()+1,a="",t="";return m.getDate<10?console.log(t="".concat(m.getDate())):t="".concat(m.getDate()),a=e<10?"0".concat(e):"".concat(e),"".concat(m.getFullYear(),"-").concat(a,"-").concat(t)},g=()=>[{id:1,date:new Date("2024-05-20 GMT-7"),description:"Item 1",category:"Groceries",value:-200},{id:2,date:new Date("2024-05-10 GMT-7"),description:"Item 2",category:"Monthly Basic",value:-300},{id:3,date:new Date("2024-05-05 GMT-7"),description:"Item 3",category:"Monthly Basic",value:-100},{id:4,date:new Date("2024-05-12 GMT-7"),description:"Salary",category:"Salary",value:1e3},{id:5,date:new Date("2024-05-3 GMT-7"),description:"Salary",category:"Salary",value:1e3}];var v=e=>(0,n.jsxs)("div",{className:l().openModal,children:[(0,n.jsx)("div",{className:l().overlay,onClick:e.toggleAddModal}),(0,n.jsxs)("div",{className:l().formWrapper,children:[(0,n.jsxs)("div",{className:l().titleWrapper,children:[(0,n.jsx)("h2",{children:"New Entry"}),(0,n.jsx)("div",{className:l().closeButton,children:(0,n.jsx)(c.G,{icon:d.EOp,onClick:e.toggleAddModal})})]}),(0,n.jsxs)("form",{onSubmit:e.onSubmit,className:l().form,children:[(0,n.jsxs)("label",{children:["Date:",(0,n.jsx)("input",{type:"date",name:"date",onChange:e.handleChange,defaultValue:"".concat(_())})]}),(0,n.jsxs)("label",{children:["Description:",(0,n.jsx)("input",{type:"text",id:"description",name:"description",onChange:e.handleChange})]}),(0,n.jsxs)("label",{children:["Category:",(0,n.jsxs)("select",{onChange:e.handleChange,children:[(0,n.jsx)("option",{value:"Groceries",children:"Groceries"}),(0,n.jsx)("option",{value:"Salary",children:"Salary"}),(0,n.jsx)("option",{value:"Monthly Basic",children:"Monthly Basic"}),(0,n.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,n.jsxs)("label",{children:["Value:",(0,n.jsx)("input",{type:"text",id:"value",name:"value",onChange:e.handleChange})]}),(0,n.jsxs)("div",{className:l().horizontalButtons,children:[(0,n.jsx)("button",{onClick:e.toggleAddModal,children:"Cancel"}),(0,n.jsx)("button",{type:"submit",children:"Save"})]})]})]})]});function y(){let[e,a]=(0,r.useState)(m),[t,s]=(0,r.useState)(),[c,d]=(0,r.useState)(""),[_,y]=(0,r.useState)(""),[f,N]=(0,r.useState)(!1),[b,M]=(0,r.useState)(g),[C,D]=(0,r.useState)({income:0,expense:0,total:0});(0,r.useEffect)(()=>{k()},[b]);let B=()=>{N(!f)};async function S(a){a.preventDefault();let n={id:(0,i.Z)(),date:e,description:c,category:"Monthly Basic",value:parseFloat(t)};j(n.date)&&(M(e=>[...e,n]),B())}let k=()=>{let e=0,a=0;b.forEach(t=>{t.value<0?a+=t.value:e+=t.value}),D({income:e,expense:a,total:e+a})};return(0,n.jsxs)("main",{className:l().main,children:[(0,n.jsx)(o,{}),(0,n.jsxs)("div",{className:l().mainContent,children:[(0,n.jsx)("div",{className:l().selectedMonth,children:(0,n.jsx)("h1",{children:" < Month >"})}),(0,n.jsx)(x,{summary:C,updateSummary:k}),(0,n.jsx)(u,{entryList:b,handleDelete:e=>{M(b.filter(a=>a.id!==e))}})]}),(0,n.jsx)(h,{toggleAddModal:B}),f?(0,n.jsx)(v,{onSubmit:S,handleChange:e=>{switch(e.target.name){case"date":a(p(e.target.value));break;case"category":y(e.target.value);break;case"value":s(e.target.value);break;case"description":d(e.target.value)}},toggleAddModal:B}):(0,n.jsx)(n.Fragment,{})]})}},1076:function(e){e.exports={main:"page_main__akH3E",mainContent:"page_mainContent__NQxPz",selectedMonth:"page_selectedMonth__r1aMN",summary:"page_summary__Q9kDv",openModal:"page_openModal__fpWkc",overlay:"page_overlay__pj6ni",formWrapper:"page_formWrapper__ERMLj",titleWrapper:"page_titleWrapper__O2YQe",closeButton:"page_closeButton__E72Ud",form:"page_form__WYtrD",navbarWrapper:"page_navbarWrapper__bDLLS",logo:"page_logo__1r_52",space:"page_space__mDMJa",navbar:"page_navbar__l_Nh8",socialLinks:"page_socialLinks__NObPl",entryList:"page_entryList__LL15H",tableHead:"page_tableHead__xdX44",entry:"page_entry__e9u8s",editButton:"page_editButton__lCSTn",deleteButton:"page_deleteButton__X8GQB",addFloatingButton:"page_addFloatingButton__fnqwr",horizontalButtons:"page_horizontalButtons__2bEPb"}}},function(e){e.O(0,[263,676,410,971,23,744],function(){return e(e.s=9015)}),_N_E=e.O()}]);