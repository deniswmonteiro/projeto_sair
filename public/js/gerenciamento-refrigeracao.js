var _0x3463=["innerText","onConnectionLost","click","checked"," - ","on1","onMessageArrived","tailor.cloudmqtt.com","ceamazon_",".check.interruptor-arcondicionado","Message","labmotriz1","addEventListener","getUTCMilliseconds",".interruptor #arcondicionado1","labdequalidadedeenergia","labdeafericao","sala7","errorCode","oficina",".img-sala [data-dispositivo='arcondicionado3']","querySelector","saladeaula2","block","Client","inputSpinner","off2","disabled","salaprof3","toLowerCase","sala5","ldwjwmao","off4","sala8","#0066cc","forEach","style","subscribe","on2","background","onConnectionLost:","saladereuniao","qos","removeAttribute","saladeaula1","salaprof2","off1","dataset","join","#ee2211","sala3",".img-sala [data-dispositivo='arcondicionado1']",".img-sala [data-dispositivo='arcondicionado4']","qee","on3",".interruptor #arcondicionado4","retained","labsima","off",".img-sala [data-dispositivo='arcondicionado2']","setAttribute","labdeinstalacoeseletricas","each","sala10","replace",".interruptor .interruptor-arcondicionado","sala2","off3","display","ceamazon/","removeClass","alert-warning","sala6","change","destinationName","lie","lcade","querySelectorAll","temperatura","[data-temperatura] input","sala9","alert-danger","match","SZmxi8fOtKC8","Falha na conexão com a nuvem!","length",":checked","labdesistemasmotrizesb","payloadString","errorMessage","log","secretaria","secretaria2","addClass"];!function(c,a){!function(a){for(;--a;)c.push(c.shift())}(++a)}(_0x3463,473);var _0x581c=function(c,a){return _0x3463[c-=0]};function acionaAC(c,a,e){var x="";$(a)[_0x581c("0x3b")]((function(a){a+=1,$(this)[_0x581c("0x46")]((function(){$(this).is(_0x581c("0x53"))?((x=new(Paho[_0x581c("0x7")])("on"+a))[_0x581c("0x47")]=_0x581c("0x42")+c+"/c"+a,x[_0x581c("0x27")]=1,x[_0x581c("0x35")]=!0,e.send(x)):(messagem=new(Paho[_0x581c("0x7")])(_0x581c("0x37")+a),messagem[_0x581c("0x47")]="ceamazon/"+c+"/c"+a,messagem.qos=1,messagem[_0x581c("0x35")]=!0,e.send(messagem))}))}))}function mudaInterruptoresAC(c){var a=document.querySelectorAll(_0x581c("0x3e")),e=document.querySelector(_0x581c("0xb")),x=document.querySelector(".interruptor #arcondicionado2"),o=document[_0x581c("0x12")](".interruptor #arcondicionado3"),n=document[_0x581c("0x12")](_0x581c("0x34"));a.forEach((function(){switch(c){case _0x581c("0x2"):e[_0x581c("0x0")]=!0;break;case _0x581c("0x2b"):e[_0x581c("0x0")]=!1;break;case _0x581c("0x23"):x[_0x581c("0x0")]=!0;break;case"off2":x[_0x581c("0x0")]=!1;break;case _0x581c("0x33"):o[_0x581c("0x0")]=!0;break;case _0x581c("0x40"):o[_0x581c("0x0")]=!1;break;case"on4":n[_0x581c("0x0")]=!0;break;case _0x581c("0x1d"):n[_0x581c("0x0")]=!1}}))}function mudaIconesAC(c){var a=document.querySelectorAll(_0x581c("0x30")),e=document[_0x581c("0x4a")](_0x581c("0x38")),x=document.querySelectorAll(_0x581c("0x11")),o=document[_0x581c("0x4a")](_0x581c("0x31")),n=_0x581c("0x1f"),r=_0x581c("0x2e");a[_0x581c("0x20")]((function(a){c==_0x581c("0x2")?a.style[_0x581c("0x24")]=n:c==_0x581c("0x2b")&&(a[_0x581c("0x21")].background=r)})),e[_0x581c("0x20")]((function(a){"on2"==c?a[_0x581c("0x21")][_0x581c("0x24")]=n:c==_0x581c("0x17")&&(a[_0x581c("0x21")][_0x581c("0x24")]=r)})),x[_0x581c("0x20")]((function(a){"on3"==c?a.style.background=n:c==_0x581c("0x40")&&(a[_0x581c("0x21")][_0x581c("0x24")]=r)})),o[_0x581c("0x20")]((function(a){"on4"==c?a.style[_0x581c("0x24")]=n:c==_0x581c("0x1d")&&(a[_0x581c("0x21")][_0x581c("0x24")]=r)}))}var inputsValorTemperatura=document[_0x581c("0x4a")](_0x581c("0x4c")),interruptoresArcondicionado=document[_0x581c("0x4a")](_0x581c("0x6"));$(inputsValorTemperatura)[_0x581c("0x16")](),interruptoresArcondicionado[_0x581c("0x20")]((function(c){c[_0x581c("0x9")](_0x581c("0x5d"),(function(){inputsValorTemperatura.forEach((function(a){c.id==a[_0x581c("0x2c")][_0x581c("0x4b")]&&c.checked?a[_0x581c("0x28")]("disabled"):c.id!=a[_0x581c("0x2c")][_0x581c("0x4b")]||c.checked||a[_0x581c("0x39")](_0x581c("0x18"),!0)}))}))}));var hostAC=_0x581c("0x4"),portAC=32564,idAC=_0x581c("0x5")+(new Date)[_0x581c("0xa")](),clienteAC=new(Paho[_0x581c("0x15")])(hostAC,portAC,idAC);function doFail(c){c&&(console.log(c),$(textoNotificacaoAC).removeClass("alert-warning")[_0x581c("0x5a")](_0x581c("0x4e")),textoNotificacaoAC[_0x581c("0x5b")]=_0x581c("0x51"),textoNotificacaoAC[_0x581c("0x21")][_0x581c("0x41")]=_0x581c("0x14"))}function onConnectionLost(c){0!==c[_0x581c("0xf")]&&(console[_0x581c("0x57")](_0x581c("0x25")+c[_0x581c("0x56")]),$(textoNotificacaoAC)[_0x581c("0x43")](_0x581c("0x44")).addClass("alert-danger"),textoNotificacaoAC[_0x581c("0x5b")]="A conexão com a nuvem foi perdida!",textoNotificacaoAC[_0x581c("0x21")][_0x581c("0x41")]="block")}function onMessageArrived(c){mudaInterruptoresAC(c[_0x581c("0x55")]),mudaIconesAC(c[_0x581c("0x55")]),console.log(c.topic+_0x581c("0x1")+c.payloadString)}clienteAC[_0x581c("0x5c")]=onConnectionLost,clienteAC[_0x581c("0x3")]=onMessageArrived;var options={userName:_0x581c("0x1c"),password:_0x581c("0x50"),useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){var c=document.querySelectorAll(_0x581c("0x3e")),a=document.querySelector(".salas .sala-nome")[_0x581c("0x5b")][_0x581c("0x1a")]()[_0x581c("0x3d")](/[á]/g,"a")[_0x581c("0x3d")](/[ã]/g,"a").replace(/[é]/g,"e")[_0x581c("0x3d")](/[ó]/g,"o")[_0x581c("0x3d")](/[õ]/g,"o").replace(/[ç]/g,"c")[_0x581c("0x4f")](/[a-z0-9]/g)[_0x581c("0x2d")]("");switch(a){case _0x581c("0x3a"):a=_0x581c("0x48");break;case"labdesistemasmotrizesa":a=_0x581c("0x8");break;case _0x581c("0x58"):a="secretaria1";break;case"diretoria":a=_0x581c("0x59");break;case"labdeconcepcaoeanalisededispositivoseletricos":a=_0x581c("0x49");break;case _0x581c("0x36"):a="sima";break;case"labdemodelagem":a="modelagem";break;case _0x581c("0xc"):a=_0x581c("0x32");break;case _0x581c("0x54"):a="labmotriz2";break;case _0x581c("0x26"):a="salareuniao";break;case _0x581c("0x29"):a="sala1";break;case _0x581c("0x13"):a=_0x581c("0x3f");break;case _0x581c("0xd"):a=_0x581c("0x2f");break;case"salaprof1":a="sala4";break;case _0x581c("0x2a"):a=_0x581c("0x1b");break;case _0x581c("0x19"):a=_0x581c("0x45");break;case"salaprof4":a=_0x581c("0xe");break;case"salaprof5":a=_0x581c("0x1e");break;case"salaprof6":a=_0x581c("0x4d");break;case _0x581c("0x10"):a=_0x581c("0x3c")}for(var e=1;e<c[_0x581c("0x52")]+1;e++)clienteAC[_0x581c("0x22")]("ceamazon/"+a+"/c"+e);acionaAC(a,c,clienteAC)}clienteAC.connect(options);