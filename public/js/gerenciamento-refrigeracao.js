var _0x5dab=["forEach","diretoria",".interruptor #arcondicionado3","change","salaprof5","display",".img-sala [data-dispositivo='arcondicionado2']","payloadString","sala5","lie","replace",".interruptor .interruptor-arcondicionado","labdesistemasmotrizesa","errorMessage","salaprof2","Client","alert-danger","style",":checked",".interruptor #arcondicionado4","background","each","ldwjwmao","onConnectionLost","alert-warning","send","qos","saladeaula2","disabled","onMessageArrived","click",".img-sala [data-dispositivo='arcondicionado4']","saladereuniao","dataset","salareuniao","salaprof3","#0066cc","on2","destinationName","off2","on4","salaprof6","removeClass","Message",".img-sala [data-dispositivo='arcondicionado3']","off","#ee2211","topic","inputSpinner","ceamazon_","modelagem","off3","toLowerCase","secretaria2","on3","retained","getUTCMilliseconds","match","secretaria","block","setAttribute","oficina","A conexão com a nuvem foi perdida!","lcade","sala9","querySelector","labdeconcepcaoeanalisededispositivoseletricos","innerText","connect","labdeinstalacoeseletricas","sala1","sala2","checked","saladeaula1","sala6",".img-sala [data-dispositivo='arcondicionado1']","labsima","off1","querySelectorAll","[data-temperatura] input","tailor.cloudmqtt.com",".interruptor #arcondicionado1","Falha na conexão com a nuvem!","sala7","labdequalidadedeenergia","secretaria1","errorCode","off4","addClass","on1","ceamazon/","subscribe","salaprof4","salaprof1","removeAttribute","temperatura"];!function(x,a){!function(a){for(;--a;)x.push(x.shift())}(++a)}(_0x5dab,454);var _0x468d=function(x,a){return _0x5dab[x-=0]};function acionaAC(x,a,e){var d="";$(a)[_0x468d("0x2f")]((function(a){a+=1,$(this)[_0x468d("0x1d")]((function(){$(this).is(_0x468d("0x2c"))?((d=new(Paho[_0x468d("0x45")])("on"+a))[_0x468d("0x40")]=_0x468d("0x14")+x+"/c"+a,d[_0x468d("0x34")]=1,d[_0x468d("0x51")]=!0,e[_0x468d("0x33")](d)):(messagem=new(Paho[_0x468d("0x45")])(_0x468d("0x47")+a),messagem[_0x468d("0x40")]=_0x468d("0x14")+x+"/c"+a,messagem[_0x468d("0x34")]=1,messagem[_0x468d("0x51")]=!0,e[_0x468d("0x33")](messagem))}))}))}function mudaInterruptoresAC(x){var a=document[_0x468d("0x8")](".interruptor .interruptor-arcondicionado"),e=document.querySelector(_0x468d("0xb")),d=document[_0x468d("0x5b")](".interruptor #arcondicionado2"),o=document.querySelector(_0x468d("0x1c")),c=document[_0x468d("0x5b")](_0x468d("0x2d"));a.forEach((function(){switch(x){case _0x468d("0x13"):e[_0x468d("0x2")]=!0;break;case _0x468d("0x7"):e[_0x468d("0x2")]=!1;break;case _0x468d("0x3f"):d[_0x468d("0x2")]=!0;break;case"off2":d[_0x468d("0x2")]=!1;break;case"on3":o[_0x468d("0x2")]=!0;break;case _0x468d("0x4d"):o.checked=!1;break;case _0x468d("0x42"):c[_0x468d("0x2")]=!0;break;case"off4":c[_0x468d("0x2")]=!1}}))}function mudaIconesAC(x){var a=document[_0x468d("0x8")](_0x468d("0x5")),e=document[_0x468d("0x8")](_0x468d("0x20")),d=document.querySelectorAll(_0x468d("0x46")),o=document[_0x468d("0x8")](_0x468d("0x39")),c=_0x468d("0x3e"),n=_0x468d("0x48");a.forEach((function(a){x==_0x468d("0x13")?a.style[_0x468d("0x2e")]=c:x==_0x468d("0x7")&&(a[_0x468d("0x2b")][_0x468d("0x2e")]=n)})),e[_0x468d("0x1a")]((function(a){x==_0x468d("0x3f")?a[_0x468d("0x2b")][_0x468d("0x2e")]=c:x==_0x468d("0x41")&&(a[_0x468d("0x2b")][_0x468d("0x2e")]=n)})),d[_0x468d("0x1a")]((function(a){x==_0x468d("0x50")?a[_0x468d("0x2b")][_0x468d("0x2e")]=c:x==_0x468d("0x4d")&&(a[_0x468d("0x2b")][_0x468d("0x2e")]=n)})),o[_0x468d("0x1a")]((function(a){x==_0x468d("0x42")?a[_0x468d("0x2b")].background=c:x==_0x468d("0x11")&&(a[_0x468d("0x2b")][_0x468d("0x2e")]=n)}))}var inputsValorTemperatura=document[_0x468d("0x8")](_0x468d("0x9")),interruptoresArcondicionado=document[_0x468d("0x8")](".check.interruptor-arcondicionado");$(inputsValorTemperatura)[_0x468d("0x4a")](),interruptoresArcondicionado.forEach((function(x){x.addEventListener(_0x468d("0x38"),(function(){inputsValorTemperatura[_0x468d("0x1a")]((function(a){x.id==a[_0x468d("0x3b")].temperatura&&x.checked?a[_0x468d("0x18")](_0x468d("0x36")):x.id!=a[_0x468d("0x3b")][_0x468d("0x19")]||x.checked||a[_0x468d("0x56")](_0x468d("0x36"),!0)}))}))}));var hostAC=_0x468d("0xa"),portAC=32564,idAC=_0x468d("0x4b")+(new Date)[_0x468d("0x52")](),clienteAC=new(Paho[_0x468d("0x29")])(hostAC,portAC,idAC);function doFail(x){x&&(console.log(x),$(textoNotificacaoAC)[_0x468d("0x44")](_0x468d("0x32"))[_0x468d("0x12")](_0x468d("0x2a")),textoNotificacaoAC[_0x468d("0x5d")]=_0x468d("0xc"),textoNotificacaoAC[_0x468d("0x2b")][_0x468d("0x1f")]=_0x468d("0x55"))}function onConnectionLost(x){0!==x[_0x468d("0x10")]&&(console.log("onConnectionLost:"+x[_0x468d("0x27")]),$(textoNotificacaoAC)[_0x468d("0x44")](_0x468d("0x32")).addClass(_0x468d("0x2a")),textoNotificacaoAC[_0x468d("0x5d")]=_0x468d("0x58"),textoNotificacaoAC.style[_0x468d("0x1f")]="block")}function onMessageArrived(x){mudaInterruptoresAC(x[_0x468d("0x21")]),mudaIconesAC(x[_0x468d("0x21")]),console.log(x[_0x468d("0x49")]+" - "+x[_0x468d("0x21")])}clienteAC[_0x468d("0x31")]=onConnectionLost,clienteAC[_0x468d("0x37")]=onMessageArrived;var options={userName:_0x468d("0x30"),password:"SZmxi8fOtKC8",useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){var x=document[_0x468d("0x8")](_0x468d("0x25")),a=document[_0x468d("0x5b")](".salas .sala-nome").innerText[_0x468d("0x4e")]()[_0x468d("0x24")](/[á]/g,"a")[_0x468d("0x24")](/[ã]/g,"a")[_0x468d("0x24")](/[é]/g,"e").replace(/[ó]/g,"o")[_0x468d("0x24")](/[õ]/g,"o").replace(/[ç]/g,"c")[_0x468d("0x53")](/[a-z0-9]/g).join("");switch(a){case _0x468d("0x5f"):a=_0x468d("0x23");break;case _0x468d("0x26"):a="labmotriz1";break;case _0x468d("0x54"):a=_0x468d("0xf");break;case _0x468d("0x1b"):a=_0x468d("0x4f");break;case _0x468d("0x5c"):a=_0x468d("0x59");break;case _0x468d("0x6"):a="sima";break;case"labdemodelagem":a=_0x468d("0x4c");break;case _0x468d("0xe"):a="qee";break;case"labdesistemasmotrizesb":a="labmotriz2";break;case _0x468d("0x3a"):a=_0x468d("0x3c");break;case _0x468d("0x3"):a=_0x468d("0x0");break;case _0x468d("0x35"):a=_0x468d("0x1");break;case"labdeafericao":a="sala3";break;case _0x468d("0x17"):a="sala4";break;case _0x468d("0x28"):a=_0x468d("0x22");break;case _0x468d("0x3d"):a=_0x468d("0x4");break;case _0x468d("0x16"):a=_0x468d("0xd");break;case _0x468d("0x1e"):a="sala8";break;case _0x468d("0x43"):a=_0x468d("0x5a");break;case _0x468d("0x57"):a="sala10"}for(var e=1;e<x.length+1;e++)clienteAC[_0x468d("0x15")]("ceamazon/"+a+"/c"+e);acionaAC(a,x,clienteAC)}clienteAC[_0x468d("0x5e")](options);