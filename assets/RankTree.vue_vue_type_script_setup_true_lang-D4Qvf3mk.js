var d=(c,o,t)=>new Promise((n,s)=>{var r=e=>{try{a(t.next(e))}catch(l){s(l)}},i=e=>{try{a(t.throw(e))}catch(l){s(l)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(r,i);a((t=t.apply(c,o)).next())});import{v as p}from"./entry/index-BPNJPE-d-1727367563404.js";import{g as f}from"./memberRank-DU1rEQy3.js";import{_ as u,a as _}from"./index-DDNUB-iW.js";import{d as h,f as k,o as v,S as b,a8 as y,k as g,u as m}from"./vue-D0RdBkD6.js";const w={class:"m-4 mr-0 overflow-hidden bg-white rounded-md"},S=h({__name:"RankTree",emits:["select"],setup(c,{emit:o}){const t=o,n=k([]),{t:s}=p.useI18n();function r(){return d(this,null,function*(){const a=yield f({page:1,pageSize:1e3}),e=_(a.data.data,{labelField:"trans",valueField:"id",idKeyField:"id",childrenKeyField:"children",parentKeyField:"parentId"});n.value=e})}function i(a){t("select",a[0])}return v(()=>{r()}),(a,e)=>(b(),y("div",w,[g(m(u),{title:m(s)("sys.memberRank.memberRankList"),toolbar:"",search:"",treeWrapperClassName:"h-[calc(100%-35px)] overflow-auto",clickRowToExpand:!1,treeData:n.value,fieldNames:{key:"key",title:"title"},onSelect:i},null,8,["title","treeData"])]))}});export{S as _};
