import{_ as Bo}from"./back.61dbe081.js";import{_ as Eo}from"./status-block.fafe2505.js";import{a as to,L as ao,r as c,s as lo,F as ro,v as I,ad as F,i as uo,A as bo,H as S,b as co,o as r,e as k,f as e,l as v,m as h,t as s,q as V,h as W,S as go,p as po,j as mo,M as Do,K as qo,c as wo,y as A,B as Co,G as Fo,av as Wo,z as so,w as K,N as Mo,aj as Ho,al as Vo,ao as L,aw as _o,Y as q,k as io,J as zo,C as Go,E as Jo,a2 as Ko,a3 as Yo}from"./entry.35669d63.js";/* empty css              */import{_ as $o,a as yo}from"./icon-arrow_2x.db44c7c5.js";const Qo=to({props:{positionInfo:{type:Object,required:!0}},setup(o){const{t:l}=ao();let T=c(!1),j=c(!0);const O=lo(),P=ro(),t=I(()=>P),u=I(()=>{var b,g,y,R,U,E,M,_;const C=o.positionInfo.amountA*((g=t.value.RATES[(b=o.positionInfo)==null?void 0:b.token_a.name.toUpperCase()])==null?void 0:g.price),p=o.positionInfo.amountB*((R=t.value.RATES[(y=o.positionInfo)==null?void 0:y.token_b.name.toUpperCase()])==null?void 0:R.price);return((E=t.value.RATES[(U=o.positionInfo)==null?void 0:U.token_a.name.toUpperCase()])==null?void 0:E.price)&&((_=t.value.RATES[(M=o.positionInfo)==null?void 0:M.token_b.name.toUpperCase()])==null?void 0:_.price)?C+p:" --"}),i=I(()=>{var C,p,b,g;return((p=t.value.RATES[(C=o.positionInfo)==null?void 0:C.token_a.name.toUpperCase()])==null?void 0:p.price)&&u.value!=="--"?(o.positionInfo.amountA*((g=t.value.RATES[(b=o.positionInfo)==null?void 0:b.token_a.name.toUpperCase()])==null?void 0:g.price)/u.value*100).toFixed(0):" --"}),B=I(()=>{var C,p,b,g;return((p=t.value.RATES[(C=o.positionInfo)==null?void 0:C.token_b.name.toUpperCase()])==null?void 0:p.price)&&u.value!=="--"?(o.positionInfo.amountB*((g=t.value.RATES[(b=o.positionInfo)==null?void 0:b.token_b.name.toUpperCase()])==null?void 0:g.price)/u.value*100).toFixed(0):" --"}),n=I(()=>t.value.tokensObj&&o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.address&&t.value.tokensObj[o.positionInfo.token_a.address]&&t.value.tokensObj[o.positionInfo.token_a.address].logoURI),$=I(()=>t.value.tokensObj&&o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.address&&t.value.tokensObj[o.positionInfo.token_b.address]&&t.value.tokensObj[o.positionInfo.token_b.address].logoURI);return{fromPercent:B,toPercent:i,amountUSD:u,showNum:F,t:l,importIcon:uo,indexStore:O,rateChange:j,decimalFormat:bo,fromCoinUrl:n,toCoinUrl:$,pools:t,addCommom:S,isPc:T}}});const Xo=o=>(po("data-v-a9f02cbe"),o=o(),mo(),o),Zo={class:"position-card"},xo={class:"coin-pair"},oe=["src"],ee=["src"],ne={class:"fee"},se={class:"right"},ie={key:0,class:"status"},te={class:"min-and-max"},ae={key:0},le={class:"text"},de={key:0,src:$o,alt:""},re={key:1,src:yo,alt:""},ue={class:"text"},ce={key:1},pe={class:"text"},me={key:0,src:$o,alt:""},fe={key:1,src:yo,alt:""},ve={class:"text"},ke=Xo(()=>e("use",{"xlink:href":"#icon-a-icon-change2"},null,-1)),Ie=[ke],he={class:"liquidity"},_e={class:"label"},be={class:"value"},ge={class:"token-num"},we={class:"item"},Ce=["src"],$e={class:"rate"},ye={class:"item"},Se=["src"],Te={class:"rate"};function Ae(o,l,T,j,O,P){const t=go,u=Eo;return r(),k("div",Zo,[e("div",{class:V(["left",`position-status-${o.positionInfo&&o.positionInfo.currentStatus&&o.positionInfo.currentStatus.toLowerCase()}`])},[v(t,{class:"left-skeleton",loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",xo,[e("div",null,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,oe),e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,ee)]),e("span",null,s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" - "+s(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)]),e("div",ne,s(o.$t("common.fee"))+" "+s(o.positionInfo.fee)+"% ",1)]),_:1},8,["loading"])],2),e("div",se,[o.pools.currentPositionLoading?W("",!0):(r(),k("div",ie,[v(u,{"current-status":o.positionInfo.currentStatus||""},null,8,["current-status"])])),v(t,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",te,[o.rateChange?(r(),k("div",ae,[e("div",le,s(o.addCommom(o.decimalFormat(String(o.positionInfo.minPrice),6))),1),o.indexStore.theme=="default"?(r(),k("img",de)):(r(),k("img",re)),e("div",ue,s(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("\u221E")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"\u221E":o.addCommom(o.decimalFormat(String(o.positionInfo.maxPrice),6)))+" "+s(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol)+" per "+s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)])):(r(),k("div",ce,[e("div",pe,s(o.addCommom(o.decimalFormat(String(1/Number(o.positionInfo.maxPrice)),6))),1),o.indexStore.theme=="default"?(r(),k("img",me)):(r(),k("img",fe)),e("div",ve,s(o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("\u221E")>-1||o.positionInfo&&o.positionInfo.maxPrice&&o.positionInfo.maxPrice.indexOf("+")>-1?"\u221E":o.addCommom(o.decimalFormat(String(1/Number(o.positionInfo.minPrice)),6)))+" "+s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol)+" per "+s(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])),(r(),k("svg",{class:"icon-change","aria-hidden":"true",onClick:l[0]||(l[0]=i=>o.rateChange=!o.rateChange)},Ie))])]),_:1},8,["loading"]),e("div",he,[v(t,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",_e,s(o.$t("common.liquidity")),1),e("div",be," $"+s(o.amountUSD=="--"?"--":Number(o.amountUSD)==0?0:Number(o.amountUSD)<.01?"<0.01":o.addCommom(o.amountUSD,2)),1)]),_:1},8,["loading"])]),e("div",ge,[v(t,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",we,[e("div",null,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,Ce),e("p",null,s(o.showNum(o.positionInfo.amountA,o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.decimals)),1),e("span",null,s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)]),e("div",$e,s(o.addCommom(o.fromPercent,0))+"%",1)]),e("div",ye,[e("div",null,[e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,Se),e("p",null,s(o.showNum(o.positionInfo.amountB,o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.decimals)),1),e("span",null,s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_b.symbol),1)]),e("div",Te,s(o.addCommom(o.toPercent,0))+"%",1)])]),_:1},8,["loading"])])])])}const Oe=co(Qo,[["render",Ae],["__scopeId","data-v-a9f02cbe"]]),Pe=to({components:{Modal:Do},props:{positionInfo:{type:Object,required:!0},isLoading:{type:Boolean,required:!0}},setup(o,l){const{t:T,locale:j}=ao(),O=lo(),{copy:P}=O,t=()=>{l.emit("toClaim")},u=ro(),i=I(()=>u),B=I(()=>i.value.tokensObj&&o.positionInfo.token_a.address&&i.value.tokensObj[o.positionInfo.token_a.address]&&i.value.tokensObj[o.positionInfo.token_a.address].logoURI),n=I(()=>i.value.tokensObj&&o.positionInfo.token_b.address&&i.value.tokensObj[o.positionInfo.token_b.address]&&i.value.tokensObj[o.positionInfo.token_b.address].logoURI);return{showNum:F,fromCoinUrl:B,toCoinUrl:n,toClaim:t,t:T,addCommom:S,importIcon:uo,store:O,copy:P}}});const Re=o=>(po("data-v-09ff5415"),o=o(),mo(),o),Ue=Re(()=>e("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Ne={class:"claim-container"},Le={key:0,class:"pc-claim"},je=["src"],Be={key:1,class:"pc-claim"},Ee=["src"];function De(o,l,T,j,O,P){const t=Co,u=qo("Modal");return r(),wo(u,{visible:!0,class:"claim-fees",centered:"",closable:!0,title:o.$t("modal.claimFees"),width:"400px",footer:null,onCancel:l[0]||(l[0]=i=>o.$emit("onClose"))},{closeIcon:h(()=>[Ue]),default:h(()=>[e("div",Ne,[o.positionInfo&&o.positionInfo.token_a.symbol?(r(),k("div",Le,[e("img",{src:o.fromCoinUrl||o.importIcon(`/image/coins/${o.positionInfo.token_a.symbol.toLowerCase()}.png`)},null,8,je),e("span",null,s(o.showNum(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals))+" "+s(o.positionInfo.token_a.symbol),1)])):W("",!0),o.positionInfo&&o.positionInfo.token_b.symbol?(r(),k("div",Be,[e("img",{src:o.toCoinUrl||o.importIcon(`/image/coins/${o.positionInfo.token_b.symbol.toLowerCase()}.png`)},null,8,Ee),e("span",null,s(o.showNum(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals))+" "+s(o.positionInfo.token_b.symbol),1)])):W("",!0)]),v(t,{class:"big-btn claim-btn",disabled:o.isLoading||o.addCommom(o.positionInfo.feeOwedA,o.positionInfo.token_a.decimals)==0&&o.addCommom(o.positionInfo.feeOwedB,o.positionInfo.token_b.decimals)==0||o.positionInfo.poolInfo.is_pause,onClick:o.toClaim},{default:h(()=>[A(s(o.$t("common.claim")),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["title"])}const qe=co(Pe,[["render",De],["__scopeId","data-v-09ff5415"]]),Fe=to({setup(){const o=c(!1),l=c(!1),T=c(!1),j=c(!0),O=ro(),P=c(""),t=c(""),u=c(""),i=I(()=>O),B=I(()=>{var m,f,w,N;const a=n.value.feeOwedA*((m=i.value.RATES[n.value&&n.value.token_a&&n.value.token_a.name.toUpperCase()])==null?void 0:m.price),d=n.value.feeOwedB*((f=i.value.RATES[n.value&&n.value.token_b&&n.value.token_b.name.toUpperCase()])==null?void 0:f.price);return((w=i.value.RATES[n.value&&n.value.token_a&&n.value.token_a.name.toUpperCase()])==null?void 0:w.price)&&((N=i.value.RATES[n.value&&n.value.token_b&&n.value.token_b.name.toUpperCase()])==null?void 0:N.price)?a+d:" --"}),n=c(i.value.currentPositionInfo||{}),$=Fo(),C=Wo();function p(){C.setCurrentLiquidity(n),$.push(`/remove-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}`)}function b(){C.setCurrentLiquidity(n),$.push(`/increase-liquidity?collect=${n.value.collectionName}&&token=${n.value.tokenName}&&address=${n.value.pool}`)}const g=()=>{R(),T.value=!0,setTimeout(()=>{T.value=!1},1e3)},y=so(),R=async()=>{i.value.setCurrentPositionLoading(!0);const a=$.currentRoute.value.query.token||"",d=$.currentRoute.value.query.collect||"";t.value=$.currentRoute.value.query.address||"",a&&d&&t.value&&(P.value=d,u.value=a,i.value.setCurrentPositionInfo(t.value,P.value,u.value))};K(()=>i.value.addressLpTokens,a=>{q(a)||R()},{immediate:!0});const U=c(""),E=c(""),M=c(""),_=lo(),Y=I(()=>_);K(()=>[Y.value.newTopPoolsObj,n.value],([a,d])=>{if(!q(a)&&!q(d)){const m=d.poolAddress,f=a[m];U.value=f&&f.apr_7day,E.value=f&&io(f.tvl_in_usd,2),M.value=f&&io(f.vol_in_usd_24h,2)}},{immediate:!0,deep:!0}),K(()=>i.value.currentPositionInfo,a=>{a&&(n.value=i.value.currentPositionInfo,X.value=n.value.token_a,Z.value=n.value.token_b)});const So=Mo(),H=I(()=>So);Ho(()=>{H.value.connected||$.push("/position")});const{t:Q}=ao(),{$notify:fo}=Vo(),To=async()=>{o.value=!0,l.value=!1,_.setTransactionDesc(Q("newAdd.claimWaitingText",{from:S(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${F(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`,and:S(n.value.feeOwedA,n.value.token_a.decimals)==0||S(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and",to:S(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${F(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`})),_.setIsShowWaiting(!0);let a;const d={pool:n.value.poolInfo,position:n.value},m=so();try{const f=await m.getCollectFeeTransactionPayload(d);if(a=await H.value.currentWallet.signAndSubmitTransaction(f),a){_.setTransactionTxid(a.hash),_.setIsShowWaiting(!1),_.setIsShowSuccess(!0);const w={title:"Claim",desc:"",hash:a.hash,tit:`Claimed Fee: ${n.value.poolInfo.symbol}`,text:`Claim ${S(n.value.feeOwedA,n.value.token_a.decimals)==0?"":`${F(n.value.feeOwedA,n.value.token_a.decimals)} ${n.value.token_a.symbol}`}  
              ${S(n.value.feeOwedA,n.value.token_a.decimals)==0||S(n.value.feeOwedB,n.value.token_b.decimals)==0?"":"and"} ${S(n.value.feeOwedB,n.value.token_b.decimals)==0?"":`${F(n.value.feeOwedB,n.value.token_b.decimals)} ${n.value.token_b.symbol}`}
              
            `};m.showTransitionPending(w),await m.watchTransaction(w)&&setTimeout(()=>{R()},1e3)}else _.setIsShowWaiting(!1),_.setIsShowRejected(!0),fo.error({icon:L("svg",{class:{icon:!0},"aria-hidden":!0},[L("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),duration:4.5,message:L("div",{class:"notification-title"},[L("span",{innerHTML:_o.global.t("newAdd.claimFailed")},null)]),description:Q("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"});o.value=!1}catch{o.value=!1,_.setIsShowWaiting(!1),_.setIsShowRejected(!0),fo.error({icon:L("svg",{class:{icon:!0},"aria-hidden":!0},[L("use",{"xlink:href":"#icon-a-icon-Shutdown"})]),message:L("div",{class:"notification-title"},[L("span",{innerHTML:_o.global.t("newAdd.claimFailed")},null)]),duration:4.5,description:Q("newAdd.somethingWrong"),class:"ant-notification-copy ant-notification-error"})}},X=c(""),Z=c(""),Ao=()=>{X.value=n.value.token_b,Z.value=n.value.token_a},Oo=I(()=>i.value.newTokenObj&&n&&n.value.token_a&&n.value.token_a.address&&i.value.newTokenObj[n.value.token_a.address]&&i.value.newTokenObj[n.value.token_a.address].logoURI),Po=I(()=>i.value.newTokenObj&&n&&n.value.token_b&&n.value.token_b.address&&i.value.newTokenObj[n.value.token_b.address]&&i.value.newTokenObj[n.value.token_b.address].logoURI),Ro=I(()=>Y.value.chainName),Uo=I(()=>zo[Ro.value]),vo=c(0),x=c([]),ko=async()=>{const a=i.value.addressLpTokens[n.value.poolAddress],d=await y.getTickDataByIndex(a.ticks_handle,Number(n.value.tick_lower_index)),m=await y.getTickDataByIndex(a.ticks_handle,Number(n.value.tick_upper_index)),f=await y.getPosRewardersAmount({poolAddress:n.value.poolAddress,positionName:n.value.tokenName,tickLowerData:d,tickUpperData:m}),w=[];let N=0;f.forEach(D=>{const eo=i.value.newTokenObj[D.coin_address].decimals,J=i.value.newTokenObj[D.coin_address],no=Number(D.amount_owed.toString())/Math.pow(10,eo),jo=i.value.RATES[i.value.newTokenObj[D.coin_address].name.toUpperCase()].price,ho=no*jo;N+=ho,w.push({...D,...J,amount:no,amountUSD:ho})}),x.value=w,vo.value=Number(io(N,2))};K(()=>[n.value],async([a])=>{!q(a)&&!q(i.value.addressLpTokens)&&!q(i.value.newTokenObj)&&!q(i.value.RATES)&&ko()},{immediate:!0});const{setIsShowSuccess:No,setIsShowRejected:Io,setIsShowWaiting:oo,setTransactionDesc:Ln,setTransactionTxid:Lo}=_,G=c(!1);return{feeOwed:B,config:Uo,showNum:F,index:Y,fromCoinUrl:Oo,toCoinUrl:Po,toggle:Ao,fromCoin:X,toCoin:Z,apr:U,liquidityTvl:E,vol24:M,addCommom:S,decimalFormat:bo,wallet:H,isLoading:o,toClaim:To,pools:i,positionInfo:n,importIcon:uo,router:$,toRemove:p,toIncrease:b,isShowClaim:l,direct:j,refresh:T,clickRefresh:g,pendingRewarderArr:x,pendingRewarder:vo,toClaimRewards:async()=>{G.value=!0;const a=so(),d=x.value;let m={coinTypeA:n.value.poolInfo.coinTypeA,coinTypeB:n.value.poolInfo.coinTypeB,coinTypeC:"",coinTypeD:"",coinTypeE:"",pool_address:n.value.poolAddress,pos_index:n.value.index,rewarder_nums:d.length};m.coinTypeC=d[0]?d[0].coin_address:"",m.coinTypeD=d[1]?d[1].coin_address:"",m.coinTypeE=d[2]?d[2].coin_address:"";try{const f=await a.getCollectRewarderTransactionPayload(m),w=await H.value.currentWallet.signAndSubmitTransaction(f);if(w&&w.hash){Lo(w.hash),oo(!1),No(!0);const N=d[0].amount+d[0].symbol,D=m.coinTypeD?" and "+d[1].amount+d[1].symbol:"",eo=m.coinTypeE?" and "+d[2].amount+d[2].symbol:"",J={title:"Claim",desc:"",hash:w.hash,tit:`Claimed Rewarder: ${n.value.poolInfo.symbol}`,text:N+D+eo};a.showTransitionPending(J),await a.watchTransaction(J)&&setTimeout(()=>{ko(),a.getAccount(H.value.address)},1e3)}else oo(!1),Io(!0);G.value=!1}catch{G.value=!1,oo(!1),Io(!0)}},rewarderLoading:G}}});const z=o=>(po("data-v-ec5cb84d"),o=o(),mo(),o),We={key:0,class:"position-detail-container"},Me={class:"position-detail-header"},He={class:"back-and-refresh"},Ve=z(()=>e("use",{"xlink:href":"#icon-icon-refresh"},null,-1)),ze=[Ve],Ge={class:"action-position"},Je={class:"coin-pair"},Ke=z(()=>e("use",{"xlink:href":"#icon-icon-copy"},null,-1)),Ye=[Ke],Qe=["href"],Xe=z(()=>e("svg",{class:"icon","aria-hidden":"true"},[e("use",{"xlink:href":"#icon-icon-jump"})],-1)),Ze=[Xe],xe={class:"acton-btn-box"},on=z(()=>e("svg",{"aria-hidden":"true",class:"action-icon"},[e("use",{"xlink:href":"#icon-icon-Reduction"})],-1)),en=z(()=>e("svg",{"aria-hidden":"true",class:"action-icon"},[e("use",{"xlink:href":"#icon-icon-add"})],-1)),nn={class:"position-content"},sn={class:"pedding-fee"},tn={class:"top"},an={class:"left"},ln={class:"bottom"},dn=["src"],rn=["src"],un={class:"poolInfo"},cn={class:"pool-info-title"},pn={class:"currentPrice"},mn={key:0,class:"coin"},fn={key:1,class:"coin"},vn={class:"toggle"},kn=["src"],In=["src"],hn={key:0},_n={class:"info-block-container"},bn={class:"info-block"},gn={class:"leabl"},wn={class:"text"},Cn={class:"info-block"},$n={class:"leabl"},yn={class:"text"},Sn={class:"info-block"},Tn={class:"leabl"},An={class:"text"},On={class:"info-block"},Pn={class:"leabl"},Rn={class:"text"},Un={class:"loading-global"};function Nn(o,l,T,j,O,P){const t=Bo,u=Co,i=go,B=Oe,n=Ko,$=qe,C=Yo;return o.positionInfo?(r(),k("div",We,[e("div",Me,[e("div",He,[v(t),(r(),k("svg",{"aria-hidden":"true",class:V(o.refresh?"refresh refresh-icon ":"refresh-icon"),onClick:l[0]||(l[0]=(...p)=>o.clickRefresh&&o.clickRefresh(...p))},ze,2))]),e("div",Ge,[v(i,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",Je,[A(s(o.positionInfo.tokenName)+" ",1),(r(),k("svg",{class:"icon","aria-hidden":"true",onClick:l[1]||(l[1]=p=>o.index.copy(o.positionInfo.nftHash))},Ye)),e("a",{href:`https://explorer.aptoslabs.com/token/${o.positionInfo.nftHash}/0?network=${o.config.network}`,target:"_blank"},Ze,8,Qe)]),e("div",xe,[v(u,{class:V(["remove-liquidity action-btn",o.positionInfo.poolInfo.is_pause?"text-default":""]),disabled:o.positionInfo.poolInfo.is_pause,onClick:o.toRemove},{default:h(()=>[on,A(" "+s(o.$t("button.remove")),1)]),_:1},8,["class","disabled","onClick"]),v(u,{class:"increase-liquidity action-btn",disabled:o.positionInfo.poolInfo.is_pause,onClick:o.toIncrease},{default:h(()=>[en,A(" "+s(o.$t("button.increase")),1)]),_:1},8,["disabled","onClick"])])]),_:1},8,["loading"])])]),e("div",nn,[v(B,{"position-info":o.positionInfo},null,8,["position-info"])]),e("div",sn,[e("div",tn,[e("div",an,[e("span",null,s(o.$t("newAdd.pendingFees")),1),e("p",null,"$"+s(o.feeOwed=="--"?"--":Number(o.feeOwed)==0?0:Number(o.feeOwed)<.01?"<0.01":o.addCommom(o.feeOwed,2)),1)]),v(u,{class:"increase-liquidity action-btn",disabled:o.isLoading||!o.wallet.connected||!(Number(o.positionInfo&&o.positionInfo.feeOwedA)||Number(o.positionInfo&&o.positionInfo.feeOwedB))||o.positionInfo.poolInfo.is_pause,onClick:l[2]||(l[2]=p=>o.isShowClaim=!0)},{default:h(()=>[A(s(o.$t("common.claim")),1)]),_:1},8,["disabled"])]),v(i,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[e("div",ln,[e("div",null,[e("img",{src:o.fromCoinUrl},null,8,dn),e("p",null,s(o.showNum(o.positionInfo.feeOwedA,o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.decimals)),1),e("span",null,s(o.positionInfo&&o.positionInfo.token_a&&o.positionInfo.token_a.symbol),1)]),e("div",null,[e("img",{src:o.toCoinUrl},null,8,rn),e("p",null,s(o.showNum(o.positionInfo.feeOwedB,o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.decimals)),1),e("span",null,s(o.positionInfo&&o.positionInfo.token_b&&o.positionInfo.token_b.symbol),1)])])]),_:1},8,["loading"])]),e("div",un,[e("div",cn,s(o.$t("newAdd.poolInfo")),1),e("div",pn,[v(i,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>{var p,b,g,y,R,U;return[o.direct?(r(),k("div",mn,[e("span",null,s(o.$t("common.currentPrice")),1),A(" "+s(o.addCommom(o.decimalFormat(o.positionInfo.currentPrice,6)))+" "+s((p=o.toCoin)==null?void 0:p.symbol)+" per "+s((b=o.fromCoin)==null?void 0:b.symbol),1)])):(r(),k("div",fn,[e("span",null,s(o.$t("common.currentPrice")),1),A(" "+s(o.addCommom(o.decimalFormat(1/o.positionInfo.currentPrice,6)))+" "+s((g=o.fromCoin)==null?void 0:g.symbol)+" per "+s((y=o.toCoin)==null?void 0:y.symbol),1)])),e("div",vn,[e("div",{class:V(o.direct?"item active-item":"item"),onClick:l[3]||(l[3]=E=>o.direct=!0)},[e("img",{src:o.fromCoinUrl,alt:""},null,8,kn),A(" "+s(o.positionInfo&&o.positionInfo.token_a&&((R=o.positionInfo.token_a)==null?void 0:R.symbol)),1)],2),e("div",{class:V(o.direct?"item ":"item active-item"),onClick:l[4]||(l[4]=E=>o.direct=!1)},[e("img",{src:o.toCoinUrl,alt:""},null,8,In),A(" "+s(o.positionInfo&&o.positionInfo.token_b&&((U=o.positionInfo.token_b)==null?void 0:U.symbol)),1)],2)])]}),_:1},8,["loading"])]),v(i,{loading:o.pools.currentPositionLoading,active:"",paragraph:!1},{default:h(()=>[o.apr&&o.liquidityTvl&&o.vol24?(r(),k("div",hn,[e("div",_n,[e("div",bn,[e("div",gn,s(o.$t("common.apr")),1),e("div",wn,[v(n,{placement:"bottom","arrow-point-at-center":""},{title:h(()=>[e("span",null,s(o.$t("tips.aprTipsTest")),1)]),default:h(()=>[A(" "+s(o.apr),1)]),_:1})])]),e("div",Cn,[e("div",$n,s(o.$t("common.liquidity")),1),e("div",yn,"$"+s(o.liquidityTvl),1)]),e("div",Sn,[e("div",Tn,s(o.$t("common.volume24h")),1),e("div",An,"$"+s(o.vol24),1)]),e("div",On,[e("div",Pn,s(o.$t("newAdd.tickSpacing")),1),e("div",Rn,s(o.positionInfo.tickSpacing),1)])])])):W("",!0)]),_:1},8,["loading"])]),o.isShowClaim?(r(),wo($,{key:0,"is-loading":o.isLoading,"position-info":o.positionInfo,onOnClose:l[5]||(l[5]=p=>o.isShowClaim=!1),onToClaim:o.toClaim},null,8,["is-loading","position-info","onToClaim"])):W("",!0),Go(e("div",Un,[v(C)],512),[[Jo,o.pools.currentPositionLoading]])])):W("",!0)}const Wn=co(Fe,[["render",Nn],["__scopeId","data-v-ec5cb84d"]]);export{Wn as default};
