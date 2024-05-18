(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-50fd3103"],
  {
    "0bfa": function (t, s, i) {
      "use strict";
      var e = i("0ef7");
      s["a"] = {
        submit(t) {
          return e["j"].post("/echo-form/form/post", t);
        },
      };
    },
    5043: function (t, s, i) {},
    "536c": function (t, s, i) {},
    "6d6a": function (t, s, i) {
      "use strict";
      var e = function () {
          var t = this,
            s = t._self._c;
          return s(
            "div",
            { staticClass: "ec-product-covers" },
            [
              s(
                "swipe",
                {
                  ref: "swipe",
                  staticClass: "images-swiper",
                  attrs: {
                    current: t.current,
                    "initial-swipe": 0,
                    "show-indicators": !1,
                  },
                  on: { change: t.onChangeCurrent },
                  scopedSlots: t._u([
                    {
                      key: "indicator",
                      fn: function () {
                        return [
                          s(
                            "div",
                            { staticClass: "ec-product-covers__page-numbers" },
                            [
                              t._v(
                                " " +
                                  t._s(t.current + 1) +
                                  "/" +
                                  t._s(t.medias.length) +
                                  " "
                              ),
                            ]
                          ),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                },
                t._l(t._medias, function (i, e) {
                  return s(
                    "swipe-item",
                    { key: e, staticClass: "swiper-item" },
                    [
                      "video" === i.type
                        ? s("video", {
                            staticClass: "ec-product-covers__img",
                            attrs: {
                              src: i.url,
                              autoplay: !1,
                              loop: !1,
                              controls: "",
                            },
                          })
                        : s("van-image", {
                            staticClass: "ec-product-covers__img",
                            attrs: {
                              src: i.url + "!lfit_w1080_jpg",
                              fit: t.mode,
                            },
                            on: {
                              click: function (s) {
                                return t.viewImage(e);
                              },
                            },
                          }),
                    ],
                    1
                  );
                }),
                1
              ),
              t.medias.length > 1
                ? s(
                    "div",
                    { staticClass: "ec-product-covers__indicators" },
                    [
                      s("Indicator", {
                        attrs: { total: t.medias.length, current: t.current },
                        on: { change: t.swipeTo },
                      }),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        a = [],
        o = (i("4662"), i("28a2")),
        n = (i("4056"), i("44bf")),
        c = (i("4b0a"), i("2bb1")),
        r = (i("7844"), i("5596")),
        l = function () {
          var t = this,
            s = t._self._c;
          return s(
            "div",
            { staticClass: "ec-product-covers-indicator" },
            t._l(t.total, function (i, e) {
              return s("div", {
                key: e,
                class: [
                  "ec-product-covers-indicator__item",
                  { "ec-product-covers-indicator__current": e === t.current },
                ],
                on: {
                  click: function (s) {
                    return t.change(e);
                  },
                },
              });
            }),
            0
          );
        },
        h = [],
        d = {
          props: {
            total: { type: Number, default: 0 },
            current: { type: Number, default: 0 },
          },
          methods: {
            change(t) {
              this.$emit("change", t);
            },
          },
        },
        u = d,
        p = (i("7fef"), i("0c7c")),
        g = Object(p["a"])(u, l, h, !1, null, null, null),
        m = g.exports,
        f = {
          components: {
            Indicator: m,
            Swipe: r["a"],
            SwipeItem: c["a"],
            VanImage: n["a"],
          },
          props: {
            medias: { type: Array, required: !0 },
            mode: { type: String, default: "contain" },
          },
          data() {
            return { current: 0 };
          },
          computed: {
            _medias() {
              return this.medias.map((t) =>
                "object" === typeof t ? t : { url: t, type: "image" }
              );
            },
          },
          methods: {
            onChangeCurrent(t) {
              this.current = t;
            },
            swipeTo(t) {
              this.$refs.swipe.swipeTo(t);
            },
            viewImage(t) {
              const { _medias: s } = this,
                i = s.map((t) => t.url);
              Object(o["a"])({ images: i, startPosition: t, maxZoom: 5 });
            },
          },
        },
        v = f,
        _ = (i("cde2"), Object(p["a"])(v, e, a, !1, null, null, null));
      s["a"] = _.exports;
    },
    "7fef": function (t, s, i) {
      "use strict";
      i("c676");
    },
    "9ff5": function (t, s, i) {
      "use strict";
      i.r(s);
      i("13d5");
      var e = function () {
          var t = this,
            s = t._self._c;
          return s("div", { staticClass: "cast-selector" }, [
            this.config.bgm
              ? s("div", { staticClass: "bgm" }, [
                  this.isPlay
                    ? s("img", {
                        staticClass: "playing",
                        attrs: {
                          src: "https://cdn.qiandaoapp.com/interior/images/ffab23be642697320e125ce4fe9e439b.png",
                        },
                        on: { click: this.stop },
                      })
                    : s("img", {
                        attrs: {
                          src: "https://cdn.qiandaoapp.com/interior/images/f9070012da2cd87575be7773358b40d4.png",
                        },
                        on: { click: this.play },
                      }),
                ])
              : t._e(),
            this.config.bgm
              ? s("audio", {
                  ref: "audio",
                  attrs: {
                    controls: "controls",
                    hidden: "",
                    src: this.config.bgm,
                  },
                })
              : t._e(),
            s(
              "div",
              {
                staticClass: "bg",
                style: { backgroundColor: this.coverColor },
              },
              [
                this.config.bottomTip
                  ? s("div", { staticClass: "tip" }, [
                      t._v(" " + t._s(this.config.bottomTip) + " "),
                    ])
                  : t._e(),
                this.config.qrcodeImageUrl
                  ? s("img", {
                      staticClass: "qrcode-img",
                      attrs: {
                        src: this.config.qrcodeImageUrl + "!lfit_w240_png",
                      },
                    })
                  : t._e(),
                s("img", {
                  staticClass: "bg-img",
                  attrs: { src: this.config.coverImageUrl + "!lfit_w540_png" },
                }),
                s("div", {
                  staticClass: "mask",
                  style: {
                    background:
                      "linear-gradient(0deg, " +
                      this.coverColor +
                      ", transparent)",
                  },
                }),
                this.num > 10
                  ? [t._m(0)]
                  : [
                      this.part <= this.questionCount
                        ? s("div", { staticClass: "content" }, [
                            s("div", { staticClass: "title" }, [
                              t._v(t._s(this.config.title)),
                            ]),
                            s("div", { staticClass: "count" }, [
                              t._v(
                                " 共 " +
                                  t._s(this.part) +
                                  " / " +
                                  t._s(this.questionCount) +
                                  " 题 "
                              ),
                            ]),
                            s("div", { staticClass: "progress" }, [
                              s("div", {
                                staticClass: "bar",
                                style: {
                                  width:
                                    (this.part / this.questionCount) * 100 +
                                    "%",
                                },
                              }),
                            ]),
                            this.num > 0 && t.isWxMp
                              ? s(
                                  "div",
                                  {
                                    staticClass: "body download-app",
                                    staticStyle: {
                                      "text-align": "center",
                                      padding: "150px 0",
                                      "font-size": "16px",
                                    },
                                  },
                                  [
                                    s("img", {
                                      attrs: {
                                        src: "https://cdn.qiandaoapp.com/interior/images/db3bab2661cf7414eb414901543e10b5.png",
                                      },
                                    }),
                                    s(
                                      "div",
                                      { staticClass: "download-title" },
                                      [
                                        t._v(
                                          " 小程序每天可进行 1 次测试，前往千岛 App 可继续进行测试 "
                                        ),
                                      ]
                                    ),
                                    s(
                                      "div",
                                      {
                                        staticClass: "download-btn",
                                        on: { click: t.downloadJump },
                                      },
                                      [t._v("下载千岛App")]
                                    ),
                                  ]
                                )
                              : 0 === this.part
                              ? s("div", { staticClass: "body join-island" }, [
                                  s("div", { staticClass: "join-title" }, [
                                    t._v("加入岛即可参与测试"),
                                  ]),
                                  s("img", {
                                    attrs: { src: this.islandInfo.image },
                                  }),
                                  s("div", { staticClass: "island-name" }, [
                                    t._v(t._s(this.islandInfo.name)),
                                  ]),
                                  s(
                                    "div",
                                    { staticClass: "island-join-count" },
                                    [
                                      t._v(
                                        " " +
                                          t._s(this.islandInfo.joinCount) +
                                          "人加入 "
                                      ),
                                    ]
                                  ),
                                  s(
                                    "div",
                                    {
                                      staticClass: "join-island-btn",
                                      on: { click: t.joinIsland },
                                    },
                                    [t._v("马上加入")]
                                  ),
                                ])
                              : this.part > 0
                              ? s(
                                  "div",
                                  {
                                    staticClass: "body",
                                    style: this.config.bottomTip
                                      ? "max-height: calc(100% - 152px)"
                                      : "max-height: calc(100% - 110px)",
                                  },
                                  [
                                    s("div", { staticClass: "question" }, [
                                      this.finalQuestions[this.part - 1]
                                        .headerImageUrl
                                        ? s(
                                            "div",
                                            {
                                              staticClass:
                                                "question-header-img",
                                            },
                                            [
                                              s("ProductCovers", {
                                                attrs: {
                                                  medias: [
                                                    this.finalQuestions[
                                                      this.part - 1
                                                    ].headerImageUrl,
                                                  ],
                                                  mode: "cover",
                                                },
                                              }),
                                            ],
                                            1
                                          )
                                        : t._e(),
                                      s(
                                        "div",
                                        { staticClass: "question-type" },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                this.config.questions[
                                                  this.part - 1
                                                ].type
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      s(
                                        "div",
                                        { staticClass: "question-title" },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                this.finalQuestions[
                                                  this.part - 1
                                                ].title
                                              ) +
                                              " "
                                          ),
                                        ]
                                      ),
                                      this.finalQuestions[this.part - 1].desc
                                        ? s(
                                            "div",
                                            { staticClass: "question-desc" },
                                            [
                                              t._v(
                                                " " +
                                                  t._s(
                                                    this.finalQuestions[
                                                      this.part - 1
                                                    ].desc
                                                  ) +
                                                  " "
                                              ),
                                            ]
                                          )
                                        : t._e(),
                                      this.finalQuestions[this.part - 1]
                                        .isMultiple
                                        ? s(
                                            "div",
                                            { staticClass: "option-group" },
                                            [
                                              s(
                                                "div",
                                                [
                                                  t._v(" 本题为多选 "),
                                                  this.finalQuestions[
                                                    this.part - 1
                                                  ].multipleMaxCount
                                                    ? [
                                                        t._v(
                                                          " ，最多选 " +
                                                            t._s(
                                                              this
                                                                .finalQuestions[
                                                                this.part - 1
                                                              ].multipleMaxCount
                                                            ) +
                                                            " 项 "
                                                        ),
                                                      ]
                                                    : t._e(),
                                                ],
                                                2
                                              ),
                                              s(
                                                "div",
                                                { staticClass: "option-group" },
                                                [
                                                  this.finalQuestions[
                                                    this.part - 1
                                                  ].options[0].image
                                                    ? s(
                                                        "span",
                                                        {
                                                          staticStyle: {
                                                            display: "block",
                                                            "text-align":
                                                              "right",
                                                            margin:
                                                              "-20px 0 20px",
                                                            color: "#aaa",
                                                          },
                                                          on: {
                                                            click: function (
                                                              s
                                                            ) {
                                                              t.isSingleGrid =
                                                                !t.isSingleGrid;
                                                            },
                                                          },
                                                        },
                                                        [
                                                          t._v(" ⇄ "),
                                                          t.isSingleGrid
                                                            ? [t._v("宫格视图")]
                                                            : [
                                                                t._v(
                                                                  "列表视图"
                                                                ),
                                                              ],
                                                        ],
                                                        2
                                                      )
                                                    : t._e(),
                                                  t._l(
                                                    this.finalQuestions[
                                                      this.part - 1
                                                    ].options,
                                                    function (i, e) {
                                                      return [
                                                        i.text
                                                          ? s(
                                                              "a",
                                                              {
                                                                key: e + t.part,
                                                                class: [
                                                                  "option-text",
                                                                  {
                                                                    choose:
                                                                      i.choose,
                                                                  },
                                                                ],
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      s
                                                                    ) {
                                                                      return t.chooseMultipleOption(
                                                                        e
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                t._v(
                                                                  " " +
                                                                    t._s(
                                                                      i.text
                                                                    ) +
                                                                    " "
                                                                ),
                                                              ]
                                                            )
                                                          : i.image
                                                          ? s(
                                                              "div",
                                                              {
                                                                key: e + t.part,
                                                                class: [
                                                                  "option-image",
                                                                  {
                                                                    disabled:
                                                                      t.loading,
                                                                  },
                                                                  {
                                                                    "single-grid":
                                                                      t.isSingleGrid,
                                                                  },
                                                                ],
                                                                on: {
                                                                  click:
                                                                    function (
                                                                      s
                                                                    ) {
                                                                      return t.chooseMultipleOption(
                                                                        e
                                                                      );
                                                                    },
                                                                },
                                                              },
                                                              [
                                                                s("img", {
                                                                  attrs: {
                                                                    src:
                                                                      i.image +
                                                                      "!lfit_w400_png",
                                                                  },
                                                                }),
                                                              ]
                                                            )
                                                          : t._e(),
                                                      ];
                                                    }
                                                  ),
                                                ],
                                                2
                                              ),
                                              this.finalQuestions[
                                                this.part - 1
                                              ].options.filter((t) => t.choose)
                                                .length > 0
                                                ? s(
                                                    "div",
                                                    {
                                                      staticClass: "main-btn",
                                                      on: {
                                                        click: t.multipleSubmit,
                                                      },
                                                    },
                                                    [t._v(" 提交 ")]
                                                  )
                                                : t._e(),
                                            ]
                                          )
                                        : s(
                                            "div",
                                            { staticClass: "option-group" },
                                            [
                                              this.finalQuestions[this.part - 1]
                                                .options[0].image
                                                ? s(
                                                    "span",
                                                    {
                                                      staticStyle: {
                                                        display: "block",
                                                        "text-align": "right",
                                                        margin: "-20px 0 20px",
                                                        color: "#aaa",
                                                      },
                                                      on: {
                                                        click: function (s) {
                                                          t.isSingleGrid =
                                                            !t.isSingleGrid;
                                                        },
                                                      },
                                                    },
                                                    [
                                                      t._v(" ⇄ "),
                                                      t.isSingleGrid
                                                        ? [t._v("宫格视图")]
                                                        : [t._v("列表视图")],
                                                    ],
                                                    2
                                                  )
                                                : t._e(),
                                              t._l(
                                                this.finalQuestions[
                                                  this.part - 1
                                                ].options,
                                                function (i, e) {
                                                  return [
                                                    i.text
                                                      ? s(
                                                          "a",
                                                          {
                                                            key: e + t.part,
                                                            class: [
                                                              "option-text",
                                                              {
                                                                disabled:
                                                                  t.loading,
                                                              },
                                                            ],
                                                            on: {
                                                              click: function (
                                                                s
                                                              ) {
                                                                return t.chooseOption(
                                                                  i,
                                                                  s,
                                                                  e
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              " " +
                                                                t._s(i.text) +
                                                                " "
                                                            ),
                                                          ]
                                                        )
                                                      : i.image
                                                      ? s(
                                                          "div",
                                                          {
                                                            key: e + t.part,
                                                            class: [
                                                              "option-image",
                                                              {
                                                                disabled:
                                                                  t.loading,
                                                              },
                                                              {
                                                                "single-grid":
                                                                  t.isSingleGrid,
                                                              },
                                                            ],
                                                            on: {
                                                              click: function (
                                                                s
                                                              ) {
                                                                return t.chooseOption(
                                                                  i,
                                                                  s,
                                                                  e
                                                                );
                                                              },
                                                            },
                                                          },
                                                          [
                                                            s("img", {
                                                              attrs: {
                                                                src:
                                                                  i.image +
                                                                  "!lfit_w400_png",
                                                              },
                                                            }),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ];
                                                }
                                              ),
                                            ],
                                            2
                                          ),
                                    ]),
                                  ]
                                )
                              : t._e(),
                          ])
                        : s(
                            "div",
                            {
                              staticClass: "final",
                              style: { backgroundColor: this.coverColor },
                            },
                            [
                              s(
                                "div",
                                { staticClass: "user" },
                                [
                                  "{}" !== JSON.stringify(this.me)
                                    ? [
                                        s("img", {
                                          staticClass: "avatar",
                                          attrs: { src: this.me.avatar },
                                        }),
                                        s("span", { staticClass: "nickname" }, [
                                          t._v(t._s(this.me.nickName)),
                                        ]),
                                      ]
                                    : t._e(),
                                  s("div", { staticClass: "subtitle" }, [
                                    t._v(" 在 "),
                                    s(
                                      "span",
                                      {
                                        staticStyle: { "font-weight": "bold" },
                                      },
                                      [t._v(t._s(this.config.title))]
                                    ),
                                    t._v(" 中的结果 "),
                                  ]),
                                  this.config.resultDesc
                                    ? s(
                                        "div",
                                        {
                                          staticStyle: {
                                            "margin-top": "10px",
                                            opacity: "0.7",
                                          },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(this.config.resultDesc) +
                                              " "
                                          ),
                                        ]
                                      )
                                    : t._e(),
                                ],
                                2
                              ),
                              this.config.lessThanOrEqualTo &&
                              this.config.cast[0].score <=
                                this.config.lessThanOrEqualTo.score
                                ? s("div", { staticClass: "score" }, [
                                    this.config.lessThanOrEqualTo.coverImageUrl
                                      ? s(
                                          "div",
                                          { staticClass: "cast-cover" },
                                          [
                                            s("img", {
                                              attrs: {
                                                src:
                                                  this.config.lessThanOrEqualTo
                                                    .coverImageUrl +
                                                  "!lfit_w1080_png",
                                              },
                                            }),
                                          ]
                                        )
                                      : t._e(),
                                    this.config.lessThanOrEqualTo.name
                                      ? s("div", { staticClass: "name" }, [
                                          t._v(
                                            " " +
                                              t._s(
                                                this.config.lessThanOrEqualTo
                                                  .name
                                              ) +
                                              " "
                                          ),
                                        ])
                                      : t._e(),
                                    this.config.lessThanOrEqualTo.desc
                                      ? s("div", { staticClass: "desc" }, [
                                          t._v(
                                            " " +
                                              t._s(
                                                this.config.lessThanOrEqualTo
                                                  .desc
                                              ) +
                                              " "
                                          ),
                                        ])
                                      : t._e(),
                                  ])
                                : s(
                                    "div",
                                    { staticClass: "score" },
                                    [
                                      this.config.isShowPercent
                                        ? t._l(
                                            this.config.cast,
                                            function (i, e) {
                                              return s("div", { key: e }, [
                                                i.name
                                                  ? s(
                                                      "div",
                                                      {
                                                        staticClass: "subtitle",
                                                      },
                                                      [
                                                        t._v(
                                                          " " +
                                                            t._s(i.name) +
                                                            " 的百分比是 "
                                                        ),
                                                        t.config.cast.reduce(
                                                          (t, s) => t + s.score,
                                                          0
                                                        ) > 0
                                                          ? [
                                                              t._v(
                                                                " " +
                                                                  t._s(
                                                                    (
                                                                      (i.score /
                                                                        t.config.cast.reduce(
                                                                          (
                                                                            t,
                                                                            s
                                                                          ) =>
                                                                            t +
                                                                            s.score,
                                                                          0
                                                                        )) *
                                                                      100
                                                                    ).toFixed(1)
                                                                  ) +
                                                                  "% "
                                                              ),
                                                            ]
                                                          : [
                                                              t._v(
                                                                t._s(i.score) +
                                                                  "%"
                                                              ),
                                                            ],
                                                      ],
                                                      2
                                                    )
                                                  : t._e(),
                                                i.desc
                                                  ? s(
                                                      "div",
                                                      { staticClass: "desc" },
                                                      [t._v(t._s(i.desc))]
                                                    )
                                                  : t._e(),
                                                i.coverImageUrl
                                                  ? s(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "cast-cover",
                                                      },
                                                      [
                                                        s("img", {
                                                          attrs: {
                                                            src:
                                                              i.coverImageUrl +
                                                              "!lfit_w1080_png",
                                                          },
                                                        }),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]);
                                            }
                                          )
                                        : [
                                            this.config.cast[0].coverImageUrl
                                              ? s(
                                                  "div",
                                                  { staticClass: "cast-cover" },
                                                  [
                                                    s("img", {
                                                      attrs: {
                                                        src:
                                                          this.config.cast[0]
                                                            .coverImageUrl +
                                                          "!lfit_w1080_png",
                                                      },
                                                    }),
                                                  ]
                                                )
                                              : t._e(),
                                            this.config.cast[0].name
                                              ? s(
                                                  "div",
                                                  { staticClass: "name" },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          this.config.cast[0]
                                                            .name
                                                        ) +
                                                        " "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                            this.config.cast[0].desc
                                              ? s(
                                                  "div",
                                                  { staticClass: "desc" },
                                                  [
                                                    t._v(
                                                      " " +
                                                        t._s(
                                                          this.config.cast[0]
                                                            .desc
                                                        ) +
                                                        " "
                                                    ),
                                                  ]
                                                )
                                              : t._e(),
                                          ],
                                    ],
                                    2
                                  ),
                              this.result &&
                              "{}" !== JSON.stringify(this.result)
                                ? s("div", { staticClass: "result" }, [
                                    s("div", { staticClass: "name" }, [
                                      t._v(t._s(this.result.name)),
                                    ]),
                                    s("div", { staticClass: "desc" }, [
                                      t._v(t._s(this.result.desc)),
                                    ]),
                                  ])
                                : t._e(),
                              this.config.tip &&
                              "{}" !== JSON.stringify(this.config.tip)
                                ? s("div", { staticClass: "tip-wrap" }, [
                                    s(
                                      "div",
                                      {
                                        staticClass: "tip-btn",
                                        on: { click: t.jump },
                                      },
                                      [
                                        t._v(
                                          " " + t._s(this.config.tip.btn) + " "
                                        ),
                                      ]
                                    ),
                                    t._v(
                                      " " + t._s(this.config.tip.text) + " "
                                    ),
                                  ])
                                : t._e(),
                              this.config.badge &&
                              "{}" !== JSON.stringify(this.config.badge)
                                ? s("div", { staticClass: "badge" }, [
                                    s("img", {
                                      attrs: {
                                        src:
                                          this.config.badge.imageUrl +
                                          "!lfit_w240_png",
                                      },
                                    }),
                                    s("div", { staticClass: "intro" }, [
                                      t._v(t._s(this.config.badge.intro)),
                                    ]),
                                  ])
                                : t._e(),
                              this.shelfList.length > 0
                                ? s(
                                    "div",
                                    {
                                      staticClass: "shelf-list",
                                      on: { click: t.dramaJump },
                                    },
                                    [
                                      s("div", { staticClass: "title" }, [
                                        t._v(" 可玩的店铺 "),
                                        s("span", [
                                          t._v(
                                            "查看全部(" +
                                              t._s(this.shelfCount) +
                                              ") ›"
                                          ),
                                        ]),
                                      ]),
                                      s("div", { staticClass: "shelf-wrap" }, [
                                        s(
                                          "div",
                                          { staticClass: "shelf-group" },
                                          t._l(this.shelfList, function (i, e) {
                                            return s(
                                              "div",
                                              { key: e, staticClass: "shelf" },
                                              [
                                                s("img", {
                                                  attrs: { src: i.avatar },
                                                }),
                                                s(
                                                  "div",
                                                  { staticClass: "name" },
                                                  [t._v(t._s(i.nickName))]
                                                ),
                                              ]
                                            );
                                          }),
                                          0
                                        ),
                                      ]),
                                    ]
                                  )
                                : t._e(),
                            ]
                          ),
                    ],
              ],
              2
            ),
          ]);
        },
        a = [
          function () {
            var t = this,
              s = t._self._c;
            return s("div", { staticClass: "content" }, [
              s(
                "div",
                {
                  staticClass: "body",
                  staticStyle: {
                    "text-align": "center",
                    padding: "150px 0",
                    "font-size": "16px",
                  },
                },
                [t._v(" 😅 今日测试次数过多，请明天再试 ")]
              ),
            ]);
          },
        ],
        o = (i("14d9"), i("2f62")),
        n = i("ed08"),
        c = i("f61f"),
        r = i("bc3a"),
        l = i.n(r),
        h = i("0bfa"),
        d = i("cf63"),
        u = i("cb35"),
        p = i("0ef7"),
        g = {
          getShelfItemList(t) {
            return p["h"].get("/larp/shelves/shelfItemList", t);
          },
        },
        m = i("3cc9"),
        f = i("6d6a"),
        v = {
          components: { ProductCovers: f["a"] },
          data() {
            return {
              id: null,
              config: {},
              loading: !1,
              questionCount: 1,
              finalQuestions: [],
              part: 1,
              coverColor: "",
              result: {},
              isPlay: !1,
              num: 0,
              date: "",
              isSingleGrid: !1,
              islandInfo: {},
              shelfList: [],
              shelfCount: 0,
            };
          },
          computed: {
            ...Object(o["mapState"])("user", ["me"]),
            isWxMp() {
              return Object(n["h"])();
            },
          },
          async mounted() {
            var t;
            "{}" === JSON.stringify(this.me) && this.logIn();
            const s =
              null === (t = this.$route) || void 0 === t ? void 0 : t.query;
            s.id
              ? (this.getCastDetail(s.id), (this.id = s.id))
              : this.$toast.show({ title: "题库出错了" });
          },
          created() {
            const t = new Date().toLocaleDateString();
            localStorage.castSelectDate && localStorage.castSelectDate === t
              ? ((this.date = localStorage.castSelectDate),
                (this.num = Number(localStorage.castSelectNum)))
              : ((this.date = t),
                (this.num = 0),
                (localStorage.castSelectDate = t),
                (localStorage.castSelectNum = "0"));
          },
          methods: {
            async getShelfItemList() {
              try {
                const t = await g.getShelfItemList({
                  limit: 10,
                  offset: 0,
                  spuId: this.config.dramaSpuId,
                  regionCode: this.me.regionIds[0],
                });
                (this.shelfList = t.data.rows),
                  (this.shelfCount = t.data.count);
              } catch (t) {
                console.error(t);
              }
            },
            play() {
              this.$refs.audio.play(), (this.isPlay = !0);
            },
            stop() {
              this.$refs.audio.pause(), (this.isPlay = !1);
            },
            logIn() {
              const t = "/modules/pages/common-login/index";
              (Object(n["h"])() || Object(n["d"])()) &&
                this.navigateTo({ url: t });
            },
            async getCastDetail(t) {
              const s = await Object(c["a"])("cast-selector", t);
              (this.config = s),
                (this.questionCount = s.questions.length),
                this.getCoverColor(s.coverImageUrl);
              for (var i = 0; i < s.questions.length; i++) {
                var e = Math.floor(
                  Math.random() * s.questions[i].random.length
                );
                if (s.questions[i].random[e].isMultiple)
                  for (
                    var a = 0;
                    a < s.questions[i].random[e].options.length;
                    a++
                  )
                    s.questions[i].random[e].options[a].choose = !1;
                this.finalQuestions.push(s.questions[i].random[e]);
              }
              for (var o = 0; o < this.config.cast.length; o++)
                this.config.cast[o].score = 0;
              try {
                var n = 300231;
                this.config.shouldJoinIslandId &&
                  (n = this.config.shouldJoinIslandId);
                const t = await u["a"].detail(n);
                (this.islandInfo = t.data),
                  this.islandInfo.joined || (this.part = 0);
              } catch (r) {
                console.error(r);
              }
              setTimeout(() => {
                wx.miniProgram.postMessage({
                  data: {
                    shareOptions: {
                      title:
                        "" +
                        (this.config.shareTitle
                          ? "" + this.config.shareTitle
                          : "" + this.config.title),
                      imageUrl:
                        "" +
                        (this.config.shareImageUrl
                          ? this.config.shareImageUrl + "!lfit_w1080_jpg"
                          : this.config.coverImageUrl + "!lfit_w1080_jpg"),
                      path:
                        "/modules/pages/web-view/index?url=" +
                        encodeURIComponent(
                          `${d["a"].web}/plugin/cast-selector?id=${this.id}`
                        ),
                    },
                  },
                });
              }, 1e3);
            },
            async getCoverColor(t) {
              // const { data: s } = await l.a.get(t + "!color");
              // this.coverColor = "#" + s.RGB.slice(2, 8);
            },
            async joinIsland() {
              try {
                var t = 300231;
                this.config.shouldJoinIslandId &&
                  (t = this.config.shouldJoinIslandId);
                await u["a"].join(t);
                this.$toast.show({ title: "加入岛成功" }), (this.part = 1);
              } catch (s) {
                console.error(s);
              }
            },
            chooseOption(t, s, i) {
              if (
                ((this.loading = !0),
                this.config.bgm && 1 === this.part && this.play(),
                t.cast)
              )
                for (var e = 0; e < t.cast.length; e++)
                  this.config.cast.filter(
                    (s) => s.name === t.cast[e].name
                  )[0].score += Number(t.cast[e].score);
              setTimeout(() => {
                s.target.classList.add("click");
              }, 100),
                setTimeout(() => {
                  (this.part += 1),
                    (document.getElementsByClassName("body")[0].scrollTop = 0),
                    s.target.classList.remove("click"),
                    this.part > this.questionCount &&
                      (this.config.cast = this.config.cast.sort(
                        (t, s) => s.score - t.score
                      )),
                    this.part > this.questionCount && this.submit();
                }, 1e3),
                (this.loading = !1);
            },
            chooseMultipleOption(t) {
              this.config.bgm && 1 === this.part && this.play(),
                this.finalQuestions[this.part - 1].multipleMaxCount &&
                this.finalQuestions[this.part - 1].options.filter(
                  (t) => t.choose
                ).length ===
                  this.finalQuestions[this.part - 1].multipleMaxCount &&
                !this.finalQuestions[this.part - 1].options[t].choose
                  ? this.$toast.show({
                      title:
                        "本题最多选" +
                        this.finalQuestions[this.part - 1].multipleMaxCount +
                        "个选项",
                    })
                  : ((this.finalQuestions[this.part - 1].options[t].choose =
                      !this.finalQuestions[this.part - 1].options[t].choose),
                    this.finalQuestions[this.part - 1].options.splice(0, 0));
            },
            multipleSubmit() {
              for (
                var t = this.finalQuestions[this.part - 1].options
                    .filter((t) => t.choose)
                    .map((t) => t.cast),
                  s = 0;
                s < t.length;
                s++
              )
                for (var i = t[s], e = 0; e < i.length; e++)
                  this.config.cast.filter(
                    (t) => t.name === i[e].name
                  )[0].score += Number(i[e].score);
              (this.part += 1),
                (document.getElementsByClassName("body")[0].scrollTop = 0),
                this.part > this.questionCount &&
                  (this.config.cast = this.config.cast.sort(
                    (t, s) => s.score - t.score
                  )),
                this.part > this.questionCount && this.submit();
            },
            async submit() {
              if (
                (this.config.dramaSpuId &&
                  this.me.regionIds &&
                  this.me.regionIds.length > 0 &&
                  this.getShelfItemList(),
                (this.num = this.num + 1),
                (localStorage.castSelectNum = this.num),
                "{}" !== JSON.stringify(this.me))
              ) {
                const s =
                  '[{"title":"角色测试结果收集","form":[{"label":"角色模版id","component":"input","slotNextLine":true,"name":"template","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                  this.id +
                  '"},{"label":"得分","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                  this.config.cast[0].name +
                  '"}]}]';
                try {
                  await h["a"].submit({
                    content: s,
                    templateId: "571376099435580683",
                  });
                } catch (t) {
                  console.error(t);
                }
              }
            },
            jump() {
              this.config.tip.miniprogramAppId
                ? Object(n["d"])()
                  ? m["a"].navigateToMiniProgram({
                      appId: this.config.tip.miniprogramAppId,
                      path: this.config.tip.miniprogramPath,
                    })
                  : this.navigateTo({ url: this.config.tip.miniprogramPath })
                : (Object(n["d"])() || Object(n["h"])()) &&
                  this.navigateTo({ url: this.config.tip.path });
            },
            downloadJump() {
              const t =
                "/modules/pages/web-view/index?url=https://config-cdn.qiandaoapp.com/docs/appdownload.html";
              (Object(n["d"])() || Object(n["h"])()) &&
                this.navigateTo({ url: t });
            },
            dramaJump() {
              Object(n["h"])()
                ? this.navigateTo({
                    url:
                      "/modules/pages-lbs/shop-list/index?spuId=" +
                      this.config.dramaSpuId,
                  })
                : Object(n["d"])() &&
                  this.navigateTo({
                    url:
                      "/pages-market/spu/index?defaultTab=shop&spuId=" +
                      this.config.dramaSpuId,
                  });
            },
          },
        },
        _ = v,
        C = (i("d7ce"), i("0c7c")),
        b = Object(C["a"])(_, e, a, !1, null, null, null);
      s["default"] = b.exports;
    },
    c676: function (t, s, i) {},
    cb35: function (t, s, i) {
      "use strict";
      var e = i("0ef7");
      s["a"] = {
        detail(t) {
          return e["h"].get("/treasure/island/detail?id=" + t);
        },
        join(t) {
          return e["h"].post("/treasure/island/join", { id: t });
        },
      };
    },
    cde2: function (t, s, i) {
      "use strict";
      i("536c");
    },
    d7ce: function (t, s, i) {
      "use strict";
      i("5043");
    },
  },
]);
