(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-50443014"],{"0377":function(t,e,s){"use strict";s("73fc")},"06a3":function(t,e,s){},"16d1":function(t,e,s){"use strict";s("7c51")},2120:function(t,e,s){"use strict";s("9ccd")},"30a9":function(t,e,s){},3543:function(t,e,s){"use strict";s("6ddc")},"419f":function(t,e,s){"use strict";s.d(e,"a",(function(){return l})),s.d(e,"b",(function(){return u}));var a=s("c0e2"),i=s("2b0e"),n=s("c8b5"),c=s.n(n),o=s("a382");const r="FULLPAGE_EMITTER_KEY",p="FULLPAGE_METHODS_KEY",d={height:"100vh",transition:"all 0.5s","transition-timing-function":"ease"};function l(t,e){const s=new a["TinyEmitter"];Object(i["provide"])(r,s);const n=Object(i["ref"])(0),l=Object(i["ref"])({...d,transform:"translateY(0)"});function u(){n.value<e.value.length-1&&n.value++}function f(){n.value>0&&n.value--}return Object(i["provide"])(p,{next:u,prev:f}),Object(i["watch"])([t,e],(a,i,r)=>{if(t.value&&e.value&&e.value.length>0){e.value.forEach((t,e)=>{t.id||o["c"].show({title:`useFullPage 配置第 ${e} 项缺少 id 参数`}),t.name||o["c"].show({title:`useFullPage 配置第 ${e} 项缺少 name 参数（组件名）`}),t.props||o["c"].show({title:`useFullPage 配置第 ${e} 项缺少 props 参数（组件 props）`})});const a=new c.a(t.value);a.get("swipe").set({direction:c.a.DIRECTION_VERTICAL}),a.on("swipeup",()=>{u()}),a.on("swipedown",()=>{f()}),n.value<e.value.length&&s.emit(e.value[n.value].id+"Enter"),r(()=>{a.destroy()})}}),Object(i["watch"])(n,(t,a)=>{s.emit(e.value[t].id+"Enter"),s.emit(e.value[a].id+"Leave"),l.value=t>0?{...d,transform:`translateY(${-100*t}vh)`}:{...d,transform:"translateY(0)"}}),{prev:f,next:u,containerStyle:l}}function u({id:t,onEnter:e,onLeave:s}){const a=Object(i["inject"])(r),n=Object(i["inject"])(p),c=Object(i["ref"])(!1),o=Object(i["ref"])({width:"100vw",height:"100vh",position:"relative"});function d(){c.value=!0}function l(){c.value=!1}return e&&a.on(t+"Enter",e),s&&a.on(t+"Leave",s),a.on(t+"Enter",d),a.on(t+"Leave",l),Object(i["onBeforeUnmount"])(()=>{e&&a.off(t+"Enter",e),s&&a.off(t+"Leave",s),a.off(t+"Enter",d),a.off(t+"Leave",l)}),{visible:c,style:o,...n}}},4333:function(t,e,s){"use strict";s.d(e,"a",(function(){return o}));var a=s("fc44"),i=s.n(a),n=s("2b0e"),c=s("a382");function o(){const t=Object(n["ref"])(0),e=e=>new Promise((s,a)=>{try{const a=new i.a({resources:e,concurrency:4});a.addProgressListener((e,s)=>{t.value=e/s*100}),a.addCompletionListener(()=>{s()}),a.start()}catch(n){c["c"].show({title:"error: "+n.message}),a(n),console.log("preloadErr",n)}});return{handleLoad:e,progress:t}}},"5a97":function(t,e,s){},"6ddc":function(t,e,s){},"6e6a":function(t,e,s){},"73fc":function(t,e,s){},7449:function(t,e,s){"use strict";s("aed6")},"74d30":function(t,e,s){"use strict";s("5a97")},"77b3":function(t,e,s){"use strict";s("30a9")},"794e":function(t,e,s){},"7a29":function(t,e,s){},"7aec":function(t,e,s){"use strict";s("7a29")},"7c51":function(t,e,s){},"7cb2":function(t,e,s){"use strict";s.d(e,"b",(function(){return c})),s.d(e,"c",(function(){return o})),s.d(e,"a",(function(){return r}));var a=s("0ef7"),i=s("0d94"),n=s("a37c");async function c(t,e="interior-admin.image"){const s=Object(i["e"])({isProd:n["e"],async customApiCall(t){var e;const s=await a["h"].post("/uploader/gene-post-object-sign",t);return null===(e=s.data)||void 0===e?void 0:e[0]}});return s({file:t,scene:e})}function o(t){return a["h"].get("/uploader/file-space/get",t)}function r(t,e="interior-admin.image"){const s=Object(i["e"])({isProd:n["e"],async customApiCall(t){var e;const s=await a["h"].post("/uploader/anonymous/gene-post-object-sign",t);return null===(e=s.data)||void 0===e?void 0:e[0]}});return s({file:t,scene:e})}},"7f29":function(t,e,s){"use strict";function a(t,e=2,s=!1){return t=(+t).toFixed(e),s?t:Number(t)+""}s.d(e,"a",(function(){return a}))},"84b5":function(t,e,s){"use strict";s("06a3")},"920b":function(t,e,s){"use strict";s("f9b9")},"9ccd":function(t,e,s){},a91b:function(t,e,s){"use strict";s("794e")},ae0c:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return s.isLoaded?e("div",{staticClass:"page"},[1===s.step?e(s.PageOne,{on:{next:s.handleNext}}):t._e(),2===s.step?e(s.PageTwo,{attrs:{stepList:s.stepTwoList},on:{next:s.handleNext}}):t._e(),3===s.step?e(s.PageThree,{on:{next:s.handleNext}}):t._e()],1):e("div",[e(s.LoadingPage,{attrs:{progress:s.localProgress+"%"}})],1)},i=[],n=(s("14d9"),function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"loading"},[t._m(0),e("div",{staticClass:"border"},[e("div",{staticClass:"progress"},[e("div",{style:{width:t.progress}})])])])}),c=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"loader"},[e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/52707aa5cbc501bc539de4903e2c1c8b.png",alt:""}})])}],o=s("2b0e"),r={__name:"loading-page",props:{progress:{required:!0}},setup(t){const e=t;return{__sfc:!0,props:e}}},p=r,d=(s("e1ed"),s("0c7c")),l=Object(d["a"])(p,n,c,!1,null,null,null),u=l.exports,f=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"page-one"},[t._m(0),t._m(1),e(s.Action,{attrs:{name:"点击查看你的足迹"},on:{click:s.handleNextStep}})],1)},v=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"title"},[t._v(" 乘坐时光机，回到 "),e("span",[t._v("四年前")]),t._v(" 的潮玩族.... ")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"page-one-detail"},[e("img",{staticClass:"page-one-detail-step2",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/43ad485c93d6827756b9ca291c3aa482.png",alt:""}}),e("img",{staticClass:"page-one-detail-line",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/137f1c319c6641d273aed25ab73b45e6.png",alt:""}}),e("img",{staticClass:"page-one-detail-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/b9f80efccc8952c6096284950251018a.png",alt:""}})])}],m=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"action",on:{click:function(e){return t.$emit("click")}}},[e("p",[t._v(t._s(t.name))]),t.isShowArrow?e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/de0febc9d7505e146485aca12184a09b.png",alt:""}}):t._e()])},_=[],g={__name:"action",props:{name:{type:String,defalut:""},isShowArrow:{type:Boolean,defalut:!0}},setup(t){const e=t;return{__sfc:!0,props:e}}},h=g,b=(s("e6ce"),Object(d["a"])(h,m,_,!1,null,null,null)),C=b.exports,x={__name:"page-one",emits:["next"],setup(t,{emit:e}){function s(){e("next")}return{__sfc:!0,emit:e,handleNextStep:s,Action:C}}},y=x,O=(s("2120"),Object(d["a"])(y,f,v,!1,null,null,null)),j=O.exports,w=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"page-two"},[e("div",{staticClass:"title"},[t._v(t._s(s.titles[s.step]))]),e("img",{staticClass:"qrcode",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/dea28d7feb448136cc88d494d3718b8a.png",alt:""}}),e("div",{staticClass:"page-two-detail"},[e("div",{staticClass:"fade-in"},[e("div",{staticClass:"page-two-detail-paper"},[s.pageReady?[0===t.stepList[s.step]?e(s.Step1):t._e(),1===t.stepList[s.step]?e(s.Step2):t._e(),2===t.stepList[s.step]?e(s.Step3):t._e(),3===t.stepList[s.step]?e(s.Step4):t._e(),4===t.stepList[s.step]?e(s.Step5):t._e(),5===t.stepList[s.step]?e(s.Step6):t._e(),6===t.stepList[s.step]?e(s.Step7):t._e()]:t._e()],2)]),e("img",{staticClass:"page-two-detail-line",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/5cde9aa4fffc145c11dcb40c9776e66f.png",alt:""}}),e("img",{staticClass:"page-two-detail-bottom",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/128d81ebd628115940f10b3227be9bb2.png",alt:""}})]),s.pageReady?e("div",{staticClass:"action-box u-flex-c"},[s.step>0?e("div",{staticClass:"del u-flex-c",on:{click:function(t){return s.handleNextStep("del")}}},[e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/0984d3c6e2624ea838c4f2d0d42d82bb.png",alt:""}}),e("p",[t._v("点击查看上一页")])]):t._e(),e("div",{staticClass:"plus u-flex-c",on:{click:function(t){return s.handleNextStep("plus")}}},[e("p",[t._v("点击查看下一页")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/de0febc9d7505e146485aca12184a09b.png",alt:""}})])]):t._e()])},P=[],q=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"root-step"},[e("img",{staticClass:"step-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/731137e8348c708bd904693c49d3c36f.png",alt:""}}),e("div",{staticClass:"step u-flex-c-sb"},[e("div",{staticClass:"step-content u-flex-c-c"},[e("div",[e("span",[t._v("在")]),e("span",{staticClass:"title"},[t._v(t._s(s.dayjs(+s.detail.registerTime).year()))]),e("span",[t._v("年")]),e("span",{staticClass:"title"},[t._v(" "+t._s(s.dayjs(+s.detail.registerTime).month()+1)+" ")]),e("span",[t._v("月")]),e("span",{staticClass:"title"},[t._v(" "+t._s(s.dayjs(+s.detail.registerTime).date())+" ")]),e("span",[t._v("日")])]),t._m(0),e("div",[e("span",[t._v("我们的星轨相交已经")]),e("span",{staticClass:"title"},[t._v(" "+t._s(s.dayjs("2023-08-26").diff(s.dayjs(+s.detail.registerTime).format("YYYY-MM-DD"),"day"))+" ")]),e("span",[t._v("天")])]),e("div",[t._v("命运的齿轮开始转动...")])]),e("img",{staticClass:"step-image",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/61f68bcb4e866cfade3b92875653f79a.png",alt:""}})])])},T=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-icon"},[e("div",[t._v("那一天你来啦，")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/c7da8dfc66d2b6d6db7f2cb20b11eddd.png",alt:""}})])}],E=s("5a0c"),L=s.n(E),S={__name:"step1",emits:["next"],setup(t,{emit:e}){const{value:{detail:s}}=Object(o["inject"])("REPORT",()=>({}));return{__sfc:!0,emit:e,detail:s,dayjs:L.a}}},I=S,R=(s("77b3"),Object(d["a"])(I,q,T,!1,null,"1964dcaa",null)),D=R.exports,N=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"root-step"},[e("img",{staticClass:"step-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/e26ef248875cd42d2f4e7c29b17c3c90.png",alt:""}}),e("div",{staticClass:"step u-flex-c-c"},[e("div",{staticClass:"step-content u-flex-c-c"},[e("div",[t._v("这期间")]),e("div",[e("span",[t._v("你在千岛总计卖出过")]),e("span",{staticClass:"title"},[t._v(t._s(s.detail.sellCount))]),e("span",[t._v("个玩具")])]),e("div",[e("span",[t._v("回血")]),e("span",{staticClass:"title"},[t._v(t._s(s.detail.sellAmount))]),e("span",[t._v("元")])]),e("div",[e("span",[t._v("和")]),e("span",{staticClass:"title"},[t._v(t._s(s.detail.tradeCount))]),e("span",[t._v("个娃友有过交集，")])]),e("div",[e("span",[t._v("在娃友中排名")]),e("span",{staticClass:"title"},[t._v(t._s(s.getSellRank())+"%")])]),t._m(0)]),e("img",{staticClass:"step-image",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/392eb122a73e05275546319adfbc9b5a.png",alt:""}})])])},k=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-icon"},[e("div",[t._v("真是太厉害啦！")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/c7da8dfc66d2b6d6db7f2cb20b11eddd.png",alt:""}})])}],A=s("7f29"),U={__name:"step2",setup(t){const{value:{detail:e}}=Object(o["inject"])("REPORT",()=>({}));function s(){return Object(A["a"])(e.value.sellRank,2,!0)}return{__sfc:!0,detail:e,getSellRank:s}}},F=U,M=(s("a91b"),Object(d["a"])(F,N,k,!1,null,"8d77d2cc",null)),B=M.exports,Y=function(){var t,e,s,a=this,i=a._self._c,n=a._self._setupProxy;return i("div",{staticClass:"root-step"},[i("img",{staticClass:"step-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/b25bac60a662d1f084ef8dc559d9b1bc.png",alt:""}}),i("div",{staticClass:"step u-flex-c-sb"},[i("div",{staticClass:"step-content u-flex-c-c"},[a._m(0),i("div",[i("span",{staticClass:"title"},[a._v(" "+a._s(null===(t=n.detail)||void 0===t?void 0:t.firstBuyIp)+" ")]),i("span",[a._v("的")]),i("span",{staticClass:"title"},[a._v(a._s(null===(e=n.detail.firstBuySpu)||void 0===e?void 0:e.spuName))]),i("span",[a._v("款式")])]),i("div",[a._v("是你pick的第一个玩具")]),i("div",[i("span",[a._v("你购买过")]),i("span",{staticClass:"title"},[a._v(a._s(n.detail.mostBuyIpCount))]),i("span",[a._v("个")])]),i("div",[i("span",{staticClass:"title"},[a._v(a._s(n.detail.mostBuyIp))]),i("span",[a._v("的确认款")])]),i("div",[a._v("收集到喜欢的款式真的很幸福。")])]),i("div",{staticClass:"step-image"},[i("img",{attrs:{src:null===(s=n.detail.firstBuySpu)||void 0===s?void 0:s.cover,alt:""}})])])])},W=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("你是一个")]),e("span",{staticClass:"text-icon"},[e("span",{staticClass:"title"},[t._v("眼光独到")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/c7da8dfc66d2b6d6db7f2cb20b11eddd.png",alt:""}})]),e("span",[t._v("的潮玩买手")])])}],$={__name:"step3",emits:["next"],setup(t,{emit:e}){const{value:{detail:s}}=Object(o["inject"])("REPORT",()=>({}));return{__sfc:!0,emit:e,detail:s}}},H=$,J=(s("84b5"),Object(d["a"])(H,Y,W,!1,null,"2f5b401e",null)),G=J.exports,K=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"root-step"},[e("img",{staticClass:"step-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/2e5b54788f55978940dd3f4f0ef666ff.png",alt:""}}),e("div",{staticClass:"step u-flex-c-c"},[e("div",{staticClass:"step-content u-flex-c-c"},[e("div",[t._v("在这4年，")]),e("div",[t._v("潮玩族仓库累计接收的娃（商品），")]),t._m(0),t._m(1),t._m(2),e("div",[t._v("没说一句话就卖出了娃，真爽！")]),+s.detail.hostProductCount?[e("div",[t._v("其中你的闪购寄存柜，")]),e("div",[e("span",[t._v("曾有")]),e("span",{staticClass:"title"},[t._v(t._s(s.detail.hostProductCount))]),e("span",[t._v("个娃进入仓库，")])]),e("div",[t._v("它们替你走向了大江南北")])]:t._e()],2),e("img",{staticClass:"step-image",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/2a618f6e9573835e454bd9f26b3180b1.png",alt:""}})])])},z=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("超过")]),e("span",{staticClass:"title"},[t._v("1500w")]),e("span",[t._v("个，")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("发出超过")]),e("span",{staticClass:"title"},[t._v("200w")]),e("span",[t._v("个包裹。")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("有")]),e("span",{staticClass:"title"},[t._v("数十万")]),e("span",[t._v("个娃友在潮玩族")])])}],V={__name:"step4",emits:["next"],setup(t,{emit:e}){const{value:{detail:s}}=Object(o["inject"])("REPORT",()=>({}));return{__sfc:!0,emit:e,detail:s}}},Q=V,X=(s("0377"),Object(d["a"])(Q,K,z,!1,null,"ae55c7ea",null)),Z=X.exports,tt=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"root-step"},[e("img",{staticClass:"step-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/c201aa4ae6ad7f4ec7b4352863af43db.png",alt:""}}),e("div",{staticClass:"step u-flex-c-sb"},[e("div",{staticClass:"step-content u-flex-c-c"},[e("div",[t._v("在这4年，")]),e("div",[t._v("潮玩族资料库手动整理的潮玩信息")]),t._m(0),t._m(1),+s.detail.clickWishCount?[e("div",[t._v("其中")]),e("div",[e("span",[t._v("你点击了")]),e("span",{staticClass:"text-icon"},[e("span",{staticClass:"title"},[t._v(t._s(s.detail.clickWishCount))]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/4531d52979183e1d866c2dc9283ec511.png",alt:""}})]),e("span",[t._v("次“想要”，")])]),e("div",[t._v("你的心愿都实现了吗？")])]:t._e()],2),e("img",{staticClass:"step-image",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/01ab7ec31a5cf0cb7d8588de8cba197a.png",alt:""}})])])},et=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("超过")]),e("span",{staticClass:"text-icon"},[e("span",{staticClass:"title"},[t._v("11w")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/4531d52979183e1d866c2dc9283ec511.png",alt:""}})]),e("span",[t._v("条")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("覆盖")]),e("span",{staticClass:"text-icon"},[e("span",{staticClass:"title"},[t._v("4213")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/4531d52979183e1d866c2dc9283ec511.png",alt:""}})]),e("span",[t._v("个盲盒系列")])])}],st={__name:"step5",emits:["next"],setup(t,{emit:e}){const{value:{detail:s}}=Object(o["inject"])("REPORT",()=>({}));return{__sfc:!0,emit:e,detail:s}}},at=st,it=(s("ba50"),Object(d["a"])(at,tt,et,!1,null,"7f225a94",null)),nt=it.exports,ct=function(){var t,e,s=this,a=s._self._c,i=s._self._setupProxy;return a("div",{staticClass:"root-step"},[a("img",{staticClass:"step-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/fc5ff21abfec0f35957267de774e8d1b.png",alt:""}}),a("div",{staticClass:"step u-flex-c-sb"},[a("div",{staticClass:"step-content u-flex-c-c"},[a("div",[s._v("在你想要的盲盒中，")]),a("div",[a("span",{staticClass:"text-icon"},[a("span",{staticClass:"title"},[s._v(s._s(null===(t=i.detail.mostPopularSpu)||void 0===t?void 0:t.spuName))]),a("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/4531d52979183e1d866c2dc9283ec511.png",alt:""}})])]),a("div",[s._v("是人气最高的，")]),a("div",[a("span",[s._v("超过")]),a("span",{staticClass:"title"},[s._v(s._s(null===(e=i.detail.mostPopularSpu)||void 0===e?void 0:e.wishCount))]),a("span",[s._v("位娃友也很想要ta。")])]),a("div",[s._v("能遇到合拍的人，")]),s._m(0)]),a("div",{staticClass:"step-image"},[a("img",{attrs:{src:i.detail.mostPopularSpu.cover,alt:""}})])])])},ot=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("是最")]),e("span",{staticClass:"text-icon"},[e("span",[t._v("快乐的事")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/4531d52979183e1d866c2dc9283ec511.png",alt:""}})]),e("span",[t._v("！")])])}],rt={__name:"step6",emits:["next"],setup(t,{emit:e}){const{value:{detail:s}}=Object(o["inject"])("REPORT",()=>({}));return{__sfc:!0,emit:e,detail:s}}},pt=rt,dt=(s("7aec"),Object(d["a"])(pt,ct,ot,!1,null,"61747fbe",null)),lt=dt.exports,ut=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"root-step"},[e("img",{staticClass:"step-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/828a00d09aeeb1a9d8e68281d21a273e.png",alt:""}}),e("div",{staticClass:"step u-flex-c-sb"},[e("div",{staticClass:"step-content u-flex-c-c"},[e("div",[t._v("在千岛，")]),t._m(0),e("div",[e("span",[t._v("其中，你加入了")]),e("span",{staticClass:"title"},[t._v(t._s(s.detail.joinIslandCount))]),e("span",[t._v("个岛，")])]),e("div",[e("span",[t._v("共发布过")]),e("span",{staticClass:"title"},[t._v(t._s(s.detail.postCount))]),e("span",[t._v("篇帖子，")])]),e("div",[e("span",[t._v("与")]),e("span",{staticClass:"title"},[t._v(t._s(s.detail.interactCount))]),e("span",[t._v("名娃友互动过。")])]),e("div",[t._v("因为有你，")]),t._m(1)]),e("img",{staticClass:"step-image",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/20c89f3a541d7ecf5906fdd81d41a0f1.png",alt:""}})])])},ft=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("有超过")]),e("span",{staticClass:"text-icon"},[e("span",{staticClass:"title"},[t._v("千万")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/4531d52979183e1d866c2dc9283ec511.png",alt:""}})]),e("span",[t._v("用户成为了岛民。")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("span",[t._v("这里才更加")]),e("span",{staticClass:"text-icon"},[e("span",[t._v("丰富有趣")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/4531d52979183e1d866c2dc9283ec511.png",alt:""}})]),e("span",[t._v("！")])])}],vt={__name:"step7",emits:["next"],setup(t,{emit:e}){const{value:{detail:s}}=Object(o["inject"])("REPORT",()=>({}));return{__sfc:!0,emit:e,detail:s}}},mt=vt,_t=(s("74d30"),Object(d["a"])(mt,ut,ft,!1,null,"c5b31282",null)),gt=_t.exports,ht={__name:"index",props:{stepList:{type:Array,default:()=>[0,1,3,4,6]}},emits:["next"],setup(t,{emit:e}){const s=t,a=Object(o["ref"])(!1),i=Object(o["ref"])(0),n=Object(o["ref"])(["故事的开始....","你知道吗....","还记得吗....","悄悄告诉你....","我们很骄傲的是....","我们发现....","连接热爱"]);function c(t){if("plus"===t){if(6===s.stepList[i.value])return void e("next");i.value++}else if("del"===t){if(0===s.stepList[i.value])return;i.value--}}return Object(o["onMounted"])(()=>{setTimeout(()=>{a.value=!0},2300)}),{__sfc:!0,emit:e,props:s,pageReady:a,step:i,titles:n,handleNextStep:c,Step1:D,Step2:B,Step3:G,Step4:Z,Step5:nt,Step6:lt,Step7:gt}}},bt=ht,Ct=(s("3543"),Object(d["a"])(bt,w,P,!1,null,null,null)),xt=Ct.exports,yt=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",{staticClass:"page-three"},[e("div",{staticClass:"page-three-detail"},[t._m(0),e("img",{staticClass:"page-three-detail-line",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/16ee6a749b492703446595f13a4f5380.png",alt:""}}),e("img",{staticClass:"page-three-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/e88ef08c3181585560798d1eaf5665bf.png",alt:""}}),t._m(1),e(s.Action,{attrs:{name:"点击查看你的岛民身份卡"},on:{click:s.handleNextStep}})],1),e(s.PosterPop,{attrs:{show:s.show}})],1)},Ot=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"page-three-title"},[e("span",{staticClass:"title"},[t._v("千岛潮玩族")]),e("span",{staticStyle:{color:"#fff"}},[t._v("四周年特别福利活动")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"page-three-contcent"},[e("div",{staticClass:"page-three-contcent-title"},[t._v(" 感谢相遇，在潮玩族四周年之际我们为大家准备了一些惊喜活动： ")]),e("div",{staticClass:"label"},[t._v("1.时光机登机牌")]),e("div",{staticClass:"value"},[t._v(" 在8.26-9.1期间点击发货的闪购包裹中，每一个包裹都将有一张限量的“时光机登机牌”。 每张登机牌都有独有的一串登机票号，可以兑换价值不等的闪购优惠券，最多可获得500元！ ")]),e("div",{staticClass:"label"},[t._v("2.隐藏款闪购快递盒")]),e("div",{staticClass:"value"},[t._v(" 在8.26-9.1发货的闪购包裹中，有12分之一的概率会获得隐藏款四周年限定闪购快递盒！它的颜色与众不同在快递堆中一眼看到的存在～ ")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/fff2cfa658077414213d76b95b6e2023.png",alt:""}}),e("div",{staticClass:"last-div"},[t._v(" 在隐藏款快递盒中，有我们为你准备的限定惊喜周边！ ")])])}],jt=function(){var t=this,e=t._self._c,s=t._self._setupProxy;return e("div",[e("div",{staticClass:"poster",attrs:{id:"canvas"}},[e("img",{staticClass:"avatar",attrs:{src:s.me.avatar,alt:""}}),e("img",{staticClass:"poster-bg",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/3523fa43020a049f069631ca2daeb831.png",alt:""}}),e("div",{staticClass:"poster-detail"},[e("div",{staticClass:"poster-id"},[t._v(t._s(s.posterData.title))]),e("div",{staticClass:"u-flex-c-c"},[e("div",{staticClass:"poster-name"},[e("div",{staticClass:"name otext"},[t._v(t._s(s.getNickName()))])]),e("div",{staticClass:"poster-day"},[e("div",{staticClass:"name"},[t._v(" "+t._s(s.dayjs("2023-08-26").diff(s.dayjs(+s.detail.registerTime).format("YYYY-MM-DD"),"day"))+" 天 ")])])]),e("div",{staticClass:"poster-isssue"},[t._v(t._s(s.posterData.content))]),e("img",{staticClass:"qrcode",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/dea28d7feb448136cc88d494d3718b8a.png",alt:""}})])]),e(s.Popup,{attrs:{position:"center",round:""},model:{value:s.visible,callback:function(t){s.visible=t},expression:"visible"}},[e("div",{staticClass:"poster-pop"},[e("div",{staticClass:"wrp-poster u-flex-c-c"},[s.resultImg?e("img",{staticClass:"resultImg",attrs:{src:s.resultImg,alt:""}}):t._e()]),e("div",{staticClass:"action-box"},[s.resultImg?e(s.Action,{attrs:{name:"长按上方图片保存",isShowArrow:!1}}):t._e()],1)])])],1)},wt=[],Pt=(s("8a58"),s("e41f")),qt=(s("419f"),s("c0e9")),Tt=s.n(qt),Et=s("7cb2"),Lt=s("ed08"),St=s("a382"),It=(s("d634"),s("f408"),s("4360")),Rt={__name:"poster-pop",props:{show:{type:Boolean,default:!1}},setup(t){const e=t,s=Object(o["ref"])(""),a=Object(o["ref"])(!1),{value:{detail:i,posterData:n}}=Object(o["inject"])("REPORT",()=>({})),c=Object(o["computed"])(()=>It["a"].state.user.me),r=Object(o["computed"])(()=>It["a"].state.user.me);function p(){try{St["b"].show({title:"生成海报中..."});const t=document.getElementById("canvas");Tt()(t,{allowTaint:!1,useCORS:!0,backgroundColor:"transparent",scale:4}).then(t=>{t.toBlob(async t=>{try{const e=Object(Lt["i"])(),a=new File([t],e+".png"),i=await Object(Et["b"])(a,"activity-temp.image");s.value=i.url+"!lfit_w1080.jpg",St["b"].hide()}catch(e){St["c"].show({title:"加载失败"})}},"image/jpeg")}).catch(t=>{St["c"].show({title:"加载失败"})})}catch(t){St["c"].show({title:"加载失败"})}}function d(){window.location.href=s.value,St["b"].hide()}function l(){const t=c.value.nickName;let e="",s=0;for(let a=0;a<(null===t||void 0===t?void 0:t.length);a++){const i=t[a],n=u(i);if(s+=n,e+=i,s>10&&t[a+1]){e+="...";break}}return e}function u(t){return null==t?0:("string"!==typeof t&&(t+=""),t.replace(/[^\\x00-\xff]/g,"01").length)}return Object(o["watch"])(()=>e.show,t=>{t&&(a.value=!0,p())},{deep:!0,immediate:!0}),{__sfc:!0,resultImg:s,visible:a,props:e,detail:i,posterData:n,me:c,nickName:r,onDrawImage:p,download:d,getNickName:l,getStrWordLength:u,Action:C,dayjs:L.a,Popup:Pt["a"]}}},Dt=Rt,Nt=(s("920b"),Object(d["a"])(Dt,jt,wt,!1,null,null,null)),kt=Nt.exports,At={__name:"page-three",emits:["next"],setup(t,{emit:e}){const s=Object(o["ref"])(!1);function a(){s.value=!1,setTimeout(()=>{s.value=!0},100)}return{__sfc:!0,emit:e,show:s,handleNextStep:a,Action:C,PosterPop:kt}}},Ut=At,Ft=(s("7449"),Object(d["a"])(Ut,yt,Ot,!1,null,null,null)),Mt=Ft.exports,Bt=["https://cdn.qiandaoapp.com/interior/images/c7da8dfc66d2b6d6db7f2cb20b11eddd.png","https://cdn.qiandaoapp.com/interior/images/01f427e1fffa43659517519fd427ae56.png","https://cdn.qiandaoapp.com/interior/images/9cde02e4957e3c6653c1a340f3ba782b.png","https://cdn.qiandaoapp.com/interior/images/137f1c319c6641d273aed25ab73b45e6.png","https://cdn.qiandaoapp.com/interior/images/b9f80efccc8952c6096284950251018a.png","https://cdn.qiandaoapp.com/interior/images/137f1c319c6641d273aed25ab73b45e6.png","https://cdn.qiandaoapp.com/interior/images/de0febc9d7505e146485aca12184a09b.png","https://cdn.qiandaoapp.com/interior/images/d0cf8e470dbb245e34ad55721eb71ea6.png","https://cdn.qiandaoapp.com/interior/images/0984d3c6e2624ea838c4f2d0d42d82bb.png","https://cdn.qiandaoapp.com/interior/images/83d47348746d1312176b81bde90c2c56.png","https://cdn.qiandaoapp.com/interior/images/43ad485c93d6827756b9ca291c3aa482.png","https://cdn.qiandaoapp.com/interior/images/128d81ebd628115940f10b3227be9bb2.png","https://cdn.qiandaoapp.com/interior/images/d11aaa0478bc7ac86e64956224cfb4cb.png","https://cdn.qiandaoapp.com/interior/images/16ee6a749b492703446595f13a4f5380.png","https://cdn.qiandaoapp.com/interior/images/731137e8348c708bd904693c49d3c36f.png","https://cdn.qiandaoapp.com/interior/images/61f68bcb4e866cfade3b92875653f79a.png","https://cdn.qiandaoapp.com/interior/images/e26ef248875cd42d2f4e7c29b17c3c90.png","https://cdn.qiandaoapp.com/interior/images/392eb122a73e05275546319adfbc9b5a.png","https://cdn.qiandaoapp.com/interior/images/b25bac60a662d1f084ef8dc559d9b1bc.png","https://cdn.qiandaoapp.com/interior/images/3789cc83549eb891bf3de78169b774f7.png","https://cdn.qiandaoapp.com/interior/images/fff2cfa658077414213d76b95b6e2023.png","https://cdn.qiandaoapp.com/interior/images/2a618f6e9573835e454bd9f26b3180b1.png","https://cdn.qiandaoapp.com/interior/images/2e5b54788f55978940dd3f4f0ef666ff.png","https://cdn.qiandaoapp.com/interior/images/c201aa4ae6ad7f4ec7b4352863af43db.png","https://cdn.qiandaoapp.com/interior/images/01ab7ec31a5cf0cb7d8588de8cba197a.png","https://cdn.qiandaoapp.com/interior/images/fc5ff21abfec0f35957267de774e8d1b.png","https://cdn.qiandaoapp.com/interior/images/828a00d09aeeb1a9d8e68281d21a273e.png","https://cdn.qiandaoapp.com/interior/images/20c89f3a541d7ecf5906fdd81d41a0f1.png","https://cdn.qiandaoapp.com/interior/images/74da339002586868476a732ad93f9f6a.png","https://cdn.qiandaoapp.com/interior/images/16ee6a749b492703446595f13a4f5380.png","https://cdn.qiandaoapp.com/interior/images/e88ef08c3181585560798d1eaf5665bf.png","https://cdn.qiandaoapp.com/interior/images/3340cfdcf64fa7512e790b1cad77eab1.png","https://cdn.qiandaoapp.com/interior/images/3523fa43020a049f069631ca2daeb831.png","https://cdn.qiandaoapp.com/interior/images/11013eb8cffb72b9a7252fa6702cd84e.png","https://cdn.qiandaoapp.com/interior/images/499a42dc8349e81d5179f12d5ccebdcf.png","https://cdn.qiandaoapp.com/interior/images/4531d52979183e1d866c2dc9283ec511.png","https://cdn.qiandaoapp.com/interior/images/dea28d7feb448136cc88d494d3718b8a.png"],Yt=s("4333"),Wt=s("b140"),$t={__name:"index",setup(t){const e=Object(o["ref"])(!1),s=Object(o["ref"])([]),a=Object(o["ref"])(0),i=Object(o["ref"])(1),n=Object(o["ref"])([0,3,4,6]),c=Object(o["ref"])(null),r=Object(o["ref"])(null),p=Object(o["computed"])(()=>It["a"].state.user.me);Object(o["provide"])("REPORT",Object(o["computed"])(()=>({detail:c,posterData:r})));const{handleLoad:d,progress:l}=Object(Yt["a"])();function f(){const t="/modules/pages/common-login/index",{proxy:e}=Object(o["getCurrentInstance"])();(Object(Lt["h"])()||Object(Lt["d"])())&&e.navigateTo({url:t})}function v(){i.value++}return Object(o["onMounted"])(async()=>{if("{}"===JSON.stringify(p.value))console.log("====not login===="),f();else try{const{data:t}=await Object(Wt["f"])();c.value=t;const i=[0];t.sellCount>0&&i.push(1),t.firstBuySpu&&(s.value.push(t.firstBuySpu.cover),i.push(2)),i.push(3,4),t.mostPopularSpu&&(s.value.push(t.mostPopularSpu.cover),i.push(5)),i.push(6),n.value=i;const o=Bt.concat(s.value);a.value=l||{value:2};const p=await Object(Wt["g"])();r.value=p.data,await d(o),e.value=!0}catch(t){console.log(t)}}),{__sfc:!0,isLoaded:e,bizImgList:s,localProgress:a,step:i,stepTwoList:n,detail:c,posterData:r,me:p,handleLoad:d,progress:l,logIn:f,handleNext:v,LoadingPage:u,PageOne:j,PageTwo:xt,PageThree:Mt}}},Ht=$t,Jt=(s("16d1"),Object(d["a"])(Ht,a,i,!1,null,null,null));e["default"]=Jt.exports},aed6:function(t,e,s){},b140:function(t,e,s){"use strict";s.d(e,"a",(function(){return i})),s.d(e,"j",(function(){return n})),s.d(e,"c",(function(){return c})),s.d(e,"b",(function(){return o})),s.d(e,"f",(function(){return r})),s.d(e,"g",(function(){return p})),s.d(e,"d",(function(){return d})),s.d(e,"h",(function(){return l})),s.d(e,"e",(function(){return u})),s.d(e,"i",(function(){return f}));var a=s("0ef7");const i=t=>a["b"].post("user/products/off-sale-by-spec",t),n=t=>a["c"].post("/v1/c2c/products/clock-in-mega-spu",t),c=t=>a["c"].post("/v1/c2c/products/get-by-mega-spu",t),o=t=>a["c"].post("/v1/c2c/products/upsert-by-mega-spu",t),r=t=>a["c"].post("/v1/poster/4year-report",t),p=t=>a["c"].post("/v1/poster/4year-title",t),d=t=>a["c"].get("/v1/luckybag/fission-landing-page-info",t),l=t=>a["c"].post("/v1/luckybag/fission-participant",t),u=t=>a["c"].get("/v1/luckybag/list",t),f=t=>a["c"].post("/v1/common/submit-court-evidence",t)},ba50:function(t,e,s){"use strict";s("bc01")},bc01:function(t,e,s){},c0e2:function(t,e){function s(){}s.prototype={on:function(t,e,s){var a=this.e||(this.e={});return(a[t]||(a[t]=[])).push({fn:e,ctx:s}),this},once:function(t,e,s){var a=this;function i(){a.off(t,i),e.apply(s,arguments)}return i._=e,this.on(t,i,s)},emit:function(t){var e=[].slice.call(arguments,1),s=((this.e||(this.e={}))[t]||[]).slice(),a=0,i=s.length;for(a;a<i;a++)s[a].fn.apply(s[a].ctx,e);return this},off:function(t,e){var s=this.e||(this.e={}),a=s[t],i=[];if(a&&e)for(var n=0,c=a.length;n<c;n++)a[n].fn!==e&&a[n].fn._!==e&&i.push(a[n]);return i.length?s[t]=i:delete s[t],this}},t.exports=s,t.exports.TinyEmitter=s},d634:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return i}));const a={OWNED:{DEFAULT:"<p>年关将至，2022已经画上句点。</p><p>这一年，你对潮玩的热情不减，</p><p>千岛潮玩族见证你拥有了count个娃。</p><p><br/></p>",INTRODUCE:"<p>年关将至，2022已经画上句点。</p><p>这一年，你对潮玩充满好奇，</p><p>潮玩族正在见证一位新的潮玩行家冉冉升起。</p>"},IP:{DEFAULT:"<p>新认识了count个潮玩IP。</p><p>两眼对视，看见它们装进的故事，</p><p>刚好有你喜欢的部分。</p><p><br/></p>",INTRODUCE:"<p>为了你的热爱而存在，</p><p>是身为一件玩具最珍贵的价值。</p><p>2000多个潮玩IP正等待着被你发掘～</p>"},WISH:{DEFAULT:"<p>向着星星，种下一颗心愿。</p><p>去年你的心愿单中，有count个想要的娃。</p><p>祝愿兔年得偿所愿，想要的都拥有。</p><br/>",INTRODUCE:"<p>向着星星，种下一颗心愿。</p><p>听说把喜欢的盲盒加入“想要”心原单。</p><p>更容易蹲到低价哦。</p>"},SELL:{DEFAULT:"<p>过去的一年，count个娃同你挥手道别，</p><p>一共回血了money元，真了不起。</p><p>离别越多，留下的就越珍贵。</p><p>期待它们拥有新故事，而你奔富向钱。</p><br/>",INTRODUCE:"<p>家里盲盒太多放不下？</p><p>挂单回血，让它们去创造新故事。</p><p>抽到了不心仪的盲盒？</p><p>寄给潮玩族闪购，兔年奔富向钱。</p>"}},i={OWNED:{DEFAULT:"<p>年关将至，2022已经画上句点。</p><p>这一年，千岛谷圈见证了你一共拥有了count个谷子，它们带给你热爱与快乐~</p><p><br/></p>",INTRODUCE:"<p>年关将至，2022已经画上句点。</p><p>这一年，你在吃谷进阶的路上~</p><p>飞速闪购、三件包邮，千岛谷圈快乐吃谷！</p>"},IP:{DEFAULT:"<p>今年，你一共点亮了count个角色。</p><p>和ta们的羁绊又更深了一点~</p><p><br/></p>",INTRODUCE:"<p>今年，期待你点亮更多角色！</p><p>ta们都在等你~</p>"},WISH:{DEFAULT:"<p>吃谷第一步：将梦情加入“想要”</p><p>去年你的心愿单中有count个“想要”。</p><p>今年一定可以把它们好价抱回家！<br/>",INTRODUCE:"<p>听说把谷子加入“想要”心愿单，</p><p>更容易好价吃到梦中情谷哦！</p>快来添加“想要”，收集更多绝美好价谷！"},SELL:{DEFAULT:"<p>去年你在千岛谷圈卖出count个谷子，</p><p>共回血money元。</p><p>离别越多，留下的就越珍贵。</p><p>期待它们拥有新故事，而你奔富向钱。</p><br/>",INTRODUCE:"<p>一番赏抽到非自推？闪购会出手！</p><p>谷子太多难推销？寄给中古屋！</p><p>在千岛，兔年一定可以大力回血！</p>"}}},d954:function(t,e,s){},e1ed:function(t,e,s){"use strict";s("6e6a")},e6ce:function(t,e,s){"use strict";s("d954")},f9b9:function(t,e,s){},fc44:function(t,e,s){(function(e,s){t.exports=s()})(0,(function(){"use strict";var t=Object.assign||function(t){if(void 0===t||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),s=1;s<arguments.length;s++){var a=arguments[s];if(void 0!==a&&null!==a)for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},e=document.body||document.getElementsByTagName("body")[0],s=function(s){this.opts=t({resources:[],concurrency:0,perMinTime:0,attr:"data-preload",crossOrigin:!1,onProgress:null,onCompletion:null},s);for(var i=document.querySelectorAll("["+this.opts.attr+"]"),n=0;n<i.length;n++){var c=i[n];c.src&&this.opts.resources.push(c.src)}this.length=this.opts.resources.length,this.completedCount=0,this.loadingIndex=0,this.resourceMap={},this.div=document.createElement("div");var o=this.div.style;o.visibility="hidden",o.position="absolute",o.top=o.left="0",o.width=o.height="10px",o.overflow="hidden",o.transform=o.msTransform=o.webkitTransform=o.oTransform="translate(-10px, -10px)",e.appendChild(this.div),this.done=function(t,e){if(0===this.length)return this.onCompletion&&this.onCompletion(0);this.completedCount+=1,this.resourceMap[t]=e,this.onProgress&&this.onProgress(this.completedCount,this.length,t),this.completedCount>=this.length?this.onCompletion&&this.onCompletion(this.length):this.opts.concurrency>0&&this.loader()},this.loader=function(){if(!(this.loadingIndex>=this.length)){var t=this.opts.resources[this.loadingIndex];this.loadingIndex++,~["mp3","ogg","wav"].indexOf(a(t))?this.audioLoader(t):this.imageLoader(t)}},this.imageLoader=function(t){var e=this,s=new Image;e.opts.crossOrigin&&(s.crossOrigin="Anonymous"),e.div.appendChild(s);var a=new Date;s.onload=s.onerror=function(){var i=new Date-a,n=e.opts.perMinTime-i;n>0?setTimeout((function(){e.done(t,s)}),n):e.done(t,s)},s.src=t,s.style.width="auto",s.style.height="auto",s.style.maxWidth="none",s.style.maxHeight="none"},this.audioLoader=function(t){var e=this,s=new Audio;e.div.appendChild(s);var a=new Date,i=function(){var i=new Date-a,n=e.opts.perMinTime-i;n>0?setTimeout((function(){e.done(t,s)}),n):e.done(t,s)};s.addEventListener("canplaythrough",i),s.addEventListener("error",i),s.preload="auto",s.src=t,s.load()}};function a(t){var e=document.createElement("a");return e.href=t,e.pathname.split(".").pop().toLowerCase()}return s.prototype.addProgressListener=function(t){this.onProgress=t},s.prototype.addCompletionListener=function(t){this.onCompletion=t},s.prototype.get=function(t){return this.resourceMap[t]},s.prototype.start=function(){if(!this.length)return this.done(null,null);if(0===this.opts.concurrency)while(this.loadingIndex<this.length)this.loader();else for(var t=0;t<this.opts.concurrency;t++)this.loader()},s}))}}]);