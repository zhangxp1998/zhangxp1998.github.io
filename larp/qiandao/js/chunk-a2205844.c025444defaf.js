(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a2205844"],{"2f04":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c,a=e._self._setupProxy;return t("div",{staticClass:"page-model"},[a.showNav?t(a.NavBar,{attrs:{border:!1,"safe-area-inset-top":"",fixed:"",title:"添加"+a.modelRef.name,placeholder:!0},scopedSlots:e._u([{key:"left",fn:function(){return[t(a.Icon,{attrs:{name:"arrow-left",size:"18",color:"#2B263B"},on:{click:a.onClickLeft}})]},proxy:!0}],null,!1,3455825690)}):e._e(),t("div",{staticClass:"title"},[e._v(e._s(a.modelRef.name))]),t("div",{staticClass:"items mt-8"},e._l(a.models,(function(o){return t("div",{key:o.name,staticClass:"item",on:{click:function(e){return a.handleSelect(o)}}},[t("img",{staticClass:"cover",attrs:{src:o.image+"!fill_w360_h360_jpg"}}),t("div",{staticClass:"name mt-4 otext"},[e._v(e._s(o.name))])])})),0)],1)},c=[],n=(a("c3a6"),a("ad06")),l=(a("5246"),a("6b41")),s=a("2b0e"),i=a("4360"),r=a("a18c"),d=a("3cc9"),u=a("ed08"),m={__name:"model",props:{name:{type:String,default:""}},setup(e){const t=e;Object(s["useCssVars"])((e,t)=>({"80b93336":t.color}));const a=Object(u["d"])(),o=Object(s["computed"])(()=>{var e,a;return null===(e=i["a"].state.aigc)||void 0===e||null===(a=e.modelConfig)||void 0===a?void 0:a.find(e=>e.name===t.name)}),c=Object(s["computed"])(()=>{var e;return(null===(e=o.value)||void 0===e?void 0:e.models)||[]}),m=Object(s["computed"])(()=>{var e;return null===(e=i["a"].getters)||void 0===e?void 0:e["aigc/mainColor"]}),f=e=>{i["a"].commit("aigc/setModel",{name:o.value.name,selectModel:e}),r["a"].replace({name:"aigc-home"})},v=()=>{d["a"].navigateBack()};return{__sfc:!0,props:t,showNav:a,modelRef:o,models:c,color:m,handleSelect:f,onClickLeft:v,NavBar:l["a"],Icon:n["a"]}}},f=m,v=(a("664d"),a("0c7c")),p=Object(v["a"])(f,o,c,!1,null,"9d8fa154",null);t["default"]=p.exports},"4ece":function(e,t,a){},"664d":function(e,t,a){"use strict";a("4ece")}}]);