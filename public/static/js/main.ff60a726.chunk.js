(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{196:function(e,t,a){e.exports=a(336)},201:function(e,t,a){},203:function(e,t,a){},336:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),o=a.n(l),i=(a(201),a(18)),c=a(19),s=a(21),m=a(20),u=a(22),h=(a(203),a(11)),p=(a(205),a(34)),d=a(49),f=a.n(d);Object(h.withStyles)({root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(p.a,{position:"static",style:{backgroundColor:"#00c1b8"}},r.a.createElement(p.d,null,r.a.createElement(p.c,{className:t.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(f.a,null)),r.a.createElement(p.e,{variant:"h6",color:"inherit",className:t.grow},"Classroom Quality Ref"),r.a.createElement(p.b,{color:"inherit"},"Login"))))});var E=a(45),b=a.n(E),g=a(47),v=a.n(g),y=a(23),C=a.n(y),w=a(27),O=a.n(w),j=a(114),k=a.n(j),S=a(25),x=a.n(S),B=a(32),T=a.n(B),A=a(17),M=a.n(A),N=a(33),I=a.n(N),L=a(115),z=a.n(L),R=a(116),G=a.n(R),D=a(50),H=a.n(D),W=a(31),J=a.n(W);Object(h.createMuiTheme)({palette:{primary:{main:"#ffffff"},secondary:H.a}});var P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement(J.a,{open:this.state.open},r.a.createElement("div",{style:{position:"fixed",top:"35%",left:"50%",transform:"translate(-50%, -50%)"},className:e.paper},r.a.createElement(M.a,{xs:12,container:!0,alignItems:"center",direction:"column",justify:"flex-start"},r.a.createElement(C.a,{variant:"subtitle2",gutterBottom:!0},"A positive classroom climate leads to long-term benefits for children\u2019s academic achievement, social competence, and self-regulation. It allows children to:"),r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Components"),r.a.createElement(C.a,{variant:"subtitle2",gutterBottom:!0},r.a.createElement("br",null),"- More behavior-approving language",r.a.createElement("br",null),"- Less behavior-disapproving language",r.a.createElement("br",null),"- Concrete and specific praise",r.a.createElement("br",null),"-Absense of threats and sarcasm"),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"h6",gutterBottom:!0},"Benefits"),r.a.createElement(C.a,{variant:"subtitle2",gutterBottom:!0},"- feel valued and safe",r.a.createElement("br",null),"- interact more with teachers and peers",r.a.createElement("br",null),"-take academic risks",r.a.createElement("br",null),"-deeply engage in learning")))))}}]),t}(r.a.Component),F=Object(h.withStyles)(function(e){return{paper:{position:"absolute",width:"40%",backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,borderRadius:8}}})(P),Q=a(46),U=a.n(Q),$=a(111),q=a.n($),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){this.props.classes;var e=this.state.anchorEl;return r.a.createElement("div",null,r.a.createElement(U.a,{variant:"extendedFab","aria-label":"Delete","aria-owns":e?"simple-menu":void 0,color:"secondary","aria-haspopup":"true",onClick:this.handleClick},r.a.createElement(q.a,null),"Transition Type"),r.a.createElement(T.a,{id:"simple-menu",anchorEl:e,open:Boolean(e),onClose:this.handleClose},r.a.createElement(x.a,{onClick:this.handleClose},"Lull"),r.a.createElement(x.a,{onClick:this.handleClose},"Within ClassRoom"),r.a.createElement(x.a,{onClick:this.handleClose},"External Classroom")))}}]),t}(r.a.Component),V=a(48),X=a.n(V),Y=a(112),Z=a.n(Y),_=(a(332),a(73)),ee=a.n(_),te=a(113),ae=a.n(te),ne=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={anchorEl:null,percentage:0,isOn:!1,time:0,start:0},a.handleClick=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.onStart=function(){a.setState({isOn:!a.state.isOn})},a.onCancel=function(){a.setState({isOn:!1,time:0,percentage:0})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;this.props.classes,this.state.anchorEl;return this.state.isOn&&setTimeout(function(){e.setState({percentage:(e.state.percentage+1)%100})},100),r.a.createElement("div",{style:{width:400,marginTop:20}},r.a.createElement(Z.a,{percentage:this.state.percentage,text:0===this.state.time?"0:00":ae()(this.state.time),initialAnimation:!1,styles:{path:{stroke:"rgba(29, 233, 182, 1)"},text:{fill:"#000",fontSize:"16px"}}}),r.a.createElement(ee.a,{container:!0,alignItems:"center",justify:"center",direction:"row"},r.a.createElement(I.a,{variant:"fab",mini:!0,color:"primary","aria-label":"Cancel",onClick:this.onCancel},"Cancel"),r.a.createElement(I.a,{variant:"fab",color:"secondary","aria-label":"Start",onClick:this.onStart},this.state.isOn?"Stop":"Start")))}}]),t}(r.a.Component),re=Object(h.createMuiTheme)({palette:{primary:{main:"#ffffff"},secondary:H.a}}),le=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={auth:!0,anchorEl:null,help:!1},a.handleChange=function(e){a.setState({auth:e.target.checked})},a.handleMenu=function(e){a.setState({anchorEl:e.currentTarget})},a.handleClose=function(){a.setState({anchorEl:null})},a.handleHelpModal=function(){a.setState({help:!0})},a.handleClickAway=function(){a.setState({help:!1})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.auth,n=t.anchorEl,l=Boolean(n);return r.a.createElement(h.MuiThemeProvider,{theme:re},r.a.createElement("div",{className:e.root},r.a.createElement(b.a,{position:"static",color:"default"},r.a.createElement(v.a,null,r.a.createElement(O.a,{className:e.menuButton,color:"inherit","aria-label":"Menu"},r.a.createElement(f.a,null)),r.a.createElement(C.a,{variant:"h6",color:"inherit",className:e.grow},"Transition Time"),a&&r.a.createElement("div",null,r.a.createElement(O.a,{"aria-owns":l?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleMenu,color:"inherit"},r.a.createElement(k.a,null)),r.a.createElement(T.a,{id:"menu-appbar",anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},open:l,onClose:this.handleClose},r.a.createElement(x.a,{onClick:this.handleClose},"Profile"),r.a.createElement(x.a,{onClick:this.handleClose},"My account"))))),this.state.help?r.a.createElement(X.a,{onClickAway:this.handleClickAway}," ",r.a.createElement(F,null)):r.a.createElement("div",null),r.a.createElement("main",{style:{flex:1}},r.a.createElement(M.a,{container:!0,alignItems:"center",justify:"center",direction:"column"},r.a.createElement("div",{style:{margin:20}}),r.a.createElement(K,null),r.a.createElement(ne,null))),r.a.createElement("footer",null,r.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between",direction:"row"},r.a.createElement(M.a,{item:!0,xs:2},r.a.createElement(O.a,{"aria-owns":l?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleHelpModal,color:"inherit"},r.a.createElement(z.a,{color:"secondary",fontSize:"large"})),r.a.createElement(O.a,{"aria-owns":l?"menu-appbar":void 0,"aria-haspopup":"true",onClick:this.handleNotes,color:"inherit"},r.a.createElement(G.a,{color:"secondary",fontSize:"large"}))),r.a.createElement(M.a,{item:!0,xs:8}),r.a.createElement(M.a,{item:!0,xs:2},r.a.createElement(M.a,{container:!0,alignItems:"center",justify:"space-between",direction:"column"},"Start Time: ",(new Date).toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0}),r.a.createElement("br",null),r.a.createElement(I.a,{variant:"outlined",color:"secondary",style:{margin:10}},"Complete Observation")))))))}}]),t}(r.a.Component),oe=Object(h.withStyles)({root:{flexGrow:1,display:"flex",minHeight:"100vh",flexDirection:"column"},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}})(le),ie=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(oe,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[196,2,1]]]);
//# sourceMappingURL=main.ff60a726.chunk.js.map