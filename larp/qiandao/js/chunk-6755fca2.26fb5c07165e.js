(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6755fca2"],{"0804":function(t,e,a){"use strict";const i={1113060:"name",1475782:"unlockRegion",53188:"age",1447515:"CV",1475769:"weaponType",1475770:"magicAttribute",55407:"introduction",1475771:"mapCommandDaytime",1475772:"mapCommandNight",1475773:"ownBroughtAction",1475774:"potential",1475775:"combatSkill",1475776:"auxiliarySkill",1475777:"potentialSkill",1003410:"attribute",1475823:"skillEffect",1475778:"consumptionSP",1426392:"unlockCondition",1479131:"wayOfReceiving",1479132:"modeOfCompletion",1479133:"taskReward",1480181:"unlockingMode",1480187:"maximumHP",1480188:"maximumSP",1416073:"objectAttack",1481317:"attributeAttack",1416072:"physicalDefense",1481318:"attributeDefense",1447284:"hit",1447304:"speed",1480194:"criticalStrike",1447286:"avoid",1481311:"location",1481312:"propsHeld",1481313:"availableInformation",1481314:"aidSkills",1481315:"combatCapability",1481316:"swordsmenCanLearnSkills",10277:"gotItem",1470455:"level",53149:"weakness",1416074:"HP",1481320:"EXP",1481322:"JP",1481323:"money",50388:"region",1487492:"shieldPoints",1002048:"effect",81151:"other",1445704:"getMethod",1487502:"EXSkill",1488540:"city",1492475:"regionalPeriphery",1426387:"timeOfAppearance",1426401:"occurrenceCondition",1494748:"concert",1494749:"employmentEffect",1494750:"strength",1494751:"dropItem",1494756:"dropRate",1494758:"leafCoin",1494761:"useMoves",1454975:"totalSpent",1462189:"timesOfUse",1494762:"abnormalStateTolerance",1447282:"SP",1494757:"BP",1492484:"informationSource",1480193:"moveSpeed",1514636:"weaponShop",1514637:"weaponShopPrice",1514690:"propShop",1514691:"propShopPrice",1514708:"groceryStore",1514709:"groceryStorePrice",1514743:"guardShop",1514744:"guardShopPrice",1514747:"herbShop",1514748:"herbShopPrice",1514751:"ornamentShop",1514752:"ornamentShopPrice",1514753:"effectBBottleShop",1514754:"effectBBottleShopPrice",1514755:"elfstoneShop",1514756:"elfstoneShopPrice",1514757:"recordShop",1514758:"recordShopPrice",1514759:"prisoner",1514760:"prisonerPrice"};e["a"]=i},"0b73":function(t,e,a){},"0e86":function(t,e,a){"use strict";a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return d}));var i=a("5184");a("0ef7");const s=i["a"]`
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
`,r=i["a"]`
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
`,n=function(t){return i["a"]`
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
  `},d=function(t){return i["a"]`
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
  `}},"1d4d":function(t,e,a){"use strict";a("765f")},4143:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return t.paragraph?e("div",{staticClass:"role-skill-container"},[e("role-skill-card",{attrs:{title:t.title}},[e("div",{staticClass:"role-skill-card-container"},[e("div",{staticClass:"role-skill-card-item"},[e("div",{staticClass:"role-skill-card-paragraph"},[t._v(" "+t._s(t.paragraph)+" ")])])])])],1):t._e()},s=[],r=a("2b0e"),n=a("c0aa");const d=Object(r["defineComponent"])({name:"Paragragh",components:{RoleSkillCard:n["a"]},props:{title:{type:String,default:""},paragraph:{type:String,default:""}},setup(t){}});var l=d,o=l,c=(a("9ad8"),a("0c7c")),u=Object(c["a"])(o,i,s,!1,null,"1da7fb1d",null);e["a"]=u.exports},7636:function(t,e,a){"use strict";a.r(e);var i=function(){var t,e=this,a=e._self._c;e._self._setupProxy;return a("div",{staticClass:"container"},[a("div",{staticClass:"weapon-detail-container"},[a("div",{staticClass:"weapon-detail__top-card"},[a("div",{staticClass:"weapon-detail__base-info__title"},[e._v(e._s(e.renderData.name))]),a("div",{staticClass:"weapon-detail__top-card__description"},[e._v(" "+e._s(e.renderData.introduction)+" ")]),a("div",{staticClass:"weapon-detail__top-card__divider"}),a("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/b24955af0fca06f83b2d2ac6d7e3f7f7.png",width:"100%"}})]),a("base-data",{attrs:{"render-data":e.renderData}}),a("paragragh",{attrs:{title:"获取方式",paragraph:null===(t=e.renderData.getMethod)||void 0===t?void 0:t.dataValue}})],1)])},s=[],r=(a("e7e5"),a("d399")),n=a("2b0e"),d=a("2e3f"),l=a("a18c"),o=a("0e86"),c=a("f685"),u=a("8073"),p=function(){var t,e,a,i,s,r,n,d,l,o,c,u,p,_,f,v,b,m,y,g,h,C=this,D=C._self._c;C._self._setupProxy;return C.showBaseData?D("div",{staticClass:"base-data-container"},[C._m(0),D("div",{staticClass:"base-data__list"},[null!==(t=C.renderData.attribute)&&void 0!==t&&t.dataValue&&"0"!==(null===(e=C.renderData.attribute)||void 0===e?void 0:e.dataValue)?D("div",{staticClass:"base-data__list-item"},[D("div",{staticClass:"base-data__list-item__title"},[C._v("属性:")]),D("div",{staticClass:"base-data__list-item__subtitle"},[C._v(" "+C._s(null===(a=C.renderData.attribute)||void 0===a?void 0:a.dataValue)+" ")])]):C._e(),null!==(i=C.renderData.objectAttack)&&void 0!==i&&i.dataValue&&"0"!==(null===(s=C.renderData.objectAttack)||void 0===s?void 0:s.dataValue)?D("div",{staticClass:"base-data__list-item"},[D("div",{staticClass:"base-data__list-item__title"},[C._v("物攻:")]),D("div",{staticClass:"base-data__list-item__subtitle"},[C._v(" "+C._s(null===(r=C.renderData.objectAttack)||void 0===r?void 0:r.dataValue)+" ")])]):C._e(),null!==(n=C.renderData.attributeAttack)&&void 0!==n&&n.dataValue&&"0"!==(null===(d=C.renderData.attributeAttack)||void 0===d?void 0:d.dataValue)?D("div",{staticClass:"base-data__list-item"},[D("div",{staticClass:"base-data__list-item__title"},[C._v("属攻:")]),D("div",{staticClass:"base-data__list-item__subtitle"},[C._v(" "+C._s(null===(l=C.renderData.attributeAttack)||void 0===l?void 0:l.dataValue)+" ")])]):C._e(),null!==(o=C.renderData.physicalDefense)&&void 0!==o&&o.dataValue&&"0"!==(null===(c=C.renderData.physicalDefense)||void 0===c?void 0:c.dataValue)?D("div",{staticClass:"base-data__list-item"},[D("div",{staticClass:"base-data__list-item__title"},[C._v("物防:")]),D("div",{staticClass:"base-data__list-item__subtitle"},[C._v(" "+C._s(null===(u=C.renderData.physicalDefense)||void 0===u?void 0:u.dataValue)+" ")])]):C._e(),null!==(p=C.renderData.attributeDefense)&&void 0!==p&&p.dataValue&&"0"!==(null===(_=C.renderData.attributeDefense)||void 0===_?void 0:_.dataValue)?D("div",{staticClass:"base-data__list-item"},[D("div",{staticClass:"base-data__list-item__title"},[C._v("属防:")]),D("div",{staticClass:"base-data__list-item__subtitle"},[C._v(" "+C._s(null===(f=C.renderData.attributeDefense)||void 0===f?void 0:f.dataValue)+" ")])]):C._e(),null!==(v=C.renderData.other)&&void 0!==v&&v.dataValue&&"0"!==(null===(b=C.renderData.other)||void 0===b?void 0:b.dataValue)?D("div",{staticClass:"base-data__list-item"},[D("div",{staticClass:"base-data__list-item__title"},[C._v("其他:")]),D("div",{staticClass:"base-data__list-item__subtitle"},[C._v(" "+C._s(null===(m=C.renderData.other)||void 0===m?void 0:m.dataValue)+" ")])]):C._e()]),null!==(y=C.renderData.effect)&&void 0!==y&&y.dataValue&&"0"!==(null===(g=C.renderData.effect)||void 0===g?void 0:g.dataValue)?D("div",{staticClass:"base-data__list-item",staticStyle:{width:"100%"}},[D("div",{staticClass:"base-data__list-item__title"},[C._v("效果:")]),D("div",{staticClass:"base-data__list-item__subtitle base-data__effect"},[C._v(" "+C._s(null===(h=C.renderData.effect)||void 0===h?void 0:h.dataValue)+" ")])]):C._e()]):C._e()},_=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"base-data__titles"},[e("div",{staticClass:"base-data__title"},[t._v("基础数据")])])}];const f=Object(n["defineComponent"])({name:"BaseInfo",props:{renderData:{type:Object,default:()=>({})}},setup(t){const{renderData:e}=Object(n["toRefs"])(t),a=Object(n["computed"])(()=>{var t,a,i,s,r,n,d;return(null===(t=e.value.attribute)||void 0===t?void 0:t.dataValue)||(null===(a=e.value.objectAttack)||void 0===a?void 0:a.dataValue)||(null===(i=e.value.attributeAttack)||void 0===i?void 0:i.dataValue)||(null===(s=e.value.physicalDefense)||void 0===s?void 0:s.dataValue)||(null===(r=e.value.attributeDefense)||void 0===r?void 0:r.dataValue)||(null===(n=e.value.other)||void 0===n?void 0:n.dataValue)||(null===(d=e.value.effect)||void 0===d?void 0:d.dataValue)});return{showBaseData:a}}});var v=f,b=v,m=(a("1d4d"),a("0c7c")),y=Object(m["a"])(b,p,_,!1,null,"3fb8d68f",null),g=y.exports,h=a("4143");const C=Object(n["defineComponent"])({name:"GuardDetail",components:{BaseData:g,Paragragh:h["a"]},setup(t){const e=l["a"].currentRoute.query.id,a=l["a"].currentRoute.query.name;a&&(document.title=a);const i=Object(n["ref"])({});Object(n["onMounted"])(()=>{_()});const{onResult:s,loading:p}=Object(c["b"])(Object(o["c"])(),()=>({ids:e,limit:1,offset:0}));function _(){r["a"].loading({duration:0,message:"请稍等..."})}function f(){r["a"].clear()}s(t=>{const e=t.data.tags.list[0],a=Object(u["b"])(e.profiles);i.value={name:e.name,...a}}),Object(n["watch"])(p,t=>{t?_():f()});const v=t=>{t&&Object(d["a"])(t.url)};return{renderData:i,handleSwitch:v}}});var D=C,S=D,I=(a("7b2f"),Object(m["a"])(S,i,s,!1,null,"e7089e9a",null));e["default"]=I.exports},"765f":function(t,e,a){},"7b2f":function(t,e,a){"use strict";a("9306")},8073:function(t,e,a){"use strict";a.d(e,"b",(function(){return d})),a.d(e,"a",(function(){return o}));a("14d9");var i=a("0804"),s=a("0644"),r=a.n(s),n=a("0d94");const d=function(t){t=r()(t||[]);const e={};return Array.isArray(t)?(t.forEach((function(t){var a;const s=t.propertyId,r=i["a"][s]||s;if(e[r]){if(e[r]instanceof Array)e[r].push(t);else if(e[r]instanceof Object){const a=e[r];e[r]=[a,t]}}else e[r]=t;null!==(a=e[r].target)&&void 0!==a&&a.profiles?e[r].target.profiles=d(e[r].target.profiles):e[r]instanceof Array&&e[r].forEach(t=>{var e;null!==(e=t.target)&&void 0!==e&&e.profiles&&t.target.profiles instanceof Array&&(t.target.profiles=d(t.target.profiles))})})),e):e};function l(t){return"string"===typeof t&&t.startsWith("echotechoss://")}function o(t){if(t&&"object"===typeof t)for(const e in t)l(t[e])?t[e]=Object(n["a"])(t[e]):t instanceof Object&&o(t[e]);else if(t instanceof Array)for(let e=0;e<t.length;e++)t[e]instanceof Object?o(t[e]):l(t[e])&&(t[e]=Object(n["a"])(t[e]))}},9306:function(t,e,a){},"9ad8":function(t,e,a){"use strict";a("0b73")},a8e1:function(t,e,a){"use strict";a("d94c")},c0aa:function(t,e,a){"use strict";var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"card-container"},[e("div",{staticClass:"card-container__title"},[t._v(" "+t._s(t.title)+" ")]),e("div",{staticClass:"card-container__tags--scroll"},[e("div",{staticClass:"card-container__tags"},t._l(t.tags,(function(a,i){return e("div",{key:i,class:a.selected?"card-container__tag-item--selected":"card-container__tag-item--unselected",on:{click:function(e){return t.handleSelect(a)}}},[e("div",{staticClass:"card-container__tag-item__title"},[t._v(" "+t._s(a.name)+" ")])])})),0)]),e("div",{staticClass:"card-container__body"},[t._t("default")],2)])},s=[],r=a("2b0e");const n=Object(r["defineComponent"])({name:"MainPageCard",props:{tags:{type:Array,default:()=>[]},title:{type:String,default:""},selectType:{type:String,default:"ROLE"},type:{type:String,default:"ROLE"}},setup(t,{emit:e}){const{type:a}=Object(r["toRefs"])(t),i=t=>{e("select",{type:a.value,...t})};return{handleSelect:i}}});var d=n,l=d,o=(a("a8e1"),a("0c7c")),c=Object(o["a"])(l,i,s,!1,null,"40ba510d",null);e["a"]=c.exports},d94c:function(t,e,a){}}]);