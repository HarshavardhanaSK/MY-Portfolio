(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),m=a(3),c=a.n(m),r=(a(13),a(14),a(4)),u=a.n(r);var o=Object(l.forwardRef)((e,t)=>n.a.createElement("div",{ref:t,className:"A4-size"},n.a.createElement("div",{className:"HEad"},n.a.createElement("p",null,"INVOICE"),n.a.createElement("ul",null,n.a.createElement("li",null,"PHno. 9591 3036"),n.a.createElement("li",null,"Email: COMPAny@gmail.com")),n.a.createElement("ul",null,n.a.createElement("li",null,"#321 521 Bangalore 560047"))),n.a.createElement("div",{className:"SUb-head"},n.a.createElement("div",{className:"BOx1"},n.a.createElement("p",null,"Billed To"),n.a.createElement("p",null,e.billedTo)),n.a.createElement("div",{className:"BOx2"},n.a.createElement("p",null,"Invoice Number"),n.a.createElement("p",null,e.InvNo),n.a.createElement("br",null),n.a.createElement("p",null,"Date Of Issue"),n.a.createElement("p",null,e.dateOfIssue))),n.a.createElement("div",{className:"BOdy"},n.a.createElement("table",{className:"invoice-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Amount"),n.a.createElement("th",null,"SGST (%)"),n.a.createElement("th",null,"SGST Amount"),n.a.createElement("th",null,"GST (%)"),n.a.createElement("th",null,"GST Amount"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Total"))),n.a.createElement("tbody",null,e.invoiceItems.map((e,t)=>n.a.createElement("tr",{key:t},n.a.createElement("td",null,e.description),n.a.createElement("td",null,e.amount),n.a.createElement("td",null,e.sgst),n.a.createElement("td",null,e.sgstAmount.toFixed(2)),n.a.createElement("td",null,e.gst),n.a.createElement("td",null,e.gstAmount.toFixed(2)),n.a.createElement("td",null,e.quantity),n.a.createElement("td",null,e.total.toFixed(2))))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"6"},"Total"),n.a.createElement("td",null,e.totalQuantity),n.a.createElement("td",null,e.totalAmount))))),n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"left-footer"},n.a.createElement("p",null,"Name:"),n.a.createElement("p",null,"Signature:")),n.a.createElement("div",{className:"right-footer"},n.a.createElement("p",null,"Total: ",n.a.createElement("span",{className:"total-amount"},e.totalAmount))))));var E=function(){const[e,t]=Object(l.useState)([]),[a,m]=Object(l.useState)(!1),[c,r]=Object(l.useState)({description:"",amount:0,quantity:1,sgst:2,gst:2}),[E,s]=Object(l.useState)(""),[i,d]=Object(l.useState)(""),[p,g]=Object(l.useState)(""),v=Object(l.useRef)(),N=e=>{r({...c,[e.target.name]:e.target.value})},b=()=>e.reduce((e,t)=>e+Number(t.quantity),0),h=()=>e.reduce((e,t)=>e+Number(t.total),0);return n.a.createElement("div",null,n.a.createElement("div",{className:"HEad"},n.a.createElement("p",null,"INVOICE"),n.a.createElement("ul",null,n.a.createElement("li",null,"PHno. 9591 3036"),n.a.createElement("li",null,"Email: Integral@gmail.com")),n.a.createElement("ul",null,n.a.createElement("li",null,"#321 521 Bangalore 560047"))),n.a.createElement("div",{className:"SUb-head"},n.a.createElement("div",{className:"BOx1"},n.a.createElement("p",null,"Billed To"),n.a.createElement("input",{type:"text",value:E,onChange:e=>{s(e.target.value)}})),n.a.createElement("div",{className:"BOx2"},n.a.createElement("p",null,"Invoice Number"),n.a.createElement("input",{type:"text",value:i,onChange:e=>{d(e.target.value)}}),n.a.createElement("br",null),n.a.createElement("p",null,"Date Of Issue"),n.a.createElement("input",{type:"date",value:p,onChange:e=>{g(e.target.value)}}))),n.a.createElement("div",{className:"BOdy"},n.a.createElement("table",{className:"invoice-table"},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"Description"),n.a.createElement("th",null,"Amount"),n.a.createElement("th",null,"SGST (%)"),n.a.createElement("th",null,"SGST Amount"),n.a.createElement("th",null,"GST (%)"),n.a.createElement("th",null,"GST Amount"),n.a.createElement("th",null,"Quantity"),n.a.createElement("th",null,"Total"),n.a.createElement("th",null,"Action"))),n.a.createElement("tbody",null,e.map((a,l)=>n.a.createElement("tr",{key:l},n.a.createElement("td",null,a.description),n.a.createElement("td",null,a.amount),n.a.createElement("td",null,a.sgst),n.a.createElement("td",null,a.sgstAmount.toFixed(2)),n.a.createElement("td",null,a.gst),n.a.createElement("td",null,a.gstAmount.toFixed(2)),n.a.createElement("td",null,a.quantity),n.a.createElement("td",null,a.total.toFixed(2)),n.a.createElement("td",null,n.a.createElement("button",{onClick:()=>(a=>{const l=e.filter((e,t)=>t!==a);t(l)})(l),className:"REmove-button"},"Remove"))))),n.a.createElement("tfoot",null,n.a.createElement("tr",null,n.a.createElement("td",{colSpan:"6"},"Total"),n.a.createElement("td",null,b()),n.a.createElement("td",null,h().toFixed(2)),n.a.createElement("td",null)))),n.a.createElement("div",{className:"BUttons"},n.a.createElement("button",{className:"ADd-button",onClick:()=>m(!0)},"ADD ITEM"),n.a.createElement(u.a,{trigger:()=>n.a.createElement("button",{className:"PRint-button"},"PRINT INVOICE"),content:()=>v.current})),n.a.createElement("div",{style:{display:"none"}},n.a.createElement(o,{ref:v,invoiceItems:e,billedTo:E,InvNo:i,dateOfIssue:p,totalQuantity:b(),totalAmount:h().toFixed(2)})),a&&n.a.createElement("div",{className:"modal"},n.a.createElement("div",{className:"modal-content"},n.a.createElement("h3",null,"Add New Item"),n.a.createElement("input",{type:"text",name:"description",placeholder:"Description",value:c.description,onChange:N}),n.a.createElement("input",{type:"number",name:"amount",placeholder:"Amount",value:c.amount,onChange:N}),n.a.createElement("input",{type:"number",name:"sgst",placeholder:"SGST (%)",value:c.sgst,onChange:N}),n.a.createElement("input",{type:"number",name:"gst",placeholder:"GST (%)",value:c.gst,onChange:N}),n.a.createElement("input",{type:"number",name:"quantity",placeholder:"Quantity",value:c.quantity,onChange:N}),n.a.createElement("button",{onClick:()=>{const a=c.amount*c.sgst/100,l=c.amount*c.gst/100,n=(Number(c.amount)+a+l)*Number(c.quantity);t([...e,{...c,sgstAmount:a,gstAmount:l,total:n}]),m(!1),r({description:"",amount:0,quantity:1,sgst:0,gst:0})}},"Add"),n.a.createElement("button",{onClick:()=>m(!1)},"Cancel")))),n.a.createElement("div",{className:"footer"},n.a.createElement("div",{className:"left-footer"},n.a.createElement("p",null,"Name:"),n.a.createElement("p",null,"Signature:")),n.a.createElement("div",{className:"right-footer"},n.a.createElement("p",null,"Total: ",n.a.createElement("span",{className:"total-amount"},h().toFixed(2))))))};var s=function(){return n.a.createElement("div",null,n.a.createElement(E,null))};var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(t=>{let{getCLS:a,getFID:l,getFCP:n,getLCP:m,getTTFB:c}=t;a(e),l(e),n(e),m(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s,null))),i()},5:function(e,t,a){e.exports=a(15)}},[[5,1,2]]]);
//# sourceMappingURL=main.76c42288.chunk.js.map