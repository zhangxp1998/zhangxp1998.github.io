(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fd2613a4"],{"0958":function(t,e,o){"use strict";o("c18b")},c18b:function(t,e,o){},c70e:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t._self._c,o=t._self._setupProxy;return e("div",{staticClass:"page-prompt"},[o.showNav?e(o.NavBar,{attrs:{border:!1,"safe-area-inset-top":"",fixed:"",title:o.title,placeholder:!0},scopedSlots:t._u([{key:"left",fn:function(){return[e(o.Icon,{attrs:{name:"arrow-left",size:"18",color:"#2B263B"},on:{click:o.onClickLeft}})]},proxy:!0}],null,!1,3455825690)}):t._e(),e("div",{staticClass:"groups"},t._l(o.groups,(function(a){return e("div",{key:a.name,staticClass:"group"},[e("div",{staticClass:"group-name"},[e("span",{staticClass:"name"},[t._v(t._s(a.name))]),e("span",{staticClass:"count"},[t._v(" "+t._s(o.getSelect(a))+" / "+t._s(a.optionLimit)+" ")])]),e("div",{staticClass:"items"},t._l(a.options,(function(c){return e("div",{key:c.prompt,staticClass:"item",class:{selected:c.selected},on:{click:function(t){return o.handleSelect(a,c)}}},[e("div",{staticClass:"name otext"},[t._v(t._s(c.name))])])})),0)])})),0),e("div",{staticClass:"fixed-bottom-section"},[e(o.VanButton,{staticClass:"generate-btn",attrs:{block:""},on:{click:o.handleBack}},[t._v(" 完成 ")])],1)],1)},c=[],n=(o("66b9"),o("b650")),i=(o("c3a6"),o("ad06")),r=(o("5246"),o("6b41")),s=(o("e7e5"),o("d399")),l=o("2b0e"),u=o("4360"),d=o("ed08"),p=o("a18c"),v=o("3cc9"),g={__name:"prompt",props:{groupName:{type:String,default:""}},setup(t){const e=t;Object(l["useCssVars"])((t,e)=>({"64f386d5":e.color,"397d53ff":e.color4,"039b27c7":e.backgroundColor,"397d53fc":e.color1,"74356f4e":e.buttonBackground}));const o=Object(l["computed"])(()=>{var t;return null===(t=u["a"].getters)||void 0===t?void 0:t["aigc/mainColor"]}),a=Object(l["computed"])(()=>{var t;return null===(t=u["a"].getters)||void 0===t?void 0:t["aigc/color1"]}),c=Object(l["computed"])(()=>{var t;return null===(t=u["a"].getters)||void 0===t?void 0:t["aigc/color4"]}),g=Object(l["computed"])(()=>{var t;return null===(t=u["a"].getters)||void 0===t?void 0:t["aigc/backgroundColor"]}),f=Object(l["computed"])(()=>{var t,e;return null===(t=u["a"].state.aigc.pageConfig)||void 0===t||null===(e=t.theme)||void 0===e?void 0:e.buttonBackground}),m=Object(l["computed"])(()=>{var t;return null===(t=u["a"].state.aigc.pageConfig)||void 0===t?void 0:t.promptConfig});async function b(){const[t]=await u["a"].dispatch("config/loadConfigs",["aigc/"+m.value]);u["a"].commit("aigc/UPDATE_CONFIG",t)}Object(l["onMounted"])(async()=>{var t;null!==(t=k.value)&&void 0!==t&&t.length||await b()});const C=Object(d["d"])(),k=Object(l["computed"])(()=>{var t;return(null===(t=u["a"].state.aigc)||void 0===t?void 0:t.config)||[]},{deep:!0}),_=Object(l["computed"])(()=>{var t,o;return null===(t=k.value)||void 0===t||null===(o=t.find(t=>(null===t||void 0===t?void 0:t.groupName)===(null===e||void 0===e?void 0:e.groupName)))||void 0===o?void 0:o.groups},{deep:!0}),h=Object(l["computed"])(()=>"添加"+e.groupName),O=t=>{var e;return(null===(e=t.options.filter(t=>t.selected))||void 0===e?void 0:e.length)||0},{proxy:j}=Object(l["getCurrentInstance"])(),B=(t,e)=>{const o=t.optionLimit,a=O(t);if(o>1&&a>=o&&!e.selected)return void s["a"].fail("最多选择"+o+"个");1!==o||e.selected||t.options.forEach(t=>{t.selected=!1});const c=t.options.find(t=>t.name===e.name);c.selected=!e.selected,j.$forceUpdate()},w=()=>{p["a"].replace({name:"aigc-home"})},y=()=>{v["a"].navigateBack()};return{__sfc:!0,props:e,color:o,color1:a,color4:c,backgroundColor:g,buttonBackground:f,promptConfig:m,init:b,showNav:C,config:k,groups:_,title:h,getSelect:O,proxy:j,handleSelect:B,handleBack:w,onClickLeft:y,NavBar:r["a"],Icon:i["a"],VanButton:n["a"]}}},f=g,m=(o("0958"),o("0c7c")),b=Object(m["a"])(f,a,c,!1,null,"777680ab",null);e["default"]=b.exports}}]);