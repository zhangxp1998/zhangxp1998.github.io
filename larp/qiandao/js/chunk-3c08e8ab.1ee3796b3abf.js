(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-3c08e8ab"],
  {
    "0bfa": function (t, e, s) {
      "use strict";
      var a = s("0ef7");
      e["a"] = {
        submit(t) {
          return a["j"].post("/echo-form/form/post", t);
        },
      };
    },
    "428a": function (t, e, s) {},
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
    "88bb": function (t, e, s) {
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
                                    t._v(t._s(s.show)),
                                  ]),
                                ]
                              ),
                            ]),
                          ];
                        }),
                        e("textarea", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: t.postContent,
                              expression: "postContent",
                            },
                          ],
                          attrs: { placeholder: "想说点什么..(选填)" },
                          domProps: { value: t.postContent },
                          on: {
                            input: function (e) {
                              e.target.composing ||
                                (t.postContent = e.target.value);
                            },
                          },
                        }),
                        t._v(" "),
                        this.isJoinedIsland
                          ? t._e()
                          : e(
                              "div",
                              {
                                staticStyle: {
                                  "text-align": "center",
                                  color: "#aaa",
                                },
                              },
                              [t._v(" 发布并同时加入“舞台剧岛” ")]
                            ),
                      ],
                      2
                    ),
                    e(
                      "div",
                      {
                        class: [
                          "render-btn",
                          { finish: 15 === t.selectedCount },
                        ],
                        on: { click: t.handleRenderBtn },
                      },
                      [
                        t._v(
                          " 下一步（已选 " + t._s(t.selectedCount) + "/15） "
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
                                          ? t._l(this.myList, function (s, a) {
                                              return e(
                                                "div",
                                                {
                                                  key: a,
                                                  staticClass: "spu",
                                                  on: {
                                                    click: function (e) {
                                                      return t.handleSelectSpu(
                                                        s.id,
                                                        s.name,
                                                        s.image
                                                      );
                                                    },
                                                  },
                                                },
                                                [
                                                  e("img", {
                                                    staticClass: "spu-cover",
                                                    attrs: { src: s.image },
                                                  }),
                                                  e(
                                                    "div",
                                                    { staticClass: "spu-name" },
                                                    [t._v(t._s(s.name))]
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
                                      t._l(this.spuList, function (s, a) {
                                        return e(
                                          "div",
                                          {
                                            key: a,
                                            staticClass: "spu",
                                            on: {
                                              click: function (e) {
                                                return t.handleSelectSpu(
                                                  s.id,
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
              ? e("div", { staticClass: "final" }, [
                  t.loading
                    ? e("div", { staticClass: "loader" }, [t._v("发布中...")])
                    : t._e(),
                  t.success
                    ? e("div", { staticClass: "tip" }, [
                        e(
                          "div",
                          {
                            staticStyle: {
                              "font-size": "30px",
                              "margin-bottom": "10px",
                            },
                          },
                          [t._v("✅")]
                        ),
                        e("div", { staticStyle: { "margin-bottom": "50px" } }, [
                          t._v("发布成功"),
                        ]),
                        e("div", [
                          e(
                            "div",
                            {
                              staticClass: "main-btn solid",
                              on: { click: t.goToPost },
                            },
                            [t._v("去查看帖子")]
                          ),
                          e(
                            "div",
                            {
                              staticClass: "main-btn line",
                              on: { click: t.goBack },
                            },
                            [t._v("再发一次")]
                          ),
                        ]),
                      ])
                    : t._e(),
                ])
              : t._e(),
          ]);
        },
        r = [],
        i = s("ccbb"),
        o = s("2f62"),
        n = s("ed08"),
        c = s("684b"),
        p = s("dd8a"),
        d = (s("0bfa"), s("cb35")),
        u = s("4cce"),
        g = {
          data() {
            return {
              types: [
                {
                  name: "入坑作",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最喜欢",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "看最多次",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最想安利",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "冷门最爱",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳剧本",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳舞美",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最爱演员",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最过誉",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最离谱",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "第一次现场",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "想看但没有",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "性价比最低",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最近一部",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最爱cp",
                  show: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
              ],
              loading: !1,
              success: !1,
              spuList: [],
              myList: [],
              recommendList: !1,
              isOpenModal: !1,
              selectedIndex: 0,
              query: "",
              part: 1,
              postId: "",
              postContent: "",
              isJoinedIsland: !1,
            };
          },
          computed: {
            ...Object(o["mapState"])("user", ["me"]),
            selectedCount() {
              const t = this.types.filter((t) => "点击选择" !== t.show);
              return t.length;
            },
          },
          watch: {
            query(t, e) {
              (this.spuList = []), this.getSpuList();
            },
          },
          async mounted() {
            "{}" === JSON.stringify(this.me) ? this.logIn() : this.checkEmpty();
            try {
              const t = await d["a"].detail(300372);
              t.data.joined &&
                !0 === t.data.joined &&
                (this.isJoinedIsland = !0);
            } catch (t) {
              console.error(t);
            }
          },
          methods: {
            async checkEmpty() {
              const { data: t } = await u["a"].checkEmpty();
              (t.avatarIsEmpty || t.nameIsEmpty) &&
                (this.$toast.show({ title: "请先上传头像、修改昵称" }),
                (this.isAvatarEmpty = !0),
                setTimeout(() => {
                  this.uploadAvatar();
                }, 500));
            },
            uploadAvatar() {
              const t = "/pages-common/user-home-page/edit/index";
              (Object(n["h"])() || Object(n["d"])()) &&
                this.navigateTo({ url: t });
            },
            logIn() {
              const t = "/modules/pages/common-login/index";
              (Object(n["h"])() || Object(n["d"])()) &&
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
                  const e = await p["a"].getSpuWaterfall(t);
                  "{}" !== JSON.stringify(e.data) &&
                    (this.myList = e.data.list),
                    (this.recommendList = !0);
                } catch (s) {
                  console.error(s);
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
              (this.isOpenModal = !1), (this.query = "");
            },
            handleSelectSpu(t, e, s) {
              (this.types[this.selectedIndex].id = t),
                (this.types[this.selectedIndex].show = e),
                (this.types[this.selectedIndex].cover = s),
                this.handleMaskClick();
            },
            handleRenderBtn() {
              this.selectedCount < 15
                ? this.$toast.show({ title: "还有未选完的" })
                : this.render();
            },
            reset() {
              for (var t = 0; t < this.types.length; t++)
                (this.types[t].show = "点击选择"),
                  (this.types[t].cover =
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg");
            },
            async joinIsland() {
              try {
                await d["a"].join(300372);
              } catch (t) {
                console.error(t);
              }
            },
            async render() {
              this.isJoinedIsland || this.joinIsland(),
                (this.part = 2),
                (this.loading = !0);
              const t = this.types
                  .filter((t) => t.id)
                  .map((t) => ({
                    type: "checklist",
                    meta: {
                      relatedId: t.id,
                      relatedType: "spu",
                      option: JSON.stringify(t),
                    },
                  })),
                e = this.types
                  .filter((t) => t.id)
                  .map((t) => ({
                    cover: t.cover,
                    relatedId: t.id,
                    relatedType: "spu",
                    title: t.name,
                  })),
                s = {
                  attachments: t,
                  content: "我的观剧生涯个人喜好表",
                  labels: [
                    {
                      propertyTagId: "1436337",
                      title: "个人喜好表",
                      relatedType: "tag",
                      relatedId: "1546492",
                    },
                  ].concat(e),
                  mentionRelatedObjects: {},
                  privacy: "public",
                  reviewStatistic: "",
                  islandId: "300372",
                  meta: { plugin: { id: "stage-show-life-post" } },
                  activeTags: [
                    {
                      id: this.types[0].id,
                      type: "spu",
                      propertyId: "1553826",
                    },
                    {
                      id: this.types[1].id,
                      type: "spu",
                      propertyId: "1553827",
                    },
                    {
                      id: this.types[2].id,
                      type: "spu",
                      propertyId: "1553828",
                    },
                    {
                      id: this.types[3].id,
                      type: "spu",
                      propertyId: "1553829",
                    },
                    {
                      id: this.types[4].id,
                      type: "spu",
                      propertyId: "1553830",
                    },
                    {
                      id: this.types[5].id,
                      type: "spu",
                      propertyId: "1553831",
                    },
                    {
                      id: this.types[6].id,
                      type: "spu",
                      propertyId: "1553832",
                    },
                    {
                      id: this.types[7].id,
                      type: "spu",
                      propertyId: "1553833",
                    },
                    {
                      id: this.types[8].id,
                      type: "spu",
                      propertyId: "1553834",
                    },
                    {
                      id: this.types[9].id,
                      type: "spu",
                      propertyId: "1553835",
                    },
                    {
                      id: this.types[10].id,
                      type: "spu",
                      propertyId: "1553836",
                    },
                    {
                      id: this.types[11].id,
                      type: "spu",
                      propertyId: "1553837",
                    },
                    {
                      id: this.types[12].id,
                      type: "spu",
                      propertyId: "1553838",
                    },
                    {
                      id: this.types[13].id,
                      type: "spu",
                      propertyId: "1553839",
                    },
                    {
                      id: this.types[14].id,
                      type: "spu",
                      propertyId: "1560288",
                    },
                  ],
                };
              this.postContent && (s.content = this.postContent);
              try {
                const t = await c["a"].createPostStandard(s);
                (this.success = !0),
                  (this.postId = t.data.id),
                  setTimeout(() => {
                    this.goToPost();
                  }, 500);
              } catch (a) {
                console.error(a);
              }
              this.loading = !1;
            },
            goBack() {
              this.part = 1;
            },
            goToPost() {
              const t =
                "/pages-community/post/spu-detail?postId=" + this.postId;
              (Object(n["h"])() || Object(n["d"])()) &&
                this.navigateTo({ url: t });
            },
          },
        },
        l = g,
        h = (s("a921"), s("0c7c")),
        m = Object(h["a"])(l, a, r, !1, null, null, null);
      e["default"] = m.exports;
    },
    a921: function (t, e, s) {
      "use strict";
      s("428a");
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
    dd8a: function (t, e, s) {
      "use strict";
      var a = s("0ef7");
      e["a"] = {
        myPokemon(t) {
          return a["q"].get("/v1/pokemon/my", t);
        },
        nextStep(t) {
          return a["q"].post("/v1/pokemon/next-step", t);
        },
        searchSpuByImage(t) {
          return a["q"].post("/v1/image/search/spu", t);
        },
        searchSpuByAggregateImages(t) {
          return a["q"].post("/v1/image/search/multi/spu/v2", t);
        },
        ocr(t) {
          return a["j"].post("/z/stargazing/z/ocr", t);
        },
        getQrcode(t) {
          return a["j"].get("/z/poster-web/wechat/mp-qrcode", t);
        },
        getSpuOpposite(t) {
          return a["j"].post("/treasure/spus/opposite/list", t);
        },
        getSpuWithRelated(t) {
          return a["j"].post("/treasure/v1/search/spu/with/related", t);
        },
        getSpuWaterfall(t) {
          return a["j"].get("/treasure/v1/waterfall/list", t);
        },
        fetchStep2BizConfig() {
          return a["j"].get(
            "https://config-cdn.qiandaoapp.com/mp-common/pluginsBizConfig.json"
          );
        },
        getRankInfo(t) {
          return a["j"].get("/treasure/flora/v1/rank", t);
        },
        getByDistributedTagIds(t) {
          return a["j"].post(
            "/treasure/v1/public-relations/byDistributedTagIds",
            t
          );
        },
        getPalworld(t) {
          return a["g"].get("/palu/check", t);
        },
      };
    },
  },
]);
