(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-77e94dba"],
  {
    "0ef9": function (t, e, a) {
      "use strict";
      a("a531");
    },
    "18e5": function (t, e, a) {
      "use strict";
      function o(t, e) {
        return (t / 7500) * 100 + e;
      }
      function i(t, e = "rem") {
        const a = /rpx/;
        return !window && wx
          ? t
          : "number" === typeof t
          ? o(t, e)
          : a.test(t)
          ? o(+t.replace(a, ""), e)
          : t;
      }
      a.d(e, "a", function () {
        return i;
      });
    },
    "2d55": function (t, e, a) {},
    "3d24": function (t, e, a) {
      "use strict";
      a.r(e);
      var o = function () {
          var t,
            e,
            a,
            o,
            i,
            n,
            s,
            l,
            r = this,
            c = r._self._c,
            u = r._self._setupProxy;
          return c(
            "div",
            { class: ["record-page"] },
            [
              c(
                "div",
                [
                  c(
                    u.Layout,
                    { attrs: { height: "50vh" } },
                    [
                      u.showNav
                        ? c(u.NavBar, {
                            attrs: {
                              border: !1,
                              "safe-area-inset-top": "",
                              fixed: "",
                            },
                            on: {
                              "click-left": u.onClickLeft,
                              "click-right": u.onClickRight,
                            },
                            scopedSlots: r._u(
                              [
                                {
                                  key: "left",
                                  fn: function () {
                                    return [
                                      c(u.DuIcon, {
                                        attrs: {
                                          name: "arrow-left",
                                          size: "24px",
                                          color: u.navbarColor || "2B263B",
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
                                      c(u.DuIcon, {
                                        attrs: {
                                          name: "share",
                                          size: "24px",
                                          color: u.navbarColor || "2B263B",
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
                        : r._e(),
                      c(
                        "div",
                        {
                          staticClass: "result-container",
                          style: { "margin-top": "-34px" },
                        },
                        [
                          c(
                            "div",
                            { staticClass: "result u-flex-col" },
                            [
                              "WAIT_CONFIRM" === u.status
                                ? [
                                    c(
                                      "div",
                                      {
                                        staticClass: "img-container u-flex-c",
                                        style: {
                                          justifyContent:
                                            1 === u.images.length
                                              ? "center"
                                              : "space-between",
                                        },
                                      },
                                      r._l(u.images, function (t, e) {
                                        return c(
                                          "div",
                                          {
                                            key: e,
                                            staticClass: "img-cont",
                                            on: {
                                              click: function (t) {
                                                return u.handleSelectImgs(e);
                                              },
                                            },
                                          },
                                          [
                                            c(u.Thumbnail, {
                                              style: {
                                                width:
                                                  "DramaReferenceOnly" ===
                                                  u.scene
                                                    ? "100px"
                                                    : "150px",
                                                height:
                                                  "DramaReferenceOnly" ===
                                                  u.scene
                                                    ? "100px"
                                                    : "150px",
                                                opacity: t.isSelect
                                                  ? "1"
                                                  : "0.3",
                                              },
                                              attrs: {
                                                url:
                                                  null === t || void 0 === t
                                                    ? void 0
                                                    : t.url,
                                                borderRadius: 4,
                                                size: {
                                                  style: "!fill_w360_h360_jpg",
                                                },
                                              },
                                            }),
                                            t.isSelect
                                              ? c(u.VanCheckBox, {
                                                  staticClass: "select-icon",
                                                  attrs: {
                                                    name: "checked",
                                                    "icon-size": "22px",
                                                    "checked-color": u.color,
                                                  },
                                                  model: {
                                                    value: t.isSelect,
                                                    callback: function (e) {
                                                      r.$set(t, "isSelect", e);
                                                    },
                                                    expression:
                                                      "image.isSelect",
                                                  },
                                                })
                                              : c(u.Icon, {
                                                  staticClass: "select-icon",
                                                  attrs: {
                                                    name: "circle",
                                                    size: "22",
                                                    color: "#FFFFFF",
                                                  },
                                                }),
                                          ],
                                          1
                                        );
                                      }),
                                      0
                                    ),
                                    c(
                                      "div",
                                      { staticClass: "prompts u-flex-c" },
                                      r._l(u.prompt, function (t, e) {
                                        return c(
                                          "div",
                                          { key: e, staticClass: "prompt" },
                                          [r._v(" " + r._s(t) + " ")]
                                        );
                                      }),
                                      0
                                    ),
                                    !u.showInput && u.signature
                                      ? c(
                                          u.DuButton,
                                          {
                                            attrs: {
                                              full: "",
                                              type: "recommend",
                                              size: "large",
                                              "ext-style": {
                                                color: u.color,
                                                borderColor: u.color4,
                                                marginTop: "20px",
                                                fontSize: "14px",
                                              },
                                              icon: "plus-circle",
                                              iconSize: "16px",
                                            },
                                            on: {
                                              click: function (t) {
                                                u.showInput = !0;
                                              },
                                            },
                                          },
                                          [
                                            r._v(
                                              " 添加文字签名（比如剧本、角色名） "
                                            ),
                                          ]
                                        )
                                      : r._e(),
                                    u.showInput
                                      ? c(
                                          "div",
                                          {
                                            staticClass: "signature",
                                            staticStyle: {
                                              "margin-top": "20px",
                                            },
                                          },
                                          [
                                            c(
                                              "div",
                                              {
                                                staticClass:
                                                  "header mb-10 u-flex-c",
                                                staticStyle: {
                                                  "margin-bottom": "10px",
                                                },
                                              },
                                              [
                                                c(
                                                  "div",
                                                  {
                                                    staticClass: "title mr-8",
                                                    staticStyle: {
                                                      "margin-right": "8px",
                                                    },
                                                  },
                                                  [r._v(" 签名选择 ")]
                                                ),
                                                c(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "ml-4 subtitle",
                                                  },
                                                  [r._v("（比如剧本、角色名）")]
                                                ),
                                              ]
                                            ),
                                            c("input", {
                                              directives: [
                                                {
                                                  name: "model",
                                                  rawName: "v-model",
                                                  value: u.signatureText,
                                                  expression: "signatureText",
                                                },
                                              ],
                                              attrs: {
                                                type: "text",
                                                maxlength: "15",
                                                placeholder:
                                                  "签名内容不超过15个字",
                                              },
                                              domProps: {
                                                value: u.signatureText,
                                              },
                                              on: {
                                                input: function (t) {
                                                  t.target.composing ||
                                                    (u.signatureText =
                                                      t.target.value);
                                                },
                                              },
                                            }),
                                          ]
                                        )
                                      : r._e(),
                                    "DramaReferenceOnly" !== u.scene
                                      ? c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: u.content,
                                              expression: "content",
                                            },
                                          ],
                                          attrs: {
                                            placeholder:
                                              "说点什么...不超过100字",
                                            name: "",
                                            id: "",
                                            cols: "30",
                                            rows: "10",
                                            maxlength: "100",
                                          },
                                          domProps: { value: u.content },
                                          on: {
                                            focus: u.handleFocus,
                                            blur: u.handleBulr,
                                            input: function (t) {
                                              t.target.composing ||
                                                (u.content = t.target.value);
                                            },
                                          },
                                        })
                                      : r._e(),
                                    u.roleMsg
                                      ? c(
                                          "div",
                                          { staticClass: "role-msg-container" },
                                          [
                                            c(
                                              "div",
                                              {
                                                staticClass:
                                                  "header mb-10 u-flex-c",
                                                staticStyle: {
                                                  "margin-bottom": "10px",
                                                },
                                              },
                                              [
                                                c(
                                                  "div",
                                                  {
                                                    staticClass: "title mr-8",
                                                    staticStyle: {
                                                      "margin-right": "8px",
                                                    },
                                                  },
                                                  [r._v(" 展示剧本和角色名 ")]
                                                ),
                                              ]
                                            ),
                                            c(
                                              "div",
                                              {
                                                staticClass:
                                                  "show-role u-flex-c",
                                              },
                                              r._l(
                                                u.showRoleTabs,
                                                function (t, e) {
                                                  return c(
                                                    "div",
                                                    {
                                                      key: e,
                                                      class:
                                                        "select-tab select-tab-" +
                                                        (u.currentRoleTab
                                                          .label === t.label
                                                          ? "selected"
                                                          : "unselect"),
                                                      on: {
                                                        click: function (e) {
                                                          return u.handleSelectRoleShow(
                                                            t
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      r._v(
                                                        " " +
                                                          r._s(t.label) +
                                                          " "
                                                      ),
                                                    ]
                                                  );
                                                }
                                              ),
                                              0
                                            ),
                                            u.currentRoleTab.show
                                              ? [
                                                  c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "header mb-10 mt-20 u-flex-c",
                                                      staticStyle: {
                                                        "margin-bottom": "10px",
                                                      },
                                                    },
                                                    [
                                                      c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "title mr-8",
                                                          staticStyle: {
                                                            "margin-right":
                                                              "8px",
                                                          },
                                                        },
                                                        [r._v(" 签名字体选择 ")]
                                                      ),
                                                    ]
                                                  ),
                                                  c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "font-select u-flex-c",
                                                    },
                                                    r._l(
                                                      u.fontTabs,
                                                      function (t, e) {
                                                        return c(
                                                          "div",
                                                          {
                                                            key: e,
                                                            class:
                                                              "select-tab select-tab-" +
                                                              (u.currentFont
                                                                .font === t.font
                                                                ? "selected"
                                                                : "unselect"),
                                                            on: {
                                                              click: function (
                                                                e
                                                              ) {
                                                                return u.handleSelectFont(
                                                                  t
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            r._v(
                                                              " " +
                                                                r._s(t.name) +
                                                                " "
                                                            ),
                                                          ]
                                                        );
                                                      }
                                                    ),
                                                    0
                                                  ),
                                                  c(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "role-msg-display mt-8 u-flex-c",
                                                      style:
                                                        "font-family: " +
                                                        u.currentFont.font,
                                                    },
                                                    [
                                                      c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "drama-name",
                                                        },
                                                        [
                                                          r._v(
                                                            " " +
                                                              r._s(
                                                                null ===
                                                                  (t =
                                                                    u.extraMsg) ||
                                                                  void 0 === t
                                                                  ? void 0
                                                                  : t[1]
                                                              ) +
                                                              " "
                                                          ),
                                                        ]
                                                      ),
                                                      c(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "role-name",
                                                        },
                                                        [
                                                          r._v(
                                                            " " +
                                                              r._s(
                                                                null ===
                                                                  (e =
                                                                    u.extraMsg) ||
                                                                  void 0 === e
                                                                  ? void 0
                                                                  : e[0]
                                                              ) +
                                                              " "
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              : r._e(),
                                          ],
                                          2
                                        )
                                      : r._e(),
                                  ]
                                : [
                                    "FINISHED" === u.status
                                      ? c(
                                          "div",
                                          {
                                            staticClass:
                                              "tip-container u-flex-col-c-c",
                                            staticStyle: {
                                              height: "310px",
                                              background: "#fff",
                                            },
                                          },
                                          [
                                            c(u.DuIcon, {
                                              attrs: {
                                                name: "complete-circle-filled",
                                                size: "72px",
                                                color: u.color,
                                              },
                                            }),
                                            c(
                                              "div",
                                              { staticClass: "success-title" },
                                              [
                                                r._v(
                                                  r._s(
                                                    null ===
                                                      (a = u.statusTitle) ||
                                                      void 0 === a
                                                      ? void 0
                                                      : a[u.status]
                                                  )
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        )
                                      : c(
                                          "div",
                                          {
                                            staticClass:
                                              "tip-container u-flex-c-c",
                                          },
                                          [
                                            c(
                                              "div",
                                              {
                                                staticClass:
                                                  "generate-tips u-flex-col-c",
                                              },
                                              [
                                                u.showTitle
                                                  ? c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "generate-title",
                                                      },
                                                      [
                                                        r._v(
                                                          " " +
                                                            r._s(
                                                              null ===
                                                                (o =
                                                                  u.statusTitle) ||
                                                                void 0 === o
                                                                ? void 0
                                                                : o[u.status]
                                                            ) +
                                                            " "
                                                        ),
                                                      ]
                                                    )
                                                  : r._e(),
                                                u.showSubTitle
                                                  ? c(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "tip u-flex-c-c",
                                                      },
                                                      [
                                                        u.tipCount > 0
                                                          ? [
                                                              c("span", [
                                                                r._v("前方"),
                                                              ]),
                                                              c(
                                                                "b",
                                                                {
                                                                  staticClass:
                                                                    "tip-count",
                                                                },
                                                                [
                                                                  r._v(
                                                                    r._s(
                                                                      u.tipCount
                                                                    )
                                                                  ),
                                                                ]
                                                              ),
                                                              c("span", [
                                                                r._v(
                                                                  " " +
                                                                    r._s(
                                                                      "位正在生成，机会每天0点刷新"
                                                                    ) +
                                                                    " "
                                                                ),
                                                              ]),
                                                            ]
                                                          : c("span", [
                                                              r._v(
                                                                "正在生成你的图片"
                                                              ),
                                                            ]),
                                                      ],
                                                      2
                                                    )
                                                  : r._e(),
                                                c(
                                                  "div",
                                                  {
                                                    directives: [
                                                      {
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: u.showSubTitle,
                                                        expression:
                                                          "showSubTitle",
                                                      },
                                                    ],
                                                    staticClass: "progress",
                                                  },
                                                  [
                                                    c("div", {
                                                      staticClass:
                                                        "progress-line",
                                                    }),
                                                  ]
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                    "FINISHED" !== u.status
                                      ? c(
                                          "div",
                                          { staticClass: "prompts u-flex-c" },
                                          r._l(u.prompt, function (t, e) {
                                            return c(
                                              "div",
                                              { key: e, staticClass: "prompt" },
                                              [r._v(" " + r._s(t) + " ")]
                                            );
                                          }),
                                          0
                                        )
                                      : r._e(),
                                  ],
                            ],
                            2
                          ),
                        ]
                      ),
                      c(
                        "div",
                        { staticClass: "bottom-btn-area u-flex-col" },
                        [
                          "WAIT_CONFIRM" === u.status
                            ? [
                                c(
                                  "div",
                                  {
                                    class: [
                                      "publish-btn",
                                      "u-flex-c-c",
                                      u.submitLock ? "disabled" : "",
                                    ],
                                    on: { click: u.submitPost },
                                  },
                                  [
                                    c("span", [r._v("发布到")]),
                                    c(
                                      "div",
                                      { staticClass: "island u-flex-c-c" },
                                      [
                                        c(u.Thumbnail, {
                                          style: {
                                            width: "16px",
                                            height: "16px",
                                            marginTop: "2px",
                                          },
                                          attrs: {
                                            url:
                                              null === (i = u.island) ||
                                              void 0 === i
                                                ? void 0
                                                : i.image,
                                            borderRadius: "4px",
                                            size: {
                                              style: "!fill_w360_h360_jpg",
                                            },
                                          },
                                        }),
                                        r._v(" " + r._s(u.island.name) + " "),
                                      ],
                                      1
                                    ),
                                    c("span", [r._v("看高清大图")]),
                                  ]
                                ),
                                c(
                                  "div",
                                  {
                                    staticClass: "abort-btn",
                                    on: {
                                      click: function (t) {
                                        return u.generateTaskConfirm(
                                          "USER_CANCEL"
                                        );
                                      },
                                    },
                                  },
                                  [r._v(" 放弃 ")]
                                ),
                              ]
                            : "FINISHED" === u.status ||
                              "USER_CANCEL" === u.status
                            ? [
                                (null === (n = u.tips) || void 0 === n
                                  ? void 0
                                  : n.chance) > 0 ||
                                null === (s = u.shareConfig) ||
                                void 0 === s ||
                                !s.showShareBtn
                                  ? c(
                                      "div",
                                      {
                                        staticClass: "publish-btn",
                                        on: { click: u.handleToHome },
                                      },
                                      [
                                        r._v(
                                          " 今日机会 " +
                                            r._s(
                                              (null === (l = u.tips) ||
                                              void 0 === l
                                                ? void 0
                                                : l.chance) || 0
                                            ) +
                                            " 次，再生成一次 "
                                        ),
                                      ]
                                    )
                                  : c(
                                      u.VanButton,
                                      {
                                        staticClass: "share-btn",
                                        attrs: {
                                          block: "",
                                          loading: r.loading,
                                        },
                                        on: { click: u.handleShare },
                                      },
                                      [
                                        u.showNav
                                          ? c(u.Icon, {
                                              staticClass: "wechat-icon",
                                              attrs: {
                                                name: "wechat",
                                                size: "20",
                                                color: "rgba(149, 255, 0, 1)",
                                              },
                                            })
                                          : r._e(),
                                        r._v(
                                          " " +
                                            r._s(
                                              u.showNav
                                                ? u.shareConfig.appShareText
                                                : u.shareConfig.miniappShareText
                                            ) +
                                            " "
                                        ),
                                      ],
                                      1
                                    ),
                                c(
                                  "div",
                                  { staticClass: "wrapper-btn" },
                                  [
                                    c(
                                      u.DuButton,
                                      {
                                        attrs: {
                                          full: "",
                                          type: "recommend",
                                          size: "large",
                                          "ext-style": {
                                            color: u.buttonBackground,
                                            borderColor: u.buttonBackground,
                                          },
                                        },
                                        on: { click: u.handleCheckOthers },
                                      },
                                      [r._v(" 去看看他人的生成 ")]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            : c(
                                "div",
                                {
                                  staticClass: "publish-btn",
                                  on: { click: u.handleCheckOthers },
                                },
                                [r._v(" 去看看他人的生成 ")]
                              ),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              c(u.islandPopup, {
                ref: "publishPopup",
                attrs: { islandInfo: u.island },
                on: { handleAfterJoin: u.handleAfterJoin },
              }),
            ],
            1
          );
        },
        i = [],
        n = (a("3c32"), a("417e")),
        s = (a("66b9"), a("b650")),
        l = (a("c3a6"), a("ad06")),
        r = (a("5246"), a("6b41")),
        c = (a("e7e5"), a("d399")),
        u = (a("13d5"), a("2b0e")),
        d = a("dec5"),
        p = a("39d4"),
        v = a("e6a1"),
        g = a("d17e"),
        m = function () {
          var t,
            e,
            a,
            o,
            i = this,
            n = i._self._c;
          return n(
            "Popup",
            {
              ref: "publishPopup",
              attrs: { position: "bottom", round: "" },
              on: {
                click: function (t) {
                  t.stopPropagation();
                },
              },
              model: {
                value: i.show,
                callback: function (t) {
                  i.show = t;
                },
                expression: "show",
              },
            },
            [
              n("div", { staticClass: "popup-container" }, [
                n("div", { staticClass: "title" }, [
                  i._v("加入岛即可发布讨论"),
                ]),
                n(
                  "div",
                  { staticClass: "islandinfo u-flex-s-sb" },
                  [
                    n("Thumbnail", {
                      attrs: {
                        url:
                          null === (t = i.islandInfo) || void 0 === t
                            ? void 0
                            : t.image,
                        size: { width: "48px", height: "48px" },
                        borderRadius: "8px",
                      },
                    }),
                    n("div", { staticClass: "island-info" }, [
                      n("div", { staticClass: "island-name otext" }, [
                        i._v(
                          " " +
                            i._s(
                              (null === (e = i.islandInfo) || void 0 === e
                                ? void 0
                                : e.name) || "-"
                            ) +
                            " "
                        ),
                      ]),
                      n("div", { staticClass: "island-baseinfo u-flex-c" }, [
                        null !== (a = i.islandInfo) &&
                        void 0 !== a &&
                        a.joinCount
                          ? n("text", { staticClass: "join-count" }, [
                              i._v(
                                " " +
                                  i._s(
                                    ((null === (o = i.islandInfo) ||
                                    void 0 === o
                                      ? void 0
                                      : o.joinCount) || "0") + "人加入"
                                  ) +
                                  " "
                              ),
                            ])
                          : i._e(),
                      ]),
                    ]),
                    n(
                      "div",
                      {
                        staticClass: "join-btn",
                        on: { click: i.handleTapJoin },
                      },
                      [i._v("加入")]
                    ),
                  ],
                  1
                ),
                n("div", { staticClass: "cancel", on: { tap: i.popupClose } }, [
                  i._v("待会再说"),
                ]),
              ]),
            ]
          );
        },
        b = [],
        f = (a("8a58"), a("e41f")),
        h = a("cb35"),
        C = {
          components: { Popup: f["a"], Thumbnail: g["a"] },
          props: { islandInfo: { type: Object, default: null } },
          setup(t, { emit: e }) {
            const a = Object(u["reactive"])({ show: !1 });
            function o() {
              a.show = !1;
            }
            async function i() {
              try {
                var a, i;
                if (null === (a = t.islandInfo) || void 0 === a || !a.joined)
                  await h["a"].join(
                    null === (i = t.islandInfo) || void 0 === i ? void 0 : i.id
                  ),
                    Object(c["a"])({ title: "加入岛成功", icon: "success" });
              } finally {
                o(), e("handleAfterJoin");
              }
            }
            function n() {
              a.show = !0;
            }
            return {
              ...Object(u["toRefs"])(a),
              popupClose: o,
              handleTapJoin: i,
              popupOpen: n,
            };
          },
          emits: ["handleAfterJoin"],
        },
        w = C,
        y = (a("0ef9"), a("0c7c")),
        _ = Object(y["a"])(w, m, b, !1, null, null, null),
        k = _.exports,
        O = a("4360"),
        x = a("d432"),
        I = a("684b"),
        j = a("a18c"),
        T = a("ed08"),
        S = a("7cb2"),
        R = a("3cc9"),
        P = a("d2b0"),
        N = a("b3ec"),
        B = {
          __name: "record-detail",
          props: { id: { type: String, default: "" } },
          setup(t) {
            const e = t;
            Object(u["useCssVars"])((t, e) => ({
              "341b8440": e.mainBcg,
              "6601de36": e.color,
              "5a39e8be": e.color4,
              a2df0c30: e.backgroundColor,
              "27ea614d": e.buttonBackground,
              "3f106838": t.buttonColor,
              "71af4402": e.linearGradient,
            }));
            const a = "https://api.qiandao.cn/z/poster-web",
              { proxy: o } = Object(u["getCurrentInstance"])(),
              i = Object(u["reactive"])({
                userId: null,
                submitLock: !1,
                images: [],
                taskId: "",
                content: "",
                transformTop: 0,
                island: null,
                tipCount: "",
                tips: null,
                statusTitle: {
                  WAIT_EXEC: "生成中",
                  EXECUTION: "生成中",
                  WAIT_CONFIRM: "选择图片发布后获取高清大图",
                  USER_CANCEL: "已放弃",
                  FINISHED: "已发布",
                },
                status: "",
                signatureText: "",
                prompt: [],
                publishImgs: [],
                showNav: Object(T["d"])(),
                inited: !1,
                showInput: !1,
                interval: null,
                showRoleTabs: [
                  { label: "展示", show: !0 },
                  { label: "不展示", show: !1 },
                ],
                currentRoleTab: { label: "展示", show: !0 },
                fontTabs: [
                  { font: "honglei", name: "鸿雷板书体" },
                  { font: "dakai", name: "东方大楷体" },
                  { font: "heiti", name: "数黑体" },
                ],
                currentFont: { font: "honglei", name: "鸿雷板书体" },
                extraMsg: null,
              }),
              {
                submitLock: m,
                images: b,
                content: f,
                transformTop: h,
                island: C,
                tipCount: w,
                statusTitle: y,
                status: _,
                prompt: B,
                showNav: A,
                tips: E,
                showInput: F,
                signatureText: D,
                showRoleTabs: U,
                currentRoleTab: M,
                fontTabs: z,
                currentFont: L,
                extraMsg: $,
              } = Object(u["toRefs"])(i),
              {
                color: H,
                color1: X,
                color4: J,
                mainBcg: W,
                backgroundColor: V,
                labelConfig: G,
                shareConfig: q,
              } = Object(N["a"])(),
              Q = Object(u["computed"])(() => {
                var t;
                return null === (t = O["a"].getters) || void 0 === t
                  ? void 0
                  : t["aigc/linearGradient"];
              }),
              Y = Object(u["computed"])(() => {
                var t, e;
                return null === (t = O["a"].state.aigc.pageConfig) ||
                  void 0 === t ||
                  null === (e = t.theme) ||
                  void 0 === e
                  ? void 0
                  : e.buttonBackground;
              }),
              K = Object(u["computed"])(() => {
                var t, e;
                return null === (t = O["a"].state.aigc.pageConfig) ||
                  void 0 === t ||
                  null === (e = t.theme) ||
                  void 0 === e
                  ? void 0
                  : e.navbar;
              }),
              Z = Object(u["computed"])(() => {
                var t;
                return null === (t = O["a"].state.aigc.pageConfig) ||
                  void 0 === t
                  ? void 0
                  : t.title;
              }),
              tt = Object(u["computed"])(() => {
                var t, e;
                return null === (t = O["a"].state.aigc.pageConfig) ||
                  void 0 === t ||
                  null === (e = t.components) ||
                  void 0 === e
                  ? void 0
                  : e.signature;
              }),
              et = Object(u["computed"])(() => {
                var t;
                return null === (t = O["a"].state.aigc.pageConfig) ||
                  void 0 === t
                  ? void 0
                  : t.pluginId;
              }),
              at = Object(u["computed"])(() => {
                var t, e;
                return null === (t = O["a"].state.aigc.pageConfig) ||
                  void 0 === t ||
                  null === (e = t.components) ||
                  void 0 === e
                  ? void 0
                  : e.roleMsg;
              }),
              ot = async () => {
                const [t] = await O["a"].dispatch("config/loadConfigs", [
                  "AIGCConfig/" + e.id,
                ]);
                O["a"].commit("aigc/UPDATE_PAGE_CONFIG", t);
              };
            Object(u["onMounted"])(async () => {
              i.interval && clearInterval(i.interval),
                (i.userId = j["a"].currentRoute.query.userId),
                "{}" !== JSON.stringify(nt.value) || i.userId
                  ? (ct.value || (await ot()), await ut())
                  : it(),
                ["WAIT_EXEC", "EXECUTION"].includes(i.status) &&
                  (i.interval = setInterval(async () => {
                    await ut();
                  }, 3e3)),
                (i.inited = !0),
                (document.title = Z.value);
            }),
              Object(u["onUnmounted"])(() => {
                i.interval && clearInterval(i.interval);
              });
            const it = () => {
                const t = "/modules/pages/common-login/index";
                (Object(T["h"])() || Object(T["d"])()) &&
                  o.navigateTo({ url: t });
              },
              nt = Object(u["computed"])(() => {
                var t, e;
                return null === (t = O["a"].state) ||
                  void 0 === t ||
                  null === (e = t.user) ||
                  void 0 === e
                  ? void 0
                  : e.me;
              }),
              st = Object(u["computed"])(() =>
                ["WAIT_EXEC", "EXECUTION"].includes(i.status)
              ),
              lt = Object(u["computed"])(() =>
                ["WAIT_EXEC", "EXECUTION", "USER_CANCEL", "FINISHED"].includes(
                  i.status
                )
              ),
              rt = Object(u["computed"])(() => {
                var t, e;
                return null === (t = i.images) ||
                  void 0 === t ||
                  null === (e = t.filter((t) => t.isSelect)) ||
                  void 0 === e
                  ? void 0
                  : e.map((t) => t.url);
              }),
              ct = Object(u["computed"])(() => {
                var t;
                return null === (t = O["a"].state.aigc.pageConfig) ||
                  void 0 === t
                  ? void 0
                  : t.scene;
              });
            async function ut() {
              var t, e, a;
              const o = {
                  userId:
                    (null === nt ||
                    void 0 === nt ||
                    null === (t = nt.value) ||
                    void 0 === t
                      ? void 0
                      : t.id) || i.userId,
                  scene: ct.value,
                },
                { data: n } = await x["a"].getTaskDetail(o);
              var s, l;
              i.inited ||
                ((i.images =
                  null === n ||
                  void 0 === n ||
                  null === (s = n.image) ||
                  void 0 === s
                    ? void 0
                    : s.map((t) => ({ url: t, isSelect: !0 }))),
                (i.island = null === n || void 0 === n ? void 0 : n.island),
                (i.taskId = null === n || void 0 === n ? void 0 : n.id),
                (i.prompt = null === n || void 0 === n ? void 0 : n.promptName),
                i.prompt.length &&
                  It(null === n || void 0 === n ? void 0 : n.promptName),
                console.log(
                  "8888888",
                  null === n || void 0 === n ? void 0 : n.extraMsg
                ),
                null !== n &&
                  void 0 !== n &&
                  n.extraMsg &&
                  (i.extraMsg =
                    null === (l = n.extraMsg) || void 0 === l
                      ? void 0
                      : l.split("&")));
              i.images =
                null === n ||
                void 0 === n ||
                null === (e = n.image) ||
                void 0 === e
                  ? void 0
                  : e.map((t, e) =>
                      "DramaReferenceOnly" === ct.value && 1 === e
                        ? { url: t, isSelect: !0, isOrigin: !0 }
                        : { url: t, isSelect: !0, isOrigin: !1 }
                    );
              const r =
                (null === n ||
                void 0 === n ||
                null === (a = n.originImages) ||
                void 0 === a
                  ? void 0
                  : a.map((t) => ({ url: t, isSelect: !0, isOrigin: !0 }))) ||
                [];
              (i.images = [...i.images, ...r]),
                (i.tipCount = +(null === n || void 0 === n
                  ? void 0
                  : n.myRank)),
                (i.tips = null === n || void 0 === n ? void 0 : n.tips),
                (i.status = null === n || void 0 === n ? void 0 : n.status),
                ["WAIT_EXEC", "EXECUTION"].includes(i.status) ||
                  (i.interval && clearInterval(i.interval));
            }
            async function dt(t) {
              var e;
              const a = {
                userId:
                  (null === nt ||
                  void 0 === nt ||
                  null === (e = nt.value) ||
                  void 0 === e
                    ? void 0
                    : e.id) || i.userId,
                id: i.taskId,
                status: t,
              };
              await x["a"].generateTaskConfirm(a),
                (i.status = t),
                i.interval && clearInterval(i.interval),
                "USER_CANCEL" === t && j["a"].replace({ name: "aigc-home" });
            }
            async function pt() {
              var t, e;
              if (i.submitLock) return;
              if (null === (t = i.island) || void 0 === t || !t.joined)
                return void o.$refs.publishPopup.popupOpen();
              if (null === (e = rt.value) || void 0 === e || !e.length)
                return void Object(c["a"])("至少选一张图片");
              i.submitLock = !0;
              const a = c["a"].loading({
                message: "发布中...",
                forbidClick: !0,
              });
              try {
                var n, s, l, r;
                await bt();
                const t = {
                    attachments:
                      null === (n = i.publishImgs) || void 0 === n
                        ? void 0
                        : n.map((t) => ({
                            key: Object(T["i"])(),
                            meta: {},
                            spu: null,
                            type: "image",
                            url: t,
                          })),
                    content: i.content,
                    labels: [
                      {
                        propertyTagId: "1436337",
                        relatedType: "tag",
                        title:
                          (null === G ||
                          void 0 === G ||
                          null === (s = G.value) ||
                          void 0 === s
                            ? void 0
                            : s.title) || "AI作图",
                        relatedId:
                          (null === (l = G.value) || void 0 === l
                            ? void 0
                            : l.id) || "1529281",
                      },
                    ],
                    mentionRelatedObjects: {},
                    privacy: "public",
                    relatedId:
                      null === (r = i.island) || void 0 === r ? void 0 : r.id,
                    reviewStatistic: "",
                    type: "standard",
                    meta: { plugin: { id: et.value }, aigcTaskId: i.taskId },
                  },
                  { data: e } = await I["a"].createPost(t);
                await dt("FINISHED"),
                  wt(null === e || void 0 === e ? void 0 : e.postId);
              } catch (u) {
                Object(c["a"])(JSON.stringify(u)),
                  u.message.indexOf("头像或昵称为空") > -1 &&
                    o.navigateTo({
                      url: "/pages-common/user-home-page/edit/index",
                    });
              } finally {
                a.clear(), (i.submitLock = !1);
              }
            }
            const vt = Object(u["computed"])(() => {
                var t;
                return null === (t = i.images.filter((t) => t.isSelect)) ||
                  void 0 === t
                  ? void 0
                  : t.length;
              }),
              gt = Object(P["a"])(() => {
                pt();
              }, 500);
            async function mt(t) {
              var e, n, s, l;
              const { pkg: r } = o.$route.query,
                c = encodeURIComponent(t || "");
              let u = `${a}/aigc/get-aigc-image?img=${c}&userName=${
                null === (e = nt.value) || void 0 === e ? void 0 : e.nickName
              }&id=${
                null === (n = i.island) || void 0 === n ? void 0 : n.id
              }&tabName=${
                null === G ||
                void 0 === G ||
                null === (s = G.value) ||
                void 0 === s
                  ? void 0
                  : s.title
              }&scene=${ct.value}&avatar=${
                null === (l = nt.value) || void 0 === l ? void 0 : l.avatar
              }`;
              var d, p, v;
              at.value &&
                i.currentRoleTab.show &&
                (u += `&roleName=${
                  null === (d = i.extraMsg) || void 0 === d ? void 0 : d[1]
                }&dramaName=${
                  null === (p = i.extraMsg) || void 0 === p ? void 0 : p[0]
                }&font=${
                  null === (v = i.currentFont) || void 0 === v ? void 0 : v.font
                }`);
              i.signatureText && (u += "&signature=" + i.signatureText);
              const g = await fetch(u, {
                  headers: {
                    "X-Package-Id": r || 1e3,
                    "X-Request-Package-Id": r || 1e3,
                  },
                }),
                m = await g.blob(),
                b = new File([m], Object(T["i"])() + ".jpg", { type: m.type });
              return b;
            }
            async function bt() {
              var t, e, a, o, n, s, l;
              const r =
                  null === (t = i.images) ||
                  void 0 === t ||
                  null === (e = t.filter((t) => t.isSelect)) ||
                  void 0 === e ||
                  null ===
                    (a = e.filter(
                      (t) => !(null !== t && void 0 !== t && t.isOrigin)
                    )) ||
                  void 0 === a
                    ? void 0
                    : a.map((t) => t.url),
                c = await Promise.all(
                  null === r || void 0 === r ? void 0 : r.map((t) => mt(t))
                ),
                u =
                  null ===
                    (o = await Promise.all(
                      c.map((t) => Object(S["b"])(t, "user-post.image"))
                    )) || void 0 === o
                    ? void 0
                    : o.map((t) => t.fullUrl + "!lfit_w1080_jpg"),
                d =
                  null === (n = i.images) ||
                  void 0 === n ||
                  null === (s = n.filter((t) => t.isSelect)) ||
                  void 0 === s ||
                  null ===
                    (l = s.filter((t) =>
                      null === t || void 0 === t ? void 0 : t.isOrigin
                    )) ||
                  void 0 === l
                    ? void 0
                    : l.map((t) => t.url);
              i.publishImgs = [...u, ...d];
            }
            function ft() {
              i.transformTop = 100;
            }
            function ht() {
              i.transformTop = 0;
            }
            function Ct() {
              var t;
              const e = `/pages-market/island/index?id=${
                null === (t = i.island) || void 0 === t ? void 0 : t.id
              }&tabName=AI作图`;
              (Object(T["h"])() || Object(T["d"])()) &&
                o.navigateTo({ url: e });
            }
            function wt(t) {
              const e = `/pages-community/post/spu-detail?postId=${t}&postCommentShowAll=true`;
              (Object(T["h"])() || Object(T["d"])()) &&
                o.navigateTo({ url: e });
            }
            function yt(t) {
              var e;
              null !== (e = i.images) && void 0 !== e && e[t].isSelect
                ? 1 !== vt.value
                  ? (i.images[t].isSelect = !i.images[t].isSelect)
                  : Object(c["a"])("请至少选择一张图片发布！")
                : (i.images[t].isSelect = !i.images[t].isSelect);
            }
            function _t() {
              i.island.joined = !0;
            }
            const kt = () => {
                console.log("====onClickLeft===="), R["a"].navigateBack();
              },
              Ot = () => {
                R["a"].shareUrl({
                  title: document.title,
                  url: `https://m.qiandaoapp.com/plugin/aigc/${e.id}/record-detail`,
                });
              },
              xt = () => {
                j["a"].replace({ name: "aigc-home" });
              };
            function It(t) {
              i.content = "咒语：" + t.reduce((t, e) => t + "," + e);
            }
            const jt = async () => {
                await x["a"].taskAddTimes({ scene: ct.value });
              },
              Tt = async () => {
                Object(T["d"])()
                  ? R["a"].shareMiniApp({
                      title: q.value.shareAppTitle,
                      path: q.value.shareAppPath,
                      imageUrl: q.value.shareAppImg,
                      miniAppId: q.value.shareAppId,
                      success: async (t) => {
                        await jt(), await ut();
                      },
                    })
                  : (window.open(q.value.shareUrl), jt(), ut());
              },
              St = (t) => {
                i.currentRoleTab = t;
              },
              Rt = (t) => {
                i.currentFont = t;
              };
            return {
              __sfc: !0,
              host: a,
              proxy: o,
              state: i,
              props: e,
              submitLock: m,
              images: b,
              content: f,
              transformTop: h,
              island: C,
              tipCount: w,
              statusTitle: y,
              status: _,
              prompt: B,
              showNav: A,
              tips: E,
              showInput: F,
              signatureText: D,
              showRoleTabs: U,
              currentRoleTab: M,
              fontTabs: z,
              currentFont: L,
              extraMsg: $,
              color: H,
              color1: X,
              color4: J,
              mainBcg: W,
              backgroundColor: V,
              labelConfig: G,
              shareConfig: q,
              linearGradient: Q,
              buttonBackground: Y,
              navbarColor: K,
              pageTitle: Z,
              signature: tt,
              pluginId: et,
              roleMsg: at,
              loadPageConfig: ot,
              logIn: it,
              me: nt,
              showSubTitle: st,
              showTitle: lt,
              uploadImgs: rt,
              scene: ct,
              getTaskDetail: ut,
              generateTaskConfirm: dt,
              submitPost: pt,
              selectedImageCount: vt,
              submit: gt,
              generateImage: mt,
              getImages: bt,
              handleFocus: ft,
              handleBulr: ht,
              handleCheckOthers: Ct,
              checkPost: wt,
              handleSelectImgs: yt,
              handleAfterJoin: _t,
              onClickLeft: kt,
              onClickRight: Ot,
              handleToHome: xt,
              generateDefaultContent: It,
              handleAddTimes: jt,
              handleShare: Tt,
              handleSelectRoleShow: St,
              handleSelectFont: Rt,
              DuIcon: d["a"],
              DuButton: p["a"],
              NavBar: r["a"],
              Icon: l["a"],
              VanButton: s["a"],
              VanCheckBox: n["a"],
              Layout: v["a"],
              Thumbnail: g["a"],
              islandPopup: k,
            };
          },
        },
        A = B,
        E = (a("d392"), Object(y["a"])(A, o, i, !1, null, "ec2ba8f8", null));
      e["default"] = E.exports;
    },
    "50fd": function (t, e, a) {},
    6376: function (t, e, a) {},
    "684b": function (t, e, a) {
      "use strict";
      var o = a("0ef7");
      e["a"] = {
        getPostAnalysis(t) {
          return o["d"].get("/analysis/" + t);
        },
        createPostReviewV3(t) {
          return o["h"].post("/gactus/post-review-v3", t);
        },
        updatePostReviewV3(t) {
          return o["h"].put("/gactus/post-review-v3", t);
        },
        deleteSpuMark(t) {
          return o["h"].post("/gactus/delete-spu-mark", t);
        },
        createPostArticle(t) {
          return o["h"].post("/gactus/posts-article", t);
        },
        getPostListByTopic(t) {
          return o["h"].post("/gactus/topics/posts-v3", t);
        },
        getPostListByTag(t) {
          return o["h"].post("/gactus/posts/by-tag-v4", t);
        },
        mark(t) {
          return o["h"].post("/gactus-web/v1/mark/edit", t);
        },
        createPost(t) {
          return o["h"].post("/gactus-web/post/create", t);
        },
        createPostStandard(t) {
          return o["h"].post("/gactus-web/post/standard/create", t);
        },
        updatePostStandard(t) {
          return o["h"].post("/gactus-web/post/standard/update", t);
        },
        comment(t) {
          return o["h"].post("/cactus-api/comments", t);
        },
        getUserHobbyMark(t) {
          return o["h"].post("/gactus/user-hobby-mark", t);
        },
        getUserMark(t) {
          return o["h"].post("/gactus-web/v1/get-user-marks", t);
        },
        getUserHobbyList(t) {
          return o["h"].get("/gactus-web/v1/interest/list", { uid: t });
        },
        gstoneGames(t) {
          return o["h"].post("/config-go/redirect/gstoneGames", t);
        },
      };
    },
    "7cb2": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return s;
      }),
        a.d(e, "c", function () {
          return l;
        }),
        a.d(e, "a", function () {
          return r;
        });
      var o = a("0ef7"),
        i = a("0d94"),
        n = a("a37c");
      async function s(t, e = "interior-admin.image") {
        const a = Object(i["e"])({
          isProd: n["e"],
          async customApiCall(t) {
            var e;
            const a = await o["h"].post("/uploader/gene-post-object-sign", t);
            return null === (e = a.data) || void 0 === e ? void 0 : e[0];
          },
        });
        return a({ file: t, scene: e });
      }
      function l(t) {
        return o["h"].get("/uploader/file-space/get", t);
      }
      function r(t, e = "interior-admin.image") {
        const a = Object(i["e"])({
          isProd: n["e"],
          async customApiCall(t) {
            var e;
            const a = await o["h"].post(
              "/uploader/anonymous/gene-post-object-sign",
              t
            );
            return null === (e = a.data) || void 0 === e ? void 0 : e[0];
          },
        });
        return a({ file: t, scene: e });
      }
    },
    a531: function (t, e, a) {},
    b3ec: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return n;
      });
      var o = a("2b0e"),
        i = a("4360");
      function n() {
        const t = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].getters) || void 0 === t
              ? void 0
              : t["aigc/mainColor"];
          }),
          e = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].getters) || void 0 === t
              ? void 0
              : t["aigc/secondaryColor"];
          }),
          a = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].getters) || void 0 === t
              ? void 0
              : t["aigc/color2"];
          }),
          n = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].getters) || void 0 === t
              ? void 0
              : t["aigc/color2"];
          }),
          s = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].getters) || void 0 === t
              ? void 0
              : t["aigc/color3"];
          }),
          l = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].getters) || void 0 === t
              ? void 0
              : t["aigc/color4"];
          }),
          r = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].getters) || void 0 === t
              ? void 0
              : t["aigc/backgroundColor"];
          }),
          c = Object(o["computed"])(() => {
            var e, a;
            return (
              (null === (e = i["a"].state.aigc.pageConfig) ||
              void 0 === e ||
              null === (a = e.theme) ||
              void 0 === a
                ? void 0
                : a.mainBackground) || t.value
            );
          }),
          u = Object(o["computed"])(() => {
            var e, a;
            return (
              (null === (e = i["a"].state.aigc.pageConfig) ||
              void 0 === e ||
              null === (a = e.theme) ||
              void 0 === a
                ? void 0
                : a.buttonColor) || t.value
            );
          }),
          d = Object(o["computed"])(() => {
            var t, e;
            return null === (t = i["a"].state.aigc.pageConfig) ||
              void 0 === t ||
              null === (e = t.components) ||
              void 0 === e
              ? void 0
              : e.upload;
          }),
          p = Object(o["computed"])(() => {
            var t, e;
            return null === (t = i["a"].state.aigc.pageConfig) ||
              void 0 === t ||
              null === (e = t.components) ||
              void 0 === e
              ? void 0
              : e.book;
          }),
          v = Object(o["computed"])(() => {
            var t, e;
            return null === (t = i["a"].state.aigc.pageConfig) ||
              void 0 === t ||
              null === (e = t.components) ||
              void 0 === e
              ? void 0
              : e.auth;
          }),
          g = Object(o["computed"])(() => {
            var t, e;
            return null === (t = i["a"].state.aigc.pageConfig) ||
              void 0 === t ||
              null === (e = t.theme) ||
              void 0 === e
              ? void 0
              : e.buttonBackground;
          }),
          m = Object(o["computed"])(() => {
            var t, e;
            return null === (t = i["a"].state.aigc.pageConfig) ||
              void 0 === t ||
              null === (e = t.theme) ||
              void 0 === e
              ? void 0
              : e.navbar;
          }),
          b = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].state.aigc.pageConfig) || void 0 === t
              ? void 0
              : t.promptConfig;
          }),
          f = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].state.aigc.pageConfig) || void 0 === t
              ? void 0
              : t.scene;
          }),
          h = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].state.aigc.pageConfig) || void 0 === t
              ? void 0
              : t.labelConfig;
          }),
          C = Object(o["computed"])(() => i["a"].state.aigc.pageConfig),
          w = Object(o["computed"])(() => i["a"].state.aigc.selectRole),
          y = Object(o["computed"])(() => i["a"].state.aigc.config),
          _ = Object(o["computed"])(() => i["a"].state.aigc.rolesConfig),
          k = Object(o["computed"])(() => i["a"].state.aigc.modelConfig),
          O = Object(o["computed"])(() => i["a"].state.aigc.bookConfig),
          x = Object(o["computed"])(() => i["a"].state.user.me),
          I = Object(o["computed"])(() => {
            var t, e, a;
            return (
              (null === (t = O.value) ||
              void 0 === t ||
              null === (e = t.flatMap((t) => t.subTabs)) ||
              void 0 === e ||
              null === (a = e.filter((t) => t.selected)) ||
              void 0 === a
                ? void 0
                : a.sort((t, e) => e.selectIdx - t.selectIdx)) || []
            );
          }),
          j = Object(o["computed"])({
            get() {
              return i["a"].state.aigc.contentPrompt;
            },
            set(t) {
              i["a"].commit("aigc/setContentPrompt", t);
            },
          }),
          T = Object(o["computed"])({
            get() {
              return i["a"].state.aigc.selectIdx;
            },
            set(t) {
              i["a"].commit("aigc/setSelectIdx", t);
            },
          }),
          S = Object(o["computed"])(() => {
            var t;
            return null === (t = i["a"].state.aigc.pageConfig) || void 0 === t
              ? void 0
              : t.shareConfig;
          }),
          R = Object(o["computed"])(() => i["a"].state.aigc.referenceRole);
        return {
          color: t,
          color1: a,
          color2: n,
          color3: s,
          color4: l,
          secondaryColor: e,
          backgroundColor: r,
          mainBcg: c,
          buttonColor: u,
          withUpload: d,
          withAuth: v,
          buttonBackground: g,
          navbarColor: m,
          promptConfig: b,
          scene: f,
          pageConfig: C,
          role: w,
          groups: y,
          rolesConfig: _,
          modelConfig: k,
          bookConfig: O,
          me: x,
          withBook: p,
          selectItems: I,
          contentPrompt: j,
          selectIdx: T,
          labelConfig: h,
          shareConfig: S,
          referenceRole: R,
        };
      }
    },
    cb35: function (t, e, a) {
      "use strict";
      var o = a("0ef7");
      e["a"] = {
        detail(t) {
          return o["h"].get("/treasure/island/detail?id=" + t);
        },
        join(t) {
          return o["h"].post("/treasure/island/join", { id: t });
        },
      };
    },
    cd4a: function (t, e, a) {
      "use strict";
      a("50fd");
    },
    d17e: function (t, e, a) {
      "use strict";
      var o = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            {
              staticClass: "ec-thumbnail",
              style: {
                width: t.cssWidth,
                height: t.cssHeight,
                "border-radius": t.cssBorderRadius,
                ...t.extStyle,
              },
            },
            [
              e("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.showDisplayImage,
                    expression: "showDisplayImage",
                  },
                ],
                staticClass: "ec-thumbnail__image",
                attrs: {
                  src: t.displaySrc,
                  alt: t.alt,
                  loading: "lazy",
                  "lazy-load": "",
                  mode: "aspectFill",
                },
                on: { click: t.handlePreview },
              }),
              e("img", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !t.showDisplayImage,
                    expression: "!showDisplayImage",
                  },
                ],
                staticClass: "ec-thumbnail__image",
                attrs: {
                  src: t.defaultUrl,
                  alt: "默认图片",
                  loading: "lazy",
                  "lazy-load": "",
                  mode: "aspectFill",
                },
              }),
            ]
          );
        },
        i = [],
        n = (a("4662"), a("28a2")),
        s = a("18e5"),
        l = {
          props: {
            url: { type: String, required: !0 },
            defaultUrl: { type: String, default: "" },
            size: { type: Object, default: () => ({}) },
            alt: { type: String, default: "" },
            borderRadius: { type: [Number, String], default: 0 },
            preview: { type: Boolean, default: !1 },
            extStyle: { type: Object, default: () => {} },
          },
          data() {
            return { showDisplayImage: !0, displaySrc: "" };
          },
          watch: {
            targetUrl: {
              immediate: !0,
              handler(t, e) {
                t && t !== e && this.setDisplaySrc();
              },
            },
          },
          computed: {
            cssBorderRadius() {
              return Object(s["a"])(this.borderRadius);
            },
            cssWidth() {
              const { width: t } = this.size;
              return t ? ("string" === typeof t ? t : t + "px") : "100%";
            },
            cssHeight() {
              const { height: t } = this.size;
              return t ? ("string" === typeof t ? t : t + "px") : "100%";
            },
            targetUrl() {
              const {
                url: t,
                size: { style: e },
              } = this;
              return e ? t + e : t;
            },
          },
          methods: {
            setDisplaySrc() {
              this.displaySrc = this.targetUrl;
            },
            handlePreview() {
              const { url: t, preview: e } = this;
              e &&
                Object(n["a"])({
                  images: [t + "!lfit_w1080_jpg"],
                  closeable: !0,
                });
            },
          },
        },
        r = l,
        c = (a("cd4a"), a("0c7c")),
        u = Object(c["a"])(r, o, i, !1, null, null, null);
      e["a"] = u.exports;
    },
    d2b0: function (t, e, a) {
      "use strict";
      a.d(e, "a", function () {
        return o;
      });
      a("13d5");
      function o(t, e) {
        let a;
        return function () {
          const o = arguments,
            i = this;
          a || (t.apply(i, o), (a = !0), setTimeout(() => (a = !1), e));
        };
      }
    },
    d2e6: function (t, e, a) {
      "use strict";
      a("6376");
    },
    d392: function (t, e, a) {
      "use strict";
      a("2d55");
    },
    d432: function (t, e, a) {
      "use strict";
      var o = a("0ef7");
      e["a"] = {
        createPost(t) {
          return o["h"].post("/gactus-web/post/create", t);
        },
        updatePost(t) {
          return o["h"].post("/gactus-web/post/update", t);
        },
        getPostByUser(t) {
          return o["h"].post("/gactus/posts/by-user-v2", t);
        },
        getPostByTag(t) {
          return o["h"].post("/gactus/posts/by-tag-v4", t);
        },
        getSinglePost(t) {
          return o["h"].post("/gactus/single-post", t);
        },
        getYearReport(t) {
          return o["h"].post("/gactus-web/v1/poster/larp_yearly_2022", t);
        },
        getTaskDetail(t) {
          return o["h"].get("/gactus-web/v1/generative-task/user", t);
        },
        generateTaskConfirm(t) {
          return o["h"].post("/gactus-web/v1/generative-task/confirm", t);
        },
        getTaskTip(t) {
          return o["h"].get("/gactus-web/v1/generative-task/tips", t);
        },
        taskUpsert(t) {
          return o["h"].post("/gactus-web/v1/generative-task/upsert", t);
        },
        taskAddTimes(t) {
          return o["h"].post("/gactus-web/v1/generative-task/share/report", t);
        },
        feedBack(t) {
          return o["h"].post("/gactus-web/v1/session/feedback", t);
        },
        getAnswer(t) {
          return o["h"].get("/gactus-web/v1/session/get-answer", t);
        },
        sendQuestion(t) {
          return o["h"].post("/gactus-web/v1/session/send-question", t);
        },
        getPostInfo(t) {
          return o["h"].get("/gactus-web/post/detail-info", t);
        },
        getFavoriteEntryVote(t) {
          return o["h"].post("/gactus-web/v1/favorite_entry_vote/get", t);
        },
      };
    },
    e6a1: function (t, e, a) {
      "use strict";
      var o = function () {
          var t = this,
            e = t._self._c,
            a = t._self._setupProxy;
          return e("div", { staticClass: "page-aigc" }, [
            e("img", {
              staticClass: "top-img",
              attrs: { src: a.bcg, alt: "" },
            }),
            e(
              "div",
              {
                staticClass: "repeat",
                style: { "margin-top": a.contentTop + " !important" },
              },
              [t._t("default")],
              2
            ),
          ]);
        },
        i = [],
        n = a("2b0e"),
        s = a("4360"),
        l =
          (a("ed08"),
          {
            __name: "layout",
            props: { height: { type: String, default: "80vh" } },
            setup(t) {
              Object(n["useCssVars"])((t, e) => ({
                "0bf2ddd7": e.mainBcg,
                "26aa999f": e.backgroundRepeat,
              }));
              const e = Object(n["computed"])(() => {
                  var t;
                  return null === (t = s["a"].getters) || void 0 === t
                    ? void 0
                    : t["aigc/mainColor"];
                }),
                a = Object(n["computed"])(() => {
                  var t;
                  return null === (t = s["a"].state.aigc.pageConfig) ||
                    void 0 === t
                    ? void 0
                    : t.backgroundImage;
                }),
                o = Object(n["computed"])(() => {
                  var t, a;
                  return (
                    (null === (t = s["a"].state.aigc.pageConfig) ||
                    void 0 === t ||
                    null === (a = t.theme) ||
                    void 0 === a
                      ? void 0
                      : a.mainBackground) || e.value
                  );
                }),
                i = Object(n["computed"])(() => {
                  var t;
                  return null === (t = s["a"].getters) || void 0 === t
                    ? void 0
                    : t["aigc/backgroundImage"];
                }),
                l = Object(n["computed"])(() => {
                  var t;
                  return null === (t = s["a"].getters) || void 0 === t
                    ? void 0
                    : t["aigc/backgroundRepeat"];
                }),
                r = Object(n["computed"])(() => {
                  var t, e;
                  return (
                    console.log(
                      "======",
                      null === (t = s["a"].getters) || void 0 === t
                        ? void 0
                        : t["aigc/contentTop"]
                    ),
                    null === (e = s["a"].getters) || void 0 === e
                      ? void 0
                      : e["aigc/contentTop"]
                  );
                });
              return {
                __sfc: !0,
                color: e,
                bcg: a,
                mainBcg: o,
                backgroundImage: i,
                backgroundRepeat: l,
                contentTop: r,
              };
            },
          }),
        r = l,
        c = (a("d2e6"), a("0c7c")),
        u = Object(c["a"])(r, o, i, !1, null, "474309c8", null);
      e["a"] = u.exports;
    },
  },
]);
