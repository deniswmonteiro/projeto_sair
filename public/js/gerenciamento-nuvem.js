var _0x343e=["sala7","labdeconcepcaoeanalisededispositivoseletricos","labdemodelagem","append","labmotriz2","saladereuniao","style","getUTCMilliseconds","salaprof5",".img-sala [data-dispositivo='lampadas1']","labdequalidadedeenergia","sala2","modelagem","onMessageArrived","off2","removeClass","join","replace","saladeaula2","subscribe","salaprof6","Conectado!","sala3","innerText","on4","change","ceamazon_","display","off3","retained","sima","labdeafericao","querySelectorAll","ceamazon/",".img-sala [data-dispositivo='lampadas2']","lie","sala9",".interruptor #lampadas1",".img-sala [data-dispositivo='lampadas4']","sala4","alert-danger","addClass","xldvnagx","log","Message","block","on3","length","forEach","onConnectionLost:","secretaria1","sala1","querySelector","toLowerCase","alert-success","payloadString","sala6","on2",".interruptor #lampadas2","onConnectionLost","alert-warning","#119933","labsima","salaprof2","sala10","labdesistemasmotrizesb","qos","div.alert","connect","labdesistemasmotrizesa","saladeaula1","on1","sala8","labdeinstalacoeseletricas",".interruptor .interruptor-lampada","qee","off","off4","secretaria","destinationName","hD23-LNVOrD8","salaprof3",":checked","send","background","off1","checked"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0x343e,320);var _0xb2d8=function(a,x){return _0x343e[a-=0]},textoNotificacao=document[_0xb2d8("0x50")](_0xb2d8("0x8"));$(textoNotificacao)[_0xb2d8("0x1f")]("<span class='uk-margin-small-left' uk-spinner></span>");var host="hairdresser.cloudmqtt.com",port=37615,id=_0xb2d8("0x36")+(new Date)[_0xb2d8("0x23")](),client=new Paho.Client(host,port,id);function doFail(a){a&&(console.log(a),$(textoNotificacao)[_0xb2d8("0x2b")](_0xb2d8("0x1"))[_0xb2d8("0x45")](_0xb2d8("0x44")),textoNotificacao[_0xb2d8("0x33")]="Falha na conexão com a nuvem!",textoNotificacao[_0xb2d8("0x22")][_0xb2d8("0x37")]=_0xb2d8("0x49"))}function onConnectionLost(a){0!==a.errorCode&&(console[_0xb2d8("0x47")](_0xb2d8("0x4d")+a.errorMessage),$(textoNotificacao).removeClass(_0xb2d8("0x1"))[_0xb2d8("0x45")]("alert-danger"),textoNotificacao[_0xb2d8("0x33")]="A conexão com a nuvem foi perdida!",textoNotificacao[_0xb2d8("0x22")][_0xb2d8("0x37")]=_0xb2d8("0x49"))}function onMessageArrived(a){mudaInterruptores(a[_0xb2d8("0x53")]),mudaIconesLampadas(a.payloadString)}client[_0xb2d8("0x0")]=onConnectionLost,client[_0xb2d8("0x29")]=onMessageArrived;var options={userName:_0xb2d8("0x46"),password:_0xb2d8("0x15"),useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){$(textoNotificacao)[_0xb2d8("0x2b")](_0xb2d8("0x1"))[_0xb2d8("0x45")](_0xb2d8("0x52")),textoNotificacao.innerText=_0xb2d8("0x31");var a=document[_0xb2d8("0x3c")](".interruptor .interruptor-lampada"),x=document[_0xb2d8("0x50")](".salas .sala-nome")[_0xb2d8("0x33")][_0xb2d8("0x51")]()[_0xb2d8("0x2d")](/[á]/g,"a")[_0xb2d8("0x2d")](/[ã]/g,"a")[_0xb2d8("0x2d")](/[é]/g,"e")[_0xb2d8("0x2d")](/[ó]/g,"o")[_0xb2d8("0x2d")](/[õ]/g,"o")[_0xb2d8("0x2d")](/[ç]/g,"c").match(/[a-z0-9]/g)[_0xb2d8("0x2c")]("");switch(x){case _0xb2d8("0xe"):x=_0xb2d8("0x3f");break;case _0xb2d8("0xa"):x="labmotriz1";break;case _0xb2d8("0x13"):x=_0xb2d8("0x4e");break;case"diretoria":x="secretaria2";break;case _0xb2d8("0x1d"):x="lcade";break;case _0xb2d8("0x3"):x=_0xb2d8("0x3a");break;case _0xb2d8("0x1e"):x=_0xb2d8("0x28");break;case _0xb2d8("0x26"):x=_0xb2d8("0x10");break;case _0xb2d8("0x6"):x=_0xb2d8("0x20");break;case _0xb2d8("0x21"):x="salareuniao";break;case _0xb2d8("0xb"):x=_0xb2d8("0x4f");break;case _0xb2d8("0x2e"):x=_0xb2d8("0x27");break;case _0xb2d8("0x3b"):x=_0xb2d8("0x32");break;case"salaprof1":x=_0xb2d8("0x43");break;case _0xb2d8("0x4"):x="sala5";break;case _0xb2d8("0x16"):x=_0xb2d8("0x54");break;case"salaprof4":x=_0xb2d8("0x1c");break;case _0xb2d8("0x24"):x=_0xb2d8("0xd");break;case _0xb2d8("0x30"):x=_0xb2d8("0x40");break;case"oficina":x=_0xb2d8("0x5")}for(var e=1;e<a[_0xb2d8("0x4b")]+1;e++)client[_0xb2d8("0x2f")](_0xb2d8("0x3d")+x+"/c"+e);acionaLampadas(x,a,client)}function acionaLampadas(a,x,e){var d="";$(x).each((function(x){x+=1,$(this)[_0xb2d8("0x35")]((function(){$(this).is(_0xb2d8("0x17"))?((d=new Paho.Message("on"+x))[_0xb2d8("0x14")]=_0xb2d8("0x3d")+a+"/c"+x,d[_0xb2d8("0x7")]=1,d.retained=!0,e[_0xb2d8("0x18")](d)):((d=new(Paho[_0xb2d8("0x48")])(_0xb2d8("0x11")+x))[_0xb2d8("0x14")]=_0xb2d8("0x3d")+a+"/c"+x,d[_0xb2d8("0x7")]=1,d[_0xb2d8("0x39")]=!0,e[_0xb2d8("0x18")](d))}))}))}function mudaInterruptores(a){var x=document[_0xb2d8("0x3c")](_0xb2d8("0xf")),e=document[_0xb2d8("0x50")](_0xb2d8("0x41")),d=document[_0xb2d8("0x50")](_0xb2d8("0x56")),o=document.querySelector(".interruptor #lampadas3"),b=document.querySelector(".interruptor #lampadas4");x[_0xb2d8("0x4c")]((function(){switch(a){case _0xb2d8("0xc"):e.checked=!0;break;case"off1":e[_0xb2d8("0x1b")]=!1;break;case _0xb2d8("0x55"):d[_0xb2d8("0x1b")]=!0;break;case _0xb2d8("0x2a"):d[_0xb2d8("0x1b")]=!1;break;case"on3":o[_0xb2d8("0x1b")]=!0;break;case _0xb2d8("0x38"):o[_0xb2d8("0x1b")]=!1;break;case"on4":b[_0xb2d8("0x1b")]=!0;break;case _0xb2d8("0x12"):b[_0xb2d8("0x1b")]=!1}}))}function mudaIconesLampadas(a){var x=document.querySelectorAll(_0xb2d8("0x25")),e=document[_0xb2d8("0x3c")](_0xb2d8("0x3e")),d=document[_0xb2d8("0x3c")](".img-sala [data-dispositivo='lampadas3']"),o=document[_0xb2d8("0x3c")](_0xb2d8("0x42")),b=_0xb2d8("0x2");x[_0xb2d8("0x4c")]((function(x){"on1"==a?x[_0xb2d8("0x22")].background=b:a==_0xb2d8("0x1a")&&(x[_0xb2d8("0x22")].background="#ee2211")})),e[_0xb2d8("0x4c")]((function(x){a==_0xb2d8("0x55")?x.style[_0xb2d8("0x19")]=b:"off2"==a&&(x[_0xb2d8("0x22")].background="#ee2211")})),d[_0xb2d8("0x4c")]((function(x){a==_0xb2d8("0x4a")?x[_0xb2d8("0x22")][_0xb2d8("0x19")]=b:"off3"==a&&(x.style[_0xb2d8("0x19")]="#ee2211")})),o[_0xb2d8("0x4c")]((function(x){a==_0xb2d8("0x34")?x[_0xb2d8("0x22")].background=b:a==_0xb2d8("0x12")&&(x[_0xb2d8("0x22")][_0xb2d8("0x19")]="#ee2211")}))}client[_0xb2d8("0x9")](options);