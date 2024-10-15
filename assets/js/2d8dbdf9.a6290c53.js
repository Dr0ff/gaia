"use strict";(self.webpackChunkcosmos_hub_docs_site=self.webpackChunkcosmos_hub_docs_site||[]).push([[1236],{5680:(e,t,n)=>{n.d(t,{xA:()=>m,yg:()=>c});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),g=a,c=d["".concat(s,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(c,o(o({ref:t},m),{},{components:n})):r.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(8168),a=(n(6540),n(5680));const i={title:"KMS - Key Management System",order:5},o=void 0,l={unversionedId:"validators/kms/kms",id:"validators/kms/kms",title:"KMS - Key Management System",description:"Tendermint KMS is a key management service that allows separating key management from Tendermint nodes. In addition it provides other advantages such as:",source:"@site/docs/validators/kms/kms.md",sourceDirName:"validators/kms",slug:"/validators/kms/",permalink:"/main/validators/kms/",draft:!1,tags:[],version:"current",frontMatter:{title:"KMS - Key Management System",order:5},sidebar:"tutorialSidebar",previous:{title:"Validators",permalink:"/main/validators/"},next:{title:"Setting up Tendermint KMS + Ledger",permalink:"/main/validators/kms/kms_ledger"}},s={},u=[{value:"Building",id:"building",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Using a YubiHSM",id:"using-a-yubihsm",level:3},{value:"Using a Ledger device running the Tendermint app",id:"using-a-ledger-device-running-the-tendermint-app",level:3}],m={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.yg)(d,(0,r.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms"},"Tendermint KMS")," is a key management service that allows separating key management from Tendermint nodes. In addition it provides other advantages such as:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Improved security and risk management policies"),(0,a.yg)("li",{parentName:"ul"},"Unified API and support for various HSM (hardware security modules)"),(0,a.yg)("li",{parentName:"ul"},"Double signing protection (software or hardware based)")),(0,a.yg)("p",null,"It is recommended that the KMS service runs in a separate physical hosts."),(0,a.yg)("h2",{id:"building"},"Building"),(0,a.yg)("p",null,"Detailed build instructions can be found ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms#installation"},"here"),"."),(0,a.yg)("admonition",{type:"tip"},(0,a.yg)("p",{parentName:"admonition"},"When compiling the KMS, ensure you have enabled the applicable features:")),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Backend"),(0,a.yg)("th",{parentName:"tr",align:null},"Recommended Command line"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"YubiHSM"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"cargo build --features yubihsm"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Ledger+Tendermint App"),(0,a.yg)("td",{parentName:"tr",align:null},(0,a.yg)("inlineCode",{parentName:"td"},"cargo build --features ledgertm"))))),(0,a.yg)("h2",{id:"configuration"},"Configuration"),(0,a.yg)("p",null,"A KMS can be configured in various ways:"),(0,a.yg)("h3",{id:"using-a-yubihsm"},"Using a YubiHSM"),(0,a.yg)("p",null,"  Detailed information on how to setup a KMS with YubiHSM2 can be found ",(0,a.yg)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/master/README.yubihsm.md"},"here")),(0,a.yg)("h3",{id:"using-a-ledger-device-running-the-tendermint-app"},"Using a Ledger device running the Tendermint app"),(0,a.yg)("p",null,"  Detailed information on how to setup a KMS with Ledger Tendermint App can be found ",(0,a.yg)("a",{parentName:"p",href:"/main/validators/kms/kms_ledger"},"here")))}p.isMDXComponent=!0}}]);