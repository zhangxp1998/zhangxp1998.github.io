(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4199db0a"],{"18a9":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"category-publish"},[e("SetRemark",{attrs:{remark:t.remark,totalPrice:t.totalPrice},on:{toSellerSetting:t.toSellerSetting,setRemark:e=>t.setStorage("remark",e),show:t=>this.$refs.SetAveragePriceRef.changeShow(!0,t)}}),e("SetTotalPrice",{ref:"SetAveragePriceRef",on:{setTotalPrice:t.setTotalPrice}}),t.selectTarget&&t.targetSpuList[t.selectTarget]&&t.targetSpuList[t.selectTarget].list?e("div",{staticClass:"category-spus"},t._l(t.targetSpuList[t.selectTarget].list,(function(s,a){return e("Spu",{key:a,attrs:{spu:s,index:a,totalPrice:t.totalPrice,count:t.targetSpuList[t.selectTarget].list.length,isEdit:""},on:{setData:e=>t.setData(a,e)}})})),1):t._e(),e("div",{staticClass:"publish"},[e("div",{staticClass:"publish-delta",class:`${t.adjustDelta>0&&"delta-plus"} ${t.adjustDelta<0&&"delta-minus"}`},[e("span",[t._v(t._s(t.adjustDelta>0?"+":"")+t._s(t.adjustDelta)+"x")]),e("span",{staticClass:"total"},[t._v(" (共 "),e("span",{staticClass:"total-value"},[t._v("¥"+t._s(t.finalTotalPrice.toFixed(2)))]),t._v(" ) ")])]),e("div",{staticClass:"publish-button",on:{click:t.handlePublish}},[t._v("发布拼车")])]),e("PosterPop",{ref:"PosterPopRef",attrs:{remark:t.remark,price:t.averagePrice,categoryId:t.categoryId,megaSpuId:t.megaSpuId,sales:t.sales,propertyId:t.propertyId},on:{init:t.initData}})],1)},i=[],o=(s("14d9"),s("2f62")),r=(s("5af3"),function(){var t=this,e=t._self._c;return e("Popup",{attrs:{round:"","close-on-click-overlay":"price"!==t.status},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},["price"===t.status?e("div",{staticClass:"ec-dialog"},[e("div",{staticClass:"ec-dialog__title"},[t._v("设置整车的价格")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.totalPrice,expression:"totalPrice"}],staticClass:"ec-dialog__input",attrs:{type:"number"},domProps:{value:t.totalPrice},on:{input:function(e){e.target.composing||(t.totalPrice=e.target.value)}}}),e("div",{staticClass:"ec-dialog__botton",on:{click:t.setTotalPrice}},[t._v("确定")])]):t._e()])}),l=[],c=(s("8a58"),s("e41f")),n=s("2b0e"),u=s("7f29"),d=s("a382"),p={components:{Popup:c["a"]},props:{},setup(t,{emit:e}){const s=Object(n["reactive"])({totalPrice:"",count:"",show:!1,status:"price"});function a(){!s.totalPrice||s.totalPrice<=0?d["c"].show({icon:"none",title:"请设置正确的总价"}):(s.totalPrice=Object(u["a"])(s.totalPrice,2),e("setTotalPrice",s.totalPrice))}function i(){let{count:t}=s;!/^\d{1,}$/.test(t)||Number.isNaN(t)||t<0?d["c"].show({title:"请输入正整数数量",icon:"none"}):(t>999&&(t=999,s.count=999,d["c"].show({title:"余量不能超过999",icon:"none"})),e("setCount",t))}function o(t=!1,e="price"){t&&(s.status=e),s.show=t}return{...Object(n["toRefs"])(s),setTotalPrice:a,changeShow:o,setCount:i}},emits:["setTotalPrice","setCount"]},g=p,h=(s("2974"),s("0c7c")),m=Object(h["a"])(g,r,l,!1,null,null,null),v=m.exports,S=function(){var t=this,e=t._self._c;return e("div",{staticClass:"remark"},[e("div",{staticClass:"explain"},[t._v(" "+t._s("使用说明：点击“<”、“>”调整系数。点击“占位”可关掉车位。")+" ")]),e("div",{staticClass:"setPrice"},[e("div",{staticClass:"averagePrice",on:{click:function(e){return t.$emit("show","price")}}},[e("div",{staticClass:"name"},[t._v("总价")]),e("div",{staticClass:"unit"},[t._v("¥")]),e("div",{staticClass:"price"},[t._v(" "+t._s(t.totalPrice)+" ")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/11e73f7f388b9d7238a555d64f778753.png",alt:""}})]),e("div",{staticClass:"location",on:{click:t.handleSetLocation}},[e("img",{staticClass:"location-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/c24307e13695a4409a7c5a9c72fdbcae.png",alt:""}}),e("div",{staticClass:"location-name"},[t._v(t._s(t.me.city))]),e("ArrowRight",{attrs:{color:"white",size:"12rpx"}})],1)]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.txt,expression:"txt"}],staticClass:"remark-input",attrs:{placeholder:"填写拼车描述...",maxlength:100},domProps:{value:t.txt},on:{blur:t.onBlur,input:function(e){e.target.composing||(t.txt=e.target.value)}}})])},f=[],P=s("809c"),I=s("4360"),w=s("cf63"),y={components:{ArrowRight:P["a"]},props:{totalPrice:{type:[String,Number],default:""},remark:{type:String,default:""}},setup(t,{emit:e}){const s=Object(n["reactive"])({txt:""}),a=Object(n["computed"])(()=>I["a"].state.user.me);function i(){e("toSellerSetting")}function o(){e("setRemark",s.txt)}return Object(n["watch"])(()=>t.remark,()=>{s.txt=t.remark},{immediate:!0}),{...Object(n["toRefs"])(s),onBlur:o,handleSetLocation:i,me:a}}},_=y,L=(s("ac53"),Object(h["a"])(_,S,f,!1,null,null,null)),b=L.exports,k=s("df74"),C=s("1b64"),T=s("ccbb"),O=s("a37c"),x={components:{SetTotalPrice:v,SetRemark:b,Spu:C["a"],PosterPop:k["a"]},data(){return{show:!0,categoryId:"",megaSpuId:"",megaSpuName:"",averagePrice:0,totalPrice:0,sales:{total:0,list:[]},propertyId:O["d"]?"112350042":"1436288",targetSpuList:null,profiles:[],selectTarget:null,specId:O["d"]?18741:151607,spus:[],products:[],remark:"",storage:{}}},async created(){const{id:t,megaSpuId:e,megaSpuName:s}=this.$route.query;(t||e)&&(this.categoryId=t,this.megaSpuId=e,this.megaSpuName=decodeURIComponent(s),this.getStorage(),await this.initData())},mounted(){console.log("this.me",this.me),this.totalPrice||this.$refs.SetAveragePriceRef.changeShow(!0)},computed:{...Object(o["mapState"])("user",["me"]),...Object(o["mapState"])("app",["app"]),adjustDelta(){const{selectTarget:t,targetSpuList:e}=this;console.log("selectTarget",t),console.log("targetSpuList",e);let s=0;return t&&null!==e&&void 0!==e&&e[t]?(e[t].list.forEach((t,e)=>{const a=t.data.multiple-1;s+=+a}),Object(u["a"])(s,2)):0},finalTotalPrice(){var t,e;const{selectTarget:s,targetSpuList:a}=this,i=this.totalPrice/(null===a||void 0===a||null===(t=a[s])||void 0===t||null===(e=t.list)||void 0===e?void 0:e.length),o=this.adjustDelta*i;return this.totalPrice+o}},methods:{async initData(){this.$loading.show({title:"获取数据中"}),await this.loadProducts(),await this.getSpuList(),this.$loading.hide()},async loadProducts(){try{const{megaSpuId:t,categoryId:e}=this,s={categoryId:e,megaSpuId:t,status:"ON_SALE,OFF_SALE"},{data:{products:a=[]}}=await T["a"].getProductsByCategory(s);this.products=a.filter(t=>t.spec.find(t=>+t.id===this.specId))}catch(t){console.log(t)}this.isLoading=!1},async getSpuList(){let t=0;const e=async()=>{const{megaSpuId:s,categoryId:a}=this;var i={model:"CHANNEL_4COLUMNS",categoryId:a,categorySpuId:s,limit:20,propertyIds:[this.propertyId],offset:this.offset,orderBy:"latest"};try{const{data:s}=await T["a"].getSpuList(i);t=s.count,this.spus=this.offset?this.spus.concat(s.list.reverse()||[]):s.list.reverse(),this.offset=this.spus.length,t>this.offset&&await e()}catch(o){console.error(o)}};await e(),this.setSpus(this.spus)},setSpus(t=[]){const{products:e}=this,s={};t.forEach(t=>{s["0"]||(s["0"]={list:[]});const a=e.find(e=>e.spuInfo.spuId===t.id),i=this.getProductData(a,t);s["0"].list.push(i)}),this.targetSpuList=s;for(const a in this.targetSpuList)if(a)return this.selectTarget=a,void this.getStorage();this.$forceUpdate()},getProductData(t,e){console.log("item!!=-=",e);const s={minOnlinePrice:e.minOnlinePrice,cover:e.cover,name:e.name,data:{id:null===t||void 0===t?void 0:t.productId,attachments:[],multiple:1,remark:"",specValueIds:[this.specId],spuId:e.id,status:null!==t&&void 0!==t&&t.status?null===t||void 0===t?void 0:t.status:(null===t||void 0===t?void 0:t.count)>0?"ON_SALE":"OFF_SALE",stock:"OFF_SALE"===(null===t||void 0===t?void 0:t.status)?0:(null===t||void 0===t?void 0:t.count)||0,tagIds:""}};return s},setData(t,e){const s=this.targetSpuList[this.selectTarget].list;s[t].data[e.key]=e.num,this.targetSpuList[this.selectTarget].list=s,console.log("this.targetSpuList[this.selectTarget].list===",this.targetSpuList[this.selectTarget].list),this.$forceUpdate()},async handlePublish(){this.$loading.show({title:"提交中"});const t=JSON.parse(JSON.stringify(this.targetSpuList)),e=[],s=[];if(!this.remark)return void d["c"].show({icon:"none",title:"请填写拼车备注，如下单站子、国内邮费等"});console.log("targetSpuList===",t);let a=0;for(const o in t)a=t[o].list.length||0,t[o].list.forEach(t=>{t.data.price=this.totalPrice/a*+t.data.multiple,t.data.remark=this.remark,t.data.status=t.data.stock>0?"ON_SALE":"OFF_SALE",t.data.id?s.push(t.data):e.push(t.data)});try{if(null!==e&&void 0!==e&&e.length){await T["a"].updateProductMulti({args:e})}if(null!==s&&void 0!==s&&s.length){await T["a"].updateC2cProductsByCategory(s)}this.setStorage("localListWithPriceInfo",e.concat(s));const t=parseFloat((this.totalPrice/a).toFixed(2));this.navigateTo({url:`/modules/pages/web-view/index?url=${encodeURIComponent(`${w["a"].web}/plugin/xiaoka-join?megaSpuId=${this.megaSpuId}&megaSpuName=${encodeURIComponent(this.megaSpuName)}&carOwnerId=${this.me.id}&carDesc=${encodeURIComponent(this.remark)}&standardPrice=${t}&totalPrice=${this.totalPrice}`)}&ut=true`})}catch(i){this.$loading.show({title:i.message})}finally{this.$loading.hide();const{categoryId:t,megaSpuId:e}=this,s={categoryId:t,megaSpuId:e};await T["a"].createUserPoster(s)}},handleChangeTaraget(t){this.selectTarget=t.targetId},setTotalPrice(t){console.log("price",t),this.setStorage("totalPrice",+t),this.$refs.SetAveragePriceRef.changeShow(!1)},toSellerSetting(){this.navigateTo({url:"/pages-me/settings/seller"})},setStorage(t,e){const s=this.categoryId||this.megaSpuId;var a;s&&(null!==(a=this.storage)&&void 0!==a&&a[s]||(this.storage[s]={}),t&&e&&(this.storage[s][t]=e,this[t]=e),window.localStorage.setItem("XIAOKA_PUBLISH",JSON.stringify(this.storage)))},async getStorage(){var t;this.storage=JSON.parse(window.localStorage.getItem("XIAOKA_PUBLISH"))||{};const e=this.categoryId||this.megaSpuId,s=null===(t=this.storage)||void 0===t?void 0:t[e];if(this.totalPrice=(null===s||void 0===s?void 0:s.totalPrice)||0,this.remark=(null===s||void 0===s?void 0:s.remark)||"",s.localListWithPriceInfo){var a,i,o,r;const t=s.localListWithPriceInfo.filter(t=>+t.specValueIds[0]===this.specId),e=null===this||void 0===this||null===(a=this.targetSpuList)||void 0===a||null===(i=a[null===this||void 0===this?void 0:this.selectTarget])||void 0===i?void 0:i.list;e&&e.forEach(e=>{t.forEach(t=>{t.id===e.data.id&&(e.data.multiple=t.multiple,e.data.price=parseFloat(t.price.toFixed(2)))})}),console.log("tempLocalList===",t),console.log("targetSpuList[selectTarget].list===",null===this||void 0===this||null===(o=this.targetSpuList)||void 0===o||null===(r=o[null===this||void 0===this?void 0:this.selectTarget])||void 0===r?void 0:r.list),console.log("currentList===",e)}}}},$=x,N=(s("9009"),Object(h["a"])($,a,i,!1,null,null,null));e["default"]=N.exports},"195c":function(t,e,s){},2974:function(t,e,s){"use strict";s("195c")},9009:function(t,e,s){"use strict";s("d1e4")},"9b79":function(t,e,s){},ac53:function(t,e,s){"use strict";s("9b79")},d1e4:function(t,e,s){}}]);