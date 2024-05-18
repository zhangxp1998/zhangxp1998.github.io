(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15d749d4"],{"0804":function(e,t,a){"use strict";const i={1113060:"name",1475782:"unlockRegion",53188:"age",1447515:"CV",1475769:"weaponType",1475770:"magicAttribute",55407:"introduction",1475771:"mapCommandDaytime",1475772:"mapCommandNight",1475773:"ownBroughtAction",1475774:"potential",1475775:"combatSkill",1475776:"auxiliarySkill",1475777:"potentialSkill",1003410:"attribute",1475823:"skillEffect",1475778:"consumptionSP",1426392:"unlockCondition",1479131:"wayOfReceiving",1479132:"modeOfCompletion",1479133:"taskReward",1480181:"unlockingMode",1480187:"maximumHP",1480188:"maximumSP",1416073:"objectAttack",1481317:"attributeAttack",1416072:"physicalDefense",1481318:"attributeDefense",1447284:"hit",1447304:"speed",1480194:"criticalStrike",1447286:"avoid",1481311:"location",1481312:"propsHeld",1481313:"availableInformation",1481314:"aidSkills",1481315:"combatCapability",1481316:"swordsmenCanLearnSkills",10277:"gotItem",1470455:"level",53149:"weakness",1416074:"HP",1481320:"EXP",1481322:"JP",1481323:"money",50388:"region",1487492:"shieldPoints",1002048:"effect",81151:"other",1445704:"getMethod",1487502:"EXSkill",1488540:"city",1492475:"regionalPeriphery",1426387:"timeOfAppearance",1426401:"occurrenceCondition",1494748:"concert",1494749:"employmentEffect",1494750:"strength",1494751:"dropItem",1494756:"dropRate",1494758:"leafCoin",1494761:"useMoves",1454975:"totalSpent",1462189:"timesOfUse",1494762:"abnormalStateTolerance",1447282:"SP",1494757:"BP",1492484:"informationSource",1480193:"moveSpeed",1514636:"weaponShop",1514637:"weaponShopPrice",1514690:"propShop",1514691:"propShopPrice",1514708:"groceryStore",1514709:"groceryStorePrice",1514743:"guardShop",1514744:"guardShopPrice",1514747:"herbShop",1514748:"herbShopPrice",1514751:"ornamentShop",1514752:"ornamentShopPrice",1514753:"effectBBottleShop",1514754:"effectBBottleShopPrice",1514755:"elfstoneShop",1514756:"elfstoneShopPrice",1514757:"recordShop",1514758:"recordShopPrice",1514759:"prisoner",1514760:"prisonerPrice"};t["a"]=i},"0b73":function(e,t,a){},"0e86":function(e,t,a){"use strict";a.d(t,"d",(function(){return r})),a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return s}));var i=a("5184");a("0ef7");const r=i["a"]`
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
`,n=i["a"]`
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
  `},s=function(e){return i["a"]`
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
  `}},4143:function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return e.paragraph?t("div",{staticClass:"role-skill-container"},[t("role-skill-card",{attrs:{title:e.title}},[t("div",{staticClass:"role-skill-card-container"},[t("div",{staticClass:"role-skill-card-item"},[t("div",{staticClass:"role-skill-card-paragraph"},[e._v(" "+e._s(e.paragraph)+" ")])])])])],1):e._e()},r=[],n=a("2b0e"),o=a("c0aa");const s=Object(n["defineComponent"])({name:"Paragragh",components:{RoleSkillCard:o["a"]},props:{title:{type:String,default:""},paragraph:{type:String,default:""}},setup(e){}});var l=s,c=l,d=(a("9ad8"),a("0c7c")),u=Object(d["a"])(c,i,r,!1,null,"1da7fb1d",null);t["a"]=u.exports},8073:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return c}));a("14d9");var i=a("0804"),r=a("0644"),n=a.n(r),o=a("0d94");const s=function(e){e=n()(e||[]);const t={};return Array.isArray(e)?(e.forEach((function(e){var a;const r=e.propertyId,n=i["a"][r]||r;if(t[n]){if(t[n]instanceof Array)t[n].push(e);else if(t[n]instanceof Object){const a=t[n];t[n]=[a,e]}}else t[n]=e;null!==(a=t[n].target)&&void 0!==a&&a.profiles?t[n].target.profiles=s(t[n].target.profiles):t[n]instanceof Array&&t[n].forEach(e=>{var t;null!==(t=e.target)&&void 0!==t&&t.profiles&&e.target.profiles instanceof Array&&(e.target.profiles=s(e.target.profiles))})})),t):t};function l(e){return"string"===typeof e&&e.startsWith("echotechoss://")}function c(e){if(e&&"object"===typeof e)for(const t in e)l(e[t])?e[t]=Object(o["a"])(e[t]):e instanceof Object&&c(e[t]);else if(e instanceof Array)for(let t=0;t<e.length;t++)e[t]instanceof Object?c(e[t]):l(e[t])&&(e[t]=Object(o["a"])(e[t]))}},"9ad8":function(e,t,a){"use strict";a("0b73")},a8e1:function(e,t,a){"use strict";a("d94c")},b316:function(e,t,a){"use strict";a.r(t);var i=function(){var e,t=this,a=t._self._c;t._self._setupProxy;return a("div",{staticClass:"container"},[a("div",{staticClass:"treasure-box-detail-container"},[a("div",{staticClass:"treasure-box-detail__top-card"},[a("base-info",{attrs:{"render-data":t.renderData}}),a("div",{staticClass:"treasure-box-detail__top-card__description"},[t._v(" "+t._s(t.renderData.introduction)+" ")]),a("div",{staticClass:"treasure-box-detail__top-card__divider"}),a("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/b24955af0fca06f83b2d2ac6d7e3f7f7.png",width:"100%"}})],1),a("paragragh",{attrs:{title:"获取方式",paragraph:null===(e=t.renderData.getMethod)||void 0===e?void 0:e.dataValue}})],1)])},r=[],n=(a("e7e5"),a("d399")),o=a("2b0e"),s=a("2e3f"),l=a("a18c"),c=a("0e86"),d=a("f685"),u=a("8073"),p=function(){var e,t,a,i=this,r=i._self._c;i._self._setupProxy;return r("div",{staticClass:"travel-detail__top-card__base-info"},[i.renderData.cover?r("div",{staticClass:"travel-detail__base-info__image"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:i.renderData.cover,expression:"renderData.cover"}],staticStyle:{"object-fit":"cover"},attrs:{alt:"",width:"100%",height:"100%"}})]):i._e(),r("div",{staticClass:"travel-detail__base-info__texts"},[r("div",{staticClass:"travel-detail__base-info__title"},[i._v(" "+i._s(i.renderData.name)+" ")]),r("div",{staticClass:"travel-detail__base-info__details"},[r("div",{staticClass:"travel-detail__base-info__detail-item"},[r("div",{staticClass:"travel-detail__base-info__detail-item__label"},[i._v("地区:")]),r("div",{staticClass:"travel-detail__base-info__detail-item__value travel-detail__base-info__detail-item--click",on:{click:i.goToDetails}},[i._v(" "+i._s(null===(e=i.renderData.region)||void 0===e?void 0:e.dataValue)+"> ")])]),r("div",{staticClass:"travel-detail__base-info__detail-item"},[r("div",{staticClass:"travel-detail__base-info__detail-item__label"},[i._v(" 获取地点: ")]),r("div",{staticClass:"travel-detail__base-info__detail-item__value"},[i._v(" "+i._s(null===(t=i.renderData.location)||void 0===t?void 0:t.dataValue)+" ")])]),r("div",{staticClass:"travel-detail__base-info__detail-item"},[r("div",{staticClass:"travel-detail__base-info__detail-item__label"},[i._v(" 获得道具: ")]),r("div",{staticClass:"travel-detail__base-info__detail-item__value"},[i._v(" "+i._s(null===(a=i.renderData.gotItem)||void 0===a?void 0:a.dataValue)+" ")])])])])])},f=[],_=a("1816"),v=a.n(_);const g=Object(o["defineComponent"])({name:"BaseInfo",props:{renderData:{type:Object,default:()=>({})}},setup(e){const{renderData:t}=Object(o["toRefs"])(e),a=()=>{console.log(t.value);const e=t.value.region.targetId,a=v()(location.origin+"/plugin/traveler-in-all-directions/region-detail",!0);a.query={id:e,name:t.value.region.dataValue};const i=encodeURIComponent(a.toString()),r="/modules/pages/web-view/index?url="+i;Object(s["a"])(r)};return{goToDetails:a}}});var m=g,y=m,b=(a("c1ea"),a("0c7c")),h=Object(b["a"])(y,p,f,!1,null,"37986e69",null),I=h.exports,C=a("4143"),S=a("0d94");const P=Object(o["defineComponent"])({name:"TreasureBox",components:{BaseInfo:I,Paragragh:C["a"]},setup(){const e=l["a"].currentRoute.query.id,t=l["a"].currentRoute.query.name;t&&(document.title=t);const a=Object(o["ref"])({});Object(o["onMounted"])(()=>{p()});const{onResult:i,loading:r}=Object(d["b"])(Object(c["c"])(),()=>({ids:e,limit:1,offset:0}));function p(){n["a"].loading({duration:0,message:"请稍等..."})}function f(){n["a"].clear()}i(e=>{const t=e.data.tags.list[0],i=Object(u["b"])(t.profiles);a.value={name:t.name,cover:Object(S["a"])(t.images.logo),...i},console.log(a.value)}),Object(o["watch"])(r,e=>{e?p():f()});const _=e=>{e&&Object(s["a"])(e.url)};return{renderData:a,handleSwitch:_}}});var O=P,j=O,k=(a("c2d0"),Object(b["a"])(j,i,r,!1,null,"4949ffb8",null));t["default"]=k.exports},c0aa:function(e,t,a){"use strict";var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"card-container"},[t("div",{staticClass:"card-container__title"},[e._v(" "+e._s(e.title)+" ")]),t("div",{staticClass:"card-container__tags--scroll"},[t("div",{staticClass:"card-container__tags"},e._l(e.tags,(function(a,i){return t("div",{key:i,class:a.selected?"card-container__tag-item--selected":"card-container__tag-item--unselected",on:{click:function(t){return e.handleSelect(a)}}},[t("div",{staticClass:"card-container__tag-item__title"},[e._v(" "+e._s(a.name)+" ")])])})),0)]),t("div",{staticClass:"card-container__body"},[e._t("default")],2)])},r=[],n=a("2b0e");const o=Object(n["defineComponent"])({name:"MainPageCard",props:{tags:{type:Array,default:()=>[]},title:{type:String,default:""},selectType:{type:String,default:"ROLE"},type:{type:String,default:"ROLE"}},setup(e,{emit:t}){const{type:a}=Object(n["toRefs"])(e),i=e=>{t("select",{type:a.value,...e})};return{handleSelect:i}}});var s=o,l=s,c=(a("a8e1"),a("0c7c")),d=Object(c["a"])(l,i,r,!1,null,"40ba510d",null);t["a"]=d.exports},c1ea:function(e,t,a){"use strict";a("c845")},c2d0:function(e,t,a){"use strict";a("c769")},c769:function(e,t,a){},c845:function(e,t,a){},d94c:function(e,t,a){}}]);