(this["webpackJsonpprojeto-atual"]=this["webpackJsonpprojeto-atual"]||[]).push([[0],{103:function(e,t,a){e.exports=a(127)},108:function(e,t,a){},109:function(e,t,a){},113:function(e,t,a){e.exports=a.p+"static/media/ApBarba.e05a1220.webp"},114:function(e,t,a){e.exports=a.p+"static/media/ApBarba2.af5f1f85.webp"},115:function(e,t,a){e.exports=a.p+"static/media/ApBarba3.4eb60345.webp"},116:function(e,t,a){e.exports=a.p+"static/media/FazBarba.70deeecc.webp"},117:function(e,t,a){e.exports=a.p+"static/media/FazBarba2.82d28d5a.webp"},118:function(e,t,a){e.exports=a.p+"static/media/FazBarba3.17e60b9d.webp"},127:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=(a(108),a(15)),l=a(16),m=a(36),u=a(40),d=a(27),f=(a(109),a(51)),s=a(7),b=a(171),p=a(162);a(78);var v=r.a.createContext({nome:function(e){if(e.length<4)return{valido:!1,texto:"O Nome deve ter pelo menos 4 caracteres"}},sobrenome:function(e){if(e.length<5)return{valido:!1,texto:"O Sobrenome deve ter pelo menos 5 caracteres"}},telefone:function(e){if(!e.match(/^\d{10}$/))return{valido:!1,texto:"Telefone inv\xe1lido"}},data:function(e){if(!e.match(/^\d{2}-\d{2}-\d{4}$/))return{valido:!1,texto:"Data inv\xe1lida."}},hora:function(e){if(!e.match(/^([01]\d|2[0-3]):[0-5]\d$/))return{valido:!1,texto:"Hora inv\xe1lida."}}});var g=function(e){var t=function(e){var t={};for(var a in e)t[a]={valido:!0,texto:""};return t}(e),a=Object(n.useState)(t),r=Object(s.a)(a,2),o=r[0],i=r[1];return[o,function(t){var a=t.target,n=a.name,r=a.value,c=Object(f.a)({},o);c[n]=e[n](r),i(c)},function(){for(var e in o)if(!o[e].valido)return!1;return!0}]};var h=function(e){var t=e.aoEnviar,a=Object(n.useState)(""),o=Object(s.a)(a,2),i=o[0],c=o[1],l=Object(n.useContext)(v).telefone;return r.a.createElement("form",{style:{border:"1px solid #0000",borderRadius:"5px",backgroundColor:"#ffffff0",width:"100%"},onSubmit:function(e){e.preventDefault(),l(i).valido&&"21972923210"===i&&t()}},r.a.createElement(b.a,{onChange:function(e){return c(e.target.value)},type:"tel",autoComplete:"mobile",id:"telefone",name:"telefone",label:"Telefone: 21970003000",variant:"outlined",margin:"normal",fullWidth:!0}),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0},"Agendar"))};var x=function(e){var t=e.aoEnviar,a=Object(n.useState)(""),o=Object(s.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),u=m[0],d=m[1],f=Object(n.useState)(""),h=Object(s.a)(f,2),x=h[0],E=h[1],j=Object(n.useContext)(v),O=g(j),w=Object(s.a)(O,3),y=(w[0],w[1],w[2]);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),y()&&t({nome:i,sobrenome:u,telefone:x})}},r.a.createElement(b.a,{value:i,onChange:function(e){c(e.target.value)},id:"nome",label:"Nome",name:"nome",variant:"outlined",margin:"normal",fullWidth:!0}),r.a.createElement(b.a,{value:u,onChange:function(e){d(e.target.value)},id:"sobrenome",name:"sobrenome",label:"Sobrenome",variant:"outlined",margin:"normal",fullWidth:!0}),r.a.createElement(b.a,{value:x,onChange:function(e){E(e.target.value)},type:"tel",autoComplete:"mobile",id:"telefone",name:"telefone",label:"Telefone: 21970003000",variant:"outlined",margin:"normal",fullWidth:!0}),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"Pr\xf3ximo"))},E=a(169),j=a(170),O=a(83),w=a.n(O),y=a(84),C=a.n(y),S=a(85),D=a.n(S);a(113),a(114),a(115),a(116),a(117),a(118);var k=function(e){var t=e.aoEnviar,a=Object(n.useState)(""),o=Object(s.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),u=m[0],d=(m[1],Object(n.useState)("")),f=Object(s.a)(d,2),b=f[0];return f[1],r.a.createElement("form",{style:{width:"100%",display:"flex",flexDirection:"column",gap:"2rem"},onSubmit:function(e){e.preventDefault(),t({cabelo:i,barba:u,desenhar:b})}},r.a.createElement(E.a,null,r.a.createElement("h2",{style:{margin:"1rem 0",color:"#3f51b5",fontSize:"2rem"}},"Corte"),r.a.createElement(E.a,{sx:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:"1rem"}},r.a.createElement(E.a,{width:150},r.a.createElement("img",{width:150,height:220,src:w.a})),r.a.createElement(E.a,{width:150},r.a.createElement("img",{width:150,height:220,src:C.a})),r.a.createElement(E.a,{width:150},r.a.createElement("img",{width:150,height:220,src:D.a}))),r.a.createElement(j.a,{defaultChecked:i,style:{width:"0",color:"#3f51b5"},onChange:function(e){c(e.target.checked)}})),r.a.createElement(E.a,{sx:{display:"flex",justifyContent:"space-between",margin:"1rem 0",width:"100%"}},r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary"},"Voltar"),r.a.createElement(p.a,{type:"subzmit",variant:"contained",color:"primary"},"Pr\xf3ximo")))},z=a(19),A=a(167),W=a(174),B=a(88);var F,M,T,P=function(e){var t=e.aoEnviar,a=Object(n.useState)(new Date),o=Object(s.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),m=Object(s.a)(l,2),u=m[0],d=m[1],f=Object(n.useState)([]),b=Object(s.a)(f,2),h=b[0],x=b[1],E=Object(n.useContext)(v),j=g(E),O=Object(s.a)(j,3),w=(O[0],O[1],O[2]),y=new Date;y.setMinutes(y.getMinutes()+-120);var C=["09:00","10:00","11:00","14:00","15:00","16:00"];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),w()&&t({data:i,hora:u})}},r.a.createElement("div",{style:{width:"100%",margin:"1rem 0"}},r.a.createElement(B.a,{value:i,onChange:function(e){var t=new Date(e);t>=y&&c(t)},minDate:y})),r.a.createElement(A.a,{value:u,onChange:function(e){var t=e.target.value;C.includes(t)&&!h.includes(t)&&(d(t),x([].concat(Object(z.a)(h),[t])))},id:"hora",name:"hora",label:"Hora",fullWidth:!0,style:{margin:"2rem 0",border:"1px solid #3f51b5"}},C.map((function(e){return r.a.createElement(W.a,{label:"Hora",key:e,value:e,disabled:h.includes(e)},e)}))),r.a.createElement(p.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0},"Finalizar Cadastro"))},H=a(163),I=a(175),N=a(172),$=a(164),J=a(28);var Q=function(e){var t=e.aoEnviar,a=(e.validacoes,Object(n.useState)(0)),o=Object(s.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)({}),m=Object(s.a)(l,2),u=m[0],b=m[1];Object(n.useEffect)((function(){i===p.length-1&&t(u)}));var p=[r.a.createElement(h,{aoEnviar:v}),r.a.createElement(x,{aoEnviar:v}),r.a.createElement(k,{aoEnviar:v}),r.a.createElement(P,{aoEnviar:v}),r.a.createElement(H.a,{variant:"h5"},"Obrigado pela prefer\xeancia!")];function v(e){b(Object(f.a)(Object(f.a)({},u),e)),c(i+1)}var g=J.a.div(F||(F=Object(d.a)(["\n&& {\n}\n\n@media (max-width: 768px) {\n  && {\n    width: 100%;\n    gap:1rem;\n    margin: 1rem 0:\n\n }  \n}\n"]))),E=Object(J.a)(I.a)(M||(M=Object(d.a)(["\n&& {\n  background-color: #ffffff10;\n  display: flex;\n}\n\n@media (max-width: 768px) {\n  && {\n    gap:0.5rem;\n    padding:0;\n\n    flex-wrap: wrap;\n    gap:1rem;\n    justify-content:flex-start;\n    align-items: center;\n\n }  \n\n\n @media (max-width: 470px) {\n  && {\n    flex-direction: column;\n    justify-content:flex-start;\n    width:100%\n\n } \n}\n"]))),j=Object(J.a)(N.a)(T||(T=Object(d.a)(["\n&& {\n\n\n@media (max-width: 768px) {\n  && {\n\n }  \n\n @media (max-width: 440px) {\n  && {\n\n    gap:0.2rem;\n\n } \n}\n"])));return r.a.createElement(g,null,r.a.createElement(E,{activeStep:i},r.a.createElement($.a,null,r.a.createElement(j,null,"Contratante")),r.a.createElement($.a,null,r.a.createElement(j,null,"Pessoal")),r.a.createElement($.a,null,r.a.createElement(j,null,"Corte")),r.a.createElement($.a,null,r.a.createElement(j,null,"Agenda")),r.a.createElement($.a,null,r.a.createElement(j,null,"Finalizacao"))),p[i]," ")},U=(a(122),a(165));function G(e){return e.length<4||e.length>72?{valido:!1,texto:"senha deve ter 4 e 72 digitos."}:{valido:!0,texto:""}}function R(e){return 10==e.length?{valido:!1,texto:"numero de telefone deve conter 10 digitos."}:{valido:!0,texto:""}}var V=a(166);function X(e){var t=e.nome||"",a=e.sobrenome||"",n=e.telefone||"",r=e.cabelo?"Cabelo: Sim":"Cabelo: N\xe3o",o=e.data?new Date(e.data):"",i=e.hora||"",c=o?"".concat(o.getDate(),"/").concat(o.getMonth()+1,"/").concat(o.getFullYear()):"",l="Cliente: ".concat(t," ").concat(a,",\n\n Telefone: ").concat(n,",\n\n Servi\xe7o: ").concat(r,",\n\n Agendamento: ").concat(c,"\n \xe0s ").concat(i,".").replace(/\s/g,"%20");console.log(l);var m,u="https://api.telegram.org/bot".concat("6404469401:AAFiWfbdcQ3aypuognmviTMQ58CXsUccatU","/sendMessage?chat_id=").concat("928984269","&text=").concat(l);m=u,V.a.post(m).then((function(e){console.log("Mensagem enviada com sucesso para o Telegram")})).catch((function(e){console.error("Erro ao enviar mensagem para o Telegram",e)}))}var Y,_,q,K,L=a(73),Z=a.n(L),ee=J.a.img(Y||(Y=Object(d.a)(["\n  width: 100px;\n"]))),te=Object(J.a)(U.a)(_||(_=Object(d.a)(["\n  && {\n    background-color: #fefefe;\n    border-radius: 10px;\n    margin-top: 1.5rem;\n    padding: 1.5rem;\n    box-shadow: 2px 3px 5px #3f51b5;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n\n    @media (max-width: 768px) {\n      background-color: #f0f0f0;\n      padding: 2rem;\n      width:80%\n\n    }\n  }\n"]))),ae=Object(J.a)(E.a)(q||(q=Object(d.a)(["\n  && {\n\n\n    @media (max-width: 656px) {\n\n        display:flex;\n        flex-direction: column;\n        align-items: center;\n        gap:0.5rem;\n        margin-bottom: 1.5rem;\n    }\n\n    @media (max-width: 400px) {\n\n      font-size:1rem;\n  }\n  }\n"]))),ne=Object(J.a)(H.a)(K||(K=Object(d.a)(["\n  && {\n\n    flexGrow:'0.5';\n\n    @media (max-width: 470px) {\n\n      font-size:2.5rem;\n  }\n    @media (max-width: 400px) {\n\n      font-size:2rem;\n  }\n  }\n"]))),re=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(te,{component:"article",maxWidth:"sm"},r.a.createElement(ae,{sx:{display:"flex",alignItems:"center"}},r.a.createElement(ee,{src:Z.a,alt:Z.a}),r.a.createElement(ne,{variant:"h3",component:"h1",align:"center"},"Agendamento")),r.a.createElement(v.Provider,{value:{nome:G,telefone:R}},r.a.createElement(Q,{aoEnviar:X})))}}]),a}(n.Component),oe=a(89);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe.a,null,r.a.createElement(re,null))),document.getElementById("root"))},73:function(e,t,a){e.exports=a.p+"static/media/logo.a7f97cad.webp"},83:function(e,t,a){e.exports=a.p+"static/media/Cabelo.6be22907.webp"},84:function(e,t,a){e.exports=a.p+"static/media/Cabelo2.7737c6d4.webp"},85:function(e,t,a){e.exports=a.p+"static/media/Cabelo3.65fa004d.webp"}},[[103,1,2]]]);
//# sourceMappingURL=main.412657a0.chunk.js.map