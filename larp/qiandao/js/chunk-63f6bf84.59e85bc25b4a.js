(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63f6bf84"],{"154b":function(t,o,e){"use strict";e("afb9")},aa58:function(t,o,e){"use strict";e.r(o);var n=function(){var t=this,o=t._self._c;return o("div",{staticClass:"page-wrapper"})},i=[];const c="ELECTRONIC_SIGN_JUMP_KEY",a="ELECTRONIC_SIGN_JUMP_AUTH_TYPE";var l={data(){return{}},mounted(){var t,o;const{electronicSignStatus:e,ecElectronicSignUrl:n}=this.$route.query,i=null===(t=this.$route.query)||void 0===t?void 0:t.uuid,l=null===(o=this.$route.query)||void 0===o?void 0:o.__authType,r=window.localStorage.getItem(c);l&&window.localStorage.setItem(a,l);window.localStorage.getItem(a);console.log(this.$route),console.log("electronicSignStatus",e),console.log(this.redirectTo),i&&r&&i===r||e?this.navigateBack():n&&(i&&window.localStorage.setItem(c,i),window.location.href=decodeURIComponent(n))}},r=l,u=(e("154b"),e("0c7c")),s=Object(u["a"])(r,n,i,!1,null,null,null);o["default"]=s.exports},afb9:function(t,o,e){}}]);