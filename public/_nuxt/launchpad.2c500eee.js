import{u as e}from"./useSuiLaunchpad.96bebb55.js";import{f1 as c}from"./entry.c7ab2355.js";import{_ as l}from"./pool.8fcbe760.js";const d=c("launchpad",{state:()=>({currentLaunchpadPoolInfo:{},launchpadAllPools:[],launchpadOwnerAllPools:[],launchpadJoinPools:[],haveLaunchpad:!1,launchpadPoolsLoading:!0,getOwnDateLoading:!0,ownIsWhiteList:!1,committedCoinAssetCount:"0",currentPoolNumData:{},idoPoolConfigInfo:{},purchaseMark:{},settlePayTokenAInfo:{},settlePayTokenBInfo:{},getPurchaseAmountLoading:!0,currentTab:"latest"}),actions:{async setSettlePayTokenAInfo(a){this.settlePayTokenAInfo=a},async setSettlePayTokenBInfo(a){this.settlePayTokenBInfo=a},async setGetPurchaseAmountLoading(a){this.getPurchaseAmountLoading=a},async setPurchaseMark(a){this.purchaseMark=a},async setGetOwnDateLoading(a){this.getOwnDateLoading=a},async setCurrentLaunchpadPoolInfo(a){this.currentLaunchpadPoolInfo=a},async setCurrentTab(a){this.currentTab=a},async setCurrentPoolNumData(a){this.currentPoolNumData=a},async setOwnIsWhiteList(a){this.ownIsWhiteList=a},async setMyCountCommittedCoinAsset(a){this.committedCoinAssetCount=a},async setLaunchpadPoolsLoading(a){this.launchpadPoolsLoading=a},async setLaunchpadAllPools(){this.launchpadAllPools=[],this.setLaunchpadPoolsLoading(!0);const n=await e("Sui").getLaunchpadAllPools()||[];this.launchpadAllPools=n.sort((o,t)=>t.activity_end_time-o.activity_end_time),this.setLaunchpadPoolsLoading(!1)},async setLaunchpadAllPoolsNoLoading(){const n=await e("Sui").getLaunchpadAllPools()||[];this.launchpadAllPools=n.sort((o,t)=>t.activity_end_time-o.activity_end_time)},async getCurrentLaunchpadPoolInfo(a){this.setGetPurchaseAmountLoading(!0);const n=e("Sui"),o=await n.getLaunchpadPoolInfo(a)||{},t=await n.getCoinInfo(o.coin_type_raise,o.coin_type_sale);this.currentLaunchpadPoolInfo={raiseCoinInfo:{logoURI:t[o.coin_type_raise].logo_url,...t[o.coin_type_raise]},saleCoinInfo:{logoURI:t[o.coin_type_sale].logo_url,...t[o.coin_type_sale]},...o},this.setGetOwnDateLoading(!1)},async getCurrentLaunchpadPoolInfoNoLoading(a){const n=e("Sui"),o=await n.getLaunchpadPoolInfo(a)||{},t=await n.getCoinInfo(o.coin_type_raise,o.coin_type_sale);this.currentLaunchpadPoolInfo={raiseCoinInfo:{logoURI:t[o.coin_type_raise].logo_url,...t[o.coin_type_raise]},saleCoinInfo:{logoURI:t[o.coin_type_sale].logo_url,...t[o.coin_type_sale]},...o}},async setLaunchpadJoinPools(a){this.setLaunchpadPoolsLoading(!0);const o=await e("Sui").getJoinPools(a)||[];o.length<1?this.setLaunchpadPoolsLoading(!1):(this.launchpadJoinPools=o.sort((t,s)=>s.activity_end_time-t.activity_end_time),this.setLaunchpadPoolsLoading(!1))},async setLaunchpadOwnerAllPools(a,n){const t=await e("Sui").getOwnerPools(a,n)||[];t.length<1?this.haveLaunchpad=!1:(this.launchpadOwnerAllPools=t.sort((s,i)=>i.activity_end_time-s.activity_end_time),this.haveLaunchpad=!0)},async getIdoPoolConfigInfo(){const a=await $fetch(`${l.Sui.api}/v2/sui/launchpad/config`);return this.idoPoolConfigInfo=a&&a.data.data||{},a.data}}});export{d as u};
