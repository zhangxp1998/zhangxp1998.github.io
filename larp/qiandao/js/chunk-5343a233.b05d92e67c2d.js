(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["chunk-5343a233"],
  {
    "7ccf": function (a, s, e) {
      "use strict";
      e.r(s);
      var o = function () {
          var a = this,
            s = a._self._c;
          return s("div", { staticClass: "drama-doodle" }, [
            1 === this.part
              ? s(
                  "div",
                  { staticClass: "drama-list" },
                  [
                    s("div", { staticClass: "subtitle" }, [
                      a._v("👇点击选择事项"),
                    ]),
                    a._l(this.dramaList, function (e, o) {
                      return s(
                        "div",
                        {
                          key: o,
                          staticClass: "drama-option",
                          style: o >= 50 ? "color: #4900bf" : "",
                          on: {
                            click: function (s) {
                              return a.chooseDrama(o);
                            },
                          },
                        },
                        [
                          a._v(" " + a._s(e.name) + " "),
                          e.choose
                            ? s("span", { staticClass: "choose" }, [a._v("✔️")])
                            : a._e(),
                        ]
                      );
                    }),
                    s(
                      "div",
                      { staticClass: "btn", on: { click: a.handleNextBtn } },
                      [a._v("选好了")]
                    ),
                  ],
                  2
                )
              : a._e(),
            2 === this.part
              ? s("div", [
                  s("div", { staticClass: "poster" }, [
                    s("img", {
                      staticClass: "bg",
                      attrs: {
                        src: "https://cdn.qiandaoapp.com/interior/images/527dae0644ed49bf8dd86f9f095f1395.jpg",
                        alt: "bg",
                      },
                    }),
                    s("div", { staticClass: "highlight-group" }, [
                      s(
                        "div",
                        { staticClass: "highlight" },
                        a._l(this.dramaList.slice(0, 30), function (e, o) {
                          return s(
                            "div",
                            { key: o, staticClass: "drama-line" },
                            [
                              s(
                                "div",
                                {
                                  staticClass: "drama",
                                  style: e.choose
                                    ? "background-color: " + a.selectedColor
                                    : "",
                                },
                                [a._v(" " + a._s(e.name) + " ")]
                              ),
                            ]
                          );
                        }),
                        0
                      ),
                      s(
                        "div",
                        { staticClass: "highlight" },
                        a._l(this.dramaList.slice(-26, 56), function (e, o) {
                          return s(
                            "div",
                            { key: o, staticClass: "drama-line" },
                            [
                              s(
                                "div",
                                {
                                  staticClass: "drama",
                                  style: e.choose
                                    ? "background-color: " + a.selectedColor
                                    : "",
                                },
                                [a._v(" " + a._s(e.name) + " ")]
                              ),
                              19 === o
                                ? [
                                    s("br"),
                                    s("br"),
                                    a._v(" 千岛岛民专属～ "),
                                    s("br"),
                                  ]
                                : a._e(),
                            ],
                            2
                          );
                        }),
                        0
                      ),
                    ]),
                  ]),
                  s(
                    "div",
                    { staticClass: "color-group" },
                    a._l(this.colorList, function (e, o) {
                      return s(
                        "div",
                        {
                          key: o,
                          staticClass: "color-btn",
                          on: {
                            click: function (s) {
                              return a.setColor(e.color);
                            },
                          },
                        },
                        [a._v(" " + a._s(e.name) + " ")]
                      );
                    }),
                    0
                  ),
                  s(
                    "div",
                    { staticClass: "btn", on: { click: a.handleRenderBtn } },
                    [a._v("一键生成海报")]
                  ),
                ])
              : a._e(),
            3 === this.part
              ? s(
                  "div",
                  { staticClass: "final", attrs: { id: "canvas" } },
                  [
                    a.image
                      ? [
                          s("img", {
                            staticClass: "draw",
                            attrs: { src: a.image },
                          }),
                        ]
                      : s("div", { staticClass: "poster" }, [
                          s("img", {
                            staticClass: "bg",
                            attrs: {
                              src: "https://cdn.qiandaoapp.com/interior/images/527dae0644ed49bf8dd86f9f095f1395.jpg",
                              alt: "bg",
                            },
                          }),
                          s("div", { staticClass: "highlight-group" }, [
                            s(
                              "div",
                              { staticClass: "highlight" },
                              a._l(
                                this.dramaList.slice(0, 30),
                                function (e, o) {
                                  return s(
                                    "div",
                                    { key: o, staticClass: "drama-line" },
                                    [
                                      s(
                                        "div",
                                        {
                                          staticClass: "drama",
                                          style: e.choose
                                            ? "background-color: " +
                                              a.selectedColor
                                            : "",
                                        },
                                        [a._v(" " + a._s(e.name) + " ")]
                                      ),
                                    ]
                                  );
                                }
                              ),
                              0
                            ),
                            s(
                              "div",
                              { staticClass: "highlight" },
                              a._l(
                                this.dramaList.slice(-26, 56),
                                function (e, o) {
                                  return s(
                                    "div",
                                    { key: o, staticClass: "drama-line" },
                                    [
                                      s(
                                        "div",
                                        {
                                          staticClass: "drama",
                                          style: e.choose
                                            ? "background-color: " +
                                              a.selectedColor
                                            : "",
                                        },
                                        [a._v(" " + a._s(e.name) + " ")]
                                      ),
                                      19 === o
                                        ? [
                                            s("br"),
                                            s("br"),
                                            a._v(" 千岛岛民专属～ "),
                                            s("br"),
                                          ]
                                        : a._e(),
                                    ],
                                    2
                                  );
                                }
                              ),
                              0
                            ),
                          ]),
                          a._m(0),
                        ]),
                  ],
                  2
                )
              : a._e(),
            3 === this.part
              ? s(
                  "div",
                  { staticClass: "footer" },
                  [
                    a.image
                      ? [
                          s("div", { staticClass: "tip" }, [
                            a._v("一一 长 按 上 方 图 片 保 存 一一"),
                          ]),
                          s(
                            "div",
                            {
                              staticClass: "goback-btn",
                              on: { click: a.goBack },
                            },
                            [a._v("重新选择")]
                          ),
                        ]
                      : s("div", { staticClass: "loader" }, [
                          a._v("图片生成中…"),
                        ]),
                  ],
                  2
                )
              : a._e(),
          ]);
        },
        t = [
          function () {
            var a = this,
              s = a._self._c;
            return s("div", { staticClass: "qrcode" }, [
              a._v(" 扫码涂你的人生清单 "),
              s("img", {
                staticClass: "qrcode-img",
                attrs: { src: "../img/qrcode.png" },
              }),
            ]);
          },
        ],
        c = (e("ed08"), e("c0e9")),
        i = e.n(c),
        n = {
          data() {
            return {
              dramaList: [
                { name: "1. 狂炫店家的小零食", choose: !1 },
                { name: "2. 在剧本杀店撸猫猫", choose: !1 },
                { name: "3. 玩过有美食的剧本杀", choose: !1 },
                { name: "4. 打本时写板书", choose: !1 },
                { name: "5. 拿到一个很贴自己的角色", choose: !1 },
                { name: "6. 在剧本杀里嗑别人的cp", choose: !1 },
                { name: "7. 玩过一次超过200元的本", choose: !1 },
                { name: "8. 拿过反串角色", choose: !1 },
                { name: "9. 谈一场甜甜的恋爱", choose: !1 },
                { name: "10. 情感本哭到不能自己", choose: !1 },
                { name: "11. 认真输出却被cp下头", choose: !1 },
                { name: "12. 给cp写一封信", choose: !1 },
                { name: "13. 和npc谈恋爱", choose: !1 },
                { name: "14. 牢底坐穿10小时", choose: !1 },
                { name: "15. 车友迟到半小时以上", choose: !1 },
                { name: "16. 盘通宵出门看日出", choose: !1 },
                { name: "17. 在剧本杀里求婚/被求婚", choose: !1 },
                { name: "18. 拼车遇到下头车友", choose: !1 },
                { name: "19. 赢过一场机制本", choose: !1 },
                { name: "20. 成功当一次老骗子", choose: !1 },
                { name: "21. 在阵营本里被人骗", choose: !1 },
                { name: "22. 机制本和车友吵起来", choose: !1 },
                { name: "23. 看过超惊艳的演绎", choose: !1 },
                { name: "24. 拿过全场大c位", choose: !1 },
                { name: "25. 拿过边缘/怨种角色", choose: !1 },
                { name: "26. 早场11点前打本", choose: !1 },
                { name: "27. 做过恐怖的单人搜证", choose: !1 },
                { name: "28. 玩恐怖本被吓哭", choose: !1 },
                { name: "29. 当一次全场mvp", choose: !1 },
                { name: "30. 打本碰到喜欢的人", choose: !1 },
                { name: "31. 当一次carry全场的推土机", choose: !1 },
                { name: "32. 玩到一半打开电脑工作", choose: !1 },
                { name: "33. 一天连打2个本", choose: !1 },
                { name: "34. 玩过仙女局/皇帝局", choose: !1 },
                { name: "35. 收到特别的伴手礼", choose: !1 },
                { name: "36. 在剧本杀店过生日", choose: !1 },
                { name: "37. 和车友一起拍合照", choose: !1 },
                { name: "38. 在剧本杀里结婚", choose: !1 },
                { name: "39. 打剧本杀困到睡着", choose: !1 },
                { name: "40. 做车头被炸车", choose: !1 },
                { name: "41. 在剧本杀里被告白", choose: !1 },
                { name: "42. 跑去另一个城市打本", choose: !1 },
                { name: "43. 结交到志同道合的朋友", choose: !1 },
                { name: "44. 拿凶手本成功逃脱", choose: !1 },
                { name: "45. 非凶手却被推出局", choose: !1 },
                { name: "46. 参加剧本杀相亲局", choose: !1 },
                { name: "47. 写过千字以上剧评", choose: !1 },
                { name: "48. 为了喜欢的本蹲抢号", choose: !1 },
                { name: "49. 打过当地明星dm的本", choose: !1 },
                { name: "50. 去过一次剧本杀展会", choose: !1 },
                { name: "1. 得到千岛剧本杀徽章", choose: !1 },
                { name: "2. 用过千岛剧本杀优惠券", choose: !1 },
                { name: "3. 参与过千岛剧本杀霸王餐", choose: !1 },
                { name: "4. 在千岛剧本杀标记过剧本", choose: !1 },
                { name: "5. 在千岛剧本杀给别人点赞", choose: !1 },
                { name: "6. 在千岛剧本杀关注自己的车友", choose: !1 },
              ],
              colorList: [
                { name: "绿色", color: "rgba(71, 231, 101, 40%)" },
                { name: "黄色", color: "rgba(238, 236, 32, 40%)" },
                { name: "红色", color: "rgba(212, 69, 69, 40%)" },
                { name: "蓝色", color: "rgba(104, 176, 243, 40%)" },
              ],
              selectedColor: "rgba(212, 69, 69, 40%)",
              loading: !1,
              image: "",
              part: 1,
            };
          },
          methods: {
            handleNextBtn() {
              this.part = 2;
            },
            chooseDrama(a) {
              this.dramaList[a].choose = !this.dramaList[a].choose;
            },
            setColor(a) {
              this.selectedColor = a;
            },
            handleRenderBtn() {
              (this.part = 3), this.drawImage();
            },
            drawImage() {
              this.$nextTick(() => {
                setTimeout(() => {
                  i()(document.getElementById("canvas"), {
                    allowTaint: !1,
                    useCORS: !0,
                    backgroundColor: "white",
                  })
                    .then((a) => {
                      (this.image = a.toDataURL("image/jpg")),
                        this.$toast.show({ title: "图片已生成，长按保存" });
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
        r = n,
        h = (e("84a9"), e("0c7c")),
        l = Object(h["a"])(r, o, t, !1, null, null, null);
      s["default"] = l.exports;
    },
    "84a9": function (a, s, e) {
      "use strict";
      e("ee1b");
    },
    ee1b: function (a, s, e) {},
  },
]);
