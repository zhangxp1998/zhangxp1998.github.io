(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-5a1c2b78"],
  {
    "684b": function (a, c, e) {
      "use strict";
      var o = e("0ef7");
      c["a"] = {
        getPostAnalysis(a) {
          return o["d"].get("/analysis/" + a);
        },
        createPostReviewV3(a) {
          return o["h"].post("/gactus/post-review-v3", a);
        },
        updatePostReviewV3(a) {
          return o["h"].put("/gactus/post-review-v3", a);
        },
        deleteSpuMark(a) {
          return o["h"].post("/gactus/delete-spu-mark", a);
        },
        createPostArticle(a) {
          return o["h"].post("/gactus/posts-article", a);
        },
        getPostListByTopic(a) {
          return o["h"].post("/gactus/topics/posts-v3", a);
        },
        getPostListByTag(a) {
          return o["h"].post("/gactus/posts/by-tag-v4", a);
        },
        mark(a) {
          return o["h"].post("/gactus-web/v1/mark/edit", a);
        },
        createPost(a) {
          return o["h"].post("/gactus-web/post/create", a);
        },
        createPostStandard(a) {
          return o["h"].post("/gactus-web/post/standard/create", a);
        },
        updatePostStandard(a) {
          return o["h"].post("/gactus-web/post/standard/update", a);
        },
        comment(a) {
          return o["h"].post("/cactus-api/comments", a);
        },
        getUserHobbyMark(a) {
          return o["h"].post("/gactus/user-hobby-mark", a);
        },
        getUserMark(a) {
          return o["h"].post("/gactus-web/v1/get-user-marks", a);
        },
        getUserHobbyList(a) {
          return o["h"].get("/gactus-web/v1/interest/list", { uid: a });
        },
        gstoneGames(a) {
          return o["h"].post("/config-go/redirect/gstoneGames", a);
        },
      };
    },
    "7cb2": function (a, c, e) {
      "use strict";
      e.d(c, "b", function () {
        return t;
      }),
        e.d(c, "c", function () {
          return p;
        }),
        e.d(c, "a", function () {
          return s;
        });
      var o = e("0ef7"),
        n = e("0d94"),
        d = e("a37c");
      async function t(a, c = "interior-admin.image") {
        const e = Object(n["e"])({
          isProd: d["e"],
          async customApiCall(a) {
            var c;
            const e = await o["h"].post("/uploader/gene-post-object-sign", a);
            return null === (c = e.data) || void 0 === c ? void 0 : c[0];
          },
        });
        return e({ file: a, scene: c });
      }
      function p(a) {
        return o["h"].get("/uploader/file-space/get", a);
      }
      function s(a, c = "interior-admin.image") {
        const e = Object(n["e"])({
          isProd: d["e"],
          async customApiCall(a) {
            var c;
            const e = await o["h"].post(
              "/uploader/anonymous/gene-post-object-sign",
              a
            );
            return null === (c = e.data) || void 0 === c ? void 0 : c[0];
          },
        });
        return e({ file: a, scene: c });
      }
    },
    b2ed: function (a, c, e) {},
    c882: function (a, c, e) {
      "use strict";
      e("b2ed");
    },
    ca8c: function (a, c, e) {
      "use strict";
      var o = e("0ef7");
      c["a"] = {
        getWithMultipleRelated(a) {
          return o["d"].get("/topics/action/get-with-multiple-related", a);
        },
        vote(a, c) {
          return o["d"].post(`/polls/${a}/vote`, c);
        },
        getDetail(a) {
          return o["d"].get("/topics/" + a);
        },
      };
    },
    e329: function (a, c, e) {
      "use strict";
      e.r(c);
      var o = function () {
          var a = this,
            c = a._self._c;
          return c(
            "div",
            { staticClass: "vote-switch-2022" },
            [
              1 === this.part
                ? c(
                    "div",
                    { staticClass: "vote-list" },
                    [
                      a._m(0),
                      this.hasVoted
                        ? [
                            c(
                              "div",
                              { staticClass: "option-group" },
                              [
                                c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: a.query,
                                      expression: "query",
                                    },
                                  ],
                                  staticClass: "searchbox",
                                  attrs: { placeholder: "输入游戏名称搜索" },
                                  domProps: { value: a.query },
                                  on: {
                                    input: function (c) {
                                      c.target.composing ||
                                        (a.query = c.target.value);
                                    },
                                  },
                                }),
                                c(
                                  "div",
                                  {
                                    staticStyle: {
                                      "margin-top": "10px",
                                      color: "#999",
                                    },
                                  },
                                  [
                                    a._v(
                                      " 👇 点击选择游戏投票，每人最多 10 票 "
                                    ),
                                  ]
                                ),
                                a._l(this.options, function (e, o) {
                                  return [
                                    a.query && -1 === e.name.indexOf(a.query)
                                      ? a._e()
                                      : c(
                                          "div",
                                          {
                                            key: o,
                                            class: [
                                              "option",
                                              { active: e.choose },
                                            ],
                                            on: {
                                              click: function (c) {
                                                return a.choose(o);
                                              },
                                            },
                                          },
                                          [
                                            c("img", {
                                              staticClass: "option-img",
                                              attrs: { src: e.coverUrl },
                                            }),
                                            c(
                                              "div",
                                              { staticClass: "option-name" },
                                              [a._v(a._s(e.name))]
                                            ),
                                            e.rate > 0
                                              ? c(
                                                  "div",
                                                  {
                                                    staticClass: "option-rate",
                                                  },
                                                  [
                                                    c(
                                                      "svg",
                                                      {
                                                        staticClass:
                                                          "rate-icon",
                                                        attrs: {
                                                          t: "1651481650315",
                                                          viewBox:
                                                            "0 0 1024 1024",
                                                          version: "1.1",
                                                          xmlns:
                                                            "http://www.w3.org/2000/svg",
                                                          "p-id": "2055",
                                                          width: "10",
                                                          height: "10",
                                                        },
                                                      },
                                                      [
                                                        c("path", {
                                                          attrs: {
                                                            d: "M781.186088 616.031873q17.338645 80.573705 30.59761 145.848606 6.119522 27.537849 11.219124 55.075697t9.689243 49.976096 7.649402 38.247012 4.079681 19.888446q3.059761 20.398406-9.179283 27.027888t-27.537849 6.629482q-5.099602 0-14.788845-3.569721t-14.788845-5.609562l-266.199203-155.027888q-72.414343 42.836653-131.569721 76.494024-25.498008 14.278884-50.486056 28.557769t-45.386454 26.517928-35.187251 20.398406-19.888446 10.199203q-10.199203 5.099602-20.908367 3.569721t-19.378486-7.649402-12.749004-14.788845-2.039841-17.848606q1.01992-4.079681 5.099602-19.888446t9.179283-37.737052 11.729084-48.446215 13.768924-54.055777q15.298805-63.23506 34.677291-142.788845-60.175299-52.015936-108.111554-92.812749-20.398406-17.338645-40.286853-34.167331t-35.697211-30.59761-26.007968-22.438247-11.219124-9.689243q-12.239044-11.219124-20.908367-24.988048t-6.629482-28.047809 11.219124-22.438247 20.398406-10.199203l315.155378-28.557769 117.290837-273.338645q6.119522-16.318725 17.338645-28.047809t30.59761-11.729084q10.199203 0 17.848606 4.589641t12.749004 10.709163 8.669323 12.239044 5.609562 10.199203l114.231076 273.338645 315.155378 29.577689q20.398406 5.099602 28.557769 12.239044t8.159363 22.438247q0 14.278884-8.669323 24.988048t-21.928287 26.007968z",
                                                            "p-id": "2056",
                                                          },
                                                        }),
                                                      ]
                                                    ),
                                                    a._v(
                                                      " " + a._s(e.rate) + " "
                                                    ),
                                                  ]
                                                )
                                              : a._e(),
                                          ]
                                        ),
                                  ];
                                }),
                              ],
                              2
                            ),
                            c("textarea", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: a.postContent,
                                  expression: "postContent",
                                },
                              ],
                              staticClass: "post-content-textarea",
                              attrs: { placeholder: "写下你的简评...(选填)" },
                              domProps: { value: a.postContent },
                              on: {
                                input: function (c) {
                                  c.target.composing ||
                                    (a.postContent = c.target.value);
                                },
                              },
                            }),
                            a._v(" "),
                            c(
                              "div",
                              { staticClass: "btn", on: { click: a.next } },
                              [
                                a._v(" 提交投票 "),
                                this.count > 0
                                  ? [a._v("(" + a._s(this.count) + ")")]
                                  : a._e(),
                              ],
                              2
                            ),
                            c("div", { staticClass: "tip" }, [
                              a._v("投票后查看实时排名"),
                            ]),
                          ]
                        : a._e(),
                    ],
                    2
                  )
                : a._e(),
              2 === this.part
                ? c(
                    "div",
                    { staticClass: "final", attrs: { id: "canvas" } },
                    [
                      a.image
                        ? [
                            c("img", {
                              staticClass: "draw",
                              attrs: { src: a.image },
                            }),
                          ]
                        : c("div", { staticClass: "paper" }, [
                            c("img", {
                              staticClass: "paper-header",
                              attrs: {
                                src: "https://cdn.qiandaoapp.com/interior/images/75ab5f045c8820f8a15fe3ee754aa393.png",
                              },
                            }),
                            c("div", { staticClass: "avatar-group" }, [
                              c("img", {
                                staticClass: "avatar",
                                attrs: {
                                  src: this.me.avatar,
                                },
                              }),
                              c("div", [a._v("我的年度游戏")]),
                            ]),
                            this.postContent
                              ? c("div", { staticClass: "post-content" }, [
                                  a._v(" " + a._s(this.postContent) + " "),
                                ])
                              : a._e(),
                            c(
                              "div",
                              { staticClass: "final-options" },
                              a._l(this.finalOptions, function (e, o) {
                                return c(
                                  "div",
                                  { key: o, staticClass: "final-option" },
                                  [
                                    c("img", {
                                      staticClass: "final-option-img",
                                      attrs: { src: e.coverUrl + "?" },
                                    }),
                                    c(
                                      "div",
                                      { staticClass: "final-option-name" },
                                      [a._v(a._s(e.name))]
                                    ),
                                    e.rate > 0
                                      ? c(
                                          "div",
                                          { staticClass: "final-option-rate" },
                                          [
                                            c(
                                              "svg",
                                              {
                                                staticClass:
                                                  "final-option-rate-icon",
                                                attrs: {
                                                  t: "1651481650315",
                                                  viewBox: "0 0 1024 1024",
                                                  version: "1.1",
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  "p-id": "2055",
                                                  width: "10",
                                                  height: "10",
                                                },
                                                on: {
                                                  click: function (c) {
                                                    return a.rate(o, 8);
                                                  },
                                                },
                                              },
                                              [
                                                c("path", {
                                                  attrs: {
                                                    d: "M781.186088 616.031873q17.338645 80.573705 30.59761 145.848606 6.119522 27.537849 11.219124 55.075697t9.689243 49.976096 7.649402 38.247012 4.079681 19.888446q3.059761 20.398406-9.179283 27.027888t-27.537849 6.629482q-5.099602 0-14.788845-3.569721t-14.788845-5.609562l-266.199203-155.027888q-72.414343 42.836653-131.569721 76.494024-25.498008 14.278884-50.486056 28.557769t-45.386454 26.517928-35.187251 20.398406-19.888446 10.199203q-10.199203 5.099602-20.908367 3.569721t-19.378486-7.649402-12.749004-14.788845-2.039841-17.848606q1.01992-4.079681 5.099602-19.888446t9.179283-37.737052 11.729084-48.446215 13.768924-54.055777q15.298805-63.23506 34.677291-142.788845-60.175299-52.015936-108.111554-92.812749-20.398406-17.338645-40.286853-34.167331t-35.697211-30.59761-26.007968-22.438247-11.219124-9.689243q-12.239044-11.219124-20.908367-24.988048t-6.629482-28.047809 11.219124-22.438247 20.398406-10.199203l315.155378-28.557769 117.290837-273.338645q6.119522-16.318725 17.338645-28.047809t30.59761-11.729084q10.199203 0 17.848606 4.589641t12.749004 10.709163 8.669323 12.239044 5.609562 10.199203l114.231076 273.338645 315.155378 29.577689q20.398406 5.099602 28.557769 12.239044t8.159363 22.438247q0 14.278884-8.669323 24.988048t-21.928287 26.007968z",
                                                    "p-id": "2056",
                                                  },
                                                }),
                                              ]
                                            ),
                                            a._v(" " + a._s(e.rate) + " "),
                                          ]
                                        )
                                      : a._e(),
                                  ]
                                );
                              }),
                              0
                            ),
                            c("img", {
                              staticClass: "paper-footer",
                              attrs: {
                                src: "https://cdn.qiandaoapp.com/interior/images/d8b8430275e6354d6f43babe24bf4999.png",
                              },
                            }),
                          ]),
                    ],
                    2
                  )
                : a._e(),
              2 === this.part
                ? c(
                    "div",
                    { staticClass: "footer" },
                    [
                      a.image
                        ? [
                            c("div", { staticClass: "tip" }, [
                              a._v("✅ 长按保存图片分享"),
                            ]),
                            c(
                              "div",
                              {
                                staticClass: "btn",
                                on: { click: a.jumpToLottery },
                              },
                              [a._v("分享抽游戏卡带")]
                            ),
                          ]
                        : c("div", { staticClass: "loader" }, [
                            a._v("图片生成中…"),
                          ]),
                    ],
                    2
                  )
                : a._e(),
              this.showRank
                ? [
                    c("div", { staticClass: "subtitle" }, [a._v("投票结果")]),
                    this.hasVoted
                      ? c(
                          "div",
                          {
                            staticStyle: {
                              margin: "20px 10px 0 0",
                              color: "#999",
                              "text-align": "right",
                            },
                            on: { click: a.viewPoster },
                          },
                          [a._v(" 查看我的投票海报 ➡️ ")]
                        )
                      : a._e(),
                    c(
                      "div",
                      {
                        staticClass: "vote-result",
                        style: this.hasVoted ? "margin-bottom: 70px;" : "",
                      },
                      a._l(this.voteResult.slice(0, 50), function (e, o) {
                        return c(
                          "div",
                          {
                            key: o,
                            staticClass: "vote-result-option",
                            on: {
                              click: function (c) {
                                return a.handleSpuClick(e.spuId);
                              },
                            },
                          },
                          [
                            c(
                              "div",
                              { staticClass: "vote-result-option-count" },
                              [a._v(a._s(e.count) + "票")]
                            ),
                            c("div", { staticClass: "rank" }, [
                              a._v(a._s(o + 1)),
                            ]),
                            c("img", {
                              staticClass: "vote-result-option-img",
                              attrs: { src: e.coverUrl },
                            }),
                            c(
                              "div",
                              { staticClass: "vote-result-option-name" },
                              [
                                a._v(" " + a._s(e.name) + " "),
                                c("br"),
                                e.rate > 0
                                  ? c(
                                      "div",
                                      {
                                        staticClass: "vote-result-option-rate",
                                      },
                                      [
                                        c(
                                          "svg",
                                          {
                                            staticClass:
                                              "vote-result-rate-icon",
                                            attrs: {
                                              t: "1651481650315",
                                              viewBox: "0 0 1024 1024",
                                              version: "1.1",
                                              xmlns:
                                                "http://www.w3.org/2000/svg",
                                              "p-id": "2055",
                                              width: "10",
                                              height: "10",
                                            },
                                            on: {
                                              click: function (c) {
                                                return a.rate(o, 8);
                                              },
                                            },
                                          },
                                          [
                                            c("path", {
                                              attrs: {
                                                d: "M781.186088 616.031873q17.338645 80.573705 30.59761 145.848606 6.119522 27.537849 11.219124 55.075697t9.689243 49.976096 7.649402 38.247012 4.079681 19.888446q3.059761 20.398406-9.179283 27.027888t-27.537849 6.629482q-5.099602 0-14.788845-3.569721t-14.788845-5.609562l-266.199203-155.027888q-72.414343 42.836653-131.569721 76.494024-25.498008 14.278884-50.486056 28.557769t-45.386454 26.517928-35.187251 20.398406-19.888446 10.199203q-10.199203 5.099602-20.908367 3.569721t-19.378486-7.649402-12.749004-14.788845-2.039841-17.848606q1.01992-4.079681 5.099602-19.888446t9.179283-37.737052 11.729084-48.446215 13.768924-54.055777q15.298805-63.23506 34.677291-142.788845-60.175299-52.015936-108.111554-92.812749-20.398406-17.338645-40.286853-34.167331t-35.697211-30.59761-26.007968-22.438247-11.219124-9.689243q-12.239044-11.219124-20.908367-24.988048t-6.629482-28.047809 11.219124-22.438247 20.398406-10.199203l315.155378-28.557769 117.290837-273.338645q6.119522-16.318725 17.338645-28.047809t30.59761-11.729084q10.199203 0 17.848606 4.589641t12.749004 10.709163 8.669323 12.239044 5.609562 10.199203l114.231076 273.338645 315.155378 29.577689q20.398406 5.099602 28.557769 12.239044t8.159363 22.438247q0 14.278884-8.669323 24.988048t-21.928287 26.007968z",
                                                "p-id": "2056",
                                              },
                                            }),
                                          ]
                                        ),
                                        a._v(" " + a._s(e.rate) + " "),
                                      ]
                                    )
                                  : a._e(),
                              ]
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                    c(
                      "div",
                      {
                        class: ["btn", { fixed: this.showRank }],
                        on: { click: a.jumpToTopic },
                      },
                      [a._v(" 去看大家的简评 ")]
                    ),
                  ]
                : a._e(),
            ],
            2
          );
        },
        n = [
          function () {
            var a = this,
              c = a._self._c;
            return c("div", { staticClass: "header" }, [
              c("img", {
                attrs: {
                  src: "https://cdn.qiandaoapp.com/interior/images/2017c55f7e434d6ad99fbaa362c07b99.jpg",
                  alt: "cover",
                },
              }),
              c(
                "div",
                {
                  staticClass: "text",
                  staticStyle: { color: "#6b35c2", "font-weight": "bold" },
                },
                [a._v(" 即日起至 23 年 1 月 7 日提名，1 月 8 日公布结果 ")]
              ),
              c(
                "div",
                { staticClass: "text", staticStyle: { color: "#999" } },
                [
                  a._v(
                    " 共计 300 款 switch 游戏参与评选，包含 150 款 2022 年热门游戏以及 150 款千岛电玩热销游戏 "
                  ),
                ]
              ),
            ]);
          },
        ],
        d = (e("14d9"), e("c0e9")),
        t = e.n(d),
        p = e("2f62"),
        s = e("7cb2"),
        r = e("ed08"),
        i = e("ca8c"),
        m = e("684b");
      const u = [
        {
          spuId: "450367470339998597",
          name: "宝可梦：紫",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/images/aff99ee6e128f7cff8db08c2fef5a445.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362762",
          name: "塞尔达传说：荒野之息",
          rate: "9.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e0a6e785da0cc5a60596d3344f6377a8.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421802978589106193",
          name: "星之卡比：探索发现",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9d999809f4b93a2f29528a2fd16f366c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408841226851401350",
          name: "斯普拉遁3",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b98c0bef6a0c6ebea2894e2cae45324a.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450367448865161965",
          name: "宝可梦：朱",
          rate: "8.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/images/886e542ce4934ccc3cebc9d4b454703d.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421820918667422364",
          name: "Nintendo Switch 运动",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/37cb70a4b9645c230e8c78dd21614930.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "470858067819581341",
          name: "异度之刃3",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f9e22c90e7a8a4c753e7dff6e075a251.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "502369886387866946",
          name: "双人成行",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5ce899187372c8f620e80fe2144eae3a.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "484505219028340249",
          name: "女神异闻录5：皇家版",
          rate: "8.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/eac7373247d4a4571e63b68843a398e7.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398414480775658226",
          name: "宝可梦传说：阿尔宙斯",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b32025009810843f8470ae49d0e12972.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363249",
          name: "蓓优妮塔3",
          rate: "8.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/95e47948b3ab7f841c6a3f3b38f6d633.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363453",
          name: "超级马里奥：奥德赛",
          rate: "9.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/be19bfd8d361961392addc93403f2dc6.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363308",
          name: "路易基鬼屋3",
          rate: "9.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/876e483807e4c612b137102ba398fc45.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362570",
          name: "马里奥赛车8豪华版",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/34f9853925c040882ffa40f7ac94919e.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362926",
          name: "超级马里奥派对",
          rate: "9.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/24e9d9fc03202dad49b5b1904a33b1e9.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "382508451647073772",
          name: "怪物猎人：崛起",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f33339dde07aa4a4be4338530fcae37f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363445",
          name: "宝可梦：剑",
          rate: "8.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/1c1c14ea1a39458342b7bd10307f48d5.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "393203190796920116",
          name: "舞力全开2022",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/65394d8f6f93841998f2f589b6adb89e.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362700",
          name: "任天堂明星大乱斗特别版",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/8537c83cbf874174b8a9cbcd3734241b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362775",
          name: "火焰纹章：风花雪月",
          rate: "9.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/6e529add06b8b1408cc37f7e4bee7479.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "390659045444521994",
          name: "宝可梦：晶灿钻石",
          rate: "8.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2c35c9b5bf4b183ca7c872ded3543043.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "382505647033373790",
          name: "哈迪斯",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/276d5c115a5a7375520f4c455920e451.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362377",
          name: "宝可梦盾",
          rate: "8.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/eeecb0bfd0b47a424f3e905c8e652a8e.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362382",
          name: "异度之刃2",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9345dd910c711d479a62d22a211c10a0.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "382760836810306927",
          name: "胡闹厨房！全都好吃",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4b9484efeca983a8f541de6b13032478.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395495324648690323",
          name: "塞尔达传说：旷野之息 扩充票DLC同捆版",
          rate: "9.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e90b4ddf29447527473e566445bb6add.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "382759874737596768",
          name: "超级马里奥3D世界+狂怒世界",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/69d55f8663cce772d0950f8d5e4cc8a2.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363435",
          name: "空洞骑士",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e593cab6cde515f4026da5148d3f7ceb.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363437",
          name: "喷射战士2",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f035b67804d18edf9dd6fd5a8c609e0c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362738",
          name: "暗黑破坏神3",
          rate: "9.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/13fc43ceb0e5e4b56ee0910a210977d0.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363186",
          name: "宝可梦：出发吧！皮卡丘",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5db897cb9f9782d9aafe4adab83a1151.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362724",
          name: "塞尔达传说：织梦岛",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/50de0c56895bd7556007f72f61f3f72c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "390665715528597999",
          name: "宝可梦：明亮珍珠",
          rate: "8.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c5e05d8fd413792cad5997248bca770b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362725",
          name: "巫师3：狂猎 年度版",
          rate: "9.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a680a6856b8e8c0d9b42f4998fdaa7e0.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "241814149187850927",
          name: "有氧拳击2",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5f8c8b56e0718f837308e5c35fa47ba5.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362465",
          name: "新超级马里奥兄弟U 豪华版",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/6601765adbe98d5964508de198575c60.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362363",
          name: "八方旅人",
          rate: "8.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4600dbd8c46dd4bc9c4715b4ccef7f4b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363008",
          name: "渡神纪：芬尼斯崛起",
          rate: "7.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/13785aea67c1e1d60743f96c1989645b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362674",
          name: "世界游戏大全51",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/661811c0eb572f74deb199c99e75a642.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421822125553259301",
          name: "十三机兵防卫圈",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5e22a4a3872a8d6b97b036e1c88dcfc9.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "394757668310548298",
          name: "马里奥派对：超级巨星",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/453b0ac8dfd6f815950ed36c737101b6.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363296",
          name: "逆转裁判 123 成步堂精选集",
          rate: "9.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/33f1364211fc814ff782b442663e4262.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362740",
          name: "胡闹厨房2",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b10706cc1a85b72327c86c054842e520.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "397275056016737525",
          name: "双点医院 年度版带DLC",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/559b78d438b3ffddb0786463e83a57bd.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "394999225861042460",
          name: "密特罗德：生存恐惧",
          rate: "9.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/872b1ffd097963a2598155f327118a9a.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "400575510750478325",
          name: "奥日1+2合集",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c81946c2b579480b6ecc0947363bc2fa.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "213623796333182953",
          name: "纸片马里奥：折纸王",
          rate: "8.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/97778e5b43fa418fa0be90687f770f50.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362864",
          name: "异度神剑：终极版",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/0b277a4dff33d767e10baf06043a2264.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363143",
          name: "舞力全开2020",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/32b2d4e8282bfd5f54f4b5946d7711ad.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363091",
          name: "星露谷物语",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/033ff83476358357faca3d0ff7b04f16.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363078",
          name: "异界锁链",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7dc191db0cd7a6aa74750c11e95a2e04.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "241814149187850915",
          name: "舞力全开2021",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/ef6ce2b30a67c010d145164dfb32c0db.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "241814149187850916",
          name: "塞尔达无双：灾厄启示录",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c690c047e6d1ba4dfc0d2d3b12863825.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408462097203287790",
          name: "三角战略",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a556635f268aa31df468eff0699e2f21.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362896",
          name: "天穗之咲稻姬",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/89f8db9177ad4b99417dff709768f890.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398092663171159555",
          name: "消逝的光芒：白金版",
          rate: "8.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5f023948005e3d34ceffd44c9c2d8b2f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362789",
          name: "勇者斗恶龙11S：寻觅逝去的时光",
          rate: "9.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/ad3da65b45326fccaa0b61dae84cd110.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362461",
          name: "宝可梦：出发吧！伊布",
          rate: "8.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2353d7a406ba275e576e4d27a100afd5.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363322",
          name: "异度神剑2：黄金之国伊拉",
          rate: "9.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/472f2ed83ee1ed64400eaccdcb924e62.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "414051559052196930",
          name: "项圈 X 恶意 Collar × Malice 繁中本篇",
          rate: "8.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c64184554005acd67fa02b5f488cee1b.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363500",
          name: "火影忍者疾风传：究极忍者风暴4 博人传",
          rate: "8.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/3974ad76b89cc31b4fa97301f2b7ce5c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362665",
          name: "耀西的手工世界",
          rate: "8.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b38ea97734066fecb9c37b4735b88569.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363110",
          name: "星之卡比：新星同盟",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9a37880e1a93700dcfd029277eeb1e4c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363153",
          name: "刺客信条：叛逆者合集",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f997ec4d3b93b5d3e760d0302f975936.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "185905533398583166",
          name: "狙击精英4",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/22c506f69b8fa0b3133dc515f804082b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363291",
          name: "小小梦魇2",
          rate: "8.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b6002c5284eb5ae68c035007d67fbf22.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "382507609833468962",
          name: "怪物猎人物语2：毁灭之翼",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/380981b947f67e8daab47a8ba9a3e9ea.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398430294845263138",
          name: "共生丘比特",
          rate: "8.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/d6d2ca17d497b97e4308dd7d060d1465.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408092124425422548",
          name: "宝可梦：剑 扩充版",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/0f669a32005c1ff8de020491427a1b61.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "394688927358972481",
          name: "塞尔达传说：天空之剑",
          rate: "8.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/37ca953a5dc1d9d78f68b793b5c67d7d.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "392455475645468116",
          name: "龙珠Z：卡卡罗特+新觉醒篇",
          rate: "8.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7f38f1e80eabba4413f3d9acafd59915.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363203",
          name: "勇者斗恶龙：创世小玩家2",
          rate: "9.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9ae976dcdb74d68564ef84e703105535.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363326",
          name: "马里奥+疯狂兔子：王国之战",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/47de486128b3141a07bb17f89b0316ac.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "475626177302630320",
          name: "尼尔机械纪元",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/273ddb11b969d0f68275f1da7e0d495b.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362508",
          name: "怪物猎人GU ",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/86cefad925aa970c7da08581f63f2dbd.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "411041779115287077",
          name: "死亡细胞 年度版",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/3d052ebfed8ad545abbbc44aa24c6102.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "361306577518614275",
          name: "小小梦魇1 完整版",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9a5dded998bec1ab0ec17dadc0d5015c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363400",
          name: "太鼓达人Switch版",
          rate: "8.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/57ce4019cb437f5653d42bc143a410fe.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362499",
          name: "猎天使魔女2",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/ade8222124c729f007edaee032e62ae6.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421807015858465617",
          name: "火焰纹章无双 风花雪月",
          rate: "8.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/182852b8d4e923fb7a46670d1c9a9984.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362900",
          name: "毛线小精灵2",
          rate: "8.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/18dd2106bac1ec2a4d8fae26c550ffb2.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "392491476061392796",
          name: "植物大战僵尸：花园战争 完整版",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/de271919ca7155e7786ba62f0746d093.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362637",
          name: "马里奥网球 ACE",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/28152665cd2fec80d2db266853fd7420.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395043653002752582",
          name: "疯狂兔子：奇遇派对",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/879a0841974af1cc65879f522075cf3c.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362977",
          name: "真女神转生5",
          rate: "9.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7f8ec802ad347f581090190ab5bc23df.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363142",
          name: "文明帝国6",
          rate: "8.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/398e4740079666dd2e9aa3b74bda00d2.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363387",
          name: "女神异闻录5乱战：魅影攻手",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b41f150870f8455f0c47ee4663e8129d.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395826496691856482",
          name: "奥林匹亚的晚宴",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7b7d3aee6fb8801c61026fb93bdf841a.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363149",
          name: "胡闹搬家",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/725e089ae30715562e5633edb57724f7.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "393206218748922261",
          name: "FIFA 22",
          rate: "8.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/04cfff34e4be186541af06c4ca8eddb3.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363204",
          name: "哆啦A梦：大雄的牧场物语",
          rate: "7.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9d356b6fba9622f08d626485324128b0.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "194664243025456231",
          name: "胡闹厨房1+2合集",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/86a1ec8c1cf7c9101ccef4b02899558f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "278574130029349502",
          name: "莱莎的炼金工房2：失落传说与秘密精灵",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/3df5e43c02291c58409bec973643f9d9.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395072983334606208",
          name: "零：濡鸦之巫女",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/784df213a8d3097b3aa746b55caaefd7.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363483",
          name: "前进！奇诺比队长",
          rate: "8.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/4b17d3f293e7bc1c9336ed6ea1e50551.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421811465444434346",
          name: "马里奥激战前锋：战斗联赛",
          rate: "7.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/301065cecae98116abf281027f85fa96.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "394275996318044120",
          name: "幻奏咖啡厅",
          rate: "8.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4a6b8a48b30b4d5d25b1fd18978f625f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362732",
          name: "上古卷轴5：天际",
          rate: "8.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b3766712e2fc162816f697e85d286534.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362697",
          name: "你裁我剪！斯尼帕 Plus",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/1b8be900851ad22636678ef7a58770fe.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "422218100063254173",
          name: "鬼灭之刃：火之神血风谭",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/75b479ac28a691f6984e8b83de4f1ba0.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362841",
          name: "海贼无双4",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/1f09d07e6349042370e39c7bbfd1b42f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "400608504689344584",
          name: "宝可梦：盾 扩充版",
          rate: "8.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/56476b72bee48b5186eddf9cdd6bf04f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "392444952975682432",
          name: "皮克敏3 豪华版",
          rate: "8.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7ce4e3a929aea78faf17eba63c97f65c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362884",
          name: "无名鹅作剧",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5a8daf1e4903ae7604280e641b09115d.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "425798706923649629",
          name: "刺客信条：艾吉奥合集",
          rate: "7.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/fab7700b62e28e330a73d858a16a2cba.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "397000839534948574",
          name: "枪弹辩驳三部曲",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/46ab92397a1be8a2bdfe3e33a6dc49ad.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "241814149187850903",
          name: "极品飞车14：热力追踪 重制版",
          rate: "8.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/1127280e3b9a920ae63ae1ec4c0189ac.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398809239809736403",
          name: "怪物猎人 XX",
          rate: "8.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/39970c983610d1f00233dca7b6d53782.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395081337045842236",
          name: "NBA 2K22",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f59c94331b7e6a8e7e70c472d7811668.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363123",
          name: "舞力全开2019",
          rate: "8.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f29e6187030adec6094d3805f6ff61dc.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398442432422951982",
          name: "毗卢遮那战姬：源平飞花梦想",
          rate: "8.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/85472a9150e3bed674b6de97c5b93281.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "392446696732433264",
          name: "奥日2：精灵与萤火意志",
          rate: "9.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9f4ec2d2322ccf7dfbbd1a7fcd695cdd.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362941",
          name: "刺客信条3：重置版",
          rate: "7.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/16b9ba288ed10851ff1d55b6e92dd0cc.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362718",
          name: "妖怪手表4++",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/1bde36b913c2f9c4a4155db01f78fe29.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362949",
          name: "龙珠：斗士Z",
          rate: "8.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/809c30f9ef724795d7e017a89fa14bba.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362362",
          name: "死亡细胞",
          rate: "8.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/41150de93e00c54c3043f9a4a0eabe27.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "400213264618980500",
          name: "灵活脑学校",
          rate: "8.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e3e29d7098a200c7248e80eece994125.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "449247540437769327",
          name: "失忆症",
          rate: "8.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/17d76a1c7ebe0764e9604501d46cdecb.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362652",
          name: "有氧拳击1",
          rate: "8.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/02b990bab81f9f9d8e26cbbb63292d2a.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363141",
          name: "猎天使魔女",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7651d07222e4f5ba5c68a237990a3190.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395057753380563276",
          name: "僵尸世界大战",
          rate: "7.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5f16ec6969050c9b5af7f6a44e9f057b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362544",
          name: "极乐迪斯科：最终剪辑版",
          rate: "7.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/8941777136b96612c946cb0e5ff4c85f.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "470860657684892990",
          name: "时空勇士",
          rate: "7.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/d452dd54244f7e00c53fc432f5ccfdda.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362769",
          name: "真三国无双7：猛将传DX",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/92f281cd0b2dfe8bb7fe2b8e3416a153.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363049",
          name: "黑暗之魂 高清重置版",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c5d754c817e8cbf9095dbc1b63ea3c65.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "473314136277686016",
          name: "舞力全开 国行版",
          rate: "8.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/97ca97dbeb9c1b97a02f13aa16c36342.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363026",
          name: "ARMS",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/61550628297b084e9f4a35bea6cc5850.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363371",
          name: "勇气默示录2",
          rate: "8.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f71912eeb83c41fcd521d525b2b3e396.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363405",
          name: "1 2 Switch",
          rate: "7.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2f7a4c783338b037a85f5c8ecf14babb.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "392516550080395076",
          name: "分享同乐！瓦里奥制造",
          rate: "7.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/dcd19a0b3fce61a9e5383ac562e6be76.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362429",
          name: "Al：梦境档案",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/d132c6dcf1cbfa6063265d636655e452.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421817298010156770",
          name: "太阁立志传5 DX",
          rate: "7.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/27686a5469c334b4ae72d178e3c723eb.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362450",
          name: "我的世界",
          rate: "7.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/99a6e81670e0e8aa71c205dffee91676.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362392",
          name: "生化奇兵123合集 收藏版",
          rate: "7.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/bb131803bdad526272138836704444d3.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363094",
          name: "双点医院",
          rate: "8.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f158fd79c487760df5c01e3da60c705b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398422928976353792",
          name: "剑为君舞 for S",
          rate: "7.7",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/82bce91ee5c5fd9c271949bf408516bf.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "399434891990689938",
          name: "蜡笔小新：我和博士的暑假",
          rate: "6.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7d1e3bf0dffe56c61982efa135844b2c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "278574130029349503",
          name: "三国志14：威力加强版",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c5c402bc373620854b3572e1ebb463e2.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452937394086331886",
          name: "雪人兄弟 特别版",
          rate: "7.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/db56577eaf01caa212b0cbd79ff16224.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398831135553190161",
          name: "新宝可梦随乐拍",
          rate: "6.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4e648a2df123259ba486d58fe4fee40e.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "394699097841425685",
          name: "尊巴健身",
          rate: "8.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/bae9de6454211c89942d6dc083136f2c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "241814149187850870",
          name: "超级马里奥3D 全明星收藏版",
          rate: "7.8",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/85ad2504468786a8e457ac47ddc998fb.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "393160803764775803",
          name: "游戏王：冲锋决斗 最强混战",
          rate: "7.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2c4c5cd61b7bb4d63365b02b50190b02.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363245",
          name: "圣剑传说3 重制版",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/dbf5b624ecf8b1a5ffb13ed1ba93943c.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "394709491662442978",
          name: "搭档任务：秘密搜查组",
          rate: "9.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/87978092fce8d79560d9619e6c42b861.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363135",
          name: "火影忍者疾风传：究极忍者风暴三部曲",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/87543c4b62b61d5227044a8859411578.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363112",
          name: "牧场物语:重聚矿石镇",
          rate: "8.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/546ad9fb56adfc15e035f18d6d643cd8.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362704",
          name: "凯瑟琳 浓郁口感",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/fc95d9756d67a3366c3750cd90b243e3.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "497116462780209384",
          name: "项圈 X 恶意 Collar × Malice 繁中FD",
          rate: "8.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/0e65d9cecbfb5a01ae9c8c5443f42b34.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362591",
          name: "超级炸弹人R",
          rate: "6.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/981d71fe618b8c0419977f1375686dbc.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "392882330970331737",
          name: "牧场物语：橄榄镇与希望的大地",
          rate: "7.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/edb59d36229ca7140814d8ccb67ab776.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362576",
          name: "海贼无双3 豪华版",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c67ff2e9e64192c11d0f4ba49c2e5d62.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "392781425008498293",
          name: "深海迷航合集",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5ef63aa26df5fc8a29132c9d348bd658.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "463364436514602389",
          name: "AI：梦境档案-涅槃计划",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4aa5268613c60d59193903fecdb6a4f3.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362859",
          name: "龙之信条：黑暗觉醒",
          rate: "7.9",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/099145c05f28497c7b035cd2646cd62d.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "241814149187850869",
          name: "NBA 2K21",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/77f576f1c399ea2646c61d6edb412e71.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363368",
          name: "莱莎的炼金工房：常暗女王与秘密藏身处",
          rate: "8.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b9e48cc4a7cfd85917dbd8d3d72a9023.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398841675402800518",
          name: "附带导航！一做就上手 第一次的游戏程序设计",
          rate: "7.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/878f6db65ac0c826385e6af08c6464a8.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "470855031277666802",
          name: "暗影火炬城",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7bc85b1a02af5f12e99ffb6efb0e9527.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "522392727569241140",
          name: "哆啦A梦牧场物语：自然王国与和乐家人",
          rate: "6.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/7a1bab781f0fbb0e8f048f0bbae760c3.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363117",
          name: "CAPCOM卡普空经典动作街机游戏合集",
          rate: "7.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/3db187bc6b784195a56c0299dec49e84.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "505218544921988207",
          name: "忍者神龟 施莱德的复仇",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2fc6c734c28a8c8f61ae9e05b56254cd.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421835822203994524",
          name: "春逝百年抄",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/d8ddf75a442b27bc0adff21f3eacdf4f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "393208147189268289",
          name: "Jump大乱斗 豪华版",
          rate: "7.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/d0b8c17206a962f677863aa841d7f097.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363222",
          name: "符文工房4 特别版",
          rate: "8.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/c1e723889c11f52bddb0a02203f3ec61.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421829783480118261",
          name: "太鼓达人 咚咚雷音祭",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/6a7799f6f0a4a8c9010f74fbf5515129.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "522405779974715218",
          name: "师父",
          rate: "7.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/2a3a8d48b938e90b0420532f2131decd.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "424059863644184243",
          name: "苏菲的炼金工房2 ~不可思议梦的炼金术师~",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/6366a3e3b8c7d4a90b70e0b3f5a77f51.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395003108511563630",
          name: "真三国无双8：帝国",
          rate: "7.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2fd54db2e7d476ac1018e2c0a1074ead.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363466",
          name: "艾立克斯小子的神奇世界DX",
          rate: "7.1",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c38d68d10ec30f76365b60a7353df859.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363217",
          name: "夜廻与深夜廻",
          rate: "8.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/885cdb32d8dbe333361dc37df898eba1.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "504921148501401617",
          name: "NBA 2K23",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/96f7e8bef509dbbd743fcfb942dfeaad.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "470853648298179499",
          name: "数码宝贝：生存",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2c8e700592084cf34144207879b277e3.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408848322137219227",
          name: "双点大学",
          rate: "6.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/ae01c27d1d0307c4ae17639ba6ffadb2.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362475",
          name: "NBA 2K18",
          rate: "7.0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5d20f9f918eda0a50d6ee3b103cace8a.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "403594937184110828",
          name: "我的世界：地下城 终极版",
          rate: "7.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7e572dedc3f6fa6c398e2421f03782c6.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362463",
          name: "符文工房5",
          rate: "7.6",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9935352689630342535b984a6236750f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363366",
          name: "真人快打11",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/ae88bb76c54f56efca9db17ba6a16bc1.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395072433578784860",
          name: "超级机器人大战30",
          rate: "7.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/8e0ca16c4256bbe900a7e6114a4c62c2.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362431",
          name: "数码宝贝物语:网络侦探 骇客追忆",
          rate: "7.3",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/87d1807821d084c2ce434888bef4f930.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398429023534867852",
          name: "冷然之天秤 帝都幻惑绮谭",
          rate: "6.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/994157d6af52bb25316764ac9dd2f84a.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363194",
          name: "超级机器人大战T",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/ffcab592fa85b9e7ef1a356d0c49e9fd.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "398832003136380657",
          name: "赤痕:夜之仪式",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/8323db659522e168e5d0daafd39ca1e8.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362559",
          name: "超级机器人大战V",
          rate: "7.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/dc2abf67d066028daa7ebe1ec362c917.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "438869572305565392",
          name: "僵尸部队4：死亡战争",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/94d6b9b8d3248043ca39646181038884.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363167",
          name: "龙珠：超宇宙2额外DLC包",
          rate: "7.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5cd787cb264cc0c09bbf5ad4ad7f8a65.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "472565935794999253",
          name: "国夫君的热血三国志",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/d79cd7cd640c45699ae052693305d116.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "394717798129048334",
          name: "雪地奔驰",
          rate: "7.2",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7394bc7c4d44fe7282006372e046de39.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363281",
          name: "方舟:生存进化",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/fd26bdf14cb82eaf79668fcbbc304050.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "528394102551867046",
          name: "最终幻想7：核心危机 重聚",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/e37f3030c6b8bcd405870bd4095d6c56.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421831454222439483",
          name: "无人深空",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/8923a9b71adb9552461d9fd13f12d5fa.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363214",
          name: "乐高星球大战：天行者传奇",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b01d651f1542fbac0237595bf1dbbeaa.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "519798434178313283",
          name: "FIFA 23: LEGACY EDITION",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/c77594c47d8fc28925e5bddd983418fc.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "522407124299516402",
          name: "皇家骑士团：重生",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/4974c3362a41633c09d3a4cc3c640e30.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "400586480097083800",
          name: "马里奥+疯狂兔子：星耀之愿",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/33ef38e2568b9bda06b62f1227ce35f2.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363442",
          name: "进击的巨人2：最终之战",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c4c89a986079c80b8329182facb40d17.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362922",
          name: "NBA 2K20",
          rate: "6.4",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a380d83e4484a4b488a452ca71e7779e.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690363289",
          name: "足球小将：新秀崛起",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/af50fed38d7c6405f3d5ca1207519d8f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408410862538385019",
          name: "最终幻想12",
          rate: "6.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e501f9e5a0c660e32069c6617cb1bc45.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "528394102551867045",
          name: "勇者斗恶龙 寻宝探险团 蓝色眼眸与天空罗盘",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/03f0659dca023d6c1df06454d58b8dc1.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "522405092779931461",
          name: "索尼克未知边境",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/6d91c964eab3fea127dfec5c9d3e07fc.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "394723218377856604",
          name: "马里奥高尔夫：超级冲刺",
          rate: "7.5",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f6cf26a77b31a11d67ad111e09a29d09.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "395008537350365478",
          name: "幽灵行者",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/81b377099025b84b21daf294c263c3d9.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "507120090152621019",
          name: "神领编年史",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/3a74933f66e48b0e6682906e051d67d8.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421832820021803917",
          name: "SD高达 战斗同盟",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/cd3f2ceb51f022ccdad647460ef67567.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "431806069090570529",
          name: "女神异闻录4：无敌究极后桥背摔",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/d5b0beb77d26d9380c8731e3bf9e1c74.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "424055272324049357",
          name: "刀剑乱舞无双",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e1f46f49b2dcf5a0b9fbcb9b725606be.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "471535079219506590",
          name: "风之少年 克罗诺亚1&2 乘风归来",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a3aadd3544cd799f49999d23e5d29714.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452941762068111381",
          name: "那由多的轨迹：改",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7efa24052491711e5e7a85283f56754a.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408466117292473475",
          name: "异星探险家",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/44ce6fe414389abfc07b8b2668840ed2.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "523500743232101378",
          name: "刀剑神域：彼岸游境",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/d349f1204a12f73b2be7758e321ee4e6.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "493439889170488837",
          name: "RPG时间：光之传说",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/baffedec43743226aa38cae25d85dd62.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "431799459136029762",
          name: "骇客时空：GU最终编码",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/07b69f939c72c4504f4a103ecc3791b6.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "424057913728996556",
          name: "杀手与草莓 Plus",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/1f1b1d9ca63f287b2f961257ff8ede5a.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450368067340467961",
          name: "转生恶役只好拔除破灭旗标～兴风作浪的海盗～",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/images/7b5aee6c627d678aa11ea6d8204065de.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421828688263431464",
          name: "前线任务1 重制版",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b6a26668f92981c21dbb9ab9838339a2.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "184643259690362651",
          name: "守望先锋 2",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/63abea985eef7dcbb782d48d80c764f2.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421833636065603704",
          name: "传送门1&2",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4a418a7836b585e5882ed2a1f331fb24.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576027",
          name: "虔诚之花的晚钟-Episodio1926-",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/f651b33d8470acab5e792ca6d3196972.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "528394102551867044",
          name: "魔法使之夜",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/488824b507d0488e6949e21e91aca3e0.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "522394686074133912",
          name: "丰饶之星",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/ec9ce434731d9643cddc9078a0ab1de5.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "507868105951825546",
          name: "异星工厂",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f7728838dd602f3b38357e80f568b4af.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "463364994860364530",
          name: "卡普空格斗合集",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/ecbde8fe1891bda778eedf7345bd5c7c.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452944927459035148",
          name: "暴走枪姬",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/370f9747bc5e4796127131d2cdb496ef.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450357020684469815",
          name: "死亡之屋 重制版",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/934467d26d96dbb12113af644761e530.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "447408864938250011",
          name: "美男战国：穿越时空的爱恋 新的邂逅",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/601298dddd0ae77393177870bdf8303e.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "447412562905171899",
          name: "一生推不如一生恋+Love or Die",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/38d2e5fdcd18f5a4e7b5b6c861722c4e.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "438863172804423907",
          name: "eBaseball实况力量棒球2022",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a3a914be35da4c5b619131dc6033f86f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "447377284043795935",
          name: "奇奇怪界：黑斗篷之迷",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/322e4a17953eb4ffdcd6f39b7b56ca3c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "439203218250062386",
          name: "受折磨的灵魂",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/0281e9d2ff905d9e08e025b05b9fdf16.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "432188815101229222",
          name: "毗卢遮那战姬：一树之风",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/6564b97810f0991cc2be64ba28c5a12b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450000169031725019",
          name: "众神的恶作剧：整合版",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/10896e64904c9b53c1f26dc238b076d3.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421837278197933590",
          name: "迪士尼 速度风暴",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/d0083658629b2aa8f28a4e03fcb3a171.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421840576732881593",
          name: "LOOP８ 降神",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c8d79b902a78f3fba2310063817f1bda.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576029",
          name: "金钱寄生虫",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/cfaac508139fc57a0ff50cf0f6e68a2d.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576031",
          name: "薄樱鬼 真改 风华传",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/22c6c4f9fad40af9270f0eec1927c632.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576032",
          name: "Majestic Majolica",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/fc30cae85a58b7ac171829e5d2764246.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "528394102551867048",
          name: "健身拳击 北斗神拳",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/accf228bbf6acdcba3ec5cd4c168baf2.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576028",
          name: "荒神2",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/1d620aed991f19fb1ffcb12904d335bb.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576025",
          name: "赤刀 真",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/a52fd7f0fbf2187bb17e52978ada0952.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576023",
          name: "休闲系列Vol.3 钓鲈鱼大赛",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/43e631d5f15569057ecad416ad362fbd.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576024",
          name: "拆箱",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/fd3850fd3e15dd7a6f828106cb2bb99c.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "528394102551867047",
          name: "飞禽律师之事件簿",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/9721e58f7f97557b4f1c3f131f085750.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576030",
          name: "沧海天记",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/13938741370cb860e3b03bbd8839c799.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576033",
          name: "武士少女",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/3795694d645ae0e666367c1d545ffeb0.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "537938567855576026",
          name: "热血硬派国夫君外传 热血少女2",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/6ce898ee4d304a58122a31586733469a.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "502698971077273705",
          name: "JOJO奇妙的冒险 群星之战 ",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f1425885e6c1cef10afbf310a2d2ae91.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "463365810904169033",
          name: "无菌饲育箱2",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/096903bdd7c61fa171d04472707dd580.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "463363272578440304",
          name: "夜中倾诉的魔女",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/fe4495ee84d55caeed871148b09c00e8.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "463359870964531814",
          name: "倾听画语：最美好的景色",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/97e78bf9fbe42a954652f07deca5b023.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "411454628551697590",
          name: "无限试驾：太阳王冠",
          rate: "0",
          coverUrl:
            "http://cdn.qiandaoapp.com/images/f8337ab04c2b3644520f94cc7844ad67.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "449259089604698257",
          name: "不死者之王：逃离纳萨力克",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e6ca708f534ba04de5166ecdebc185d9.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "470359310447217286",
          name: "袋鼠闯天关",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/images/7843ccadbd1bdc384bb029bc7a88989d.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452953568933312624",
          name: "小马宝莉：玛泰湾冒险",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b29760d5d089353bc32829a470b85829.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452943119277788537",
          name: "闪耀物语",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/09a8a6086445b7fb3b1331d56c3bf2bb.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "449654462819096674",
          name: "冤罪执行游戏",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/17d7c2616ef6b851788eaa7426215ebe.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450013844207725679",
          name: "创尸纪",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9396147e120008aa76b7860b98d0e7c1.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452950751434740050",
          name: "英灵士魂",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e8f73cd9f2eb23106e2e7d81213d7b76.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452952374932392126",
          name: "虚构世界2：信条谷",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2a104c1b4a982bdafee24d68cf80eb27.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452954294782530608",
          name: "暴走仙掌人",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4c3525abf2ace1d1f77445f0eac3b61c.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452949510189180864",
          name: "欺诈领主",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/ab8d0e3e5189b7697c7aa70d80b8386b.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "452924418990267006",
          name: "百英雄传：崛起",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c49a837fcf7b5338849d8a67d3961e69.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "433989007693701223",
          name: "重装机犬",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f7d6f94ee4bb79a5ea203daacc042a41.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421815051742207035",
          name: "高级战争1+2 Re-Boot Camp",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/0423a3f6a7572c6682ab8f5e63bfbb19.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421834658267837909",
          name: "超时空之轮2 重制版",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/254c927c5805050dabb522568dd32d3d.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "438885218871494173",
          name: "美国职业棒球大联盟22",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a366e7a9ac43e25b747a21c90146b002.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "438874777806054918",
          name: "黄昏沉眠街",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/0d205701a38c2371ffab88ddd0407496.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450044806627022694",
          name: "四海旅人",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/cbdcc281c63ca947139b02c944f6a245.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "449987150985918889",
          name: "章鱼君救我：决定版",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/cf0f2e422950797eb9d0d14d2d7f5c08.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "439209699355822539",
          name: "五藏严流记2",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2df8531afe2d1f113c40986e2286cd34.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "438865169964257360",
          name: "夜廻三",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9b546bbd5971b83526a1c48ea53c3ed2.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "438889346335139162",
          name: "WRC10 FIA世界汽车拉力锦标赛 选手权",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9757673897e8b2b1962bc942ceae918f.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "411454628551697589",
          name: "社交足球",
          rate: "0",
          coverUrl:
            "http://cdn.qiandaoapp.com/images/0905a6daa997244d7e061ffc34eea0a7.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "447372679838750637",
          name: "赛马大亨9 2022",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/34a7d9df48c366cb706f2cb78be657da.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "438861557896686506",
          name: "战斗之魂",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2f0f8791cef90e88b82d976ce6d28d29.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "453377340471364065",
          name: "托迪和托普迪",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/images/39cc660d9e317c7c12bb1aca2578a809.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408840088685054004",
          name: "瑞安救援队",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/3447977b4f458283cdb2d9fcfb17c546.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "432196477323033295",
          name: "放学后的灰姑娘",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/766318e3c8ee7d1c7fdbb284a0684aa7.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "449604649788586404",
          name: "双子星：盛气凌人",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a771c8b5b4a8bdd0ede64ba93b324c68.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "432184807896665059",
          name: "爱之吻 3 cute",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/66ef938b2d6af97e63cb57df6afa511e.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "432182067707736027",
          name: "MUSICUS!",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c6783f675036661508fb4fea1ccd94fe.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "431809470704728485",
          name: "小林家的龙女仆",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/28deffdfa8fd243a2829da2207a57346.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "432180551584255566",
          name: "幸福魔法！樱花盛典",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7905b6e2438605c6e908b7e8a11a5250.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "432178794942592647",
          name: "东京24区 -祈-",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/05b3e10a23ed1b8a09511e08dd99a0a5.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "432176385465894871",
          name: "蛙畑奇事 夏 千木良参战！",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/699c82acbbdf80bac6ce4a2bcdf8fbdf.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "431808019005757133",
          name: "闪乱忍忍忍者大战：海王星-少女们的响艳",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/eac32d9ab78e0383c7306593a33faa73.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "431800369669115975",
          name: "精灵旅社：恐怖传说冒险",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e8f09f69a1d2c4f0684fec92cc819842.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "431797801278622472",
          name: "陆行鸟赛车 GP",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c5f4b31eef53a4920167c2117c277f52.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "424335407270898483",
          name: "恸哭之星",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/a614f135f184530688df8a7def9cbcdb.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408474840371184927",
          name: "高速公路交警模拟器2",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/12ace22769977afa13234899ddb6c199.jpeg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "424061959588261771",
          name: "三国恋战记 + 学园恋战记",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4d8dfa9ac2679209551912be6fc2d137.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "421796561908084004",
          name: "英菲尼克斯",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/fff4352a6552e7c2605cb8ca4c6f4eb2.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450357299857346148",
          name: "COGEN: 大凤羽空与刻之剑",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/c675e06a79be50c330de14bdb591274e.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "411454628551697588",
          name: "COGEN: Sword of Rewind",
          rate: "0",
          coverUrl:
            "http://cdn.qiandaoapp.com/images/673f0e88c86a694ef4fc0e40abb52d4c.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "408469364287796135",
          name: "啃食尸体的冒险饭",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/fdedf61edc3de5d3527028942616c2b7.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "449595084896328603",
          name: "打工人",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/04bc5998394cd9badd9eb46dd0426801.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "449569508366097755",
          name: "幸运狗1",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/3f8e7733350a78510f560c21143ea136.png",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450359949852189328",
          name: "Omori",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a4c2556eeb330818022854aac78b8c84.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "450364674316256693",
          name: "异界ikai",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/interior/images/e0eaaa2934392d6d3276a2ac4cdc840f.jpg",
          choose: !1,
          count: "0",
        },
        {
          spuId: "449572351634477543",
          name: "酉闪町2：昆仑灵动",
          rate: "0",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/7bafcf78266f6e6ce9754b38568e33e6.png",
          choose: !1,
          count: "0",
        },
      ];
      var h = { resources: u };
      const f = [
        {
          name: "塞尔达传说：荒野之息",
          count: "845",
          hasVoted: !0,
          spuId: "184643259690362762",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e0a6e785da0cc5a60596d3344f6377a8.png",
          rate: "9.9",
        },
        {
          name: "宝可梦：紫",
          count: "547",
          hasVoted: !0,
          spuId: "450367470339998597",
          coverUrl:
            "https://cdn.qiandaoapp.com/images/aff99ee6e128f7cff8db08c2fef5a445.jpg",
          rate: "9.0",
        },
        {
          name: "斯普拉遁3",
          count: "352",
          hasVoted: !0,
          spuId: "408841226851401350",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b98c0bef6a0c6ebea2894e2cae45324a.png",
          rate: "9.0",
        },
        {
          name: "双人成行",
          count: "336",
          hasVoted: !1,
          spuId: "502369886387866946",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5ce899187372c8f620e80fe2144eae3a.jpg",
          rate: "9.3",
        },
        {
          name: "星之卡比：探索发现",
          count: "305",
          hasVoted: !1,
          spuId: "421802978589106193",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9d999809f4b93a2f29528a2fd16f366c.png",
          rate: "9.3",
        },
        {
          name: "超级马里奥：奥德赛",
          count: "297",
          hasVoted: !1,
          spuId: "184643259690363453",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/be19bfd8d361961392addc93403f2dc6.png",
          rate: "9.7",
        },
        {
          name: "宝可梦传说：阿尔宙斯",
          count: "284",
          hasVoted: !0,
          spuId: "398414480775658226",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b32025009810843f8470ae49d0e12972.png",
          rate: "9.0",
        },
        {
          name: "宝可梦：朱",
          count: "269",
          hasVoted: !0,
          spuId: "450367448865161965",
          coverUrl:
            "https://cdn.qiandaoapp.com/images/886e542ce4934ccc3cebc9d4b454703d.jpg",
          rate: "8.9",
        },
        {
          name: "Nintendo Switch 运动",
          count: "248",
          hasVoted: !0,
          spuId: "421820918667422364",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/37cb70a4b9645c230e8c78dd21614930.png",
          rate: "9.3",
        },
        {
          name: "异度之刃3",
          count: "212",
          hasVoted: !0,
          spuId: "470858067819581341",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f9e22c90e7a8a4c753e7dff6e075a251.jpeg",
          rate: "9.0",
        },
        {
          name: "女神异闻录5：皇家版",
          count: "191",
          hasVoted: !1,
          spuId: "484505219028340249",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/eac7373247d4a4571e63b68843a398e7.jpeg",
          rate: "8.8",
        },
        {
          name: "塞尔达传说：旷野之息 扩充票DLC同捆版",
          count: "188",
          hasVoted: !1,
          spuId: "395495324648690323",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e90b4ddf29447527473e566445bb6add.png",
          rate: "9.9",
        },
        {
          name: "路易基鬼屋3",
          count: "179",
          hasVoted: !1,
          spuId: "184643259690363308",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/876e483807e4c612b137102ba398fc45.png",
          rate: "9.4",
        },
        {
          name: "马里奥赛车8豪华版",
          count: "144",
          hasVoted: !1,
          spuId: "184643259690362570",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/34f9853925c040882ffa40f7ac94919e.png",
          rate: "9.2",
        },
        {
          name: "怪物猎人：崛起",
          count: "140",
          hasVoted: !1,
          spuId: "382508451647073772",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/f33339dde07aa4a4be4338530fcae37f.png",
          rate: "9.0",
        },
        {
          name: "蓓优妮塔3",
          count: "114",
          hasVoted: !1,
          spuId: "184643259690363249",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/95e47948b3ab7f841c6a3f3b38f6d633.jpeg",
          rate: "8.7",
        },
        {
          name: "超级马里奥派对",
          count: "113",
          hasVoted: !1,
          spuId: "184643259690362926",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/24e9d9fc03202dad49b5b1904a33b1e9.png",
          rate: "9.5",
        },
        {
          name: "火焰纹章：风花雪月",
          count: "101",
          hasVoted: !1,
          spuId: "184643259690362775",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/6e529add06b8b1408cc37f7e4bee7479.png",
          rate: "9.4",
        },
        {
          name: "任天堂明星大乱斗特别版",
          count: "96",
          hasVoted: !1,
          spuId: "184643259690362700",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/8537c83cbf874174b8a9cbcd3734241b.png",
          rate: "9.2",
        },
        {
          name: "宝可梦：剑",
          count: "90",
          hasVoted: !1,
          spuId: "184643259690363445",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/1c1c14ea1a39458342b7bd10307f48d5.png",
          rate: "8.8",
        },
        {
          name: "哈迪斯",
          count: "89",
          hasVoted: !1,
          spuId: "382505647033373790",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/276d5c115a5a7375520f4c455920e451.png",
          rate: "9.3",
        },
        {
          name: "空洞骑士",
          count: "69",
          hasVoted: !1,
          spuId: "184643259690363435",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/e593cab6cde515f4026da5148d3f7ceb.png",
          rate: "9.3",
        },
        {
          name: "异度之刃2",
          count: "68",
          hasVoted: !1,
          spuId: "184643259690362382",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9345dd910c711d479a62d22a211c10a0.png",
          rate: "9.2",
        },
        {
          name: "十三机兵防卫圈",
          count: "67",
          hasVoted: !1,
          spuId: "421822125553259301",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5e22a4a3872a8d6b97b036e1c88dcfc9.png",
          rate: "9.3",
        },
        {
          name: "舞力全开2022",
          count: "56",
          hasVoted: !0,
          spuId: "393203190796920116",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/65394d8f6f93841998f2f589b6adb89e.png",
          rate: "9.2",
        },
        {
          name: "胡闹厨房！全都好吃",
          count: "55",
          hasVoted: !0,
          spuId: "382760836810306927",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4b9484efeca983a8f541de6b13032478.png",
          rate: "9.2",
        },
        {
          name: "巫师3：狂猎 年度版",
          count: "49",
          hasVoted: !1,
          spuId: "184643259690362725",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a680a6856b8e8c0d9b42f4998fdaa7e0.png",
          rate: "9.1",
        },
        {
          name: "宝可梦盾",
          count: "43",
          hasVoted: !1,
          spuId: "184643259690362377",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/eeecb0bfd0b47a424f3e905c8e652a8e.png",
          rate: "8.7",
        },
        {
          name: "宝可梦：晶灿钻石",
          count: "42",
          hasVoted: !1,
          spuId: "390659045444521994",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2c35c9b5bf4b183ca7c872ded3543043.png",
          rate: "8.7",
        },
        {
          name: "八方旅人",
          count: "42",
          hasVoted: !1,
          spuId: "184643259690362363",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/4600dbd8c46dd4bc9c4715b4ccef7f4b.png",
          rate: "8.9",
        },
        {
          name: "宝可梦：出发吧！皮卡丘",
          count: "41",
          hasVoted: !1,
          spuId: "184643259690363186",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5db897cb9f9782d9aafe4adab83a1151.png",
          rate: "8.4",
        },
        {
          name: "逆转裁判 123 成步堂精选集",
          count: "39",
          hasVoted: !1,
          spuId: "184643259690363296",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/33f1364211fc814ff782b442663e4262.png",
          rate: "9.4",
        },
        {
          name: "勇者斗恶龙：创世小玩家2",
          count: "36",
          hasVoted: !1,
          spuId: "184643259690363203",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/9ae976dcdb74d68564ef84e703105535.png",
          rate: "9.5",
        },
        {
          name: "超级马里奥3D世界+狂怒世界",
          count: "35",
          hasVoted: !1,
          spuId: "382759874737596768",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/69d55f8663cce772d0950f8d5e4cc8a2.png",
          rate: "9.2",
        },
        {
          name: "尼尔机械纪元",
          count: "34",
          hasVoted: !1,
          spuId: "475626177302630320",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/273ddb11b969d0f68275f1da7e0d495b.jpeg",
          rate: "8.6",
        },
        {
          name: "星露谷物语",
          count: "33",
          hasVoted: !1,
          spuId: "184643259690363091",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/033ff83476358357faca3d0ff7b04f16.png",
          rate: "9.3",
        },
        {
          name: "塞尔达传说：织梦岛",
          count: "32",
          hasVoted: !1,
          spuId: "184643259690362724",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/50de0c56895bd7556007f72f61f3f72c.png",
          rate: "9.2",
        },
        {
          name: "马里奥派对：超级巨星",
          count: "31",
          hasVoted: !1,
          spuId: "394757668310548298",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/453b0ac8dfd6f815950ed36c737101b6.png",
          rate: "9.3",
        },
        {
          name: "暗黑破坏神3",
          count: "30",
          hasVoted: !1,
          spuId: "184643259690362738",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/13fc43ceb0e5e4b56ee0910a210977d0.png",
          rate: "9.1",
        },
        {
          name: "有氧拳击2",
          count: "28",
          hasVoted: !1,
          spuId: "241814149187850927",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/5f8c8b56e0718f837308e5c35fa47ba5.png",
          rate: "9.2",
        },
        {
          name: "三角战略",
          count: "25",
          hasVoted: !1,
          spuId: "408462097203287790",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/a556635f268aa31df468eff0699e2f21.png",
          rate: "9.0",
        },
        {
          name: "胡闹厨房2",
          count: "24",
          hasVoted: !1,
          spuId: "184643259690362740",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/b10706cc1a85b72327c86c054842e520.png",
          rate: "9.0",
        },
        {
          name: "密特罗德：生存恐惧",
          count: "23",
          hasVoted: !1,
          spuId: "394999225861042460",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/872b1ffd097963a2598155f327118a9a.png",
          rate: "9.4",
        },
        {
          name: "宝可梦：出发吧！伊布",
          count: "23",
          hasVoted: !1,
          spuId: "184643259690362461",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/2353d7a406ba275e576e4d27a100afd5.png",
          rate: "8.7",
        },
        {
          name: "异度神剑：终极版",
          count: "22",
          hasVoted: !1,
          spuId: "184643259690362864",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/0b277a4dff33d767e10baf06043a2264.jpg",
          rate: "9.0",
        },
        {
          name: "塞尔达无双：灾厄启示录",
          count: "22",
          hasVoted: !1,
          spuId: "241814149187850916",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c690c047e6d1ba4dfc0d2d3b12863825.png",
          rate: "8.4",
        },
        {
          name: "共生丘比特",
          count: "21",
          hasVoted: !1,
          spuId: "398430294845263138",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/d6d2ca17d497b97e4308dd7d060d1465.png",
          rate: "8.5",
        },
        {
          name: "新超级马里奥兄弟U 豪华版",
          count: "20",
          hasVoted: !1,
          spuId: "184643259690362465",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/6601765adbe98d5964508de198575c60.png",
          rate: "9.0",
        },
        {
          name: "勇者斗恶龙11S：寻觅逝去的时光",
          count: "20",
          hasVoted: !1,
          spuId: "184643259690362789",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/ad3da65b45326fccaa0b61dae84cd110.png",
          rate: "9.3",
        },
        {
          name: "宝可梦：明亮珍珠",
          count: "19",
          hasVoted: !1,
          spuId: "390665715528597999",
          coverUrl:
            "https://cdn.qiandaoapp.com/admins/c5e05d8fd413792cad5997248bca770b.png",
          rate: "8.9",
        },
      ];
      var b = { resources: f },
        l = {
          data() {
            return {
              loading: !1,
              part: 1,
              postContent: "",
              query: "",
              image: "",
              voteResult: b.resources,
              finalOptions: [],
              options: h.resources,
              count: 0,
              hasVoted: !1,
              showRank: !0,
            };
          },
          computed: { ...Object(p["mapState"])("user", ["me"]) },
          async mounted() {
            wx.miniProgram.postMessage({
              data: { shareOptions: { title: "千岛电玩2022年度游戏大赏" } },
            });
          },
          methods: {
            logIn() {
              const a = "/modules/pages/common-login/index";
              (Object(r["h"])() || Object(r["d"])()) &&
                this.navigateTo({ url: a });
            },
            choose(a) {
              "{}" === JSON.stringify(this.me)
                ? this.logIn()
                : this.options[a].choose
                ? (this.count--,
                  (this.options[a].choose = !this.options[a].choose))
                : this.count < 10
                ? (this.count++,
                  (this.options[a].choose = !this.options[a].choose))
                : this.$toast.show({ title: "最多选择十个" });
            },
            next() {
              0 === this.count
                ? this.$toast.show({ title: "请先选择游戏" })
                : ((this.finalOptions = this.options.filter((a) => a.choose)),
                  (this.part = 2),
                  (this.showRank = !0),
                  this.drawImage(),
                  this.vote());
            },
            viewPoster() {
              (this.part = 2),
                (this.showRank = !1),
                this.drawImage(),
                window.scrollTo({ top: 0, behavior: "smooth" });
            },
            drawImage() {
              this.$nextTick(() => {
                setTimeout(() => {
                  t()(document.getElementById("canvas"), {
                    allowTaint: !1,
                    useCORS: !0,
                    backgroundColor: "white",
                    scale: 3,
                  })
                    .then((a) => {
                      a.toBlob(async (a) => {
                        const c = Object(r["i"])(),
                          e = new File([a], c + ".jpeg"),
                          o = await Object(s["b"])(e, "activity-temp.image");
                        (this.image = o.url), this.getVoteResult();
                      }, "image/jpeg");
                    })
                    .catch(() => {});
                }, 3e3);
              });
            },
            async vote() {
              const a = { options: [], topicId: "540632452947837109" };
              for (var c = 0; c < this.finalOptions.length; c++)
                a.options.push({ name: this.finalOptions[c].name });
              try {
                await i["a"].vote("540632452947837115", a);
              } catch (e) {
                console.log(e);
              }
              if (this.postContent) {
                const a = {
                  attachments: [],
                  content: this.postContent,
                  labels: [],
                  mentionRelatedObjects: {},
                  privacy: "public",
                  reviewStatistic: "[]",
                  shouldBindPollVote: !0,
                  topicId: "540632452947837109",
                };
                try {
                  await m["a"].createPostArticle(a);
                } catch (e) {
                  console.log(e);
                }
              }
            },
            async getVoteResult() {
              try {
                const c = await i["a"].getDetail("540632452947837109");
                this.voteResult = c.poll.options;
                for (var a = 0; a < c.poll.options.length; a++)
                  (this.voteResult[a].spuId = this.options.filter(
                    (e) => e.name === c.poll.options[a].name
                  )[0].spuId),
                    (this.voteResult[a].coverUrl = this.options.filter(
                      (e) => e.name === c.poll.options[a].name
                    )[0].coverUrl),
                    (this.voteResult[a].rate = this.options.filter(
                      (e) => e.name === c.poll.options[a].name
                    )[0].rate);
                this.voteResult.sort(this.compare("count"));
              } catch (c) {
                console.log(c);
              }
            },
            compare(a) {
              return function (c, e) {
                var o = c[a],
                  n = e[a];
                return n - o;
              };
            },
            jumpToTopic() {
              const a = "/pages-community/post/list?topicId=540632452947837109";
              (Object(r["h"])() || Object(r["d"])()) &&
                this.navigateTo({ url: a });
            },
            handleSpuClick(a) {
              const c = `/pages-market/spu/index?spuId=${a}&from=vote-switch-2022`;
              (Object(r["h"])() || Object(r["d"])()) &&
                this.navigateTo({ url: c });
            },
            jumpToLottery() {
              const a =
                "/modules/pages/lottery/event?topicId=540882462994074573";
              (Object(r["h"])() || Object(r["d"])()) &&
                this.navigateTo({ url: a });
            },
          },
        },
        g = l,
        v = (e("c882"), e("0c7c")),
        q = Object(v["a"])(g, o, n, !1, null, null, null);
      c["default"] = q.exports;
    },
  },
]);
