(this["webpackJsonplightspeed-react"]=this["webpackJsonplightspeed-react"]||[]).push([[0],{20:function(e,n,t){},21:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var r,c,i,a,o,s,d,l,u,b,f,j,p,m,x,O,g,h=t(1),w=t(12),v=t.n(w),y=(t(20),t(6)),k=t(7),T=t(5),S=t(4),C=(t(21),t(0)),D=Object(h.createContext)(),P=function(e,n){switch(n.type){case"initSocket":return Object(S.a)(Object(S.a)({},e),{},{socket:new WebSocket(n.url),url:n.url});case"renewSocket":var t=2*e.wsTimeoutDuration;return t>1e4&&(t=1e4),Object(S.a)(Object(S.a)({},e),{},{socket:new WebSocket(e.url),wsTimeoutDuration:t});case"updateTimeout":return Object(S.a)(Object(S.a)({},e),{},{connectTimeout:n.timeout});case"clearTimeout":return clearTimeout(e.connectTimeout),Object(S.a)({},e);case"resetTimeoutDuration":return Object(S.a)(Object(S.a)({},e),{},{wsTimeoutDuration:250});default:return Object(S.a)({},e)}},R={url:"",socket:null,wsTimeoutDuration:250,connectTimeout:null},F=function(e){var n=e.children,t=Object(h.useReducer)(P,R),r=Object(T.a)(t,2),c=r[0],i=r[1],a=c.socket,o=c.wsTimeoutDuration;Object(h.useEffect)((function(){Object(k.a)(Object(y.a)().mark((function e(){var n,t;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("config.json");case 3:return n=e.sent,e.next=6,n.json();case 6:t=e.sent,Object.prototype.hasOwnProperty.call(t,"wsUrl")?i({type:"initSocket",url:t.wsUrl}):console.error("config.json is invalid"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}),[]),Object(h.useEffect)((function(){a&&(a.onopen=function(){i({type:"resetTimeout"}),i({type:"resetTimeoutDuration"}),console.log("Connected to websocket")},a.onclose=function(e){var n=e.reason;console.log("Socket is closed. Reconnect will be attempted in ".concat(Math.min(o/1e3)," second. ").concat(n));var t=setTimeout((function(){a&&a.readyState!==WebSocket.CLOSED||i({type:"renewSocket"})}),o);i({type:"updateTimeout",timeout:t})},a.onerror=function(){console.error("Socket encountered error. Closing socket."),a.close()})}),[a]);var s={socket:c.socket};return Object(C.jsx)(D.Provider,{value:s,children:n})},E=Object(h.createContext)(),z=function(e){var n=e.children,t=Object(h.useState)(new RTCPeerConnection),r={pc:Object(T.a)(t,1)[0]};return Object(C.jsx)(E.Provider,{value:r,children:n})},J=t(2),N=t(3),A=N.b.video(r||(r=Object(J.a)(["\n  border-radius: 0px;\n  z-index: 10;\n  width: 100%;\n"]))),I=function(e){var n=e.src,t=Object(h.useRef)(null);return Object(h.useEffect)((function(){n&&(t.current.srcObject=n)}),[n]),Object(C.jsx)(A,{ref:t,playsInline:!0,autoPlay:!0,controls:!0,muted:!0,poster:"/images/videoPoster.jpg"})},L=N.b.div(c||(c=Object(J.a)(["\n  width: 100%;\n  background-color: #242731;\n  text-align: left;\n  padding-top: 4em;\n  margin-top: -3em;\n  border-radius: 32px;\n"]))),W=N.b.div(i||(i=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin: 0 2em 3em 2em;\n\n  img {\n    height: 130px;\n    width: 130px;\n    \n\n    @media only screen and (max-width: 1024px) {\n      display: none;\n    }\n  }\n"]))),B=N.b.div(a||(a=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),U=N.b.div(o||(o=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n  padding-left: 2rem;\n"]))),M=(N.b.h4(s||(s=Object(J.a)(["\n  font-size: 30px;\n"]))),N.b.div(d||(d=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  height: 35px;\n  width: 110px;\n  \n\n  border-radius: 8px;\n\n  i {\n    margin: auto 0;\n  }\n\n  span {\n    margin: auto 0;\n    font-weight: 600;\n  }\n"])))),_=N.b.div(l||(l=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  height: 35px;\n  width: 110px;\n  text-align: center;\n  background-color: #ff754c;\n  border-radius: 8px;\n\n  i {\n    margin: auto 0;\n  }\n\n  span {\n    margin: auto 0;\n  }\n"]))),q=function(e){var n=e.viewers;return Object(C.jsxs)(L,{children:[Object(C.jsxs)(U,{children:[Object(C.jsxs)(_,{children:[Object(C.jsx)("i",{className:"fas fa-construction badge-icon"}),Object(C.jsx)("span",{children:"Alpha"})]}),Object(C.jsxs)(M,{children:[Object(C.jsx)("i",{className:"fas fa-user-friends"}),Object(C.jsx)("span",{children:n})]})]}),Object(C.jsx)(W,{children:Object(C.jsx)(B,{})})]})},G=(N.b.div(u||(u=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  color: #fff;\n  margin: 0 2.5em;\n  min-width: 25em;\n\n  @media only screen and (max-width: 1024px) {\n    margin: 1em 0.3em;\n    min-width: unset;\n  }\n"]))),N.b.div(b||(b=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background: #242731;\n  border: 0.5px solid rgba(240, 243, 246, 0.2);\n  border-radius: 32px;\n"]))),N.b.div(f||(f=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 2rem;\n\n  h6 {\n    margin: 1em 0;\n  }\n\n  .arrow {\n    margin-top: auto;\n    margin-bottom: auto;\n    transform: rotate(45deg);\n  }\n"]))),N.b.div(j||(j=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  border-top: 0.5px solid rgba(240, 243, 246, 0.1);\n  border-radius: 32px;\n\n  i {\n    font-weight: 900px;\n  }\n\n  @media only screen and (max-width: 1024px) {\n    min-height: 300px;\n  }\n"]))),N.b.header(p||(p=Object(J.a)(["\n  background: #1f2128;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  border: 0.5px solid rgba(240, 243, 246, 0.1);\n  padding: 1em;\n"])))),H=N.b.div(m||(m=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  h1 {\n    font-weight: 600;\n    font-size: 2em;\n    color: white;\n  }\n\n  img {\n    height: 90px;\n    margin: auto;\n  }\n"]))),K=function(){return Object(C.jsx)(G,{children:Object(C.jsx)(H,{children:Object(C.jsx)("h1",{children:"Red Agency Radio"})})})},Q=N.b.div(x||(x=Object(J.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  margin: 2em;\n\n  @media only screen and (max-width: 1024px) {\n    margin: 1.5em 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n"]))),V=N.b.div(O||(O=Object(J.a)(["\n  display: flex;\n  flex-direction: column;\n  color: #fff;\n  margin: 0 2.5em;\n\n  @media only screen and (max-width: 1024px) {\n    margin: 0.3em;\n  }\n"]))),X=function(e,n){switch(n.type){case"initStream":return Object(S.a)(Object(S.a)({},e),{},{stream:n.stream});case"info":return Object(S.a)(Object(S.a)({},e),{},{viewers:n.viewers});default:return Object(S.a)({},e)}},Y={stream:null,viewers:null},Z=function(){var e=Object(h.useReducer)(X,Y),n=Object(T.a)(e,2),t=n[0],r=n[1],c=function(){var e=Object(h.useContext)(E);if(!e)throw new Error("useRTC must be nested in RTCProvider");return e}().pc,i=function(){var e=Object(h.useContext)(D);if(!e)throw new Error("useSocket must be nested in SocketProvider");return e}().socket;return c.addTransceiver("audio",{direction:"recvonly"}),c.addTransceiver("video",{direction:"recvonly"}),c.ontrack=function(e){var n=e.track.kind,t=e.streams;"video"===n&&r({type:"initStream",stream:t[0]})},c.onicecandidate=function(e){e.candidate&&(console.log("Candidate success"),i.send(JSON.stringify({event:"candidate",data:e.candidate})))},i&&(i.onmessage=function(){var e=Object(k.a)(Object(y.a)().mark((function e(n){var t,a,o;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=JSON.parse(n.data)){e.next=4;break}return console.log("Failed to parse msg"),e.abrupt("return");case 4:if(a=t.data){e.next=8;break}return console.log("Failed to parse offer msg data"),e.abrupt("return");case 8:e.t0=t.event,e.next="offer"===e.t0?11:"candidate"===e.t0?25:"info"===e.t0?28:29;break;case 11:return console.log("Offer"),c.setRemoteDescription(a),e.prev=13,e.next=16,c.createAnswer();case 16:o=e.sent,c.setLocalDescription(o),i.send(JSON.stringify({event:"answer",data:o})),e.next=24;break;case 21:e.prev=21,e.t1=e.catch(13),console.error(e.t1.message);case 24:return e.abrupt("return");case 25:return console.log("Candidate"),c.addIceCandidate(a),e.abrupt("return");case 28:r({type:"info",viewers:t.data.no_connections});case 29:case"end":return e.stop()}}),e,null,[[13,21]])})));return function(n){return e.apply(this,arguments)}}()),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(K,{}),Object(C.jsx)(Q,{children:Object(C.jsxs)(V,{children:[Object(C.jsx)(I,{src:t.stream}),Object(C.jsx)(q,{viewers:t.viewers})]})})]})},$=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))},ee=Object(N.a)(g||(g=Object(J.a)(["\n    *{\n        padding: 0;\n        margin:0;\n        border: 0;\n        font-family: 'Poppins', sans-serif;\n        font-style: normal;\n        text-align:center;\n    }\n\n    body{\n        background-color: #1f2128;\n    }\n\n    .App{\n        text-align:center;\n    }\n\n    h4 {\n  font-weight: 500;\n  font-size: 32px;\n  line-height: 48px;\n  letter-spacing: -0.5px;\n}\n\nh6 {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 24px;\n}\n"])));v.a.render(Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(ee,{}),Object(C.jsx)(F,{children:Object(C.jsx)(z,{children:Object(C.jsx)(Z,{})})})]}),document.getElementById("root")),$()}},[[25,1,2]]]);
//# sourceMappingURL=main.b3c08864.chunk.js.map