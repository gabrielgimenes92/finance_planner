(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4538:function(e,t,a){Promise.resolve().then(a.bind(a,8884))},8884:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return y}});var n=a(7437),s=a(1076),i=a.n(s),l=a(920),r=a(2265),c=a(6920),o={src:"/_next/static/media/profilePicture.5c43e62a.jpg",height:400,width:400,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAAP/2gAMAwEAAhADEAAAAJUSf//EABwQAAICAgMAAAAAAAAAAAAAAAMEAQUAEgYTMv/aAAgBAQABPwBXjR2qiWB1jUn7ZJtr6Hn/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIRQf/aAAgBAgEBPwBRvWf/xAAYEQACAwAAAAAAAAAAAAAAAAAAARIhcf/aAAgBAwEBPwB3HD//2Q==",blurWidth:8,blurHeight:8},d=a(6648),h=()=>(0,n.jsx)("div",{children:(0,n.jsxs)("nav",{className:i().navbarWrapper,children:[(0,n.jsx)(d.default,{src:o,className:i().logo,height:48,width:48}),(0,n.jsxs)("ul",{className:i().navbar,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})})]}),(0,n.jsx)("div",{className:i().space}),(0,n.jsxs)("ul",{className:i().socialLinks,children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"#"})})]})]})}),A=a(5079),u=e=>(0,n.jsx)("div",{className:i().addFloatingButton,onClick:e.toggleAddModal,children:(0,n.jsx)(c.G,{icon:A.r8p})}),g=e=>(0,n.jsxs)("div",{className:i().entryList,children:[(0,n.jsx)("div",{className:i().tableHead,children:(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Date"}),(0,n.jsx)("li",{children:"Description"}),(0,n.jsx)("li",{children:"Category"}),(0,n.jsx)("li",{className:i().value,children:"Value"}),(0,n.jsx)("li",{children:"Actions"})]})}),(0,n.jsx)("div",{className:i().entry,children:e.filteredEntryList.map(t=>(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:t.date.toLocaleDateString("en-us",{day:"numeric",month:"short",year:"numeric"})}),(0,n.jsx)("li",{children:t.description}),(0,n.jsx)("li",{children:t.category}),(0,n.jsx)("li",{className:i().value,children:t.value.toFixed(2)}),(0,n.jsxs)("li",{children:[(0,n.jsx)(c.G,{className:i().editButton,icon:A.Yai}),(0,n.jsx)(c.G,{className:i().deleteButton,icon:A.Vui,onClick:()=>e.handleDelete(t.id)})]})]},t.id))})]}),p=e=>(0,n.jsxs)("div",{className:i().summary,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Income"}),(0,n.jsx)("p",{children:e.summary.income.toFixed(2)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Expenses"}),(0,n.jsx)("p",{children:e.summary.expense.toFixed(2)})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Total"}),(0,n.jsx)("p",{children:e.summary.total.toFixed(2)})]})]});let x=e=>new Date(e+"T00:00"),j=e=>!isNaN(new Date(e)),m=e=>{let t=e.getMonth()+1,a="",n="";return e.getDate<10?console.log(n="".concat(e.getDate())):n="".concat(e.getDate()),a=t<10?"0".concat(t):"".concat(t),"".concat(e.getFullYear(),"-").concat(a,"-").concat(n)},_=()=>[{id:0,date:new Date("2024-04-01 GMT-7"),description:"Rent",category:"Monthly",value:-2e3},{id:1,date:new Date("2024-04-04 GMT-7"),description:"Paycheck",category:"Paycheck",value:4e3},{id:2,date:new Date("2024-04-06 GMT-7"),description:"Walmart",category:"Groceries",value:-800},{id:3,date:new Date("2024-04-10 GMT-7"),description:"Docks Fish and Chips",category:"Other",value:-36.2},{id:4,date:new Date("2024-04-17 GMT-7"),description:"Compass",category:"Monthly",value:-180},{id:5,date:new Date("2024-04-29 GMT-7"),description:"Superstore",category:"Groceries",value:-60.92},{id:6,date:new Date("2024-05-01 GMT-7"),description:"Rent",category:"Monthly",value:-2e3},{id:7,date:new Date("2024-05-06 GMT-7"),description:"Paycheck",category:"Paycheck",value:4e3},{id:8,date:new Date("2024-05-10 GMT-7"),description:"Compass",category:"Monthly",value:-180},{id:9,date:new Date("2024-05-12 GMT-7"),description:"Walmart",category:"Groceries",value:-890.47},{id:10,date:new Date("2024-05-16 GMT-7"),description:"Netflix",category:"Monthly",value:-6.99},{id:11,date:new Date("2024-05-17 GMT-7"),description:"Amazon",category:"Other",value:-210},{id:12,date:new Date("2024-06-01 GMT-7"),description:"Rent",category:"Monthly",value:-2e3},{id:13,date:new Date("2024-06-05 GMT-7"),description:"Paycheck",category:"Paycheck",value:4e3},{id:14,date:new Date("2024-06-14 GMT-7"),description:"PS5 game",category:"Other",value:-69.9},{id:15,date:new Date("2024-06-16 GMT-7"),description:"Netflix",category:"Monthly",value:-6.99},{id:16,date:new Date("2024-06-20 GMT-7"),description:"Compass",category:"Monthly",value:-180},{id:17,date:new Date("2024-06-22 GMT-7"),description:"Save On",category:"Groceries",value:-250}];var v=e=>(0,n.jsxs)("div",{className:i().openModal,children:[(0,n.jsx)("div",{className:i().overlay,onClick:e.toggleAddModal}),(0,n.jsxs)("div",{className:i().formWrapper,children:[(0,n.jsxs)("div",{className:i().titleWrapper,children:[(0,n.jsx)("h2",{children:"New Entry"}),(0,n.jsx)("div",{className:i().closeButton,children:(0,n.jsx)(c.G,{icon:A.EOp,onClick:e.toggleAddModal})})]}),(0,n.jsxs)("form",{onSubmit:e.onSubmit,className:i().form,children:[(0,n.jsxs)("label",{children:["Date:",(0,n.jsx)("input",{type:"date",name:"date",onChange:e.handleChange,defaultValue:"".concat(m(e.currentDate))})]}),(0,n.jsxs)("label",{children:["Description:",(0,n.jsx)("input",{type:"text",id:"description",name:"description",onChange:e.handleChange})]}),(0,n.jsxs)("label",{children:["Category:",(0,n.jsxs)("select",{onChange:e.handleChange,children:[(0,n.jsx)("option",{value:"Groceries",children:"Groceries"}),(0,n.jsx)("option",{value:"Paycheck",children:"Paycheck"}),(0,n.jsx)("option",{value:"Monthly",children:"Monthly"}),(0,n.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,n.jsxs)("label",{children:["Value:",(0,n.jsx)("input",{type:"text",id:"value",name:"value",onChange:e.handleChange})]}),(0,n.jsxs)("div",{className:i().horizontalButtons,children:[(0,n.jsx)("button",{onClick:e.toggleAddModal,children:"Cancel"}),(0,n.jsx)("button",{type:"submit",children:"Save"})]})]})]})]});function y(){let e=new Date,[t,a]=(0,r.useState)(e),[s,c]=(0,r.useState)(e),[o,d]=(0,r.useState)(),[A,m]=(0,r.useState)(""),[y,M]=(0,r.useState)(""),[D,f]=(0,r.useState)(!1),[C,w]=(0,r.useState)(_),[B,N]=(0,r.useState)(_),[b,E]=(0,r.useState)({income:0,expense:0,total:0});(0,r.useEffect)(()=>{P().then(T())},[t,B]);let k=()=>{f(!D)};async function G(e){e.preventDefault();let t={id:(0,l.Z)(),date:s,description:A,category:y,value:parseFloat(o)};j(t.date)&&(w(e=>[...e,t]),k())}let S=async e=>{switch(e.target.getAttribute("name")){case"add":t.setDate(1),a(new Date(t.setMonth(t.getMonth()+1)));break;case"subtract":t.setDate(1),a(new Date(t.setMonth(t.getMonth()-1)))}},T=async()=>{let e=0,t=0;B.forEach(a=>{a.value<0?t+=a.value:e+=a.value}),E({income:e,expense:t,total:e+t})},P=()=>new Promise(()=>{setTimeout(()=>{N(C.filter(function(e){if(e.date.getMonth()==t.getMonth()&&e.date.getFullYear()==t.getFullYear())return e.date.getMonth()==t.getMonth()}))},100)});return(0,n.jsxs)("main",{className:i().main,children:[(0,n.jsx)(h,{}),(0,n.jsxs)("div",{className:i().mainContent,children:[(0,n.jsxs)("div",{className:i().selectedMonth,children:[(0,n.jsx)("h1",{name:"subtract",className:i().selectMonthButton,onClick:S,children:"<"}),(0,n.jsx)("h1",{children:t.toLocaleDateString("en-us",{month:"short",year:"numeric"})}),(0,n.jsx)("h1",{name:"add",className:i().selectMonthButton,onClick:S,children:">"})]}),(0,n.jsx)(p,{summary:b,updateSummary:T,filteredEntryList:B}),(0,n.jsx)(g,{filteredEntryList:B,handleDelete:e=>{w(C.filter(t=>t.id!==e))},selectedMonth:t})]}),(0,n.jsx)(u,{toggleAddModal:k}),D?(0,n.jsx)(v,{onSubmit:G,handleChange:e=>{switch(e.target.name){case"date":c(x(e.target.value));break;case"category":M(e.target.value);break;case"value":d(e.target.value);break;case"description":m(e.target.value)}},toggleAddModal:k,currentDate:e}):(0,n.jsx)(n.Fragment,{})]})}},1076:function(e){e.exports={main:"page_main__akH3E",mainContent:"page_mainContent__NQxPz",selectedMonth:"page_selectedMonth__r1aMN",selectMonthButton:"page_selectMonthButton__IADmc",summary:"page_summary__Q9kDv",openModal:"page_openModal__fpWkc",overlay:"page_overlay__pj6ni",formWrapper:"page_formWrapper__ERMLj",titleWrapper:"page_titleWrapper__O2YQe",closeButton:"page_closeButton__E72Ud",form:"page_form__WYtrD",navbarWrapper:"page_navbarWrapper__bDLLS",logo:"page_logo__1r_52",space:"page_space__mDMJa",navbar:"page_navbar__l_Nh8",socialLinks:"page_socialLinks__NObPl",entryList:"page_entryList__LL15H",tableHead:"page_tableHead__xdX44",value:"page_value__S9tjH",entry:"page_entry__e9u8s",editButton:"page_editButton__lCSTn",deleteButton:"page_deleteButton__X8GQB",addFloatingButton:"page_addFloatingButton__fnqwr",horizontalButtons:"page_horizontalButtons__2bEPb"}}},function(e){e.O(0,[263,676,410,971,23,744],function(){return e(e.s=4538)}),_N_E=e.O()}]);