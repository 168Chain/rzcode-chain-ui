import{C as g}from"./index-Jy13Qc5V.js";import{d as S,r as u,o as B,c as N,a as m,b as a,w as t,e as o,f as U}from"./index-LYaT0LI5.js";const H={class:"block-container"},V={class:"contain"},$=m("span",{style:{"font-size":"18px",color:"#fab301"}},"区块",-1),z=m("span",null,"#",-1),A=5e5,P=S({__name:"index",setup(T){const r=u(1),c=u("0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a"),i=u(72608),d=u("");let b=4,x="0".repeat(b);const p=()=>{let _=r.value+i.value+d.value;c.value=g.SHA256(_).toString()},v=u(!1),C=async()=>{v.value=!0,await new Promise(e=>setTimeout(e,2e3));let _=d.value;for(let e=0;e<=A;e++){let f=`${r}${e}${_}`,l=g.SHA256(f).toString();if(l.substring(0,b)===x){i.value=e,c.value=l,v.value=!1;break}}};return(_,e)=>{const f=o("a-button"),l=o("a-input-number"),s=o("a-form-item"),h=o("a-textarea"),w=o("a-input"),y=o("a-form"),k=o("a-card");return B(),N("div",H,[m("div",V,[a(k,{class:"r-card"},{title:t(()=>[$]),extra:t(()=>[a(f,{onClick:C,loading:v.value,class:"green-btn"},{default:t(()=>[U("挖矿")]),_:1},8,["loading"])]),default:t(()=>[a(y,{labelCol:{span:3},wrapperCol:{span:21},class:"r-form"},{default:t(()=>[a(s,{label:"高度"},{default:t(()=>[a(l,{value:r.value,"onUpdate:value":e[0]||(e[0]=n=>r.value=n),style:{width:"100%"},min:"1",onChange:p},{addonBefore:t(()=>[z]),_:1},8,["value"])]),_:1}),a(s,{label:"随机数"},{default:t(()=>[a(l,{value:i.value,"onUpdate:value":e[1]||(e[1]=n=>i.value=n),min:"1",max:"500000",style:{width:"100%"},onChange:p},null,8,["value"])]),_:1}),a(s,{label:"数据"},{default:t(()=>[a(h,{rows:6,value:d.value,"onUpdate:value":e[2]||(e[2]=n=>d.value=n),onChange:p},null,8,["value"])]),_:1}),a(s,{label:"哈希"},{default:t(()=>[a(w,{disabled:"",value:c.value,"onUpdate:value":e[3]||(e[3]=n=>c.value=n),style:{"font-size":"12px"}},null,8,["value"])]),_:1})]),_:1})]),_:1})])])}}});export{P as default};