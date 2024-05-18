(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-bf0d880c"],
  {
    2249: function (e, t, a) {
      "use strict";
      a("c20a");
    },
    "2e45": function (e, t, a) {},
    3066: function (e, t, a) {
      "use strict";
      a.r(t);
      var s = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { staticClass: "page-zelda" },
            [
              t("Sticky", [
                t("img", {
                  staticClass: "header-img",
                  attrs: {
                    src: "https://cdn.qiandaoapp.com/ued/39fc9856e3f2752dc03b835460114683.png",
                    alt: "",
                    srcset: "",
                  },
                }),
                t("div", { staticClass: "header" }, [
                  e.isEdit
                    ? t("div", { staticClass: "card-group" }, [
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
                              e._v("暂无已选的素材"),
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
                      attrs: { placeholder: "输入素材名称" },
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
                    t("TypeGroup", {
                      attrs: {
                        title: "分类",
                        filters: e.zhuziTag,
                        selected: e.selectedZhuziTag,
                      },
                      on: {
                        change: function (t) {
                          return e.handleChange("selectedZhuziTag", t);
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
                                    staticClass: "cover u-flex-col-c-c",
                                  },
                                  [
                                    t("img", {
                                      directives: [
                                        {
                                          name: "lazy",
                                          rawName: "v-lazy",
                                          value: {
                                            src: a.cover
                                              ? a.cover + "!fill_w360_h480_jpg"
                                              : "https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg",
                                            loading:
                                              "https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg",
                                          },
                                          expression:
                                            "{\n              src: i.cover\n                ? i.cover + '!fill_w360_h480_jpg'\n                : 'https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg',\n              loading:\n                'https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg',\n            }",
                                        },
                                      ],
                                      attrs: {
                                        src: a.cover + "!fill_w360_h360_jpg",
                                        alt: "",
                                      },
                                      on: {
                                        click: function (t) {
                                          return e.handlePreview(s);
                                        },
                                      },
                                    }),
                                    t(
                                      "div",
                                      { staticClass: "spu-name otext" },
                                      [e._v(e._s(a.name))]
                                    ),
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
                                          t("div", { staticClass: "gap" }),
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
                    t("BottomBtn", { on: { back: e.handleBack } }),
                  ]
                : e._e(),
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
                                "show-indicators": !1,
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
                                      value: {
                                        src: e.cover
                                          ? e.cover + "!fill_w360_h480_jpg"
                                          : "https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg",
                                        loading:
                                          "https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg",
                                      },
                                      expression:
                                        "{\n                src: i.cover\n                  ? i.cover + '!fill_w360_h480_jpg'\n                  : 'https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg',\n                loading:\n                  'https://cdn.qiandaoapp.com/admins/8410e407edf0fddd60405fb55b93c268.jpg',\n              }",
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
        _ = k,
        w = (a("2249"), a("0c7c")),
        S = Object(w["a"])(_, y, C, !1, null, "46ca2ea8", null),
        T = S.exports,
        x = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            {
              staticClass: "bottom-btn u-flex-c-c",
              on: {
                click: function (t) {
                  return e.$emit("back");
                },
              },
            },
            [t("div", { staticClass: "btn u-flex-c-c" }, [e._v("选好了")])]
          );
        },
        I = [],
        j = a("ed08"),
        O = {
          props: { isEdit: { type: Boolean, default: !1 } },
          setup(e, { emit: t }) {
            const { proxy: a } = Object(f["getCurrentInstance"])(),
              s = () => {
                e.isEdit
                  ? t("update:isEdit", !1)
                  : a.$router.push("/plugin/zelda/my");
              },
              i = () => {
                e.isEdit ? t("save") : t("update:isEdit", !0);
              },
              n = () => {
                const e = "/pages-market/island/index?id=300135";
                (Object(j["h"])() || Object(j["d"])()) &&
                  a.navigateTo({ url: e });
              };
            return { handleMy: s, handleEdit: i, handleToIsland: n };
          },
        },
        P = O,
        q = (a("83ce"), Object(w["a"])(P, x, I, !1, null, "27c2c335", null)),
        L = q.exports,
        N = function () {
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
        B = [],
        z = a("5a0c"),
        E = a.n(z);
      const A = {
        zhuziTag: [
          { name: "左纳乌材料", id: "591015477346676320" },
          { name: "神庙素材", id: "595404985462920698" },
          { name: "建材", id: "591015477346676379" },
          { name: "素材", id: "591015481641643745" },
          { name: "其他", id: "591015468756741265" },
          { name: "添加剂", id: "591015481641643797" },
          { name: "植物", id: "591015473051708921" },
          { name: "水果", id: "591015473051708715" },
          { name: "蘑菇", id: "591015473051708881" },
          { name: "水产", id: "591015464461773906" },
          { name: "生物", id: "591015468756741329" },
          { name: "单手武器", id: "591015490231578542" },
          { name: "肉类", id: "591015485936611233" },
          { name: "矿类", id: "591015485936611146" },
          { name: "双手武器", id: "591015490231578717" },
          { name: "弓箭", id: "591015498821513580" },
          { name: "盾", id: "591015498821513713" },
          { name: "长枪", id: "591015494526546113" },
        ],
      };
      var D = a("d432"),
        M = {
          __name: "card-square",
          setup(e) {
            const { proxy: t } = Object(f["getCurrentInstance"])(),
              a = Object(f["reactive"])({
                items: [],
                tags: A.TAGS,
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
                  { data: n } = await D["a"].getPostByTag(i),
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
                            updatedAt: E()(
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
        $ = M,
        J = (a("d03c"), Object(w["a"])($, N, B, !1, null, "426a23da", null)),
        G = J.exports,
        U = a("4360"),
        R = a("ccbb"),
        W = a("4cce"),
        V = a("a18c"),
        Z = {
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
            TypeGroup: T,
            BottomBtn: L,
            CardSquare: G,
          },
          computed: { ...Object(b["mapState"])("user", ["me"]) },
          mounted() {
            if ("{}" === JSON.stringify(this.me)) {
              const e = "/modules/pages/common-login/index";
              (Object(j["h"])() || Object(j["d"])()) &&
                this.navigateTo({ url: e });
            }
          },
          activated() {
            this.checkedItems = JSON.parse(
              JSON.stringify(U["a"].state.zelda.checkedItems)
            );
          },
          setup(e) {
            const { proxy: t } = Object(f["getCurrentInstance"])(),
              a = Object(f["reactive"])({
                ...A,
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
                isEdit: !0,
                showDialog: !1,
                summary: "",
                content: "",
                postId: "",
                isCreate: !1,
                activeIdx: 1,
                fileList: [],
              }),
              s = Object(f["ref"])("cards"),
              i = Object(f["ref"])([]),
              r = (e) => {
                U["a"].dispatch("zelda/updateCheckedItems", e);
              },
              c = V["a"].currentRoute,
              o = c.query;
            Object(f["watch"])(
              () => U["a"].state.zelda.checkedItems,
              (e) => {
                i.value = JSON.parse(JSON.stringify(e));
              }
            ),
              Object(f["watch"])(
                () => a.query,
                (e) => {
                  e && p();
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
            const d = Object(f["computed"])(() => a.items.length),
              l = () => {
                a.visible = !0;
              },
              u = Object(f["computed"])(() => {
                var e;
                return null === (e = a.checkedItems) || void 0 === e
                  ? void 0
                  : e.reduce((e, t) => e + t.count, 0);
              }),
              p = async (e = !1) => {
                e && window.scrollTo(0, 0);
                const t = n["a"].loading({
                    message: "加载中...",
                    forbidClick: !0,
                  }),
                  s = [];
                a.selectedZhuziTag && s.push({ sourceId: a.selectedZhuziTag });
                const i = {
                  limit: 20,
                  offset: e ? 0 : d.value,
                  andPublicRelations: s,
                  orTagIds: ["10000043"],
                  scene: "plugins",
                };
                try {
                  let s, n;
                  if (a.query) {
                    var r;
                    const { data: t } = await R["a"].searchSpuInTag({
                      q: a.query,
                      "start-index": e ? 0 : a.items.length,
                      "max-results": 50,
                      typeIds: "10000043",
                      orderBy: "order.asc",
                    });
                    (n = t.total_count),
                      (s =
                        null === t ||
                        void 0 === t ||
                        null === (r = t.items) ||
                        void 0 === r
                          ? void 0
                          : r.map((e) => {
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
                                count: 0,
                                typeId: e.type_id,
                              };
                            }));
                  } else {
                    var c;
                    const { data: e } = await R["a"].getSpuList(i);
                    (s =
                      (null === e ||
                      void 0 === e ||
                      null === (c = e.list) ||
                      void 0 === c
                        ? void 0
                        : c.map((e) => {
                            var t, a, s, i;
                            return {
                              id: e.id,
                              name: e.name,
                              cover:
                                null === e || void 0 === e ? void 0 : e.cover,
                              typeId:
                                null === e || void 0 === e ? void 0 : e.typeId,
                              count: 0,
                              total:
                                (null === e ||
                                void 0 === e ||
                                null === (t = e.profiles) ||
                                void 0 === t ||
                                null === (a = t[0]) ||
                                void 0 === a ||
                                null === (s = a.profiles) ||
                                void 0 === s ||
                                null === (i = s[0]) ||
                                void 0 === i
                                  ? void 0
                                  : i.dataValue) || 0,
                            };
                          })) || []),
                      (n = e.count);
                  }
                  (a.items = e ? s : [...a.items, ...s]),
                    (a.hasMore = a.items.length < n);
                } catch (o) {
                } finally {
                  t.clear(), (a.isLoading = !1);
                }
              },
              g = async (e, t) => {
                t === a[e] ? (a[e] = "") : (a[e] = t), await p(!0);
              },
              v = async (e, t) => {
                (a[e] = t), await p(!0);
              },
              m = (e) => {
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
              h = Object(f["ref"])(""),
              b = (e) => {
                m(e);
              },
              y = () => {
                0 !== a.prevIdx
                  ? ((a.prevIdx = a.prevIdx - 1), h.value.swipeTo(a.prevIdx))
                  : Object(n["a"])("没有啦～");
              },
              C = () => {
                a.prevIdx !== a.items.length - 1
                  ? ((a.prevIdx = a.prevIdx + 1), h.value.swipeTo(a.prevIdx))
                  : Object(n["a"])("没有啦～");
              },
              k = () => {
                a.visible = !1;
              },
              _ = async () => {
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
                    await W["a"].postUserWishes({ action: "add", items: [s] }),
                      Object(n["a"])("已添加到心愿单～");
                  } catch (i) {}
              },
              w = () => {
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
              S = (e, a) => {
                let s = JSON.parse(JSON.stringify(i.value));
                const n = s.find((t) => t.id === e.id);
                if (n) {
                  const t = a ? n.count - 1 : n.count + 1;
                  0 === t
                    ? (s = s.filter((t) => t.id !== e.id))
                    : (n.count = t);
                } else a || s.push({ ...e, count: 1 });
                r(s),
                  t.$nextTick(() => {
                    const e = document.getElementById("cards");
                    e &&
                      (e.scrollLeft =
                        (null === e || void 0 === e ? void 0 : e.scrollWidth) ||
                        0);
                  });
              },
              T = (e) => {
                const t = JSON.parse(JSON.stringify(i.value));
                t.splice(e, 1), r(t);
              },
              x = () => {
                0 !== u.value
                  ? (a.showDialog = !0)
                  : Object(n["a"])("请选择卡片～");
              },
              I = Object(f["computed"])(() => a.TAGS.filter((e) => !!e.active)),
              O = (e) => {
                let a = "/pages-market/island/index?id=300148";
                e && (a = "/pages-market/island/index?id=300148&tabName=" + e),
                  Object(j["h"])() || Object(j["d"])()
                    ? t.navigateTo({ url: a })
                    : Object(n["a"])("请下载“千岛”App，搜索“PTCG岛”");
              },
              P = (e) => {
                if (0 === e || 1 === e)
                  return (a.activeIdx = e), void (a.isEdit = !1);
                2 === e && ((a.activeIdx = 1), (a.isEdit = !0)), 3 === e && O();
              },
              q = (e) => {
                var t, s;
                !(I.value.length > 2) ||
                (null !== (t = a.TAGS[e]) && void 0 !== t && t.active)
                  ? ((a.TAGS[e].active = !(
                      null !== (s = a.TAGS[e]) &&
                      void 0 !== s &&
                      s.active
                    )),
                    (a.TAGS = [...a.TAGS]))
                  : Object(n["a"])("最多选择3个标签～");
              },
              L = (e) => {
                console.log("file", a.fileList);
              };
            p(!0);
            const N = () => {
              V["a"].replace({ name: "zelda-create-post", query: o });
            };
            return {
              ...Object(f["toRefs"])(a),
              swiper: h,
              selectedCount: u,
              cards: s,
              checkedItems: i,
              handleBack: N,
              handleClick: l,
              onSearch: p,
              handleFilterClick: g,
              handleChange: v,
              handlePreview: m,
              handleSwipeChange: b,
              afterRead: L,
              pre: y,
              next: C,
              handleClose: k,
              handleWish: _,
              navigateSPU: w,
              handleStepChange: S,
              handleDelete: T,
              handleCreate: x,
              handleNavClick: P,
              handleTagSelect: q,
            };
          },
        },
        F = Z,
        H = (a("e47c"), Object(w["a"])(F, s, i, !1, null, "6e94620c", null));
      t["default"] = H.exports;
    },
    "83ce": function (e, t, a) {
      "use strict";
      a("2e45");
    },
    8943: function (e, t, a) {},
    c20a: function (e, t, a) {},
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
    d03c: function (e, t, a) {
      "use strict";
      a("8943");
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
    e47c: function (e, t, a) {
      "use strict";
      a("ed88");
    },
    ed88: function (e, t, a) {},
  },
]);
