(this.webpackJsonpWeb_Frontend=this.webpackJsonpWeb_Frontend||[]).push([[0],{404:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(22),r=a.n(i),s=a(10),o=a(38),l=a(29),d=a(437),j=a(406),b=a(441),u=a(442),h=a.p+"static/media/headingImg.d15ef43b.jpg",m=a(1),p=Object(d.a)((function(e){return{root:{flexDirection:"column",alignItems:"center",display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(8),width:e.spacing(140),height:e.spacing(65)}},margin:{margin:e.spacing(1),backgroundColor:"#00587A"},img:{width:e.spacing(50),height:e.spacing(40)},grids:{marginLeft:e.spacing(9),marginTop:e.spacing(6)}}}));function O(){var e=p();return Object(m.jsx)("div",{className:e.root,children:Object(m.jsx)(j.a,{elevation:3,children:Object(m.jsxs)(b.a,{container:!0,spacing:1,className:e.grids,children:[Object(m.jsxs)(b.a,{item:!0,xs:6,children:[Object(m.jsxs)("h1",{className:"main-heading",children:["Smart Garbage ",Object(m.jsx)("br",{}),"Collection"]}),Object(m.jsx)(u.a,{variant:"contained",color:"primary",href:"/Signin",size:"large",className:e.margin,children:"Sign in"}),Object(m.jsx)(u.a,{variant:"contained",color:"primary",href:"/Signup",size:"large",className:e.margin,children:"Sign up"})]}),Object(m.jsx)(b.a,{item:!0,xs:6,children:Object(m.jsx)("img",{src:h,alt:"heading image",className:e.img})})]})})})}var x=a(28),g=a(444),f=a(443),v=a(467),w=a(468),y=a(449),N=a(130),S=a.n(N),C=a(106),k=a(21),I=a.n(k),B=a(36),F=B.b().shape({username:B.c().required("Username is required"),password:B.c().required("Password is required")}),P=a(42),E=a(89),A=Object(n.createContext)(""),W=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#00587A"},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#00587A"}}}));var T=function(){var e,t,a=Object(n.useContext)(A).setAuthState,c=Object(l.g)(),i=W(),r=Object(P.d)({resolver:Object(E.a)(F)}),s=r.register,o=r.handleSubmit,d=r.formState.errors;return Object(m.jsxs)(f.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(g.a,{}),Object(m.jsxs)("div",{className:i.paper,children:[Object(m.jsx)(v.a,{className:i.avatar,children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(m.jsxs)("form",{className:i.form,onSubmit:o((function(e){I.a.post("http://54.84.182.51:5000/Signin",{adminusername:e.username,adminpassword:e.password}).then((function(e){e.data.error?alert(e.data.error):(localStorage.setItem("token",e.data.token),localStorage.setItem("name",e.data.name),a(!0),c.push("/Dashboard"))}))})),children:[Object(m.jsx)(w.a,Object(x.a)({"data-testid":"usernameInput",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0},s("username"))),Object(m.jsx)("div",{className:"error","data-testid":"errorUsername",children:null===(e=d.username)||void 0===e?void 0:e.message}),Object(m.jsx)(w.a,Object(x.a)({"data-testid":"passwordInput",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"},s("password"))),Object(m.jsx)("div",{className:"error","data-testid":"errorPassword",children:null===(t=d.password)||void 0===t?void 0:t.message}),Object(m.jsx)(u.a,{"data-testid":"signinButton",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Sign in"}),Object(m.jsx)(b.a,{container:!0,children:Object(m.jsx)(b.a,{item:!0,children:Object(m.jsx)(y.a,{href:"/Signup",variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})},D=B.b().shape({firstName:B.c().required("First name is required"),lastName:B.c(),username:B.c().required("Username is required").max(20,"Must be 20 characters or less"),password:B.c().required("Password is required").min(5,"Must be 5 characters or more")}),U=Object(d.a)((function(e){return{paper:{marginTop:e.spacing(10),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:"#00587A"},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2),backgroundColor:"#00587A"},textFields:{marginTop:e.spacing(3)}}}));var z=function(){var e,t,a,n,c=Object(l.g)(),i=U(),r=Object(P.d)({resolver:Object(E.a)(D)}),s=r.register,o=r.handleSubmit,d=r.formState.errors;return Object(m.jsxs)(f.a,{component:"main",maxWidth:"xs",children:[Object(m.jsx)(g.a,{}),Object(m.jsxs)("div",{className:i.paper,children:[Object(m.jsx)(v.a,{className:i.avatar,children:Object(m.jsx)(S.a,{})}),Object(m.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(m.jsxs)("form",{className:i.form,onSubmit:o((function(e){I.a.post("http://54.84.182.51:5000/Signup",{adminfname:e.firstName,adminlname:e.lastName,adminusername:e.username,adminpassword:e.password}).then((function(e){e.data.error?alert(e.data.error):c.push("/Signin")}))})),children:[Object(m.jsxs)(b.a,{container:!0,spacing:2,className:i.form,children:[Object(m.jsxs)(b.a,{item:!0,xs:12,sm:6,children:[Object(m.jsx)(w.a,Object(x.a)({"data-testid":"fnameInput",autoComplete:"fname",name:"firstName",variant:"outlined",fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0},s("firstName"))),Object(m.jsx)("div",{className:"error","data-testid":"errorFname",children:null===(e=d.firstName)||void 0===e?void 0:e.message})]}),Object(m.jsxs)(b.a,{item:!0,xs:12,sm:6,children:[Object(m.jsx)(w.a,Object(x.a)({"data-testid":"lnameInput",variant:"outlined",fullWidth:!0,id:"lastName",label:"Last Name",name:"lastName",autoComplete:"lname"},s("lastName"))),Object(m.jsx)("div",{className:"error","data-testid":"errorLname",children:null===(t=d.lastName)||void 0===t?void 0:t.message})]})]}),Object(m.jsx)(w.a,Object(x.a)({className:i.textFields,"data-testid":"usernameInput",variant:"outlined",margin:"normal",fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0},s("username"))),Object(m.jsx)("div",{className:"error","data-testid":"errorUsername",children:null===(a=d.username)||void 0===a?void 0:a.message}),Object(m.jsx)(w.a,Object(x.a)({className:i.textFields,"data-testid":"passwordInput",variant:"outlined",margin:"normal",fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"},s("password"))),Object(m.jsx)("div",{className:"error","data-testid":"errorPassword",children:null===(n=d.password)||void 0===n?void 0:n.message}),Object(m.jsx)(u.a,{"data-testid":"signUpButton",type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,children:"Sign Up"}),Object(m.jsx)(b.a,{container:!0,children:Object(m.jsx)(b.a,{item:!0,children:Object(m.jsx)(y.a,{href:"/Signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})},q=a(450),R=a(451),L=Object(d.a)((function(e){return{appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,backgroundColor:"#008891"},text:{color:"white",fontFamily:'"Righteous", cursive'}}}));function _(e){var t=L();return Object(m.jsx)(q.a,{position:"fixed",className:t.appBar,children:Object(m.jsx)(R.a,{children:Object(m.jsx)(C.a,{variant:"h4",noWrap:!0,className:t.text,children:e.section})})})}var V=a(465),G=a(407),H=a(453),M=a(454),J=a(452),Z=a(448),X=a(101),Y=a.n(X),K=a(208),Q=a.n(K),$=a(207),ee=a.n($),te=a(209),ae=a.n(te),ne=a.p+"static/media/user.d54b5cea.png",ce=(a(355),Object(d.a)((function(e){return{user:{margin:"auto",marginTop:e.spacing(8),marginBottom:e.spacing(1),width:e.spacing(7),height:e.spacing(7)},text:{textAlign:"center"}}})));function ie(e){var t=ce();return Object(m.jsxs)("div",{children:[Object(m.jsx)(v.a,{className:t.user,alt:e.name,src:ne}),Object(m.jsx)("h3",{className:t.text,children:e.name})]})}var re=a(210),se=a.n(re),oe=Object(d.a)((function(e){return{drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundColor:"#0F3057"},text:{color:"#E7E7DE",fontFamily:'"Righteous", cursive'},button:{marginTop:e.spacing(3)}}})),le=["./Overview","./Customize","./SentRequests","./MapView"],de=[Object(m.jsx)(ee.a,{fontSize:"large",style:{color:"#E7E7DE"}}),Object(m.jsx)(Q.a,{fontSize:"large",style:{color:"#E7E7DE"}}),Object(m.jsx)(Y.a,{fontSize:"large",style:{color:"#E7E7DE"}}),Object(m.jsx)(ae.a,{fontSize:"large",style:{color:"#E7E7DE"}})];function je(e){return de[e]}function be(){var e=Object(n.useContext)(A),t=e.authState,a=e.setAuthState,c=Object(l.g)(),i=oe();return Object(m.jsxs)(V.a,{className:i.drawer,variant:"permanent",classes:{paper:i.drawerPaper},anchor:"left",children:[Object(m.jsx)(ie,{name:localStorage.getItem("name")}),Object(m.jsx)(J.a,{}),Object(m.jsx)(Z.a,{children:["Overview","Customize","Sent Requests","Map view"].map((function(e,t){return Object(m.jsxs)(G.a,{button:!0,component:o.b,to:le[t],children:[Object(m.jsx)(H.a,{children:je(t)}),Object(m.jsx)("h1",{children:Object(m.jsx)(M.a,{primary:e,className:i.text})})]},e)}))}),!0===t?Object(m.jsx)(u.a,{variant:"contained",color:"default",size:"small",startIcon:Object(m.jsx)(se.a,{}),className:i.button,onClick:function(){localStorage.removeItem("token"),localStorage.removeItem("name"),a(!1),c.push("/")},children:"Log out"}):null]})}var ue=a(7),he=a(459),me=a(462),pe=a(456),Oe=a(458),xe=a(460),ge=a(466),fe=a(461),ve=a(469),we=a(455),ye=a(447),Ne=a(463),Se=Object(d.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function Ce(){var e=Se(),t=c.a.useState(""),a=Object(s.a)(t,2),n=a[0],i=a[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(ye.a,{className:e.formControl,children:[Object(m.jsx)(ve.a,{id:"demo-simple-select-label",children:"Select"}),Object(m.jsxs)(Ne.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,onChange:function(e){i(e.target.value)},children:[Object(m.jsx)(we.a,{value:1,children:"Collector1"}),Object(m.jsx)(we.a,{value:2,children:"Collector2"}),Object(m.jsx)(we.a,{value:3,children:"Collector3"}),Object(m.jsx)(we.a,{value:4,children:"Collector4"}),Object(m.jsx)(we.a,{value:5,children:"Collector5"}),Object(m.jsx)(we.a,{value:6,children:"Collector6"}),Object(m.jsx)(we.a,{value:7,children:"Collector7"}),Object(m.jsx)(we.a,{value:8,children:"Collector8"}),Object(m.jsx)(we.a,{value:9,children:"Collector9"})]})]})})}var ke=a(219),Ie=a(457),Be=a(87),Fe=a.n(Be),Pe=a(216),Ee=Object(d.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function Ae(){var e=Ee(),t=c.a.useState(""),a=Object(s.a)(t,2),n=a[0],i=a[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(ye.a,{className:e.formControl,children:[Object(m.jsx)(ve.a,{id:"demo-simple-select-label",children:"Select a bin"}),Object(m.jsxs)(Ne.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,onChange:function(e){i(e.target.value)},children:[Object(m.jsx)(we.a,{value:1,children:"Food"}),Object(m.jsx)(we.a,{value:2,children:"Paper"}),Object(m.jsx)(we.a,{value:3,children:"Polythene"}),Object(m.jsx)(we.a,{value:4,children:"Other"})]})]})})}var We=[{id:"unit_id",label:"Unit ID",minWidth:100},{id:"bin",label:"Bin",minWidth:100},{id:"fill_level",label:"Fill Level (%)",minWidth:100,align:"right"},{id:"color",label:"",minWidth:50,align:"right"},{id:"compaction",label:"Compaction",minWidth:100,align:"right"},{id:"location",label:"Location",minWidth:100,align:"right"},{id:"battery",label:"Battery",minWidth:100,align:"right"}],Te=Object(ue.a)((function(e){return{head:{backgroundColor:"#008891",color:e.palette.common.white,fontSize:"1.3rem",fontFamily:'"Righteous", cursive'},body:{fontSize:14}}}))(pe.a),De=Object(d.a)((function(e){return{root:{width:"100%"},container:{maxHeight:350,marginTop:e.spacing(5)},tableHead:{color:"#0F3057"},main:{display:"flex",alignItems:"center"},myroot:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},formControl:{margin:e.spacing(1),minWidth:200,backgroundColor:"white"},graphroot:{flexGrow:1},paper:{marginTop:e.spacing(3),padding:e.spacing(10),textAlign:"left",backgroundColor:"white"}}}));function Ue(e,t){if("color"===e){if("g"===t)return"#54E346";if("y"===t)return"yellow";if("r"===t)return"#F92727"}}function ze(){var e=De(),t=Object(n.useState)(0),a=Object(s.a)(t,2),i=a[0],r=a[1],o=Object(n.useState)(10),l=Object(s.a)(o,2),d=l[0],u=l[1],h=c.a.useState(""),p=Object(s.a)(h,2),O=p[0],x=p[1],g=[],f=Object(n.useState)([]),v=Object(s.a)(f,2),w=v[0],y=v[1],N=Object(n.useState)([]),S=Object(s.a)(N,2),C=S[0],k=S[1],B=Object(n.useState)(""),F=Object(s.a)(B,2),P=F[0],E=F[1],A=Object(n.useState)([]),W=Object(s.a)(A,2),T=W[0],D=W[1];Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Bins/get",{headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){y(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Units/getAll").then((function(e){k(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Bins/getByUnitId?unitID=".concat(P)).then((function(e){D(e.data)})).catch((function(e){console.log(e)}))}),[P]);var U=[],z=[],q=[],R=[],L=[];T.map((function(e){U.push(e.category),z.push(e.fill_level),R.push(e.battery),L.push(e.compaction_cycles),"r"==e.color&&q.push("rgba(249, 39, 39, 1)"),"y"==e.color&&q.push("rgba(255, 255, 0, 1)"),"g"==e.color&&q.push("rgba(84, 227, 70, 1)")}));var _={labels:[U[0],U[1],U[2],U[3]],datasets:[{label:"Fill levels of bins",data:[z[0],z[1],z[2],z[3]],backgroundColor:[q[0],q[1],q[2],q[3]]}]};return C.map((function(e){var t=e.id,a=e.location,n=[],c=[],i=[],r=[],s=[],o=[];w.map((function(e){e.unit_id===t&&(n.push(e.category),c.push(e.fill_level),i.push(e.compaction_cycles),s.push(e.battery),r.push("collector"),o.push(e.color))}));for(var l=0;l<4;l++){var d=n[l],j=c[l],b=i[l],u=s[l],h=r[l],m=o[l],p={unit_id:t,bin:d,fill_level:j,color:m,compaction:b,assign:h,location:a,battery:u};g.push(p)}})),Object(m.jsxs)("div",{children:[Object(m.jsxs)(b.a,{container:!0,spacing:1,className:e.main,children:[Object(m.jsx)(b.a,{item:!0,xs:6,children:Object(m.jsxs)(j.a,{component:"form",className:e.myroot,children:[Object(m.jsx)(Ie.a,{className:e.iconButton,"aria-label":"search",children:Object(m.jsx)(Fe.a,{})}),Object(m.jsx)(ke.a,{className:e.input,placeholder:"Search by unit Id",inputProps:{"aria-label":"search by unit id"},onChange:function(e){E(e.target.value)}})]})}),Object(m.jsx)(b.a,{item:!0,xs:6,children:Object(m.jsxs)(ye.a,{className:e.formControl,children:[Object(m.jsx)(ve.a,{id:"demo-simple-select-label",children:"Select View"}),Object(m.jsxs)(Ne.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:O,onChange:function(e){x(e.target.value)},children:[Object(m.jsx)(we.a,{value:"Table View",children:"Table View"}),Object(m.jsx)(we.a,{value:"Graph View",children:"Graph View"})]})]})})]}),"Graph View"==O?Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:e.graphroot,children:Object(m.jsxs)(b.a,{container:!0,spacing:3,children:[Object(m.jsxs)(b.a,{item:!0,xs:7,children:[Object(m.jsxs)("h2",{children:["Unit ID: ",P]}),Object(m.jsx)(j.a,{className:e.paper,children:Object(m.jsx)(Pe.a,{data:_,options:{responsive:!0,scales:{yAxes:[{ticks:{min:0,max:100,stepSize:1}}]}}})})]}),Object(m.jsxs)(b.a,{item:!0,xs:5,children:[Object(m.jsx)("h2",{children:"Bin Details"}),Object(m.jsxs)(j.a,{className:e.paper,children:[Object(m.jsx)("p",{children:"1. Food Bin"}),Object(m.jsxs)("p",{children:["- Battery(",R[0],") Compaction Cycles(",L[0],") "]}),Object(m.jsx)("p",{children:"2. Paper Bin"}),Object(m.jsxs)("p",{children:["- Battery(",R[1],") Compaction Cycles(",L[1],") "]}),Object(m.jsx)("p",{children:"3. Polythene Bin"}),Object(m.jsxs)("p",{children:["- Battery(",R[2],") Compaction Cycles(",L[2],") "]}),Object(m.jsx)("p",{children:"4. Other Bin"}),Object(m.jsxs)("p",{children:["- Battery(",R[3],") Compaction Cycles(",L[3],") "]})]})]})]})})}):Object(m.jsx)("div",{children:Object(m.jsxs)(j.a,{className:e.root,children:[Object(m.jsx)(Oe.a,{className:e.container,children:Object(m.jsxs)(he.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(m.jsx)(xe.a,{children:Object(m.jsx)(fe.a,{children:We.map((function(e){return Object(m.jsx)(Te,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(m.jsx)(me.a,{children:g.slice(i*d,i*d+d).filter((function(e){return""===P||P==e.unit_id?e:void 0})).map((function(e){return Object(m.jsx)(fe.a,{hover:!0,role:"checkbox",tabIndex:-1,children:We.map((function(t){var a=e[t.id];return Object(m.jsx)(pe.a,{align:t.align,style:{backgroundColor:Ue(t.id,a)},children:a},t.id)}))},e.code)}))})]})}),Object(m.jsx)(ge.a,{rowsPerPageOptions:[10,25,100],component:"div",count:g.length,rowsPerPage:d,page:i,onPageChange:function(e,t){r(t)},onRowsPerPageChange:function(e){u(+e.target.value),r(0)}})]})})]})}var qe=Object(d.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));var Re=Object(l.h)((function(){var e=qe();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(_,{section:"Overview"}),Object(m.jsx)(be,{}),Object(m.jsxs)("main",{className:e.content,children:[Object(m.jsx)("div",{className:e.toolbar}),Object(m.jsx)(ze,{})]})]})})),Le=a(213),_e=a.n(Le),Ve=Object(d.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:200,backgroundColor:"white"},selectEmpty:{marginTop:e.spacing(2)}}}));function Ge(){var e=Ve(),t=c.a.useState(""),a=Object(s.a)(t,2),n=a[0],i=a[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(ye.a,{className:e.formControl,children:[Object(m.jsx)(ve.a,{id:"demo-simple-select-label",children:"Select View"}),Object(m.jsxs)(Ne.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:n,onChange:function(e){i(e.target.value)},children:[Object(m.jsx)(we.a,{value:"Table View",children:Object(m.jsx)("a",{href:"/Overview",children:"Table View"})}),Object(m.jsx)(we.a,{value:"Graph View",children:Object(m.jsx)("a",{href:"/TempOverview",children:"Graph View"})})]})]})})}var He=Object(d.a)((function(e){return{myroot:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10},divider:{height:28,margin:4},main:{display:"flex",alignItems:"center"}}}));function Me(e){var t=He();return Object(m.jsxs)("div",{children:[" ",Object(m.jsxs)(b.a,{container:!0,spacing:1,className:t.main,children:[Object(m.jsx)(b.a,{item:!0,xs:6,children:Object(m.jsxs)(j.a,{component:"form",className:t.myroot,children:[Object(m.jsx)(Ie.a,{className:t.iconButton,"aria-label":"menu",children:Object(m.jsx)(_e.a,{})}),Object(m.jsx)(ke.a,{className:t.input,placeholder:e.placeholder,inputProps:{"aria-label":"search by unit id"}}),Object(m.jsx)(Ie.a,{type:"submit",className:t.iconButton,"aria-label":"search",children:Object(m.jsx)(Fe.a,{})}),Object(m.jsx)(J.a,{className:t.divider,orientation:"vertical"})]})}),Object(m.jsx)(b.a,{item:!0,xs:6,children:"yes"===e.isView?Object(m.jsx)(Ge,{}):null})]})]})}var Je=Object(d.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));var Ze=Object(l.h)((function(){var e=Je();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(_,{section:"Overview"}),Object(m.jsx)(be,{}),Object(m.jsxs)("main",{className:e.content,children:[Object(m.jsx)("div",{className:e.toolbar}),Object(m.jsx)(ze,{})]})]})})),Xe=a(102),Ye=a.n(Xe),Ke=a(214),Qe=a.n(Ke),$e=a(445),et=Object(d.a)((function(e){return{margin:{margin:e.spacing(1)},button:{backgroundColor:"#008891",margin:e.spacing(1)}}}));function tt(){var e=et(),t=Object(n.useState)(""),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(""),o=Object(s.a)(r,2),l=o[0],d=o[1],j=Object(n.useState)(""),b=Object(s.a)(j,2),h=b[0],p=b[1];Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Units/maxId").then((function(e){console.log(e),i(e.data[0].nextId+1)})).catch((function(e){console.log(e)}))}),[]);return Object(m.jsx)("div",{className:e.margin,children:Object(m.jsxs)(ye.a,{children:[Object(m.jsxs)(ye.a,{children:[Object(m.jsxs)(ve.a,{htmlFor:"my-input",children:["Unit ID: ",c]}),Object(m.jsx)($e.a,{id:"bin-id-add","aria-describedby":"my-helper-text",disabled:!0})]}),Object(m.jsxs)(ye.a,{children:[Object(m.jsx)(ve.a,{htmlFor:"my-input",children:"Enter Location"}),Object(m.jsx)($e.a,{id:"bin-id-loc","aria-describedby":"my-helper-text",name:"location",onChange:function(e){p(e.target.value)}})]}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"contained",color:"primary",size:"medium",className:e.button,startIcon:Object(m.jsx)(Ye.a,{}),onClick:function(){var e="http://54.84.182.51:5000/Units/add?unitID = "+c;I.a.post(e,{unitLocation:h}).then((function(e){e.data.error?(alert(e.data.error),window.location.reload(!0)):(alert(e.data.message),window.location.reload(!0))}))},children:"Add Unit"}),Object(m.jsxs)(ye.a,{children:[Object(m.jsx)(ve.a,{htmlFor:"my-input",children:"Enter Unit ID"}),Object(m.jsx)($e.a,{id:"bin-id-del","aria-describedby":"my-helper-text",name:"unitId",onChange:function(e){d(e.target.value)}})]}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"contained",color:"primary",size:"medium",className:e.button,startIcon:Object(m.jsx)(Qe.a,{}),onClick:function(){I.a.delete("http://54.84.182.51:5000/Units/delete/".concat(l),{}).then((function(e){e.data.error?(alert(e.data.error),window.location.reload(!0)):(alert(e.data.message),window.location.reload(!0))}))},children:"Remove"})]})})}var at=Object(d.a)((function(e){return{margin:{margin:e.spacing(1)},button:{backgroundColor:"#008891",margin:e.spacing(1)}}}));function nt(){var e=at(),t=Object(n.useState)(100),a=Object(s.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(50),o=Object(s.a)(r,2),l=o[0],d=o[1],j=Object(n.useState)(80),b=Object(s.a)(j,2),u=b[0],h=b[1];return Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/System/getBinHeight").then((function(e){i(e.data[0].bin_height)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/System/getLowBound").then((function(e){d(e.data[0].low_bound)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/System/getHighBound").then((function(e){h(e.data[0].high_bound)})).catch((function(e){console.log(e)}))}),[]),Object(m.jsx)("div",{className:e.margin,children:Object(m.jsxs)(ye.a,{children:[Object(m.jsxs)(ye.a,{children:[Object(m.jsxs)(ve.a,{htmlFor:"my-input",children:["Bin Height: ",c," cm "]}),Object(m.jsx)($e.a,{id:"bin-height","aria-describedby":"my-helper-text",disabled:!0})]}),Object(m.jsxs)(ye.a,{children:[Object(m.jsxs)(ve.a,{htmlFor:"my-input",children:["Red Range: ",u,"-100"]}),Object(m.jsx)($e.a,{id:"red-range","aria-describedby":"my-helper-text",disabled:!0})]}),Object(m.jsxs)(ye.a,{children:[Object(m.jsxs)(ve.a,{htmlFor:"my-input",children:["Yellow Range: ",l,"-",u]}),Object(m.jsx)($e.a,{id:"yellow-range","aria-describedby":"my-helper-text",disabled:!0})]}),Object(m.jsxs)(ye.a,{children:[Object(m.jsxs)(ve.a,{htmlFor:"my-input",children:["Green Range: 0-",l]}),Object(m.jsx)($e.a,{id:"green-range","aria-describedby":"my-helper-text",disabled:!0})]})]})})}var ct=B.b().shape({lowBound:B.a("Invalid input").integer("Invalid input").positive("Invalid input").min(10,"Must be higher than 10").notRequired(!0).nullable(!0),highBound:B.a("Invalid input").integer("Invalid input").positive("Invalid input").max(90,"Must be lower than 90").notRequired(!0).nullable(!0)}),it=Object(d.a)((function(e){return{margin:{margin:e.spacing(1)},button:{backgroundColor:"#008891",margin:e.spacing(2)},error:{margin:e.spacing(2)},textField:{marginBottom:e.spacing(2)}}}));function rt(){var e,t,a=it(),n=Object(P.d)({resolver:Object(E.a)(ct)}),c=n.register,i=n.handleSubmit,r=n.formState.errors;return Object(m.jsx)("div",{className:a.margin,children:Object(m.jsx)("form",{onSubmit:i((function(e){console.log(e),e.lowBound>e.highBound?(alert("Low bound must be smaller than high bound"),window.location.reload(!0)):e.lowBound===e.highBound?(alert("Low bound and High bound cannot be same"),window.location.reload(!0)):(I.a.put("http://54.84.182.51:5000/System/update/lowBound",{low_bound:e.lowBound}).then((function(e){e.data.error?(alert(e.data.error),window.location.reload(!0)):(alert(e.data.message),window.location.reload(!0))})),I.a.put("http://54.84.182.51:5000/System/update/highBound",{high_bound:e.highBound}).then((function(e){e.data.error?(alert(e.data.error),window.location.reload(!0)):(alert(e.data.message),window.location.reload(!0))})))})),children:Object(m.jsxs)(ye.a,{children:[Object(m.jsxs)(ye.a,{children:[Object(m.jsx)(ve.a,{htmlFor:"my-input",children:"Change Low Bound"}),Object(m.jsx)($e.a,Object(x.a)({id:"low-bound","aria-describedby":"my-helper-text",name:"lowBound"},c("lowBound")))]}),Object(m.jsx)("div",{className:a.error,children:Object(m.jsx)("div",{className:"error",children:null===(e=r.lowBound)||void 0===e?void 0:e.message})}),Object(m.jsxs)(ye.a,{children:[Object(m.jsx)(ve.a,{htmlFor:"my-input",children:"Change High Bound"}),Object(m.jsx)($e.a,Object(x.a)({id:"high-bound","aria-describedby":"my-helper-text",name:"highBound"},c("highBound")))]}),Object(m.jsx)("div",{className:a.error,children:Object(m.jsx)("div",{className:"error",children:null===(t=r.highBound)||void 0===t?void 0:t.message})}),Object(m.jsx)(u.a,{type:"submit",variant:"contained",color:"primary",size:"medium",className:a.button,startIcon:Object(m.jsx)(Ye.a,{}),children:"Save Changes"})]})})})}var st=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{marginTop:e.spacing(3),padding:e.spacing(10),textAlign:"left",backgroundColor:"white"}}}));function ot(){var e=st();return Object(m.jsx)("div",{className:e.root,children:Object(m.jsxs)(b.a,{container:!0,spacing:3,children:[Object(m.jsxs)(b.a,{item:!0,xs:4,children:[Object(m.jsx)("h2",{children:"Add or Remove Units"}),Object(m.jsx)(j.a,{className:e.paper,children:Object(m.jsx)(tt,{})})]}),Object(m.jsxs)(b.a,{item:!0,xs:8,children:[Object(m.jsx)("h2",{children:"System Settings"}),Object(m.jsx)(j.a,{className:e.paper,children:Object(m.jsxs)(b.a,{container:!0,children:[Object(m.jsxs)(b.a,{item:!0,xs:6,children:[" ",Object(m.jsx)(nt,{})]}),Object(m.jsxs)(b.a,{item:!0,xs:6,children:[" ",Object(m.jsx)(rt,{})]})]})})]})]})})}var lt=Object(d.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));var dt=Object(l.h)((function(){var e=lt();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(_,{section:"Customize"}),Object(m.jsx)(be,{}),Object(m.jsxs)("main",{className:e.content,children:[Object(m.jsx)("div",{className:e.toolbar}),Object(m.jsx)(ot,{})]})]})})),jt=a(91),bt=a.p+"static/media/bin.f72d87d4.png",ut=a.p+"static/media/collector.27de01de.png";function ht(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),r=Object(s.a)(i,2),o=r[0],l=r[1],d=Object(n.useState)(0),j=Object(s.a)(d,2),b=(j[0],j[1]),u=Object(n.useState)(0),h=Object(s.a)(u,2),p=(h[0],h[1]);Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Units/getAll").then((function(e){c(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Collectors/getLocation").then((function(e){l(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/System/getCoordinates").then((function(e){b(e.data[0].latitude),p(e.data[0].longitude)})).catch((function(e){console.log(e)}))}),[]);var O=Object(n.useState)({width:"1100px",height:"570px",latitude:6.8014,longitude:79.924,zoom:15}),g=Object(s.a)(O,2),f=g[0],v=g[1],w=Object(n.useState)(null),y=Object(s.a)(w,2),N=y[0],S=y[1],C=Object(n.useState)(null),k=Object(s.a)(C,2),B=k[0],F=k[1];return Object(m.jsx)("div",{children:Object(m.jsxs)(jt.c,Object(x.a)(Object(x.a)({},f),{},{mapboxApiAccessToken:"pk.eyJ1IjoiaXNhcmExMjMiLCJhIjoiY2t1bXhyaHlmM3Z0dTJ1azZxdTF5anJsbiJ9.y9bx1-DVAKDocnb8ZJNSTg",mapStyle:"mapbox://styles/isara123/ckumzi9ch0dzi17livce3kxp5",onViewportChange:function(e){v(e)},children:[a.map((function(e){return Object(m.jsx)(jt.a,{latitude:e.latitude,longitude:e.longitude,children:Object(m.jsx)("button",{className:"marker-btn",onClick:function(t){t.preventDefault(),S(e)},children:Object(m.jsx)("img",{src:bt,alt:"Skate Park Icon",width:"25px",height:"25px"})})},e.id)})),o.map((function(e){return Object(m.jsx)(jt.a,{latitude:e.latitude,longitude:e.longitude,children:Object(m.jsx)("button",{className:"marker-btn",onClick:function(t){t.preventDefault(),F(e)},children:Object(m.jsx)("img",{src:ut,alt:"Collector Icon",width:"25px",height:"25px"})})},e.id)})),N?Object(m.jsx)(jt.b,{latitude:N.latitude,longitude:N.longitude,onClose:function(){S(null)},children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Unit ID: ",N.id]}),Object(m.jsxs)("p",{children:["Unit Location: ",N.location]})]})}):null,B?Object(m.jsx)(jt.b,{latitude:B.latitude,longitude:B.longitude,onClose:function(){F(null)},children:Object(m.jsxs)("div",{children:[Object(m.jsxs)("p",{children:["Collector ID: ",B.id]}),Object(m.jsxs)("p",{children:["Collector Name: ",B.fname," ",B.lname]})]})}):null]}))})}var mt=Object(d.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));var pt=Object(l.h)((function(){var e=mt();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(_,{section:"Map View"}),Object(m.jsx)(be,{}),Object(m.jsxs)("main",{className:e.content,children:[Object(m.jsx)("div",{className:e.toolbar}),Object(m.jsx)(ht,{})]})]})})),Ot=[{id:"id",label:"Request ID",minWidth:100},{id:"time",label:"Time",minWidth:100},{id:"collectorName",label:"Assigned To",minWidth:100,align:"left"},{id:"status",label:"Status",minWidth:100,align:"right"}],xt=Object(ue.a)((function(e){return{head:{backgroundColor:"#008891",color:e.palette.common.white,fontSize:"1.3rem",fontFamily:'"Righteous", cursive'},body:{fontSize:14}}}))(pe.a),gt=Object(d.a)((function(e){return{root:{width:"100%"},container:{maxHeight:350,marginTop:e.spacing(5)},tableHead:{color:"#0F3057"},main:{display:"flex",alignItems:"center"},myroot:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));function ft(e,t){if("status"===e)return"Completed"===t?"#DCFFCC":"Accepted"===t?"#B4F2E1":"#FFBCBC"}function vt(){var e=[],t=Object(n.useState)([]),a=Object(s.a)(t,2),i=a[0],r=a[1],o=Object(n.useState)([]),l=Object(s.a)(o,2),d=l[0],u=l[1],h=Object(n.useState)(""),p=Object(s.a)(h,2),O=p[0],x=p[1];Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Collectors").then((function(e){console.log(e),u(e.data)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Requests/getAll").then((function(e){console.log(e),r(e.data)})).catch((function(e){console.log(e)}))}),[]),i.map((function(t){var a,n=t.request_id,c=t.time,i=t.collector_id,r=t.status;d.map((function(e){e.id===i&&(a=e.fname+" "+e.lname)}));var s={id:n,time:c,collectorName:a,status:r};e.push(s)})),console.log(e);var g=gt(),f=c.a.useState(0),v=Object(s.a)(f,2),w=v[0],y=v[1],N=c.a.useState(10),S=Object(s.a)(N,2),C=S[0],k=S[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)(b.a,{container:!0,spacing:1,className:g.main,children:Object(m.jsx)(b.a,{item:!0,xs:6,children:Object(m.jsxs)(j.a,{component:"form",className:g.myroot,children:[Object(m.jsx)(Ie.a,{className:g.iconButton,"aria-label":"search",children:Object(m.jsx)(Fe.a,{})}),Object(m.jsx)(ke.a,{className:g.input,placeholder:"Search by request Id",inputProps:{"aria-label":"search by request id"},onChange:function(e){x(e.target.value)}})]})})}),Object(m.jsxs)(j.a,{className:g.root,children:[Object(m.jsx)(Oe.a,{className:g.container,children:Object(m.jsxs)(he.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(m.jsx)(xe.a,{children:Object(m.jsx)(fe.a,{children:Ot.map((function(e){return Object(m.jsx)(xt,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(m.jsx)(me.a,{children:e.slice(w*C,w*C+C).filter((function(e){return""===O||O==e.id?e:void 0})).map((function(e){return Object(m.jsx)(fe.a,{hover:!0,role:"checkbox",tabIndex:-1,children:Ot.map((function(t){var a=e[t.id];return Object(m.jsx)(pe.a,{align:t.align,style:{backgroundColor:ft(t.id,a)},children:"status"===t.id?Object(m.jsx)("b",{children:a}):a},t.id)}))},e.code)}))})]})}),Object(m.jsx)(ge.a,{rowsPerPageOptions:[10,25,100],component:"div",count:e.length,rowsPerPage:C,page:w,onPageChange:function(e,t){y(t)},onRowsPerPageChange:function(e){k(+e.target.value),y(0)}})]})]})}var wt=Object(d.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));var yt=Object(l.h)((function(){var e=wt();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(_,{section:"Sent Requests"}),Object(m.jsx)(be,{}),Object(m.jsxs)("main",{className:e.content,children:[Object(m.jsx)("div",{className:e.toolbar}),Object(m.jsx)(vt,{})]})]})}));function Nt(){return Object(m.jsx)("div",{children:Object(m.jsx)("h3",{children:"Page Not Found :("})})}var St=a.p+"static/media/chart.e54762da.png",Ct=Object(d.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},img:{width:e.spacing(50),height:e.spacing(40)},grids:{marginTop:e.spacing(8)},paper2:{padding:e.spacing(2),textAlign:"left",color:e.palette.text.secondary},button:{backgroundColor:"#008891",margin:e.spacing(1),marginTop:e.spacing(8)}}}));function kt(){var e=Ct();return Object(m.jsx)("div",{className:e.root,children:Object(m.jsxs)(b.a,{container:!0,spacing:3,className:e.grids,children:[Object(m.jsx)(b.a,{item:!0,xs:6,children:Object(m.jsx)(j.a,{className:e.paper,children:Object(m.jsx)("img",{src:St,alt:"chart image",className:e.img})})}),Object(m.jsx)(b.a,{item:!0,xs:6,children:Object(m.jsxs)(j.a,{className:e.paper2,children:[Object(m.jsx)("h2",{children:"Unit 1: Miriswatta"}),Object(m.jsx)(Ae,{}),Object(m.jsx)(Ce,{}),Object(m.jsx)(u.a,{variant:"contained",color:"primary",size:"medium",className:e.button,startIcon:Object(m.jsx)(Y.a,{}),children:"Assign"})]})})]})})}var It=Object(d.a)((function(e){return{root:{display:"flex"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default,padding:e.spacing(3)}}}));function Bt(){var e=It();return Object(m.jsxs)("div",{className:e.root,children:[Object(m.jsx)(g.a,{}),Object(m.jsx)(_,{section:"Overview"}),Object(m.jsx)(be,{}),Object(m.jsxs)("main",{className:e.content,children:[Object(m.jsx)("div",{className:e.toolbar}),Object(m.jsx)(Me,{placeholder:"Search by Unit Id",isView:"yes"}),Object(m.jsx)(kt,{})]})]})}var Ft=a(217),Pt=["isAuth","component"];function Et(e){var t=e.isAuth,a=e.component,n=Object(Ft.a)(e,Pt);return Object(m.jsx)("div",{children:Object(m.jsx)(l.b,Object(x.a)(Object(x.a)({},n),{},{render:function(e){if(t)return Object(m.jsx)(a,{});l.a,e.location}}))})}var At=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){I.a.get("http://54.84.182.51:5000/Auth",{headers:{"x-access-token":localStorage.getItem("token")}}).then((function(e){e.data.error?c(!1):c(!0)}))}),[]),Object(m.jsx)(A.Provider,{value:{authState:a,setAuthState:c},children:Object(m.jsx)(o.a,{children:Object(m.jsxs)(l.d,{children:[Object(m.jsx)(l.b,{exact:!0,path:"/",children:Object(m.jsx)(O,{})}),Object(m.jsx)(l.b,{exact:!0,path:"/Signin",children:Object(m.jsx)(T,{})}),Object(m.jsx)(l.b,{exact:!0,path:"/Signup",children:Object(m.jsx)(z,{})}),Object(m.jsx)(l.b,{exact:!0,path:"/TempOverview",children:Object(m.jsx)(Bt,{})}),Object(m.jsx)(Et,{path:"/MapView",component:pt,isAuth:a}),Object(m.jsx)(Et,{path:"/Dashboard",component:Re,isAuth:a}),Object(m.jsx)(Et,{path:"/Overview",component:Ze,isAuth:a}),Object(m.jsx)(Et,{path:"/Customize",component:dt,isAuth:a}),Object(m.jsx)(Et,{path:"/SentRequests",component:yt,isAuth:a}),Object(m.jsx)(l.b,{path:"*",children:Object(m.jsx)(Nt,{})})]})})})};r.a.render(Object(m.jsx)(At,{}),document.getElementById("root"))}},[[404,1,2]]]);
//# sourceMappingURL=main.0973b5b3.chunk.js.map