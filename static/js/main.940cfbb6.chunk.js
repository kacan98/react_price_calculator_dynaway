(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){},function(e,t,a){},,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(4),c=a.n(i);a(10),a(11),a(2);var s=e=>{const[t,a]=Object(r.useState)(!1),i=()=>{a(e=>!e)},c=n.a.createElement("p",{onClick:i},e.individualAddonObject.description);return n.a.createElement("div",{className:"OneAddOn",onClick:()=>{e.onTick({...e.individualAddonObject,ticked:!e.individualAddonObject.ticked})},style:{justifyContent:t?"center":"spaceAround",minHeight:t?"430px":"0vh"}},n.a.createElement("div",{className:"OneAddOn__title"},e.individualAddonObject.title),t?c:"",n.a.createElement("div",{onClick:i,className:"showMoreOrLess"},t?"Show less":"Show details"),n.a.createElement("label",null,n.a.createElement("input",{type:"checkbox",className:"OneAddOn__checkbox",readOnly:!0,checked:e.individualAddonObject.ticked})),n.a.createElement("p",{className:"OneAddOn__price"},e.currentCurrency,"$"===e.currentCurrency?e.individualAddonObject.priceUSD:e.individualAddonObject.priceEUR," ","/ month"))};a(3),a(12);var o=e=>{return n.a.createElement("div",null,n.a.createElement("span",null,"$"),n.a.createElement("label",{className:"switch"},n.a.createElement("input",{type:"checkbox",value:!0,onChange:()=>{e.onSwitch()}}),n.a.createElement("span",{className:"slider round"})),n.a.createElement("span",null,"\u20ac"))};var l=e=>{const t=e.addOns.map(t=>n.a.createElement(s,{individualAddonObject:t,onTick:e.onTick,currentCurrency:e.currentCurrency,id:t.title,key:t.title}));return n.a.createElement("div",{className:"ListOfAddonsComposition"},"Select Currency:",n.a.createElement(o,{onSwitch:()=>{e.onToggleCurrency()}}),n.a.createElement("div",{className:"listOfAddons"},t))};a(13);var d=e=>n.a.createElement("li",{className:"ItemPriceSummary__Wrapper"},n.a.createElement("div",{className:"ItemPriceSummary__Title"},e.title,n.a.createElement("div",{className:"dots"},"......................................................................................................................................................................................................................................................................................................................................................................................................................................................................")),n.a.createElement("div",{className:"ItemPriceSummary__Value"},e.chosenCurrency+" ",e.value));a(14);var u=e=>{let t=0;for(const n of e.addOns)n.ticked&&(t+="$"===e.chosenCurrency?n.priceUSD:n.priceEUR);const a=[{min:1,max:10,pricePerUser:55},{min:11,max:25,pricePerUser:50},{min:26,max:50,pricePerUser:45},{min:51,max:100,pricePerUser:40},{min:101,max:200,pricePerUser:35},{min:201,max:300,pricePerUser:30},{min:301,max:400,pricePerUser:25},{min:401,max:500,pricePerUser:20},{min:501,max:void 0,pricePerUser:15}],r=[{min:1,max:10,pricePerUser:60},{min:11,max:25,pricePerUser:55},{min:26,max:50,pricePerUser:50},{min:51,max:100,pricePerUser:45},{min:101,max:200,pricePerUser:40},{min:201,max:300,pricePerUser:35},{min:301,max:400,pricePerUser:30},{min:401,max:500,pricePerUser:25},{min:501,max:void 0,pricePerUser:20}],i="$"===e.chosenCurrency?r:a;let c=0,s=0;for(const n of i)for(let t=0;t<n.max;t++)s<e.nrOfUsersSelected&&(c+=n.pricePerUser,s++);const o=36*(c+t);let l=Math.round(e.CCpercentage/100*o);const u=Math.round(l/12),m=[{title:"Monthly Modules Price:",value:t},{title:"Monthly EAM Users Price",value:c},{title:"Monthy Customer Care Services Price (billed yearly)",value:u},"line",{title:"Total Monthly Cost:",value:t+c+u},{title:"Estimated Standard Implementation**",value:"$"===e.chosenCurrency?72e3:64500}].map(t=>"line"===t?n.a.createElement("div",{className:"breakBetweenLines",key:Math.random()}):n.a.createElement(d,{title:t.title,value:t.value,key:Math.random(),chosenCurrency:e.chosenCurrency}));return n.a.createElement("ul",{className:"PriceSummary__Wrapper"},m)};a(15);var m=e=>{return n.a.createElement("div",null,n.a.createElement("div",{className:"slidecontainer"},n.a.createElement("label",{className:"sliderLabel"},"Select number of users:",n.a.createElement("input",{type:"range",min:"1",max:"500",onChange:t=>{e.onSlide(t.target.value)},value:e.currentValue}),n.a.createElement("div",null,e.currentValue))))};a(16);var p=e=>{const t=e.CustomerCarePackage.listOfFeatures.map(e=>n.a.createElement("li",{className:"listCCfeatures",key:e},e)),a=()=>{e.setPackages(t=>t.map(function(t){return t.title===e.CustomerCarePackage.title?{...t,ticked:!0}:{...t,ticked:!1}}))};return n.a.createElement("div",{className:"OneCCCard",onClick:a,style:{justifyContent:"spaceAround"}},n.a.createElement("div",{className:"CC__title",style:{color:e.CustomerCarePackage.title}},e.CustomerCarePackage.title),n.a.createElement("div",null,n.a.createElement("div",{className:"CC__descriptionBeforeFeatures"},e.CustomerCarePackage.descriptionBeforeFeatures),t),n.a.createElement("div",{className:"CC__descriptionAfterFeatures"},e.CustomerCarePackage.descriptionAfterFeatures),n.a.createElement("input",{onChange:a,type:"radio",className:"CC__radio",name:"customerCarePackage",checked:e.CustomerCarePackage.ticked}),n.a.createElement("p",{className:"CCCprice"},e.CustomerCarePackage.priceDescription))};var h=e=>{const t=e.packages.map((t,a)=>n.a.createElement(p,{CustomerCarePackage:e.packages[a],currentCurrency:e.chosenCurrency,setPackages:e.setPackages,key:e.packages[a].title}));return n.a.createElement("div",{className:"listOfAddons"},t)};var f=function(){const[e,t]=Object(r.useState)(30),[a,i]=Object(r.useState)("$"),[c,s]=Object(r.useState)([{title:"Mobile",description:"The Mobile client offers increased efficiency and flexibility in your maintenance department. It allows your maintenance workers to report status and progress on work orders in real time, consume spare parts, and quickly and efficiently complete work orders on-site. Seamlessly integrated with Microsoft Asset Management.",priceUSD:1100,priceEUR:1e3,ticked:!0},{title:"Service Portal",description:"The Service Portal is a module available on the Mobile Client, and allows you to quickly and easily create requests when a worker detects an error of faulty setup of specific locations or assets. The requests are revised by the maintenance manager who can automatically create work orders.",priceUSD:400,priceEUR:350,ticked:!1},{title:"Planning Board",description:"The Planning board is used for planning unscheduled work order lines on individual workers. Planners, supervisors, and managers can schedule and reschedule work order lines on the Mobile Client. Scheduling is updated in real time.",priceUSD:700,priceEUR:650,ticked:!1},{title:"Safe Work",description:"Make work conditions safe and ensure a safer working environment with LO/TO and Work Permits. With Safe Work, you can create and manage tagouts on work orders, assets, and functional locations. Create and manage work permits that are used on work orders.",priceUSD:700,priceEUR:650,ticked:!1},{title:"STO",description:"Create and manage projects on work order pools used for Shutdown, Turnaround & Outage (STO). We have added functionality that makes it possible to set up a specific project for a work order pool. You can use a work order pool project to get an overview of total costs on your Shutdown, Turnaround & Outage (STO) projects.",priceUSD:300,priceEUR:250,ticked:!1},{title:"Advanced Asset Management",description:"Advanced Asset Management module creates additional functionality that is not available in Microsoft Asset Management. With the module, you can automatically create a related work order based on the input from a checklist, manage your tools, check inventory for items needed for Work Orders, and more.",priceUSD:600,priceEUR:550,ticked:!1},{title:"Analytics",description:"An essential tool for the Maintenance Manager: Customized dashboards to get a full overview of your maintenance operations and the most important metrics.",priceUSD:1100,priceEUR:1e3,ticked:!1},{title:"Advanced Inventory for Mobile",description:"The module allows you to download objects for offline use on the Mobile Client as well as execute work orders and register spare parts when the Mobile Client is offline. ",priceUSD:250,priceEUR:200,ticked:!1}]),[o,d]=Object(r.useState)([{title:"Silver",descriptionBeforeFeatures:"Includes: ",listOfFeatures:["Service Desk","Support","Product Portal","Service Requests","Platform and Application Notifications","Service Review Meetings"],descriptionAfterFeatures:"You can read the full-service package which you get with the Silver plan here.",priceDescription:"3% - Fixed yearly fee as a percentage of total existing license value*",percent:3,ticked:!1,key:"Silver"},{title:"Gold",descriptionBeforeFeatures:"Includes all services from Silver +",listOfFeatures:["Service Desk Usage Reports","Super User Support","Feature Requests","Incident Workarounds","Support of Customizations","Configuration Audit","Installation","Change Management","Bug Fix"],descriptionAfterFeatures:"You can read the full-service package which you get with the Gold plan here.",priceDescription:"6% - Fixed yearly fee as a percentage of total existing license value*",percent:6,ticked:!0,key:"Gold"},{title:"Platinum",descriptionBeforeFeatures:"Silver + Gold + ",listOfFeatures:["Service Desk Usage Analysis","Sanity Check","Performance Analysis","Strategic Roadmap Advisory On-Site","Support of Customizations","Configuration Audit","Installation","Change Management","Bug Fix"],descriptionAfterFeatures:"You can read the full-service package which you get with the Platinum plan here.",priceDescription:"12% - Fixed yearly fee as a percentage of total existing license value*",percent:12,ticked:!1,key:"Platinum"}]),p=o.filter(e=>!0===e.ticked)[0].percent;return n.a.createElement("div",{className:"App"},n.a.createElement("h2",null,"AM Add-on Modules"),n.a.createElement(l,{addOns:c,onTick:e=>{s(t=>t.map(t=>t.title===e.title?e:t))},onToggleCurrency:()=>{i(e=>"$"===e?"\u20ac":"$")},currentCurrency:a}),n.a.createElement("h3",null,"Customer Care Plan** (Required for all customers)"),n.a.createElement("p",null,"Customer Care Services are available in three versions: Silver, Gold, and Platinum. Each version includes standardized services that meet typical business needs, depending on the size and complexity of your organization. The final solution can be further adapted to suit your specific business needs."),n.a.createElement(h,{packages:o,chosenCurrency:a,setPackages:d}),n.a.createElement(m,{onSlide:e=>{t(e)},currentValue:e}),n.a.createElement(u,{addOns:c,chosenCurrency:a,nrOfUsersSelected:e,CCpercentage:p}),n.a.createElement("div",{className:"App__NotesUnderPriceSummary"},"*License value is calculated as (monthly license subscription payment) x 36 (months)."),n.a.createElement("div",{className:"App__NotesUnderPriceSummary"},"**This price may vary, depending on customers' needs. Please read more about out Standard Implementation price here"))};var v=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then(t=>{let{getCLS:a,getFID:r,getFCP:n,getLCP:i,getTTFB:c}=t;a(e),r(e),n(e),i(e),c(e)})};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(f,null)),document.getElementById("root")),v()}],[[5,1,2]]]);
//# sourceMappingURL=main.940cfbb6.chunk.js.map