(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-3c6074ed"],
  {
    "00e9": function (e, t, a) {
      "use strict";
      a.r(t);
      var s = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            [
              t("Sticky", [
                t(
                  "div",
                  { staticClass: "nav-list u-flex-c-c" },
                  e._l(e.navs, function (a, s) {
                    return t(
                      "div",
                      {
                        key: s,
                        staticClass: "nav",
                        on: {
                          click: function (t) {
                            return e.handleNavClick(s);
                          },
                        },
                      },
                      [
                        t("img", {
                          staticClass: "nav-icon",
                          attrs: { src: a.icon, alt: "" },
                        }),
                        t("div", { staticClass: "nav-name" }, [
                          e._v(e._s(a.name)),
                        ]),
                      ]
                    );
                  }),
                  0
                ),
                t("div", { staticClass: "header" }, [
                  e.isEdit
                    ? t("div", { staticClass: "card-group" }, [
                        t("div", { staticClass: "total-count" }, [
                          e._v(e._s(e.selectedCount) + " / 60"),
                        ]),
                        e.checkedItems.length
                          ? t(
                              "div",
                              {
                                ref: e.cards,
                                staticClass: "cards",
                                attrs: { id: "cards" },
                              },
                              e._l(e.checkedItems, function (a, s) {
                                return t(
                                  "Badge",
                                  {
                                    key: a.id,
                                    scopedSlots: e._u(
                                      [
                                        {
                                          key: "content",
                                          fn: function () {
                                            return [
                                              t("Icon", {
                                                staticClass: "badge-icon",
                                                attrs: { name: "cross" },
                                                nativeOn: {
                                                  click: function (t) {
                                                    return e.handleDelete(s);
                                                  },
                                                },
                                              }),
                                            ];
                                          },
                                          proxy: !0,
                                        },
                                      ],
                                      null,
                                      !0
                                    ),
                                  },
                                  [
                                    t("img", {
                                      staticClass: "spu-cover",
                                      attrs: { src: a.cover, alt: "" },
                                    }),
                                    t(
                                      "div",
                                      { staticClass: "badge u-flex-c-c" },
                                      [e._v(e._s(a.count) + "X")]
                                    ),
                                  ]
                                );
                              }),
                              1
                            )
                          : t("div", { staticClass: "card-tip" }, [
                              e._v("点击卡片数量添加"),
                            ]),
                      ])
                    : e._e(),
                  t("div", { staticClass: "search u-flex-c-sb" }, [
                    t("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: e.query,
                          expression: "query",
                        },
                      ],
                      staticClass: "searchbox",
                      attrs: { placeholder: "支持卡牌编号/名称搜索" },
                      domProps: { value: e.query },
                      on: {
                        input: function (t) {
                          t.target.composing || (e.query = t.target.value);
                        },
                      },
                    }),
                    t(
                      "span",
                      {
                        staticClass: "filter",
                        on: {
                          click: function (t) {
                            return e.onSearch(!0);
                          },
                        },
                      },
                      [e._v("搜索")]
                    ),
                  ]),
                ]),
              ]),
              0 === e.activeIdx
                ? t("CardSquare")
                : 1 === e.activeIdx
                ? [
                    t("div", { staticClass: "ver-group" }, [
                      t(
                        "div",
                        { staticClass: "ver-list" },
                        e._l(e.ver, function (a, s) {
                          return t(
                            "span",
                            {
                              key: s,
                              class: [
                                "ver",
                                a.id === e.selectedVer ? "selectedVer" : "",
                              ],
                              on: {
                                click: function (t) {
                                  return e.handleFilterClick(
                                    "selectedVer",
                                    a.id
                                  );
                                },
                              },
                            },
                            [e._v(" " + e._s(a.name) + " ")]
                          );
                        }),
                        0
                      ),
                    ]),
                    t("TypeGroup", {
                      attrs: {
                        title: "卡牌种类",
                        filters: e.zhuziTag,
                        selected: e.selectedZhuziTag,
                      },
                      on: {
                        change: function (t) {
                          return e.handleChange("selectedZhuziTag", t);
                        },
                      },
                    }),
                    t("TypeGroup", {
                      attrs: {
                        title: "宝可梦属性",
                        filters: e.pokePropertyTag,
                        selected: e.selectedPokePropertyTag,
                      },
                      on: {
                        change: function (t) {
                          return e.handleChange("selectedPokePropertyTag", t);
                        },
                      },
                    }),
                    t("TypeGroup", {
                      attrs: {
                        title: "稀有度",
                        filters: e.rarePropertyTag,
                        selected: e.selectedRarePropertyTag,
                      },
                      on: {
                        change: function (t) {
                          return e.handleChange("selectedRarePropertyTag", t);
                        },
                      },
                    }),
                    e.items.length
                      ? t(
                          "van-list",
                          {
                            ref: "list",
                            attrs: {
                              finished: !e.hasMore,
                              "immediate-check": !1,
                              "finished-text": "到底了～",
                            },
                            on: { load: e.onSearch },
                            model: {
                              value: e.isLoading,
                              callback: function (t) {
                                e.isLoading = t;
                              },
                              expression: "isLoading",
                            },
                          },
                          [
                            t(
                              "div",
                              { staticClass: "list van-clearfix" },
                              e._l(e.items, function (a, s) {
                                return t(
                                  "div",
                                  {
                                    key: `${a.id}- ${s}`,
                                    staticClass: "cover u-flex-c-c",
                                  },
                                  [
                                    t("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: a.cover,
                                          expression: "i.cover",
                                        },
                                      ],
                                      attrs: { src: a.cover, alt: "" },
                                      on: {
                                        click: function (t) {
                                          return e.handlePreview(s);
                                        },
                                      },
                                    }),
                                    e.isEdit
                                      ? t("div", { staticClass: "stepper" }, [
                                          t(
                                            "div",
                                            {
                                              staticClass: "del",
                                              on: {
                                                click: function (t) {
                                                  return e.handleStepChange(
                                                    a,
                                                    !0
                                                  );
                                                },
                                              },
                                            },
                                            [e._v("-1")]
                                          ),
                                          t(
                                            "div",
                                            {
                                              staticClass: "del",
                                              on: {
                                                click: function (t) {
                                                  return e.handleStepChange(a);
                                                },
                                              },
                                            },
                                            [e._v("+1")]
                                          ),
                                        ])
                                      : e._e(),
                                  ]
                                );
                              }),
                              0
                            ),
                          ]
                        )
                      : t("Empty", {
                          attrs: {
                            image: "search",
                            description: "当前筛选没有更多内容",
                          },
                        }),
                    t("BottomBtn", {
                      attrs: { isEdit: e.isEdit },
                      on: {
                        "update:isEdit": function (t) {
                          e.isEdit = t;
                        },
                        "update:is-edit": function (t) {
                          e.isEdit = t;
                        },
                        save: e.handleCreate,
                      },
                    }),
                  ]
                : e._e(),
              t(
                "van-dialog",
                {
                  attrs: {
                    "show-cancel-button": "",
                    title: "请输入卡组名称",
                    "confirm-button-color": "#619CFF",
                  },
                  on: { confirm: e.handleConfirm },
                  model: {
                    value: e.showDialog,
                    callback: function (t) {
                      e.showDialog = t;
                    },
                    expression: "showDialog",
                  },
                },
                [
                  t("van-field", {
                    attrs: { required: "", placeholder: "卡组名称" },
                    model: {
                      value: e.summary,
                      callback: function (t) {
                        e.summary = t;
                      },
                      expression: "summary",
                    },
                  }),
                  t("van-field", {
                    attrs: { type: "textarea", placeholder: "卡组介绍" },
                    model: {
                      value: e.content,
                      callback: function (t) {
                        e.content = t;
                      },
                      expression: "content",
                    },
                  }),
                  t("div", { staticClass: "card-tag van-field" }, [
                    t("span", { staticClass: "label" }, [e._v("牌组标签")]),
                    t(
                      "div",
                      { staticClass: "tags" },
                      e._l(e.TAGS, function (a, s) {
                        return t(
                          "div",
                          {
                            key: a.id,
                            class: ["tag", a && a.active ? "active" : ""],
                            on: {
                              click: function (t) {
                                return e.handleTagSelect(s);
                              },
                            },
                          },
                          [e._v(" " + e._s(a.name) + " ")]
                        );
                      }),
                      0
                    ),
                  ]),
                ],
                1
              ),
              t(
                "Popup",
                {
                  attrs: { round: "" },
                  model: {
                    value: e.visible,
                    callback: function (t) {
                      e.visible = t;
                    },
                    expression: "visible",
                  },
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "popup-wrapper",
                      on: { click: e.handleClose },
                    },
                    [
                      t(
                        "div",
                        { staticClass: "popup" },
                        [
                          t(
                            "Swipe",
                            {
                              ref: "swiper",
                              attrs: {
                                width: 274,
                                loop: !1,
                                "initial-swipe": e.prevIdx,
                              },
                              on: { change: e.handleSwipeChange },
                            },
                            e._l(e.items, function (e, a) {
                              return t("SwipeItem", { key: `${e.id}- ${a}` }, [
                                t("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: e.cover,
                                      expression: "i.cover",
                                    },
                                  ],
                                  staticClass: "cover",
                                  attrs: { src: e.cover, alt: "" },
                                }),
                              ]);
                            }),
                            1
                          ),
                          t("div", { staticClass: "name" }, [
                            e._v(e._s(e.name)),
                          ]),
                          t("div", { staticClass: "code-number" }, [
                            e._v(e._s(e.codeNumber)),
                          ]),
                          t("img", {
                            staticClass: "wish-icon",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/ued/5891bba1da1af6a98ca162f454d6c356.png",
                              alt: "",
                            },
                            on: {
                              click: function (t) {
                                return (
                                  t.stopPropagation(),
                                  e.handleWish.apply(null, arguments)
                                );
                              },
                            },
                          }),
                          t("img", {
                            staticClass: "buy-icon",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/ued/d202298e6dbe299c85ae3ffaf80bf7e3.png",
                              alt: "",
                            },
                            on: { click: e.navigateSPU },
                          }),
                        ],
                        1
                      ),
                      t("img", {
                        staticClass: "pre-icon",
                        attrs: {
                          src: "https://cdn.qiandaoapp.com/ued/db4d91693abd6134b094285e4206562f.png",
                          alt: "",
                        },
                        on: {
                          click: function (t) {
                            return (
                              t.stopPropagation(), e.pre.apply(null, arguments)
                            );
                          },
                        },
                      }),
                      t("img", {
                        staticClass: "next-icon",
                        attrs: {
                          src: "https://cdn.qiandaoapp.com/ued/3740968b08eae0250a82e4077fb0f004.png",
                          alt: "",
                        },
                        on: {
                          click: function (t) {
                            return (
                              t.stopPropagation(), e.next.apply(null, arguments)
                            );
                          },
                        },
                      }),
                    ]
                  ),
                ]
              ),
            ],
            2
          );
        },
        i = [],
        n = (a("e7e5"), a("d399")),
        r = (a("c3a6"), a("ad06")),
        c = (a("18e9"), a("471a")),
        o = (a("91d5"), a("f0ca")),
        d = (a("4b0a"), a("2bb1")),
        l = (a("7844"), a("5596")),
        u = (a("0cc8"), a("3104")),
        p = (a("8a58"), a("e41f")),
        g = (a("be7f"), a("565f")),
        v = (a("e17f"), a("2241")),
        m = (a("2994"), a("2bdd")),
        h = (a("66b9"), a("b650")),
        f = (a("13d5"), a("14d9"), a("2b0e")),
        b = a("2f62"),
        y = function () {
          var e = this,
            t = e._self._c;
          return t("div", { staticClass: "type-group" }, [
            t(
              "div",
              { staticClass: "type-list" },
              [
                t("span", { staticClass: "type-list-title" }, [
                  e._v(e._s(e.title)),
                ]),
                e._l(e.filters, function (a) {
                  return t(
                    "span",
                    {
                      key: a.id,
                      class: [
                        "type-option",
                        a.id === e.selected ? "selectedType" : "",
                      ],
                      on: {
                        click: function (t) {
                          return e.handleFilterClick(a.id);
                        },
                      },
                    },
                    [e._v(" " + e._s(a.name) + " ")]
                  );
                }),
              ],
              2
            ),
          ]);
        },
        C = [],
        k = {
          props: {
            filters: { type: Array, default: () => [] },
            selected: { type: String, default: "" },
            title: { type: String, default: "" },
          },
          setup(e, { emit: t }) {
            const a = (a) => {
              a === e.selected ? t("change", "") : t("change", a);
            };
            return { handleFilterClick: a };
          },
        },
        T = k,
        _ = (a("d530"), a("0c7c")),
        w = Object(_["a"])(T, y, C, !1, null, "88fa711a", null),
        I = w.exports,
        S = function () {
          var e = this,
            t = e._self._c;
          return t("div", { staticClass: "bottom-btn u-flex-c-sb" }, [
            t("div", { staticClass: "btn left", on: { click: e.handleMy } }, [
              e._v(" " + e._s(e.isEdit ? "退出编辑" : "我的卡组") + " "),
            ]),
            t(
              "div",
              {
                class: ["btn right", e.isEdit ? "success" : ""],
                on: { click: e.handleEdit },
              },
              [e._v(" " + e._s(e.isEdit ? "确认创建" : "创建卡组") + " ")]
            ),
          ]);
        },
        x = [],
        P = {
          props: { isEdit: { type: Boolean, default: !1 } },
          setup(e, { emit: t }) {
            const { proxy: a } = Object(f["getCurrentInstance"])(),
              s = () => {
                e.isEdit
                  ? t("update:isEdit", !1)
                  : a.$router.push("/plugin/ptcg/my");
              },
              i = () => {
                e.isEdit ? t("save") : t("update:isEdit", !0);
              };
            return { handleMy: s, handleEdit: i };
          },
        },
        j = P,
        O = (a("f5c5"), Object(_["a"])(j, S, x, !1, null, "1006b6c4", null)),
        E = O.exports,
        q = function () {
          var e = this,
            t = e._self._c,
            a = e._self._setupProxy;
          return t(
            "div",
            { staticClass: "card-square" },
            [
              t("div", { staticClass: "tags-group" }, [
                t(
                  "div",
                  { staticClass: "tags" },
                  e._l(a.tags, function (s, i) {
                    return t(
                      "div",
                      {
                        key: s.id,
                        class: ["tag", s && s.active ? "active" : ""],
                        on: {
                          click: function (e) {
                            return a.handleTagSelect(i);
                          },
                        },
                      },
                      [e._v(" " + e._s(s.name) + " ")]
                    );
                  }),
                  0
                ),
              ]),
              a.items.length
                ? t(
                    a.List,
                    {
                      ref: "list",
                      attrs: {
                        finished: !a.hasMore,
                        "immediate-check": !1,
                        "finished-text": "到底了～",
                      },
                      on: { load: a.onSearch },
                      model: {
                        value: a.isLoading,
                        callback: function (e) {
                          a.isLoading = e;
                        },
                        expression: "isLoading",
                      },
                    },
                    [
                      t(
                        "div",
                        { staticClass: "list" },
                        e._l(a.items, function (s) {
                          return t(
                            "div",
                            {
                              key: s.id,
                              staticClass: "post",
                              on: {
                                click: function (e) {
                                  return a.handleClick(s);
                                },
                              },
                            },
                            [
                              t("div", { staticClass: "content otext2" }, [
                                e._v(e._s(s.content)),
                              ]),
                              t("div", { staticClass: "bottom" }, [
                                t("div", { staticClass: "left" }, [
                                  t("div", { staticClass: "nickname" }, [
                                    e._v(
                                      " " +
                                        e._s(s.updatedAt) +
                                        " 发布人：" +
                                        e._s(s.nickname) +
                                        " "
                                    ),
                                  ]),
                                  t(
                                    "div",
                                    { staticClass: "avatars" },
                                    e._l(s.checklistAttachments, function (e) {
                                      return t("img", {
                                        key: e.id,
                                        staticClass: "avatar",
                                        attrs: { src: e.avatar },
                                      });
                                    }),
                                    0
                                  ),
                                ]),
                                t("div", { staticClass: "right" }, [
                                  t(
                                    "div",
                                    { staticClass: "labels" },
                                    e._l(s.tagLabels, function (a, s) {
                                      return t(
                                        "div",
                                        { key: s, staticClass: "label" },
                                        [e._v(" " + e._s(a.title) + " ")]
                                      );
                                    }),
                                    0
                                  ),
                                ]),
                              ]),
                            ]
                          );
                        }),
                        0
                      ),
                    ]
                  )
                : e._e(),
            ],
            1
          );
        },
        L = [],
        A = a("5a0c"),
        D = a.n(A);
      const B = {
        navs: [
          {
            name: "卡组广场",
            icon: "https://cdn.qiandaoapp.com/ued/41df2207a9b7d9b072a9abc4c24ad466.png",
          },
          {
            name: "单卡图鉴",
            icon: "https://cdn.qiandaoapp.com/ued/41df2207a9b7d9b072a9abc4c24ad466.png",
          },
          {
            name: "发布卡组",
            icon: "https://cdn.qiandaoapp.com/ued/41df2207a9b7d9b072a9abc4c24ad466.png",
          },
          {
            name: "玩家交流",
            icon: "https://cdn.qiandaoapp.com/ued/41df2207a9b7d9b072a9abc4c24ad466.png",
          },
        ],
        ver: [
          { name: "全部系列", id: "" },
          { name: "特典卡", id: "131235" },
          { name: "起始组合", id: "131230" },
          { name: "赫", id: "131232" },
          { name: "苍", id: "131233" },
          { name: "泽", id: "131234" },
          { name: "沐", id: "132672" },
          { name: "魁", id: "132063" },
          { name: "唤", id: "132674" },
          { name: "交相辉映预组", id: "132676" },
          { name: "伊布礼盒", id: "132298" },
          { name: "莉莉艾礼盒", id: "131410" },
          { name: "对战精英", id: "132063" },
        ],
        zhuziTag: [
          { name: "宝可梦卡", id: "49997" },
          { name: "训练家卡", id: "49998" },
          { name: "能量卡", id: "49999" },
        ],
        pokePropertyTag: [
          { name: "草属性", id: "50021" },
          { name: "火属性", id: "50022" },
          { name: "水属性", id: "50023" },
          { name: "电属性", id: "50025" },
          { name: "超属性", id: "50026" },
          { name: "斗属性", id: "50027" },
          { name: "恶属性", id: "50028" },
          { name: "钢属性", id: "50029" },
          { name: "一般属性", id: "50030" },
          { name: "妖精属性", id: "50031" },
          { name: "龙属性", id: "50032" },
        ],
        rarePropertyTag: [
          { name: "UR", id: "1003155" },
          { name: "SSR", id: "1003158" },
          { name: "SR", id: "1003157" },
          { name: "CHR", id: "1003168" },
          { name: "PR", id: "1003166" },
          { name: "RR", id: "1003163" },
          { name: "S", id: "1003170" },
          { name: "R", id: "1003171" },
          { name: "U", id: "1003186" },
          { name: "C", id: "1003185" },
        ],
        TAGS: [
          { id: "1473819", name: "原创" },
          { id: "1473821", name: "娱乐" },
          { id: "1473817", name: "高价" },
          { id: "1473823", name: "上位" },
          { id: "1473822", name: "预构筑" },
          { id: "1473818", name: "低价" },
        ],
      };
      var R = a("d432"),
        M = {
          __name: "card-square",
          setup(e) {
            const { proxy: t } = Object(f["getCurrentInstance"])(),
              a = Object(f["reactive"])({
                items: [],
                tags: B.TAGS,
                isLoading: !1,
                hasMore: !0,
              }),
              {
                items: s,
                tags: i,
                isLoading: r,
                hasMore: c,
              } = Object(f["toRefs"])(a),
              o = Object(f["computed"])(() => a.items.length),
              d = Object(f["computed"])(() => a.tags.filter((e) => !!e.active)),
              l = async (e) => {
                var t, s;
                !(d.value.length > 2) ||
                (null !== (t = a.tags[e]) && void 0 !== t && t.active)
                  ? ((a.tags[e].active = !(
                      null !== (s = a.tags[e]) &&
                      void 0 !== s &&
                      s.active
                    )),
                    (a.tags = [...a.tags]),
                    await p(!0))
                  : Object(n["a"])("最多选择3个标签～");
              },
              u = (e) => {
                t.navigateTo({
                  url: "/pages-community/post/checklist-detail?postId=" + e.id,
                });
              },
              p = async (e = !1) => {
                var t, s;
                const i = {
                    limit: 20,
                    offset: e ? 0 : o.value,
                    orderBy: "id",
                    entryType: "tag",
                    postType: "checklist",
                    andTagIds: ["1439771"].concat(d.value.map((e) => e.id)),
                    minScore: 4,
                  },
                  { data: n } = await R["a"].getPostByTag(i),
                  r =
                    null === (t = n.posts) || void 0 === t
                      ? void 0
                      : t.map((e) => {
                          var t, a, s;
                          const i =
                              null === e ||
                              void 0 === e ||
                              null === (t = e.checklistAttachments) ||
                              void 0 === t
                                ? void 0
                                : t.map((e) => ({
                                    id: e.spu.id,
                                    avatar: e.spu.cover,
                                  })),
                            n =
                              null === i || void 0 === i
                                ? void 0
                                : i.slice(0, 4);
                          return {
                            id: e.id,
                            checklistAttachments: n,
                            content:
                              null === e || void 0 === e ? void 0 : e.content,
                            updatedAt: D()(
                              +(null === e || void 0 === e
                                ? void 0
                                : e.updatedAt)
                            ).format("MM月DD日"),
                            nickname:
                              null === e ||
                              void 0 === e ||
                              null === (a = e.user) ||
                              void 0 === a
                                ? void 0
                                : a.nickName,
                            tagLabels:
                              (null === e ||
                              void 0 === e ||
                              null === (s = e.propertyTagLabelsMap) ||
                              void 0 === s
                                ? void 0
                                : s["1473844"]) || [],
                          };
                        });
                (a.items = e ? r : [...a.items, ...r]),
                  (a.hasMore = !(
                    null === n ||
                    void 0 === n ||
                    null === (s = n.posts) ||
                    void 0 === s ||
                    !s.length
                  )),
                  (a.isLoading = !1);
              };
            return (
              p(!0),
              {
                __sfc: !0,
                proxy: t,
                state: a,
                items: s,
                tags: i,
                isLoading: r,
                hasMore: c,
                offset: o,
                selectedTag: d,
                handleTagSelect: l,
                handleClick: u,
                onSearch: p,
                List: m["a"],
              }
            );
          },
        },
        N = M,
        G = (a("efdc"), Object(_["a"])(N, q, L, !1, null, "f1866816", null)),
        z = G.exports,
        U = a("ed08"),
        $ = (a("4360"), a("ccbb")),
        V = a("4cce"),
        W = {
          components: {
            [h["a"].name]: h["a"],
            [m["a"].name]: m["a"],
            [v["a"].name]: v["a"],
            [g["a"].name]: g["a"],
            Popup: p["a"],
            Sticky: u["a"],
            Swipe: l["a"],
            SwipeItem: d["a"],
            Empty: o["a"],
            Badge: c["a"],
            Icon: r["a"],
            TypeGroup: I,
            BottomBtn: E,
            CardSquare: z,
          },
          computed: { ...Object(b["mapState"])("user", ["me"]) },
          mounted() {
            if ("{}" === JSON.stringify(this.me)) {
              const e = "/modules/pages/common-login/index";
              (Object(U["h"])() || Object(U["d"])()) &&
                this.navigateTo({ url: e });
            }
          },
          async beforeRouteEnter(e, t, a) {
            if (e.query.postId) {
              var s;
              const { data: t } = await R["a"].getSinglePost({
                  postId: e.query.postId,
                }),
                i =
                  (null === t ||
                  void 0 === t ||
                  null === (s = t.post) ||
                  void 0 === s
                    ? void 0
                    : s.checklistAttachments.map((e) => {
                        var t, a, s, i;
                        return {
                          id:
                            null === e ||
                            void 0 === e ||
                            null === (t = e.spu) ||
                            void 0 === t
                              ? void 0
                              : t.id,
                          name:
                            null === e ||
                            void 0 === e ||
                            null === (a = e.spu) ||
                            void 0 === a
                              ? void 0
                              : a.name,
                          cover:
                            null === e ||
                            void 0 === e ||
                            null === (s = e.spu) ||
                            void 0 === s
                              ? void 0
                              : s.cover,
                          count: +(null === e ||
                          void 0 === e ||
                          null === (i = e.meta) ||
                          void 0 === i
                            ? void 0
                            : i.checkListCount),
                        };
                      })) || [];
              a((a) => {
                var s, n;
                (a.isEdit = !0),
                  (a.checkedItems = i),
                  (a.postId = e.query.postId),
                  (a.isCreate = e.query.isCreate),
                  (a.summary = e.query.isCreate
                    ? ""
                    : (null === t ||
                      void 0 === t ||
                      null === (s = t.post) ||
                      void 0 === s
                        ? void 0
                        : s.summary) || ""),
                  (a.content = e.query.isCreate
                    ? ""
                    : (null === t ||
                      void 0 === t ||
                      null === (n = t.post) ||
                      void 0 === n
                        ? void 0
                        : n.content) || "");
              });
            }
            a();
          },
          setup(e) {
            const { proxy: t } = Object(f["getCurrentInstance"])(),
              a = Object(f["reactive"])({
                ...B,
                items: [],
                query: "",
                visible: !1,
                isLoading: !1,
                hasMore: !1,
                prevIdx: 0,
                selectedVer: "",
                selectedZhuziTag: "",
                selectedPokePropertyTag: "",
                selectedRarePropertyTag: "",
                name: "",
                codeNumber: "",
                isEdit: !1,
                checkedItems: [],
                showDialog: !1,
                summary: "",
                content: "",
                postId: "",
                isCreate: !1,
                activeIdx: 1,
              }),
              s = Object(f["ref"])("cards");
            Object(f["watch"])(
              () => a.query,
              (e) => {
                e && c();
              }
            ),
              Object(f["watch"])(
                () => a.prevIdx,
                (e, t) => {
                  var s, i;
                  (a.name =
                    null === (s = a.items[e]) || void 0 === s
                      ? void 0
                      : s.name),
                    (a.codeNumber =
                      null === (i = a.items[e]) || void 0 === i
                        ? void 0
                        : i.codeNumber);
                }
              );
            const i = () => {
                a.visible = !0;
              },
              r = Object(f["computed"])(() => {
                var e;
                return null === (e = a.checkedItems) || void 0 === e
                  ? void 0
                  : e.reduce((e, t) => e + t.count, 0);
              }),
              c = async (e = !1) => {
                e && window.scrollTo(0, 0);
                const t = n["a"].loading({
                    message: "加载中...",
                    forbidClick: !0,
                  }),
                  s = ["1436308"],
                  i = [];
                a.selectedVer && i.push(a.selectedVer),
                  a.selectedZhuziTag && s.push(a.selectedZhuziTag),
                  a.selectedPokePropertyTag &&
                    s.push(a.selectedPokePropertyTag),
                  a.selectedRarePropertyTag &&
                    s.push(a.selectedRarePropertyTag);
                const r = {
                  q: a.query,
                  "start-index": e ? 0 : a.items.length,
                  "max-results": 50,
                  typeIds: "49695",
                  orderBy: "order.asc",
                  propertyIds: "1123,123",
                  scene: "plugin-ptcg",
                };
                null !== s &&
                  void 0 !== s &&
                  s.length &&
                  (r.andTagIds = s.join(",")),
                  null !== i &&
                    void 0 !== i &&
                    i.length &&
                    (r.andCategoryIds = i.join(","));
                try {
                  const { data: s } = await $["a"].searchSpuInTag(r),
                    i =
                      (null === s || void 0 === s
                        ? void 0
                        : s.items.map((e) => {
                            var t;
                            return {
                              id: e.id,
                              name: e.name,
                              cover:
                                null === e ||
                                void 0 === e ||
                                null === (t = e.imgs) ||
                                void 0 === t
                                  ? void 0
                                  : t.cover,
                              codeNumber:
                                null === e || void 0 === e
                                  ? void 0
                                  : e.main_tag_name,
                              count: 0,
                            };
                          })) || [];
                  (a.items = e ? i : [...a.items, ...i]),
                    (a.hasMore = a.items.length < s.total_count);
                } catch (c) {
                } finally {
                  t.clear(), (a.isLoading = !1);
                }
              },
              o = async (e, t) => {
                t === a[e] ? (a[e] = "") : (a[e] = t), await c(!0);
              },
              d = async (e, t) => {
                (a[e] = t), await c(!0);
              },
              l = (e) => {
                var t, s;
                (a.visible = !0),
                  (a.prevIdx = e),
                  (a.name =
                    null === (t = a.items[e]) || void 0 === t
                      ? void 0
                      : t.name),
                  (a.codeNumber =
                    null === (s = a.items[e]) || void 0 === s
                      ? void 0
                      : s.codeNumber);
              },
              u = Object(f["ref"])(""),
              p = (e) => {
                l(e);
              },
              g = () => {
                0 !== a.prevIdx
                  ? ((a.prevIdx = a.prevIdx - 1), u.value.swipeTo(a.prevIdx))
                  : Object(n["a"])("没有啦～");
              },
              v = () => {
                a.prevIdx !== a.items.length - 1
                  ? ((a.prevIdx = a.prevIdx + 1), u.value.swipeTo(a.prevIdx))
                  : Object(n["a"])("没有啦～");
              },
              m = () => {
                a.visible = !1;
              },
              h = async () => {
                var e, t;
                const s =
                  null === (e = a.items) ||
                  void 0 === e ||
                  null ===
                    (t = e[null === a || void 0 === a ? void 0 : a.prevIdx]) ||
                  void 0 === t
                    ? void 0
                    : t.id;
                if (s)
                  try {
                    await V["a"].postUserWishes({ action: "add", items: [s] }),
                      Object(n["a"])("已添加到心愿单～");
                  } catch (i) {}
              },
              b = () => {
                var e, s;
                const i =
                  null === (e = a.items) ||
                  void 0 === e ||
                  null ===
                    (s = e[null === a || void 0 === a ? void 0 : a.prevIdx]) ||
                  void 0 === s
                    ? void 0
                    : s.id;
                t.navigateTo({ url: "/pages-market/spu/index?id=" + i });
              },
              y = (e, s) => {
                if (r.value > 59 && !s)
                  return void Object(n["a"])("不能超过60个哦～");
                const i = a.checkedItems.find((t) => t.id === e.id);
                if (i) {
                  const t = s ? i.count - 1 : i.count + 1;
                  0 === t
                    ? (a.checkedItems = a.checkedItems.filter(
                        (t) => t.id !== e.id
                      ))
                    : (i.count = t);
                } else s || a.checkedItems.push({ ...e, count: 1 });
                t.$nextTick(() => {
                  const e = document.getElementById("cards");
                  e &&
                    (e.scrollLeft =
                      (null === e || void 0 === e ? void 0 : e.scrollWidth) ||
                      0);
                });
              },
              C = (e) => {
                a.checkedItems.splice(e, 1);
              },
              k = () => {
                0 !== r.value
                  ? (a.showDialog = !0)
                  : Object(n["a"])("请选择卡片～");
              },
              T = async () => {
                if (!a.summary) return void Object(n["a"])("请输入名称");
                a.showDialog = !1;
                const e = a.checkedItems.map((e) => ({
                    type: "checklist",
                    meta: {
                      relatedId: e.id,
                      relatedType: "spu",
                      checkListCount: String(e.count),
                    },
                  })),
                  t = _.value.map((e) => ({
                    relatedId: e.id,
                    relatedType: "tag",
                    propertyTagId: "1473844",
                  })),
                  s = {
                    summary: a.summary,
                    content: a.content,
                    privacy: "public",
                    checklistAttachments: e,
                    type: "checklist",
                    meta: { plugin: { id: "ptcg-v1" } },
                    activeTags: [{ id: "1439771", type: "tag" }],
                    islandId: "300148",
                    labels: t,
                  };
                if (!a.postId || a.isCreate)
                  try {
                    await R["a"].createPost({ ...s }),
                      n["a"].success("创建成功～"),
                      (a.checkedItems = []),
                      (a.isEdit = !1);
                  } catch (i) {
                    console.log(i), Object(n["a"])("创建失败～");
                  }
                else
                  try {
                    await R["a"].updatePost({ postId: a.postId, ...s }),
                      Object(n["a"])("更新成功～"),
                      (a.checkedItems = []),
                      (a.isEdit = !1);
                  } catch (i) {}
              },
              _ = Object(f["computed"])(() => a.TAGS.filter((e) => !!e.active)),
              w = (e) => {
                let a = "/pages-market/island/index?id=300148";
                e && (a = "/pages-market/island/index?id=300148&tabName=" + e),
                  Object(U["h"])() || Object(U["d"])()
                    ? t.navigateTo({ url: a })
                    : Object(n["a"])("请下载“千岛”App，搜索“PTCG岛”");
              },
              I = (e) => {
                if (0 === e || 1 === e)
                  return (a.activeIdx = e), void (a.isEdit = !1);
                2 === e && ((a.activeIdx = 1), (a.isEdit = !0)), 3 === e && w();
              },
              S = (e) => {
                var t, s;
                !(_.value.length > 2) ||
                (null !== (t = a.TAGS[e]) && void 0 !== t && t.active)
                  ? ((a.TAGS[e].active = !(
                      null !== (s = a.TAGS[e]) &&
                      void 0 !== s &&
                      s.active
                    )),
                    (a.TAGS = [...a.TAGS]))
                  : Object(n["a"])("最多选择3个标签～");
              };
            return (
              c(!0),
              {
                ...Object(f["toRefs"])(a),
                swiper: u,
                selectedCount: r,
                cards: s,
                handleClick: i,
                onSearch: c,
                handleFilterClick: o,
                handleChange: d,
                handlePreview: l,
                handleSwipeChange: p,
                pre: g,
                next: v,
                handleClose: m,
                handleWish: h,
                navigateSPU: b,
                handleStepChange: y,
                handleDelete: C,
                handleCreate: k,
                handleConfirm: T,
                handleNavClick: I,
                handleTagSelect: S,
              }
            );
          },
        },
        F = W,
        Z = (a("1193"), Object(_["a"])(F, s, i, !1, null, "1956760a", null));
      t["default"] = Z.exports;
    },
    1193: function (e, t, a) {
      "use strict";
      a("505a");
    },
    "505a": function (e, t, a) {},
    "56d1": function (e, t, a) {},
    "80d2": function (e, t, a) {},
    ccbb: function (e, t, a) {
      "use strict";
      var s = a("0ef7");
      t["a"] = {
        getStandardProducts(e) {
          return s["p"].get(`/spus/${e}/standard-products`);
        },
        getSPUs(e) {
          return s["p"].get("/v2/spus", e);
        },
        getSingleSpu(e, t) {
          return s["p"].get("/v2/spus/" + e, t);
        },
        getUserPosters(e) {
          return s["h"].post("/c2c-web/v1/poster/get-user-posters", e);
        },
        doProductsOffSale(e) {
          return s["h"].post("/c2c-web/v1/c2c/products/off-sale", e);
        },
        plastSearchCategory(e) {
          return s["h"].get("/plast/search/category/v3", e);
        },
        createUserPoster(e) {
          return s["h"].post("/c2c-web/v1/poster/create-user-poster", e);
        },
        getSPUSpecs(e) {
          return s["p"].get(`/spus/${e}/specs`);
        },
        updateC2cProductsByCategory(e) {
          return s["h"].post("/c2c/products/m-update", e);
        },
        updateProductMulti(e) {
          return s["h"].post("/c2c/products/multi-create", e);
        },
        createProductMulti(e) {
          return s["h"].post("/c2c/products/m-create-update", e);
        },
        getProductsByCategory(e) {
          return s["h"].get("/c2c/products/by-category", e);
        },
        getCategoryDetail(e, t) {
          return s["p"].get("/v2/categories/" + e, t);
        },
        getCategories(e) {
          return s["p"].get("/v2/categories", e);
        },
        getRecommendCategories(e) {
          return s["p"].get(`/v2/categories/${e}/recommend`);
        },
        getCategoryTags(e) {
          return s["p"].get(`/v2/categories/${e}/config`);
        },
        getTag(e, t) {
          return s["p"].get("/tags/" + e, t);
        },
        getHotTags(e) {
          return s["p"].get(`/tags/${e}/config`);
        },
        getTags(e) {
          return s["p"].get("/tags", e);
        },
        searchCategories(e) {
          return s["p"].get("/v2/categories", e);
        },
        getSettings() {
          return s["p"].get("/settings");
        },
        changeWishes(e) {
          return s["p"].post("/wish-list", e);
        },
        updateUserSettings(e) {
          return s["p"].put("/settings", e);
        },
        getPosterColumnConfig(e) {
          return s["l"].get("/action/get-products-poster", e);
        },
        getPosterThemes(e) {
          return s["l"].get("/action/get-poster-themes", e, {
            isErrorDefaultTip: !1,
          });
        },
        getWishList(e) {
          return s["p"].get("/wish-list", e, { isErrorDefaultTip: !1 });
        },
        getWishMatches(e) {
          return s["p"].get("/products/match/wish-list", e, {
            isErrorDefaultTip: !1,
          });
        },
        getDemandProductList(e) {
          return s["p"].get("/products/match/demand-list", e);
        },
        getTradeInfo(e) {
          return s["p"].post("/action/get-trade-info", e);
        },
        get360DegImages(e) {
          return s["p"].get(`/spus/${e}/360-degree-images`);
        },
        getBarginSpus(e) {
          return s["p"].post("/stock-order/bargin", e);
        },
        getSpecsByMPName(e) {
          return s["p"].get("/specs/aciton/get-by-app-name", e);
        },
        getDistribution(e) {
          return s["p"].get("/feeds/chaowan", e);
        },
        getSellingCategories(e) {
          return s["p"].get("/products/action/get-selling-categories", e);
        },
        getCategoryCount(e) {
          return s["p"].get("/products/action/get-category-product-count", e);
        },
        getSpuList(e) {
          return s["h"].post("/treasure/spus/search/simple-info", e);
        },
        getSpuHeader(e) {
          return s["h"].get("/treasure/flora/v2/spu/simpleInfo", e);
        },
        getSpuDetails(e) {
          return s["h"].get("/treasure/flora/v1/spu/detailInfo", e);
        },
        getTagList(e) {
          return s["h"].get("/treasure/tags", e);
        },
        getTagDetails(e) {
          return s["h"].get("/treasure/flora/v1/tag/detailInfo", e);
        },
        getTagDetailsV2(e) {
          return s["h"].get("/treasure/flora/v2/tag/simpleInfo", e);
        },
        searchSpuInTag(e) {
          return s["h"].get("/plast/search/spu", e);
        },
        searchTag(e) {
          return s["h"].get("/plast/search/tag", e);
        },
        getXiaokaWebConfig() {
          return s["e"].get("/vinyl/web.json");
        },
        getTagsV2(e) {
          return s["h"].get("/armory/entry/tags", e);
        },
      };
    },
    d432: function (e, t, a) {
      "use strict";
      var s = a("0ef7");
      t["a"] = {
        createPost(e) {
          return s["h"].post("/gactus-web/post/create", e);
        },
        updatePost(e) {
          return s["h"].post("/gactus-web/post/update", e);
        },
        getPostByUser(e) {
          return s["h"].post("/gactus/posts/by-user-v2", e);
        },
        getPostByTag(e) {
          return s["h"].post("/gactus/posts/by-tag-v4", e);
        },
        getSinglePost(e) {
          return s["h"].post("/gactus/single-post", e);
        },
        getYearReport(e) {
          return s["h"].post("/gactus-web/v1/poster/larp_yearly_2022", e);
        },
        getTaskDetail(e) {
          return s["h"].get("/gactus-web/v1/generative-task/user", e);
        },
        generateTaskConfirm(e) {
          return s["h"].post("/gactus-web/v1/generative-task/confirm", e);
        },
        getTaskTip(e) {
          return s["h"].get("/gactus-web/v1/generative-task/tips", e);
        },
        taskUpsert(e) {
          return s["h"].post("/gactus-web/v1/generative-task/upsert", e);
        },
        taskAddTimes(e) {
          return s["h"].post("/gactus-web/v1/generative-task/share/report", e);
        },
        feedBack(e) {
          return s["h"].post("/gactus-web/v1/session/feedback", e);
        },
        getAnswer(e) {
          return s["h"].get("/gactus-web/v1/session/get-answer", e);
        },
        sendQuestion(e) {
          return s["h"].post("/gactus-web/v1/session/send-question", e);
        },
        getPostInfo(e) {
          return s["h"].get("/gactus-web/post/detail-info", e);
        },
        getFavoriteEntryVote(e) {
          return s["h"].post("/gactus-web/v1/favorite_entry_vote/get", e);
        },
      };
    },
    d530: function (e, t, a) {
      "use strict";
      a("80d2");
    },
    eb4a: function (e, t, a) {},
    efdc: function (e, t, a) {
      "use strict";
      a("eb4a");
    },
    f5c5: function (e, t, a) {
      "use strict";
      a("56d1");
    },
  },
]);
