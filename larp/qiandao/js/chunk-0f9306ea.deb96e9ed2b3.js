(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f9306ea"],{6040:function(t,e,s){},"684b":function(t,e,s){"use strict";var a=s("0ef7");e["a"]={getPostAnalysis(t){return a["d"].get("/analysis/"+t)},createPostReviewV3(t){return a["h"].post("/gactus/post-review-v3",t)},updatePostReviewV3(t){return a["h"].put("/gactus/post-review-v3",t)},deleteSpuMark(t){return a["h"].post("/gactus/delete-spu-mark",t)},createPostArticle(t){return a["h"].post("/gactus/posts-article",t)},getPostListByTopic(t){return a["h"].post("/gactus/topics/posts-v3",t)},getPostListByTag(t){return a["h"].post("/gactus/posts/by-tag-v4",t)},mark(t){return a["h"].post("/gactus-web/v1/mark/edit",t)},createPost(t){return a["h"].post("/gactus-web/post/create",t)},createPostStandard(t){return a["h"].post("/gactus-web/post/standard/create",t)},updatePostStandard(t){return a["h"].post("/gactus-web/post/standard/update",t)},comment(t){return a["h"].post("/cactus-api/comments",t)},getUserHobbyMark(t){return a["h"].post("/gactus/user-hobby-mark",t)},getUserMark(t){return a["h"].post("/gactus-web/v1/get-user-marks",t)},getUserHobbyList(t){return a["h"].get("/gactus-web/v1/interest/list",{uid:t})},gstoneGames(t){return a["h"].post("/config-go/redirect/gstoneGames",t)}}},"6de0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"favorite-pokemon"},[1===this.part?e("div",[this.tagId?e("div",{staticClass:"choose-tag",on:{click:t.resetTag}},[e("img",{attrs:{src:this.tagCoverUrl}}),t._v(" "+t._s(this.tagName)+" ")]):t._e(),this.tagId?[t.selectedCount>0?e("div",{staticClass:"reset",on:{click:t.reset}},[t._v(" 重置选项 ")]):t._e(),e("div",{staticClass:"types-list"},[t._l(this.types,(function(s,a){return[e("div",{key:a,staticClass:"type"},[e("div",{staticClass:"type-name"},[t._v(t._s(s.name))]),e("div",{staticClass:"pokemon",on:{click:function(e){return t.handleModalClick(a)}}},[e("img",{staticClass:"pokemon-cover",attrs:{src:s.cover+"!lfit_w240_jpg",alt:"cover"}}),e("div",{staticClass:"pokemon-name"},[t._v(t._s(s.spuName))])])])]})),e("div",{staticClass:"want-tip"},[t._v("选中的款式，将同时添加为“想要”")])],2)]:e("div",{staticClass:"tag-list"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tagQuery,expression:"tagQuery"}],staticClass:"tag-list-input",attrs:{placeholder:"输入团体名称搜索（区分大小写）"},domProps:{value:t.tagQuery},on:{input:function(e){e.target.composing||(t.tagQuery=e.target.value)}}}),t._l(this.tagList,(function(s,a){return[t.tagQuery&&-1==s.name.indexOf(t.tagQuery)?t._e():e("div",{key:a,staticClass:"tag",on:{click:function(e){return t.selectTag(s.id,s.name,s.images.logo)}}},[e("img",{attrs:{src:s.images.logo}}),t._v(" "+t._s(s.name)+" ")])]}))],2),e("div",{class:["render-btn",{finish:9===t.selectedCount}],on:{click:t.handleRenderBtn}},[t._v(" 生成图片 "),this.tagId?[t._v("（已选 "+t._s(t.selectedCount)+"/9）")]:t._e()],2),e("transition",{attrs:{name:"fade"}},[t.isOpenModal?e("div",{staticClass:"modal"},[e("div",{staticClass:"mask",on:{click:t.handleMaskClick}}),e("div",{staticClass:"spu-group"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"searchbox",attrs:{placeholder:"输入款式名称搜索"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),""===this.query?e("van-list",{ref:"list",staticClass:"spu-list",attrs:{finished:!t.defaultHasMore},on:{load:t.getDefaultSpuList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(this.defaultSpuList,(function(s,a){return e("div",{key:a,staticClass:"spu",on:{click:function(e){var a;return t.handleSelectSpu(s.name,s.cover,null===(a=s.profiles)||void 0===a?void 0:a[0].profiles[0].dataValue,s.id)}}},[e("img",{staticClass:"spu-cover",attrs:{src:s.cover+"!lfit_w240_jpg"}}),e("div",{staticClass:"spu-name"},[t._v(t._s(s.name))])])})),0):e("van-list",{ref:"list",staticClass:"spu-list",attrs:{finished:!t.hasMore},on:{load:t.getSpuList},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(this.spuList,(function(s,a){return e("div",{key:a,staticClass:"spu",on:{click:function(e){var a;return t.handleSelectSpu(s.name,s.cover,null===(a=s.entry_profile)||void 0===a?void 0:a[0].profiles[0].dataValue)}}},[e("img",{staticClass:"spu-cover",attrs:{src:s.cover+"!lfit_w240_jpg"}}),e("div",{staticClass:"spu-name"},[t._v(t._s(s.name))])])})),0)],1)])]):t._e()])],2):t._e(),2===this.part?e("div",{staticClass:"final",attrs:{id:"canvas"}},[t.image?[e("img",{staticClass:"draw",attrs:{src:t.image}})]:e("div",{staticClass:"paper"},[e("div",{staticClass:"body"},[e("div",{staticClass:"header"},[e("div",{staticClass:"poster-title"},[e("img",{staticClass:"title",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/62ad298678a43bc8c6a03047fe5f6832.png"}}),e("img",{staticClass:"tag-cover",attrs:{src:this.tagCoverUrl}})]),e("div",{staticClass:"user"},[this.me&&this.me.avatar?e("img",{staticClass:"avatar",attrs:{src:this.me.avatar,alt:"avatar"}}):t._e(),e("span",[t._v(t._s(this.me.nickName))])])]),e("div",{staticClass:"image-list"},[t._l(this.types,(function(s,a){return[e("div",{key:a,staticClass:"paper-type"},[e("div",{staticClass:"spu-cover"},[e("div",{staticClass:"cover"},[e("img",{attrs:{src:s.cover+"!lfit_w240_jpg",alt:"cover"}})]),e("img",{staticClass:"bg",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/ce7c2e12dfc7c8a01477bfccb6d1939e.png"}}),s.mainTagName?e("div",{staticClass:"main-tag"},[t._v(" "+t._s(s.mainTagName)+" ")]):t._e()]),e("div",{staticClass:"type-name"},[t._v(t._s(s.name))]),e("div",{staticClass:"spu-name"},[t._v(t._s(s.spuName))])])]}))],2)]),t._m(0)])],2):t._e(),2===this.part?e("div",{staticClass:"page-footer"},[t.image?[e("div",{staticClass:"tip"},[t._v("-- 长 按 上 方 海 报 保 存 --")]),e("div",{staticClass:"goback-btn",on:{click:t.goBack}},[t._v("重新选择")])]:e("div",{staticClass:"loader"},[t._v("图片预览中…")])],2):t._e()])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"footer"},[e("div",{staticClass:"miniprogram"},[e("div",{staticClass:"tip"},[t._v("想 get 同款来「千岛小卡」小程序")]),e("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/9d54173099b6ac01d0c3d78b26e69935.png"}})]),e("img",{staticClass:"img-action",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/d42e1e9c457c01487f16503135dafac3.png"}}),e("img",{staticClass:"img-bottom",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/5d97b16574bffdb1269e46636d811b13.png"}})])}],r=(s("2994"),s("2bdd")),n=s("ccbb"),c=s("c0e9"),o=s.n(c),g=s("2f62"),u=s("7cb2"),p=s("ed08"),d=(s("cb35"),s("684b"),s("4cce")),l={components:{[r["a"].name]:r["a"]},data(){return{types:[{name:"入坑卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""},{name:"最爱卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""},{name:"梦情卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""},{name:"手中最贵卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""},{name:"复数最多卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""},{name:"拔草卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""},{name:"实物最美卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""},{name:"跳水卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""},{name:"求求来收卡",spuName:"点击选择",cover:"https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",mainTagName:"",spuId:""}],loading:!1,spuList:[],defaultSpuList:[],isOpenModal:!1,selectedIndex:0,query:"",image:"",part:1,showIslandModal:!1,postId:"",hasMore:!1,defaultHasMore:!1,tagCoverUrl:"",tagId:"",tagName:"",tagList:[],tagQuery:""}},computed:{...Object(g["mapState"])("user",["me"]),selectedCount(){const t=this.types.filter(t=>"点击选择"!==t.spuName);return t.length}},async mounted(){var t;"{}"===JSON.stringify(this.me)&&this.logIn();const e=null===(t=this.$route)||void 0===t?void 0:t.query;if(e.tagId){this.tagId=e.tagId;try{const t=await n["a"].getTagDetailsV2({entryId:e.tagId});this.tagCoverUrl=t.data.header.cover.image+"!lfit_w240_png",this.tagName=t.data.header.name,this.getDefaultSpuList()}catch(s){console.error(s)}}else this.getTagList()},watch:{query(t,e){""!==t&&(this.spuList=[],this.getSpuList())}},methods:{selectTag(t,e,s){this.tagId=t,this.tagName=e,this.tagCoverUrl=s,this.getDefaultSpuList()},resetTag(){this.tagId="",this.tagName="",this.tagCoverUrl="",this.reset(),0===this.tagList.length&&this.getTagList()},async getTagList(){try{const t=await n["a"].getTagList({typeIds:[1512150],offset:0,limit:200});this.tagList=t.rows}catch(t){console.error(t)}},logIn(){const t="/modules/pages/common-login/index";(Object(p["h"])()||Object(p["d"])())&&this.navigateTo({url:t})},handleModalClick(t){"{}"===JSON.stringify(this.me)&&this.logIn(),this.selectedIndex=t,this.spuList=[],this.isOpenModal=!0},async getDefaultSpuList(){this.loading=!0;const t=[this.tagId],e=["1512169"];var s={andTagIds:t,propertyIds:e,limit:99,offset:this.defaultSpuList.length,orderBy:"latest"};try{const t=await n["a"].getSpuList(s),e=t.data.list;"{}"!==JSON.stringify(t.data)&&(this.defaultSpuList=this.defaultSpuList.concat(e),this.defaultSpuList.length<Number(t.data.count)?this.defaultHasMore=!0:this.defaultHasMore=!1)}catch(a){console.error(a)}this.loading=!1},async getSpuList(){this.loading=!0;const t={q:this.query,"start-index":this.spuList.length,"max-results":99,tagIds:this.tagId,propertyIds:1512169,scene:"plugin-photo-cards-life"};try{const s=await n["a"].searchSpuInTag(t),a=s.data.items;for(var e=0;e<a.length;e++)a[e].cover=a[e].imgs.cover;this.spuList=this.spuList.concat(a),this.spuList.length<s.data.total_count?this.hasMore=!0:this.hasMore=!1}catch(s){console.error(s)}this.loading=!1},handleMaskClick(){this.isOpenModal=!1,this.showIslandModal=!1,this.query=""},handleSelectSpu(t,e,s,a){this.types[this.selectedIndex].spuName=t,this.types[this.selectedIndex].cover=e,this.types[this.selectedIndex].mainTagName=s,this.types[this.selectedIndex].spuId=a,this.handleMaskClick()},handleRenderBtn(){this.selectedCount<9?this.$toast.show({title:"还有未选完的"}):this.render()},reset(){for(var t=0;t<this.types.length;t++)this.types[t].spuName="点击选择",this.types[t].mainTagName="",this.types[t].id="",this.types[t].cover="https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg"},async render(){this.part=2,this.drawImage();const t={action:"add",items:this.types.map(t=>t.spuId)};try{await d["a"].postUserWishes(t)}catch(e){console.error(e)}},drawImage(){this.$nextTick(()=>{setTimeout(()=>{o()(document.getElementById("canvas"),{allowTaint:!1,useCORS:!0,backgroundColor:"white"}).then(t=>{t.toBlob(async t=>{const e=Object(p["i"])(),s=new File([t],e+".jpeg"),a=await Object(u["b"])(s,"activity-temp.image");this.image=a.url},"image/jpeg")}).catch(()=>{})},3e3)})},goBack(){this.part=1,this.image=""}}},m=l,h=(s("ed5c"),s("0c7c")),v=Object(h["a"])(m,a,i,!1,null,null,null);e["default"]=v.exports},"7cb2":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return c})),s.d(e,"a",(function(){return o}));var a=s("0ef7"),i=s("0d94"),r=s("a37c");async function n(t,e="interior-admin.image"){const s=Object(i["e"])({isProd:r["e"],async customApiCall(t){var e;const s=await a["h"].post("/uploader/gene-post-object-sign",t);return null===(e=s.data)||void 0===e?void 0:e[0]}});return s({file:t,scene:e})}function c(t){return a["h"].get("/uploader/file-space/get",t)}function o(t,e="interior-admin.image"){const s=Object(i["e"])({isProd:r["e"],async customApiCall(t){var e;const s=await a["h"].post("/uploader/anonymous/gene-post-object-sign",t);return null===(e=s.data)||void 0===e?void 0:e[0]}});return s({file:t,scene:e})}},cb35:function(t,e,s){"use strict";var a=s("0ef7");e["a"]={detail(t){return a["h"].get("/treasure/island/detail?id="+t)},join(t){return a["h"].post("/treasure/island/join",{id:t})}}},ccbb:function(t,e,s){"use strict";var a=s("0ef7");e["a"]={getStandardProducts(t){return a["p"].get(`/spus/${t}/standard-products`)},getSPUs(t){return a["p"].get("/v2/spus",t)},getSingleSpu(t,e){return a["p"].get("/v2/spus/"+t,e)},getUserPosters(t){return a["h"].post("/c2c-web/v1/poster/get-user-posters",t)},doProductsOffSale(t){return a["h"].post("/c2c-web/v1/c2c/products/off-sale",t)},plastSearchCategory(t){return a["h"].get("/plast/search/category/v3",t)},createUserPoster(t){return a["h"].post("/c2c-web/v1/poster/create-user-poster",t)},getSPUSpecs(t){return a["p"].get(`/spus/${t}/specs`)},updateC2cProductsByCategory(t){return a["h"].post("/c2c/products/m-update",t)},updateProductMulti(t){return a["h"].post("/c2c/products/multi-create",t)},createProductMulti(t){return a["h"].post("/c2c/products/m-create-update",t)},getProductsByCategory(t){return a["h"].get("/c2c/products/by-category",t)},getCategoryDetail(t,e){return a["p"].get("/v2/categories/"+t,e)},getCategories(t){return a["p"].get("/v2/categories",t)},getRecommendCategories(t){return a["p"].get(`/v2/categories/${t}/recommend`)},getCategoryTags(t){return a["p"].get(`/v2/categories/${t}/config`)},getTag(t,e){return a["p"].get("/tags/"+t,e)},getHotTags(t){return a["p"].get(`/tags/${t}/config`)},getTags(t){return a["p"].get("/tags",t)},searchCategories(t){return a["p"].get("/v2/categories",t)},getSettings(){return a["p"].get("/settings")},changeWishes(t){return a["p"].post("/wish-list",t)},updateUserSettings(t){return a["p"].put("/settings",t)},getPosterColumnConfig(t){return a["l"].get("/action/get-products-poster",t)},getPosterThemes(t){return a["l"].get("/action/get-poster-themes",t,{isErrorDefaultTip:!1})},getWishList(t){return a["p"].get("/wish-list",t,{isErrorDefaultTip:!1})},getWishMatches(t){return a["p"].get("/products/match/wish-list",t,{isErrorDefaultTip:!1})},getDemandProductList(t){return a["p"].get("/products/match/demand-list",t)},getTradeInfo(t){return a["p"].post("/action/get-trade-info",t)},get360DegImages(t){return a["p"].get(`/spus/${t}/360-degree-images`)},getBarginSpus(t){return a["p"].post("/stock-order/bargin",t)},getSpecsByMPName(t){return a["p"].get("/specs/aciton/get-by-app-name",t)},getDistribution(t){return a["p"].get("/feeds/chaowan",t)},getSellingCategories(t){return a["p"].get("/products/action/get-selling-categories",t)},getCategoryCount(t){return a["p"].get("/products/action/get-category-product-count",t)},getSpuList(t){return a["h"].post("/treasure/spus/search/simple-info",t)},getSpuHeader(t){return a["h"].get("/treasure/flora/v2/spu/simpleInfo",t)},getSpuDetails(t){return a["h"].get("/treasure/flora/v1/spu/detailInfo",t)},getTagList(t){return a["h"].get("/treasure/tags",t)},getTagDetails(t){return a["h"].get("/treasure/flora/v1/tag/detailInfo",t)},getTagDetailsV2(t){return a["h"].get("/treasure/flora/v2/tag/simpleInfo",t)},searchSpuInTag(t){return a["h"].get("/plast/search/spu",t)},searchTag(t){return a["h"].get("/plast/search/tag",t)},getXiaokaWebConfig(){return a["e"].get("/vinyl/web.json")},getTagsV2(t){return a["h"].get("/armory/entry/tags",t)}}},ed5c:function(t,e,s){"use strict";s("6040")}}]);