(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ea3c16a"],{"158b":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return c}));a("f8c9");var s=a("0ef7"),i=a("8d17");function n(e){return s["l"].get("/action/get-url-val",e)}function r({k:e,v:t}){const a={k:e,v:t};return s["l"].post("/action/set-url-val",a)}async function o(e){const t=i["a"].obj2query(e),{k:a}=await r({v:t});return"hash="+a}async function c(e){if(!e)return{};try{const t=decodeURIComponent(e),a=t.split("&");let s={};if(a.forEach(e=>{const[t,a]=e.split("=");s[t]=a}),s.hash){const{data:e}=await n({k:s.hash}),t=await c(e);Reflect.deleteProperty(s,"hash"),s={...t,...s}}return s}catch(t){return console.log("error",t),{}}}},"21e53":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return e.show?t("div",{staticClass:"page-poster"},[t("div",{staticClass:"tip mb-4"},[e._v("长按保存图片")]),e.show?t("Poster",{ref:"poster",on:{load:function(t){e.image=!0}}},[t("div",{staticClass:"poster"},[t("div",{staticClass:"top-info"},[t("div",{staticClass:"left"},[t("div",{staticClass:"title otext"},[e._v(e._s(e.title))]),t("div",{staticClass:"user-info"},[e.user&&e.user.avatar?t("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:"avatar"}}):e._e(),t("div",{staticClass:"info"},[t("div",{staticClass:"nickname"},[e._v(" "+e._s(e.user.nickName||"")+" "),t("span",{staticClass:"platform ml-2"},[e._v(' 发布于"'+e._s(e.platform)+'"小程序 ')])]),t("div",{staticClass:"descri"},[e._v("时间: "+e._s(e.now))])])])]),t("div",{staticClass:"right"},[t("div",{staticClass:"qrcode-wrapper"},[e.qrcode?t("img",{staticClass:"qrcode",attrs:{src:e.qrcode,alt:""}}):e._e(),t("img",{staticClass:"qr-avatar",attrs:{src:e.user.avatar,alt:""}})]),t("div",{staticClass:"qrcode-desc"},[e._v("扫码生成我的榜单")])])]),t("div",{staticClass:"header"},[t("div",{staticClass:"header-title"},[t("div",{staticClass:"content"},[e._v(e._s(e.mainTitle))])])]),t("div",{staticClass:"tier-list"},e._l(e.selfTier,(function(a,s){return t("div",{key:s,staticClass:"group"},[t("div",{staticClass:"group-title u-flex-c",style:`background: linear-gradient(180deg, ${e.colors[e.tiers[s]]} 0%, ${e.colors1[e.tiers[s]]} 100%);`},[t("div",{staticClass:"tier-name"},[e._v(e._s(e.tiers[s])+"级")]),t("div",{staticClass:"tier-title"},[e._v(e._s(a.name))])]),t("div",{class:["items","white"],style:`border: 1.5px solid ${e.colors1[e.tiers[s]]};`,attrs:{orientation:"horizontal"}},e._l(a.items,(function(e){return t("div",{key:e,class:["card",a.items.length?"":"place"]},[t("img",{staticClass:"poster-cover",attrs:{src:e,alt:""}})])})),0)])})),0),t("div",{staticClass:"foot u-flex-c-c"},[e._v("·梯度排行榜仅代表发布者个人意见·")])])]):e._e(),e.image?e._e():t("div",{staticClass:"footer"},[t("div",{staticClass:"loader"})]),t("div",{staticClass:"btn-wrapper"},[t("div",{staticClass:"btns u-flex-c-sb"},[t("div",{staticClass:"btn left-btn u-flex-c-c",on:{click:function(t){e.show=!1}}},[e._v(" 再次生成海报 ")])])])],1):t("div",{staticClass:"page-rank"},[t("div",{staticClass:"header"},[t("div",{staticClass:"header-title"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mainTitle,expression:"mainTitle"}],staticClass:"content",attrs:{type:"text",placeholder:"请在这里输入"},domProps:{value:e.mainTitle},on:{input:function(t){t.target.composing||(e.mainTitle=t.target.value)}}})]),t("div",{staticClass:"header-title-input"},[e._v("你的天梯生成器⬆️更改标题⬇️添加款式")])]),t("div",{staticClass:"tier-list"},e._l(e.selfTier,(function(a,s){return t("div",{key:s,staticClass:"group"},[t("div",{staticClass:"group-title u-flex-c",style:`background: linear-gradient(180deg, ${e.colors[e.tiers[s]]} 0%, ${e.colors1[e.tiers[s]]} 100%);`},[t("div",{staticClass:"tier-name"},[e._v(e._s(e.tiers[s])+"级")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.name,expression:"tier.name"}],staticClass:"tier-title",attrs:{maxlength:"20",type:"text",placeholder:"梯度名称(最多20字)"},domProps:{value:a.name},on:{input:function(t){t.target.composing||e.$set(a,"name",t.target.value)}}}),s===e.selfTier.length-1?t("Icon",{attrs:{name:"close",color:"#FFF",size:"20"},on:{click:e.handleDelete}}):e._e()],1),t("div",{class:["items"],style:`border: 1.5px solid ${e.colors1[e.tiers[s]]};`,attrs:{orientation:"horizontal"}},[t("div",{staticClass:"plus u-flex-c-c",on:{click:function(t){return e.handleOpenPopup(s)}}},[t("Icon",{attrs:{name:"plus",color:"#fff",size:"20"}})],1),e._l(a.items,(function(i){return t("div",{key:i,class:["card",a.items.length?"":"place"]},[t("img",{staticClass:"cover",attrs:{src:i,alt:""}}),t("div",{staticClass:"close",on:{click:function(t){return e.handleDeleteItem(s,i)}}},[t("Icon",{attrs:{name:"close",color:"#FFF",size:"20"}})],1)])}))],2)])})),0),t("div",{staticClass:"btns u-flex-c-sb"},[t("div",{staticClass:"new-team-btn",on:{click:e.handleAddTier}},[e._v("+ 新增一个梯度")]),t("div",{staticClass:"new-team-btn",on:{click:e.handleShowPoster}},[e._v("生成海报")])]),t("Popup",{attrs:{round:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[t("div",{ref:"container",staticClass:"popup"},[t("Sticky",{attrs:{container:e.container}},[e.items.length?t("div",{staticClass:"search-wrapper u-flex-c"},[t("Icon",{attrs:{name:"arrow-left",color:"#625E76",size:"20"},on:{click:e.handleBack}}),t("div",{staticClass:"search"},[t("form",{attrs:{action:""}},[t("Search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:function(t){return e.onSearch(!0)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1)])],1):t("form",{attrs:{action:""}},[t("Search",{attrs:{placeholder:"请输入搜索关键词"},on:{search:function(t){return e.onSearch(!0)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1)]),e.items.length?t("van-list",{ref:"list",attrs:{finished:!e.hasMore,"immediate-check":!1,"finished-text":"到底了～"},on:{load:e.onSearch},model:{value:e.isLoading,callback:function(t){e.isLoading=t},expression:"isLoading"}},[t("div",{staticClass:"list van-clearfix"},e._l(e.items,(function(a,s){return t("div",{key:`${a.id}- ${s}`,staticClass:"list-cover u-flex-col-c-c",on:{click:function(t){return e.handleAddImage(a.cover)}}},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:{src:a.cover+"!fill_w360_h480_jpg",loading:"https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg"},expression:"{\n                src: i.cover + '!fill_w360_h480_jpg',\n                loading:\n                  'https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg',\n              }"}],attrs:{alt:""}}),t("span",{staticClass:"spu-name otext2"},[e._v(e._s(a.name))])])})),0)]):e.tags.length?t("div",{staticClass:"tags"},e._l(e.tags,(function(a,s){return t("div",{key:s,staticClass:"tag",on:{click:function(t){return e.handleTagClick(a)}}},[t("img",{staticClass:"tag-cover",attrs:{src:a.images.logo+"!fill_w360_h480_jpg",alt:""}}),t("div",{staticClass:"tag-name otext"},[e._v(e._s(a.name))])])})),0):e._e()],1)])],1)},i=[],n=(a("e7e5"),a("d399")),r=(a("0cc8"),a("3104")),o=(a("5852"),a("d961")),c=(a("8a58"),a("e41f")),d=(a("c3a6"),a("ad06")),l=(a("2994"),a("2bdd")),p=(a("d9e2"),a("14d9"),a("2b0e")),g=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"canvas"}},[e.posterCover?[t("img",{staticClass:"draw",attrs:{src:e.posterCover}})]:e._t("default")],2)},u=[],m=a("c0e9"),f=a.n(m),h=a("ed08"),v=a("7cb2"),b={name:"Poster",data(){return{posterCover:""}},methods:{drawImage(){this.$nextTick(()=>{setTimeout(()=>{f()(document.getElementById("canvas"),{allowTaint:!1,useCORS:!0,backgroundColor:"black"}).then(e=>{e.toBlob(async e=>{const t=Object(h["i"])(),a=new File([e],t+".jpeg"),s=await Object(v["b"])(a,"activity-temp.image");this.posterCover=s.url,this.$emit("load"),this.$toast.show({title:"海报图片已生成，长按保存"})},"image/jpeg")}).catch(()=>{})},2e3)})}}},C=b,w=(a("f69d"),a("0c7c")),y=Object(w["a"])(C,g,u,!1,null,"5bb79a2e",null),_=y.exports;const T={1029:[{id:1213876,name:"IDEAS",images:{logo:"https://cdn.qiandaoapp.com/admins/e3c2e9c3dc89c92d5f43ce6524d4bee7.png"}},{id:1213952,name:"Speed系列",images:{logo:"https://cdn.qiandaoapp.com/admins/6c045592401573b59014fce562dd8983.png"}},{id:1213970,name:"机械组系列",images:{logo:"https://cdn.qiandaoapp.com/admins/7e3b16ab43021052680dd2df4bc853ab.png"}},{id:1213826,name:"CREATOR系列",images:{logo:"https://cdn.qiandaoapp.com/admins/3cb53b22d5e8b5cd0148333802c8cb07.png"}},{id:1213788,name:"建筑系列",images:{logo:"https://cdn.qiandaoapp.com/admins/90bc22165da0e359e53f6e3ec98c0ae2.png"}},{id:1213868,name:"哈利波特系列",images:{logo:"https://cdn.qiandaoapp.com/admins/63ba2e741f7333c5d8386bf7bb4d9fdb.png"}},{id:1213894,name:"漫威超级英雄系列",images:{logo:"https://cdn.qiandaoapp.com/admins/621576219e4530d31d03cfbb2a653876.png"}},{id:1213912,name:"悟空小侠系列",images:{logo:"https://cdn.qiandaoapp.com/admins/b6538a7d447bca49694b9fd0793203a4.png"}},{id:1213918,name:"幻影忍者系列",images:{logo:"https://cdn.qiandaoapp.com/admins/e283bad5265205fec78513c28bc47066.png"}},{id:1317374,name:"节日",images:{logo:"https://cdn.qiandaoapp.com/admins/11a421a968eb2d9ab8294b67dfe25c1e.jpg"}},{id:1213812,name:"方头仔",images:{logo:"https://cdn.qiandaoapp.com/admins/11ff9da9bb23d09b45aa8a1a8a964c0b.png"}},{id:1213798,name:"蝙蝠侠系列",images:{logo:"https://cdn.qiandaoapp.com/admins/ea8bb8fbfb555f4b1cc0dd92d92ff931.jpg"}},{id:1213846,name:"迪士尼系列",images:{logo:"https://cdn.qiandaoapp.com/admins/e9c9b3869ed31fbac64638c958545b4d.png"}},{id:1213818,name:"城市系列",images:{logo:"https://cdn.qiandaoapp.com/admins/03db839eb8a8d92d3741945606c7abf1.png"}},{id:1213830,name:"DC超级英雄",images:{logo:"https://cdn.qiandaoapp.com/admins/8a270cb53d4ad57942a7f6324f6dd866.png"}},{id:1213988,name:"指环王LEGO",images:{logo:"https://cdn.qiandaoapp.com/admins/a146d6a66b7a31b3642572ac89114d14.jpg"}},{id:1213920,name:"守望先锋系列",images:{logo:"https://cdn.qiandaoapp.com/admins/2365b8c6061e8d81b271ae747c305fb5.png"}},{id:1213968,name:"超级马里奥系列",images:{logo:"https://cdn.qiandaoapp.com/admins/827c028ec845298a018b7da45f24402d.png"}},{id:1221010,name:"阿凡达系列",images:{logo:"https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg"}},{id:1213962,name:"星球大战系列",images:{logo:"https://cdn.qiandaoapp.com/admins/34c9a34443c0dcbde245be02d42c1e7b.png"}}]},k={1e3:"15",1029:"1187117",1020:"1000225"},q={tid1:["我的最爱","表现不错","就那样吧","用脚做设计"]};var x=a("ccbb"),j=a("158b"),S=a("afb3"),I=a("0d94"),P=a("4360"),O=a("5a0c"),$=a.n(O),D={name:"tier-rank",components:{[l["a"].name]:l["a"],Icon:d["a"],Popup:c["a"],Search:o["a"],Sticky:r["a"],Poster:_},props:{},mounted(){this.container=this.$refs.container},setup(e){const{proxy:t}=Object(p["getCurrentInstance"])(),a=Object(p["reactive"])({title:"",selfTier:[{name:"",items:[]}],tiers:["S","A","B","C","D","E"],colors:{S:"#EC4C3D",A:"#F2AA3C",B:"#7EF092",C:"#63D3E8",D:"#4B46F5",E:"#B6BCD3"},colors1:{S:"#EE813C",A:"#EDE04B",B:"#C3DF52",C:"#4A88EE",D:"#7A43F5",E:"#9FA0A5"},visible:!1,query:"",items:[],hasMore:!1,isLoading:!1,current:0,show:!1,image:!1,qrcode:"",now:$()().format("YYYY年M月D日"),container:"",mainTitle:""}),s=Object(p["computed"])(()=>{const e=P["a"].state.user.me;return{...e,avatar:Object(I["a"])(e.avatar)}}),i=async e=>{var t;const{mainTitle:s,selfTier:i}=await Object(j["b"])(e);a.mainTitle=s,a.selfTier=(null===i||void 0===i||null===(t=i.split(","))||void 0===t?void 0:t.map(e=>({name:e,items:[]})))||[{name:"",items:[]}]},{pkg:r,tid:o,hash:c}=t.$route.query,d=null===q||void 0===q?void 0:q[o];d?a.selfTier=d.map(e=>({name:e,items:[]})):c&&i("hash="+c);const l=Object(p["computed"])(()=>Object(S["b"])(r).nameCN),g=Object(p["computed"])(()=>T[r]||[]);let u=[];const m=async(e=!1)=>{e&&window.scrollTo(0,0);const t=n["a"].loading({message:"加载中...",forbidClick:!0}),s={q:a.query,"start-index":e?0:a.items.length,"max-results":50,typeIds:k[r]};u&&u.length&&(s.andTagIds=u.join(","));try{const{data:i}=await x["a"].searchSpuInTag(s),n=(null===i||void 0===i?void 0:i.items.map(e=>{var t;return{id:e.id,name:e.name,cover:null===e||void 0===e||null===(t=e.imgs)||void 0===t?void 0:t.cover}}))||[];a.items=e?n:[...a.items,...n],a.hasMore=a.items.length<i.total_count}catch(i){}finally{t.clear(),a.isLoading=!1}},f=e=>new Promise((t,a)=>{const s=new Image;s.onload=function(){var e=document.createElement("canvas");e.width=this.naturalWidth,e.height=this.naturalHeight,e.getContext("2d").drawImage(s,0,0);const a=e.toDataURL("image/png");t(a)},s.setAttribute("crossOrigin","Anonymous"),s.src=e,s.onerror=()=>{a(new Error("图片流异常"))}}),h=()=>{a.selfTier.length>5?Object(n["a"])("暂时只支持添加6个梯度"):a.selfTier.push({name:"",items:[]})},v=()=>{a.selfTier.pop()},b=e=>{a.current=e,a.visible=!0},C=async e=>{const t=await f(e+"!fill_w360_h480_jpg");a.selfTier[a.current].items.push(t),a.visible=!1},w=(e,t)=>{const s=Object.assign({},a.selfTier),i=Object.assign({},s[e]);i.items=i.items.filter(e=>e!==t),s[e]=i,a.selfTier=s},y=async()=>{const e=await Object(j["a"])({selfTier:a.selfTier.map(e=>e.name),mainTitle:a.mainTitle}),s=await Object(j["a"])({url:encodeURIComponent(`https://m.qiandaoapp.com${t.$route.fullPath}&${e}`)});a.qrcode=await f(`https://api.qiandao.cn/poster/wx/get-qr-code?page=modules%2Fpages%2Fweb-view%2Findex&scene=${encodeURIComponent(s)}&packageId=${r}`)},_=async()=>{a.show=!0,a.image=!1,await y(),t.$nextTick(()=>{t.$refs.poster.drawImage()})},O=async e=>{u=[e.id],await m()},D=()=>{t.navigateTo({url:"/pages-market/island/index?id=300194"})},E=()=>{a.items=[],u=[]};return{...Object(p["toRefs"])(a),user:s,tags:g,platform:l,handleAddTier:h,handleDelete:v,onSearch:m,handleOpenPopup:b,handleAddImage:C,handleDeleteItem:w,handleShowPoster:_,handleTagClick:O,handleMore:D,handleBack:E}}},E=D,A=(a("2f17"),Object(w["a"])(E,s,i,!1,null,"13730412",null));t["default"]=A.exports},2544:function(e,t,a){},"2f17":function(e,t,a){"use strict";a("d8af")},"7cb2":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return c}));var s=a("0ef7"),i=a("0d94"),n=a("a37c");async function r(e,t="interior-admin.image"){const a=Object(i["e"])({isProd:n["e"],async customApiCall(e){var t;const a=await s["h"].post("/uploader/gene-post-object-sign",e);return null===(t=a.data)||void 0===t?void 0:t[0]}});return a({file:e,scene:t})}function o(e){return s["h"].get("/uploader/file-space/get",e)}function c(e,t="interior-admin.image"){const a=Object(i["e"])({isProd:n["e"],async customApiCall(e){var t;const a=await s["h"].post("/uploader/anonymous/gene-post-object-sign",e);return null===(t=a.data)||void 0===t?void 0:t[0]}});return a({file:e,scene:t})}},ccbb:function(e,t,a){"use strict";var s=a("0ef7");t["a"]={getStandardProducts(e){return s["p"].get(`/spus/${e}/standard-products`)},getSPUs(e){return s["p"].get("/v2/spus",e)},getSingleSpu(e,t){return s["p"].get("/v2/spus/"+e,t)},getUserPosters(e){return s["h"].post("/c2c-web/v1/poster/get-user-posters",e)},doProductsOffSale(e){return s["h"].post("/c2c-web/v1/c2c/products/off-sale",e)},plastSearchCategory(e){return s["h"].get("/plast/search/category/v3",e)},createUserPoster(e){return s["h"].post("/c2c-web/v1/poster/create-user-poster",e)},getSPUSpecs(e){return s["p"].get(`/spus/${e}/specs`)},updateC2cProductsByCategory(e){return s["h"].post("/c2c/products/m-update",e)},updateProductMulti(e){return s["h"].post("/c2c/products/multi-create",e)},createProductMulti(e){return s["h"].post("/c2c/products/m-create-update",e)},getProductsByCategory(e){return s["h"].get("/c2c/products/by-category",e)},getCategoryDetail(e,t){return s["p"].get("/v2/categories/"+e,t)},getCategories(e){return s["p"].get("/v2/categories",e)},getRecommendCategories(e){return s["p"].get(`/v2/categories/${e}/recommend`)},getCategoryTags(e){return s["p"].get(`/v2/categories/${e}/config`)},getTag(e,t){return s["p"].get("/tags/"+e,t)},getHotTags(e){return s["p"].get(`/tags/${e}/config`)},getTags(e){return s["p"].get("/tags",e)},searchCategories(e){return s["p"].get("/v2/categories",e)},getSettings(){return s["p"].get("/settings")},changeWishes(e){return s["p"].post("/wish-list",e)},updateUserSettings(e){return s["p"].put("/settings",e)},getPosterColumnConfig(e){return s["l"].get("/action/get-products-poster",e)},getPosterThemes(e){return s["l"].get("/action/get-poster-themes",e,{isErrorDefaultTip:!1})},getWishList(e){return s["p"].get("/wish-list",e,{isErrorDefaultTip:!1})},getWishMatches(e){return s["p"].get("/products/match/wish-list",e,{isErrorDefaultTip:!1})},getDemandProductList(e){return s["p"].get("/products/match/demand-list",e)},getTradeInfo(e){return s["p"].post("/action/get-trade-info",e)},get360DegImages(e){return s["p"].get(`/spus/${e}/360-degree-images`)},getBarginSpus(e){return s["p"].post("/stock-order/bargin",e)},getSpecsByMPName(e){return s["p"].get("/specs/aciton/get-by-app-name",e)},getDistribution(e){return s["p"].get("/feeds/chaowan",e)},getSellingCategories(e){return s["p"].get("/products/action/get-selling-categories",e)},getCategoryCount(e){return s["p"].get("/products/action/get-category-product-count",e)},getSpuList(e){return s["h"].post("/treasure/spus/search/simple-info",e)},getSpuHeader(e){return s["h"].get("/treasure/flora/v2/spu/simpleInfo",e)},getSpuDetails(e){return s["h"].get("/treasure/flora/v1/spu/detailInfo",e)},getTagList(e){return s["h"].get("/treasure/tags",e)},getTagDetails(e){return s["h"].get("/treasure/flora/v1/tag/detailInfo",e)},getTagDetailsV2(e){return s["h"].get("/treasure/flora/v2/tag/simpleInfo",e)},searchSpuInTag(e){return s["h"].get("/plast/search/spu",e)},searchTag(e){return s["h"].get("/plast/search/tag",e)},getXiaokaWebConfig(){return s["e"].get("/vinyl/web.json")},getTagsV2(e){return s["h"].get("/armory/entry/tags",e)}}},d44e:function(e,t,a){var s=a("9bf2").f,i=a("1a2d"),n=a("b622"),r=n("toStringTag");e.exports=function(e,t,a){e&&!a&&(e=e.prototype),e&&!i(e,r)&&s(e,r,{configurable:!0,value:t})}},d8af:function(e,t,a){},f69d:function(e,t,a){"use strict";a("2544")},f8c9:function(e,t,a){var s=a("23e7"),i=a("da84"),n=a("d44e");s({global:!0},{Reflect:{}}),n(i.Reflect,"Reflect",!0)}}]);