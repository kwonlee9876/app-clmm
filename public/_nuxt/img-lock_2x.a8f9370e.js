import{_ as B}from"./coin-pair-name.231c4768.js";import{_ as w}from"./status-block.f6d295cc.js";import{a as A,b as _,o as i,e as s,f as n,t as e,q as S,M as q,L as P,r,x as N,A as d,w as g,ae as E,H as T,i as K,k as R,K as D,c as M,m as h,l as k,y as z,B as W,p as U,j as V}from"./entry.20d85d85.js";import{p as X}from"./precision.1cd464a0.js";const Z=A({props:{direct:{type:Boolean,default:!0},formCoinSymbol:{type:String,default:""},toCoinSymbol:{type:String,default:""}}});const $={class:"coin-tab"};function F(o,t,v,b,c,C){return i(),s("div",$,[n("div",{class:S(o.direct?"active":""),onClick:t[0]||(t[0]=l=>o.$emit("changeDirect",!0))},e(o.formCoinSymbol),3),n("div",{class:S(o.direct?"":"active"),onClick:t[1]||(t[1]=l=>o.$emit("changeDirect",!1))},e(o.toCoinSymbol),3)])}const J=_(Z,[["render",F],["__scopeId","data-v-6ad39d39"]]),Q=A({components:{Modal:q},props:{isIncrease:{type:Boolean,required:!1},fromCoin:{type:Object,required:!0},toCoin:{type:Object,required:!0},fromCoinAmount:{type:String,default:""},toCoinAmount:{type:String,default:""},minPrice:{type:String,default:""},maxPrice:{type:String,default:""},currentPriceReverse:{type:String,default:""},currentPrice:{type:String,default:""},poolInfo:{type:Object,required:!0}},setup(o,t){const{t:v,locale:b}=P(),c=r(!0);function C(a){c.value=a}const l=r(""),m=r(""),p=r(""),f=r(""),y=r(""),u=r("");return N(()=>{l.value=String(d(String(o.minPrice),6)),m.value=String(d(String(o.maxPrice),6)),p.value=o.currentPrice,f.value=o.currentPriceReverse}),g(c,a=>{a?(l.value=String(d(String(o.minPrice),6)),m.value=String(d(String(o.maxPrice),6))):(l.value=String(d(String(1/Number(o.maxPrice)),6)),m.value=String(d(String(1/Number(o.minPrice)),6))),p.value=o.currentPrice,f.value=o.currentPriceReverse}),g(()=>o.minPrice,a=>{a&&(y.value=a.toString())},{immediate:!0}),g(()=>o.maxPrice,a=>{a&&(u.value=a.toString())},{immediate:!0}),{showNum:E,precision:X,addCommom:T,t:v,clickAddBtn:async()=>{t.emit("toAdd")},min:l,max:m,importIcon:K,fixD:R,decimalFormat:d,direct:c,changeDirect:C,mockMin:y,mockMax:u}}});const I=o=>(U("data-v-99ed2a6f"),o=o(),V(),o),O=I(()=>n("svg",{class:"icon modal-icon-close","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-a-icon-Shutdown"})],-1)),Y={class:"add-liquidity-container"},j={class:"top"},G={class:"induction info"},L={class:"item"},H={class:"induction-text"},x={key:0,class:"induction-value"},oo={key:1,class:"induction-value"},eo={class:"item"},no={class:"induction-text"},io={key:0,class:"induction-value"},to={key:1,class:"induction-value"},so={class:"item"},ao={class:"induction-text"},lo={class:"induction-value"},ro={class:"range-box"},mo={class:"range-title"},co={class:"current-price"},uo={key:0},po={key:1},fo={class:"price-range-block"},yo={class:"price-item"},ko={class:"title"},vo={class:"price"},Co={key:0,class:"text"},go={key:1,class:"text"},ho={class:"price-item"},bo={class:"title"},So={class:"price"},Ao={key:0,class:"text"},_o={key:1,class:"text"},Io={class:"text-block"},Bo={class:"note"},wo={class:"note"},qo=I(()=>n("svg",{class:"icon","aria-hidden":"true"},[n("use",{"xlink:href":"#icon-icon-add"})],-1));function Po(o,t,v,b,c,C){const l=B,m=w,p=J,f=W,y=D("Modal");return i(),M(y,{width:"440px",visible:!0,footer:null,title:o.$t("button.addLiquidity"),class:"add-liquidity-modal",onCancel:t[1]||(t[1]=u=>o.$emit("onClose"))},{closeIcon:h(()=>[O]),default:h(()=>[n("div",Y,[n("div",j,[k(l,{"from-coin":o.fromCoin,"to-coin":o.toCoin},null,8,["from-coin","to-coin"]),k(m,{"current-status":o.poolInfo.currentStatus||""},null,8,["current-status"])]),n("div",G,[n("div",L,[n("span",H,e(o.fromCoin.symbol),1),o.isIncrease?(i(),s("span",oo,e(o.showNum(o.poolInfo.amountA,o.poolInfo&&o.poolInfo.token_a&&o.poolInfo.token_a.decimals))+" \u2192 "+e(o.showNum(o.precision.plus(Number(o.poolInfo.amountA),Number(o.fromCoinAmount)),o.poolInfo&&o.poolInfo.token_a&&o.poolInfo.token_a.decimals)),1)):(i(),s("span",x,e(o.fromCoinAmount||0),1))]),n("div",eo,[n("span",no,e(o.toCoin.symbol),1),o.isIncrease?(i(),s("span",to,e(o.showNum(o.poolInfo.amountB,o.poolInfo&&o.poolInfo.token_b&&o.poolInfo.token_b.decimals))+" \u2192 "+e(o.showNum(o.precision.plus(Number(o.poolInfo.amountB),Number(o.toCoinAmount)),o.poolInfo&&o.poolInfo.token_b&&o.poolInfo.token_b.decimals)),1)):(i(),s("span",io,e(o.toCoinAmount||0),1))]),n("div",so,[n("span",ao,e(o.$t("common.feeTier")),1),n("span",lo,e(o.poolInfo.fee)+" %",1)])]),n("div",ro,[n("div",mo,[n("h3",null,e(o.$t("common.selectedRange")),1)]),n("div",co,[o.direct?(i(),s("div",uo," 1 "+e(o.fromCoin.symbol)+" \u2248 "+e(o.addCommom(o.currentPrice,o.toCoin.decimals))+"\xA0"+e(o.toCoin.symbol),1)):(i(),s("div",po," 1 "+e(o.fromCoin.symbol)+" \u2248 "+e(o.addCommom(o.currentPriceReverse,o.toCoin.decimals))+"\xA0"+e(o.toCoin.symbol),1)),k(p,{direct:o.direct,"form-coin-symbol":o.fromCoin.symbol,"to-coin-symbol":o.toCoin.symbol,onChangeDirect:t[0]||(t[0]=u=>o.direct=u)},null,8,["direct","form-coin-symbol","to-coin-symbol"])]),n("div",fo,[n("div",yo,[n("div",ko,e(o.$t("common.minPrice")),1),n("p",vo,e(o.min),1),o.direct?(i(),s("div",go,e(o.toCoin.symbol)+" per "+e(o.fromCoin.symbol),1)):(i(),s("div",Co,e(o.fromCoin.symbol)+" per "+e(o.toCoin.symbol),1))]),n("div",ho,[n("div",bo,e(o.$t("common.maxPrice")),1),n("p",So,e(o.mockMax.indexOf("\u221E")>-1||o.mockMax.indexOf("+")>-1?"\u221E":o.max),1),o.direct?(i(),s("div",_o,e(o.toCoin.symbol)+" per "+e(o.fromCoin.symbol),1)):(i(),s("div",Ao,e(o.fromCoin.symbol)+" per "+e(o.toCoin.symbol),1))])]),n("div",Io,[n("div",Bo,e(o.t("common.positionwillBe",{symbol:`${o.fromCoin.symbol}`})),1),n("div",wo,e(o.t("common.positionwillBe",{symbol:`${o.toCoin.symbol}`})),1)])])]),k(f,{class:"big-btn liquidity-btn",onClick:o.clickAddBtn},{default:h(()=>[qo,z(" "+e(o.isIncrease?o.$t("newAdd.addMore"):o.$t("button.addLiquidity")),1)]),_:1},8,["onClick"])]),_:1},8,["title"])}const Do=_(Q,[["render",Po],["__scopeId","data-v-99ed2a6f"]]),Mo="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAngAAABUBAMAAADjSFdtAAAAMFBMVEVHcEwlW04lW04mW04lWUwmW04mXE4lW04mW04SHx4gPzclWk1o/9gVKyhSyKs8jnpksmsVAAAACXRSTlMA6xZ3ykwulK7bAIv/AAAEOUlEQVR42u2dTU8TURSGh7YUEjeISkxm04pREzZoJC66qR8Ji9lgiNGkm2LcsSGKKzZo4qq/YCyFtTQmjC1YevEHEEf2FdE1CX+AhYlt7xk6t3PvnSld2JD33QxluumTOee899yPMQzoAio2v/zQdK7OzqTAold0zy1Gct4CX08aLjBnduZlKnZrftlktTkQia5Jkz3Oex+S95lzD0yi6rZZFWhNWuw1qERT3Kzlxf8kC840uETKd1Y3uxa9CsBE0UpVUh+Gm3F7A2zCdJMpIvQVuwY6IUFrTshvJM3LDJZFr1xNYYlHakYmCz7aSsuWFHeGdoyhLwCkU0ZZVRPbxtQWAOkyni+tJR+0GgNvPNsSd55ZqyCky3idB++FSX2BD9QqsJiTByG1YqaX8WJ3GdtsNEqlTcau8BISf4Ixmk6JWodd3SaVPXpNfohbzeBinP54yj7bZ/p55o4TX8FIXS4oqY2wb7ZPh55/ScImq6O24tWGui2oXKXAzYyBksrk0QhigTVEeCU2IeKFgrV2jkaxu3aXiuRShp0UOKlGr22l63ZAZSolhSVwkiq9w6/WbhBescrvLY6DkzzlrVKpJWB/Tlz34C99oII7iqQnl8nzWo5sStFtix7Dw22eDx1wkro8ikzzE6+wewdNiocn3zm8j1QqLDg9mSgi4xS1Jfe0ddlwybZQdz6DEZpMU7zVmaao3Tjg15NTittx/7cgUTlukTM8au11ite9Y4pb/mAmtkFK1hXgcWlSmK794Ndf+xTGvFTE0RuQycrz5gB5k7V98WrzpgDKrXRwxqmM1lXwyrxUmBigKZ3K0K4KXnEMXkUlSmaLang7/tQICW2BilBsg/Co3GbQGgiKPMiKGh5/NHNwyc2y+e56XoDHo9JqqOCVeFJczIKdscCYsKSH1lKYani8HE+NgZ1ReH+nJoNnq+DZgwcvsfmfxFIxwe9e2mpfmBoe839vAH5BdlDhuYIGFd6Ahq0MHnJeaMEgeP4JDBcFI5pVKTSU8GBVIppkCTzPJANe2PCM8/p97IeH4VnExoDrtykuGgM9taRk8NCSUkpshkrgoRmqkdCGl8CjNnwVpCQSJoA4r3VfwcAEkE7C1GPQqmDqUSdh0jsID5PeOgnLLYLwsNwigleJtRf6BBoDWOijl3+JWQAelpjp1b24URAWN+qFZbX9tAawoLuPARq2EvST9LhNxiaW8yjC9qksKKmcHjbu9dMbCNkymkZXQBO3Z5OR8s3KBUStrt56TqS9Tf7Ito862+Sb0Yxaq5PmgIZWuUA7Sl8yOhWh62gQ8SYks3qV892DDN1xSE3/Mg0+IVlPdRBXrICMF5r1VEfALTjIeKFSHD4YZ4/AJsIwQ3rspYXBRaTAlR64WkXQRqu4OOq3DwUPmXZwgFlk4XjzvvIeDtbvQ75XOlTxSofe8eFlIhda/wAfMfQ7ksgW2wAAAABJRU5ErkJggg==",zo=""+new URL("img-lock_2x.693ff210.png",import.meta.url).href;export{Mo as _,zo as a,Do as b,J as c};
