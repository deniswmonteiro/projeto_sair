var _0x4a4d=["diretoria","connect","style","replace","labdeafericao","labdeinstalacoeseletricas","sala9","sala4","checked","salaprof6",".interruptor #lampadas4","send","hairdresser.cloudmqtt.com",".interruptor #lampadas2","length","match","div.alert","join","onConnectionLost:",".img-sala [data-dispositivo='lampadas3']","ceamazon/","Message","on1",".salas .sala-nome","qee","Client","on4","hD23-LNVOrD8","alert-warning","innerText","removeClass","labdeconcepcaoeanalisededispositivoseletricos","oficina","sala7","off2","toLowerCase",".interruptor .interruptor-lampada","background","salaprof5","labsima","onMessageArrived","each","lcade","sala2","secretaria2","A conexão com a nuvem foi perdida!","addClass","errorCode","change","sala3","retained","sala8","off1","ceamazon_","on2",".img-sala [data-dispositivo='lampadas4']","sima",".interruptor #lampadas1","forEach",".interruptor #lampadas3","saladeaula1","querySelector","<span class='uk-margin-small-left' uk-spinner></span>","Conectado!","alert-success","lie","sala5","saladereuniao","labmotriz2",".img-sala [data-dispositivo='lampadas1']","salaprof1","display","destinationName","sala1","log","secretaria1","xldvnagx","labdesistemasmotrizesa","labmotriz1","sala6","off4","errorMessage","querySelectorAll","block","labdemodelagem","alert-danger","labdesistemasmotrizesb"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0x4a4d,167);var _0x892a=function(a,x){return _0x4a4d[a-=0]},textoNotificacao=document[_0x892a("0x44")](_0x892a("0x17"));$(textoNotificacao).append(_0x892a("0x45"));var host=_0x892a("0x13"),port=37615,id=_0x892a("0x3c")+(new Date).getUTCMilliseconds(),client=new(Paho[_0x892a("0x20")])(host,port,id);function doFail(a){a&&(console[_0x892a("0x51")](a),$(textoNotificacao)[_0x892a("0x25")](_0x892a("0x23"))[_0x892a("0x35")](_0x892a("0x5")),textoNotificacao[_0x892a("0x24")]="Falha na conexão com a nuvem!",textoNotificacao[_0x892a("0x9")].display="block")}function onConnectionLost(a){0!==a[_0x892a("0x36")]&&(console[_0x892a("0x51")](_0x892a("0x19")+a[_0x892a("0x1")]),$(textoNotificacao)[_0x892a("0x25")](_0x892a("0x23"))[_0x892a("0x35")](_0x892a("0x5")),textoNotificacao[_0x892a("0x24")]=_0x892a("0x34"),textoNotificacao[_0x892a("0x9")][_0x892a("0x4e")]=_0x892a("0x3"))}function onMessageArrived(a){mudaInterruptores(a.payloadString),mudaIconesLampadas(a.payloadString)}client.onConnectionLost=onConnectionLost,client[_0x892a("0x2f")]=onMessageArrived;var options={userName:_0x892a("0x53"),password:_0x892a("0x22"),useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){$(textoNotificacao)[_0x892a("0x25")](_0x892a("0x23")).addClass(_0x892a("0x47")),textoNotificacao[_0x892a("0x24")]=_0x892a("0x46");var a=document[_0x892a("0x2")](_0x892a("0x2b")),x=document[_0x892a("0x44")](_0x892a("0x1e"))[_0x892a("0x24")][_0x892a("0x2a")]()[_0x892a("0xa")](/[á]/g,"a")[_0x892a("0xa")](/[ã]/g,"a")[_0x892a("0xa")](/[é]/g,"e")[_0x892a("0xa")](/[ó]/g,"o")[_0x892a("0xa")](/[õ]/g,"o")[_0x892a("0xa")](/[ç]/g,"c")[_0x892a("0x16")](/[a-z0-9]/g)[_0x892a("0x18")]("");switch(x){case _0x892a("0xc"):x=_0x892a("0x48");break;case _0x892a("0x54"):x=_0x892a("0x55");break;case"secretaria":x=_0x892a("0x52");break;case _0x892a("0x7"):x=_0x892a("0x33");break;case _0x892a("0x26"):x=_0x892a("0x31");break;case _0x892a("0x2e"):x=_0x892a("0x3f");break;case _0x892a("0x4"):x="modelagem";break;case"labdequalidadedeenergia":x=_0x892a("0x1f");break;case _0x892a("0x6"):x=_0x892a("0x4b");break;case _0x892a("0x4a"):x="salareuniao";break;case _0x892a("0x43"):x=_0x892a("0x50");break;case"saladeaula2":x=_0x892a("0x32");break;case _0x892a("0xb"):x=_0x892a("0x38");break;case _0x892a("0x4d"):x=_0x892a("0xe");break;case"salaprof2":x=_0x892a("0x49");break;case"salaprof3":x=_0x892a("0x56");break;case"salaprof4":x=_0x892a("0x28");break;case _0x892a("0x2d"):x=_0x892a("0x3a");break;case _0x892a("0x10"):x=_0x892a("0xd");break;case _0x892a("0x27"):x="sala10"}for(var e=1;e<a[_0x892a("0x15")]+1;e++)client.subscribe(_0x892a("0x1b")+x+"/c"+e);acionaLampadas(x,a,client)}function acionaLampadas(a,x,e){var o="";$(x)[_0x892a("0x30")]((function(x){x+=1,$(this)[_0x892a("0x37")]((function(){$(this).is(":checked")?((o=new Paho.Message("on"+x))[_0x892a("0x4f")]=_0x892a("0x1b")+a+"/c"+x,o.qos=1,o[_0x892a("0x39")]=!0,e[_0x892a("0x12")](o)):((o=new(Paho[_0x892a("0x1c")])("off"+x))[_0x892a("0x4f")]=_0x892a("0x1b")+a+"/c"+x,o.qos=1,o[_0x892a("0x39")]=!0,e.send(o))}))}))}function mudaInterruptores(a){var x=document.querySelectorAll(_0x892a("0x2b")),e=document[_0x892a("0x44")](_0x892a("0x40")),o=document.querySelector(_0x892a("0x14")),s=document[_0x892a("0x44")](_0x892a("0x42")),c=document[_0x892a("0x44")](_0x892a("0x11"));x[_0x892a("0x41")]((function(){switch(a){case _0x892a("0x1d"):e[_0x892a("0xf")]=!0;break;case"off1":e[_0x892a("0xf")]=!1;break;case _0x892a("0x3d"):o[_0x892a("0xf")]=!0;break;case _0x892a("0x29"):o[_0x892a("0xf")]=!1;break;case"on3":s.checked=!0;break;case"off3":s[_0x892a("0xf")]=!1;break;case _0x892a("0x21"):c[_0x892a("0xf")]=!0;break;case _0x892a("0x0"):c[_0x892a("0xf")]=!1}}))}function mudaIconesLampadas(a){var x=document[_0x892a("0x2")](_0x892a("0x4c")),e=document[_0x892a("0x2")](".img-sala [data-dispositivo='lampadas2']"),o=document[_0x892a("0x2")](_0x892a("0x1a")),s=document.querySelectorAll(_0x892a("0x3e"));x[_0x892a("0x41")]((function(x){a==_0x892a("0x1d")?x[_0x892a("0x9")][_0x892a("0x2c")]="#119933":a==_0x892a("0x3b")&&(x[_0x892a("0x9")][_0x892a("0x2c")]="#ee2211")})),e[_0x892a("0x41")]((function(x){a==_0x892a("0x3d")?x[_0x892a("0x9")][_0x892a("0x2c")]="#119933":a==_0x892a("0x29")&&(x[_0x892a("0x9")][_0x892a("0x2c")]="#ee2211")})),o[_0x892a("0x41")]((function(x){"on3"==a?x.style[_0x892a("0x2c")]="#119933":"off3"==a&&(x[_0x892a("0x9")][_0x892a("0x2c")]="#ee2211")})),s.forEach((function(x){"on4"==a?x[_0x892a("0x9")][_0x892a("0x2c")]="#119933":"off4"==a&&(x.style[_0x892a("0x2c")]="#ee2211")}))}client[_0x892a("0x8")](options);