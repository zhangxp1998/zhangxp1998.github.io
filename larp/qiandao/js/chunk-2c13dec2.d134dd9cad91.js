(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-2c13dec2"],
  {
    "0804": function (e, t, a) {
      "use strict";
      const i = {
        1113060: "name",
        1475782: "unlockRegion",
        53188: "age",
        1447515: "CV",
        1475769: "weaponType",
        1475770: "magicAttribute",
        55407: "introduction",
        1475771: "mapCommandDaytime",
        1475772: "mapCommandNight",
        1475773: "ownBroughtAction",
        1475774: "potential",
        1475775: "combatSkill",
        1475776: "auxiliarySkill",
        1475777: "potentialSkill",
        1003410: "attribute",
        1475823: "skillEffect",
        1475778: "consumptionSP",
        1426392: "unlockCondition",
        1479131: "wayOfReceiving",
        1479132: "modeOfCompletion",
        1479133: "taskReward",
        1480181: "unlockingMode",
        1480187: "maximumHP",
        1480188: "maximumSP",
        1416073: "objectAttack",
        1481317: "attributeAttack",
        1416072: "physicalDefense",
        1481318: "attributeDefense",
        1447284: "hit",
        1447304: "speed",
        1480194: "criticalStrike",
        1447286: "avoid",
        1481311: "location",
        1481312: "propsHeld",
        1481313: "availableInformation",
        1481314: "aidSkills",
        1481315: "combatCapability",
        1481316: "swordsmenCanLearnSkills",
        10277: "gotItem",
        1470455: "level",
        53149: "weakness",
        1416074: "HP",
        1481320: "EXP",
        1481322: "JP",
        1481323: "money",
        50388: "region",
        1487492: "shieldPoints",
        1002048: "effect",
        81151: "other",
        1445704: "getMethod",
        1487502: "EXSkill",
        1488540: "city",
        1492475: "regionalPeriphery",
        1426387: "timeOfAppearance",
        1426401: "occurrenceCondition",
        1494748: "concert",
        1494749: "employmentEffect",
        1494750: "strength",
        1494751: "dropItem",
        1494756: "dropRate",
        1494758: "leafCoin",
        1494761: "useMoves",
        1454975: "totalSpent",
        1462189: "timesOfUse",
        1494762: "abnormalStateTolerance",
        1447282: "SP",
        1494757: "BP",
        1492484: "informationSource",
        1480193: "moveSpeed",
        1514636: "weaponShop",
        1514637: "weaponShopPrice",
        1514690: "propShop",
        1514691: "propShopPrice",
        1514708: "groceryStore",
        1514709: "groceryStorePrice",
        1514743: "guardShop",
        1514744: "guardShopPrice",
        1514747: "herbShop",
        1514748: "herbShopPrice",
        1514751: "ornamentShop",
        1514752: "ornamentShopPrice",
        1514753: "effectBBottleShop",
        1514754: "effectBBottleShopPrice",
        1514755: "elfstoneShop",
        1514756: "elfstoneShopPrice",
        1514757: "recordShop",
        1514758: "recordShopPrice",
        1514759: "prisoner",
        1514760: "prisonerPrice",
      };
      t["a"] = i;
    },
    "1fec": function (e, t, a) {},
    "26f13": function (e, t, a) {
      "use strict";
      a("1fec");
    },
    3114: function (e, t, a) {
      "use strict";
      var i = function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("div", { staticClass: "role-card-container" }, [
            t("div", { staticClass: "role-card-title" }, [
              e._v(" " + e._s(e.title) + " "),
            ]),
            t("div", { staticClass: "role-card-body" }, [e._t("default")], 2),
            e.bottomTitle
              ? t(
                  "div",
                  { staticClass: "role-detail__top-card__description" },
                  [e._v(" " + e._s(e.bottomTitle) + " ")]
                )
              : e._e(),
          ]);
        },
        r = [],
        s = a("2b0e");
      const l = Object(s["defineComponent"])({
        name: "RoleCard",
        props: {
          title: { type: String, default: "" },
          bottomTitle: { type: String, default: "" },
        },
        setup() {},
      });
      var n = l,
        c = n,
        o = (a("3117"), a("0c7c")),
        d = Object(o["a"])(c, i, r, !1, null, "5107cd2a", null);
      t["a"] = d.exports;
    },
    3117: function (e, t, a) {
      "use strict";
      a("bbe0");
    },
    3383: function (e, t, a) {},
    3642: function (e, t, a) {
      "use strict";
      a("610b");
    },
    4892: function (e, t, a) {},
    5681: function (e, t, a) {},
    "5c7c": function (e, t, a) {},
    "610b": function (e, t, a) {},
    6607: function (e, t, a) {
      "use strict";
      a.d(t, "e", function () {
        return r;
      }),
        a.d(t, "b", function () {
          return s;
        }),
        a.d(t, "f", function () {
          return l;
        }),
        a.d(t, "c", function () {
          return n;
        }),
        a.d(t, "d", function () {
          return c;
        }),
        a.d(t, "a", function () {
          return o;
        }),
        a.d(t, "g", function () {
          return d;
        });
      var i = a("0ef7");
      async function r() {
        return i["j"].get(
          "/treasure/tags?typeIds[]=1447403&limit=100&offset=0&orderBy=nameDesc"
        );
      }
      async function s(e) {
        return i["j"].get("/treasure/tags", {
          "typeIds[]": 1447399,
          limit: 100,
          offset: 0,
          orderBy: "nameDesc",
          andSourcePublicRelations: JSON.stringify([
            { sourceId: e + "", sourceType: 1, propertyId: "53166" },
          ]),
        });
      }
      async function l() {
        return i["j"].get(
          "/treasure/tags?typeIds[]=1447406&limit=100&offset=0&orderBy=nameDesc"
        );
      }
      async function n() {
        return i["j"].get(
          "/treasure/tags?typeIds[]=1447405&limit=100&offset=0&orderBy=nameDesc"
        );
      }
      async function c() {
        return i["j"].get(
          "https://config-cdn.qiandaoapp.com/plugin/fireemblem-character-guide.json"
        );
      }
      async function o() {
        return i["j"].get(
          "https://config-cdn.qiandaoapp.com/plugin/fireemblem_guide.json"
        );
      }
      function d(e) {
        return (
          console.log(e),
          i["j"].get(
            "/treasure/tags?limit=100&orderBy=nameDesc&offset=0" +
              (e.length < 1 ? "" : "&" + e.map((e) => "orIds[]=" + e).join("&"))
          )
        );
      }
    },
    6836: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return s;
      });
      a("14d9"), a("0804"), a("0644");
      var i = a("0d94");
      function r(e) {
        return "string" === typeof e && e.startsWith("echotechoss://");
      }
      function s(e) {
        if (e && "object" === typeof e)
          for (const t in e)
            r(e[t])
              ? (e[t] = Object(i["a"])(e[t]))
              : e instanceof Object && s(e[t]);
        else if (e instanceof Array)
          for (let t = 0; t < e.length; t++)
            e[t] instanceof Object
              ? s(e[t])
              : r(e[t]) && (e[t] = Object(i["a"])(e[t]));
      }
    },
    "6e77": function (e, t, a) {
      "use strict";
      a.d(t, "d", function () {
        return n;
      }),
        a.d(t, "e", function () {
          return c;
        }),
        a.d(t, "f", function () {
          return o;
        }),
        a.d(t, "b", function () {
          return d;
        }),
        a.d(t, "a", function () {
          return _;
        }),
        a.d(t, "c", function () {
          return u;
        });
      var i = a("5184");
      const r = function () {
          return i["a"]`
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
  `;
        },
        s = function () {
          return i["a"]`
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
  `;
        };
      var l = a("f685");
      const n = function () {
          const { refetch: e } = Object(l["b"])(r(), () => ({
              limit: 1,
              offset: 0,
            })),
            t = (e) => ({
              limit: 100,
              offset: 0,
              typeId: "1446267",
              andPublicRelations: [
                { sourceId: e + "", sourceType: 1, propertyId: "92791" },
              ],
            });
          return [(a) => e(t(a))];
        },
        c = function () {
          const { refetch: e } = Object(l["b"])(r(), () => ({
              limit: 1,
              offset: 0,
            })),
            t = (e) => ({
              limit: 100,
              offset: 0,
              typeId: "1447397",
              andPublicRelations: [
                { sourceId: e + "", sourceType: 1, propertyId: "53166" },
              ],
            });
          return [(a) => e(t(a))];
        },
        o = function () {
          const { refetch: e } = Object(l["b"])(r(), () => ({
              limit: 1,
              offset: 0,
            })),
            t = {
              limit: 100,
              offset: 0,
              typeId: "1447398",
              andPublicRelations: [
                { sourceId: "1457016", sourceType: 1, propertyId: "53166" },
              ],
            };
          return [() => e(t)];
        },
        d = function () {
          const { refetch: e } = Object(l["b"])(r(), () => ({
              limit: 1,
              offset: 0,
            })),
            t = (e) => ({
              limit: 100,
              offset: 0,
              typeId: "1447398",
              andPublicRelations: [
                { sourceId: e + "", sourceType: 1, propertyId: "1450703" },
                { sourceId: "1457015", sourceType: 1, propertyId: "53166" },
              ],
            });
          return [(a) => e(t(a))];
        },
        _ = function () {
          const { refetch: e } = Object(l["b"])(s(), () => ({
              limit: 1,
              offset: 0,
            })),
            t = (e) => ({ limit: 1, offset: 0, ids: e });
          return [(a) => e(t(a))];
        },
        u = function () {
          const { refetch: e } = Object(l["b"])(r(), () => ({
              limit: 1,
              offset: 0,
            })),
            t = (e) => ({ limit: 1, offset: 0, ids: e });
          return [(a) => e(t(a))];
        };
    },
    "6f29": function (e, t, a) {
      "use strict";
      a("5681");
    },
    "7ba4": function (e, t, a) {
      "use strict";
      a("4892");
    },
    "91a9": function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("div", { staticClass: "container" }, [
            t("div", { staticClass: "role-detail-container" }, [
              t(
                "div",
                { staticClass: "role-detail__top-card" },
                [
                  t("base-info", {
                    attrs: {
                      "role-info": e.roleInfo,
                      "render-data": e.renderData,
                    },
                  }),
                  t("img", {
                    attrs: {
                      src: "https://cdn.qiandaoapp.com/interior/images/b24955af0fca06f83b2d2ac6d7e3f7f7.png",
                      width: "100%",
                    },
                  }),
                ],
                1
              ),
              t(
                "div",
                { staticClass: "role-data" },
                [
                  t("base-data", { attrs: { "render-data": e.renderData } }),
                  t("army-skill", { attrs: { "render-data": e.renderData } }),
                  t("transfer-requirement", {
                    attrs: { "render-data": e.renderData },
                  }),
                  t("army-special-skill", {
                    attrs: {
                      "render-data": e.renderData,
                      skills: e.skills,
                      "origin-list": e.originList,
                    },
                  }),
                ],
                1
              ),
            ]),
          ]);
        },
        r = [],
        s = (a("e7e5"), a("d399")),
        l = a("2b0e"),
        n = function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("div", { staticClass: "role-detail__top-card__base-info" }, [
            e.roleInfo.image
              ? t("div", { staticClass: "role-detail__base-info__image" }, [
                  t("img", {
                    directives: [
                      {
                        name: "lazy",
                        rawName: "v-lazy",
                        value: e.roleInfo.image,
                        expression: "roleInfo.image",
                      },
                    ],
                    staticStyle: { "object-fit": "cover" },
                    attrs: { alt: "", width: "100%", height: "100%" },
                  }),
                ])
              : e._e(),
            t("div", { staticClass: "role-detail__base-info__texts" }, [
              t("div", { staticClass: "role-detail__base-info__title" }, [
                e._v(e._s(e.roleInfo.name)),
              ]),
              t("div", { staticClass: "role-detail__base-info__details" }, [
                t(
                  "div",
                  { staticClass: "role-detail__base-info__detail-item" },
                  [
                    t(
                      "div",
                      {
                        staticClass:
                          "role-detail__base-info__detail-item__label",
                      },
                      [e._v("等级:")]
                    ),
                    t(
                      "div",
                      {
                        staticClass:
                          "role-detail__base-info__detail-item__value",
                      },
                      [e._v(" " + e._s(e.renderData.type || 0) + " ")]
                    ),
                  ]
                ),
                t(
                  "div",
                  { staticClass: "role-detail__base-info__detail-item" },
                  [
                    t(
                      "div",
                      {
                        staticClass:
                          "role-detail__base-info__detail-item__label",
                      },
                      [e._v("移动:")]
                    ),
                    t(
                      "div",
                      {
                        staticClass:
                          "role-detail__base-info__detail-item__value",
                      },
                      [e._v(" " + e._s(e.renderData.move || 0) + " ")]
                    ),
                  ]
                ),
                t(
                  "div",
                  { staticClass: "role-detail__base-info__detail-item" },
                  [
                    t(
                      "div",
                      {
                        staticClass:
                          "role-detail__base-info__detail-item__label",
                      },
                      [e._v(" 兵种类型: ")]
                    ),
                    t(
                      "div",
                      {
                        staticClass:
                          "role-detail__base-info__detail-item__value",
                      },
                      [e._v(" " + e._s(e.renderData.fightStyle || 0) + " ")]
                    ),
                  ]
                ),
              ]),
            ]),
          ]);
        },
        c = [];
      const o = Object(l["defineComponent"])({
        name: "BaseInfo",
        props: {
          roleInfo: { type: Object, default: () => ({}) },
          renderData: { type: Object, default: () => ({}) },
        },
        setup(e) {},
      });
      var d = o,
        _ = d,
        u = (a("26f13"), a("0c7c")),
        p = Object(u["a"])(_, n, c, !1, null, "1a727748", null),
        m = p.exports,
        v = function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t("div", { staticClass: "base-data-container" }, [
            e._m(0),
            t("div", { staticClass: "base-data__list" }, [
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("HP:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.HP || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.HPFull) +
                      " (" +
                      e._s(e.renderData.HPCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("防御:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.prevent || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.preventFull) +
                      " (" +
                      e._s(e.renderData.preventCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("力量:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.power || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.powerFull) +
                      " (" +
                      e._s(e.renderData.powerCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("魔防:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.magicPrevent || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.magicPreventFull) +
                      " (" +
                      e._s(e.renderData.magicPreventCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("魔力:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.magic || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.magicFull) +
                      " (" +
                      e._s(e.renderData.magicCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("幸运:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.lucky || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.luckyFull) +
                      " (" +
                      e._s(e.renderData.luckyCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("技巧:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.skill || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.skillFull) +
                      " (" +
                      e._s(e.renderData.skillCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("体格:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.physique || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.physiqueFull || 0) +
                      " (" +
                      e._s(e.renderData.physiqueCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("速度:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.speed || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.speedFull) +
                      " (" +
                      e._s(e.renderData.speedCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
              t("div", { staticClass: "base-data__list-item" }, [
                t("div", { staticClass: "base-data__list-item__title" }, [
                  e._v("总和:"),
                ]),
                t("div", { staticClass: "base-data__list-item__subtitle" }, [
                  e._v(" " + e._s(e.renderData.sum || 0) + " "),
                  t(
                    "svg",
                    {
                      staticClass: "arrow",
                      attrs: {
                        width: "10",
                        height: "8",
                        viewBox: "0 0 10 8",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                    },
                    [
                      t("path", {
                        attrs: {
                          d: "M8.29297 4.5H0.5V3.5H8.29289L6.14648 1.35359L6.85359 0.646484L9.85359 3.64648C10.0489 3.84175 10.0489 4.15833 9.85359 4.35359L6.85359 7.35359L6.14648 6.64648L8.29297 4.5Z",
                          fill: "black",
                          "fill-opacity": "0.4",
                        },
                      }),
                    ]
                  ),
                  e._v(
                    " " +
                      e._s(e.renderData.sumFull || 0) +
                      " (" +
                      e._s(e.sumCorrection || 0) +
                      ") "
                  ),
                ]),
              ]),
            ]),
          ]);
        },
        f = [
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t("div", { staticClass: "base-data__titles" }, [
              t("div", { staticClass: "base-data__title" }, [e._v("兵种数据")]),
              t("div", { staticClass: "base-data__subtitle" }, [
                e._v("基础数据/满级数据/成长率修正"),
              ]),
            ]);
          },
        ];
      const b = Object(l["defineComponent"])({
        name: "BaseInfo",
        props: { renderData: { type: Object, default: () => ({}) } },
        setup(e) {
          const { renderData: t } = Object(l["toRefs"])(e),
            a = Object(l["computed"])(
              () =>
                (Number(t.value.HPCorrection) || 0) +
                (Number(t.value.powerCorrection) || 0) +
                (Number(t.value.preventCorrection) || 0) +
                (Number(t.value.magicCorrection) || 0) +
                (Number(t.value.magicPreventCorrection) || 0) +
                (Number(t.value.skillCorrection) || 0) +
                (Number(t.value.luckyCorrection) || 0) +
                (Number(t.value.speedCorrection) || 0) +
                (Number(t.value.physiqueCorrection) || 0)
            );
          return (
            Object(l["watch"])(a, (e) => {
              console.log(e);
            }),
            { sumCorrection: a }
          );
        },
      });
      var y = b,
        g = y,
        C = (a("f279"), Object(u["a"])(g, v, f, !1, null, "fc76a982", null)),
        k = C.exports,
        h = function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            { staticClass: "army-skill-container" },
            [
              t(
                "role-skill-card",
                {
                  attrs: {
                    title: "武器熟练度变化",
                    "bottom-title":
                      "若角色天生资质对应该兵种的武器熟练度，且天生资质带“+”，则表示该项资质的熟练度提升一级",
                  },
                },
                [
                  t("div", { staticClass: "army-skill-card-container" }, [
                    e.renderData.swordsManship
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("剑术:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(" " + e._s(e.renderData.swordsManship) + " ")]
                          ),
                        ])
                      : e._e(),
                    e.renderData.marksManship
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("枪术:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(" " + e._s(e.renderData.marksManship) + " ")]
                          ),
                        ])
                      : e._e(),
                    e.renderData.axology
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("斧术:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(e._s(e.renderData.axology))]
                          ),
                        ])
                      : e._e(),
                    e.renderData.archery
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("箭术:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(e._s(e.renderData.archery))]
                          ),
                        ])
                      : e._e(),
                    e.renderData.fighting
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("格斗术:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(e._s(e.renderData.fighting))]
                          ),
                        ])
                      : e._e(),
                    e.renderData.dagger
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("匕首:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(e._s(e.renderData.dagger))]
                          ),
                        ])
                      : e._e(),
                    e.renderData.magicBook
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("魔法书:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(e._s(e.renderData.magicBook))]
                          ),
                        ])
                      : e._e(),
                    e.renderData.scepter
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("法杖:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(e._s(e.renderData.scepter))]
                          ),
                        ])
                      : e._e(),
                    e.renderData.dragonStone
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("龙石:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(" " + e._s(e.renderData.dragonStone) + " ")]
                          ),
                        ])
                      : e._e(),
                    e.renderData.shell
                      ? t("div", { staticClass: "army-skill-card-item" }, [
                          t("div", { staticClass: "army-skill-card-title" }, [
                            e._v("炮弹:"),
                          ]),
                          t(
                            "div",
                            { staticClass: "army-skill-card-subtitle" },
                            [e._v(e._s(e.renderData.shell))]
                          ),
                        ])
                      : e._e(),
                  ]),
                ]
              ),
            ],
            1
          );
        },
        S = [],
        w = a("3114");
      const D = Object(l["defineComponent"])({
        name: "ArmySkill",
        components: { RoleSkillCard: w["a"] },
        props: { renderData: { type: Object, default: () => ({}) } },
        setup(e) {},
      });
      var I = D,
        P = I,
        L = (a("3642"), Object(u["a"])(P, h, S, !1, null, "19641008", null)),
        j = L.exports,
        O = function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            { staticClass: "army-special-skill-container" },
            [
              t("role-skill-card", { attrs: { title: "兵种特技" } }, [
                t("div", { staticClass: "army-special-skill-card-container" }, [
                  e.renderData.learnableSkill_5 ||
                  e.renderData.learnableSkill_10 ||
                  e.renderData.learnableSkill_15 ||
                  e.renderData.learnableSkill_20 ||
                  e.renderData.learnableSkill_25 ||
                  e.renderData.learnableSkill_30 ||
                  e.renderData.skillIntroduction
                    ? e._e()
                    : t("div", [e._v(" 无 ")]),
                  e.renderData.learnableSkill_5
                    ? t(
                        "div",
                        { staticClass: "army-special-skill-card-item" },
                        [
                          t(
                            "div",
                            { staticClass: "army-special-skill-card-title" },
                            [e._v("5级学习:")]
                          ),
                          t(
                            "div",
                            {
                              staticClass: "army-special-skill-card-subtitle",
                              on: {
                                click: function (t) {
                                  return e.goToSpecialSkill("learnableSkill_5");
                                },
                              },
                            },
                            [
                              e._v(
                                " " + e._s(e.renderData.learnableSkill_5) + "> "
                              ),
                            ]
                          ),
                        ]
                      )
                    : e._e(),
                  e.renderData.learnableSkill_10
                    ? t(
                        "div",
                        { staticClass: "army-special-skill-card-item" },
                        [
                          t(
                            "div",
                            { staticClass: "army-special-skill-card-title" },
                            [e._v("10级学习:")]
                          ),
                          t(
                            "div",
                            {
                              staticClass: "army-special-skill-card-subtitle",
                              on: {
                                click: function (t) {
                                  return e.goToSpecialSkill(
                                    "learnableSkill_10"
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                " " +
                                  e._s(e.renderData.learnableSkill_10) +
                                  "> "
                              ),
                            ]
                          ),
                        ]
                      )
                    : e._e(),
                  e.renderData.learnableSkill_15
                    ? t(
                        "div",
                        { staticClass: "army-special-skill-card-item" },
                        [
                          t(
                            "div",
                            { staticClass: "army-special-skill-card-title" },
                            [e._v("15级学习:")]
                          ),
                          t(
                            "div",
                            {
                              staticClass: "army-special-skill-card-subtitle",
                              on: {
                                click: function (t) {
                                  return e.goToSpecialSkill(
                                    "learnableSkill_15"
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                " " +
                                  e._s(e.renderData.learnableSkill_15) +
                                  "> "
                              ),
                            ]
                          ),
                        ]
                      )
                    : e._e(),
                  e.renderData.learnableSkill_20
                    ? t(
                        "div",
                        { staticClass: "army-special-skill-card-item" },
                        [
                          t(
                            "div",
                            { staticClass: "army-special-skill-card-title" },
                            [e._v("20级学习:")]
                          ),
                          t(
                            "div",
                            {
                              staticClass: "army-special-skill-card-subtitle",
                              on: {
                                click: function (t) {
                                  return e.goToSpecialSkill(
                                    "learnableSkill_20"
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                " " +
                                  e._s(e.renderData.learnableSkill_20) +
                                  "> "
                              ),
                            ]
                          ),
                        ]
                      )
                    : e._e(),
                  e.renderData.learnableSkill_25
                    ? t(
                        "div",
                        { staticClass: "army-special-skill-card-item" },
                        [
                          t(
                            "div",
                            { staticClass: "army-special-skill-card-title" },
                            [e._v("25级学习:")]
                          ),
                          t(
                            "div",
                            {
                              staticClass: "army-special-skill-card-subtitle",
                              on: {
                                click: function (t) {
                                  return e.goToSpecialSkill(
                                    "learnableSkill_25"
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                " " +
                                  e._s(e.renderData.learnableSkill_25) +
                                  "> "
                              ),
                            ]
                          ),
                        ]
                      )
                    : e._e(),
                  e.renderData.learnableSkill_30
                    ? t(
                        "div",
                        { staticClass: "army-special-skill-card-item" },
                        [
                          t(
                            "div",
                            { staticClass: "army-special-skill-card-title" },
                            [e._v("30级学习:")]
                          ),
                          t(
                            "div",
                            {
                              staticClass: "army-special-skill-card-subtitle",
                              on: {
                                click: function (t) {
                                  return e.goToSpecialSkill(
                                    "learnableSkill_30"
                                  );
                                },
                              },
                            },
                            [
                              e._v(
                                " " +
                                  e._s(e.renderData.learnableSkill_30) +
                                  "> "
                              ),
                            ]
                          ),
                        ]
                      )
                    : e._e(),
                  e.renderData.specialSkillArmy
                    ? t(
                        "div",
                        { staticClass: "army-special-skill-card-item" },
                        [
                          t(
                            "div",
                            {
                              staticClass: "army-special-skill-card-subtitle",
                              on: {
                                click: function (t) {
                                  return e.goToSpecialSkill("specialSkillArmy");
                                },
                              },
                            },
                            [
                              e._v(
                                " " + e._s(e.renderData.specialSkillArmy) + "> "
                              ),
                            ]
                          ),
                        ]
                      )
                    : e._e(),
                  e.renderData.skillIntroduction
                    ? t(
                        "div",
                        { staticClass: "army-special-skill-card-item" },
                        [
                          t(
                            "div",
                            { staticClass: "army-special-skill-card-title" },
                            [e._v("特技简介:")]
                          ),
                          e.renderData.skillIntroduction
                            ? t(
                                "div",
                                {
                                  staticClass:
                                    "army-special-skill-card-subtitle",
                                  staticStyle: { color: "#000" },
                                },
                                [
                                  e._v(
                                    " " +
                                      e._s(e.renderData.skillIntroduction) +
                                      " "
                                  ),
                                ]
                              )
                            : e._e(),
                        ]
                      )
                    : e._e(),
                ]),
              ]),
            ],
            1
          );
        },
        q = [],
        x = a("1816"),
        B = a.n(x),
        T = a("2e3f");
      const H = Object(l["defineComponent"])({
        name: "ArmySpecialSkill",
        components: { RoleSkillCard: w["a"] },
        props: {
          renderData: { type: Object, default: () => ({}) },
          originList: { type: Array, default: () => [] },
          skills: { type: Object, default: () => ({}) },
        },
        setup(e) {
          const {
              renderData: t,
              originList: a,
              skills: i,
            } = Object(l["toRefs"])(e),
            r = (e) => {
              console.log(i.value);
              const t = i.value[e].id,
                a = i.value[e].name;
              if (!t) return;
              const r = B()(
                location.origin +
                  "/plugin/fire-emblem-engage/special-skill-detail",
                !0
              );
              r.query = { skillId: t, name: a };
              const s = encodeURIComponent(r.toString()),
                l = "/modules/pages/web-view/index?url=" + s;
              Object(T["a"])(l);
            };
          return { goToSpecialSkill: r };
        },
      });
      var R = H,
        A = R,
        $ = (a("7ba4"), Object(u["a"])(A, O, q, !1, null, "234dd3ee", null)),
        M = $.exports,
        F = function () {
          var e = this,
            t = e._self._c;
          e._self._setupProxy;
          return t(
            "div",
            { staticClass: "transfer-requirement-container" },
            [
              e.renderData.transferLevelRequirement ||
              e.renderData.transferQualificationRequirement ||
              e.renderData.transferMaterial
                ? t("role-skill-card", { attrs: { title: "转职要求" } }, [
                    t(
                      "div",
                      { staticClass: "transfer-requirement-card-container" },
                      [
                        e.renderData.transferLevelRequirement
                          ? t(
                              "div",
                              { staticClass: "transfer-requirement-card-item" },
                              [
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "transfer-requirement-card-title",
                                  },
                                  [e._v("必要等级:")]
                                ),
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "transfer-requirement-card-subtitle",
                                  },
                                  [
                                    e._v(
                                      " " +
                                        e._s(
                                          e.renderData.transferLevelRequirement
                                        ) +
                                        " "
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : e._e(),
                        e.renderData.transferQualificationRequirement
                          ? t(
                              "div",
                              { staticClass: "transfer-requirement-card-item" },
                              [
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "transfer-requirement-card-title",
                                  },
                                  [e._v("必要资质:")]
                                ),
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "transfer-requirement-card-subtitle",
                                  },
                                  [
                                    e._v(
                                      " " +
                                        e._s(
                                          e.renderData
                                            .transferQualificationRequirement
                                        ) +
                                        " "
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : e._e(),
                        e.renderData.transferMaterial
                          ? t(
                              "div",
                              { staticClass: "transfer-requirement-card-item" },
                              [
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "transfer-requirement-card-title",
                                  },
                                  [e._v("必要道具:")]
                                ),
                                t(
                                  "div",
                                  {
                                    staticClass:
                                      "transfer-requirement-card-subtitle",
                                  },
                                  [
                                    e._v(
                                      " " +
                                        e._s(e.renderData.transferMaterial) +
                                        " "
                                    ),
                                  ]
                                ),
                              ]
                            )
                          : e._e(),
                      ]
                    ),
                  ])
                : e._e(),
            ],
            1
          );
        },
        V = [];
      const E = Object(l["defineComponent"])({
        name: "TransferRequirement",
        components: { RoleSkillCard: w["a"] },
        props: { renderData: { type: Object, default: () => {} } },
      });
      var U = E,
        N = U,
        Z = (a("6f29"), Object(u["a"])(N, F, V, !1, null, "2d0baddf", null)),
        Q = Z.exports,
        J = a("a18c"),
        W = a("6607"),
        z = a("e49f"),
        X = a("6e77"),
        G = a("6836"),
        K = a("0644"),
        Y = a.n(K);
      let ee = !0;
      const te = Object(l["defineComponent"])({
        name: "ArmyDetail",
        components: {
          ArmySpecialSkill: M,
          BaseInfo: m,
          BaseData: k,
          ArmySkill: j,
          TransferRequirement: Q,
        },
        beforeRouteEnter(e, t, a) {
          console.log(e, t),
            (ee =
              "FireEmblemEngage" === t.name ||
              "FireEmblemEngageRoleDetail" === t.name),
            a();
        },
        activated() {
          ee && this.init();
        },
        setup() {
          const e = J["a"].currentRoute.query.name;
          e && (document.title = e);
          const [t] = Object(X["a"])(),
            a = Object(l["ref"])({}),
            i = Object(l["ref"])({}),
            r = Object(l["ref"])([]),
            n = Object(l["ref"])([]),
            c = Object(l["ref"])({}),
            o = () => {
              s["a"].loading({ duration: 0, message: "请稍等..." });
            },
            d = () => {
              s["a"].clear();
            };
          async function _() {
            o();
            const { id: e } = J["a"].currentRoute.query;
            await m(e), p(), d();
          }
          Object(l["onMounted"])(() => {
            _();
          });
          const u = (e) => {
            e && Object(T["a"])(e.url);
          };
          function p() {
            Object(W["d"])().then((e) => {
              const t = e.character || [],
                i = t.filter((e) => e[a.value.id]);
              if (i.length > 0) {
                const e = i[0][a.value.id];
                r.value = e;
              }
            });
          }
          function m(e) {
            return e
              ? t(e).then((e) => {
                  const t = Y()(e.data.tags.list[0]);
                  Object(G["a"])(t);
                  const r = { name: t.name, image: t.images.logo },
                    s = t.profiles;
                  if (((a.value = r), s.length > 0)) {
                    const e = {},
                      t = {};
                    s.forEach((a) => {
                      ("1448558" !== a.propertyId &&
                        "1448560" !== a.propertyId &&
                        "1448562" !== a.propertyId &&
                        "1448564" !== a.propertyId &&
                        "1448566" !== a.propertyId &&
                        "1448568" !== a.propertyId &&
                        "1447344" !== a.propertyId) ||
                        (t[z["a"][a.propertyId]] = {
                          id: a.targetId,
                          name: a.dataValue,
                        }),
                        (e[z["a"][a.propertyId]] = a.dataValue);
                    }),
                      console.log(e, "dealedData"),
                      (c.value = t),
                      (n.value = s),
                      (i.value = e),
                      console.log(i.value);
                  }
                  console.log(e.data, "fetchTagDetail");
                })
              : d();
          }
          return {
            roleInfo: a,
            renderData: i,
            handleSwitch: u,
            renderList: r,
            originList: n,
            skills: c,
            init: _,
          };
        },
      });
      var ae = te,
        ie = ae,
        re = (a("b3d2"), Object(u["a"])(ie, i, r, !1, null, "6efe464a", null));
      t["default"] = re.exports;
    },
    b3d2: function (e, t, a) {
      "use strict";
      a("3383");
    },
    bbe0: function (e, t, a) {},
    e49f: function (e, t, a) {
      "use strict";
      const i = {
        92791: "country",
        1447515: "CV",
        53120: "sex",
        53190: "height",
        53188: "age",
        53187: "birthday",
        55407: "introduction",
        1447356: "initialOccupation",
        1447280: "physique",
        1447320: "physiqueFull",
        1453898: "physiquePercent",
        1454956: "physiqueCorrection",
        1447282: "SP",
        1419973: "weaponPower",
        1416073: "objectAttack",
        1447366: "magicAttack",
        1447284: "hit",
        1447286: "avoid",
        1447288: "kill",
        1447290: "mustAvoid",
        1447368: "effect",
        1447370: "shotLength",
        1447516: "revert",
        1447372: "requirement",
        1416074: "HP",
        1447292: "HPFull",
        1447318: "HPPercent",
        1448526: "HPCorrection",
        1116764: "power",
        1447294: "powerFull",
        1447358: "powerPercent",
        1448530: "powerCorrection",
        1447296: "magic",
        1447298: "magicFull",
        1447360: "magicPercent",
        1448534: "magicCorrection",
        1447300: "skill",
        1447302: "skillFull",
        1447509: "skillPercent",
        1448542: "skillCorrection",
        1447304: "speed",
        1447306: "speedFull",
        1447510: "speedPercent",
        1448571: "speedCorrection",
        1120295: "lucky",
        1447308: "luckyFull",
        1447511: "luckyPercent",
        1448546: "luckyCorrection",
        1447310: "prevent",
        1447312: "preventFull",
        1447512: "preventPercent",
        1448550: "preventCorrection",
        1447314: "magicPrevent",
        1447316: "magicPreventFull",
        1447513: "magicPreventPercent",
        1448554: "magicPreventCorrection",
        1436267: "sum",
        1447322: "sumFull",
        1288439: "sumPercent",
        1447324: "swordsManship",
        1447334: "marksManship",
        1447326: "axology",
        1447336: "archery",
        1447362: "dagger",
        1447330: "magicBook",
        1447332: "scepter",
        1447328: "fighting",
        1447346: "specialSkill",
        1447386: "fightStyle",
        1447278: "move",
        53166: "type",
        1447388: "transferLevelRequirement",
        1447390: "transferQualificationRequirement",
        1447392: "transferMaterial",
        1448558: "learnableSkill_5",
        1448560: "learnableSkill_10",
        1448562: "learnableSkill_15",
        1448564: "learnableSkill_20",
        1448566: "learnableSkill_25",
        1448568: "learnableSkill_30",
        1447338: "skillIntroduction",
        1447344: "specialSkillArmy",
        1450703: "heraldry",
        1447342: "specialSkillExtend",
        1447378: "syncSpecialEffect",
        1447380: "combineWeapon",
        1447382: "combineSpecialEffect",
        1447384: "combineSkill",
        1445704: "getMethod",
        1447374: "price",
        1447376: "specialEffect",
        1452804: "HP_C",
        1452806: "power_C",
        1452808: "skill_C",
        1452810: "speed_C",
        1452812: "lucky_C",
        1452814: "prevent_C",
        1452816: "magic_C",
        1452818: "magicPrevent_C",
        1452820: "physique_C",
        1452822: "HP_B",
        1452824: "power_B",
        1452826: "skill_B",
        1452828: "speed_B",
        1452830: "lucky_B",
        1452832: "prevent_B",
        1452834: "magic_B",
        1452836: "magicPrevent_B",
        1452838: "physique_B",
        1452840: "HP_A",
        1452842: "power_A",
        1452844: "skill_A",
        1452846: "speed_A",
        1452848: "lucky_A",
        1452850: "prevent_A",
        1452852: "magic_A",
        1452854: "magicPrevent_A",
        1452856: "physique_A",
        1452858: "HP_S",
        1452860: "power_S",
        1452862: "skill_S",
        1452864: "speed_S",
        1452866: "lucky_S",
        1452868: "prevent_S",
        1452870: "magic_S",
        1452872: "magicPrevent_S",
        1452874: "physique_S",
        1447276: "naturalAptitude",
        1461147: "subQualification",
        1453899: "joinMethod",
        1462185: "typeOfArmyInRole",
        1462189: "weaponUseTimes",
        1462190: "weaponLevel",
        1203785: "weaponWeight",
        1462209: "ringEffect",
        1463219: "lv1",
        1463221: "lv2",
        1463223: "lv3",
        1463225: "lv4",
        1463227: "lv5",
        1463229: "lv6",
        1463231: "lv7",
        1463233: "lv8",
        1463235: "lv9",
        1463237: "lv10",
        1463239: "lv11",
        1463241: "lv12",
        1463243: "lv13",
        1463245: "lv14",
        1463247: "lv15",
        1463249: "lv16",
        1463251: "lv17",
        1463253: "lv18",
        1463255: "lv19",
        1463257: "lv20",
        1467453: "lv21",
        1467349: "equipmentIntroduction",
        1470450: "lovedPresent",
        1470451: "hatedPresent",
        1470452: "supportingPartner",
        1470453: "supportCapabilityUp",
        1481346: "suggestedCollocation",
        1481347: "fitForOccupation",
        1481348: "inheritableSkill",
        1518025: "dragonStone",
        1518026: "shell",
      };
      t["a"] = i;
    },
    f279: function (e, t, a) {
      "use strict";
      a("5c7c");
    },
  },
]);
