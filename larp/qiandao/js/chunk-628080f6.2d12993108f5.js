(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-628080f6"],{3720:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;return a("div",{staticClass:"game-index"},t._l(this.indexList,(function(e,i){return a("div",{key:i,staticClass:"game"},[a("img",{staticClass:"game-cover",attrs:{src:e.coverUrl},on:{click:function(a){return t.handleClick(e.items[0].path)}}}),a("div",{staticClass:"game-bg"},[a("img",{staticClass:"game-bg-img",attrs:{src:e.coverUrl}})]),a("div",{staticClass:"game-info"},[a("div",{staticClass:"game-name",on:{click:function(a){return t.handleClick(e.items[0].path)}}},[t._v(" "+t._s(e.name)+" "),a("img",{staticClass:"arrow-icon",attrs:{src:"https://cdn.qiandaoapp.com/interior/images/b6888d02cc7054dad3151ee4d796eb7d.png",alt:"arrow"}})]),a("div",{staticClass:"game-item-group"},t._l(e.items,(function(e,i){return a("div",{key:i,staticClass:"game-item",on:{click:function(a){return t.handleClick(e.path)}}},[e.coverUrl?a("img",{staticClass:"island-cover",attrs:{src:e.coverUrl,alt:"cover"}}):t._e(),t._v(" "+t._s(e.name)+" ")])})),0)])])})),0)},s=[],c=e("ed08"),n=(e("a18c"),e("f61f")),r={data(){return{loading:!1,indexList:[]}},async created(){const t=await Object(n["a"])("game_launcher","default");this.indexList=t.indexList},mounted(){document.body.addEventListener("touchstart",(function(){}),!1)},methods:{handleClick(t){(Object(c["h"])()||Object(c["d"])())&&this.navigateTo({url:t})}}},l=r,o=(e("3e09"),e("0c7c")),d=Object(o["a"])(l,i,s,!1,null,null,null);a["default"]=d.exports},"3e09":function(t,a,e){"use strict";e("f661")},f661:function(t,a,e){}}]);