var _0xc0a1=["salaprof4","labdequalidadedeenergia","addClass","div.alert","Message","A conexão com a nuvem foi perdida!","onConnectionLost:","Falha na conexão com a nuvem!","ceamazon_","sala4","sala8","errorCode","display","replace","alert-warning","saladereuniao","off","on4",":checked","alert-success",".interruptor #lampadas4","ceamazon/","salareuniao","sala1","match","each",".interruptor #lampadas2","labdesistemasmotrizesb","retained","background","sala9","send","on3","onMessageArrived","connect","destinationName","#119933","labdemodelagem","sala7","sima","sala2","labmotriz1","style","labdesistemasmotrizesa","salaprof3","lie","salaprof1","oficina","off4","qee",".interruptor #lampadas3","salaprof5","labmotriz2","log","payloadString","toLowerCase","xldvnagx","qos","#ee2211","forEach","labsima","sala6","errorMessage","off2","off3","querySelectorAll","Conectado!","querySelector","<span class='uk-margin-small-left' uk-spinner></span>","hD23-LNVOrD8","salaprof6","saladeaula2","onConnectionLost","subscribe","Client","on2","innerText","length","join","checked","off1","secretaria2",".interruptor #lampadas1",".interruptor .interruptor-lampada","on1","change","removeClass",".img-sala [data-dispositivo='lampadas4']","labdeconcepcaoeanalisededispositivoseletricos",".img-sala [data-dispositivo='lampadas1']"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0xc0a1,153);var _0x2a67=function(a,x){return _0xc0a1[a-=0]},textoNotificacao=document.querySelector(_0x2a67("0x1e"));$(textoNotificacao).append(_0x2a67("0x5"));var host="hairdresser.cloudmqtt.com",port=37615,id=_0x2a67("0x23")+(new Date).getUTCMilliseconds(),client=new(Paho[_0x2a67("0xb")])(host,port,id);function doFail(a){a&&(console[_0x2a67("0x50")](a),$(textoNotificacao).removeClass("alert-warning")[_0x2a67("0x1d")]("alert-danger"),textoNotificacao[_0x2a67("0xd")]=_0x2a67("0x22"),textoNotificacao[_0x2a67("0x45")][_0x2a67("0x27")]="block")}function onConnectionLost(a){0!==a[_0x2a67("0x26")]&&(console[_0x2a67("0x50")](_0x2a67("0x21")+a[_0x2a67("0x59")]),$(textoNotificacao)[_0x2a67("0x17")](_0x2a67("0x29"))[_0x2a67("0x1d")]("alert-danger"),textoNotificacao[_0x2a67("0xd")]=_0x2a67("0x20"),textoNotificacao[_0x2a67("0x45")][_0x2a67("0x27")]="block")}function onMessageArrived(a){mudaInterruptores(a.payloadString),mudaIconesLampadas(a[_0x2a67("0x51")])}client[_0x2a67("0x9")]=onConnectionLost,client[_0x2a67("0x3c")]=onMessageArrived;var options={userName:_0x2a67("0x53"),password:_0x2a67("0x6"),useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){$(textoNotificacao)[_0x2a67("0x17")]("alert-warning").addClass(_0x2a67("0x2e")),textoNotificacao.innerText=_0x2a67("0x3");var a=document.querySelectorAll(".interruptor .interruptor-lampada"),x=document.querySelector(".salas .sala-nome")[_0x2a67("0xd")][_0x2a67("0x52")]()[_0x2a67("0x28")](/[á]/g,"a")[_0x2a67("0x28")](/[ã]/g,"a").replace(/[é]/g,"e")[_0x2a67("0x28")](/[ó]/g,"o").replace(/[õ]/g,"o")[_0x2a67("0x28")](/[ç]/g,"c")[_0x2a67("0x33")](/[a-z0-9]/g)[_0x2a67("0xf")]("");switch(x){case"labdeinstalacoeseletricas":x=_0x2a67("0x48");break;case _0x2a67("0x46"):x=_0x2a67("0x44");break;case"secretaria":x="secretaria1";break;case"diretoria":x=_0x2a67("0x12");break;case _0x2a67("0x19"):x="lcade";break;case _0x2a67("0x57"):x=_0x2a67("0x42");break;case _0x2a67("0x40"):x="modelagem";break;case _0x2a67("0x1c"):x=_0x2a67("0x4c");break;case _0x2a67("0x36"):x=_0x2a67("0x4f");break;case _0x2a67("0x2a"):x=_0x2a67("0x31");break;case"saladeaula1":x=_0x2a67("0x32");break;case _0x2a67("0x8"):x=_0x2a67("0x43");break;case"labdeafericao":x="sala3";break;case _0x2a67("0x49"):x=_0x2a67("0x24");break;case"salaprof2":x="sala5";break;case _0x2a67("0x47"):x=_0x2a67("0x58");break;case _0x2a67("0x1b"):x=_0x2a67("0x41");break;case _0x2a67("0x4e"):x=_0x2a67("0x25");break;case _0x2a67("0x7"):x=_0x2a67("0x39");break;case _0x2a67("0x4a"):x="sala10"}for(var e=1;e<a[_0x2a67("0xe")]+1;e++)client[_0x2a67("0xa")]("ceamazon/"+x+"/c"+e);acionaLampadas(x,a,client)}function acionaLampadas(a,x,e){var o="";$(x)[_0x2a67("0x34")]((function(x){x+=1,$(this)[_0x2a67("0x16")]((function(){$(this).is(_0x2a67("0x2d"))?((o=new(Paho[_0x2a67("0x1f")])("on"+x))[_0x2a67("0x3e")]="ceamazon/"+a+"/c"+x,o[_0x2a67("0x54")]=1,o[_0x2a67("0x37")]=!0,e[_0x2a67("0x3a")](o)):((o=new(Paho[_0x2a67("0x1f")])(_0x2a67("0x2b")+x))[_0x2a67("0x3e")]=_0x2a67("0x30")+a+"/c"+x,o.qos=1,o.retained=!0,e[_0x2a67("0x3a")](o))}))}))}function mudaInterruptores(a){var x=document.querySelectorAll(_0x2a67("0x14")),e=document.querySelector(_0x2a67("0x13")),o=document[_0x2a67("0x4")](_0x2a67("0x35")),c=document[_0x2a67("0x4")](_0x2a67("0x4d")),t=document[_0x2a67("0x4")](_0x2a67("0x2f"));x[_0x2a67("0x56")]((function(){switch(a){case _0x2a67("0x15"):e.checked=!0;break;case _0x2a67("0x11"):e[_0x2a67("0x10")]=!1;break;case _0x2a67("0xc"):o.checked=!0;break;case _0x2a67("0x0"):o.checked=!1;break;case"on3":c[_0x2a67("0x10")]=!0;break;case _0x2a67("0x1"):c[_0x2a67("0x10")]=!1;break;case _0x2a67("0x2c"):t[_0x2a67("0x10")]=!0;break;case _0x2a67("0x4b"):t[_0x2a67("0x10")]=!1}}))}function mudaIconesLampadas(a){var x=document.querySelectorAll(_0x2a67("0x1a")),e=document[_0x2a67("0x2")](".img-sala [data-dispositivo='lampadas2']"),o=document[_0x2a67("0x2")](".img-sala [data-dispositivo='lampadas3']"),c=document[_0x2a67("0x2")](_0x2a67("0x18")),t=_0x2a67("0x3f"),s=_0x2a67("0x55");x[_0x2a67("0x56")]((function(x){"on1"==a?x[_0x2a67("0x45")].background=t:a==_0x2a67("0x11")&&(x[_0x2a67("0x45")][_0x2a67("0x38")]=s)})),e[_0x2a67("0x56")]((function(x){a==_0x2a67("0xc")?x.style[_0x2a67("0x38")]=t:a==_0x2a67("0x0")&&(x.style[_0x2a67("0x38")]=s)})),o[_0x2a67("0x56")]((function(x){a==_0x2a67("0x3b")?x.style[_0x2a67("0x38")]=t:a==_0x2a67("0x1")&&(x.style[_0x2a67("0x38")]=s)})),c[_0x2a67("0x56")]((function(x){a==_0x2a67("0x2c")?x[_0x2a67("0x45")][_0x2a67("0x38")]=t:a==_0x2a67("0x4b")&&(x[_0x2a67("0x45")][_0x2a67("0x38")]=s)}))}client[_0x2a67("0x3d")](options);