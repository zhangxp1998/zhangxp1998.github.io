(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-6b8261ef"],
  {
    "08c4": function (e, t, a) {},
    "5e99": function (e, t, a) {},
    7352: function (e, t, a) {
      "use strict";
      a("cdc3");
    },
    b4e9: function (e, t, a) {
      "use strict";
      a.r(t);
      var i = function () {
          var e,
            t,
            a,
            i,
            o,
            n,
            s,
            l,
            r,
            u,
            d,
            c = this,
            p = c._self._c,
            v = c._self._setupProxy;
          return p(
            "div",
            { staticClass: "custom-checklist" },
            [
              p("div", { staticClass: "container" }, [
                p(
                  "div",
                  { staticClass: "container-inner" },
                  [
                    p(v.CustomHeader, {
                      attrs: {
                        title: v.title,
                        color:
                          null === (e = v.pageConfig) || void 0 === e
                            ? void 0
                            : e.color,
                        backgroundImage: v.headerBackgroundImage,
                        "show-custom-create":
                          null === (t = v.pageConfig) || void 0 === t
                            ? void 0
                            : t.ugcTemplate,
                      },
                      on: { "create-template": v.handleCreateTemplate },
                    }),
                    p(v.AddSpu, {
                      attrs: {
                        properties: v.newProperties,
                        entryType:
                          null === (a = v.pageConfig) || void 0 === a
                            ? void 0
                            : a.entryType,
                        columns:
                          null === (i = v.pageConfig) || void 0 === i
                            ? void 0
                            : i.columns,
                      },
                      on: { "select-spu": v.handleOpen },
                    }),
                    p(v.SimpleSpeak, {
                      attrs: { remark: v.remark },
                      on: { "update-remark": v.handleUpdateRemark },
                    }),
                    v.showMarkCheck
                      ? p(v.MarkCheck, {
                          attrs: {
                            value: v.mark,
                            markName:
                              null === (o = v.pageConfig) || void 0 === o
                                ? void 0
                                : o.markName,
                          },
                          on: { "update:value": v.handleUpdateMark },
                        })
                      : c._e(),
                    v.showWishCheck
                      ? p(v.WishCheck, {
                          attrs: {
                            value: v.wish,
                            markName:
                              null === (n = v.pageConfig) || void 0 === n
                                ? void 0
                                : n.wishName,
                          },
                          on: { "update:value": v.handleUpdateWish },
                        })
                      : c._e(),
                    v.route.query.shareCode
                      ? p("div", { staticClass: "share-code" }, [
                          c._v(" 由邀请人分享填写 "),
                        ])
                      : c._e(),
                  ],
                  1
                ),
              ]),
              p(
                "div",
                { staticClass: "footer" },
                [
                  p(
                    v.LoginButton,
                    { on: { success: v.handlePublishCheckList } },
                    [
                      p(v.DuButton, {
                        attrs: {
                          text: "发布我的喜好表",
                          size: "large",
                          type: "primary",
                          icon: "share",
                          iconSize: "16px",
                          full: "",
                          extStyle: {
                            fontSize: "16px",
                            fontWeight: 500,
                            lineHeight: "24px",
                          },
                          extClass: { "g-btn-disabled": !v.complete },
                          loading: v.loading,
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              p(v.SelectSpu, {
                attrs: {
                  visible: v.visible,
                  typeIds:
                    null === (s = v.pageConfig) || void 0 === s
                      ? void 0
                      : s.typeIds,
                  placeholder:
                    null === (l = v.pageConfig) || void 0 === l
                      ? void 0
                      : l.searchPlaceholder,
                  rankId: v.rankId,
                  tagIds: v.tagIds,
                  entryType:
                    null === (r = v.pageConfig) || void 0 === r
                      ? void 0
                      : r.entryType,
                  title: v.selectSpuTitle,
                  "display-search":
                    null === (u = v.pageConfig) || void 0 === u
                      ? void 0
                      : u.displaySearch,
                  publicRelations:
                    null === (d = v.pageConfig) || void 0 === d
                      ? void 0
                      : d.publicRelations,
                },
                on: { close: v.handleClose, select: v.handleSelectSpu },
              }),
              p(v.islandPopup, {
                ref: "publishPopup",
                attrs: { islandInfo: v.island },
                on: {
                  handleAfterJoin: () => {
                    v.island.joined = !0;
                  },
                },
              }),
              p(v.UserProfile, {
                attrs: { visible: v.userProfileVisible },
                on: {
                  success: function (e) {
                    v.userProfileVisible = !1;
                  },
                },
              }),
              p(v.SpringFesPopup, {
                attrs: {
                  "share-info": v.shareInfo,
                  "has-join-lottery": v.hasJoinLottery,
                },
              }),
            ],
            1
          );
        },
        o = [],
        n = (a("e7e5"), a("d399")),
        s = (a("d9e2"), a("2b0e")),
        l = a("4360"),
        r = a("a18c"),
        u = a("39d4"),
        d = a("1346"),
        c = a("69ed"),
        p = a("68a8"),
        v = a("6979"),
        h = a("147a"),
        g = a("1689"),
        m = a("8a44"),
        f = a("f379"),
        y = function () {
          var e = this,
            t = e._self._c,
            a = e._self._setupProxy;
          return t(
            "div",
            { staticClass: "u-flex-c wish-check" },
            [
              t(a.DuCheckbox, {
                attrs: {
                  size: "20px",
                  extStyle: "margin-right: 6px;",
                  value: e.value,
                },
                on: { "update:value": a.handleUpdateSelected },
              }),
              e._v(" " + e._s(a.title) + " "),
            ],
            1
          );
        },
        b = [],
        k = a("35d6"),
        I = {
          __name: "wish-check",
          props: {
            value: { type: Boolean, default: !1 },
            wishName: { type: String, default: "" },
          },
          emits: ["update:value"],
          setup(e, { emit: t }) {
            const a = e,
              i = Object(s["computed"])(() => a.wishName || "标记以上为想要"),
              o = (e) => {
                t("update:value", e);
              };
            return {
              __sfc: !0,
              props: a,
              emit: t,
              title: i,
              handleUpdateSelected: o,
              DuCheckbox: k["a"],
            };
          },
        },
        w = I,
        C = (a("e679"), a("0c7c")),
        j = Object(C["a"])(w, y, b, !1, null, "08818a7e", null),
        O = j.exports,
        x = function () {
          var e,
            t,
            a = this,
            i = a._self._c,
            o = a._self._setupProxy;
          return a.shareInfo.isInActivity
            ? i(
                "div",
                [
                  i(
                    o.Popup,
                    {
                      staticStyle: {
                        "overflow-y": "visible",
                        "background-color": "transparent",
                      },
                      attrs: { position: "bottom" },
                      model: {
                        value: o.popupVisible,
                        callback: function (e) {
                          o.popupVisible = e;
                        },
                        expression: "popupVisible",
                      },
                    },
                    [
                      i("div", { staticClass: "popup" }, [
                        i("img", {
                          staticClass: "close-btn",
                          attrs: {
                            src: "https://cdn.qiandaoapp.com/interior/images/ce184d6fe8a7e51fa87bdd80b8854a8b.svg",
                          },
                          on: {
                            click: function (e) {
                              o.popupVisible = !1;
                            },
                          },
                        }),
                        i("img", {
                          staticClass: "snow",
                          attrs: {
                            src: "https://cdn.qiandaoapp.com/interior/images/2045b96da2597d123ce5f163ec2a874d.png",
                          },
                        }),
                        i("img", {
                          staticClass: "title",
                          attrs: {
                            src:
                              null === (e = a.shareInfo) ||
                              void 0 === e ||
                              null === (t = e.activity) ||
                              void 0 === t
                                ? void 0
                                : t.titleImage,
                          },
                        }),
                        i("div", { staticClass: "subtitle" }, [
                          a._v("搞点龘(dá)事情，好礼免费送"),
                        ]),
                        i("div", { staticClass: "tasks" }, [
                          i("div", { staticClass: "task" }, [
                            i("div", { staticClass: "task-title" }, [
                              a._v(
                                " 填写喜好表参与抽奖（" +
                                  a._s("" + (a.shareInfo.shareCode ? 1 : 0)) +
                                  "/1） "
                              ),
                            ]),
                            i(
                              "div",
                              {
                                staticClass: "task-subtitle",
                                on: { click: o.handleGoLuckyPrize },
                              },
                              [
                                i("span", [
                                  a._v("填写后发布自动参与抽奖，查看锦鲤奖"),
                                ]),
                                i("img", {
                                  staticClass: "task-arrow",
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/88c67220cdcfce1460ca8f3cc64bb5b2.svg",
                                  },
                                }),
                              ]
                            ),
                          ]),
                          i("div", { staticClass: "task" }, [
                            i("div", { staticClass: "task-title" }, [
                              a._v(
                                " 邀请好友参与填写即得好礼（" +
                                  a._s(o.joinUserCount) +
                                  "/3） "
                              ),
                            ]),
                            i(
                              "div",
                              {
                                staticClass: "task-subtitle",
                                on: { click: o.handleGoSharePrize },
                              },
                              [
                                i("span", [
                                  a._v(
                                    "邀三名好友填写，100%得新年邀请礼，查看邀请礼"
                                  ),
                                ]),
                                i("img", {
                                  staticClass: "task-arrow",
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/88c67220cdcfce1460ca8f3cc64bb5b2.svg",
                                  },
                                }),
                              ]
                            ),
                            i(
                              "div",
                              { staticClass: "users" },
                              [
                                a._l(o.shareRecords, function (e, t) {
                                  return [
                                    e.isEmpty
                                      ? i(
                                          "div",
                                          {
                                            key: t,
                                            staticClass: "empty-avatar",
                                          },
                                          [
                                            i("img", {
                                              staticClass: "empty-avatar-plus",
                                              attrs: {
                                                src: "https://cdn.qiandaoapp.com/interior/images/ea2fa35bca4e0f188cdaf3e6c3672092.svg",
                                              },
                                            }),
                                          ]
                                        )
                                      : i(
                                          "div",
                                          { key: t, staticClass: "avatar" },
                                          [
                                            i("img", {
                                              staticStyle: {
                                                "object-fit": "cover",
                                                width: "100%",
                                              },
                                              attrs: { src: e.avatarUrl },
                                            }),
                                          ]
                                        ),
                                  ];
                                }),
                              ],
                              2
                            ),
                          ]),
                        ]),
                        i(
                          "div",
                          { staticClass: "btn", on: { click: o.handleClick } },
                          [
                            o.isProcessing
                              ? i("img", {
                                  staticClass: "btn-icon",
                                  attrs: {
                                    src: "https://cdn.qiandaoapp.com/interior/images/3a7ee493ea4cb099b73f66287228619c.png",
                                  },
                                })
                              : a._e(),
                            a._v(" " + a._s(o.btnText) + " "),
                          ]
                        ),
                      ]),
                    ]
                  ),
                  i(
                    "div",
                    {
                      class: [
                        "open-btn",
                        !o.popupVisible && "open-btn--visible",
                      ],
                      on: {
                        click: function (e) {
                          o.popupVisible = !0;
                        },
                      },
                    },
                    [
                      i("img", {
                        staticStyle: { "object-fit": "contain" },
                        attrs: {
                          src: "https://cdn.qiandaoapp.com/interior/images/94bc7cd80889440dcfd583e1300b7d1b.png",
                        },
                      }),
                    ]
                  ),
                ],
                1
              )
            : a._e();
        },
        P = [],
        _ = (a("8a58"), a("e41f")),
        T = (a("14d9"), a("d432")),
        q = a("ed08"),
        S = a("2e3f"),
        N = {
          __name: "spring-fes-popup",
          props: {
            shareInfo: { type: Object, required: !0 },
            hasJoinLottery: { type: Boolean, default: !1 },
          },
          setup(e) {
            const t = e,
              a = {
                "chaowan-xinchun": "https://qiandao.cn/web?pn=chaowanjili2024",
                "guquan-xinchun": "https://qiandao.cn/web?pn=guquanjili2024",
                "xiaoka-xinchunxuyuandan":
                  "https://qiandao.cn/web?pn=xiaokajili2024",
                "kapai-xinchunxuyuandan":
                  "https://qiandao.cn/web?pn=kapaijili2024",
                "mowan-xinchunxuyuandan":
                  "https://qiandao.cn/web?pn=mowanjili2024",
              },
              i = {
                "chaowan-xinchun":
                  "https://config-cdn.qiandaoapp.com/docs/2024chunjiechaowan.html",
                "guquan-xinchun":
                  "https://config-cdn.qiandaoapp.com/docs/2024chunjieguquan.html",
                "xiaoka-xinchunxuyuandan":
                  "https://config-cdn.qiandaoapp.com/docs/2024chunjiemowan2.html",
                "kapai-xinchunxuyuandan":
                  "https://config-cdn.qiandaoapp.com/docs/2024chunjiekapai.html",
                "mowan-xinchunxuyuandan":
                  "https://config-cdn.qiandaoapp.com/docs/2024chunjiemowan.html",
              };
            Object.keys(i).forEach((e) => {
              i[e] = "https://qiandao.cn/web?url=" + encodeURIComponent(i[e]);
            });
            const { proxy: o } = Object(s["getCurrentInstance"])(),
              r = o.$route,
              u = Object(s["ref"])(!1),
              d = Object(s["computed"])(() => {
                var e;
                return null === (e = l["a"].state.user.me) || void 0 === e
                  ? void 0
                  : e.id;
              });
            Object(s["watch"])(
              () => {
                var e;
                return null === (e = t.shareInfo) || void 0 === e
                  ? void 0
                  : e.isInActivity;
              },
              (e) => {
                e &&
                  Object(s["nextTick"])(() => {
                    u.value = !0;
                  });
              },
              { immediate: !0 }
            );
            const c = Object(s["computed"])(() => {
                var e;
                const a = (
                  null !== (e = t.shareInfo.shareRecords) && void 0 !== e
                    ? e
                    : []
                ).slice(0, 3);
                if (a.length < 3) {
                  const e = 3 - a.length;
                  for (let t = 0; t < e; t++) a.push({ isEmpty: !0 });
                }
                return a;
              }),
              p = Object(s["computed"])(() => {
                var e;
                const a = (
                  null !== (e = t.shareInfo.shareRecords) && void 0 !== e
                    ? e
                    : []
                ).slice(0, 3);
                return a.length;
              }),
              v = Object(s["computed"])(() =>
                t.shareInfo.shareCode
                  ? t.shareInfo.shareCode && t.shareInfo.shareRecords.length < 3
                    ? "立即去分享"
                    : "已完成，待开奖"
                  : "立即去填写"
              ),
              h = Object(s["computed"])(
                () =>
                  t.shareInfo.shareCode && t.shareInfo.shareRecords.length < 3
              );
            function g(e) {
              const t = `/pages-community/post/spu-detail?postId=${e}&showPoster=true`;
              (Object(q["h"])() || Object(q["d"])()) &&
                o.navigateTo({ url: t });
            }
            async function m() {
              if (
                (t.shareInfo.shareCode || (u.value = !1),
                t.shareInfo.shareCode && t.shareInfo.shareRecords.length < 3)
              )
                try {
                  var e, a;
                  n["a"].loading({ message: "请稍候...", forbidClick: !0 });
                  const t = await T["a"].getPostByUser({
                    orPluginIds: [r.query.pluginName],
                    creatorId: d.value,
                    limit: 1,
                    offset: 0,
                  });
                  if (
                    null === t ||
                    void 0 === t ||
                    null === (e = t.data) ||
                    void 0 === e ||
                    null === (a = e.posts) ||
                    void 0 === a ||
                    !a.length
                  )
                    throw new Error("你还没有填写该活动的喜好表");
                  g(t.data.posts[0].id), n["a"].clear();
                } catch (i) {
                  n["a"].fail({ message: i.message || "获取帖子失败" });
                }
            }
            function f() {
              t.hasJoinLottery
                ? Object(S["a"])(
                    "https://qiandao.cn/lottery?topicId=" +
                      t.shareInfo.activity.lotteryId
                  )
                : Object(S["a"])(i[r.query.pluginName]);
            }
            function y() {
              Object(S["a"])(a[r.query.pluginName]);
            }
            return {
              __sfc: !0,
              linkMap: a,
              beforeJoinLotteryLink: i,
              props: t,
              proxy: o,
              route: r,
              popupVisible: u,
              userId: d,
              shareRecords: c,
              joinUserCount: p,
              btnText: v,
              isProcessing: h,
              goToPost: g,
              handleClick: m,
              handleGoLuckyPrize: f,
              handleGoSharePrize: y,
              Popup: _["a"],
            };
          },
        },
        R = N,
        U = (a("b6fd"), Object(C["a"])(R, x, P, !1, null, "1a01e6c4", null)),
        B = U.exports,
        A = a("684b"),
        L = a("0ef7"),
        $ = {
          joinLottery(e) {
            return L["h"].post(`/lottery/v2/lotteries/${e}/join`, {
              wechatOpenGId: { encryptedData: "", iv: "" },
            });
          },
          getLotteryMe(e) {
            return L["h"].get(`/lottery/v2/lotteries/${e}/me`);
          },
        },
        J = a("d2a7"),
        M = a("4cce"),
        V = a("0644"),
        E = a.n(V),
        D = a("1816"),
        z = a.n(D),
        W = a("fc75"),
        G = a("3c27"),
        K = a("da6c"),
        F = {
          __name: "home",
          setup(e) {
            Object(s["useCssVars"])((e, t) => ({
              "654f6544": t.pageBackgroundImage,
            }));
            const { proxy: t } = Object(s["getCurrentInstance"])(),
              a = t.$route,
              i = Object(s["ref"])(!1),
              o = Object(s["ref"])(null),
              y = Object(s["ref"])(""),
              b = Object(s["ref"])(),
              k = Object(s["ref"])(!1),
              I = Object(s["ref"])(!1),
              w = Object(s["ref"])(!1),
              C = Object(s["ref"])(!1),
              j = Object(s["computed"])(() => l["a"].state.user.me),
              {
                pageConfig: x,
                properties: P,
                summary: _,
                pageBackgroundImage: N,
                headerBackgroundImage: R,
                island: U,
                setPageConfig: L,
                fetchIslandDetail: V,
              } = Object(W["a"])(),
              D = Object(s["ref"])({}),
              F = Object(s["ref"])(!1);
            async function H() {
              try {
                var e, t;
                const { data: n, code: s } = await J["a"].getActivityShareInfo({
                  activityKey: a.query.pluginName,
                });
                if (0 !== +s) return;
                if (
                  ((D.value = n),
                  null !== n &&
                    void 0 !== n &&
                    null !== (e = n.activity) &&
                    void 0 !== e &&
                    e.lotteryId &&
                    null !== (t = j.value) &&
                    void 0 !== t &&
                    t.id)
                ) {
                  var i, o;
                  const e = await $.getLotteryMe(n.activity.lotteryId);
                  null !== e &&
                    void 0 !== e &&
                    null !== (i = e.data) &&
                    void 0 !== i &&
                    null !== (o = i.post) &&
                    void 0 !== o &&
                    o.id &&
                    (F.value = !0);
                }
              } catch (n) {}
            }
            Object(s["onBeforeMount"])(async () => {
              var e;
              if (r["a"].currentRoute.query.templateId > 0)
                await re(r["a"].currentRoute.query.templateId);
              else {
                var t, i, o;
                const [e] = await l["a"].dispatch("config/loadConfigs", [
                    "posts_template/" +
                      (null === (t = r["a"].currentRoute.query) || void 0 === t
                        ? void 0
                        : t.pluginName),
                  ]),
                  a = Object(G["a"])(e || {});
                L(a),
                  (P.value =
                    (null === (i = x.value) || void 0 === i
                      ? void 0
                      : i.defaultProperties) || []),
                  r["a"].currentRoute.query.id &&
                    !1 !==
                      (null === (o = x.value) || void 0 === o
                        ? void 0
                        : o.ugcTemplate) &&
                    le(r["a"].currentRoute.query.id);
              }
              x.value.markName && (w.value = !0),
                x.value.wishName && (C.value = !0),
                V(null === (e = x.value) || void 0 === e ? void 0 : e.islandId),
                [
                  "chaowan-xinchun",
                  "guquan-xinchun",
                  "xiaoka-xinchunxuyuandan",
                  "kapai-xinchunxuyuandan",
                  "mowan-xinchunxuyuandan",
                ].includes(a.query.pluginName) && (await H()),
                setTimeout(() => {
                  var e;
                  "undefined" !== typeof wx &&
                    wx.miniProgram &&
                    wx.miniProgram.postMessage({
                      data: {
                        shareOptions: {
                          title: `邀你填写「${Y.value}」`,
                          path:
                            "/modules/pages/web-view/index?url=" +
                            encodeURIComponent(
                              `${location.origin}${a.path}?pluginName=${
                                a.query.pluginName
                              }&shareCode=${
                                null !== (e = a.query.shareCode) && void 0 !== e
                                  ? e
                                  : ""
                              }`
                            ),
                        },
                      },
                    });
                }, 100);
            }),
              Object(s["onMounted"])(() => {
                "{}" === JSON.stringify(j.value)
                  ? se()
                  : Q.value && (I.value = !0);
              });
            const Q = Object(s["computed"])(
                () => l["a"].getters["user/isUserStatusEmpty"]
              ),
              Y = Object(s["computed"])(() => {
                var e;
                return (
                  _.value ||
                  (null === (e = x.value) || void 0 === e ? void 0 : e.title)
                );
              }),
              X = Object(s["ref"])(""),
              Z = Object(s["computed"])(() => P.value || []),
              ee = Object(s["computed"])(() => {
                var e, t;
                return (
                  (null === (e = Z.value) ||
                  void 0 === e ||
                  null === (t = e[o.value]) ||
                  void 0 === t
                    ? void 0
                    : t.name) || ""
                );
              }),
              te = Object(s["computed"])(() => Z.value.every((e) => e.spuInfo)),
              ae = Object(s["computed"])(() => {
                var e, t;
                return (
                  "spu" ===
                    (null === (e = x.value) || void 0 === e
                      ? void 0
                      : e.entryType) &&
                  (null === (t = x.value) || void 0 === t ? void 0 : t.markName)
                );
              }),
              ie = Object(s["computed"])(() => {
                var e, t;
                return (
                  "spu" ===
                    (null === (e = x.value) || void 0 === e
                      ? void 0
                      : e.entryType) &&
                  (null === (t = x.value) || void 0 === t ? void 0 : t.wishName)
                );
              }),
              oe = Object(s["computed"])(() => {
                var e, t, a;
                return (
                  (null === (e = Z.value) ||
                  void 0 === e ||
                  null === (t = e[o.value]) ||
                  void 0 === t
                    ? void 0
                    : t.rankId) ||
                  (null === (a = x.value) || void 0 === a ? void 0 : a.rankId)
                );
              }),
              ne = Object(s["computed"])(() => {
                var e, t, a;
                return null !==
                  (e =
                    null === (t = Z.value) ||
                    void 0 === t ||
                    null === (a = t[o.value]) ||
                    void 0 === a
                      ? void 0
                      : a.tagIds) && void 0 !== e
                  ? e
                  : [];
              }),
              se = () => {
                const e = "/modules/pages/common-login/index";
                (Object(q["h"])() || Object(q["d"])()) &&
                  t.navigateTo({ url: e });
              },
              le = async (e) => {
                try {
                  var t;
                  const {
                    data: { post: a },
                  } = await T["a"].getPostInfo({ postId: e });
                  if (
                    null !== a &&
                    void 0 !== a &&
                    null !== (t = a.checklistAttachments) &&
                    void 0 !== t &&
                    t.length
                  ) {
                    const e = JSON.parse(a.checklistAttachments[0].meta.option);
                    e.defaultOptions
                      ? (P.value = e.defaultOptions)
                      : (P.value = (
                          (null === a || void 0 === a
                            ? void 0
                            : a.checklistAttachments) || []
                        ).map((e) => {
                          const { relatedId: t, option: a } =
                              (null === e || void 0 === e ? void 0 : e.meta) ||
                              {},
                            i = JSON.parse(a) || {};
                          return {
                            name: null === i || void 0 === i ? void 0 : i.name,
                            propertyId: t,
                          };
                        })),
                      e.defaultTitle
                        ? ((_.value = e.defaultTitle),
                          (X.value = e.defaultTitle))
                        : (_.value =
                            null === a || void 0 === a ? void 0 : a.summary);
                  }
                } catch (a) {}
              },
              re = async (e) => {
                try {
                  const {
                      data: { templates: t },
                    } = await J["a"].getPluginTemplate({ id: e }),
                    {
                      cover: a,
                      meta: i,
                      options: o,
                      pluginKey: n,
                      title: s,
                    } = (null === t || void 0 === t ? void 0 : t[0]) || {},
                    l = {
                      ...i,
                      entryType:
                        (null === K["a"] || void 0 === K["a"]
                          ? void 0
                          : K["a"][
                              null === i || void 0 === i ? void 0 : i.entryType
                            ]) || "spu",
                      pluginKey: n,
                      image: a,
                      title: s,
                      defaultProperties: (o || []).map((e) => ({
                        name:
                          null === e || void 0 === e ? void 0 : e.optionName,
                        propertyId:
                          null === e || void 0 === e ? void 0 : e.optionId,
                      })),
                    };
                  L(l),
                    (P.value =
                      (null === l || void 0 === l
                        ? void 0
                        : l.defaultProperties) || []);
                } catch (t) {
                  console.log("fetchPluginTemplate error", t);
                }
              },
              ue = (e) => {
                (i.value = !0), (o.value = e);
              },
              de = () => {
                i.value = !1;
              },
              ce = (e) => {
                var t, a, i;
                const n = E()(P.value);
                (n[o.value].spuInfo = {
                  ...e,
                  id: String(
                    (null === e || void 0 === e ? void 0 : e.entityId) ||
                      (null === e || void 0 === e ? void 0 : e.id) ||
                      (null === e || void 0 === e ? void 0 : e.entryId) ||
                      ""
                  ),
                  cover:
                    (null === e || void 0 === e ? void 0 : e.coverImage) ||
                    (null === e ||
                    void 0 === e ||
                    null === (t = e.imgs) ||
                    void 0 === t
                      ? void 0
                      : t.cover) ||
                    (null === e ||
                    void 0 === e ||
                    null === (a = e.images) ||
                    void 0 === a
                      ? void 0
                      : a.logo) ||
                    (null === e || void 0 === e ? void 0 : e.image_logo) ||
                    (null === e || void 0 === e ? void 0 : e.cover),
                  name:
                    (null === e ||
                    void 0 === e ||
                    null === (i = e.spu) ||
                    void 0 === i
                      ? void 0
                      : i.name) ||
                    (null === e || void 0 === e ? void 0 : e.name),
                }),
                  (P.value = n);
              },
              pe = () => {
                var e;
                const t = z()(
                  location.origin + "/plugin/custom-checklist/template",
                  !0
                );
                t.query = {
                  pluginName:
                    null === (e = r["a"].currentRoute.query) || void 0 === e
                      ? void 0
                      : e.pluginName,
                };
                const a = encodeURIComponent(t.toString()),
                  i = "/modules/pages/web-view/index?url=" + a;
                Object(S["a"])(i);
              },
              ve = (e) => {
                y.value = e;
              },
              he = async () => {
                try {
                  var e, a, i, o, s;
                  if (Q.value) return void (I.value = !0);
                  if (!te.value) throw new Error("你还未填完所有选项哦～");
                  if (null === (e = U.value) || void 0 === e || !e.joined)
                    return void b.value.popupOpen();
                  k.value = !0;
                  const g = Z.value.filter((e) => {
                      var t;
                      return !(
                        null !== (t = e.spuInfo) &&
                        void 0 !== t &&
                        t.noSelect
                      );
                    }),
                    m = g.map((e, t) => {
                      var a, i, o, n, s, l;
                      const r = {
                        name: e.name,
                        entryName:
                          null === (a = e.spuInfo) || void 0 === a
                            ? void 0
                            : a.name,
                        id:
                          null === (i = e.spuInfo) || void 0 === i
                            ? void 0
                            : i.id,
                        entryType:
                          null === (o = x.value) || void 0 === o
                            ? void 0
                            : o.entryType,
                        image:
                          null === (n = e.spuInfo) || void 0 === n
                            ? void 0
                            : n.cover,
                      };
                      var u;
                      0 === t &&
                        ((r.defaultOptions = Z.value.map((e) => ({
                          name: e.name,
                          property_id:
                            (null === e || void 0 === e
                              ? void 0
                              : e.property_id) ||
                            (null === e || void 0 === e
                              ? void 0
                              : e.propertyId),
                        }))),
                        X.value
                          ? (r.defaultTitle = X.value)
                          : Y.value && (r.defaultTitle = Y.value),
                        (r.defaultCover =
                          null === (u = x.value) || void 0 === u
                            ? void 0
                            : u.image));
                      return {
                        type: "checklist",
                        meta: {
                          relatedId:
                            null === (s = e.spuInfo) || void 0 === s
                              ? void 0
                              : s.id,
                          relatedType:
                            null === (l = x.value) || void 0 === l
                              ? void 0
                              : l.entryType,
                          option: JSON.stringify(r),
                        },
                      };
                    });
                  if (!m.length)
                    return (
                      Object(n["a"])("至少填写一个选项"), void (k.value = !1)
                    );
                  for (const e of m) {
                    var l;
                    if (
                      null === e ||
                      void 0 === e ||
                      null === (l = e.meta) ||
                      void 0 === l ||
                      !l.option
                    )
                      return void Object(n["a"])("option 为空，请退出页面重试");
                  }
                  const f = g.map((e) => {
                      var t, a;
                      return {
                        id:
                          null === (t = e.spuInfo) || void 0 === t
                            ? void 0
                            : t.id,
                        type:
                          null === (a = x.value) || void 0 === a
                            ? void 0
                            : a.entryType,
                        propertyId:
                          (null === e || void 0 === e
                            ? void 0
                            : e.property_id) ||
                          (null === e || void 0 === e
                            ? void 0
                            : e.propertyId) ||
                          "0",
                      };
                    }),
                    j = {
                      checklistAttachments: m,
                      summary: "",
                      content: y.value || Y.value,
                      privacy: "public",
                      islandId:
                        null === (a = x.value) || void 0 === a
                          ? void 0
                          : a.islandId,
                      type: "standard",
                      meta: {
                        plugin: {
                          id:
                            null === (i = x.value) || void 0 === i
                              ? void 0
                              : i.pluginKey,
                        },
                      },
                      activeTags: f,
                    };
                  var u, d;
                  if (
                    (r["a"].currentRoute.query.templateId > 0 &&
                      (j.meta.plugin.templateId =
                        r["a"].currentRoute.query.templateId),
                    y.value || (j.score = 2),
                    null !== (o = x.value) &&
                      void 0 !== o &&
                      o.islandPartitionId)
                  )
                    j.labels = [
                      {
                        propertyTagId: "1436337",
                        title:
                          null === (u = x.value) || void 0 === u
                            ? void 0
                            : u.title,
                        relatedType: "tag",
                        relatedId:
                          null === (d = x.value) || void 0 === d
                            ? void 0
                            : d.islandPartitionId,
                      },
                    ];
                  const {
                    data: { postId: O },
                  } = await A["a"].createPost(j);
                  if (
                    null !== (s = D.value) &&
                    void 0 !== s &&
                    s.isInActivity
                  ) {
                    var c, p, v;
                    if (
                      ((null !== (c = D.value) &&
                        void 0 !== c &&
                        c.shareCode) ||
                        (await J["a"].generateActivityShareCode({
                          activityKey: t.$route.query.pluginName,
                        })),
                      null !== (p = D.value) &&
                        void 0 !== p &&
                        null !== (v = p.activity) &&
                        void 0 !== v &&
                        v.lotteryId &&
                        !F.value)
                    ) {
                      try {
                        await $.joinLottery(D.value.activity.lotteryId);
                      } catch (h) {
                        if (301 !== h.code) throw h;
                      }
                      F.value = !0;
                    }
                    t.$route.query.shareCode &&
                      (await J["a"].addActivityShareRecord({
                        shareCode: t.$route.query.shareCode,
                      })),
                      setTimeout(() => {
                        H();
                      }, 0);
                  }
                  const P = new Set();
                  g.forEach((e) => {
                    var t;
                    null !== e &&
                      void 0 !== e &&
                      null !== (t = e.spuInfo) &&
                      void 0 !== t &&
                      t.id &&
                      P.add(e.spuInfo.id);
                  });
                  const _ = [...P.values()];
                  ae.value &&
                    w.value &&
                    (await Promise.all(
                      _.map((e) =>
                        A["a"].mark({ spuId: e, action: "CREATE", meta: "[]" })
                      )
                    )),
                    ie.value &&
                      C.value &&
                      (await M["a"].postUserWishes({
                        action: "add",
                        items: _,
                      })),
                    setTimeout(() => {
                      (k.value = !1), ge(O);
                    }, 500);
                } catch (h) {
                  (k.value = !1),
                    Object(n["a"])(
                      null === h || void 0 === h ? void 0 : h.message
                    );
                }
              },
              ge = (e) => {
                const a = `/pages-community/post/spu-detail?postId=${e}&&showPoster=true`;
                (Object(q["h"])() || Object(q["d"])()) &&
                  t.navigateTo({ url: a });
              },
              me = (e) => {
                w.value = e;
              },
              fe = (e) => {
                C.value = e;
              };
            return {
              __sfc: !0,
              proxy: t,
              route: a,
              visible: i,
              selectIndex: o,
              remark: y,
              publishPopup: b,
              loading: k,
              userProfileVisible: I,
              mark: w,
              wish: C,
              me: j,
              pageConfig: x,
              properties: P,
              summary: _,
              pageBackgroundImage: N,
              headerBackgroundImage: R,
              island: U,
              setPageConfig: L,
              fetchIslandDetail: V,
              shareInfo: D,
              hasJoinLottery: F,
              fetchShareInfo: H,
              isUserStatusEmpty: Q,
              title: Y,
              postDefaultTitle: X,
              newProperties: Z,
              selectSpuTitle: ee,
              complete: te,
              showMarkCheck: ae,
              showWishCheck: ie,
              rankId: oe,
              tagIds: ne,
              login: se,
              fetchPostDetail: le,
              fetchPluginTemplate: re,
              handleOpen: ue,
              handleClose: de,
              handleSelectSpu: ce,
              handleCreateTemplate: pe,
              handleUpdateRemark: ve,
              handlePublishCheckList: he,
              goToPost: ge,
              handleUpdateMark: me,
              handleUpdateWish: fe,
              DuButton: u["a"],
              CustomHeader: d["a"],
              AddSpu: c["a"],
              SimpleSpeak: p["a"],
              SelectSpu: v["a"],
              islandPopup: h["a"],
              UserProfile: g["a"],
              LoginButton: m["a"],
              MarkCheck: f["a"],
              WishCheck: O,
              SpringFesPopup: B,
            };
          },
        },
        H = F,
        Q = (a("7352"), Object(C["a"])(H, i, o, !1, null, "b89be198", null));
      t["default"] = Q.exports;
    },
    b6fd: function (e, t, a) {
      "use strict";
      a("5e99");
    },
    cdc3: function (e, t, a) {},
    d432: function (e, t, a) {
      "use strict";
      var i = a("0ef7");
      t["a"] = {
        createPost(e) {
          return i["h"].post("/gactus-web/post/create", e);
        },
        updatePost(e) {
          return i["h"].post("/gactus-web/post/update", e);
        },
        getPostByUser(e) {
          return i["h"].post("/gactus/posts/by-user-v2", e);
        },
        getPostByTag(e) {
          return i["h"].post("/gactus/posts/by-tag-v4", e);
        },
        getSinglePost(e) {
          return i["h"].post("/gactus/single-post", e);
        },
        getYearReport(e) {
          return i["h"].post("/gactus-web/v1/poster/larp_yearly_2022", e);
        },
        getTaskDetail(e) {
          return i["h"].get("/gactus-web/v1/generative-task/user", e);
        },
        generateTaskConfirm(e) {
          return i["h"].post("/gactus-web/v1/generative-task/confirm", e);
        },
        getTaskTip(e) {
          return i["h"].get("/gactus-web/v1/generative-task/tips", e);
        },
        taskUpsert(e) {
          return i["h"].post("/gactus-web/v1/generative-task/upsert", e);
        },
        taskAddTimes(e) {
          return i["h"].post("/gactus-web/v1/generative-task/share/report", e);
        },
        feedBack(e) {
          return i["h"].post("/gactus-web/v1/session/feedback", e);
        },
        getAnswer(e) {
          return i["h"].get("/gactus-web/v1/session/get-answer", e);
        },
        sendQuestion(e) {
          return i["h"].post("/gactus-web/v1/session/send-question", e);
        },
        getPostInfo(e) {
          return i["h"].get("/gactus-web/post/detail-info", e);
        },
        getFavoriteEntryVote(e) {
          return i["h"].post("/gactus-web/v1/favorite_entry_vote/get", e);
        },
      };
    },
    e679: function (e, t, a) {
      "use strict";
      a("08c4");
    },
  },
]);
