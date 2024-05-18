(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-77f822ac"],
  {
    1369: function (t, e, s) {},
    3296: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = function () {
          var t = this,
            e = t._self._c;
          return e("div", { staticClass: "favorite-drama" }, [
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
                                  staticClass: "drama",
                                  on: {
                                    click: function (e) {
                                      return t.handleModalClick(a);
                                    },
                                  },
                                },
                                [
                                  e("img", {
                                    staticClass: "drama-cover",
                                    attrs: { src: s.cover, alt: "cover" },
                                  }),
                                  e("div", { staticClass: "drama-name" }, [
                                    t._v(t._s(s.drama)),
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
                              [t._v(" 发布并同时加入“剧本杀岛” ")]
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
                          " 马上发布（已选 " + t._s(t.selectedCount) + "/15） "
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
                                                            s.spuImg,
                                                            s.spuId
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
                                                  s.cover,
                                                  s.id
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
        n = s("2f62"),
        o = (s("7cb2"), s("ed08")),
        c = s("cb35"),
        p = s("684b"),
        d = {
          data() {
            return {
              types: [
                {
                  name: "入坑本",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最喜欢",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最讨厌",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最感动",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最坐牢",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最治愈",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最过誉",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳封面",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳角色",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳故事",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最佳反转",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "时间最长",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "最新玩过",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "小众最爱",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
                {
                  name: "性价比最低",
                  drama: "点击选择",
                  id: "",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                },
              ],
              loading: !1,
              success: !1,
              spuList: [],
              myList: [],
              getMyList: !1,
              isOpenModal: !1,
              selectedIndex: 0,
              query: "",
              part: 1,
              postContent: "",
              postId: "",
              isJoinedIsland: !1,
            };
          },
          computed: {
            ...Object(n["mapState"])("user", ["me"]),
            selectedCount() {
              const t = this.types.filter((t) => "点击选择" !== t.drama);
              return t.length;
            },
          },
          watch: {
            query(t, e) {
              (this.spuList = []), this.getSpuList();
            },
          },
          async mounted() {
            try {
              const t = await c["a"].detail(300231);
              t.data.joined &&
                !0 === t.data.joined &&
                (this.isJoinedIsland = !0);
            } catch (t) {
              console.error(t);
            }
          },
          methods: {
            logIn() {
              const t = "/modules/pages/common-login/index";
              (Object(o["h"])() || Object(o["d"])()) &&
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
                  const e = await p["a"].getUserHobbyMark(t);
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
            handleSelectSpu(t, e, s) {
              (this.types[this.selectedIndex].drama = t),
                (this.types[this.selectedIndex].cover = e),
                (this.types[this.selectedIndex].id = s),
                this.handleMaskClick();
            },
            handleRenderBtn() {
              this.selectedCount < 15
                ? this.$toast.show({ title: "还有未选完的" })
                : this.render();
            },
            reset() {
              for (var t = 0; t < this.types.length; t++)
                (this.types[t].drama = "点击选择"),
                  (this.types[t].cover =
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg");
            },
            async joinIsland() {
              try {
                await c["a"].join(300231);
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
                  content: "我的剧本杀生涯个人喜好表",
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
                  islandId: "300231",
                  meta: { plugin: { id: "drama-life-post" } },
                  activeTags: [
                    {
                      id: this.types[0].id,
                      type: "spu",
                      propertyId: "1553811",
                    },
                    {
                      id: this.types[1].id,
                      type: "spu",
                      propertyId: "1553812",
                    },
                    {
                      id: this.types[2].id,
                      type: "spu",
                      propertyId: "1553813",
                    },
                    {
                      id: this.types[3].id,
                      type: "spu",
                      propertyId: "1553814",
                    },
                    {
                      id: this.types[4].id,
                      type: "spu",
                      propertyId: "1553815",
                    },
                    {
                      id: this.types[5].id,
                      type: "spu",
                      propertyId: "1553816",
                    },
                    {
                      id: this.types[6].id,
                      type: "spu",
                      propertyId: "1553817",
                    },
                    {
                      id: this.types[7].id,
                      type: "spu",
                      propertyId: "1553818",
                    },
                    {
                      id: this.types[8].id,
                      type: "spu",
                      propertyId: "1553819",
                    },
                    {
                      id: this.types[9].id,
                      type: "spu",
                      propertyId: "1553820",
                    },
                    {
                      id: this.types[10].id,
                      type: "spu",
                      propertyId: "1560106",
                    },
                    {
                      id: this.types[11].id,
                      type: "spu",
                      propertyId: "1553822",
                    },
                    {
                      id: this.types[12].id,
                      type: "spu",
                      propertyId: "1553823",
                    },
                    {
                      id: this.types[13].id,
                      type: "spu",
                      propertyId: "1553824",
                    },
                    {
                      id: this.types[14].id,
                      type: "spu",
                      propertyId: "1553825",
                    },
                  ],
                };
              this.postContent && (s.content = this.postContent);
              try {
                const t = await p["a"].createPostStandard(s);
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
              (Object(o["h"])() || Object(o["d"])()) &&
                this.navigateTo({ url: t });
            },
          },
        },
        u = d,
        g = (s("e0b8"), s("0c7c")),
        l = Object(g["a"])(u, a, r, !1, null, null, null);
      e["default"] = l.exports;
    },
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
        return n;
      }),
        s.d(e, "c", function () {
          return o;
        }),
        s.d(e, "a", function () {
          return c;
        });
      var a = s("0ef7"),
        r = s("0d94"),
        i = s("a37c");
      async function n(t, e = "interior-admin.image") {
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
      function o(t) {
        return a["h"].get("/uploader/file-space/get", t);
      }
      function c(t, e = "interior-admin.image") {
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
    e0b8: function (t, e, s) {
      "use strict";
      s("1369");
    },
  },
]);
