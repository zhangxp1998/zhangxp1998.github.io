(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-4a717cd4"],
  {
    "3f9a": function (t, e, s) {},
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
    "6abe": function (t, e, s) {
      "use strict";
      s("3f9a");
    },
    "7cb2": function (t, e, s) {
      "use strict";
      s.d(e, "b", function () {
        return n;
      }),
        s.d(e, "c", function () {
          return c;
        }),
        s.d(e, "a", function () {
          return o;
        });
      var a = s("0ef7"),
        i = s("0d94"),
        r = s("a37c");
      async function n(t, e = "interior-admin.image") {
        const s = Object(i["e"])({
          isProd: r["e"],
          async customApiCall(t) {
            var e;
            const s = await a["h"].post("/uploader/gene-post-object-sign", t);
            return null === (e = s.data) || void 0 === e ? void 0 : e[0];
          },
        });
        return s({ file: t, scene: e });
      }
      function c(t) {
        return a["h"].get("/uploader/file-space/get", t);
      }
      function o(t, e = "interior-admin.image") {
        const s = Object(i["e"])({
          isProd: r["e"],
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
    ff6a: function (t, e, s) {
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
                                    t._v(t._s(s.spuName)),
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
                          { finish: 7 === t.selectedCount },
                        ],
                        on: { click: t.handleRenderBtn },
                      },
                      [t._v(" 下一步（已选 " + t._s(t.selectedCount) + "/7） ")]
                    ),
                    e("transition", { attrs: { name: "fade" } }, [
                      t.isOpenModal
                        ? e("div", { staticClass: "modal" }, [
                            e("div", {
                              staticClass: "mask",
                              on: { click: t.handleMaskClick },
                            }),
                            e("div", { staticClass: "spu-group" }, [
                              e(
                                "div",
                                [
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
                                    attrs: { placeholder: "输入款式名称搜索" },
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
                                        "van-list",
                                        {
                                          ref: "list",
                                          staticClass: "spu-list",
                                          attrs: {
                                            finished: !t.defaultHasMore,
                                          },
                                          on: { load: t.getDefaultSpuList },
                                          model: {
                                            value: t.loading,
                                            callback: function (e) {
                                              t.loading = e;
                                            },
                                            expression: "loading",
                                          },
                                        },
                                        t._l(
                                          this.defaultSpuList,
                                          function (s, a) {
                                            return e(
                                              "div",
                                              {
                                                key: a,
                                                staticClass: "spu",
                                                on: {
                                                  click: function (e) {
                                                    var a;
                                                    return t.handleSelectSpu(
                                                      s.name,
                                                      s.whiteBGPng
                                                        ? s.whiteBGPng
                                                        : s.cover,
                                                      null ===
                                                        (a = s.profiles) ||
                                                        void 0 === a
                                                        ? void 0
                                                        : a[0].profiles[0]
                                                            .dataValue
                                                    );
                                                  },
                                                },
                                              },
                                              [
                                                s.whiteBGPng
                                                  ? e("img", {
                                                      staticClass: "spu-cover",
                                                      attrs: {
                                                        src: s.whiteBGPng,
                                                      },
                                                    })
                                                  : e("img", {
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
                                          }
                                        ),
                                        0
                                      )
                                    : e(
                                        "van-list",
                                        {
                                          ref: "list",
                                          staticClass: "spu-list",
                                          attrs: { finished: !t.hasMore },
                                          on: { load: t.getSpuList },
                                          model: {
                                            value: t.loading,
                                            callback: function (e) {
                                              t.loading = e;
                                            },
                                            expression: "loading",
                                          },
                                        },
                                        t._l(this.spuList, function (s, a) {
                                          return e(
                                            "div",
                                            {
                                              key: a,
                                              staticClass: "spu",
                                              on: {
                                                click: function (e) {
                                                  var a;
                                                  return t.handleSelectSpu(
                                                    s.name,
                                                    s.imgs.whiteBgPng
                                                      ? s.imgs.whiteBgPng
                                                      : s.cover,
                                                    null ===
                                                      (a = s.entry_profile) ||
                                                      void 0 === a
                                                      ? void 0
                                                      : a[0].profiles[0]
                                                          .dataValue
                                                  );
                                                },
                                              },
                                            },
                                            [
                                              s.imgs.whiteBgPng
                                                ? e("img", {
                                                    staticClass: "spu-cover",
                                                    attrs: {
                                                      src: s.imgs.whiteBgPng,
                                                    },
                                                  })
                                                : e("img", {
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
                                ],
                                1
                              ),
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
                          e("div", { staticClass: "body" }, [
                            e("div", { staticClass: "header" }, [
                              e("div", { staticClass: "tag-name" }, [
                                t._v(t._s(this.tagName)),
                              ]),
                              e("div", { staticClass: "user" }, [
                                this.me && this.me.avatar
                                  ? e("img", {
                                      staticClass: "avatar",
                                      attrs: {
                                        src: this.me.avatar,
                                        alt: "avatar",
                                      },
                                    })
                                  : t._e(),
                                e("span", [t._v(t._s(this.me.nickName))]),
                              ]),
                            ]),
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
                                        e("div", { staticClass: "spu-cover" }, [
                                          e("div", { staticClass: "cover" }, [
                                            e("img", {
                                              attrs: {
                                                src: s.cover,
                                                alt: "cover",
                                              },
                                            }),
                                          ]),
                                          e(
                                            "div",
                                            { staticClass: "type-name" },
                                            [e("span", [t._v(t._s(s.name))])]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ];
                                }),
                              ],
                              2
                            ),
                            "682" === this.tagId
                              ? e("img", {
                                  staticClass: "special-img",
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/b98d3a445f1cb8959f3df8bdb1136e61.png",
                                  },
                                })
                              : "305" === this.tagId
                              ? e("img", {
                                  staticClass: "special-img",
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/7e60698233b22f33b9d7ccc2e2fad762.png",
                                  },
                                })
                              : "307" === this.tagId
                              ? e("img", {
                                  staticClass: "special-img",
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/eb94fec01cc122996bdc04977a1b3524.png",
                                  },
                                })
                              : "302" === this.tagId
                              ? e("img", {
                                  staticClass: "special-img",
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/fe97d9cd131442f6be2ba9f7d9cec33b.png",
                                  },
                                })
                              : t._e(),
                            e("img", {
                              staticClass: "qrcode",
                              attrs: {
                                src: "https://cdn.qiandaoapp.com/interior/images/f35afa09bde185ce9ef87832fad93378.png",
                              },
                            }),
                          ]),
                          e("div", { staticClass: "poster-bg" }, [
                            "682" === this.tagId ||
                            "305" === this.tagId ||
                            "307" === this.tagId ||
                            "302" === this.tagId
                              ? e("img", {
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/7c04ba29f59c853fd7571aebbc339725.png",
                                  },
                                })
                              : e("img", {
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/92d6ad47e3b3816a870b6b15d4160519.png",
                                  },
                                }),
                          ]),
                        ]),
                  ],
                  2
                )
              : t._e(),
            2 === this.part
              ? e(
                  "div",
                  { staticClass: "page-footer" },
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
        i = [],
        r = (s("2994"), s("2bdd")),
        n = s("ccbb"),
        c = s("c0e9"),
        o = s.n(c),
        g = s("2f62"),
        p = s("7cb2"),
        u = s("ed08"),
        d =
          (s("cb35"),
          s("684b"),
          {
            components: { [r["a"].name]: r["a"] },
            data() {
              return {
                types: [
                  {
                    name: "入坑第一款",
                    spuName: "点击选择",
                    cover:
                      "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                    mainTagName: "",
                  },
                  {
                    name: "最喜欢的款",
                    spuName: "点击选择",
                    cover:
                      "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                    mainTagName: "",
                  },
                  {
                    name: "抽到最欧的款",
                    spuName: "点击选择",
                    cover:
                      "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                    mainTagName: "",
                  },
                  {
                    name: "求而不得的款",
                    spuName: "点击选择",
                    cover:
                      "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                    mainTagName: "",
                  },
                  {
                    name: "抽到最雷的款",
                    spuName: "点击选择",
                    cover:
                      "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                    mainTagName: "",
                  },
                  {
                    name: "性价比最高的款",
                    spuName: "点击选择",
                    cover:
                      "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                    mainTagName: "",
                  },
                  {
                    name: "最想要的隐藏款",
                    spuName: "点击选择",
                    cover:
                      "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                    mainTagName: "",
                  },
                ],
                loading: !1,
                spuList: [],
                defaultSpuList: [],
                isOpenModal: !1,
                selectedIndex: 0,
                query: "",
                image: "",
                part: 1,
                showIslandModal: !1,
                postId: "",
                hasMore: !1,
                defaultHasMore: !1,
                tagId: "",
                tagName: "",
              };
            },
            computed: {
              ...Object(g["mapState"])("user", ["me"]),
              selectedCount() {
                const t = this.types.filter((t) => "点击选择" !== t.spuName);
                return t.length;
              },
            },
            async mounted() {
              var t;
              "{}" === JSON.stringify(this.me) && this.logIn();
              const e =
                null === (t = this.$route) || void 0 === t ? void 0 : t.query;
              if (e.tagId) {
                this.tagId = e.tagId;
                try {
                  const t = await n["a"].getTagDetailsV2({ entryId: e.tagId });
                  this.tagName = t.data.header.name;
                } catch (s) {
                  console.error(s);
                }
              } else this.$toast.show({ title: "出错了" });
              this.getDefaultSpuList();
            },
            watch: {
              query(t, e) {
                "" !== t && ((this.spuList = []), this.getSpuList());
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
                  (this.isOpenModal = !0);
              },
              async getDefaultSpuList() {
                this.loading = !0;
                const t = [this.tagId],
                  e = ["1512169"];
                var s = {
                  andTagIds: t,
                  propertyIds: e,
                  limit: 99,
                  offset: this.defaultSpuList.length,
                  orderBy: "latest",
                };
                try {
                  const t = await n["a"].getSpuList(s),
                    e = t.data.list;
                  "{}" !== JSON.stringify(t.data) &&
                    ((this.defaultSpuList = this.defaultSpuList.concat(e)),
                    this.defaultSpuList.length < Number(t.data.count)
                      ? (this.defaultHasMore = !0)
                      : (this.defaultHasMore = !1));
                } catch (a) {
                  console.error(a);
                }
                this.loading = !1;
              },
              async getSpuList() {
                this.loading = !0;
                const t = {
                  q: this.query,
                  "start-index": this.spuList.length,
                  "max-results": 99,
                  tagIds: this.tagId,
                  propertyIds: 1512169,
                  scene: "plugin-photo-cards-life",
                };
                try {
                  const s = await n["a"].searchSpuInTag(t),
                    a = s.data.items;
                  for (var e = 0; e < a.length; e++)
                    a[e].cover = a[e].imgs.cover;
                  (this.spuList = this.spuList.concat(a)),
                    this.spuList.length < s.data.total_count
                      ? (this.hasMore = !0)
                      : (this.hasMore = !1);
                } catch (s) {
                  console.error(s);
                }
                this.loading = !1;
              },
              handleMaskClick() {
                (this.isOpenModal = !1),
                  (this.showIslandModal = !1),
                  (this.query = "");
              },
              handleSelectSpu(t, e, s) {
                (this.types[this.selectedIndex].spuName = t),
                  (this.types[this.selectedIndex].cover = e),
                  (this.types[this.selectedIndex].mainTagName = s),
                  this.handleMaskClick();
              },
              handleRenderBtn() {
                this.selectedCount < 7
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
                    o()(document.getElementById("canvas"), {
                      allowTaint: !1,
                      useCORS: !0,
                      backgroundColor: "white",
                    })
                      .then((t) => {
                        t.toBlob(async (t) => {
                          const e = Object(u["i"])(),
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
          }),
        l = d,
        h = (s("6abe"), s("0c7c")),
        m = Object(h["a"])(l, a, i, !1, null, null, null);
      e["default"] = m.exports;
    },
  },
]);
