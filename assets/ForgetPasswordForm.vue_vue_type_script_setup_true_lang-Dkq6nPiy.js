var h=(P,i,u)=>new Promise((p,o)=>{var c=n=>{try{m(u.next(n))}catch(d){o(d)}},y=n=>{try{m(u.throw(n))}catch(d){o(d)}},m=n=>n.done?p(n.value):Promise.resolve(n.value).then(c,y);m((u=u.apply(P,i)).next())});import{u as F,a as z,L as E,b as I}from"./LoginFormTitle-DbclMKkX.js";import{C as U}from"./index-DgmEQ_L6.js";import{b as L,aw as N,ax as V,ar as A}from"./entry/index-BPNJPE-d-1727367563404.js";import{a as D,b as G}from"./captcha-C5BMDrvC.js";import{U as S,I as b,B as k,X as M,Y as O}from"./antd-CnnxMtH0.js";import{d as X,f as _,r as W,c as C,u as e,S as Y,a8 as Z,k as s,X as r,ab as j,G as g,ac as w,F as q,Z as H}from"./vue-D0RdBkD6.js";const J={class:"pt-4 pb-4"},oe=X({__name:"ForgetPasswordForm",setup(P){const i=S.Item,u=M,p=O,{t:o}=L(),{handleBackLogin:c,getLoginState:y}=F(),{getFormRules:m}=z(),{createErrorModal:n}=A(),d=_(),f=_(!1),a=W({msgType:"email",target:"",captcha:"",password:"",confirmPassword:""}),R=C(()=>e(y)===E.RESET_PASSWORD),x=C(()=>a.msgType==="email"?o("sys.login.emailPlaceholder"):o("sys.login.mobilePlaceholder"));function B(){return h(this,null,function*(){return a.msgType=="email"?(yield D({email:a.target})).code==0:(yield G({phoneNumber:a.target})).code==0})}function T(){return h(this,null,function*(){if(e(d)){if(a.password!=a.confirmPassword){n({title:o("sys.login.diffPwd")});return}f.value=!0,a.msgType=="email"?(yield N({email:a.target,captcha:a.captcha,password:a.password})).code==0&&(f.value=!1,c()):(yield V({phoneNumber:a.target,captcha:a.captcha,password:a.password})).code==0&&(f.value=!1,c())}})}return(v,t)=>R.value?(Y(),Z(q,{key:0},[s(I,{class:"enter-x"}),s(e(S),{class:"p-4 enter-x",model:a,rules:e(m),ref_key:"formRef",ref:d},{default:r(()=>[j("div",J,[s(e(u),{value:a.msgType,"onUpdate:value":t[0]||(t[0]=l=>a.msgType=l),"button-style":"solid",size:"large"},{default:r(()=>[s(e(p),{class:"bg-transparent",value:"email"},{default:r(()=>[g(w(e(o)("sys.login.email")),1)]),_:1}),s(e(p),{class:"bg-transparent",value:"sms"},{default:r(()=>[g(w(e(o)("sys.login.mobile")),1)]),_:1})]),_:1},8,["value"])]),s(e(i),{name:"target",class:"enter-x"},{default:r(()=>[s(e(b),{size:"large",value:a.target,"onUpdate:value":t[1]||(t[1]=l=>a.target=l),placeholder:x.value,"onUpdate:placeholder":t[2]||(t[2]=l=>x.value=l)},null,8,["value","placeholder"])]),_:1}),s(e(i),{name:"captcha",class:"enter-x"},{default:r(()=>[s(e(U),{size:"large",value:a.captcha,"onUpdate:value":t[3]||(t[3]=l=>a.captcha=l),count:60,placeholder:e(o)("sys.login.captcha"),"send-code-api":B},null,8,["value","placeholder"])]),_:1}),s(e(i),{name:"password",class:"enter-x"},{default:r(()=>[s(e(b),{type:"password",size:"large",value:a.password,"onUpdate:value":t[4]||(t[4]=l=>a.password=l),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(i),{name:"confirmPassword",class:"enter-x"},{default:r(()=>[s(e(b),{type:"password",size:"large",value:a.confirmPassword,"onUpdate:value":t[5]||(t[5]=l=>a.confirmPassword=l),placeholder:e(o)("sys.login.confirmPassword")},null,8,["value","placeholder"])]),_:1}),s(e(i),{class:"enter-x"},{default:r(()=>[s(e(k),{type:"primary",size:"large",block:"",onClick:T,loading:f.value},{default:r(()=>[g(w(e(o)("common.resetText")),1)]),_:1},8,["loading"]),s(e(k),{size:"large",block:"",class:"mt-4",onClick:e(c)},{default:r(()=>[g(w(e(o)("sys.login.backSignIn")),1)]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])],64)):H("",!0)}});export{oe as _};
