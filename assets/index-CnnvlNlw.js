var l=(k,a,n)=>new Promise((s,u)=>{var d=e=>{try{i(n.next(e))}catch(r){u(r)}},p=e=>{try{i(n.throw(e))}catch(r){u(r)}},i=e=>e.done?s(e.value):Promise.resolve(e.value).then(d,p);i((n=n.apply(k,a)).next())});import{i as $}from"./index-D0CbPeO-.js";import{u as E,_ as F}from"./useTable-C1zHh-l8.js";import{a as L}from"./useForm-BzgFlAKs.js";import{v as N,aq as O}from"./entry/index-BPNJPE-d-1727367563404.js";import{u as U}from"./index-CaWdKrxn.js";import{g as V,c as W,s as j,_ as q,d as g}from"./TaskDrawer.vue_vue_type_script_setup_true_lang-CVXX6yJq.js";import{_ as G}from"./LogModal.vue_vue_type_script_setup_true_lang-Bx437gru.js";import{b as X}from"./index-BoOgNZ_b.js";import{M as Z}from"./antd-CnnxMtH0.js";import{d as z,f as C,ae as A,S as h,a8 as H,k as c,X as m,U as y,u as o,G as b,ac as w,Z as v}from"./vue-D0RdBkD6.js";import"./ExclamationCircleOutlined-m2nOMvaL.js";import"./index-LAC3wiAG.js";import"./isBoolean-Dou3jA6I.js";import"./isNumber-j3SIk7av.js";import"./index-DDNUB-iW.js";import"./object-BY_VTB7H.js";import"./isDeepEqual-DIYWxe5x.js";import"./useWindowSizeFn-C71HDhub.js";import"./onMountedOrActivated-CyX9qi6i.js";import"./sortable.esm-BEDva30o.js";import"./index-DgmEQ_L6.js";import"./copyTextToClipboard-DU2l1C12.js";import"./useSortable-s3dauH_p.js";import"./index-BLETcaq3.js";import"./index-CBEN6l7B.js";const be=z({name:"TaskManagement",__name:"index",setup(k){const{t:a}=N.useI18n(),n=C(),s=C(!1),[u,{openDrawer:d}]=U(),[p,{reload:i}]=E({title:a("sys.task.taskList"),api:V,columns:W,formConfig:{labelWidth:120,schemas:j},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,clickToRowSelect:!1,actionColumn:{width:60,title:a("common.action"),dataIndex:"action",fixed:void 0},rowKey:"id",rowSelection:{type:"checkbox",columnWidth:20,onChange:(t,f)=>{n.value=t,s.value=t.length>0}}}),[e,{openModal:r}]=X();function x(t){r(!0,{record:t})}function T(){d(!0,{isUpdate:!1})}function S(t){d(!0,{record:t,isUpdate:!0})}function D(t){return l(this,null,function*(){(yield g({ids:[t.id]})).code===0&&(yield i())})}function M(){return l(this,null,function*(){Z.confirm({title:a("common.deleteConfirm"),icon:c($.ExclamationCircleOutlined),onOk(){return l(this,null,function*(){(yield g({ids:n.value})).code===0&&(s.value=!1,yield i())})},onCancel(){}})})}function R(){return l(this,null,function*(){yield i()})}return(t,f)=>{const B=A("a-button");return h(),H("div",null,[c(o(F),{onRegister:o(p)},{tableTitle:m(()=>[s.value?(h(),y(o(O),{key:0,type:"primary",danger:"",preIcon:"ant-design:delete-outlined",onClick:M},{default:m(()=>[b(w(o(a)("common.delete")),1)]),_:1})):v("",!0)]),toolbar:m(()=>[c(B,{type:"primary",onClick:T},{default:m(()=>[b(w(o(a)("sys.task.addTask")),1)]),_:1})]),bodyCell:m(({column:I,record:_})=>[I.key==="action"?(h(),y(o(L),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:S.bind(null,_)},{icon:"ic:round-library-books",onClick:x.bind(null,_)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:o(a)("common.deleteConfirm"),placement:"left",confirm:D.bind(null,_)}}]},null,8,["actions"])):v("",!0)]),_:1},8,["onRegister"]),c(q,{onRegister:o(u),onSuccess:R},null,8,["onRegister"]),c(G,{onRegister:o(e),defaultFullscreen:!0},null,8,["onRegister"])])}}});export{be as default};
