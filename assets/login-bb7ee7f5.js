import{a as b,bU as v,bT as V,bV as k,k as C,r as E,o as I,f as S,l as n,t as T,u as s,bW as j,e as d,w as o,H as z,h as B,x as c,bX as N,E as R,y as U,j as F,I as q,J as D}from"./index-3e097ba8.js";const u=r=>(q("data-v-9dbfdaf6"),r=r(),D(),r),H={class:"container"},J={class:"box"},M=u(()=>n("i",{class:"sfont system-xingmingyonghumingnicheng"},null,-1)),P=u(()=>n("i",{class:"sfont system-mima"},null,-1)),W={__name:"login",setup(r){const m=v(),_=V(),g=k(),e=C({name:"admin",password:"123456"}),a=E("password"),f=()=>{a.value===""?a.value="password":a.value=""},y=()=>new Promise((l,t)=>{if(e.name===""){c.warning({message:"用户名不能为空",type:"warning"});return}if(e.password===""){c.warning({message:"密码不能为空",type:"warning"});return}l(!0)}),w=()=>{y().then(()=>{let l={name:e.name,password:e.password};m.dispatch("user/login",l).then(()=>{c.success({message:"登录成功",type:"success",showClose:!0,duration:1e3}),N(),_.push(g.query.redirect||"/")})})};return(l,t)=>{const i=R,h=U,x=F;return I(),S("div",H,[n("div",J,[n("h1",null,T(s(j)),1),d(x,{class:"form"},{default:o(()=>[d(i,{size:"large",modelValue:s(e).name,"onUpdate:modelValue":t[0]||(t[0]=p=>s(e).name=p),placeholder:"用户名",type:"text",maxlength:"50"},{prepend:o(()=>[M]),_:1},8,["modelValue"]),d(i,{size:"large",ref:"password",modelValue:s(e).password,"onUpdate:modelValue":t[1]||(t[1]=p=>s(e).password=p),type:s(a),placeholder:"密码",name:"password",maxlength:"50"},{prepend:o(()=>[P]),append:o(()=>[n("i",{class:z(["sfont password-icon",s(a)?"system-yanjing-guan":"system-yanjing"]),onClick:f},null,2)]),_:1},8,["modelValue","type"]),d(h,{type:"primary",onClick:w,style:{width:"100%"},size:"large"},{default:o(()=>[B("登录")]),_:1})]),_:1})])])}}},A=b(W,[["__scopeId","data-v-9dbfdaf6"]]);export{A as default};