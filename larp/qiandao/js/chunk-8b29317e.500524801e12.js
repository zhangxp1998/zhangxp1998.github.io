(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b29317e"],{4453:function(t,s,e){},"8d04":function(t,s,e){"use strict";e("c9e8")},"907f4":function(t,s,e){"use strict";e.r(s);var d=function(){var t=this,s=t._self._c;return s("div",{staticClass:"page-wrapper"},[t.hasDefault?t._e():s("div",{staticClass:"addr-tip",staticStyle:{"margin-top":"20rpx"}},[t._v(" 尚未设置默认地址，请编辑或新增 ")]),t.formattedAddressList.length?[s("div",{staticClass:"list padding-left"},t._l(t.formattedAddressList,(function(e,d){return s("AddressItem",{key:e.id,attrs:{item:e,showBorderTop:!!d},nativeOn:{click:function(s){return t.onClickAddressItem(e)}}})})),1),s("div",{staticClass:"add-address-btn",on:{click:t.addAddress}},[t._v("新增地址")])]:s("div",{staticClass:"empty-wrapper"},[s("div",{staticClass:"add-addr",on:{click:t.addAddress}},[s("img",{staticClass:"add-addr__icon",attrs:{src:"https://cdn.qiandaoapp.com/admins/0ee97885f3387b565f1a005e5b6eaa69.png"}}),s("div",[t._v("新增收货地址")])]),s("div",{staticClass:"addr-tip"},[t._v(" 下单时如未填写收货地址，导致商品丢失等情况，需自行承担后果 ")])])],2)},a=[],i=(e("14d9"),e("2f62")),r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"wrapper",class:{"border-top":t.showBorderTop,"border-bottom":t.showBorderBottom}},[s("div",{staticClass:"left"},[s("div",{staticClass:"header"},[s("span",{staticClass:"name"},[t._v(t._s(t.item.receiver))]),s("span",{staticClass:"phone"},[t._v(t._s(t.item.phone))]),t.item.isDefault?s("div",{staticClass:"tag-default"},[s("span",[t._v("默认")])]):t._e()]),s("div",{staticClass:"address"},[t._v(t._s(t.item.wholeAddress))])]),s("div",{staticClass:"right"},[t._t("default")],2)])},o=[],c={props:{item:{type:Object,default:()=>({})},showBorderTop:{type:Boolean,default:!1},showBorderBottom:{type:Boolean,default:!1}}},n=c,l=(e("ab3d"),e("0c7c")),u=Object(l["a"])(n,r,o,!1,null,"2ca71770",null),p=u.exports,h={components:{AddressItem:p},computed:{...Object(i["mapGetters"])("address",["formattedAddressList","defaultAddress"]),hasDefault(){return!!this.defaultAddress},mode(){return this.$route.query.mode||"edit"}},created(){this.getMyAddresses()},methods:{...Object(i["mapActions"])("address",["getAddressList","setCurrentAddressId"]),async getMyAddresses(){try{await this.getAddressList()}catch(t){uni.showToast({title:"无法获取地址列表",icon:"none",duration:1500})}},onClickAddressItem(t){"edit"===this.mode?this.$router.push({path:"/address/edit?id="+t.id}):(this.$store.commit("address/UPDATE_CURRENT_ADDRESS_ID",t.id),window.localStorage.setItem("SELECTED_ADDRESS",JSON.stringify(t)),this.$router.back())},addAddress(){this.$router.push({path:"/address/edit",query:this.$route.query})}}},f=h,m=(e("8d04"),Object(l["a"])(f,d,a,!1,null,"fa9f4834",null));s["default"]=m.exports},ab3d:function(t,s,e){"use strict";e("4453")},c9e8:function(t,s,e){}}]);