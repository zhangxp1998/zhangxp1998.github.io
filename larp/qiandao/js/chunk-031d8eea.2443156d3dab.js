(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-031d8eea"],{"0826":function(t,e,i){t.exports=i.p+"img/app-logo.7fe4f374.png"},"18e5":function(t,e,i){"use strict";function s(t,e){return t/7500*100+e}function n(t,e="rem"){const i=/rpx/;return!window&&wx?t:"number"===typeof t?s(t,e):i.test(t)?s(+t.replace(i,""),e):t}i.d(e,"a",(function(){return n}))},4333:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var s=i("fc44"),n=i.n(s),o=i("2b0e"),r=i("a382");function a(){const t=Object(o["ref"])(0),e=e=>new Promise((i,s)=>{try{const s=new n.a({resources:e,concurrency:4});s.addProgressListener((e,i)=>{t.value=e/i*100}),s.addCompletionListener(()=>{i()}),s.start()}catch(o){r["c"].show({title:"error: "+o.message}),s(o),console.log("preloadErr",o)}});return{handleLoad:e,progress:t}}},"50fd":function(t,e,i){},5388:function(t,e,i){"use strict";i("b25f")},"596b":function(t,e,i){"use strict";function s(t,{target:e=document.body}={}){const i=document.createElement("textarea"),s=document.activeElement;i.value=t,i.setAttribute("readonly",""),i.style.contain="strict",i.style.position="absolute",i.style.left="-9999px",i.style.fontSize="12pt";const n=document.getSelection();let o=!1;n.rangeCount>0&&(o=n.getRangeAt(0)),e.append(i),i.select(),i.selectionStart=0,i.selectionEnd=t.length;let r=!1;try{r=document.execCommand("copy")}catch{}return i.remove(),o&&(n.removeAllRanges(),n.addRange(o)),s&&s.focus(),r}i.d(e,"a",(function(){return s}))},"62db":function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"open-app-bar"},[e("section",{staticClass:"float-bar",class:{"is-scrolling":!t.isScrollingDown&&t.isH5,"is-padding":!t.isH5}},[t.isH5?e("section",{staticClass:"open-app van-hairline--bottom"},[e("div",{staticClass:"content"},[e("img",{attrs:{src:i("0826"),alt:"logo"}}),t._v(" "+t._s(t.content)+" ")]),e("a",{ref:"link"},[t._v("打开APP")])]):t._e(),t._t("default")],2),t._t("keep")],2)},n=[],o=i("2f62"),r=i("5af3"),a={props:{content:{type:String,default:""},jmlink:{type:String,default:""},params:{type:Object,default:()=>({})}},data(){return{lastScrollTop:0,isScrollingDown:!1}},computed:{...Object(o["mapState"])("app",{isH5(t){return t.app===r["a"].H5}})},mounted(){this.isH5&&(window.addEventListener("scroll",this.onScroll),new window.JMLink({jmlink:this.jmlink,button:this.$refs.link,inapp:!0,params:this.params}))},beforeDestroy(){this.isH5&&window.removeEventListener("scroll",this.onScroll)},methods:{onScroll(){const t=window.pageYOffset||document.documentElement.scrollTop;this.isScrollingDown=t>this.lastScrollTop,this.lastScrollTop=t<=0?0:t}}},l=a,c=(i("e1a3"),i("0c7c")),u=Object(c["a"])(l,s,n,!1,null,"aa21a870",null);e["a"]=u.exports},"7bee":function(t,e,i){},"7f29":function(t,e,i){"use strict";function s(t,e=2,i=!1){return t=(+t).toFixed(e),i?t:Number(t)+""}i.d(e,"a",(function(){return s}))},"84cf":function(t,e,i){"use strict";var s=i("0ef7");const n=t=>s["c"].post("/v1/stock-order/activity/info",t),o=t=>s["c"].post("/v1/stock-order/activity/list",t),r=t=>s["c"].post("/v1/stock-order/bargin-v3",t),a=t=>s["c"].post("/v1/stock-order/activity/help",t),l=t=>s["c"].post("/v1/stock-order/activity/receive",t),c=t=>s["c"].post("/v1/stock-order/activity/fes-info",t),u=t=>s["c"].post("/v1/stock-order/activity/info",t),d=t=>s["c"].post("/v1/stock-order/activity/subscribe",t),p=t=>s["c"].post("/v1/stock-order/activity/subscribe-info",t),h=t=>s["c"].post("/v1/stock-order/recommend-spu",t);e["a"]={getStockBarginV3:r,getStockActivityInfo:n,getStockActivitylist:o,getStockActivityHelp:a,doStockActivityReceive:l,getActivityFesInfo:c,getActivityInfo:u,doActivitySubscribe:d,getActivitySubscribeInfo:p,getRecommendSpu:h}},9831:function(t,e,i){},adfa:function(t,e,i){"use strict";i("7bee")},ae40:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return t.innerVisible?e("div",{staticClass:"du-popup"},[e("div",{class:t.maskClassName,style:t.maskStyleFormat,on:{click:t.handleMaskClick}},[t._t("maskContent")],2),e("div",{class:t.className,style:t.style},[t.headerVisible?e("div",{class:["du-popup__header","du-popup__header--"+t.titleAlign]},[e("div",{staticClass:"du-popup__title"},[t._v(t._s(t.title))]),t.closable?e("div",{staticClass:"du-popup__close",on:{click:t.handleClose}}):t._e()]):t._e(),t._t("default")],2)]):t._e()},n=[],o=i("2b0e"),r=i("e475"),a=i.n(r),l=i("702e"),c=i.n(l),u={props:{title:{type:String,default:""},titleAlign:{type:String,default:"default"},headerVisible:{type:Boolean,default:!0},type:{type:String,default:"center"},visible:{type:Boolean,default:!1},extClass:{type:[String,Array,Object],default:""},extStyle:{type:[String,Object],default:""},maskClick:{type:Boolean,default:!0},closable:{type:Boolean,default:!0},maskClass:{type:[String,Array,Object],default:""},maskStyle:{type:[String,Object],default:""}},setup(t,{emit:e}){const i=Object(o["ref"])(t.visible),s=Object(o["ref"])(!1),n=Object(o["computed"])(()=>{const{extStyle:e}=t;return"string"===typeof e?e:c()({...e})}),r=Object(o["computed"])(()=>{const{extClass:e}=t;return a()("du-popup__content",e,{["du-popup--"+t.type]:!0,[`du-popup--${t.type}-open`]:s.value})}),l=Object(o["computed"])(()=>{const{maskStyle:e}=t;return"string"===typeof e?e:c()({...e})}),u=Object(o["computed"])(()=>{const{maskClass:e}=t;return a()("du-popup__mask",e,{"du-popup__mask--open":s.value})}),d=()=>{t.maskClick&&(e("update:visible",!1),e("close"))},p=()=>{e("update:visible",!1),e("close")};return Object(o["watch"])(()=>t.visible,e=>{e?i.value=e:setTimeout(()=>{i.value=t.visible},400),e?setTimeout(()=>{t.visible&&(s.value=!0)},100):s.value=!1},{immediate:!0}),{innerVisible:i,style:n,className:r,maskStyleFormat:l,maskClassName:u,handleMaskClick:d,handleClose:p}}},d=u,p=(i("adfa"),i("0c7c")),h=Object(p["a"])(d,s,n,!1,null,null,null);e["a"]=h.exports},b25f:function(t,e,i){},c91e:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ec-avatar",style:{width:""+t.realSize,height:""+t.realSize}},[e("div",{staticClass:"ec-avatar__img"},[e("Thumbnail",{attrs:{size:{width:"100%",height:"100%"},url:t.url,defaultUrl:t.defaultAvatar}})],1),t.verified?e("img",{staticClass:"ec-avatar__org",attrs:{src:i("d146"),alt:"",mode:"aspectFit"}}):t._e(),t._t("default")],2)},n=[],o=i("d17e"),r=i("18e5"),a={components:{Thumbnail:o["a"]},props:{size:{type:[Number,String],default:96},url:{type:String,required:!0},verified:{type:Boolean,default:!1}},data(){return{defaultAvatar:""}},computed:{realSize(){const{size:t}=this;return Object(r["a"])(t+"rpx")}}},l=a,c=(i("5388"),i("0c7c")),u=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=u.exports},cd4a:function(t,e,i){"use strict";i("50fd")},d146:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAVFBMVEUAAAD/////////////////////////////////////////////ugD/wgD/sgBXLwL/ygD/zwH/yjLdogH/+up/UQL/8cubaQL/6623gAH/1F3/5Y+KKH4eAAAAC3RSTlMA2/QPpVYniLxxO/vwjn8AAANGSURBVFjDvZiJlqIwEEUbCM1ighjZ+f//HIGqvIQEwfHMPPsoZrm+qjKY9M9/0G+aiTyPojwXRfr7d4gij2+OYlF8iEqK6BZUnibXIRl8eIqK5BsIFBcXKCnCOXZUnlkRt0vK3pfHt9I0Xdc0fq7fFK2MXcIw6QdJT4PLig45aWwzZoMwqMHJdHlAsQfNj6DmU44d0eAD4AicQFy/oDQIJwRqkJ/EqzRq1D3eS3eo1x4jrKycCoFlXnpBqU85yHTphgRKvWph1a9rMPn9+mr8RDYmQ17qS3qY/BSWmZhrBMqJdINqeWZ0fVmTseOZGULj1QGn22enYPCDJo7tS/2zVuuDXqhV1mqDa56VEibiKtVqHd/fNz03BKHarbFVjOVqCVoGnN+lb9Gd1KoNWy+vzzvga7tiO3HixDQrcnNnSaUMqQWG2YMTVc5lUqSeZ4zLjE0vMwiKNDlRxRQTdS7J7FuaYjRuDf1IY9Yn1AqpGVaz/Pk9B0C5ae0o+YlrnlirclIsBNEH35pQZ2t9ZkgNC+XidzAHITmpdadBr/QmSkAhlDxDoRoCSCIhDMSEIaQDjC37q9PCGvwCI7AUuqWX/iRKPMJMCy88qAliIGnmSosoXTMSGAQl96JIzJX0dTvCqPWxiD2YbKOfIEixXXBp+reriqKSPdsCYLtEwbHAtelW6xWmU80AYOHrZy0GuRcFQy9mPmBYDNbSRDeJbHCqfWFpvhSHS2Wi4hT5cm7qAsmBKkRFBfM1IcOUY45qR2oNptoaKnxIZWJK3Vu6NkOrbXw1MqW36Myyb+n2zXj23ODngOiwgwSL/a5EVxV5YbUcky+NvcluWzIwQNKD7YxoXC8W4ceXVbh2KmjLTl9BTJrw2+tvTDSP5b/qOY5PNJhefYMZ304njWkILcasbmDGUsStg+vmSF14L1piC1ld0HC0w85u8HMma2PsndBybK/1CQXbdPHuKNVMbyCoNLaP3qHh1JDu7CPV6aFsCIJwfgElzAFo8sKBE1AuHDW7edJkY5rBAOVACeoF4cBqSXjZDX5/vj3RlwgMun56hooTUITVeAb6CgKlIg7mRJQ/nylJRbTzkeGfN5+hyjTLxEtZlpZA/Dv9AUcQuokAd6DHAAAAAElFTkSuQmCC"},d17e:function(t,e,i){"use strict";var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ec-thumbnail",style:{width:t.cssWidth,height:t.cssHeight,"border-radius":t.cssBorderRadius,...t.extStyle}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.showDisplayImage,expression:"showDisplayImage"}],staticClass:"ec-thumbnail__image",attrs:{src:t.displaySrc,alt:t.alt,loading:"lazy","lazy-load":"",mode:"aspectFill"},on:{click:t.handlePreview}}),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.showDisplayImage,expression:"!showDisplayImage"}],staticClass:"ec-thumbnail__image",attrs:{src:t.defaultUrl,alt:"默认图片",loading:"lazy","lazy-load":"",mode:"aspectFill"}})])},n=[],o=(i("4662"),i("28a2")),r=i("18e5"),a={props:{url:{type:String,required:!0},defaultUrl:{type:String,default:""},size:{type:Object,default:()=>({})},alt:{type:String,default:""},borderRadius:{type:[Number,String],default:0},preview:{type:Boolean,default:!1},extStyle:{type:Object,default:()=>{}}},data(){return{showDisplayImage:!0,displaySrc:""}},watch:{targetUrl:{immediate:!0,handler(t,e){t&&t!==e&&this.setDisplaySrc()}}},computed:{cssBorderRadius(){return Object(r["a"])(this.borderRadius)},cssWidth(){const{width:t}=this.size;return t?"string"===typeof t?t:t+"px":"100%"},cssHeight(){const{height:t}=this.size;return t?"string"===typeof t?t:t+"px":"100%"},targetUrl(){const{url:t,size:{style:e}}=this;return e?t+e:t}},methods:{setDisplaySrc(){this.displaySrc=this.targetUrl},handlePreview(){const{url:t,preview:e}=this;e&&Object(o["a"])({images:[t+"!lfit_w1080_jpg"],closeable:!0})}}},l=a,c=(i("cd4a"),i("0c7c")),u=Object(c["a"])(l,s,n,!1,null,null,null);e["a"]=u.exports},e1a3:function(t,e,i){"use strict";i("9831")},e475:function(t,e,i){var s,n;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(){"use strict";var i={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var s=arguments[e];if(s){var n=typeof s;if("string"===n||"number"===n)t.push(s);else if(Array.isArray(s)){if(s.length){var r=o.apply(null,s);r&&t.push(r)}}else if("object"===n){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){t.push(s.toString());continue}for(var a in s)i.call(s,a)&&s[a]&&t.push(a)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):(s=[],n=function(){return o}.apply(e,s),void 0===n||(t.exports=n))})()},fc44:function(t,e,i){(function(e,i){t.exports=i()})(0,(function(){"use strict";var t=Object.assign||function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),i=1;i<arguments.length;i++){var s=arguments[i];if(void 0!==s&&null!==s)for(var n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}return e},e=document.body||document.getElementsByTagName("body")[0],i=function(i){this.opts=t({resources:[],concurrency:0,perMinTime:0,attr:"data-preload",crossOrigin:!1,onProgress:null,onCompletion:null},i);for(var n=document.querySelectorAll("["+this.opts.attr+"]"),o=0;o<n.length;o++){var r=n[o];r.src&&this.opts.resources.push(r.src)}this.length=this.opts.resources.length,this.completedCount=0,this.loadingIndex=0,this.resourceMap={},this.div=document.createElement("div");var a=this.div.style;a.visibility="hidden",a.position="absolute",a.top=a.left="0",a.width=a.height="10px",a.overflow="hidden",a.transform=a.msTransform=a.webkitTransform=a.oTransform="translate(-10px, -10px)",e.appendChild(this.div),this.done=function(t,e){if(0===this.length)return this.onCompletion&&this.onCompletion(0);this.completedCount+=1,this.resourceMap[t]=e,this.onProgress&&this.onProgress(this.completedCount,this.length,t),this.completedCount>=this.length?this.onCompletion&&this.onCompletion(this.length):this.opts.concurrency>0&&this.loader()},this.loader=function(){if(!(this.loadingIndex>=this.length)){var t=this.opts.resources[this.loadingIndex];this.loadingIndex++,~["mp3","ogg","wav"].indexOf(s(t))?this.audioLoader(t):this.imageLoader(t)}},this.imageLoader=function(t){var e=this,i=new Image;e.opts.crossOrigin&&(i.crossOrigin="Anonymous"),e.div.appendChild(i);var s=new Date;i.onload=i.onerror=function(){var n=new Date-s,o=e.opts.perMinTime-n;o>0?setTimeout((function(){e.done(t,i)}),o):e.done(t,i)},i.src=t,i.style.width="auto",i.style.height="auto",i.style.maxWidth="none",i.style.maxHeight="none"},this.audioLoader=function(t){var e=this,i=new Audio;e.div.appendChild(i);var s=new Date,n=function(){var n=new Date-s,o=e.opts.perMinTime-n;o>0?setTimeout((function(){e.done(t,i)}),o):e.done(t,i)};i.addEventListener("canplaythrough",n),i.addEventListener("error",n),i.preload="auto",i.src=t,i.load()}};function s(t){var e=document.createElement("a");return e.href=t,e.pathname.split(".").pop().toLowerCase()}return i.prototype.addProgressListener=function(t){this.onProgress=t},i.prototype.addCompletionListener=function(t){this.onCompletion=t},i.prototype.get=function(t){return this.resourceMap[t]},i.prototype.start=function(){if(!this.length)return this.done(null,null);if(0===this.opts.concurrency)while(this.loadingIndex<this.length)this.loader();else for(var t=0;t<this.opts.concurrency;t++)this.loader()},i}))}}]);