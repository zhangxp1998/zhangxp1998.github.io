(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b1d9cc5"],{5010:function(t,e,s){},"684b":function(t,e,s){"use strict";var r=s("0ef7");e["a"]={getPostAnalysis(t){return r["d"].get("/analysis/"+t)},createPostReviewV3(t){return r["h"].post("/gactus/post-review-v3",t)},updatePostReviewV3(t){return r["h"].put("/gactus/post-review-v3",t)},deleteSpuMark(t){return r["h"].post("/gactus/delete-spu-mark",t)},createPostArticle(t){return r["h"].post("/gactus/posts-article",t)},getPostListByTopic(t){return r["h"].post("/gactus/topics/posts-v3",t)},getPostListByTag(t){return r["h"].post("/gactus/posts/by-tag-v4",t)},mark(t){return r["h"].post("/gactus-web/v1/mark/edit",t)},createPost(t){return r["h"].post("/gactus-web/post/create",t)},createPostStandard(t){return r["h"].post("/gactus-web/post/standard/create",t)},updatePostStandard(t){return r["h"].post("/gactus-web/post/standard/update",t)},comment(t){return r["h"].post("/cactus-api/comments",t)},getUserHobbyMark(t){return r["h"].post("/gactus/user-hobby-mark",t)},getUserMark(t){return r["h"].post("/gactus-web/v1/get-user-marks",t)},getUserHobbyList(t){return r["h"].get("/gactus-web/v1/interest/list",{uid:t})},gstoneGames(t){return r["h"].post("/config-go/redirect/gstoneGames",t)}}},"7cb2":function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"c",(function(){return c})),s.d(e,"a",(function(){return o}));var r=s("0ef7"),a=s("0d94"),i=s("a37c");async function n(t,e="interior-admin.image"){const s=Object(a["e"])({isProd:i["e"],async customApiCall(t){var e;const s=await r["h"].post("/uploader/gene-post-object-sign",t);return null===(e=s.data)||void 0===e?void 0:e[0]}});return s({file:t,scene:e})}function c(t){return r["h"].get("/uploader/file-space/get",t)}function o(t,e="interior-admin.image"){const s=Object(a["e"])({isProd:i["e"],async customApiCall(t){var e;const s=await r["h"].post("/uploader/anonymous/gene-post-object-sign",t);return null===(e=s.data)||void 0===e?void 0:e[0]}});return s({file:t,scene:e})}},a0c42:function(t,e,s){"use strict";s("5010")},a9ab:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"price-ocr"},[e("div",{staticClass:"header"},t._l(["上传图片","预览结果","一键导入"],(function(s,r){return e("div",{key:r,class:["step",{active:r===t.part-1}]},[e("div",{staticClass:"circle"},[t._v(t._s(r+1))]),t._v(" "+t._s(s)+" ")])})),0),1===this.part?e("div",{staticClass:"screenshot-list"},[e("img",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{src:"https://cdn.qiandaoapp.com/interior/images/c2d8845f49436acdb38a2cc4ec78bd42.jpg",alt:"intro"}}),t._v(" 打开剧评，点击“分享海报”-“保存本地”，并上传（支持多张） "),e("div",{staticClass:"image-list"},[t._l(this.imageList,(function(s,r){return e("div",{key:r,staticClass:"screenshot"},[e("img",{staticClass:"screenshot-img",attrs:{src:s,alt:"screenshot"}}),e("div",{staticClass:"delete-btn",on:{click:function(e){return t.deleteImage(r)}}},[t._v("×")])])})),t._m(0),e("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"upload",accept:"image/png, image/jpeg",multiple:"multiplt"},on:{change:t.getFile}})],2),t.loading?e("div",{staticClass:"loader"},[t._v("图片上传中…")]):t._e(),e("div",{class:["fixed-btn",{disable:0===this.imageList.length||this.loading}],on:{click:t.ocr}},[t._v(" 下一步 ")])]):t._e(),2===this.part?e("div",{staticClass:"ocr-result-list"},[e("div",{staticClass:"notice"},[t._v(" 如剧本识别不准确，你可以点击剧本封面图/名称，手动进行修改 ")]),t.loading?e("div",{staticClass:"loader"},[t._v(" 智能识别中…（"+t._s(this.ocrSuccessCount)+"/"+t._s(this.imageList.length)+"） ")]):t._e(),t.loading?t._e():e("div",{staticClass:"text-btn",on:{click:function(e){t.part=1}}},[t._v(" ← 重新上传图片 ")]),this.ocrResultList.length>0?e("div",{staticClass:"sku-list"},t._l(this.ocrResultList,(function(s,r){return e("div",{key:r,staticClass:"sku"},[e("div",{staticClass:"sku-cover",on:{click:function(e){return t.handleSearchBtn(r)}}},[s.cover?e("img",{staticClass:"sku-cover-img",attrs:{src:s.cover,alt:"cover"}}):e("img",{staticStyle:{width:"30px"},attrs:{src:"https://cdn.qiandaoapp.com/interior/images/67a852dfecfda16af6213d1a467a3ca0.png"}})]),e("div",{staticClass:"sku-name",on:{click:function(e){return t.handleSearchBtn(r)}}},[t._v(" "+t._s(s.name)+" "),e("span",{staticStyle:{"margin-left":"10px",color:"#aaa"}},[t._v("修改")])]),e("div",{staticClass:"delete-btn",on:{click:function(e){return t.deleteSku(r)}}},[e("img",{staticClass:"delete-btn-img",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/dc293fba0d2bb97383dd834fb5226cbb.png",alt:"delete"}})]),e("div",{staticClass:"sku-content"},[t._v(" "+t._s(s.content)+" ")])])})),0):t._e(),e("div",{class:["fixed-btn",{disable:this.loading}],on:{click:t.importReview}},[t._v(" 下一步 ")])]):t._e(),e("transition",{attrs:{name:"fade"}},[t.isOpenModal?e("div",{staticClass:"modal"},[e("div",{staticClass:"mask",on:{click:t.handleMaskClick}}),e("div",{staticClass:"spu-group"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"searchbox",attrs:{placeholder:"输入剧本名称搜索",id:"searchbox"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),e("div",{staticClass:"spu-list"},[t._l(this.spuList,(function(s,r){return[e("div",{key:r,staticClass:"spu",on:{click:function(e){return t.handleSelectSpu(s.imgs.cover,s.name,s.id)}}},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s.imgs.whiteBgPng||s.imgs.cover,expression:"item.imgs.whiteBgPng || item.imgs.cover"}],staticClass:"spu-cover"}),e("div",{staticClass:"spu-name"},[t._v(t._s(s.name))]),e("div",{staticClass:"spu-key-property"},[t._v(t._s(s.key_property))]),s.stock_order_min_sell_price>0?e("div",{staticClass:"spu-price"},[e("img",{staticClass:"icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/0c2b375cfcc7380cdaf22a3c747bee18.png"}}),t._v(" ¥"+t._s(s.stock_order_min_sell_price)+" ")]):s.min_price>0?e("div",{staticClass:"spu-price"},[t._v(" ¥"+t._s(s.min_price)+" ")]):t._e()])]}))],2)])])]):t._e()]),3===this.part?e("div",{staticClass:"ocr-result-list"},[t.loading?e("div",{staticClass:"loader"},[t._v(" 导入中...（"+t._s(this.num)+" / "+t._s(this.ocrResultList.length)+"） ")]):t._e(),t.success?e("div",{staticClass:"tip"},[t._v("导入成功，快去看看吧！")]):t._e()]):t._e()],1)},a=[function(){var t=this,e=t._self._c;return e("label",{staticClass:"upload-btn",attrs:{for:"upload"}},[t._v(" + "),e("br"),t._v(" 点击上传图片 ")])}],i=(s("14d9"),s("ccbb")),n=s("dd8a"),c=s("684b"),o=s("7cb2"),u=s("ed08"),l=s("2f62"),d={data(){return{loading:!1,part:1,imageList:[],ocrResultList:[],ocrSuccessCount:0,isOpenModal:!1,selectedIndex:0,spuList:[],query:"",image:"",num:0,success:!1}},watch:{query(t,e){this.spuList=[],this.searchSpu()}},computed:{...Object(l["mapState"])("user",["me"])},mounted(){"{}"===JSON.stringify(this.me)&&this.logIn()},methods:{async getFile(t){const e=t.target.files;for(var s=0;s<e.length;s++){this.loading=!0;var r=e[s].name,a=r.lastIndexOf(".");if(-1!==a){var i=r.substr(a+1).toUpperCase();i=i.toLowerCase();const t=Object(u["i"])(),n=new File([e[s]],t+".jpeg"),c=await Object(o["b"])(n,"activity-temp.image");this.imageList.push(c.url)}}this.loading=!1},deleteImage(t){this.imageList.splice(t,1)},deleteSku(t){this.ocrResultList.splice(t,1),this.$toast.show({title:"已删除"}),0===this.ocrResultList.length&&(this.part=1)},async ocr(){this.part=2,this.ocrResultList=[],this.ocrSuccessCount=0;for(var t=0;t<this.imageList.length;t++){this.loading=!0;try{const p=await n["a"].ocr({url:this.imageList[t],ocrType:"STARLIGHT",level:"HD"}),h=p.data.prismWordsInfo;for(var e=null,s=null,r=0;r<h.length;r++)-1===h[r].word.indexOf("角色：")&&-1===h[r].word.indexOf("类型：")&&-1===h[r].word.indexOf("综合评分：")&&-1===h[r].word.indexOf("时长：")&&-1===h[r].word.indexOf("人数：")&&-1===h[r].word.indexOf("体验角色：")&&-1===h[r].word.indexOf("体验角色：")&&-1===h[r].word.indexOf("体验店家：")&&-1===h[r].word.indexOf("DM:")||(h[r].word=h[r].word+"\n"),-1!==h[r].word.indexOf("剧情")&&(e=r+1),-1!==h[r].word.indexOf("谜圈评分")&&(s=r);if(e){var a=null;a=h.filter(t=>"谜圈评分"===t.word).length>0?h[s-1].word:h[1].word;var c=null;c=-1!==h[h.length-5].word.indexOf("长按识别")||-1!==h[h.length-5].word.indexOf("M")||-1!==h[h.length-5].word.indexOf("阅读剧评")||-1!==h[h.length-5].word.indexOf("谜圈")||-1!==h[h.length-5].word.indexOf("剧本杀玩家")?h.length-4:h.length-3;var o=h.slice(e,c).map(t=>t.word).join(""),u="https://cdn.qiandaoapp.com/interior/images/67a852dfecfda16af6213d1a467a3ca0.png";const t={q:a,"start-index":0,"max-results":1,scene:"plugin-import-drama",typeIds:"1000225"};try{var l=await i["a"].searchSpuInTag(t);l.data.items[0].imgs&&(u=l.data.items[0].imgs.cover);var d=l.data.items[0].id}catch(g){console.error(g)}this.ocrResultList.push({name:a,content:o,cover:u,spuId:d})}this.ocrSuccessCount++}catch(g){console.error(g)}}0===this.ocrResultList.length?(this.part=1,this.$toast.show({title:"没有识别到结果，请重新上传"})):this.$toast.show({title:"识别完毕"}),this.loading=!1},handleSearchBtn(t){this.selectedIndex=t,this.spuList=[],this.isOpenModal=!0,this.$nextTick(()=>{document.getElementById("searchbox").focus()})},handleMaskClick(){this.isOpenModal=!1,this.query=""},async searchSpu(){const t={q:this.query,"start-index":0,"max-results":20,scene:"plugin-import-drama",typeIds:"1000225"};try{var e=await i["a"].searchSpuInTag(t);this.spuList=e.data.items}catch(s){console.error(s)}},handleSelectSpu(t,e,s){this.handleMaskClick(),this.ocrResultList[this.selectedIndex].cover=t,this.ocrResultList[this.selectedIndex].name=e,this.ocrResultList[this.selectedIndex].spuId=s},backToPreview(){this.part=2},logIn(){const t="/modules/pages/common-login/index";(Object(u["h"])()||Object(u["d"])())&&this.navigateTo({url:t})},async importReview(){this.part=3,this.loading=!0;for(var t=0;t<this.ocrResultList.length;t++)if(this.num++,this.ocrResultList[t].spuId){const s={action:"CREATE",spuId:this.ocrResultList[t].spuId,meta:"[]"},r=await c["a"].mark(s),a=r.data.markId,i={attachments:[],content:this.ocrResultList[t].content,markId:a,mentionRelatedObjects:{},privacy:"public",reviewStatistic:"[]",relatedId:this.ocrResultList[t].spuId,type:"review_v2"};try{await c["a"].createPost(i)}catch(e){console.error(e)}}this.success=!0,this.loading=!1}}},g=d,p=(s("a0c42"),s("0c7c")),h=Object(p["a"])(g,r,a,!1,null,null,null);e["default"]=h.exports},ccbb:function(t,e,s){"use strict";var r=s("0ef7");e["a"]={getStandardProducts(t){return r["p"].get(`/spus/${t}/standard-products`)},getSPUs(t){return r["p"].get("/v2/spus",t)},getSingleSpu(t,e){return r["p"].get("/v2/spus/"+t,e)},getUserPosters(t){return r["h"].post("/c2c-web/v1/poster/get-user-posters",t)},doProductsOffSale(t){return r["h"].post("/c2c-web/v1/c2c/products/off-sale",t)},plastSearchCategory(t){return r["h"].get("/plast/search/category/v3",t)},createUserPoster(t){return r["h"].post("/c2c-web/v1/poster/create-user-poster",t)},getSPUSpecs(t){return r["p"].get(`/spus/${t}/specs`)},updateC2cProductsByCategory(t){return r["h"].post("/c2c/products/m-update",t)},updateProductMulti(t){return r["h"].post("/c2c/products/multi-create",t)},createProductMulti(t){return r["h"].post("/c2c/products/m-create-update",t)},getProductsByCategory(t){return r["h"].get("/c2c/products/by-category",t)},getCategoryDetail(t,e){return r["p"].get("/v2/categories/"+t,e)},getCategories(t){return r["p"].get("/v2/categories",t)},getRecommendCategories(t){return r["p"].get(`/v2/categories/${t}/recommend`)},getCategoryTags(t){return r["p"].get(`/v2/categories/${t}/config`)},getTag(t,e){return r["p"].get("/tags/"+t,e)},getHotTags(t){return r["p"].get(`/tags/${t}/config`)},getTags(t){return r["p"].get("/tags",t)},searchCategories(t){return r["p"].get("/v2/categories",t)},getSettings(){return r["p"].get("/settings")},changeWishes(t){return r["p"].post("/wish-list",t)},updateUserSettings(t){return r["p"].put("/settings",t)},getPosterColumnConfig(t){return r["l"].get("/action/get-products-poster",t)},getPosterThemes(t){return r["l"].get("/action/get-poster-themes",t,{isErrorDefaultTip:!1})},getWishList(t){return r["p"].get("/wish-list",t,{isErrorDefaultTip:!1})},getWishMatches(t){return r["p"].get("/products/match/wish-list",t,{isErrorDefaultTip:!1})},getDemandProductList(t){return r["p"].get("/products/match/demand-list",t)},getTradeInfo(t){return r["p"].post("/action/get-trade-info",t)},get360DegImages(t){return r["p"].get(`/spus/${t}/360-degree-images`)},getBarginSpus(t){return r["p"].post("/stock-order/bargin",t)},getSpecsByMPName(t){return r["p"].get("/specs/aciton/get-by-app-name",t)},getDistribution(t){return r["p"].get("/feeds/chaowan",t)},getSellingCategories(t){return r["p"].get("/products/action/get-selling-categories",t)},getCategoryCount(t){return r["p"].get("/products/action/get-category-product-count",t)},getSpuList(t){return r["h"].post("/treasure/spus/search/simple-info",t)},getSpuHeader(t){return r["h"].get("/treasure/flora/v2/spu/simpleInfo",t)},getSpuDetails(t){return r["h"].get("/treasure/flora/v1/spu/detailInfo",t)},getTagList(t){return r["h"].get("/treasure/tags",t)},getTagDetails(t){return r["h"].get("/treasure/flora/v1/tag/detailInfo",t)},getTagDetailsV2(t){return r["h"].get("/treasure/flora/v2/tag/simpleInfo",t)},searchSpuInTag(t){return r["h"].get("/plast/search/spu",t)},searchTag(t){return r["h"].get("/plast/search/tag",t)},getXiaokaWebConfig(){return r["e"].get("/vinyl/web.json")},getTagsV2(t){return r["h"].get("/armory/entry/tags",t)}}},dd8a:function(t,e,s){"use strict";var r=s("0ef7");e["a"]={myPokemon(t){return r["q"].get("/v1/pokemon/my",t)},nextStep(t){return r["q"].post("/v1/pokemon/next-step",t)},searchSpuByImage(t){return r["q"].post("/v1/image/search/spu",t)},searchSpuByAggregateImages(t){return r["q"].post("/v1/image/search/multi/spu/v2",t)},ocr(t){return r["j"].post("/z/stargazing/z/ocr",t)},getQrcode(t){return r["j"].get("/z/poster-web/wechat/mp-qrcode",t)},getSpuOpposite(t){return r["j"].post("/treasure/spus/opposite/list",t)},getSpuWithRelated(t){return r["j"].post("/treasure/v1/search/spu/with/related",t)},getSpuWaterfall(t){return r["j"].get("/treasure/v1/waterfall/list",t)},fetchStep2BizConfig(){return r["j"].get("https://config-cdn.qiandaoapp.com/mp-common/pluginsBizConfig.json")},getRankInfo(t){return r["j"].get("/treasure/flora/v1/rank",t)},getByDistributedTagIds(t){return r["j"].post("/treasure/v1/public-relations/byDistributedTagIds",t)},getPalworld(t){return r["g"].get("/palu/check",t)}}}}]);