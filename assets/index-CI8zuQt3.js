var l=(b,a,i)=>new Promise((u,s)=>{var f=t=>{try{c(i.next(t))}catch(m){s(m)}},d=t=>{try{c(i.throw(t))}catch(m){s(m)}},c=t=>t.done?u(t.value):Promise.resolve(t.value).then(f,d);c((i=i.apply(b,a)).next())});import{i as O}from"./index-D0CbPeO-.js";import{u as $,_ as F}from"./useTable-C1zHh-l8.js";import{a as N}from"./useForm-BzgFlAKs.js";import{v as U,aq as V}from"./entry/index-BPNJPE-d-1727367563404.js";import{_ as W}from"./RankTree.vue_vue_type_script_setup_true_lang-D4Qvf3mk.js";import{u as E}from"./index-CaWdKrxn.js";import{g as P,c as X,s as j,_ as q,d as y}from"./MemberDrawer.vue_vue_type_script_setup_true_lang-MSuie_wg.js";import{P as A}from"./index-CU2O72Tc.js";import{aX as G,aY as C,M as H}from"./antd-CnnxMtH0.js";import{l as Y}from"./token-h4gRqmds.js";import{d as Z,f as w,r as z,ae as J,S as g,U as h,X as n,k as r,u as e,G as k,ac as x,Z as S}from"./vue-D0RdBkD6.js";import"./ExclamationCircleOutlined-m2nOMvaL.js";import"./index-LAC3wiAG.js";import"./isBoolean-Dou3jA6I.js";import"./index-BoOgNZ_b.js";import"./useWindowSizeFn-C71HDhub.js";import"./isDeepEqual-DIYWxe5x.js";import"./isNumber-j3SIk7av.js";import"./index-DDNUB-iW.js";import"./object-BY_VTB7H.js";import"./onMountedOrActivated-CyX9qi6i.js";import"./sortable.esm-BEDva30o.js";import"./index-DgmEQ_L6.js";import"./copyTextToClipboard-DU2l1C12.js";import"./useSortable-s3dauH_p.js";import"./index-BLETcaq3.js";import"./index-CBEN6l7B.js";import"./memberRank-DU1rEQy3.js";import"./cloudFile-BHp2dcVw.js";import"./useContentViewHeight-b3bBSljJ.js";const Re=Z({name:"MemberManagement",__name:"index",setup(b){const{t:a}=U.useI18n(),i=w(),u=z({}),s=w(!1),[f,{openDrawer:d}]=E(),[c,{reload:t}]=$({title:a("sys.member.memberList"),api:P,columns:X,formConfig:{labelWidth:120,schemas:j},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,clickToRowSelect:!1,actionColumn:{width:30,title:a("common.action"),dataIndex:"action",fixed:void 0},rowKey:"id",rowSelection:{type:"checkbox",columnWidth:20,onChange:(o,p)=>{i.value=o,s.value=o.length>0}}});function m(){d(!0,{isUpdate:!1})}function v(o){d(!0,{record:o,isUpdate:!0})}function I(o){return l(this,null,function*(){(yield y({ids:[o.id]})).code===0&&(yield t())})}function D(){return l(this,null,function*(){H.confirm({title:a("common.deleteConfirm"),icon:r(O.ExclamationCircleOutlined),onOk(){return l(this,null,function*(){(yield y({ids:i.value})).code===0&&(s.value=!1,yield t())})},onCancel(){}})})}function M(o){return l(this,null,function*(){(yield Y(o.id)).code===0&&(yield t())})}function R(){return l(this,null,function*(){yield t()})}function T(o){u.rankId=o,t()}return(o,p)=>{const B=J("a-button");return g(),h(e(A),{dense:"",contentFullHeight:""},{default:n(()=>[r(e(G),null,{default:n(()=>[r(e(C),{span:5},{default:n(()=>[r(W,{onSelect:T})]),_:1}),r(e(C),{span:19},{default:n(()=>[r(e(F),{onRegister:e(c),searchInfo:u},{tableTitle:n(()=>[s.value?(g(),h(e(V),{key:0,type:"primary",danger:"",preIcon:"ant-design:delete-outlined",onClick:D},{default:n(()=>[k(x(e(a)("common.delete")),1)]),_:1})):S("",!0)]),toolbar:n(()=>[r(B,{type:"primary",onClick:m},{default:n(()=>[k(x(e(a)("sys.member.addMember")),1)]),_:1})]),bodyCell:n(({column:L,record:_})=>[L.key==="action"?(g(),h(e(N),{key:0,actions:[{icon:"clarity:note-edit-line",onClick:v.bind(null,_)},{icon:"bx:log-out-circle",color:"error",tooltip:e(a)("sys.user.forceLoggingOut"),popConfirm:{title:e(a)("sys.user.forceLoggingOut")+"?",placement:"left",confirm:M.bind(null,_)}},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:e(a)("common.deleteConfirm"),placement:"left",confirm:I.bind(null,_)}}]},null,8,["actions"])):S("",!0)]),_:1},8,["onRegister","searchInfo"])]),_:1})]),_:1}),r(q,{onRegister:e(f),onSuccess:R},null,8,["onRegister"])]),_:1})}}});export{Re as default};
