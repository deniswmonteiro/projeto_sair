var _0x129e=["Message","oficina","addEventListener","salaprof4","labdesistemasmotrizesa","sima"," - ","click",".interruptor .interruptor-arcondicionado",":checked","getUTCMilliseconds","toLowerCase","on2","labsima","on4","secretaria1",".img-sala [data-dispositivo='arcondicionado3']","off4","salaprof2","modelagem","checked","salaprof5","labdeinstalacoeseletricas","qos","salaprof6",".interruptor #arcondicionado1","off3","sala7","addClass","sala3","on3","secretaria","ldwjwmao","log","sala10","onConnectionLost",".img-sala [data-dispositivo='arcondicionado4']","display","onConnectionLost:",".interruptor #arcondicionado4",".interruptor #arcondicionado3","temperatura","disabled","removeAttribute","errorCode","background","onMessageArrived","off1","innerText","salareuniao","removeClass","querySelectorAll","A conexão com a nuvem foi perdida!","sala9","[data-temperatura] input","labdesistemasmotrizesb",".img-sala [data-dispositivo='arcondicionado2']","topic","labmotriz1","ceamazon/","SZmxi8fOtKC8","salaprof1","dataset","diretoria","block","sala4","sala1","querySelector","sala8","#0066cc","Client","retained","saladereuniao","style","labdequalidadedeenergia","tailor.cloudmqtt.com","replace","lcade",".img-sala [data-dispositivo='arcondicionado1']","salaprof3","sala5","on1","alert-warning","join","forEach",".check.interruptor-arcondicionado","qee","lie","labdeafericao","setAttribute","payloadString","change","sala6","off2","alert-danger"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0x129e,387);var _0x4949=function(a,x){return _0x129e[a-=0]};function acionaAC(a,x,e){var o="";$(x).each((function(x){x+=1,$(this)[_0x4949("0x54")]((function(){$(this).is(_0x4949("0x2"))?((o=new Paho.Message("on"+x)).destinationName="ceamazon/"+a+"/c"+x,o[_0x4949("0x10")]=1,o[_0x4949("0x40")]=!0,e.send(o)):(messagem=new(Paho[_0x4949("0x58")])("off"+x),messagem.destinationName=_0x4949("0x34")+a+"/c"+x,messagem[_0x4949("0x10")]=1,messagem[_0x4949("0x40")]=!0,e.send(messagem))}))}))}function mudaInterruptoresAC(a){var x=document[_0x4949("0x2c")](_0x4949("0x1")),e=document[_0x4949("0x3c")](_0x4949("0x12")),o=document[_0x4949("0x3c")](".interruptor #arcondicionado2"),c=document[_0x4949("0x3c")](_0x4949("0x21")),n=document[_0x4949("0x3c")](_0x4949("0x20"));x[_0x4949("0x4d")]((function(){switch(a){case _0x4949("0x4a"):e[_0x4949("0xd")]=!0;break;case"off1":e[_0x4949("0xd")]=!1;break;case _0x4949("0x5"):o[_0x4949("0xd")]=!0;break;case _0x4949("0x56"):o[_0x4949("0xd")]=!1;break;case"on3":c[_0x4949("0xd")]=!0;break;case _0x4949("0x13"):c.checked=!1;break;case _0x4949("0x7"):n[_0x4949("0xd")]=!0;break;case _0x4949("0xa"):n.checked=!1}}))}function mudaIconesAC(a){var x=document[_0x4949("0x2c")](_0x4949("0x47")),e=document[_0x4949("0x2c")](_0x4949("0x31")),o=document.querySelectorAll(_0x4949("0x9")),c=document[_0x4949("0x2c")](_0x4949("0x1d")),n=_0x4949("0x3e");x[_0x4949("0x4d")]((function(x){a==_0x4949("0x4a")?x[_0x4949("0x42")].background=n:a==_0x4949("0x28")&&(x.style[_0x4949("0x26")]="#ee2211")})),e[_0x4949("0x4d")]((function(x){a==_0x4949("0x5")?x[_0x4949("0x42")][_0x4949("0x26")]=n:a==_0x4949("0x56")&&(x.style[_0x4949("0x26")]="#ee2211")})),o[_0x4949("0x4d")]((function(x){a==_0x4949("0x17")?x.style.background=n:a==_0x4949("0x13")&&(x[_0x4949("0x42")][_0x4949("0x26")]="#ee2211")})),c.forEach((function(x){a==_0x4949("0x7")?x[_0x4949("0x42")][_0x4949("0x26")]=n:a==_0x4949("0xa")&&(x[_0x4949("0x42")].background="#ee2211")}))}var inputsValorTemperatura=document[_0x4949("0x2c")](_0x4949("0x2f")),interruptoresArcondicionado=document[_0x4949("0x2c")](_0x4949("0x4e"));$(inputsValorTemperatura).inputSpinner(),interruptoresArcondicionado[_0x4949("0x4d")]((function(a){a[_0x4949("0x5a")](_0x4949("0x0"),(function(){inputsValorTemperatura.forEach((function(x){a.id==x.dataset[_0x4949("0x22")]&&a[_0x4949("0xd")]?x[_0x4949("0x24")]("disabled"):a.id!=x[_0x4949("0x37")][_0x4949("0x22")]||a[_0x4949("0xd")]||x[_0x4949("0x52")](_0x4949("0x23"),!0)}))}))}));var hostAC=_0x4949("0x44"),portAC=32564,idAC="ceamazon_"+(new Date)[_0x4949("0x3")](),clienteAC=new(Paho[_0x4949("0x3f")])(hostAC,portAC,idAC);function doFail(a){a&&(console[_0x4949("0x1a")](a),$(textoNotificacaoAC)[_0x4949("0x2b")]("alert-warning")[_0x4949("0x15")](_0x4949("0x57")),textoNotificacaoAC.innerText="Falha na conexão com a nuvem!",textoNotificacaoAC[_0x4949("0x42")][_0x4949("0x1e")]=_0x4949("0x39"))}function onConnectionLost(a){0!==a[_0x4949("0x25")]&&(console.log(_0x4949("0x1f")+a.errorMessage),$(textoNotificacaoAC)[_0x4949("0x2b")](_0x4949("0x4b"))[_0x4949("0x15")](_0x4949("0x57")),textoNotificacaoAC[_0x4949("0x29")]=_0x4949("0x2d"),textoNotificacaoAC[_0x4949("0x42")][_0x4949("0x1e")]="block")}function onMessageArrived(a){mudaInterruptoresAC(a[_0x4949("0x53")]),mudaIconesAC(a.payloadString),console.log(a[_0x4949("0x32")]+_0x4949("0x5e")+a[_0x4949("0x53")])}clienteAC[_0x4949("0x1c")]=onConnectionLost,clienteAC[_0x4949("0x27")]=onMessageArrived;var options={userName:_0x4949("0x19"),password:_0x4949("0x35"),useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){var a=document[_0x4949("0x2c")](".interruptor .interruptor-arcondicionado"),x=document[_0x4949("0x3c")](".salas .sala-nome")[_0x4949("0x29")][_0x4949("0x4")]()[_0x4949("0x45")](/[á]/g,"a")[_0x4949("0x45")](/[ã]/g,"a")[_0x4949("0x45")](/[é]/g,"e").replace(/[ó]/g,"o")[_0x4949("0x45")](/[õ]/g,"o")[_0x4949("0x45")](/[ç]/g,"c").match(/[a-z0-9]/g)[_0x4949("0x4c")]("");switch(x){case _0x4949("0xf"):x=_0x4949("0x50");break;case _0x4949("0x5c"):x=_0x4949("0x33");break;case _0x4949("0x18"):x=_0x4949("0x8");break;case _0x4949("0x38"):x="secretaria2";break;case"labdeconcepcaoeanalisededispositivoseletricos":x=_0x4949("0x46");break;case _0x4949("0x6"):x=_0x4949("0x5d");break;case"labdemodelagem":x=_0x4949("0xc");break;case _0x4949("0x43"):x=_0x4949("0x4f");break;case _0x4949("0x30"):x="labmotriz2";break;case _0x4949("0x41"):x=_0x4949("0x2a");break;case"saladeaula1":x=_0x4949("0x3b");break;case"saladeaula2":x="sala2";break;case _0x4949("0x51"):x=_0x4949("0x16");break;case _0x4949("0x36"):x=_0x4949("0x3a");break;case _0x4949("0xb"):x=_0x4949("0x49");break;case _0x4949("0x48"):x=_0x4949("0x55");break;case _0x4949("0x5b"):x=_0x4949("0x14");break;case _0x4949("0xe"):x=_0x4949("0x3d");break;case _0x4949("0x11"):x=_0x4949("0x2e");break;case _0x4949("0x59"):x=_0x4949("0x1b")}for(var e=1;e<a.length+1;e++)clienteAC.subscribe(_0x4949("0x34")+x+"/c"+e);acionaAC(x,a,clienteAC)}clienteAC.connect(options);