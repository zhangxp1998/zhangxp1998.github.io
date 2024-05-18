(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fe3792c"],{"0804":function(e,t,i){"use strict";const r={1113060:"name",1475782:"unlockRegion",53188:"age",1447515:"CV",1475769:"weaponType",1475770:"magicAttribute",55407:"introduction",1475771:"mapCommandDaytime",1475772:"mapCommandNight",1475773:"ownBroughtAction",1475774:"potential",1475775:"combatSkill",1475776:"auxiliarySkill",1475777:"potentialSkill",1003410:"attribute",1475823:"skillEffect",1475778:"consumptionSP",1426392:"unlockCondition",1479131:"wayOfReceiving",1479132:"modeOfCompletion",1479133:"taskReward",1480181:"unlockingMode",1480187:"maximumHP",1480188:"maximumSP",1416073:"objectAttack",1481317:"attributeAttack",1416072:"physicalDefense",1481318:"attributeDefense",1447284:"hit",1447304:"speed",1480194:"criticalStrike",1447286:"avoid",1481311:"location",1481312:"propsHeld",1481313:"availableInformation",1481314:"aidSkills",1481315:"combatCapability",1481316:"swordsmenCanLearnSkills",10277:"gotItem",1470455:"level",53149:"weakness",1416074:"HP",1481320:"EXP",1481322:"JP",1481323:"money",50388:"region",1487492:"shieldPoints",1002048:"effect",81151:"other",1445704:"getMethod",1487502:"EXSkill",1488540:"city",1492475:"regionalPeriphery",1426387:"timeOfAppearance",1426401:"occurrenceCondition",1494748:"concert",1494749:"employmentEffect",1494750:"strength",1494751:"dropItem",1494756:"dropRate",1494758:"leafCoin",1494761:"useMoves",1454975:"totalSpent",1462189:"timesOfUse",1494762:"abnormalStateTolerance",1447282:"SP",1494757:"BP",1492484:"informationSource",1480193:"moveSpeed",1514636:"weaponShop",1514637:"weaponShopPrice",1514690:"propShop",1514691:"propShopPrice",1514708:"groceryStore",1514709:"groceryStorePrice",1514743:"guardShop",1514744:"guardShopPrice",1514747:"herbShop",1514748:"herbShopPrice",1514751:"ornamentShop",1514752:"ornamentShopPrice",1514753:"effectBBottleShop",1514754:"effectBBottleShopPrice",1514755:"elfstoneShop",1514756:"elfstoneShopPrice",1514757:"recordShop",1514758:"recordShopPrice",1514759:"prisoner",1514760:"prisonerPrice"};t["a"]=r},"244a":function(e,t,i){"use strict";i("67cb")},6607:function(e,t,i){"use strict";i.d(t,"e",(function(){return n})),i.d(t,"b",(function(){return a})),i.d(t,"f",(function(){return o})),i.d(t,"c",(function(){return l})),i.d(t,"d",(function(){return c})),i.d(t,"a",(function(){return s})),i.d(t,"g",(function(){return d}));var r=i("0ef7");async function n(){return r["j"].get("/treasure/tags?typeIds[]=1447403&limit=100&offset=0&orderBy=nameDesc")}async function a(e){return r["j"].get("/treasure/tags",{"typeIds[]":1447399,limit:100,offset:0,orderBy:"nameDesc",andSourcePublicRelations:JSON.stringify([{sourceId:e+"",sourceType:1,propertyId:"53166"}])})}async function o(){return r["j"].get("/treasure/tags?typeIds[]=1447406&limit=100&offset=0&orderBy=nameDesc")}async function l(){return r["j"].get("/treasure/tags?typeIds[]=1447405&limit=100&offset=0&orderBy=nameDesc")}async function c(){return r["j"].get("https://config-cdn.qiandaoapp.com/plugin/fireemblem-character-guide.json")}async function s(){return r["j"].get("https://config-cdn.qiandaoapp.com/plugin/fireemblem_guide.json")}function d(e){return console.log(e),r["j"].get("/treasure/tags?limit=100&orderBy=nameDesc&offset=0"+(e.length<1?"":"&"+e.map(e=>"orIds[]="+e).join("&")))}},"67cb":function(e,t,i){},6836:function(e,t,i){"use strict";i.d(t,"a",(function(){return a}));i("14d9"),i("0804"),i("0644");var r=i("0d94");function n(e){return"string"===typeof e&&e.startsWith("echotechoss://")}function a(e){if(e&&"object"===typeof e)for(const t in e)n(e[t])?e[t]=Object(r["a"])(e[t]):e instanceof Object&&a(e[t]);else if(e instanceof Array)for(let t=0;t<e.length;t++)e[t]instanceof Object?a(e[t]):n(e[t])&&(e[t]=Object(r["a"])(e[t]))}},"6e77":function(e,t,i){"use strict";i.d(t,"d",(function(){return l})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return s})),i.d(t,"b",(function(){return d})),i.d(t,"a",(function(){return u})),i.d(t,"c",(function(){return p}));var r=i("5184");const n=function(){return r["a"]`
    query querySPUS(
      $orderBy: String
      $limit: UInt64!
      $offset: UInt64!
      $name: String
      $andPublicRelations: [AndPublicRelations!]
      $typeId: UInt64
      $ids: [UInt64!]
    ) {
      spus(
        spuQueryParam: {
          orderBy: $orderBy
          limit: $limit
          offset: $offset
          name: $name
          andPublicRelations: $andPublicRelations
          typeId: $typeId
          ids: $ids
        }
      ) {
        list {
          name
          id
          images {
            cover
            HDs
            officials
            whiteBgPng
            animation
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
  `},a=function(){return r["a"]`
    query queryTag(
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
  `};var o=i("f685");const l=function(){const{refetch:e}=Object(o["b"])(n(),()=>({limit:1,offset:0})),t=e=>({limit:100,offset:0,typeId:"1446267",andPublicRelations:[{sourceId:e+"",sourceType:1,propertyId:"92791"}]});return[i=>e(t(i))]},c=function(){const{refetch:e}=Object(o["b"])(n(),()=>({limit:1,offset:0})),t=e=>({limit:100,offset:0,typeId:"1447397",andPublicRelations:[{sourceId:e+"",sourceType:1,propertyId:"53166"}]});return[i=>e(t(i))]},s=function(){const{refetch:e}=Object(o["b"])(n(),()=>({limit:1,offset:0})),t={limit:100,offset:0,typeId:"1447398",andPublicRelations:[{sourceId:"1457016",sourceType:1,propertyId:"53166"}]};return[()=>e(t)]},d=function(){const{refetch:e}=Object(o["b"])(n(),()=>({limit:1,offset:0})),t=e=>({limit:100,offset:0,typeId:"1447398",andPublicRelations:[{sourceId:e+"",sourceType:1,propertyId:"1450703"},{sourceId:"1457015",sourceType:1,propertyId:"53166"}]});return[i=>e(t(i))]},u=function(){const{refetch:e}=Object(o["b"])(a(),()=>({limit:1,offset:0})),t=e=>({limit:1,offset:0,ids:e});return[i=>e(t(i))]},p=function(){const{refetch:e}=Object(o["b"])(n(),()=>({limit:1,offset:0})),t=e=>({limit:1,offset:0,ids:e});return[i=>e(t(i))]}},"720c":function(e,t,i){"use strict";i("8236")},8236:function(e,t,i){},a6f5:function(e,t,i){"use strict";i.r(t);var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"role-detail-container"},[t("div",{staticClass:"role-detail__top-card"},[t("base-info",{attrs:{"role-info":e.roleInfo,"render-data":e.renderData}}),t("div",{staticClass:"role-detail__top-card__divider"}),t("div",{staticClass:"role-detail__top-card__description",staticStyle:{"white-space":"pre-wrap"}},[e._v(" "+e._s(e.renderData.introduction)+" ")]),t("img",{attrs:{src:"https://cdn.qiandaoapp.com/interior/images/b24955af0fca06f83b2d2ac6d7e3f7f7.png",width:"100%"}})],1),t("div",{staticClass:"role-data"})])])},n=[],a=(i("e7e5"),i("d399")),o=i("2b0e"),l=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"role-detail__top-card__base-info"},[e.roleInfo.image?t("div",{staticClass:"role-detail__base-info__image"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.roleInfo.image,expression:"roleInfo.image"}],staticStyle:{"object-fit":"cover"},attrs:{alt:"",width:"100%",height:"100%"}})]):e._e(),t("div",{staticClass:"role-detail__base-info__texts"},[t("div",{staticClass:"role-detail__base-info__title"},[e._v(" "+e._s(e.roleInfo.name.split("/")[0])+" ")]),t("div",{staticClass:"role-detail__base-info__details"},[t("div",{staticClass:"role-detail__base-info__detail-item"},[t("div",{staticClass:"role-detail__base-info__detail-item__label"},[e._v("类型:")]),t("div",{staticClass:"role-detail__base-info__detail-item__value"},[e._v(" "+e._s(e.renderData.type)+" ")])])])])])},c=[];const s=Object(o["defineComponent"])({name:"BaseInfo",props:{roleInfo:{type:Object,default:()=>({})},renderData:{type:Object,default:()=>({})}},setup(e){}});var d=s,u=d,p=(i("720c"),i("0c7c")),f=Object(p["a"])(u,l,c,!1,null,"46aadb97",null),m=f.exports,y=i("a18c"),g=i("6607"),_=i("e49f"),v=i("2e3f"),b=i("6e77"),h=i("0644"),I=i.n(h),S=i("6836");const P=Object(o["defineComponent"])({name:"SpecialSkillDetail",components:{BaseInfo:m},setup(e){const t=Object(o["ref"])({}),i=y["a"].currentRoute.query;i&&(t.value=i);const r=Object(o["ref"])({}),n=Object(o["ref"])([]),[l]=Object(b["a"])(),c=()=>{a["a"].loading({duration:0,message:"请稍等..."})},s=()=>{a["a"].clear()};Object(o["onMounted"])(()=>{p(),u()});const d=e=>{e&&Object(v["a"])(e.url)};function u(){Object(g["d"])().then(e=>{const i=e.character||[],r=i.filter(e=>e[t.value.id]);if(r.length>0){const e=r[0][t.value.id];n.value=e}})}function p(){c();const e=t.value.skillId;if(!e)return s();l(e).then(e=>{const i=I()(e.data.tags.list[0]);Object(S["a"])(i);const n={name:i.name,image:i.images.logo};t.value=n;const a=i.profiles;if(console.log(i),a.length>0){const e={};a.forEach(t=>{e[_["a"][t.propertyId]]=t.dataValue}),r.value=e,console.log(r.value)}}).finally(()=>{s()})}return{roleInfo:t,renderData:r,handleSwitch:d,renderList:n}}});var k=P,C=k,j=(i("244a"),Object(p["a"])(C,r,n,!1,null,"2eca594a",null));t["default"]=j.exports},e49f:function(e,t,i){"use strict";const r={92791:"country",1447515:"CV",53120:"sex",53190:"height",53188:"age",53187:"birthday",55407:"introduction",1447356:"initialOccupation",1447280:"physique",1447320:"physiqueFull",1453898:"physiquePercent",1454956:"physiqueCorrection",1447282:"SP",1419973:"weaponPower",1416073:"objectAttack",1447366:"magicAttack",1447284:"hit",1447286:"avoid",1447288:"kill",1447290:"mustAvoid",1447368:"effect",1447370:"shotLength",1447516:"revert",1447372:"requirement",1416074:"HP",1447292:"HPFull",1447318:"HPPercent",1448526:"HPCorrection",1116764:"power",1447294:"powerFull",1447358:"powerPercent",1448530:"powerCorrection",1447296:"magic",1447298:"magicFull",1447360:"magicPercent",1448534:"magicCorrection",1447300:"skill",1447302:"skillFull",1447509:"skillPercent",1448542:"skillCorrection",1447304:"speed",1447306:"speedFull",1447510:"speedPercent",1448571:"speedCorrection",1120295:"lucky",1447308:"luckyFull",1447511:"luckyPercent",1448546:"luckyCorrection",1447310:"prevent",1447312:"preventFull",1447512:"preventPercent",1448550:"preventCorrection",1447314:"magicPrevent",1447316:"magicPreventFull",1447513:"magicPreventPercent",1448554:"magicPreventCorrection",1436267:"sum",1447322:"sumFull",1288439:"sumPercent",1447324:"swordsManship",1447334:"marksManship",1447326:"axology",1447336:"archery",1447362:"dagger",1447330:"magicBook",1447332:"scepter",1447328:"fighting",1447346:"specialSkill",1447386:"fightStyle",1447278:"move",53166:"type",1447388:"transferLevelRequirement",1447390:"transferQualificationRequirement",1447392:"transferMaterial",1448558:"learnableSkill_5",1448560:"learnableSkill_10",1448562:"learnableSkill_15",1448564:"learnableSkill_20",1448566:"learnableSkill_25",1448568:"learnableSkill_30",1447338:"skillIntroduction",1447344:"specialSkillArmy",1450703:"heraldry",1447342:"specialSkillExtend",1447378:"syncSpecialEffect",1447380:"combineWeapon",1447382:"combineSpecialEffect",1447384:"combineSkill",1445704:"getMethod",1447374:"price",1447376:"specialEffect",1452804:"HP_C",1452806:"power_C",1452808:"skill_C",1452810:"speed_C",1452812:"lucky_C",1452814:"prevent_C",1452816:"magic_C",1452818:"magicPrevent_C",1452820:"physique_C",1452822:"HP_B",1452824:"power_B",1452826:"skill_B",1452828:"speed_B",1452830:"lucky_B",1452832:"prevent_B",1452834:"magic_B",1452836:"magicPrevent_B",1452838:"physique_B",1452840:"HP_A",1452842:"power_A",1452844:"skill_A",1452846:"speed_A",1452848:"lucky_A",1452850:"prevent_A",1452852:"magic_A",1452854:"magicPrevent_A",1452856:"physique_A",1452858:"HP_S",1452860:"power_S",1452862:"skill_S",1452864:"speed_S",1452866:"lucky_S",1452868:"prevent_S",1452870:"magic_S",1452872:"magicPrevent_S",1452874:"physique_S",1447276:"naturalAptitude",1461147:"subQualification",1453899:"joinMethod",1462185:"typeOfArmyInRole",1462189:"weaponUseTimes",1462190:"weaponLevel",1203785:"weaponWeight",1462209:"ringEffect",1463219:"lv1",1463221:"lv2",1463223:"lv3",1463225:"lv4",1463227:"lv5",1463229:"lv6",1463231:"lv7",1463233:"lv8",1463235:"lv9",1463237:"lv10",1463239:"lv11",1463241:"lv12",1463243:"lv13",1463245:"lv14",1463247:"lv15",1463249:"lv16",1463251:"lv17",1463253:"lv18",1463255:"lv19",1463257:"lv20",1467453:"lv21",1467349:"equipmentIntroduction",1470450:"lovedPresent",1470451:"hatedPresent",1470452:"supportingPartner",1470453:"supportCapabilityUp",1481346:"suggestedCollocation",1481347:"fitForOccupation",1481348:"inheritableSkill",1518025:"dragonStone",1518026:"shell"};t["a"]=r}}]);