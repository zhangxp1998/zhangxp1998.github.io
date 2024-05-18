(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b3eff84"],{"0804":function(e,t,r){"use strict";const n={1113060:"name",1475782:"unlockRegion",53188:"age",1447515:"CV",1475769:"weaponType",1475770:"magicAttribute",55407:"introduction",1475771:"mapCommandDaytime",1475772:"mapCommandNight",1475773:"ownBroughtAction",1475774:"potential",1475775:"combatSkill",1475776:"auxiliarySkill",1475777:"potentialSkill",1003410:"attribute",1475823:"skillEffect",1475778:"consumptionSP",1426392:"unlockCondition",1479131:"wayOfReceiving",1479132:"modeOfCompletion",1479133:"taskReward",1480181:"unlockingMode",1480187:"maximumHP",1480188:"maximumSP",1416073:"objectAttack",1481317:"attributeAttack",1416072:"physicalDefense",1481318:"attributeDefense",1447284:"hit",1447304:"speed",1480194:"criticalStrike",1447286:"avoid",1481311:"location",1481312:"propsHeld",1481313:"availableInformation",1481314:"aidSkills",1481315:"combatCapability",1481316:"swordsmenCanLearnSkills",10277:"gotItem",1470455:"level",53149:"weakness",1416074:"HP",1481320:"EXP",1481322:"JP",1481323:"money",50388:"region",1487492:"shieldPoints",1002048:"effect",81151:"other",1445704:"getMethod",1487502:"EXSkill",1488540:"city",1492475:"regionalPeriphery",1426387:"timeOfAppearance",1426401:"occurrenceCondition",1494748:"concert",1494749:"employmentEffect",1494750:"strength",1494751:"dropItem",1494756:"dropRate",1494758:"leafCoin",1494761:"useMoves",1454975:"totalSpent",1462189:"timesOfUse",1494762:"abnormalStateTolerance",1447282:"SP",1494757:"BP",1492484:"informationSource",1480193:"moveSpeed",1514636:"weaponShop",1514637:"weaponShopPrice",1514690:"propShop",1514691:"propShopPrice",1514708:"groceryStore",1514709:"groceryStorePrice",1514743:"guardShop",1514744:"guardShopPrice",1514747:"herbShop",1514748:"herbShopPrice",1514751:"ornamentShop",1514752:"ornamentShopPrice",1514753:"effectBBottleShop",1514754:"effectBBottleShopPrice",1514755:"elfstoneShop",1514756:"elfstoneShopPrice",1514757:"recordShop",1514758:"recordShopPrice",1514759:"prisoner",1514760:"prisonerPrice"};t["a"]=n},"0e86":function(e,t,r){"use strict";r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c}));var n=r("5184");r("0ef7");const i=n["a"]`
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
`,o=n["a"]`
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
`,s=function(e){return n["a"]`
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
  `},c=function(e){return n["a"]`
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
  `}},"604a":function(e,t,r){"use strict";r("a19e")},8073:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return u}));r("14d9");var n=r("0804"),i=r("0644"),o=r.n(i),s=r("0d94");const c=function(e){e=o()(e||[]);const t={};return Array.isArray(e)?(e.forEach((function(e){var r;const i=e.propertyId,o=n["a"][i]||i;if(t[o]){if(t[o]instanceof Array)t[o].push(e);else if(t[o]instanceof Object){const r=t[o];t[o]=[r,e]}}else t[o]=e;null!==(r=t[o].target)&&void 0!==r&&r.profiles?t[o].target.profiles=c(t[o].target.profiles):t[o]instanceof Array&&t[o].forEach(e=>{var t;null!==(t=e.target)&&void 0!==t&&t.profiles&&e.target.profiles instanceof Array&&(e.target.profiles=c(e.target.profiles))})})),t):t};function a(e){return"string"===typeof e&&e.startsWith("echotechoss://")}function u(e){if(e&&"object"===typeof e)for(const t in e)a(e[t])?e[t]=Object(s["a"])(e[t]):e instanceof Object&&u(e[t]);else if(e instanceof Array)for(let t=0;t<e.length;t++)e[t]instanceof Object?u(e[t]):a(e[t])&&(e[t]=Object(s["a"])(e[t]))}},"9dcd":function(e,t,r){var n;(function(i){"use strict";var o,s=20,c=1,a=1e6,u=1e6,f=-7,l=21,p=!1,d="[big.js] ",h=d+"Invalid ",g=h+"decimal places",m=h+"rounding mode",y=d+"Division by zero",v={},w=void 0,b=/^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;function I(){function e(t){var r=this;if(!(r instanceof e))return t===w?I():new e(t);if(t instanceof e)r.s=t.s,r.e=t.e,r.c=t.c.slice();else{if("string"!==typeof t){if(!0===e.strict&&"bigint"!==typeof t)throw TypeError(h+"value");t=0===t&&1/t<0?"-0":String(t)}P(r,t)}r.constructor=e}return e.prototype=v,e.DP=s,e.RM=c,e.NE=f,e.PE=l,e.strict=p,e.roundDown=0,e.roundHalfUp=1,e.roundHalfEven=2,e.roundUp=3,e}function P(e,t){var r,n,i;if(!b.test(t))throw Error(h+"number");for(e.s="-"==t.charAt(0)?(t=t.slice(1),-1):1,(r=t.indexOf("."))>-1&&(t=t.replace(".","")),(n=t.search(/e/i))>0?(r<0&&(r=n),r+=+t.slice(n+1),t=t.substring(0,n)):r<0&&(r=t.length),i=t.length,n=0;n<i&&"0"==t.charAt(n);)++n;if(n==i)e.c=[e.e=0];else{for(;i>0&&"0"==t.charAt(--i););for(e.e=r-n-1,e.c=[],r=0;n<=i;)e.c[r++]=+t.charAt(n++)}return e}function S(e,t,r,n){var i=e.c;if(r===w&&(r=e.constructor.RM),0!==r&&1!==r&&2!==r&&3!==r)throw Error(m);if(t<1)n=3===r&&(n||!!i[0])||0===t&&(1===r&&i[0]>=5||2===r&&(i[0]>5||5===i[0]&&(n||i[1]!==w))),i.length=1,n?(e.e=e.e-t+1,i[0]=1):i[0]=e.e=0;else if(t<i.length){if(n=1===r&&i[t]>=5||2===r&&(i[t]>5||5===i[t]&&(n||i[t+1]!==w||1&i[t-1]))||3===r&&(n||!!i[0]),i.length=t,n)for(;++i[--t]>9;)if(i[t]=0,0===t){++e.e,i.unshift(1);break}for(t=i.length;!i[--t];)i.pop()}return e}function E(e,t,r){var n=e.e,i=e.c.join(""),o=i.length;if(t)i=i.charAt(0)+(o>1?"."+i.slice(1):"")+(n<0?"e":"e+")+n;else if(n<0){for(;++n;)i="0"+i;i="0."+i}else if(n>0)if(++n>o)for(n-=o;n--;)i+="0";else n<o&&(i=i.slice(0,n)+"."+i.slice(n));else o>1&&(i=i.charAt(0)+"."+i.slice(1));return e.s<0&&r?"-"+i:i}v.abs=function(){var e=new this.constructor(this);return e.s=1,e},v.cmp=function(e){var t,r=this,n=r.c,i=(e=new r.constructor(e)).c,o=r.s,s=e.s,c=r.e,a=e.e;if(!n[0]||!i[0])return n[0]?o:i[0]?-s:0;if(o!=s)return o;if(t=o<0,c!=a)return c>a^t?1:-1;for(s=(c=n.length)<(a=i.length)?c:a,o=-1;++o<s;)if(n[o]!=i[o])return n[o]>i[o]^t?1:-1;return c==a?0:c>a^t?1:-1},v.div=function(e){var t=this,r=t.constructor,n=t.c,i=(e=new r(e)).c,o=t.s==e.s?1:-1,s=r.DP;if(s!==~~s||s<0||s>a)throw Error(g);if(!i[0])throw Error(y);if(!n[0])return e.s=o,e.c=[e.e=0],e;var c,u,f,l,p,d=i.slice(),h=c=i.length,m=n.length,v=n.slice(0,c),b=v.length,I=e,P=I.c=[],E=0,T=s+(I.e=t.e-e.e)+1;for(I.s=o,o=T<0?0:T,d.unshift(0);b++<c;)v.push(0);do{for(f=0;f<10;f++){if(c!=(b=v.length))l=c>b?1:-1;else for(p=-1,l=0;++p<c;)if(i[p]!=v[p]){l=i[p]>v[p]?1:-1;break}if(!(l<0))break;for(u=b==c?i:d;b;){if(v[--b]<u[b]){for(p=b;p&&!v[--p];)v[p]=9;--v[p],v[b]+=10}v[b]-=u[b]}for(;!v[0];)v.shift()}P[E++]=l?f:++f,v[0]&&l?v[b]=n[h]||0:v=[n[h]]}while((h++<m||v[0]!==w)&&o--);return P[0]||1==E||(P.shift(),I.e--,T--),E>T&&S(I,T,r.RM,v[0]!==w),I},v.eq=function(e){return 0===this.cmp(e)},v.gt=function(e){return this.cmp(e)>0},v.gte=function(e){return this.cmp(e)>-1},v.lt=function(e){return this.cmp(e)<0},v.lte=function(e){return this.cmp(e)<1},v.minus=v.sub=function(e){var t,r,n,i,o=this,s=o.constructor,c=o.s,a=(e=new s(e)).s;if(c!=a)return e.s=-a,o.plus(e);var u=o.c.slice(),f=o.e,l=e.c,p=e.e;if(!u[0]||!l[0])return l[0]?e.s=-a:u[0]?e=new s(o):e.s=1,e;if(c=f-p){for((i=c<0)?(c=-c,n=u):(p=f,n=l),n.reverse(),a=c;a--;)n.push(0);n.reverse()}else for(r=((i=u.length<l.length)?u:l).length,c=a=0;a<r;a++)if(u[a]!=l[a]){i=u[a]<l[a];break}if(i&&(n=u,u=l,l=n,e.s=-e.s),(a=(r=l.length)-(t=u.length))>0)for(;a--;)u[t++]=0;for(a=t;r>c;){if(u[--r]<l[r]){for(t=r;t&&!u[--t];)u[t]=9;--u[t],u[r]+=10}u[r]-=l[r]}for(;0===u[--a];)u.pop();for(;0===u[0];)u.shift(),--p;return u[0]||(e.s=1,u=[p=0]),e.c=u,e.e=p,e},v.mod=function(e){var t,r=this,n=r.constructor,i=r.s,o=(e=new n(e)).s;if(!e.c[0])throw Error(y);return r.s=e.s=1,t=1==e.cmp(r),r.s=i,e.s=o,t?new n(r):(i=n.DP,o=n.RM,n.DP=n.RM=0,r=r.div(e),n.DP=i,n.RM=o,this.minus(r.times(e)))},v.neg=function(){var e=new this.constructor(this);return e.s=-e.s,e},v.plus=v.add=function(e){var t,r,n,i=this,o=i.constructor;if(e=new o(e),i.s!=e.s)return e.s=-e.s,i.minus(e);var s=i.e,c=i.c,a=e.e,u=e.c;if(!c[0]||!u[0])return u[0]||(c[0]?e=new o(i):e.s=i.s),e;if(c=c.slice(),t=s-a){for(t>0?(a=s,n=u):(t=-t,n=c),n.reverse();t--;)n.push(0);n.reverse()}for(c.length-u.length<0&&(n=u,u=c,c=n),t=u.length,r=0;t;c[t]%=10)r=(c[--t]=c[t]+u[t]+r)/10|0;for(r&&(c.unshift(r),++a),t=c.length;0===c[--t];)c.pop();return e.c=c,e.e=a,e},v.pow=function(e){var t=this,r=new t.constructor("1"),n=r,i=e<0;if(e!==~~e||e<-u||e>u)throw Error(h+"exponent");for(i&&(e=-e);;){if(1&e&&(n=n.times(t)),e>>=1,!e)break;t=t.times(t)}return i?r.div(n):n},v.prec=function(e,t){if(e!==~~e||e<1||e>a)throw Error(h+"precision");return S(new this.constructor(this),e,t)},v.round=function(e,t){if(e===w)e=0;else if(e!==~~e||e<-a||e>a)throw Error(g);return S(new this.constructor(this),e+this.e+1,t)},v.sqrt=function(){var e,t,r,n=this,i=n.constructor,o=n.s,s=n.e,c=new i("0.5");if(!n.c[0])return new i(n);if(o<0)throw Error(d+"No square root");o=Math.sqrt(n+""),0===o||o===1/0?(t=n.c.join(""),t.length+s&1||(t+="0"),o=Math.sqrt(t),s=((s+1)/2|0)-(s<0||1&s),e=new i((o==1/0?"5e":(o=o.toExponential()).slice(0,o.indexOf("e")+1))+s)):e=new i(o+""),s=e.e+(i.DP+=4);do{r=e,e=c.times(r.plus(n.div(r)))}while(r.c.slice(0,s).join("")!==e.c.slice(0,s).join(""));return S(e,(i.DP-=4)+e.e+1,i.RM)},v.times=v.mul=function(e){var t,r=this,n=r.constructor,i=r.c,o=(e=new n(e)).c,s=i.length,c=o.length,a=r.e,u=e.e;if(e.s=r.s==e.s?1:-1,!i[0]||!o[0])return e.c=[e.e=0],e;for(e.e=a+u,s<c&&(t=i,i=o,o=t,u=s,s=c,c=u),t=new Array(u=s+c);u--;)t[u]=0;for(a=c;a--;){for(c=0,u=s+a;u>a;)c=t[u]+o[a]*i[u-a-1]+c,t[u--]=c%10,c=c/10|0;t[u]=c}for(c?++e.e:t.shift(),a=t.length;!t[--a];)t.pop();return e.c=t,e},v.toExponential=function(e,t){var r=this,n=r.c[0];if(e!==w){if(e!==~~e||e<0||e>a)throw Error(g);for(r=S(new r.constructor(r),++e,t);r.c.length<e;)r.c.push(0)}return E(r,!0,!!n)},v.toFixed=function(e,t){var r=this,n=r.c[0];if(e!==w){if(e!==~~e||e<0||e>a)throw Error(g);for(r=S(new r.constructor(r),e+r.e+1,t),e=e+r.e+1;r.c.length<e;)r.c.push(0)}return E(r,!1,!!n)},v.toJSON=v.toString=function(){var e=this,t=e.constructor;return E(e,e.e<=t.NE||e.e>=t.PE,!!e.c[0])},v.toNumber=function(){var e=Number(E(this,!0,!0));if(!0===this.constructor.strict&&!this.eq(e.toString()))throw Error(d+"Imprecise conversion");return e},v.toPrecision=function(e,t){var r=this,n=r.constructor,i=r.c[0];if(e!==w){if(e!==~~e||e<1||e>a)throw Error(h+"precision");for(r=S(new n(r),e,t);r.c.length<e;)r.c.push(0)}return E(r,e<=r.e||r.e<=n.NE||r.e>=n.PE,!!i)},v.valueOf=function(){var e=this,t=e.constructor;if(!0===t.strict)throw Error(d+"valueOf disallowed");return E(e,e.e<=t.NE||e.e>=t.PE,!0)},o=I(),o["default"]=o.Big=o,n=function(){return o}.call(t,r,t,e),void 0===n||(e.exports=n)})()},a19e:function(e,t,r){},d1bd:function(e,t,r){"use strict";var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"role-card-container"},[t("div",{staticClass:"role-card-title"},[e._v(" "+e._s(e.title)+" ")]),t("div",{staticClass:"role-card-body"},[e._t("default")],2),e.bottomTitle?t("div",{staticClass:"role-detail__top-card__description"},[e._v(" "+e._s(e.bottomTitle)+" ")]):e._e()])},i=[],o=r("2b0e");const s=Object(o["defineComponent"])({name:"DetailItemCard",props:{title:{type:String,default:""},bottomTitle:{type:String,default:""}},setup(){}});var c=s,a=c,u=(r("604a"),r("0c7c")),f=Object(u["a"])(a,n,i,!1,null,"60ae8152",null);t["a"]=f.exports}}]);