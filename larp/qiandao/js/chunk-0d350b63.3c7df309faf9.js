(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d350b63"],{"3be0":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"guideline-detail-container"},[0===e.guildLineList.length?t("div",{staticClass:"role-record-empty"},[t("van-empty",{attrs:{description:"攻略施工中，请耐心等待。如果你有合适的攻略，可以发布在「八方旅人2岛」的攻略专区上喔"}})],1):e._e(),e._l(e.guildLineList,(function(n,i){return t("div",{key:i,staticClass:"guideline-detail-item",on:{click:function(t){return e.handleSelect(n)}}},[t("div",{staticClass:"guideline-detail-item-text"},[e._v(e._s(n.title))])])}))],2)])},c=[],a=(n("e7e5"),n("d399")),s=(n("91d5"),n("f0ca")),o=n("2b0e"),l=n("3dd7"),u=n("2e3f");const r=Object(o["defineComponent"])({name:"TravelerInAllDirectionsDetail",components:{VanEmpty:s["a"]},setup(){const e=Object(o["ref"])([]);console.log(111),Object(o["onMounted"])(()=>{n(),Object(l["a"])().then(t=>{e.value=t.guide||[]}).finally(()=>{i()})});const t=e=>{Object(u["a"])(e.url)},n=()=>{a["a"].loading({duration:0,message:"请稍等..."})},i=()=>{a["a"].clear()};return{guildLineList:e,handleSelect:t}}});var d=r,f=d,p=(n("8748"),n("0c7c")),g=Object(p["a"])(f,i,c,!1,null,"03d25324",null);t["default"]=g.exports},"3dd7":function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var i=n("0ef7");async function c(){return i["j"].get("https://config-cdn.qiandaoapp.com/plugin/octopath2-guide.json")}async function a(){return i["j"].get("https://config-cdn.qiandaoapp.com/plugin/fireemblem-character-guide.json")}},4741:function(e,t,n){},8748:function(e,t,n){"use strict";n("4741")}}]);