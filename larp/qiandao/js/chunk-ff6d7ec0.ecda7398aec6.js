(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-ff6d7ec0"],
  {
    2233: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = function () {
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
                        t._l(this.types, function (s, a) {
                          return [
                            e("div", { key: a, staticClass: "type" }, [
                              e("div", { staticClass: "type-name" }, [
                                t._v(t._s(s.name)),
                              ]),
                              e(
                                "div",
                                {
                                  staticClass: "pokemon",
                                  on: {
                                    click: function (e) {
                                      return t.handleModalClick(a);
                                    },
                                  },
                                },
                                [
                                  e("img", {
                                    staticClass: "pokemon-cover",
                                    attrs: { src: s.cover, alt: "cover" },
                                  }),
                                  e("div", { staticClass: "pokemon-name" }, [
                                    t._v(t._s(s.pokemon)),
                                  ]),
                                ]
                              ),
                            ]),
                          ];
                        }),
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
                                  attrs: { placeholder: "输入剧本名称搜索" },
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
                                          ? [
                                              e(
                                                "div",
                                                {
                                                  staticStyle: {
                                                    "margin-bottom": "20px",
                                                  },
                                                },
                                                [t._v("我玩过的：")]
                                              ),
                                              t._l(
                                                this.myList,
                                                function (s, a) {
                                                  return e(
                                                    "div",
                                                    {
                                                      key: a,
                                                      staticClass: "spu",
                                                      on: {
                                                        click: function (e) {
                                                          return t.handleSelectSpu(
                                                            s.name,
                                                            s.spuImg
                                                          );
                                                        },
                                                      },
                                                    },
                                                    [
                                                      e("img", {
                                                        staticClass:
                                                          "spu-cover",
                                                        attrs: {
                                                          src: s.spuImg,
                                                        },
                                                      }),
                                                      e(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "spu-name",
                                                        },
                                                        [t._v(t._s(s.name))]
                                                      ),
                                                    ]
                                                  );
                                                }
                                              ),
                                            ]
                                          : t._e(),
                                      ],
                                      2
                                    )
                                  : e(
                                      "div",
                                      { staticClass: "spu-list" },
                                      t._l(this.spuList, function (s, a) {
                                        return e(
                                          "div",
                                          {
                                            key: a,
                                            staticClass: "spu",
                                            on: {
                                              click: function (e) {
                                                return t.handleSelectSpu(
                                                  s.name,
                                                  s.cover
                                                );
                                              },
                                            },
                                          },
                                          [
                                            e("img", {
                                              staticClass: "spu-cover",
                                              attrs: { src: s.cover },
                                            }),
                                            e(
                                              "div",
                                              { staticClass: "spu-name" },
                                              [t._v(t._s(s.name))]
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
                              src: "https://cdn.qiandaoapp.com/interior/images/6bb1fb40c1eb1effa06261d7346a513f.png",
                            },
                          }),
                          e("img", {
                            staticClass: "poster-bg-1",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/interior/images/a506d03cb76b75ed2243039724b429cc.png",
                            },
                          }),
                          e("img", {
                            staticClass: "poster-bg-2",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/interior/images/a506d03cb76b75ed2243039724b429cc.png",
                            },
                          }),
                          t._m(0),
                          e(
                            "div",
                            { staticClass: "image-list" },
                            [
                              t._l(this.types, function (s, a) {
                                return [
                                  e(
                                    "div",
                                    { key: a, staticClass: "paper-type" },
                                    [
                                      e("div", { staticClass: "type-name" }, [
                                        t._v(t._s(s.name)),
                                      ]),
                                      e("div", { staticClass: "pokemon" }, [
                                        e("img", {
                                          staticClass: "pokemon-cover",
                                          attrs: { src: s.cover, alt: "cover" },
                                        }),
                                        e(
                                          "div",
                                          { staticClass: "pokemon-name" },
                                          [t._v(t._s(s.pokemon))]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ];
                              }),
                              e("div", { staticClass: "qrcode" }, [
                                this.me && this.me.avatar
                                  ? e("img", {
                                      staticClass: "avatar",
                                      attrs: {
                                        src: this.me.avatar,
                                        alt: "avatar",
                                      },
                                    })
                                  : t._e(),
                                e("img", {
                                  staticClass: "image",
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/6078aaee2312bae854213ff8348f0c99.png",
                                  },
                                }),
                                t._m(1),
                              ]),
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
              t._v(' vx"千岛剧本杀"小程序 '),
            ]);
          },
          function () {
            var t = this,
              e = t._self._c;
            return e("span", [t._v(" 长按扫码 "), e("br"), t._v(" 一键作图 ")]);
          },
        ],
        i = s("ccbb"),
        c = s("c0e9"),
        n = s.n(c),
        o = s("2f62"),
        p = s("7cb2"),
        g = s("ed08"),
        u = (s("cb35"), s("684b")),
        d = {
          data() {
            return {
              types: [
                {
                  name: "入坑本",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最喜欢",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最讨厌",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最感动",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最坐牢",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最治愈",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最过誉",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳封面",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳角色",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳故事",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "时间最长",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最新玩过",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "小众最爱",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "性价比最低",
                  pokemon: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
              ],
              loading: !1,
              spuList: [],
              myList: [],
              getMyList: !1,
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
            ...Object(o["mapState"])("user", ["me"]),
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
              (Object(g["h"])() || Object(g["d"])()) &&
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
              if (((this.loading = !0), !this.getMyList)) {
                var t = {
                  hobbyId: "1000225",
                  limit: 100,
                  offset: 0,
                  userId: this.me.id,
                };
                try {
                  const e = await u["a"].getUserHobbyMark(t);
                  "{}" !== JSON.stringify(e.data) &&
                    (this.myList = e.data.markDetails.map((t) => t.spu)),
                    (this.getMyList = !0);
                } catch (s) {
                  console.error(s);
                }
              }
              if ("" !== this.query) {
                const t = {
                  q: this.query,
                  "start-index": 0,
                  "max-results": 100,
                  typeIds: "1000225",
                  scene: "plugin-drama-life",
                };
                try {
                  const s = await i["a"].searchSpuInTag(t),
                    a = s.data.items;
                  for (var e = 0; e < a.length; e++)
                    a[e].cover = a[e].imgs.cover;
                  this.spuList = this.spuList.concat(a);
                } catch (s) {
                  console.error(s);
                }
              }
              this.loading = !1;
            },
            handleMaskClick() {
              (this.isOpenModal = !1),
                (this.showIslandModal = !1),
                (this.query = "");
            },
            handleSelectSpu(t, e) {
              (this.types[this.selectedIndex].pokemon = t),
                (this.types[this.selectedIndex].cover = e),
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
            render() {
              (this.part = 2), this.drawImage();
            },
            drawImage() {
              this.$nextTick(() => {
                setTimeout(() => {
                  n()(document.getElementById("canvas"), {
                    allowTaint: !1,
                    useCORS: !0,
                    backgroundColor: "white",
                  })
                    .then((t) => {
                      t.toBlob(async (t) => {
                        const e = Object(g["i"])(),
                          s = new File([t], e + ".jpeg"),
                          a = await Object(p["b"])(s, "activity-temp.image");
                        this.image = a.url;
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
        l = d,
        m = (s("a26a"), s("0c7c")),
        h = Object(m["a"])(l, a, r, !1, null, null, null);
      e["default"] = h.exports;
    },
    "67a8": function (t, e, s) {},
    "684b": function (t, e, s) {
      "use strict";
      var a = s("0ef7");
      e["a"] = {
        getPostAnalysis(t) {
          return a["d"].get("/analysis/" + t);
        },
        createPostReviewV3(t) {
          return a["h"].post("/gactus/post-review-v3", t);
        },
        updatePostReviewV3(t) {
          return a["h"].put("/gactus/post-review-v3", t);
        },
        deleteSpuMark(t) {
          return a["h"].post("/gactus/delete-spu-mark", t);
        },
        createPostArticle(t) {
          return a["h"].post("/gactus/posts-article", t);
        },
        getPostListByTopic(t) {
          return a["h"].post("/gactus/topics/posts-v3", t);
        },
        getPostListByTag(t) {
          return a["h"].post("/gactus/posts/by-tag-v4", t);
        },
        mark(t) {
          return a["h"].post("/gactus-web/v1/mark/edit", t);
        },
        createPost(t) {
          return a["h"].post("/gactus-web/post/create", t);
        },
        createPostStandard(t) {
          return a["h"].post("/gactus-web/post/standard/create", t);
        },
        updatePostStandard(t) {
          return a["h"].post("/gactus-web/post/standard/update", t);
        },
        comment(t) {
          return a["h"].post("/cactus-api/comments", t);
        },
        getUserHobbyMark(t) {
          return a["h"].post("/gactus/user-hobby-mark", t);
        },
        getUserMark(t) {
          return a["h"].post("/gactus-web/v1/get-user-marks", t);
        },
        getUserHobbyList(t) {
          return a["h"].get("/gactus-web/v1/interest/list", { uid: t });
        },
        gstoneGames(t) {
          return a["h"].post("/config-go/redirect/gstoneGames", t);
        },
      };
    },
    "7cb2": function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return c;
      }),
        s.d(e, "c", function () {
          return n;
        }),
        s.d(e, "a", function () {
          return o;
        });
      var a = s("0ef7"),
        r = s("0d94"),
        i = s("a37c");
      async function c(t, e = "interior-admin.image") {
        const s = Object(r["e"])({
          isProd: i["e"],
          async customApiCall(t) {
            var e;
            const s = await a["h"].post("/uploader/gene-post-object-sign", t);
            return null === (e = s.data) || void 0 === e ? void 0 : e[0];
          },
        });
        return s({ file: t, scene: e });
      }
      function n(t) {
        return a["h"].get("/uploader/file-space/get", t);
      }
      function o(t, e = "interior-admin.image") {
        const s = Object(r["e"])({
          isProd: i["e"],
          async customApiCall(t) {
            var e;
            const s = await a["h"].post(
              "/uploader/anonymous/gene-post-object-sign",
              t
            );
            return null === (e = s.data) || void 0 === e ? void 0 : e[0];
          },
        });
        return s({ file: t, scene: e });
      }
    },
    a26a: function (t, e, s) {
      "use strict";
      s("67a8");
    },
    cb35: function (t, e, s) {
      "use strict";
      var a = s("0ef7");
      e["a"] = {
        detail(t) {
          return a["h"].get("/treasure/island/detail?id=" + t);
        },
        join(t) {
          return a["h"].post("/treasure/island/join", { id: t });
        },
      };
    },
    ccbb: function (t, e, s) {
      "use strict";
      var a = s("0ef7");
      e["a"] = {
        getStandardProducts(t) {
          return a["p"].get(`/spus/${t}/standard-products`);
        },
        getSPUs(t) {
          return a["p"].get("/v2/spus", t);
        },
        getSingleSpu(t, e) {
          return a["p"].get("/v2/spus/" + t, e);
        },
        getUserPosters(t) {
          return a["h"].post("/c2c-web/v1/poster/get-user-posters", t);
        },
        doProductsOffSale(t) {
          return a["h"].post("/c2c-web/v1/c2c/products/off-sale", t);
        },
        plastSearchCategory(t) {
          return a["h"].get("/plast/search/category/v3", t);
        },
        createUserPoster(t) {
          return a["h"].post("/c2c-web/v1/poster/create-user-poster", t);
        },
        getSPUSpecs(t) {
          return a["p"].get(`/spus/${t}/specs`);
        },
        updateC2cProductsByCategory(t) {
          return a["h"].post("/c2c/products/m-update", t);
        },
        updateProductMulti(t) {
          return a["h"].post("/c2c/products/multi-create", t);
        },
        createProductMulti(t) {
          return a["h"].post("/c2c/products/m-create-update", t);
        },
        getProductsByCategory(t) {
          return a["h"].get("/c2c/products/by-category", t);
        },
        getCategoryDetail(t, e) {
          return a["p"].get("/v2/categories/" + t, e);
        },
        getCategories(t) {
          return a["p"].get("/v2/categories", t);
        },
        getRecommendCategories(t) {
          return a["p"].get(`/v2/categories/${t}/recommend`);
        },
        getCategoryTags(t) {
          return a["p"].get(`/v2/categories/${t}/config`);
        },
        getTag(t, e) {
          return a["p"].get("/tags/" + t, e);
        },
        getHotTags(t) {
          return a["p"].get(`/tags/${t}/config`);
        },
        getTags(t) {
          return a["p"].get("/tags", t);
        },
        searchCategories(t) {
          return a["p"].get("/v2/categories", t);
        },
        getSettings() {
          return a["p"].get("/settings");
        },
        changeWishes(t) {
          return a["p"].post("/wish-list", t);
        },
        updateUserSettings(t) {
          return a["p"].put("/settings", t);
        },
        getPosterColumnConfig(t) {
          return a["l"].get("/action/get-products-poster", t);
        },
        getPosterThemes(t) {
          return a["l"].get("/action/get-poster-themes", t, {
            isErrorDefaultTip: !1,
          });
        },
        getWishList(t) {
          return a["p"].get("/wish-list", t, { isErrorDefaultTip: !1 });
        },
        getWishMatches(t) {
          return a["p"].get("/products/match/wish-list", t, {
            isErrorDefaultTip: !1,
          });
        },
        getDemandProductList(t) {
          return a["p"].get("/products/match/demand-list", t);
        },
        getTradeInfo(t) {
          return a["p"].post("/action/get-trade-info", t);
        },
        get360DegImages(t) {
          return a["p"].get(`/spus/${t}/360-degree-images`);
        },
        getBarginSpus(t) {
          return a["p"].post("/stock-order/bargin", t);
        },
        getSpecsByMPName(t) {
          return a["p"].get("/specs/aciton/get-by-app-name", t);
        },
        getDistribution(t) {
          return a["p"].get("/feeds/chaowan", t);
        },
        getSellingCategories(t) {
          return a["p"].get("/products/action/get-selling-categories", t);
        },
        getCategoryCount(t) {
          return a["p"].get("/products/action/get-category-product-count", t);
        },
        getSpuList(t) {
          return a["h"].post("/treasure/spus/search/simple-info", t);
        },
        getSpuHeader(t) {
          return a["h"].get("/treasure/flora/v2/spu/simpleInfo", t);
        },
        getSpuDetails(t) {
          return a["h"].get("/treasure/flora/v1/spu/detailInfo", t);
        },
        getTagList(t) {
          return a["h"].get("/treasure/tags", t);
        },
        getTagDetails(t) {
          return a["h"].get("/treasure/flora/v1/tag/detailInfo", t);
        },
        getTagDetailsV2(t) {
          return a["h"].get("/treasure/flora/v2/tag/simpleInfo", t);
        },
        searchSpuInTag(t) {
          return a["h"].get("/plast/search/spu", t);
        },
        searchTag(t) {
          return a["h"].get("/plast/search/tag", t);
        },
        getXiaokaWebConfig() {
          return a["e"].get("/vinyl/web.json");
        },
        getTagsV2(t) {
          return a["h"].get("/armory/entry/tags", t);
        },
      };
    },
  },
]);
