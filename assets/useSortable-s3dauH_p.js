var m=Object.defineProperty;var f=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var c=(a,e,t)=>e in a?m(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t,d=(a,e)=>{for(var t in e||(e={}))p.call(e,t)&&c(a,t,e[t]);if(f)for(var t of f(e))x.call(e,t)&&c(a,t,e[t]);return a};var s=(a,e,t)=>new Promise((r,u)=>{var y=n=>{try{i(t.next(n))}catch(o){u(o)}},_=n=>{try{i(t.throw(n))}catch(o){u(o)}},i=n=>n.done?r(n.value):Promise.resolve(n.value).then(y,_);i((t=t.apply(a,e)).next())});import{aB as S,aO as b,C as h}from"./entry/index-BPNJPE-d-1727367563404.js";import{y as v,u as B}from"./vue-D0RdBkD6.js";function k(){return S(O,arguments,l)}function O(a,e){return b(a,l(e))}function l(a){var e=new Set;return function(t){var r=a(t);return e.has(r)?{done:!1,hasNext:!1}:(e.add(r),{done:!1,hasNext:!0,next:t})}}function z(a,e){function t(){v(()=>s(this,null,function*(){if(a=B(a),!a)return;(yield h(()=>s(this,null,function*(){const{default:u}=yield import("./sortable.esm-BEDva30o.js");return{default:u}}),[])).default.create(a,d({animation:100,delay:400,delayOnTouchOnly:!0},e))}))}return{initSortable:t}}export{z as a,k as u};
