(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f1401fa"],{"0804":function(e,t,a){"use strict";const i={1113060:"name",1475782:"unlockRegion",53188:"age",1447515:"CV",1475769:"weaponType",1475770:"magicAttribute",55407:"introduction",1475771:"mapCommandDaytime",1475772:"mapCommandNight",1475773:"ownBroughtAction",1475774:"potential",1475775:"combatSkill",1475776:"auxiliarySkill",1475777:"potentialSkill",1003410:"attribute",1475823:"skillEffect",1475778:"consumptionSP",1426392:"unlockCondition",1479131:"wayOfReceiving",1479132:"modeOfCompletion",1479133:"taskReward",1480181:"unlockingMode",1480187:"maximumHP",1480188:"maximumSP",1416073:"objectAttack",1481317:"attributeAttack",1416072:"physicalDefense",1481318:"attributeDefense",1447284:"hit",1447304:"speed",1480194:"criticalStrike",1447286:"avoid",1481311:"location",1481312:"propsHeld",1481313:"availableInformation",1481314:"aidSkills",1481315:"combatCapability",1481316:"swordsmenCanLearnSkills",10277:"gotItem",1470455:"level",53149:"weakness",1416074:"HP",1481320:"EXP",1481322:"JP",1481323:"money",50388:"region",1487492:"shieldPoints",1002048:"effect",81151:"other",1445704:"getMethod",1487502:"EXSkill",1488540:"city",1492475:"regionalPeriphery",1426387:"timeOfAppearance",1426401:"occurrenceCondition",1494748:"concert",1494749:"employmentEffect",1494750:"strength",1494751:"dropItem",1494756:"dropRate",1494758:"leafCoin",1494761:"useMoves",1454975:"totalSpent",1462189:"timesOfUse",1494762:"abnormalStateTolerance",1447282:"SP",1494757:"BP",1492484:"informationSource",1480193:"moveSpeed",1514636:"weaponShop",1514637:"weaponShopPrice",1514690:"propShop",1514691:"propShopPrice",1514708:"groceryStore",1514709:"groceryStorePrice",1514743:"guardShop",1514744:"guardShopPrice",1514747:"herbShop",1514748:"herbShopPrice",1514751:"ornamentShop",1514752:"ornamentShopPrice",1514753:"effectBBottleShop",1514754:"effectBBottleShopPrice",1514755:"elfstoneShop",1514756:"elfstoneShopPrice",1514757:"recordShop",1514758:"recordShopPrice",1514759:"prisoner",1514760:"prisonerPrice"};t["a"]=i},"0e86":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return n}));var i=a("5184");a("0ef7");const r=i["a"]`
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
`,s=i["a"]`
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
`,o=function(e){return i["a"]`
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
  `},n=function(e){return i["a"]`
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
  `}},"2dee":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"npc-detail-container"},[t("div",{staticClass:"npc-detail__top-card"},[t("base-info",{attrs:{"render-data":e.renderData}}),t("div",{staticClass:"npc-detail__top-card__description"},[e._v(" "+e._s(e.renderData.introduction)+" ")]),t("div",{staticClass:"npc-detail__top-card__divider"}),t("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/b24955af0fca06f83b2d2ac6d7e3f7f7.png",width:"100%"}})],1)])])},r=[],s=(a("e7e5"),a("d399")),o=a("2b0e"),n=a("2e3f"),l=a("a18c"),d=a("0e86"),c=a("f685"),_=a("8073"),u=function(){var e,t,a,i,r,s,o=this,n=o._self._c;o._self._setupProxy;return n("div",{staticClass:"travel-detail__top-card__base-info"},[o.renderData.cover?n("div",{staticClass:"travel-detail__base-info__image"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:o.renderData.cover,expression:"renderData.cover"}],staticStyle:{"object-fit":"cover"},attrs:{alt:"",width:"100%",height:"100%"}})]):o._e(),n("div",{staticClass:"travel-detail__base-info__texts"},[n("div",{staticClass:"travel-detail__base-info__title"},[o._v(" "+o._s(o.renderData.name)+" ")]),n("div",{staticClass:"travel-detail__base-info__details"},[n("div",{staticClass:"travel-detail__base-info__detail-item"},[n("div",{staticClass:"travel-detail__base-info__detail-item__label"},[o._v("地区:")]),n("div",{staticClass:"travel-detail__base-info__detail-item__value travel-detail__base-info__detail-item--click",on:{click:o.goToDetails}},[o._v(" "+o._s(null===(e=o.renderData.region)||void 0===e?void 0:e.dataValue)+"> ")])]),n("div",{staticClass:"travel-detail__base-info__detail-item"},[n("div",{staticClass:"travel-detail__base-info__detail-item__label"},[o._v("地点:")]),n("div",{staticClass:"travel-detail__base-info__detail-item__value"},[o._v(" "+o._s(null===(t=o.renderData.location)||void 0===t?void 0:t.dataValue)+" ")])]),n("div",{staticClass:"travel-detail__base-info__detail-item"},[n("div",{staticClass:"travel-detail__base-info__detail-item__label"},[o._v(" 所持道具: ")]),n("div",{staticClass:"travel-detail__base-info__detail-item__value"},[o._v(" "+o._s(null===(a=o.renderData.propsHeld)||void 0===a?void 0:a.dataValue)+" ")])]),n("div",{staticClass:"travel-detail__base-info__detail-item"},[n("div",{staticClass:"travel-detail__base-info__detail-item__label"},[o._v(" 可获情报: ")]),n("div",{staticClass:"travel-detail__base-info__detail-item__value"},[o._v(" "+o._s(null===(i=o.renderData.availableInformation)||void 0===i?void 0:i.dataValue)+" ")])]),n("div",{staticClass:"travel-detail__base-info__detail-item"},[n("div",{staticClass:"travel-detail__base-info__detail-item__label"},[o._v("弱点:")]),n("div",{staticClass:"travel-detail__base-info__detail-item__value"},o._l(o.renderData.weakness,(function(e,t){return n("div",{key:t,staticClass:"travel-base-info__img-container"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.target.image,expression:"v.target.image"}],attrs:{width:"100%",height:"100%"}})])})),0)]),n("div",{staticClass:"travel-detail__base-info__detail-item"},[n("div",{staticClass:"travel-detail__base-info__detail-item__label"},[o._v(" 支援信息: ")]),n("div",{staticClass:"travel-detail__base-info__detail-item__value"},[o._v(" "+o._s(null===(r=o.renderData.employmentEffect)||void 0===r?void 0:r.dataValue)+" ")])]),n("div",{staticClass:"travel-detail__base-info__detail-item"},[n("div",{staticClass:"travel-detail__base-info__detail-item__label"},[o._v(" 可习得技能: ")]),n("div",{staticClass:"travel-detail__base-info__detail-item__value"},[o._v(" "+o._s(null===(s=o.renderData.swordsmenCanLearnSkills)||void 0===s?void 0:s.dataValue)+" ")])])])])])},f=[],p=a("1816"),v=a.n(p);const m=Object(o["defineComponent"])({name:"BaseInfo",props:{renderData:{type:Object,default:()=>({})}},setup(e){const{renderData:t}=Object(o["toRefs"])(e),a=()=>{console.log(t.value);const e=t.value.region.targetId,a=v()(location.origin+"/plugin/traveler-in-all-directions/region-detail",!0);a.query={id:e,name:t.value.region.dataValue};const i=encodeURIComponent(a.toString()),r="/modules/pages/web-view/index?url="+i;Object(n["a"])(r)};return{goToDetails:a}}});var g=m,b=g,y=(a("ba14"),a("0c7c")),h=Object(y["a"])(b,u,f,!1,null,"1fcf3303",null),C=h.exports;const I=Object(o["defineComponent"])({name:"NPCDetail",components:{BaseInfo:C},setup(){const e=l["a"].currentRoute.query.id,t=l["a"].currentRoute.query.name;t&&(document.title=t);const a=Object(o["ref"])({});Object(o["onMounted"])(()=>{u()});const{onResult:i,loading:r}=Object(c["b"])(Object(d["c"])(),()=>({ids:e,limit:1,offset:0}));function u(){s["a"].loading({duration:0,message:"请稍等..."})}function f(){s["a"].clear()}i(e=>{const t=e.data.tags.list[0],i=Object(_["b"])(t.profiles);Object(_["a"])(i),console.log(i),a.value={name:t.name,...i},console.log(a.value)}),Object(o["watch"])(r,e=>{e?u():f()});const p=e=>{e&&Object(n["a"])(e.url)};return{renderData:a,handleSwitch:p}}});var S=I,P=S,w=(a("8b16"),Object(y["a"])(P,i,r,!1,null,"f0a43a52",null));t["default"]=w.exports},"41f6":function(e,t,a){},8073:function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"a",(function(){return d}));a("14d9");var i=a("0804"),r=a("0644"),s=a.n(r),o=a("0d94");const n=function(e){e=s()(e||[]);const t={};return Array.isArray(e)?(e.forEach((function(e){var a;const r=e.propertyId,s=i["a"][r]||r;if(t[s]){if(t[s]instanceof Array)t[s].push(e);else if(t[s]instanceof Object){const a=t[s];t[s]=[a,e]}}else t[s]=e;null!==(a=t[s].target)&&void 0!==a&&a.profiles?t[s].target.profiles=n(t[s].target.profiles):t[s]instanceof Array&&t[s].forEach(e=>{var t;null!==(t=e.target)&&void 0!==t&&t.profiles&&e.target.profiles instanceof Array&&(e.target.profiles=n(e.target.profiles))})})),t):t};function l(e){return"string"===typeof e&&e.startsWith("echotechoss://")}function d(e){if(e&&"object"===typeof e)for(const t in e)l(e[t])?e[t]=Object(o["a"])(e[t]):e instanceof Object&&d(e[t]);else if(e instanceof Array)for(let t=0;t<e.length;t++)e[t]instanceof Object?d(e[t]):l(e[t])&&(e[t]=Object(o["a"])(e[t]))}},"86a4":function(e,t,a){},"8b16":function(e,t,a){"use strict";a("86a4")},ba14:function(e,t,a){"use strict";a("41f6")}}]);