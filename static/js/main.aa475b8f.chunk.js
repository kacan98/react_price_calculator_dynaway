(this.webpackJsonpdynaway_price_calculator_react=this.webpackJsonpdynaway_price_calculator_react||[]).push([[0],[,,,function(e,t,r){},function(e,t,r){},,,,,,function(e,t,r){},function(e,t,r){},,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var i=r(1),a=r.n(i),n=r(5),s=r.n(n),c=(r(10),r(11),r(3),r(0));var o=e=>{const[t,r]=Object(i.useState)(!1),a=()=>{r((e=>!e))},n=Object(c.jsx)("p",{onClick:a,children:e.individualAddonObject.description});return Object(c.jsxs)("div",{className:"OneAddOn",onClick:t=>{e.onTick({...e.individualAddonObject,ticked:!e.individualAddonObject.ticked})},style:{justifyContent:t?"center":"spaceAround",minHeight:t?"430px":"0vh"},children:[Object(c.jsx)("div",{className:"OneAddOn__title",children:e.individualAddonObject.title}),t?n:"",Object(c.jsx)("div",{onClick:a,className:"showMoreOrLess",children:t?"Show less":"Show details"}),Object(c.jsx)("label",{children:Object(c.jsx)("input",{type:"checkbox",className:"OneAddOn__checkbox",readOnly:!0,checked:e.individualAddonObject.ticked})}),Object(c.jsxs)("p",{className:"OneAddOn__price",children:[e.currentCurrency,"$"===e.currentCurrency?e.individualAddonObject.priceUSD:e.individualAddonObject.priceEUR," ","/ month"]}),Object(c.jsx)("div",{children:console.log(t)})]})};r(4),r(13);var l=e=>Object(c.jsxs)("div",{children:[Object(c.jsx)("span",{children:"$"}),Object(c.jsxs)("label",{className:"switch",children:[Object(c.jsx)("input",{type:"checkbox",value:!0,onChange:()=>{e.onSwitch()}}),Object(c.jsx)("span",{className:"slider round"})]}),Object(c.jsx)("span",{children:"\u20ac"})]});var d=e=>{const t=e.addOns.map((t=>Object(c.jsx)(o,{individualAddonObject:t,onTick:e.onTick,currentCurrency:e.currentCurrency,id:t.title},t.title)));return Object(c.jsxs)("div",{className:"ListOfAddonsComposition",children:["Select Currency:",Object(c.jsx)(l,{onSwitch:()=>{e.onToggleCurrency()}}),Object(c.jsx)("div",{className:"listOfAddons",children:t})]})};r(14);var u=e=>Object(c.jsxs)("li",{className:"ItemPriceSummary__Wrapper",children:[Object(c.jsxs)("div",{className:"ItemPriceSummary__Title",children:[e.title,Object(c.jsx)("div",{className:"dots",children:"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................"})]}),Object(c.jsxs)("div",{className:"ItemPriceSummary__Value",children:[e.chosenCurrency+" ",e.value]})]});r(15);var p=e=>{let t=0;for(const c of e.addOns)c.ticked&&(t+="$"===e.chosenCurrency?c.priceUSD:c.priceEUR);const r=[{min:1,max:10,pricePerUser:55},{min:11,max:25,pricePerUser:50},{min:26,max:50,pricePerUser:45},{min:51,max:100,pricePerUser:40},{min:101,max:200,pricePerUser:35},{min:201,max:300,pricePerUser:30},{min:301,max:400,pricePerUser:25},{min:401,max:500,pricePerUser:20},{min:501,max:void 0,pricePerUser:15}],i=[{min:1,max:10,pricePerUser:60},{min:11,max:25,pricePerUser:55},{min:26,max:50,pricePerUser:50},{min:51,max:100,pricePerUser:45},{min:101,max:200,pricePerUser:40},{min:201,max:300,pricePerUser:35},{min:301,max:400,pricePerUser:30},{min:401,max:500,pricePerUser:25},{min:501,max:void 0,pricePerUser:20}],a="$"===e.chosenCurrency?i:r;let n=0,s=0;for(const c of a)for(let t=0;t<c.max;t++)s<e.nrOfUsersSelected&&(n+=c.pricePerUser,s++);const o=36*(n+t);let l=Math.round(e.CCpercentage/100*o);const d=Math.round(l/12),p=[{title:"Monthly Modules Price:",value:t},{title:"Monthly EAM Users Price",value:n},{title:"Monthy Customer Care Services Price (billed yearly)",value:d},"line",{title:"Total Monthly Cost:",value:t+n+d},{title:"Estimated Standard Implementation**",value:"$"===e.chosenCurrency?72e3:64500}].map((t=>"line"===t?Object(c.jsx)("div",{className:"breakBetweenLines"},Math.random()):Object(c.jsx)(u,{title:t.title,value:t.value,chosenCurrency:e.chosenCurrency},Math.random())));return Object(c.jsxs)("ul",{className:"PriceSummary__Wrapper",children:[p,Object(c.jsx)("div",{children:console.log()})]})};r(16);var m=e=>Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"slidecontainer",children:Object(c.jsxs)("label",{className:"sliderLabel",children:["Select number of users:",Object(c.jsx)("input",{type:"range",min:"1",max:"500",onChange:t=>{e.onSlide(t.target.value),console.log(t.target.value)},value:e.currentValue}),Object(c.jsx)("div",{children:e.currentValue})]})})});r(17);var h=e=>{const t=e.CustomerCarePackage.listOfFeatures.map((e=>Object(c.jsx)("li",{className:"listCCfeatures",children:e},e))),r=()=>{e.setPackages((t=>t.map((function(t){return t.title===e.CustomerCarePackage.title?{...t,ticked:!0}:{...t,ticked:!1}}))))};return Object(c.jsxs)("div",{className:"OneCCCard",onClick:r,style:{justifyContent:"spaceAround"},children:[Object(c.jsx)("div",{className:"CC__title",style:{color:e.CustomerCarePackage.title},children:e.CustomerCarePackage.title}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"CC__descriptionBeforeFeatures",children:e.CustomerCarePackage.descriptionBeforeFeatures}),t]}),Object(c.jsx)("div",{className:"CC__descriptionAfterFeatures",children:e.CustomerCarePackage.descriptionAfterFeatures}),Object(c.jsx)("input",{onChange:r,type:"radio",className:"CC__radio",name:"customerCarePackage",checked:e.CustomerCarePackage.ticked}),Object(c.jsx)("p",{className:"CCCprice",children:e.CustomerCarePackage.priceDescription})]})};var j=e=>{const t=e.packages.map(((t,r)=>Object(c.jsx)(h,{CustomerCarePackage:e.packages[r],currentCurrency:e.chosenCurrency,setPackages:e.setPackages},e.packages[r].title)));return Object(c.jsx)("div",{className:"listOfAddons",children:t})};var y=function(){const[e,t]=Object(i.useState)(30),[r,a]=Object(i.useState)("$"),[n,s]=Object(i.useState)([{title:"Dynaway Mobile",description:"The Dynaway Mobile client offers increased efficiency and flexibility in your maintenance department. It allows your maintenance workers to report status and progress on work orders in real time, consume spare parts, and quickly and efficiently complete work orders on-site. Seamlessly integrated with Microsoft Asset Management.",priceUSD:1100,priceEUR:1e3,ticked:!0},{title:"Service Portal",description:"The Service Portal is a module available on Dynaway\u2019s Mobile Client, and allows you to quickly and easily create requests when a worker detects an error of faulty setup of specific locations or assets. The requests are revised by the maintenance manager who can automatically create work orders.",priceUSD:400,priceEUR:350,ticked:!1},{title:"Planning Board",description:"The Planning board is used for planning unscheduled work order lines on individual workers. Planners, supervisors, and managers can schedule and reschedule work order lines on the Mobile Client. Scheduling is updated in real time.",priceUSD:700,priceEUR:650,ticked:!1},{title:"Dynaway Safe Work",description:"Make work conditions safe and ensure a safer working environment with LO/TO and Work Permits. With Safe Work, you can create and manage tagouts on work orders, assets, and functional locations. Create and manage work permits that are used on work orders.",priceUSD:700,priceEUR:650,ticked:!1},{title:"Dynaway STO",description:"Create and manage projects on work order pools used for Shutdown, Turnaround & Outage (STO). We have added functionality that makes it possible to set up a specific project for a work order pool. You can use a work order pool project to get an overview of total costs on your Shutdown, Turnaround & Outage (STO) projects.",priceUSD:300,priceEUR:250,ticked:!1},{title:"Advanced Asset Management",description:"Advanced Asset Management module creates additional functionality that is not available in Microsoft Asset Management. With the module, you can automatically create a related work order based on the input from a checklist, manage your tools, check inventory for items needed for Work Orders, and more.",priceUSD:600,priceEUR:550,ticked:!1},{title:"Dynaway Analytics",description:"An essential tool for the Maintenance Manager: Customized dashboards to get a full overview of your maintenance operations and the most important metrics.",priceUSD:1100,priceEUR:1e3,ticked:!1},{title:"Advanced Inventory for Mobile",description:"The module allows you to download objects for offline use on the Mobile Client as well as execute work orders and register spare parts when the Mobile Client is offline. ",priceUSD:250,priceEUR:200,ticked:!1}]),[o,l]=Object(i.useState)([{title:"Silver",descriptionBeforeFeatures:"Includes: ",listOfFeatures:["Service Desk","Support","Product Portal","Service Requests","Platform and Application Notifications","Service Review Meetings"],descriptionAfterFeatures:"You can read the full-service package which you get with the Silver plan here.",priceDescription:"3% - Fixed yearly fee as a percentage of total existing license value*",percent:3,ticked:!1,key:"Silver"},{title:"Gold",descriptionBeforeFeatures:"Includes all services from Silver +",listOfFeatures:["Service Desk Usage Reports","Super User Support","Feature Requests","Incident Workarounds","Support of Customizations","Configuration Audit","Installation","Change Management","Bug Fix"],descriptionAfterFeatures:"You can read the full-service package which you get with the Gold plan here.",priceDescription:"6% - Fixed yearly fee as a percentage of total existing license value*",percent:6,ticked:!0,key:"Gold"},{title:"Platinum",descriptionBeforeFeatures:"Silver + Gold + ",listOfFeatures:["Service Desk Usage Analysis","Sanity Check","Performance Analysis","Strategic Roadmap Advisory On-Site","Support of Customizations","Configuration Audit","Installation","Change Management","Bug Fix"],descriptionAfterFeatures:"You can read the full-service package which you get with the Platinum plan here.",priceDescription:"12% - Fixed yearly fee as a percentage of total existing license value*",percent:12,ticked:!1,key:"Platinum"}]),u=o.filter((e=>!0===e.ticked))[0].percent;return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h2",{children:"Microsoft Asset Management Add-on Modules"}),Object(c.jsx)(d,{addOns:n,onTick:e=>{s((t=>t.map((t=>t.title===e.title?e:t))))},onToggleCurrency:()=>{a((e=>"$"===e?"\u20ac":"$"))},currentCurrency:r}),Object(c.jsx)("h3",{children:"Customer Care Plan** (Required for all customers)"}),Object(c.jsx)("p",{children:"Dynaway Customer Care Services for Dynaway EAM are available in three versions: Silver, Gold, and Platinum. Each version includes standardized services that meet typical business needs, depending on the size and complexity of your organization. The final solution can be further adapted to suit your specific business needs."}),Object(c.jsx)(j,{packages:o,chosenCurrency:r,setPackages:l}),Object(c.jsx)(m,{onSlide:e=>{t(e)},currentValue:e}),Object(c.jsx)(p,{addOns:n,chosenCurrency:r,nrOfUsersSelected:e,CCpercentage:u}),Object(c.jsx)("div",{className:"App__NotesUnderPriceSummary",children:"*License value is calculated as (monthly license subscription payment) x 36 (months)."}),Object(c.jsx)("div",{className:"App__NotesUnderPriceSummary",children:"**This price may vary, depending on customers' needs. Please read more about out Standard Implementation price here"})]})};var v=e=>{e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((t=>{let{getCLS:r,getFID:i,getFCP:a,getLCP:n,getTTFB:s}=t;r(e),i(e),a(e),n(e),s(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(y,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.aa475b8f.chunk.js.map