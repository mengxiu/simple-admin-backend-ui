const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DropMenuItem-nE7vc_WA.js","assets/entry/index-BPNJPE-d-1727367563404.js","assets/vue-D0RdBkD6.js","assets/antd-CnnxMtH0.js","assets/index-BbTlM2GA.css","assets/LockModal-bRmtJN91.js","assets/index-BoOgNZ_b.js","assets/index-LAC3wiAG.js","assets/index--3ENTAJw.css","assets/useWindowSizeFn-C71HDhub.js","assets/isDeepEqual-DIYWxe5x.js","assets/index-DO8ukmcw.css","assets/useForm-BzgFlAKs.js","assets/index-DgmEQ_L6.js","assets/index-B1prL0gx.css","assets/object-BY_VTB7H.js","assets/index-DDNUB-iW.js","assets/isBoolean-Dou3jA6I.js","assets/index-M1HFCELM.css","assets/copyTextToClipboard-DU2l1C12.js","assets/useSortable-s3dauH_p.js","assets/index-BLETcaq3.js","assets/index-CwImCAs8.css","assets/index-CBEN6l7B.js","assets/index-CLZPhfNe.css","assets/isNumber-j3SIk7av.js","assets/onMountedOrActivated-CyX9qi6i.js","assets/useForm-BAoy05rq.css","assets/lock-BDA9WjhZ.js","assets/header-eUmriAJi.js","assets/LockModal-CETB33ga.css"])))=>i.map(i=>d[i]);
import{p as A,C as g,f as B,c as G,u as F,b as j,G as z,ar as H}from"./entry/index-BPNJPE-d-1727367563404.js";import{D as W}from"./siteSetting--X_-_MSh.js";import{c as h,u as X}from"./index-Cncx-qrJ.js";import{b as Z}from"./index-BoOgNZ_b.js";import{h as q}from"./header-eUmriAJi.js";import{j as y,G as J,D as K}from"./antd-CnnxMtH0.js";import{d as Q,c as x,S as r,a8 as v,k as s,X as m,u as e,U as u,Z as p,ab as c,a9 as d,ac as D,F as N,ad as Y,G as ee}from"./vue-D0RdBkD6.js";import"./index-LAC3wiAG.js";import"./isBoolean-Dou3jA6I.js";import"./index-M9lKfSac.js";import"./useContentViewHeight-b3bBSljJ.js";import"./useWindowSizeFn-C71HDhub.js";import"./useSortable-s3dauH_p.js";import"./index-CaWdKrxn.js";import"./isNumber-j3SIk7av.js";import"./isDeepEqual-DIYWxe5x.js";import"./lock-BDA9WjhZ.js";const te=["src"],oe={class:"ml-4"},xe=Q({__name:"index",props:{theme:A.oneOf(["dark","light"])},setup(I){const l=h(()=>g(()=>import("./DropMenuItem-nE7vc_WA.js"),__vite__mapDeps([0,1,2,3,4]))),b=y.Divider,C=h(()=>g(()=>import("./LockModal-bRmtJN91.js"),__vite__mapDeps([5,1,2,3,4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]))),{prefixCls:n}=B("header-user-dropdown"),{t:o}=j(),{getShowDoc:f,getUseLockPage:L}=X(),a=G(),w=F(),{createMessage:M}=H(),_=x(()=>{const{nickname:t="",avatar:k,desc:i}=a.getUserInfo||{};return{nickname:t,avatar:k||q,desc:i}}),U=x(()=>{let t=a.getRoleName;return t.length>3?t.slice(0,3):t}),[O,{openModal:R}]=Z();function S(){R(!0)}function T(){a.confirmLoginOut()}function V(){z(W)}function $(){w("/profile")}function E(){M.info(a.userInfo.departmentName?o("sys.department.userDepartment")+" : "+a.userInfo.departmentName:o("sys.department.departmentUndefined"))}function P(t){switch(t.key){case"logout":T();break;case"doc":V();break;case"lock":S();break;case"profile":$();break;case"departmentName":E();break}}return(t,k)=>(r(),v(N,null,[s(e(K),{placement:"bottomLeft",overlayClassName:`${e(n)}-dropdown-overlay`},{overlay:m(()=>[s(e(y),{onClick:P},{default:m(()=>[s(e(l),{key:"departmentName",text:e(a).userInfo.departmentName?e(a).userInfo.departmentName:e(o)("sys.department.departmentUndefined"),icon:"fluent:data-treemap-24-regular",className:"font-bold"},null,8,["text"]),s(e(l),{key:"profile",text:e(o)("layout.header.profile"),icon:"ion:document-text-outline"},null,8,["text"]),e(f)?(r(),u(e(l),{key:"doc",text:e(o)("layout.header.dropdownItemDoc"),icon:"ion:document-text-outline"},null,8,["text"])):p("",!0),e(f)?(r(),u(e(b),{key:1})):p("",!0),e(L)?(r(),u(e(l),{key:"lock",text:e(o)("layout.header.tooltipLock"),icon:"ion:lock-closed-outline"},null,8,["text"])):p("",!0),s(e(l),{key:"logout",text:e(o)("layout.header.dropdownItemLoginOut"),icon:"ion:power-outline"},null,8,["text"])]),_:1})]),default:m(()=>[c("span",{class:d([[e(n),`${e(n)}--${I.theme}`],"flex"])},[c("img",{alt:"avatar",class:d(`${e(n)}__header`),src:_.value.avatar},null,10,te),c("span",{class:d(`${e(n)}__info hidden md:block`)},[c("span",{class:d([`${e(n)}__name`,"truncate"])},D(_.value.nickname),3),c("span",oe,[(r(!0),v(N,null,Y(U.value,i=>(r(),u(e(J),{key:i,color:"blue"},{default:m(()=>[ee(D(i),1)]),_:2},1024))),128))])],2)],2)]),_:1},8,["overlayClassName"]),s(e(C),{onRegister:e(O)},null,8,["onRegister"])],64))}});export{xe as default};
