var _0x467f=["salaprof1","modelagem","off1","xldvnagx","querySelector","send","checked","salareuniao","A conexão com a nuvem foi perdida!","secretaria1","labsima","subscribe","off","each","log","sala3","retained","off2","sala2",".img-sala [data-dispositivo='lampadas1']","Conectado!","replace","off3","errorCode","addClass","hD23-LNVOrD8","append",".interruptor #lampadas4","labdemodelagem","sala8",":checked","off4","on2","qos",".salas .sala-nome","lie","querySelectorAll","sala1","diretoria","on1","div.alert","getUTCMilliseconds","on4","sala6","background","ceamazon/","labmotriz2","#119933","lcade","toLowerCase","forEach","onMessageArrived","saladereuniao","style","on3","qee","labdeinstalacoeseletricas","removeClass","change","alert-danger","saladeaula2","innerText","salaprof4","Falha na conexão com a nuvem!","alert-warning",".img-sala [data-dispositivo='lampadas4']",".img-sala [data-dispositivo='lampadas2']","sala9","length","connect","<span class='uk-margin-small-left' uk-spinner></span>","salaprof6",".img-sala [data-dispositivo='lampadas3']","secretaria2","salaprof3","block","labdesistemasmotrizesb","payloadString",".interruptor #lampadas3","Message","onConnectionLost:","labdeafericao",".interruptor #lampadas1","sala4","ceamazon_",".interruptor .interruptor-lampada"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0x467f,159);var _0x4b67=function(a,x){return _0x467f[a-=0]},textoNotificacao=document[_0x4b67("0x11")](_0x4b67("0x35"));$(textoNotificacao)[_0x4b67("0x27")](_0x4b67("0x53"));var host="hairdresser.cloudmqtt.com",port=37615,id=_0x4b67("0xb")+(new Date)[_0x4b67("0x36")](),client=new Paho.Client(host,port,id);function doFail(a){a&&(console[_0x4b67("0x1b")](a),$(textoNotificacao).removeClass(_0x4b67("0x4d"))[_0x4b67("0x25")](_0x4b67("0x48")),textoNotificacao.innerText=_0x4b67("0x4c"),textoNotificacao.style.display=_0x4b67("0x2"))}function onConnectionLost(a){0!==a[_0x4b67("0x24")]&&(console[_0x4b67("0x1b")](_0x4b67("0x7")+a.errorMessage),$(textoNotificacao)[_0x4b67("0x46")]("alert-warning")[_0x4b67("0x25")](_0x4b67("0x48")),textoNotificacao[_0x4b67("0x4a")]=_0x4b67("0x15"),textoNotificacao[_0x4b67("0x42")].display=_0x4b67("0x2"))}function onMessageArrived(a){mudaInterruptores(a[_0x4b67("0x4")]),mudaIconesLampadas(a[_0x4b67("0x4")])}client.onConnectionLost=onConnectionLost,client[_0x4b67("0x40")]=onMessageArrived;var options={userName:_0x4b67("0x10"),password:_0x4b67("0x26"),useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){$(textoNotificacao).removeClass("alert-warning")[_0x4b67("0x25")]("alert-success"),textoNotificacao[_0x4b67("0x4a")]=_0x4b67("0x21");var a=document.querySelectorAll(_0x4b67("0xc")),x=document[_0x4b67("0x11")](_0x4b67("0x2f"))[_0x4b67("0x4a")][_0x4b67("0x3e")]()[_0x4b67("0x22")](/[á]/g,"a")[_0x4b67("0x22")](/[ã]/g,"a")[_0x4b67("0x22")](/[é]/g,"e")[_0x4b67("0x22")](/[ó]/g,"o")[_0x4b67("0x22")](/[õ]/g,"o")[_0x4b67("0x22")](/[ç]/g,"c").match(/[a-z0-9]/g).join("");switch(x){case _0x4b67("0x45"):x=_0x4b67("0x30");break;case"labdesistemasmotrizesa":x="labmotriz1";break;case"secretaria":x=_0x4b67("0x16");break;case _0x4b67("0x33"):x=_0x4b67("0x0");break;case"labdeconcepcaoeanalisededispositivoseletricos":x=_0x4b67("0x3d");break;case _0x4b67("0x17"):x="sima";break;case _0x4b67("0x29"):x=_0x4b67("0xe");break;case"labdequalidadedeenergia":x=_0x4b67("0x44");break;case _0x4b67("0x3"):x=_0x4b67("0x3b");break;case _0x4b67("0x41"):x=_0x4b67("0x14");break;case"saladeaula1":x=_0x4b67("0x32");break;case _0x4b67("0x49"):x=_0x4b67("0x1f");break;case _0x4b67("0x8"):x=_0x4b67("0x1c");break;case _0x4b67("0xd"):x=_0x4b67("0xa");break;case"salaprof2":x="sala5";break;case _0x4b67("0x1"):x=_0x4b67("0x38");break;case _0x4b67("0x4b"):x="sala7";break;case"salaprof5":x=_0x4b67("0x2a");break;case _0x4b67("0x54"):x=_0x4b67("0x50");break;case"oficina":x="sala10"}for(var e=1;e<a[_0x4b67("0x51")]+1;e++)client[_0x4b67("0x18")](_0x4b67("0x3a")+x+"/c"+e);acionaLampadas(x,a,client)}function acionaLampadas(a,x,e){var o="";$(x)[_0x4b67("0x1a")]((function(x){x+=1,$(this)[_0x4b67("0x47")]((function(){$(this).is(_0x4b67("0x2b"))?((o=new(Paho[_0x4b67("0x6")])("on"+x)).destinationName=_0x4b67("0x3a")+a+"/c"+x,o[_0x4b67("0x2e")]=1,o[_0x4b67("0x1d")]=!0,e[_0x4b67("0x12")](o)):((o=new(Paho[_0x4b67("0x6")])(_0x4b67("0x19")+x)).destinationName="ceamazon/"+a+"/c"+x,o[_0x4b67("0x2e")]=1,o[_0x4b67("0x1d")]=!0,e[_0x4b67("0x12")](o))}))}))}function mudaInterruptores(a){var x=document[_0x4b67("0x31")](_0x4b67("0xc")),e=document[_0x4b67("0x11")](_0x4b67("0x9")),o=document[_0x4b67("0x11")](".interruptor #lampadas2"),b=document[_0x4b67("0x11")](_0x4b67("0x5")),s=document[_0x4b67("0x11")](_0x4b67("0x28"));x[_0x4b67("0x3f")]((function(){switch(a){case _0x4b67("0x34"):e.checked=!0;break;case _0x4b67("0xf"):e[_0x4b67("0x13")]=!1;break;case _0x4b67("0x2d"):o.checked=!0;break;case _0x4b67("0x1e"):o[_0x4b67("0x13")]=!1;break;case _0x4b67("0x43"):b[_0x4b67("0x13")]=!0;break;case _0x4b67("0x23"):b[_0x4b67("0x13")]=!1;break;case _0x4b67("0x37"):s[_0x4b67("0x13")]=!0;break;case _0x4b67("0x2c"):s[_0x4b67("0x13")]=!1}}))}function mudaIconesLampadas(a){var x=document[_0x4b67("0x31")](_0x4b67("0x20")),e=document[_0x4b67("0x31")](_0x4b67("0x4f")),o=document.querySelectorAll(_0x4b67("0x55")),b=document[_0x4b67("0x31")](_0x4b67("0x4e")),s=_0x4b67("0x3c");x[_0x4b67("0x3f")]((function(x){a==_0x4b67("0x34")?x[_0x4b67("0x42")][_0x4b67("0x39")]=s:a==_0x4b67("0xf")&&(x[_0x4b67("0x42")][_0x4b67("0x39")]="#ee2211")})),e[_0x4b67("0x3f")]((function(x){a==_0x4b67("0x2d")?x[_0x4b67("0x42")].background=s:a==_0x4b67("0x1e")&&(x[_0x4b67("0x42")].background="#ee2211")})),o.forEach((function(x){"on3"==a?x[_0x4b67("0x42")][_0x4b67("0x39")]=s:"off3"==a&&(x[_0x4b67("0x42")][_0x4b67("0x39")]="#ee2211")})),b[_0x4b67("0x3f")]((function(x){a==_0x4b67("0x37")?x[_0x4b67("0x42")].background=s:a==_0x4b67("0x2c")&&(x.style[_0x4b67("0x39")]="#ee2211")}))}client[_0x4b67("0x52")](options);