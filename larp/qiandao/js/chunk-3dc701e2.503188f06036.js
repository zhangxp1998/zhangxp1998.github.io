(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dc701e2"],{"18e5":function(t,e,s){"use strict";function r(t,e){return t/7500*100+e}function a(t,e="rem"){const s=/rpx/;return!window&&wx?t:"number"===typeof t?r(t,e):s.test(t)?r(+t.replace(s,""),e):t}s.d(e,"a",(function(){return a}))},"50fd":function(t,e,s){},c277:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[t.list&&t.list.length?e("div",{staticClass:"root"},t._l(t.list,(function(s,r){return e("div",{key:s.categoryId||s.megaSpuId,staticClass:"item u-flex-c-sb"},[e("div",{staticClass:"item-cover"},[e("Thumbnail",{attrs:{url:s.cover}})],1),e("div",{staticClass:"u-flex-c-sb item-concent"},[e("div",{staticClass:"item-name"},[t._v(t._s(s.title))]),e("div",{staticClass:"u-flex-c"},[e("div",{staticClass:"item-action",on:{click:function(e){return t.handleGo2edit(s)}}},[e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/0e1ed5b40cf106b5cbca80e06baf9ad2.png",alt:""}}),t._v(" 编辑 ")]),e("div",{staticClass:"item-action del",on:{click:function(e){return t.handleDel(r)}}},[e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/34e9c09ee8bf057a9b085d7e72bacaf8.png",alt:""}}),t._v(" 下架 ")])])])])})),0):e("div",{staticClass:"empty u-flex-c-c"},[t._m(0)]),e("div",{staticClass:"addButton u-flex-c-c"},[e("div",{staticClass:"addButton-view u-flex-c",on:{click:function(e){return t.handleGo2Search("groupA")}}},[e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/cadc0799d5a6ddb169a5e162c35e11e9.png",alt:""}}),e("span",[t._v("拼车")])])])])},a=[function(){var t=this,e=t._self._c;return e("div",[e("div",[t._v("还没有拼车")]),e("div",{staticClass:"u-flex-c"},[e("span",[t._v("点击下方")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/87206466475be6bfaee669ce7accc012.png",alt:""}}),e("span",[t._v("创建拼车")])])])}],i=(s("e17f"),s("2241")),n=(s("14d9"),s("ccbb")),c=s("d17e"),o=s("cf63"),u=s("dd65"),g=s.n(u),l={components:{Thumbnail:c["a"]},data(){return{cursorId:0,list:[],isMore:!0}},async created(){await this.getUserPosters(!1)},mounted(){window.onscroll=async()=>{const t=window.screen.height,e=document.body.clientHeight,s=window.scrollY;this.isMore&&e>t&&s+t>=e&&await this.getUserPosters(!0)},window.addEventListener("pageshow",(async function(){console.log("pageshow"),await this.getUserPosters(!1)}),!1)},methods:{handleGo2edit(t){const{categoryId:e,megaSpuId:s,title:r}=t;let a=o["a"].web+"/plugin/xiaoka-publish?";a+="0"!==e?"id="+e:"megaSpuId="+s,a+="&megaSpuName="+r,this.navigateTo({url:`/modules/pages/web-view/index?url=${encodeURIComponent(a)}&ut=true`})},async handleDel(t){const e=this.list[t];try{await i["a"].confirm({message:"下架该系列所有商品吗",className:"dialog-container",showCancelButton:!0,cancelButtonText:"取消",confirmButtonText:"确认"});const t=g()({megaSpuId:e.megaSpuId,categoryId:e.categoryId},t=>null==t||""===t||"0"===t);await n["a"].doProductsOffSale(t),this.$toast.show({icon:"none",title:"下架成功"})}catch(s){}},handleGo2Search(t){this.navigateTo({url:`/modules/pages/web-view/index?url=${encodeURIComponent(`${o["a"].web}/plugin/xiaoka-publish/search?group=${t}`)}&ut=true`})},async getUserPosters(t=!1){const{cursorId:e}=this,{data:s}=await n["a"].getUserPosters({limit:10,cursorId:e});(!s.items||s.items.length<10)&&(this.isMore=!1),t?this.list.push(...s.items):this.list=s.items,this.cursorId=s.cursorId}}},d=l,p=(s("fdc8"),s("0c7c")),h=Object(p["a"])(d,r,a,!1,null,null,null);e["default"]=h.exports},ca5f:function(t,e,s){},ccbb:function(t,e,s){"use strict";var r=s("0ef7");e["a"]={getStandardProducts(t){return r["p"].get(`/spus/${t}/standard-products`)},getSPUs(t){return r["p"].get("/v2/spus",t)},getSingleSpu(t,e){return r["p"].get("/v2/spus/"+t,e)},getUserPosters(t){return r["h"].post("/c2c-web/v1/poster/get-user-posters",t)},doProductsOffSale(t){return r["h"].post("/c2c-web/v1/c2c/products/off-sale",t)},plastSearchCategory(t){return r["h"].get("/plast/search/category/v3",t)},createUserPoster(t){return r["h"].post("/c2c-web/v1/poster/create-user-poster",t)},getSPUSpecs(t){return r["p"].get(`/spus/${t}/specs`)},updateC2cProductsByCategory(t){return r["h"].post("/c2c/products/m-update",t)},updateProductMulti(t){return r["h"].post("/c2c/products/multi-create",t)},createProductMulti(t){return r["h"].post("/c2c/products/m-create-update",t)},getProductsByCategory(t){return r["h"].get("/c2c/products/by-category",t)},getCategoryDetail(t,e){return r["p"].get("/v2/categories/"+t,e)},getCategories(t){return r["p"].get("/v2/categories",t)},getRecommendCategories(t){return r["p"].get(`/v2/categories/${t}/recommend`)},getCategoryTags(t){return r["p"].get(`/v2/categories/${t}/config`)},getTag(t,e){return r["p"].get("/tags/"+t,e)},getHotTags(t){return r["p"].get(`/tags/${t}/config`)},getTags(t){return r["p"].get("/tags",t)},searchCategories(t){return r["p"].get("/v2/categories",t)},getSettings(){return r["p"].get("/settings")},changeWishes(t){return r["p"].post("/wish-list",t)},updateUserSettings(t){return r["p"].put("/settings",t)},getPosterColumnConfig(t){return r["l"].get("/action/get-products-poster",t)},getPosterThemes(t){return r["l"].get("/action/get-poster-themes",t,{isErrorDefaultTip:!1})},getWishList(t){return r["p"].get("/wish-list",t,{isErrorDefaultTip:!1})},getWishMatches(t){return r["p"].get("/products/match/wish-list",t,{isErrorDefaultTip:!1})},getDemandProductList(t){return r["p"].get("/products/match/demand-list",t)},getTradeInfo(t){return r["p"].post("/action/get-trade-info",t)},get360DegImages(t){return r["p"].get(`/spus/${t}/360-degree-images`)},getBarginSpus(t){return r["p"].post("/stock-order/bargin",t)},getSpecsByMPName(t){return r["p"].get("/specs/aciton/get-by-app-name",t)},getDistribution(t){return r["p"].get("/feeds/chaowan",t)},getSellingCategories(t){return r["p"].get("/products/action/get-selling-categories",t)},getCategoryCount(t){return r["p"].get("/products/action/get-category-product-count",t)},getSpuList(t){return r["h"].post("/treasure/spus/search/simple-info",t)},getSpuHeader(t){return r["h"].get("/treasure/flora/v2/spu/simpleInfo",t)},getSpuDetails(t){return r["h"].get("/treasure/flora/v1/spu/detailInfo",t)},getTagList(t){return r["h"].get("/treasure/tags",t)},getTagDetails(t){return r["h"].get("/treasure/flora/v1/tag/detailInfo",t)},getTagDetailsV2(t){return r["h"].get("/treasure/flora/v2/tag/simpleInfo",t)},searchSpuInTag(t){return r["h"].get("/plast/search/spu",t)},searchTag(t){return r["h"].get("/plast/search/tag",t)},getXiaokaWebConfig(){return r["e"].get("/vinyl/web.json")},getTagsV2(t){return r["h"].get("/armory/entry/tags",t)}}},cd4a:function(t,e,s){"use strict";s("50fd")},d17e:function(t,e,s){"use strict";var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ec-thumbnail",style:{width:t.cssWidth,height:t.cssHeight,"border-radius":t.cssBorderRadius,...t.extStyle}},[e("img",{directives:[{name:"show",rawName:"v-show",value:t.showDisplayImage,expression:"showDisplayImage"}],staticClass:"ec-thumbnail__image",attrs:{src:t.displaySrc,alt:t.alt,loading:"lazy","lazy-load":"",mode:"aspectFill"},on:{click:t.handlePreview}}),e("img",{directives:[{name:"show",rawName:"v-show",value:!t.showDisplayImage,expression:"!showDisplayImage"}],staticClass:"ec-thumbnail__image",attrs:{src:t.defaultUrl,alt:"默认图片",loading:"lazy","lazy-load":"",mode:"aspectFill"}})])},a=[],i=(s("4662"),s("28a2")),n=s("18e5"),c={props:{url:{type:String,required:!0},defaultUrl:{type:String,default:""},size:{type:Object,default:()=>({})},alt:{type:String,default:""},borderRadius:{type:[Number,String],default:0},preview:{type:Boolean,default:!1},extStyle:{type:Object,default:()=>{}}},data(){return{showDisplayImage:!0,displaySrc:""}},watch:{targetUrl:{immediate:!0,handler(t,e){t&&t!==e&&this.setDisplaySrc()}}},computed:{cssBorderRadius(){return Object(n["a"])(this.borderRadius)},cssWidth(){const{width:t}=this.size;return t?"string"===typeof t?t:t+"px":"100%"},cssHeight(){const{height:t}=this.size;return t?"string"===typeof t?t:t+"px":"100%"},targetUrl(){const{url:t,size:{style:e}}=this;return e?t+e:t}},methods:{setDisplaySrc(){this.displaySrc=this.targetUrl},handlePreview(){const{url:t,preview:e}=this;e&&Object(i["a"])({images:[t+"!lfit_w1080_jpg"],closeable:!0})}}},o=c,u=(s("cd4a"),s("0c7c")),g=Object(u["a"])(o,r,a,!1,null,null,null);e["a"]=g.exports},fdc8:function(t,e,s){"use strict";s("ca5f")}}]);