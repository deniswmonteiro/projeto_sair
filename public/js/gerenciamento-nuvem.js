var _0x5407=["sala4","salaprof6","qee","sima","off2","on3","#119933","innerText",".interruptor #lampadas2","oficina","sala7","errorCode",".salas .sala-nome","hD23-LNVOrD8","diretoria",".interruptor #lampadas4","labdesistemasmotrizesa","destinationName","saladereuniao","send","querySelector","labdemodelagem",".img-sala [data-dispositivo='lampadas1']","sala9","on4","match","connect","log","ceamazon_",".img-sala [data-dispositivo='lampadas4']","alert-danger","Client","style",".interruptor #lampadas1","secretaria1","labdeinstalacoeseletricas","salaprof1","labdeafericao","payloadString","salaprof5","append","Falha na conexão com a nuvem!","each","retained","#ee2211","saladeaula1","addClass","alert-success","replace","off3","checked","ceamazon/","alert-warning","labmotriz1","salaprof4","on2","secretaria","off1","toLowerCase","removeClass","modelagem","Message","<span class='uk-margin-small-left' uk-spinner></span>","off","background","querySelectorAll","subscribe","salareuniao","salaprof3","display","off4","on1","saladeaula2","getUTCMilliseconds","sala8","sala3","xldvnagx","div.alert","sala1","sala2",".interruptor .interruptor-lampada","block","forEach",".img-sala [data-dispositivo='lampadas3']"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0x5407,266);var _0x1696=function(a,x){return _0x5407[a-=0]},textoNotificacao=document.querySelector(_0x1696("0x3f"));$(textoNotificacao)[_0x1696("0x1a")](_0x1696("0x30"));var host="hairdresser.cloudmqtt.com",port=37615,id=_0x1696("0xe")+(new Date)[_0x1696("0x3b")](),client=new(Paho[_0x1696("0x11")])(host,port,id);function doFail(a){a&&(console[_0x1696("0xd")](a),$(textoNotificacao)[_0x1696("0x2d")](_0x1696("0x26"))[_0x1696("0x20")](_0x1696("0x10")),textoNotificacao[_0x1696("0x4d")]=_0x1696("0x1b"),textoNotificacao.style[_0x1696("0x37")]=_0x1696("0x43"))}function onConnectionLost(a){0!==a[_0x1696("0x51")]&&(console[_0x1696("0xd")]("onConnectionLost:"+a.errorMessage),$(textoNotificacao)[_0x1696("0x2d")](_0x1696("0x26"))[_0x1696("0x20")](_0x1696("0x10")),textoNotificacao[_0x1696("0x4d")]="A conexão com a nuvem foi perdida!",textoNotificacao.style[_0x1696("0x37")]=_0x1696("0x43"))}function onMessageArrived(a){mudaInterruptores(a[_0x1696("0x18")]),mudaIconesLampadas(a[_0x1696("0x18")])}client.onConnectionLost=onConnectionLost,client.onMessageArrived=onMessageArrived;var options={userName:_0x1696("0x3e"),password:_0x1696("0x53"),useSSL:!0,onSuccess:onConnect,onFailure:doFail};function onConnect(){$(textoNotificacao).removeClass(_0x1696("0x26"))[_0x1696("0x20")](_0x1696("0x21")),textoNotificacao[_0x1696("0x4d")]="Conectado!";var a=document[_0x1696("0x33")](_0x1696("0x42")),x=document.querySelector(_0x1696("0x52"))[_0x1696("0x4d")][_0x1696("0x2c")]().replace(/[á]/g,"a")[_0x1696("0x22")](/[ã]/g,"a").replace(/[é]/g,"e")[_0x1696("0x22")](/[ó]/g,"o")[_0x1696("0x22")](/[õ]/g,"o")[_0x1696("0x22")](/[ç]/g,"c")[_0x1696("0xb")](/[a-z0-9]/g).join("");switch(x){case _0x1696("0x15"):x="lie";break;case _0x1696("0x2"):x=_0x1696("0x27");break;case _0x1696("0x2a"):x=_0x1696("0x14");break;case _0x1696("0x0"):x="secretaria2";break;case"labdeconcepcaoeanalisededispositivoseletricos":x="lcade";break;case"labsima":x=_0x1696("0x49");break;case _0x1696("0x7"):x=_0x1696("0x2e");break;case"labdequalidadedeenergia":x=_0x1696("0x48");break;case"labdesistemasmotrizesb":x="labmotriz2";break;case _0x1696("0x4"):x=_0x1696("0x35");break;case _0x1696("0x1f"):x=_0x1696("0x40");break;case _0x1696("0x3a"):x=_0x1696("0x41");break;case _0x1696("0x17"):x=_0x1696("0x3d");break;case _0x1696("0x16"):x=_0x1696("0x46");break;case"salaprof2":x="sala5";break;case _0x1696("0x36"):x="sala6";break;case _0x1696("0x28"):x=_0x1696("0x50");break;case _0x1696("0x19"):x=_0x1696("0x3c");break;case _0x1696("0x47"):x=_0x1696("0x9");break;case _0x1696("0x4f"):x="sala10"}for(var e=1;e<a.length+1;e++)client[_0x1696("0x34")]("ceamazon/"+x+"/c"+e);acionaLampadas(x,a,client)}function acionaLampadas(a,x,e){var o="";$(x)[_0x1696("0x1c")]((function(x){x+=1,$(this).change((function(){$(this).is(":checked")?((o=new(Paho[_0x1696("0x2f")])("on"+x))[_0x1696("0x3")]="ceamazon/"+a+"/c"+x,o.qos=1,o[_0x1696("0x1d")]=!0,e[_0x1696("0x5")](o)):((o=new Paho.Message(_0x1696("0x31")+x))[_0x1696("0x3")]=_0x1696("0x25")+a+"/c"+x,o.qos=1,o[_0x1696("0x1d")]=!0,e[_0x1696("0x5")](o))}))}))}function mudaInterruptores(a){var x=document[_0x1696("0x33")](".interruptor .interruptor-lampada"),e=document[_0x1696("0x6")](_0x1696("0x13")),o=document.querySelector(_0x1696("0x4e")),s=document.querySelector(".interruptor #lampadas3"),t=document[_0x1696("0x6")](_0x1696("0x1"));x[_0x1696("0x44")]((function(){switch(a){case"on1":e[_0x1696("0x24")]=!0;break;case _0x1696("0x2b"):e[_0x1696("0x24")]=!1;break;case _0x1696("0x29"):o[_0x1696("0x24")]=!0;break;case _0x1696("0x4a"):o[_0x1696("0x24")]=!1;break;case _0x1696("0x4b"):s[_0x1696("0x24")]=!0;break;case _0x1696("0x23"):s[_0x1696("0x24")]=!1;break;case"on4":t[_0x1696("0x24")]=!0;break;case _0x1696("0x38"):t[_0x1696("0x24")]=!1}}))}function mudaIconesLampadas(a){var x=document[_0x1696("0x33")](_0x1696("0x8")),e=document[_0x1696("0x33")](".img-sala [data-dispositivo='lampadas2']"),o=document[_0x1696("0x33")](_0x1696("0x45")),s=document[_0x1696("0x33")](_0x1696("0xf")),t=_0x1696("0x4c"),c=_0x1696("0x1e");x[_0x1696("0x44")]((function(x){a==_0x1696("0x39")?x[_0x1696("0x12")][_0x1696("0x32")]=t:a==_0x1696("0x2b")&&(x[_0x1696("0x12")][_0x1696("0x32")]=c)})),e[_0x1696("0x44")]((function(x){a==_0x1696("0x29")?x.style[_0x1696("0x32")]=t:a==_0x1696("0x4a")&&(x[_0x1696("0x12")][_0x1696("0x32")]=c)})),o[_0x1696("0x44")]((function(x){a==_0x1696("0x4b")?x.style[_0x1696("0x32")]=t:"off3"==a&&(x[_0x1696("0x12")].background=c)})),s[_0x1696("0x44")]((function(x){a==_0x1696("0xa")?x[_0x1696("0x12")][_0x1696("0x32")]=t:a==_0x1696("0x38")&&(x[_0x1696("0x12")][_0x1696("0x32")]=c)}))}client[_0x1696("0xc")](options);