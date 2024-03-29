var slickScroll;
(() => {
    "use strict";
    var e = {
        d: (t, i) => {
            for (var s in i) e.o(i, s) && !e.o(t, s) && Object.defineProperty(t, s, {
                enumerable: !0,
                get: i[s]
            })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: e => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }
    },
        t = {};
    (() => {
        e.r(t), e.d(t, {
            default: () => O
        });
        const i = {
            root: "body",
            duration: 1e3,
            easing: "cubic-bezier(0.15, 1, 0.4, 1)",
            offsets: [],
            fixedOffsets: []
        },
            s = {
                speedY: 1,
                speedX: 1
            },
            r = [{
                name: "easeInSine",
                value: [.12, 0, .39, 0]
            }, {
                name: "easeOutSine",
                value: [.61, 1, .88, 1]
            }, {
                name: "easeInOutSine",
                value: [.37, 0, .63, 1]
            }, {
                name: "easeInQuad",
                value: [.11, 0, .5, 0]
            }, {
                name: "easeOutQuad",
                value: [.5, 1, .89, 1]
            }, {
                name: "easeInOutQuad",
                value: [.45, 0, .55, 1]
            }, {
                name: "easeInCubic",
                value: [.32, 0, .67, 0]
            }, {
                name: "easeOutCubic",
                value: [.33, 1, .68, 1]
            }, {
                name: "easeInOutCubic",
                value: [.65, 0, .35, 1]
            }, {
                name: "easeInQuart",
                value: [.5, 0, .75, 0]
            }, {
                name: "easeOutQuart",
                value: [.25, 1, .5, 1]
            }, {
                name: "easeInOutQuart",
                value: [.76, 0, .24, 1]
            }, {
                name: "easeInQuint",
                value: [.64, 0, .78, 0]
            }, {
                name: "easeOutQuint",
                value: [.22, 1, .36, 1]
            }, {
                name: "easeInOutQuint",
                value: [.83, 0, .17, 1]
            }, {
                name: "easeInExpo",
                value: [.7, 0, .84, 0]
            }, {
                name: "easeOutExpo",
                value: [.16, 1, .3, 1]
            }, {
                name: "easeInOutExpo",
                value: [.87, 0, .13, 1]
            }, {
                name: "easeInCirc",
                value: [.55, 0, 1, .45]
            }, {
                name: "easeOutCirc",
                value: [0, .55, .45, 1]
            }, {
                name: "easeInOutCirc",
                value: [.85, 0, .15, 1]
            }];

        function o(e, t) {
            return "string" == typeof e ? t ? document.querySelectorAll(e) : document.querySelector(e) : e
        }

        function a(e, t, i, s) {
            let r = .1,
                o = "function" == typeof Float32Array;

            function a(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function n(e, t) {
                return 3 * t - 6 * e
            }

            function l(e) {
                return 3 * e
            }

            function f(e, t, i) {
                return ((a(t, i) * e + n(t, i)) * e + l(t)) * e
            }

            function h(e, t, i) {
                return 3 * a(t, i) * e * e + 2 * n(t, i) * e + l(t)
            }
            if (!(0 <= e && e <= 1 && 0 <= i && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
            if (e === t && i === s) return function (e) {
                return e
            };
            let m = o ? new Float32Array(11) : new Array(11);
            for (let t = 0; t < 11; ++t) m[t] = f(t * r, e, i);
            return o => 0 === o || 1 === o ? o : f(function (t) {
                let s = 0,
                    o = 1;
                for (; 10 !== o && m[o] <= t; ++o) s += r;
                --o;
                let a = s + (t - m[o]) / (m[o + 1] - m[o]) * r,
                    n = h(a, e, i);
                return n >= .001 ? function (e, t, i, s) {
                    for (let r = 0; r < 4; ++r) {
                        let r = h(t, i, s);
                        if (0 === r) return t;
                        t -= (f(t, i, s) - e) / r
                    }
                    return t
                }(t, a, e, i) : 0 === n ? a : function (e, t, i, s, r) {
                    let o, a, n = 0;
                    do {
                        a = t + (i - t) / 2, o = f(a, s, r) - e, o > 0 ? i = a : t = a
                    } while (Math.abs(o) > 1e-7 && ++n < 10);
                    return a
                }(t, s, s + r, e, i)
            }(o), t, s)
        }
        var n, l, f, h, m, p, c, d, u, y, v, w, b, g, x, k = function (e, t, i, s, r) {
            if ("m" === s) throw new TypeError("Private method is not writable");
            if ("a" === s && !r) throw new TypeError("Private accessor was defined without a setter");
            if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
            return "a" === s ? r.call(e, i) : r ? r.value = i : t.set(e, i), i
        },
            S = function (e, t, i, s) {
                if ("a" === i && !s) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !s : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === i ? s : "a" === i ? s.call(e) : s ? s.value : t.get(e)
            };
        class O {
            constructor(e) {
                n.add(this), l.set(this, void 0), f.set(this, {
                    x: 0,
                    y: 0
                }), h.set(this, {
                    x: 0,
                    y: 0
                }), m.set(this, void 0), p.set(this, void 0), c.set(this, void 0), d.set(this, []), u.set(this, []), y.set(this, void 0), w.set(this, (e => {
                    k(this, f, {
                        x: S(this, p, "f").scrollLeft,
                        y: S(this, p, "f").scrollTop
                    }, "f"), void 0 !== S(this, f, "f").x && void 0 !== S(this, f, "f").y || k(this, f, {
                        x: S(this, p, "f").scrollX,
                        y: S(this, p, "f").scrollY
                    }, "f"), S(this, l, "f").onScroll && new Promise((t => {
                        S(this, l, "f").onScroll(e), t(!0)
                    }))
                })), b.set(this, (() => {
                    if (S(this, y, "f")) return;
                    let e = function (e) {
                        let t, i = r.filter((t => t.name == e));
                        if (t = i[0] ? i[0].value : (e = (e = e.split(/([^\(-\)]*)/))[3].split(/,(?![^()]*\()/)).map((e => parseFloat(e))), Array.isArray(t) && 4 == t.length) return t;
                        throw "easing string is invalid."
                    }(S(this, l, "f").easing),
                        t = 1 / (S(this, l, "f").duration / 10 + 1);
                    S(this, h, "f").x += a.apply(null, e)(t) * (S(this, f, "f").x - S(this, h, "f").x), S(this, h, "f").y += a.apply(null, e)(t) * (S(this, f, "f").y - S(this, h, "f").y), S(this, h, "f").x = Math.ceil(100 * S(this, h, "f").x) / 100, S(this, h, "f").y = Math.ceil(100 * S(this, h, "f").y) / 100;
                    let i = -1 * S(this, h, "f").x,
                        n = -1 * S(this, h, "f").y,
                        p = `translate3d(${i}px, ${n}px, 0px)`;
                    if (S(this, m, "f").fixed.style.webkitTransform = p, S(this, m, "f").fixed.style.transform = p, Array.isArray(S(this, u, "f")))
                        for (let e = 0; e < S(this, u, "f").length; e++) {
                            let t = Object.assign({}, s, S(this, u, "f")[e]),
                                r = `translate3d(${i * (t.speedX - 1)}px, ${n * (t.speedY - 1)}px, 0)`,
                                a = o(t.element, !0);
                            if (NodeList.prototype.isPrototypeOf(a))
                                for (let e of a) e.style.webkitTransform = r, e.style.transform = r;
                            else a.style.webkitTransform = r, a.style.transform = r
                        }
                    if (Array.isArray(S(this, d, "f")))
                        for (let e = 0; e < S(this, d, "f").length; e++) {
                            let t = `translate3d(${-i}px, ${-n}px, 0px)`,
                                s = o(S(this, d, "f")[e], !0);
                            if (NodeList.prototype.isPrototypeOf(s))
                                for (let e of s) e.style.webkitTransform = t, e.style.transform = t;
                            else s.style.webkitTransform = t, s.style.transform = t
                        }
                    requestAnimationFrame((() => S(this, b, "f").call(this)))
                })), x.set(this, (() => {
                    void 0 !== S(this, m, "f") && (S(this, m, "f").dummy.style.height = S(this, m, "f").fixed.scrollHeight + "px")
                })), k(this, l, Object.assign({}, i, e), "f"), k(this, p, o(e.root), "f"), void 0 !== e.fixedOffsets && k(this, d, e.fixedOffsets, "f"), void 0 !== e.offsets && k(this, u, e.offsets, "f"),
                    function () {
                        let e = !1;
                        var t;
                        return t = navigator.userAgent || navigator.vendor, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substring(0, 4))) && (e = !0), !e && CSS.supports && (e = !CSS.supports("position", "sticky")), !e
                    }() ? S(this, n, "m", v).call(this) : S(this, n, "m", g).call(this)
            }
            destroy() {
                let e = S(this, p, "f").querySelector("._SS_wrapper");
                S(this, p, "f").removeEventListener("scroll", S(this, w, "f")), S(this, p, "f").removeEventListener("resize", S(this, x, "f")), S(this, c, "f").disconnect();
                for (let t = e.children.length; t > 0; t--) e.children[t - 1].removeProperty && e.children[t - 1].removeProperty("transform"), S(this, p, "f").insertBefore(e.children[t - 1], S(this, p, "f").children[0]);

                function t(e) {
                    e && e.forEach((e => {
                        let t = o(e.element, !0);
                        if (e.element || (t = o(e, !0)), NodeList.prototype.isPrototypeOf(t))
                            for (e of t) e.style.removeProperty("transform"), e.style.removeProperty("-webkit-transform");
                        else t.style.removeProperty("transform"), t.style.removeProperty("-webkit-transform")
                    }))
                }
                e.remove(), o(S(this, l, "f").root).querySelector("._SS_dummy").remove(), S(this, p, "f").style.removeProperty("overflow"), S(this, p, "f").style.removeProperty("position"), k(this, y, !0, "f"), t(S(this, u, "f")), t(S(this, d, "f"))
            }
            removeOffset(e) {
                k(this, u, S(this, u, "f").filter((t => t.element !== e)), "f"), k(this, u, S(this, u, "f").filter((t => t.element !== o(e, !0))), "f"), k(this, d, S(this, d, "f").filter((t => t !== e)), "f"), k(this, d, S(this, d, "f").filter((t => t !== o(e, !0))), "f");
                let t = o(e, !0);
                if (NodeList.prototype.isPrototypeOf(t))
                    for (let e of t) e.style.removeProperty("transform"), e.style.removeProperty("-webkit-transform"), "fixed" == e.style.position && e.style.removeProperty("position");
                else t.style.removeProperty("transform"), t.style.removeProperty("-webkit-transform"), "fixed" == t.style.position && t.style.removeProperty("position")
            }
            addOffset(e) {
                "object" == typeof e && !S(this, u, "f").find((t => t.element == e.element)) && e.element && (e = Object.assign({}, s, e), S(this, u, "f").push(e))
            }
            addFixedOffset(e) {
                o(e, !0) && !S(this, d, "f").includes(e) && S(this, d, "f").push(e)
            }
        }
        l = new WeakMap, f = new WeakMap, h = new WeakMap, m = new WeakMap, p = new WeakMap, c = new WeakMap, d = new WeakMap, u = new WeakMap, y = new WeakMap, w = new WeakMap, b = new WeakMap, x = new WeakMap, n = new WeakSet, v = function () {
            k(this, m, function (e) {
                "absolute" == getComputedStyle(e).position && "fixed" == getComputedStyle(e).position || (e.style.position = "relative");
                let t = document.createElement("div"),
                    i = document.createElement("div");
                t.classList.add("_SS_wrapper"), i.classList.add("_SS_dummy");
                for (let i = e.children.length; i > 0; i--) t.insertBefore(e.children[i - 1], t.children[0]);
                return e.innerHTML = "", e.style.overflow = "auto", e.appendChild(t), e.appendChild(i), i.style.height = t.scrollHeight + "px", i.style.width = t.scrollWidth + "px", i.style.top = "0px", i.style.left = "0px", i.style.position = "absolute", i.style.zIndex = "-9999", t.style.zIndex = "1", t.style.height = "100%", t.style.width = "100%", t.style.overflow = "visible", t.style.top = "0px", t.style.left = "0px", t.style.position = "sticky", {
                    fixed: e.querySelector("div._SS_wrapper"),
                    dummy: e.querySelector("div._SS_dummy")
                }
            }(S(this, p, "f")), "f");
            let e = new WebKitCSSMatrix(window.getComputedStyle(S(this, m, "f").fixed).transform);
            k(this, f, {
                x: e.m41,
                y: e.m42
            }, "f"), k(this, c, new MutationObserver(S(this, x, "f")), "f"), S(this, c, "f").observe(S(this, p, "f"), {
                childList: !0,
                attributes: !0,
                subtree: !0
            }), window.addEventListener("resize", S(this, x, "f")), S(this, p, "f").addEventListener("scroll", S(this, w, "f")), S(this, b, "f").call(this)
        }, g = function () {
            S(this, p, "f").addEventListener("scroll", (e => {
                S(this, u, "f") && S(this, u, "f").forEach((t => {
                    t = Object.assign({}, s, t);
                    let i = `translate3d(${e.target.scrollLeft * (1 - t.speedX)}px, ${e.target.scrollTop * (1 - t.speedY)}px, 0px)`,
                        r = o(t.element, !0);
                    if (Symbol.iterator in Object(r))
                        for (let e of r) e.style.webkitTransform = i, e.style.transform = i;
                    else r.style.webkitTransform = i, r.style.transform = i
                }))
            })), S(this, d, "f") && S(this, d, "f").forEach((e => {
                let t = o(e, !0);
                if (Symbol.iterator in Object(t))
                    for (let e of t) e.style.position = "fixed";
                else t.style.position = "fixed"
            }))
        }
    })(), slickScroll = t
})();