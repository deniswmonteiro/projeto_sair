var _0x235a=["change","salaprof5","addClass","block","background","oficina","labmotriz2","sala6","salareuniao","each","ceamazon/","Falha na conexão com a nuvem!","match","Message","on3","forEach",".img-sala [data-dispositivo='lampadas2']","on1","querySelectorAll","alert-danger","append","errorMessage","sala2","sala10","display","labdeinstalacoeseletricas","diretoria","style",".interruptor #lampadas1","on2","modelagem","getUTCMilliseconds","labdemodelagem","payloadString","length","toLowerCase","on4","sala5",".salas .sala-nome","log","labdeafericao",".interruptor #lampadas4","sala4","Conectado!","querySelector","ceamazon_","labdequalidadedeenergia","labmotriz1","off2",".interruptor #lampadas2","onConnectionLost:",".img-sala [data-dispositivo='lampadas3']","labdesistemasmotrizesa","connect","hD23-LNVOrD8","qee","sala8","checked",".img-sala [data-dispositivo='lampadas4']","retained",".img-sala [data-dispositivo='lampadas1']","qos","destinationName","salaprof2","saladeaula2","off4","#ee2211","alert-success",".interruptor .interruptor-lampada","labsima","sala9","send","onMessageArrived","secretaria2","div.alert","subscribe","off","saladereuniao","labdeconcepcaoeanalisededispositivoseletricos","alert-warning",":checked","lie","off1","secretaria","removeClass","innerText","labdesistemasmotrizesb","replace","off3","sima","A conexão com a nuvem foi perdida!","sala1"];!function(e,x){!function(x){for(;--x;)e.push(e.shift())}(++x)}(_0x235a,416);var _0x541e=function(e,x){return _0x235a[e-=0]},textoNotificacao=document[_0x541e("0x58")](_0x541e("0x1a"));$(textoNotificacao)[_0x541e("0x40")]("<span class='uk-margin-small-left' uk-spinner></span>");var host="hairdresser.cloudmqtt.com",port=37615,id=_0x541e("0x59")+(new Date)[_0x541e("0x4b")](),client=new Paho.Client(host,port,id);function doFail(e){e&&(console.log(e),$(textoNotificacao)[_0x541e("0x24")](_0x541e("0x1f"))[_0x541e("0x2e")](_0x541e("0x3f")),textoNotificacao[_0x541e("0x25")]=_0x541e("0x37"),textoNotificacao[_0x541e("0x47")][_0x541e("0x44")]=_0x541e("0x2f"))}function onConnectionLost(e){0!==e.errorCode&&(console[_0x541e("0x53")](_0x541e("0x2")+e[_0x541e("0x41")]),$(textoNotificacao)[_0x541e("0x24")](_0x541e("0x1f"))[_0x541e("0x2e")](_0x541e("0x3f")),textoNotificacao[_0x541e("0x25")]=_0x541e("0x2a"),textoNotificacao[_0x541e("0x47")][_0x541e("0x44")]="block")}function onMessageArrived(e){mudaInterruptores(e.payloadString),mudaIconesLampadas(e[_0x541e("0x4d")])}client.onConnectionLost=onConnectionLost,client[_0x541e("0x18")]=onMessageArrived;var options={userName:"xldvnagx",password:_0x541e("0x6"),useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){$(textoNotificacao)[_0x541e("0x24")](_0x541e("0x1f"))[_0x541e("0x2e")](_0x541e("0x13")),textoNotificacao[_0x541e("0x25")]=_0x541e("0x57");var e=document[_0x541e("0x3e")](_0x541e("0x14")),x=document.querySelector(_0x541e("0x52"))[_0x541e("0x25")][_0x541e("0x4f")]()[_0x541e("0x27")](/[á]/g,"a")[_0x541e("0x27")](/[ã]/g,"a")[_0x541e("0x27")](/[é]/g,"e")[_0x541e("0x27")](/[ó]/g,"o")[_0x541e("0x27")](/[õ]/g,"o")[_0x541e("0x27")](/[ç]/g,"c")[_0x541e("0x38")](/[a-z0-9]/g).join("");switch(x){case _0x541e("0x45"):x=_0x541e("0x21");break;case _0x541e("0x4"):x=_0x541e("0x5b");break;case _0x541e("0x23"):x="secretaria1";break;case _0x541e("0x46"):x=_0x541e("0x19");break;case _0x541e("0x1e"):x="lcade";break;case _0x541e("0x15"):x=_0x541e("0x29");break;case _0x541e("0x4c"):x=_0x541e("0x4a");break;case _0x541e("0x5a"):x=_0x541e("0x7");break;case _0x541e("0x26"):x=_0x541e("0x32");break;case _0x541e("0x1d"):x=_0x541e("0x34");break;case"saladeaula1":x=_0x541e("0x2b");break;case _0x541e("0x10"):x=_0x541e("0x42");break;case _0x541e("0x54"):x="sala3";break;case"salaprof1":x=_0x541e("0x56");break;case _0x541e("0xf"):x=_0x541e("0x51");break;case"salaprof3":x=_0x541e("0x33");break;case"salaprof4":x="sala7";break;case _0x541e("0x2d"):x=_0x541e("0x8");break;case"salaprof6":x=_0x541e("0x16");break;case _0x541e("0x31"):x=_0x541e("0x43")}for(var a=1;a<e[_0x541e("0x4e")]+1;a++)client[_0x541e("0x1b")](_0x541e("0x36")+x+"/c"+a);acionaLampadas(x,e,client)}function acionaLampadas(e,x,a){var o="";$(x)[_0x541e("0x35")]((function(x){x+=1,$(this)[_0x541e("0x2c")]((function(){$(this).is(_0x541e("0x20"))?((o=new(Paho[_0x541e("0x39")])("on"+x))[_0x541e("0xe")]=_0x541e("0x36")+e+"/c"+x,o[_0x541e("0xd")]=1,o[_0x541e("0xb")]=!0,a.send(o)):((o=new(Paho[_0x541e("0x39")])(_0x541e("0x1c")+x))[_0x541e("0xe")]=_0x541e("0x36")+e+"/c"+x,o[_0x541e("0xd")]=1,o[_0x541e("0xb")]=!0,a[_0x541e("0x17")](o))}))}))}function mudaInterruptores(e){var x=document.querySelectorAll(_0x541e("0x14")),a=document[_0x541e("0x58")](_0x541e("0x48")),o=document.querySelector(_0x541e("0x1")),c=document.querySelector(".interruptor #lampadas3"),s=document[_0x541e("0x58")](_0x541e("0x55"));x[_0x541e("0x3b")]((function(){switch(e){case _0x541e("0x3d"):a[_0x541e("0x9")]=!0;break;case _0x541e("0x22"):a[_0x541e("0x9")]=!1;break;case _0x541e("0x49"):o[_0x541e("0x9")]=!0;break;case _0x541e("0x0"):o[_0x541e("0x9")]=!1;break;case _0x541e("0x3a"):c[_0x541e("0x9")]=!0;break;case _0x541e("0x28"):c[_0x541e("0x9")]=!1;break;case _0x541e("0x50"):s.checked=!0;break;case _0x541e("0x11"):s.checked=!1}}))}function mudaIconesLampadas(e){var x=document[_0x541e("0x3e")](_0x541e("0xc")),a=document[_0x541e("0x3e")](_0x541e("0x3c")),o=document[_0x541e("0x3e")](_0x541e("0x3")),c=document[_0x541e("0x3e")](_0x541e("0xa")),s=_0x541e("0x12");x[_0x541e("0x3b")]((function(x){e==_0x541e("0x3d")?x.style[_0x541e("0x30")]="#119933":e==_0x541e("0x22")&&(x[_0x541e("0x47")][_0x541e("0x30")]=s)})),a.forEach((function(x){"on2"==e?x[_0x541e("0x47")][_0x541e("0x30")]="#119933":e==_0x541e("0x0")&&(x[_0x541e("0x47")].background=s)})),o[_0x541e("0x3b")]((function(x){e==_0x541e("0x3a")?x[_0x541e("0x47")].background="#119933":e==_0x541e("0x28")&&(x.style[_0x541e("0x30")]=s)})),c[_0x541e("0x3b")]((function(x){e==_0x541e("0x50")?x[_0x541e("0x47")].background="#119933":e==_0x541e("0x11")&&(x[_0x541e("0x47")][_0x541e("0x30")]=s)}))}client[_0x541e("0x5")](options);