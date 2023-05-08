import{a as ys,h as g,_ as te,c as K,u as re,s as de,t as fs,f as ms,p as Cs}from"./pool.8fcbe760.js";import{a as Os,q as x,r as u,l as Ts,K as ie,a2 as ue,e as Fs,o as d,f as i,h as o,t as n,x as y,u as b,i as Y,w as ps,v as j,S as ce,p as Bs,k as Ds,J as ve,s as bs,b as pe,j as L,F as es,E as os,a5 as he,B as Ae}from"./entry.c7ab2355.js";/* empty css              */import"./index.7f5da776.js";import{u as _e}from"./useSuiLaunchpad.96bebb55.js";import{_ as ge}from"./apr-tips.e269d05f.js";import{_ as hs}from"./icon_on_stats.9457802a.js";import{i as ws}from"./import-icon.de3e6c66.js";import{p as ke}from"./precision.9d58cda5.js";import{_ as js}from"./icon-Rewards.a21bc036.js";const fe=Os({props:{isShow:{type:String,default:""}},setup(){const s=ys(),t=x(()=>s),rs=x(()=>te[t.value.chainName]);function _(){var r=document.documentElement;return self.innerWidth||r&&r.offsetWidth||document.body.offsetWidth}const as=u(0),ns=u(0),X=u(0),H=u(0),z=u(0),q=u(""),e=u("--"),w=async()=>{var m,k;const h=await _e("Sui").getLaunchpadAllPools()||[],B=h&&((k=(m=h[0])==null?void 0:m.purchase_summary)==null?void 0:k.size)||0;e.value=B},O=x(()=>e.value+z.value);Ts(()=>{w(),setTimeout(()=>{_()<750?I(40,100,6,"vol","day"):I(40,100,20,"vol","day")},100)});const P=r=>{if(!r)return 0;const h=["","",""];let B=1e3,m=3,k="",v=1;for(;r/B>=1;)B*=10,m+=1;return m<=6?(h[0]=r+"",h[1]=""):m<=12?(k=parseInt(String(m-4))/3>=1?"M":"K",v=k==="K"?1e3:1e6,r%v===0?h[0]=parseInt(String(r/v))+"":h[0]=U(parseFloat(String(r/v)),1),h[1]=k):m<=16&&(k=(m-9)/3>1?"T":"B",v=1,k==="B"?v=1e9:k==="T"&&(v=1e12),r%v===0?h[0]=parseInt(String(r/v))+"":h[0]=U(parseFloat(String(r/v)),2),h[1]=k),r<1e3&&(h[0]=r+"",h[1]=""),h.join("")},U=(r,h)=>{r=r.toString();let B=r.indexOf(".");return B!==-1?r=r.substring(0,h+B+1):r=r.substring(0),parseFloat(r).toFixed(h)};ie(()=>{if(!K(t.value.statsData)&&t.value.chainName){const r=t.value.chainName=="Sui"?t.value.statsData.vol_in_usd_24h:t.value.statsData.vol_in_usd_24h_sum_v1,h=t.value.chainName=="Sui"?t.value.statsData.tvl_in_usd:t.value.statsData.tvl_in_usd_sum_v1;as.value=r,q.value=g(r,2),ns.value=t.value.statsData.vol_in_usd,X.value=h,H.value=t.value.statsData.tx_num,z.value=t.value.statsData.user_num}});const S=u("D"),A=u({}),G=r=>{S.value=r,r=="D"?_()<750?I(40,100,6,"vol","day"):I(40,100,20,"vol","day"):r=="W"?_()<750?I(30,100,15,"vol","wek"):I(30,100,30,"vol","wek"):r=="M"&&(_()<750?I(20,100,20,"vol","mon"):I(20,100,40,"vol","mon"))},I=async(r,h,B,m,k)=>{const{data:v}=t.value.theme=="default"?await fetch(`${rs.value.api}/v2/histogram?date_type=${k}&typ=${m}&limit=${r}`).then(C=>C.json()):await fetch(`${rs.value.api}/v2/sui/histogram?date_type=${k}&typ=${m}&limit=${r}`).then(C=>C.json());let V=v.list;const $={categoryData:[],valueData:[],wheelBase:[]};V&&V.forEach(C=>{$.categoryData.push(C.date.slice(0,10)),$.valueData.push(C.num)}),A.value=$,Z(h,B)},N=u({day:"",month:"",year:"",current:""}),J=r=>r==1?"Jan":r==2?"Feb":r==3?"Mar":r==4?"Apr":r==5?"May":r==6?"Jun":r==7?"Jul":r==8?"Aug":r==9?"Sep":r==10?"Oct":r==11?"Nov":"Dec",Z=(r,h)=>{const B=document.getElementById("echartsBox"),m=ue(B);t.value.theme=="default";let k={tooltip:{trigger:"axis",position:function(v,V,$,C,M){return[v[0]-50,"10%"]},backgroundColor:"#28353F",borderColor:"transparent",extraCssText:"height:24px;",formatter:function(v){let V=v[0].axisValue.slice(5,7),$=J(V);const C=v[0].axisValue.slice(8,10),M=$,Q=v[0].axisValue.slice(0,4);return N.value={day:C,month:M,year:Q,current:""},q.value=g(v[0].value,2),t.value.theme=="default","&nbsp;&nbsp;&nbsp;"+C+"&nbsp;"+M+"&nbsp;"+Q+"&nbsp;&nbsp;&nbsp;"},textStyle:{color:"#909DB4",innerHeight:"24",lineHeight:"24"},padding:0,axisPointer:{type:"line",lineStyle:{width:4,type:"solid",color:t.value.theme=="default"?"#14B88E":"#76C8FF"}}},xAxis:{max:A.value.categoryData.length>40?40:A.value.categoryData.length-1,type:"category",axisTick:{show:!1},axisLine:{show:!1},splitLine:{show:!1},splitArea:{show:!1},data:A.value.categoryData,axisLabel:{formatter:(v,V)=>{let $,C=v.slice(5,7),M=J(C);return S.value=="M"?$=M:$=v.slice(8,10),`${$}`}}},yAxis:{show:!1,max:function(v){return v.max},splitArea:{show:!1}},dataZoom:[{type:"inside",start:0,end:r,zoomLock:!0}],series:[{data:A.value.valueData,type:"bar",itemStyle:{normal:{barBorderRadius:1,color:v=>t.value.theme=="default"?"#00A57B":"#488CB4"}},barWidth:h}],grid:{left:0,top:0,right:24}};document.body.clientWidth<750&&(k.grid={left:4,top:0,bottom:20,right:24}),t.value.theme=="default"&&(k.tooltip.backgroundColor="#293F38"),k&&m.setOption(k),m.on("globalout",v=>{N.value={day:"",month:"",year:"",current:""},q.value=g(t.value.statsData.vol_in_usd_24h_sum_v1,2)})};return{total_user_num:O,idoPurchaseSummary:e,store:t,addCommom:g,vol_in_usd_24h:as,vol_in_usd:ns,tvl_in_usd:X,tx_num:H,user_num:z,changeEchart:G,echartVal:S,volTime:N,TradingVolume:q,getNum:P}}}),me="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURWv/4UdwTEZzSI8AAAACdFJOUxgA9IhVYQAAANFJREFUKM/d0rsNwjAQANALLlzeCB4lRYagZQFmiKMUmQhaDBQMQYHZwBJCcmHZOPFdIpEJwNXTybqPz5DmA39EC4BEDSCJACDWrI73htildJ3olWFatC1zier6zOyTIEaxEAMSvWK+vHJ14dO2TLNLOW0hLJxyffOCCYlXFWeeosp1JqbxgmsKZe5ZFOYMhpin1MRcbUO0bZREVwccCr3y6lEYcOx4YpT5TQpvwiTi0HVMYQRTWkmMwiFH+6CYHe3NAOiFsGZeakV87w/bn/yeHxjEueFEhaKoAAAAAElFTkSuQmCC",be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURX/O/0dwTHvO/0vxVZMAAAADdFJOUxkAC35ThakAAAEYSURBVDjL7dS9asMwEMDxk0HF7p49FPwefgQPPuFmEh37FBrbrYuhY5Ysecrc6cO6E4FMpUsODOEH/js+xwG8M/DE/8fPtzibwgBxRoXJwD7G8HqlOQt0G4aBP8wCJ4Nz16ADwAU2jSsYOhr0dFHfns4XaS/k6D74UMi5lBTIuZQs6C4iWXDtRLLgDL81WfFYkxWhJgXytkeNPeVcTu74QjmXk+8F7XfFjx3j3efN/Cg8pM0cBWKwaTMgkR5SXLbCOUZDr3DhKJUVxihtZTpI5Kg3eEKJHM1b2dFRNH/ZiusGtix6Rz9OnTeoMdi0bImUWyAnBY70o8f29AH90GJ5mgX7L5ozaMyvxWNckhn9bl7jXJ5/Vn+FN4PU4UmMd44FAAAAAElFTkSuQmCC",we="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURWv/4UdwTEZzSI8AAAACdFJOUxgA9IhVYQAAARVJREFUKM/FkjFOxDAQRb+JRCSE5JKOHIACTkC25BbLESi3S7gJLadYHyV0W7pBspBl4z+T2NJCv6menh37z3iQ64fL4rEicLfiAmBSLAQrGImdoMcxf0BwKYupbC7oyi/ZjcR3nhcGYkeMgj0xCdqGau3ZXknkxWLkuWp75lCLxzxD7C2TXYu1c8F7PdcX1HNt3mH4c7FtF/+bLLVksa/Jgqm1BQm5sOKwG9gs9sG/FX2SEsIB5gWC/pkh1Vq3oe9itRi/H5xamOm02leuP4k9FDKL2Imv4sVOP7jKXq3EUSvta9Y3u5zZwPbmL0EWwcdbK06GmFhm0JfnLMw6Dw43pavrPNSBiTok2xjtt+H63F901n8BIM90paz3Z+kAAAAASUVORK5CYII=",Ce="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURX/O/0dwTHrM/3gFXSYAAAADdFJOUxkAC35ThakAAAFgSURBVDjL5ZS9asMwEMcvAg/q7tCxFFJInsKP4CESqScvhZKn0NgXEDSZvASCnrKSpfuQMW33aDDm57vz3f1PB2blwKPB9/CxhIMDAHWr4AD53AS0rkAl4JjAV3o0DEu4GFgRPIHyGKZF2JcfpM8Nwm5D2TqN0O0I9huCnuBRIYRV2K5A1xAc2VJx1xjCHg0ZOmzPJwjLSA8XM9xBwm/As2V3PxWmZfKly0/GVhWFyEKVPJdp/6j9v5bHNdgDd/6EnR9BE+xQow7IfyA13XMspYhJurttLNCXkcIJcW2apUOYh4mgttQ6hpBaLmYxQ23OM3qRllE4G0I4V+7x7xdzvVfuLNHbIqVZDsvQmyyc8pbdY2nnJH2sSVpS40FaSjWWlmbV8nf3TkhEcORrlF+zmi2F1IZ0x5mfsthl5ucLa6ciK+B1fw2pfs3J0mIo+kO1QnbVYskS7Zd7KUr0aDv5Bxpkztruo1fyAAAAAElFTkSuQmCC",ye="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURWz/4kdwTG3/0ZPyUHUAAAADdFJOUxkACglUtT8AAADCSURBVDjL7dRBCoMwEAXQrxAw7j1C7uERslDJMssew2V7APeue8rWzEyTEaF0V8S/UHgkZAKZwXgQnAEj3rE7RIrGgbBTGAidwrXavnNbYoDZfp6Xgs+2hLbAGWl7jzrjhIYOarB8cICUREUlDLUUP7uMVq4ZM3q59BhNRiPoL/wLfKZo5FfXKeTH4BROtH256vwVj7ojVIK9KzuOU3TcQH26dW7uzREtXXOF6ndOrSYDp5wMk+BSTpvbPeVxopn8HV/6v9wGz1dPfgAAAABJRU5ErkJggg==",Oe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAgMAAADzfxo+AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURYDO/0dwTHfK/2/IZbgAAAADdFJOUxkACglUtT8AAADASURBVDjL7dQxDoMwDAXQTyQkwt7egHtwBAaIMjL2GIzt3uzMPWVLHBO7QqJjRfsHkJ4SxZFiY9gIjoAjXrFviBiNPeFJoSdsFM7F8p1qiR7l8uvSUqSzLaEVOCFub2EyOlR0UIWwYo874ZmKiugNF982GS1fc8zY8aWHscxYMnZ//AZ0j5igkF+dQn6f+9t/uc6Pcas7fMEom8swTo3ozUDmRG8OqOmaM1S/pxg1GVLkZHCMQU6byzXmdqCZvI9PbTbciS7GBh0AAAAASUVORK5CYII=",Te="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQAQMAAAC032DuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURWv/4UdwTEZzSI8AAAACdFJOUxgA9IhVYQAAAQdJREFUKM+1kk1uhDAMhU2Ryq45go+SozEV1bDslYK4SGbVLcssorj+S2ZfTRFIH5ad92wHaDzwerzCwDQNBFgdK0DsuGR0LFhDj65tcWxEjokTN0OYiU7FCixwKBYReChemKJjXq9IWTFRRboUN2rBE/jI4NFFXouyk/2JmyHXsKyqNTVzPqNbj57mV6PehURLGIcl7Hj3kXDal+NO9A7YTX6AlR1UQ5m9i4I0WW8xR7pZx29cn/sc+H8d0ylRE2Q6hmliAR4F4y3yrprixLsQ12yd7cziD0g28umIos1WQY4RrZ2RdeTrWAwzqazgQ9YZ6bsj6n04ZLOG59/wRy4H/s/9fT3+AmFQrF21qLPSAAAAAElFTkSuQmCC",Fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4AQMAAAADqqSRAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURX/O/0dwTPKzuZgAAAACdFJOUxkA7ZNkIAAAAZdJREFUOMvV1TtuhDAQANBBFKSIQpcqkm8Sjoa3yjH2KuQmlnIBly6QyXw8nmGjbdKx2g9PgO35mIXj/IKrOk1nA6zeO0DwzgCzdwIYvSPAcPKcwRuWyhOArSMuzjhYCs5fOOV8Xn8x89rKpC48996dOJg6qjeAxRskGHVF071D8w7rRuduzWWgtzlPeIszLZwm7MbJNnRs3hb56Pm4yjXdNGYw029xHlrwalrbPtt61S0ejpOSoabY8Ks+WPP1zJpvdX7wFpzxZq0nz1Mnq7esz/qB/Wb9Qi6v1k8c7wuXpOcjf9j1UdzHp1ynT66xy3eB4OqDOY/aPxQI/iatfx6x5IfUmOsNR8bjav3wHvVa3z9UR3Vo80LbDEH7wvVXDjqebJ4yt/nR4JwA36vUkOOhflvMNDgFQ4lmU/zm2nqUE4vHO+d77OZ9w8EN7Dy7RIMsU5IsplaVYMUbezPzg6M1NFkeGAuPATKSjPrNvslu7h767v5hj7bbnfdnrs36PKtyUOez/5z/rw8Z+OjruYvv1/4/uIh/AQYeBu9GWt/aAAAAAElFTkSuQmCC";const Be=s=>(Bs("data-v-d6c60c69"),s=s(),Ds(),s),De={key:0,class:"echarts-container"},je={class:"echarts-content-box"},Ee={class:"title"},$e={class:"echarts-tab"},Le={class:"echarts-content"},He={class:"left"},Ue=Be(()=>o("div",{id:"echartsBox",class:"right"},null,-1)),Ie={class:"echarts-data"},Pe={class:"item"},Se={key:0,src:me},Ve={key:1,src:be},Re={class:"left"},ze={class:"item"},Me={key:0,src:we},Ne={key:1,src:Ce},Qe={class:"left"},Ke={class:"item"},Ge={key:0,src:ye},Je={key:1,src:Oe},We={class:"left"},Ye={class:"item"},Ze={key:0,src:Te},Xe={key:1,src:Fe},qe={class:"left"},xe={key:0},so={key:1,class:"status-purchaseAmountLoading-box"};function eo(s,t,rs,_,as,ns){const X=ce;return s.isShow=="big"?(d(),i("div",De,[o("div",je,[o("div",Ee,n(s.$t("menu.stats")),1),o("div",$e,[o("div",{class:y(["title-day",s.echartVal=="D"?"title-active":""]),onClick:t[0]||(t[0]=H=>s.changeEchart("D"))},"D",2),o("div",{class:y(["title-week",s.echartVal=="W"?"title-active":""]),onClick:t[1]||(t[1]=H=>s.changeEchart("W"))},"W",2),o("div",{class:y(["title-mouth",s.echartVal=="M"?"title-active":""]),onClick:t[2]||(t[2]=H=>s.changeEchart("M"))},"M",2)]),o("div",Le,[o("div",He,[o("span",null,n(s.$t("common.tradingVal24h")),1),o("p",null,"$"+n(Number(s.TradingVolume)==0?0:s.TradingVolume),1)]),Ue])]),o("div",Ie,[o("div",Pe,[s.store.theme=="default"?(d(),i("img",Se)):(d(),i("img",Ve)),o("div",Re,[o("span",null,n(s.$t("common.cumulativeVolume")),1),o("p",null,"$"+n(("addCommom"in s?s.addCommom:b(g))(s.vol_in_usd,2)),1)])]),o("div",ze,[s.store.theme=="default"?(d(),i("img",Me)):(d(),i("img",Ne)),o("div",Qe,[o("span",null,n(s.$t("common.totalValueLocked")),1),o("p",null,"$"+n(("addCommom"in s?s.addCommom:b(g))(s.tvl_in_usd,2)),1)])]),o("div",Ke,[s.store.theme=="default"?(d(),i("img",Ge)):(d(),i("img",Je)),o("div",We,[o("span",null,n(s.$t("common.cumulativeTransactions")),1),o("p",null,n(("addCommom"in s?s.addCommom:b(g))(s.tx_num,2)),1)])]),o("div",Ye,[s.store.theme=="default"?(d(),i("img",Ze)):(d(),i("img",Xe)),o("div",qe,[o("span",null,n(s.$t("common.totalAccount")),1),s.store&&s.store.theme=="default"?(d(),i("p",xe,n(("addCommom"in s?s.addCommom:b(g))(s.user_num,2)),1)):(d(),i("div",so,[Y(X,{class:"status-purchaseAmountLoading",loading:s.idoPurchaseSummary=="--",active:"",paragraph:!1},{default:ps(()=>[o("p",null,n(("addCommom"in s?s.addCommom:b(g))(s.total_user_num,2)),1)]),_:1},8,["loading"])]))])])])])):j("",!0)}const oo=Fs(fe,[["render",eo],["__scopeId","data-v-d6c60c69"]]),lo=Os({setup(){const s=re(),{t,locale:rs}=ve(),_=x(()=>s),as=x(()=>_.value.allTokenObj||{}),ns=x(()=>_.value.tokensObj||{}),X=ys(),H=x(()=>X),z=pe();let q=u("big");const e=u(1),w=u(1);let O=u(!1);Ts(()=>{X.getStatsData(H.value.chainName);const l=document.body.clientWidth;l<750?O.value=!1:O.value=!0,window.onresize=()=>{l<750?O.value=!1:O.value=!0},O.value,us(e.value,10),cs(w.value,10)});let P=u([]);const U=x(()=>H.value.topPoolsList),S=l=>(a,c)=>{let f=a[l],p=c[l];return f-p},A=l=>(a,c)=>{let f=a[l];return c[l]-f},G=u(!1),I=u(!1),N=u(!1),J=u(!1),Z=u(!0),r=u(!1),h=u(!1),B=u(!1),m=u(!1),k=u(!1),v=u(!1),V=u(!1),$=u(!1),C=u(!1),M=u(!1),Q=u(!0),ds=u(!1),As=u("TVL"),_s=u(["Volume (24H)","Volume (7D)","APR"]),is=u(!1),gs=u("TVL"),ks=u(["Price","Volume (24H)","Price Change"]),Es=l=>{const a=U;if(l=="tvl_in_usd"?(Z.value?(G.value=!G.value,a.value.sort(G.value?S(l):A(l))):a.value.sort(A(l)),I.value=!1,N.value=!1,J.value=!1,Z.value=!0,r.value=!1,h.value=!1,B.value=!1):l=="vol_in_usd_24h"?(r.value?(I.value=!I.value,a.value.sort(I.value?S(l):A(l))):a.value.sort(A(l)),G.value=!1,N.value=!1,J.value=!1,Z.value=!1,r.value=!0,h.value=!1,B.value=!1):l=="vol_in_usd_7_day"?(h.value?(N.value=!N.value,a.value.sort(N.value?S(l):A(l))):a.value.sort(A(l)),G.value=!1,I.value=!1,J.value=!1,Z.value=!1,r.value=!1,h.value=!0,B.value=!1):l=="aprNum"&&(B.value?(J.value=!J.value,a.value.sort(J.value?S(l):A(l))):a.value.sort(A(l)),G.value=!1,I.value=!1,N.value=!1,Z.value=!1,r.value=!1,h.value=!1,B.value=!0),a.value.length<10)P.value=a.value.slice(0,10);else{const c=e.value*10;P.value=a.value.slice(c-10,c)}},$s=l=>{const a=ts;if(l=="price"?($.value?(m.value=!m.value,a.value.sort(m.value?S(l):A(l))):a.value.sort(A(l)),k.value=!1,v.value=!1,V.value=!1,$.value=!0,C.value=!1,M.value=!1,Q.value=!1):l=="vol_in_usd_24h"?(M.value?(v.value=!v.value,a.value.sort(v.value?S(l):A(l))):a.value.sort(A(l)),m.value=!1,k.value=!1,V.value=!1,$.value=!1,C.value=!1,M.value=!0,Q.value=!1):l=="tvl_in_usd"?(Q.value?(V.value=!V.value,a.value.sort(V.value?S(l):A(l))):a.value.sort(A(l)),m.value=!1,k.value=!1,v.value=!1,$.value=!1,C.value=!1,M.value=!1,Q.value=!0):l=="priceHour"&&(C.value?(k.value=!k.value,a.value.sort(k.value?S(l):A(l))):a.value.sort(A(l)),m.value=!1,v.value=!1,V.value=!1,$.value=!1,C.value=!0,M.value=!1,Q.value=!1),a.value.length<10)ss.value=a.value.slice(0,10);else{const c=w.value*10;ss.value=a.value.slice(c-10,c)}},Ls=l=>{l=="label"?(is.value=!is.value,ds.value=!1):l=="select"?(ds.value=!ds.value,is.value=!1):(ds.value=!1,is.value=!1)},Hs=l=>{const a=[];a.push(As.value),_s.value.forEach((c,f)=>{c!=l&&a.push(c)}),_s.value=a,As.value=l,l=="TVL"?P.value.sort(A("tvl_in_usd")):l=="Volume (24H)"?P.value.sort(A("vol_in_usd_24h")):l=="Volume (7D)"?P.value.sort(A("vol_in_usd_7_day")):l=="APR"&&P.value.sort(A("aprNum"))},Us=l=>{const a=[];a.push(gs.value),ks.value.forEach((c,f)=>{c!=l&&a.push(c)}),ks.value=a,gs.value=l,l=="TVL"?ss.value.sort(A("tvl_in_usd")):l=="Volume (24H)"?ss.value.sort(A("vol_in_usd_24h")):l=="Price"?ss.value.sort(A("price")):l=="Price Change"&&ss.value.sort(A("priceHour"))};bs(U,()=>{O.value,us(e.value,10)});const us=(l,a)=>{e.value=l;const c=a*l-a;let f=a*l;f=f>U.value.length?U.value.length:f;const p=U.value;if(p.length>0){Z.value&&!G.value?p.sort(Is):Z.value&&G.value?p.sort(Rs):r.value?I.value?p.sort(zs):p.sort(Ps):h.value?N.value?p.sort(Ms):p.sort(Ss):B.value&&(J.value?p.sort(Ns):p.sort(Vs));const T=p.filter((F,R)=>R>=c&&R<f);P.value=T}return p},Is=(l,a)=>a.tvl_in_usd-l.tvl_in_usd,Ps=(l,a)=>a.vol_in_usd_24h-l.vol_in_usd_24h,Ss=(l,a)=>a.vol_in_usd_7_day-l.vol_in_usd_7_day,Vs=(l,a)=>a.aprNum-l.aprNum,Rs=(l,a)=>l.tvl_in_usd-a.tvl_in_usd,zs=(l,a)=>l.vol_in_usd_24h-a.vol_in_usd_24h,Ms=(l,a)=>l.vol_in_usd_7_day-a.vol_in_usd_7_day,Ns=(l,a)=>l.aprNum-a.aprNum;let ss=u([]);const ts=x(()=>{const l=H.value.topTokensList,a=[];for(let c=0;c<l.length;c++){const f=l[c];a.push({...f,priceHour:f?Number(f.price_rate_24h.substring(0,f.price_rate_24h.length-1)):"0",address:f.symbol=="SUI"?"0x2::sui::SUI":f.address})}return a});bs(ts,()=>{O.value,cs(w.value,10)});const cs=(l,a)=>{w.value=l;const c=a*l-a;let f=a*l;f=f>ts.value.length?ts.value.length:f;const p=ts.value;if(p.length>0){Q.value&&!V.value?p.sort(Qs):Q.value&&V.value?p.sort(Ws):$.value?m.value?p.sort(Ys):p.sort(Ks):C.value?k.value?p.sort(Zs):p.sort(Gs):M.value&&(v.value?p.sort(Xs):p.sort(Js));const T=p.filter((F,R)=>R>=c&&R<f);ss.value=T}return p},Qs=(l,a)=>a.tvl_in_usd-l.tvl_in_usd,Ks=(l,a)=>a.price-l.price,Gs=(l,a)=>a.priceHour-l.priceHour,Js=(l,a)=>a.vol_in_usd_24h-l.vol_in_usd_24h,Ws=(l,a)=>l.tvl_in_usd-a.tvl_in_usd,Ys=(l,a)=>l.price-a.price,Zs=(l,a)=>l.priceHour-a.priceHour,Xs=(l,a)=>l.vol_in_usd_24h-a.vol_in_usd_24h,qs=l=>{const a=l.swap_account;return _.value.addressLpTokens&&_.value.addressLpTokens[a]&&_.value.addressLpTokens[a].rewarder_infos},xs=l=>{const a=l.swap_account;return _.value.addressLpTokens&&_.value.addressLpTokens[a]&&_.value.addressLpTokens[a].labels},se=l=>{if(!K(l)&&!K(_.value.addressLpTokens)&&!K(_.value.tokensObj)){const a=_.value.addressLpTokens[l.swap_account];return a==null?void 0:a.is_display_rewarder}else return!1},ee=l=>{if(!K(l)&&!K(_.value.addressLpTokens)&&!K(_.value.tokensObj)){const a=l.swap_account,c=_.value.addressLpTokens[a];let f=(c==null?void 0:c.rewarder_infos)||[];const p=[];for(let F=0;F<f.length;F++){const R=f[F];_.value.tokensObj[R==null?void 0:R.coinAddress]&&p.push({...R,symbol:_.value.tokensObj[R.coinAddress].symbol,rewarderApr:l.rewarder_apr[F],logoUrl:_.value.tokensObj[R.coinAddress].logoURI,rewarder_display:c[`rewarder_display${F+1}`]})}let T=[];return T=p.filter(F=>F.rewarder_display),T}},oe=(l,a)=>l&&a?de(ke.plus(fs(l),fs(a)),2)+"%":l,le=l=>{let a=0;return l&&l.forEach(c=>{c.rewarder_display&&(a+=fs(String(c.rewarders)))}),String(ms(String(a),2))},ae=()=>{z&&z.push("/stats-pools")},ne=()=>{z&&z.push("/stats-tokens")},vs=u({});return bs(()=>[_.value.poolConfigObj,_.value.tokensObj,H.value.topPoolsList,H.value.chainName,_.value.addressLpTokens],([l,a,c,f,p])=>{f=="Sui"?l&&!K(l)&&c&&c.length>0&&a&&!K(a)&&c.forEach(T=>{const F=l[T.swap_account],R=F==null?void 0:F.rewarderInfo.map((ls,W)=>{const D=a[ls.coinAddress];return{...ls,emissionsEveryDay:Cs(ls.emissionsEveryDay,D==null?void 0:D.decimals),rewarder_display:F[`rewarder_display${W+1}`],rewarders:T.rewarder_apr[W]&&T.rewarder_apr[W].replace("%",""),logoUrl:D==null?void 0:D.logo_url,symbol:D==null?void 0:D.symbol,rewarderApr:T.rewarder_apr[W]&&T.rewarder_apr[W].replace("%","")}});F.is_display_rewarder&&(vs.value={...vs.value,[T.swap_account]:R})}):l&&!K(l)&&c&&c.length>0&&a&&!K(a)&&p&&!K(p)&&c.forEach(T=>{const F=p[T.swap_account];if(F){const R=F.rewarder_infos.map((ls,W)=>{const D=a[ls.coinAddress];return{...ls,emissionsEveryDay:Cs(ls.emissionsEveryDay,D==null?void 0:D.decimals),rewarder_display:F[`rewarder_display${W+1}`],rewarders:ms(T.rewarder_apr[W]&&T.rewarder_apr[W].replace("%",""),2),logoUrl:D==null?void 0:D.logo_url,symbol:D==null?void 0:D.symbol,rewarderApr:ms(T.rewarder_apr[W]&&T.rewarder_apr[W].replace("%",""),2)}});F.is_display_rewarder&&(vs.value={...vs.value,[T.swap_account]:R})}})},{immediate:!0,deep:!0}),{getCoinIcon:l=>{var a;return(l==null?void 0:l.logoURI)||(l==null?void 0:l.logo_url)||((a=_.value.tokensObj[l==null?void 0:l.address])==null?void 0:a.logo_url)||(H.value.theme==="default"?ws("/image/coins/unknown.png"):ws("/image/coins/sui-unknown.png"))},getRewarderInfo:qs,addCommom:g,store:H,importIcon:ws,topPoolsList:U,addressTokens:as,showEcharts:q,currentPools:e,onChangePools:us,currentTopPoolsList:P,onChangeTokens:cs,currentTokens:w,currentTopTokensList:ss,topTokensList:ts,router:z,isPc:O,getAprTotal:oe,getRewarderApr:le,toPoolsList:ae,toTokensList:ne,changePoolsList:Es,changeTokensList:$s,tvlImprint:G,volHImprint:I,volDImprint:N,aprImprint:J,tokensPriceImprint:m,tokensPriceHImprint:k,tokensVolHImprint:v,tokensTvlImprint:V,labelToken:is,select:ds,selectValue:As,selectList:_s,reviseValue:Ls,changeSort:Hs,tokenValue:gs,tokensList:ks,changeSortLabel:Us,tvlImprintHighlight:Z,volHImprintHighlight:r,volDImprintHighlight:h,aprImprintHighlight:B,tokensPriceImprintHighlight:$,tokensPriceHImprintHighlight:C,tokensVolHImprintHighlight:M,tokensTvlImprintHighlight:Q,getLabel:xs,rewardApr:ee,tokensObj:ns,rewardDisplay:se,rewardObj:vs,t}}});const E=s=>(Bs("data-v-64a3f9b5"),s=s(),Ds(),s),ao={class:"stats-container"},no=E(()=>o("div",{class:"select-mask"},null,-1)),to={class:"title"},ro={class:"top-pools-new"},io={class:"title"},uo={class:"sort-by"},co=E(()=>o("img",{src:hs,alt:""},null,-1)),vo=E(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),po=[vo],ho={key:0,class:"select-item"},Ao=["onClick"],_o=E(()=>o("img",{src:hs,alt:""},null,-1)),go={class:"content"},ko={class:"item"},fo=E(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),mo=[fo],bo=E(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),wo=[bo],Co=E(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),yo=[Co],Oo=E(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),To=[Oo],Fo={class:"apr-hover-content"},Bo=E(()=>o("span",null," ",-1)),Do={class:"token"},jo=["src"],Eo={key:1,class:"pool-warning"},$o=["src"],Lo={key:1,class:"pool-warning"},Ho={class:"name"},Uo={class:"token-name"},Io={class:"fee-tier-top"},Po={class:"label-all"},So={key:0},Vo={class:"tvl"},Ro={class:"volume-hour"},zo={class:"volume-day"},Mo=E(()=>o("img",{src:js,alt:""},null,-1)),No={key:0,class:"apr-hover-content"},Qo={class:"btn-box"},Ko={class:"top"},Go={class:"token"},Jo=["src"],Wo={key:1,class:"pool-warning"},Yo=["src"],Zo={key:1,class:"pool-warning"},Xo={class:"name"},qo={class:"token-name"},xo={class:"label-all"},sl={key:0},el={class:"fee-tier-hint"},ol={class:"middle"},ll={class:"item-pools"},al={class:"item-pools"},nl={class:"item-pools"},tl=E(()=>o("img",{src:js,alt:""},null,-1)),rl={key:0,class:"apr-hover-content"},dl={class:"bottom"},il={class:"panation"},ul={class:"top-tokens"},cl={class:"title"},vl={class:"sort-by"},pl=E(()=>o("img",{src:hs,alt:""},null,-1)),hl=E(()=>o("use",{"xlink:href":"#icon-icon_on"},null,-1)),Al=[hl],_l={key:0,class:"select-item"},gl=["onClick"],kl=E(()=>o("img",{src:hs,alt:""},null,-1)),fl={class:"content"},ml={class:"item"},bl=E(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),wl=[bl],Cl=E(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),yl=[Cl],Ol=E(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Tl=[Ol],Fl=E(()=>o("use",{"xlink:href":"#icon-icon_on-pool"},null,-1)),Bl=[Fl],Dl=E(()=>o("span",null," ",-1)),jl={class:"token"},El={class:"left"},$l=["src"],Ll={key:0,class:"pool-warning"},Hl={class:"right"},Ul={class:"name"},Il={key:0,class:"label-all"},Pl={class:"price"},Sl={class:"price"},Vl={class:"volume"},Rl={class:"tvl"},zl={class:"btn-box"},Ml={class:"top"},Nl={class:"token"},Ql=["src"],Kl={key:0,class:"pool-warning"},Gl={class:"right"},Jl={class:"name"},Wl={key:0,class:"label-all"},Yl={class:"middle"},Zl={class:"item-pools"},Xl={class:"price"},ql={class:"item-pools"},xl={class:"item-pools"},sa={class:"item-pools"},ea={class:"bottom"},oa={class:"panation"};function la(s,t,rs,_,as,ns){const X=oo,H=ge,z=Ae,q=he;return d(),i("div",ao,[no,o("div",to,n(s.$t("menu.stats")),1),Y(X,{class:"title-overview","is-show":s.showEcharts},null,8,["is-show"]),o("div",ro,[o("div",io,[o("div",null,n(s.$t("common.topPools")),1),o("div",{class:"view-all",onClick:t[0]||(t[0]=(...e)=>s.toPoolsList&&s.toPoolsList(...e))},n(s.$t("newAdd.viewAll"))+"   > ",1)]),o("div",uo,[o("div",null,n(s.$t("newAdd.sortBy")),1),o("div",{class:"search-select",onClick:t[1]||(t[1]=e=>s.reviseValue("select"))},[o("div",null,[L(n(s.selectValue)+" ",1),co]),(d(),i("svg",{"aria-hidden":"true",class:y(s.select?"show-icon icon":"icon")},po,2)),s.select?(d(),i("div",ho,[(d(!0),i(es,null,os(s.selectList,(e,w)=>(d(),i("div",{key:w,class:"select-menu-item",onClick:O=>s.changeSort(e)},[L(n(e)+" ",1),_o],8,Ao))),128))])):j("",!0)])]),o("div",go,[o("div",ko,[o("span",null,n(s.$t("menu.pools")),1),o("span",{onClick:t[2]||(t[2]=e=>s.changePoolsList("tvl_in_usd"))},[L(n(s.$t("common.tvl"))+" ",1),(d(),i("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tvlImprint?s.tvlImprintHighlight?"selected highlight":"selected":s.tvlImprintHighlight?"highlight":""])},mo,2))]),o("span",{onClick:t[3]||(t[3]=e=>s.changePoolsList("vol_in_usd_24h"))},[L(n(s.$t("common.volume24h"))+" ",1),(d(),i("svg",{"aria-hidden":"true",class:y(["pools-icon",s.volHImprint?s.volHImprintHighlight?"selected highlight":"selected":s.volHImprintHighlight?"highlight":""])},wo,2))]),o("span",{onClick:t[4]||(t[4]=e=>s.changePoolsList("vol_in_usd_7_day"))},[L(n(s.$t("newAdd.volume7D"))+" ",1),(d(),i("svg",{"aria-hidden":"true",class:y(["pools-icon",s.volDImprint?s.volDImprintHighlight?"selected highlight":"selected":s.volDImprintHighlight?"highlight":""])},yo,2))]),o("span",{onClick:t[5]||(t[5]=e=>s.changePoolsList("aprNum"))},[L(n(s.$t("common.apr"))+" ",1),(d(),i("svg",{"aria-hidden":"true",class:y(["pools-icon",s.aprImprint?s.aprImprintHighlight?"selected highlight":"selected":s.aprImprintHighlight?"highlight":""])},To,2)),o("div",Fo,[Y(H,{class:"noHover apr-hover-con"})])]),Bo]),(d(!0),i(es,null,os(s.currentTopPoolsList,(e,w)=>{var O,P;return d(),i("div",{key:w,class:"item pc-item"},[o("div",Do,[o("div",null,[e!=null&&e.token_a_address?(d(),i("img",{key:0,src:s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address])},null,8,jo)):j("",!0),s.tokensObj&&s.tokensObj[e.token_a_address]&&s.tokensObj[e.token_a_address].isSelfBuilt?(d(),i("div",Eo)):j("",!0)]),o("div",null,[e!=null&&e.token_b_address?(d(),i("img",{key:0,src:s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address])},null,8,$o)):j("",!0),s.tokensObj&&s.tokensObj[e.token_b_address]&&s.tokensObj[e.token_b_address].isSelfBuilt?(d(),i("div",Lo)):j("",!0)]),o("div",Ho,[o("p",Uo,n(e.is_forward!==!1?e.token_a_reserves:e.token_b_reserves)+" - "+n(e.is_forward!==!1?e.token_b_reserves:e.token_a_reserves),1),o("div",Io,n((e==null?void 0:e.fee)*100)+"%",1),o("div",Po,[(d(!0),i(es,null,os(s.getLabel(e),(U,S)=>(d(),i("div",{key:S,class:y(["label",U])},[U!=="Native"?(d(),i("span",So,n(U),1)):j("",!0)],2))),128))])])]),o("div",Vo," $"+n(e.tvl_in_usd?("addCommom"in s?s.addCommom:b(g))(e.tvl_in_usd,2):"--"),1),o("div",Ro," $"+n(e!=null&&e.vol_in_usd_24h?("addCommom"in s?s.addCommom:b(g))(e==null?void 0:e.vol_in_usd_24h,2):"--"),1),o("div",zo," $"+n(e!=null&&e.vol_in_usd_7_day?("addCommom"in s?s.addCommom:b(g))(e==null?void 0:e.vol_in_usd_7_day,2):"--"),1),o("div",{class:y(["apr",s.rewardObj&&((O=s.rewardObj[e.swap_account])==null?void 0:O.length)>0?"apr-mark":""])},[Mo,L(" "+n(s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])))+" ",1),s.rewardObj&&((P=s.rewardObj[e.swap_account])==null?void 0:P.length)>0&&s.rewardObj&&s.rewardObj[e.swap_account]?(d(),i("div",No,[Y(H,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day&&e.apr_7day.replace("%",""),aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])),is_display_rewarder:s.rewardObj&&s.rewardObj[e.swap_account],rewarder_apr:s.getRewarderApr(s.rewardObj[e.swap_account])},"rewarder-info":s.rewardObj&&s.rewardObj[e.swap_account]},null,8,["l-item","rewarder-info"])])):j("",!0)],2),o("div",Qo,[Y(z,{class:"cancel-btn",onClick:()=>s.router.push(`/deposit?tokena=${e==null?void 0:e.token_a_address}&tokenb=${e==null?void 0:e.token_b_address}&fee=${e==null?void 0:e.fee}`)},{default:ps(()=>[L(n(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128)),(d(!0),i(es,null,os(s.currentTopPoolsList,(e,w)=>{var O,P;return d(),i("div",{key:w,class:"item h5-item"},[o("div",Ko,[o("div",Go,[o("div",null,[e!=null&&e.token_a_address?(d(),i("img",{key:0,src:s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_a_address]:s.addressTokens&&s.addressTokens[e.token_b_address])},null,8,Jo)):j("",!0),s.tokensObj&&s.tokensObj[e.token_a_address]&&s.tokensObj[e.token_a_address].isSelfBuilt?(d(),i("div",Wo)):j("",!0)]),o("div",null,[e!=null&&e.token_b_address?(d(),i("img",{key:0,src:s.getCoinIcon(e.is_forward!==!1?s.addressTokens&&s.addressTokens[e.token_b_address]:s.addressTokens&&s.addressTokens[e.token_a_address])},null,8,Yo)):j("",!0),s.tokensObj&&s.tokensObj[e.token_b_address]&&s.tokensObj[e.token_b_address].isSelfBuilt?(d(),i("div",Zo)):j("",!0)]),o("div",Xo,[o("p",qo,n(e.token_a_reserves)+" - "+n(e.token_b_reserves),1),o("div",xo,[(d(!0),i(es,null,os(s.getLabel(e),(U,S)=>(d(),i("div",{key:S,class:y(["label",U])},[U!=="Native"?(d(),i("span",sl,n(U),1)):j("",!0)],2))),128))])])]),o("div",el,n((e==null?void 0:e.fee)*100)+"%",1)]),o("div",ol,[o("div",ll,[o("span",null,n(s.$t("common.tvl")),1),o("p",null," $"+n(e.tvl_in_usd?("addCommom"in s?s.addCommom:b(g))(e.tvl_in_usd,2):"--"),1)]),o("div",al,[o("span",null,n(s.$t("common.volume24h")),1),o("p",null," $"+n(e!=null&&e.vol_in_usd_24h?("addCommom"in s?s.addCommom:b(g))(e==null?void 0:e.vol_in_usd_24h,2):"--"),1)]),o("div",nl,[o("span",null,n(s.$t("newAdd.volume7D")),1),o("p",null," $"+n(e!=null&&e.vol_in_usd_7_day?("addCommom"in s?s.addCommom:b(g))(e==null?void 0:e.vol_in_usd_7_day,2):"--"),1)]),o("div",{class:y(["item-pools",s.rewardObj&&((O=s.rewardObj[e.swap_account])==null?void 0:O.length)>0?"":"apr-mark-h5"])},[o("span",null,n(s.$t("common.apr")),1),o("p",null,[tl,L(" "+n(s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account]))),1)]),s.rewardObj&&((P=s.rewardObj[e.swap_account])==null?void 0:P.length)>0?(d(),i("div",rl,[Y(H,{class:"noHover apr-hover-con","l-item":{apr:e.apr_7day&&e.apr_7day.replace("%",""),aprTotal:s.getAprTotal(e.apr_7day,s.getRewarderApr(s.rewardObj[e.swap_account])),is_display_rewarder:s.rewardDisplay(e),rewarder_apr:s.getRewarderApr(s.rewardObj[e.swap_account])},"rewarder-info":s.rewardObj&&s.rewardObj[e.swap_account]},null,8,["l-item","rewarder-info"])])):j("",!0)],2)]),o("div",dl,[Y(z,{class:"cancel-btn",onClick:()=>s.router.push(`/deposit?tokena=${e==null?void 0:e.token_a_address}&tokenb=${e==null?void 0:e.token_b_address}&fee=${e==null?void 0:e.fee}`)},{default:ps(()=>[L(n(s.$t("common.deposit")),1)]),_:2},1032,["onClick"])])])}),128))]),o("div",il,[Y(q,{current:s.currentPools,"onUpdate:current":t[6]||(t[6]=e=>s.currentPools=e),"page-size":(s.isPc,10),simple:"",total:s.topPoolsList.length>20?20:s.topPoolsList.length,onChange:s.onChangePools},null,8,["current","page-size","total","onChange"])])]),o("div",ul,[o("div",cl,[o("div",null,n(s.$t("common.topTokens")),1),o("div",{class:"view-all",onClick:t[7]||(t[7]=(...e)=>s.toTokensList&&s.toTokensList(...e))},n(s.$t("newAdd.viewAll"))+"   > ",1)]),o("div",vl,[o("div",null,n(s.$t("newAdd.sortBy")),1),o("div",{class:"search-select",onClick:t[8]||(t[8]=e=>s.reviseValue("label"))},[o("div",null,[L(n(s.tokenValue)+" ",1),pl]),(d(),i("svg",{"aria-hidden":"true",class:y(s.labelToken?"show-icon icon":"icon")},Al,2)),s.labelToken?(d(),i("div",_l,[(d(!0),i(es,null,os(s.tokensList,(e,w)=>(d(),i("div",{key:w,class:"select-menu-item",onClick:O=>s.changeSortLabel(e)},[L(n(e)+" ",1),kl],8,gl))),128))])):j("",!0)])]),o("div",fl,[o("div",ml,[o("span",null,n(s.$t("common.tokens")),1),o("span",{onClick:t[9]||(t[9]=e=>s.changeTokensList("price"))},[L(n(s.$t("common.price"))+" ",1),(d(),i("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tokensPriceImprint?s.tokensPriceImprintHighlight?"selected highlight":"selected":s.tokensPriceImprintHighlight?"highlight":""])},wl,2))]),o("span",{onClick:t[10]||(t[10]=e=>s.changeTokensList("priceHour"))},[L(n(s.$t("newAdd.priceChange"))+" ",1),(d(),i("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tokensPriceHImprint?s.tokensPriceHImprintHighlight?"selected highlight":"selected":s.tokensPriceHImprintHighlight?"highlight":""])},yl,2))]),o("span",{onClick:t[11]||(t[11]=e=>s.changeTokensList("vol_in_usd_24h"))},[L(n(s.$t("common.volume24h"))+" ",1),(d(),i("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tokensVolHImprint?s.tokensVolHImprintHighlight?"selected highlight":"selected":s.tokensVolHImprintHighlight?"highlight":""])},Tl,2))]),o("span",{onClick:t[12]||(t[12]=e=>s.changeTokensList("tvl_in_usd"))},[L(n(s.$t("common.tvl"))+" ",1),(d(),i("svg",{"aria-hidden":"true",class:y(["pools-icon",s.tokensTvlImprint?s.tokensTvlImprintHighlight?"selected highlight":"selected":s.tokensTvlImprintHighlight?"highlight":""])},Bl,2))]),Dl]),(d(!0),i(es,null,os(s.currentTopTokensList,(e,w)=>(d(),i("div",{key:w,class:"item pc-item"},[o("div",jl,[o("div",El,[o("div",null,[o("img",{src:s.getCoinIcon(s.addressTokens&&s.addressTokens[e.address]),alt:""},null,8,$l),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].isSelfBuilt?(d(),i("div",Ll)):j("",!0)])]),o("div",Hl,[o("div",Ul,[o("p",null,n(e.symbol),1),o("span",null,n(e.name)+" ",1)]),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?(d(),i("div",Il,[o("div",{class:y(["label",s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]])},[o("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?`${s.tokensObj[e.address].labels[0]}`:""),1)],2)])):j("",!0)])]),o("div",Pl,[o("p",null,n(e.price?"$"+("addCommom"in s?s.addCommom:b(g))(e.price,2):"--"),1)]),o("div",Sl,[o("p",{class:y(e.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},n(e.price_rate_24h!=="0%"&&!e.price_rate_24h.includes("-")?`+${e.price_rate_24h}`:e.price_rate_24h),3)]),o("div",Vl," $"+n(("addCommom"in s?s.addCommom:b(g))(e.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in s?s.addCommom:b(g))(e.vol_in_usd_24h,2)?("addCommom"in s?s.addCommom:b(g))(e.vol_in_usd_24h,2):"--"),1),o("div",Rl," $"+n(("addCommom"in s?s.addCommom:b(g))(e.tvl_in_usd,2)=="0.00"?0:("addCommom"in s?s.addCommom:b(g))(e.tvl_in_usd,2)?("addCommom"in s?s.addCommom:b(g))(e.tvl_in_usd,2):"--"),1),o("div",zl,[Y(z,{class:"cancel-btn",onClick:O=>s.router.push(`/swap?to=${e.address}`)},{default:ps(()=>[L(n(s.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128)),(d(!0),i(es,null,os(s.currentTopTokensList,(e,w)=>(d(),i("div",{key:w,class:"item h5-item"},[o("div",Ml,[o("div",Nl,[o("div",null,[o("img",{src:s.getCoinIcon(s.addressTokens&&s.addressTokens[e.address]),alt:""},null,8,Ql),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].isSelfBuilt?(d(),i("div",Kl)):j("",!0)]),o("div",Gl,[o("div",Jl,[o("p",null,n(s.addressTokens&&s.addressTokens[e.address]&&s.addressTokens[e.address].symbol),1),o("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].name)+" ",1)]),s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?(d(),i("div",Wl,[o("div",{class:y(["label",s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]])},[o("span",null,n(s.tokensObj&&s.tokensObj[e.address]&&s.tokensObj[e.address].labels&&s.tokensObj[e.address].labels[0]?`${s.tokensObj[e.address].labels[0]}`:""),1)],2)])):j("",!0)])])]),o("div",Yl,[o("div",Zl,[o("span",null,n(s.$t("common.price")),1),o("div",Xl,[o("p",null,"$"+n(("addCommom"in s?s.addCommom:b(g))(e.price,2)),1)])]),o("div",ql,[o("span",null,n(s.$t("newAdd.priceChange")),1),o("p",{class:y(e.price_rate_24h.includes("-")?"redecue-change-price":"add-change-price")},n(e.price_rate_24h),3)]),o("div",xl,[o("span",null,n(s.$t("common.volume24h")),1),o("p",null," $"+n(("addCommom"in s?s.addCommom:b(g))(e.vol_in_usd_24h,2)=="0.00"?0:("addCommom"in s?s.addCommom:b(g))(e.vol_in_usd_24h,2)),1)]),o("div",sa,[o("span",null,n(s.$t("common.tvl")),1),o("p",null," $"+n(("addCommom"in s?s.addCommom:b(g))(e.tvl_in_usd,2)=="0.00"?0:("addCommom"in s?s.addCommom:b(g))(e.tvl_in_usd,2)),1)])]),o("div",ea,[Y(z,{class:"cancel-btn",onClick:O=>s.router.push(`/swap?to=${e.address}`)},{default:ps(()=>[L(n(s.$t("button.swap")),1)]),_:2},1032,["onClick"])])]))),128))]),o("div",oa,[Y(q,{current:s.currentTokens,"onUpdate:current":t[13]||(t[13]=e=>s.currentTokens=e),"page-size":(s.isPc,10),simple:"",total:s.topTokensList.length>20?20:s.topTokensList.length,onChange:s.onChangeTokens},null,8,["current","page-size","total","onChange"])])])])}const Aa=Fs(lo,[["render",la],["__scopeId","data-v-64a3f9b5"]]);export{Aa as default};
