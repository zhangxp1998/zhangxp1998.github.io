(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5705eb29"],{"18e5":function(t,e,s){"use strict";function i(t,e){return t/7500*100+e}function r(t,e="rem"){const s=/rpx/;return!window&&wx?t:"number"===typeof t?i(t,e):s.test(t)?i(+t.replace(s,""),e):t}s.d(e,"a",(function(){return r}))},"3a81":function(t,e,s){"use strict";s("503f")},"503f":function(t,e,s){},"50fd":function(t,e,s){},"5d13":function(t,e,s){},"62b8":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"order-container u-flex-c-sb"},[e("div",{staticClass:"left u-flex-c",on:{click:t.goToOrderPage}},[t.waitingForDeliveryCount>0?e("div",{staticClass:"delivery-item u-flex-c"},[e("div",{staticClass:"text"},[t._v(" 待购买商品 "),e("span",{staticClass:"num"},[t._v(t._s(t.waitingForDeliveryCount))]),t._v(" 个 ")]),e("van-icon",{attrs:{name:"arrow",size:"8",color:"rgba(0, 0, 0, 0.4)"}})],1):e("div",{staticClass:"order-empty u-flex-c"},[t._v(" 暂无待发货订单 "),e("van-icon",{staticClass:"ml-4",attrs:{name:"arrow",size:"8",color:"rgba(0, 0, 0, 0.4)"}})],1)]),e("van-button",{class:{"order-btn":!0,disabled:t.waitingForDeliveryCount<=0},attrs:{icon:"records",size:"small"},on:{click:t.handleWaitForDelivery}},[t._v(" 生成待购清单 ")])],1),e("div",{staticClass:"disney-container"},[e("div",{staticClass:"date"},[t._v(t._s("发布今日代购商品 · 上迪 - "+t.date))]),e("div",{staticClass:"mall-wrap section"},[e("div",{staticClass:"title"},[t._v("选择要去的商店（可多选）")]),e("div",{staticClass:"btn-list"},t._l(t.filters,(function(s,i){return e("div",{key:s.label,class:["btn-item",{active:s.checked}],on:{click:function(e){return t.handleMallLabelTap(i,s)}}},[t._v(" "+t._s(s.value)+" ")])})),0)]),e("div",{staticClass:"batch-setting section"},[e("div",{staticClass:"title"},[t._v("批量设置（确定调整后会应用到所有商品）")]),e("div",{staticClass:"setting-form"},[e("div",{staticClass:"form-item u-flex-c"},[e("div",{staticClass:"fl u-flex-c"},[t._v("调价")]),e("div",{staticClass:"fr u-flex-c"},[e("van-field",{staticClass:"percent u-flex-c",attrs:{placeholder:"按原价计算百分比，取整数",type:"digit"},scopedSlots:t._u([{key:"extra",fn:function(){return[e("div",{staticClass:"symbol"},[t._v("%")]),e("van-button",{staticClass:"confirm",attrs:{size:"small",type:"primary"},on:{click:t.handleConfirmPercent}},[t._v(" 确认调整 ")])]},proxy:!0}]),model:{value:t.formSetting.percent,callback:function(e){t.$set(t.formSetting,"percent",e)},expression:"formSetting.percent"}})],1)]),e("div",{staticClass:"form-item mt-8 u-flex-c"},[e("div",{staticClass:"fl"},[t._v("库存")]),e("div",{staticClass:"fr u-flex-c"},[e("van-field",{staticClass:"percent",attrs:{placeholder:"输入库存数量",type:"digit"},scopedSlots:t._u([{key:"button",fn:function(){return[e("van-button",{staticClass:"confirm",attrs:{size:"small",type:"primary"},on:{click:t.handleConfirmCount}},[t._v(" 确认调整 ")])]},proxy:!0}]),model:{value:t.formSetting.count,callback:function(e){t.$set(t.formSetting,"count",e)},expression:"formSetting.count"}})],1)]),e("div",{staticClass:"form-item mt-8 u-flex-c"},[e("div",{staticClass:"fl required"},[t._v("挑脸")]),e("div",{staticClass:"btn-list"},t._l(t.specList,(function(s){return e("div",{key:s.id,class:["btn-item",{active:t.formSetting.spec&&t.formSetting.spec.id===s.id}],on:{click:function(e){return t.handleSpecTap(s)}}},[t._v(" "+t._s(s.value)+" ")])})),0)]),e("div",{staticClass:"form-item mt-8 u-flex-c"},[e("div",{staticClass:"fl required"},[t._v("说明")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.formSetting.remark,expression:"formSetting.remark"}],staticClass:"remark-input",attrs:{placeholder:"填写代购说明，例如：85折代，回家挑脸",maxlength:50},domProps:{value:t.formSetting.remark},on:{input:function(e){e.target.composing||t.$set(t.formSetting,"remark",e.target.value)}}})])])]),e("div",{staticClass:"spus-wrap section"},[e("div",{staticClass:"title"},[t._v("选择商品、单个调整")]),e("div",{staticClass:"spu-list-wrap u-flex-c-c"},[t.spus.length?e("div",{staticClass:"list"},t._l(t.spus,(function(s,i){return e("div",{key:s.id,class:["spu","u-flex-col-c",{selected:s.checked}]},[e("div",{staticClass:"top",on:{click:function(e){return t.checkSpu(s,i)}}},[e("div",{staticClass:"check-radio"},[e("van-check-box",{model:{value:s.checked,callback:function(e){t.$set(s,"checked",e)},expression:"spu.checked"}})],1),e("div",{staticClass:"cover"},[e("Thumbnail",{attrs:{url:s.whiteBGPng||s.cover,size:{style:"!fill_w360_h480_jpg"}}})],1),e("div",{staticClass:"name otext2 mt-4"},[t._v(" "+t._s(s.name)+" ")]),e("div",{staticClass:"origin-price mt-4"},[t._v("原价 ¥"+t._s(s.originPrice))])]),e("van-field",{staticClass:"price-input mt-4",attrs:{"input-align":"center ",type:"digit"},model:{value:s.price,callback:function(e){t.$set(s,"price",e)},expression:"spu.price"}}),e("Stepper",{staticClass:"mt-4",attrs:{"input-width":"30px","button-size":"22px"},model:{value:s.count,callback:function(e){t.$set(s,"count",e)},expression:"spu.count"}})],1)})),0):e("div",{staticClass:"empty"},[e("Thumbnail",{attrs:{url:"https://cdn.qiandaoapp.com/interior/images/1aff6ee4d66ac3884221595ae585458f.png"}})],1)])]),e("div",{staticClass:"fixed-bottom-section"},[e("div",{staticClass:"info u-flex-c-sb"},[e("div",{staticClass:"left"},[t._v(" 已选商品 "+t._s(t.selectedSpus.length)+"，库存总计 "+t._s(t.saleCount)+" ")]),e("van-check-box",{attrs:{value:t.isAllSellected},on:{click:t.handleAllSelect}},[t._v(" 全选 ")])],1),e("van-button",{staticClass:"publish-btn",attrs:{disabled:0===t.selectedSpus.length,color:"#705af6",block:""},on:{click:t.handlePublish}},[t._v(" 发布商品并生成海报 ")]),e("div",{staticClass:"tips u-flex-c-c"},[e("a",{on:{click:t.handleManualOff}},[t._v("下架全部代购商品")])])],1),e("WaitForPopup",{ref:"waitPosterPopRef"}),e("SharePopup",{ref:"PosterPopRef",attrs:{spus:t.selectedSpus,count:t.saleCount,remark:t.formSetting.remark}})],1)])},r=[],a=(s("e7e5"),s("d399")),n=(s("f06a"),s("20fb")),o=(s("c3a6"),s("ad06")),c=(s("be7f"),s("565f")),l=(s("e17f"),s("2241")),u=(s("2994"),s("2bdd")),d=(s("66b9"),s("b650")),p=(s("a44c"),s("e27c")),g=(s("3c32"),s("417e")),v=(s("4ddd"),s("9f14")),f=(s("13d5"),s("14d9"),s("a8fc")),h=s.n(f),m=s("6edf"),y=s.n(m),b=function(){var t=this,e=t._self._c;return e("Popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("div",{staticClass:"dialog-poster",on:{click:function(e){return t.changeShow(!1)}}},[e("div",{staticClass:"dialog-sale",on:{click:function(t){t.stopPropagation()}}},[e("div",{staticClass:"dialog-title"},[e("img",{staticClass:"icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/945b612d07026080c932ac33bc9eca76.png",alt:""}}),e("div",[t._v("成功发布商品 "+t._s(t.spus.length)+" 个")])]),t.spus.length?e("div",{staticClass:"dialog-sale-product"},[e("div",{staticClass:"linear"}),t._l(t.simpleSpus,(function(s,i){return e("div",{key:i,staticClass:"item"},[e("div",{staticClass:"item-cover"},[e("Thumbnail",{attrs:{url:s.cover||""}})],1),e("div",[e("div",{staticClass:"item-price"},[t._v("¥"+t._s(s.price))]),e("div",{staticClass:"item-stock"},[t._v(" 库存"+t._s(t.numberToFixed(s.count,2))+" ")])])])}))],2):t._e()]),e("div",{staticClass:"instruction"},[e("img",{staticClass:"instruction-img",attrs:{src:"\n      https://cdn.qiandaoapp.com/interior/images/00e2437881df15426f10107c94bda176.png\n      ",alt:""}})]),e("div",{staticClass:"dialog-scroll",attrs:{"scroll-y":"true"},on:{click:function(t){t.stopPropagation()}}},[e("VanImage",{staticClass:"poster",attrs:{src:t.show?t.url:""},scopedSlots:t._u([{key:"loading",fn:function(){return[e("div",{staticClass:"u-flex-c"},[e("VanLoading",{attrs:{type:"spinner",size:"20"}}),t._v(" 海报加载中 ")],1)]},proxy:!0},{key:"error",fn:function(){return[t._v("海报加载失败")]},proxy:!0}])})],1),e("p",[t._v("↑ 长按图片保存 ↑")]),e("div",{staticClass:"dialog-buttton",on:{click:function(e){return e.stopPropagation(),t.handleGo2AllSale.apply(null,arguments)}}},[t._v(" 查看我在卖的 ")])])])},S=[],C=(s("ac1e"),s("543e")),w=(s("4056"),s("44bf")),_=(s("8a58"),s("e41f")),k=s("7f29"),P=s("2b0e"),x=s("d17e"),I=s("cf63"),T=s("4360"),O=s("4328"),D=s.n(O),j={components:{Popup:_["a"],VanImage:w["a"],VanLoading:C["a"],Thumbnail:x["a"]},props:{spus:{type:Array,default:()=>[]},remark:{type:String,default:""},count:{type:Number,default:0}},setup(t,{emit:e}){const s=Object(P["getCurrentInstance"])().proxy,i=Object(P["reactive"])({show:!1,url:""}),r=Object(P["ref"])(["147319","139877","140226"]),a=Object(P["computed"])(()=>{var t;return null===(t=T["a"].state.user.me)||void 0===t?void 0:t.id}),n=Object(P["ref"])([]),o=()=>{var e;n.value=null===(e=t.spus)||void 0===e?void 0:e.slice(0,3);const s=D.a.stringify({userId:a.value,specIds:r.value.join(","),desc:t.remark});i.url=`${I["a"].api}/z/poster-web/c2c/get-disney-spec-list?${s}`};function c(t=!1){t&&o(),i.show=t}function l(){s.navigateTo({url:`/modules/pages/web-view/index?url=${encodeURIComponent(I["a"].web+"/plugin/disney-publish")}&ut=true`})}function u(){s.navigateTo({url:"/pages-me/users/product-on-sale?source=selling"})}return{...Object(P["toRefs"])(i),specIds:r,simpleSpus:n,changeShow:c,handleSale:l,handleGo2AllSale:u,numberToFixed:k["a"]}},emits:["setAveragePrice"]},L=j,A=(s("9634"),s("0c7c")),N=Object(A["a"])(L,b,S,!1,null,null,null),$=N.exports,W=function(){var t=this,e=t._self._c;return e("Popup",{model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[e("div",{staticClass:"dialog-poster",on:{click:function(e){return t.changeShow(!1)}}},[e("div",{staticClass:"dialog-scroll",attrs:{"scroll-y":"true"},on:{click:function(t){t.stopPropagation()}}},[e("VanImage",{staticClass:"poster",attrs:{src:t.show?t.url:""},scopedSlots:t._u([{key:"loading",fn:function(){return[e("div",{staticClass:"u-flex-c"},[e("VanLoading",{attrs:{type:"spinner",size:"20"}}),t._v(" 海报加载中 ")],1)]},proxy:!0},{key:"error",fn:function(){return[t._v("海报加载失败")]},proxy:!0}])})],1),e("p",[t._v("↑ 长按图片保存 ↑")]),e("div",{staticClass:"dialog-buttton",on:{click:function(e){return e.stopPropagation(),t.handleGo2AllSale.apply(null,arguments)}}},[t._v(" 查看我卖出的订单 ")])])])},M=[],E={components:{Popup:_["a"],VanImage:w["a"],VanLoading:C["a"]},props:{spus:{type:Array,default:()=>[]},count:{type:Number,default:0}},setup(t,{emit:e}){const s=Object(P["getCurrentInstance"])().proxy,i=Object(P["reactive"])({show:!1,url:""}),r=Object(P["computed"])(()=>{var t;return null===(t=T["a"].state.user.me)||void 0===t?void 0:t.id}),a=Object(P["ref"])([]);function n(e=!1){if(e){var s;a.value=null===(s=t.spus)||void 0===s?void 0:s.slice(0,3);const e=D.a.stringify({userId:r.value});i.url=`${I["a"].api}/z/poster-web/treasure/get-waiting-for-delivery-spus?${e}`}i.show=e}function o(){s.navigateTo({url:`/modules/pages/web-view/index?url=${encodeURIComponent(I["a"].web+"/plugin/disney-publish")}&ut=true`})}function c(){s.navigateTo({url:"/modules/pages-order/list/index?listType=sell"})}return{...Object(P["toRefs"])(i),simpleSpus:a,changeShow:n,handleSale:o,handleGo2AllSale:c,numberToFixed:k["a"]}},emits:["setAveragePrice"]},F=E,z=(s("9708"),Object(A["a"])(F,W,M,!1,null,null,null)),B=z.exports,R=s("ccbb"),U=s("a849"),V=s("9b2a"),q=s("b140"),H=s("f61f"),Y=s("5a0c"),G=s.n(Y);let J=null;var K={components:{[v["a"].name]:v["a"],VanCheckBox:g["a"],[p["a"].name]:p["a"],[d["a"].name]:d["a"],[u["a"].name]:u["a"],[l["a"].name]:l["a"],[c["a"].name]:c["a"],[o["a"].name]:o["a"],Thumbnail:x["a"],WaitForPopup:B,Stepper:n["a"],SharePopup:$},data(){var t,e;const s=localStorage.getItem("DISNEY_SALE_CACHE_A");return s&&(J=JSON.parse(s)),{waitingForDeliveryCount:0,date:G()().format("YYYY.MM.DD"),filters:(null===(t=J)||void 0===t?void 0:t.filters)||[],isAllSellected:!1,specList:[{description:"卖家在购买商品前，与买家一对一的确认商品状态，购买相应买家挑中的商品。",id:"139878",image:"https://cdn.qiandaoapp.com/interior/images/47b6641e9cea2deb735ca62f64859929.jpg",labelColor:"#9dd87d",name:"交易",ownerId:"0",value:"1v1挑脸",checked:!1},{description:"卖家在购买商品后，让买家在一个或多个库存中挑选、确认商品状态。",id:"139879",image:"https://cdn.qiandaoapp.com/interior/images/de8d7f4f215cc28eb2807977fd6fce38.jpg",labelColor:"#9dd87d",name:"交易",ownerId:"0",value:"回家挑脸",checked:!1},{description:"买家不确认商品状态，随机发出商品。",id:"139880",image:"https://cdn.qiandaoapp.com/interior/images/55e529f8d41cb46d2393a551615fe0b4.jpg",labelColor:"#9dd87d",name:"交易",ownerId:"0",value:"随机发货",checked:!1}],formSetting:(null===(e=J)||void 0===e?void 0:e.formSetting)||{percent:null,count:1,spec:null,remark:null},spus:[],spuPool:[],sellingCount:0}},watch:{async filters(t){const e=t.filter(t=>t.checked);if(null===e||void 0===e||!e.length)return void(this.spus=[]);const s=this.spuPool.filter(t=>{var s;const i=null===t||void 0===t||null===(s=t.purchaseWayMartInfo)||void 0===s?void 0:s.some(t=>!(null===e||void 0===e||!e.find(e=>e.value===t)));return!!i});this.spus=s.map(t=>{var e;const s=null===(e=this.spus)||void 0===e?void 0:e.find(e=>e.id===t.id);return s||t})}},async mounted(){await this.getPurchaseWayConfig(),await this.getSpus(),await this.getWaitingForDeliveryList(),this.getSellingProducts()},computed:{saleCount(){var t,e;return null===(t=this.selectedSpus)||void 0===t||null===(e=t.reduce)||void 0===e?void 0:e.call(t,(t,e)=>(t+=Number(e.count)||0,t),0)},selectedSpus(){return this.spus.filter(t=>t.checked)}},methods:{handleWaitForDelivery(){this.waitingForDeliveryCount>0&&this.$refs.waitPosterPopRef.changeShow(!0)},goToOrderPage(){this.navigateTo({url:"/modules/pages-order/list/index?listType=sell"})},handleConfirmCount(){var t;const e=this.formSetting.count||1;this.spus=null===(t=this.spus)||void 0===t?void 0:t.map(t=>({...t,count:e}))},handleConfirmPercent(){var t,e;const s=Number(this.formSetting.percent);!s||s<0?Object(a["a"])("请输入合法百分比"):(this.spuPool=null===(t=this.spuPool)||void 0===t?void 0:t.map(t=>({...t,price:t.originPrice*(s/100)})),this.spus=null===(e=this.spus)||void 0===e?void 0:e.map(t=>({...t,price:t.originPrice*(s/100)})))},async getSellingProducts(){const t=await U["a"].getSellingProducts({limit:10,offset:0}),e=Number(t.count);this.sellingCount=e},async handlePublish(){try{var t,e;if(console.log("..",null===(t=this.formSetting.spec)||void 0===t?void 0:t.id),null===(e=this.formSetting.spec)||void 0===e||!e.id)return Object(a["a"])("请选择挑脸模式"),void window.scrollTo({top:0});const i=this.selectedSpus.find(t=>!Number(t.price));if(i)return void Object(a["a"])(i.name+"未填写价格");this.$loading.show();const r=this.selectedSpus.map(t=>{const e=(null===t||void 0===t?void 0:t.count)>0?"ON_SALE":"OFF_SALE";let s=[140226];return s=[...s,Number(this.formSetting.spec.id)],{spuId:t.id,stock:t.count,price:t.price,status:e,specValueIds:s}});await R["a"].createProductMulti({args:r,isDisney:!0}),this.$refs.PosterPopRef.changeShow(!0)}catch(i){console.error(i)}finally{var s;this.$loading.hide(),this.getSellingProducts(),localStorage.setItem("DISNEY_SALE_CACHE_A",JSON.stringify({spus:null===(s=this.spus)||void 0===s?void 0:s.map(t=>({id:t.id,checked:t.checked,count:t.count,price:t.price})),filters:this.filters,formSetting:this.formSetting}))}},async getWaitingForDeliveryList(){const{data:t}=await V["a"].getOrderBasicModelList({typeList:["C2C"],statusList:["WAIT_SELLER_SEND_GOODS"],source:"SELLER",isNeedProduct:!0,pageSize:500}),{rowList:e}=t,s=null===e||void 0===e?void 0:e.map(t=>t.orderProductList).flat(),i=null===s||void 0===s?void 0:s.map(t=>{var e;const s=Number(t.count),i=null===(e=t.snapshot)||void 0===e?void 0:e.product,r=null===i||void 0===i?void 0:i.spu,a=null===i||void 0===i?void 0:i.specValues,n=null===i||void 0===i?void 0:i.price,o=null===r||void 0===r?void 0:r.id;return{spuId:o,specValues:a,...r,count:s,price:n}}),r=y()(i,"spuId"),a=Object.keys(r).map(t=>{const e=r[t],s=e.reduce((t,e)=>(t+=Number(e.count)||0,t),0),i=null===e||void 0===e?void 0:e[0];return{...i,count:s}}),n=a.filter(t=>{var e;return null===(e=t.specValues)||void 0===e?void 0:e.find(t=>"今日在园"===t.value)}),o=n.length;this.waitingForDeliveryCount=o},async getSpus(){var t;this.$loading.show();this.filters.filter(t=>t.checked);const e=null===(t=this.filters)||void 0===t?void 0:t.map(t=>t.value).join(),[s,i]=await Promise.all([R["a"].getSpuList({model:"CHANNEL_PURCHASE_WAY_4COLUMNS",limit:100,offset:0,orderBy:"disneyPluginSortPropertyDesc",purchaseWayMartInfos:e,orTagIds:[1439711,1439712,1439713,1439715,1439716,1439717,1439718,1439719,1446108,1446109],propertyIds:[53104],sortPropertyItems:[{propertyId:"1473846"}]}),R["a"].getSpuList({model:"CHANNEL_PURCHASE_WAY_4COLUMNS",limit:100,offset:100,orderBy:"disneyPluginSortPropertyDesc",purchaseWayMartInfos:e,orTagIds:[1439711,1439712,1439713,1439715,1439716,1439717,1439718,1439719,1446108,1446109],propertyIds:[53104],sortPropertyItems:[{propertyId:"1473846"}]})]),{data:{list:r=[]}}=s,{data:{list:a=[]}}=i,n=h()([...r,...a],"id"),o=(null===n||void 0===n?void 0:n.map(t=>{var e,s,i,r,a;const n=null===(e=t.profiles)||void 0===e||null===(s=e[0])||void 0===s||null===(i=s.profiles)||void 0===i||null===(r=i[0])||void 0===r?void 0:r.dataValue,o=null===(a=t.purchaseWayInfo)||void 0===a?void 0:a.purchaseWayMartInfo,c=parseInt(n)||0,{percent:l,count:u}=this.formSetting;let d=c;return Number(l)&&(d=Math.ceil(c*(l/100))),{...t,purchaseWayMartInfo:o,checked:!1,count:u,originPrice:c,price:d}}))||[];this.doDiffSpus(o),this.$loading.hide()},doDiffSpus(t){const e=[],s=[];t.map(t=>{var i;if(null!==(i=J)&&void 0!==i&&i.spus){var r,a;const i=null===(r=J.spus)||void 0===r||null===(a=r.find)||void 0===a?void 0:a.call(r,e=>e.id===t.id);if(i){const r={...t,...i};return e.push(r),void s.push(r)}s.push(t)}else s.push(t)}),this.spus=e,this.spuPool=s},async getPurchaseWayConfig(){var t;this.$loading.show();const e=await Object(H["a"])("purchase-way","purchaseWay"),s=null===(t=e.find(t=>"disney"===t.currentKey))||void 0===t?void 0:t.filters,i=s.map(t=>({...t,checked:!1}));this.filters=i.map(t=>{var e;if(null!==(e=J)&&void 0!==e&&e.filters){var s,i;const e=null===(s=J.filters)||void 0===s||null===(i=s.find)||void 0===i?void 0:i.call(s,e=>e.label===t.label);return e?{...t,...e}:t}return t}),this.$loading.hide()},checkSpu(t,e){this.$set(this.spus,e,{...t,checked:!t.checked}),this.isAllSellected=this.spus.every(t=>t.checked)},handleAllSelect(){var t;this.spus=null===(t=this.spus)||void 0===t?void 0:t.map(t=>({...t,checked:!this.isAllSellected})),this.isAllSellected=!this.isAllSellected},async handleManualOff(){try{if(0===this.sellingCount)return void Object(a["a"])("还没有挂单");await l["a"].confirm({message:"确定下架今日园内所有在售商品吗"}),await Object(q["a"])({specId:"140226"}),l["a"].confirm({message:"下架成功",cancelButtonText:"返回",confirmButtonText:"查看我在卖的"}).then(()=>{this.navigateTo({url:"/pages-me/users/product-on-sale"}).catch(()=>{this.navigateBack()})}),this.getSellingProducts()}catch(t){}},handleSpecTap(t){this.formSetting.spec=t},handleMallLabelTap(t,e){this.$set(this.filters,t,{...e,checked:!e.checked})}}},X=K,Q=(s("3a81"),Object(A["a"])(X,i,r,!1,null,"db96c852",null));e["default"]=Q.exports},"7f29":function(t,e,s){"use strict";function i(t,e=2,s=!1){return t=(+t).toFixed(e),s?t:Number(t)+""}s.d(e,"a",(function(){return i}))},"92e8":function(t,e,s){},9634:function(t,e,s){"use strict";s("92e8")},9708:function(t,e,s){"use strict";s("5d13")},"9b2a":function(t,e,s){"use strict";var i=s("0ef7");e["a"]={getOrderBasicModelList(t){return i["j"].post("/order-web/user/load-order-base-model-list",t)},getOrderDetail(t){return i["p"].get("/orders/"+t)},buyerCancelOrder(t,e){return i["p"].post(`/orders/${t}/action/buyer-cancel-order`,e)}}},a849:function(t,e,s){"use strict";var i=s("0ef7"),r=s("4360");e["a"]={getSingleBanner(t){return i["p"].get("/ads",{slotKey:t,appid:r["a"].state.app.puppet.name})},queryDeliverOrderPrice(t){return i["h"].post("/order/action/query-deliver-order-price",t)},getSellingProducts(t){return i["h"].get("trade/user/products/action/get-selling-products",t)},doGrayscale(t){return i["h"].get("/stock-order/grayscale",t)},queryShelfExpressRule(t){return i["h"].post("/express/user/express-price-template/action/load-by-shelf",t)},queryProductsMatch(t){return i["p"].get("/products/match",t)},queryProductsByTag(t){return i["h"].post("/stock-order/bargin",t)},productPublish(t){return i["h"].post("/trade/products",t)},getAuctionField(t){return i["h"].get("/auctioneer/field/list",t)},auctionPublish(t){return i["h"].post("/c2c-web/v1/auctioneer/auction/create",t)},getTags(t){return i["h"].get("/trade/tags",t)}}},b140:function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"j",(function(){return a})),s.d(e,"c",(function(){return n})),s.d(e,"b",(function(){return o})),s.d(e,"f",(function(){return c})),s.d(e,"g",(function(){return l})),s.d(e,"d",(function(){return u})),s.d(e,"h",(function(){return d})),s.d(e,"e",(function(){return p})),s.d(e,"i",(function(){return g}));var i=s("0ef7");const r=t=>i["b"].post("user/products/off-sale-by-spec",t),a=t=>i["c"].post("/v1/c2c/products/clock-in-mega-spu",t),n=t=>i["c"].post("/v1/c2c/products/get-by-mega-spu",t),o=t=>i["c"].post("/v1/c2c/products/upsert-by-mega-spu",t),c=t=>i["c"].post("/v1/poster/4year-report",t),l=t=>i["c"].post("/v1/poster/4year-title",t),u=t=>i["c"].get("/v1/luckybag/fission-landing-page-info",t),d=t=>i["c"].post("/v1/luckybag/fission-participant",t),p=t=>i["c"].get("/v1/luckybag/list",t),g=t=>i["c"].post("/v1/common/submit-court-evidence",t)},ccbb:function(t,e,s){"use strict";var i=s("0ef7");e["a"]={getStandardProducts(t){return i["p"].get(`/spus/${t}/standard-products`)},getSPUs(t){return i["p"].get("/v2/spus",t)},getSingleSpu(t,e){return i["p"].get("/v2/spus/"+t,e)},getUserPosters(t){return i["h"].post("/c2c-web/v1/poster/get-user-posters",t)},doProductsOffSale(t){return i["h"].post("/c2c-web/v1/c2c/products/off-sale",t)},plastSearchCategory(t){return i["h"].get("/plast/search/category/v3",t)},createUserPoster(t){return i["h"].post("/c2c-web/v1/poster/create-user-poster",t)},getSPUSpecs(t){return i["p"].get(`/spus/${t}/specs`)},updateC2cProductsByCategory(t){return i["h"].post("/c2c/products/m-update",t)},updateProductMulti(t){return i["h"].post("/c2c/products/multi-create",t)},createProductMulti(t){return i["h"].post("/c2c/products/m-create-update",t)},getProductsByCategory(t){return i["h"].get("/c2c/products/by-category",t)},getCategoryDetail(t,e){return i["p"].get("/v2/categories/"+t,e)},getCategories(t){return i["p"].get("/v2/categories",t)},getRecommendCategories(t){return i["p"].get(`/v2/categories/${t}/recommend`)},getCategoryTags(t){return i["p"].get(`/v2/categories/${t}/config`)},getTag(t,e){return i["p"].get("/tags/"+t,e)},getHotTags(t){return i["p"].get(`/tags/${t}/config`)},getTags(t){return i["p"].get("/tags",t)},searchCategories(t){return i["p"].get("/v2/categories",t)},getSettings(){return i["p"].get("/settings")},changeWishes(t){return i["p"].post("/wish-list",t)},updateUserSettings(t){return i["p"].put("/settings",t)},getPosterColumnConfig(t){return i["l"].get("/action/get-products-poster",t)},getPosterThemes(t){return i["l"].get("/action/get-poster-themes",t,{isErrorDefaultTip:!1})},getWishList(t){return i["p"].get("/wish-list",t,{isErrorDefaultTip:!1})},getWishMatches(t){return i["p"].get("/products/match/wish-list",t,{isErrorDefaultTip:!1})},getDemandProductList(t){return i["p"].get("/products/match/demand-list",t)},getTradeInfo(t){return i["p"].post("/action/get-trade-info",t)},get360DegImages(t){return i["p"].get(`/spus/${t}/360-degree-images`)},getBarginSpus(t){return i["p"].post("/stock-order/bargin",t)},getSpecsByMPName(t){return i["p"].get("/specs/aciton/get-by-app-name",t)},getDistribution(t){return i["p"].get("/feeds/chaowan",t)},getSellingCategories(t){return i["p"].get("/products/action/get-selling-categories",t)},getCategoryCount(t){return i["p"].get("/products/action/get-category-product-count",t)},getSpuList(t){return i["h"].post("/treasure/spus/search/simple-info",t)},getSpuHeader(t){return i["h"].get("/treasure/flora/v2/spu/simpleInfo",t)},getSpuDetails(t){return i["h"].get("/treasure/flora/v1/spu/detailInfo",t)},getTagList(t){return i["h"].get("/treasure/tags",t)},getTagDetails(t){return i["h"].get("/treasure/flora/v1/tag/detailInfo",t)},getTagDetailsV2(t){return i["h"].get("/treasure/flora/v2/tag/simpleInfo",t)},searchSpuInTag(t){return i["h"].get("/plast/search/spu",t)},searchTag(t){return i["h"].get("/plast/search/tag",t)},getXiaokaWebConfig(){return i["e"].get("/vinyl/web.json")},getTagsV2(t){return i["h"].get("/armory/entry/tags",t)}}},cd4a:function(t,e,s){"use strict";s("50fd")},d17e:function(t,e,s){"use strict";var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ec-thumbnail",style:{width:t.cssWidth,height:t.cssHeight,"border-radius":t.cssBorderRadius,...t.extStyle}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.showDisplayImage,expression:"showDisplayImage"}],staticClass:"ec-thumbnail__image",attrs:{src:t.displaySrc,alt:t.alt,loading:"lazy","lazy-load":"",mode:"aspectFill"},on:{click:t.handlePreview}}),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.showDisplayImage,expression:"!showDisplayImage"}],staticClass:"ec-thumbnail__image",attrs:{src:t.defaultUrl,alt:"默认图片",loading:"lazy","lazy-load":"",mode:"aspectFill"}})])},r=[],a=(s("4662"),s("28a2")),n=s("18e5"),o={props:{url:{type:String,required:!0},defaultUrl:{type:String,default:""},size:{type:Object,default:()=>({})},alt:{type:String,default:""},borderRadius:{type:[Number,String],default:0},preview:{type:Boolean,default:!1},extStyle:{type:Object,default:()=>{}}},data(){return{showDisplayImage:!0,displaySrc:""}},watch:{targetUrl:{immediate:!0,handler(t,e){t&&t!==e&&this.setDisplaySrc()}}},computed:{cssBorderRadius(){return Object(n["a"])(this.borderRadius)},cssWidth(){const{width:t}=this.size;return t?"string"===typeof t?t:t+"px":"100%"},cssHeight(){const{height:t}=this.size;return t?"string"===typeof t?t:t+"px":"100%"},targetUrl(){const{url:t,size:{style:e}}=this;return e?t+e:t}},methods:{setDisplaySrc(){this.displaySrc=this.targetUrl},handlePreview(){const{url:t,preview:e}=this;e&&Object(a["a"])({images:[t+"!lfit_w1080_jpg"],closeable:!0})}}},c=o,l=(s("cd4a"),s("0c7c")),u=Object(l["a"])(c,i,r,!1,null,null,null);e["a"]=u.exports}}]);