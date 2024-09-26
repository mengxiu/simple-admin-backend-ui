var F=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var g=(e,a,t)=>a in e?F(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,w=(e,a)=>{for(var t in a||(a={}))N.call(a,t)&&g(e,t,a[t]);if(h)for(var t of h(a))P.call(a,t)&&g(e,t,a[t]);return e};var f=(e,a,t)=>new Promise((o,c)=>{var u=i=>{try{l(t.next(i))}catch(m){c(m)}},d=i=>{try{l(t.throw(i))}catch(m){c(m)}},l=i=>i.done?o(i.value):Promise.resolve(i.value).then(u,d);l((t=t.apply(e,a)).next())});import{b as T,c as G}from"./useForm-BzgFlAKs.js";import{b as V,as as A,v as L,u as U}from"./entry/index-BPNJPE-d-1727367563404.js";import{u as b,c as q}from"./dictionary-HzT8O3R9.js";import{l as O,d as $,f as D,c as j,u as r,ae as Q,S as W,U as X,af as z,X as y,k as _,G as E,ac as H,a0 as J}from"./vue-D0RdBkD6.js";import{Q as K}from"./antd-CnnxMtH0.js";import{a as M,B as Y}from"./index-CaWdKrxn.js";const{t:s}=V(),re=[{title:s("common.displayName"),dataIndex:"trans",width:100},{title:s("sys.dictionary.name"),dataIndex:"name",width:100},{title:s("common.status"),dataIndex:"status",width:50,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),O(K,{checked:e.status===1,checkedChildren:s("common.on"),unCheckedChildren:s("common.off"),loading:e.pendingStatus,onChange(a,t){e.pendingStatus=!0;const o=a?1:2;b({id:e.id,status:o}).then(()=>{e.status=o}).finally(()=>{e.pendingStatus=!1})}}))},{title:s("common.createTime"),dataIndex:"createdAt",width:70,customRender:({record:e})=>A(e.createdAt)}],ce=[{field:"name",label:s("sys.dictionary.name"),component:"Input",colProps:{span:8},rules:[{min:1,max:50}]}],Z=[{field:"id",label:"ID",component:"Input",show:!1},{field:"title",label:s("common.displayName"),component:"Input",required:!0,rules:[{min:1,max:50}]},{field:"name",label:s("sys.dictionary.name"),component:"Input",required:!0,rules:[{min:1,max:50}]},{field:"desc",label:s("common.description"),component:"Input",rules:[{max:200}]},{field:"status",label:s("common.status"),component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:s("common.on"),value:1},{label:s("common.off"),value:2}]}}],le=$({__name:"DictionaryDrawer",emits:["success","register"],setup(e,{emit:a}){const t=a,o=D(!0),{t:c}=L.useI18n(),u=D(0),d=U(),[l,{resetFields:i,setFieldsValue:m,validate:I}]=T({labelWidth:160,baseColProps:{span:24},layout:"vertical",schemas:Z,showActionButtonGroup:!1}),[v,{setDrawerProps:p,closeDrawer:x}]=M(n=>f(this,null,function*(){yield i(),p({confirmLoading:!1}),o.value=!!(n!=null&&n.isUpdate),r(o)&&(yield m(w({},n.record)),u.value=n.record.id)})),S=j(()=>r(o)?c("sys.dictionary.editDictionary"):c("sys.dictionary.addDictionary"));function k(){return f(this,null,function*(){const n=yield I();p({confirmLoading:!0}),n.id=r(o)?Number(n.id):0,(r(o)?yield b(n):yield q(n)).code===0&&(x(),t("success")),p({confirmLoading:!1})})}function C(){d("/dictionary/detail/"+u.value)}return(n,R)=>{const B=Q("a-button");return W(),X(r(Y),J(n.$attrs,{onRegister:r(v),showFooter:"",title:S.value,width:"35%",onOk:k}),z({default:y(()=>[_(r(G),{onRegister:r(l)},null,8,["onRegister"])]),_:2},[o.value?{name:"extra",fn:y(()=>[_(B,{type:"primary",style:{"margin-right":"8px"},onClick:C},{default:y(()=>[E(H(r(c)("sys.dictionary.addDictionaryDetail")),1)]),_:1})]),key:"0"}:void 0]),1040,["onRegister","title"])}}});export{le as _,re as c,ce as s};
