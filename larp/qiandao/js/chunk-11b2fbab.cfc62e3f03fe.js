(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-11b2fbab"],
  {
    "005d": function (t, e, s) {},
    "4d0d": function (t, e, s) {
      "use strict";
      s("005d");
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
    "877b": function (t, e, s) {
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
                    this.tagId
                      ? e(
                          "div",
                          {
                            staticClass: "choose-tag",
                            on: { click: t.resetTag },
                          },
                          [
                            e("img", { attrs: { src: this.tagCoverUrl } }),
                            t._v(" " + t._s(this.tagName) + " "),
                          ]
                        )
                      : t._e(),
                    this.tagId
                      ? [
                          t.selectedCount > 0
                            ? e(
                                "div",
                                {
                                  staticClass: "reset",
                                  on: { click: t.reset },
                                },
                                [t._v(" 重置选项 ")]
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
                                        e(
                                          "div",
                                          { staticClass: "pokemon-name" },
                                          [t._v(t._s(s.spuName))]
                                        ),
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
                                    [t._v(" 发布并同时加入“小卡岛” ")]
                                  ),
                            ],
                            2
                          ),
                        ]
                      : e(
                          "div",
                          { staticClass: "tag-list" },
                          [
                            e("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: t.tagQuery,
                                  expression: "tagQuery",
                                },
                              ],
                              staticClass: "tag-list-input",
                              attrs: {
                                placeholder: "输入团体名称搜索（区分大小写）",
                              },
                              domProps: { value: t.tagQuery },
                              on: {
                                input: function (e) {
                                  e.target.composing ||
                                    (t.tagQuery = e.target.value);
                                },
                              },
                            }),
                            t._l(this.tagList, function (s, a) {
                              return [
                                t.tagQuery && -1 == s.name.indexOf(t.tagQuery)
                                  ? t._e()
                                  : e(
                                      "div",
                                      {
                                        key: a,
                                        staticClass: "tag",
                                        on: {
                                          click: function (e) {
                                            return t.selectTag(
                                              s.id,
                                              s.name,
                                              s.images.logo
                                            );
                                          },
                                        },
                                      },
                                      [
                                        e("img", {
                                          attrs: { src: s.images.logo },
                                        }),
                                        t._v(" " + t._s(s.name) + " "),
                                      ]
                                    ),
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
                          { finish: 9 === t.selectedCount },
                        ],
                        on: { click: t.handleRenderBtn },
                      },
                      [
                        t._v(" 马上发帖 "),
                        this.tagId
                          ? [t._v("（已选 " + t._s(t.selectedCount) + "/9）")]
                          : t._e(),
                      ],
                      2
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
                                  this.idolTags.length > 0
                                    ? e(
                                        "div",
                                        { staticClass: "idol-tag-wrap" },
                                        [
                                          e(
                                            "div",
                                            { staticClass: "idol-tag-group" },
                                            t._l(
                                              this.idolTags,
                                              function (s, a) {
                                                return e(
                                                  "div",
                                                  {
                                                    key: a,
                                                    class: [
                                                      "idol-tag",
                                                      {
                                                        active:
                                                          t.selectedIdolTagId &&
                                                          s.id ===
                                                            t.selectedIdolTagId,
                                                      },
                                                    ],
                                                    on: {
                                                      click: function (e) {
                                                        return t.selectIdolTag(
                                                          s.id
                                                        );
                                                      },
                                                    },
                                                  },
                                                  [
                                                    t._v(
                                                      " " + t._s(s.name) + " "
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
                                                      s.cover,
                                                      null ===
                                                        (a = s.profiles) ||
                                                        void 0 === a
                                                        ? void 0
                                                        : a[0].profiles[0]
                                                            .dataValue,
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
                                                    s.cover,
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
                                ],
                                1
                              ),
                            ]),
                          ])
                        : t._e(),
                    ]),
                  ],
                  2
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
        i = [],
        r = (s("2994"), s("2bdd")),
        o = s("ccbb"),
        n = s("2f62"),
        c = s("ed08"),
        d = s("684b"),
        p = (s("4cce"), s("a849")),
        u = s("cb35"),
        g = {
          components: { [r["a"].name]: r["a"] },
          data() {
            return {
              types: [
                {
                  name: "入坑卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
                {
                  name: "最爱卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
                {
                  name: "梦情卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
                {
                  name: "手中最贵卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
                {
                  name: "复数最多卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
                {
                  name: "拔草卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
                {
                  name: "实物最美卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
                {
                  name: "跳水卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
                {
                  name: "求求来收卡",
                  spuName: "点击选择",
                  cover:
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg",
                  mainTagName: "",
                  id: "",
                },
              ],
              loading: !1,
              success: !1,
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
              tagCoverUrl: "",
              tagId: "",
              tagName: "",
              tagList: [],
              tagQuery: "",
              postContent: "",
              idolTags: [],
              selectedIdolTagId: "",
              isJoinedIsland: !1,
            };
          },
          computed: {
            ...Object(n["mapState"])("user", ["me"]),
            selectedCount() {
              const t = this.types.filter((t) => "点击选择" !== t.spuName);
              return t.length;
            },
          },
          async mounted() {
            "{}" === JSON.stringify(this.me) && this.logIn(), this.getTagList();
            try {
              const t = await u["a"].detail(300357);
              t.data.joined &&
                !0 === t.data.joined &&
                (this.isJoinedIsland = !0);
            } catch (t) {
              console.error(t);
            }
          },
          watch: {
            query(t, e) {
              "" !== t && ((this.spuList = []), this.getSpuList());
            },
          },
          methods: {
            selectTag(t, e, s) {
              (this.tagId = t),
                (this.tagName = e),
                (this.tagCoverUrl = s),
                (this.defaultSpuList = []),
                this.getDefaultSpuList(),
                this.getTags();
            },
            resetTag() {
              (this.tagId = ""),
                (this.tagName = ""),
                (this.tagCoverUrl = ""),
                this.reset(),
                0 === this.tagList.length && this.getTagList();
            },
            async getTagList() {
              try {
                const t = await o["a"].getTagList({
                  typeIds: [1512150],
                  offset: 0,
                  limit: 200,
                });
                this.tagList = t.rows;
              } catch (t) {
                console.error(t);
              }
            },
            logIn() {
              const t = "/modules/pages/common-login/index";
              (Object(c["h"])() || Object(c["d"])()) &&
                this.navigateTo({ url: t });
            },
            handleModalClick(t) {
              "{}" === JSON.stringify(this.me) && this.logIn(),
                (this.selectedIndex = t),
                (this.spuList = []),
                (this.isOpenModal = !0);
            },
            async getTags() {
              (this.loading = !0), (this.idolTags = []);
              var t = { offset: 1, limit: 32, distributeTagIds: [this.tagId] };
              try {
                const e = await p["a"].getTags(t);
                e.count <= 50 && (this.idolTags = e.rows);
              } catch (e) {
                console.error(e);
              }
              this.loading = !1;
            },
            selectIdolTag(t) {
              t === this.selectedIdolTagId
                ? (this.selectedIdolTagId = "")
                : (this.selectedIdolTagId = t),
                (this.defaultSpuList = []),
                this.getDefaultSpuList();
            },
            async getDefaultSpuList() {
              this.loading = !0;
              var t = [this.tagId];
              const e = ["1512169"];
              this.selectedIdolTagId &&
                (t = [this.tagId, this.selectedIdolTagId]);
              var s = {
                andTagIds: t,
                propertyIds: e,
                limit: 99,
                offset: this.defaultSpuList.length,
                orderBy: "latest",
              };
              try {
                const t = await o["a"].getSpuList(s),
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
                const s = await o["a"].searchSpuInTag(t),
                  a = s.data.items;
                for (var e = 0; e < a.length; e++) a[e].cover = a[e].imgs.cover;
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
            handleSelectSpu(t, e, s, a) {
              (this.types[this.selectedIndex].spuName = t),
                (this.types[this.selectedIndex].cover = e),
                (this.types[this.selectedIndex].mainTagName = s),
                (this.types[this.selectedIndex].id = a),
                this.handleMaskClick();
            },
            handleRenderBtn() {
              this.selectedCount < 9
                ? this.$toast.show({ title: "还有未选完的" })
                : this.render();
            },
            reset() {
              for (var t = 0; t < this.types.length; t++)
                (this.types[t].spuName = "点击选择"),
                  (this.types[t].mainTagName = ""),
                  (this.types[t].id = ""),
                  (this.types[t].cover =
                    "https://cdn.qiandaoapp.com/interior/images/b470c7ca25a42437a3f8fb4f36badfcc.jpg");
            },
            async joinIsland() {
              try {
                await u["a"].join(300357);
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
                  content: "我的" + this.tagName + "小卡个人喜好表",
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
                  islandId: "300357",
                  meta: { plugin: { id: "photo-cards-life-post" } },
                  activeTags: [
                    {
                      id: this.types[0].id,
                      type: "spu",
                      propertyId: "1555916",
                    },
                    {
                      id: this.types[1].id,
                      type: "spu",
                      propertyId: "1555917",
                    },
                    {
                      id: this.types[2].id,
                      type: "spu",
                      propertyId: "1555918",
                    },
                    {
                      id: this.types[3].id,
                      type: "spu",
                      propertyId: "1555919",
                    },
                    {
                      id: this.types[4].id,
                      type: "spu",
                      propertyId: "1555920",
                    },
                    {
                      id: this.types[5].id,
                      type: "spu",
                      propertyId: "1555921",
                    },
                    {
                      id: this.types[6].id,
                      type: "spu",
                      propertyId: "1555922",
                    },
                    {
                      id: this.types[7].id,
                      type: "spu",
                      propertyId: "1555923",
                    },
                    {
                      id: this.types[8].id,
                      type: "spu",
                      propertyId: "1555924",
                    },
                  ],
                };
              this.postContent && (s.content = this.postContent);
              try {
                const t = await d["a"].createPostStandard(s);
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
              (Object(c["h"])() || Object(c["d"])()) &&
                this.navigateTo({ url: t });
            },
          },
        },
        l = g,
        h = (s("4d0d"), s("0c7c")),
        m = Object(h["a"])(l, a, i, !1, null, null, null);
      e["default"] = m.exports;
    },
    a849: function (t, e, s) {
      "use strict";
      var a = s("0ef7"),
        i = s("4360");
      e["a"] = {
        getSingleBanner(t) {
          return a["p"].get("/ads", {
            slotKey: t,
            appid: i["a"].state.app.puppet.name,
          });
        },
        queryDeliverOrderPrice(t) {
          return a["h"].post("/order/action/query-deliver-order-price", t);
        },
        getSellingProducts(t) {
          return a["h"].get(
            "trade/user/products/action/get-selling-products",
            t
          );
        },
        doGrayscale(t) {
          return a["h"].get("/stock-order/grayscale", t);
        },
        queryShelfExpressRule(t) {
          return a["h"].post(
            "/express/user/express-price-template/action/load-by-shelf",
            t
          );
        },
        queryProductsMatch(t) {
          return a["p"].get("/products/match", t);
        },
        queryProductsByTag(t) {
          return a["h"].post("/stock-order/bargin", t);
        },
        productPublish(t) {
          return a["h"].post("/trade/products", t);
        },
        getAuctionField(t) {
          return a["h"].get("/auctioneer/field/list", t);
        },
        auctionPublish(t) {
          return a["h"].post("/c2c-web/v1/auctioneer/auction/create", t);
        },
        getTags(t) {
          return a["h"].get("/trade/tags", t);
        },
      };
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
