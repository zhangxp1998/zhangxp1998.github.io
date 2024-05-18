(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-c15a90de"],
  {
    "1b8b": function (t, s, a) {
      "use strict";
      var e = a("0ef7");
      s["a"] = {
        getShelfList(t) {
          return e["h"].get("/shelf/shelves/list-universal", t);
        },
        getQrcode(t) {
          return e["l"].get("/wx/get-qr-code", t);
        },
        getLarpGrouponDetail(t) {
          return e["h"].get("/larp/groupons/" + t);
        },
      };
    },
    "4c05": function (t, s, a) {
      "use strict";
      a.r(s);
      var e = function () {
          var t = this,
            s = t._self._c;
          return s("div", { staticClass: "drama-tickets" }, [
            s(
              "div",
              {
                staticClass: "machine",
                style: 3 === t.part ? "top: -50vh" : "",
              },
              [
                s("div", { staticClass: "front" }, [
                  s("div", {
                    staticClass: "front-top",
                    style: {
                      backgroundImage: this.shopId
                        ? "url(https://cdn.qiandaoapp.com/interior/images/66b1bb5f59b01975911ebc5ee592b0b9.png)"
                        : "url(https://cdn.qiandaoapp.com/interior/images/f497eab51ec33180f994481cf3c24ea4.png)",
                    },
                  }),
                  s("div", { staticClass: "front-bottom" }),
                  s("div", { staticClass: "screen" }, [
                    this.hasGroupon
                      ? s(
                          "div",
                          {
                            staticClass: "body",
                            style:
                              t.part > 1
                                ? "opacity: 0;pointer-events: none;"
                                : "",
                          },
                          [
                            this.shopId
                              ? [t._v("123")]
                              : [
                                  s(
                                    "div",
                                    {
                                      staticStyle: {
                                        "text-align": "center",
                                        color: "white",
                                        "margin-bottom": "10px",
                                      },
                                    },
                                    [
                                      0 === this.userMarkCount
                                        ? [t._v(" 暂无玩过的剧本 ")]
                                        : [
                                            t._v(
                                              " 我玩过的剧本 " +
                                                t._s(this.userMarkCount) +
                                                " "
                                            ),
                                          ],
                                    ],
                                    2
                                  ),
                                  t.userMarkList.length
                                    ? s(
                                        "van-list",
                                        {
                                          ref: "list",
                                          attrs: {
                                            finished: !t.hasMore,
                                            "immediate-check": !1,
                                          },
                                          on: { load: t.getUserHobbyMark },
                                          model: {
                                            value: t.isLoading,
                                            callback: function (s) {
                                              t.isLoading = s;
                                            },
                                            expression: "isLoading",
                                          },
                                        },
                                        [
                                          s(
                                            "div",
                                            { staticClass: "spu-list" },
                                            t._l(
                                              this.userMarkList,
                                              function (a, e) {
                                                return s(
                                                  "div",
                                                  {
                                                    key: e,
                                                    staticClass: "spu",
                                                    on: {
                                                      click: function (s) {
                                                        return t.handleSelectSpu(
                                                          a.name,
                                                          a.spuImg,
                                                          a.spuId
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    s("img", {
                                                      staticClass: "spu-cover",
                                                      attrs: {
                                                        src:
                                                          a.spuImg +
                                                          "!lfit_w240_jpg",
                                                      },
                                                    }),
                                                    s(
                                                      "div",
                                                      {
                                                        staticClass: "spu-name",
                                                      },
                                                      [t._v(t._s(a.name))]
                                                    ),
                                                  ]
                                                );
                                              }
                                            ),
                                            0
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                  s(
                                    "div",
                                    {
                                      staticClass: "main-btn",
                                      on: { click: t.handleMark },
                                    },
                                    [t._v("去标记")]
                                  ),
                                ],
                          ],
                          2
                        )
                      : t._e(),
                    2 === this.part
                      ? s("div", { staticClass: "body" }, [
                          t.hasGroupon
                            ? s(
                                "div",
                                {
                                  staticClass: "back-btn",
                                  on: {
                                    click: function (s) {
                                      return t.back(1);
                                    },
                                  },
                                },
                                [t._v(" ← 返回选择 ")]
                              )
                            : t._e(),
                          s("div", { staticClass: "drama" }, [
                            s("img", { attrs: { src: this.dramaCoverUrl } }),
                            s("div", { staticClass: "drama-name" }, [
                              t._v(t._s(this.dramaName)),
                            ]),
                          ]),
                          s("div", { staticClass: "form" }, [
                            s("div", { staticClass: "cell" }, [
                              s("div", { staticClass: "form-title" }, [
                                t._v("店铺"),
                              ]),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.shopName,
                                    expression: "shopName",
                                  },
                                ],
                                staticClass: "form-input",
                                attrs: { placeholder: "请输入" },
                                domProps: { value: t.shopName },
                                on: {
                                  input: function (s) {
                                    s.target.composing ||
                                      (t.shopName = s.target.value);
                                  },
                                },
                              }),
                            ]),
                            s("div", { staticClass: "cell" }, [
                              s("div", { staticClass: "form-title" }, [
                                t._v("时间"),
                              ]),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.time,
                                    expression: "time",
                                  },
                                ],
                                staticClass: "form-input",
                                attrs: { placeholder: "请输入" },
                                domProps: { value: t.time },
                                on: {
                                  input: function (s) {
                                    s.target.composing ||
                                      (t.time = s.target.value);
                                  },
                                },
                              }),
                            ]),
                            s("div", { staticClass: "cell" }, [
                              s("div", { staticClass: "form-title" }, [
                                t._v("玩家"),
                              ]),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.userName,
                                    expression: "userName",
                                  },
                                ],
                                staticClass: "form-input",
                                attrs: { placeholder: "请输入" },
                                domProps: { value: t.userName },
                                on: {
                                  input: function (s) {
                                    s.target.composing ||
                                      (t.userName = s.target.value);
                                  },
                                },
                              }),
                            ]),
                            this.characterList.length > 0
                              ? s(
                                  "div",
                                  { staticClass: "cell" },
                                  [
                                    s("div", { staticClass: "form-title" }, [
                                      t._v("角色"),
                                    ]),
                                    t._l(this.characterList, function (a, e) {
                                      return s(
                                        "div",
                                        {
                                          key: e,
                                          class: [
                                            "radio-btn",
                                            { active: t.character === a.name },
                                          ],
                                          on: {
                                            click: function (s) {
                                              return t.chooseCharacter(a);
                                            },
                                          },
                                        },
                                        [t._v(" " + t._s(a.name) + " ")]
                                      );
                                    }),
                                  ],
                                  2
                                )
                              : s("div", { staticClass: "cell" }, [
                                  s("div", { staticClass: "form-title" }, [
                                    t._v("角色"),
                                  ]),
                                  s("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.character,
                                        expression: "character",
                                      },
                                    ],
                                    staticClass: "form-input",
                                    attrs: { placeholder: "请输入" },
                                    domProps: { value: t.character },
                                    on: {
                                      input: function (s) {
                                        s.target.composing ||
                                          (t.character = s.target.value);
                                      },
                                    },
                                  }),
                                ]),
                            s("div", { staticClass: "cell" }, [
                              s("div", { staticClass: "form-title" }, [
                                t._v("DM"),
                              ]),
                              s("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: t.dm,
                                    expression: "dm",
                                  },
                                ],
                                staticClass: "form-input",
                                attrs: { placeholder: "请输入" },
                                domProps: { value: t.dm },
                                on: {
                                  input: function (s) {
                                    s.target.composing ||
                                      (t.dm = s.target.value);
                                  },
                                },
                              }),
                            ]),
                          ]),
                          s(
                            "div",
                            {
                              staticClass: "main-btn",
                              on: {
                                click: function (s) {
                                  return t.handleRenderClick();
                                },
                              },
                            },
                            [t._v("生成票根图")]
                          ),
                        ])
                      : t._e(),
                  ]),
                ]),
              ]
            ),
            3 === this.part
              ? s("div", { staticClass: "final-tip" }, [
                  s(
                    "div",
                    { staticClass: "template-list" },
                    [
                      s("span", { staticStyle: { "margin-right": "10px" } }, [
                        t._v("风格"),
                      ]),
                      t._l(this.template, function (a, e) {
                        return s(
                          "span",
                          {
                            key: e,
                            class: [
                              "radio-btn",
                              { active: a === t.selectedTemplate },
                            ],
                            on: {
                              click: function (s) {
                                return t.switchTemplate(a);
                              },
                            },
                          },
                          [t._v(" " + t._s(a) + " ")]
                        );
                      }),
                    ],
                    2
                  ),
                  t.image
                    ? s(
                        "div",
                        {
                          staticStyle: {
                            "font-size": "16px",
                            padding: "10px 0",
                          },
                        },
                        [t._v(" ✅ 出票成功 ")]
                      )
                    : s("div", { staticClass: "loader" }, [t._v("出票中..")]),
                  s(
                    "div",
                    { staticStyle: { margin: "5px 0 20px", opacity: "0.8" } },
                    [t._v(" 请长按下方图片，保存取出 ")]
                  ),
                  s(
                    "div",
                    {
                      staticClass: "main-btn",
                      staticStyle: { "max-width": "200px" },
                      on: {
                        click: function (s) {
                          return t.back(2);
                        },
                      },
                    },
                    [t._v(" 重新生成 ")]
                  ),
                  s("div", { class: { loading: !t.image } }, [
                    s(
                      "div",
                      { staticClass: "final", attrs: { id: "canvas" } },
                      [
                        t.image
                          ? [
                              s("img", {
                                staticClass: "draw",
                                attrs: { src: t.image },
                              }),
                            ]
                          : t.image || "经典" !== t.selectedTemplate
                          ? t.image || "仪式" !== t.selectedTemplate
                            ? t.image || "沉浸" !== t.selectedTemplate
                              ? t._e()
                              : s(
                                  "div",
                                  {
                                    staticClass: "poster chenjin",
                                    style: { backgroundColor: this.coverColor },
                                  },
                                  [
                                    s("img", {
                                      staticClass: "big-cover",
                                      attrs: { src: this.dramaCoverUrl },
                                    }),
                                    s("div", { staticClass: "content" }, [
                                      s("div", { staticClass: "header" }, [
                                        s("img", {
                                          staticClass: "small-cover",
                                          attrs: {
                                            src: t.characterCoverUrl
                                              ? t.characterCoverUrl +
                                                "!lfit_w240_jpg"
                                              : t.dramaCoverUrl,
                                          },
                                        }),
                                        s(
                                          "div",
                                          { staticClass: "drama-name" },
                                          [t._v(t._s(this.dramaName))]
                                        ),
                                        s("div", { staticClass: "shop-name" }, [
                                          t._v(t._s(this.shopName)),
                                        ]),
                                        s("div", { staticClass: "time" }, [
                                          t._v(t._s(this.time)),
                                        ]),
                                      ]),
                                      s("div", { staticClass: "body" }, [
                                        s("div", { staticClass: "cell" }, [
                                          s(
                                            "div",
                                            { staticClass: "subtitle" },
                                            [t._v("ACTOR")]
                                          ),
                                          s("div", { staticClass: "value" }, [
                                            t._v(t._s(this.userName)),
                                          ]),
                                        ]),
                                        s("div", { staticClass: "cell" }, [
                                          s(
                                            "div",
                                            { staticClass: "subtitle" },
                                            [t._v("CHARACTER")]
                                          ),
                                          s("div", { staticClass: "value" }, [
                                            t._v(t._s(this.character)),
                                          ]),
                                        ]),
                                        s("div", { staticClass: "cell" }, [
                                          s(
                                            "div",
                                            { staticClass: "subtitle" },
                                            [t._v("DM")]
                                          ),
                                          s("div", { staticClass: "value" }, [
                                            t._v(t._s(this.dm)),
                                          ]),
                                        ]),
                                        s("img", {
                                          staticClass: "stamp",
                                          attrs: {
                                            src: "https://cdn.qiandaoapp.com/interior/images/91678f34051a0d148b582c1887cacde8.png",
                                          },
                                        }),
                                      ]),
                                      this.shopId
                                        ? s("div", { staticClass: "footer" }, [
                                            this.shopCoverUrl
                                              ? s("img", {
                                                  staticClass: "avatar",
                                                  attrs: {
                                                    src: this.shopCoverUrl,
                                                    alt: "avatar",
                                                  },
                                                })
                                              : t._e(),
                                            s("img", {
                                              staticClass: "qrcode-img",
                                              attrs: { src: this.shopQrcode },
                                            }),
                                            t._m(4),
                                          ])
                                        : s("div", { staticClass: "footer" }, [
                                            s("img", {
                                              staticClass: "qrcode-img",
                                              attrs: {
                                                src: "https://cdn.qiandaoapp.com/interior/images/7c901c7c09c45537f9bf64eace2d9d05.png",
                                              },
                                            }),
                                            t._m(5),
                                          ]),
                                    ]),
                                  ]
                                )
                            : s(
                                "div",
                                {
                                  staticClass: "poster yishi",
                                  style: { backgroundColor: this.coverColor },
                                },
                                [
                                  s("div", { staticClass: "content" }, [
                                    s("img", {
                                      staticClass: "big-cover",
                                      attrs: { src: this.dramaCoverUrl },
                                    }),
                                    s("div", { staticClass: "header" }, [
                                      s("img", {
                                        staticClass: "small-cover",
                                        attrs: {
                                          src: t.characterCoverUrl
                                            ? t.characterCoverUrl +
                                              "!lfit_w240_jpg"
                                            : t.dramaCoverUrl,
                                        },
                                      }),
                                      s("div", { staticClass: "drama-name" }, [
                                        t._v(t._s(this.dramaName)),
                                      ]),
                                      s("div", { staticClass: "shop-name" }, [
                                        t._v(t._s(this.shopName)),
                                      ]),
                                      s("div", { staticClass: "time" }, [
                                        t._v(t._s(this.time)),
                                      ]),
                                    ]),
                                    s("div", {
                                      staticClass: "line",
                                      style: { borderColor: this.coverColor },
                                    }),
                                    s("div", {
                                      staticClass: "dot left",
                                      style: {
                                        top: "-15px",
                                        backgroundColor: this.coverColor,
                                      },
                                    }),
                                    s("div", {
                                      staticClass: "dot left",
                                      style: {
                                        bottom: "153px",
                                        top: "auto",
                                        backgroundColor: this.coverColor,
                                      },
                                    }),
                                    s("div", {
                                      staticClass: "dot left",
                                      style: {
                                        bottom: "-15px",
                                        top: "auto",
                                        backgroundColor: this.coverColor,
                                      },
                                    }),
                                    s("div", {
                                      staticClass: "dot right",
                                      style: {
                                        top: "-15px",
                                        backgroundColor: this.coverColor,
                                      },
                                    }),
                                    s("div", {
                                      staticClass: "dot right",
                                      style: {
                                        bottom: "153px",
                                        top: "auto",
                                        backgroundColor: this.coverColor,
                                      },
                                    }),
                                    s("div", {
                                      staticClass: "dot right",
                                      style: {
                                        bottom: "-15px",
                                        top: "auto",
                                        backgroundColor: this.coverColor,
                                      },
                                    }),
                                    s("div", { staticClass: "body" }, [
                                      s("div", { staticClass: "cell" }, [
                                        s("div", { staticClass: "subtitle" }, [
                                          t._v("ACTOR"),
                                        ]),
                                        s("div", { staticClass: "value" }, [
                                          t._v(t._s(this.userName)),
                                        ]),
                                      ]),
                                      s("div", { staticClass: "cell" }, [
                                        s("div", { staticClass: "subtitle" }, [
                                          t._v("CHARACTER"),
                                        ]),
                                        s("div", { staticClass: "value" }, [
                                          t._v(t._s(this.character)),
                                        ]),
                                      ]),
                                      s("div", { staticClass: "cell" }, [
                                        s("div", { staticClass: "subtitle" }, [
                                          t._v("DM"),
                                        ]),
                                        s("div", { staticClass: "value" }, [
                                          t._v(t._s(this.dm)),
                                        ]),
                                      ]),
                                      s("img", {
                                        staticClass: "stamp",
                                        attrs: {
                                          src: "https://cdn.qiandaoapp.com/interior/images/91678f34051a0d148b582c1887cacde8.png",
                                        },
                                      }),
                                    ]),
                                    this.shopId
                                      ? s("div", { staticClass: "footer" }, [
                                          this.shopCoverUrl
                                            ? s("img", {
                                                staticClass: "avatar",
                                                attrs: {
                                                  src: this.shopCoverUrl,
                                                  alt: "avatar",
                                                },
                                              })
                                            : t._e(),
                                          s("img", {
                                            staticClass: "qrcode-img",
                                            attrs: { src: this.shopQrcode },
                                          }),
                                          t._m(2),
                                        ])
                                      : s("div", { staticClass: "footer" }, [
                                          s("img", {
                                            staticClass: "qrcode-img",
                                            attrs: {
                                              src: "https://cdn.qiandaoapp.com/interior/images/7c901c7c09c45537f9bf64eace2d9d05.png",
                                            },
                                          }),
                                          t._m(3),
                                        ]),
                                  ]),
                                ]
                              )
                          : s(
                              "div",
                              {
                                staticClass: "poster",
                                style: { backgroundColor: this.coverColor },
                              },
                              [
                                s("img", {
                                  staticClass: "big-cover",
                                  attrs: { src: this.dramaCoverUrl },
                                }),
                                s("div", { staticClass: "content" }, [
                                  s("div", { staticClass: "header" }, [
                                    s("img", {
                                      staticClass: "small-cover",
                                      attrs: {
                                        src: t.characterCoverUrl
                                          ? t.characterCoverUrl +
                                            "!lfit_w240_jpg"
                                          : t.dramaCoverUrl,
                                      },
                                    }),
                                    s("div", { staticClass: "drama-name" }, [
                                      t._v(t._s(this.dramaName)),
                                    ]),
                                    s("div", { staticClass: "shop-name" }, [
                                      t._v(t._s(this.shopName)),
                                    ]),
                                    s("div", { staticClass: "time" }, [
                                      t._v(t._s(this.time)),
                                    ]),
                                  ]),
                                  s("div", {
                                    staticClass: "line",
                                    style: { borderColor: this.coverColor },
                                  }),
                                  s("div", {
                                    staticClass: "dot left",
                                    style: { backgroundColor: this.coverColor },
                                  }),
                                  s("div", {
                                    staticClass: "dot right",
                                    style: { backgroundColor: this.coverColor },
                                  }),
                                  s("div", { staticClass: "body" }, [
                                    s("div", { staticClass: "cell" }, [
                                      s("div", { staticClass: "subtitle" }, [
                                        t._v("ACTOR"),
                                      ]),
                                      s("div", { staticClass: "value" }, [
                                        t._v(t._s(this.userName)),
                                      ]),
                                    ]),
                                    s("div", { staticClass: "cell" }, [
                                      s("div", { staticClass: "subtitle" }, [
                                        t._v("CHARACTER"),
                                      ]),
                                      s("div", { staticClass: "value" }, [
                                        t._v(t._s(this.character)),
                                      ]),
                                    ]),
                                    s("div", { staticClass: "cell" }, [
                                      s("div", { staticClass: "subtitle" }, [
                                        t._v("DM"),
                                      ]),
                                      s("div", { staticClass: "value" }, [
                                        t._v(t._s(this.dm)),
                                      ]),
                                    ]),
                                    s("img", {
                                      staticClass: "stamp",
                                      attrs: {
                                        src: "https://cdn.qiandaoapp.com/interior/images/91678f34051a0d148b582c1887cacde8.png",
                                      },
                                    }),
                                  ]),
                                  this.shopId
                                    ? s("div", { staticClass: "footer" }, [
                                        this.shopCoverUrl
                                          ? s("img", {
                                              staticClass: "avatar",
                                              attrs: {
                                                src: this.shopCoverUrl,
                                                alt: "avatar",
                                              },
                                            })
                                          : t._e(),
                                        s("img", {
                                          staticClass: "qrcode-img",
                                          attrs: { src: this.shopQrcode },
                                        }),
                                        t._m(0),
                                      ])
                                    : s("div", { staticClass: "footer" }, [
                                        s("img", {
                                          staticClass: "qrcode-img",
                                          attrs: {
                                            src: "https://cdn.qiandaoapp.com/interior/images/7c901c7c09c45537f9bf64eace2d9d05.png",
                                          },
                                        }),
                                        t._m(1),
                                      ]),
                                ]),
                              ]
                            ),
                      ],
                      2
                    ),
                  ]),
                ])
              : t._e(),
          ]);
        },
        i = [
          function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "slogan" }, [
              s("span", { staticStyle: { "font-weight": "bold" } }, [
                t._v("米花星球"),
              ]),
              s("br"),
              t._v(" 剧本杀兴趣社区与拼车平台 "),
            ]);
          },
          function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "slogan" }, [
              s("span", { staticStyle: { "font-weight": "bold" } }, [
                t._v("千岛剧本杀"),
              ]),
              s("br"),
              t._v(" 剧本杀兴趣社区与拼车平台 "),
            ]);
          },
          function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "slogan" }, [
              s("span", { staticStyle: { "font-weight": "bold" } }, [
                t._v("米花星球"),
              ]),
              s("br"),
              t._v(" 剧本杀兴趣社区与拼车平台 "),
            ]);
          },
          function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "slogan" }, [
              s("span", { staticStyle: { "font-weight": "bold" } }, [
                t._v("千岛剧本杀"),
              ]),
              s("br"),
              t._v(" 剧本杀兴趣社区与拼车平台 "),
            ]);
          },
          function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "slogan" }, [
              s("span", { staticStyle: { "font-weight": "bold" } }, [
                t._v("米花星球"),
              ]),
              s("br"),
              t._v(" 剧本杀兴趣社区与拼车平台 "),
            ]);
          },
          function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "slogan" }, [
              s("span", { staticStyle: { "font-weight": "bold" } }, [
                t._v("千岛剧本杀"),
              ]),
              s("br"),
              t._v(" 剧本杀兴趣社区与拼车平台 "),
            ]);
          },
        ],
        r = (a("2994"), a("2bdd")),
        o = a("c0e9"),
        c = a.n(o),
        l = a("2f62"),
        n = a("7cb2"),
        d = a("ed08"),
        v = a("1b8b"),
        h = a("dd8a"),
        m = a("684b"),
        p = a("5a0c"),
        u = a.n(p),
        g = a("bc3a"),
        C = a.n(g),
        b = {
          components: { [r["a"].name]: r["a"] },
          data() {
            return {
              loading: !1,
              part: 2,
              shopId: "",
              dramaCoverUrl: "",
              dramaName: "",
              shopName: "",
              shopCoverUrl: "",
              time: "",
              userName: "",
              character: "",
              characterCoverUrl: "",
              dm: "",
              image: "",
              coverColor: "",
              spuId: "",
              characterList: [],
              userMarkList: [],
              hasGroupon: !1,
              hasMore: !1,
              isLoading: !1,
              userMarkCount: 0,
              template: ["经典", "沉浸", "仪式"],
              selectedTemplate: "经典",
            };
          },
          computed: { ...Object(l["mapState"])("user", ["me"]) },
          async mounted() {
            var t;
            "{}" === JSON.stringify(this.me) && this.logIn();
            const s =
              null === (t = this.$route) || void 0 === t ? void 0 : t.query;
            if (
              (s.grouponId
                ? (this.getGrouponDetail(s.grouponId), (this.part = 2))
                : ((this.part = 1), (this.hasGroupon = !0)),
              s.shopId)
            ) {
              this.shopId = s.shopId;
              const t = await h["a"].getQrcode({
                path: "/pages-tab/home/index?dramaShopId=" + s.shopId,
                packageId: 1021,
              });
              this.shopQrcode = t;
            } else
              (this.userName = this.me.nickName),
                this.getUserHobbyMark(this.me.id);
          },
          methods: {
            logIn() {
              const t = "/modules/pages/common-login/index";
              (Object(d["h"])() || Object(d["d"])()) &&
                this.navigateTo({ url: t });
            },
            async getGrouponDetail(t) {
              try {
                const s = await v["a"].getLarpGrouponDetail(t);
                (this.dramaCoverUrl = s.data.coverImages[0]),
                  (this.dramaName = s.data.title),
                  (this.shopName = s.data.shelf.org.nickName),
                  (this.shopCoverUrl = s.data.shelf.org.avatar),
                  (this.spuId = s.data.shelf.spuId),
                  this.getCharacterDetail(s.data.shelf.spuId),
                  (this.time = u.a
                    .unix(s.data.eventStartedAt / 1e3)
                    .format("YY-MM-DD HH:mm")),
                  this.getCoverColor(s.data.coverImages[0]);
              } catch (s) {
                console.error(s);
              }
            },
            async getCharacterDetail(t) {
              try {
                const s = await h["a"].getSpuOpposite({
                  aggregate: !0,
                  limit: 50,
                  offset: 0,
                  propertyId: "1285583",
                  spuId: t,
                });
                ("{}" !== JSON.stringify(s.data)) & (s.data.list.length > 0) &&
                  (this.characterList = s.data.list);
              } catch (s) {
                console.error(s);
              }
            },
            async getCoverColor(t) {
              const { data: s } = await C.a.get(t + "!color");
              this.coverColor = "#" + s.RGB.slice(2, 8);
            },
            handleRenderClick() {
              (this.part = 3), (this.image = ""), this.drawImage();
            },
            back(t) {
              (this.part = t),
                1 === t &&
                  ((this.shopName = ""),
                  (this.time = ""),
                  (this.character = ""),
                  (this.characterCoverUrl = ""),
                  (this.dm = ""));
            },
            drawImage() {
              this.$nextTick(() => {
                setTimeout(() => {
                  let allowedTags = new Set(["head", "body", "meta"]);
                  let canvas = document.getElementById("canvas");
                  c()(canvas, {
                    allowTaint: !1,
                    useCORS: !0,
                    backgroundColor: "white",
                    scale: 3,
                    ignoreElements: (elem) => {
                      if (
                        elem.id == "canvas" ||
                        allowedTags.has(elem.tagName.toLowerCase())
                      ) {
                        return false;
                      }
                      if (canvas.contains(elem) || elem.contains(canvas)) {
                        return false;
                      }
                      if (
                        elem.tagName.toLowerCase() === "link" &&
                        elem.href.endsWith(".css")
                      ) {
                        return false;
                      }
                      console.log(elem);
                      return true;
                    },
                  })
                    .then((t) => {
                      t.toBlob((t) => {
                        var reader = new FileReader();
                        reader.onload = (e) => {
                          this.image = e.target.result;
                        };
                        reader.readAsDataURL(t);
                      }, "image/jpeg");
                    })
                    .catch(() => {});
                });
              });
            },
            chooseCharacter(t) {
              (this.character = t.name), (this.characterCoverUrl = t.cover);
            },
            async getUserHobbyMark(t) {
              this.isLoading = !0;
              var s = {
                hobbyId: "1000225",
                limit: 30,
                offset: this.userMarkList.length,
                userId: t,
              };
              try {
                const t = await m["a"].getUserHobbyMark(s);
                "{}" !== JSON.stringify(t.data) &&
                  ((this.userMarkList = this.userMarkList.concat(
                    t.data.markDetails.map((t) => t.spu)
                  )),
                  (this.userMarkCount = Number(
                    t.data.markCountWords.match(/\d+/g)
                  )),
                  this.userMarkList.length < this.userMarkCount
                    ? (this.hasMore = !0)
                    : (this.hasMore = !1));
                window.userMarkList = this.userMarkList;
              } catch (a) {
                console.error(a);
              }
              this.isLoading = !1;
            },
            handleSelectSpu(t, s, a) {
              (this.part = 2),
                (this.dramaName = t),
                (this.dramaCoverUrl = s),
                this.getCoverColor(s),
                (this.spuId = a),
                this.getCharacterDetail(a),
                this.getUserMark(a);
            },
            async getUserMark(t) {
              try {
                const s = await m["a"].getUserMark({
                  limit: 1,
                  offset: 0,
                  spuId: t,
                  userId: this.me.id,
                });
                if (s.data.marks.length > 0) {
                  const t = JSON.parse(s.data.marks[0].meta);
                  if (
                    (t.filter((t) => "店铺" === t.label).length > 0 &&
                      (this.shopName = t.filter(
                        (t) => "店铺" === t.label
                      )[0].targetList[0].dataValue),
                    t.filter((t) => "角色" === t.label).length > 0)
                  ) {
                    const s = t.filter((t) => "角色" === t.label)[0].targetList,
                      a = t.filter((t) => "角色" === t.label)[0].value;
                    (this.character = s.filter(
                      (t) => t.targetId === a
                    )[0].dataValue),
                      (this.characterCoverUrl = s.filter(
                        (t) => t.targetId === a
                      )[0].targetImage);
                  }
                }
              } catch (s) {
                console.error(s);
              }
            },
            async handleMark() {
              let gameName = prompt("请输入要添加的剧本名");
              let data = await m["a"].addKeywordHobbyMark(gameName);
              if (data["code"] != 200) {
                return;
              }
              let games = data["data"]["items"].filter(
                (item) => item.spuShow?.item_label == "剧本杀"
              );
              this.userMarkList = this.userMarkList.concat(
                games.map((item) => {
                  let spuImg = item.spuShow?.imgs.cover;
                  return {
                    name: item.spuShow?.name,
                    spuId: item.spuShow?.id,
                    spuImg,
                  };
                })
              );
              console.log(games);
            },
            toShop() {
              const t =
                "/modules/pages/web-view/index?url=https://m.qiandaoapp.com/plugin/drama-tickets-shop";
              (Object(d["h"])() || Object(d["d"])()) &&
                this.navigateTo({ url: t });
            },
            switchTemplate(t) {
              (this.selectedTemplate = t), (this.image = ""), this.drawImage();
            },
          },
        },
        f = b,
        _ = (a("d06e"), a("0c7c")),
        k = Object(_["a"])(f, e, i, !1, null, null, null);
      s["default"] = k.exports;
    },
    "684b": function (t, s, a) {
      "use strict";
      var e = a("0ef7");
      s["a"] = {
        getPostAnalysis(t) {
          return e["d"].get("/analysis/" + t);
        },
        createPostReviewV3(t) {
          return e["h"].post("/gactus/post-review-v3", t);
        },
        updatePostReviewV3(t) {
          return e["h"].put("/gactus/post-review-v3", t);
        },
        deleteSpuMark(t) {
          return e["h"].post("/gactus/delete-spu-mark", t);
        },
        createPostArticle(t) {
          return e["h"].post("/gactus/posts-article", t);
        },
        getPostListByTopic(t) {
          return e["h"].post("/gactus/topics/posts-v3", t);
        },
        getPostListByTag(t) {
          return e["h"].post("/gactus/posts/by-tag-v4", t);
        },
        mark(t) {
          return e["h"].post("/gactus-web/v1/mark/edit", t);
        },
        createPost(t) {
          return e["h"].post("/gactus-web/post/create", t);
        },
        createPostStandard(t) {
          return e["h"].post("/gactus-web/post/standard/create", t);
        },
        updatePostStandard(t) {
          return e["h"].post("/gactus-web/post/standard/update", t);
        },
        comment(t) {
          return e["h"].post("/cactus-api/comments", t);
        },
        getUserHobbyMark(t) {
          return e["h"].post("/gactus/user-hobby-mark", t);
        },
        addKeywordHobbyMark(t) {
          return e["h"].get(
            `plast/search/chaos/v4?q=${encodeURIComponent(
              t
            )}&origin=type_in&start-index=0&max-results=20&scene=home`,
            t
          );
        },
        getUserMark(t) {
          return e["h"].post("/gactus-web/v1/get-user-marks", t);
        },
        getUserHobbyList(t) {
          return e["h"].get("/gactus-web/v1/interest/list", { uid: t });
        },
        gstoneGames(t) {
          return e["h"].post("/config-go/redirect/gstoneGames", t);
        },
      };
    },
    "7cb2": function (t, s, a) {
      "use strict";
      a.d(s, "b", function () {
        return o;
      }),
        a.d(s, "c", function () {
          return c;
        }),
        a.d(s, "a", function () {
          return l;
        });
      var e = a("0ef7"),
        i = a("0d94"),
        r = a("a37c");
      async function o(t, s = "interior-admin.image") {
        const a = Object(i["e"])({
          isProd: r["e"],
          async customApiCall(t) {
            var s;
            const a = await e["h"].post("/uploader/gene-post-object-sign", t);
            return null === (s = a.data) || void 0 === s ? void 0 : s[0];
          },
        });
        return a({ file: t, scene: s });
      }
      function c(t) {
        return e["h"].get("/uploader/file-space/get", t);
      }
      function l(t, s = "interior-admin.image") {
        const a = Object(i["e"])({
          isProd: r["e"],
          async customApiCall(t) {
            var s;
            const a = await e["h"].post(
              "/uploader/anonymous/gene-post-object-sign",
              t
            );
            return null === (s = a.data) || void 0 === s ? void 0 : s[0];
          },
        });
        return a({ file: t, scene: s });
      }
    },
    d06e: function (t, s, a) {
      "use strict";
      a("dab4");
    },
    dab4: function (t, s, a) {},
    dd8a: function (t, s, a) {
      "use strict";
      var e = a("0ef7");
      s["a"] = {
        myPokemon(t) {
          return e["q"].get("/v1/pokemon/my", t);
        },
        nextStep(t) {
          return e["q"].post("/v1/pokemon/next-step", t);
        },
        searchSpuByImage(t) {
          return e["q"].post("/v1/image/search/spu", t);
        },
        searchSpuByAggregateImages(t) {
          return e["q"].post("/v1/image/search/multi/spu/v2", t);
        },
        ocr(t) {
          return e["j"].post("/z/stargazing/z/ocr", t);
        },
        getQrcode(t) {
          return e["j"].get("/z/poster-web/wechat/mp-qrcode", t);
        },
        getSpuOpposite(t) {
          return e["j"].post("/treasure/spus/opposite/list", t);
        },
        getSpuWithRelated(t) {
          return e["j"].post("/treasure/v1/search/spu/with/related", t);
        },
        getSpuWaterfall(t) {
          return e["j"].get("/treasure/v1/waterfall/list", t);
        },
        fetchStep2BizConfig() {
          return e["j"].get(
            "https://config-cdn.qiandaoapp.com/mp-common/pluginsBizConfig.json"
          );
        },
        getRankInfo(t) {
          return e["j"].get("/treasure/flora/v1/rank", t);
        },
        getByDistributedTagIds(t) {
          return e["j"].post(
            "/treasure/v1/public-relations/byDistributedTagIds",
            t
          );
        },
        getPalworld(t) {
          return e["g"].get("/palu/check", t);
        },
      };
    },
  },
]);
