import{C}from"./index-BmBc72eJ.js";import{d as w,r as s,o as y,c as B,a as p,b as e,w as a,e as n,f as S}from"./index-Cvvw0cy_.js";const U={class:"container"},k={class:"contain"},N=p("span",null,"#",-1),E=w({__name:"index",setup(V){const _=s(1),u=s("0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a"),c=s(72608),r=s(),i=()=>u.value=C.SHA256(r.value).toString();return(g,t)=>{const m=n("a-button"),v=n("a-input-number"),l=n("a-form-item"),d=n("a-input"),f=n("a-textarea"),b=n("a-form"),x=n("a-card");return y(),B("div",U,[p("div",k,[e(x,{class:"r-card",title:"区块"},{extra:a(()=>[e(m,{type:"primary",onClick:i},{default:a(()=>[S("挖矿")]),_:1})]),default:a(()=>[e(b,{labelCol:{span:3},wrapperCol:{span:22},class:"r-form"},{default:a(()=>[e(l,{label:"区块"},{default:a(()=>[e(v,{value:_.value,"onUpdate:value":t[0]||(t[0]=o=>_.value=o),style:{width:"100%"}},{addonBefore:a(()=>[N]),_:1},8,["value"])]),_:1}),e(l,{label:"随机数"},{default:a(()=>[e(d,{value:c.value,"onUpdate:value":t[1]||(t[1]=o=>c.value=o)},null,8,["value"])]),_:1}),e(l,{label:"数据"},{default:a(()=>[e(f,{rows:6,value:r.value,"onUpdate:value":t[2]||(t[2]=o=>r.value=o)},null,8,["value"])]),_:1}),e(l,{label:"哈希"},{default:a(()=>[e(d,{disabled:"",value:u.value,"onUpdate:value":t[3]||(t[3]=o=>u.value=o)},null,8,["value"])]),_:1})]),_:1})]),_:1})])])}}});export{E as default};