(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-25d647ac"],
  {
    "749d": function (t, e, s) {
      "use strict";
      s("d0fe");
    },
    cfd7: function (t, e, s) {
      "use strict";
      s.r(e);
      var a = function () {
          var t = this,
            e = t._self._c;
          return e(
            "div",
            [
              t.items.length
                ? e(
                    "van-list",
                    {
                      ref: "list",
                      attrs: {
                        finished: !t.hasMore,
                        "immediate-check": !1,
                        "finished-text": "到底了～",
                      },
                      on: { load: t.onSearch },
                      model: {
                        value: t.isLoading,
                        callback: function (e) {
                          t.isLoading = e;
                        },
                        expression: "isLoading",
                      },
                    },
                    [
                      e(
                        "div",
                        { staticClass: "list van-clearfix" },
                        t._l(t.items, function (s, a) {
                          return e(
                            "div",
                            {
                              key: `${s.id}- ${a}`,
                              staticClass: "post u-flex-c-sb",
                            },
                            [
                              e("div", { staticClass: "left" }, [
                                s.summary
                                  ? e("div", { staticClass: "summary" }, [
                                      t._v(t._s(s.summary)),
                                    ])
                                  : t._e(),
                                s.content
                                  ? e("div", { staticClass: "update-time" }, [
                                      t._v(t._s(s.content)),
                                    ])
                                  : t._e(),
                                e("div", { staticClass: "update-time" }, [
                                  t._v("更新日期: " + t._s(s.updatedAt)),
                                ]),
                              ]),
                              e("div", { staticClass: "right" }, [
                                e(
                                  "span",
                                  {
                                    staticClass: "action",
                                    on: {
                                      click: function (e) {
                                        return t.handleCheck(s);
                                      },
                                    },
                                  },
                                  [t._v("查看")]
                                ),
                                e(
                                  "span",
                                  {
                                    staticClass: "action ml-11",
                                    on: {
                                      click: function (e) {
                                        return t.handleEdit(s);
                                      },
                                    },
                                  },
                                  [t._v("编辑")]
                                ),
                              ]),
                            ]
                          );
                        }),
                        0
                      ),
                    ]
                  )
                : e("Empty", {
                    attrs: { image: "search", description: "没有更多内容" },
                  }),
            ],
            1
          );
        },
        n = [],
        i = (s("e7e5"), s("d399")),
        r = (s("91d5"), s("f0ca")),
        o = (s("be7f"), s("565f")),
        c = (s("e17f"), s("2241")),
        u = (s("2994"), s("2bdd")),
        d = (s("66b9"), s("b650")),
        l = (s("14d9"), s("2b0e")),
        p = s("4360"),
        g = s("d432"),
        v = s("5a0c"),
        h = s.n(v),
        m = {
          components: {
            [d["a"].name]: d["a"],
            [u["a"].name]: u["a"],
            [c["a"].name]: c["a"],
            [o["a"].name]: o["a"],
            Empty: r["a"],
          },
          setup() {
            const { proxy: t } = Object(l["getCurrentInstance"])(),
              e = Object(l["reactive"])({
                items: [],
                hasMore: !1,
                isLoading: !1,
              }),
              s = Object(l["computed"])(() => {
                var t;
                return null === (t = p["a"].state.user.me) || void 0 === t
                  ? void 0
                  : t.id;
              }),
              a = Object(l["computed"])(() => e.items.length),
              n = async (t = !1) => {
                t && window.scrollTo(0, 0);
                const n = i["a"].loading({
                  message: "加载中...",
                  forbidClick: !0,
                });
                try {
                  const { data: i } = await g["a"].getPostByUser({
                      limit: 10,
                      offset: a.value,
                      creatorId: s.value,
                      postType: "checklist",
                    }),
                    r =
                      (null === i || void 0 === i
                        ? void 0
                        : i.posts.map((t) => ({
                            id: t.id,
                            summary:
                              null === t || void 0 === t ? void 0 : t.summary,
                            content:
                              null === t || void 0 === t ? void 0 : t.content,
                            updatedAt: h()(+t.updatedAt).format(
                              "YYYY年MM月DD日"
                            ),
                            checklistAttachments: t.checklistAttachments,
                          }))) || [];
                  (e.items = t ? r : [...e.items, ...r]),
                    (e.hasMore = i.hasNext);
                } catch (r) {
                } finally {
                  n.clear(), (e.isLoading = !1);
                }
              },
              r = (e) => {
                t.navigateTo({
                  url: "/pages-community/post/checklist-detail?postId=" + e.id,
                });
              },
              o = async (e) => {
                t.$router.push("/plugin/ptcg?postId=" + e.id);
              };
            return (
              n(!0),
              {
                ...Object(l["toRefs"])(e),
                handleCheck: r,
                onSearch: n,
                handleEdit: o,
              }
            );
          },
        },
        f = m,
        b = (s("749d"), s("0c7c")),
        k = Object(b["a"])(f, a, n, !1, null, "39148afa", null);
      e["default"] = k.exports;
    },
    d0fe: function (t, e, s) {},
    d432: function (t, e, s) {
      "use strict";
      var a = s("0ef7");
      e["a"] = {
        createPost(t) {
          return a["h"].post("/gactus-web/post/create", t);
        },
        updatePost(t) {
          return a["h"].post("/gactus-web/post/update", t);
        },
        getPostByUser(t) {
          return a["h"].post("/gactus/posts/by-user-v2", t);
        },
        getPostByTag(t) {
          return a["h"].post("/gactus/posts/by-tag-v4", t);
        },
        getSinglePost(t) {
          return a["h"].post("/gactus/single-post", t);
        },
        getYearReport(t) {
          return a["h"].post("/gactus-web/v1/poster/larp_yearly_2022", t);
        },
        getTaskDetail(t) {
          return a["h"].get("/gactus-web/v1/generative-task/user", t);
        },
        generateTaskConfirm(t) {
          return a["h"].post("/gactus-web/v1/generative-task/confirm", t);
        },
        getTaskTip(t) {
          return a["h"].get("/gactus-web/v1/generative-task/tips", t);
        },
        taskUpsert(t) {
          return a["h"].post("/gactus-web/v1/generative-task/upsert", t);
        },
        taskAddTimes(t) {
          return a["h"].post("/gactus-web/v1/generative-task/share/report", t);
        },
        feedBack(t) {
          return a["h"].post("/gactus-web/v1/session/feedback", t);
        },
        getAnswer(t) {
          return a["h"].get("/gactus-web/v1/session/get-answer", t);
        },
        sendQuestion(t) {
          return a["h"].post("/gactus-web/v1/session/send-question", t);
        },
        getPostInfo(t) {
          return a["h"].get("/gactus-web/post/detail-info", t);
        },
        getFavoriteEntryVote(t) {
          return a["h"].post("/gactus-web/v1/favorite_entry_vote/get", t);
        },
      };
    },
  },
]);
