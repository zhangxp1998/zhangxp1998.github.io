(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74d42bb7"],{"0804":function(t,a,e){"use strict";const i={1113060:"name",1475782:"unlockRegion",53188:"age",1447515:"CV",1475769:"weaponType",1475770:"magicAttribute",55407:"introduction",1475771:"mapCommandDaytime",1475772:"mapCommandNight",1475773:"ownBroughtAction",1475774:"potential",1475775:"combatSkill",1475776:"auxiliarySkill",1475777:"potentialSkill",1003410:"attribute",1475823:"skillEffect",1475778:"consumptionSP",1426392:"unlockCondition",1479131:"wayOfReceiving",1479132:"modeOfCompletion",1479133:"taskReward",1480181:"unlockingMode",1480187:"maximumHP",1480188:"maximumSP",1416073:"objectAttack",1481317:"attributeAttack",1416072:"physicalDefense",1481318:"attributeDefense",1447284:"hit",1447304:"speed",1480194:"criticalStrike",1447286:"avoid",1481311:"location",1481312:"propsHeld",1481313:"availableInformation",1481314:"aidSkills",1481315:"combatCapability",1481316:"swordsmenCanLearnSkills",10277:"gotItem",1470455:"level",53149:"weakness",1416074:"HP",1481320:"EXP",1481322:"JP",1481323:"money",50388:"region",1487492:"shieldPoints",1002048:"effect",81151:"other",1445704:"getMethod",1487502:"EXSkill",1488540:"city",1492475:"regionalPeriphery",1426387:"timeOfAppearance",1426401:"occurrenceCondition",1494748:"concert",1494749:"employmentEffect",1494750:"strength",1494751:"dropItem",1494756:"dropRate",1494758:"leafCoin",1494761:"useMoves",1454975:"totalSpent",1462189:"timesOfUse",1494762:"abnormalStateTolerance",1447282:"SP",1494757:"BP",1492484:"informationSource",1480193:"moveSpeed",1514636:"weaponShop",1514637:"weaponShopPrice",1514690:"propShop",1514691:"propShopPrice",1514708:"groceryStore",1514709:"groceryStorePrice",1514743:"guardShop",1514744:"guardShopPrice",1514747:"herbShop",1514748:"herbShopPrice",1514751:"ornamentShop",1514752:"ornamentShopPrice",1514753:"effectBBottleShop",1514754:"effectBBottleShopPrice",1514755:"elfstoneShop",1514756:"elfstoneShopPrice",1514757:"recordShop",1514758:"recordShopPrice",1514759:"prisoner",1514760:"prisonerPrice"};a["a"]=i},"0e86":function(t,a,e){"use strict";e.d(a,"d",(function(){return s})),e.d(a,"a",(function(){return l})),e.d(a,"b",(function(){return d})),e.d(a,"c",(function(){return r}));var i=e("5184");e("0ef7");const s=i["a"]`
  query spusQuery {
    spus(
      spuQueryParam: {
        limit: 100
        offset: 0
        andPublicRelations: [
          { propertyId: "1478060", sourceId: "1478061", sourceType: "1" }
        ]
        typeId: "1475766"
      }
    ) {
      list {
        name
        id
        images {
          cover
        }
      }
      count
    }
  }
`,l=i["a"]`
  query spusQuery {
    spus(
      spuQueryParam: {
        limit: 100
        offset: 0
        andPublicRelations: [
          { propertyId: "1478060", sourceId: "1478062", sourceType: "1" }
        ]
        typeId: "1475766"
      }
    ) {
      list {
        name
        id
        images {
          cover
        }
        mainTagId
      }
      count
    }
  }
`,d=function(t){return i["a"]`
    query spusQuery($id: [UInt64!]) {
      spus(spuQueryParam: { ids: $id }) {
        list {
          name
          id
          images {
            cover
            HDs
            officials
            whiteBgPng
          }
          profiles {
            id
            propertyId
            dataValue
            entryId
            entryType
            dataType
            targetId
            target {
              id
              image
              profiles {
                id
                dataType
                dataValue
                propertyId
                targetId
                targetType
                target {
                  id
                  image
                  profiles {
                    id
                    dataType
                    dataValue
                    propertyId
                    targetId
                    targetType
                  }
                }
              }
            }
          }
        }
      }
    }
  `},r=function(t){return i["a"]`
    query tagsQuery(
      $orderBy: String
      $limit: UInt64!
      $offset: UInt64!
      $name: String
      $sourceTagIds: [UInt64!]
      $propertyIds: [UInt64]
      $typeIds: [UInt64!]
      $ids: [UInt64!]
    ) {
      tags(
        tagQueryParam: {
          limit: $limit
          offset: $offset
          sourceTagIds: $sourceTagIds
          propertyIds: $propertyIds
          typeIds: $typeIds
          ids: $ids
          name: $name
          orderBy: $orderBy
        }
      ) {
        list {
          name
          id
          images {
            cover
            logo
          }
          profiles {
            id
            propertyId
            dataValue
            entryId
            entryType
            dataType
            targetId
            target {
              id
              image
              profiles {
                id
                dataType
                dataValue
                propertyId
                targetId
                targetType
                target {
                  id
                  image
                  profiles {
                    id
                    dataType
                    dataValue
                    propertyId
                    targetId
                    targetType
                  }
                }
              }
            }
          }
        }
      }
    }
  `}},"28b0":function(t,a,e){"use strict";e("ef32")},"498a":function(t,a,e){},"53ca":function(t,a,e){"use strict";e("498a")},"57e2":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",{staticClass:"container"},[a("div",{staticClass:"weapon-detail-container"},[a("div",{staticClass:"weapon-detail__top-card"},[a("base-info",{attrs:{"render-data":t.renderData}}),a("div",{staticClass:"weapon-detail__top-card__description"},[t._v(" "+t._s(t.renderData.introduction)+" ")]),a("div",{staticClass:"weapon-detail__top-card__divider"}),a("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/b24955af0fca06f83b2d2ac6d7e3f7f7.png",width:"100%"}})],1),a("base-data",{attrs:{"render-data":t.renderData}})],1)])},s=[],l=(e("e7e5"),e("d399")),d=e("2b0e"),r=e("2e3f"),n=e("a18c"),o=e("0e86"),_=e("f685"),c=e("8073"),u=function(){var t,a,e,i,s,l,d,r,n,o,_,c,u,v,p,b,f,m,g,y,C,h,D,V,I,P,S,j,w,k,O,T,$=this,A=$._self._c;$._self._setupProxy;return $.showBaseData?A("div",{staticClass:"base-data-container"},[$._m(0),A("div",{staticClass:"base-data__list"},[null!==(t=$.renderData.HP)&&void 0!==t&&t.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("HP:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(a=$.renderData.HP)||void 0===a?void 0:a.dataValue)+" ")])]):$._e(),null!==(e=$.renderData.attribute)&&void 0!==e&&e.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("属性:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(i=$.renderData.attribute)||void 0===i?void 0:i.dataValue)+" ")])]):$._e(),null!==(s=$.renderData.objectAttack)&&void 0!==s&&s.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("物攻:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(l=$.renderData.objectAttack)||void 0===l?void 0:l.dataValue)+" ")])]):$._e(),null!==(d=$.renderData.attributeAttack)&&void 0!==d&&d.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("属攻:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(r=$.renderData.attributeAttack)||void 0===r?void 0:r.dataValue)+" ")])]):$._e(),null!==(n=$.renderData.physicalDefense)&&void 0!==n&&n.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("物防:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(o=$.renderData.physicalDefense)||void 0===o?void 0:o.dataValue)+" ")])]):$._e(),null!==(_=$.renderData.attributeDefense)&&void 0!==_&&_.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("属防:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(c=$.renderData.attributeDefense)||void 0===c?void 0:c.dataValue)+" ")])]):$._e(),null!==(u=$.renderData.other)&&void 0!==u&&u.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("其他:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(v=$.renderData.other)||void 0===v?void 0:v.dataValue)+" ")])]):$._e(),null!==(p=$.renderData.effect)&&void 0!==p&&p.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("效果:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(b=$.renderData.effect)||void 0===b?void 0:b.dataValue)+" ")])]):$._e(),null!==(f=$.renderData.hit)&&void 0!==f&&f.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("命中:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(m=$.renderData.hit)||void 0===m?void 0:m.dataValue)+" ")])]):$._e(),null!==(g=$.renderData.speed)&&void 0!==g&&g.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("速度:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(y=$.renderData.speed)||void 0===y?void 0:y.dataValue)+" ")])]):$._e(),null!==(C=$.renderData.criticalStrike)&&void 0!==C&&C.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("速度:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(h=$.renderData.criticalStrike)||void 0===h?void 0:h.dataValue)+" ")])]):$._e(),null!==(D=$.renderData.avoid)&&void 0!==D&&D.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("回避:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(V=$.renderData.avoid)||void 0===V?void 0:V.dataValue)+" ")])]):$._e(),null!==(I=$.renderData.EXP)&&void 0!==I&&I.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("EXP:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(P=$.renderData.EXP)||void 0===P?void 0:P.dataValue)+" ")])]):$._e(),null!==(S=$.renderData.JP)&&void 0!==S&&S.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("JP:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(j=$.renderData.JP)||void 0===j?void 0:j.dataValue)+" ")])]):$._e(),null!==(w=$.renderData.money)&&void 0!==w&&w.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("金钱:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(k=$.renderData.money)||void 0===k?void 0:k.dataValue)+" ")])]):$._e(),null!==(O=$.renderData.shieldPoints)&&void 0!==O&&O.dataValue?A("div",{staticClass:"base-data__list-item"},[A("div",{staticClass:"base-data__list-item__title"},[$._v("护盾点数:")]),A("div",{staticClass:"base-data__list-item__subtitle"},[$._v(" "+$._s(null===(T=$.renderData.shieldPoints)||void 0===T?void 0:T.dataValue)+" ")])]):$._e()])]):$._e()},v=[function(){var t=this,a=t._self._c;t._self._setupProxy;return a("div",{staticClass:"base-data__titles"},[a("div",{staticClass:"base-data__title"},[t._v("基础数据")])])}];const p=Object(d["defineComponent"])({name:"BaseInfo",props:{renderData:{type:Object,default:()=>({})}},setup(t){const{renderData:a}=Object(d["toRefs"])(t),e=Object(d["computed"])(()=>{var t,e,i,s,l,d,r;return(null===(t=a.value.attribute)||void 0===t?void 0:t.dataValue)||(null===(e=a.value.objectAttack)||void 0===e?void 0:e.dataValue)||(null===(i=a.value.attributeAttack)||void 0===i?void 0:i.dataValue)||(null===(s=a.value.physicalDefense)||void 0===s?void 0:s.dataValue)||(null===(l=a.value.attributeDefense)||void 0===l?void 0:l.dataValue)||(null===(d=a.value.other)||void 0===d?void 0:d.dataValue)||(null===(r=a.value.effect)||void 0===r?void 0:r.dataValue)});return{showBaseData:e}}});var b=p,f=b,m=(e("53ca"),e("0c7c")),g=Object(m["a"])(f,u,v,!1,null,"4a140250",null),y=g.exports,C=function(){var t,a,e,i=this,s=i._self._c;i._self._setupProxy;return s("div",{staticClass:"travel-detail__top-card__base-info"},[i.renderData.cover?s("div",{staticClass:"travel-detail__base-info__image"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.renderData.cover,expression:"renderData.cover"}],staticStyle:{"object-fit":"cover"},attrs:{alt:"",width:"100%",height:"100%"}})]):i._e(),s("div",{staticClass:"travel-detail__base-info__texts"},[s("div",{staticClass:"travel-detail__base-info__title"},[i._v(" "+i._s(i.renderData.name)+" ")]),s("div",{staticClass:"travel-detail__base-info__details"},[s("div",{staticClass:"travel-detail__base-info__detail-item"},[s("div",{staticClass:"travel-detail__base-info__detail-item__label"},[i._v("地区:")]),s("div",{staticClass:"travel-detail__base-info__detail-item__value travel-detail__base-info__detail-item--click",on:{click:i.goToDetails}},[i._v(" "+i._s(null===(t=i.renderData.region)||void 0===t?void 0:t.dataValue)+"> ")])]),s("div",{staticClass:"travel-detail__base-info__detail-item"},[s("div",{staticClass:"travel-detail__base-info__detail-item__label"},[i._v("地点:")]),s("div",{staticClass:"travel-detail__base-info__detail-item__value"},[i._v(" "+i._s(null===(a=i.renderData.location)||void 0===a?void 0:a.dataValue)+" ")])]),s("div",{staticClass:"travel-detail__base-info__detail-item"},[s("div",{staticClass:"travel-detail__base-info__detail-item__label"},[i._v("等级:")]),s("div",{staticClass:"travel-detail__base-info__detail-item__value"},[i._v(" "+i._s(null===(e=i.renderData.level)||void 0===e?void 0:e.dataValue)+" ")])]),s("div",{staticClass:"travel-detail__base-info__detail-item"},[s("div",{staticClass:"travel-detail__base-info__detail-item__label"},[i._v("弱点:")]),s("div",{staticClass:"travel-detail__base-info__detail-item__value"},i._l(i.renderData.weakness,(function(t,a){return s("div",{key:a,staticClass:"travel-base-info__img-container"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.target.image,expression:"v.target.image"}],attrs:{width:"100%",height:"100%"}})])})),0)])])])])},h=[],D=e("1816"),V=e.n(D);const I=Object(d["defineComponent"])({name:"BaseInfo",props:{renderData:{type:Object,default:()=>({})}},setup(t){const{renderData:a}=Object(d["toRefs"])(t),e=()=>{console.log(a.value);const t=a.value.region.targetId,e=V()(location.origin+"/plugin/traveler-in-all-directions/region-detail",!0);e.query={id:t,name:a.value.region.dataValue};const i=encodeURIComponent(e.toString()),s="/modules/pages/web-view/index?url="+i;Object(r["a"])(s)};return{goToDetails:e}}});var P=I,S=P,j=(e("b671"),Object(m["a"])(S,C,h,!1,null,"80f0887c",null)),w=j.exports,k=e("0d94");const O=Object(d["defineComponent"])({name:"WeaponDetail",components:{BaseData:y,BaseInfo:w},setup(t){const a=n["a"].currentRoute.query.id,e=n["a"].currentRoute.query.name;e&&(document.title=e);const i=Object(d["ref"])({});Object(d["onMounted"])(()=>{v()});const{onResult:s,loading:u}=Object(_["b"])(Object(o["c"])(),()=>({ids:a,limit:1,offset:0}));function v(){l["a"].loading({duration:0,message:"请稍等..."})}function p(){l["a"].clear()}s(t=>{const a=t.data.tags.list[0],e=Object(c["b"])(a.profiles);Object(c["a"])(e),i.value={name:a.name,cover:Object(k["a"])(a.images.logo),...e},console.log(e)}),Object(d["watch"])(u,t=>{t?v():p()});const b=t=>{t&&Object(r["a"])(t.url)};return{renderData:i,handleSwitch:b}}});var T=O,$=T,A=(e("28b0"),Object(m["a"])($,i,s,!1,null,"3122fc86",null));a["default"]=A.exports},8073:function(t,a,e){"use strict";e.d(a,"b",(function(){return r})),e.d(a,"a",(function(){return o}));e("14d9");var i=e("0804"),s=e("0644"),l=e.n(s),d=e("0d94");const r=function(t){t=l()(t||[]);const a={};return Array.isArray(t)?(t.forEach((function(t){var e;const s=t.propertyId,l=i["a"][s]||s;if(a[l]){if(a[l]instanceof Array)a[l].push(t);else if(a[l]instanceof Object){const e=a[l];a[l]=[e,t]}}else a[l]=t;null!==(e=a[l].target)&&void 0!==e&&e.profiles?a[l].target.profiles=r(a[l].target.profiles):a[l]instanceof Array&&a[l].forEach(t=>{var a;null!==(a=t.target)&&void 0!==a&&a.profiles&&t.target.profiles instanceof Array&&(t.target.profiles=r(t.target.profiles))})})),a):a};function n(t){return"string"===typeof t&&t.startsWith("echotechoss://")}function o(t){if(t&&"object"===typeof t)for(const a in t)n(t[a])?t[a]=Object(d["a"])(t[a]):t instanceof Object&&o(t[a]);else if(t instanceof Array)for(let a=0;a<t.length;a++)t[a]instanceof Object?o(t[a]):n(t[a])&&(t[a]=Object(d["a"])(t[a]))}},b671:function(t,a,e){"use strict";e("cccd")},cccd:function(t,a,e){},ef32:function(t,a,e){}}]);