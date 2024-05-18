(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-374894a6"],
  {
    "4d2f": function (e, t, a) {},
    "4de5": function (e, t, a) {
      "use strict";
      a("50436");
    },
    50436: function (e, t, a) {},
    6376: function (e, t, a) {},
    "7cb2": function (e, t, a) {
      "use strict";
      a.d(t, "b", function () {
        return n;
      }),
        a.d(t, "c", function () {
          return s;
        }),
        a.d(t, "a", function () {
          return r;
        });
      var o = a("0ef7"),
        l = a("0d94"),
        i = a("a37c");
      async function n(e, t = "interior-admin.image") {
        const a = Object(l["e"])({
          isProd: i["e"],
          async customApiCall(e) {
            var t;
            const a = await o["h"].post("/uploader/gene-post-object-sign", e);
            return null === (t = a.data) || void 0 === t ? void 0 : t[0];
          },
        });
        return a({ file: e, scene: t });
      }
      function s(e) {
        return o["h"].get("/uploader/file-space/get", e);
      }
      function r(e, t = "interior-admin.image") {
        const a = Object(l["e"])({
          isProd: i["e"],
          async customApiCall(e) {
            var t;
            const a = await o["h"].post(
              "/uploader/anonymous/gene-post-object-sign",
              e
            );
            return null === (t = a.data) || void 0 === t ? void 0 : t[0];
          },
        });
        return a({ file: e, scene: t });
      }
    },
    b3ec: function (e, t, a) {
      "use strict";
      a.d(t, "a", function () {
        return i;
      });
      var o = a("2b0e"),
        l = a("4360");
      function i() {
        const e = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].getters) || void 0 === e
              ? void 0
              : e["aigc/mainColor"];
          }),
          t = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].getters) || void 0 === e
              ? void 0
              : e["aigc/secondaryColor"];
          }),
          a = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].getters) || void 0 === e
              ? void 0
              : e["aigc/color2"];
          }),
          i = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].getters) || void 0 === e
              ? void 0
              : e["aigc/color2"];
          }),
          n = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].getters) || void 0 === e
              ? void 0
              : e["aigc/color3"];
          }),
          s = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].getters) || void 0 === e
              ? void 0
              : e["aigc/color4"];
          }),
          r = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].getters) || void 0 === e
              ? void 0
              : e["aigc/backgroundColor"];
          }),
          c = Object(o["computed"])(() => {
            var t, a;
            return (
              (null === (t = l["a"].state.aigc.pageConfig) ||
              void 0 === t ||
              null === (a = t.theme) ||
              void 0 === a
                ? void 0
                : a.mainBackground) || e.value
            );
          }),
          u = Object(o["computed"])(() => {
            var t, a;
            return (
              (null === (t = l["a"].state.aigc.pageConfig) ||
              void 0 === t ||
              null === (a = t.theme) ||
              void 0 === a
                ? void 0
                : a.buttonColor) || e.value
            );
          }),
          d = Object(o["computed"])(() => {
            var e, t;
            return null === (e = l["a"].state.aigc.pageConfig) ||
              void 0 === e ||
              null === (t = e.components) ||
              void 0 === t
              ? void 0
              : t.upload;
          }),
          v = Object(o["computed"])(() => {
            var e, t;
            return null === (e = l["a"].state.aigc.pageConfig) ||
              void 0 === e ||
              null === (t = e.components) ||
              void 0 === t
              ? void 0
              : t.book;
          }),
          p = Object(o["computed"])(() => {
            var e, t;
            return null === (e = l["a"].state.aigc.pageConfig) ||
              void 0 === e ||
              null === (t = e.components) ||
              void 0 === t
              ? void 0
              : t.auth;
          }),
          g = Object(o["computed"])(() => {
            var e, t;
            return null === (e = l["a"].state.aigc.pageConfig) ||
              void 0 === e ||
              null === (t = e.theme) ||
              void 0 === t
              ? void 0
              : t.buttonBackground;
          }),
          m = Object(o["computed"])(() => {
            var e, t;
            return null === (e = l["a"].state.aigc.pageConfig) ||
              void 0 === e ||
              null === (t = e.theme) ||
              void 0 === t
              ? void 0
              : t.navbar;
          }),
          f = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].state.aigc.pageConfig) || void 0 === e
              ? void 0
              : e.promptConfig;
          }),
          h = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].state.aigc.pageConfig) || void 0 === e
              ? void 0
              : e.scene;
          }),
          b = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].state.aigc.pageConfig) || void 0 === e
              ? void 0
              : e.labelConfig;
          }),
          C = Object(o["computed"])(() => l["a"].state.aigc.pageConfig),
          _ = Object(o["computed"])(() => l["a"].state.aigc.selectRole),
          k = Object(o["computed"])(() => l["a"].state.aigc.config),
          y = Object(o["computed"])(() => l["a"].state.aigc.rolesConfig),
          w = Object(o["computed"])(() => l["a"].state.aigc.modelConfig),
          O = Object(o["computed"])(() => l["a"].state.aigc.bookConfig),
          j = Object(o["computed"])(() => l["a"].state.user.me),
          I = Object(o["computed"])(() => {
            var e, t, a;
            return (
              (null === (e = O.value) ||
              void 0 === e ||
              null === (t = e.flatMap((e) => e.subTabs)) ||
              void 0 === t ||
              null === (a = t.filter((e) => e.selected)) ||
              void 0 === a
                ? void 0
                : a.sort((e, t) => t.selectIdx - e.selectIdx)) || []
            );
          }),
          x = Object(o["computed"])({
            get() {
              return l["a"].state.aigc.contentPrompt;
            },
            set(e) {
              l["a"].commit("aigc/setContentPrompt", e);
            },
          }),
          F = Object(o["computed"])({
            get() {
              return l["a"].state.aigc.selectIdx;
            },
            set(e) {
              l["a"].commit("aigc/setSelectIdx", e);
            },
          }),
          S = Object(o["computed"])(() => {
            var e;
            return null === (e = l["a"].state.aigc.pageConfig) || void 0 === e
              ? void 0
              : e.shareConfig;
          }),
          B = Object(o["computed"])(() => l["a"].state.aigc.referenceRole);
        return {
          color: e,
          color1: a,
          color2: i,
          color3: n,
          color4: s,
          secondaryColor: t,
          backgroundColor: r,
          mainBcg: c,
          buttonColor: u,
          withUpload: d,
          withAuth: p,
          buttonBackground: g,
          navbarColor: m,
          promptConfig: f,
          scene: h,
          pageConfig: C,
          role: _,
          groups: k,
          rolesConfig: y,
          modelConfig: w,
          bookConfig: O,
          me: j,
          withBook: v,
          selectItems: I,
          contentPrompt: x,
          selectIdx: F,
          labelConfig: b,
          shareConfig: S,
          referenceRole: B,
        };
      }
    },
    b4cd: function (e, t, a) {
      "use strict";
      a.r(t);
      var o = function () {
          var e,
            t,
            a,
            o,
            l,
            i = this,
            n = i._self._c,
            s = i._self._setupProxy;
          return n(
            "div",
            { staticClass: "home", class: [s.showNav ? "" : "wechat"] },
            [
              n(
                s.Layout,
                [
                  s.showNav
                    ? n(s.NavBar, {
                        staticStyle: { top: "88rpx" },
                        attrs: {
                          border: !1,
                          "safe-area-inset-top": "",
                          fixed: "",
                          "z-index": "100",
                        },
                        on: {
                          "click-left": s.onClickLeft,
                          "click-right": s.onClickRight,
                        },
                        scopedSlots: i._u(
                          [
                            {
                              key: "left",
                              fn: function () {
                                return [
                                  n(s.DuIcon, {
                                    attrs: {
                                      name: "arrow-left",
                                      size: "24px",
                                      color: s.navbarColor || "2B263B",
                                    },
                                  }),
                                ];
                              },
                              proxy: !0,
                            },
                            {
                              key: "right",
                              fn: function () {
                                return [
                                  n(s.DuIcon, {
                                    attrs: {
                                      name: "share",
                                      size: "24px",
                                      color: s.navbarColor || "2B263B",
                                    },
                                  }),
                                ];
                              },
                              proxy: !0,
                            },
                          ],
                          null,
                          !1,
                          245366704
                        ),
                      })
                    : i._e(),
                  [
                    n(
                      "div",
                      { staticClass: "content" },
                      [
                        "DramaReferenceOnly" === s.scene
                          ? n(
                              "div",
                              { staticClass: "reference-conent mb-20" },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass: "header mb-10 u-flex-c",
                                    staticStyle: { "align-items": "flex-end" },
                                  },
                                  [
                                    n("div", { staticClass: "title mr-8" }, [
                                      i._v("选择你的剧本角色"),
                                    ]),
                                  ]
                                ),
                                0 === s.dramaRoleList.length
                                  ? [
                                      n(
                                        "div",
                                        {
                                          staticClass: "upload-btn u-flex-c-c",
                                          on: { click: s.handleSelectRole },
                                        },
                                        [
                                          s.referenceRole
                                            ? n("img", {
                                                staticClass: "role-img",
                                                attrs: {
                                                  src:
                                                    (null ===
                                                      (e = s.referenceRole) ||
                                                    void 0 === e
                                                      ? void 0
                                                      : e.cover) +
                                                    "!fill_w360_h360_jpg",
                                                  alt: "",
                                                },
                                              })
                                            : n(s.Icon, {
                                                staticClass: "icon",
                                                attrs: {
                                                  name: "add",
                                                  size: "32",
                                                  color: "#FFFFFF",
                                                },
                                              }),
                                        ],
                                        1
                                      ),
                                    ]
                                  : n("div", { staticClass: "role-list" }, [
                                      n(
                                        "div",
                                        { staticClass: "role-wrap" },
                                        i._l(s.dramaRoleList, function (e, t) {
                                          return n(
                                            "div",
                                            {
                                              key: t,
                                              staticClass:
                                                "role-item u-flex-col",
                                              on: {
                                                click: function (t) {
                                                  return s.handleSelectDramaRole(
                                                    { ...e }
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "role-item-image-container",
                                                },
                                                [
                                                  n("img", {
                                                    staticClass: "role-img",
                                                    attrs: {
                                                      src:
                                                        e.cover +
                                                        "!fill_w360_h480_jpg",
                                                      alt: "",
                                                    },
                                                  }),
                                                  s.referenceRole &&
                                                  s.referenceRole.id === e.id
                                                    ? n(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "select-tip-area",
                                                        },
                                                        [i._v(" 已选择 ")]
                                                      )
                                                    : i._e(),
                                                ]
                                              ),
                                              n(
                                                "div",
                                                {
                                                  staticClass:
                                                    "role-name otext",
                                                },
                                                [i._v(i._s(e.name))]
                                              ),
                                            ]
                                          );
                                        }),
                                        0
                                      ),
                                    ]),
                              ],
                              2
                            )
                          : i._e(),
                        s.withUpload
                          ? n(
                              "div",
                              { staticClass: "upload-content mb-20" },
                              [
                                "DramaImg2Img" === s.scene
                                  ? n(
                                      "div",
                                      {
                                        staticClass: "header mb-10 u-flex-c",
                                        staticStyle: {
                                          "align-items": "flex-end",
                                        },
                                      },
                                      [
                                        n(
                                          "div",
                                          { staticClass: "title mr-8" },
                                          [i._v("上传你的定妆照")]
                                        ),
                                        n("span", { staticClass: "subtitle" }, [
                                          i._v("推荐上传单人照"),
                                        ]),
                                      ]
                                    )
                                  : i._e(),
                                "DramaReferenceOnly" === s.scene
                                  ? n(
                                      "div",
                                      {
                                        staticClass: "header mb-10 u-flex-c",
                                        staticStyle: {
                                          "align-items": "flex-end",
                                        },
                                      },
                                      [
                                        n(
                                          "div",
                                          { staticClass: "title mr-8" },
                                          [i._v("上传你的单人照")]
                                        ),
                                      ]
                                    )
                                  : i._e(),
                                "CW_2" === s.scene
                                  ? n(
                                      "div",
                                      {
                                        staticClass: "header mb-10 u-flex-c",
                                        staticStyle: {
                                          "align-items": "flex-end",
                                        },
                                      },
                                      [
                                        n(
                                          "div",
                                          { staticClass: "title mr-8" },
                                          [i._v("上传你的人物照片")]
                                        ),
                                        n("span", { staticClass: "subtitle" }, [
                                          i._v("推荐上传单人照"),
                                        ]),
                                      ]
                                    )
                                  : i._e(),
                                n(
                                  s.Uploader,
                                  {
                                    attrs: { "max-count": 1 },
                                    model: {
                                      value: s.fileList,
                                      callback: function (e) {
                                        s.fileList = e;
                                      },
                                      expression: "fileList",
                                    },
                                  },
                                  [
                                    n(
                                      "div",
                                      { staticClass: "upload-btn u-flex-c-c" },
                                      [
                                        n(s.Icon, {
                                          staticClass: "icon",
                                          attrs: {
                                            name: "add",
                                            size: "32",
                                            color: "#FFFFFF",
                                          },
                                        }),
                                      ],
                                      1
                                    ),
                                  ]
                                ),
                              ],
                              1
                            )
                          : i._e(),
                        i._l(s.modelConfig, function (e, t) {
                          var a, o, l;
                          return n(
                            "div",
                            {
                              key: "model-" + t,
                              staticClass: "idol-selector u-flex-c mb-20",
                            },
                            [
                              n(
                                "div",
                                {
                                  staticClass: "avatar u-flex-c-c",
                                  on: {
                                    click: function (t) {
                                      return s.handleAddModel(e);
                                    },
                                  },
                                },
                                [
                                  n("img", {
                                    attrs: {
                                      src:
                                        (null === e ||
                                        void 0 === e ||
                                        null === (a = e.select) ||
                                        void 0 === a
                                          ? void 0
                                          : a.image) ||
                                        "https://cdn.qiandaoapp.com/ued/d964b35afdf86c31fef99aa77e094b29.png",
                                    },
                                  }),
                                  null !== e &&
                                  void 0 !== e &&
                                  null !== (o = e.select) &&
                                  void 0 !== o &&
                                  o.image
                                    ? i._e()
                                    : n(s.Icon, {
                                        staticClass: "icon",
                                        attrs: {
                                          name: "add",
                                          size: "32",
                                          color: "#FFFFFF",
                                        },
                                      }),
                                ],
                                1
                              ),
                              n("div", { staticClass: "name ml-12" }, [
                                i._v(
                                  " " +
                                    i._s(
                                      (null === e ||
                                      void 0 === e ||
                                      null === (l = e.select) ||
                                      void 0 === l
                                        ? void 0
                                        : l.name) ||
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e.placeholder)
                                    ) +
                                    " "
                                ),
                              ]),
                            ]
                          );
                        }),
                        n(s.Book),
                        i._l(s.rolesConfig, function (e, t) {
                          var a, o, l;
                          return n(
                            "div",
                            {
                              key: "role-" + t,
                              staticClass: "idol-selector u-flex-c mb-20",
                            },
                            [
                              n(
                                "div",
                                {
                                  staticClass: "avatar u-flex-c-c",
                                  on: {
                                    click: function (t) {
                                      return s.handleAddRole(e);
                                    },
                                  },
                                },
                                [
                                  n("img", {
                                    attrs: {
                                      src:
                                        (null === e ||
                                        void 0 === e ||
                                        null === (a = e.select) ||
                                        void 0 === a
                                          ? void 0
                                          : a.image) ||
                                        "https://cdn.qiandaoapp.com/ued/9309c4a4ff23ed9848c77d7219d2b574.png",
                                    },
                                  }),
                                  null !== e &&
                                  void 0 !== e &&
                                  null !== (o = e.select) &&
                                  void 0 !== o &&
                                  o.image
                                    ? i._e()
                                    : n(s.Icon, {
                                        staticClass: "icon",
                                        attrs: {
                                          name: "add",
                                          size: "32",
                                          color: "#FFFFFF",
                                        },
                                      }),
                                ],
                                1
                              ),
                              n("div", { staticClass: "name ml-12" }, [
                                i._v(
                                  " " +
                                    i._s(
                                      (null === e ||
                                      void 0 === e ||
                                      null === (l = e.select) ||
                                      void 0 === l
                                        ? void 0
                                        : l.name) ||
                                        (null === e || void 0 === e
                                          ? void 0
                                          : e.placeholder)
                                    ) +
                                    " "
                                ),
                              ]),
                            ]
                          );
                        }),
                        i._l(s.groups, function (e) {
                          var t;
                          return n(
                            "div",
                            { key: e.groupName, staticClass: "mb-20" },
                            [
                              n(
                                "div",
                                { staticClass: "header mb-4 u-flex-c" },
                                [
                                  n("div", { staticClass: "title mr-8" }, [
                                    i._v(i._s(e.groupName)),
                                  ]),
                                  n(
                                    "button",
                                    {
                                      staticClass: "select-btn",
                                      on: {
                                        click: function (t) {
                                          return s.handleAddPrompt(e);
                                        },
                                      },
                                    },
                                    [
                                      n(s.Icon, {
                                        attrs: {
                                          name: "add",
                                          size: "12",
                                          color: s.secondaryColor,
                                        },
                                      }),
                                      n("span", { staticClass: "ml-4" }, [
                                        i._v("添加"),
                                      ]),
                                    ],
                                    1
                                  ),
                                ]
                              ),
                              n(
                                "div",
                                { staticClass: "tags" },
                                [
                                  null !== (t = s.getSelectItems(e)) &&
                                  void 0 !== t &&
                                  t.length
                                    ? [
                                        n(
                                          "div",
                                          { staticClass: "items" },
                                          i._l(
                                            s.getSelectItems(e),
                                            function (e) {
                                              return n(
                                                "div",
                                                {
                                                  key: e.name,
                                                  staticClass: "item",
                                                  on: {
                                                    click: function (t) {
                                                      return s.deletePrompt(e);
                                                    },
                                                  },
                                                },
                                                [
                                                  n("span", [
                                                    i._v(i._s(e.name)),
                                                  ]),
                                                  n(s.DuIcon, {
                                                    attrs: {
                                                      extClass: "ml-4",
                                                      name: "close-circle-filled",
                                                      size: "12",
                                                      color: s.color2,
                                                    },
                                                  }),
                                                ],
                                                1
                                              );
                                            }
                                          ),
                                          0
                                        ),
                                      ]
                                    : n("div", { staticClass: "empty" }, [
                                        i._v("待添加"),
                                      ]),
                                ],
                                2
                              ),
                            ]
                          );
                        }),
                      ],
                      2
                    ),
                    n("div", { staticClass: "fixed-bottom-section" }, [
                      n("div", { staticClass: "top-info" }, [
                        i._v(" 前方 "),
                        n("span", { staticClass: "orange" }, [
                          i._v(
                            i._s(
                              (null === (t = s.tips) || void 0 === t
                                ? void 0
                                : t.rankSize) || 1
                            )
                          ),
                        ]),
                        i._v(
                          " 位正在生成，机会每 " +
                            i._s(
                              (null === (a = s.tips) || void 0 === a
                                ? void 0
                                : a.refreshChanceHour) || 24
                            ) +
                            " 小时刷新 "
                        ),
                      ]),
                      n(
                        "div",
                        { staticClass: "btn" },
                        [
                          n(
                            s.VanButton,
                            {
                              staticClass: "generate-btn",
                              attrs: { block: "", loading: s.loading },
                              on: { click: s.handleGenerate },
                            },
                            [
                              i._v(
                                " 今日机会 " +
                                  i._s(
                                    (null === (o = s.tips) || void 0 === o
                                      ? void 0
                                      : o.chance) || 0
                                  ) +
                                  " 次 "
                              ),
                            ]
                          ),
                          null !== (l = s.shareConfig) &&
                          void 0 !== l &&
                          l.showShareBtn
                            ? n(
                                s.VanButton,
                                {
                                  staticClass: "share-btn",
                                  attrs: { block: "", loading: s.loading },
                                  on: { click: s.handleShare },
                                },
                                [
                                  s.showNav
                                    ? n(s.Icon, {
                                        staticClass: "wechat-icon",
                                        attrs: {
                                          name: "wechat",
                                          size: "20",
                                          color: "rgba(149, 255, 0, 1)",
                                        },
                                      })
                                    : i._e(),
                                  i._v(
                                    " " +
                                      i._s(
                                        s.showNav
                                          ? s.shareConfig.appShareText
                                          : s.shareConfig.miniappShareText
                                      ) +
                                      " "
                                  ),
                                ],
                                1
                              )
                            : i._e(),
                          s.withAuth
                            ? n(
                                "div",
                                { staticClass: "bottom-info mt-8 u-flex-s" },
                                [
                                  s.isAuth
                                    ? n(s.Icon, {
                                        attrs: {
                                          name: "checked",
                                          size: "20",
                                          color: "#FFFFFF",
                                        },
                                        on: {
                                          click: function (e) {
                                            s.isAuth = !s.isAuth;
                                          },
                                        },
                                      })
                                    : n(s.Icon, {
                                        attrs: {
                                          name: "circle",
                                          size: "20",
                                          color: "#FFFFFF",
                                        },
                                        on: { click: s.handleAuth },
                                      }),
                                  n("div", { staticClass: "info" }, [
                                    i._v(
                                      " 千岛平台重视并遵守法律法规对著作权人的保护，本平台仅提供图片生成工具。用户在使用过程中，应遵循相关法律法规，不得侵犯第三方知识产权。如因用户违反本声明使用本平台进行创作导致任何纠纷，由用户自行承担法律责任。 "
                                    ),
                                  ]),
                                ],
                                1
                              )
                            : i._e(),
                        ],
                        1
                      ),
                    ]),
                  ],
                ],
                2
              ),
            ],
            1
          );
        },
        l = [],
        i = (a("e930"), a("8f80")),
        n = (a("66b9"), a("b650")),
        s = (a("c3a6"), a("ad06")),
        r = (a("5246"), a("6b41")),
        c = (a("e7e5"), a("d399")),
        u = (a("14d9"), a("2b0e")),
        d = a("dec5"),
        v = a("39d4"),
        p = a("e6a1"),
        g = function () {
          var e,
            t = this,
            a = t._self._c,
            o = t._self._setupProxy;
          return o.withBook
            ? a(
                "div",
                { staticClass: "upload-content mb-20" },
                [
                  t._m(0),
                  a("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: o.contentPrompt,
                        expression: "contentPrompt",
                      },
                    ],
                    attrs: {
                      placeholder:
                        "例如：boy, short hair, white hair, blue eyes, crown,  pants, boots,  closed mouth",
                      name: "",
                      id: "",
                      cols: "30",
                      rows: "10",
                    },
                    domProps: { value: o.contentPrompt },
                    on: {
                      focus: o.handleFocus,
                      blur: o.handleBulr,
                      input: function (e) {
                        e.target.composing ||
                          (o.contentPrompt = e.target.value);
                      },
                    },
                  }),
                  a(
                    o.DuButton,
                    {
                      attrs: {
                        full: "",
                        type: "recommend",
                        size: "large",
                        "ext-style": {
                          color: o.color,
                          borderColor: o.color4,
                          marginTop: "12px",
                          fontSize: "14px",
                        },
                        icon: "plus-circle",
                        iconSize: "16px",
                      },
                      on: { click: o.handleClick },
                    },
                    [t._v(" 从咒语书中找灵感 ")]
                  ),
                  a(
                    "div",
                    { staticClass: "tags" },
                    [
                      null !== (e = o.selectItems) && void 0 !== e && e.length
                        ? [
                            a(
                              "div",
                              { staticClass: "items" },
                              t._l(o.selectItems, function (e, l) {
                                return a(
                                  "div",
                                  { key: "name-" + l, staticClass: "item" },
                                  [
                                    a("span", [t._v(t._s(e.name))]),
                                    a(o.DuIcon, {
                                      attrs: {
                                        extClass: "ml-4",
                                        name: "close-circle-filled",
                                        size: "12",
                                        color: o.color2,
                                      },
                                      on: {
                                        click: function (t) {
                                          return o.handleDelete(e);
                                        },
                                      },
                                    }),
                                  ],
                                  1
                                );
                              }),
                              0
                            ),
                          ]
                        : a("div", { staticClass: "empty" }, [t._v("待添加")]),
                    ],
                    2
                  ),
                ],
                1
              )
            : t._e();
        },
        m = [
          function () {
            var e = this,
              t = e._self._c;
            e._self._setupProxy;
            return t(
              "div",
              {
                staticClass: "header mb-10 u-flex-c",
                staticStyle: { "align-items": "flex-end" },
              },
              [
                t("div", { staticClass: "title mr-8" }, [
                  e._v("输入你的潮玩 IP 咒语"),
                ]),
                t("span", { staticClass: "subtitle" }, [e._v("需输入英文")]),
              ]
            );
          },
        ],
        f = a("a18c"),
        h = a("4360"),
        b = a("b3ec"),
        C = {
          __name: "book",
          setup(e) {
            Object(u["useCssVars"])((e, t) => ({
              "50f865c5": t.color,
              b7ebca92: t.backgroundColor,
              "63d759e2": t.color4,
            }));
            const {
                color: t,
                color2: a,
                color4: o,
                withBook: l,
                selectItems: i,
                contentPrompt: n,
                backgroundColor: s,
                bookConfig: r,
              } = Object(b["a"])(),
              c = Object(u["ref"])(0),
              { proxy: p } = Object(u["getCurrentInstance"])(),
              g = (e) => {
                var t;
                const a = JSON.parse(JSON.stringify(r.value)),
                  o =
                    null === a ||
                    void 0 === a ||
                    null === (t = a.flatMap((e) => e.subTabs)) ||
                    void 0 === t
                      ? void 0
                      : t.find((t) => t.name === e.name);
                p.$set(o, "selected", !1), h["a"].commit("aigc/UPDATE_BOOK", a);
              },
              m = () => {
                f["a"].push({ name: "aigc-book" });
              };
            function C() {
              c.value = 100;
            }
            function _() {
              c.value = 0;
            }
            return {
              __sfc: !0,
              color: t,
              color2: a,
              color4: o,
              withBook: l,
              selectItems: i,
              contentPrompt: n,
              backgroundColor: s,
              bookConfig: r,
              transformTop: c,
              proxy: p,
              handleDelete: g,
              handleClick: m,
              handleFocus: C,
              handleBulr: _,
              DuIcon: d["a"],
              DuButton: v["a"],
            };
          },
        },
        _ = C,
        k = (a("fea0"), a("0c7c")),
        y = Object(k["a"])(_, g, m, !1, null, "097f4aad", null),
        w = y.exports,
        O = a("d432"),
        j = a("dd8a"),
        I = a("7cb2"),
        x = a("ed08"),
        F = a("3cc9"),
        S = {
          __name: "home",
          props: { id: { type: String, default: "" } },
          setup(e) {
            const t = e;
            Object(u["useCssVars"])((e, t) => ({
              "335d4796": t.mainBcg,
              "36efdd6c": t.color,
              "0c3ebb34": t.secondaryColor,
              b1e85f72: t.color3,
              "31896d9e": t.backgroundColor,
              "093b0a9a": t.buttonColor,
              "040fe457": t.buttonBackground,
            }));
            const a = Object(u["ref"])(localStorage.getItem("aigc_auth")),
              o = Object(x["d"])(),
              l = Object(u["computed"])({
                get() {
                  return h["a"].state.aigc.fileList;
                },
                set(e) {
                  h["a"].commit("aigc/setFileList", e);
                },
              }),
              v = Object(u["ref"])([]),
              {
                color: g,
                secondaryColor: m,
                color2: C,
                color3: _,
                color4: k,
                backgroundColor: y,
                mainBcg: S,
                buttonColor: B,
                withUpload: P,
                withAuth: A,
                buttonBackground: T,
                navbarColor: R,
                promptConfig: N,
                scene: D,
                pageConfig: z,
                role: E,
                groups: U,
                rolesConfig: L,
                modelConfig: M,
                me: q,
                selectItems: G,
                contentPrompt: W,
                shareConfig: V,
                referenceRole: $,
              } = Object(b["a"])(),
              J = (e) =>
                e.groups.flatMap((e) => e.options).filter((e) => e.selected),
              X = Object(u["ref"])(null),
              Q = async () => {
                const [e] = await h["a"].dispatch("config/loadConfigs", [
                  "AIGCConfig/" + t.id,
                ]);
                if (e.modelConfig) {
                  const [t] = await h["a"].dispatch("config/loadConfigs", [
                    "aigc/" + e.modelConfig,
                  ]);
                  h["a"].commit("aigc/UPDATE_MODEL_CONFIG", t);
                }
                h["a"].commit("aigc/UPDATE_PAGE_CONFIG", e);
              };
            async function H() {
              if ((await Q(), N.value)) {
                const [e] = await h["a"].dispatch("config/loadConfigs", [
                  "aigc/" + N.value,
                ]);
                h["a"].commit("aigc/UPDATE_CONFIG", e);
              }
              if (z.value.rolesConfig) {
                var e;
                const [t] = await h["a"].dispatch("config/loadConfigs", [
                  "aigc/" + z.value.rolesConfig,
                ]);
                0 ===
                  (null === (e = L.value) || void 0 === e
                    ? void 0
                    : e.length) &&
                  h["a"].commit(
                    "aigc/UPDATE_ROLES_CONFIG",
                    t.map((e) => ({ ...e, select: null }))
                  );
              }
            }
            Object(u["onMounted"])(async () => {
              var e;
              "{}" === JSON.stringify(q.value) && ie(), await H();
              const { data: t } = await O["a"].getTaskTip({ scene: D.value });
              X.value = t;
              const { data: a } = await O["a"].getTaskDetail({
                scene: D.value,
              });
              ["WAIT_CONFIRM", "WAIT_EXEC", "EXECUTION"].includes(
                null === a || void 0 === a ? void 0 : a.status
              ) && f["a"].replace({ name: "aigc-record-detail" }),
                (document.title = z.value.title);
              const o =
                null === (e = te.$route) || void 0 === e ? void 0 : e.query;
              if (o.spuId) {
                const e = { limit: 1, offset: 0, spuIds: [o.spuId] };
                try {
                  const {
                    data: { list: t, count: a },
                  } = await j["a"].getSpuWithRelated(e);
                  v.value = t[0].relatedSpus;
                } catch (l) {}
              }
            });
            const K = (e) => {
                f["a"].push({ name: "aigc-role", query: { name: e.name } });
              },
              Y = (e) => {
                f["a"].push({ name: "aigc-model", query: { name: e.name } });
              },
              Z = () => {
                (a.value = !a.value),
                  localStorage.setItem("aigc_auth", a.value);
              },
              ee = ({ groupName: e }) => {
                f["a"].push({ name: "aigc-prompt", query: { groupName: e } });
              },
              { proxy: te } = Object(u["getCurrentInstance"])(),
              ae = (e) => {
                (e.selected = !e.selected), te.$forceUpdate();
              },
              oe = Object(u["ref"])(!1),
              le = async () => {
                if (!A.value || a.value)
                  if (
                    "DramaReferenceOnly" !== D.value ||
                    ($.value && l.value.length)
                  ) {
                    oe.value = !0;
                    try {
                      var e, t, o, i, n, s, r, u, d, v, p;
                      const a =
                          null === (e = U.value) || void 0 === e
                            ? void 0
                            : e
                                .flatMap((e) =>
                                  e.groups
                                    .flatMap((e) => e.options)
                                    .filter((e) => e.selected)
                                )
                                .map((e) => e.prompt),
                        w =
                          null === (t = U.value) || void 0 === t
                            ? void 0
                            : t
                                .flatMap((e) =>
                                  e.groups
                                    .flatMap((e) => e.options)
                                    .filter((e) => e.selected)
                                )
                                .map((e) => e.name),
                        j =
                          null === (o = M.value) ||
                          void 0 === o ||
                          null ===
                            (i = o.map((e) => {
                              var t;
                              return null === (t = e.select) || void 0 === t
                                ? void 0
                                : t.name;
                            })) ||
                          void 0 === i
                            ? void 0
                            : i.filter((e) => !!e),
                        F =
                          null === (n = L.value) ||
                          void 0 === n ||
                          null ===
                            (s = n.map((e) => {
                              var t;
                              return null === (t = e.select) || void 0 === t
                                ? void 0
                                : t.prompt;
                            })) ||
                          void 0 === s
                            ? void 0
                            : s.filter((e) => !!e),
                        S =
                          null === (r = L.value) ||
                          void 0 === r ||
                          null ===
                            (u = r.map((e) => {
                              var t;
                              return null === (t = e.select) || void 0 === t
                                ? void 0
                                : t.name;
                            })) ||
                          void 0 === u
                            ? void 0
                            : u.filter((e) => !!e);
                      if (
                        null !== (d = M.value) &&
                        void 0 !== d &&
                        d.length &&
                        (null === j || void 0 === j || !j.length)
                      )
                        return void c["a"].fail("请选择风格");
                      if (
                        null !== (v = L.value) &&
                        void 0 !== v &&
                        v.length &&
                        (null === F || void 0 === F || !F.length)
                      )
                        return void c["a"].fail("请选择角色");
                      const B = {
                        prompt: [...a],
                        scene: D.value,
                        promptName: [...w],
                      };
                      if (
                        (null !== j &&
                          void 0 !== j &&
                          j.length &&
                          ((B.modelStyle = j.join("")),
                          (B.promptName = [...j, ...B.promptName])),
                        null !== F &&
                          void 0 !== F &&
                          F.length &&
                          ((B.prompt = [...F, ...B.prompt]),
                          (B.promptName = [
                            B.modelStyle,
                            ...S,
                            ...B.promptName,
                          ].filter((e) => !!e)),
                          "线稿风" === B.modelStyle &&
                            (B.filterPrompt = [
                              "blonde hair",
                              "green eyes",
                              "blue shirt and black pants",
                              "green eyes",
                              "blue scarf",
                              "white hair",
                              "white mustache",
                              "blue cloth",
                              "blue-pea-eyes",
                              "colored skin",
                              "yellow eyes",
                              "(red skin:1.2)",
                              "red hair",
                              "green eyes",
                            ])),
                        null !== j && void 0 !== j && j.length)
                      ) {
                        var g, m;
                        const e =
                          (null === (g = M.value) ||
                          void 0 === g ||
                          null ===
                            (m = g.map((e) => {
                              var t;
                              return null === (t = e.select) || void 0 === t
                                ? void 0
                                : t.prompt;
                            })) ||
                          void 0 === m
                            ? void 0
                            : m.filter((e) => !!e)) || [];
                        B.prompt = [...e, ...B.prompt];
                      }
                      if (l.value.length) {
                        var h;
                        const [e] =
                          null ===
                            (h = await Promise.all(
                              l.value.map((e) =>
                                Object(I["b"])(e.file, "user-post.image")
                              )
                            )) || void 0 === h
                            ? void 0
                            : h.map((e) => e.fullUrl);
                        B.initImages = [e + "!lfit_w1080_h1080_jpg"];
                        const { width: t, height: a } = await Object(x["b"])(
                          e + "!lfit_w1080_h1080_jpg"
                        );
                        B.imageResolution = { width: t, height: a };
                      }
                      var b;
                      if ($.value)
                        (B.image2texts = [
                          null === (b = $.value) || void 0 === b
                            ? void 0
                            : b.cover,
                        ]),
                          (B.extraMsg = `${$.value.drama}&${$.value.name}`);
                      if (W.value) {
                        var C;
                        B.prompt = [...B.prompt, W.value];
                        const e =
                          null === (C = W.value) || void 0 === C
                            ? void 0
                            : C.split(",");
                        B.promptName = [...B.promptName, ...e];
                      }
                      if (null !== (p = G.value) && void 0 !== p && p.length) {
                        var _, k, y;
                        const e =
                            null === (_ = G.value) || void 0 === _
                              ? void 0
                              : _.map((e) => e.name),
                          t =
                            null === (k = G.value) || void 0 === k
                              ? void 0
                              : k.map((e) => e.prompt);
                        (B.prompt = [...B.prompt, ...t]),
                          (B.promptName =
                            null === (y = [...B.promptName, ...e]) ||
                            void 0 === y
                              ? void 0
                              : y.filter((e) => !!e));
                      }
                      await O["a"].taskUpsert({ sd: B }),
                        (oe.value = !1),
                        f["a"].push({ name: "aigc-record-detail" });
                    } catch (w) {
                      (oe.value = !1), c["a"].fail(w.message);
                    } finally {
                      oe.value = !1;
                    }
                  } else c["a"].fail("请选择角色或上传照片");
                else c["a"].fail("请勾选授权协议");
              },
              ie = () => {
                const e = "/modules/pages/common-login/index";
                (Object(x["h"])() || Object(x["d"])()) &&
                  te.navigateTo({ url: e });
              },
              ne = () => {
                F["a"].navigateBack();
              },
              se = () => {
                F["a"].shareUrl({
                  title: document.title,
                  url: `https://m.qiandaoapp.com/plugin/aigc/${t.id}`,
                });
              },
              re = async () => {
                await O["a"].taskAddTimes({ scene: D.value });
              },
              ce = async () => {
                Object(x["d"])()
                  ? F["a"].shareMiniApp({
                      title: V.value.shareAppTitle,
                      path: V.value.shareAppPath,
                      imageUrl: V.value.shareAppImg,
                      miniAppId: V.value.shareAppId,
                      success: async (e) => {
                        await re(), ue();
                      },
                    })
                  : (re(), ue(), window.open(V.value.shareUrl));
              },
              ue = async () => {
                const { data: e } = await O["a"].getTaskTip({ scene: D.value });
                X.value = e;
                const { data: t } = await O["a"].getTaskDetail({
                  scene: D.value,
                });
                ["WAIT_CONFIRM", "WAIT_EXEC", "EXECUTION"].includes(
                  null === t || void 0 === t ? void 0 : t.status
                ) && f["a"].replace({ name: "aigc-record-detail" });
              },
              de = () => {
                f["a"].replace({ name: "aigc-search" });
              },
              ve = (e) => {
                h["a"].commit("aigc/UPDATE_REFERENCE_ROLE", e);
              };
            return {
              __sfc: !0,
              props: t,
              isAuth: a,
              showNav: o,
              fileList: l,
              dramaRoleList: v,
              color: g,
              secondaryColor: m,
              color2: C,
              color3: _,
              color4: k,
              backgroundColor: y,
              mainBcg: S,
              buttonColor: B,
              withUpload: P,
              withAuth: A,
              buttonBackground: T,
              navbarColor: R,
              promptConfig: N,
              scene: D,
              pageConfig: z,
              role: E,
              groups: U,
              rolesConfig: L,
              modelConfig: M,
              me: q,
              selectItems: G,
              contentPrompt: W,
              shareConfig: V,
              referenceRole: $,
              getSelectItems: J,
              tips: X,
              loadPageConfig: Q,
              init: H,
              handleAddRole: K,
              handleAddModel: Y,
              handleAuth: Z,
              handleAddPrompt: ee,
              proxy: te,
              deletePrompt: ae,
              loading: oe,
              handleGenerate: le,
              login: ie,
              onClickLeft: ne,
              onClickRight: se,
              handleAddTimes: re,
              handleShare: ce,
              refreshpage: ue,
              handleSelectRole: de,
              handleSelectDramaRole: ve,
              NavBar: r["a"],
              Icon: s["a"],
              VanButton: n["a"],
              Uploader: i["a"],
              DuIcon: d["a"],
              Layout: p["a"],
              Book: w,
            };
          },
        },
        B = S,
        P = (a("4de5"), Object(k["a"])(B, o, l, !1, null, "cc15f1b4", null));
      t["default"] = P.exports;
    },
    d2e6: function (e, t, a) {
      "use strict";
      a("6376");
    },
    d432: function (e, t, a) {
      "use strict";
      var o = a("0ef7");
      t["a"] = {
        createPost(e) {
          return o["h"].post("/gactus-web/post/create", e);
        },
        updatePost(e) {
          return o["h"].post("/gactus-web/post/update", e);
        },
        getPostByUser(e) {
          return o["h"].post("/gactus/posts/by-user-v2", e);
        },
        getPostByTag(e) {
          return o["h"].post("/gactus/posts/by-tag-v4", e);
        },
        getSinglePost(e) {
          return o["h"].post("/gactus/single-post", e);
        },
        getYearReport(e) {
          return o["h"].post("/gactus-web/v1/poster/larp_yearly_2022", e);
        },
        getTaskDetail(e) {
          return o["h"].get("/gactus-web/v1/generative-task/user", e);
        },
        generateTaskConfirm(e) {
          return o["h"].post("/gactus-web/v1/generative-task/confirm", e);
        },
        getTaskTip(e) {
          return o["h"].get("/gactus-web/v1/generative-task/tips", e);
        },
        taskUpsert(e) {
          return o["h"].post("/gactus-web/v1/generative-task/upsert", e);
        },
        taskAddTimes(e) {
          return o["h"].post("/gactus-web/v1/generative-task/share/report", e);
        },
        feedBack(e) {
          return o["h"].post("/gactus-web/v1/session/feedback", e);
        },
        getAnswer(e) {
          return o["h"].get("/gactus-web/v1/session/get-answer", e);
        },
        sendQuestion(e) {
          return o["h"].post("/gactus-web/v1/session/send-question", e);
        },
        getPostInfo(e) {
          return o["h"].get("/gactus-web/post/detail-info", e);
        },
        getFavoriteEntryVote(e) {
          return o["h"].post("/gactus-web/v1/favorite_entry_vote/get", e);
        },
      };
    },
    dd8a: function (e, t, a) {
      "use strict";
      var o = a("0ef7");
      t["a"] = {
        myPokemon(e) {
          return o["q"].get("/v1/pokemon/my", e);
        },
        nextStep(e) {
          return o["q"].post("/v1/pokemon/next-step", e);
        },
        searchSpuByImage(e) {
          return o["q"].post("/v1/image/search/spu", e);
        },
        searchSpuByAggregateImages(e) {
          return o["q"].post("/v1/image/search/multi/spu/v2", e);
        },
        ocr(e) {
          return o["j"].post("/z/stargazing/z/ocr", e);
        },
        getQrcode(e) {
          return o["j"].get("/z/poster-web/wechat/mp-qrcode", e);
        },
        getSpuOpposite(e) {
          return o["j"].post("/treasure/spus/opposite/list", e);
        },
        getSpuWithRelated(e) {
          return o["j"].post("/treasure/v1/search/spu/with/related", e);
        },
        getSpuWaterfall(e) {
          return o["j"].get("/treasure/v1/waterfall/list", e);
        },
        fetchStep2BizConfig() {
          return o["j"].get(
            "https://config-cdn.qiandaoapp.com/mp-common/pluginsBizConfig.json"
          );
        },
        getRankInfo(e) {
          return o["j"].get("/treasure/flora/v1/rank", e);
        },
        getByDistributedTagIds(e) {
          return o["j"].post(
            "/treasure/v1/public-relations/byDistributedTagIds",
            e
          );
        },
        getPalworld(e) {
          return o["g"].get("/palu/check", e);
        },
      };
    },
    e6a1: function (e, t, a) {
      "use strict";
      var o = function () {
          var e = this,
            t = e._self._c,
            a = e._self._setupProxy;
          return t("div", { staticClass: "page-aigc" }, [
            t("img", {
              staticClass: "top-img",
              attrs: { src: a.bcg, alt: "" },
            }),
            t(
              "div",
              {
                staticClass: "repeat",
                style: { "margin-top": a.contentTop + " !important" },
              },
              [e._t("default")],
              2
            ),
          ]);
        },
        l = [],
        i = a("2b0e"),
        n = a("4360"),
        s =
          (a("ed08"),
          {
            __name: "layout",
            props: { height: { type: String, default: "80vh" } },
            setup(e) {
              Object(i["useCssVars"])((e, t) => ({
                "0bf2ddd7": t.mainBcg,
                "26aa999f": t.backgroundRepeat,
              }));
              const t = Object(i["computed"])(() => {
                  var e;
                  return null === (e = n["a"].getters) || void 0 === e
                    ? void 0
                    : e["aigc/mainColor"];
                }),
                a = Object(i["computed"])(() => {
                  var e;
                  return null === (e = n["a"].state.aigc.pageConfig) ||
                    void 0 === e
                    ? void 0
                    : e.backgroundImage;
                }),
                o = Object(i["computed"])(() => {
                  var e, a;
                  return (
                    (null === (e = n["a"].state.aigc.pageConfig) ||
                    void 0 === e ||
                    null === (a = e.theme) ||
                    void 0 === a
                      ? void 0
                      : a.mainBackground) || t.value
                  );
                }),
                l = Object(i["computed"])(() => {
                  var e;
                  return null === (e = n["a"].getters) || void 0 === e
                    ? void 0
                    : e["aigc/backgroundImage"];
                }),
                s = Object(i["computed"])(() => {
                  var e;
                  return null === (e = n["a"].getters) || void 0 === e
                    ? void 0
                    : e["aigc/backgroundRepeat"];
                }),
                r = Object(i["computed"])(() => {
                  var e, t;
                  return (
                    console.log(
                      "======",
                      null === (e = n["a"].getters) || void 0 === e
                        ? void 0
                        : e["aigc/contentTop"]
                    ),
                    null === (t = n["a"].getters) || void 0 === t
                      ? void 0
                      : t["aigc/contentTop"]
                  );
                });
              return {
                __sfc: !0,
                color: t,
                bcg: a,
                mainBcg: o,
                backgroundImage: l,
                backgroundRepeat: s,
                contentTop: r,
              };
            },
          }),
        r = s,
        c = (a("d2e6"), a("0c7c")),
        u = Object(c["a"])(r, o, l, !1, null, "474309c8", null);
      t["a"] = u.exports;
    },
    fea0: function (e, t, a) {
      "use strict";
      a("4d2f");
    },
  },
]);
