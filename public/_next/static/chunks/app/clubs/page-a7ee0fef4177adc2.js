(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[782],{7978:function(e,r,t){Promise.resolve().then(t.bind(t,8920))},7331:function(){},1910:function(){},3078:function(e,r,t){"use strict";function n(e){let r,t,n=2022,o=6,a=4,i=-1,s=0,l=e-1654293600;for(let c=0;c<999;c++)r=n%4==0?366:365,1===o||3===o||5===o||7===o||8===o||10===o||12===o?t=31:4===o||6===o||9===o||11===o?t=30:2===o&&365===r?t=28:2===o&&366===r&&(t=29),l>=86400*r&&(n+=1,l-=86400*r),l<86400*r&&l>=86400*t&&(12!==o?o+=1:(n+=1,o=1),l-=86400*t),l<86400*t&&l>=86400&&(a!==t?a+=1:(a=1,12!==o?o+=1:(n+=1,o=1)),l-=86400),l<86400&&l>=3600&&(23!==i?i+=1:(i=0,a!==t?a+=1:(a=1,12!==o?o+=1:(n+=1,o=1))),l-=3600),l<3600&&l>=60&&(59!==s?s+=1:(s=0,23!==i?i+=1:(i=0,a!==t?a+=1:(a=1,12!==o?o+=1:(n+=1,o=1)))),l-=60);return s<10&&(s="0".concat(s)),"".concat(i,":").concat(s,", ").concat(n,"-").concat(o,"-").concat(a)}t.d(r,{k:function(){return n}})},2143:function(e,r,t){"use strict";function n(e){if("Warta"===e)return"Warta Poznan";if("Korona"===e)return"Korona Kielce";if("Gornik Z."===e)return"Gornik Zabrze";if("Legnica"===e)return"Miedz Legnica";if("Lech"===e)return"Lech Poznan";if("Zaglebie"===e)return"Zaglebie Lubin";if("Rakow"===e)return"Rakow Czestochowa";else if("Lechia"===e)return"Lechia Gdansk";else if("Piast"===e)return"Piast Gliwice";else if("Slask"===e)return"Slask Wroclaw";else if("Legia"===e)return"Legia Warszawa";else return e}t.d(r,{$:function(){return n}})},2726:function(e,r,t){"use strict";t.d(r,{Y:function(){return n}});let n={method:"GET",headers:{"X-RapidAPI-Host":"flashscore.p.rapidapi.com","X-RapidAPI-Key":"1941a7725amshe72888a2f321827p18582bjsnddf354460ab2"}}},8920:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return u}});var n=t(1844),o=t(5784),a=t(3078),i=t(2726),s=t(8207),l=t(2143);t(7331);var c=function(){let[e,r]=(0,o.useState)(),[t,c]=(0,o.useState)(),f=new Date,u=[];for(let d=0;d<7;d++)u[d]=f.getFullYear()+"-"+(f.getMonth()+1)+"-"+(f.getDate()+d);async function m(e){try{let t=await fetch("https://flashscore.p.rapidapi.com/v1/tournaments/fixtures?tournament_stage_id=".concat(e,"&locale=en_GB&page=1"),i.Y),n=await t.json();c(n.DATA[0].NAME);let o=n.DATA[0].EVENTS;r(o)}catch(a){console.log(a)}}return(0,o.useEffect)(()=>{m("4fofM1vn")},[!0]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{className:"leagueName",children:t}),(0,n.jsx)(s.r,{grow:!0,children:e&&e.map((e,r)=>{for(let t=7;t>=0;t--)if((0,a.k)(e.START_TIME).endsWith(u[t]))return(0,n.jsxs)(s.r.Col,{md:4,sm:6,xs:12,children:[(0,n.jsx)("img",{className:"clubLogo",src:"".concat(e.HOME_IMAGES[0]),alt:e.HOME_NAME}),(0,n.jsx)("img",{src:"".concat(e.AWAY_IMAGES[0]),alt:e.AWAY_NAME}),(0,n.jsxs)("a",{href:"/clubs/".concat(e.EVENT_ID,"/").concat(e.HOME_PARTICIPANT_IDS[0],"/").concat(e.AWAY_PARTICIPANT_IDS[0]),children:[(0,l.$)(e.HOME_NAME)," - ",(0,l.$)(e.AWAY_NAME)," ",(0,n.jsx)("br",{})]}),(0,n.jsx)("p",{children:(0,a.k)(e.START_TIME)})]})})})]})},f=t(8943);function u(){return(0,n.jsx)(f.Z,{contain:(0,n.jsx)(c,{})})}},8943:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var n=t(1844),o=t(5784),a=t(9763),i=t(7350),s=t(5810),l=t(5954),c=t(597),f=t(3991),u=t(7855),d=t(7690),m=t(2218),p=t(2865);function h(e){let{icon:r,color:t,label:o,href:a}=e;return(0,n.jsx)(u.e,{href:a,children:(0,n.jsx)(d.k,{sx:e=>({display:"block",width:"100%",padding:e.spacing.xs,borderRadius:e.radius.sm,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,"&:hover":{backgroundColor:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]}}),children:(0,n.jsxs)(m.Z,{children:[(0,n.jsx)(p.k,{color:t,variant:"light",children:r}),(0,n.jsx)(c.x,{size:"md",weight:600,children:o})]})})})}let x=[{icon:(0,n.jsx)(f.JOP,{size:16}),color:"violet",label:"Strona gł\xf3wna",href:"/"},{icon:(0,n.jsx)(f.SrG,{size:16}),color:"violet",label:"Zawodnicy",href:"/players"},{icon:(0,n.jsx)(f.Ko8,{size:16}),color:"grape",label:"Kluby",href:"/clubs"}];function b(){let e=x.map(e=>(0,o.createElement)(h,{...e,key:e.label,href:e.href}));return(0,n.jsx)("div",{children:e})}t(1910),t(7331);var g=function(e){let r=(0,a.rZ)(),[t,f]=(0,o.useState)(!1);return(0,n.jsx)(i.V,{styles:{main:{background:"dark"===r.colorScheme?r.colors.dark[8]:r.colors.gray[0]}},navbarOffsetBreakpoint:"sm",asideOffsetBreakpoint:"sm",navbar:(0,n.jsx)(s.w,{p:"md",hiddenBreakpoint:"sm",hidden:!t,width:{sm:200,lg:300},children:(0,n.jsx)(s.w,{height:600,p:"xs",width:{base:300},children:(0,n.jsx)(s.w.Section,{grow:!0,mt:"md",children:(0,n.jsx)(b,{})})})}),footer:(0,n.jsx)(l.$,{height:80,className:"footer",p:"md",children:"Serwis web gromadzący, weryfikujący i analizujacy statystyki piłkarskie"}),children:(0,n.jsx)(c.x,{children:e.contain})})}},8207:function(e,r,t){"use strict";t.d(r,{r:function(){return L}});var n=t(5784),o=t(9763);let[a,i]=function(e){let r=(0,n.createContext)(null);return[r.Provider,function(e){let t=(0,n.useContext)(r),[o]=e.split(".");if(!t)throw Error(`${e} component was rendered outside of ${o} component context`);return t}]}(0);var s=t(1637),l=t(7967),c=Object.defineProperty,f=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&m(e,t,r[t]);if(f)for(var t of f(r))d.call(r,t)&&m(e,t,r[t]);return e};let h=(e,r)=>`${100/(r/e)}%`,x=(e,r)=>e?`${100/(r/e)}%`:void 0;var b=(0,l.k)((e,{gutter:r,grow:t,offset:n,offsetXs:o,offsetSm:a,offsetMd:i,offsetLg:l,offsetXl:c,columns:f,span:u,xs:d,sm:m,md:b,lg:g,xl:y})=>({root:p({boxSizing:"border-box",flexGrow:t?1:0,padding:e.fn.size({size:r,sizes:e.spacing})/2,marginLeft:x(n,f),flexBasis:h(u,f),flexShrink:0,maxWidth:t?"unset":h(u,f)},function({sizes:e,offsets:r,theme:t,columns:n,grow:o}){return s.j1.reduce((a,i)=>("number"==typeof e[i]&&(a[`@media (min-width: ${t.breakpoints[i]+1}px)`]={flexBasis:h(e[i],n),flexShrink:0,maxWidth:o?"unset":h(e[i],n),marginLeft:x(r[i],n)}),a),{})}({sizes:{xs:d,sm:m,md:b,lg:g,xl:y},offsets:{xs:o,sm:a,md:i,lg:l,xl:c},theme:e,columns:f,grow:t}))})),g=t(6916),y=Object.defineProperty,j=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,v=(e,r,t)=>r in e?y(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,O=(e,r)=>{for(var t in r||(r={}))w.call(r,t)&&v(e,t,r[t]);if(j)for(var t of j(r))k.call(r,t)&&v(e,t,r[t]);return e},E=(e,r)=>{var t={};for(var n in e)w.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&j)for(var n of j(e))0>r.indexOf(n)&&k.call(e,n)&&(t[n]=e[n]);return t};let A={offset:0,offsetXs:0,offsetSm:0,offsetMd:0,offsetLg:0,offsetXl:0},S=(0,n.forwardRef)((e,r)=>{let t=(0,o.Z3)("Col",A,e),{children:a,span:s,offset:l,offsetXs:c,offsetSm:f,offsetMd:u,offsetLg:d,offsetXl:m,xs:p,sm:h,md:x,lg:y,xl:j,className:w,classNames:k,styles:v,id:S}=t,N=E(t,["children","span","offset","offsetXs","offsetSm","offsetMd","offsetLg","offsetXl","xs","sm","md","lg","xl","className","classNames","styles","id"]),{columns:P,gutter:_,grow:z}=i("Grid.Col"),M=s||P,{classes:I,cx:C}=b({gutter:_,offset:l,offsetXs:c,offsetSm:f,offsetMd:u,offsetLg:d,offsetXl:m,xs:p,sm:h,md:x,lg:y,xl:j,grow:z,columns:P,span:M},{classNames:k,styles:v,name:"Col"});return!("number"==typeof M&&M>0&&M%1==0)||M>P?null:n.createElement(g.x,O({className:C(I.root,w),ref:r},N),a)});S.displayName="@mantine/core/Col";var N=(0,l.k)((e,{justify:r,align:t,gutter:n})=>({root:{margin:-e.fn.size({size:n,sizes:e.spacing})/2,display:"flex",flexWrap:"wrap",justifyContent:r,alignItems:t}})),P=Object.defineProperty,_=Object.getOwnPropertySymbols,z=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,I=(e,r,t)=>r in e?P(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))z.call(r,t)&&I(e,t,r[t]);if(_)for(var t of _(r))M.call(r,t)&&I(e,t,r[t]);return e},T=(e,r)=>{var t={};for(var n in e)z.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&_)for(var n of _(e))0>r.indexOf(n)&&M.call(e,n)&&(t[n]=e[n]);return t};let G={gutter:"md",justify:"flex-start",align:"stretch",columns:12},L=(0,n.forwardRef)((e,r)=>{let t=(0,o.Z3)("Grid",G,e),{gutter:i,children:s,grow:l,justify:c,align:f,columns:u,className:d,classNames:m,styles:p,id:h}=t,x=T(t,["gutter","children","grow","justify","align","columns","className","classNames","styles","id"]),{classes:b,cx:y}=N({gutter:i,justify:c,align:f},{classNames:m,styles:p,name:"Grid"});return n.createElement(a,{value:{gutter:i,grow:l,columns:u}},n.createElement(g.x,C({className:y(b.root,d),ref:r},x),s))});L.Col=S,L.displayName="@mantine/core/Grid"}},function(e){e.O(0,[584,186,17,744],function(){return e(e.s=7978)}),_N_E=e.O()}]);