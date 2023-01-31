import{a as S,F as D,z as L,w as N,N as U,v as q,R as d,fn as g,fo as B,b as R,o as I,e as v,f as E,l as r,m as l,B as F,y as f}from"./entry.35669d63.js";const M=S({setup(){const a=D(),e=L(),P=()=>{const t={coinTypeA:"0x80d6b00867cafcd40f9db3aa570ad1196f11ec5f57506799aec2a2940651fd37::coina::USDT",coinTypeB:"0x80d6b00867cafcd40f9db3aa570ad1196f11ec5f57506799aec2a2940651fd37::coinb::APT",poolType:"0x45ba3bca9e81591a852df423105ecf2978dc03a5c0223033669bb889656a94a8::pool::Pool<0x80d6b00867cafcd40f9db3aa570ad1196f11ec5f57506799aec2a2940651fd37::coina::USDT,0x80d6b00867cafcd40f9db3aa570ad1196f11ec5f57506799aec2a2940651fd37::coinb::APT>",poolAddress:"0xa24877930240eaa62e6349fb8a68a6d9e818d4e3239f5c68889603dc1e034d39",collectionName:"Cetus CLMM Position/USDT-APT-10",tickSpacing:"10",positionIndex:"9",uri:"https://uswb6tcbq7bcuah4n5o3b4dyb77pizckgoowufytg5bwpjm2sv6a.arweave.net/pKwfTEGHwioA_G9dsPB4D_70ZEoznWoXEzdDZ6WalXw",coinAmountA:"89198",coinAmountB:"111065",current_sqrt_price:"18456853422185132018",current_tick_index:"10",fee_growth_global_a:"0",fee_growth_global_b:"0",fee_protocol_coin_a:"0",fee_protocol_coin_b:"11",fee_rate:"1000",liquidity:"20063259",tick_indexes_handle:"0x8bf0807ce135400d8efca2ea54577ff2439b9a25538b8c1a14b7c7db79c072e1",ticks_handle:"0x6f9dd06c94763751e333448930329b1d645a66fba8857260aca575a846987067"},c={name:"CLMM/USDT-APT-10-2",pool:"0xa24877930240eaa62e6349fb8a68a6d9e818d4e3239f5c68889603dc1e034d39",liquidity:"171",tick_lower_index:"0",tick_upper_index:"1200",fee_growth_inside_a:"0",fee_owed_a:"0",fee_growth_inside_b:"0",fee_owed_b:"0"},o=t,s=c,i=new d(o.current_sqrt_price),u=Number(s.tick_lower_index),b=Number(s.tick_upper_index),_=new d(100),w=!0,k=.1;e.estLiquidityAndcoinAmountFromOneAmounts({tokenA:g[0],tokenB:g[1],lowerTick:u,upperTick:b,coinAmount:_,iscoinA:w,roundUp:!0,slippage:k,curSqrtPrice:i})},m=async()=>{a.getMyPositons("0x251dda55e5071be8c761c8a99d7af559ccb6ccc52ad3f945712d3ae8b87c35e0",a.poolsObj),await e.getPositionInfo("0xc788f781c7c1d84c23dfd9b17699725b3f7f3da048845ae5b489dd6d73b35c66","Cetus Position | USDT-USDC_tick(5)","Cetus LP | Pool4-24")};N(()=>a.myPositions,t=>{});const y=U(),p=q(()=>y);return{testPreAddLiquidity:P,testGetMyPosition:m,testSwap:async()=>{const t={...B[0],poolAddress:"0xc788f781c7c1d84c23dfd9b17699725b3f7f3da048845ae5b489dd6d73b35c66",poolType:"0x80d6b00867cafcd40f9db3aa570ad1196f11ec5f57506799aec2a2940651fd37::pool::Pool<0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::cetus_faucet::USDT,0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::cetus_faucet::USDC>"};await e.preSwap({pool:t,a2b:!0,byAmountIn:!0,amount:"1"});const c=await e.getSwapTransactionPayload({pool:t,a2b:!0,byAmountIn:!0,amount:"0.0001",slippage:.01});let o;try{o=await p.value.currentWallet.signAndSubmitTransaction(c)}catch{}if(o&&o.hash){const s={title:"success",desc:"",hash:o.hash,sender:p.value.address,chainName:"Aptos"};await e.watchTransaction(s)&&alert("swap\u6210\u529F")}},testAddLiquidity:async()=>{const t=await e.getAddLiquidityTransactionPayload({pool:{poolAddress:"0xc788f781c7c1d84c23dfd9b17699725b3f7f3da048845ae5b489dd6d73b35c66",token_a:{address:"0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::cetus_faucet::USDT",decimals:6},token_b:{address:"0x84dc9d921d277db5047dcb17addc2ecfbddfad087dd4ea825b2d17785755cb29::cetus_faucet::USDC",decimals:6}},amount:"0.0001",fix_amount_a:!0,tick_lower:32185,tick_upper:32195,index:0,slippage:.05,roundUp:!0});let c;try{c=await p.value.currentWallet.signAndSubmitTransaction(t)}catch{}if(c&&c.hash){const o={title:"success",desc:"",hash:c.hash,sender:p.value.address,chainName:"Aptos"};await e.watchTransaction(o)&&alert("\u6DFB\u52A0\u6210\u529F")}},testGetPoolList:async()=>{await e.getPools(),await e.getPool("0xcbbbd6dada56fd265d80bc51c70ad3d925613204179bedda3f3557724f251623")},testGetCollectFeesQuote:async()=>{const t="0xb023816f70d5f37e5910f9037e20d076400b4c706800d2c145566fa41d9b4b1a",c="Cetus LP | Pool1-4",o=await e.getPool(t),s=o.ticks_handle,i=await e.getPositionInfo(o,"Cetus Position | USDT-USDC_tick(2)",c),u=await e.getTickDataByIndex(s,i.tick_lower_index),b=await e.getTickDataByIndex(s,i.tick_upper_index);await e.getCollectFeesQuote({pool:{...o,token_a:{decimals:6},token_b:{decimals:6}},position:i,tickLowerData:u,tickUpperData:b})},getNft:async()=>{try{const t=await window.martian.getAccountResources()}catch{}},getNftHash:()=>{const t={creator:"0xb023816f70d5f37e5910f9037e20d076400b4c706800d2c145566fa41d9b4b1a",collection:"Cetus Position | USDT-USDC_tick(2)",name:"Cetus LP | Pool1-5"};e.getNftHash(t)},testPosRewarder:async()=>{const t="0x4e9878bfcbde1be91e605dc85ae4b8340a6359846fd9f73580d1ad3abea98fb0",c="Cetus LP | Pool2-9",o=await e.getPool(t),s=o.ticks_handle,i=await e.getPositionInfo(o,"Cetus Position | APT-USDC_tick(60)",c),u=await e.getTickDataByIndex(s,i.tick_lower_index),b=await e.getTickDataByIndex(s,i.tick_upper_index);await e.getPosRewardersAmount({poolAddress:t,positionName:c,tickLowerData:u,tickUpperData:b})},getTokenList:async()=>{await e.getTokenList()},testEstPositionAPRWithDeltaMethod:async()=>{const t=await e.getPool("0x3904fc6d0dcb6e1937a6aced4597ec383afc752676d89f1d59b3d30b959fe161"),c="Cetus LP | Pool1-3",o=await e.getPositionInfo(t,"Cetus Position | APT-USDC_tick(60)",c),s=t.current_tick_index,i=Number(o.tick_lower_index),u=Number(o.tick_upper_index),b=new d(t.current_sqrt_price),_=new d(t.liquidity),w=new d(t.fee_rate),k=new d(1e5),C=new d(5e5),h=new d(1),T=t.rewarder_infos[0]&&new d(t.rewarder_infos[0].emissionsEveryDay),A=t.rewarder_infos[1]&&new d(t.rewarder_infos[1].emissionsEveryDay),x=t.rewarder_infos[2]&&new d(t.rewarder_infos[2].emissionsEveryDay);await e.getEstPositionAPRWithDelta(s,i,u,b,_,w,k,C,h,T,A,x)}}}});function G(a,e,P,m,y,p){const n=F;return I(),v("div",null,[E("div",null,[r(n,{onClick:a.testPreAddLiquidity},{default:l(()=>[f("test pre add liquidity")]),_:1},8,["onClick"]),r(n,{onClick:a.testGetMyPosition},{default:l(()=>[f("get my position")]),_:1},8,["onClick"]),r(n,{onClick:a.testSwap},{default:l(()=>[f("test swap")]),_:1},8,["onClick"]),r(n,{onClick:a.testAddLiquidity},{default:l(()=>[f("test add")]),_:1},8,["onClick"]),r(n,{onClick:a.testGetPoolList},{default:l(()=>[f("get pool list")]),_:1},8,["onClick"]),r(n,{onClick:a.getNft},{default:l(()=>[f("get NFT")]),_:1},8,["onClick"]),r(n,{onClick:a.getNftHash},{default:l(()=>[f("get NFT hash")]),_:1},8,["onClick"]),r(n,{onClick:a.getTokenList},{default:l(()=>[f("get token list")]),_:1},8,["onClick"]),r(n,{onClick:a.testPosRewarder},{default:l(()=>[f("test pos rewarder")]),_:1},8,["onClick"]),r(n,{onClick:a.testGetCollectFeesQuote},{default:l(()=>[f("get collect fee quote")]),_:1},8,["onClick"]),r(n,{onClick:a.testEstPositionAPRWithDeltaMethod},{default:l(()=>[f("test EstPositionAPRWithDeltaMethod")]),_:1},8,["onClick"])])])}const X=R(M,[["render",G]]);export{X as default};
