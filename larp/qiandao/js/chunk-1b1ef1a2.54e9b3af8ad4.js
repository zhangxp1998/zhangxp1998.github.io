(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-1b1ef1a2"],
  {
    "0a56": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "favorite-pokemon" }, [
            1 === this.part
              ? e(
                  "div",
                  [
                    t.selectedCount > 0
                      ? e(
                          "div",
                          { staticClass: "reset", on: { click: t.reset } },
                          [t._v("全部重置")]
                        )
                      : t._e(),
                    e(
                      "div",
                      { staticClass: "types-list" },
                      [
                        t._l(this.types, function (a, s) {
                          return [
                            e("div", { key: s, staticClass: "type" }, [
                              e("div", { staticClass: "type-name" }, [
                                t._v(t._s(a.name)),
                              ]),
                              e(
                                "div",
                                {
                                  staticClass: "pokemon",
                                  on: {
                                    click: function (e) {
                                      return t.handleModalClick(s);
                                    },
                                  },
                                },
                                [
                                  e("img", {
                                    staticClass: "pokemon-cover",
                                    attrs: { src: a.cover, alt: "cover" },
                                  }),
                                  e("div", { staticClass: "pokemon-name" }, [
                                    t._v(t._s(a.pokemon)),
                                  ]),
                                ]
                              ),
                            ]),
                          ];
                        }),
                        e("div", { staticClass: "want-tip" }, [
                          t._v("选中的戏剧，将同时标记为“看过”"),
                        ]),
                      ],
                      2
                    ),
                    e(
                      "div",
                      {
                        class: [
                          "render-btn",
                          { finish: 14 === t.selectedCount },
                        ],
                        on: { click: t.handleRenderBtn },
                      },
                      [
                        t._v(
                          " 下一步（已选 " + t._s(t.selectedCount) + "/14） "
                        ),
                      ]
                    ),
                    e("transition", { attrs: { name: "fade" } }, [
                      t.isOpenModal
                        ? e("div", { staticClass: "modal" }, [
                            e("div", {
                              staticClass: "mask",
                              on: { click: t.handleMaskClick },
                            }),
                            e("div", { staticClass: "spu-group" }, [
                              e("div", [
                                e("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: t.query,
                                      expression: "query",
                                    },
                                  ],
                                  staticClass: "searchbox",
                                  attrs: { placeholder: "输入舞台剧名称搜索" },
                                  domProps: { value: t.query },
                                  on: {
                                    input: function (e) {
                                      e.target.composing ||
                                        (t.query = e.target.value);
                                    },
                                  },
                                }),
                                "" === this.query
                                  ? e(
                                      "div",
                                      { staticClass: "spu-list" },
                                      [
                                        this.myList.length > 0
                                          ? t._l(this.myList, function (a, s) {
                                              return e(
                                                "div",
                                                {
                                                  key: s,
                                                  staticClass: "spu",
                                                  on: {
                                                    click: function (e) {
                                                      return t.handleSelectSpu(
                                                        a.id,
                                                        a.name,
                                                        a.image
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  e("img", {
                                                    staticClass: "spu-cover",
                                                    attrs: { src: a.image },
                                                  }),
                                                  e(
                                                    "div",
                                                    { staticClass: "spu-name" },
                                                    [t._v(t._s(a.name))]
                                                  ),
                                                ]
                                              );
                                            })
                                          : t._e(),
                                      ],
                                      2
                                    )
                                  : e(
                                      "div",
                                      { staticClass: "spu-list" },
                                      t._l(this.spuList, function (a, s) {
                                        return e(
                                          "div",
                                          {
                                            key: s,
                                            staticClass: "spu",
                                            on: {
                                              click: function (e) {
                                                return t.handleSelectSpu(
                                                  a.id,
                                                  a.name,
                                                  a.cover
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e("img", {
                                              staticClass: "spu-cover",
                                              attrs: { src: a.cover },
                                            }),
                                            e(
                                              "div",
                                              { staticClass: "spu-name" },
                                              [t._v(t._s(a.name))]
                                            ),
                                          ]
                                        );
                                      }),
                                      0
                                    ),
                              ]),
                            ]),
                          ])
                        : t._e(),
                    ]),
                  ],
                  1
                )
              : t._e(),
            2 === this.part
              ? e(
                  "div",
                  { staticClass: "final", attrs: { id: "canvas" } },
                  [
                    t.image
                      ? [
                          e("img", {
                            staticClass: "draw",
                            attrs: { src: t.image },
                          }),
                        ]
                      : e("div", { staticClass: "paper" }, [
                          e("img", {
                            staticClass: "poster-title",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/interior/images/786f896f1c6958b16b83a9294d5d03a8.png",
                            },
                          }),
                          e("img", {
                            staticClass: "poster-side left",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/interior/images/ae19d483caab387591427d5a961f2a70.png",
                            },
                          }),
                          e("img", {
                            staticClass: "poster-side right",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/interior/images/f5997573c8e138d56f1dedfffd6a3fd9.png",
                            },
                          }),
                          e("img", {
                            staticClass: "poster-bg",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/interior/images/9c0c4fe4da049109d833e8ea66996b8a.jpg",
                            },
                          }),
                          t._m(0),
                          e(
                            "div",
                            { staticClass: "image-list" },
                            [
                              t._l(this.types, function (a, s) {
                                return [
                                  e(
                                    "div",
                                    { key: s, staticClass: "paper-type" },
                                    [
                                      e("div", { staticClass: "pokemon" }, [
                                        e(
                                          "div",
                                          { staticClass: "pokemon-cover" },
                                          [
                                            e("img", {
                                              attrs: {
                                                src: a.cover,
                                                alt: "cover",
                                              },
                                            }),
                                          ]
                                        ),
                                        e(
                                          "div",
                                          { staticClass: "pokemon-name" },
                                          [t._v(t._s(a.pokemon))]
                                        ),
                                      ]),
                                      e("div", { staticClass: "type-name" }, [
                                        t._v(t._s(a.name)),
                                      ]),
                                    ]
                                  ),
                                ];
                              }),
                              t._m(1),
                            ],
                            2
                          ),
                        ]),
                  ],
                  2
                )
              : t._e(),
            2 === this.part
              ? e(
                  "div",
                  { staticClass: "footer" },
                  [
                    t.image
                      ? [
                          e("div", { staticClass: "tip" }, [
                            t._v("-- 长 按 上 方 海 报 保 存 --"),
                          ]),
                          e(
                            "div",
                            {
                              staticClass: "goback-btn",
                              on: { click: t.goBack },
                            },
                            [t._v("重新选择")]
                          ),
                        ]
                      : e("div", { staticClass: "loader" }, [
                          t._v("图片预览中…"),
                        ]),
                  ],
                  2
                )
              : t._e(),
          ]);
        },
        r = [
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "miniprogram" }, [
              e("img", {
                staticStyle: { width: "12px", "vertical-align": "middle" },
                attrs: {
                  src: "https://cdn.qiandaoapp.com/interior/images/46ea253ecfa01ab005a9e9b06b931298.png",
                  alt: "search",
                },
              }),
              t._v(" 在“千岛”App搜索“舞台剧岛” "),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("div", { staticClass: "qrcode" }, [
              e("img", {
                staticClass: "image",
                attrs: {
                  src: "https://cdn.qiandaoapp.com/interior/images/fa88034d126ceeb2f27f9d0193602c63.png",
                },
              }),
              e("span", [
                e("span", { staticStyle: { "font-size": "18px" } }, [
                  t._v("▲"),
                ]),
                t._v(" 长按扫码 "),
                e("br"),
                t._v(" 一键作图 "),
              ]),
            ]);
          },
        ],
        i = a("ccbb"),
        n = a("c0e9"),
        o = a.n(n),
        c = a("2f62"),
        p = a("7cb2"),
        u = a("ed08"),
        d = a("684b"),
        l = a("dd8a"),
        g = a("0bfa"),
        m = {
          data() {
            return {
              types: [
                {
                  name: "入坑作",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最喜欢",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "看最多次",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最想安利",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "冷门最爱",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳剧本",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳舞美",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最爱演员",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最过誉",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最离谱",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "第一次现场",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "想看但没有",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "性价比最低",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最近一部",
                  pokemon: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
              ],
              loading: !1,
              spuList: [],
              myList: [],
              recommendList: !1,
              isOpenModal: !1,
              selectedIndex: 0,
              query: "",
              image: "",
              part: 1,
              showIslandModal: !1,
              postId: "",
            };
          },
          computed: {
            ...Object(c["mapState"])("user", ["me"]),
            selectedCount() {
              const t = this.types.filter((t) => "点击选择" !== t.pokemon);
              return t.length;
            },
          },
          watch: {
            query(t, e) {
              (this.spuList = []), this.getSpuList();
            },
          },
          methods: {
            logIn() {
              const t = "/modules/pages/common-login/index";
              (Object(u["h"])() || Object(u["d"])()) &&
                this.navigateTo({ url: t });
            },
            handleModalClick(t) {
              "{}" === JSON.stringify(this.me) && this.logIn(),
                (this.selectedIndex = t),
                (this.spuList = []),
                (this.isOpenModal = !0),
                this.getSpuList();
            },
            async getSpuList() {
              if (((this.loading = !0), !this.recommendList)) {
                var t = {
                  limit: 18,
                  offset: 0,
                  name: "热门舞台剧",
                  tagId: 0,
                  type: "SPU",
                };
                try {
                  const e = await l["a"].getSpuWaterfall(t);
                  "{}" !== JSON.stringify(e.data) &&
                    (this.myList = e.data.list),
                    (this.recommendList = !0);
                } catch (a) {
                  console.error(a);
                }
              }
              if ("" !== this.query) {
                const t = {
                  q: this.query,
                  "start-index": 0,
                  "max-results": 100,
                  typeIds: "1536235",
                  scene: "plugin-stage-show-life",
                };
                try {
                  const a = await i["a"].searchSpuInTag(t),
                    s = a.data.items;
                  for (var e = 0; e < s.length; e++)
                    s[e].cover = s[e].imgs.cover;
                  this.spuList = this.spuList.concat(s);
                } catch (a) {
                  console.error(a);
                }
              }
              this.loading = !1;
            },
            handleMaskClick() {
              (this.isOpenModal = !1),
                (this.showIslandModal = !1),
                (this.query = "");
            },
            handleSelectSpu(t, e, a) {
              (this.types[this.selectedIndex].id = t),
                (this.types[this.selectedIndex].pokemon = e),
                (this.types[this.selectedIndex].cover = a),
                this.handleMaskClick();
            },
            handleRenderBtn() {
              this.selectedCount < 14
                ? this.$toast.show({ title: "还有未选完的" })
                : this.render();
            },
            reset() {
              for (var t = 0; t < this.types.length; t++)
                (this.types[t].pokemon = "点击选择"),
                  (this.types[t].cover =
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg");
            },
            async render() {
              (this.part = 2), this.drawImage();
              for (var t = 0; t < this.types.length; t++) {
                const e = {
                  action: "CREATE",
                  meta: "[]",
                  rating: null,
                  spuId: this.types[t].id,
                };
                try {
                  await d["a"].mark(e);
                } catch (a) {
                  console.error(a);
                }
              }
              const e =
                '[{"title":"观剧生涯喜好表结果收集","form":[{"label":"入坑作","component":"input","slotNextLine":true,"name":"template","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[0].id +
                '"},{"label":"最喜欢","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[1].id +
                '"},{"label":"看最多次","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[2].id +
                '"},{"label":"最想安利","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[3].id +
                '"},{"label":"冷门最爱","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[4].id +
                '"},{"label":"最佳剧本","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[5].id +
                '"},{"label":"最佳舞美","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[6].id +
                '"},{"label":"最爱演员","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[7].id +
                '"},{"label":"最过誉","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[8].id +
                '"},{"label":"最离谱","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[9].id +
                '"},{"label":"第一次现场","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[10].id +
                '"},{"label":"想看但没有","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[11].id +
                '"},{"label":"性价比最低","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[12].id +
                '"},{"label":"最近一部","component":"input","slotNextLine":true,"name":"score","required":true,"meta":{"type":"text","placeholder":"请填写"},"value":"' +
                this.types[13].id +
                '"}]}]';
              console.log(e);
              try {
                await g["a"].submit({
                  content: e,
                  templateId: "600737754296558743",
                });
              } catch (a) {
                console.error(a);
              }
            },
            drawImage() {
              this.$nextTick(() => {
                setTimeout(() => {
                  o()(document.getElementById("canvas"), {
                    allowTaint: !1,
                    useCORS: !0,
                    backgroundColor: "white",
                  })
                    .then((t) => {
                      t.toBlob(async (t) => {
                        const e = Object(u["i"])(),
                          a = new File([t], e + ".jpeg"),
                          s = await Object(p["b"])(a, "activity-temp.image");
                        this.image = s.url + "!lfit_w1080_jpg";
                      }, "image/jpeg");
                    })
                    .catch(() => {});
                }, 3e3);
              });
            },
            goBack() {
              (this.part = 1), (this.image = "");
            },
          },
        },
        h = m,
        f = (a("6667"), a("0c7c")),
        v = Object(f["a"])(h, s, r, !1, null, null, null);
      e["default"] = v.exports;
    },
    "0bfa": function (t, e, a) {
      "use strict";
      var s = a("0ef7");
      e["a"] = {
        submit(t) {
          return s["j"].post("/echo-form/form/post", t);
        },
      };
    },
    6667: function (t, e, a) {
      "use strict";
      a("b4de");
    },
    "684b": function (t, e, a) {
      "use strict";
      var s = a("0ef7");
      e["a"] = {
        getPostAnalysis(t) {
          return s["d"].get("/analysis/" + t);
        },
        createPostReviewV3(t) {
          return s["h"].post("/gactus/post-review-v3", t);
        },
        updatePostReviewV3(t) {
          return s["h"].put("/gactus/post-review-v3", t);
        },
        deleteSpuMark(t) {
          return s["h"].post("/gactus/delete-spu-mark", t);
        },
        createPostArticle(t) {
          return s["h"].post("/gactus/posts-article", t);
        },
        getPostListByTopic(t) {
          return s["h"].post("/gactus/topics/posts-v3", t);
        },
        getPostListByTag(t) {
          return s["h"].post("/gactus/posts/by-tag-v4", t);
        },
        mark(t) {
          return s["h"].post("/gactus-web/v1/mark/edit", t);
        },
        createPost(t) {
          return s["h"].post("/gactus-web/post/create", t);
        },
        createPostStandard(t) {
          return s["h"].post("/gactus-web/post/standard/create", t);
        },
        updatePostStandard(t) {
          return s["h"].post("/gactus-web/post/standard/update", t);
        },
        comment(t) {
          return s["h"].post("/cactus-api/comments", t);
        },
        getUserHobbyMark(t) {
          return s["h"].post("/gactus/user-hobby-mark", t);
        },
        getUserMark(t) {
          return s["h"].post("/gactus-web/v1/get-user-marks", t);
        },
        getUserHobbyList(t) {
          return s["h"].get("/gactus-web/v1/interest/list", { uid: t });
        },
        gstoneGames(t) {
          return s["h"].post("/config-go/redirect/gstoneGames", t);
        },
      };
    },
    "7cb2": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return n;
      }),
        a.d(e, "c", function () {
          return o;
        }),
        a.d(e, "a", function () {
          return c;
        });
      var s = a("0ef7"),
        r = a("0d94"),
        i = a("a37c");
      async function n(t, e = "interior-admin.image") {
        const a = Object(r["e"])({
          isProd: i["e"],
          async customApiCall(t) {
            var e;
            const a = await s["h"].post("/uploader/gene-post-object-sign", t);
            return null === (e = a.data) || void 0 === e ? void 0 : e[0];
          },
        });
        return a({ file: t, scene: e });
      }
      function o(t) {
        return s["h"].get("/uploader/file-space/get", t);
      }
      function c(t, e = "interior-admin.image") {
        const a = Object(r["e"])({
          isProd: i["e"],
          async customApiCall(t) {
            var e;
            const a = await s["h"].post(
              "/uploader/anonymous/gene-post-object-sign",
              t
            );
            return null === (e = a.data) || void 0 === e ? void 0 : e[0];
          },
        });
        return a({ file: t, scene: e });
      }
    },
    b4de: function (t, e, a) {},
    ccbb: function (t, e, a) {
      "use strict";
      var s = a("0ef7");
      e["a"] = {
        getStandardProducts(t) {
          return s["p"].get(`/spus/${t}/standard-products`);
        },
        getSPUs(t) {
          return s["p"].get("/v2/spus", t);
        },
        getSingleSpu(t, e) {
          return s["p"].get("/v2/spus/" + t, e);
        },
        getUserPosters(t) {
          return s["h"].post("/c2c-web/v1/poster/get-user-posters", t);
        },
        doProductsOffSale(t) {
          return s["h"].post("/c2c-web/v1/c2c/products/off-sale", t);
        },
        plastSearchCategory(t) {
          return s["h"].get("/plast/search/category/v3", t);
        },
        createUserPoster(t) {
          return s["h"].post("/c2c-web/v1/poster/create-user-poster", t);
        },
        getSPUSpecs(t) {
          return s["p"].get(`/spus/${t}/specs`);
        },
        updateC2cProductsByCategory(t) {
          return s["h"].post("/c2c/products/m-update", t);
        },
        updateProductMulti(t) {
          return s["h"].post("/c2c/products/multi-create", t);
        },
        createProductMulti(t) {
          return s["h"].post("/c2c/products/m-create-update", t);
        },
        getProductsByCategory(t) {
          return s["h"].get("/c2c/products/by-category", t);
        },
        getCategoryDetail(t, e) {
          return s["p"].get("/v2/categories/" + t, e);
        },
        getCategories(t) {
          return s["p"].get("/v2/categories", t);
        },
        getRecommendCategories(t) {
          return s["p"].get(`/v2/categories/${t}/recommend`);
        },
        getCategoryTags(t) {
          return s["p"].get(`/v2/categories/${t}/config`);
        },
        getTag(t, e) {
          return s["p"].get("/tags/" + t, e);
        },
        getHotTags(t) {
          return s["p"].get(`/tags/${t}/config`);
        },
        getTags(t) {
          return s["p"].get("/tags", t);
        },
        searchCategories(t) {
          return s["p"].get("/v2/categories", t);
        },
        getSettings() {
          return s["p"].get("/settings");
        },
        changeWishes(t) {
          return s["p"].post("/wish-list", t);
        },
        updateUserSettings(t) {
          return s["p"].put("/settings", t);
        },
        getPosterColumnConfig(t) {
          return s["l"].get("/action/get-products-poster", t);
        },
        getPosterThemes(t) {
          return s["l"].get("/action/get-poster-themes", t, {
            isErrorDefaultTip: !1,
          });
        },
        getWishList(t) {
          return s["p"].get("/wish-list", t, { isErrorDefaultTip: !1 });
        },
        getWishMatches(t) {
          return s["p"].get("/products/match/wish-list", t, {
            isErrorDefaultTip: !1,
          });
        },
        getDemandProductList(t) {
          return s["p"].get("/products/match/demand-list", t);
        },
        getTradeInfo(t) {
          return s["p"].post("/action/get-trade-info", t);
        },
        get360DegImages(t) {
          return s["p"].get(`/spus/${t}/360-degree-images`);
        },
        getBarginSpus(t) {
          return s["p"].post("/stock-order/bargin", t);
        },
        getSpecsByMPName(t) {
          return s["p"].get("/specs/aciton/get-by-app-name", t);
        },
        getDistribution(t) {
          return s["p"].get("/feeds/chaowan", t);
        },
        getSellingCategories(t) {
          return s["p"].get("/products/action/get-selling-categories", t);
        },
        getCategoryCount(t) {
          return s["p"].get("/products/action/get-category-product-count", t);
        },
        getSpuList(t) {
          return s["h"].post("/treasure/spus/search/simple-info", t);
        },
        getSpuHeader(t) {
          return s["h"].get("/treasure/flora/v2/spu/simpleInfo", t);
        },
        getSpuDetails(t) {
          return s["h"].get("/treasure/flora/v1/spu/detailInfo", t);
        },
        getTagList(t) {
          return s["h"].get("/treasure/tags", t);
        },
        getTagDetails(t) {
          return s["h"].get("/treasure/flora/v1/tag/detailInfo", t);
        },
        getTagDetailsV2(t) {
          return s["h"].get("/treasure/flora/v2/tag/simpleInfo", t);
        },
        searchSpuInTag(t) {
          return s["h"].get("/plast/search/spu", t);
        },
        searchTag(t) {
          return s["h"].get("/plast/search/tag", t);
        },
        getXiaokaWebConfig() {
          return s["e"].get("/vinyl/web.json");
        },
        getTagsV2(t) {
          return s["h"].get("/armory/entry/tags", t);
        },
      };
    },
    dd8a: function (t, e, a) {
      "use strict";
      var s = a("0ef7");
      e["a"] = {
        myPokemon(t) {
          return s["q"].get("/v1/pokemon/my", t);
        },
        nextStep(t) {
          return s["q"].post("/v1/pokemon/next-step", t);
        },
        searchSpuByImage(t) {
          return s["q"].post("/v1/image/search/spu", t);
        },
        searchSpuByAggregateImages(t) {
          return s["q"].post("/v1/image/search/multi/spu/v2", t);
        },
        ocr(t) {
          return s["j"].post("/z/stargazing/z/ocr", t);
        },
        getQrcode(t) {
          return s["j"].get("/z/poster-web/wechat/mp-qrcode", t);
        },
        getSpuOpposite(t) {
          return s["j"].post("/treasure/spus/opposite/list", t);
        },
        getSpuWithRelated(t) {
          return s["j"].post("/treasure/v1/search/spu/with/related", t);
        },
        getSpuWaterfall(t) {
          return s["j"].get("/treasure/v1/waterfall/list", t);
        },
        fetchStep2BizConfig() {
          return s["j"].get(
            "https://config-cdn.qiandaoapp.com/mp-common/pluginsBizConfig.json"
          );
        },
        getRankInfo(t) {
          return s["j"].get("/treasure/flora/v1/rank", t);
        },
        getByDistributedTagIds(t) {
          return s["j"].post(
            "/treasure/v1/public-relations/byDistributedTagIds",
            t
          );
        },
        getPalworld(t) {
          return s["g"].get("/palu/check", t);
        },
      };
    },
  },
]);
