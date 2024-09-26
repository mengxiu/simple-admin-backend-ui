var s=(y,o,i)=>new Promise((m,r)=>{var g=t=>{try{c(i.next(t))}catch(d){r(d)}},p=t=>{try{c(i.throw(t))}catch(d){r(d)}},c=t=>t.done?m(t.value):Promise.resolve(t.value).then(g,p);c((i=i.apply(y,o)).next())});import{i as $}from"./index-D0CbPeO-.js";import{u as U,_ as V}from"./useTable-C1zHh-l8.js";import{b as j,a as N,c as W}from"./useForm-BzgFlAKs.js";import{b as G,v as z,aq as X}from"./entry/index-BPNJPE-d-1727367563404.js";import{u as Z}from"./index-CaWdKrxn.js";import{g as I,c as H,s as J,_ as K,d as E}from"./EmailProviderDrawer.vue_vue_type_script_setup_true_lang-Cid9WYBn.js";import{b as Q,B as Y}from"./index-BoOgNZ_b.js";import{_ as ee}from"./LogModal.vue_vue_type_script_setup_true_lang-BJYHtCP7.js";import{s as te}from"./messageSender-BIFkj2gv.js";import{M as oe}from"./antd-CnnxMtH0.js";import{d as ae,f as h,ae as ne,S as v,a8 as ie,k as n,X as l,U as S,u as e,G as w,ac as C,Z as x}from"./vue-D0RdBkD6.js";import"./ExclamationCircleOutlined-m2nOMvaL.js";import"./index-LAC3wiAG.js";import"./isBoolean-Dou3jA6I.js";import"./isNumber-j3SIk7av.js";import"./index-DDNUB-iW.js";import"./object-BY_VTB7H.js";import"./isDeepEqual-DIYWxe5x.js";import"./useWindowSizeFn-C71HDhub.js";import"./onMountedOrActivated-CyX9qi6i.js";import"./sortable.esm-BEDva30o.js";import"./index-DgmEQ_L6.js";import"./copyTextToClipboard-DU2l1C12.js";import"./useSortable-s3dauH_p.js";import"./index-BLETcaq3.js";import"./index-CBEN6l7B.js";import"./components-BezANJUq.js";const{t:f}=G(),le=[{field:"target",label:f("mcms.email.targetAddress"),component:"Input",required:!0},{field:"subject",label:f("mcms.email.subject"),component:"Input",required:!0},{field:"content",label:f("mcms.email.content"),component:"InputTextArea",required:!0},{field:"provider",label:f("mcms.emailLog.provider"),component:"ApiSelect",required:!0,defaultValue:"tencent",componentProps:{api:I,params:{page:1,pageSize:1e3},resultField:"data.data",labelField:"name",valueField:"name"}}],qe=ae({name:"EmailProviderManagement",__name:"index",setup(y){const{t:o}=z.useI18n(),i=h(),m=h(!1),r=h(!1),[g,{openDrawer:p}]=Z(),[c,{reload:t}]=U({title:o("mcms.emailProvider.emailProviderList"),api:I,columns:H,formConfig:{labelWidth:160,schemas:J},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,clickToRowSelect:!1,actionColumn:{width:30,title:o("common.action"),dataIndex:"action",fixed:void 0},rowKey:"id",rowSelection:{type:"checkbox",columnWidth:20,onChange:(a,u)=>{i.value=a,m.value=a.length>0}}}),[d,{openModal:M}]=Q(),[B,{validate:P}]=j({labelWidth:160,baseColProps:{span:18},schemas:le,showActionButtonGroup:!1,labelAlign:"right"});function R(a){M(!0,{record:a})}function F(){p(!0,{isUpdate:!1})}function D(a){p(!0,{record:a,isUpdate:!0})}function T(a){return s(this,null,function*(){(yield E({ids:[a.id]})).code===0&&(yield t())})}function q(){return s(this,null,function*(){oe.confirm({title:o("common.deleteConfirm"),icon:n($.ExclamationCircleOutlined),onOk(){return s(this,null,function*(){(yield E({ids:i.value})).code===0&&(m.value=!1,yield t())})},onCancel(){}})})}function A(){return s(this,null,function*(){yield t()})}function L(){r.value=!0}function O(){return s(this,null,function*(){const a=yield P();yield te(a)})}return(a,u)=>{const k=ne("a-button");return v(),ie("div",null,[n(e(V),{onRegister:e(c),onEditEnd:e(t)},{tableTitle:l(()=>[m.value?(v(),S(e(X),{key:0,type:"primary",danger:"",preIcon:"ant-design:delete-outlined",onClick:q},{default:l(()=>[w(C(e(o)("common.delete")),1)]),_:1})):x("",!0)]),toolbar:l(()=>[n(k,{type:"success",onClick:L},{default:l(()=>[w(C(e(o)("mcms.email.sendEmail")),1)]),_:1}),n(k,{type:"primary",onClick:F},{default:l(()=>[w(C(e(o)("mcms.emailProvider.addEmailProvider")),1)]),_:1})]),bodyCell:l(({column:b,record:_})=>[b.key==="action"?(v(),S(e(N),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:D.bind(null,_)},{icon:"ic:round-library-books",tooltip:e(o)("common.viewLog"),onClick:R.bind(null,_)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:e(o)("common.deleteConfirm"),placement:"left",confirm:T.bind(null,_)}}]},null,8,["actions"])):x("",!0)]),_:1},8,["onRegister","onEditEnd"]),n(K,{onRegister:e(g),onSuccess:A},null,8,["onRegister"]),n(ee,{onRegister:e(d),defaultFullscreen:!0},null,8,["onRegister"]),n(e(Y),{open:r.value,"onUpdate:open":u[0]||(u[0]=b=>r.value=b),title:e(o)("mcms.email.sendEmail"),onOk:O},{default:l(()=>[n(e(W),{onRegister:e(B)},null,8,["onRegister"])]),_:1},8,["open","title"])])}}});export{qe as default};
