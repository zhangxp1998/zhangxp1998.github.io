(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9c2bc83c"],{"0804":function(e,t,n){"use strict";const i={1113060:"name",1475782:"unlockRegion",53188:"age",1447515:"CV",1475769:"weaponType",1475770:"magicAttribute",55407:"introduction",1475771:"mapCommandDaytime",1475772:"mapCommandNight",1475773:"ownBroughtAction",1475774:"potential",1475775:"combatSkill",1475776:"auxiliarySkill",1475777:"potentialSkill",1003410:"attribute",1475823:"skillEffect",1475778:"consumptionSP",1426392:"unlockCondition",1479131:"wayOfReceiving",1479132:"modeOfCompletion",1479133:"taskReward",1480181:"unlockingMode",1480187:"maximumHP",1480188:"maximumSP",1416073:"objectAttack",1481317:"attributeAttack",1416072:"physicalDefense",1481318:"attributeDefense",1447284:"hit",1447304:"speed",1480194:"criticalStrike",1447286:"avoid",1481311:"location",1481312:"propsHeld",1481313:"availableInformation",1481314:"aidSkills",1481315:"combatCapability",1481316:"swordsmenCanLearnSkills",10277:"gotItem",1470455:"level",53149:"weakness",1416074:"HP",1481320:"EXP",1481322:"JP",1481323:"money",50388:"region",1487492:"shieldPoints",1002048:"effect",81151:"other",1445704:"getMethod",1487502:"EXSkill",1488540:"city",1492475:"regionalPeriphery",1426387:"timeOfAppearance",1426401:"occurrenceCondition",1494748:"concert",1494749:"employmentEffect",1494750:"strength",1494751:"dropItem",1494756:"dropRate",1494758:"leafCoin",1494761:"useMoves",1454975:"totalSpent",1462189:"timesOfUse",1494762:"abnormalStateTolerance",1447282:"SP",1494757:"BP",1492484:"informationSource",1480193:"moveSpeed",1514636:"weaponShop",1514637:"weaponShopPrice",1514690:"propShop",1514691:"propShopPrice",1514708:"groceryStore",1514709:"groceryStorePrice",1514743:"guardShop",1514744:"guardShopPrice",1514747:"herbShop",1514748:"herbShopPrice",1514751:"ornamentShop",1514752:"ornamentShopPrice",1514753:"effectBBottleShop",1514754:"effectBBottleShopPrice",1514755:"elfstoneShop",1514756:"elfstoneShopPrice",1514757:"recordShop",1514758:"recordShopPrice",1514759:"prisoner",1514760:"prisonerPrice"};t["a"]=i},"463c":function(e,t,n){"use strict";n("bc3c")},6607:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"g",(function(){return u}));var i=n("0ef7");async function r(){return i["j"].get("/treasure/tags?typeIds[]=1447403&limit=100&offset=0&orderBy=nameDesc")}async function a(e){return i["j"].get("/treasure/tags",{"typeIds[]":1447399,limit:100,offset:0,orderBy:"nameDesc",andSourcePublicRelations:JSON.stringify([{sourceId:e+"",sourceType:1,propertyId:"53166"}])})}async function o(){return i["j"].get("/treasure/tags?typeIds[]=1447406&limit=100&offset=0&orderBy=nameDesc")}async function s(){return i["j"].get("/treasure/tags?typeIds[]=1447405&limit=100&offset=0&orderBy=nameDesc")}async function c(){return i["j"].get("https://config-cdn.qiandaoapp.com/plugin/fireemblem-character-guide.json")}async function l(){return i["j"].get("https://config-cdn.qiandaoapp.com/plugin/fireemblem_guide.json")}function u(e){return console.log(e),i["j"].get("/treasure/tags?limit=100&orderBy=nameDesc&offset=0"+(e.length<1?"":"&"+e.map(e=>"orIds[]="+e).join("&")))}},6836:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("14d9"),n("0804"),n("0644");var i=n("0d94");function r(e){return"string"===typeof e&&e.startsWith("echotechoss://")}function a(e){if(e&&"object"===typeof e)for(const t in e)r(e[t])?e[t]=Object(i["a"])(e[t]):e instanceof Object&&a(e[t]);else if(e instanceof Array)for(let t=0;t<e.length;t++)e[t]instanceof Object?a(e[t]):r(e[t])&&(e[t]=Object(i["a"])(e[t]))}},"6e77":function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var i=n("5184");const r=function(){return i["a"]`
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
  `},a=function(){return i["a"]`
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
  `};var o=n("f685");const s=function(){const{refetch:e}=Object(o["b"])(r(),()=>({limit:1,offset:0})),t=e=>({limit:100,offset:0,typeId:"1446267",andPublicRelations:[{sourceId:e+"",sourceType:1,propertyId:"92791"}]});return[n=>e(t(n))]},c=function(){const{refetch:e}=Object(o["b"])(r(),()=>({limit:1,offset:0})),t=e=>({limit:100,offset:0,typeId:"1447397",andPublicRelations:[{sourceId:e+"",sourceType:1,propertyId:"53166"}]});return[n=>e(t(n))]},l=function(){const{refetch:e}=Object(o["b"])(r(),()=>({limit:1,offset:0})),t={limit:100,offset:0,typeId:"1447398",andPublicRelations:[{sourceId:"1457016",sourceType:1,propertyId:"53166"}]};return[()=>e(t)]},u=function(){const{refetch:e}=Object(o["b"])(r(),()=>({limit:1,offset:0})),t=e=>({limit:100,offset:0,typeId:"1447398",andPublicRelations:[{sourceId:e+"",sourceType:1,propertyId:"1450703"},{sourceId:"1457015",sourceType:1,propertyId:"53166"}]});return[n=>e(t(n))]},d=function(){const{refetch:e}=Object(o["b"])(a(),()=>({limit:1,offset:0})),t=e=>({limit:1,offset:0,ids:e});return[n=>e(t(n))]},f=function(){const{refetch:e}=Object(o["b"])(r(),()=>({limit:1,offset:0})),t=e=>({limit:1,offset:0,ids:e});return[n=>e(t(n))]}},"7e95":function(e,t,n){"use strict";n("dc51")},"9dcd":function(e,t,n){var i;(function(r){"use strict";var a,o=20,s=1,c=1e6,l=1e6,u=-7,d=21,f=!1,g="[big.js] ",p=g+"Invalid ",m=p+"decimal places",h=p+"rounding mode",v=g+"Division by zero",b={},y=void 0,_=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function w(){function e(t){var n=this;if(!(n instanceof e))return t===y?w():new e(t);if(t instanceof e)n.s=t.s,n.e=t.e,n.c=t.c.slice();else{if("string"!==typeof t){if(!0===e.strict&&"bigint"!==typeof t)throw TypeError(p+"value");t=0===t&&1/t<0?"-0":String(t)}T(n,t)}n.constructor=e}return e.prototype=b,e.DP=o,e.RM=s,e.NE=u,e.PE=d,e.strict=f,e.roundDown=0,e.roundHalfUp=1,e.roundHalfEven=2,e.roundUp=3,e}function T(e,t){var n,i,r;if(!_.test(t))throw Error(p+"number");for(e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(n=t.indexOf("."))>-1&&(t=t.replace(".","")),(i=t.search(/e/i))>0?(n<0&&(n=i),n+=+t.slice(i+1),t=t.substring(0,i)):n<0&&(n=t.length),r=t.length,i=0;i<r&&"0"==t.charAt(i);)++i;if(i==r)e.c=[e.e=0];else{for(;r>0&&"0"==t.charAt(--r););for(e.e=n-i-1,e.c=[],n=0;i<=r;)e.c[n++]=+t.charAt(i++)}return e}function I(e,t,n,i){var r=e.c;if(n===y&&(n=e.constructor.RM),0!==n&&1!==n&&2!==n&&3!==n)throw Error(h);if(t<1)i=3===n&&(i||!!r[0])||0===t&&(1===n&&r[0]>=5||2===n&&(r[0]>5||5===r[0]&&(i||r[1]!==y))),r.length=1,i?(e.e=e.e-t+1,r[0]=1):r[0]=e.e=0;else if(t<r.length){if(i=1===n&&r[t]>=5||2===n&&(r[t]>5||5===r[t]&&(i||r[t+1]!==y||1&r[t-1]))||3===n&&(i||!!r[0]),r.length=t,i)for(;++r[--t]>9;)if(r[t]=0,0===t){++e.e,r.unshift(1);break}for(t=r.length;!r[--t];)r.pop()}return e}function S(e,t,n){var i=e.e,r=e.c.join(""),a=r.length;if(t)r=r.charAt(0)+(a>1?"."+r.slice(1):"")+(i<0?"e":"e+")+i;else if(i<0){for(;++i;)r="0"+r;r="0."+r}else if(i>0)if(++i>a)for(i-=a;i--;)r+="0";else i<a&&(r=r.slice(0,i)+"."+r.slice(i));else a>1&&(r=r.charAt(0)+"."+r.slice(1));return e.s<0&&n?"-"+r:r}b.abs=function(){var e=new this.constructor(this);return e.s=1,e},b.cmp=function(e){var t,n=this,i=n.c,r=(e=new n.constructor(e)).c,a=n.s,o=e.s,s=n.e,c=e.e;if(!i[0]||!r[0])return i[0]?a:r[0]?-o:0;if(a!=o)return a;if(t=a<0,s!=c)return s>c^t?1:-1;for(o=(s=i.length)<(c=r.length)?s:c,a=-1;++a<o;)if(i[a]!=r[a])return i[a]>r[a]^t?1:-1;return s==c?0:s>c^t?1:-1},b.div=function(e){var t=this,n=t.constructor,i=t.c,r=(e=new n(e)).c,a=t.s==e.s?1:-1,o=n.DP;if(o!==~~o||o<0||o>c)throw Error(m);if(!r[0])throw Error(v);if(!i[0])return e.s=a,e.c=[e.e=0],e;var s,l,u,d,f,g=r.slice(),p=s=r.length,h=i.length,b=i.slice(0,s),_=b.length,w=e,T=w.c=[],S=0,D=o+(w.e=t.e-e.e)+1;for(w.s=a,a=D<0?0:D,g.unshift(0);_++<s;)b.push(0);do{for(u=0;u<10;u++){if(s!=(_=b.length))d=s>_?1:-1;else for(f=-1,d=0;++f<s;)if(r[f]!=b[f]){d=r[f]>b[f]?1:-1;break}if(!(d<0))break;for(l=_==s?r:g;_;){if(b[--_]<l[_]){for(f=_;f&&!b[--f];)b[f]=9;--b[f],b[_]+=10}b[_]-=l[_]}for(;!b[0];)b.shift()}T[S++]=d?u:++u,b[0]&&d?b[_]=i[p]||0:b=[i[p]]}while((p++<h||b[0]!==y)&&a--);return T[0]||1==S||(T.shift(),w.e--,D--),S>D&&I(w,D,n.RM,b[0]!==y),w},b.eq=function(e){return 0===this.cmp(e)},b.gt=function(e){return this.cmp(e)>0},b.gte=function(e){return this.cmp(e)>-1},b.lt=function(e){return this.cmp(e)<0},b.lte=function(e){return this.cmp(e)<1},b.minus=b.sub=function(e){var t,n,i,r,a=this,o=a.constructor,s=a.s,c=(e=new o(e)).s;if(s!=c)return e.s=-c,a.plus(e);var l=a.c.slice(),u=a.e,d=e.c,f=e.e;if(!l[0]||!d[0])return d[0]?e.s=-c:l[0]?e=new o(a):e.s=1,e;if(s=u-f){for((r=s<0)?(s=-s,i=l):(f=u,i=d),i.reverse(),c=s;c--;)i.push(0);i.reverse()}else for(n=((r=l.length<d.length)?l:d).length,s=c=0;c<n;c++)if(l[c]!=d[c]){r=l[c]<d[c];break}if(r&&(i=l,l=d,d=i,e.s=-e.s),(c=(n=d.length)-(t=l.length))>0)for(;c--;)l[t++]=0;for(c=t;n>s;){if(l[--n]<d[n]){for(t=n;t&&!l[--t];)l[t]=9;--l[t],l[n]+=10}l[n]-=d[n]}for(;0===l[--c];)l.pop();for(;0===l[0];)l.shift(),--f;return l[0]||(e.s=1,l=[f=0]),e.c=l,e.e=f,e},b.mod=function(e){var t,n=this,i=n.constructor,r=n.s,a=(e=new i(e)).s;if(!e.c[0])throw Error(v);return n.s=e.s=1,t=1==e.cmp(n),n.s=r,e.s=a,t?new i(n):(r=i.DP,a=i.RM,i.DP=i.RM=0,n=n.div(e),i.DP=r,i.RM=a,this.minus(n.times(e)))},b.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e},b.plus=b.add=function(e){var t,n,i,r=this,a=r.constructor;if(e=new a(e),r.s!=e.s)return e.s=-e.s,r.minus(e);var o=r.e,s=r.c,c=e.e,l=e.c;if(!s[0]||!l[0])return l[0]||(s[0]?e=new a(r):e.s=r.s),e;if(s=s.slice(),t=o-c){for(t>0?(c=o,i=l):(t=-t,i=s),i.reverse();t--;)i.push(0);i.reverse()}for(s.length-l.length<0&&(i=l,l=s,s=i),t=l.length,n=0;t;s[t]%=10)n=(s[--t]=s[t]+l[t]+n)/10|0;for(n&&(s.unshift(n),++c),t=s.length;0===s[--t];)s.pop();return e.c=s,e.e=c,e},b.pow=function(e){var t=this,n=new t.constructor("1"),i=n,r=e<0;if(e!==~~e||e<-l||e>l)throw Error(p+"exponent");for(r&&(e=-e);;){if(1&e&&(i=i.times(t)),e>>=1,!e)break;t=t.times(t)}return r?n.div(i):i},b.prec=function(e,t){if(e!==~~e||e<1||e>c)throw Error(p+"precision");return I(new this.constructor(this),e,t)},b.round=function(e,t){if(e===y)e=0;else if(e!==~~e||e<-c||e>c)throw Error(m);return I(new this.constructor(this),e+this.e+1,t)},b.sqrt=function(){var e,t,n,i=this,r=i.constructor,a=i.s,o=i.e,s=new r("0.5");if(!i.c[0])return new r(i);if(a<0)throw Error(g+"No square root");a=Math.sqrt(i+""),0===a||a===1/0?(t=i.c.join(""),t.length+o&1||(t+="0"),a=Math.sqrt(t),o=((o+1)/2|0)-(o<0||1&o),e=new r((a==1/0?"5e":(a=a.toExponential()).slice(0,a.indexOf("e")+1))+o)):e=new r(a+""),o=e.e+(r.DP+=4);do{n=e,e=s.times(n.plus(i.div(n)))}while(n.c.slice(0,o).join("")!==e.c.slice(0,o).join(""));return I(e,(r.DP-=4)+e.e+1,r.RM)},b.times=b.mul=function(e){var t,n=this,i=n.constructor,r=n.c,a=(e=new i(e)).c,o=r.length,s=a.length,c=n.e,l=e.e;if(e.s=n.s==e.s?1:-1,!r[0]||!a[0])return e.c=[e.e=0],e;for(e.e=c+l,o<s&&(t=r,r=a,a=t,l=o,o=s,s=l),t=new Array(l=o+s);l--;)t[l]=0;for(c=s;c--;){for(s=0,l=o+c;l>c;)s=t[l]+a[c]*r[l-c-1]+s,t[l--]=s%10,s=s/10|0;t[l]=s}for(s?++e.e:t.shift(),c=t.length;!t[--c];)t.pop();return e.c=t,e},b.toExponential=function(e,t){var n=this,i=n.c[0];if(e!==y){if(e!==~~e||e<0||e>c)throw Error(m);for(n=I(new n.constructor(n),++e,t);n.c.length<e;)n.c.push(0)}return S(n,!0,!!i)},b.toFixed=function(e,t){var n=this,i=n.c[0];if(e!==y){if(e!==~~e||e<0||e>c)throw Error(m);for(n=I(new n.constructor(n),e+n.e+1,t),e=e+n.e+1;n.c.length<e;)n.c.push(0)}return S(n,!1,!!i)},b.toJSON=b.toString=function(){var e=this,t=e.constructor;return S(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])},b.toNumber=function(){var e=Number(S(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(e.toString()))throw Error(g+"Imprecise conversion");return e},b.toPrecision=function(e,t){var n=this,i=n.constructor,r=n.c[0];if(e!==y){if(e!==~~e||e<1||e>c)throw Error(p+"precision");for(n=I(new i(n),e,t);n.c.length<e;)n.c.push(0)}return S(n,e<=n.e||n.e<=i.NE||n.e>=i.PE,!!r)},b.valueOf=function(){var e=this,t=e.constructor;if(!0===t.strict)throw Error(g+"valueOf disallowed");return S(e,e.e<=t.NE||e.e>=t.PE,!0)},a=w(),a["default"]=a.Big=a,i=function(){return a}.call(t,n,t,e),void 0===i||(e.exports=i)})()},bc3c:function(e,t,n){},dc51:function(e,t,n){},dce2:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"container"},[t("div",{staticClass:"container__top-tags",attrs:{id:"top-tag"}},[t("van-tabs",{attrs:{color:"#7D66FF"},on:{change:e.handleSelectTab},model:{value:e.currentSelectedTab,callback:function(t){e.currentSelectedTab=t},expression:"currentSelectedTab"}},e._l(e.tabs,(function(e,n){return t("van-tab",{key:n,attrs:{title:e}})})),1)],1),t("div",{staticClass:"fire-emblem-engage__cards"},[t("div",{staticClass:"card-container",attrs:{id:"0"}},[t("main-page-card",{attrs:{title:"攻略&交流"}},[t("div",{staticClass:"fire-emblem-engage__guideline"},[t("div",{staticClass:"fire-emblem-engage__type-tag",on:{click:e.goToGuidelines}},[t("div",{staticClass:"fire-emblem-engage__type-tag__title"},[e._v("攻略合集")])]),t("div",{staticClass:"fire-emblem-engage__type-tag",on:{click:e.toIsland}},[t("div",{staticClass:"fire-emblem-engage__type-tag__title"},[e._v("玩家交流")])])])])],1),t("div",{staticClass:"card-container",attrs:{id:"1"}},[t("main-page-card",{attrs:{title:"角色",type:"roles",tags:e.renderData.rolesTags,selectType:e.selectType},on:{select:e.handleSelect}},[t("div",{staticClass:"fire-emblem-engage__role-container"},e._l(e.renderData.rolesData,(function(n,i){return t("div",{key:i,staticClass:"fire-emblem-engage__role-item",on:{click:function(t){return e.goToRoleDetails(n)}}},[t("div",{staticClass:"fire-emblem-engage__role__logo"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.images.cover,expression:"item.images.cover"}],staticStyle:{"object-fit":"cover"},attrs:{alt:"",width:"100%",height:"100%"}})]),t("div",{staticClass:"fire-emblem-engage__role__title"},[e._v(" "+e._s(n.name)+" ")])])})),0)])],1),t("div",{staticClass:"card-container",attrs:{id:"2"}},[t("main-page-card",{attrs:{title:"兵种",type:"occupation",tags:e.renderData.occupationTags,selectType:e.selectType},on:{select:e.handleSelect}},[t("div",{staticClass:"fire-emblem-engage__occupation-container"},e._l(e.renderData.occupationData,(function(n,i){return t("div",{key:i,staticClass:"fire-emblem-engage__occupation-item",on:{click:function(t){return e.goToArmyDetails(n)}}},[t("div",{staticClass:"fire-emblem-engage__occupation__logo"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.images.logo,expression:"item.images.logo"}],attrs:{alt:"",width:"100%",height:"100%"}})]),t("div",{staticClass:"fire-emblem-engage__occupation__title"},[e._v(" "+e._s(n.name)+" ")])])})),0)])],1),t("div",{staticClass:"card-container",attrs:{id:"3"}},[t("main-page-card",{attrs:{type:"ringWenzhangshi",title:"纹章士戒指",selectType:e.selectType},on:{select:e.handleSelect}},[t("div",{staticClass:"fire-emblem-engage__role-container"},e._l(e.renderData.ringWenzhangshiData,(function(n,i){return t("div",{key:i,staticClass:"fire-emblem-engage__role-item",on:{click:function(t){return e.goToRingDetail(n)}}},[t("div",{staticClass:"fire-emblem-engage__role__logo"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.images.cover,expression:"item.images.cover"}],staticStyle:{"object-fit":"cover"},attrs:{alt:"",width:"100%",height:"100%"}})]),t("div",{staticClass:"fire-emblem-engage__role__title"},[e._v(" "+e._s(n.name)+" ")])])})),0)])],1),t("div",{staticClass:"card-container",attrs:{id:"4"}},[t("main-page-card",{attrs:{type:"ringQianban",title:"牵绊戒指",tags:e.renderData.ringQianbanTags,selectType:e.selectType},on:{select:e.handleSelect}},[t("div",{staticClass:"fire-emblem-engage__occupation-container"},e._l(e.renderData.ringQianbanData,(function(n,i){return t("div",{key:i,staticClass:"fire-emblem-engage__occupation-item",on:{click:function(t){return e.goToRingDetail(n)}}},[t("div",{staticClass:"fire-emblem-engage__occupation__logo"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.images.cover,expression:"item.images.cover"}],attrs:{alt:"",width:"100%",height:"100%"}})]),t("div",{staticClass:"fire-emblem-engage__occupation__title"},[e._v(" "+e._s(n.name)+" ")])])})),0)])],1),t("div",{staticClass:"card-container",attrs:{id:"5"}},[t("main-page-card",{attrs:{title:"武器道具",type:"weapon",tags:e.renderData.weaponTags,selectType:e.selectType},on:{select:e.handleSelect}},[t("div",{staticClass:"fire-emblem-engage__occupation-container"},e._l(e.renderData.weaponData,(function(n,i){return t("div",{key:i,staticClass:"fire-emblem-engage__occupation-item",on:{click:function(t){return e.goToWeaponDetail(n)}}},[t("div",{staticClass:"fire-emblem-engage__occupation__logo"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.images.cover,expression:"item.images.cover"}],attrs:{alt:"",width:"100%",height:"100%"}})]),t("div",{staticClass:"fire-emblem-engage__occupation__title"},[e._v(" "+e._s(n.name)+" ")])])})),0)])],1)])])},r=[],a=(n("e7e5"),n("d399")),o=(n("bda7"),n("5e46")),s=(n("da3c"),n("0b33")),c=n("2b0e"),l=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"card-container"},[t("div",{staticClass:"card-container__title"},[e._v(" "+e._s(e.title)+" ")]),t("div",{staticClass:"card-container__tags--scroll"},[t("div",{staticClass:"card-container__tags"},e._l(e.tags,(function(n,i){return t("div",{key:i,class:n.selected?"card-container__tag-item--selected":"card-container__tag-item--unselected",on:{click:function(t){return e.handleSelect(n)}}},[t("div",{staticClass:"card-container__tag-item__title"},[e._v(" "+e._s(n.name)+" ")])])})),0)]),t("div",{staticClass:"card-container__body"},[e._t("default")],2)])},u=[];const d=Object(c["defineComponent"])({name:"MainPageCard",props:{tags:{type:Array,default:()=>[]},title:{type:String,default:""},selectType:{type:String,default:"ROLE"},type:{type:String,default:"ROLE"}},setup(e,{emit:t}){const{type:n}=Object(c["toRefs"])(e),i=e=>{t("select",{type:n.value,...e})};return{handleSelect:i}}});var f=d,g=f,p=(n("7e95"),n("0c7c")),m=Object(p["a"])(g,l,u,!1,null,"179fc709",null),h=m.exports;const v=["攻略","角色","兵种","纹章士戒指","牵绊戒指","武器道具"];var b=n("6607"),y=n("2e3f"),_=n("0644"),w=n.n(_),T=n("1816"),I=n.n(T),S=n("9dcd"),D=n.n(S),C=n("6e77"),j=n("6836");const P=[1457008,1457014,1467439];let O=0;const k=Object(c["defineComponent"])({name:"fireEmblemEngage",components:{MainPageCard:h,VanTab:s["a"],VanTabs:o["a"]},activated(){console.log(O),Promise.resolve().then(()=>{window.scrollTo({top:O})})},beforeRouteEnter(e,t,n){O=t.meta.scrollTop||0,n()},beforeRouteLeave(e,t,n){e.meta.scrollTop=O,n()},data(){return{scrollTop:0}},mounted(){window.addEventListener("scroll",e=>{O=window.scrollY})},setup(e){console.log(location.origin);const t=Object(c["ref"])(0),n=Object(c["ref"])("ROLE"),i=Object(c["ref"])({rolesTags:[],rolesData:[],occupationTags:[],occupationData:[],weaponTags:[],weaponData:[],magicTags:[],magicData:[],recordTags:[],recordData:[],specialEffectTags:[],specialEffectData:[],ringWenzhangshiTags:[],ringWenzhangshiData:[],ringQianbanData:[],ringQianbanTags:[],handledTags:[],handleData:[],materialTags:[],materialData:[]}),[r]=Object(C["d"])(),[o]=Object(C["e"])(),[s]=Object(C["f"])(),[l]=Object(C["b"])();Object(c["onMounted"])(()=>{z(),Promise.all([d(),m(),f(),_()]).then(()=>Promise.all([h(),g(),p(),T(),S()])).finally(()=>{U()})});const u={rolesData:h,occupationData:g,weaponData:p,ringWenzhangshiData:S,ringQianbanData:T};function d(){const e=[{name:"初级兵种",id:1461151,selected:!0},{name:"高级兵种",id:1461152,selected:!1},{name:"特殊兵种",id:1466115,selected:!1}];i.value.occupationTags=e}function f(){return Object(b["f"])().then(e=>{let{rows:t}=e;t||(t=[]),i.value.weaponTags=t.sort((e,t)=>new D.a(e.id).minus(new D.a(t.id)).toNumber()).map((e,t)=>({selected:0===t,...e}))})}function g(){var e;const t=null===(e=i.value.occupationTags.find(e=>e.selected))||void 0===e?void 0:e.id;if(t)return Object(b["b"])(t).then(e=>{let{rows:t}=e;t||(t=[]),i.value.occupationData=t.sort((e,t)=>new D.a(e.id).minus(new D.a(t.id)).toNumber())})}function p(){var e;const t=null===(e=i.value.weaponTags.find(e=>e.selected))||void 0===e?void 0:e.id;if(t)return o(t).then(e=>{const{list:t=[]}=e.data.spus,n=w()(t).sort((e,t)=>new D.a(e.id).minus(new D.a(t.id)).toNumber());Object(j["a"])(n),console.log(n),i.value.weaponData=n})}const m=()=>Object(b["e"])().then(e=>{let{rows:t}=e;t||(t=[]),i.value.rolesTags=t.sort((e,t)=>Number(e.id)-Number(t.id)).map((e,t)=>({selected:0===t,...e}))});function h(){var e;const t=null===(e=i.value.rolesTags.find(e=>e.selected))||void 0===e?void 0:e.id;if(t)return r(t).then(e=>{const{list:t=[]}=e.data.spus,n=w()(t).sort((e,t)=>new D.a(e.id).minus(new D.a(t.id)).toNumber());Object(j["a"])(n),i.value.rolesData=n})}function _(){return Object(b["c"])().then(e=>{let{rows:t}=e;t||(t=[]),i.value.ringQianbanTags=t.sort((e,t)=>new D.a(e.id).minus(new D.a(t.id)).toNumber()).filter(e=>P.every(t=>t!==e.id)).map((e,t)=>({selected:0===t,...e}))})}function T(){var e;const t=null===(e=i.value.ringQianbanTags.find(e=>e.selected))||void 0===e?void 0:e.id;if(t)return l(t).then(e=>{const{list:t=[]}=e.data.spus,n=w()(t).sort((e,t)=>new D.a(e.id).minus(new D.a(t.id)).toNumber()).map(e=>({...e,kind:"qianban"}));Object(j["a"])(n),i.value.ringQianbanData=n})}function S(){return s().then(e=>{const{list:t=[]}=e.data.spus;let n=w()(t).sort((e,t)=>new D.a(e.id).minus(new D.a(t.id)).toNumber());Object(j["a"])(n),n=n.map(e=>({...e,kind:"wenzhangshi"})),i.value.ringWenzhangshiData=n})}const O=async e=>{z();const{id:t,type:n}=e,r=n+"Tags",a=n+"Data";let o=i.value[r];o=o.map(e=>({...e,selected:!1})).map(e=>({...e,selected:e.id===t})),i.value[r]=o,u[a]&&await u[a](),U()},k=()=>{const e=document.getElementById(t.value),n=document.getElementById("top-tag"),i=n.clientHeight,r=e.getBoundingClientRect(),a=r.top+window.scrollY-i;window.scrollTo({top:a,behavior:"smooth"})},E=()=>{Object(y["a"])("/modules/pages/web-view/index?pn=engage_gonglue")},R=e=>{var t;console.log(location.origin);const n=null===(t=i.value.rolesTags.find(e=>e.selected))||void 0===t?void 0:t.id,r=I()(location.origin+"/plugin/fire-emblem-engage/role-detail",!0);r.query={id:e.id,tagId:n,name:e.name};const a=encodeURIComponent(r.toString()),o="/modules/pages/web-view/index?url="+a;Object(y["a"])(o)},$=e=>{const t=I()(location.origin+"/plugin/fire-emblem-engage/army-detail",!0);t.query={name:e.name,id:e.id};const n=encodeURIComponent(t.toString()),i="/modules/pages/web-view/index?url="+n;Object(y["a"])(i)};function x(e){const t=I()(location.origin+"/plugin/fire-emblem-engage/ring-detail",!0);t.query={kind:e.kind,targetId:e.id,name:e.name};const n=encodeURIComponent(t.toString()),i="/modules/pages/web-view/index?url="+n;Object(y["a"])(i)}function N(e){var t;const n=null===(t=i.value.weaponTags.find(e=>e.selected))||void 0===t?void 0:t.id,r=I()(location.origin+"/plugin/fire-emblem-engage/weapon-detail",!0);r.query={targetId:e.id,tagId:n,name:e.name};const a=encodeURIComponent(r.toString()),o="/modules/pages/web-view/index?url="+a;Object(y["a"])(o)}function B(){Object(y["a"])("https://qiandao.cn/pages-market/island/index?id=300217")}const q=e=>{t.value=e,k()},z=()=>{a["a"].loading({duration:0,message:"请稍等..."})},U=()=>{a["a"].clear()};return{currentSelectedTab:t,tabs:v,handleSelectTab:q,renderData:i,goToGuidelines:E,goToRoleDetails:R,selectType:n,handleSelect:O,toIsland:B,goToArmyDetails:$,goToRingDetail:x,goToWeaponDetail:N}}});var E=k,R=E,$=(n("463c"),Object(p["a"])(R,i,r,!1,null,"17a83d06",null));t["default"]=$.exports}}]);