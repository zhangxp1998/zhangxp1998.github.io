(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f7dcc5e"],{"684b":function(t,e,a){"use strict";var s=a("0ef7");e["a"]={getPostAnalysis(t){return s["d"].get("/analysis/"+t)},createPostReviewV3(t){return s["h"].post("/gactus/post-review-v3",t)},updatePostReviewV3(t){return s["h"].put("/gactus/post-review-v3",t)},deleteSpuMark(t){return s["h"].post("/gactus/delete-spu-mark",t)},createPostArticle(t){return s["h"].post("/gactus/posts-article",t)},getPostListByTopic(t){return s["h"].post("/gactus/topics/posts-v3",t)},getPostListByTag(t){return s["h"].post("/gactus/posts/by-tag-v4",t)},mark(t){return s["h"].post("/gactus-web/v1/mark/edit",t)},createPost(t){return s["h"].post("/gactus-web/post/create",t)},createPostStandard(t){return s["h"].post("/gactus-web/post/standard/create",t)},updatePostStandard(t){return s["h"].post("/gactus-web/post/standard/update",t)},comment(t){return s["h"].post("/cactus-api/comments",t)},getUserHobbyMark(t){return s["h"].post("/gactus/user-hobby-mark",t)},getUserMark(t){return s["h"].post("/gactus-web/v1/get-user-marks",t)},getUserHobbyList(t){return s["h"].get("/gactus-web/v1/interest/list",{uid:t})},gstoneGames(t){return s["h"].post("/config-go/redirect/gstoneGames",t)}}},7372:function(t,e,a){"use strict";a("a23d")},"7cb2":function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return r}));var s=a("0ef7"),i=a("0d94"),n=a("a37c");async function o(t,e="interior-admin.image"){const a=Object(i["e"])({isProd:n["e"],async customApiCall(t){var e;const a=await s["h"].post("/uploader/gene-post-object-sign",t);return null===(e=a.data)||void 0===e?void 0:e[0]}});return a({file:t,scene:e})}function c(t){return s["h"].get("/uploader/file-space/get",t)}function r(t,e="interior-admin.image"){const a=Object(i["e"])({isProd:n["e"],async customApiCall(t){var e;const a=await s["h"].post("/uploader/anonymous/gene-post-object-sign",t);return null===(e=a.data)||void 0===e?void 0:e[0]}});return a({file:t,scene:e})}},8661:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"page-expand-cards"},[e("div",{staticClass:"bcg-selector u-flex-col-c"},[[t.fileList.length?t._e():e("Uploader",{attrs:{"max-count":1},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}},[e("div",{staticClass:"u-flex-col-c"},[e("img",{staticClass:"upload-plus",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/fcea8993f759e5befc4cefd7c0fcfedd.png"}}),e("div",{staticClass:"add-text"},[t._v("增加背景图（选填）")])])]),e("img",{staticClass:"bcgimg",attrs:{src:t.bcgImg.img,alt:""}})]],2),e("div",{staticClass:"mbti u-flex-c"},[e("div",{staticClass:"title"},[t._v("MBTI")]),e("div",{staticClass:"mbti-input",on:{click:t.handleSelectMbti}},[t._v(" "+t._s(t.mbti.text||"选择你的 MBTI，选填")+" ")])]),e("div",{staticClass:"section"},[e("div",{staticClass:"title"},[t._v("我担")]),e("div",{staticClass:"sub-section-container u-flex-col"},t._l(t.wodan,(function(a,s){return e("div",{key:s,staticClass:"sub-section u-flex"},[e("div",{class:["sub-title","transtop-20",{xing:a.isRequire}]},[t._v(" "+t._s(a.subSectionName)+" ")]),e("div",{staticClass:"tag-item-container u-flex"},[e("div",{staticClass:"u-flex-col-c upload-container",on:{click:function(e){return t.handleAddItem({sectionName:a.sectionName,keyName:a.keyName,addIndexObj:{x:s},sectionKey:a.sectionKey})}}},[e("img",{staticClass:"upload",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/d87e9c4a6f24cfee6c287d1bab8fa992.png"}}),e("div",{staticClass:"select-text"},[t._v("点击选择")])]),t._l(a.tags,(function(i,n){var o;return e("div",{key:n,staticClass:"u-flex-col-c tag-item",staticStyle:{"padding-top":"4px"}},[e("img",{staticClass:"tag-img",attrs:{src:i.img}}),e("div",{staticClass:"tag-name"},[t._v(t._s(i.name))]),a.withStatus?e("div",{staticClass:"tag-status",on:{click:function(e){return t.handleAddStatus({addIndexObj:{x:s,y:n},sectionKey:a.sectionKey})}}},[null!==(o=i.status)&&void 0!==o&&o.length?e("div",{staticClass:"status-content"},[t._v(" "+t._s(i.status)+" ")]):e("div",{staticClass:"status-select-btn"},[e("div",{staticClass:"select-text"},[t._v("点击选择属性")])])]):t._e(),e("img",{staticClass:"tag-delete",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/1cebdaa381b6eb63bcbe4a6e9c799820.png",alt:""},on:{click:function(e){return t.handleDeleteItem({deleteIndexObj:{x:s,y:n},sectionKey:a.sectionKey})}}})])}))],2)])})),0)]),e("div",{staticClass:"section"},[e("div",{staticClass:"title"},[t._v("我嗑")]),e("div",{staticClass:"sub-section-container u-flex-col"},t._l(t.woke,(function(a,s){return e("div",{key:s,staticClass:"sub-section u-flex"},[e("div",{staticClass:"sub-title transtop-20"},[t._v(" "+t._s(a.subSectionName)+" ")]),e("div",{staticClass:"tag-item-container u-flex"},[e("div",{staticClass:"add-btn u-flex-c",on:{click:function(e){return t.handleDoubleAddItem({addIndexObj:{x:s},sectionKey:a.sectionKey,keyName:a.keyName})}}},["CP"===a.subSectionName?e("img",{staticClass:"double-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/73d73523e83793582bb6b36fa4be32f5.png",alt:""}}):e("img",{staticClass:"double-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/057653117b21a08f1ecb0b34565c6647.png",alt:""}}),e("div",{staticClass:"add-btn-text"},[t._v(" "+t._s("添加一组"+a.subSectionName)+" ")])]),t._l(a.doubletags,(function(i,n){return e("div",{key:n,staticClass:"doubule-upload-container u-flex"},[t._l(i,(function(i,o){return e("div",{key:o},[i?e("div",{staticClass:"u-flex-col-c tag-item",staticStyle:{"padding-top":"4px"}},[e("img",{staticClass:"tag-img",attrs:{src:i.img}}),e("div",{staticClass:"tag-name"},[t._v(t._s(i.name))]),e("img",{staticClass:"tag-delete",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/1cebdaa381b6eb63bcbe4a6e9c799820.png",alt:""},on:{click:function(e){return t.handleDeleteItem({deleteIndexObj:{x:s,y:n,z:o},sectionKey:a.sectionKey})}}})]):e("div",{staticClass:"u-flex-col-c upload-container",staticStyle:{"padding-top":"4px"},on:{click:function(e){return t.handleAddItem({sectionName:a.sectionName,keyName:a.keyName,addIndexObj:{x:s,y:n,z:o},sectionKey:a.sectionKey})}}},[e("img",{staticClass:"upload",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/d87e9c4a6f24cfee6c287d1bab8fa992.png"}}),e("div",{staticClass:"select-text"},[t._v("点击选择")])])])})),"CP"===a.subSectionName?e("img",{staticClass:"double-icon absolute-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/73d73523e83793582bb6b36fa4be32f5.png",alt:""}}):e("img",{staticClass:"double-icon absolute-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/057653117b21a08f1ecb0b34565c6647.png",alt:""}})],2)}))],2)])})),0)]),e("div",{staticClass:"section"},[e("div",{staticClass:"title"},[t._v("婉拒")]),e("div",{staticClass:"sub-section-container u-flex-col"},t._l(t.wanju,(function(a,s){return e("div",{key:s},["tag"===a.type?e("div",{staticClass:"sub-section u-flex"},[e("div",{staticClass:"sub-title transtop-20"},[t._v(" "+t._s(a.subSectionName)+" ")]),e("div",{staticClass:"tag-item-container u-flex"},[e("div",{staticClass:"u-flex-col-c upload-container",on:{click:function(e){return t.handleAddItem({sectionName:a.sectionName,keyName:a.keyName,addIndexObj:{x:s},sectionKey:a.sectionKey})}}},[e("img",{staticClass:"upload",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/d87e9c4a6f24cfee6c287d1bab8fa992.png"}}),e("div",{staticClass:"select-text"},[t._v("点击选择")])]),t._l(a.tags,(function(i,n){return e("div",{key:n,staticClass:"u-flex-col-c tag-item",staticStyle:{"padding-top":"4px"}},[e("img",{staticClass:"tag-img",attrs:{src:i.img}}),e("div",{staticClass:"tag-name"},[t._v(t._s(i.name))]),e("img",{staticClass:"tag-delete",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/1cebdaa381b6eb63bcbe4a6e9c799820.png",alt:""},on:{click:function(e){return t.handleDeleteItem({deleteIndexObj:{x:s,y:n},sectionKey:a.sectionKey})}}})])}))],2)]):e("div",{staticClass:"sub-section u-flex-c"},[e("div",{staticClass:"sub-title"},[t._v(t._s(a.subSectionName))]),e("textarea",{staticClass:"sub-textarea",attrs:{type:"text","max-length":"50",placeholder:"选填，请输入备注，不超过50字",maxlength:"50"},domProps:{value:a.text},on:{input:t.handleInputRemark}})])])})),0)]),e("div",{staticClass:"section"},[e("div",{staticClass:"title"},[t._v("还有点想说的")]),e("div",{staticClass:"sub-section-container u-flex-col"},[e("div",{staticClass:"sub-section u-flex"},[e("textarea",{staticClass:"sub-textarea",attrs:{type:"text",placeholder:"选填，请输入备注，不超过50字",maxlength:"50"},domProps:{value:t.more.text},on:{input:t.handleInputMore}})])])]),e("div",{staticClass:"bottom-btn-area"},[e("van-button",{class:["share-btn",t.submitLock?"disabled":""],attrs:{block:""},on:{click:t.publish}},[t._v(" 分享我的KPOP人扩列名片 ")])],1),e("Popup",{attrs:{position:"bottom",round:""},on:{click:function(t){t.stopPropagation()}},model:{value:t.tagPopupVisiable,callback:function(e){t.tagPopupVisiable=e},expression:"tagPopupVisiable"}},[e("div",{staticClass:"tag-pop h-661"},[e("div",{staticClass:"header-container"},[e("div",{staticClass:"pop-title u-flex-c-sb"},[e("div",{staticClass:"title u-flex-c"},[t._v(" "+t._s("选择"+t.tagSelectName)+" "),e("div",{staticClass:"pop-tip"},[t._v(" "+t._s(t.tagSelectPlaceholder)+" ")])]),e("img",{staticClass:"close-btn",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/2718e469db5e1406e9a16c84d72fe16c.png",alt:""},on:{click:function(e){return e.stopPropagation(),t.handleCloseTagPopup.apply(null,arguments)}}})]),e("div",{staticClass:"search-pop u-flex-c"},[e("img",{staticClass:"search-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/c79859095d97371707f3a5d3a2901807.png",alt:""}}),e("input",{staticClass:"search-input",attrs:{type:"text",placeholder:"搜索"+t.tagSelectName},domProps:{value:t.searchWords},on:{input:t.handleInput}})])]),e("div",{staticClass:"list"},[t.statusList.length?e("List",{ref:"list",attrs:{finished:!t.hasMore,"immediate-check":!1,"finished-text":"到底了～"},on:{load:t.getTagList},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}},[e("div",{staticClass:"tag-list u-flex-c"},t._l(t.tagList,(function(a,s){return e("div",{key:s,staticClass:"tag-item",on:{click:function(e){return e.stopPropagation(),t.handleSelectTag(a)}}},[e("img",{staticClass:"tag-img",attrs:{src:a.img+"!fill_w100_h100_jpg",alt:""}}),e("div",{staticClass:"tag-name otext"},[t._v(" "+t._s(a.name)+" ")])])})),0)]):t._e()],1)])]),e("Popup",{attrs:{position:"bottom",round:""},model:{value:t.statusPopupVisiable,callback:function(e){t.statusPopupVisiable=e},expression:"statusPopupVisiable"}},[e("div",{staticClass:"status-pop"},[e("div",{staticClass:"pop-title u-flex-c-sb"},[e("div",{staticClass:"title"},[t._v("选择属性")]),e("img",{staticClass:"close-btn",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/2718e469db5e1406e9a16c84d72fe16c.png",alt:""},on:{click:function(e){return e.stopPropagation(),t.handleCloseStatusPopup.apply(null,arguments)}}})]),e("div",{staticClass:"status-list u-flex-c"},t._l(t.statusList,(function(a,s){return e("div",{key:s,staticClass:"status",on:{click:function(e){return e.stopPropagation(),t.handleClickStatus(a)}}},[t._v(" "+t._s(a)+" ")])})),0)])]),e("Popup",{attrs:{position:"bottom",round:""},model:{value:t.mbtiPopupVisiable,callback:function(e){t.mbtiPopupVisiable=e},expression:"mbtiPopupVisiable"}},[e("picker",{attrs:{"show-toolbar":"",title:"选择你的人格类型",columns:t.MBTITYPES},on:{confirm:t.onConfirm,cancel:t.onCancel}})],1)],1)},i=[],n=(a("e7e5"),a("d399")),o=(a("5f5f"),a("f253")),c=(a("2994"),a("2bdd")),r=(a("8a58"),a("e41f")),l=(a("e930"),a("8f80")),u=(a("66b9"),a("b650")),d=(a("13d5"),a("14d9"),a("2b0e")),p=a("ed08");const g={zhudan:{property_id:"1543341",type_id:"1156487",min:1,max:5,placeholder:"最多可添加5个"},haogan:{property_id:"1543342",type_id:"1156487",min:0,max:5,placeholder:"最多可添加5个"},tuantui:{property_id:"1543343",type_id:"1512150",min:0,max:3,placeholder:"最多可添加3个"},cp:{type_id:"1156487",min:0,max:4,placeholder:"最多可添加4组"},cb:{type_id:"1156487",min:0,max:4,placeholder:"最多可添加4组"},tuanti:{type_id:"1512150",min:0,max:3,placeholder:"最多可添加3个",property_id:"1560209"},geren:{type_id:"1156487",min:0,max:3,placeholder:"最多可添加3个",property_id:"1560208"}},m=[{tags:[],index:1,sectionName:"我担",subSectionName:"主担",subIndex:0,type:"tag",isRequire:!0,keyName:"zhudan",sectionKey:"wodan",withStatus:!0},{tags:[],index:1,sectionName:"我担",subSectionName:"好感",subIndex:1,type:"tag",isRequire:!1,keyName:"haogan",sectionKey:"wodan",withStatus:!0},{tags:[],index:1,sectionName:"我担",subSectionName:"团推",subIndex:2,type:"tag",isRequire:!1,keyName:"tuantui",sectionKey:"wodan",withStatus:!1}],b=[{doubletags:[[null,null]],index:2,sectionName:"我嗑",subSectionName:"CP",subIndex:0,type:"doubletag",isRequire:!1,keyName:"cp",sectionKey:"woke"},{doubletags:[],index:2,sectionName:"我嗑",subSectionName:"CB",subIndex:1,type:"doubletag",isRequire:!1,keyName:"cb",sectionKey:"woke"}],v=[{tags:[],index:3,sectionName:"婉拒",subSectionName:"团体",subIndex:0,type:"tag",isRequire:!1,keyName:"tuanti",sectionKey:"wanju",withStatus:!1},{tags:[],index:3,sectionName:"婉拒",subSectionName:"个人",subIndex:1,type:"tag",isRequire:!1,keyName:"geren",sectionKey:"wanju",withStatus:!1},{text:"",index:3,sectionName:"婉拒",subSectionName:"备注",subIndex:2,type:"text",isRequire:!1,keyName:"beizhu",sectionKey:"wanju"}],f={text:"",index:4,subIndex:0,type:"text",isRequire:!1,keyName:"more",sectionKey:"more"},y={img:null,index:0,subIndex:0,type:"image",isRequire:!1,keyName:"bcgimg",sectionKey:"bcgimg"},h={text:"",index:5,subIndex:0,type:"text",isRequire:!1,keyName:"mbti",sectionKey:"mbti"},x=["公公","嬷嬷","攻抚慰","受抚慰","梦女","妈粉","女友粉","一体机","整肃粉","泥塑粉","男友粉","爸爸粉","女儿粉","路人粉","事业粉","生命粉","音乐粉","唯粉","舞台粉","颜粉","性格粉","身材粉","姐姐粉","妹妹粉","死忠粉"],C=["ENTJ","ENTP","ENFJ","ENFP","ESTJ","ESTP","ESFJ","ESFP","INTJ","INTP","INFJ","INFP","ISTJ","ISTP","ISFJ","ISFP"];var I=a("0d94"),k=a("7cb2"),P=a("ccbb"),S=a("684b"),w=a("4360"),_=a("a18c"),j={components:{[u["a"].name]:u["a"],Uploader:l["a"],Popup:r["a"],List:c["a"],Picker:o["a"]},activated(){},setup(t){const{proxy:e}=Object(d["getCurrentInstance"])(),a=Object(d["reactive"])({propertyIdMap:g,fileList:[],statusList:x,statusPopupVisiable:!1,tagPopupVisiable:!1,mbtiPopupVisiable:!1,tagSelectPlaceholder:"",tagSelectName:"",sectionKey:"",tagTypeId:"",addIndexObj:null,isLoading:!1,hasMore:!0,limit:40,offset:0,tagList:[],searchWords:"",bcgImg:y,wodan:m,woke:b,wanju:v,more:f,mbti:h,submitLock:!1,islandId:"300357",subareaId:"1446178",MBTITYPES:C}),s=_["a"].currentRoute;s.query;Object(d["onMounted"])(async()=>{if("{}"===JSON.stringify(i.value)){const t="/modules/pages/common-login/index";(Object(p["h"])()||Object(p["d"])())&&e.navigateTo({url:t})}});const i=Object(d["computed"])(()=>{var t,e;return null===(t=w["a"].state)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.me}),o=Object(d["computed"])(()=>{const t=[...a.wodan,a.wanju[0],a.wanju[1]],e=t.reduce((t,e)=>(e.tags.forEach(s=>{var i;const n=e.keyName,o=null===(i=a.propertyIdMap[n])||void 0===i?void 0:i.property_id;t.push({...s,keyName:n,type:"tag",propertyId:o})}),t),[]);return e}),c=Object(d["computed"])(()=>{var t;const e=[a.bcgImg,a.mbti,...a.wodan,...a.woke,...a.wanju,a.more];return null===(t=e.map)||void 0===t?void 0:t.call(e,t=>({url:"",type:"checklist",meta:{kpop:JSON.stringify(t)},key:"",spu:{}}))});async function r(t=!1){t&&(a.tagList=[],a.offset=0,a.hasMore=!0),a.isLoading=!0;const e={"typeIds[]":a.tagTypeId,offset:a.offset,limit:a.limit,orderBy:"followerCountDesc"};if(a.searchWords&&(e.name=a.searchWords),a.hasMore)try{const{rows:t}=await P["a"].getTagsV2(e);a.offset+=a.limit,a.hasMore=t.length===a.limit;const s=(null===t||void 0===t?void 0:t.map(t=>{var e;return{id:t.id,name:t.name,img:Object(I["a"])((null===(e=t.images)||void 0===e?void 0:e.logo)||""),status:""}}))||[];a.tagList=[...a.tagList,...s]}catch(s){console.log(s)}finally{a.isLoading=!1}}function l(){a.statusPopupVisiable=!a.statusPopupVisiable}function u(t){a.statusPopupVisiable=!1,["wodan","wanju"].includes(a.sectionKey)&&(a[a.sectionKey][a.addIndexObj.x].tags[a.addIndexObj.y].status=t),"woke"===a.sectionKey&&(a[a.sectionKey][a.addIndexObj.x].doubletags[a.addIndexObj.y][a.addIndexObj.z].status=t)}function j(){a.tagPopupVisiable=!a.tagPopupVisiable}function N(t){if(a.tagPopupVisiable=!1,["wodan","wanju"].includes(a.sectionKey)){var e;const s=null===(e=a[a.sectionKey][a.addIndexObj.x].tags)||void 0===e?void 0:e.find(e=>e.id===t.id);if(s)return void Object(n["a"])("重复选择");a[a.sectionKey][a.addIndexObj.x].tags.push(t)}if("woke"===a.sectionKey){var s;const e=null===(s=a[a.sectionKey][a.addIndexObj.x].doubletags[a.addIndexObj.y])||void 0===s?void 0:s.find(e=>(null===e||void 0===e?void 0:e.id)===(null===t||void 0===t?void 0:t.id));if(e)return void Object(n["a"])("重复选择");a[a.sectionKey][a.addIndexObj.x].doubletags[a.addIndexObj.y][a.addIndexObj.z]=t}}function O(t){a.searchWords=t.target.value,r(!0)}async function T({sectionName:t,keyName:e,sectionKey:s,addIndexObj:i}){var o;const c=a.propertyIdMap[e].max;(null===(o=a[s][i.x].tags)||void 0===o?void 0:o.length)!==c?(a.tagSelectPlaceholder=a.propertyIdMap[e].placeholder,a.tagSelectName=t,a.tagTypeId=a.propertyIdMap[e].type_id,a.sectionKey=s,a.addIndexObj=i,a.searchWords="",await r(!0),a.tagPopupVisiable=!0):Object(n["a"])(`最多添加${c}个`)}function K({sectionKey:t,addIndexObj:e}){a.sectionKey=t,a.addIndexObj=e,a.statusPopupVisiable=!0}async function L({sectionKey:t,addIndexObj:e,keyName:s}){var i;const o=a.woke[e.x].doubletags.some(t=>t.some(t=>null===t));if(o)return Object(n["a"])("先填完空的再添加吧"),!1;const c=a.propertyIdMap[s].max;(null===(i=a[t][e.x].doubletags)||void 0===i?void 0:i.length)!==c?a[t][e.x].doubletags.push([null,null]):Object(n["a"])(`最多添加${c}组`)}function V({sectionKey:t,deleteIndexObj:e}){if(["wodan","wanju"].includes(t)&&(a[t][e.x].tags=a[t][e.x].tags.filter((t,a)=>a!==e.y)),"woke"===t){const s=[...a[t][e.x].doubletags],{y:i,z:n}=e;i>=0&&i<s.length&&n>=0&&n<s[i].length&&(s[i][n]=null),a[t][e.x].doubletags=s.filter((t,e)=>e!==i||t.some(t=>null!==t))}}function q(t){a.wanju[2].text=t.target.value}function M(t){a.more.text=t.target.value}function R(){var t,e;if(null===(t=a.wodan)||void 0===t||null===(e=t[0].tags)||void 0===e||!e.length)return Object(n["a"])("至少选一个主担"),!1;const s=a.woke.some(t=>t.doubletags.some(t=>t.some(t=>null===t)));return!s||(Object(n["a"])("请选齐我嗑"),!1)}async function D(){if(a.submitLock)return;if(!R())return;const t=n["a"].loading({message:"发布中...",forbidClick:!0});a.submitLock=!0;try{const e={attachments:c.value,content:a.more.text,labels:[{propertyTagId:"1436337",relatedType:"tag",title:"",relatedId:a.subareaId}],mentionRelatedObjects:{},privacy:"public",relatedId:a.islandId,reviewStatistic:"",type:"standard",meta:{plugin:{id:"kpop-profile"}},activeTags:o.value},{data:s}=await S["a"].createPost(e);E(null===s||void 0===s?void 0:s.postId)}catch(s){Object(n["a"])(JSON.stringify(s)),s.message.indexOf("头像或昵称为空")>-1&&e.navigateTo({url:"/pages-common/user-home-page/edit/index"})}finally{t.clear(),a.submitLock=!1}}function E(t){const a=`/pages-community/post/spu-detail?postId=${t}&postCommentShowAll=true`;(Object(p["h"])()||Object(p["d"])())&&e.navigateTo({url:a})}function A(t,e){a.mbti.text=t,a.mbtiPopupVisiable=!1}function J(){a.mbtiPopupVisiable=!1}function B(){a.mbtiPopupVisiable=!0}return Object(d["watch"])(()=>a.fileList,async(t,e)=>{var s;(null===t||void 0===t?void 0:t.length)>0&&(a.bcgImg.img=null===(s=await Object(k["b"])(null===t||void 0===t?void 0:t[0].file,"user-post.image"))||void 0===s?void 0:s.fullUrl)},{immediate:!0}),{...Object(d["toRefs"])(a),handleCloseStatusPopup:l,handleClickStatus:u,handleCloseTagPopup:j,getTagList:r,handleSelectTag:N,handleInput:O,publish:D,handleAddItem:T,handleAddStatus:K,handleDoubleAddItem:L,handleDeleteItem:V,handleInputRemark:q,handleInputMore:M,onConfirm:A,onCancel:J,handleSelectMbti:B}}},N=j,O=(a("7372"),a("0c7c")),T=Object(O["a"])(N,s,i,!1,null,"4b4408e5",null);e["default"]=T.exports},a23d:function(t,e,a){},ccbb:function(t,e,a){"use strict";var s=a("0ef7");e["a"]={getStandardProducts(t){return s["p"].get(`/spus/${t}/standard-products`)},getSPUs(t){return s["p"].get("/v2/spus",t)},getSingleSpu(t,e){return s["p"].get("/v2/spus/"+t,e)},getUserPosters(t){return s["h"].post("/c2c-web/v1/poster/get-user-posters",t)},doProductsOffSale(t){return s["h"].post("/c2c-web/v1/c2c/products/off-sale",t)},plastSearchCategory(t){return s["h"].get("/plast/search/category/v3",t)},createUserPoster(t){return s["h"].post("/c2c-web/v1/poster/create-user-poster",t)},getSPUSpecs(t){return s["p"].get(`/spus/${t}/specs`)},updateC2cProductsByCategory(t){return s["h"].post("/c2c/products/m-update",t)},updateProductMulti(t){return s["h"].post("/c2c/products/multi-create",t)},createProductMulti(t){return s["h"].post("/c2c/products/m-create-update",t)},getProductsByCategory(t){return s["h"].get("/c2c/products/by-category",t)},getCategoryDetail(t,e){return s["p"].get("/v2/categories/"+t,e)},getCategories(t){return s["p"].get("/v2/categories",t)},getRecommendCategories(t){return s["p"].get(`/v2/categories/${t}/recommend`)},getCategoryTags(t){return s["p"].get(`/v2/categories/${t}/config`)},getTag(t,e){return s["p"].get("/tags/"+t,e)},getHotTags(t){return s["p"].get(`/tags/${t}/config`)},getTags(t){return s["p"].get("/tags",t)},searchCategories(t){return s["p"].get("/v2/categories",t)},getSettings(){return s["p"].get("/settings")},changeWishes(t){return s["p"].post("/wish-list",t)},updateUserSettings(t){return s["p"].put("/settings",t)},getPosterColumnConfig(t){return s["l"].get("/action/get-products-poster",t)},getPosterThemes(t){return s["l"].get("/action/get-poster-themes",t,{isErrorDefaultTip:!1})},getWishList(t){return s["p"].get("/wish-list",t,{isErrorDefaultTip:!1})},getWishMatches(t){return s["p"].get("/products/match/wish-list",t,{isErrorDefaultTip:!1})},getDemandProductList(t){return s["p"].get("/products/match/demand-list",t)},getTradeInfo(t){return s["p"].post("/action/get-trade-info",t)},get360DegImages(t){return s["p"].get(`/spus/${t}/360-degree-images`)},getBarginSpus(t){return s["p"].post("/stock-order/bargin",t)},getSpecsByMPName(t){return s["p"].get("/specs/aciton/get-by-app-name",t)},getDistribution(t){return s["p"].get("/feeds/chaowan",t)},getSellingCategories(t){return s["p"].get("/products/action/get-selling-categories",t)},getCategoryCount(t){return s["p"].get("/products/action/get-category-product-count",t)},getSpuList(t){return s["h"].post("/treasure/spus/search/simple-info",t)},getSpuHeader(t){return s["h"].get("/treasure/flora/v2/spu/simpleInfo",t)},getSpuDetails(t){return s["h"].get("/treasure/flora/v1/spu/detailInfo",t)},getTagList(t){return s["h"].get("/treasure/tags",t)},getTagDetails(t){return s["h"].get("/treasure/flora/v1/tag/detailInfo",t)},getTagDetailsV2(t){return s["h"].get("/treasure/flora/v2/tag/simpleInfo",t)},searchSpuInTag(t){return s["h"].get("/plast/search/spu",t)},searchTag(t){return s["h"].get("/plast/search/tag",t)},getXiaokaWebConfig(){return s["e"].get("/vinyl/web.json")},getTagsV2(t){return s["h"].get("/armory/entry/tags",t)}}}}]);