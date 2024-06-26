(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-ba4f008e"],
  {
    "0bfa": function (t, i, s) {
      "use strict";
      var o = s("0ef7");
      i["a"] = {
        submit(t) {
          return o["j"].post("/echo-form/form/post", t);
        },
      };
    },
    "11fa": function (t, i, s) {
      "use strict";
      s("5c97");
    },
    "536c": function (t, i, s) {},
    "5c97": function (t, i, s) {},
    6642: function (t, i, s) {
      "use strict";
      s.r(i);
      var o = function () {
          var t = this,
            i = t._self._c;
          return i("div", { staticClass: "quiz" }, [
            this.config.bgm
              ? i("div", { staticClass: "bgm" }, [
                  this.isPlay
                    ? i("img", {
                        staticClass: "playing",
                        attrs: {
                          src: "https://cdn.qiandaoapp.com/interior/images/ffab23be642697320e125ce4fe9e439b.png",
                        },
                        on: { click: this.stop },
                      })
                    : i("img", {
                        attrs: {
                          src: "https://cdn.qiandaoapp.com/interior/images/f9070012da2cd87575be7773358b40d4.png",
                        },
                        on: { click: this.play },
                      }),
                ])
              : t._e(),
            this.config.bgm
              ? i("audio", {
                  ref: "audio",
                  attrs: {
                    controls: "controls",
                    hidden: "",
                    src: this.config.bgm,
                  },
                })
              : t._e(),
            i(
              "div",
              {
                staticClass: "bg",
                style: { backgroundColor: this.coverColor },
              },
              [
                this.config.bottomTip
                  ? i("div", { staticClass: "tip" }, [
                      t._v(" " + t._s(this.config.bottomTip) + " "),
                    ])
                  : t._e(),
                this.config.qrcodeImageUrl
                  ? i("img", {
                      staticClass: "qrcode-img",
                      attrs: {
                        src: this.config.qrcodeImageUrl + "!lfit_w240_png",
                      },
                    })
                  : t._e(),
                i("img", {
                  staticClass: "bg-img",
                  attrs: { src: this.config.coverImageUrl + "!lfit_w540_png" },
                }),
                i("div", {
                  staticClass: "mask",
                  style: {
                    background:
                      "linear-gradient(0deg, " +
                      this.coverColor +
                      ", transparent)",
                  },
                }),
                this.part <= this.questionCount
                  ? i("div", { staticClass: "content" }, [
                      i("div", { staticClass: "title" }, [
                        t._v(t._s(this.config.title)),
                      ]),
                      i("div", { staticClass: "count" }, [
                        t._v(
                          " 共 " +
                            t._s(this.part) +
                            " / " +
                            t._s(this.questionCount) +
                            " 题 "
                        ),
                      ]),
                      i("div", { staticClass: "progress" }, [
                        i("div", {
                          staticClass: "bar",
                          style: {
                            width: (this.part / this.questionCount) * 100 + "%",
                          },
                        }),
                      ]),
                      0 === this.part
                        ? i("div", { staticClass: "body join-island" }, [
                            i("div", { staticClass: "join-title" }, [
                              t._v("加入岛即可参与答题"),
                            ]),
                            i("img", { attrs: { src: this.islandInfo.image } }),
                            i("div", { staticClass: "island-name" }, [
                              t._v(t._s(this.islandInfo.name)),
                            ]),
                            i("div", { staticClass: "island-join-count" }, [
                              t._v(
                                " " +
                                  t._s(this.islandInfo.joinCount) +
                                  "人加入 "
                              ),
                            ]),
                            i(
                              "div",
                              {
                                staticClass: "join-island-btn",
                                on: { click: t.joinIsland },
                              },
                              [t._v("马上加入")]
                            ),
                          ])
                        : t._e(),
                      this.part > 0
                        ? i(
                            "div",
                            {
                              staticClass: "body",
                              style: this.config.bottomTip
                                ? "max-height: calc(100% - 152px)"
                                : "max-height: calc(100% - 110px)",
                            },
                            [
                              i("div", { staticClass: "question" }, [
                                this.finalQuestions[this.part - 1]
                                  .headerImageUrl
                                  ? i(
                                      "div",
                                      { staticClass: "question-header-img" },
                                      [
                                        i("ProductCovers", {
                                          attrs: {
                                            medias: [
                                              this.finalQuestions[this.part - 1]
                                                .headerImageUrl,
                                            ],
                                            mode: "cover",
                                          },
                                        }),
                                      ],
                                      1
                                    )
                                  : t._e(),
                                i("div", { staticClass: "question-type" }, [
                                  t._v(
                                    " " +
                                      t._s(
                                        this.config.questions[this.part - 1]
                                          .type
                                      ) +
                                      " "
                                  ),
                                ]),
                                i("div", { staticClass: "question-title" }, [
                                  t._v(
                                    " " +
                                      t._s(
                                        this.finalQuestions[this.part - 1].title
                                      ) +
                                      " "
                                  ),
                                ]),
                                this.finalQuestions[this.part - 1].desc
                                  ? i("div", { staticClass: "question-desc" }, [
                                      t._v(
                                        " " +
                                          t._s(
                                            this.finalQuestions[this.part - 1]
                                              .desc
                                          ) +
                                          " "
                                      ),
                                    ])
                                  : t._e(),
                                this.finalQuestions[this.part - 1].audio
                                  ? i(
                                      "div",
                                      { staticClass: "question-audio" },
                                      [
                                        i(
                                          "div",
                                          {
                                            staticClass: "audio-btn",
                                            on: {
                                              click: function (i) {
                                                return t.playQuestionAudio(
                                                  "a" + t.part
                                                );
                                              },
                                            },
                                          },
                                          [t._v(" ▶︎ 播放音频 ")]
                                        ),
                                        i("audio", {
                                          ref: "a" + t.part,
                                          attrs: {
                                            controls: "controls",
                                            hidden: "",
                                            src: this.finalQuestions[
                                              this.part - 1
                                            ].audio,
                                          },
                                        }),
                                      ]
                                    )
                                  : t._e(),
                                this.finalQuestions[this.part - 1].video
                                  ? i(
                                      "div",
                                      { staticClass: "question-video" },
                                      [
                                        i("video", {
                                          attrs: {
                                            src: this.finalQuestions[
                                              this.part - 1
                                            ].video,
                                            controls: "",
                                          },
                                        }),
                                      ]
                                    )
                                  : t._e(),
                                this.finalQuestions[this.part - 1].isMultiple
                                  ? i("div", { staticClass: "option-group" }, [
                                      i("div", [t._v("本题为多选")]),
                                      i(
                                        "div",
                                        { staticClass: "option-group" },
                                        [
                                          this.finalQuestions[this.part - 1]
                                            .options[0].image
                                            ? i(
                                                "span",
                                                {
                                                  staticStyle: {
                                                    display: "block",
                                                    "text-align": "right",
                                                    margin: "-20px 0 20px",
                                                    color: "#aaa",
                                                  },
                                                  on: {
                                                    click: function (i) {
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
                                            this.finalQuestions[this.part - 1]
                                              .options,
                                            function (s, o) {
                                              return [
                                                s.text
                                                  ? i(
                                                      "a",
                                                      {
                                                        key: o + t.part,
                                                        class: [
                                                          "option-text",
                                                          { choose: s.choose },
                                                        ],
                                                        on: {
                                                          click: function (i) {
                                                            return t.chooseMultipleOption(
                                                              o
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i("span", [
                                                          t._v(t._s(s.text)),
                                                        ]),
                                                      ]
                                                    )
                                                  : s.image
                                                  ? i(
                                                      "div",
                                                      {
                                                        key: o + t.part,
                                                        class: [
                                                          "option-image",
                                                          { choose: s.choose },
                                                          {
                                                            "single-grid":
                                                              t.isSingleGrid,
                                                          },
                                                        ],
                                                        on: {
                                                          click: function (i) {
                                                            return t.chooseMultipleOption(
                                                              o
                                                            );
                                                          },
                                                        },
                                                      },
                                                      [
                                                        i("img", {
                                                          attrs: {
                                                            src:
                                                              s.image +
                                                              "!lfit_w240_png",
                                                          },
                                                        }),
                                                      ]
                                                    )
                                                  : s.audio
                                                  ? i(
                                                      "div",
                                                      {
                                                        key: o + t.part,
                                                        staticClass:
                                                          "option-audio",
                                                      },
                                                      [
                                                        i("audio", {
                                                          attrs: {
                                                            controls:
                                                              "controls",
                                                            src: s.audio,
                                                          },
                                                        }),
                                                        i("a", {
                                                          key: o + t.part,
                                                          class: [
                                                            "option-text",
                                                            {
                                                              choose: s.choose,
                                                            },
                                                          ],
                                                          on: {
                                                            click: function (
                                                              i
                                                            ) {
                                                              return t.chooseMultipleOption(
                                                                o
                                                              );
                                                            },
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
                                      ].options.filter((t) => t.choose).length >
                                      0
                                        ? i(
                                            "div",
                                            {
                                              staticClass: "main-btn",
                                              on: { click: t.multipleSubmit },
                                            },
                                            [t._v(" 提交 ")]
                                          )
                                        : t._e(),
                                    ])
                                  : i(
                                      "div",
                                      { staticClass: "option-group" },
                                      [
                                        this.finalQuestions[this.part - 1]
                                          .options[0].image
                                          ? i(
                                              "span",
                                              {
                                                staticStyle: {
                                                  display: "block",
                                                  "text-align": "right",
                                                  margin: "-20px 0 20px",
                                                  color: "#aaa",
                                                },
                                                on: {
                                                  click: function (i) {
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
                                          this.finalQuestions[this.part - 1]
                                            .options,
                                          function (s, o) {
                                            return [
                                              s.text
                                                ? i(
                                                    "a",
                                                    {
                                                      key: o + t.part,
                                                      class: [
                                                        "option-text",
                                                        { disabled: t.loading },
                                                      ],
                                                      on: {
                                                        click: function (i) {
                                                          return t.chooseOption(
                                                            s,
                                                            i
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      i("span", [
                                                        t._v(t._s(s.text)),
                                                      ]),
                                                    ]
                                                  )
                                                : s.image
                                                ? i(
                                                    "div",
                                                    {
                                                      key: o + t.part,
                                                      class: [
                                                        "option-image",
                                                        { disabled: t.loading },
                                                        {
                                                          "single-grid":
                                                            t.isSingleGrid,
                                                        },
                                                      ],
                                                      on: {
                                                        click: function (i) {
                                                          return t.chooseOption(
                                                            s,
                                                            i
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      i("img", {
                                                        attrs: {
                                                          src:
                                                            s.image +
                                                            "!lfit_w240_png",
                                                        },
                                                      }),
                                                    ]
                                                  )
                                                : s.audio
                                                ? i(
                                                    "div",
                                                    {
                                                      key: o + t.part,
                                                      class: [
                                                        "option-audio",
                                                        { disabled: t.loading },
                                                      ],
                                                    },
                                                    [
                                                      i("audio", {
                                                        attrs: {
                                                          controls: "controls",
                                                          src: s.audio,
                                                        },
                                                      }),
                                                      i("a", {
                                                        key: o + t.part,
                                                        class: [
                                                          "option-text",
                                                          {
                                                            disabled: t.loading,
                                                          },
                                                        ],
                                                        on: {
                                                          click: function (i) {
                                                            return t.chooseOption(
                                                              s,
                                                              i
                                                            );
                                                          },
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
                  : i(
                      "div",
                      {
                        staticClass: "final",
                        style: { backgroundColor: this.coverColor },
                      },
                      [
                        i(
                          "div",
                          { staticClass: "user" },
                          [
                            "{}" === JSON.stringify(this.me) ||
                            this.config.isHideAvatar
                              ? t._e()
                              : [
                                  i("img", {
                                    staticClass: "avatar",
                                    attrs: { src: this.me.avatar },
                                  }),
                                  i("span", { staticClass: "nickname" }, [
                                    t._v(t._s(this.me.nickName)),
                                  ]),
                                ],
                            i("div", { staticClass: "subtitle" }, [
                              t._v(" 在 "),
                              i(
                                "span",
                                { staticStyle: { "font-weight": "bold" } },
                                [t._v("《" + t._s(this.config.title) + "》")]
                              ),
                              t._v(" 中的成绩 "),
                            ]),
                          ],
                          2
                        ),
                        i("div", { staticClass: "score" }, [
                          this.questionCount > this.bingoCount
                            ? i("div", { staticClass: "number" }, [
                                t._v(
                                  " " +
                                    t._s(
                                      Math.round(
                                        (this.bingoCount / this.questionCount) *
                                          100
                                      )
                                    ) +
                                    " "
                                ),
                              ])
                            : i("div", { staticClass: "number" }, [
                                t._v("100"),
                              ]),
                          i("div", { staticClass: "info" }, [
                            t._v(
                              " 题目 " +
                                t._s(this.questionCount) +
                                "，答错 " +
                                t._s(this.questionCount - this.bingoCount) +
                                " "
                            ),
                          ]),
                        ]),
                        this.result && "{}" !== JSON.stringify(this.result)
                          ? i("div", { staticClass: "result" }, [
                              i("div", { staticClass: "name" }, [
                                t._v(t._s(this.result.name)),
                              ]),
                              i("div", { staticClass: "desc" }, [
                                t._v(t._s(this.result.desc)),
                              ]),
                            ])
                          : t._e(),
                        !this.config.tip ||
                        "{}" === JSON.stringify(this.config.tip) ||
                        (this.config.tip.greaterThanOrEqualTo &&
                          Math.round(
                            (this.bingoCount / this.questionCount) * 100
                          ) < Number(this.config.tip.greaterThanOrEqualTo))
                          ? t._e()
                          : i("div", { staticClass: "tip-wrap" }, [
                              i(
                                "div",
                                {
                                  staticClass: "tip-btn",
                                  on: { click: t.jump },
                                },
                                [t._v(" " + t._s(this.config.tip.btn) + " ")]
                              ),
                              t._v(" " + t._s(this.config.tip.text) + " "),
                            ]),
                        this.config.badge &&
                        "{}" !== JSON.stringify(this.config.badge)
                          ? i("div", { staticClass: "badge" }, [
                              i("img", {
                                attrs: {
                                  src:
                                    this.config.badge.imageUrl +
                                    "!lfit_w240_png",
                                },
                              }),
                              i("div", { staticClass: "intro" }, [
                                t._v(t._s(this.config.badge.intro)),
                              ]),
                            ])
                          : t._e(),
                        i("div", { staticClass: "share" }, [
                          i("div", [t._v("分享页面，可重新再答一次")]),
                          i(
                            "div",
                            {
                              staticClass: "btn",
                              style: { color: this.coverColor },
                              on: { click: t.share },
                            },
                            [t._v(" 点此分享 ")]
                          ),
                        ]),
                      ]
                    ),
              ]
            ),
            t.showShareModal
              ? i(
                  "div",
                  {
                    staticClass: "modal",
                    on: {
                      click: function (i) {
                        t.showShareModal = !1;
                      },
                    },
                  },
                  [
                    i("div", { staticClass: "tip" }, [
                      t._v("点击右上角按钮进行分享"),
                    ]),
                  ]
                )
              : t._e(),
          ]);
        },
        e = [],
        n = (s("14d9"), s("2f62")),
        a = s("ed08"),
        r = s("f61f"),
        l = s("bc3a"),
        c = s.n(l),
        u = s("0bfa"),
        h = s("cf63"),
        d = s("3cc9"),
        g = s("cb35"),
        p = s("6d6a"),
        f = {
          components: { ProductCovers: p["a"] },
          data() {
            return {
              id: null,
              config: {},
              loading: !1,
              questionCount: 1,
              bingoCount: 0,
              finalQuestions: [],
              part: 1,
              coverColor: "",
              result: {},
              showShareModal: !1,
              isPlay: !1,
              isSingleGrid: !1,
              islandInfo: {},
            };
          },
          computed: { ...Object(n["mapState"])("user", ["me"]) },
          async mounted() {
            var t;
            "{}" === JSON.stringify(this.me) && this.logIn();
            const i =
              null === (t = this.$route) || void 0 === t ? void 0 : t.query;
            if (i.id) {
              this.getQuizDetail(i.id), (this.id = i.id);
              const t = JSON.parse(
                window.localStorage.getItem("quiz-" + i.id) || "{}"
              );
              setTimeout(() => {
                !1 === t.canQuizAagin &&
                  ((this.part = t.questionCount + 1),
                  (this.bingoCount = t.bingoCount),
                  (this.result = t.result));
              }, 100);
            } else this.$toast.show({ title: "题库出错了" });
            if (this.config.result) {
              for (
                var s = Math.round(
                    (this.bingoCount / this.questionCount) * 100
                  ),
                  o = -1,
                  e = 0;
                e < this.config.result.length;
                e++
              )
                s >= Number(this.config.result[e].greaterThanOrEqualTo) && o++;
              this.result = this.config.result[o];
            }
          },
          watch: {
            part(t, i) {
              if (this.config.result) {
                for (
                  var s = Math.round(
                      (this.bingoCount / this.questionCount) * 100
                    ),
                    o = -1,
                    e = 0;
                  e < this.config.result.length;
                  e++
                )
                  s >= Number(this.config.result[e].greaterThanOrEqualTo) &&
                    o++;
                this.result = this.config.result[o];
              }
            },
          },
          methods: {
            play() {
              this.$refs.audio.play(), (this.isPlay = !0);
            },
            stop() {
              this.$refs.audio.pause(), (this.isPlay = !1);
            },
            playQuestionAudio(t) {
              this.$refs[t].play();
            },
            logIn() {
              const t = "/modules/pages/common-login/index";
              (Object(a["h"])() || Object(a["d"])()) &&
                this.navigateTo({ url: t });
            },
            async getQuizDetail(t) {
              const i = await Object(r["a"])("quiz", t);
              (this.config = i),
                (this.questionCount = i.questions.length),
                this.getCoverColor(i.coverImageUrl);
              for (var s = 0; s < i.questions.length; s++) {
                var o = Math.floor(
                  Math.random() * i.questions[s].random.length
                );
                if (i.questions[s].random[o].isMultiple)
                  for (
                    var e = 0;
                    e < i.questions[s].random[o].options.length;
                    e++
                  )
                    i.questions[s].random[o].options[e].choose = !1;
                this.finalQuestions.push(i.questions[s].random[o]);
              }
              if (this.config.shouldJoinIslandId)
                try {
                  const t = await g["a"].detail(this.config.shouldJoinIslandId);
                  (this.islandInfo = t.data),
                    this.config.shouldJoinIslandId &&
                      !this.islandInfo.joined &&
                      (this.part = 0);
                } catch (n) {
                  console.error(n);
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
                          `${h["a"].web}/plugin/quiz?id=${this.id}`
                        ),
                    },
                  },
                });
              }, 1e3);
            },
            async getCoverColor(t) {
              // const { data: i } = await c.a.get(t + "!color");
              // this.coverColor = "#" + i.RGB.slice(2, 8);
            },
            async joinIsland() {
              try {
                await g["a"].join(this.config.shouldJoinIslandId);
                this.$toast.show({ title: "加入岛成功" }), (this.part = 1);
              } catch (t) {
                console.error(t);
              }
            },
            chooseOption(t, i) {
              (this.loading = !0),
                this.config.bgm && 1 === this.part && this.play(),
                t.bingo
                  ? (setTimeout(() => {
                      i.target.classList.add("right");
                    }, 150),
                    (this.bingoCount += 1))
                  : setTimeout(() => {
                      i.target.classList.add("wrong");
                    }, 150),
                setTimeout(() => {
                  (this.part += 1),
                    (document.getElementsByClassName("body")[0].scrollTop = 0),
                    (this.loading = !1),
                    this.part > this.questionCount &&
                      "{}" !== JSON.stringify(this.me) &&
                      (this.submit(), this.updateShareInfo());
                }, 1e3),
                window.localStorage.setItem(
                  "quiz-" + this.id,
                  JSON.stringify({
                    canQuizAagin: !1,
                    bingoCount: this.bingoCount,
                    questionCount: this.questionCount,
                    result: this.result,
                  })
                );
            },
            chooseMultipleOption(t) {
              this.config.bgm && 1 === this.part && this.play(),
                (this.finalQuestions[this.part - 1].options[t].choose =
                  !this.finalQuestions[this.part - 1].options[t].choose),
                this.finalQuestions[this.part - 1].options.splice(0, 0);
            },
            multipleSubmit() {
              this.loading = !0;
              for (
                var t = 0, i = 0;
                i < this.finalQuestions[this.part - 1].options.length;
                i++
              )
                (this.finalQuestions[this.part - 1].options[i].bingo &&
                  this.finalQuestions[this.part - 1].options[i].choose) ||
                  (!this.finalQuestions[this.part - 1].options[i].bingo &&
                    !this.finalQuestions[this.part - 1].options[i].choose) ||
                  t++;
              0 === t
                ? (this.$toast.show({ title: "都答对了" }),
                  (this.bingoCount += 1))
                : this.$toast.show({ title: "答错了" }),
                setTimeout(() => {
                  (this.part += 1),
                    (document.getElementsByClassName("body")[0].scrollTop = 0),
                    (this.loading = !1),
                    this.part > this.questionCount &&
                      "{}" !== JSON.stringify(this.me) &&
                      (this.submit(), this.updateShareInfo());
                }, 1e3),
                window.localStorage.setItem(
                  "quiz-" + this.id,
                  JSON.stringify({
                    canQuizAagin: !1,
                    bingoCount: this.bingoCount,
                    questionCount: this.questionCount,
                    result: this.result,
                  })
                );
            },
            updateShareInfo() {
              wx.miniProgram.postMessage({
                data: {
                  shareOptions: {
                    title: `我在《${this.config.title}》得了${Math.round(
                      (this.bingoCount / this.questionCount) * 100
                    )}分，你也来试试！`,
                    imageUrl:
                      "" +
                      (this.config.shareImageUrl
                        ? this.config.shareImageUrl + "!lfit_w1080_jpg"
                        : this.config.coverImageUrl + "!lfit_w1080_jpg"),
                    path:
                      "/modules/pages/web-view/index?url=" +
                      encodeURIComponent(
                        `${h["a"].web}/plugin/quiz?id=${this.id}`
                      ),
                  },
                },
              });
            },
            async submit() {
              const t =
                '[{"title":"答题测试结果收集","form":[{"label":"答题模版id","component":"input","slotNextLine":true,"name":"template","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.id +
                '"},{"label":"得分","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                Math.round((this.bingoCount / this.questionCount) * 100) +
                '"}]}]';
              try {
                await u["a"].submit({
                  content: t,
                  templateId: "571376099435580683",
                });
              } catch (i) {
                console.error(i);
              }
            },
            share() {
              Object(a["h"])()
                ? (this.showShareModal = !0)
                : Object(a["d"])() &&
                  d["a"].shareMiniApp({
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
                        `${h["a"].web}/plugin/quiz?id=${this.id}`
                      ),
                    miniAppId: "wx4772ffded5f46cd2",
                  }),
                setTimeout(() => {
                  window.localStorage.setItem(
                    "quiz-" + this.id,
                    JSON.stringify({
                      canQuizAagin: !0,
                      bingoCount: this.bingoCount,
                      questionCount: this.questionCount,
                      result: this.result,
                    })
                  ),
                    (this.part = 1),
                    (this.bingoCount = 0),
                    (this.showShareModal = !1),
                    (this.finalQuestions = []);
                  for (var t = 0; t < this.config.questions.length; t++) {
                    var i = Math.floor(
                      Math.random() * this.config.questions[t].random.length
                    );
                    this.finalQuestions.push(
                      this.config.questions[t].random[i]
                    );
                  }
                  for (var s = 0; s < this.finalQuestions.length; s++)
                    if (this.finalQuestions[s].isMultiple)
                      for (
                        var o = 0;
                        o < this.finalQuestions[s].options.length;
                        o++
                      )
                        this.finalQuestions[s].options[o].choose &&
                          (this.finalQuestions[s].options[o].choose = !1);
                }, 1e4);
            },
            jump() {
              this.config.tip.miniprogramAppId
                ? Object(a["d"])()
                  ? d["a"].navigateToMiniProgram({
                      appId: this.config.tip.miniprogramAppId,
                      path: this.config.tip.miniprogramPath,
                    })
                  : this.navigateTo({ url: this.config.tip.miniprogramPath })
                : (Object(a["d"])() || Object(a["h"])()) &&
                  this.navigateTo({ url: this.config.tip.path });
            },
          },
        },
        m = f,
        v = (s("11fa"), s("0c7c")),
        _ = Object(v["a"])(m, o, e, !1, null, null, null);
      i["default"] = _.exports;
    },
    "6d6a": function (t, i, s) {
      "use strict";
      var o = function () {
          var t = this,
            i = t._self._c;
          return i(
            "div",
            { staticClass: "ec-product-covers" },
            [
              i(
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
                          i(
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
                t._l(t._medias, function (s, o) {
                  return i(
                    "swipe-item",
                    { key: o, staticClass: "swiper-item" },
                    [
                      "video" === s.type
                        ? i("video", {
                            staticClass: "ec-product-covers__img",
                            attrs: {
                              src: s.url,
                              autoplay: !1,
                              loop: !1,
                              controls: "",
                            },
                          })
                        : i("van-image", {
                            staticClass: "ec-product-covers__img",
                            attrs: {
                              src: s.url + "!lfit_w1080_jpg",
                              fit: t.mode,
                            },
                            on: {
                              click: function (i) {
                                return t.viewImage(o);
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
                ? i(
                    "div",
                    { staticClass: "ec-product-covers__indicators" },
                    [
                      i("Indicator", {
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
        e = [],
        n = (s("4662"), s("28a2")),
        a = (s("4056"), s("44bf")),
        r = (s("4b0a"), s("2bb1")),
        l = (s("7844"), s("5596")),
        c = function () {
          var t = this,
            i = t._self._c;
          return i(
            "div",
            { staticClass: "ec-product-covers-indicator" },
            t._l(t.total, function (s, o) {
              return i("div", {
                key: o,
                class: [
                  "ec-product-covers-indicator__item",
                  { "ec-product-covers-indicator__current": o === t.current },
                ],
                on: {
                  click: function (i) {
                    return t.change(o);
                  },
                },
              });
            }),
            0
          );
        },
        u = [],
        h = {
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
        d = h,
        g = (s("7fef"), s("0c7c")),
        p = Object(g["a"])(d, c, u, !1, null, null, null),
        f = p.exports,
        m = {
          components: {
            Indicator: f,
            Swipe: l["a"],
            SwipeItem: r["a"],
            VanImage: a["a"],
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
              const { _medias: i } = this,
                s = i.map((t) => t.url);
              Object(n["a"])({ images: s, startPosition: t, maxZoom: 5 });
            },
          },
        },
        v = m,
        _ = (s("cde2"), Object(g["a"])(v, o, e, !1, null, null, null));
      i["a"] = _.exports;
    },
    "7fef": function (t, i, s) {
      "use strict";
      s("c676");
    },
    c676: function (t, i, s) {},
    cb35: function (t, i, s) {
      "use strict";
      var o = s("0ef7");
      i["a"] = {
        detail(t) {
          return o["h"].get("/treasure/island/detail?id=" + t);
        },
        join(t) {
          return o["h"].post("/treasure/island/join", { id: t });
        },
      };
    },
    cde2: function (t, i, s) {
      "use strict";
      s("536c");
    },
  },
]);
