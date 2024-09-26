var C=Object.defineProperty;var v=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var h=(e,o,a)=>o in e?C(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,P=(e,o)=>{for(var a in o||(o={}))R.call(o,a)&&h(e,a,o[a]);if(v)for(var a of v(o))k.call(o,a)&&h(e,a,o[a]);return e};var p=(e,o,a)=>new Promise((s,l)=>{var m=n=>{try{u(a.next(n))}catch(d){l(d)}},f=n=>{try{u(a.throw(n))}catch(d){l(d)}},u=n=>n.done?s(n.value):Promise.resolve(n.value).then(m,f);u((a=a.apply(e,o)).next())});import{b as q,c as y}from"./useForm-BzgFlAKs.js";import{b as B,e as x,as as F,v as U}from"./entry/index-BPNJPE-d-1727367563404.js";import{u as g,c as V}from"./storageProvider-CFOQ3JK-.js";import{l as b,d as G,f as M,c as T,u as i,S as A,U as L,X as H,k as K,a0 as N}from"./vue-D0RdBkD6.js";import{Q as w}from"./antd-CnnxMtH0.js";import{a as $,B as j}from"./index-CaWdKrxn.js";const{t}=B(),Z=[{title:t("fms.storageProvider.name"),dataIndex:"name",width:50},{title:t("fms.storageProvider.isDefault"),dataIndex:"isDefault",width:20,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),b(w,{checked:e.isDefault===!0,checkedChildren:t("common.yes"),unCheckedChildren:t("common.no"),loading:e.pendingStatus,onChange(o,a){e.pendingStatus=!0,g({id:e.id,isDefault:o}).then(()=>{e.isDefault=o,x()()}).finally(()=>{e.pendingStatus=!1})}}))},{title:t("common.status"),dataIndex:"state",width:20,customRender:({record:e})=>(Reflect.has(e,"pendingStatus")||(e.pendingStatus=!1),b(w,{checked:e.state===!0,checkedChildren:t("common.on"),unCheckedChildren:t("common.off"),loading:e.pendingStatus,onChange(o,a){e.pendingStatus=!0;const s=!!o;g({id:e.id,state:s}).then(()=>{e.state=s}).finally(()=>{e.pendingStatus=!1})}}))},{title:t("common.createTime"),dataIndex:"createdAt",width:30,customRender:({record:e})=>F(e.createdAt)}],ee=[{field:"name",label:t("fms.storageProvider.name"),component:"Input",colProps:{span:8}}],O=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:t("fms.storageProvider.name"),component:"Input",required:!0,helpMessage:t("fms.storageProvider.nameHelpMessage")},{field:"bucket",label:t("fms.storageProvider.bucket"),component:"Input",required:!0},{field:"secretId",label:t("fms.storageProvider.secretId"),component:"Input",required:!0},{field:"secretKey",label:t("fms.storageProvider.secretKey"),component:"Input",required:!0},{field:"endpoint",label:t("fms.storageProvider.endpoint"),component:"Input",required:!0},{field:"folder",label:t("fms.storageProvider.folder"),component:"Input",helpMessage:t("fms.storageProvider.folderHelpMessage")},{field:"region",label:t("fms.storageProvider.region"),component:"Input",required:!0},{field:"useCdn",label:t("fms.storageProvider.useCdn"),component:"RadioButtonGroup",defaultValue:!1,componentProps:{options:[{label:t("common.on"),value:!0},{label:t("common.off"),value:!1}]},required:!0},{field:"cdnUrl",label:t("fms.storageProvider.cdnUrl"),component:"Input"},{field:"isDefault",label:t("fms.storageProvider.isDefault"),component:"RadioButtonGroup",defaultValue:!1,componentProps:{options:[{label:t("common.on"),value:!0},{label:t("common.off"),value:!1}]},required:!0},{field:"state",label:t("fms.storageProvider.state"),component:"RadioButtonGroup",defaultValue:!0,componentProps:{options:[{label:t("common.on"),value:!0},{label:t("common.off"),value:!1}]},required:!0}],te=G({__name:"StorageProviderDrawer",emits:["success","register"],setup(e,{emit:o}){const a=o,s=M(!0),{t:l}=U.useI18n(),[m,{resetFields:f,setFieldsValue:u,validate:n}]=q({labelWidth:110,baseColProps:{span:24},layout:"vertical",schemas:O,showActionButtonGroup:!1}),[d,{setDrawerProps:c,closeDrawer:I}]=$(r=>p(this,null,function*(){yield f(),c({confirmLoading:!1}),s.value=!!(r!=null&&r.isUpdate),i(s)&&(yield u(P({},r.record)))})),S=T(()=>i(s)?l("fms.storageProvider.editStorageProvider"):l("fms.storageProvider.addStorageProvider"));function D(){return p(this,null,function*(){const r=yield n();c({confirmLoading:!0}),r.id=i(s)?Number(r.id):0,(i(s)?yield g(r):yield V(r)).code===0&&(I(),a("success")),c({confirmLoading:!1})})}return(r,_)=>(A(),L(i(j),N(r.$attrs,{onRegister:i(d),showFooter:"",title:S.value,width:"35%",onOk:D}),{default:H(()=>[K(i(y),{onRegister:i(m)},null,8,["onRegister"])]),_:1},16,["onRegister","title"]))}});export{te as _,Z as c,ee as s};
