(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f50f7c44"],{"07dd":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("HeaderInput",{staticClass:"search-header",attrs:{keyword:t.keyword,placeholder:"请输入JK、Lolita、汉服店铺名称"},on:{change:t.handleChange,confirm:function(e){return t.handleConfirm(e,t.keyword?"keyword":"placeholder")},clear:t.handleClearKeyword}}),t.showRecommendList?e("RecommendList",{attrs:{history:t.history},on:{"clear-history":t.clearHistory,"word-click":t.handleRecommend}}):t._e(),t.searched&&t.keyword?e("div",{staticClass:"result"},[t.trues.length>0?e("div",{staticClass:"has-result resolve"},[t._m(0),t._l(t.trues,(function(a,s){return e("ResultItemAvatar",{key:"result-"+s,attrs:{title:"店名: "+a.shopName,subTitle:""+a.remark,withPadding:0!==s,channel:a.channel,leftImg:a.logoUrl?a.logoUrl:"https://cdn.qiandaoapp.com/admins/952af6efa64919166ab3d8966bf231ef.png",rightImg:"https://cdn.qiandaoapp.com/admins/f074f7d4af443c531a581df8056a783e.png",showLink:""},on:{click:function(e){return t.handleClick(a)}}})}))],2):t._e(),t.pendings.length>0?e("div",{staticClass:"has-result pending"},[t._m(1),t._l(t.pendings,(function(t,a){return e("ResultItemAvatar",{key:"result-"+a,attrs:{title:""+(t.shopName?"店名: "+t.shopName:""),subTitle:""+t.remark,channel:t.channel,withPadding:0!==a,question:""}})}))],2):t._e(),t.fakes.length>0?e("div",{staticClass:"has-result reject"},[t._m(2),t._l(t.fakes,(function(t,a){return e("ResultItemAvatar",{key:"result-"+a,attrs:{title:"店名: "+t.shopName,subTitle:""+t.remark,withPadding:0!==a,channel:t.channel,fake:"",rightImg:"https://cdn.qiandaoapp.com/admins/fbc2a20f372e97cc4df78747d15d2cfd.png"}})}))],2):t._e(),t.trues.length+t.pendings.length+t.fakes.length===0?e("div",{staticClass:"no-result"},[e("div",{staticClass:"title"},[t._v("抱歉暂无收录结果哦 ( ´･ω･)ﾉ(._.`)")]),e("ResultItemText",{staticClass:"first",attrs:{text:"去提交资料，我们会尽快更新"},on:{click:t.goToForm}}),e("ResultItemText",{staticClass:"second",attrs:{text:"去萌款社区问问小姐妹们吧~!"},on:{click:t.goToCommunity}})],1):t._e()]):t._e(),t._m(3),e("div",{staticClass:"footer footer-pd"},[e("span",{staticClass:"otext2"},[t._v(" * 部分山店名和正店名十分相似，请注意分辨，或通过萌款收录的店铺资料跳转后购买。 ")]),e("span",{staticClass:"otext2"},[t._v(" * 店铺可能存在正转山、抄袭等情况，如对查询结果有疑问，可 "),e("span",{staticClass:"link",on:{click:t.goToForm}},[t._v("点击此处")]),t._v(" 提交。 ")])])],1)},n=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-result-title"},[e("img",{staticClass:"logo",attrs:{src:"https://cdn.qiandaoapp.com/admins/e34824bc1de9c576e5862ece41c8f063.png",alt:"",srcset:""}}),e("span",{staticClass:"size puple"},[t._v("(๑•̀ㅂ•́)✧")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-result-title"},[e("img",{staticClass:"logo",attrs:{src:"https://cdn.qiandaoapp.com/admins/d0ff3db6d316e30a6a3b625ae834e510.png",alt:"",srcset:""}}),e("span",{staticClass:"size blue"},[t._v("(⊙﹏⊙)")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"has-result-title"},[e("img",{staticClass:"logo",attrs:{src:"https://cdn.qiandaoapp.com/admins/540ed1441020e729d4793fca6dbef516.png",alt:"",srcset:""}}),e("span",{staticClass:"size red"},[t._v("(◞‸◟ )")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"slogo slogo-pd"},[e("div",{staticClass:"medium"},[t._v(" 该服务由 "),e("img",{staticClass:"img-size",attrs:{src:"https://cdn.qiandaoapp.com/admins/24bb818e342cbab9135657464bb24cc9.png",alt:""}}),t._v(" 萌款小程序 "),e("span",[t._v("与")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/admins/8fff78b5bc08e3ae70654720d0326867.png",alt:""}}),t._v(" 三坑咨询公众号 "),e("span",[t._v("联合提供")])])])}],i=(a("14d9"),a("2b0e")),r=a("4328"),c=a.n(r),o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-input"},[e("form",{staticClass:"input-container",attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("img",{attrs:{src:a("8f8b")}}),e("input",{ref:"input",attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t.keyword},on:{input:t.handleInput,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleConfirm.apply(null,arguments)},click:function(e){return t.$emit("input-click")}}}),t.keyword?e("div",{staticClass:"empty-keyword",on:{click:function(e){return e.stopPropagation(),t.$emit("clear")}}},[t._v(" 清空 ")]):t.showScanCodeIcon&&"selector"!==t.from?e("div",{staticClass:"scan-icon-wrap",on:{click:function(e){return e.stopPropagation(),t.$emit("scan")}}},[e("img",{staticClass:"scan-icon",attrs:{src:a("26e9")}})]):t._e()]),t.showScanCodeIcon&&"selector"===t.from?e("div",{staticClass:"scan-icon-wrap-special",on:{click:function(e){return e.stopPropagation(),t.$emit("scan")}}},[e("img",{staticClass:"scan-icon",attrs:{src:"https://cdn.qiandaoapp.com/admins/0ee3d99a086655d1d59ab15014a0eefb.png"}}),e("div",[t._v("扫码发布")])]):t._e()])},l=[],d={props:{placeholder:{type:String,default:"搜索"},showKeyboard:{type:Boolean,default:!0},from:{type:String},keyword:{type:String,required:!0},showScanCodeIcon:{type:Boolean,default:!1}},created(){this.focusOnInput()},methods:{focusOnInput(){this.$nextTick(()=>{const t=this.$refs.input;t.focus()})},blurInput(){const t=this.$refs.input;t.blur()},handleInput(t){this.$emit("change",t.target.value)},handleConfirm(){this.blurInput(),this.$emit("confirm",this.keyword)},onSubmit(){return!1}}},u=d,p=(a("9bf0"),a("0c7c")),g=Object(p["a"])(u,o,l,!1,null,null,null),m=g.exports,h=function(){var t=this,e=t._self._c;return e("div",{staticClass:"recommend-list"},[t.history.length?e("div",{staticClass:"history"},[e("div",{staticClass:"header"},[e("span",{staticClass:"title"},[t._v("最近搜索")]),e("div",{staticClass:"img-wrapper",on:{click:function(e){return e.stopPropagation(),t.clearHistory.apply(null,arguments)}}},[e("img",{attrs:{src:a("72f1")}})])]),e("div",{staticClass:"history-items"},t._l(t.history,(function(a,s){return e("div",{key:s,staticClass:"item otext",on:{click:function(e){return e.stopPropagation(),t.wordclick(a,"history")}}},[t._v(" "+t._s(a)+" ")])})),0)]):t._e()])},A=[],f={props:{history:{type:Array,required:!0}},methods:{clearHistory(){this.$emit("clear-history")},wordclick(t,e){this.$emit("word-click",{word:t.word?t.word:t,actionType:e})}}},C=f,y=(a("2162"),Object(p["a"])(C,h,A,!1,null,"3ecec57a",null)),k=y.exports,v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"result-item",on:{click:function(e){return e.stopPropagation(),t.handleClick.apply(null,arguments)}}},[e("span",{staticClass:"text"},[t._v(t._s(t.text))]),e("img",{staticClass:"arrow",attrs:{src:"https://cdn.qiandaoapp.com/admins/444125f213c577f558b8dd6e6106f2cd.png",alt:"arrow-right"}})])},w=[],b={props:{text:{type:String,default:"默认文本"}},methods:{handleClick(){this.$emit("click")}}},B=b,_=(a("0eb6"),Object(p["a"])(B,v,w,!1,null,"2ddd97a0",null)),I=_.exports,q=function(){var t=this,e=t._self._c;return e("div",{staticClass:"result-item-avatar",class:{"pt-12":t.withPadding},on:{click:function(e){return e.stopPropagation(),t.handleClick.apply(null,arguments)}}},[t.leftImg?e("div",[e("img",{staticClass:"left-img",attrs:{src:t.leftImg,alt:""}})]):t._e(),t.question?e("div",{staticClass:"question blue"}):t._e(),t.fake?e("div",{staticClass:"fake red"}):t._e(),e("div",{staticClass:"right"},[e("span",{staticClass:"title"},[e("span",{staticClass:"text"},[t._v(" "+t._s(t.title)+" "),e("span",{staticClass:"badge"},[t._v(t._s(t.channel?"拼多多":"淘宝"))])]),t.showLink?e("span",{staticClass:"get-link"},[e("span",{staticClass:"link"},[t._v("获取链接")]),e("img",{staticClass:"arrow",attrs:{src:"https://cdn.qiandaoapp.com/admins/444125f213c577f558b8dd6e6106f2cd.png",alt:"arrow-right"}})]):t._e()]),e("span",{staticClass:"subtitle otext4"},[t._v(" "+t._s(t.subTitle)+" ")]),t.rightImg?e("img",{staticClass:"logo",attrs:{src:t.rightImg,alt:""}}):t._e()])])},Q=[],N={props:{title:{type:String,default:"默认标题"},subTitle:{type:String,default:"默认子标题"},channel:{type:Number},showLink:{type:Boolean,default:!1},withPadding:{type:Boolean,default:!1},leftImg:{type:String},rightImg:{type:String},question:{type:Boolean,default:!1},fake:{type:Boolean,default:!1}},methods:{handleClick(){this.$emit("click")}}},T=N,R=(a("2e8b"),Object(p["a"])(T,q,Q,!1,null,"8806ac8e",null)),x=R.exports,E=a("a382"),S=a("0ef7"),U={getResults(t){return S["n"].get("/easyinfo/search/returnresult",t)}},Z=a("f408"),z=a("a0f0"),P={components:{HeaderInput:m,RecommendList:k,ResultItemText:I,ResultItemAvatar:x},setup(t){const e=Object(i["reactive"])({keyword:"",searched:!1,history:[],trues:[],pendings:[],fakes:[]}),a=[1,2,3],{proxy:s}=Object(i["getCurrentInstance"])();z["a"].track("verification",{ea:"pageview"});const n=JSON.parse(localStorage.getItem("sankeng"));n&&(e.history=[...n]);const r=Object(i["computed"])(()=>!e.keyword.length&&e.history.length>0),o=async t=>{e.keyword=t,t||p()},l=()=>{e.keyword="",p()},d=async t=>{try{const e=await U.getResults({content:t});return e}catch(e){console.log(e)}},u=t=>{t.forEach(t=>{0===t.attribute?e.fakes.push(t):a.find(e=>e===t.attribute)?e.trues.push(t):e.pendings.push(t)})},p=()=>{e.trues=[],e.pendings=[],e.fakes=[],e.searched=!1},g=async(t,a)=>{p(),e.keyword=t.trim();const{Data:s}=await d(e.keyword);u(s),z["a"].track("verification",{ea:"click",type:"search",query:e.keyword}),Z["a"].reportClick("verification",{value:JSON.stringify({query:e.keyword})}),e.searched=!0;const n=e.history;n&&Array.isArray(n)&&t?e.history=[t,...n.filter(t=>t!==e.keyword)].slice(0,20):t&&(e.history=[t]),localStorage.setItem("sankeng",JSON.stringify(e.history))},m=s.$route.query;m.keyword&&g(m.keyword);const h=()=>{e.history=[],localStorage.setItem("sankeng",JSON.stringify(e.history))},A=({word:t,actionType:e})=>g(t,e),f=t=>{const{tagID:a}=t;z["a"].track("verification",{ea:"click",type:"tag",query:e.keyword,verification_result:t.attribute}),Z["a"].reportClick("verification",{value:JSON.stringify({query:e.keyword,type:"tag",verification_result:t.attribute})}),a?m.isWxMp?window.location.href=`https://pages.qiandaoapp.com/h5/open-miniprogram.html?path=/pages-market/tag/index&query=id%3D${a}&&defaultTab=all&packageId=1009&name=萌款`:s.navigateTo({url:`/pages-market/tag/index?id=${a}&defaultTab=all`}):E["c"].show({title:"暂未收录，我们正在努力收集中"})},C=()=>{const t=c.a.stringify({ugc:!0,entryType:"spu"});s.navigateTo({url:"/pages-subarea/subarea/index?"+t})},y=()=>{s.navigateTo({url:"pages-tab/community/index?tab=shanzheng"})};return{...Object(i["toRefs"])(e),showRecommendList:r,handleChange:o,handleClearKeyword:l,handleConfirm:g,clearHistory:h,handleRecommend:A,handleClick:f,goToForm:C,goToCommunity:y}}},O=P,F=(a("4a7b7"),Object(p["a"])(O,s,n,!1,null,"52221c7c",null));e["default"]=F.exports},"0eb6":function(t,e,a){"use strict";a("2bbc")},2162:function(t,e,a){"use strict";a("e5d2")},"25e2":function(t,e,a){},"26e9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGeSURBVHgB7Ze/TsJQFMbPORQSCRqhmEAk/iEVfQUcnRxgcNHV5/AB3HwHZldYXBj1FQQaVGJCHIghNDAQ77G32NAASgq2Xfob2tuTc+93etu050P4YTefLyiolJE4B4BxcMAsKm+6/gQu2Ne0IiJdz8ZZQBNQPNrrKfJwqGllRipNUnDBcgq4R84Rc1EkKABQYU/T0h1dr6KzUgKqjox+vdvtDsEDstlsPLqxWaQIXMrr8RfdRbaT6StEUAnhvt1qPBiGMQaPkGv3P3svKTUFDHhMwGmabAnAaDBw9YzXYWQYdXlGwhzZQa+2fRFTLY4TBExYgMJMFQiAoHRDQubAZQkHWuHWzFJhFRh6r3rz5q+Upd8BAauzztyQEN+wekI5cNv1routqzhaZ18LmDbCARMWQALY6lClaQCfcGoRCnyXg2gicQY+Id2RPDNDI6Imd3pMfIqmU9lKq6N4LPbhlTuSd57KZM6J8GISoZr1O84fnZQEiPJvE//THdsI04d2Ws816yVsmwPZpcotWZy+qjueFeWh1CDTlEpxGfsGBtWTfjiK/4MAAAAASUVORK5CYII="},"2bbc":function(t,e,a){},"2e8b":function(t,e,a){"use strict";a("5324")},"4a7b7":function(t,e,a){"use strict";a("70378")},5324:function(t,e,a){},70378:function(t,e,a){},"72f1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACfElEQVR4Xu2aQUhVQRSGP8GV6SrEcCVEQjtbWbgIBbeC1tqVQavaVFBQWYJBusmVkivXmtg2MFpEucqdUAStJBF34UpQhqa6Pt97M2duM47vnbsS75kzZ775zzl37rstNPnV0uTrRwGoApqcgKZAZAFcBN4Cl0Fcbw6BLWAE+B4rztgKmAYelgz+BfCopI+aw2MDeAXcKRn8HHC3pI8sAOwCU54LeQx0WtuGAfAN6PUE8BW4pAB+E8hCAReAds/dK5oZKY/bf/wAhj19vAN6rO2SIHWK7n8BP13z+RTB/1HIXHHEuu9Ujw8AQ/JcrAgj+zWxd9SbwwfAG2A0cqCx3K8CY2UBtALXKmrAItBtHa8BC7FW4PB72z4pGrNtYKJgb3b/E3BQFkC18cnalANAsT5J2uxftz4poACqEFAFpHpS0xSoT0BrQOG0mXURHABmgR3gFmBOhtUucwJ8DXQB94CPjZICn4F+u5hJ4FmNhT0FzH1zbQBXGwWAb9eQ5rTU/gTPVM8BCsCzbUp3VGqvCqgkoCkQeIrzzek/7n3tpZKW2msKaApUENAaoDUgjIBvUdMiaAn4ApNWdam9dgHtAtoFjhPQNhjWBPAtatoFLIF1YND+/QCYqQH+PvDS3nsPDDXKGyHzYYT5qdy8E3wC7NdYWBvw3L4TNF+TGKXVu85MGwzMNOcwBXBWXos7tzLQQBWgCvj3HWLWvwwFKtw5LIsU+ACsOEONY3ADuG5dn5oC4ixN7jUpgC9AnzzGqCM2gSvSGUIPQzeBeeC8dMJI9nuA+WBqWeo/FIB0nmztFUC2W5MoMFVAItDZTqMKyHZrEgWmCkgEOttpml4BR0vnDFBmLOOLAAAAAElFTkSuQmCC"},"8f8b":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUxpcZmZmZmZmZmZmZmZmZmZmZqampycnJmZmZmZmZmZmZqampmZmZqampmZmZmZmZmZmciHiCEAAAAQdFJOUwBxl9hP6SgMwfaEOhpgNLCuegFKAAABA0lEQVQ4y42T67bEEAyF3YIolfd/2hNVplJn1uSXJV+yN0Kpn+NMERAhGrdNO0szQAeZzpGWsMeaP+AqNNq5knorveSxFU3pMwoit3rzrCit4uM1yo69JwynTtbLTTZl38c2RNhbnIvcxxgO3cRqu5urRHFYNDugsMa1gNcReniWzm2BWwtKBQbOnwCWKP9J+Ntk2r4/A+G+EbsDzDimG1rCAszOMNAl0rCglKaNTc+Hq6MZvxaKEcttz8/H5xa43IW364g0ETJ5+kttoCgGQWAtPgTvDNyj/SQcrGOPKQoiG3zkq1dBEirr2BmbLvtvork/Dj+3LqJ++82NwK//PVTU6g9lOhEYHBL5DgAAAABJRU5ErkJggg=="},"9bf0":function(t,e,a){"use strict";a("25e2")},e5d2:function(t,e,a){}}]);