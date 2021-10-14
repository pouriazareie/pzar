(function () {
	/*

	 Copyright The Closure Library Authors.
	 SPDX-License-Identifier: Apache-2.0
	*/
	'use strict';
	var aa = "-caption",
		ba = "-content",
		ca = "-disabled",
		da = "-dropdown",
		ea = "-t-k0-und",
		fa = "Africa Latin",
		ha = "BUTTON",
		ia = "CYRILLIC TYPEWRITTER",
		ja = "Compatibility",
		ka = "Component already rendered",
		f = "DIV",
		la = "Deutsch",
		ma = "Din\u00e9 bizaad - Modern",
		na = "Edge",
		pa = "English",
		qa = "Fran\u00e7ais",
		ra = "GOOGLE_INPUT_CHEXT_FLAG",
		sa = "GOOGLE_INPUT_NON_CHEXT_FLAG",
		ta = "Historic",
		ua = "IFRAME",
		va = "INPUT",
		wa = "IS_INPUT_ACTIVE",
		xa = "Inscript",
		ya = "Insert special characters",
		za = "Invalid event type",
		Aa = "Italiano",
		Ba = "Less Common",
		Ca = "Move cursor to a text field before you click a candidate",
		Da = "Nederlands",
		Ea = "Opera",
		Fa = "Other",
		Ga = "PHONETIC",
		Ha = "Portugu\u00eas",
		Ia = "Portugu\u00eas brasileiro",
		Ja = "Portugu\u00eas europeu",
		Ka = "SCRIPT",
		n = "SPAN",
		La = "Search by keyword (e.g. arrow) or codepoint",
		Ma = "Symbol.iterator",
		Na = "TEXTAREA",
		Oa = "US International",
		Pa = "Unable to set parent component",
		Qa = "Uneven number of arguments",
		Ra = "about:invalid#zClosurez",
		Sa = "absolute",
		Ta = "act",
		Ua = "action",
		Va = "activedescendant",
		Wa = "af-t-i0-handwrit",
		Xa = "aftershow",
		Ya = "am-t-i0-handwrit",
		Za = "ar-t-i0-handwrit",
		$a = "ar-t-i0-und",
		ab = "ar-t-k0-und",
		bb = "aria-hidden",
		cb = "aria-label",
		db = "as-t-i0-handwrit",
		eb = "assertive",
		fb = "auto",
		gb = "autocapitalize",
		hb = "az-t-i0-handwrit",
		ib = "be-t-i0-handwrit",
		jb = "beforeshow",
		kb = "bg-t-i0-handwrit",
		mb = "bg-t-k0-qwerty",
		nb = "blur",
		ob = "bn-t-i0-handwrit",
		pb = "bn-t-und-latn-k0-und",
		qb = "bo-t-i0-handwrit",
		rb = "bs-t-i0-handwrit",
		sb = "button",
		tb = "ca-t-i0-handwrit",
		ub = "ceb-t-i0-handwrit",
		vb = "cfx",
		wb = "changeState",
		xb = "character",
		yb = "checked",
		zb = "chr-t-und-latn-k0-und",
		p = "click",
		Ab = "co-t-i0-handwrit",
		Bb = "co-t-k0-accents",
		Cb = "complete",
		Db = "compositionend",
		Eb = "contextmenu",
		Fb = "crk-t-k0-phone",
		Gb = "cs-t-i0-handwrit",
		Hb = "cs-t-k0-qwertz",
		Ib = "cy-t-i0-handwrit",
		Jb = "da-t-i0-handwrit",
		Kb = "dblclick",
		Lb = "de-ch-t-k0-und",
		Mb = "de-t-i0-handwrit",
		Nb = "de-t-i0-und",
		Ob = "de-t-k0-accents",
		Pb = "delete",
		Qb = "direction",
		Rb = "disabled",
		Sb = "editor-cp-button",
		Tb = "el-t-i0-handwrit",
		q = "en",
		Ub = "en-t-i0-handwrit",
		Vb = "en-t-i0-und",
		Wb = "en-t-k0-dvorak",
		Xb = "en-us-t-k0-intl",
		Yb = "enter",
		Zb = "eo-t-i0-handwrit",
		$b = "es-t-i0-handwrit",
		ac = "es-t-i0-und",
		bc = "es-t-k0-accents",
		cc = "es-t-k0-und",
		dc = "et-t-i0-handwrit",
		ec = "eu-t-i0-handwrit",
		fc = "fa-t-i0-handwrit",
		gc = "fa-t-i0-und",
		hc = "fa-t-k0-und",
		ic = "fi-t-i0-handwrit",
		kc = "fil-t-i0-handwrit",
		lc = "focus",
		mc = "focusin",
		nc = "focusout",
		oc = "fr-t-i0-handwrit",
		pc = "fr-t-i0-und",
		qc = "fr-t-k0-accents",
		rc = "fr-t-k0-intl",
		t = "function",
		sc = "fy-t-i0-handwrit",
		tc = "fy-t-k0-accents",
		uc = "ga-t-i0-handwrit",
		vc = "ga-t-k0-accents",
		wc = "gd-t-i0-handwrit",
		xc = "gd-t-k0-accents",
		yc = "gl-t-i0-handwrit",
		zc = "goog-buttonset-default",
		Ac = "goog-char-picker-hovercard",
		Bc = "goog-char-picker-menu",
		Cc = "goog-flag-menu-button-focus",
		Dc = "goog-flat-button",
		Ec = "goog-flat-menu-button",
		Fc = "goog-flat-menu-button-hover",
		Gc = "goog-groupmenu-separator",
		Hc = "goog-inline-block",
		Ic = "goog-inline-block ",
		Jc = "goog-menu",
		Kc = "goog-menu-button",
		Lc = "goog-menuheader",
		Mc = "goog-menuitem-group",
		Nc = "goog-menuseparator",
		Qc = "goog-option",
		Rc = "goog-option-selected",
		Sc = "goog-submenu",
		Tc = "goog-submenu-arrow",
		Uc = "goog-submenu-arrow-rtl",
		Vc =
		"goog-submenu-open",
		Wc = "gu-t-i0-handwrit",
		Xc = "gu-t-k0-phone2",
		Yc = "gu-t-und-latn-k0-qwerty",
		Zc = "haspopup",
		$c = "haw-t-i0-handwrit",
		ad = "haw-t-k0-accents",
		bd = "he",
		cd = "he-t-i0-handwrit",
		dd = "he-t-i0-und",
		ed = "he-t-k0-und",
		fd = "hi-t-i0-handwrit",
		gd = "hi-t-k0-qwerty",
		hd = "hidden",
		id = "hide",
		jd = "highlight",
		kd = "hmn-t-i0-handwrit",
		ld = "horizontal",
		md = "hr-t-i0-handwrit",
		nd = "ht-t-i0-handwrit",
		od = "https://inputtools.google.com",
		pd = "https://inputtools.google.com/sync/pref?app=",
		qd = "hu-t-i0-handwrit",
		rd = "hu-t-k0-101key",
		sd = "hy-hyr-t-k0-und",
		td = "hy-hyt-t-k0-und",
		ud = "hy-t-i0-handwrit",
		vd = "id-t-i0-handwrit",
		wd = "inline-block",
		xd = "is-t-i0-handwrit",
		yd = "it-t-i0-handwrit",
		zd = "it-t-i0-und",
		Ad = "it-t-k0-accents",
		Bd = "ita-cp-hwt-hint",
		Cd = "ita-ff-black-enabled",
		Dd = "ita-ff-white-enabled",
		Ed = "ita-hwt-button",
		Fd = "ita-hwt-candidate-hover",
		Gd = "ita-hwt-enter-img-white",
		Hd = "ita-hwt-ime-full",
		Id = "ita-hwt-ime-init-opaque",
		Jd = "ita-hwt-ime-opaque",
		Kd = "ita-hwt-jfk",
		Ld = "ita-hwt-jfk-action",
		Md = "ita-hwt-jfk-hover",
		Nd = "ita-hwt-jfk-standard",
		Od = "ita-kd-btn-sbc",
		Pd = "ita-kd-btn-zh_pun",
		Qd = "ita-kd-icon-button-hover",
		Rd = "ita-kd-icon-hover",
		Sd = "ita-kd-img",
		Td = "ita-kd-inputtools-div",
		Ud = "ita-kd-menuitem",
		Vd = "ita-kd-menuitem-hover",
		Wd = "ita-kd-selected",
		Xd = "ita-ppe-cur",
		Yd = "ita-ppe-dis",
		Zd = "ita-ppe-dis-text",
		$d = "ita-ppe-td",
		ae = "ita-ppe-uds",
		be = "iu-t-k0-inuktitu",
		ce = "iu-t-k0-nunavik",
		de = "iu-t-k0-nunavut",
		ee = "ja-hira-t-i0-und",
		fe = "ja-t-i0-handwrit",
		ge = "ja-t-i0-mozcjp",
		he = "ja-t-i0-mozcus",
		ie = "ja-t-ja-hira-i0-und",
		je = "jv-t-i0-handwrit",
		ke = "ka-t-i0-handwrit",
		le = "ka-t-k0-legacy",
		me = "ka-t-k0-und",
		ne = "key",
		u = "keydown",
		v = "keypress",
		oe = "keyup",
		pe = "kk-t-i0-handwrit",
		qe = "km-t-i0-handwrit",
		re = "kn-t-i0-handwrit",
		se = "kn-t-und-latn-k0-und",
		te = "ko-t-i0-handwrit",
		ue = "ku-t-i0-handwrit",
		ve = "ky-cyrl-t-k0-und",
		we = "ky-t-i0-handwrit",
		xe = "la-t-i0-handwrit",
		ye = "label",
		ze = "label-input-label",
		Ae = "label-input-label-disabled",
		Be = "labelledby",
		Ce = "latn-002-t-k0-und",
		De = "latn_002",
		Ee = "lb-t-i0-handwrit",
		Fe = "lb-t-k0-accents",
		Ge = "letter-spacing",
		He = "lo-t-i0-handwrit",
		Ie = "lt-t-i0-handwrit",
		Je = "ltr",
		Ke = "lv-t-i0-handwrit",
		Le = "mg-t-i0-handwrit",
		Me = "mi-t-i0-handwrit",
		Ne = "mk-t-i0-handwrit",
		Oe = "ml-t-i0-handwrit",
		Pe = "ml-t-und-latn-k0-und",
		Qe = "mn-cyrl-t-k0-und",
		Re = "mn-t-i0-handwrit",
		Se = "mni-mtei-t-k0-phone",
		Te = "mousedown",
		Ue = "mousemove",
		Ve = "mouseout",
		w = "mouseover",
		We = "mouseup",
		Xe = "move_offscreen",
		Ye = "mr-t-i0-handwrit",
		Ze = "mr-t-k0-devanaga",
		$e = "ms-t-i0-handwrit",
		af = "mt-t-i0-handwrit",
		bf = "mul-t-i0-handwrit",
		cf = "my-t-i0-handwrit",
		df = "my-t-k0-myansan",
		ef = "namaste",
		ff = "nb-t-i0-handwrit",
		gf = "ne-t-i0-handwrit",
		hf = "ne-t-und-latn-k0-und",
		jf = "nl-t-i0-handwrit",
		kf = "nl-t-i0-und",
		lf = "nl-t-k0-accents",
		mf = "nn-t-i0-handwrit",
		nf = "no-t-i0-handwrit",
		of = "none",
		pf = "number",
		qf = "ny-t-i0-handwrit",
		rf = "object",
		sf = "oj-t-k0-ojibwe",
		tf = "or-t-i0-handwrit",
		uf = "or-t-und-latn-k0-und",
		vf = "orientationchange",
		wf = "pa-guru-t-k0-und",
		xf = "pa-guru-t-und-latn-k0-und",
		yf = "pa-t-i0-handwrit",
		zf = "pl-t-i0-handwrit",
		Af = "pl-t-k0-accents",
		Bf = "position",
		Cf = "prs-t-k0-und",
		Df = "ps-t-k0-und",
		Ef = "pt-BR",
		Ff = "pt-PT",
		Gf = "pt-br-t-i0-handwrit",
		Hf = "pt-br-t-i0-und",
		If = "pt-br-t-k0-accents",
		Jf = "pt-br-t-k0-intl",
		Kf = "pt-br-t-k0-und",
		Lf = "pt-pt-t-i0-handwrit",
		Mf = "pt-pt-t-i0-und",
		Nf = "pt-pt-t-k0-accents",
		Of = "pt-pt-t-k0-intl",
		Pf = "pt-pt-t-k0-und",
		Qf = "pt-t-i0-handwrit",
		Rf = "pt-t-i0-und",
		Sf = "px",
		Tf = "readystatechange",
		Uf = "resize",
		Vf = "rhg-rohg-t-k0-und",
		Wf = "ro-t-i0-handwrit",
		Xf = "ro-t-k0-extended",
		Yf = "ro-t-k0-legacy",
		Zf = "role",
		$f = "rtl",
		ag = "ru-t-i0-handwrit",
		bg = "ru-t-i0-und",
		cg = "ru-t-k0-aatseel",
		dg = "ru-t-k0-qwerty",
		eg = "ru-t-k0-yazhert",
		fg = "sa-t-k0-devanaga",
		gg = "sa-t-und-latn-k0-und",
		hg = "selected",
		ig = "separator",
		jg = "shortcut",
		kg = "shortcut_",
		lg = "si-t-i0-handwrit",
		mg = "sk-t-i0-handwrit",
		ng = "sk-t-k0-qwerty",
		og = "sl-t-i0-handwrit",
		pg = "sm-t-i0-handwrit",
		qg = "sm-t-k0-accents",
		rg = "sn-t-i0-handwrit",
		sg = "so-t-i0-handwrit",
		tg = "sq-t-i0-handwrit",
		ug = "sr-cyrl-t-k0-und",
		vg = "sr-latn-t-k0-und",
		wg = "sr-t-i0-handwrit",
		xg = "start",
		x = "string",
		yg = 'style="-webkit-user-select: none; "',
		zg = "su-t-i0-handwrit",
		Ag = "sv-t-i0-handwrit",
		Bg = "sw-t-i0-handwrit",
		Cg = "synthetic-keydown",
		Dg = "synthetic-keypress",
		Eg = "synthetic-keyup",
		Fg = "ta",
		Gg = "ta-t-i0-handwrit",
		Hg = "ta-t-k0-itrans",
		Ig = "ta-t-k0-ta99",
		Jg = "ta-t-k0-typewriter",
		Kg = "ta-t-und-latn-k0-und",
		Lg = "tabindex",
		Mg = "te-t-i0-handwrit",
		Ng = "te-t-und-latn-k0-und",
		Og = "text-decoration",
		Pg = "text-transform",
		Qg = "tg-t-i0-handwrit",
		Rg = "th-t-i0-handwrit",
		Sg = "th-t-k0-pattajoti",
		Tg = "th-t-k0-tis",
		Ug = "ti-t-i0-handwrit",
		Vg = "tlang",
		Wg = "toggle_display",
		Xg = "touchcancel",
		Yg = "touchend",
		Zg = "touchmove",
		$g = "touchstart",
		ah = "tr-t-i0-handwrit",
		bh = "tr-t-k0-f-accents",
		ch = "tr-t-k0-lagacy",
		dh = "tr-t-k0-legacy",
		eh = "tr-t-k0-q-accents",
		fh = "tr-t-k0-und",
		gh = "tsbc",
		hh = "ug-t-k0-und",
		ih = "uk-t-i0-handwrit",
		jh = "uk-t-k0-101key",
		kh = "und-ethi-t-k0-und",
		lh = "und-t-i0-handwrit",
		mh = "unhighlight",
		nh = "ur-t-i0-handwrit",
		oh = "ur-t-i0-und",
		ph = "ur-t-k0-und",
		qh = "us_intl",
		rh = "uz-cyrl-t-k0-legacy",
		sh = "uz-cyrl-t-k0-und",
		th = "uz-latn-t-k0-und",
		uh = "uz-t-i0-handwrit",
		vh = "uzs-t-k0-und",
		wh = "vertical",
		xh = "vertical-align",
		yh = "vi-t-i0-handwrit",
		zh = "vi-t-k0-legacy",
		Ah = "vi-t-k0-und",
		Bh = "visible",
		Ch = "vk-btn",
		Dh = "vk-sf-h",
		Eh = "vkd",
		Fh = "xh-t-i0-handwrit",
		Gh = "yi-t-i0-handwrit",
		Hh = "yi-t-k0-und",
		Ih = "yo-ng-t-k0-und",
		Jh = "yue-hant-t-i0-jyutping",
		Kh = "yue-hant-t-i0-und",
		Lh = "yue-hant-t-i0-yale",
		Mh = "zh-CN",
		Nh = "zh-HK",
		Oh = "zh-Hans",
		Ph = "zh-TW",
		Qh = "zh-hans-t-i0-handwrit",
		Rh = "zh-hans-t-i0-voice",
		Sh = "zh-hant-t-i0-cangjie-1982",
		Th = "zh-hant-t-i0-handwrit",
		Uh = "zh-hant-t-i0-pinyin",
		Vh = "zh-hant-t-i0-und",
		Wh = "zh-t-i0-handwrit",
		Xh = "zh-t-i0-pinyin",
		Yh = "zh-t-i0-pinyin-x0-shuangpin-abc",
		Zh = "zh-t-i0-pinyin-x0-shuangpin-flypy",
		$h = "zh-t-i0-pinyin-x0-shuangpin-jiajia",
		ai = "zh-t-i0-pinyin-x0-shuangpin-ms",
		bi = "zh-t-i0-pinyin-x0-shuangpin-ziguang",
		ci = "zh-t-i0-pinyin-x0-shuangpin-ziranma",
		di = "zh-t-i0-wubi-1986",
		ei = "zh-yue-t-i0-handwrit",
		fi = "zu-t-i0-handwrit",
		gi = "\u00c01234567890\u00bd\u00bbQWERTYUIOP\u00db\u00ddASDFGHJKL\u00ba\u00de\u00dc\u00e2ZXCVBNM\u00bc\u00be\u00bf ",
		hi = "\u00c01234567890\u00bd\u00bbQWERTYUIOP\u00db\u00dd\u00dcASDFGHJKL\u00ba\u00deZXCVBNM\u00bc\u00be\u00bf ",
		ii = "\u02bb\u014clelo Hawai\u02bbi",
		ji = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940 (\u092b\u094b\u0928\u0947\u091f\u093f\u0915)",
		ki = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(INSCRIPT)",
		li = "\u0926\u0947\u0935\u0928\u093e\u0917\u0930\u0940(PHONETIC)",
		y, mi = function (a) {
			var b = 0;
			return function () {
				return b < a.length ? {
					done: !1,
					value: a[b++]
				} : {
					done: !0
				}
			}
		},
		ni = function (a) {
			a = [rf == typeof globalThis && globalThis, a, rf == typeof window && window, rf == typeof self && self, rf == typeof global && global];
			for (var b = 0; b < a.length; ++b) {
				var c = a[b];
				if (c && c.Math == Math) return c
			}
			throw Error("Cannot find global object");
		},
		qi = function (a, b) {
			if (b) a: {
				var c = oi;a = a.split(".");
				for (var d = 0; d < a.length - 1; d++) {
					var e = a[d];
					if (!(e in c)) break a;
					c = c[e]
				}
				a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && pi(c, a, {
					configurable: !0,
					writable: !0,
					value: b
				})
			}
		},
		ri = function (a) {
			a = {
				next: a
			};
			a[Symbol.iterator] = function () {
				return this
			};
			return a
		},
		si = function (a) {
			var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
			return b ? b.call(a) : {
				next: mi(a)
			}
		},
		z = function (a, b) {
			a.prototype = ti(b.prototype);
			a.prototype.constructor = a;
			if (ui) ui(a, b);
			else
				for (var c in b)
					if ("prototype" != c)
						if (Object.defineProperties) {
							var d =
								Object.getOwnPropertyDescriptor(b, c);
							d && Object.defineProperty(a, c, d)
						} else a[c] = b[c];
			a.O = b.prototype
		},
		vi = function (a, b) {
			a instanceof String && (a += "");
			var c = 0,
				d = !1,
				e = {
					next: function () {
						if (!d && c < a.length) {
							var g = c++;
							return {
								value: b(g, a[g]),
								done: !1
							}
						}
						d = !0;
						return {
							done: !0,
							value: void 0
						}
					}
				};
			e[Symbol.iterator] = function () {
				return e
			};
			return e
		},
		wi = function (a) {
			return a ? a : Array.prototype.fill
		},
		xi = function (a, b) {
			return Object.prototype.hasOwnProperty.call(a, b)
		},
		yi = function (a, b) {
			a = a.split(".");
			var c = A;
			a[0] in c || "undefined" ==
				typeof c.execScript || c.execScript("var " + a[0]);
			for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
		},
		Bi = function (a) {
			if (a && a != A) return zi(a.document);
			null === Ai && (Ai = zi(A.document));
			return Ai
		},
		zi = function (a) {
			return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ci.test(a) ? a : ""
		},
		Di = function () {},
		Ei = function (a) {
			a.Yf = void 0;
			a.fa = function () {
				return a.Yf ? a.Yf : a.Yf = new a
			}
		},
		Fi = function (a) {
			var b = typeof a;
			b = b != rf ? b : a ? Array.isArray(a) ? "array" : b : "null";
			return "array" == b || b == rf && typeof a.length == pf
		},
		Gi = function (a) {
			var b = typeof a;
			return b == rf && null != a || b == t
		},
		Ji = function (a) {
			return Object.prototype.hasOwnProperty.call(a, Hi) && a[Hi] || (a[Hi] = ++Ii)
		},
		Ki = function (a, b, c) {
			return a.call.apply(a.bind, arguments)
		},
		Li = function (a, b, c) {
			if (!a) throw Error();
			if (2 < arguments.length) {
				var d = Array.prototype.slice.call(arguments, 2);
				return function () {
					var e = Array.prototype.slice.call(arguments);
					Array.prototype.unshift.apply(e, d);
					return a.apply(b, e)
				}
			}
			return function () {
				return a.apply(b, arguments)
			}
		},
		B = function (a, b, c) {
			Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? B = Ki : B = Li;
			return B.apply(null, arguments)
		},
		Mi = function (a, b) {
			var c = Array.prototype.slice.call(arguments, 1);
			return function () {
				var d = c.slice();
				d.push.apply(d, arguments);
				return a.apply(this, d)
			}
		},
		Ni = function () {
			return Date.now()
		},
		C = function (a, b) {
			function c() {}
			c.prototype = b.prototype;
			a.O = b.prototype;
			a.prototype = new c;
			a.prototype.constructor =
				a;
			a.Fu = function (d, e, g) {
				for (var h = Array(arguments.length - 2), k = 2; k < arguments.length; k++) h[k - 2] = arguments[k];
				return b.prototype[e].apply(d, h)
			}
		},
		Oi = function (a) {
			return a
		},
		Pi = function (a) {
			if (Error.captureStackTrace) Error.captureStackTrace(this, Pi);
			else {
				var b = Error().stack;
				b && (this.stack = b)
			}
			a && (this.message = String(a))
		},
		Qi = function (a, b) {
			a = a.split("%s");
			for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
			Pi.call(this, c + a[d])
		},
		Ri = function (a) {
			return a[a.length - 1]
		},
		Si = function (a, b) {
			var c = 0;
			D(a,
				function (d, e, g) {
					b.call(void 0, d, e, g) && ++c
				}, void 0);
			return c
		},
		Ui = function (a, b) {
			b = Ti(a, b, void 0);
			return 0 > b ? null : typeof a === x ? a.charAt(b) : a[b]
		},
		Ti = function (a, b, c) {
			for (var d = a.length, e = typeof a === x ? a.split("") : a, g = 0; g < d; g++)
				if (g in e && b.call(c, e[g], g, a)) return g;
			return -1
		},
		E = function (a, b) {
			return 0 <= Vi(a, b)
		},
		Wi = function (a) {
			if (!Array.isArray(a))
				for (var b = a.length - 1; 0 <= b; b--) delete a[b];
			a.length = 0
		},
		Xi = function (a, b) {
			E(a, b) || a.push(b)
		},
		Yi = function (a, b) {
			b = Vi(a, b);
			var c;
			(c = 0 <= b) && Array.prototype.splice.call(a,
				b, 1);
			return c
		},
		Zi = function (a) {
			return Array.prototype.concat.apply([], arguments)
		},
		$i = function (a) {
			var b = a.length;
			if (0 < b) {
				for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
				return c
			}
			return []
		},
		aj = function (a, b) {
			for (var c = 1; c < arguments.length; c++) {
				var d = arguments[c];
				if (Fi(d)) {
					var e = a.length || 0,
						g = d.length || 0;
					a.length = e + g;
					for (var h = 0; h < g; h++) a[e + h] = d[h]
				} else a.push(d)
			}
		},
		cj = function (a, b, c, d) {
			Array.prototype.splice.apply(a, bj(arguments, 1))
		},
		bj = function (a, b, c) {
			return 2 >= arguments.length ? Array.prototype.slice.call(a, b) :
				Array.prototype.slice.call(a, b, c)
		},
		dj = function (a) {
			for (var b = {}, c = 0, d = 0; d < a.length;) {
				var e = a[d++];
				var g = e;
				g = Gi(g) ? "o" + Ji(g) : (typeof g).charAt(0) + g;
				Object.prototype.hasOwnProperty.call(b, g) || (b[g] = !0, a[c++] = e)
			}
			a.length = c
		},
		fj = function (a, b) {
			a.sort(b || ej)
		},
		hj = function (a, b) {
			if (!Fi(a) || !Fi(b) || a.length != b.length) return !1;
			for (var c = a.length, d = gj, e = 0; e < c; e++)
				if (!d(a[e], b[e])) return !1;
			return !0
		},
		ej = function (a, b) {
			return a > b ? 1 : a < b ? -1 : 0
		},
		gj = function (a, b) {
			return a === b
		},
		ij = function (a) {
			for (var b = [], c = 0; c < arguments.length; c++) {
				var d =
					arguments[c];
				if (Array.isArray(d))
					for (var e = 0; e < d.length; e += 8192)
						for (var g = ij.apply(null, bj(d, e, e + 8192)), h = 0; h < g.length; h++) b.push(g[h]);
				else b.push(d)
			}
			return b
		},
		jj = function (a, b) {
			var c = a.length - b.length;
			return 0 <= c && a.indexOf(b, c) == c
		},
		mj = function (a, b) {
			var c = 0;
			a = kj(String(a)).split(".");
			b = kj(String(b)).split(".");
			for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
				var g = a[e] || "",
					h = b[e] || "";
				do {
					g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
					h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
					if (0 == g[0].length &&
						0 == h[0].length) break;
					c = lj(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || lj(0 == g[2].length, 0 == h[2].length) || lj(g[2], h[2]);
					g = g[3];
					h = h[3]
				} while (0 == c)
			}
			return c
		},
		lj = function (a, b) {
			return a < b ? -1 : a > b ? 1 : 0
		},
		F = function (a) {
			return -1 != nj.indexOf(a)
		},
		oj = function (a) {
			for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);) c.push([d[1], d[2], d[3] || void 0]);
			return c
		},
		pj = function (a, b, c) {
			for (var d in a) b.call(c, a[d], d, a)
		},
		qj = function (a, b) {
			for (var c in a)
				if (b.call(void 0, a[c], c,
						a)) return !0;
			return !1
		},
		rj = function (a) {
			var b = [],
				c = 0,
				d;
			for (d in a) b[c++] = a[d];
			return b
		},
		sj = function (a) {
			var b = [],
				c = 0,
				d;
			for (d in a) b[c++] = d;
			return b
		},
		tj = function (a, b) {
			return null !== a && b in a
		},
		uj = function (a, b) {
			for (var c in a)
				if (a[c] == b) return !0;
			return !1
		},
		vj = function (a) {
			for (var b in a) return !1;
			return !0
		},
		wj = function (a, b, c) {
			if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
			a[b] = c
		},
		xj = function (a) {
			var b = {},
				c;
			for (c in a) b[c] = a[c];
			return b
		},
		yj = function (a) {
			var b = {},
				c;
			for (c in a) b[a[c]] =
				c;
			return b
		},
		Aj = function (a, b) {
			for (var c, d, e = 1; e < arguments.length; e++) {
				d = arguments[e];
				for (c in d) a[c] = d[c];
				for (var g = 0; g < zj.length; g++) c = zj[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
			}
		},
		Bj = function (a) {
			var b = arguments.length;
			if (1 == b && Array.isArray(arguments[0])) return Bj.apply(null, arguments[0]);
			if (b % 2) throw Error(Qa);
			for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
			return c
		},
		Cj = function (a) {
			var b = arguments.length;
			if (1 == b && Array.isArray(arguments[0])) return Cj.apply(null, arguments[0]);
			for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
			return c
		},
		Dj = function () {
			return F("Trident") || F("MSIE")
		},
		Ej = function () {
			return F("Firefox") || F("FxiOS")
		},
		Fj = function () {
			return (F("Chrome") || F("CriOS")) && !F(na)
		},
		Gj = function () {
			function a(e) {
				e = Ui(e, d);
				return c[e] || ""
			}
			var b = nj;
			if (!Dj()) {
				b = oj(b);
				var c = {};
				D(b, function (e) {
					c[e[0]] = e[1]
				});
				var d = Mi(tj, c);
				F(Ea) ? a(["Version", Ea]) : F(na) ? a([na]) : F("Edg/") ? a(["Edg"]) : Fj() && a(["Chrome", "CriOS", "HeadlessChrome"])
			}
		},
		Hj = function () {
			return function () {
				return 6
			}
		},
		Ij = function () {
			return !1
		},
		Jj = function () {
			return null
		},
		Kj = function (a) {
			return a
		},
		Mj = function () {
			if (void 0 === Lj) {
				var a = null,
					b = A.trustedTypes;
				if (b && b.createPolicy) {
					try {
						a = b.createPolicy("goog#html", {
							createHTML: Oi,
							createScript: Oi,
							createScriptURL: Oi
						})
					} catch (c) {
						A.console && A.console.error(c.message)
					}
					Lj = a
				} else Lj = a
			}
			return Lj
		},
		Pj = function (a, b) {
			this.A = a === Nj && b || "";
			this.B = Oj
		},
		Qj = function (a) {
			return a instanceof Pj && a.constructor === Pj && a.B === Oj ? a.A : "type_error:Const"
		},
		Rj = function (a) {
			return new Pj(Nj, a)
		},
		Tj = function (a, b) {
			this.A = b === Sj ? a : ""
		},
		Uj = function (a) {
			return a instanceof Tj && a.constructor === Tj ? a.A : "type_error:TrustedResourceUrl"
		},
		Yj = function (a, b) {
			var c = Qj(a);
			if (!Vj.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
			a = c.replace(Wj, function (d, e) {
				if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
				d = b[e];
				return d instanceof Pj ? Qj(d) : encodeURIComponent(String(d))
			});
			return Xj(a)
		},
		Xj = function (a) {
			var b = Mj();
			a = b ? b.createScriptURL(a) : a;
			return new Tj(a, Sj)
		},
		Zj = function (a, b, c) {
			if (null == c) return b;
			if (typeof c === x) return c ? a + encodeURIComponent(c) : "";
			for (var d in c)
				if (Object.prototype.hasOwnProperty.call(c, d)) {
					var e = c[d];
					e = Array.isArray(e) ? e : [e];
					for (var g = 0; g < e.length; g++) {
						var h = e[g];
						null != h && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(h)))
					}
				}
			return b
		},
		bk = function (a, b) {
			this.A = b === ak ? a : ""
		},
		ck = function (a) {
			return a instanceof bk && a.constructor === bk ? a.A : "type_error:SafeUrl"
		},
		gk = function (a) {
			if (a instanceof bk) return a;
			a = typeof a == rf && a.tc ? a.Xb() : String(a);
			if (dk.test(a)) a = new bk(a, ak);
			else {
				a = String(a);
				a = a.replace(/(%0A|%0D)/g, "");
				var b = a.match(ek);
				a = b && fk.test(b[1]) ? new bk(a, ak) : null
			}
			return a
		},
		ik = function (a, b) {
			this.A = b === hk ? a : ""
		},
		jk = function (a) {
			return a instanceof ik && a.constructor === ik ? a.A : "type_error:SafeStyle"
		},
		nk = function (a) {
			var b = "",
				c;
			for (c in a)
				if (Object.prototype.hasOwnProperty.call(a, c)) {
					if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " +
						c);
					var d = a[c];
					null != d && (d = Array.isArray(d) ? kk(d, lk).join(" ") : lk(d), b += c + ":" + d + ";")
				}
			return b ? new ik(b, hk) : mk
		},
		lk = function (a) {
			if (a instanceof bk) return 'url("' + ck(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
			if (a instanceof Pj) a = Qj(a);
			else {
				a = String(a);
				var b = a.replace(ok, "$1").replace(ok, "$1").replace(pk, "url");
				if (qk.test(b)) {
					if (b = !rk.test(a)) {
						for (var c = b = !0, d = 0; d < a.length; d++) {
							var e = a.charAt(d);
							"'" == e && c ? b = !b : '"' == e && b && (c = !c)
						}
						b = b && c && sk(a)
					}
					a = b ? tk(a) : "zClosurez"
				} else a = "zClosurez"
			}
			if (/[{;}]/.test(a)) throw new Qi("Value does not allow [{;}], got: %s.", [a]);
			return a
		},
		sk = function (a) {
			for (var b = !0, c = /^[-_a-zA-Z0-9]$/, d = 0; d < a.length; d++) {
				var e = a.charAt(d);
				if ("]" == e) {
					if (b) return !1;
					b = !0
				} else if ("[" == e) {
					if (!b) return !1;
					b = !1
				} else if (!b && !c.test(e)) return !1
			}
			return b
		},
		tk = function (a) {
			return a.replace(pk, function (b, c, d, e) {
				var g = "";
				d = d.replace(/^(['"])(.*)\1$/, function (h, k, l) {
					g = k;
					return l
				});
				b = (gk(d) || uk).Xb();
				return c + g + b + g + e
			})
		},
		wk = function (a, b) {
			this.A = b === vk ? a : "";
			this.tc = !0
		},
		xk = function (a, b) {
			if (-1 != a.indexOf("<")) throw Error("Selector does not allow '<', got: " +
				a);
			var c = a.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
			if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a);
			a: {
				for (var d = {
						"(": ")",
						"[": "]"
					}, e = [], g = 0; g < c.length; g++) {
					var h = c[g];
					if (d[h]) e.push(d[h]);
					else if (uj(d, h) && e.pop() != h) {
						c = !1;
						break a
					}
				}
				c = 0 == e.length
			}
			if (!c) throw Error("() and [] in selector must be balanced, got: " + a);
			b instanceof ik || (b = nk(b));
			a = a + "{" + jk(b).replace(/</g, "\\3C ") + "}";
			return new wk(a, vk)
		},
		zk = function (a) {
			function b(d) {
				Array.isArray(d) ? D(d, b) : c += yk(d)
			}
			var c = "";
			D(arguments, b);
			return new wk(c, vk)
		},
		Bk = function (a) {
			a = Qj(a);
			return 0 === a.length ? Ak : new wk(a, vk)
		},
		yk = function (a) {
			return a instanceof wk && a.constructor === wk ? a.A : "type_error:SafeStyleSheet"
		},
		Dk = function (a, b, c) {
			this.A = c === Ck ? a : ""
		},
		Ek = function (a) {
			return a instanceof Dk && a.constructor === Dk ? a.A : "type_error:SafeHtml"
		},
		Gk = function (a, b) {
			if (Fk())
				for (; a.lastChild;) a.removeChild(a.lastChild);
			a.innerHTML = Ek(b)
		},
		Hk = function (a) {
			var b = Bi(a.ownerDocument &&
				a.ownerDocument.defaultView);
			b && a.setAttribute("nonce", b)
		},
		Ik = function (a) {
			return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
		},
		Qk = function (a) {
			Jk.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Kk, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Lk, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Mk, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Nk, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Ok, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Pk, "&#0;")));
			return a
		},
		Tk = function (a) {
			return -1 != a.indexOf("&") ?
				"document" in A ? Rk(a) : Sk(a) : a
		},
		Rk = function (a) {
			var b = {
				"&amp;": "&",
				"&lt;": "<",
				"&gt;": ">",
				"&quot;": '"'
			};
			var c = A.document.createElement("div");
			return a.replace(Uk, function (d, e) {
				var g = b[d];
				if (g) return g;
				"#" == e.charAt(0) && (e = Number("0" + e.substr(1)), isNaN(e) || (g = String.fromCharCode(e)));
				g || (g = d + " ", g = (e = Mj()) ? e.createHTML(g) : g, Gk(c, new Dk(g, null, Ck)), g = c.firstChild.nodeValue.slice(0, -1));
				return b[d] = g
			})
		},
		Sk = function (a) {
			return a.replace(/&([^;]+);/g, function (b, c) {
				switch (c) {
					case "amp":
						return "&";
					case "lt":
						return "<";
					case "gt":
						return ">";
					case "quot":
						return '"';
					default:
						return "#" != c.charAt(0) || (c = Number("0" + c.substr(1)), isNaN(c)) ? b : String.fromCharCode(c)
				}
			})
		},
		Vk = function (a) {
			return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
		},
		Wk = function (a) {
			return String(a).replace(/\-([a-z])/g, function (b, c) {
				return c.toUpperCase()
			})
		},
		Xk = function (a) {
			return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
				return c + d.toUpperCase()
			})
		},
		Yk = function () {
			return F("iPhone") && !F("iPod") && !F("iPad")
		},
		Zk = function () {
			return Yk() ||
				F("iPad") || F("iPod")
		},
		$k = function (a) {
			$k[" "](a);
			return a
		},
		al = function (a, b) {
			try {
				return $k(a[b]), !0
			} catch (c) {}
			return !1
		},
		cl = function (a, b) {
			var c = bl;
			return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
		},
		dl = function () {
			var a = A.document;
			return a ? a.documentMode : void 0
		},
		G = function (a) {
			return cl(a, function () {
				return 0 <= mj(el, a)
			})
		},
		gl = function (a) {
			return Number(fl) >= a
		},
		H = function (a, b) {
			this.x = void 0 !== a ? a : 0;
			this.y = void 0 !== b ? b : 0
		},
		hl = function (a) {
			return new H(a.x, a.y)
		},
		il = function (a, b) {
			return a == b ? !0 : a &&
				b ? a.x == b.x && a.y == b.y : !1
		},
		jl = function (a, b) {
			return new H(a.x - b.x, a.y - b.y)
		},
		kl = function (a, b) {
			this.width = a;
			this.height = b
		},
		ll = function (a, b) {
			return a == b ? !0 : a && b ? a.width == b.width && a.height == b.height : !1
		},
		ml = function (a) {
			return new kl(a.width, a.height)
		},
		J = function (a) {
			return a ? new nl(I(a)) : ol || (ol = new nl)
		},
		pl = function (a, b) {
			return typeof b === x ? a.getElementById(b) : b
		},
		ql = function (a, b, c, d) {
			a = d || a;
			b = b && "*" != b ? String(b).toUpperCase() : "";
			if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ?
				"." + c : ""));
			if (c && a.getElementsByClassName) {
				a = a.getElementsByClassName(c);
				if (b) {
					d = {};
					for (var e = 0, g = 0, h; h = a[g]; g++) b == h.nodeName && (d[e++] = h);
					d.length = e;
					return d
				}
				return a
			}
			a = a.getElementsByTagName(b || "*");
			if (c) {
				d = {};
				for (g = e = 0; h = a[g]; g++) b = h.className, typeof b.split == t && E(b.split(/\s+/), c) && (d[e++] = h);
				d.length = e;
				return d
			}
			return a
		},
		sl = function (a, b) {
			pj(b, function (c, d) {
				c && typeof c == rf && c.tc && (c = c.Xb());
				"style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : rl.hasOwnProperty(d) ? a.setAttribute(rl[d],
					c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
			})
		},
		ul = function (a) {
			a = a.document;
			a = tl(a) ? a.documentElement : a.body;
			return new kl(a.clientWidth, a.clientHeight)
		},
		wl = function (a) {
			var b = vl(a);
			a = a.parentWindow || a.defaultView;
			return K && G("10") && a.pageYOffset != b.scrollTop ? new H(b.scrollLeft, b.scrollTop) : new H(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
		},
		vl = function (a) {
			return a.scrollingElement ? a.scrollingElement : !xl && tl(a) ? a.documentElement : a.body || a.documentElement
		},
		yl = function (a) {
			return a ? a.parentWindow || a.defaultView : window
		},
		Al = function (a, b, c) {
			return zl(document, arguments)
		},
		zl = function (a, b) {
			var c = String(b[0]),
				d = b[1];
			if (!Bl && d && (d.name || d.type)) {
				c = ["<", c];
				d.name && c.push(' name="', Qk(d.name), '"');
				if (d.type) {
					c.push(' type="', Qk(d.type), '"');
					var e = {};
					Aj(e, d);
					delete e.type;
					d = e
				}
				c.push(">");
				c = c.join("")
			}
			c = Cl(a, c);
			d && (typeof d === x ? c.className = d : Array.isArray(d) ? c.className = d.join(" ") : sl(c, d));
			2 < b.length && Dl(a, c, b, 2);
			return c
		},
		Dl = function (a, b, c, d) {
			function e(k) {
				k &&
					b.appendChild(typeof k === x ? a.createTextNode(k) : k)
			}
			for (; d < c.length; d++) {
				var g = c[d];
				if (!Fi(g) || Gi(g) && 0 < g.nodeType) e(g);
				else {
					a: {
						if (g && typeof g.length == pf) {
							if (Gi(g)) {
								var h = typeof g.item == t || typeof g.item == x;
								break a
							}
							if (typeof g === t) {
								h = typeof g.item == t;
								break a
							}
						}
						h = !1
					}
					D(h ? $i(g) : g, e)
				}
			}
		},
		Cl = function (a, b) {
			b = String(b);
			"application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
			return a.createElement(b)
		},
		tl = function (a) {
			return "CSS1Compat" == a.compatMode
		},
		El = function (a) {
			if (1 != a.nodeType) return !1;
			switch (a.tagName) {
				case "APPLET":
				case "AREA":
				case "BASE":
				case "BR":
				case "COL":
				case "COMMAND":
				case "EMBED":
				case "FRAME":
				case "HR":
				case "IMG":
				case va:
				case ua:
				case "ISINDEX":
				case "KEYGEN":
				case "LINK":
				case "NOFRAMES":
				case "NOSCRIPT":
				case "META":
				case "OBJECT":
				case "PARAM":
				case Ka:
				case "SOURCE":
				case "STYLE":
				case "TRACK":
				case "WBR":
					return !1
			}
			return !0
		},
		Fl = function (a, b) {
			Dl(I(a), a, arguments, 1)
		},
		Gl = function (a) {
			for (var b; b = a.firstChild;) a.removeChild(b)
		},
		Hl = function (a, b) {
			b.parentNode && b.parentNode.insertBefore(a, b)
		},
		Il = function (a) {
			return a && a.parentNode ? a.parentNode.removeChild(a) : null
		},
		Ll = function (a) {
			return Jl && void 0 != a.children ? a.children : Kl(a.childNodes, function (b) {
				return 1 == b.nodeType
			})
		},
		Ml = function (a) {
			if (void 0 !== a.firstElementChild) a = a.firstElementChild;
			else
				for (a = a.firstChild; a && 1 != a.nodeType;) a = a.nextSibling;
			return a
		},
		Nl = function (a) {
			return Gi(a) &&
				1 == a.nodeType
		},
		Ol = function (a, b) {
			if (!a || !b) return !1;
			if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
			if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
			for (; b && a != b;) b = b.parentNode;
			return b == a
		},
		Rl = function (a, b) {
			if (a == b) return 0;
			if (a.compareDocumentPosition) return a.compareDocumentPosition(b) & 2 ? 1 : -1;
			if (K && !gl(9)) {
				if (9 == a.nodeType) return -1;
				if (9 == b.nodeType) return 1
			}
			if ("sourceIndex" in a || a.parentNode && "sourceIndex" in a.parentNode) {
				var c = 1 == a.nodeType,
					d = 1 == b.nodeType;
				if (c && d) return a.sourceIndex - b.sourceIndex;
				var e = a.parentNode,
					g = b.parentNode;
				return e == g ? Pl(a, b) : !c && Ol(e, b) ? -1 * Ql(a, b) : !d && Ol(g, a) ? Ql(b, a) : (c ? a.sourceIndex : e.sourceIndex) - (d ? b.sourceIndex : g.sourceIndex)
			}
			d = I(a);
			c = d.createRange();
			c.selectNode(a);
			c.collapse(!0);
			a = d.createRange();
			a.selectNode(b);
			a.collapse(!0);
			return c.compareBoundaryPoints(A.Range.START_TO_END, a)
		},
		Ql = function (a, b) {
			var c = a.parentNode;
			if (c == b) return -1;
			for (; b.parentNode != c;) b = b.parentNode;
			return Pl(b, a)
		},
		Pl = function (a,
			b) {
			for (; b = b.previousSibling;)
				if (b == a) return -1;
			return 1
		},
		Sl = function (a) {
			var b, c = arguments.length;
			if (!c) return null;
			if (1 == c) return arguments[0];
			var d = [],
				e = Infinity;
			for (b = 0; b < c; b++) {
				for (var g = [], h = arguments[b]; h;) g.unshift(h), h = h.parentNode;
				d.push(g);
				e = Math.min(e, g.length)
			}
			g = null;
			for (b = 0; b < e; b++) {
				h = d[0][b];
				for (var k = 1; k < c; k++)
					if (h != d[k][b]) return g;
				g = h
			}
			return g
		},
		I = function (a) {
			return 9 == a.nodeType ? a : a.ownerDocument || a.document
		},
		Tl = function (a) {
			return a.contentDocument || a.contentWindow.document
		},
		Ul = function (a,
			b) {
			if ("textContent" in a) a.textContent = b;
			else if (3 == a.nodeType) a.data = String(b);
			else if (a.firstChild && 3 == a.firstChild.nodeType) {
				for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
				a.firstChild.data = String(b)
			} else Gl(a), a.appendChild(I(a).createTextNode(String(b)))
		},
		Vl = function (a, b) {
			b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
		},
		Wl = function (a) {
			return K && !G("9") ? (a = a.getAttributeNode(Lg), null != a && a.specified) : a.hasAttribute(Lg)
		},
		Xl = function (a) {
			a = a.tabIndex;
			return typeof a === pf &&
				0 <= a && 32768 > a
		},
		$l = function (a) {
			if (Yl && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
			else {
				var b = [];
				Zl(a, b, !0);
				a = b.join("")
			}
			a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
			a = a.replace(/\u200B/g, "");
			Yl || (a = a.replace(/ +/g, " "));
			" " != a && (a = a.replace(/^\s*/, ""));
			return a
		},
		am = function (a) {
			var b = [];
			Zl(a, b, !1);
			return b.join("")
		},
		Zl = function (a, b, c) {
			if (!(a.nodeName in bm))
				if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
				else if (a.nodeName in
				cm) b.push(cm[a.nodeName]);
			else
				for (a = a.firstChild; a;) Zl(a, b, c), a = a.nextSibling
		},
		dm = function (a) {
			try {
				var b = a && a.activeElement;
				return b && b.nodeName ? b : null
			} catch (c) {
				return null
			}
		},
		nl = function (a) {
			this.A = a || A.document || document
		},
		em = function (a, b) {
			return a.A.createTextNode(String(b))
		},
		fm = function (a, b) {
			a = a.A;
			for (var c = Cl(a, "TABLE"), d = c.appendChild(Cl(a, "TBODY")), e = 0; 1 > e; e++) {
				for (var g = Cl(a, "TR"), h = 0; h < b; h++) g.appendChild(Cl(a, "TD"));
				d.appendChild(g)
			}
			return c
		},
		gm = function (a) {
			a = a.A;
			return a.parentWindow || a.defaultView
		},
		M = function () {
			this.ha = this.ha;
			this.sb = this.sb
		},
		hm = function (a, b) {
			b = Mi(N, b);
			a.ha ? b() : (a.sb || (a.sb = []), a.sb.push(b))
		},
		N = function (a) {
			a && typeof a.da == t && a.da()
		},
		im = function (a) {
			for (var b = 0, c = arguments.length; b < c; ++b) {
				var d = arguments[b];
				Fi(d) ? im.apply(null, d) : N(d)
			}
		},
		O = function (a, b) {
			this.type = a;
			this.B = this.target = b;
			this.defaultPrevented = this.D = !1
		},
		jm = function (a) {
			a.stopPropagation()
		},
		mm = function (a, b) {
			O.call(this, a ? a.type : "");
			this.relatedTarget = this.B = this.target = null;
			this.button = this.screenY = this.screenX = this.clientY =
				this.clientX = 0;
			this.key = "";
			this.charCode = this.keyCode = 0;
			this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
			this.state = null;
			this.C = !1;
			this.pointerId = 0;
			this.pointerType = "";
			this.A = null;
			if (a) {
				var c = this.type = a.type,
					d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
				this.target = a.target || a.srcElement;
				this.B = b;
				(b = a.relatedTarget) ? P && (al(b, "nodeName") || (b = null)): c == w ? b = a.fromElement : c == Ve && (b = a.toElement);
				this.relatedTarget = b;
				d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY =
					void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
				this.button = a.button;
				this.keyCode = a.keyCode || 0;
				this.key = a.key || "";
				this.charCode = a.charCode || (c == v ? a.keyCode : 0);
				this.ctrlKey = a.ctrlKey;
				this.altKey = a.altKey;
				this.shiftKey = a.shiftKey;
				this.metaKey = a.metaKey;
				this.C = km ? a.metaKey : a.ctrlKey;
				this.pointerId = a.pointerId ||
					0;
				this.pointerType = typeof a.pointerType === x ? a.pointerType : lm[a.pointerType] || "";
				this.state = a.state;
				this.A = a;
				a.defaultPrevented && this.preventDefault()
			}
		},
		pm = function (a) {
			return nm ? 0 == a.A.button : a.type == p ? !0 : !!(a.A.button & om[0])
		},
		rm = function (a) {
			return !(!a || !a[qm])
		},
		tm = function (a, b, c, d, e) {
			this.listener = a;
			this.A = null;
			this.src = b;
			this.type = c;
			this.capture = !!d;
			this.va = e;
			this.key = ++sm;
			this.td = this.qe = !1
		},
		um = function (a) {
			a.td = !0;
			a.listener = null;
			a.A = null;
			a.src = null;
			a.va = null
		},
		vm = function (a) {
			this.src = a;
			this.A = {};
			this.B = 0
		},
		wm = function (a, b) {
			var c = b.type;
			c in a.A && Yi(a.A[c], b) && (um(b), 0 == a.A[c].length && (delete a.A[c], a.B--))
		},
		xm = function (a, b, c, d) {
			for (var e = 0; e < a.length; ++e) {
				var g = a[e];
				if (!g.td && g.listener == b && g.capture == !!c && g.va == d) return e
			}
			return -1
		},
		Q = function (a, b, c, d, e) {
			if (d && d.once) return ym(a, b, c, d, e);
			if (Array.isArray(b)) {
				for (var g = 0; g < b.length; g++) Q(a, b[g], c, d, e);
				return null
			}
			c = zm(c);
			return rm(a) ? a.H(b, c, Gi(d) ? !!d.capture : !!d, e) : Am(a, b, c, !1, d, e)
		},
		Am = function (a, b, c, d, e, g) {
			if (!b) throw Error(za);
			var h = Gi(e) ?
				!!e.capture : !!e,
				k = Bm(a);
			k || (a[Cm] = k = new vm(a));
			c = k.add(b, c, d, h, g);
			if (c.A) return c;
			d = Dm();
			c.A = d;
			d.src = a;
			d.listener = c;
			if (a.addEventListener) Em || (e = h), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
			else if (a.attachEvent) a.attachEvent(Fm(b.toString()), d);
			else if (a.addListener && a.removeListener) a.addListener(d);
			else throw Error("addEventListener and attachEvent are unavailable.");
			Gm++;
			return c
		},
		Dm = function () {
			var a = Hm,
				b = Im ? function (c) {
					return a.call(b.src, b.listener, c)
				} : function (c) {
					c = a.call(b.src,
						b.listener, c);
					if (!c) return c
				};
			return b
		},
		ym = function (a, b, c, d, e) {
			if (Array.isArray(b)) {
				for (var g = 0; g < b.length; g++) ym(a, b[g], c, d, e);
				return null
			}
			c = zm(c);
			return rm(a) ? a.dg(b, c, Gi(d) ? !!d.capture : !!d, e) : Am(a, b, c, !0, d, e)
		},
		Jm = function (a, b, c, d, e) {
			if (Array.isArray(b))
				for (var g = 0; g < b.length; g++) Jm(a, b[g], c, d, e);
			else d = Gi(d) ? !!d.capture : !!d, c = zm(c), rm(a) ? a.ka(b, c, d, e) : a && (a = Bm(a)) && (b = a.Gd(b, c, d, e)) && Km(b)
		},
		Km = function (a) {
			if (typeof a !== pf && a && !a.td) {
				var b = a.src;
				if (rm(b)) wm(b.Gb, a);
				else {
					var c = a.type,
						d = a.A;
					b.removeEventListener ?
						b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Fm(c), d) : b.addListener && b.removeListener && b.removeListener(d);
					Gm--;
					(c = Bm(b)) ? (wm(c, a), 0 == c.B && (c.src = null, b[Cm] = null)) : um(a)
				}
			}
		},
		Fm = function (a) {
			return a in Lm ? Lm[a] : Lm[a] = "on" + a
		},
		Nm = function (a, b, c, d) {
			var e = !0;
			if (a = Bm(a))
				if (b = a.A[b.toString()])
					for (b = b.concat(), a = 0; a < b.length; a++) {
						var g = b[a];
						g && g.capture == c && !g.td && (g = Mm(g, d), e = e && !1 !== g)
					}
			return e
		},
		Mm = function (a, b) {
			var c = a.listener,
				d = a.va || a.src;
			a.qe && Km(a);
			return c.call(d, b)
		},
		Hm = function (a,
			b) {
			if (a.td) return !0;
			if (!Im) {
				if (!b) a: {
					b = ["window", "event"];
					for (var c = A, d = 0; d < b.length; d++)
						if (c = c[b[d]], null == c) {
							b = null;
							break a
						}
					b = c
				}
				d = b;
				b = new mm(d, this);
				c = !0;
				if (!(0 > d.keyCode || void 0 != d.returnValue)) {
					a: {
						var e = !1;
						if (0 == d.keyCode) try {
							d.keyCode = -1;
							break a
						} catch (h) {
							e = !0
						}
						if (e || void 0 == d.returnValue) d.returnValue = !0
					}
					d = [];
					for (e = b.B; e; e = e.parentNode) d.push(e);a = a.type;
					for (e = d.length - 1; !b.D && 0 <= e; e--) {
						b.B = d[e];
						var g = Nm(d[e], a, !0, b);
						c = c && g
					}
					for (e = 0; !b.D && e < d.length; e++) b.B = d[e],
					g = Nm(d[e], a, !1, b),
					c = c && g
				}
				return c
			}
			return Mm(a,
				new mm(b, this))
		},
		Bm = function (a) {
			a = a[Cm];
			return a instanceof vm ? a : null
		},
		zm = function (a) {
			if (typeof a === t) return a;
			a[Om] || (a[Om] = function (b) {
				return a.handleEvent(b)
			});
			return a[Om]
		},
		R = function () {
			M.call(this);
			this.Gb = new vm(this);
			this.mi = this;
			this.tg = null
		},
		Pm = function (a, b, c, d) {
			b = a.Gb.A[String(b)];
			if (!b) return !0;
			b = b.concat();
			for (var e = !0, g = 0; g < b.length; ++g) {
				var h = b[g];
				if (h && !h.td && h.capture == c) {
					var k = h.listener,
						l = h.va || h.src;
					h.qe && wm(a.Gb, h);
					e = !1 !== k.call(l, d) && e
				}
			}
			return e && !d.defaultPrevented
		},
		Qm = function (a,
			b, c, d) {
			this.top = a;
			this.right = b;
			this.bottom = c;
			this.left = d
		},
		Rm = function (a, b) {
			var c = b.x < a.left ? b.x - a.left : b.x > a.right ? b.x - a.right : 0;
			a = b.y < a.top ? b.y - a.top : b.y > a.bottom ? b.y - a.bottom : 0;
			return Math.sqrt(c * c + a * a)
		},
		Tm = function (a, b, c, d) {
			this.left = a;
			this.top = b;
			this.width = c;
			this.height = d
		},
		Um = function (a) {
			return new Qm(a.top, a.left + a.width, a.top + a.height, a.left)
		},
		Vm = function (a) {
			return new Tm(a.left, a.top, a.right - a.left, a.bottom - a.top)
		},
		Xm = function (a, b, c) {
			if (typeof b === x)(b = Wm(a, b)) && (a.style[b] = c);
			else
				for (var d in b) {
					c =
						a;
					var e = b[d],
						g = Wm(c, d);
					g && (c.style[g] = e)
				}
		},
		Wm = function (a, b) {
			var c = Ym[b];
			if (!c) {
				var d = Wk(b);
				c = d;
				void 0 === a.style[d] && (d = (xl ? "Webkit" : P ? "Moz" : K ? "ms" : Zm ? "O" : null) + Xk(d), void 0 !== a.style[d] && (c = d));
				Ym[b] = c
			}
			return c
		},
		$m = function (a, b) {
			var c = I(a);
			return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
		},
		an = function (a, b) {
			return $m(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
		},
		cn = function (a, b, c) {
			if (b instanceof H) {
				var d = b.x;
				b = b.y
			} else d = b, b = c;
			a.style.left = bn(d, !1);
			a.style.top = bn(b, !1)
		},
		dn = function (a) {
			return new H(a.offsetLeft, a.offsetTop)
		},
		en = function (a) {
			a = a ? I(a) : document;
			return !K || gl(9) || tl(J(a).A) ? a.documentElement : a.body
		},
		fn = function (a) {
			try {
				return a.getBoundingClientRect()
			} catch (b) {
				return {
					left: 0,
					top: 0,
					right: 0,
					bottom: 0
				}
			}
		},
		gn = function (a) {
			if (K && !gl(8)) return a.offsetParent;
			var b = I(a),
				c = an(a, Bf),
				d = "fixed" == c || c == Sa;
			for (a = a.parentNode; a && a != b; a = a.parentNode)
				if (11 == a.nodeType && a.host && (a = a.host), c = an(a, Bf),
					d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || c == Sa || "relative" == c)) return a;
			return null
		},
		jn = function (a) {
			for (var b = new Qm(0, Infinity, Infinity, 0), c = J(a), d = c.A.body, e = c.A.documentElement, g = vl(c.A); a = gn(a);)
				if (!(K && 0 == a.clientWidth || xl && 0 == a.clientHeight && a == d) && a != d && a != e && an(a, "overflow") != Bh) {
					var h = hn(a),
						k = new H(a.clientLeft, a.clientTop);
					h.x += k.x;
					h.y += k.y;
					b.top = Math.max(b.top, h.y);
					b.right = Math.min(b.right, h.x + a.clientWidth);
					b.bottom = Math.min(b.bottom, h.y + a.clientHeight);
					b.left = Math.max(b.left, h.x)
				}
			d = g.scrollLeft;
			g = g.scrollTop;
			b.left = Math.max(b.left, d);
			b.top = Math.max(b.top, g);
			c = ul(gm(c) || window);
			b.right = Math.min(b.right, d + c.width);
			b.bottom = Math.min(b.bottom, g + c.height);
			return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null
		},
		mn = function (a, b, c) {
			var d = (b = b || vl(document)) || vl(document),
				e = hn(a),
				g = hn(d),
				h = kn(d);
			if (d == vl(document)) {
				var k = e.x - d.scrollLeft;
				e = e.y - d.scrollTop;
				K && !gl(10) && (k += h.left, e += h.top)
			} else k = e.x -
				g.x - h.left, e = e.y - g.y - h.top;
			h = ln(a);
			a = d.clientWidth - h.width;
			h = d.clientHeight - h.height;
			g = d.scrollLeft;
			d = d.scrollTop;
			c ? (g += k - a / 2, d += e - h / 2) : (g += Math.min(k, Math.max(k - a, 0)), d += Math.min(e, Math.max(e - h, 0)));
			c = new H(g, d);
			b.scrollLeft = c.x;
			b.scrollTop = c.y
		},
		hn = function (a) {
			var b = I(a),
				c = new H(0, 0),
				d = en(b);
			if (a == d) return c;
			a = fn(a);
			b = wl(J(b).A);
			c.x = a.left + b.x;
			c.y = a.top + b.y;
			return c
		},
		nn = function (a) {
			a = fn(a);
			return new H(a.left, a.top)
		},
		on = function (a) {
			if (1 == a.nodeType) return nn(a);
			a = a.changedTouches ? a.changedTouches[0] :
				a;
			return new H(a.clientX, a.clientY)
		},
		pn = function (a, b, c) {
			if (b instanceof kl) c = b.height, b = b.width;
			else if (void 0 == c) throw Error("missing height argument");
			a.style.width = bn(b, !0);
			a.style.height = bn(c, !0)
		},
		bn = function (a, b) {
			typeof a == pf && (a = (b ? Math.round(a) : a) + Sf);
			return a
		},
		qn = function (a) {
			var b = ln;
			if (an(a, "display") != of ) return b(a);
			var c = a.style,
				d = c.display,
				e = c.visibility,
				g = c.position;
			c.visibility = hd;
			c.position = Sa;
			c.display = "inline";
			a = b(a);
			c.display = d;
			c.position = g;
			c.visibility = e;
			return a
		},
		ln = function (a) {
			var b =
				a.offsetWidth,
				c = a.offsetHeight,
				d = xl && !b && !c;
			return (void 0 === b || d) && a.getBoundingClientRect ? (a = fn(a), new kl(a.right - a.left, a.bottom - a.top)) : new kl(b, c)
		},
		rn = function (a) {
			var b = hn(a);
			a = qn(a);
			return new Tm(b.x, b.y, a.width, a.height)
		},
		sn = function (a, b) {
			a = a.style;
			"opacity" in a ? a.opacity = b : "MozOpacity" in a ? a.MozOpacity = b : "filter" in a && (a.filter = "" === b ? "" : "alpha(opacity=" + 100 * Number(b) + ")")
		},
		S = function (a, b) {
			a.style.display = b ? "" : of
		},
		un = function (a, b) {
			b = J(b);
			var c = b.A;
			if (K && c.createStyleSheet) b = c.createStyleSheet(),
				tn(b, a);
			else {
				c = ql(b.A, "HEAD", void 0, void 0)[0];
				if (!c) {
					var d = ql(b.A, "BODY", void 0, void 0)[0];
					c = b.P("HEAD");
					d.parentNode.insertBefore(c, d)
				}
				d = b.P("STYLE");
				var e = Bi();
				e && d.setAttribute("nonce", e);
				tn(d, a);
				b.appendChild(c, d)
			}
		},
		tn = function (a, b) {
			b = yk(b);
			K && void 0 !== a.cssText ? a.cssText = b : A.trustedTypes ? Ul(a, b) : a.innerHTML = b
		},
		vn = function (a) {
			return $f == an(a, Qb)
		},
		xn = function (a, b, c) {
			c = c ? null : a.getElementsByTagName("*");
			if (wn) {
				if (b = b ? of : "", a.style && (a.style[wn] = b), c) {
					a = 0;
					for (var d; d = c[a]; a++) d.style && (d.style[wn] =
						b)
				}
			} else if (K || Zm)
				if (b = b ? "on" : "", a.setAttribute("unselectable", b), c)
					for (a = 0; d = c[a]; a++) d.setAttribute("unselectable", b)
		},
		An = function (a, b) {
			var c = tl(J(I(a)).A);
			if (!K || G("10") || c && G("8")) yn(a, b, "content-box");
			else {
				var d = a.style;
				c ? (d.pixelWidth = b.width, d.pixelHeight = b.height) : (c = zn(a, "padding"), a = kn(a), d.pixelWidth = b.width + a.left + c.left + c.right + a.right, d.pixelHeight = b.height + a.top + c.top + c.bottom + a.bottom)
			}
		},
		yn = function (a, b, c) {
			a = a.style;
			P ? a.MozBoxSizing = c : xl ? a.WebkitBoxSizing = c : a.boxSizing = c;
			a.width = Math.max(b.width,
				0) + Sf;
			a.height = Math.max(b.height, 0) + Sf
		},
		Bn = function (a, b) {
			if (/^\d+px?$/.test(b)) return parseInt(b, 10);
			var c = a.style.left,
				d = a.runtimeStyle.left;
			a.runtimeStyle.left = a.currentStyle.left;
			a.style.left = b;
			b = a.style.pixelLeft;
			a.style.left = c;
			a.runtimeStyle.left = d;
			return +b
		},
		Cn = function (a, b) {
			return (b = a.currentStyle ? a.currentStyle[b] : null) ? Bn(a, b) : 0
		},
		zn = function (a, b) {
			if (K) {
				var c = Cn(a, b + "Left"),
					d = Cn(a, b + "Right"),
					e = Cn(a, b + "Top");
				a = Cn(a, b + "Bottom");
				return new Qm(e, d, a, c)
			}
			c = $m(a, b + "Left");
			d = $m(a, b + "Right");
			e = $m(a,
				b + "Top");
			a = $m(a, b + "Bottom");
			return new Qm(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
		},
		En = function (a, b) {
			if ((a.currentStyle ? a.currentStyle[b + "Style"] : null) == of ) return 0;
			b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
			return b in Dn ? Dn[b] : Bn(a, b)
		},
		kn = function (a) {
			if (K && !gl(9)) {
				var b = En(a, "borderLeft"),
					c = En(a, "borderRight"),
					d = En(a, "borderTop");
				a = En(a, "borderBottom");
				return new Qm(d, c, a, b)
			}
			b = $m(a, "borderLeftWidth");
			c = $m(a, "borderRightWidth");
			d = $m(a, "borderTopWidth");
			a = $m(a, "borderBottomWidth");
			return new Qm(parseFloat(d), parseFloat(c), parseFloat(a), parseFloat(b))
		},
		In = function (a) {
			var b = an(a, "fontSize");
			var c = (c = b.match(Fn)) && c[0] || null;
			if (b && Sf == c) return parseInt(b, 10);
			if (K) {
				if (String(c) in Gn) return Bn(a, b);
				if (a.parentNode && 1 == a.parentNode.nodeType && String(c) in Hn) return a = a.parentNode, c = an(a, "fontSize"), Bn(a, b == c ? "1em" : b)
			}
			c = Al(n, {
				style: "visibility:hidden;position:absolute;line-height:0;padding:0;margin:0;border:0;height:1em;"
			});
			a.appendChild(c);
			b = c.offsetHeight;
			Il(c);
			return b
		},
		Jn = function (a) {
			return (a =
				a.exec(nj)) ? a[1] : ""
		},
		Ln = function (a) {
			return 0 <= mj(Kn, a)
		},
		Pn = function (a, b, c, d, e, g, h, k, l) {
			var m = Mn(c),
				r = rn(a),
				L = jn(a);
			if (L) {
				var oa = Vm(L);
				L = Math.max(r.left, oa.left);
				var lb = Math.min(r.left + r.width, oa.left + oa.width);
				if (L <= lb) {
					var Oc = Math.max(r.top, oa.top);
					oa = Math.min(r.top + r.height, oa.top + oa.height);
					Oc <= oa && (r.left = L, r.top = Oc, r.width = lb - L, r.height = oa - Oc)
				}
			}
			L = J(a);
			Oc = J(c);
			if (L.A != Oc.A) {
				lb = L.A.body;
				Oc = gm(Oc);
				oa = new H(0, 0);
				var Pc = yl(I(lb));
				if (al(Pc, "parent")) {
					var Sm = lb;
					do {
						var Iv = Pc == Oc ? hn(Sm) : nn(Sm);
						oa.x +=
							Iv.x;
						oa.y += Iv.y
					} while (Pc && Pc != Oc && Pc != Pc.parent && (Sm = Pc.frameElement) && (Pc = Pc.parent))
				}
				lb = jl(oa, hn(lb));
				!K || gl(9) || tl(L.A) || (lb = jl(lb, wl(L.A)));
				r.left += lb.x;
				r.top += lb.y
			}
			a = Nn(a, b);
			b = r.left;
			a & 4 ? b += r.width : a & 2 && (b += r.width / 2);
			r = new H(b, r.top + (a & 1 ? r.height : 0));
			r = jl(r, m);
			e && (r.x += (a & 4 ? -1 : 1) * e.x, r.y += (a & 1 ? -1 : 1) * e.y);
			if (h)
				if (l) var jc = l;
				else if (jc = jn(c)) jc.top -= m.y, jc.right -= m.x, jc.bottom -= m.y, jc.left -= m.x;
			return On(r, c, d, g, jc, h, k)
		},
		Mn = function (a) {
			if (a = a.offsetParent) {
				var b = "HTML" == a.tagName || "BODY" == a.tagName;
				if (!b || "static" != an(a, Bf)) {
					var c = hn(a);
					if (!b) {
						b = vn(a);
						var d;
						if (d = b) {
							d = Qn && Ln(10);
							var e;
							if (e = Rn) e = 0 <= mj(Sn, 10);
							var g = Tn && Ln(85);
							d = P || d || e || g
						}
						b = d ? -a.scrollLeft : !b || Un && G("8") || an(a, "overflowX") == Bh ? a.scrollLeft : a.scrollWidth - a.clientWidth - a.scrollLeft;
						c = jl(c, new H(b, a.scrollTop))
					}
				}
			}
			return c || new H
		},
		On = function (a, b, c, d, e, g, h) {
			a = hl(a);
			var k = Nn(b, c);
			c = qn(b);
			h = h ? ml(h) : ml(c);
			a = hl(a);
			h = ml(h);
			var l = 0;
			if (d || 0 != k) k & 4 ? a.x -= h.width + (d ? d.right : 0) : k & 2 ? a.x -= h.width / 2 : d && (a.x += d.left), k & 1 ? a.y -= h.height + (d ? d.bottom :
				0) : d && (a.y += d.top);
			if (g) {
				if (e) {
					d = a;
					k = h;
					l = 0;
					65 == (g & 65) && (d.x < e.left || d.x >= e.right) && (g &= -2);
					132 == (g & 132) && (d.y < e.top || d.y >= e.bottom) && (g &= -5);
					d.x < e.left && g & 1 && (d.x = e.left, l |= 1);
					if (g & 16) {
						var m = d.x;
						d.x < e.left && (d.x = e.left, l |= 4);
						d.x + k.width > e.right && (k.width = Math.min(e.right - d.x, m + k.width - e.left), k.width = Math.max(k.width, 0), l |= 4)
					}
					d.x + k.width > e.right && g & 1 && (d.x = Math.max(e.right - k.width, e.left), l |= 1);
					g & 2 && (l |= (d.x < e.left ? 16 : 0) | (d.x + k.width > e.right ? 32 : 0));
					d.y < e.top && g & 4 && (d.y = e.top, l |= 2);
					g & 32 && (m = d.y, d.y <
						e.top && (d.y = e.top, l |= 8), d.y + k.height > e.bottom && (k.height = Math.min(e.bottom - d.y, m + k.height - e.top), k.height = Math.max(k.height, 0), l |= 8));
					d.y + k.height > e.bottom && g & 4 && (d.y = Math.max(e.bottom - k.height, e.top), l |= 2);
					g & 8 && (l |= (d.y < e.top ? 64 : 0) | (d.y + k.height > e.bottom ? 128 : 0));
					e = l
				} else e = 256;
				l = e
			}
			g = new Tm(0, 0, 0, 0);
			g.left = a.x;
			g.top = a.y;
			g.width = h.width;
			g.height = h.height;
			e = l;
			if (e & 496) return e;
			cn(b, new H(g.left, g.top));
			h = new kl(g.width, g.height);
			ll(c, h) || (c = h, h = tl(J(I(b)).A), !K || G("10") || h && G("8") ? yn(b, c, "border-box") :
				(a = b.style, h ? (h = zn(b, "padding"), b = kn(b), a.pixelWidth = c.width - b.left - h.left - h.right - b.right, a.pixelHeight = c.height - b.top - h.top - h.bottom - b.bottom) : (a.pixelWidth = c.width, a.pixelHeight = c.height)));
			return e
		},
		Nn = function (a, b) {
			return (b & 8 && vn(a) ? b ^ 4 : b) & -9
		},
		Vn = function (a) {
			O.call(this, "bind");
			this.A = a
		},
		Wn = function (a) {
			O.call(this, "visi");
			this.A = a
		},
		T = function (a) {
			M.call(this);
			this.B = a;
			this.A = {}
		},
		Yn = function (a, b, c, d, e) {
			Xn(a, b, c, d, !1, e)
		},
		Xn = function (a, b, c, d, e, g) {
			Array.isArray(c) || (c && (Zn[0] = c.toString()), c = Zn);
			for (var h = 0; h < c.length; h++) {
				var k = Q(b, c[h], d || a.handleEvent, e || !1, g || a.B || a);
				if (!k) break;
				a.A[k.key] = k
			}
			return a
		},
		$n = function (a, b, c, d, e, g) {
			if (Array.isArray(c))
				for (var h = 0; h < c.length; h++) $n(a, b, c[h], d, e, g);
			else {
				b = ym(b, c, d || a.handleEvent, e, g || a.B || a);
				if (!b) return a;
				a.A[b.key] = b
			}
			return a
		},
		ao = function (a) {
			pj(a.A, function (b, c) {
				this.A.hasOwnProperty(c) && Km(b)
			}, a);
			a.A = {}
		},
		bo = function () {},
		co = function (a, b, c) {
			this.A = a;
			this.B = b;
			this.M = c
		},
		eo = function () {},
		U = function (a) {
			R.call(this);
			this.A = a || J();
			this.zc = fo;
			this.oa =
				null;
			this.ea = !1;
			this.D = null;
			this.$ = void 0;
			this.S = this.I = this.M = this.yc = null;
			this.nh = !1
		},
		go = function (a, b) {
			switch (a) {
				case 1:
					return b ? "disable" : "enable";
				case 2:
					return b ? jd : mh;
				case 4:
					return b ? "activate" : "deactivate";
				case 8:
					return b ? "select" : "unselect";
				case 16:
					return b ? "check" : "uncheck";
				case 32:
					return b ? lc : nb;
				case 64:
					return b ? "open" : "close"
			}
			throw Error("Invalid component state");
		},
		ho = function (a) {
			return a.oa || (a.oa = ":" + (a.Ej.A++).toString(36))
		},
		io = function (a, b) {
			if (a.M && a.M.S) {
				var c = a.M.S,
					d = a.oa;
				d in c &&
					delete c[d];
				wj(a.M.S, b, a)
			}
			a.oa = b
		},
		jo = function (a) {
			a.$ || (a.$ = new T(a));
			return a.$
		},
		lo = function (a, b) {
			if (a == b) throw Error(Pa);
			if (b && a.M && a.oa && ko(a.M, a.oa) && a.M != b) throw Error(Pa);
			a.M = b;
			U.O.ra.call(a, b)
		},
		mo = function (a, b, c) {
			if (a.ea) throw Error(ka);
			a.D || a.W();
			b ? b.insertBefore(a.D, c || null) : a.A.A.body.appendChild(a.D);
			a.M && !a.M.ea || a.V()
		},
		no = function (a) {
			null == a.zc && (a.zc = vn(a.ea ? a.D : a.A.A.body));
			return a.zc
		},
		oo = function (a) {
			return !!a.I && 0 != a.I.length
		},
		po = function (a) {
			return a.I ? a.I.length : 0
		},
		ko = function (a,
			b) {
			a.S && b ? (a = a.S, b = (null !== a && b in a ? a[b] : void 0) || null) : b = null;
			return b
		},
		qo = function (a, b) {
			return a.I ? a.I[b] || null : null
		},
		ro = function (a, b, c) {
			a.I && D(a.I, b, c)
		},
		so = function (a, b) {
			return a.I && b ? Vi(a.I, b) : -1
		},
		uo = function (a) {
			U.call(this, to);
			this.N = a;
			this.X = this.ga = !1;
			this.R = null;
			this.bi = !0;
			this.U = "";
			this.Y = this.bc = !1;
			this.J = new T(this)
		},
		vo = function (a, b, c) {
			a.ga = !c;
			a.X = b;
			a.Xc = c ? a.A.G(c) : void 0;
			a.aa(a.Xc);
			a.ga && (a.G().style.position = Sa, a.Yh());
			a.U = a.G().style.display
		},
		wo = function () {
			R.apply(this, arguments)
		},
		yo = function (a, b) {
			a.dispatchEvent(b);
			xo.forEach(function (c) {
				c.dispatchEvent(b)
			})
		},
		Co = function (a, b, c, d, e, g) {
			if (xl && !G("525")) return !0;
			if (km && e) return zo(a);
			if (e && !d) return !1;
			if (!P) {
				typeof b === pf && (b = Ao(b));
				var h = 17 == b || 18 == b || km && 91 == b;
				if ((!c || km) && h || km && 16 == b && (d || g)) return !1
			}
			if ((xl || Bo) && d && c) switch (a) {
				case 220:
				case 219:
				case 221:
				case 192:
				case 186:
				case 189:
				case 187:
				case 188:
				case 190:
				case 191:
				case 192:
				case 222:
					return !1
			}
			if (K && d && b == a) return !1;
			switch (a) {
				case 13:
					return P ? g || e ? !1 : !(c && d) : !0;
				case 27:
					return !(xl ||
						Bo || P)
			}
			return P && (d || e || g) ? !1 : zo(a)
		},
		zo = function (a) {
			if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (xl || Bo) && 0 == a) return !0;
			switch (a) {
				case 32:
				case 43:
				case 63:
				case 64:
				case 107:
				case 109:
				case 110:
				case 111:
				case 186:
				case 59:
				case 189:
				case 187:
				case 61:
				case 188:
				case 190:
				case 191:
				case 192:
				case 222:
				case 219:
				case 220:
				case 221:
				case 163:
				case 58:
					return !0;
				case 173:
					return P;
				default:
					return !1
			}
		},
		Ao = function (a) {
			if (P) a = Do(a);
			else if (km && xl) switch (a) {
				case 93:
					a = 91
			}
			return a
		},
		Do = function (a) {
			switch (a) {
				case 61:
					return 187;
				case 59:
					return 186;
				case 173:
					return 189;
				case 224:
					return 91;
				case 0:
					return 224;
				default:
					return a
			}
		},
		Eo = function (a, b, c, d, e, g, h, k, l, m) {
			this.A = a;
			this.F = b;
			this.J = c;
			this.D = d;
			this.C = e;
			this.I = g;
			this.M = h;
			this.S = k;
			this.B = l;
			this.ha = m
		},
		Ko = function (a) {
			var b = a.A;
			b = (b = b && "composed" in b && b && "composedPath" in b && b.composed && b.composedPath()) && 0 < b.length ? b[0] : a.target;
			return Fo(Go(Ho(Io((new Jo).keyCode(a.keyCode || 0).key(a.key || "").shiftKey(!!a.shiftKey).altKey(!!a.altKey).ctrlKey(!!a.ctrlKey).metaKey(!!a.metaKey).target(a.target), b), function () {
					return a.preventDefault()
				}),
				function () {
					return a.stopPropagation()
				}))
		},
		Jo = function () {
			this.D = null;
			this.C = "";
			this.J = this.I = this.M = this.ha = this.F = this.B = this.A = this.S = null
		},
		Io = function (a, b) {
			a.M = b;
			return a
		},
		Ho = function (a, b) {
			a.I = b;
			return a
		},
		Go = function (a, b) {
			a.J = b;
			return a
		},
		Fo = function (a) {
			return new Eo(a.D, a.C, a.S, a.A, a.B, a.F, a.ha, a.M, a.I, a.J)
		},
		Oo = function (a) {
			R.call(this);
			this.D = this.B = {};
			this.F = 0;
			this.J = Cj(Lo);
			this.K = Cj(Mo);
			this.M = this.S = !1;
			this.I = null;
			this.A = a;
			Q(this.A, u, this.Xg, void 0, this);
			Q(this.A, Cg, this.fh, void 0, this);
			No &&
				(Q(this.A, v, this.jh, void 0, this), Q(this.A, Dg, this.kh, void 0, this));
			Q(this.A, oe, this.Yg, void 0, this);
			Q(this.A, Eg, this.gh, void 0, this)
		},
		Po = function (a) {
			this.A = a || null;
			this.next = a ? null : {}
		},
		So = function (a, b) {
			if (typeof b[a] === x) a = kk(Qo(b[a]), function (e) {
				return Ro(e.key || "", e.keyCode, e.modifiers)
			});
			else {
				var c = b,
					d = a;
				Array.isArray(b[a]) && (c = b[a], d = 0);
				for (a = []; d < c.length; d += 2) a.push(Ro("", c[d], c[d + 1]))
			}
			return a
		},
		Qo = function (a) {
			a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
			a = a.split(" ");
			for (var b = [], c, d = 0; c = a[d]; d++) {
				var e = c.split("+"),
					g = null,
					h = null;
				c = 0;
				for (var k, l = 0; k = e[l]; l++) {
					switch (k) {
						case "shift":
							c |= 1;
							continue;
						case "ctrl":
							c |= 2;
							continue;
						case "alt":
							c |= 4;
							continue;
						case "meta":
							c |= 8;
							continue
					}
					e = void 0;
					g = k;
					if (!To) {
						h = {};
						for (e in Uo) h[Uo[e]] = Ao(parseInt(e, 10));
						To = h
					}
					h = To[g];
					g = k;
					break
				}
				b.push({
					key: g,
					keyCode: h,
					modifiers: c
				})
			}
			return b
		},
		Vo = function (a, b) {
			32 == a.I && 32 == b.A && (0, b.B)();
			a.I = null
		},
		Wo = function (a) {
			return No && a.C && a.D
		},
		Xo = function (a, b, c) {
			var d = b.shift();
			D(d, function (e) {
				if ((e = a[e]) && (0 ==
						b.length || e.A)) throw Error("Keyboard shortcut conflicts with existing shortcut");
			});
			b.length ? D(d, function (e) {
				e = e.toString();
				var g = new Po;
				e = e in a ? a[e] : a[e] = g;
				Xo(e.next, b.slice(0), c)
			}) : D(d, function (e) {
				a[e] = new Po(c)
			})
		},
		Yo = function (a, b) {
			var c = b.shift();
			D(c, function (d) {
				var e = a[d];
				e && (0 == b.length ? e.A && delete a[d] : e.next && (Yo(e.next, b.slice(0)), vj(e.next) && delete a[d]))
			})
		},
		Zo = function (a, b) {
			for (var c = 0; c < b.length; c++) {
				var d = a[b[c]];
				if (d) return d
			}
		},
		$o = function (a, b, c) {
			for (; 0 < c.length && b;) {
				var d = c.shift();
				if ((d = Zo(b, d)) && (0 == c.length && d.A || $o(a, d.next, c.slice(0)))) return !0
			}
			return !1
		},
		Ro = function (a, b, c) {
			c = c || 0;
			b = ["c_" + b + "_" + c];
			"" != a && b.push("n_" + a + "_" + c);
			return b
		},
		bp = function (a, b, c) {
			a: {
				var d = b.A;
				if ("" != b.F) {
					var e = b.F;
					if ("Control" == e || "Shift" == e || "Meta" == e || "AltGraph" == e) {
						d = !1;
						break a
					}
				} else if (16 == d || 17 == d || 18 == d) {
					d = !1;
					break a
				}
				e = b.S;
				var g = e.tagName == Na || e.tagName == va || e.tagName == ha || "SELECT" == e.tagName,
					h = !g && (e.isContentEditable || e.ownerDocument && "on" == e.ownerDocument.designMode);d = !g && !h || a.J[d] || a.M ?
				!0 : h ? !1 : b.D || b.C || b.I ? !0 : e.tagName == va && a.K[e.type] ? 13 == d : e.tagName == va || e.tagName == ha ? 32 != d : !1
			}
			if (d)
				if (!c && Wo(b)) a.C = !1;
				else {
					c = Ao(b.A);
					d = Ro(b.F, c, (b.J ? 1 : 0) | (b.C ? 2 : 0) | (b.D ? 4 : 0) | (b.I ? 8 : 0));
					e = Zo(a.D, d);
					if (!e || 1500 <= Ni() - a.F) a.D = a.B, a.F = Ni();
					(e = Zo(a.D, d)) && e.next && (a.D = e.next, a.F = Ni());
					e && (e.next ? (0, b.B)() : (a.D = a.B, a.F = Ni(), (0, b.B)(), a.S && (0, b.ha)(), d = e.A, e = a.dispatchEvent(new ap(jg, d, b.M)), (e &= a.dispatchEvent(new ap(kg + d, d, b.M))) || (0, b.B)(), P && (a.I = c)))
				}
		},
		ap = function (a, b, c) {
			O.call(this, a, c);
			this.A =
				b
		},
		dp = function (a) {
			R.call(this);
			this.F = !1;
			this.B = {};
			this.D = 0;
			this.C = new T(this);
			this.A = new Oo(a);
			this.A.ra(this);
			this.C.H(a, u, this.uj, cp);
			this.C.H(a, v, this.vj, cp);
			this.C.H(a, oe, this.wj, cp)
		},
		ep = function (a) {
			return (a.shiftKey || 16 == a.keyCode ? 1 : 0) | (a.ctrlKey || 17 == a.keyCode ? 2 : 0) | (a.altKey || 18 == a.keyCode ? 4 : 0) | (a.metaKey || 91 == a.keyCode ? 8 : 0)
		},
		fp = function (a) {
			a = Qo(a);
			if (1 == a.length) {
				a = a[0];
				var b = a.keyCode;
				if (!b || 1 & a.modifiers) return a.keyCode = 1 & a.modifiers ? 16 : 4 & a.modifiers ? 18 : 8 & a.modifiers ? 91 : 17, (b || a.keyCode) &
					255 | a.modifiers << 8
			}
		},
		gp = function () {
			M.call(this)
		},
		hp = function () {
			M.call(this);
			this.A = {};
			this.B = new T(this);
			this.B.H(window, ["beforeunload", "unload"], this.D)
		},
		ip = function (a) {
			return hp.fa().A[a] || new gp(a)
		},
		mp = function () {
			return Tn && Ln(25) || K && Ln(8) || Bo || jp && Ln(19) || Zm && Ln(12.1) || Qn && Ln(5.1) || kp && Ln(3.2) || lp && Ln(2.1)
		},
		np = function (a) {
			M.call(this);
			this.D = a;
			this.A = {};
			this.B = {};
			this.C = {};
			this.F = {}
		},
		pp = function (a, b) {
			b = b.replace("{APP}", op);
			b = b.replace("{CODE}", a.xh);
			var c = new Image;
			a.F[a.Xf] = c;
			a.pf || (c.onload =
				c.onerror = B(a.sj, a, a.Xf));
			a.Xf++;
			c.src = b
		},
		qp = function () {},
		tp = function (a, b, c) {
			a.D = null;
			b || (b = []);
			a.M = void 0;
			a.C = -1;
			a.A = b;
			a: {
				if (b = a.A.length) {
					--b;
					var d = a.A[b];
					if (!(null === d || typeof d != rf || Array.isArray(d) || rp && d instanceof Uint8Array)) {
						a.F = b - a.C;
						a.B = d;
						break a
					}
				}
				a.F = Number.MAX_VALUE
			}
			a.I = {};
			if (c)
				for (b = 0; b < c.length; b++)
					if (d = c[b], d < a.F) d += a.C, a.A[d] = a.A[d] || sp;
					else {
						var e = a.F + a.C;
						a.A[e] || (a.B = a.A[e] = {});
						a.B[d] = a.B[d] || sp
					}
		},
		up = function (a, b) {
			if (b < a.F) {
				b += a.C;
				var c = a.A[b];
				return c !== sp ? c : a.A[b] = []
			}
			if (a.B) return c =
				a.B[b], c === sp ? a.B[b] = [] : c
		},
		vp = function (a) {
			a = up(a, 5);
			return null == a ? -1 : a
		},
		xp = function (a) {
			var b = wp;
			a.D || (a.D = {});
			if (!a.D[3]) {
				var c = up(a, 3);
				for (var d = [], e = 0; e < c.length; e++) d[e] = new b(c[e]);
				a.D[3] = d
			}
			b = a.D[3];
			b == sp && (b = a.D[3] = []);
			return b
		},
		zp = function (a) {
			tp(this, a, yp)
		},
		wp = function (a) {
			tp(this, a, null)
		},
		Ep = function (a) {
			Ap.ita_icon_style || (Ap.ita_icon_style = !0, un(Bp(), Cp.body));
			a = Dp[a];
			return "ita-icon-" + (a ? vp(a) : 0)
		},
		Fp = function (a) {
			(a = Ep(a)) && (a = "ita-kd-img " + a);
			return a || ""
		},
		Bp = function () {
			var a = [],
				b = 0;
			pj(Dp,
				function (d) {
					d = vp(d);
					d > b && (b = d)
				});
			for (var c = 0; c <= b; c++) a.push(xk(".ita-icon-" + c, {
				"background-position": -(c % 10 * 50 + 14) + "px " + -(50 * Math.floor(c / 10) + 17) + Sf
			}));
			return zk(a)
		},
		Gp = function (a, b) {
			return $m(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style[b]
		},
		Hp = function (a) {
			return typeof a.className == x ? a.className : a.getAttribute && a.getAttribute("class") || ""
		},
		Ip = function (a) {
			return a.classList ? a.classList : Hp(a).match(/\S+/g) || []
		},
		Jp = function (a, b) {
			typeof a.className == x ? a.className = b : a.setAttribute && a.setAttribute("class",
				b)
		},
		Kp = function (a, b) {
			return a.classList ? a.classList.contains(b) : E(Ip(a), b)
		},
		V = function (a, b) {
			if (a.classList) a.classList.add(b);
			else if (!Kp(a, b)) {
				var c = Hp(a);
				Jp(a, c + (0 < c.length ? " " + b : b))
			}
		},
		Lp = function (a, b) {
			if (a.classList) D(b, function (e) {
				V(a, e)
			});
			else {
				var c = {};
				D(Ip(a), function (e) {
					c[e] = !0
				});
				D(b, function (e) {
					c[e] = !0
				});
				b = "";
				for (var d in c) b += 0 < b.length ? " " + d : d;
				Jp(a, b)
			}
		},
		W = function (a, b) {
			a.classList ? a.classList.remove(b) : Kp(a, b) && Jp(a, Kl(Ip(a), function (c) {
				return c != b
			}).join(" "))
		},
		Mp = function (a, b) {
			a.classList ?
				D(b, function (c) {
					W(a, c)
				}) : Jp(a, Kl(Ip(a), function (c) {
					return !E(b, c)
				}).join(" "))
		},
		Np = function (a, b, c) {
			W(a, b);
			V(a, c)
		},
		Op = function () {},
		Qp = function (a) {
			if (a instanceof Op) return a;
			if (typeof a.Pb == t) return a.Pb(!1);
			if (Fi(a)) {
				var b = 0,
					c = new Op;
				c.next = function () {
					for (;;) {
						if (b >= a.length) throw Pp;
						if (b in a) return a[b++];
						b++
					}
				};
				return c
			}
			throw Error("Not implemented");
		},
		Sp = function (a, b, c, d, e) {
			this.I = !!b;
			this.B = null;
			this.C = 0;
			this.N = !1;
			this.$ = !c;
			a && Rp(this, a, d);
			this.F = void 0 != e ? e : this.C || 0;
			this.I && (this.F *= -1)
		},
		Rp = function (a,
			b, c, d) {
			if (a.B = b) a.C = typeof c === pf ? c : 1 != a.B.nodeType ? 0 : a.I ? -1 : 1;
			typeof d === pf && (a.F = d)
		},
		Tp = function () {},
		Up = function (a) {
			for (var b = [], c = 0, d = a.ad(); c < d; c++) b.push(a.jc(c));
			return b
		},
		Vp = function (a) {
			a = a.Id();
			return 1 == a.nodeType ? a : a.parentNode
		},
		Wp = function (a, b) {
			Sp.call(this, a, b, !0)
		},
		Xp = function (a, b, c, d, e) {
			this.D = this.A = null;
			this.ha = this.K = 0;
			this.M = !!e;
			if (a) {
				this.A = a;
				this.K = b;
				this.D = c;
				this.ha = d;
				if (1 == a.nodeType && "BR" != a.tagName)
					if (a = a.childNodes, b = a[b]) this.A = b, this.K = 0;
					else {
						a.length && (this.A = Ri(a));
						var g = !0
					}
				1 == c.nodeType && ((this.D = c.childNodes[d]) ? this.ha = 0 : this.D = c)
			}
			Sp.call(this, this.M ? this.D : this.A, this.M, !0);
			if (g) try {
				this.next()
			} catch (h) {
				if (h != Pp) throw h;
			}
		},
		Yp = function () {},
		Zp = function (a, b) {
			a = a.B.getClientRects();
			return a.length ? (a = b ? a[0] : Ri(a), new H(b ? a.left : a.right, b ? a.top : a.bottom)) : null
		},
		$p = function (a, b, c) {
			c = c && !b.cb();
			b = b.Dd();
			try {
				return c ? 0 <= a.jb(b, 0, 1) && 0 >= a.jb(b, 1, 0) : 0 <= a.jb(b, 0, 0) && 0 >= a.jb(b, 1, 1)
			} catch (d) {
				if (!K) throw d;
				return !1
			}
		},
		aq = function (a) {
			this.B = a
		},
		cq = function (a) {
			var b = I(a).createRange();
			if (3 == a.nodeType) b.setStart(a, 0), b.setEnd(a, a.length);
			else if (bq(a)) {
				for (var c, d = a;
					(c = d.firstChild) && bq(c);) d = c;
				b.setStart(d, 0);
				for (d = a;
					(c = d.lastChild) && bq(c);) d = c;
				b.setEnd(d, 1 == d.nodeType ? d.childNodes.length : d.length)
			} else c = a.parentNode, a = Vi(c.childNodes, a), b.setStart(c, a), b.setEnd(c, a + 1);
			return b
		},
		dq = function (a, b, c, d) {
			var e = I(a).createRange();
			e.setStart(a, b);
			e.setEnd(c, d);
			return e
		},
		eq = function (a) {
			this.B = a
		},
		fq = function (a) {
			this.D = this.A = this.I = null;
			this.F = this.C = -1;
			this.B = a
		},
		gq = function (a) {
			var b =
				I(a).body.createTextRange();
			if (1 == a.nodeType) b.moveToElementText(a), bq(a) && !a.childNodes.length && b.collapse(!1);
			else {
				for (var c = 0, d = a; d = d.previousSibling;) {
					var e = d.nodeType;
					if (3 == e) c += d.length;
					else if (1 == e) {
						b.moveToElementText(d);
						break
					}
				}
				d || b.moveToElementText(a.parentNode);
				b.collapse(!d);
				c && b.move(xb, c);
				b.moveEnd(xb, a.length)
			}
			return b
		},
		hq = function (a) {
			a.I = a.A = a.D = null;
			a.C = a.F = -1
		},
		iq = function (a, b) {
			for (var c = b.childNodes, d = 0, e = c.length; d < e; d++) {
				var g = c[d];
				if (bq(g)) {
					var h = gq(g),
						k = h.htmlText != g.outerHTML;
					if (a.cb() && k ? 0 <= a.jb(h, 1, 1) && 0 >= a.jb(h, 1, 0) : a.B.inRange(h)) return iq(a, g)
				}
			}
			return b
		},
		kq = function (a, b, c) {
			c = c || a.Df();
			if (!c || !c.firstChild) return c;
			for (var d = 1 == b, e = 0, g = c.childNodes.length; e < g; e++) {
				var h = d ? e : g - e - 1,
					k = c.childNodes[h];
				try {
					var l = jq(k)
				} catch (r) {
					continue
				}
				var m = l.Dd();
				if (a.cb())
					if (!bq(k)) {
						if (0 == a.jb(m, 1, 1)) {
							a.C = a.F = h;
							break
						}
					} else {
						if ($p(l, a)) return kq(a, b, k)
					}
				else {
					if ($p(a, l)) {
						if (!bq(k)) {
							d ? a.C = h : a.F = h + 1;
							break
						}
						return kq(a, b, k)
					}
					if (0 > a.jb(m, 1, 0) && 0 < a.jb(m, 0, 1)) return kq(a, b, k)
				}
			}
			return c
		},
		lq = function (a,
			b) {
			var c = 1 == b,
				d = c ? a.Ua() : a.zb();
			if (1 == d.nodeType) {
				d = d.childNodes;
				for (var e = d.length, g = c ? 1 : -1, h = c ? 0 : e - 1; 0 <= h && h < e; h += g) {
					var k = d[h];
					if (!bq(k) && 0 == a.B.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == b ? "Start" : "End"), jq(k).Dd())) return c ? h : h + 1
				}
				return -1 == h ? 0 : h
			}
			a = a.B.duplicate();
			b = gq(d);
			a.setEndPoint(c ? "EndToEnd" : "StartToStart", b);
			a = a.text.length;
			return c ? d.length - a : a
		},
		mq = function (a) {
			return 3 == a.nodeType ? a.nodeValue : a.innerText
		},
		nq = function (a) {
			this.B = a
		},
		oq = function (a) {
			this.B = a
		},
		qq = function (a) {
			return pq ?
				new fq(a, I(a.parentElement())) : xl ? new oq(a) : P ? new eq(a) : Zm ? new nq(a) : new aq(a)
		},
		jq = function (a) {
			if (K && !gl(9)) {
				var b = new fq(gq(a), I(a));
				if (bq(a)) {
					for (var c, d = a;
						(c = d.firstChild) && bq(c);) d = c;
					b.A = d;
					b.C = 0;
					for (d = a;
						(c = d.lastChild) && bq(c);) d = c;
					b.D = d;
					b.F = 1 == d.nodeType ? d.childNodes.length : d.length;
					b.I = a
				} else b.A = b.D = b.I = a.parentNode, b.C = Vi(b.I.childNodes, a), b.F = b.C + 1;
				a = b
			} else a = xl ? new oq(cq(a)) : P ? new eq(cq(a)) : Zm ? new nq(cq(a)) : new aq(cq(a));
			return a
		},
		bq = function (a) {
			return El(a) || 3 == a.nodeType
		},
		rq = function () {
			this.B =
				this.D = this.C = this.A = this.I = null;
			this.F = !1
		},
		sq = function (a, b) {
			var c = new rq;
			c.I = a;
			c.F = !!b;
			return c
		},
		uq = function (a, b, c, d) {
			var e = new rq;
			e.F = tq(a, b, c, d);
			if (Nl(a) && !El(a)) {
				var g = a.parentNode;
				b = Vi(g.childNodes, a);
				a = g
			}
			Nl(c) && !El(c) && (g = c.parentNode, d = Vi(g.childNodes, c), c = g);
			e.F ? (e.A = c, e.C = d, e.D = a, e.B = b) : (e.A = a, e.C = b, e.D = c, e.B = d);
			return e
		},
		vq = function (a) {
			var b;
			if (!(b = a.I)) {
				b = a.bb();
				var c = a.Jb(),
					d = a.Ib(),
					e = a.Fc();
				if (K && !gl(9)) {
					var g = b,
						h = c,
						k = d,
						l = e,
						m = !1;
					1 == g.nodeType && (h = g.childNodes[h], m = !h, g = h || g.lastChild ||
						g, h = 0);
					var r = gq(g);
					h && r.move(xb, h);
					g == k && h == l ? r.collapse(!0) : (m && r.collapse(!1), m = !1, 1 == k.nodeType && (k = (h = k.childNodes[l]) || k.lastChild || k, l = 0, m = !h), g = gq(k), g.collapse(!m), l && g.moveEnd(xb, l), r.setEndPoint("EndToEnd", g));
					l = new fq(r, I(b));
					l.A = b;
					l.C = c;
					l.D = d;
					l.F = e;
					b = l
				} else b = xl ? new oq(dq(b, c, d, e)) : P ? new eq(dq(b, c, d, e)) : Zm ? new nq(dq(b, c, d, e)) : new aq(dq(b, c, d, e));
				b = a.I = b
			}
			return b
		},
		wq = function () {},
		xq = function () {
			this.D = this.A = this.B = null
		},
		yq = function (a) {
			if (!a.A && (a.A = [], a.B))
				for (var b = 0; b < a.B.length; b++) a.A.push(a.B.item(b));
			return a.A
		},
		zq = function (a) {
			a.D || (a.D = yq(a).concat(), a.D.sort(function (b, c) {
				return b.sourceIndex - c.sourceIndex
			}));
			return a.D
		},
		Aq = function (a) {
			this.M = this.D = this.A = null;
			a && (this.M = zq(a), this.A = this.M.shift(), this.D = Ri(this.M) || this.A);
			Sp.call(this, this.A, !1, !0)
		},
		Bq = function () {
			this.A = [];
			this.D = [];
			this.C = this.B = null
		},
		Cq = function (a) {
			a.B || (a.B = Up(a), a.B.sort(function (b, c) {
				var d = b.bb();
				b = b.Jb();
				var e = c.bb();
				c = c.Jb();
				return d == e && b == c ? 0 : tq(d, b, e, c) ? 1 : -1
			}));
			return a.B
		},
		Dq = function (a) {
			this.A = null;
			this.D = 0;
			a &&
				(this.A = kk(Cq(a), function (b) {
					return Qp(b)
				}));
			Sp.call(this, a ? this.J() : null, !1, !0)
		},
		Fq = function (a) {
			return (a = (a || window).getSelection()) && Eq(a)
		},
		Eq = function (a) {
			var b = !1;
			if (a.createRange) try {
				var c = a.createRange()
			} catch (e) {
				return null
			} else if (a.rangeCount) {
				if (1 < a.rangeCount) {
					b = new Bq;
					c = 0;
					for (var d = a.rangeCount; c < d; c++) b.A.push(a.getRangeAt(c));
					return b
				}
				c = a.getRangeAt(0);
				b = tq(a.anchorNode, a.anchorOffset, a.focusNode, a.focusOffset)
			} else return null;
			(a = c) && a.addElement ? (b = new xq, b.B = a, a = b) : a = sq(qq(a), b);
			return a
		},
		tq = function (a, b, c, d) {
			if (a == c) return d < b;
			var e;
			if (1 == a.nodeType && b)
				if (e = a.childNodes[b]) a = e, b = 0;
				else if (Ol(a, c)) return !0;
			if (1 == c.nodeType && d)
				if (e = c.childNodes[d]) c = e, d = 0;
				else if (Ol(c, a)) return !1;
			return 0 < (Rl(a, c) || b - d)
		},
		Gq = function (a, b) {
			b = gm(b);
			try {
				for (; b && b != Ap && b.frameElement; b = b.parent) {
					var c = on(b.frameElement);
					a.x += c.x;
					a.y += c.y
				}
			} catch (d) {}
		},
		Hq = function (a) {
			var b = a.getBoundingClientRect();
			if (K) {
				var c = on(a);
				a = qn(a);
				b.left = c.x;
				b.right = c.x + a.width;
				b.top = c.y;
				b.bottom = c.y + a.height
			}
			return b
		},
		Iq = function (a,
			b) {
			b = void 0 === b ? null : b;
			if (!b) b = Fq(gm(a));
			else if (3 == b.bb().nodeType && 3 == b.Ib().nodeType) {
				var c = Zp(vq(b), !0),
					d = Zp(vq(b), !1);
				if (c && d) return new H(c.x, d.y)
			}
			if (!b) return new H(0, 0);
			c = Cl(a.A, n);
			c.appendChild(em(a, "\u200b"));
			!K || G(9) ? b.ze(c, !1) : (d = null, b.mc() || (d = b.kc(), b.collapse(!1)), c = b.ai(c), d && (b.collapse(!0), b.Ed().moveStart(xb, 0 - d.length), b.select()));
			b = Hq(c);
			a.yb(c);
			return new H(b.left, b.bottom)
		},
		Jq = function (a, b) {
			var c = J(a),
				d = 0;
			if (typeof b === pf) d = b;
			else if (K && !G(9)) {
				if (b = c.A.selection.createRange()) try {
					var e =
						a.createTextRange(),
						g = e.duplicate();
					e.moveToBookmark(b.getBookmark());
					g.setEndPoint("EndToStart", e);
					d = g.text.length
				} catch (m) {}
			} else d = a.selectionStart;
			e = "_h#" + Ji(a);
			var h = c.G(e);
			h ? c.Ae(h) : h = c.P("PRE", {
				id: e
			});
			h.parentNode || c.A.body.appendChild(h);
			var k = [];
			D(a.value, function (m, r, L) {
				k.push(" " == m && r + 1 != L.length && " " == L[r + 1] ? "\u00a0" : m)
			});
			k = k.join("");
			c.appendChild(h, em(c, k.substring(0, d)));
			e = Cl(c.A, n);
			e.appendChild(em(c, "\u200b"));
			c.appendChild(h, e);
			c.appendChild(h, em(c, k.substring(d) + " "));
			c = Ip(a);
			D(c, function (m) {
				V(h, m)
			});
			var l = "white-space:pre-wrap;word-wrap:pre-wrap;position:absolute;z-index:-9;visibility:hidden;display:block;";
			D(["font-family", "font-size", "font-weight", "font-style", Pg, Og, Ge, "word-spacing", "line-height", "text-align", xh, Qb, "width", "height", "margin-top", "margin-right", "margin-bottom", "margin-left", "padding-top", "padding-right", "padding-bottom", "padding-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "border-top-style", "border-right-style",
				"border-bottom-style", "border-left-style", "overflow-x", "overflow-y"
			], function (m) {
				try {
					var r = Gp(a, m);
					r && (l += m + ":" + r + ";")
				} catch (L) {}
			});
			h.style.cssText = l;
			c = an(a, "overflowX");
			h.style.overflowX = c && c != Bh ? c : fb;
			c = an(a, "overflowY");
			h.style.overflowY = c && c != Bh ? c : fb;
			h.scrollTop = a.scrollTop;
			h.scrollLeft = a.scrollLeft;
			cn(h, hn(a));
			c = Hq(e);
			return a.tagName.toUpperCase() == va ? new H(c.left, Math.ceil(on(a).y + qn(a).height)) : new H(c.left, Math.ceil(c.bottom))
		},
		Kq = function (a, b) {
			this.A = a instanceof H ? a : new H(a, b)
		},
		Nq = function (a) {
			this.I =
				a;
			this.D = Lq(a);
			this.F = J(this.D);
			a = Mq(this);
			this.B = a[0];
			this.A = a[1];
			this.C = this.D.innerHTML.slice(this.B, this.A)
		},
		Mq = function (a) {
			if (void 0 !== a.D.selectionStart) return [a.D.selectionStart, a.D.selectionEnd];
			var b = a.F.A.selection.createRange();
			if (b) try {
				var c = a.D.createTextRange(),
					d = c.duplicate();
				c.moveToBookmark(b.getBookmark());
				d.setEndPoint("EndToStart", c);
				var e = d.text.length;
				return [e, e + b.text.length]
			} catch (g) {}
			return [0, 0]
		},
		Oq = function (a) {
			this.D = this.A = null;
			this.B = this.C = 0;
			this.I = "";
			this.M = a;
			this.F = J(Lq(a));
			if (a = Fq(gm(this.F))) this.A = a.bb(), this.C = a.Jb(), this.D = a.Ib(), this.B = a.Fc(), this.I = a.kc()
		},
		Pq = function (a) {
			0 > a.C && (a.C = 0);
			var b = 3 == a.A.nodeType ? a.A.data.length : a.A.childNodes.length;
			a.C > b && (a.C = b);
			0 > a.B && (a.B = 0);
			b = 3 == a.D.nodeType ? a.D.data.length : a.D.childNodes.length;
			a.B > b && (a.B = b);
			return uq(a.A, a.C, a.D, a.B)
		},
		Rq = function (a, b) {
			R.call(this);
			a && Qq(this, a, b)
		},
		Qq = function (a, b, c) {
			a.Ye && Sq(a);
			a.dd = b;
			a.Xe = Q(a.dd, v, a, c);
			a.$f = Q(a.dd, u, a.Di, c, a);
			a.Ye = Q(a.dd, oe, a.kj, c, a)
		},
		Sq = function (a) {
			a.Xe && (Km(a.Xe), Km(a.$f),
				Km(a.Ye), a.Xe = null, a.$f = null, a.Ye = null);
			a.dd = null;
			a.Va = -1;
			a.Kb = -1
		},
		Tq = function (a, b, c, d) {
			mm.call(this, d);
			this.type = ne;
			this.keyCode = a;
			this.charCode = b;
			this.repeat = c
		},
		Uq = function (a, b) {
			this.D = a;
			this.C = b;
			this.B = 0;
			this.A = null
		},
		Vq = function (a, b) {
			a.C(b);
			100 > a.B && (a.B++, b.next = a.A, a.A = b)
		},
		Wq = function (a) {
			A.setTimeout(function () {
				throw a;
			}, 0)
		},
		$q = function (a, b) {
			var c = a;
			b && (c = B(a, b));
			c = Xq(c);
			typeof A.setImmediate !== t || A.Window && A.Window.prototype && !F(na) && A.Window.prototype.setImmediate == A.setImmediate ? (Yq || (Yq =
				Zq()), Yq(c)) : A.setImmediate(c)
		},
		Zq = function () {
			var a = A.MessageChannel;
			"undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !F("Presto") && (a = function () {
				var e = Cl(document, ua);
				e.style.display = of ;
				document.documentElement.appendChild(e);
				var g = e.contentWindow;
				e = g.document;
				e.open();
				e.close();
				var h = "callImmediate" + Math.random(),
					k = "file:" == g.location.protocol ? "*" : g.location.protocol + "//" + g.location.host;
				e = B(function (l) {
						if (("*" == k || l.origin == k) && l.data == h) this.port1.onmessage()
					},
					this);
				g.addEventListener("message", e, !1);
				this.port1 = {};
				this.port2 = {
					postMessage: function () {
						g.postMessage(h, k)
					}
				}
			});
			if ("undefined" !== typeof a && !Dj()) {
				var b = new a,
					c = {},
					d = c;
				b.port1.onmessage = function () {
					if (void 0 !== c.next) {
						c = c.next;
						var e = c.Gg;
						c.Gg = null;
						e()
					}
				};
				return function (e) {
					d.next = {
						Gg: e
					};
					d = d.next;
					b.port2.postMessage(0)
				}
			}
			return function (e) {
				A.setTimeout(e, 0)
			}
		},
		ar = function () {
			this.B = this.A = null
		},
		cr = function () {
			var a = br,
				b = null;
			a.A && (b = a.A, a.A = a.A.next, a.A || (a.B = null), b.next = null);
			return b
		},
		dr = function () {
			this.next =
				this.A = this.Vb = null
		},
		hr = function (a, b) {
			er || fr();
			gr || (er(), gr = !0);
			br.add(a, b)
		},
		fr = function () {
			if (A.Promise && A.Promise.resolve) {
				var a = A.Promise.resolve(void 0);
				er = function () {
					a.then(ir)
				}
			} else er = function () {
				$q(ir)
			}
		},
		ir = function () {
			for (var a; a = cr();) {
				try {
					a.Vb.call(a.A)
				} catch (b) {
					Wq(b)
				}
				Vq(jr, a)
			}
			gr = !1
		},
		kr = function (a) {
			if (!a) return !1;
			try {
				return !!a.$goog_Thenable
			} catch (b) {
				return !1
			}
		},
		mr = function (a) {
			this.A = 0;
			this.M = void 0;
			this.C = this.B = this.D = null;
			this.F = this.I = !1;
			if (a != Di) try {
				var b = this;
				a.call(void 0, function (c) {
					lr(b,
						2, c)
				}, function (c) {
					lr(b, 3, c)
				})
			} catch (c) {
				lr(this, 3, c)
			}
		},
		nr = function () {
			this.next = this.context = this.B = this.D = this.A = null;
			this.C = !1
		},
		pr = function (a, b, c) {
			var d = or.get();
			d.D = a;
			d.B = b;
			d.context = c;
			return d
		},
		qr = function (a, b) {
			if (0 == a.A)
				if (a.D) {
					var c = a.D;
					if (c.B) {
						for (var d = 0, e = null, g = null, h = c.B; h && (h.C || (d++, h.A == a && (e = h), !(e && 1 < d))); h = h.next) e || (g = h);
						e && (0 == c.A && 1 == d ? qr(c, b) : (g ? (d = g, d.next == c.C && (c.C = d), d.next = d.next.next) : rr(c), sr(c, e, 3, b)))
					}
					a.D = null
				} else lr(a, 3, b)
		},
		ur = function (a, b) {
			a.B || 2 != a.A && 3 != a.A || tr(a);
			a.C ? a.C.next = b : a.B = b;
			a.C = b
		},
		wr = function (a, b, c, d) {
			var e = pr(null, null, null);
			e.A = new mr(function (g, h) {
				e.D = b ? function (k) {
					try {
						var l = b.call(d, k);
						g(l)
					} catch (m) {
						h(m)
					}
				} : g;
				e.B = c ? function (k) {
					try {
						var l = c.call(d, k);
						void 0 === l && k instanceof vr ? h(k) : g(l)
					} catch (m) {
						h(m)
					}
				} : h
			});
			e.A.D = a;
			ur(a, e);
			return e.A
		},
		lr = function (a, b, c) {
			if (0 == a.A) {
				a === c && (b = 3, c = new TypeError("Promise cannot resolve to itself"));
				a.A = 1;
				a: {
					var d = c,
						e = a.J,
						g = a.ha;
					if (d instanceof mr) {
						ur(d, pr(e || Di, g || null, a));
						var h = !0
					} else if (kr(d)) d.then(e, g, a),
					h = !0;
					else {
						if (Gi(d)) try {
							var k = d.then;
							if (typeof k === t) {
								xr(d, k, e, g, a);
								h = !0;
								break a
							}
						} catch (l) {
							g.call(a, l);
							h = !0;
							break a
						}
						h = !1
					}
				}
				h || (a.M = c, a.A = b, a.D = null, tr(a), 3 != b || c instanceof vr || yr(a, c))
			}
		},
		xr = function (a, b, c, d, e) {
			function g(l) {
				k || (k = !0, d.call(e, l))
			}

			function h(l) {
				k || (k = !0, c.call(e, l))
			}
			var k = !1;
			try {
				b.call(a, h, g)
			} catch (l) {
				g(l)
			}
		},
		tr = function (a) {
			a.I || (a.I = !0, hr(a.S, a))
		},
		rr = function (a) {
			var b = null;
			a.B && (b = a.B, a.B = b.next, b.next = null);
			a.B || (a.C = null);
			return b
		},
		sr = function (a, b, c, d) {
			if (3 == c && b.B && !b.C)
				for (; a && a.F; a =
					a.D) a.F = !1;
			if (b.A) b.A.D = null, zr(b, c, d);
			else try {
				b.C ? b.D.call(b.context) : zr(b, c, d)
			} catch (e) {
				Ar.call(null, e)
			}
			Vq(or, b)
		},
		zr = function (a, b, c) {
			2 == b ? a.D.call(a.context, c) : a.B && a.B.call(a.context, c)
		},
		yr = function (a, b) {
			a.F = !0;
			hr(function () {
				a.F && Ar.call(null, b)
			})
		},
		vr = function (a) {
			Pi.call(this, a)
		},
		Br = function (a, b) {
			R.call(this);
			this.B = a || 1;
			this.A = b || A;
			this.D = B(this.Gl, this);
			this.C = Ni()
		},
		Cr = function (a, b, c) {
			if (typeof a === t) c && (a = B(a, c));
			else if (a && typeof a.handleEvent == t) a = B(a.handleEvent, a);
			else throw Error("Invalid listener argument");
			return 2147483647 < Number(b) ? -1 : A.setTimeout(a, b || 0)
		},
		Dr = function (a) {
			A.clearTimeout(a)
		},
		Er = function (a) {
			switch (a.type) {
				case u:
				case v:
					if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey && 32 == a.keyCode) return !0;
					break;
				case p:
					if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey) return !0;
					break;
				case ne:
					if (a.ctrlKey || a.metaKey || a.altKey || a.shiftKey || a.C) return !0
			}
			return !1
		},
		Fr = function (a) {
			a instanceof mm && (a = a.A);
			if (a.getAttribute) {
				if (a.getAttribute("isFake")) return !0
			} else if (a.isFake) return !0;
			return !1
		},
		Hr = function (a, b,
			c, d) {
			c = void 0 === c ? 0 : c;
			var e = gm(J(a)),
				g = e.document,
				h = [u, v, oe];
			try {
				if (g.createEvent) {
					if ("chext" != op || b != Gr && b != Db) {
						var k = g.createEvent("Events");
						k.initEvent(b, !0, !0);
						k.view = e;
						k.isFake = !0;
						k.charCode = 0;
						k.keyCode = c;
						if (d)
							for (var l in d) k[l] = d[l]
					} else k = g.createEvent("CustomEvent"), k.initCustomEvent(b, !0, !0, d);
					a.dispatchEvent(k)
				} else if (E(h, b) && g.createEventObject && a.fireEvent) {
					k = g.createEventObject();
					k.bubbles = !0;
					k.cancelable = !0;
					k.view = e;
					k.ctrlKey = !1;
					k.altKey = !1;
					k.shiftKey = !0;
					k.metaKey = !1;
					k.keyCode = c;
					if (k.setAttribute &&
						(k.setAttribute("isFake", !0), d))
						for (var m in d) k.setAttribute(m, d[m]);
					a.fireEvent("on" + b, k)
				}
			} catch (r) {}
		},
		Ir = function (a, b, c) {
			switch (b) {
				case 1:
				case 2:
				case 4:
				case 8:
					Hr(a, u, 229);
					Hr(a, "compositionstart");
					Hr(a, "compositionupdate");
					break;
				case 3:
				case 5:
				case 6:
				case 9:
					var d = {};
					c && (d.data = c);
					Cr(function () {
						Hr(a, Db, void 0, d);
						Hr(a, Gr, void 0, d);
						Hr(a, "input");
						Hr(a, oe)
					})
			}
		},
		Jr = function (a, b) {
			b ? a.setAttribute(Zf, b) : a.removeAttribute(Zf)
		},
		X = function (a, b, c) {
			Array.isArray(c) && (c = c.join(" "));
			var d = "aria-" + b;
			"" === c || void 0 ==
				c ? (Kr || (Kr = {
					atomic: !1,
					autocomplete: of ,
					dropeffect: of ,
					haspopup: !1,
					live: "off",
					multiline: !1,
					multiselectable: !1,
					orientation: wh,
					readonly: !1,
					relevant: "additions text",
					required: !1,
					sort: of ,
					busy: !1,
					disabled: !1,
					hidden: !1,
					invalid: "false"
				}), c = Kr, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
		},
		Lr = function (a, b) {
			a = a.getAttribute("aria-" + b);
			return null == a || void 0 == a ? "" : String(a)
		},
		Mr = function (a, b) {
			var c = "";
			b && (c = b.id);
			X(a, Va, c)
		},
		Nr = function (a, b, c) {
			M.call(this);
			this.A = a;
			this.C = b || 0;
			this.B = c;
			this.D = B(this.vi, this)
		},
		Pr = function (a) {
			Or();
			return new wk(a, vk)
		},
		Qr = function (a) {
			for (; 4 > a.length;) a = "0" + a;
			return a
		},
		Rr = function (a) {
			return null != a && 0 <= a && 1114111 >= a ? 65536 <= a && 1114111 >= a ? String.fromCharCode((a >> 10) + 55232) + String.fromCharCode((a & 1023) + 56320) : String.fromCharCode(a) : null
		},
		Sr = function (a) {
			var b = a.charCodeAt(0);
			return 55296 <= b && 56319 >= b && 1 < a.length && (a = a.charCodeAt(1), 56320 <= a && 57343 >= a) ? 55296 <= b && 56319 >= b && 56320 <= a && 57343 >= a ? (b << 10) - 56623104 + (a - 56320 + 65536) : null : b
		},
		Tr = function (a) {
			var b = a.nodeName.toUpperCase();
			this.F = b == ua;
			this.I = b != Na && b != va;
			this.B = a;
			this.D = null;
			this.A = J(this.D);
			this.C = {}
		},
		Lq = function (a) {
			var b = a.D || (a.F ? (a.B.contentDocument || a.B.contentWindow.document || a.B.document).body : a.B);
			a.D != b && (a.D = b, a.A = J(b));
			return b
		},
		Ur = function (a, b, c, d) {
			if (0 != d)
				for (var e in a.C) {
					var g = a.C[e];
					g != b && (b instanceof Nq && g instanceof Nq || b instanceof Oq && g instanceof Oq && (g.A == g.D && 3 == g.A.nodeType ? g.A : null) == (b.A == b.D && 3 == b.A.nodeType ? b.A : null)) && g.Dg(c, d)
				}
		},
		Wr = function (a, b) {
			a = a.match(Vr);
			b = b.match(Vr);
			return a[3] ==
				b[3] && a[1] == b[1] && a[4] == b[4]
		},
		Xr = function (a, b) {
			if (a) {
				a = a.split("&");
				for (var c = 0; c < a.length; c++) {
					var d = a[c].indexOf("="),
						e = null;
					if (0 <= d) {
						var g = a[c].substring(0, d);
						e = a[c].substring(d + 1)
					} else g = a[c];
					b(g, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "")
				}
			}
		},
		Yr = function (a, b) {
			if (a)
				for (var c = 0; c < b.length; c++) 0 == c ? Jp(a, b[0]) : V(a, b[c])
		},
		$r = function (a) {
			a = a || document;
			var b = [],
				c = [];
			aj(b, (a || document).getElementsByTagName(ua), (a || document).getElementsByTagName("FRAME"));
			D(b, function (d) {
				var e = Ji(document),
					g = Ji(d),
					h = Zr[e];
				h || (h = Zr[e] = {});
				try {
					var k = window.location.href || "";
					if (!(g in h))
						if (d.src) {
							var l = d.src.indexOf("//"),
								m = 0 > l ? "N/A" : d.src.slice(0, l);
							h[g] = "" != m && "http:" != m && "https:" != m || Wr(d.src, k)
						} else h[g] = !0;
					var r = h[g] ? Tl(d) : null
				} catch (L) {
					h[g] = !1, r = null
				}(d = r) && c.push(d)
			});
			return c
		},
		bs = function (a, b) {
			An(b, qn(a));
			D(as, function (c) {
				Xm(b, c, $m(a, c))
			})
		},
		ds = function () {
			M.call(this);
			this.B = {};
			this.I = {};
			this.A = [];
			this.F = to;
			this.D = new T(this);
			cs(this)
		},
		gs = function () {
			var a = Ji(Cp);
			es[a] || (es[a] = new ds);
			fs = es[a];
			cs(fs)
		},
		cs = function (a) {
			a.A = $r(a.F.A);
			for (var b in a.B) hs(a, b, a.C);
			hs(a, v, a.M)
		},
		hs = function (a, b, c) {
			Xn(a.D, a.F.A, b, c, !0, a);
			D(a.A, function (d) {
				try {
					Xn(this.D, d, b, c, !0, this)
				} catch (e) {}
			}, a)
		},
		is = function (a, b, c) {
			a.D.ka(a.F.A, b, c, !0, a);
			D(a.A, function (d) {
				try {
					this.D.ka(d, b, c, !0, this)
				} catch (e) {}
			}, a)
		},
		js = function (a, b, c, d, e) {
			var g = b.ownerDocument,
				h = !1;
			a.A = Kl(a.A, function (l) {
				try {
					l == g && (h = !0)
				} catch (m) {
					return !1
				}
				return !0
			});
			if (g && g != a.F.A && !h) {
				a.A.push(g);
				try {
					Xn(a.D, g, c, a.C, !0, a)
				} catch (l) {}
			}
			if (c)
				if (Array.isArray(c))
					for (var k =
							0; k < c.length; k++) js(a, b, c[k], d, e);
				else {
					k = a.B[c];
					k || (k = {}, a.B[c] = k, hs(a, c, a.C));
					a = k[Ji(b)];
					a || (a = [], k[Ji(b)] = a);
					b = null;
					for (c = 0; c < a.length; c++)
						if (b = a[c], b.Dc(d, e)) return;
					b = new ks(d, e);
					a.push(b)
				}
			else throw Error(za);
		},
		ls = function (a, b, c, d, e) {
			if (c)
				if (Array.isArray(c))
					for (var g = 0; g < c.length; g++) ls(a, b, c[g], d, e);
				else {
					if (g = a.B[c]) {
						var h = g[Ji(b)];
						if (h) {
							for (var k = 0; k < h.length; k++)
								if (h[k].Dc(d, e)) {
									Array.prototype.splice.call(h, k, 1);
									break
								}
							0 == h.length && delete g[Ji(b)]
						}
						vj(g) && (delete a.B[c], is(a, c, a.C))
					}
				}
			else throw Error(za);
		},
		ns = function () {
			if (fs) return fs;
			ms.H("a", gs, !1, void 0);
			gs();
			return fs
		},
		os = function (a, b, c, d) {
			js(ns(), a, b, c, d)
		},
		ps = function (a, b, c, d) {
			ls(ns(), a, b, c, d)
		},
		ks = function (a, b) {
			this.listener = a;
			this.va = b
		},
		qs = function (a) {
			R.call(this);
			this.D = this.C = this.I = null;
			this.F = new T(this);
			a.ib ? this.A = a : (this.I = a, this.A = new Tr(this.I), this.C = Lq(this.A), a = this.A, this.D = a.F ? Tl(a.B) : Lq(a))
		},
		rs = function (a, b, c) {
			a.B || (a.B = new dp(a), a.B.A.S = !0, a.B.A.M = !0);
			if (!a.B.kg(b)) {
				c = c || b;
				var d = kg + c;
				a.B.wh(c, b);
				a.F.H(a.B, d, a.pd)
			}
		},
		ss = function (a,
			b, c) {
			a.B && a.B.kg(b) && (c = kg + (c || b), a.B.Oj(b), a.F.ka(a.B, c, a.pd))
		},
		ts = function (a, b) {
			O.call(this, a);
			this.A = b
		},
		vs = function (a) {
			var b = us;
			this.F = [];
			this.N = b;
			this.K = a || null;
			this.C = this.A = !1;
			this.D = void 0;
			this.J = this.$ = this.M = !1;
			this.I = 0;
			this.B = null;
			this.S = 0
		},
		xs = function (a, b, c) {
			a.A = !0;
			a.D = c;
			a.C = !b;
			ws(a)
		},
		zs = function (a) {
			if (a.A) {
				if (!a.J) throw new ys(a);
				a.J = !1
			}
		},
		As = function (a, b, c, d) {
			a.F.push([b, c, d]);
			a.A && ws(a)
		},
		Cs = function (a) {
			return Bs(a.F, function (b) {
				return typeof b[1] === t
			})
		},
		ws = function (a) {
			if (a.I && a.A && Cs(a)) {
				var b =
					a.I,
					c = Ds[b];
				c && (A.clearTimeout(c.oa), delete Ds[b]);
				a.I = 0
			}
			a.B && (a.B.S--, delete a.B);
			b = a.D;
			for (var d = c = !1; a.F.length && !a.M;) {
				var e = a.F.shift(),
					g = e[0],
					h = e[1];
				e = e[2];
				if (g = a.C ? h : g) try {
					var k = g.call(e || a.K, b);
					void 0 !== k && (a.C = a.C && (k == b || k instanceof Error), a.D = b = k);
					if (kr(b) || typeof A.Promise === t && b instanceof A.Promise) d = !0, a.M = !0
				} catch (l) {
					b = l, a.C = !0, Cs(a) || (c = !0)
				}
			}
			a.D = b;
			d && (k = B(a.ha, a, !0), d = B(a.ha, a, !1), b instanceof vs ? (As(b, k, d), b.$ = !0) : b.then(k, d));
			c && (b = new Es(b), Ds[b.oa] = b, a.I = b.oa)
		},
		ys = function () {
			Pi.call(this)
		},
		Fs = function () {
			Pi.call(this)
		},
		Es = function (a) {
			this.oa = A.setTimeout(B(this.B, this), 0);
			this.A = a
		},
		Js = function (a, b) {
			var c = b || {};
			b = c.document || document;
			var d = Uj(a).toString(),
				e = Cl(document, Ka),
				g = {
					di: e,
					Sc: void 0
				},
				h = new vs(g),
				k = null,
				l = null != c.timeout ? c.timeout : 5E3;
			0 < l && (k = window.setTimeout(function () {
				Gs(e, !0);
				var m = new Hs(1, "Timeout reached for loading script " + d);
				zs(h);
				xs(h, !1, m)
			}, l), g.Sc = k);
			e.onload = e.onreadystatechange = function () {
				e.readyState && "loaded" != e.readyState && e.readyState != Cb || (Gs(e, c.pi || !1, k),
					zs(h), xs(h, !0, null))
			};
			e.onerror = function () {
				Gs(e, !0, k);
				var m = new Hs(0, "Error while loading script " + d);
				zs(h);
				xs(h, !1, m)
			};
			g = c.attributes || {};
			Aj(g, {
				type: "text/javascript",
				charset: "UTF-8"
			});
			sl(e, g);
			e.src = Uj(a);
			Hk(e);
			Is(b).appendChild(e);
			return h
		},
		Is = function (a) {
			var b = (a || document).getElementsByTagName("HEAD");
			return b && 0 != b.length ? b[0] : a.documentElement
		},
		us = function () {
			if (this && this.di) {
				var a = this.di;
				a && a.tagName == Ka && Gs(a, !0, this.Sc)
			}
		},
		Gs = function (a, b, c) {
			null != c && A.clearTimeout(c);
			a.onload = Di;
			a.onerror =
				Di;
			a.onreadystatechange = Di;
			b && window.setTimeout(function () {
				Il(a)
			}, 0)
		},
		Hs = function (a, b) {
			var c = "Jsloader error (code #" + a + ")";
			b && (c += ": " + b);
			Pi.call(this, c);
			this.code = a
		},
		Ks = function () {
			this.N = Y ? 0 : 2;
			this.K = !Y;
			this.A = Y ? 50 : 6;
			this.state = 5;
			this.M = this.F = !1;
			this.I = 50;
			this.Y = !1;
			this.R = this.T = this.sb = !0;
			this.U = this.yc = !1;
			this.Ub = null;
			this.Ia = this.J = !0;
			this.qa = !1;
			this.X = null;
			this.D = this.$ = !0;
			this.Fb = !1;
			this.S = /[()\-_=+\[{\]}\\|;:'",<.>\/? \r]/g;
			this.zc = /[^a-z0-9 \r]/i;
			this.C = /[a-z]/i;
			this.ca = /xyz/g;
			this.Z = /xyz/g;
			this.B = !1
		},
		Ms = function () {
			Ls || (Ls = new R);
			return Ls
		},
		Ps = function (a) {
			Ns(a);
			Os[a] && Ms().dispatchEvent(new ts("cfga", a))
		},
		Rs = function (a, b) {
			Qs[b] || (Qs[b] = {});
			if (Qs[b][a]) return Qs[b][a];
			Os[a] || (Os[a] = new Ks);
			var c = Os[a],
				d = new Ks,
				e;
			for (e in c) d[e] = c[e];
			return Qs[b][a] = d
		},
		Ns = function (a) {
			void 0 === Os[a] && (Os[a] = null, Js(Yj(Ss, {
				fileName: a.replace(/-/g, "_")
			}), {
				timeout: 1E4
			}))
		},
		Ts = function (a, b) {
			for (var c in b) {
				var d = b[c];
				switch (Number(c)) {
					case 19:
						a.ga = d;
						break;
					case 21:
						a.transform = d;
						break;
					case 18:
						a.Zc = d;
						break;
					case 20:
						a.ub =
							d;
						break;
					case 0:
						a.ha = Number(d);
						break;
					case 15:
						a.state = Number(d);
						break;
					case 10:
						a.F = !!d;
						break;
					case 29:
						a.M = !!d;
						break;
					case 14:
						a.A = Y ? 50 : Number(d);
						break;
					case 13:
						a.I = Number(d);
						break;
					case 11:
						a.K = !Y && !!d;
						break;
					case 28:
						a.Y = !!d;
						break;
					case 30:
						a.sb = !!d;
						break;
					case 1:
						a.N = Y ? 0 : Number(d);
						break;
					case 4:
						a.T = !!d;
						break;
					case 3:
						a.R = !!d;
						break;
					case 8:
						a.yc = !!d;
						break;
					case 5:
						a.U = !!d;
						break;
					case 16:
						a.Ub = d;
						break;
					case 2:
						a.J = !!d;
						break;
					case 6:
						a.Ia = !!d;
						break;
					case 32:
						a.qa = !!d;
						break;
					case 23:
						a.X = d;
						break;
					case 12:
						a.$ = !!d;
						break;
					case 9:
						a.D = !!d;
						break;
					case 31:
						a.Fb = !!d;
						break;
					case 27:
						a.S = d;
						break;
					case 26:
						a.zc = d;
						break;
					case 22:
						a.C = d;
						break;
					case 25:
						a.ca = d;
						break;
					case 24:
						a.Z = d;
						break;
					case 17:
						a.Sa = d;
						break;
					case 33:
						a.B = !!d
				}
			}
		},
		Vs = function (a, b) {
			var c = Os[a];
			c && (Ts(c, b), pj(Qs, function (d) {
				d[a] && Ts(d[a], b)
			}), Ps(a));
			Us[a] = b
		},
		at = function (a) {
			this.code = a;
			this.type = null;
			this.A = q;
			0 <= this.code.indexOf("-i0") ? (this.type = "im", jj(this.code, "-handwrit") ? this.type = "hw" : jj(this.code, "-voice") && (this.type = "vo")) : 0 <= this.code.indexOf("-k0") ? this.type = Eh : 0 == this.code.lastIndexOf("xkb",
				0) && (this.type = "xkb");
			a = this.code.split(/-t|-i0|-k0|:/);
			"yue-hant" === a[0] && (a[0] = Nh);
			switch (this.code) {
				case Kh:
					a[0] = Nh;
					break;
				case Xh:
				case di:
					a[0] = Oh
			}
			this.A = "xkb" === this.type ? Ws[this.code] ? Ws[this.code] : Xs(a[a.length - 1]) : Xs(a[0]);
			if (this.type === Eh)
				if (Ys[this.code]) this.Lb = Ys[this.code];
				else if (Zs[this.code]) this.Lb = Zs[this.code].slice(4);
			else {
				var b = this.code.split("-t-");
				a = b[0];
				b = b[1];
				a = a.replace(/-/g, "_");
				"en_us" === a && (a = "us");
				!E($s, a) || "und-latn-k0-und" !== b && "k0-und" !== b ? "k0-und" === b ? this.Lb = a : (b =
					b.match(/k0-(.*)/), b[1] && (this.Lb = a + "_" + b[1].replace("qwerty", "phone").replace("-", "_"))) : this.Lb = a + ("k0-und" === b ? "_inscript" : "_phone")
			}
		},
		et = function (a) {
			if (!a) return null;
			if ("nacl_mozc_jp" === a || "nacl_mozc_us" === a) a = ie;
			0 != a.lastIndexOf("xkb", 0) && (uj(bt, a) || (a = ct(a)), a = a.replace(/_/g, "-"), uj(bt, a) || (a = ct(a + "-und")));
			return dt[a] ? dt[a] : uj(bt, a) ? (dt[a] = new at(a), dt[a]) : null
		},
		ct = function (a) {
			if (ft[a]) return ft[a];
			if ("vkd_iw" === a) return ed;
			if ("im_t13n_iw" === a) return dd;
			if (a === ch) return dh;
			var b = a.split("_"),
				c = "";
			0 == a.lastIndexOf("im_t13n", 0) ? c = b[2] + "-t-i0-und" : 0 == a.lastIndexOf("vkd_", 0) && (2 === b.length ? c = b[1] + ea : E($s, b[1]) ? c = "inscript" === b[2] ? b[1] + ea : b[1] + "-t-und-latn-k0-und" : (c = b[1] + "-t-k0-" + b[2], uj(bt, c) || (c = b[1] + "-" + b[2] + ea)));
			return uj(bt, c) ? c : a
		},
		it = function (a) {
			return E(gt, a.code) || E(ht, a.code)
		},
		jt = function (a) {
			return Y || "im" !== a.type ? !1 : /^(zh|yue)/.test(a.code)
		},
		Xs = function (a) {
			if ("und-ethi" === a) return "am";
			a = a.split("-");
			return 2 === a.length ? 2 === a[1].length ? a[0] + "-" + a[1].toUpperCase() : a[0] + "-" + a[1].charAt(0).toUpperCase() +
				a[1].slice(1) : tj(kt, a[0]) ? kt[a[0]] : a[0]
		},
		lt = function (a, b) {
			this.B = a;
			this.A = b ? b : "callback";
			this.Sc = 5E3
		},
		qt = function (a, b, c, d) {
			b = b ? xj(b) : {};
			var e = "_" + (mt++).toString(36) + Ni().toString(36),
				g = "_callbacks___" + e;
			c && (A[g] = nt(e, c), b[a.A] = g);
			c = {
				timeout: a.Sc,
				pi: !0
			};
			a = ot.exec(Uj(a.B).toString());
			g = a[3] || "";
			a = Xj(a[1] + Zj("?", a[2] || "", b) + Zj("#", g, void 0));
			a = Js(a, c);
			As(a, null, pt(e, b, d), void 0);
			return {
				oa: e,
				Ig: a
			}
		},
		pt = function (a, b, c) {
			return function () {
				rt(a, !1);
				c && c(b)
			}
		},
		nt = function (a, b) {
			return function (c) {
				rt(a, !0);
				b.apply(void 0,
					arguments)
			}
		},
		rt = function (a, b) {
			a = "_callbacks___" + a;
			if (A[a])
				if (b) try {
					delete A[a]
				} catch (c) {
					A[a] = void 0
				} else A[a] = Di
		},
		st = function (a, b) {
			this.B = {};
			this.A = [];
			this.C = this.D = 0;
			var c = arguments.length;
			if (1 < c) {
				if (c % 2) throw Error(Qa);
				for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
			} else if (a)
				if (a instanceof st)
					for (c = a.xb(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));
				else
					for (d in a) this.set(d, a[d])
		},
		tt = function (a, b) {
			return a === b
		},
		wt = function (a, b) {
			ut(a.B, b) && (delete a.B[b], a.D--, a.C++, a.A.length > 2 *
				a.D && vt(a))
		},
		vt = function (a) {
			if (a.D != a.A.length) {
				for (var b = 0, c = 0; b < a.A.length;) {
					var d = a.A[b];
					ut(a.B, d) && (a.A[c++] = d);
					b++
				}
				a.A.length = c
			}
			if (a.D != a.A.length) {
				var e = {};
				for (c = b = 0; b < a.A.length;) d = a.A[b], ut(e, d) || (a.A[c++] = d, e[d] = 1), b++;
				a.A.length = c
			}
		},
		ut = function (a, b) {
			return Object.prototype.hasOwnProperty.call(a, b)
		},
		xt = function (a) {
			if (a.vb && typeof a.vb == t) a = a.vb();
			else if (Fi(a) || typeof a === x) a = a.length;
			else {
				var b = 0,
					c;
				for (c in a) b++;
				a = b
			}
			return a
		},
		yt = function (a) {
			if (a.Ka && typeof a.Ka == t) return a.Ka();
			if (typeof a ===
				x) return a.split("");
			if (Fi(a)) {
				for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
				return b
			}
			return rj(a)
		},
		zt = function (a) {
			if (a.xb && typeof a.xb == t) return a.xb();
			if (!a.Ka || typeof a.Ka != t) {
				if (Fi(a) || typeof a === x) {
					var b = [];
					a = a.length;
					for (var c = 0; c < a; c++) b.push(c);
					return b
				}
				return sj(a)
			}
		},
		At = function (a, b) {
			if (a.forEach && typeof a.forEach == t) a.forEach(b, void 0);
			else if (Fi(a) || typeof a === x) D(a, b, void 0);
			else
				for (var c = zt(a), d = yt(a), e = d.length, g = 0; g < e; g++) b.call(void 0, d[g], c && c[g], a)
		},
		Ct = function (a, b) {
			if (typeof a.every ==
				t) return a.every(b, void 0);
			if (Fi(a) || typeof a === x) return Bt(a, b, void 0);
			for (var c = zt(a), d = yt(a), e = d.length, g = 0; g < e; g++)
				if (!b.call(void 0, d[g], c && c[g], a)) return !1;
			return !0
		},
		Dt = function (a) {
			this.C = this.S = this.D = "";
			this.M = null;
			this.F = this.I = "";
			this.A = !1;
			if (a instanceof Dt) {
				this.A = a.A;
				Et(this, a.D);
				this.S = a.S;
				this.C = a.C;
				Ft(this, a.M);
				this.I = a.I;
				var b = a.B;
				var c = new Gt;
				c.D = b.D;
				b.A && (c.A = new st(b.A), c.B = b.B);
				Ht(this, c);
				this.F = a.F
			} else a && (b = String(a).match(Vr)) ? (this.A = !1, Et(this, b[1] || "", !0), this.S = It(b[2] ||
				""), this.C = It(b[3] || "", !0), Ft(this, b[4]), this.I = It(b[5] || "", !0), Ht(this, b[6] || "", !0), this.F = It(b[7] || "")) : (this.A = !1, this.B = new Gt(null, this.A))
		},
		Et = function (a, b, c) {
			a.D = c ? It(b, !0) : b;
			a.D && (a.D = a.D.replace(/:$/, ""))
		},
		Ft = function (a, b) {
			if (b) {
				b = Number(b);
				if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
				a.M = b
			} else a.M = null
		},
		Ht = function (a, b, c) {
			b instanceof Gt ? (a.B = b, Jt(a.B, a.A)) : (c || (b = Kt(b, Lt)), a.B = new Gt(b, a.A))
		},
		It = function (a, b) {
			return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) :
				""
		},
		Kt = function (a, b, c) {
			return typeof a === x ? (a = encodeURI(a).replace(b, Mt), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null
		},
		Mt = function (a) {
			a = a.charCodeAt(0);
			return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16)
		},
		Gt = function (a, b) {
			this.B = this.A = null;
			this.D = a || null;
			this.C = !!b
		},
		Nt = function (a) {
			a.A || (a.A = new st, a.B = 0, a.D && Xr(a.D, function (b, c) {
				a.add(decodeURIComponent(b.replace(/\+/g, " ")), c)
			}))
		},
		Pt = function (a) {
			var b = zt(a);
			if ("undefined" == typeof b) throw Error("Keys are undefined");
			var c = new Gt(null,
				void 0);
			a = yt(a);
			for (var d = 0; d < b.length; d++) {
				var e = b[d],
					g = a[d];
				Array.isArray(g) ? Ot(c, e, g) : c.add(e, g)
			}
			return c
		},
		Rt = function (a, b) {
			Nt(a);
			b = Qt(a, b);
			ut(a.A.B, b) && (a.D = null, a.B -= a.A.get(b).length, wt(a.A, b))
		},
		St = function (a, b) {
			Nt(a);
			b = Qt(a, b);
			return ut(a.A.B, b)
		},
		Ot = function (a, b, c) {
			Rt(a, b);
			0 < c.length && (a.D = null, a.A.set(Qt(a, b), $i(c)), a.B += c.length)
		},
		Qt = function (a, b) {
			b = String(b);
			a.C && (b = b.toLowerCase());
			return b
		},
		Jt = function (a, b) {
			b && !a.C && (Nt(a), a.D = null, a.A.forEach(function (c, d) {
				var e = d.toLowerCase();
				d != e &&
					(Rt(this, d), Ot(this, e, c))
			}, a));
			a.C = b
		},
		Tt = function (a, b) {
			M.call(this);
			this.S = a || od;
			this.F = b || "cb";
			this.J = ip("ppe");
			this.I = 0
		},
		Ut = function (a) {
			switch (a) {
				case 200:
				case 201:
				case 202:
				case 204:
				case 206:
				case 304:
				case 1223:
					return !0;
				default:
					return !1
			}
		},
		Vt = function () {
			R.call(this);
			this.D = 0;
			this.B = !1;
			this.A = null;
			this.C = this.F = !1
		},
		Wt = function (a) {
			if (a.A) {
				var b = a.A;
				a.A = null;
				a.D = 0;
				a.dispatchEvent("ready");
				try {
					b.A = Di
				} catch (c) {}
			}
		},
		Xt = function (a) {
			a.F || (a.F = !0, a.dispatchEvent(Cb), a.dispatchEvent("error"))
		},
		Yt = function (a) {
			a =
				String(a);
			if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) try {
				return eval("(" + a + ")")
			} catch (b) {}
			throw Error("Invalid JSON string: " + a);
		},
		Zt = function () {},
		au = function (a) {
			var b;
			(b = a.A) || (b = {}, $t(a) && (b[0] = !0, b[1] = !0), b = a.A = b);
			return b
		},
		bu = function () {},
		cu = function (a) {
			return (a =
				$t(a)) ? new ActiveXObject(a) : new XMLHttpRequest
		},
		$t = function (a) {
			if (!a.B && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
				for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
					var d = b[c];
					try {
						return new ActiveXObject(d), a.B = d
					} catch (e) {}
				}
				throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
			}
			return a.B
		},
		du = function (a) {
			R.call(this);
			this.headers = new st;
			this.M = a || null;
			this.B = !1;
			this.I = this.A = null;
			this.K = "";
			this.D = this.J = this.C = this.S = !1;
			this.N = 0;
			this.F = null;
			this.T = "";
			this.$ = this.R = !1
		},
		fu = function (a, b, c, d) {
			var e = new du;
			eu.push(e);
			b && e.H(Cb, b);
			e.dg("ready", e.oi);
			e.Ff(!0);
			e.Ce(a, "POST", c, d)
		},
		gu = function (a) {
			return K && G(9) && typeof a.timeout === pf && void 0 !== a.ontimeout
		},
		hu = function (a) {
			return "content-type" == a.toLowerCase()
		},
		ku = function (a) {
			a.B = !1;
			a.A && (a.D = !0, a.A.abort(), a.D = !1);
			iu(a);
			ju(a)
		},
		iu = function (a) {
			a.S || (a.S = !0, a.dispatchEvent(Cb), a.dispatchEvent("error"))
		},
		mu = function (a) {
			if (a.B &&
				"undefined" != typeof lu && (!a.I[1] || 4 != (a.A ? a.A.readyState : 0) || 2 != a.Jd()))
				if (a.C && 4 == (a.A ? a.A.readyState : 0)) Cr(a.Uh, 0, a);
				else if (a.dispatchEvent(Tf), 4 == (a.A ? a.A.readyState : 0)) {
				a.B = !1;
				try {
					a.Vd() ? (a.dispatchEvent(Cb), a.dispatchEvent("success")) : iu(a)
				} finally {
					ju(a)
				}
			}
		},
		ju = function (a, b) {
			if (a.A) {
				nu(a);
				var c = a.A,
					d = a.I[0] ? Di : null;
				a.A = null;
				a.I = null;
				b || a.dispatchEvent("ready");
				try {
					c.onreadystatechange = d
				} catch (e) {}
			}
		},
		nu = function (a) {
			a.A && a.$ && (a.A.ontimeout = null);
			a.F && (Dr(a.F), a.F = null)
		},
		ou = function (a) {
			M.call(this);
			this.I = 0;
			this.F = a || od;
			this.A = !K || gl(10) || Wr(window.location.href, this.F) ? new du : new Vt;
			this.B = null;
			this.C = new T(this);
			this.M = ip("ppe");
			this.A.Ff && this.A.Ff(!0)
		},
		pu = function (a) {
			M.call(this);
			this.D = null;
			this.active = !1;
			this.A = null;
			this.C = a || wo.fa()
		},
		qu = function (a, b, c) {
			var d = "old" + b;
			if (c) {
				c = a.getAttribute(b);
				var e = a.hasAttribute(b);
				"off" != c && (a.setAttribute(b, "off"), e && a.setAttribute(d, c))
			} else c = a.getAttribute(d), a.hasAttribute(d) ? (a.setAttribute(b, c), a.removeAttribute(d)) : a.removeAttribute(b)
		},
		su = function (a) {
			pu.call(this);
			this.B = ru(a, function (b, c) {
				b.push(c());
				return b
			}, []);
			this.F = {};
			this.I = []
		},
		tu = function (a, b, c, d, e, g) {
			this.source = a;
			this.target = b;
			this.A = c;
			this.B = e || !1;
			this.type = d || 0;
			this.D = g || ""
		},
		uu = function (a, b, c, d, e) {
			this.source = a;
			this.target = b;
			this.A = c || "";
			this.D = d || "";
			this.B = e || 0;
			this.timestamp = (new Date).getTime()
		},
		vu = function (a, b) {
			O.call(this, "cmt");
			this.F = a;
			this.A = b
		},
		wu = function () {
			this.A = {}
		},
		yu = function (a) {
			xu[a] || (xu[a] = new wu);
			return xu[a]
		},
		zu = function (a, b, c, d, e, g, h) {
			this.A = [];
			this.B = (e || 2) * d.A + 1;
			this.source =
				b;
			this.C = a;
			this.I = c;
			this.type = g || 0;
			this.F = d;
			this.M = h || {};
			this.context = "";
			this.D = !0
		},
		Bu = function (a) {
			var b = {
				text: Au(a),
				itc: a.I,
				num: String(a.B),
				cp: "0",
				cs: "1",
				ie: "utf-8",
				oe: "utf-8",
				app: op
			};
			Aj(b, a.M);
			return b
		},
		Au = function (a) {
			var b = a.context + a.C;
			if (1 == a.type) return b;
			b = b ? "|" + b.replace(/[,|:]/g, escape) + "," : "";
			var c = a.source;
			1 != a.F.ha && (c = c.replace(/[,|:%]/g, escape));
			return b + c
		},
		Cu = function (a) {
			O.call(this, "mup");
			this.A = a
		},
		Du = function (a, b, c, d, e) {
			this.source = a;
			this.target = b;
			this.A = 1;
			this.B = c || "";
			this.D = d ||
				"";
			this.C = e || []
		},
		Eu = function () {
			this.A = {};
			this.B = []
		},
		Gu = function (a) {
			Fu[a] || (Fu[a] = new Eu);
			return Fu[a]
		},
		Iu = function (a, b, c, d, e, g) {
			a.A[b] || (a.A[b] = []);
			c = c && kj(c);
			for (var h = a.A[b], k = !1, l = 0; l < h.length; l++) h[l].target == c && (h[l].A++, k = !0);
			k || h.push(new Du(b, c, d));
			Hu && a.B.push(new Du(b, c, d, e, g))
		},
		Ju = function (a, b) {
			if (!a.A[b]) return [];
			a = a.A[b].slice(0);
			fj(a, function (c, d) {
				return d.A - c.A
			});
			return a
		},
		Ku = function (a) {
			return 0 == a.B.length ? null : {
				feedback: kk(a.B, function (b) {
					return b.toJSON()
				})
			}
		},
		Lu = function (a, b) {
			this.ke =
				a;
			this.offset = b
		},
		Mu = function (a) {
			this.A = [];
			this.offset = a
		},
		Nu = function (a) {
			this.A = a;
			this.B = sj(a)
		},
		Ou = function (a, b) {
			var c = new Mu(b.length);
			D(a.B, function (d) {
				var e = b.indexOf(d); - 1 < e && e <= c.offset && (e < c.offset && (c.A = [], c.offset = e), c.A.push(d))
			});
			return c
		},
		Pu = function (a, b) {
			if (!b) return [];
			for (var c = [], d = [], e = b; 2 > c.length && e;) {
				var g = Ou(a, e);
				if (0 != g.A.length)
					for (var h = 0; h < g.A.length; h++)
						for (var k = g.A[h], l = a.A[k], m = 0; m < l.length; m++) d.push(new Lu(e.slice(0, g.offset) + l[m], g.offset + k.length));
				else d.push(new Lu(e,
					e.length));
				if (1 == c.length)
					for (c = c.pop(), e = 0; e < d.length; e++) d[e].ke = c.ke + d[e].ke, d[e].offset += c.offset;
				c = d;
				d = [];
				if (0 == c.length) break;
				e = b.slice(c[0].offset)
			}
			return c
		},
		Ru = function (a, b) {
			R.call(this);
			this.B = a;
			this.A = b;
			this.F = (a = this.A.Ub) ? new Nu(a) : null;
			this.I = ip("ppe");
			"chext" == op ? this.D = Qu : mp() && (this.D = new ou)
		},
		Su = function (a, b) {
			for (var c = 0, d; d = b[c]; c++) d.A.length >= d.B ? (d.D = !0, d.A.splice(d.B - 1, d.A.length - d.B + 1)) : d.D = !1;
			a.dispatchEvent(new Cu(b))
		},
		Tu = function (a, b) {
			if (a.F && !(b.A.length >= b.B)) {
				var c = Pu(a.F,
					b.source);
				for (a = {
						xc: 0
					}; a.xc < c.length && (0 <= Ti(b.A, function (d) {
						return function (e) {
							return e.target == c[d.xc].ke
						}
					}(a)) || (b.A.push(new tu(b.source.slice(0, c[a.xc].offset), c[a.xc].ke, "", 2)), !(b.A.length >= b.B))); a = {
						xc: a.xc
					}, a.xc++);
			}
		},
		Uu = function (a, b) {
			if (!a.A.T && b.source) {
				var c = b.A[0];
				if (!c || c.B || !a.A.M || 4 != c.type && 3 != c.type && 5 != c.type)
					if (c = Ti(b.A, function (e) {
							return e.target == b.source
						}), !(0 == c || 0 < c && !a.A.qa)) {
						var d = new tu(b.source, b.source, "");
						a.A.qa ? (0 <= c && b.A.splice(c, 1), 2 > b.A.length ? b.A.push(d) : b.A.splice(1,
							0, d)) : b.A.length >= a.A.A ? b.A.splice(a.A.A - 1, 0, d) : b.A.push(d)
					}
			}
		},
		Vu = function (a, b, c) {
			R.call(this);
			this.status = 0;
			this.source = "";
			this.A = 0;
			this.context = "";
			this.D = -1;
			this.M = !0;
			this.$ = this.mb = this.S = !1;
			this.J = b;
			this.B = c;
			this.C = [];
			this.R = new Ru(this.J.code, c);
			this.K = a;
			this.T = new T(this);
			this.K.ra(this);
			this.T.H(this.R, "mup", this.Kc)
		},
		Wu = function (a) {
			return 0 > a.D || 0 == a.C.length ? 0 : Math.floor(a.D / a.B.A)
		},
		Xu = function (a, b, c) {
			(c = void 0 === c ? "" : c) || a.dispatchEvent("dlc");
			a.K.push(b, c);
			a.reset()
		},
		Yu = function (a) {
			a.dispatchEvent("mup")
		},
		$u = function (a, b, c) {
			if (a.mb) a.status = 1, Yu(a);
			else {
				var d = a.ic();
				if (d || c) {
					b = new zu(a.Wb(), d, a.J.code, a.B, b, c, a.zf());
					if (a.B.U || 1 == c) b.context = a.context;
					a.status = 2;
					Yu(a);
					d = a.R;
					if (1 == c ? 0 : a.$) Tu(d, b), Su(d, [b]);
					else if ((a = yu(d.B).load(Au(b))) && b.B <= a[0]) d.I.push("od", 2), d.C(b, !1, !0, a);
					else {
						a = Ku(Gu(d.B));
						c = Qu;
						var e = 0 == b.type ? "/request" : "/predict";
						0 == b.type && a && d.D ? d.D.D(e, Bu(b), B(d.C, d, b, !0), void 0, Zu, a) : c.D(e, Bu(b), B(d.C, d, b, !1))
					}
				}
			}
		},
		av = function (a, b, c) {
			Vu.call(this, a, b, c);
			this.F = [];
			this.I = ip("ppe")
		},
		bv =
		function (a) {
			var b = a.C[a.D];
			a.I.push("slen", b.source.length);
			a.I.push("tlen", b.target.length);
			a.I.push("ci", a.D);
			a.I.push("dur", Ni() - a.gi)
		},
		dv = function (a, b, c) {
			R.call(this);
			this.target = a;
			this.C = b || a;
			this.S = c || new Tm(NaN, NaN, NaN, NaN);
			this.B = I(a);
			this.A = new T(this);
			hm(this, this.A);
			this.deltaY = this.deltaX = this.R = this.$ = this.screenY = this.screenX = this.clientY = this.clientX = 0;
			this.M = !0;
			this.D = !1;
			Q(this.C, [$g, Te], this.jf, !1, this);
			this.F = cv
		},
		ev = function (a, b) {
			a.S = b || new Tm(NaN, NaN, NaN, NaN)
		},
		hv = function (a, b, c) {
			var d =
				wl(J(a.B).A);
			b += d.x - a.J.x;
			c += d.y - a.J.y;
			a.J = d;
			a.deltaX += b;
			a.deltaY += c;
			return new H(fv(a, a.deltaX), gv(a, a.deltaY))
		},
		jv = function (a, b, c, d) {
			a.target.style.left = c + Sf;
			a.target.style.top = d + Sf;
			a.dispatchEvent(new iv("drag", a, b.clientX, b.clientY, b, c, d))
		},
		fv = function (a, b) {
			var c = a.S;
			a = isNaN(c.left) ? null : c.left;
			c = isNaN(c.width) ? 0 : c.width;
			return Math.min(null != a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
		},
		gv = function (a, b) {
			var c = a.S;
			a = isNaN(c.top) ? null : c.top;
			c = isNaN(c.height) ? 0 : c.height;
			return Math.min(null !=
				a ? a + c : Infinity, Math.max(null != a ? a : -Infinity, b))
		},
		iv = function (a, b, c, d, e, g, h) {
			O.call(this, a);
			this.clientX = c;
			this.clientY = d;
			this.A = e;
			this.left = void 0 !== g ? g : b.deltaX;
			this.top = void 0 !== h ? h : b.deltaY
		},
		kv = function (a, b, c) {
			dv.call(this, a, b, c);
			b && this.B != I(b) && (this.I = yl(I(b)).frameElement)
		},
		lv = function (a, b) {
			var c = b.documentElement,
				d = !cv;
			a.A.H(b, [Zg, Ue], a.T, d);
			a.A.H(b, [Yg, We], a.Cc, d);
			cv ? (c.setCapture(!1), a.A.H(c, "losecapture", a.Cc)) : a.A.H(yl(b), nb, a.Cc)
		},
		mv = function (a, b) {
			I(b.target) != a.B && a.I && (b.clientX += a.I.offsetLeft,
				b.clientY += a.I.offsetTop)
		},
		ov = function (a) {
			if (a && jp) {
				if (null == nv) {
					var b = J(),
						c = b.A,
						d = Cl(b.A, "div");
					d.style.backgroundColor = "rgb(1, 2, 3)";
					b.appendChild(c.body, d);
					c = $m(d, "backgroundColor");
					c = c.replace(/ /g, "");
					c = "rgb(0,0,0)" === c ? "black" : "rgb(255,255,255)" === c ? "white" : of ;
					b.yb(d);
					nv = c
				}
				switch (nv) {
					case "white":
						Np(a, Cd, Dd);
						break;
					case "black":
						Np(a, Dd, Cd);
						break;
					default:
						Mp(a, [Cd, Dd])
				}
			}
		},
		pv = function (a) {
			O.call(this, "clkc");
			this.index = a
		},
		rv = function (a, b) {
			if (!a) throw Error("Invalid class name " + a);
			if (typeof b !==
				t) throw Error("Invalid decorator function " + b);
			qv[a] = b
		},
		sv = function (a) {
			this.A = a
		},
		tv = function (a, b) {
			a && (a.tabIndex = b ? 0 : -1)
		},
		wv = function (a, b, c) {
			c.id && io(b, c.id);
			var d = a.Ee(),
				e = !1,
				g = Ip(c);
			g && D(g, function (h) {
				h == d ? e = !0 : h && (h == d + ca ? b.pb(!1) : h == d + "-horizontal" ? uv(b, ld) : h == d + "-vertical" && uv(b, wh))
			}, a);
			e || V(c, d);
			vv(a, b, c);
			return c
		},
		vv = function (a, b, c) {
			if (c)
				for (var d = c.firstChild, e; d && d.parentNode == c;) {
					e = d.nextSibling;
					if (1 == d.nodeType) {
						var g = a.yf(d);
						g && (g.D = d, b.isEnabled() || g.pb(!1), b.tb(g), g.Gc(d))
					} else d.nodeValue &&
						"" != kj(d.nodeValue) || c.removeChild(d);
					d = e
				}
		},
		xv = function () {},
		zv = function (a, b, c) {
			if (a = a.G ? a.G() : a) {
				var d = [b];
				K && !G("7") && (d = yv(Ip(a), b), d.push(b));
				(c ? Lp : Mp)(a, d)
			}
		},
		Av = function (a, b, c) {
			if (a = c || a.ed()) c = b.getAttribute(Zf) || null, a != c && Jr(b, a)
		},
		Dv = function (a, b, c) {
			b.isVisible() || X(c, hd, !b.isVisible());
			b.isEnabled() || a.Ob(c, 1, !b.isEnabled());
			Bv(b, 8) && a.Ob(c, 8, Cv(b, 8));
			Bv(b, 16) && a.Ob(c, 16, Cv(b, 16));
			Bv(b, 64) && a.Ob(c, 64, Cv(b, 64))
		},
		Ev = function (a, b) {
			var c = a.ia(),
				d = [c],
				e = a.ia();
			e != c && d.push(e);
			c = b.qc;
			for (e = []; c;) {
				var g =
					c & -c;
				e.push(a.Fd(g));
				c &= ~g
			}
			d.push.apply(d, e);
			(a = b.vf) && d.push.apply(d, a);
			K && !G("7") && d.push.apply(d, yv(d));
			return d
		},
		yv = function (a, b) {
			var c = [];
			b && (a = Zi(a, [b]));
			D([], function (d) {
				!Bt(d, Mi(E, a)) || b && !E(d, b) || c.push(d.join("_"))
			});
			return c
		},
		Fv = function (a) {
			var b = a.ia();
			b.replace(/\xa0|\s/g, " ");
			a.A = {
				1: b + ca,
				2: b + "-hover",
				4: b + "-active",
				8: b + "-selected",
				16: b + "-checked",
				32: b + "-focused",
				64: b + "-open"
			}
		},
		Hv = function (a, b, c) {
			U.call(this, c);
			if (!b) {
				for (b = this.constructor; b;) {
					var d = Ji(b);
					if (d = Gv[d]) break;
					b = (b = Object.getPrototypeOf(b.prototype)) &&
						b.constructor
				}
				b = d ? typeof d.fa === t ? d.fa() : new d : null
			}
			this.C = b;
			this.eb = void 0 !== a ? a : null
		},
		Kv = function (a, b) {
			a.ea && b != a.Tf && Jv(a, b);
			a.Tf = b
		},
		Jv = function (a, b) {
			var c = jo(a),
				d = a.G();
			b ? (c.H(d, Lv.Uc, a.gd).H(d, [Lv.Vc, Lv.vd], a.rc).H(d, w, a.Od).H(d, Ve, a.Uf), a.Qd != Di && c.H(d, Eb, a.Qd), K && (G(9) || c.H(d, Kb, a.Zg), a.N || (a.N = new Mv(a), hm(a, a.N)))) : (c.ka(d, Lv.Uc, a.gd).ka(d, [Lv.Vc, Lv.vd], a.rc).ka(d, w, a.Od).ka(d, Ve, a.Uf), a.Qd != Di && c.ka(d, Eb, a.Qd), K && (G(9) || c.ka(d, Kb, a.Zg), N(a.N), a.N = null))
		},
		Nv = function (a, b) {
			a.eb = b
		},
		Qv = function (a,
			b) {
			Ov(a, 4, b) && Pv(a, 4, b)
		},
		Cv = function (a, b) {
			return !!(a.qc & b)
		},
		Pv = function (a, b, c, d) {
			d || 1 != b ? Bv(a, b) && c != Cv(a, b) && (a.C.Lf(a, b, c), a.qc = c ? a.qc | b : a.qc & ~b) : a.pb(!c)
		},
		Bv = function (a, b) {
			return !!(a.ge & b)
		},
		Rv = function (a, b) {
			return !!(a.yd & b) && Bv(a, b)
		},
		Ov = function (a, b, c) {
			return Bv(a, b) && Cv(a, b) != c && (!(a.Rc & b) || a.dispatchEvent(go(b, c))) && !a.ha
		},
		Mv = function (a) {
			M.call(this);
			this.B = a;
			this.A = !1;
			this.D = new T(this);
			hm(this, this.D);
			a = this.B.D;
			this.D.H(a, Lv.Uc, this.F).H(a, Lv.Vc, this.I).H(a, p, this.C)
		},
		Tv = function (a, b) {
			if (!Sv) return a.button =
				0, a.type = b, a;
			var c = document.createEvent("MouseEvents");
			c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
			return c
		},
		Z = function (a, b, c) {
			U.call(this, c);
			this.nc = b || sv.fa();
			this.Pc = a || wh
		},
		Uv = function (a) {
			return a.ag || a.G()
		},
		Vv = function (a, b) {
			var c = jo(a),
				d = Uv(a);
			b ? c.H(d, lc, a.Rg).H(d, nb, a.Qg).H(a.Ic || (a.Ic = new Rq(Uv(a))), ne, a.La) : c.ka(d, lc, a.Rg).ka(d, nb, a.Qg).ka(a.Ic || (a.Ic = new Rq(Uv(a))),
				ne, a.La)
		},
		Wv = function (a, b) {
			var c = b.G();
			c = c.id || (c.id = ho(b));
			a.Rb || (a.Rb = {});
			a.Rb[c] = b
		},
		uv = function (a, b) {
			if (a.G()) throw Error(ka);
			a.Pc = b
		},
		Xv = function (a, b) {
			b != a.Ec && a.ea && Vv(a, b);
			a.Ec = b;
			a.Hc && a.$b && tv(Uv(a), b)
		},
		Yv = function (a) {
			return qo(a, a.na)
		},
		$v = function (a) {
			Zv(a, function (b, c) {
				return (b + 1) % c
			}, po(a) - 1)
		},
		aw = function (a) {
			Zv(a, function (b, c) {
				b--;
				return 0 > b ? c - 1 : b
			}, 0)
		},
		bw = function (a) {
			Zv(a, function (b, c) {
				return (b + 1) % c
			}, a.na)
		},
		cw = function (a) {
			Zv(a, function (b, c) {
				b--;
				return 0 > b ? c - 1 : b
			}, a.na)
		},
		Zv = function (a, b, c) {
			c =
				0 > c ? so(a, a.za) : c;
			var d = po(a);
			c = b.call(a, c, d);
			for (var e = 0; e <= d;) {
				var g = qo(a, c);
				if (g && a.Fg(g)) {
					a.qb(c);
					break
				}
				e++;
				c = b.call(a, c, d)
			}
		},
		dw = function (a, b) {
			Z.call(this, void 0, void 0, b);
			this.model = a;
			this.T = [];
			this.B = this.A;
			this.R = this.ba = null
		},
		ew = function (a) {
			a = fm(a.B, 2);
			a.cellPadding = "0";
			a.cellSpacing = "0";
			a.border = "0";
			Jp(a, "ita-ppe-tbl");
			Jp(a.firstChild, $d);
			a.rows[0].cells[1].style.width = "1px";
			for (var b = 0; 1 > b; b++) {
				Jp(a.rows[b], $d);
				for (var c = 0; 2 > c; c++) Jp(a.rows[b].cells[c], $d)
			}
			return a
		},
		fw = function (a, b) {
			a.J =
				a.B.P(f, ["ita-ppe-pgu", Sd]);
			a.F = a.B.P(f, ["ita-ppe-pgd", Sd]);
			var c = a.B.P(f, "ita-ppe-navi-box");
			a.B.ya(c, a.J, a.F);
			a.B.ya(b, c)
		},
		hw = function (a) {
			a.C.style.display = of ;
			if (0 == a.model.status || 0 == a.model.C.length && !a.model.B.$) a.la(!1);
			else {
				a.model.B.$ && (a.B.Ae(a.N), a.mf());
				if (2 == a.model.status) V(a.K, Zd);
				else {
					W(a.K, Zd);
					a.T = [];
					a.B.Ae(a.K);
					var b = Wu(a.model) * a.model.B.A,
						c = b + a.model.B.A,
						d = a.model.C.length;
					c > d && (c = d);
					for (var e = b; e < c; e++) {
						var g = a.model.C[e],
							h = "",
							k = e + 1 - b;
						if (1 < d || 3 != g.type && 4 != g.type && 5 != g.type) switch (a.model.B.N) {
							case 1:
								h =
									a.model.B.Sa(k) + ". ";
								break;
							case 2:
								h = String(k) + ". "
						}
						h = a.B.P(f, "ita-ppe-can", h + g.target);
						a.model.D == e && V(h, "ita-ppe-hlt");
						a.model.B.K || (h.style.display = "inline");
						a.model.B.Fb && g.A && a.B.ya(h, a.B.P(n, "ita-ppe-ant", " (" + g.A + ")"));
						a.T.push(h)
					}
					a.B.ya(a.K, a.T);
					xn(a.K, !0)
				}
				a: if (!Y) {
					if (1 == a.model.C.length && (b = a.model.C[0].type, 3 == b || 4 == b || 5 == b)) {
						a.J.style.display = of ;
						a.F.style.display = of ;
						break a
					}
					a.J.style.display = wd;
					a.F.style.display = wd;
					b = Wu(a.model);
					c = Math.ceil(a.model.C.length / a.model.B.A);
					3 != a.model.status ?
						(V(a.J, Yd), V(a.F, Yd)) : (0 == b ? V(a.J, Yd) : W(a.J, Yd), b != c - 1 || a.model.M ? W(a.F, Yd) : V(a.F, Yd))
				}
				a.R && gw(a, a.R);
				if (!Y) {
					b = a.G();
					if (0 > b.offsetLeft) b.style.left = "0px";
					else {
						var l = jn(b);
						b.offsetLeft + b.offsetWidth > l.right && (b.style.left = l.right - b.offsetWidth + Sf)
					}
					0 > b.offsetTop ? b.style.top = "0px" : (l || (l = jn(b)), b.offsetTop + b.offsetHeight > l.bottom && (b.style.top = b.offsetTop - b.offsetHeight - 18 + Sf))
				}
				a.la(!0)
			}
		},
		gw = function (a, b) {
			var c = a.G();
			Y ? c.style.top = b.A.y + gm(a.A).scrollY + Sf : (a.R = b, b.Ga(c, 8))
		},
		iw = function (a, b) {
			dw.call(this,
				a, b)
		},
		jw = function (a, b) {
			this.A = a;
			this.C = b;
			this.I = {};
			this.S = {};
			this.B = null;
			this.F = "";
			this.D = !0;
			this.M = !1
		},
		kw = function (a) {
			return a.A.B.B && "block" == a.C.C.style.display
		},
		lw = function (a) {
			var b = a.toString(),
				c = b.lastIndexOf("/"),
				d = b.slice(c + 1);
			b = b.slice(1, c);
			return 0 > d.indexOf("g") ? new RegExp(b, d + "g") : a
		},
		nw = function (a, b) {
			var c = mw;
			if (!c || !a.A.B.S) return null;
			var d = c.Yc();
			if (d) {
				var e = d.Mb().length;
				a.A.B.I < e ? (N(d), d = null) : a.A.B.I > e && d.yh(a.A.B.S, a.A.B.I - e, b)
			}
			b = c.ab(20);
			for (c = b.length - 1; 1 <= c && !a.A.B.S.test(b.charAt(c)); c--);
			a.A.context = b.slice(0, c);
			return d
		},
		ow = function (a, b, c, d) {
			a.B = d;
			a.A.B.B && gw(a.C, d.Yd());
			a.F = b == c ? "" : c;
			c = a.A;
			c.S = !0;
			c.dc(b, 0);
			a.M = !0
		},
		pw = function (a) {
			N(a.B);
			a.B = nw(a, !0);
			if (a.B) {
				var b = a.B.Mb();
				b ? 0 != a.A.status ? a.A.lf(b) : a.A.dc(b, 0) : (N(a.B), a.B = null, a.A.reset())
			} else a.A.reset()
		},
		rw = function (a) {
			Cr(function () {
				this.M = !1;
				kw(this) ? this.A.reset() : this.B && !this.B.sf() && (2 == this.A.status && qw(this), this.A.Qa(), 0 != this.A.status && this.A.reset())
			}, 0, a)
		},
		sw = function (a, b) {
			if (b.type == u && 33 <= b.keyCode && 40 >= b.keyCode)
				if (a.D) rw(a);
				else return !0;
			else if (b.type == oe && 46 == b.keyCode && a.D) Cr(function () {
				pw(this);
				$u(this.A)
			}, 0, a);
			else if (b.type != u || 46 != b.keyCode || a.D) b.type == v && a.A.reset();
			else return !0;
			return !1
		},
		tw = function (a) {
			var b = mw;
			kw(a) && a.A.reset();
			if (0 != a.A.status) return a.D ? (b.ib("", 1), pw(a)) : (a.A.ud(), 0 == a.A.status && a.B && a.B.replace("")), !0;
			if (!b.Ud()) return !1;
			b = nw(a, !1);
			if (!b) return !1;
			var c = b.Mb();
			if (c) {
				var d = a.S[c],
					e = a.A.B.ub(c);
				if (d && (!e || 3 > c.length - d.length) || e && (d = c.slice(0, c.length - e.back) + e.text, !d.replace(lw(a.A.B.C),
						""))) return ow(a, d, c, b), !0
			}
			N(b);
			return !1
		},
		uw = function (a) {
			if (!mw.Ud() || a.B) return !1;
			var b = nw(a, !0);
			if (!b) return !1;
			var c = b.Mb();
			if (c) {
				var d = "",
					e = nw(a, !1);
				e && (d = e.Mb(), N(e));
				if (c != d && (d = a.S[c])) return ow(a, d, c, b), $u(a.A), !0
			}
			N(b);
			return !1
		},
		qw = function (a) {
			if (a.B) {
				var b = a.B;
				a.B = null;
				if (b.Mb()) {
					var c = a.A.hc(),
						d = a.I[c];
					d ? d.push(b) : a.I[c] = [b]
				} else b.da()
			}
		},
		vw = function (a, b) {
			O.call(this, a);
			this.data = b
		},
		ww = function (a, b, c) {
			R.call(this);
			this.A = null;
			this.model = a;
			this.view = b;
			this.D = new T(this);
			this.B = ip("ppe");
			this.model.ra(this);
			this.view.aa();
			this.D.H(this.model, "cmt", this.Uj).H(this.model, "opn", this.Xj).H(this.model, "cls", this.Tj).H(this.model, "mup", this.Wj).H(this.model, "dlc", this.Vj).H(this.view, "clkc", this.Of).H(this.view, "pd", this.Yi).H(this.view, "pu", this.Zi).H(c.A, Te, this.Pf, cp);
			D($r(c.A), function (d) {
				try {
					this.D.H(d, Te, this.Pf, cp), xl && this.D.H(d, Eb, this.Pf, cp)
				} catch (e) {}
			}, this)
		},
		yw = function (a) {
			a.A ? (a = a.A, !a.A.B.R || 0 != a.A.status || a.M || Xu(a.A, " ", " "), a.M = !1) : !xw(a) && a.model.B.R && Xu(a.model, " ", " ")
		},
		xw = function (a) {
			return 0 !=
				a.model.status
		},
		zw = function (a, b, c, d) {
			a = new av(a, c, d);
			c = new iw(a, b);
			ww.call(this, a, c, b);
			hm(this, a);
			hm(this, c)
		},
		Aw = function () {
			R.call(this);
			this.A = []
		},
		Bw = function () {
			Aw.call(this)
		},
		Cw = function (a) {
			this.source = a;
			this.B = [];
			this.A = -1;
			this.D = !0
		},
		Dw = function (a) {
			a.B = [];
			a.A = -1;
			a.D = !0
		},
		Ew = function (a, b, c) {
			Vu.call(this, a, b, c);
			this.F = []
		},
		Fw = function (a) {
			var b = a.F[a.A];
			a.C = b.B;
			a.M = b.D;
			a.D = b.A
		},
		Gw = function (a, b) {
			dw.call(this, a, b)
		},
		Hw = function (a, b, c, d) {
			a = new Ew(a, c, d);
			c = new Gw(a, b);
			ww.call(this, a, c, b);
			this.model = a;
			hm(this,
				a);
			hm(this, c)
		},
		Iw = function (a) {
			function b() {
				return 0 != a.model.status
			}

			function c() {
				return 1 == a.model.status || 3 == a.model.status
			}
			return [
				[v, 0, a.model.B.C, null, function () {
					return 0 == a.model.status || c()
				}, a.hb, a],
				[u, 0, 37, null, c, a.model.Ma, a.model, -1],
				[u, 0, 39, null, c, a.model.Ma, a.model, 1],
				[u, 0, 13, null, b, a.sd, a],
				[u, 0, 8, null, null, a.af, a],
				[u, 0, 27, null, b, a.Zd, a],
				[u, 17, 66, null, c, a.model.Ma, a.model, -1],
				[u, 17, 70, null, c, a.model.Ma, a.model, 1],
				[u, 17, 65, null, c, a.model.Ma, a.model, -999],
				[u, 17, 69, null, c, a.model.Ma, a.model,
					999
				],
				[u, 17, 77, null, b, a.sd, a],
				[u, 17, 71, null, c, a.Zd, a]
			]
		},
		Jw = function (a) {
			function b(c) {
				if (!this.model.mb) return this.wc(c);
				/ $/.test(this.model.source) || 32 != c.keyCode ? (this.model.mb = !1, c = this.wc(c), this.model.mb = !0) : (c.type = v, c.charCode = c.keyCode, c = this.hb(c));
				return c
			}
			return [
				[u, 0, 9, 1, null, b, a],
				[u, 0, 40, 1, null, b, a],
				[u, 0, 32, 1, null, b, a],
				[u, 0, 36, 1, null, a.model.Ma, a.model, -999],
				[u, 0, 35, 1, null, a.model.Ma, a.model, 999],
				[u, 0, 46, 1, null, a.model.Ah, a.model],
				[u, 17, 72, 1, null, a.af, a],
				[u, 17, 68, 1, null, a.model.Ah, a.model]
			]
		},
		Kw = function () {
			Aw.call(this)
		},
		Mw = function (a) {
			var b = [];
			a = a.replace("=", " ");
			for (var c = 0; c < a.length; c++) {
				var d = a.charAt(c);
				b.push(Lw[d] || d)
			}
			return b.join("")
		},
		Nw = function (a) {
			this.source = a;
			this.target = "";
			this.A = !1
		},
		Ow = function (a, b, c) {
			Vu.call(this, a, b, c);
			this.F = [];
			this.I = "";
			this.U = {
				"<": "\uff0c\u3001\u3000\u300a\u3008\uff1c".split(""),
				">": "\u3002\u22ef\u3000\u30fb\u00b7\uff0e\u300b\u3009\uff1e".split(""),
				":": ["\uff1a", "\uff1b"],
				"?": ["\uff1f", "\uff0c", "\u00f7"]
			};
			this.N = !1
		},
		Pw = function (a) {
			a.C = [];
			a.D = -1;
			a.status =
				1;
			Yu(a)
		},
		Qw = function (a, b) {
			var c = a.U[b];
			if (!c) return !1;
			a.C = c.map(function (d) {
				return new tu(b, d, "")
			});
			a.F = [new Nw(b)];
			a.F[0].target = c[0];
			a.F[0].A = !0;
			a.source = b;
			a.status = 3;
			a.N = !0;
			a.D = 0;
			a.M = !1;
			a.dispatchEvent("opn");
			Yu(a);
			return !0
		},
		Rw = function (a, b) {
			dw.call(this, a, b)
		},
		Sw = function (a, b, c, d) {
			a = new Ow(a, c, d);
			c = new Rw(a, b);
			ww.call(this, a, c, b);
			this.model = a;
			hm(this, a);
			hm(this, c)
		},
		Vw = function (a) {
			R.call(this);
			this.C = Ji(this);
			this.B = Rs("", this.C);
			this.I = a;
			this.S = new T(this);
			this.S.H(Ms(), "cfga", this.$i);
			Tw != Uw &&
				(un(Bk(Tw)), Tw = Uw)
		},
		Ww = function (a) {
			R.call(this);
			this.B = a || window;
			this.D = Q(this.B, Uf, this.C, !1, this);
			this.A = ul(this.B || window)
		},
		Xw = function (a, b) {
			kv.call(this, a, b);
			this.N = new Ww(gm(J(a)));
			a = new T(this);
			a.H(this.N, Uf, this.U);
			hm(this, a)
		},
		Yw = function (a) {
			var b = qn(a.target);
			a = a.N;
			a = a.A ? ml(a.A) : null;
			a.width -= 2 + b.width;
			a.height -= 2 + b.height;
			return new Qm(2, a.width, a.height, 2)
		},
		Zw = function (a, b) {
			var c = Yw(a);
			ev(a, Vm(c));
			b = b || on(a.target);
			b.x = Math.min(b.x, c.right);
			b.y = Math.min(b.y, c.bottom);
			b.x = Math.max(b.x, c.left);
			b.y = Math.max(b.y, c.top);
			cn(a.target, b)
		},
		$w = function (a) {
			if (a) {
				var b = J(a);
				b = ul(gm(b) || window);
				var c = a.offsetHeight;
				a.style.left = Math.floor(b.width - a.offsetWidth - 50) + Sf;
				a.style.top = Math.floor(b.height - c - 50) + Sf
			}
		},
		ax = function (a, b, c) {
			U.call(this);
			this.F = a;
			this.B = b;
			this.C = new T(this);
			this.J = c && E(b, c) ? c : this.B[0]
		},
		bx = function (a) {
			switch (a) {
				case Vg:
					return new ax(a, ["ita-kd-btn-en", "ita-kd-btn-zh"], "ita-kd-btn-zh");
				case gh:
					return new ax(a, ["ita-kd-btn-dbc", Od], Od);
				case "pun":
					return new ax(a, ["ita-kd-btn-en_pun",
						Pd
					], Pd);
				default:
					return null
			}
		},
		cx = function () {
			U.call(this, to);
			this.T = !1;
			this.F = this.J = this.N = this.C = this.R = null;
			this.U = {};
			this.K = new T(this);
			this.B = ip("bar")
		},
		ex = function (a, b, c, d) {
			c = c && b && jt(b);
			S(a.G(), c);
			a.T && (a.B.wg(Ta, "sw"), a.B.report(), a.T = !1);
			c && (Jp(a.C.firstChild, [Fp(b.code), "ita-kd-icon ita-kd-icon-span ita-kd-statusbar-icon"].join(" ")), d && dx(a, d), a.B.hf(b.code), a.B.pe("st"), a.T = !0)
		},
		dx = function (a, b) {
			pj(b, function (c, d) {
				var e = this.U[d];
				if (e && c != !Kp(e.G().firstChild, e.B[0])) {
					var g = d == this.R;
					this.R =
						null;
					this.B.Lc(fx[d][Number(g)]);
					d = e.G();
					W(d.firstChild, c ? e.B[0] : e.B[1]);
					V(d.firstChild, c ? e.B[1] : e.B[0])
				}
			}, a)
		},
		gx = function (a, b, c) {
			O.call(this, "sb");
			this.value = c
		},
		hx = function (a) {
			pu.call(this, a);
			this.B = new Vw(to);
			this.S = [Gr, u, oe, v, Te, p];
			this.M = [wb, vb, bd, "cm", gh, Vg, "pun", "lc"];
			this.I = [];
			this.F = new T(this);
			this.F.H(this.B, ["opn", "cmts", "cmte", "cls"], this.dj)
		},
		ix = function (a) {
			a = a.B.B.state;
			var b = {};
			return b.tlang = !!(a & 1), b.tsbc = !(a & 2), b.pun = !!(a & 4), b
		},
		jx = function (a, b) {
			a = a.B;
			var c = !!b.tlang,
				d = !b.tsbc;
			b = !!b.pun;
			a.B.state = 0;
			c && (a.B.state |= 1);
			d && (a.B.state |= 2);
			b && (a.B.state |= 4)
		},
		lx = function (a, b) {
			if (a.D && (b == Vg || a.rb && jt(a.D))) {
				var c = a.B;
				c = !!c.A && xw(c.A);
				a.B.reset(b == Vg || b == gh);
				var d = ix(a);
				b == gh && c || (d[b] = !d[b], b == Vg && a.D.code !== Vh && (d.pun = d[b]), jx(a, d), kx(a, a.D, d), a.rb && dx(a.rb, d))
			}
		},
		kx = function (a, b, c) {
			pj(c, function (d, e) {
				this.C.dispatchEvent(new gx(e, b, d))
			}, a)
		},
		mx = function () {
			var a = {},
				b = mw;
			if (b) {
				var c = Lq(b);
				c && D(["font-family", "font-size", "font-weight", "font-style", Pg, Og, Ge, "word-spacing", "line-height",
					"text-align", xh, Qb
				], function (d) {
					try {
						var e = Gp(c, d);
						e && (a[d] = e)
					} catch (g) {}
				})
			}
			return nk(a)
		},
		nx = function (a, b) {
			b = void 0 === b ? !1 : b;
			O.call(this, "n");
			this.A = a;
			this.F = b
		},
		ox = function (a, b) {
			b = void 0 === b ? 10 : b;
			R.call(this);
			this.S = a ? a : new ou;
			this.C = [];
			this.F = this.B = "";
			this.J = !1;
			this.D = {};
			this.K = b;
			this.A = {};
			this.T = new ou;
			this.M = "";
			this.I = null;
			this.N = ip("hwt");
			this.A[jf] = kf;
			this.A[oc] = pc;
			this.A[Mb] = Nb;
			this.A[yd] = zd;
			this.A[Qf] = Rf;
			this.A[Gf] = Rf;
			this.A[Lf] = Rf;
			this.A[$b] = ac;
			this.A[ag] = bg
		},
		qx = function (a, b, c, d, e) {
			e = (void 0 ===
				e ? "" : e).slice(-20);
			b = {
				writing_guide: {
					writing_area_width: c,
					writing_area_height: d
				},
				pre_context: e,
				max_num_results: a.K,
				max_completions: 0,
				language: a.F,
				ink: b
			};
			a.J ? a.I = b : px(a, b)
		},
		px = function (a, b) {
			b && cj(a.C, 0, 0, b);
			b = {
				itc: a.D.itc,
				app_version: .4,
				api_level: el,
				device: window.navigator.appVersion,
				input_type: "0",
				options: "enable_pre_space",
				requests: a.C
			};
			a.C = [];
			a.J = !0;
			a.S.D("/request", a.D, B(a.R, a, 0), null, Zu, b)
		},
		rx = function (a, b, c) {
			b && c && "" != a.B && a.C.push({
				feedback: b,
				select_type: c,
				language: a.F,
				ink_hash: a.B
			})
		},
		sx = function (a) {
			"" !=
			a.B && a.C.push({
				feedback: "\u2205[deleted]",
				select_type: "deleted",
				language: a.F,
				ink_hash: a.B
			})
		},
		tx = function (a, b) {
			var c = b.pre_context.trim().replace(/[,|:%]/g, function (d) {
				return encodeURIComponent(d)
			});
			return {
				app: a.D.app,
				itc: b.itc,
				text: c,
				num: String(b.max_num_results),
				cp: "0",
				cs: "0",
				ie: "utf-8",
				oe: "utf-8"
			}
		},
		ux = function (a) {
			O.call(this, "b");
			this.candidate = a
		},
		vx = function (a) {
			M.call(this);
			this.A = a || J();
			this.B = {};
			this.D = ""
		},
		wx = function (a, b, c) {
			c = c || "polite";
			var d = a.B[c];
			d ? (d.removeAttribute(bb), c = d) : (d = Cl(a.A.A,
				f), d.style.position = Sa, d.style.top = "-1000px", d.style.height = "1px", d.style.overflow = hd, X(d, "live", c), X(d, "atomic", "true"), a.A.A.body.appendChild(d), c = a.B[c] = d);
			d = a.D === b ? b + "\u00a0" : b;
			b && (a.D = d);
			Ul(c, d)
		},
		xx = function (a, b, c) {
			U.call(this, b);
			this.ra(c || null);
			this.B = a;
			this.F = new T(this);
			this.C = !0;
			this.J = new vx(b)
		},
		yx = function (a) {
			V(a.G(), Fd)
		},
		zx = function (a, b) {
			Z.call(this, void 0, void 0, a);
			this.ra(b || null);
			this.B = [];
			this.N = [];
			this.R = new T(this);
			this.J = !0;
			this.F = !1;
			this.C = 0;
			this.K = fb;
			this.T = new vx(a)
		},
		Ax = function (a) {
			for (var b =
					0; b < a.B.length; b++) W(a.B[b].G(), Fd)
		},
		Bx = function (a, b, c) {
			a.N = b;
			im(a.B);
			a.B = [];
			ao(a.R);
			for (b = 0; b < a.N.length; b++) {
				var d = new xx(a.N[b], a.A, a);
				d.aa(a.G());
				Xi(a.B, d)
			}
			for (b = 0; b < a.B.length; b++) d = a.B[b], a.R.H(d.G(), w, B(a.ik, a, d)), a.R.H(d.G(), Ve, a.hk);
			c && 0 < a.B.length && yx(a.B[0]);
			a.C = 0;
			a.K = fb;
			a.F = c
		},
		Cx = function (a, b) {
			a.J = b;
			for (var c = 0; c < a.B.length; c++) a.B[c].C = b
		},
		Dx = function (a, b) {
			this.text = a;
			this.state = b
		},
		Ex = function (a, b, c) {
			var d = Ni();
			this.x = .01 * Math.round(100 * a);
			this.y = .01 * Math.round(100 * b);
			this.time = Math.round(d);
			this.pointerType = c
		},
		Fx = function (a, b) {
			O.call(this, a);
			this.A = b
		},
		Gx = function (a, b, c) {
			a.H(b, We, c, !0);
			D($r(b), function (d) {
				try {
					a.H(d, We, c, !0)
				} catch (e) {}
			})
		},
		Hx = function (a, b) {
			R.call(this);
			this.B = new T(this);
			this.A = !1;
			this.D = a;
			this.B.H(a, Te, this.Ch).H(a, Ue, this.Dh).H(a, $g, this.Ch).H(a, Yg, this.og).H(a, Xg, this.og).H(a, Zg, this.Dh);
			Gx(this.B, b, B(this.og, this))
		},
		Ix = function (a, b) {
			var c = hn(a.D),
				d = b.A,
				e = a.D.ownerDocument;
			a = (e.dir == $f ? -1 : 1) * (e.body.scrollLeft || e.documentElement.scrollLeft || 0);
			e = e.body.scrollTop || e.documentElement.scrollTop ||
				0;
			null != d.touches && 0 < d.touches.length ? (a = d.touches[0].clientX + a, d = d.touches[0].clientY + e) : !K && "pageX" in d && "pageY" in d ? (a = d.pageX, d = d.pageY) : (a = d.clientX + a, d = d.clientY + e);
			return new Ex(a - c.x, d - c.y, b.pointerType)
		},
		Jx = function (a, b, c, d, e) {
			Z.call(this, void 0, void 0, b);
			this.ra(c || null);
			this.Z = a || document;
			this.F = window.devicePixelRatio || 1;
			this.N = [];
			this.K = [];
			this.Y = 0;
			this.X = new T(this);
			this.ca = new vx(this.A);
			this.U = d || Hj();
			this.T = e || "#4D90FE";
			this.R = 0
		},
		Kx = function (a, b) {
			b.time -= a.Y;
			b.x *= a.F;
			b.y *= a.F;
			a.K.push(b);
			var c = a.K.length;
			1 == c ? (b = a.K[0], c = a.U(b) * a.F, a.C.beginPath(), a.C.strokeStyle = a.T, a.C.fillStyle = a.T, a.C.arc(b.x, b.y, c / 2, 0, 2 * Math.PI, !0), a.C.fill()) : (b = a.K[c - 2], c = a.K[c - 1], a.C.beginPath(), a.C.strokeStyle = a.T, a.C.fillStyle = of , a.C.lineWidth = a.U(b) * a.F, a.C.lineCap = "round", a.C.lineJoin = "round", a.C.moveTo(b.x, b.y), a.C.lineTo(c.x, c.y), a.C.stroke())
		},
		Lx = function (a) {
			return !a.J.A && 0 == a.N.length
		},
		Mx = function (a, b, c) {
			var d = b && b !== a.B.height / a.F,
				e = c && c !== a.B.width / a.F;
			if (d || e) a.reset(), d && (a.B.style.height = b + Sf,
				a.B.height = b * a.F), e && (a.B.style.width = c + Sf, a.B.width = c * a.F)
		},
		Ox = function (a, b) {
			Z.call(this, void 0, void 0, a);
			this.ra(b || null);
			this.N = Nx[""];
			this.va = new T(this);
			this.Z = !0;
			this.ca = ip("hwt")
		},
		Px = function (a) {
			R.call(this);
			this.D = this.A = null;
			this.B = a;
			this.va = new T(this);
			this.C = !1;
			this.id = 0;
			this.S = "";
			this.M = ip("hwt");
			this.F = this.I = !1
		},
		Qx = function (a) {
			var b = kk(a.view.C.N, function (e) {
					return [kk(e, function (g) {
						return g.x
					}), kk(e, function (g) {
						return g.y
					}), kk(e, function (g) {
						return g.time
					})]
				}),
				c;
			a.A && (c = a.A.ab(20));
			var d =
				a.view.C;
			qx(a.B, b, d.B.width / d.F, d.B.height / d.F, c)
		},
		Rx = function (a, b, c) {
			a.A && (a.dispatchEvent(new vw("e", b)), a.A.ib(b, c), a.dispatchEvent(new vw("d", b)))
		},
		Sx = function (a, b) {
			Z.call(this, void 0, void 0, a);
			this.ra(b || null);
			this.F = this.K = this.B = this.C = null;
			this.R = new T(this);
			this.N = new vx(a);
			this.J = !0
		},
		Tx = function (a, b) {
			b ? (V(a.K, Gd), Np(a.B, Nd, Ld)) : (W(a.K, Gd), Np(a.B, Ld, Nd))
		},
		Ux = function (a, b, c) {
			b = b || J();
			Ox.call(this, b, c);
			this.ra(c || null);
			this.T = a;
			this.ba = null;
			this.qa = Zm && !G(11);
			this.R = !1;
			this.Y = new vx(b);
			this.U = !1
		},
		Wx = function (a, b) {
			if (a.T && a.G() && !a.qa) {
				var c = a.A.A;
				b || (b = Yw(a.ba), c = Nn(c.body, Vx), b = new H(c & 4 ? b.right : b.left, c & 1 ? b.bottom : b.top));
				Zw(a.ba, b)
			}
		},
		Xx = function (a) {
			V(a.X, "shown");
			a.U = !0;
			wx(a.Y, Ca)
		},
		Yx = function (a, b, c) {
			Px.call(this, a, c);
			this.yg(new Ux(b, c, this))
		},
		Zx = function (a, b) {
			if (b || a.C) a.mg(), a.view.la(b), a.reset()
		},
		$x = function (a, b) {
			pu.call(this, b);
			this.B = null;
			this.F = new T(this);
			this.I = a;
			this.B = new Yx(new ox(this.I), !0, to);
			this.F.H(this.B, "g", this.Wk).H(this.B, "e", this.al).H(this.B, "d", this.$k).H(this.B,
				"k", this.Ok).H(this.B, "j", this.rl)
		},
		ay = function (a, b) {
			O.call(this, a);
			this.Lb = (this.A = b) ? b.id : null
		},
		cy = function (a) {
			this.id = a.id;
			this.view = {
				id: a.id,
				title: a.title,
				Ve: a.direction == $f,
				Td: !!a.is102Keyboard,
				Mc: !!a.accents,
				Ze: {
					"": null,
					s: null,
					c: null,
					l: null,
					sc: null,
					cl: null,
					sl: null,
					scl: null
				},
				wd: {
					"": null,
					s: null,
					c: null,
					l: null,
					sc: null,
					cl: null,
					sl: null,
					scl: null
				},
				xd: {}
			};
			this.view.Mc && by(this, a);
			var b = this.view.Td ? gi : hi;
			a = a.mappings;
			for (var c in a) {
				var d = a[c],
					e = c.split(/,/);
				e.join(",") != c && e.push("");
				var g = {};
				for (k in d) {
					var h =
						d[k];
					if ("" == k) {
						var k = b;
						if (this.view.Td) {
							var l = h.slice(0, 25);
							l += h.slice(26, 37);
							l += h.charAt(25);
							h = l += h.slice(37)
						}
					}
					k = k.replace("m", "\u00bd");
					k = k.replace("=", "\u00bb");
					k = k.replace(";", "\u00ba");
					if (1 == k.length) g[k] = Array.isArray(h) ? h : ["S", h, h];
					else {
						var m = 0;
						l = 0;
						for (var r; r = k.charAt(l); ++l) {
							var L = h.charAt(m++);
							if (L == h.charAt(m) && "{" == L) {
								L = h.indexOf("}}", m);
								if (L < m) break;
								m = h.slice(m + 1, L);
								var oa = m.split("||");
								3 == oa.length ? g[r] = oa : 1 == oa.length && (g[r] = ["S", m, m]);
								m = L + 2
							} else g[r] = ["S", L, L]
						}
					}
				}
				d = 0;
				for (h = void 0; h =
					e[d], void 0 != h; ++d) this.view.Ze[h] = g
			}
		},
		by = function (a, b) {
			var c = b.accents,
				d;
			for (d in c) {
				var e = d.split(/,/);
				e.join(",") != d && e.push("");
				var g = {},
					h = 0;
				for (g.Tc = void 0; g.Tc = e[h], void 0 != g.Tc; g = {
						Tc: g.Tc
					}, ++h) a.view.wd[g.Tc] = [], D(c[d], function (k) {
					return function (l) {
						this.view.wd[k.Tc].push(l.split(","))
					}
				}(g), a)
			}(b = b.transform) && pj(b, function (k, l) {
				this.view.xd[k] || (this.view.xd[k] = l.replace("\\", ""))
			}, a)
		},
		dy = function (a) {
			this.id = a.id;
			this.B = this.A = null;
			var b = a.transform;
			if (b) {
				var c = [],
					d = [],
					e = 1,
					g;
				for (g in b) {
					d[e] = [new RegExp(g + "$"), b[g]];
					c.push("(" + g + "$)");
					var h = (new RegExp(g + "|.*")).exec("").length;
					e += h
				}
				this.A = [new RegExp(c.join("|")), d]
			}
			if (a = a.historyPruneRegex) this.B = new RegExp("^(" + a + ")$")
		},
		ey = function (a, b) {
			return a.B ? !!a.B.exec(b) : !1
		},
		fy = function (a) {
			this.A = {
				sa: {
					text: "",
					Db: -1
				},
				Ta: "",
				current: {
					text: "",
					Db: -1
				}
			};
			this.B = new dy(a);
			this.id = this.B.id
		},
		hy = function (a, b) {
			var c = a.A.current.text;
			c && b && (jj(b, c) || jj(c, b)) || gy(a)
		},
		gy = function (a) {
			a.A.Ta = "";
			a.A.sa = {
				text: "",
				Db: -1
			};
			a.A.current = xj(a.A.sa)
		},
		jy = function () {
			R.call(this);
			this.I = Rj("https://ssl.gstatic.com/inputtools/js/kbd/3/%{file}");
			this.S = {};
			this.B = {};
			this.F = {};
			this.A = this.D = "";
			this.C = B(this.M, this);
			iy.push(this.C)
		},
		ly = function (a, b) {
			if (b) {
				var c = a.B[b];
				void 0 == c ? (a.B[b] = !1, "ko" == b && (b = "hangul"), ky(a, b)) : c && a.dispatchEvent(new ay("lld", c.view))
			}
		},
		ny = function (a, b) {
			if (b && a.D != b) {
				var c = a.B[b];
				c ? (a.D = b, a.A = "", (b = my(a)) && gy(b), a.dispatchEvent(new ay("lat", c.view))) : 0 == c && (a.A = b)
			}
		},
		my = function (a) {
			return a.F[a.D] || null
		},
		oy = function (a) {
			a = my(a);
			return !!a && !!a.B.A
		},
		ky = function (a,
			b) {
			var c = Cl(document, Ka);
			a = Yj(a.I, Object.assign({}, a.S, {
				file: b + ".js"
			}));
			c.src = Uj(a);
			Hk(c);
			document.body.appendChild(c)
		},
		qy = function (a, b, c, d) {
			c = void 0 === c ? "" : c;
			d = void 0 === d ? !1 : d;
			var e = null;
			if (d) {
				e = (e = b.A) || document;
				var g = J();
				b = g.P(ua, {
					frameborder: "0",
					scrolling: "no",
					style: "background-color:transparent;border:0;display:none;"
				});
				g.ya(e.body, b);
				e = g.yi(b);
				un(Pr("html body{border:0;margin:0;padding:0} html,body{overflow:hidden}"), e.body);
				e = b;
				b = J(Tl(e))
			}
			Z.call(this, void 0, void 0, b);
			this.R = e;
			this.bg = c;
			this.X =
				d;
			this.B = a;
			this.Fb = "";
			this.J = {};
			this.T = {};
			this.Zc = K && !G(7);
			this.Kg = Zm && !G(11);
			this.Fj = P && !G(3);
			this.C = new T(this);
			this.F = this.B.Mc;
			this.Ub = {};
			this.B.Mc && py(this);
			this.ba = null;
			this.Te = !1;
			this.N = this.ca = this.Sa = this.U = this.ub = this.qa = this.Z = this.Y = this.ga = this.Ia = this.K = null;
			this.Wg = 0
		},
		ry = function (a, b, c) {
			if (typeof b === x) return b;
			if (a.F) return c && (b = String.fromCharCode(c), a.Ub[b]) ? b : null;
			c = String.fromCharCode(b);
			var d = a.B.Ze[a.Fb][c];
			return d && (d = d[2]) ? d : 32 == b ? " " : 0 <= (a.B.Td ? gi : hi).indexOf(c) ? "" : null
		},
		ty = function (a, b) {
			if (a.G() && !a.Kg) {
				var c = a.A.A;
				a.X && (c = I(a.R));
				b || (b = Yw(a.ba), c = Nn(c.body, sy), b = new H(c & 4 ? b.right : b.left, c & 1 ? b.bottom : b.top));
				Zw(a.ba, b)
			}
		},
		uy = function (a, b) {
			pj(a.T, function (c) {
				S(c, !1)
			}, a);
			(b = a.B.wd[b]) || (b = a.B.wd[""]);
			D(ij(b), function (c) {
				this.T[c] && S(this.T[c], !0)
			}, a)
		},
		vy = function (a, b) {
			a.B.Mc && uy(a, b)
		},
		xy = function (a, b) {
			if (a.B) {
				a.B.Ze[b] && (a.Fb = b);
				var c = {
					20: "l",
					16: "s",
					273: "c"
				};
				for (e in a.J) {
					var d = a.J[Number(e)];
					var e = parseInt(e, 10);
					var g = c[e];
					if (g) {
						Fi(d) || (d = [d]);
						for (var h = 0, k; k = d[h]; ++h) Jp(k,
							Ch), 0 <= b.indexOf(g) && V(k, "vk-sf-s")
					} else if (g = wy(a, e)) a.A.Ae(d), a.A.appendChild(d, g)
				}
				a.N && !Kp(a.N, "vk-sf-s") && (Yr(a.N, [Ch, Dh]), V(a.N.firstChild, Dh))
			}
		},
		yy = function (a, b) {
			if (a.isVisible()) {
				var c = typeof b === x ? a.T[b] : a.J[b];
				c && (Yr(c, [Ch, "vk-sf-a"]), window.setTimeout(function () {
					Jp(c, Ch)
				}, 250))
			}
		},
		zy = function (a) {
			var b = a.B.Td ? [{
					13: 2
				}, {
					0: 1.5,
					13: 1.5
				}, {
					0: 1.75,
					13: 1.25
				}, {
					0: 1.25,
					12: 2.75
				}, {
					0: 3,
					1: 9,
					2: 3
				}] : [{
					13: 2
				}, {
					0: 1.5,
					13: 1.5
				}, {
					0: 1.75,
					12: 2.25
				}, {
					0: 2.25,
					11: 2.75
				}, {
					0: 3,
					1: 9,
					2: 3
				}],
				c = 4,
				d = 29,
				e = a.U.children[0].children[0];
			e && (d = $m(e, "width"), d = xl && d ? Number(d.slice(0, -2)) : qn(e).width, c = zn(e, "margin"), c = c.right + c.left, d += c);
			for (e = 0; e < b.length; e++)
				for (var g in b[e]) g = Number(g), a.U.children[e].children[g].style.width = d * b[e][g] - c + Sf;
			a.B.Mc || !K || G(8) || (a.Wg = 15 * d - c - 2, a.K.style.width = a.Wg + Sf)
		},
		Ay = function (a) {
			K && !G(8) ? (a.style.display = "inline", a.style.zoom = 1) : a.style.display = wd
		},
		Dy = function (a) {
			function b(h, k) {
				if (k) {
					var l = k = c.P("A", {
							target: "_blank",
							"class": "vk-t-btn-o"
						}),
						m = this.bg;
					m instanceof bk || m instanceof bk || (m = typeof m ==
						rf && m.tc ? m.Xb() : String(m), dk.test(m) || (m = Ra), m = new bk(m, ak));
					l.href = ck(m)
				} else k = c.P(f, {
					"class": "vk-t-btn-o"
				});
				V(k, h);
				l = c.P(f, ["vk-t-btn", Sd]);
				V(l, h);
				c.appendChild(k, l);
				c.appendChild(a.Ia, k);
				Ay(k);
				return k
			}
			var c = a.A,
				d = a.Ve(),
				e = c.P(f, {
					dir: d ? $f : Je,
					style: "white-space: nowrap;"
				});
			a.K = c.P(f, "vk-t", c.P(n, "", a.B.title), c.P(n, "vk-ss"));
			a.K.style.textAlign = d ? "right" : "left";
			Ay(a.K);
			c.appendChild(e, a.K);
			a.F && (a.ga = c.P("A", {
				"class": "vk-l-a",
				href: ""
			}, "Full"), c.appendChild(a.K, a.ga), c.appendChild(a.K, c.P(n, "vk-ss",
				"|")), a.Y = c.P("A", {
				"class": "vk-l-i",
				href: ""
			}, "Accents"), c.appendChild(a.K, a.Y), V(a.K, d ? "vk-ea-r" : "vk-ea-l"));
			a.Ia = c.P(f, "vk-t-btns");
			c.appendChild(e, a.Ia);
			var g = d ? "paddingLeft" : "paddingRight";
			a.Ia.style[d ? "left" : "right"] = "0";
			Ay(a.Ia);
			By && (a.ub = b("vk-sf-hp", !0));
			Cy && (a.qa = b("vk-sf-min"));
			a.Z = b("vk-sf-cl");
			a.Z.style[g] = "14px";
			return e
		},
		Fy = function (a) {
			var b = a.A.P(f);
			b.dir = b.style.direction = Je;
			pj(a.B.wd, function (c) {
				c && D(c, function (d, e) {
					var g = this.A.P(f);
					g.style.whiteSpace = "nowrap";
					var h = !1;
					D(d, function (k) {
						k &&
							!this.T[k] && (h = !0, k = Ey(this, k), 0 == e && k.setAttribute("data-tooltip-align", "t,c"), this.A.appendChild(g, k))
					}, this);
					h && this.A.appendChild(b, g)
				}, this)
			}, a);
			return b
		},
		Ey = function (a, b) {
			var c = wy(a, b),
				d = a.A.P(ha, {
					id: "K" + b,
					type: sb,
					"class": Ch,
					style: "visibility:" + (c ? "" : hd)
				});
			c && a.A.appendChild(d, c);
			typeof b === x ? (a.T[b] = d, a.B.xd[b] && d.setAttribute("data-tooltip", a.B.xd[b])) : a.J[b] = a.J[b] ? [a.J[b], d] : d;
			return d
		},
		wy = function (a, b) {
			var c = a.A;
			if (typeof b === x) {
				var d = c.P(n);
				c.appendChild(d, document.createTextNode(String(b)));
				return d
			}
			if (9 == b || 13 == b) return null;
			d = c.P(n);
			if (Gy[b]) return Yr(d, ["vk-cap", Sd, "vk-sf-b", Gy[b]]), d;
			if (273 == b) return Yr(d, ["vk-cap", "vk-sf-c273"]), Ul(d, "Ctrl + Alt"), d;
			var e = null;
			(b = a.B.Ze[a.Fb][String.fromCharCode(b)]) && b[1] && ("S" == b[0] ? (e = em(c, b[1]), Jp(d, "vk-cap")) : "P" == b[0] && (e = c.P("IMG", {
				src: "https://ssl.gstatic.com/inputtools/images/vk/layouts/" + a.B.id + "_" + b[1] + ".png"
			}), Jp(e, "vk-cap-i")));
			e ? (c.appendChild(d, e), a.Ve() && (d.style.direction = $f)) : (c.appendChild(d, document.createTextNode(".")), d.style.visibility =
				hd);
			return d
		},
		Hy = function (a) {
			D(ij(rj(a.J)), function (b) {
				b.removeAttribute(Rb)
			}, a)
		},
		Iy = function (a) {
			D(ij(rj(a.J)), function (b) {
				b.setAttribute(Rb, "true")
			}, a)
		},
		py = function (a) {
			pj(a.B.xd, function (b) {
				D(b, function (c) {
					this.Ub[c] = !0
				}, this)
			}, a)
		},
		Ky = function (a, b) {
			a = void 0 === a ? "" : a;
			b = void 0 === b ? !1 : b;
			R.call(this);
			this.I = null;
			this.S = !0;
			this.B = 0;
			this.N = this.K = this.$ = this.A = null;
			this.T = !0;
			this.X = this.Y = !1;
			this.M = new jy;
			this.U = J();
			this.C = 0;
			this.J = !1;
			this.D = {};
			this.R = new T(this);
			this.F = ip("vk");
			this.ca = {};
			this.Z = {};
			this.bg =
				a;
			this.ga = b;
			this.M.ra(this);
			this.R.H(this.M, "lat", this.il);
			for (a = 0; b = " \u00a0\n\r`~!@#$%^&*()_+-=[]{}\\|;:'\",./<>?".charAt(a); ++a) this.ca[b] = !0;
			Jy != Uw && (un(Bk(Jy)), Jy = Uw)
		},
		Ly = function (a, b) {
			a.A && (!a.S && b ? a.F.pe("st") : a.S && !b && (a.F.set(Ta, "cl"), a.F.report()));
			a.S = b
		},
		Ny = function (a, b) {
			a.T = b;
			a.A && (b || (a.B = 0, a.C = 0, xy(a.A, My(a.B)), vy(a.A, My(a.C))), a.A.la(b))
		},
		Ry = function (a, b) {
			var c = Oy(b.keyCode),
				d = Py(a.B, c, b);
			a.B != d && (a.B = d, xy(a.A, My(a.B)));
			d = Py(a.C, c, b);
			a.C != d && (a.C = d, vy(a.A, My(a.C)));
			if (a.B & 16) return a.D[0] =
				a.D[c] = !1;
			d = !!(a.B & 4);
			var e = !!(a.B & 2),
				g = !!(a.B & 16);
			if (17 == c || 18 == c || 16 == c || 20 == c) return a.D[0] = a.D[c] = 20 == c;
			if (g || d != e) return a.D[0] = a.D[c] = !1;
			a.F.Lc("kkc");
			yy(a.A, c);
			b = Qy(a, c, b.charCode);
			return a.D[0] = a.D[c] = b
		},
		Ty = function (a, b) {
			if (a.D[0]) return !0;
			if (a.A.F) return Qy(a, b.keyCode, b.charCode);
			if (km && P) {
				var c = Sy[b.charCode];
				if (c) return Qy(a, c, b.charCode)
			}
			return a.D[0]
		},
		Py = function (a, b, c) {
			a &= 776;
			20 == b && (a = km && xl ? a | 8 : a ^ 8);
			if (16 == b || c.shiftKey) a |= 1;
			if (18 == b || c.altKey) a |= 2;
			if (17 == b || c.ctrlKey) a |= 4;
			if (91 ==
				b || c.metaKey) a |= 16;
			return a
		},
		Qy = function (a, b, c, d) {
			if (!a.I) return !1;
			(c = ry(a.A, b, c)) && !a.ca[c] ? a.J || (a.J = !0, a.F.Lc("wc")) : a.J && 8 != b && (a.J = !1);
			if (a.B & 256 || a.B & 512) {
				var e = a.B;
				a.Y || (e &= -257);
				a.X || (e &= -513);
				e != a.B && (a.B = e, xy(a.A, My(a.B)))
			}
			if ("" == c) return !0;
			if (null == c && 8 != b) return !1;
			if (c)
				if (oy(a.M)) {
					e = a.I.ab(20) || "";
					var g = my(a.M),
						h;
					if (g)
						if (c) {
							hy(g, e);
							e = g.A;
							e.Ta && (h = g.B.transform(e.sa.text, e.sa.Db, e.Ta + c)) && 0 > h.back && (h = null);
							if (h) {
								var k = e.sa.text;
								k = k.slice(0, k.length - h.back);
								k += h.Qb;
								h.back = e.current.text.length;
								h.Qb = k
							} else h = g.B.transform(e.current.text, e.current.Db, c);
							ey(g.B, e.Ta + c) ? (e.Ta || (e.sa = xj(e.current)), e.Ta += c) : ey(g.B, c) ? (e.sa = xj(e.current), e.Ta = c) : (e.sa.text = "", e.sa.Db = -1, e.Ta = "");
							g = e.current.text;
							k = e.current.Db;
							h ? (g = g.slice(0, g.length - h.back), g += h.Qb, k = g.length) : (g += c, h = {
								back: 0,
								Qb: c
							});
							c = g.lastIndexOf(" ");
							0 <= c && (g = g.slice(c + 1), k = k > c ? k - (c + 1) : -1);
							e.current.text = g;
							e.current.Db = k
						} else h = null;
					else h = null;
					c = h
				} else c = {
					back: 0,
					Qb: c
				};
			else if (h = a.I.ab(20) || "", 1 < h.length ? (c = h.charCodeAt(h.length - 2), e = h.charCodeAt(h.length -
					1), c = 55296 <= c && 56319 >= c && 56320 <= e && 57343 >= e) : c = !1, c = {
					back: c ? 2 : 1,
					Qb: ""
				}, oy(a.M) && (g = c.back, e = my(a.M))) g = void 0 === g ? 1 : g, g = void 0 === g ? 1 : g, hy(e, h), h = e.A, h.current.text ? (h.current.text = h.current.text.slice(0, -g), h.current.Db > h.current.text.length && (h.current.Db = h.current.text.length), h.Ta && (h.Ta = h.Ta.slice(0, -1)), h.Ta || (h.sa = {
				text: "",
				Db: -1
			})) : (h.sa = {
				text: "",
				Db: -1
			}, h.Ta = "", h.current = xj(h.sa));
			if (8 == b && !d && K && Ln(11)) return !1;
			a.dispatchEvent(new vw("kcs", c.Qb));
			a.I.ib(c.Qb, c.back);
			a.dispatchEvent(new vw("kce",
				c.Qb));
			return !0
		},
		Oy = function (a) {
			Uy && (91 == a && xl || 224 == a && P) && (a = 18);
			a = Vy[a] || a;
			var b = Wy.en;
			b && (a = b[String.fromCharCode(a)] || a);
			return a
		},
		My = function (a) {
			var b = "";
			if (a & 1 || a & 256) b += "s";
			if (a & 2 && a & 4 || a & 512) b += "c";
			a & 8 && (b += "l");
			return b
		},
		Xy = function (a) {
			pu.call(this, a);
			this.B = new Ky(By, !1);
			this.I = [u, oe, v, Te];
			this.F = new T(this);
			this.B.U = to;
			this.F.H(this.B, ["kc", "kmi", "lld"], this.Hk);
			this.F.H(this.B, "kcs", this.gl);
			this.F.H(this.B, "kce", this.fl);
			this.F.H(to.A, [u, oe], this.ij)
		},
		Zy = function (a, b) {
			b = !Y && b;
			Ny(a.B,
				b);
			a.active && (Yy = b)
		},
		$y = function (a, b) {
			D(["bar", "vk", "hwt"], function (d) {
				var e = hp.fa(),
					g = new np(d);
				e.A[d] && e.A[d].da();
				e.A[d] = g
			});
			var c = [function () {
				Qu = a;
				return new hx(b)
			}, function () {
				return new Xy(b)
			}];
			Y || (K ? Ln(9) : mp()) && c.push(function () {
				return new $x(new ou, b)
			});
			return new su(c)
		},
		az = function (a, b, c) {
			O.call(this, a, c);
			this.value = b
		},
		cz = function (a) {
			pj(a, function (b, c) {
				switch (c) {
					case "EnableUserDictionary":
						Hu = b;
						break;
					case "ShowOnScreenKeyboard":
						Yy = b;
						break;
					case "ShowStatusBar":
						bz = b
				}
			});
			wo.fa().dispatchEvent(new az("psa",
				a))
		},
		dz = function () {
			return mp() && /\.(google|gmail|youtube)\./.test(Ap.location.host)
		},
		ez = function (a, b) {
			var c = b.target;
			b = {};
			if (c.Vd()) try {
				var d = JSON.parse(c.Bf());
				if (d && "OK" == d.header.error_code) {
					var e = d.body.data;
					for (d = 0; d < e.length; d++) {
						var g = e[d].item;
						b[g.key] = !!g.value[0].bool_value
					}
					a && a(b)
				}
			} catch (h) {}
		},
		fz = function (a) {
			if (dz()) {
				var b = [];
				pj(a, function (c, d) {
					b.push({
						key: d,
						value: [{
							bool_value: c
						}]
					})
				});
				a = xj(Zu);
				fu(pd + op, null, JSON.stringify({
					header: {
						method: "Update",
						service: "PrefService"
					},
					body: {
						user: {},
						client: "cloud",
						item: b
					}
				}), a)
			}
		},
		iz = function (a, b, c) {
			R.call(this);
			this.S = c || wo.fa();
			this.A = b || $y(gz(), this.S);
			this.J = !1;
			this.M = {};
			this.I = a ? a.shortcut : "";
			this.D = to;
			this.K = {
				kix: 1,
				punch: 1,
				trix: 1
			};
			this.C = new T(this);
			this.F = new dp(to.A);
			this.I && D(this.I.split(","), this.Gj, this);
			hz && !this.oh && (un(Pr(hz)), this.oh = !0);
			this.S.ra(this);
			xl && (this.B = this.D.G(sa), this.B || (this.B = this.D.P(f, {
				id: sa
			}), this.B.style.display = of , this.B.setAttribute(wa, !1), this.D.A.body.appendChild(this.B)), Cr(this.Cj, 0, this));
			a = {};
			Vs(Vb, (a[33] = !0, a));
			this.C.H(this.S, "uf", this.Xh);
			/^(kix|trix|punch)/.test(op) && [Vb, pc, Nb, ac, Rf, kf, zd].forEach(function () {
				var d = {};
				Vs(Vb, (d[10] = !1, d[29] = !1, d))
			})
		},
		jz = function (a, b) {
			if (Fi(b)) {
				var c = a.A.fc();
				aj(c, [lc, nb]);
				dj(c);
				D(b, function (d) {
					var e = this.M[Ji(d)];
					e && (delete this.M[Ji(d)], this.A.Oc(e), e.D && (e.I.tagName.toUpperCase() == ua || K && !gl(9) ? e.F.ka(e.D, c, e.pd, cp) : ps(e.D, c, e.pd, e)), this.I && D(this.I.split(","), function (g) {
						ss(e, g, "tita")
					}, this), e.da())
				}, a)
			}
		},
		lz = function (a, b, c) {
			if (c || !a.A.active || a.A.D != b) a.ob(wb, b, !0,
				c), a.J && a.ob("cd", it(b) ? $f : Je), a.B && (a.B.setAttribute(wa, !0), kz(a, "suc"));
			a.hi && /^(gmail|kix|punch|trix|youtube|blogger|orkut)/.test(op) && (a.hi = !1, dz() && (a = xj(Zu), fu(pd + op, Mi(ez, cz), JSON.stringify({
				header: {
					method: "Lookup",
					service: "PrefService",
					deadline: 10
				},
				body: {
					client: "cloud"
				}
			}), a)))
		},
		mz = function (a, b) {
			b = void 0 === b ? null : b;
			if (a.A.active || a.A.D != b) a.ob(wb, b, !1), !a.B || op in a.K || (a.B.setAttribute(wa, !1), kz(a, "rc"))
		},
		gz = function () {
			var a = new np("ppe"),
				b = hp.fa();
			b.A.ppe && b.A.ppe.da();
			b.A.ppe = a;
			return mp() ?
				new ou : new Tt
		},
		kz = function (a, b) {
			var c = a.D.G(ra);
			c && (a = a.D.A.createEvent("Event"), a.initEvent(b, !0, !0), c.dispatchEvent(a))
		},
		nz = function () {
			this.B = [];
			this.D = !1
		},
		oz = function (a, b, c) {
			U.call(this, to);
			this.F = !0;
			this.K = a;
			this.N = b;
			this.R = !!c;
			this.J = new T(this)
		},
		pz = function () {
			Z.call(this, void 0, void 0, to);
			this.B = []
		},
		qz = function (a, b, c, d) {
			b = new oz(b, c, d);
			b.aa();
			Xi(a.B, b);
			return b
		},
		rz = function () {
			M.call(this);
			this.A = new T(this)
		},
		sz = function (a, b) {
			O.call(this, Ua);
			this.A = a;
			this.F = b
		},
		tz = function (a) {
			O.call(this, "vc");
			this.A = a
		},
		uz = function (a, b) {
			O.call(this, "ecd");
			this.F = a;
			this.A = bj(arguments, 1)
		},
		vz = function (a, b, c, d) {
			Z.call(this, void 0, void 0, d || to);
			this.C = a;
			this.K = b;
			this.J = {};
			this.X = [];
			this.ga = c;
			this.N = null;
			this.bc = !1;
			this.Z = !0;
			this.B = new T(this);
			this.ca = new rz
		},
		wz = function (a, b, c) {
			var d = a.A.P("LI", {
				"class": Ud,
				style: yg
			});
			Xi(a.X, {
				se: d,
				className: Vd
			});
			var e = a.A.P(n, {
				"class": "ita-kd-menuitem-setting ita-kd-menuitem-span"
			}, b);
			a.A.appendChild(d, e);
			c && S(d, !1);
			a.J[b] = {
				name: e
			};
			return d
		},
		xz = function (a, b) {
			a.rf();
			V(b, Vd)
		},
		zz = function (a) {
			a = Ll(yz(a));
			if (!a || 0 == a.length) return null;
			for (var b = 0; b < a.length; b++) {
				var c = a[b];
				if (Kp(c, Vd)) return c
			}
			return null
		},
		Az = function (a) {
			a.la(!1);
			a.dispatchEvent(new tz(!1))
		},
		yz = function (a) {
			return Y ? a.G().firstChild : a.G()
		},
		Bz = function (a, b, c, d) {
			co.call(this, a, b);
			this.D = c ? 5 : 0;
			this.C = d || void 0
		},
		Cz = function (a, b) {
			a & 48 && (b ^= 4);
			a & 192 && (b ^= 1);
			return b
		},
		Dz = function (a, b) {
			uo.call(this, b);
			this.C = a;
			this.T = this.qa = this.B = this.K = this.F = this.Z = this.ca = this.ba = null
		},
		Ez = function (a) {
			a.B && !Y && (new Bz(a.G(),
				a.Y ? 13 : 9, !0)).Ga(a.B.G(), a.Y ? 12 : 8)
		},
		Fz = function (a) {
			O.call(this, "ita_l");
			this.l10n = a
		},
		Jz = function (a) {
			var b;
			b || (b = Gz[op]);
			a = Hz(a);
			var c = [];
			(a = Iz[a]) && D(a, function (d) {
				b && E(up(d, 6), b) || c.push(up(d, 2))
			});
			return c
		},
		Kz = function () {
			var a = [];
			pj(Iz, function (b, c) {
				a.push(c)
			});
			return a
		},
		Hz = function (a) {
			a = a.replace(/_/g, "-").toLowerCase();
			if (0 == a.indexOf("zh-tw")) return "zh-Hant";
			if (0 == a.indexOf("zh-hk")) return Nh;
			if ("zh" == a || 0 == a.indexOf("zh-cn")) return Oh;
			if ("pt" == a) return Ef;
			var b = a.split(/[\-]/g),
				c = "";
			a = b[0];
			"iw" == a && (a = bd);
			Iz[a] && (c = a);
			for (var d = 1; d < b.length; d++) {
				var e = b[d];
				2 == e.length ? e = e.toUpperCase() : 4 == e.length && (e = e.charAt(0).toUpperCase() + e.slice(1));
				a += "-" + e;
				Iz[a] && (c = a)
			}
			return c
		},
		Oz = function (a) {
			M.call(this);
			this.B = (a = Hz(a)) || q;
			this.D = {};
			var b = E(Lz, this.B) ? this.B : q;
			a = Js(Yj(Mz, {
				langCode: b || this.B
			}));
			var c = B(this.Qh, this);
			As(a, c, null, void 0);
			c = B(this.hl, this);
			As(a, null, c, void 0);
			a = Js(Yj(Nz, {
				langCode: b || this.B
			}));
			b = B(this.Sh, this);
			As(a, b, null, void 0);
			b = B(this.kl, this);
			As(a, null, b, void 0)
		},
		Pz = function (a,
			b) {
			var c = a.D[b];
			!c && (b = et(b)) && (b = b.A, b = Hz(b), c = a.D[b], c || (b = b.split("_")[0], c = a.D[b]));
			return c || ""
		},
		Qz = function (a) {
			if (google.ime.l10n.Messages && a) {
				var b = "MSG_" + a.replace(/\s/g, "_").toUpperCase();
				if (b = google.ime.l10n.Messages[b]) return b
			}
			return a
		},
		Rz = function () {
			M.call(this);
			this.A = {}
		},
		Uz = function (a) {
			M.call(this);
			a && (void 0 !== a.kbdHelpUrl && (By = a.kbdHelpUrl), void 0 !== a.kbdMinMax && (Cy = !!a.kbdMinMax), void 0 !== a.keyboardDefaultLocation && (sy = a.keyboardDefaultLocation), void 0 !== a.handwritingDefaultLocation &&
				(Vx = a.handwritingDefaultLocation), void 0 !== a.showStatusBar && (bz = !!a.showStatusBar), void 0 !== a.onScreenKeyboard && (Yy = !!a.onScreenKeyboard), void 0 !== a.enableUserDict && (Hu = !!a.enableUserDict), void 0 !== a.applicationName && (op = a.applicationName), void 0 !== a.enableGlobalEventDelegate && (Sz = !!a.enableGlobalEventDelegate), void 0 !== a.multipleInstance && (this.I = !!a.multipleInstance), void 0 !== a.mobile && (Y = !!a.mobile));
			this.C = [];
			this.I ? (this.B = new R, wo.fa(), xo.push(this.B)) : this.B = wo.fa();
			this.A = new nz;
			this.F = new T(this);
			this.D = new iz(a, void 0, this.B);
			this.M = [];
			this.F.H(this.B, "kc", this.Lh).H(this.B, "kmi", this.ml).H(this.B, lc, this.Jj).H(this.B, "ecd", this.Tk).H(this.D, "tt", this.Cl).H(this.B, "g", this.Lh).H(this.B, Ua, B(this.vl, this)).H(this.B, "bind", B(this.wl, this)).H(this.B, "visi", B(this.xl, this)).H(this.B, "slc", this.ti);
			Tz(this);
			this.I = !1
		},
		Xz = function (a, b, c) {
			b = {
				type: "citc",
				prevInputToolName: b,
				prevInputToolActive: c,
				currInputToolName: a.A.A.code,
				currInputToolActive: a.A.D
			};
			if (0 < a.C.length) {
				c = [];
				for (var d = 0; d < a.C.length; ++d) null !=
					a.C[d].id && Xi(c, a.C[d].id);
				b.attachedElements = c
			}
			a.B.dispatchEvent(b);
			b = a.A.A.code;
			a = a.A.D;
			if (Vz != b || Wz != a) Vz = b, Wz = a, ms.dispatchEvent(new O("b"))
		},
		Yz = function (a) {
			a.B.dispatchEvent({
				type: "itlu",
				inputTools: a.A.B
			})
		},
		Zz = function (a, b) {
			var c = a.A,
				d = [];
			aj(d, b);
			b = c.B.length;
			D(d, function (e) {
				(e = et(e)) && (!Y || "hw" != e.type && "vo" != e.type) && (e.type == Eh ? this.D.ob("ll", e.Lb) : "im" == e.type && this.D.ob("lc", e.code), Xi(c.B, e))
			}, a);
			!c.A && 0 < c.B.length && (c.A = c.B[0]);
			c.B.length > b && (Tz(a), Yz(a))
		},
		$z = function (a, b) {
			var c = a.A,
				d = [];
			aj(d, b);
			var e = [];
			D(d, function (g) {
				(g = et(g)) && (!Y || "hw" != g.type && "vo" != g.type) && e.push(g)
			}, a);
			hj(e, c.B) || (Wi(c.B), D(e, function (g) {
				g && (g.type == Eh ? this.D.ob("ll", g.Lb) : "im" == g.type && this.D.ob("lc", g.code), Xi(c.B, g), c.A && c.A.code == g.code && (c.A = g))
			}, a), c.A && E(c.B, c.A) || (c.A = 0 < c.B.length ? c.B[0] : null, c.D = !1), Tz(a), Yz(a))
		},
		aA = function (a) {
			var b = [];
			aj(b, "contenteditable-root");
			D(b, function (c) {
				(c = pl(document, c)) && Xi(this.C, c)
			}, a);
			Tz(a);
			a.B.dispatchEvent({
				type: "pelu",
				elements: a.C
			})
		},
		Tz = function (a) {
			0 == a.C.length || a.D.register(a.C);
			0 == a.M.length || jz(a.D, a.M);
			bA(a, a.A.D, a.A.A)
		},
		bA = function (a, b, c) {
			if (!b || c && et(c.code)) {
				b ? lz(a.D, c, void 0) : mz(a.D, c || a.A.A);
				var d = a.A.A,
					e = d ? d.code : null,
					g = a.A.D;
				a.A.A = c;
				a.A.D = b;
				d == a.A.A && g == a.A.D || Xz(a, e, g)
			}
		},
		cA = function (a, b) {
			var c = void 0 === c ? !0 : c;
			if (b = et(b)) E(a.A.B, b) || Zz(a, b.code), bA(a, c, b)
		},
		dA = function (a, b) {
			O.call(this, "D");
			this.A = a;
			this.back = b || 0
		},
		eA = function (a, b) {
			O.call(this, "E");
			this.value = a;
			this.A = b
		},
		fA = function () {
			var a = "en".match(/^\w{2,3}([-_]|$)/);
			return a ? a[0].replace(/[_-]/g, "") : ""
		},
		gA =
		function () {},
		hA = function (a, b) {
			a && (b ? a.title = b : a.removeAttribute("title"))
		},
		iA = function () {},
		jA = function (a, b, c) {
			Hv.call(this, a, b || iA.fa(), c)
		},
		kA = function () {},
		lA = function (a, b, c, d, e) {
			U.call(this, d);
			this.ra(e || null);
			this.T = b || 12;
			this.N = c || 10;
			this.B = [];
			this.K = [];
			this.F = new T(this);
			this.R = a;
			this.start = 0;
			this.C = -1
		},
		mA = function (a, b) {
			0 <= a.C && a.B[a.C].ua(!1);
			a.C = Vi(a.B, b);
			b.ua(!0);
			b.G().focus();
			a.dispatchEvent(new eA(b.ma(), b.G()))
		},
		nA = function (a) {
			a.B && 0 < a.B.length && mA(a, a.B[0])
		},
		oA = function (a, b) {
			a.Ea(!0);
			Vl(a.G(), !0);
			a.ua(!1);
			a.Hf(b);
			Ul(a.G(), b);
			a.G().setAttribute("char", b)
		},
		qA = function (a) {
			return "de" == fA() ? Kl(a, function (b) {
				return !b.match(pA)
			}) : a
		},
		rA = function (a, b) {
			for (var c = 0, d; d = a.B[c++];) a.F.ka(d, Yb, a.Jh), a.F.ka(d, "leave", a.Kh);
			b = b || a.K;
			a.R && (b = a.R(b));
			b = qA(b);
			a.K = b;
			a.start = 0;
			c = Math.min(b.length - 0, a.B.length);
			for (d = 0; d < c; d++) oA(a.B[d], b[d + 0]);
			for (d = c; d < a.B.length; d++) {
				var e = a.B[d];
				e.ua(!1);
				Ul(e.G(), "");
				e.Ea(!1)
			}
			for (; c < b.length - 0; c++) d = a, e = new jA(" ", kA.fa(), d.A), e.Rc |= 32, d.J.tb(e, !0), e.Ea(!1), e.G().removeAttribute(Zf),
				d.B.push(e), oA(e, b[c + 0]);
			for (b = 0; c = a.B[b++];) a.F.H(c, Yb, a.Jh), a.F.H(c, "leave", a.Kh)
		},
		sA = function (a, b, c) {
			var d = 0;
			0 <= a.C && (d = a.C + c + b * a.N);
			c = Math.min(a.K.length - a.start, a.B.length);
			0 <= d && d < c && (0 <= a.C && a.B[a.C].ua(!1), a.C = d, d = a.B[d], d.G().focus(), mA(a, d));
			0 == b ? b = !0 : (d = a.J.G(), d = a.K.length / a.N * (d.scrollTop / d.scrollHeight), c = d + a.T, a = a.C / a.N, b = (b = 0 > b) && a <= d || !b && a >= c ? !1 : !0);
			return b
		},
		tA = function (a, b) {
			O.call(this, "B");
			this.A = a;
			this.F = b
		},
		uA = function () {
			if (!this.A) {
				this.A = {};
				for (var a = 0; 89 > a; a++) this.A["0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%()*+,-.:;<=>?@[]^_`{|}~".charAt(a)] =
					a
			}
		},
		vA = function (a, b) {
			for (var c = [], d = 0, e = 0; e < b.length;) {
				var g = a.A[b.charAt(e)] % 8,
					h = Math.floor(g / 3);
				g = g % 3 + 1;
				3 == g && g++;
				for (var k = 0, l = 0; l < g; l++) k += a.A[b.charAt(e + l)] * Math.pow(88, l);
				l = c;
				k = Math.floor(k / 8);
				if (0 == h) d += k + 1, aj(l, Rr(d));
				else if (1 == h) d -= k + 1, aj(l, Rr(d));
				else if (2 == h)
					for (h = 0; h <= k; h++) d++, aj(l, Rr(d));
				e += g
			}
			return c
		},
		wA = function () {},
		xA = function (a) {
			M.call(this);
			this.B = new du;
			this.A = new du;
			this.I = a;
			this.D = new Map
		},
		zA = function (a, b, c) {
			b = Sr(b).toString(16);
			a.D.has(b) ? (a = a.D.get(b), c(a)) : (a.A.Be() && a.A.abort(),
				a.C && Km(a.C), c = B(a.M, a, b, c), a.C = ym(a.A, Cb, c), yA(a, "c", b, a.A))
		},
		AA = function (a, b) {
			if (b.Vd()) {
				if (b.A) b: {
					b = b.A.responseText;
					if (A.JSON) try {
						var c = A.JSON.parse(b);
						break b
					} catch (e) {}
					c = Yt(b)
				}
				else c = void 0;
				for (var d in c) c[d].hasOwnProperty("name") && a.D.set(d, c[d].name)
			}
		},
		yA = function (a, b, c, d) {
			a = new Dt(a.I);
			a.B.set(b, c);
			a.B.set("p", "name");
			d.Ce(a)
		},
		BA = function (a, b) {
			this.data = a;
			this.B = b;
			this.A = new uA
		},
		DA = function () {
			if (!CA) {
				var a = new wA,
					b = new xA("//i18n-cloud.appspot.com/cproperties");
				CA = new BA(a, b)
			}
			return CA
		},
		EA = function (a) {
			R.call(this);
			this.A = a;
			a = K ? nc : nb;
			this.B = Q(this.A, K ? mc : lc, this, !K);
			this.D = Q(this.A, a, this, !K)
		},
		FA = function (a, b) {
			this.A = a instanceof H ? a : new H(a, b)
		},
		GA = function (a) {
			this.A = new st;
			if (a) {
				a = yt(a);
				for (var b = a.length, c = 0; c < b; c++) this.add(a[c])
			}
		},
		HA = function (a) {
			var b = typeof a;
			return b == rf && a || b == t ? "o" + Ji(a) : b.substr(0, 1) + a
		},
		IA = function (a, b) {
			var c = xt(b);
			if (a.vb() > c) return !1;
			!(b instanceof GA) && 5 < c && (b = new GA(b));
			return Ct(a, function (d) {
				var e = b;
				return e.contains && typeof e.contains == t ? e.contains(d) :
					e.zd && typeof e.zd == t ? e.zd(d) : Fi(e) || typeof e === x ? E(e, d) : uj(e, d)
			})
		},
		JA = function (a, b) {
			R.call(this);
			this.B = new T(this);
			this.gf(a || null);
			b && (this.jd = b)
		},
		LA = function (a, b) {
			a.$ && a.$.stop();
			a.N && a.N.stop();
			if (b) {
				if (!a.nd && a.pg()) {
					if (!a.gb) throw Error("Caller must call setElement before trying to show the popup");
					a.Ne();
					b = I(a.gb);
					a.B.H(b, Te, a.Nh, !0);
					if (K) {
						try {
							var c = b.activeElement
						} catch (e) {}
						for (; c && c.nodeName == ua;) {
							try {
								var d = Tl(c)
							} catch (e) {
								break
							}
							b = d;
							c = b.activeElement
						}
						a.B.H(b, Te, a.Nh, !0);
						a.B.H(b, "deactivate",
							a.Mh)
					} else a.B.H(b, nb, a.Mh);
					a.jd == Wg ? (a.gb.style.visibility = Bh, S(a.gb, !0)) : a.jd == Xe && a.Ne();
					a.nd = !0;
					a.cg = Ni();
					a.$ ? (ym(a.$, "end", a.Me, !1, a), a.$.play()) : a.Me()
				}
			} else KA(a)
		},
		KA = function (a, b) {
			a.nd && a.dispatchEvent({
				type: "beforehide",
				target: b
			}) && (a.B && ao(a.B), a.nd = !1, a.N ? (ym(a.N, "end", Mi(a.Hg, b), !1, a), a.N.play()) : a.Hg(b))
		},
		MA = function (a, b) {
			return Bs(a.Eg || [], function (c) {
				return b === c || Ol(c, b)
			})
		},
		NA = function (a, b) {
			this.U = b || void 0;
			JA.call(this, a)
		},
		OA = function (a, b) {
			a.U = b || void 0;
			a.isVisible() && a.Ne()
		},
		QA =
		function (a, b, c) {
			this.D = c || (a ? J(pl(document, a)) : J());
			NA.call(this, this.D.P(f, {
				style: "position:absolute;display:none;"
			}));
			this.I = new H(1, 1);
			this.C = new GA;
			this.M = null;
			a && PA(this, a);
			null != b && Ul(this.G(), b)
		},
		PA = function (a, b) {
			b = pl(document, b);
			a.C.add(b);
			Q(b, w, a.Oe, !1, a);
			Q(b, Ve, a.ld, !1, a);
			Q(b, Ue, a.kd, !1, a);
			Q(b, lc, a.Vg, !1, a);
			Q(b, nb, a.ld, !1, a)
		},
		SA = function (a, b) {
			if (b) b = pl(document, b), RA(a, b), wt(a.C.A, HA(b));
			else {
				for (var c = a.C.Ka(), d = 0; b = c[d]; d++) RA(a, b);
				a = a.C.A;
				a.B = {};
				a.A.length = 0;
				a.D = 0;
				a.C = 0
			}
		},
		RA = function (a,
			b) {
			Jm(b, w, a.Oe, !1, a);
			Jm(b, Ve, a.ld, !1, a);
			Jm(b, Ue, a.kd, !1, a);
			Jm(b, lc, a.Vg, !1, a);
			Jm(b, nb, a.ld, !1, a)
		},
		TA = function (a) {
			return a.K ? a.isVisible() ? 4 : 1 : a.J ? 3 : a.isVisible() ? 2 : 0
		},
		UA = function (a, b) {
			var c = wl(a.D.A);
			a.I.x = b.clientX + c.x;
			a.I.y = b.clientY + c.y
		},
		VA = function (a, b) {
			try {
				for (; b && !a.C.contains(b);) b = b.parentNode;
				return b
			} catch (c) {
				return null
			}
		},
		XA = function (a) {
			if (a.A)
				for (var b, c = 0; b = WA[c]; c++) Ol(b.G(), a.A) && (b.S = a, a.qa = b)
		},
		YA = function (a, b, c) {
			a.K || (a.K = Cr(B(a.eg, a, b, c), 500))
		},
		ZA = function (a) {
			a.K && (Dr(a.K), a.K = void 0)
		},
		$A = function (a, b) {
			FA.call(this, a, b)
		},
		aB = function (a) {
			co.call(this, a, 5)
		},
		bB = function (a, b, c) {
			QA.call(this, a, b, c)
		},
		cB = function (a, b) {
			if (a.Y && a.Y.contains(b) || a.Se(b)) return !0;
			a = a.S;
			return !!a && a.Se(b)
		},
		dB = function (a, b, c, d) {
			QA.call(this, null, null, c);
			typeof a === t ? this.Zf = a : this.ca = a;
			this.Ia = 0 != b;
			this.Z = [];
			this.ga = d || (c ? c.A : document);
			Q(this.ga, w, this.ih, !1, this)
		},
		gB = function (a, b) {
			if (b == a.F) a.Ac();
			else if (b != a.A) {
				if (1 == TA(a) || 4 == TA(a)) ZA(a), eB(a);
				var c = new fB("trigger", a, b, void 0);
				a.C.contains(b) || (PA(a, b),
					a.Z.push(b));
				a.A = b;
				a.dispatchEvent(c) ? YA(a, b, a.U || null) : eB(a)
			}
		},
		hB = function (a, b) {
			if (b) {
				var c = Vi(a.Z, b); - 1 != c && (SA(a, b), a.Z.splice(c, 1))
			}
		},
		eB = function (a) {
			a.dispatchEvent(new fB("canceltrigger", a, a.A || null));
			hB(a, a.A);
			delete a.A
		},
		fB = function (a, b, c, d) {
			O.call(this, a, b);
			this.data = d
		},
		iB = function (a) {
			U.call(this, a);
			this.J = new T(this);
			this.F = DA()
		},
		kB = function (a, b, c) {
			Ul(a.N, jB(a, b));
			Ul(a.K, "U+" + Qr(Sr(b).toString(16).toUpperCase()));
			Ul(a.C, "");
			zA(a.F.B, b, function (d) {
				var e = "U+" + Qr(Sr(b).toString(16).toUpperCase());
				d && c && (Ul(a.C, d), X(c, ye, d + " " + e), c.focus())
			})
		},
		jB = function (a, b) {
			return a.R.has(b) ? "\u00a0" : b
		},
		lB = function () {},
		mB = function (a, b, c) {
			Hv.call(this, a, c || lB.fa(), b);
			this.Na(1, !1);
			this.Na(2, !1);
			this.Na(4, !1);
			this.Na(32, !1);
			this.qc = 1
		},
		nB = function () {
			this.B = []
		},
		oB = function (a, b) {
			var c = a.B[b];
			if (!c) {
				switch (b) {
					case 0:
						c = a.ia() + "-highlight";
						break;
					case 1:
						c = a.ia() + "-checkbox";
						break;
					case 2:
						c = a.ia() + ba
				}
				a.B[b] = c
			}
			return c
		},
		pB = function (a, b, c) {
			a = oB(a, 2);
			return c.P(f, a, b)
		},
		qB = function (a, b) {
			return (b = a.Pa(b)) ? (b = b.firstChild,
				a = oB(a, 1), !!b && Nl(b) && Kp(b, a)) : !1
		},
		rB = function (a, b, c, d) {
			Av(a, c, b.Nd());
			Dv(a, b, c);
			d != qB(a, c) && (d ? V(c, Qc) : W(c, Qc), c = a.Pa(c), d ? (a = oB(a, 1), c.insertBefore(b.A.P(f, a), c.firstChild || null)) : c.removeChild(c.firstChild))
		},
		sB = function (a, b, c, d) {
			Hv.call(this, a, d || nB.fa(), c);
			this.yc = b
		},
		tB = function () {},
		uB = function (a, b) {
			Hv.call(this, null, a || tB.fa(), b);
			this.Na(1, !1);
			this.Na(2, !1);
			this.Na(4, !1);
			this.Na(32, !1);
			this.qc = 1
		},
		vB = function (a) {
			this.A = a || "menu"
		},
		wB = function (a) {
			uB.call(this, tB.fa(), a)
		},
		xB = function (a, b) {
			Z.call(this,
				wh, b || vB.fa(), a);
			Xv(this, !1)
		},
		yB = function (a, b, c, d) {
			Bz.call(this, a, b, c || d);
			(c || d) && this.F(65 | (d ? 32 : 132))
		},
		zB = function () {},
		AB = function (a, b) {
			if (a)
				for (var c = b ? a.firstChild : a.lastChild, d; c && c.parentNode == a;) {
					d = b ? c.nextSibling : c.previousSibling;
					if (3 == c.nodeType) {
						var e = c.nodeValue;
						if ("" == kj(e)) a.removeChild(c);
						else {
							c.nodeValue = b ? e.replace(/^[\s\xa0]+/, "") : e.replace(/[\s\xa0]+$/, "");
							break
						}
					} else break;
					c = d
				}
		},
		BB = function () {},
		CB = function () {
			this.B = []
		},
		EB = function (a, b, c) {
			var d = b.A.P(n);
			d.className = Tc;
			DB(b, d);
			a.Pa(c).appendChild(d)
		},
		DB = function (a, b) {
			no(a) ? (V(b, Uc), Ul(b, "\u25c4")) : (W(b, Uc), Ul(b, "\u25ba"))
		},
		FB = function (a, b, c, d) {
			sB.call(this, a, b, c, d || CB.fa())
		},
		GB = function (a) {
			a.Bd && Dr(a.Bd);
			a.Bg && Dr(a.Bg)
		},
		HB = function (a) {
			ro(a.Ha(), function (b) {
				b != this && typeof b.Tb == t && (b.Tb(), GB(b))
			}, a)
		},
		JB = function (a, b) {
			!b && IB(a) && IB(a).qb(-1);
			a.dispatchEvent(go(64, b));
			var c = IB(a);
			if (b != a.fg) {
				var d = a.G();
				b ? V(d, Vc) : W(d, Vc)
			}
			if (b != c.isVisible() && (b && (c.ea || c.aa(), c.qb(-1)), c.la(b), b)) {
				c = new Bz(a.G(), 12, !1);
				d = IB(a);
				var e = d.G();
				d.isVisible() || (e.style.visibility =
					hd, S(e, !0));
				c.Ga(e, 8);
				d.isVisible() || (S(e, !1), e.style.visibility = Bh)
			}
			a.fg = b
		},
		KB = function (a, b, c) {
			var d = jo(a);
			(c ? d.H : d.ka).call(d, b, Yb, a.Qk)
		},
		IB = function (a) {
			a.Ca ? a.te && a.Ca.Ha() != a && lo(a.Ca, a) : a.cc(new xB(a.A), !0);
			a.Ca.G() || a.Ca.W();
			return a.Ca
		},
		MB = function (a, b, c, d, e) {
			jA.call(this, a, c || BB.fa(), d);
			this.Na(64, !0);
			this.F = new yB(null, 9);
			b && this.cc(b);
			this.T = new Br(500);
			!LB && !kp || G("533.17.9") || (this.Ue = !0);
			this.Ub = e || vB.fa()
		},
		NB = function (a) {
			a.B || a.cc(new xB(a.A, a.Ub));
			return a.B || null
		},
		OB = function (a) {
			a =
				a.F.B;
			return 9 == a || 8 == a
		},
		PB = function (a) {
			return a.F.I && !!(a.F.D & 32)
		},
		QB = function (a, b, c) {
			var d = jo(a);
			c = c ? d.H : d.ka;
			c.call(d, b, Ua, a.Sf);
			c.call(d, b, "close", a.Oi);
			c.call(d, b, jd, a.Pi);
			c.call(d, b, mh, a.Qi)
		},
		RB = function (a, b) {
			var c = jo(a);
			(b ? c.H : c.ka).call(c, a.G(), u, a.jj)
		},
		SB = function (a, b) {
			a = a.G();
			var c = Lr(b, Va);
			b = I(b).getElementById(c) || b;
			b.id || (c = eo.fa(), b.id = ":" + (c.A++).toString(36));
			Mr(a, b);
			X(a, "owns", b.id)
		},
		TB = function () {},
		UB = function (a, b, c) {
			return c.P(f, Ic + (a.ia() + aa), b)
		},
		VB = function (a, b) {
			return b.P(f, {
				"class": Ic + (a.ia() + da),
				"aria-hidden": !0
			}, "\u00a0")
		},
		XB = function (a) {
			R.call(this);
			this.A = [];
			WB(this, a)
		},
		WB = function (a, b) {
			b && (D(b, function (c) {
				YB(c, !1)
			}, a), aj(a.A, b))
		},
		ZB = function (a, b, c) {
			b && (YB(b, !1), cj(a.A, c, 0, b))
		},
		$B = function (a) {
			var b = a.B;
			return b ? Vi(a.A, b) : -1
		},
		aC = function (a) {
			Wi(a.A);
			a.B = null
		},
		YB = function (a, b) {
			a && typeof a.xg == t && a.xg(b)
		},
		bC = function (a, b, c, d, e) {
			MB.call(this, a, b, c, d, e || new vB("listbox"));
			this.Z = this.eb;
			this.ca = null;
			this.Mf = "listbox"
		},
		dC = function (a, b) {
			if (a.pa) {
				var c = cC(a),
					d = a.pa;
				b != d.B &&
					(YB(d.B, !1), d.B = b, YB(b, !0));
				d.dispatchEvent("select");
				b != c && a.dispatchEvent("change")
			}
		},
		eC = function (a, b) {
			a.pa && dC(a, a.pa.A[b] || null)
		},
		cC = function (a) {
			return a.pa ? a.pa.B : null
		},
		fC = function (a) {
			return a.pa ? $B(a.pa) : -1
		},
		iC = function (a, b) {
			a.pa = new XB;
			b && ro(b, function (c) {
				gC(c);
				var d = this.pa;
				ZB(d, c, d.A.length)
			}, a);
			hC(a)
		},
		hC = function (a) {
			a.pa && jo(a).H(a.pa, "select", a.Si)
		},
		kC = function (a) {
			var b = cC(a);
			a.hd(b ? b.Hb() : a.Z);
			var c = a.C.Pa(a.G());
			c && a.A.Dj(c) && (null == a.ca && (a.ca = Lr(c, ye)), b = (b = b ? b.G() : null) ? Lr(b, ye) : a.ca,
				X(c, ye, b), jC(a))
		},
		jC = function (a) {
			var b = a.C;
			if (b && (b = b.Pa(a.G()))) {
				var c = a.D;
				b.id || (b.id = ":" + (eo.fa().A++).toString(36));
				Jr(b, "option");
				X(b, hg, !0);
				X(c, Va, b.id);
				a.pa && (c = $i(a.pa.A), X(b, "setsize", lC(c)), a = $B(a.pa), X(b, "posinset", 0 <= a ? lC(bj(c, 0, a + 1)) : 0))
			}
		},
		lC = function (a) {
			return Si(a, function (b) {
				return b instanceof sB
			})
		},
		gC = function (a) {
			a.Mf = a instanceof sB ? "option" : ig
		},
		nC = function (a, b, c) {
			bC.call(this, a, b, TB.fa(), c);
			this.R = new mC(1E3);
			hm(this, this.R)
		},
		oC = function (a) {
			var b = Yv(NB(a));
			b && mn(b.G(), NB(a).Bb())
		},
		pC = function (a, b, c) {
			var d = Cv(a, 64) ? NB(a).na : fC(a);
			b = new RegExp("^" + Vk(b), "i");
			c || ++d;
			d = 0 > d ? 0 : d;
			for (var e = NB(a), g = 0, h = po(e); g < h; ++g) {
				c = (d + g) % h;
				var k = qo(e, c),
					l = k.Hb();
				if (k.isEnabled() && l && b.test(l)) {
					b = c;
					Cv(a, 64) ? (NB(a).qb(b), oC(a)) : eC(a, b);
					break
				}
			}
		},
		mC = function (a) {
			M.call(this);
			this.D = new Nr(this.C, a, this);
			hm(this, this.D)
		},
		rC = function (a) {
			M.call(this);
			this.A = a;
			this.B = new T(this);
			this.B.H(a, jd, this.Yk);
			this.B.H(a, Yb, this.Ei);
			this.B.H(a, Xa, this.Lk);
			this.B.H(a, id, this.Xk);
			qC(this, !0)
		},
		qC = function (a, b) {
			var c =
				Yv(a.A);
			a.A.isVisible() && c && c != a.Wd && (mn(c.G(), a.A.G(), b), sC(a), a.Wd = null)
		},
		sC = function (a) {
			a.tf = !0;
			Cr(function () {
				this.tf = !1
			}, 0, a)
		},
		tC = function (a, b) {
			U.call(this, a);
			this.ra(b || null);
			this.F = null;
			this.X = this.T = 0;
			this.R = DA();
			this.U = new T(this);
			this.Y = new vx(a)
		},
		uC = function (a, b, c) {
			b = new sB(c, b, a.A);
			b.Ea(!0);
			a.U.H(b, Yb, B(a.jl, a, c));
			return b
		},
		wC = function (a, b, c) {
			a.T = b;
			for (a.N.hd(a.R.data.A[b]); oo(a.C);) {
				var d = a.C;
				d.Kd(qo(d, 0), !0).da()
			}
			b = a.R.data.B[b];
			for (d = 0; d < b.length; d++) {
				var e = uC(a, d, b[d]);
				a.C.tb(e, !0)
			}
			vC(a,
				c)
		},
		vC = function (a, b) {
			a.X = b;
			a.J.hd(a.R.data.B[a.T][b]);
			a.J.Ea(!0);
			a.dispatchEvent(new tA(a.T, b))
		},
		xC = function (a) {
			O.call(this, "G");
			this.A = a
		},
		yC = function (a, b) {
			tC.call(this, a, b);
			this.ra(b || null);
			this.B = new xB(this.A);
			this.K = new nC("Categories", this.B, this.A)
		},
		BC = function (a, b) {
			a.K.hd(zC[b]);
			AC(a, b);
			0 != b ? (a.N.Ea(!1), a.J.Ea(!1)) : (a.N.Ea(!0), a.J.Ea(!0));
			a.dispatchEvent(new xC(b))
		},
		AC = function (a, b) {
			a.K.Ea(!0);
			(b = qo(a.B, b)) && b.Ea(!0);
			(b = qo(a.B, 0)) && b.Ea(!0)
		},
		CC = function (a) {
			O.call(this, "H");
			this.A = a
		},
		EC = function () {
			M.call(this);
			this.A = new lt(DC)
		},
		FC = function (a, b, c) {
			U.call(this, b);
			this.ra(c || null);
			this.C = DA();
			this.B = new lA(a, 12, 10, this.A, this)
		},
		GC = function (a, b) {
			Z.call(this, void 0, void 0, a);
			this.ra(b || null);
			this.F = new T(this);
			this.C = null;
			this.B = new Jx(this.A.A, this.A, this)
		},
		HC = function (a, b) {
			U.call(this, b);
			this.C = a || ""
		},
		JC = function () {
			null == IC && (IC = "placeholder" in Cl(document, va));
			return IC
		},
		KC = function (a) {
			!a.F && a.B && a.G().form && (a.B.H(a.G().form, "submit", a.hj), a.F = !0)
		},
		LC = function (a) {
			return !!a.G() && "" != a.G().value && a.G().value !=
				a.C
		},
		MC = function (a) {
			var b = a.G();
			JC() ? a.G().placeholder != a.C && (a.G().placeholder = a.C) : KC(a);
			X(b, ye, a.C);
			LC(a) ? (b = a.G(), W(b, ze)) : (a.J || a.Sd || (b = a.G(), V(b, ze)), JC() || Cr(a.El, 10, a))
		},
		NC = function (a, b) {
			U.call(this, a);
			this.ra(b || null);
			this.J = "";
			this.B = new HC(La);
			this.F = new T(this);
			this.C = new Br(200)
		},
		OC = function (a) {
			var b = a.B.ma();
			a.J = b;
			a.dispatchEvent(new CC(b))
		},
		PC = function (a) {
			this.nb = new Map;
			var b = arguments.length;
			if (1 < b) {
				if (b % 2) throw Error(Qa);
				for (var c = 0; c < b; c += 2) this.set(arguments[c], arguments[c + 1])
			} else if (a)
				if (a instanceof PC)
					for (b = si(a.nb), c = b.next(); !c.done; c = b.next()) {
						var d = si(c.value);
						c = d.next().value;
						d = d.next().value;
						this.nb.set(c, d)
					} else if (a)
						for (b = si(Object.entries(a)), c = b.next(); !c.done; c = b.next()) d = si(c.value), c = d.next().value, d = d.next().value, this.nb.set(c, d)
		},
		VC = function (a, b) {
			var c = QC++,
				d = {
					Hj: {
						id: c,
						Vb: a.measure,
						context: b
					},
					Kk: {
						id: c,
						Vb: a.Jk,
						context: b
					},
					state: {},
					Ya: void 0,
					We: !1
				};
			return function () {
				0 < arguments.length ? (d.Ya || (d.Ya = []), d.Ya.length = 0, d.Ya.push.apply(d.Ya, arguments), d.Ya.push(d.state)) : d.Ya && 0 != d.Ya.length ?
					(d.Ya[0] = d.state, d.Ya.length = 1) : d.Ya = [d.state];
				d.We || (d.We = !0, RC[SC].push(d));
				TC || (TC = !0, window.requestAnimationFrame(UC))
			}
		},
		UC = function () {
			TC = !1;
			var a = RC[SC],
				b = a.length;
			SC = (SC + 1) % 2;
			for (var c, d = 0; d < b; ++d) {
				c = a[d];
				var e = c.Hj;
				c.We = !1;
				e.Vb && e.Vb.apply(e.context, c.Ya)
			}
			for (d = 0; d < b; ++d) c = a[d], e = c.Kk, c.We = !1, e.Vb && e.Vb.apply(e.context, c.Ya), c.state = {};
			a.length = 0
		},
		WC = function (a, b) {
			this.D = a;
			this.B = b
		},
		XC = function (a, b) {
			U.call(this, b);
			this.Ub = !!a;
			this.T = null;
			this.ub = VC({
				Jk: this.ff
			}, this)
		},
		ZC = function (a) {
			if (a.Ub &&
				!a.Ja) {
				var b = a.A.P(ua, {
					frameborder: 0,
					style: "border:0;vertical-align:bottom;"
				});
				b.src = Uj(YC).toString();
				a.Ja = b;
				a.Ja.className = a.Pd() + "-bg";
				S(a.Ja, !1);
				sn(a.Ja, 0)
			}
			a.Za || (a.Za = a.A.P(f, a.Pd() + "-bg"), S(a.Za, !1))
		},
		$C = function (a) {
			a.Cb || (a.Cb = Cl(a.A.A, n), S(a.Cb, !1), Vl(a.Cb, !0), a.Cb.style.position = Sa)
		},
		aD = function (a, b) {
			a.Ia || (a.Ia = new WC(a.D, a.A));
			a = a.Ia;
			if (b) {
				a.A || (a.A = []);
				b = a.B.xi(a.B.A.body);
				for (var c = 0; c < b.length; c++) {
					var d = b[c];
					d == a.D || Lr(d, hd) || (X(d, hd, !0), a.A.push(d))
				}
			} else if (a.A) {
				for (c = 0; c < a.A.length; c++) a.A[c].removeAttribute(bb);
				a.A = null
			}
		},
		bD = function (a, b) {
			a.Ja && S(a.Ja, b);
			a.Za && S(a.Za, b);
			S(a.G(), b);
			S(a.Cb, b)
		},
		gD = function (a, b, c) {
			XC.call(this, b, c);
			this.F = a || "modal-dialog";
			this.B = cD(cD(new dD, eD, !0), fD, !1, !0)
		},
		hD = function (a, b) {
			a.ne = b;
			a.G() && (b = a.ue()) && sn(b, a.ne)
		},
		iD = function (a) {
			a.ig = !1;
			if (a.ea) {
				var b = a.A,
					c = a.ue();
				b.yb(a.Ja);
				b.yb(c)
			}
			a.isVisible() && aD(a, !1)
		},
		jD = function (a, b) {
			var c = kj(a.F + "-title-draggable").split(" ");
			a.G() && (b ? Lp(a.Wa, c) : Mp(a.Wa, c));
			b && !a.ba ? (a.ba = new dv(a.G(), a.Wa), Lp(a.Wa, c), Q(a.ba, xg, a.Fl, !1, a)) : !b && a.ba &&
				(a.ba.da(), a.ba = null)
		},
		lD = function (a) {
			var b = a.B,
				c = b && b.B;
			c ? (b = b.get(c), a.dispatchEvent(new kD(c, b)) && a.fb(!1)) : a.fb(!1)
		},
		kD = function (a, b) {
			this.type = "dialogselect";
			this.key = a;
			this.caption = b
		},
		dD = function (a) {
			PC.call(this);
			a || J();
			this.B = this.A = this.D = null
		},
		cD = function (a, b, c, d) {
			return a.set(b.key, b.caption, c, d)
		},
		nD = function (a) {
			if (a.A) {
				Gk(a.A, mD);
				var b = J(a.A);
				a.forEach(function (c, d) {
					c = b.P(ha, {
						name: d
					}, c);
					d == this.D && (c.className = zc);
					this.A.appendChild(c)
				}, a)
			}
		},
		oD = function (a, b, c) {
			gD.call(this, void 0, void 0,
				a);
			this.ra(b || null);
			this.Sa = new T(this);
			this.ga = null;
			this.K = new NC(a, this);
			this.C = null;
			this.Fb = c || Kj;
			0 != this.ig && iD(this);
			this.B = null;
			this.Fa && (this.B ? (a = this.B, a.A = this.Fa, nD(a)) : Gk(this.Fa, mD), S(this.Fa, !!this.B))
		},
		pD = function (a, b, c) {
			R.call(this);
			this.A = new oD(b, this, c);
			this.I = new T(this);
			b = this.B = new ox(void 0, 100);
			b.D.itc = lh;
			b.M = b.A[lh];
			this.B.F = "universal";
			this.B.D.app = "hwtcharpicker";
			this.M = new EC;
			DA();
			this.C = a || [];
			this.F = [];
			this.I.H(this.A, "D", this.xk).H(this.A, "H", this.tl).H(this.A, "i", this.yk).H(this.B,
				"n", this.zk).H(this.A, "G", this.Vk).H(this.A, "C", this.wk).H(this.A, "F", this.vk)
		},
		qD = function (a) {
			a.Re || (a.A.aa(), a.Re = !0)
		},
		rD = function (a) {
			var b = a.A.N.B,
				c = kk(b.N, function (e) {
					return [kk(e, function (g) {
						return g.x
					}), kk(e, function (g) {
						return g.y
					}), kk(e, function (g) {
						return g.time
					})]
				}),
				d;
			a.D && (d = a.D.ab(20));
			qx(a.B, c, b.B.width / b.F, b.B.height / b.F, d)
		},
		sD = function (a, b) {
			M.call(this);
			this.F = document.getElementById(a);
			this.A = document.getElementById(b);
			this.D = new T(this);
			this.B = new pD;
			this.B.D = new qs(this.F);
			qD(this.B);
			a = this.B;
			a.Re && (qD(a), a.A.fb(!1));
			this.D.H(this.A, p, this.C).H(this.A, w, this.M).H(this.A, Ve, this.I);
			this.D.H(this.B, "C", this.C)
		},
		tD = function () {},
		uD = function (a) {
			a: {
				var b = a.changedTouches[0];
				switch (a.type) {
					case $g:
						var c = Te;
						break;
					case Zg:
						c = Ue;
						break;
					case Yg:
						c = We;
						break;
					default:
						b = null;
						break a
				}
				var d = document.createEvent("MouseEvent");d.initMouseEvent(c, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);b = d
			}
			null != b && (a.changedTouches[0].target.dispatchEvent(b), a.preventDefault())
		},
		wD = function (a, b) {
			vD && (b.addEventListener($g, uD, !0), b.addEventListener(Zg, uD, !0), b.addEventListener(Yg, uD, !0), b.addEventListener(Xg, uD, !0))
		},
		xD = function (a, b, c) {
			xB.call(this, b, c);
			this.B = a;
			this.R = [];
			this.X = [];
			this.C = null;
			this.F = [];
			this.K = [];
			this.U = Al(f, {
				id: "goog-menuitem-group-",
				"class": Mc
			});
			this.N = !1;
			this.J = 0
		},
		zD = function (a) {
			a.N = !0;
			yD(a);
			var b = a.G();
			Gl(b);
			var c = [],
				d = 0;
			var e = document.createElement("table");
			var g = e.insertRow(-1);
			for (var h = 0, k; k = a.K[h]; h++) {
				var l = g.insertCell(g.cells.length);
				l.appendChild(k);
				k.style.width = "100%";
				Kp(k, Gc) ? (c.push(l), g = e.insertRow(e.rows.length)) : d++
			}
			for (a = 0; g = c[a]; a++) g.setAttribute("colspan", d), g.colSpan = d;
			b.appendChild(e)
		},
		AD = function (a, b, c) {
			E(a.K, b.kb) || a.K.push(b.kb);
			qo(a, c + 1) && (b.kb = a.U.cloneNode(!0), b.kb.id += b.Hh, b.Hh++, b.Pe = 1);
			return b
		},
		yD = function (a) {
			a.K = [];
			a.F = [];
			var b = a.U.cloneNode(!0);
			b.id += 1;
			var c = {
				kb: b,
				Hh: 2,
				Pe: 1
			};
			ro(a, function (d, e) {
				c.kb.appendChild(d.G());
				this.F[e] = c.kb;
				c.Pe == this.B ? c = AD(this, c, e) : d instanceof sB && c.Pe++;
				E(this.X, e) && (W(c.kb, Mc), V(c.kb, Gc),
					this.F[e] = c.kb, c = AD(this, c, e))
			}, a);
			1 == c.Pe || E(a.K, c.kb) || a.K.push(c.kb)
		},
		BD = function (a) {
			a.J && (Dr(a.J), a.J = 0);
			a.J = Cr(function () {
				this.R = []
			}, 1E3, a)
		},
		CD = function (a, b, c) {
			sB.call(this, a, b, c);
			this.Na(8, !0)
		},
		FD = function (a, b, c, d, e, g, h, k, l) {
			c = new xD(c);
			bC.call(this, "", c, h, k);
			this.R = null;
			this.F.F && this.F.F(33);
			this.Sa = a;
			this.ub = a.id;
			io(c, this.ub + "-menu");
			this.U = [];
			this.ga = null != g ? g : "";
			this.Fb = !!l;
			for (a = 0; a < b.length; a++) g = void 0, h = null != d && a < d.length && null != d[a] ? d[a] : b[a], h != ig ? g = new CD(b[a], h) : g = new wB, this.Nf(g);
			this.Gc(this.Sa);
			DD(this, null != e ? e : ED(this, 0))
		},
		GD = function (a) {
			a.R && (Dr(a.R), a.R = null);
			a.R = Cr(function () {
				a.U = []
			}, 1E3)
		},
		DD = function (a, b) {
			a: {
				for (var c, d = 0; c = a.B ? qo(a.B, d) : null; d++)
					if (c instanceof sB && c.ma() == b) {
						b = d;
						break a
					}
				b = -1
			}
			0 <= b && eC(a, b)
		},
		ED = function (a, b) {
			var c = "";
			a = a.B ? qo(a.B, b) : null;
			a instanceof sB && (c = a.ma());
			return c
		},
		ID = function () {
			this.A = new Uz({
				shortcut: "ctrl+g",
				kbdMinMax: !0,
				multipleInstance: !0
			});
			op = "demopage";
			aA(this.A);
			this.A.D.J = !0;
			this.F = document.getElementById("gt-sl");
			this.B = null;
			var a =
				this.A;
			var b = {
				isFloating: !1,
				container: "itaControl"
			};
			var c = "kd",
				d = !1,
				e, g, h = !1;
			b && (b.ui && (c = b.ui), b.showSetting && (d = b.showSetting), b.container && (e = b.container), b.inputElement && (g = b.inputElement), h = !!b.shadowContainer);
			if (h && e) {
				h = e;
				var k = a.D.D.P("STYLE"),
					l = zk(Pr(hz), Bp());
				tn(k, l);
				h.appendChild(k)
			}
			h = null;
			"kd" == c && (h = new Dz(a.A, a.B));
			h && (h.bindElement = h.qf, h.reposition = h.$e, h.show = h.uh, h.hide = h.th, h.toggle = h.Ij);
			(a = h) ? (a.Y = b && b.alignRight, vo(a, d, e), ov(pl(document, e)), a.qf(g), b = a) : b = null;
			this.D = b;
			this.D.qf("contenteditable-root");
			wo.fa().H("ita_l", this.I, !1, this);
			b = HD();
			d = Rz.fa();
			e = d.A[b];
			e || (e = new Oz(b), d.A[b] = e);
			e.notify()
		},
		HD = function () {
			var a = "",
				b = window.location.search.toLowerCase(),
				c = /\/intl\/([\w\d\-_]+)\//g;
			(c = c.exec(window.location.pathname.toLowerCase())) && 1 < c.length ? a = c[1] : (c = /[&?]hl=([\w\d\-_]+)/g, (c = c.exec(b)) && 1 < c.length && (a = c[1]));
			return a && Jz(a) ? Hz(a) : q
		},
		JD = function (a, b) {
			var c = pl(document, a);
			c && (Vl(c, !0), Q(c, lc, function () {
				V(c, "editor-focus")
			}), Q(c, nb, function () {
				W(c, "editor-focus")
			}), b && Q(c, u, function (d) {
				13 !=
					d.keyCode && 32 != d.keyCode || b()
			}))
		},
		pi = typeof Object.defineProperties == t ? Object.defineProperty : function (a, b, c) {
			if (a == Array.prototype || a == Object.prototype) return a;
			a[b] = c.value;
			return a
		},
		oi = ni(this);
	qi("Symbol", function (a) {
		function b(e) {
			if (this instanceof b) throw new TypeError("Symbol is not a constructor");
			return new c("jscomp_symbol_" + (e || "") + "_" + d++, e)
		}

		function c(e, g) {
			this.A = e;
			pi(this, "description", {
				configurable: !0,
				writable: !0,
				value: g
			})
		}
		if (a) return a;
		c.prototype.toString = function () {
			return this.A
		};
		var d = 0;
		return b
	});
	qi(Ma, function (a) {
		if (a) return a;
		a = Symbol(Ma);
		for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
			var d = oi[b[c]];
			typeof d === t && typeof d.prototype[a] != t && pi(d.prototype, a, {
				configurable: !0,
				writable: !0,
				value: function () {
					return ri(mi(this))
				}
			})
		}
		return a
	});
	var ti = typeof Object.create == t ? Object.create : function (a) {
			function b() {}
			b.prototype = a;
			return new b
		},
		KD;
	if (typeof Object.setPrototypeOf == t) KD = Object.setPrototypeOf;
	else {
		var LD;
		a: {
			var MD = {
					li: !0
				},
				ND = {};
			try {
				ND.__proto__ = MD;
				LD = ND.li;
				break a
			} catch (a) {}
			LD = !1
		}
		KD = LD ? function (a, b) {
			a.__proto__ = b;
			if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
			return a
		} : null
	}
	var ui = KD;
	qi("Array.prototype.entries", function (a) {
		return a ? a : function () {
			return vi(this, function (b, c) {
				return [b, c]
			})
		}
	});
	qi("Array.prototype.keys", function (a) {
		return a ? a : function () {
			return vi(this, function (b) {
				return b
			})
		}
	});
	qi("Array.prototype.fill", function (a) {
		return a ? a : function (b, c, d) {
			var e = this.length || 0;
			0 > c && (c = Math.max(0, e + c));
			if (null == d || d > e) d = e;
			d = Number(d);
			0 > d && (d = Math.max(0, e + d));
			for (c = Number(c || 0); c < d; c++) this[c] = b;
			return this
		}
	});
	qi("Int8Array.prototype.fill", wi);
	qi("Uint8Array.prototype.fill", wi);
	qi("Uint8ClampedArray.prototype.fill", wi);
	qi("Int16Array.prototype.fill", wi);
	qi("Uint16Array.prototype.fill", wi);
	qi("Int32Array.prototype.fill", wi);
	qi("Uint32Array.prototype.fill", wi);
	qi("Float32Array.prototype.fill", wi);
	qi("Float64Array.prototype.fill", wi);
	var OD = typeof Object.assign == t ? Object.assign : function (a, b) {
		for (var c = 1; c < arguments.length; c++) {
			var d = arguments[c];
			if (d)
				for (var e in d) xi(d, e) && (a[e] = d[e])
		}
		return a
	};
	qi("Object.assign", function (a) {
		return a || OD
	});
	qi("WeakMap", function (a) {
		function b(l) {
			this.oa = (k += Math.random() + 1).toString();
			if (l) {
				l = si(l);
				for (var m; !(m = l.next()).done;) m = m.value, this.set(m[0], m[1])
			}
		}

		function c() {}

		function d(l) {
			var m = typeof l;
			return m === rf && null !== l || m === t
		}

		function e(l) {
			if (!xi(l, h)) {
				var m = new c;
				pi(l, h, {
					value: m
				})
			}
		}

		function g(l) {
			var m = Object[l];
			m && (Object[l] = function (r) {
				if (r instanceof c) return r;
				Object.isExtensible(r) && e(r);
				return m(r)
			})
		}
		if (function () {
				if (!a || !Object.seal) return !1;
				try {
					var l = Object.seal({}),
						m = Object.seal({}),
						r =
						new a([
							[l, 2],
							[m, 3]
						]);
					if (2 != r.get(l) || 3 != r.get(m)) return !1;
					r.delete(l);
					r.set(m, 4);
					return !r.has(l) && 4 == r.get(m)
				} catch (L) {
					return !1
				}
			}()) return a;
		var h = "$jscomp_hidden_" + Math.random();
		g("freeze");
		g("preventExtensions");
		g("seal");
		var k = 0;
		b.prototype.set = function (l, m) {
			if (!d(l)) throw Error("Invalid WeakMap key");
			e(l);
			if (!xi(l, h)) throw Error("WeakMap key fail: " + l);
			l[h][this.oa] = m;
			return this
		};
		b.prototype.get = function (l) {
			return d(l) && xi(l, h) ? l[h][this.oa] : void 0
		};
		b.prototype.has = function (l) {
			return d(l) && xi(l,
				h) && xi(l[h], this.oa)
		};
		b.prototype.delete = function (l) {
			return d(l) && xi(l, h) && xi(l[h], this.oa) ? delete l[h][this.oa] : !1
		};
		return b
	});
	qi("Map", function (a) {
		function b() {
			var k = {};
			return k.sa = k.next = k.head = k
		}

		function c(k, l) {
			var m = k.A;
			return ri(function () {
				if (m) {
					for (; m.head != k.A;) m = m.sa;
					for (; m.next != m.head;) return m = m.next, {
						done: !1,
						value: l(m)
					};
					m = null
				}
				return {
					done: !0,
					value: void 0
				}
			})
		}

		function d(k, l) {
			var m = l && typeof l;
			m == rf || m == t ? g.has(l) ? m = g.get(l) : (m = "" + ++h, g.set(l, m)) : m = "p_" + l;
			var r = k.B[m];
			if (r && xi(k.B, m))
				for (k = 0; k < r.length; k++) {
					var L = r[k];
					if (l !== l && L.key !== L.key || l === L.key) return {
						id: m,
						list: r,
						index: k,
						Oa: L
					}
				}
			return {
				id: m,
				list: r,
				index: -1,
				Oa: void 0
			}
		}

		function e(k) {
			this.B = {};
			this.A = b();
			this.size = 0;
			if (k) {
				k = si(k);
				for (var l; !(l = k.next()).done;) l = l.value, this.set(l[0], l[1])
			}
		}
		if (function () {
				if (!a || typeof a != t || !a.prototype.entries || typeof Object.seal != t) return !1;
				try {
					var k = Object.seal({
							x: 4
						}),
						l = new a(si([
							[k, "s"]
						]));
					if ("s" != l.get(k) || 1 != l.size || l.get({
							x: 4
						}) || l.set({
							x: 4
						}, "t") != l || 2 != l.size) return !1;
					var m = l.entries(),
						r = m.next();
					if (r.done || r.value[0] != k || "s" != r.value[1]) return !1;
					r = m.next();
					return r.done || 4 != r.value[0].x || "t" != r.value[1] || !m.next().done ?
						!1 : !0
				} catch (L) {
					return !1
				}
			}()) return a;
		var g = new WeakMap;
		e.prototype.set = function (k, l) {
			k = 0 === k ? 0 : k;
			var m = d(this, k);
			m.list || (m.list = this.B[m.id] = []);
			m.Oa ? m.Oa.value = l : (m.Oa = {
				next: this.A,
				sa: this.A.sa,
				head: this.A,
				key: k,
				value: l
			}, m.list.push(m.Oa), this.A.sa.next = m.Oa, this.A.sa = m.Oa, this.size++);
			return this
		};
		e.prototype.delete = function (k) {
			k = d(this, k);
			return k.Oa && k.list ? (k.list.splice(k.index, 1), k.list.length || delete this.B[k.id], k.Oa.sa.next = k.Oa.next, k.Oa.next.sa = k.Oa.sa, k.Oa.head = null, this.size--, !0) :
				!1
		};
		e.prototype.clear = function () {
			this.B = {};
			this.A = this.A.sa = b();
			this.size = 0
		};
		e.prototype.has = function (k) {
			return !!d(this, k).Oa
		};
		e.prototype.get = function (k) {
			return (k = d(this, k).Oa) && k.value
		};
		e.prototype.entries = function () {
			return c(this, function (k) {
				return [k.key, k.value]
			})
		};
		e.prototype.keys = function () {
			return c(this, function (k) {
				return k.key
			})
		};
		e.prototype.values = function () {
			return c(this, function (k) {
				return k.value
			})
		};
		e.prototype.forEach = function (k, l) {
			for (var m = this.entries(), r; !(r = m.next()).done;) r = r.value,
				k.call(l, r[1], r[0], this)
		};
		e.prototype[Symbol.iterator] = e.prototype.entries;
		var h = 0;
		return e
	});
	qi("Set", function (a) {
		function b(c) {
			this.A = new Map;
			if (c) {
				c = si(c);
				for (var d; !(d = c.next()).done;) this.add(d.value)
			}
			this.size = this.A.size
		}
		if (function () {
				if (!a || typeof a != t || !a.prototype.entries || typeof Object.seal != t) return !1;
				try {
					var c = Object.seal({
							x: 4
						}),
						d = new a(si([c]));
					if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
							x: 4
						}) != d || 2 != d.size) return !1;
					var e = d.entries(),
						g = e.next();
					if (g.done || g.value[0] != c || g.value[1] != c) return !1;
					g = e.next();
					return g.done || g.value[0] == c || 4 != g.value[0].x || g.value[1] != g.value[0] ?
						!1 : e.next().done
				} catch (h) {
					return !1
				}
			}()) return a;
		b.prototype.add = function (c) {
			c = 0 === c ? 0 : c;
			this.A.set(c, c);
			this.size = this.A.size;
			return this
		};
		b.prototype.delete = function (c) {
			c = this.A.delete(c);
			this.size = this.A.size;
			return c
		};
		b.prototype.clear = function () {
			this.A.clear();
			this.size = 0
		};
		b.prototype.has = function (c) {
			return this.A.has(c)
		};
		b.prototype.entries = function () {
			return this.A.entries()
		};
		b.prototype.values = function () {
			return this.A.values()
		};
		b.prototype.keys = b.prototype.values;
		b.prototype[Symbol.iterator] =
			b.prototype.values;
		b.prototype.forEach = function (c, d) {
			var e = this;
			this.A.forEach(function (g) {
				return c.call(d, g, g, e)
			})
		};
		return b
	});
	qi("Array.from", function (a) {
		return a ? a : function (b, c, d) {
			c = null != c ? c : function (k) {
				return k
			};
			var e = [],
				g = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
			if (typeof g == t) {
				b = g.call(b);
				for (var h = 0; !(g = b.next()).done;) e.push(c.call(d, g.value, h++))
			} else
				for (g = b.length, h = 0; h < g; h++) e.push(c.call(d, b[h], h));
			return e
		}
	});
	qi("Array.prototype.values", function (a) {
		return a ? a : function () {
			return vi(this, function (b, c) {
				return c
			})
		}
	});
	qi("Object.entries", function (a) {
		return a ? a : function (b) {
			var c = [],
				d;
			for (d in b) xi(b, d) && c.push([d, b[d]]);
			return c
		}
	});
	var lu = lu || {},
		A = this || self,
		Ci = /^[\w+/_-]+[=]{0,2}$/,
		Ai = null,
		Hi = "closure_uid_" + (1E9 * Math.random() >>> 0),
		Ii = 0;
	C(Pi, Error);
	Pi.prototype.name = "CustomError";
	var ol;
	C(Qi, Pi);
	Qi.prototype.name = "AssertionError";
	var Vi = Array.prototype.indexOf ? function (a, b) {
			return Array.prototype.indexOf.call(a, b, void 0)
		} : function (a, b) {
			if (typeof a === x) return typeof b !== x || 1 != b.length ? -1 : a.indexOf(b, 0);
			for (var c = 0; c < a.length; c++)
				if (c in a && a[c] === b) return c;
			return -1
		},
		D = Array.prototype.forEach ? function (a, b, c) {
			Array.prototype.forEach.call(a, b, c)
		} : function (a, b, c) {
			for (var d = a.length, e = typeof a === x ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
		},
		Kl = Array.prototype.filter ? function (a, b) {
			return Array.prototype.filter.call(a,
				b, void 0)
		} : function (a, b) {
			for (var c = a.length, d = [], e = 0, g = typeof a === x ? a.split("") : a, h = 0; h < c; h++)
				if (h in g) {
					var k = g[h];
					b.call(void 0, k, h, a) && (d[e++] = k)
				}
			return d
		},
		kk = Array.prototype.map ? function (a, b, c) {
			return Array.prototype.map.call(a, b, c)
		} : function (a, b, c) {
			for (var d = a.length, e = Array(d), g = typeof a === x ? a.split("") : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
			return e
		},
		ru = Array.prototype.reduce ? function (a, b, c) {
			return Array.prototype.reduce.call(a, b, c)
		} : function (a, b, c) {
			var d = c;
			D(a, function (e, g) {
				d = b.call(void 0,
					d, e, g, a)
			});
			return d
		},
		Bs = Array.prototype.some ? function (a, b, c) {
			return Array.prototype.some.call(a, b, c)
		} : function (a, b, c) {
			for (var d = a.length, e = typeof a === x ? a.split("") : a, g = 0; g < d; g++)
				if (g in e && b.call(c, e[g], g, a)) return !0;
			return !1
		},
		Bt = Array.prototype.every ? function (a, b, c) {
			return Array.prototype.every.call(a, b, c)
		} : function (a, b, c) {
			for (var d = a.length, e = typeof a === x ? a.split("") : a, g = 0; g < d; g++)
				if (g in e && !b.call(c, e[g], g, a)) return !1;
			return !0
		};
	var kj = String.prototype.trim ? function (a) {
			return a.trim()
		} : function (a) {
			return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
		},
		Kk = /&/g,
		Lk = /</g,
		Mk = />/g,
		Nk = /"/g,
		Ok = /'/g,
		Pk = /\x00/g,
		Jk = /[\x00&<>"']/;
	var nj;
	a: {
		var PD = A.navigator;
		if (PD) {
			var QD = PD.userAgent;
			if (QD) {
				nj = QD;
				break a
			}
		}
		nj = ""
	};
	var zj = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
	var Lj;
	Pj.prototype.tc = !0;
	Pj.prototype.Xb = function () {
		return this.A
	};
	var Oj = {},
		Nj = {},
		Uw = Rj("");
	var RD = /[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]/,
		SD = /^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]/,
		TD = /^http:\/\/.*/,
		UD = /\s+/,
		VD = /[\d\u06f0-\u06f9]/;
	Tj.prototype.tc = !0;
	Tj.prototype.Xb = function () {
		return this.A.toString()
	};
	var Wj = /%{(\w+)}/g,
		Vj = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
		ot = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
		Sj = {};
	bk.prototype.tc = !0;
	bk.prototype.Xb = function () {
		return this.A.toString()
	};
	var fk = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font\/\w+|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video\/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i,
		ek = /^data:(.*);base64,[a-z0-9+\/]+=*$/i,
		dk = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
		ak = {},
		uk = new bk(Ra, ak);
	ik.prototype.tc = !0;
	ik.prototype.Xb = function () {
		return this.A
	};
	var hk = {},
		mk = new ik("", hk),
		qk = /^[-,."'%_!# a-zA-Z0-9\[\]]+$/,
		pk = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g,
		ok = /\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g,
		rk = /\/\*/;
	var vk = {};
	wk.prototype.Xb = function () {
		return this.A
	};
	var Ak = new wk("", vk);
	Dk.prototype.tc = !0;
	Dk.prototype.Xb = function () {
		return this.A.toString()
	};
	var Ck = {},
		mD = new Dk(A.trustedTypes && A.trustedTypes.emptyHTML || "", 0, Ck);
	var Fk = function (a) {
		var b = !1,
			c;
		return function () {
			b || (c = a(), b = !0);
			return c
		}
	}(function () {
		var a = document.createElement("div"),
			b = document.createElement("div");
		b.appendChild(document.createElement("div"));
		a.appendChild(b);
		b = a.firstChild.firstChild;
		a.innerHTML = Ek(mD);
		return !b.parentElement
	});
	var Uk = /&([^;\s<&]+);?/g,
		WD = 2147483648 * Math.random() | 0;
	$k[" "] = Di;
	var Zm = F(Ea),
		K = Dj(),
		Bo = F(na),
		Un = Bo || K,
		P = F("Gecko") && !(-1 != nj.toLowerCase().indexOf("webkit") && !F(na)) && !(F("Trident") || F("MSIE")) && !F(na),
		xl = -1 != nj.toLowerCase().indexOf("webkit") && !F(na),
		XD = xl && F("Mobile"),
		km = F("Macintosh"),
		No = F("Windows"),
		Uy = F("Linux") || F("CrOS"),
		YD = F("Android"),
		ZD = Yk(),
		$D = F("iPad"),
		aE = F("iPod"),
		Rn = Zk(),
		bE;
	a: {
		var cE = "",
			dE = function () {
				var a = nj;
				if (P) return /rv:([^\);]+)(\)|;)/.exec(a);
				if (Bo) return /Edge\/([\d\.]+)/.exec(a);
				if (K) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
				if (xl) return /WebKit\/(\S+)/.exec(a);
				if (Zm) return /(?:Version)[ \/]?(\S+)/.exec(a)
			}();dE && (cE = dE ? dE[1] : "");
		if (K) {
			var eE = dl();
			if (null != eE && eE > parseFloat(cE)) {
				bE = String(eE);
				break a
			}
		}
		bE = cE
	}
	var el = bE,
		bl = {},
		fE;
	if (A.document && K) {
		var gE = dl();
		fE = gE ? gE : parseInt(el, 10) || void 0
	} else fE = void 0;
	var fl = fE;
	var Bl = !K || gl(9),
		Jl = !P && !K || K && gl(9) || P && G("1.9.1"),
		Yl = K && !G("9"),
		pq = K && !gl(9);
	H.prototype.Dc = function (a) {
		return a instanceof H && il(this, a)
	};
	H.prototype.ceil = function () {
		this.x = Math.ceil(this.x);
		this.y = Math.ceil(this.y);
		return this
	};
	H.prototype.floor = function () {
		this.x = Math.floor(this.x);
		this.y = Math.floor(this.y);
		return this
	};
	H.prototype.round = function () {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this
	};
	kl.prototype.aspectRatio = function () {
		return this.width / this.height
	};
	kl.prototype.ceil = function () {
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	kl.prototype.floor = function () {
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	kl.prototype.round = function () {
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	var rl = {
			cellpadding: "cellPadding",
			cellspacing: "cellSpacing",
			colspan: "colSpan",
			frameborder: "frameBorder",
			height: "height",
			maxlength: "maxLength",
			nonce: "nonce",
			role: Zf,
			rowspan: "rowSpan",
			type: "type",
			usemap: "useMap",
			valign: "vAlign",
			width: "width"
		},
		bm = {
			SCRIPT: 1,
			STYLE: 1,
			HEAD: 1,
			IFRAME: 1,
			OBJECT: 1
		},
		cm = {
			IMG: " ",
			BR: "\n"
		};
	y = nl.prototype;
	y.G = function (a) {
		return pl(this.A, a)
	};
	y.P = function (a, b, c) {
		return zl(this.A, arguments)
	};
	y.appendChild = function (a, b) {
		a.appendChild(b)
	};
	y.ya = Fl;
	y.Ae = Gl;
	y.yb = Il;
	y.xi = Ll;
	y.Lg = Ml;
	y.Dj = Nl;
	y.contains = Ol;
	y.Cd = Sl;
	y.yi = Tl;
	y.Ci = Ul;
	M.prototype.ha = !1;
	M.prototype.da = function () {
		this.ha || (this.ha = !0, this.L())
	};
	M.prototype.L = function () {
		if (this.sb)
			for (; this.sb.length;) this.sb.shift()()
	};
	O.prototype.stopPropagation = function () {
		this.D = !0
	};
	O.prototype.preventDefault = function () {
		this.defaultPrevented = !0
	};
	var nm = !K || gl(9),
		Im = !K || gl(9),
		hE = K && !G("9"),
		Em = function () {
			if (!A.addEventListener || !Object.defineProperty) return !1;
			var a = !1,
				b = Object.defineProperty({}, "passive", {
					get: function () {
						a = !0
					}
				});
			try {
				A.addEventListener("test", Di, b), A.removeEventListener("test", Di, b)
			} catch (c) {}
			return a
		}();
	var Gr = K ? "textinput" : "textInput",
		Lv = {
			Uc: Te,
			Vc: We,
			vd: "mousecancel",
			Qs: Ue,
			Ss: w,
			Rs: Ve,
			Os: "mouseenter",
			Ps: "mouseleave"
		};
	C(mm, O);
	var om = [1, 4, 2],
		lm = {
			2: "touch",
			3: "pen",
			4: "mouse"
		};
	mm.prototype.stopPropagation = function () {
		mm.O.stopPropagation.call(this);
		this.A.stopPropagation ? this.A.stopPropagation() : this.A.cancelBubble = !0
	};
	mm.prototype.preventDefault = function () {
		mm.O.preventDefault.call(this);
		var a = this.A;
		if (a.preventDefault) a.preventDefault();
		else if (a.returnValue = !1, hE) try {
			if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
		} catch (b) {}
	};
	var qm = "closure_listenable_" + (1E6 * Math.random() | 0),
		sm = 0;
	vm.prototype.add = function (a, b, c, d, e) {
		var g = a.toString();
		a = this.A[g];
		a || (a = this.A[g] = [], this.B++);
		var h = xm(a, b, d, e); - 1 < h ? (b = a[h], c || (b.qe = !1)) : (b = new tm(b, this.src, g, !!d, e), b.qe = c, a.push(b));
		return b
	};
	vm.prototype.Gd = function (a, b, c, d) {
		a = this.A[a.toString()];
		var e = -1;
		a && (e = xm(a, b, c, d));
		return -1 < e ? a[e] : null
	};
	vm.prototype.hasListener = function (a, b) {
		var c = void 0 !== a,
			d = c ? a.toString() : "",
			e = void 0 !== b;
		return qj(this.A, function (g) {
			for (var h = 0; h < g.length; ++h)
				if (!(c && g[h].type != d || e && g[h].capture != b)) return !0;
			return !1
		})
	};
	var Cm = "closure_lm_" + (1E6 * Math.random() | 0),
		Lm = {},
		Gm = 0,
		Om = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
	C(R, M);
	R.prototype[qm] = !0;
	y = R.prototype;
	y.$c = function () {
		return this.tg
	};
	y.ra = function (a) {
		this.tg = a
	};
	y.addEventListener = function (a, b, c, d) {
		Q(this, a, b, c, d)
	};
	y.removeEventListener = function (a, b, c, d) {
		Jm(this, a, b, c, d)
	};
	y.dispatchEvent = function (a) {
		var b, c = this.$c();
		if (c)
			for (b = []; c; c = c.$c()) b.push(c);
		c = this.mi;
		var d = a.type || a;
		if (typeof a === x) a = new O(a, c);
		else if (a instanceof O) a.target = a.target || c;
		else {
			var e = a;
			a = new O(d, c);
			Aj(a, e)
		}
		e = !0;
		if (b)
			for (var g = b.length - 1; !a.D && 0 <= g; g--) {
				var h = a.B = b[g];
				e = Pm(h, d, !0, a) && e
			}
		a.D || (h = a.B = c, e = Pm(h, d, !0, a) && e, a.D || (e = Pm(h, d, !1, a) && e));
		if (b)
			for (g = 0; !a.D && g < b.length; g++) h = a.B = b[g], e = Pm(h, d, !1, a) && e;
		return e
	};
	y.L = function () {
		R.O.L.call(this);
		if (this.Gb) {
			var a = this.Gb,
				b = 0,
				c;
			for (c in a.A) {
				for (var d = a.A[c], e = 0; e < d.length; e++) ++b, um(d[e]);
				delete a.A[c];
				a.B--
			}
		}
		this.tg = null
	};
	y.H = function (a, b, c, d) {
		return this.Gb.add(String(a), b, !1, c, d)
	};
	y.dg = function (a, b, c, d) {
		return this.Gb.add(String(a), b, !0, c, d)
	};
	y.ka = function (a, b, c, d) {
		var e = this.Gb;
		a = String(a).toString();
		if (a in e.A) {
			var g = e.A[a];
			b = xm(g, b, c, d); - 1 < b ? (um(g[b]), Array.prototype.splice.call(g, b, 1), 0 == g.length && (delete e.A[a], e.B--), e = !0) : e = !1
		} else e = !1;
		return e
	};
	y.Gd = function (a, b, c, d) {
		return this.Gb.Gd(String(a), b, c, d)
	};
	y.hasListener = function (a, b) {
		return this.Gb.hasListener(void 0 !== a ? String(a) : void 0, b)
	};
	var Cp = window.document,
		Ap = window,
		to = J(window.document),
		ms = new R,
		Vz = "",
		Wz = !1;
	Qm.prototype.contains = function (a) {
		return this && a ? a instanceof Qm ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
	};
	Qm.prototype.ceil = function () {
		this.top = Math.ceil(this.top);
		this.right = Math.ceil(this.right);
		this.bottom = Math.ceil(this.bottom);
		this.left = Math.ceil(this.left);
		return this
	};
	Qm.prototype.floor = function () {
		this.top = Math.floor(this.top);
		this.right = Math.floor(this.right);
		this.bottom = Math.floor(this.bottom);
		this.left = Math.floor(this.left);
		return this
	};
	Qm.prototype.round = function () {
		this.top = Math.round(this.top);
		this.right = Math.round(this.right);
		this.bottom = Math.round(this.bottom);
		this.left = Math.round(this.left);
		return this
	};
	Tm.prototype.contains = function (a) {
		return a instanceof H ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
	};
	Tm.prototype.ceil = function () {
		this.left = Math.ceil(this.left);
		this.top = Math.ceil(this.top);
		this.width = Math.ceil(this.width);
		this.height = Math.ceil(this.height);
		return this
	};
	Tm.prototype.floor = function () {
		this.left = Math.floor(this.left);
		this.top = Math.floor(this.top);
		this.width = Math.floor(this.width);
		this.height = Math.floor(this.height);
		return this
	};
	Tm.prototype.round = function () {
		this.left = Math.round(this.left);
		this.top = Math.round(this.top);
		this.width = Math.round(this.width);
		this.height = Math.round(this.height);
		return this
	};
	var Ym = {},
		wn = P ? "MozUserSelect" : xl || Bo ? "WebkitUserSelect" : null,
		Dn = {
			thin: 2,
			medium: 4,
			thick: 6
		},
		Fn = /[^\d]+$/,
		Gn = {
			cm: 1,
			"in": 1,
			mm: 1,
			pc: 1,
			pt: 1
		},
		Hn = {
			em: 1,
			ex: 1
		};
	var Sn = function () {
		if (No) {
			var a = /Windows NT ([0-9.]+)/;
			return (a = a.exec(nj)) ? a[1] : "0"
		}
		return km ? (a = /1[0|1][_.][0-9_.]+/, (a = a.exec(nj)) ? a[0].replace(/_/g, ".") : "10") : YD ? (a = /Android\s+([^\);]+)(\)|;)/, (a = a.exec(nj)) ? a[1] : "") : ZD || $D || aE ? (a = /(?:iPhone|CPU)\s+OS\s+(\S+)/, (a = a.exec(nj)) ? a[1].replace(/_/g, ".") : "") : ""
	}();
	var jp = Ej(),
		LB = Yk() || F("iPod"),
		kp = F("iPad"),
		lp = F("Android") && !(Fj() || Ej() || F(Ea) || F("Silk")),
		Tn = Fj(),
		Qn = F("Safari") && !(Fj() || F("Coast") || F(Ea) || F(na) || F("Edg/") || F("OPR") || Ej() || F("Silk") || F("Android")) && !Zk();
	var Kn = function () {
		if (jp) return Jn(/Firefox\/([0-9.]+)/);
		if (K || Bo || Zm) return el;
		if (Tn) return Zk() ? Jn(/CriOS\/([0-9.]+)/) : Jn(/Chrome\/([0-9.]+)/);
		if (Qn && !Zk()) return Jn(/Version\/([0-9.]+)/);
		if (LB || kp) {
			var a = /Version\/(\S+).*Mobile\/(\S+)/.exec(nj);
			if (a) return a[1] + "." + a[2]
		} else if (lp) return (a = Jn(/Android\s+([0-9.]+)/)) ? a : Jn(/Version\/([0-9.]+)/);
		return ""
	}();
	var op = "jsapi",
		By = "",
		Cy = !1,
		bz = !0,
		sy = 13,
		Vx = 13,
		cp = !K || G(9),
		Yy = !0,
		Hu = !1,
		Sz = !0,
		Y = XD;
	z(Vn, O);
	Vn.prototype.G = function () {
		return this.A
	};
	z(Wn, O);
	C(T, M);
	var Zn = [];
	y = T.prototype;
	y.H = function (a, b, c, d) {
		return Xn(this, a, b, c, d)
	};
	y.dg = function (a, b, c, d) {
		return $n(this, a, b, c, d)
	};
	y.ka = function (a, b, c, d, e) {
		if (Array.isArray(b))
			for (var g = 0; g < b.length; g++) this.ka(a, b[g], c, d, e);
		else c = c || this.handleEvent, d = Gi(d) ? !!d.capture : !!d, e = e || this.B || this, c = zm(c), d = !!d, b = rm(a) ? a.Gd(b, c, d, e) : a ? (a = Bm(a)) ? a.Gd(b, c, d, e) : null : null, b && (Km(b), delete this.A[b.key]);
		return this
	};
	y.L = function () {
		T.O.L.call(this);
		ao(this)
	};
	y.handleEvent = function () {
		throw Error("EventHandler.handleEvent not implemented");
	};
	bo.prototype.Ga = function () {};
	C(co, bo);
	co.prototype.Ga = function (a, b, c) {
		Pn(this.A, this.B, a, b, void 0, c, this.M)
	};
	Ei(eo);
	eo.prototype.A = 0;
	C(U, R);
	U.prototype.Ej = eo.fa();
	var fo = null;
	y = U.prototype;
	y.G = function () {
		return this.D
	};
	y.Ha = function () {
		return this.M
	};
	y.ra = function (a) {
		if (this.M && this.M != a) throw Error("Method not supported");
		U.O.ra.call(this, a)
	};
	y.W = function () {
		this.D = Cl(this.A.A, f)
	};
	y.aa = function (a) {
		mo(this, a)
	};
	y.Gc = function (a) {
		if (this.ea) throw Error(ka);
		if (a && this.De(a)) {
			this.nh = !0;
			var b = I(a);
			this.A && this.A.A == b || (this.A = J(a));
			this.$a(a);
			this.V()
		} else throw Error("Invalid element to decorate");
	};
	y.De = function () {
		return !0
	};
	y.$a = function (a) {
		this.D = a
	};
	y.V = function () {
		this.ea = !0;
		ro(this, function (a) {
			!a.ea && a.G() && a.V()
		})
	};
	y.ta = function () {
		ro(this, function (a) {
			a.ea && a.ta()
		});
		this.$ && ao(this.$);
		this.ea = !1
	};
	y.L = function () {
		this.ea && this.ta();
		this.$ && (this.$.da(), delete this.$);
		ro(this, function (a) {
			a.da()
		});
		!this.nh && this.D && Il(this.D);
		this.M = this.yc = this.D = this.S = this.I = null;
		U.O.L.call(this)
	};
	y.tb = function (a, b) {
		this.Wc(a, po(this), b)
	};
	y.Wc = function (a, b, c) {
		if (a.ea && (c || !this.ea)) throw Error(ka);
		if (0 > b || b > po(this)) throw Error("Child component index out of bounds");
		this.S && this.I || (this.S = {}, this.I = []);
		if (a.Ha() == this) {
			var d = ho(a);
			this.S[d] = a;
			Yi(this.I, a)
		} else wj(this.S, ho(a), a);
		lo(a, this);
		cj(this.I, b, 0, a);
		a.ea && this.ea && a.Ha() == this ? (c = this.Bb(), (c.childNodes[b] || null) != a.G() && (a.G().parentElement == c && c.removeChild(a.G()), c.insertBefore(a.G(), c.childNodes[b] || null))) : c ? (this.D || this.W(), b = qo(this, b + 1), mo(a, this.Bb(), b ? b.D : null)) :
			this.ea && !a.ea && a.D && a.D.parentNode && 1 == a.D.parentNode.nodeType && a.V()
	};
	y.Bb = function () {
		return this.D
	};
	y.Kd = function (a, b) {
		if (a) {
			var c = typeof a === x ? a : ho(a);
			a = ko(this, c);
			if (c && a) {
				var d = this.S;
				c in d && delete d[c];
				Yi(this.I, a);
				b && (a.ta(), a.D && Il(a.D));
				lo(a, null)
			}
		}
		if (!a) throw Error("Child is not in parent component");
		return a
	};
	z(uo, U);
	y = uo.prototype;
	y.lh = function () {};
	y.Yh = function () {};
	y.$h = function () {
		if (this.R)
			if (this.R.tagName.toUpperCase() == ua) try {
				a: {
					var a = this.R;
					try {
						var b = a.contentWindow || (a.contentDocument ? yl(a.contentDocument) : null);
						break a
					} catch (c) {}
					b = null
				}
				b && b.focus()
			}
		catch (c) {} else this.R.focus()
	};
	y.V = function () {
		var a = this,
			b = this.G();
		this.J.H(b, w, function () {
			a.bc = !0
		});
		this.J.H(b, Ve, function () {
			a.bc = !1
		});
		this.J.H(this.N, Ua, B(this.$h, this))
	};
	y.qf = function (a) {
		a = this.A.G(a);
		this.R != a && (this.R = a, this.N.dispatchEvent(new Vn(a)))
	};
	y.$e = function (a, b, c) {
		if (this.bi && (a = this.A.G(a))) {
			var d = new Qm(0, 0, 0, 0);
			null != c && (typeof c === pf ? d = new Qm(c, c, c, c) : Fi(c) && 4 == c.length && (d = new Qm(Number(c[0]), Number(c[1]), Number(c[2]), Number(c[3]))));
			c = this.G();
			(new co(a, b[0])).Ga(c, b[1], d);
			if (0 == op.indexOf("og")) {
				for (b = "99"; a;) Nl(a) && a.style.zIndex && (d = an(a, "zIndex"), Number(b) < Number(d) && (b = d)), a = a.parentNode;
				c.style.zIndex = b
			}
		}
	};
	y.uh = function () {
		var a = this.G();
		a && a.style.display != this.U && (a.style.display = this.U, this.N.dispatchEvent(new Wn(!0)))
	};
	y.th = function (a) {
		var b = this.G();
		if (a || b && b.style.display != of && !this.bc) this.lh(), this.N.dispatchEvent(new Wn(!1))
	};
	y.Ij = function () {
		var a = this.G();
		if (a) switch (a.style.display) {
			case this.U:
				this.th();
				break;
			case of:
				this.uh()
		}
	};
	y.L = function () {
		U.prototype.L.call(this);
		N(this.J)
	};
	var iE = {
		CURRENT_INPUT_TOOL_CHANGED: "citc",
		Hl: "ecd",
		Zs: "se",
		Tn: bd,
		$s: "sp",
		Un: "hp",
		kp: "itlu",
		Ms: "ita_l",
		Ts: "pelu",
		Ys: "slc",
		at: "sb",
		Vn: "ic",
		Ws: "rc",
		bt: "suc",
		ct: "syc",
		dt: "uc",
		et: "uf",
		it: "wg",
		Us: "psa"
	};
	var xo = [];
	z(wo, R);
	Ei(wo);
	var Uo = {
		8: "backspace",
		9: "tab",
		13: Yb,
		16: "shift",
		17: "ctrl",
		18: "alt",
		19: "pause",
		20: "caps-lock",
		27: "esc",
		32: "space",
		33: "pg-up",
		34: "pg-down",
		35: "end",
		36: "home",
		37: "left",
		38: "up",
		39: "right",
		40: "down",
		45: "insert",
		46: Pb,
		48: "0",
		49: "1",
		50: "2",
		51: "3",
		52: "4",
		53: "5",
		54: "6",
		55: "7",
		56: "8",
		57: "9",
		59: "semicolon",
		61: "equals",
		65: "a",
		66: "b",
		67: "c",
		68: "d",
		69: "e",
		70: "f",
		71: "g",
		72: "h",
		73: "i",
		74: "j",
		75: "k",
		76: "l",
		77: "m",
		78: "n",
		79: "o",
		80: "p",
		81: "q",
		82: "r",
		83: "s",
		84: "t",
		85: "u",
		86: "v",
		87: "w",
		88: "x",
		89: "y",
		90: "z",
		93: "context",
		96: "num-0",
		97: "num-1",
		98: "num-2",
		99: "num-3",
		100: "num-4",
		101: "num-5",
		102: "num-6",
		103: "num-7",
		104: "num-8",
		105: "num-9",
		106: "num-multiply",
		107: "num-plus",
		109: "num-minus",
		110: "num-period",
		111: "num-division",
		112: "f1",
		113: "f2",
		114: "f3",
		115: "f4",
		116: "f5",
		117: "f6",
		118: "f7",
		119: "f8",
		120: "f9",
		121: "f10",
		122: "f11",
		123: "f12",
		186: "semicolon",
		187: "equals",
		189: "dash",
		188: ",",
		190: ".",
		191: "/",
		192: "`",
		219: "open-square-bracket",
		220: "\\",
		221: "close-square-bracket",
		222: "single-quote",
		224: "win"
	};
	y = Jo.prototype;
	y.keyCode = function (a) {
		this.D = a;
		return this
	};
	y.key = function (a) {
		this.C = a;
		return this
	};
	y.shiftKey = function (a) {
		this.S = a;
		return this
	};
	y.altKey = function (a) {
		this.A = a;
		return this
	};
	y.ctrlKey = function (a) {
		this.B = a;
		return this
	};
	y.metaKey = function (a) {
		this.F = a;
		return this
	};
	y.target = function (a) {
		this.ha = a;
		return this
	};
	var To;
	C(Oo, R);
	var Lo = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
		Mo = ["color", "date", "datetime", "datetime-local", "email", "month", pf, "password", "search", "tel", "text", "time", "url", "week"];
	y = Oo.prototype;
	y.Mi = function (a, b) {
		Xo(this.B, So(1, arguments), a)
	};
	y.Ni = function (a) {
		Yo(this.B, So(0, arguments))
	};
	y.Li = function (a) {
		return $o(this, this.B, So(0, arguments))
	};
	y.L = function () {
		Oo.O.L.call(this);
		this.B = {};
		Jm(this.A, u, this.Xg, !1, this);
		Jm(this.A, Cg, this.fh, !1, this);
		No && (Jm(this.A, v, this.jh, !1, this), Jm(this.A, Dg, this.kh, !1, this));
		Jm(this.A, oe, this.Yg, !1, this);
		Jm(this.A, Eg, this.gh, !1, this);
		this.A = null
	};
	y.Yg = function (a) {
		a = Ko(a);
		P && Vo(this, a);
		No && !this.C && Wo(a) && bp(this, a, !0)
	};
	y.gh = function (a) {
		a = a.A();
		P && Vo(this, a);
		No && !this.C && Wo(a) && bp(this, a, !0)
	};
	y.jh = function (a) {
		a = Ko(a);
		32 < a.A && Wo(a) && (this.C = !0)
	};
	y.kh = function (a) {
		a = a.A();
		32 < a.A && Wo(a) && (this.C = !0)
	};
	y.Xg = function (a) {
		bp(this, Ko(a))
	};
	y.fh = function (a) {
		bp(this, a.A())
	};
	C(ap, O);
	z(dp, R);
	y = dp.prototype;
	y.wh = function (a, b) {
		if (typeof arguments[1] === x) {
			var c = fp(arguments[1]);
			if (c) {
				this.B[c] = a;
				return
			}
		}
		this.A.Mi.apply(this.A, arguments)
	};
	y.Oj = function (a) {
		var b = arguments[0];
		if (typeof b === x && (b = fp(b))) {
			this.B[b] && delete this.B[b];
			return
		}
		this.A.Ni.apply(this.A, arguments)
	};
	y.kg = function (a) {
		if (typeof arguments[0] === x) {
			var b = fp(arguments[0]);
			if (b) return !!this.B[b]
		}
		return this.A.Li.apply(this.A, arguments)
	};
	y.uj = function (a) {
		var b = P ? Do(a.keyCode) : a.keyCode;
		16 == b && (this.F = !0);
		this.D = b & 255 | ep(a) << 8;
		this.B[this.D] && 16 != b && 17 != b && 18 != b && (a.preventDefault(), a.stopPropagation())
	};
	y.vj = function (a) {
		this.B[this.D] && (a.preventDefault(), a.stopPropagation())
	};
	y.wj = function (a) {
		var b = P ? Do(a.keyCode) : a.keyCode,
			c = b & 255 | ep(a) << 8;
		if (c == this.D) {
			var d = this.B[c];
			d && (288 != c || this.F) && (a = a.target, this.dispatchEvent(new ap(jg, d, a)), this.dispatchEvent(new ap(kg + d, d, a)))
		}
		this.F = 32 == b || 16 == b;
		this.D = 0
	};
	y.L = function () {
		R.prototype.L.call(this);
		N(this.C);
		delete this.C;
		delete this.B
	};
	var jE = {},
		fx = (jE.tlang = ["ltkc", "ltcc"], jE.tsbc = ["bckc", "bccc"], jE.pun = ["ptkc", "ptcc"], jE);
	z(gp, M);
	y = gp.prototype;
	y.hf = function () {};
	y.Lc = function () {};
	y.get = function () {};
	y.set = function () {};
	y.wg = function () {};
	y.pe = function () {};
	y.jg = function () {};
	y.push = function () {};
	y.od = function () {};
	y.report = function () {};
	z(hp, M);
	hp.prototype.D = function () {
		this.da()
	};
	hp.prototype.L = function () {
		N(this.B);
		for (var a in this.A) N(this.A[a]), delete this.A[a];
		M.prototype.L.call(this)
	};
	Ei(hp);
	z(np, gp);
	y = np.prototype;
	y.hf = function (a) {
		this.xh = a
	};
	y.Lc = function (a) {
		var b = this.A[a];
		b && typeof b === pf ? b++ : b = 1;
		this.A[a] = b
	};
	y.get = function (a) {
		return this.A[a]
	};
	y.set = function (a, b) {
		this.A[a] = b
	};
	y.wg = function (a, b) {
		this.C[a] = b
	};
	y.pe = function (a) {
		this.B[a] = (new Date).getTime()
	};
	y.jg = function (a) {
		var b = (new Date).getTime();
		this.B[a] && (this.A[a] = b - this.B[a], delete this.B[a])
	};
	y.push = function (a, b) {
		var c = this.A[a];
		c = null != c ? String(c) + "_" + b : String(b);
		this.A[a] = c
	};
	y.od = function (a) {
		var b = this.A[a];
		if (typeof b === x) {
			var c = b.lastIndexOf("_");
			0 > c ? delete this.A[a] : this.A[a] = b.slice(0, c)
		}
	};
	y.report = function () {
		if ("vk" == this.D || "ppe" == this.D || "hwt" == this.D) {
			pj(this.B, function (d, e) {
				this.jg(e)
			}, this);
			var a = !1,
				b;
			for (b in this.A)
				if (this.A[b]) {
					a = !0;
					break
				}
			if (!a) return;
			this.pf && this.set(Ta, "ul");
			var c = "https://inputtools.google.com/ping?cs=1&app={APP}&itc={CODE}&uv=t|" + this.D + ",";
			a = {};
			Aj(a, this.C, this.A);
			pj(a, function (d, e) {
				if ("ql" == e) {
					var g = d.split("_");
					if (10 < g.length) {
						for (d = 0; 10 > d; d++) {
							var h = Math.floor(Math.random() * (g.length - d)) + d,
								k = g[d];
							g[d] = g[h];
							g[h] = k
						}
						d = g.slice(0, 10).join("_")
					}
				}
				c += e + "|" +
					d + ","
			}, this);
			c = c.slice(0, -1);
			pp(this, c)
		}
		this.A = {};
		this.B = {}
	};
	y.sj = function (a) {
		var b = this.F[a];
		b.onload = b.onerror = null;
		delete this.F[a]
	};
	y.L = function () {
		this.pf = !0;
		this.report();
		this.C = {};
		gp.prototype.L.call(this)
	};
	y.xh = "";
	y.Xf = 0;
	y.pf = !1;
	var rp = typeof Uint8Array == t,
		sp = [];
	qp.prototype.toString = function () {
		return this.A.toString()
	};
	C(zp, qp);
	C(wp, qp);
	var yp = [3, 4, 6, 7];
	wp.prototype.ma = function () {
		return up(this, 2)
	};
	var Dp = {},
		kE = {},
		Iz = {};
	D([
		[1, "am-t-i0-und", [
				["am", "\u12a0\u121b\u122d\u129b"]
			],
			["am"], 16, null, ["im_t13n_am"]
		],
		[2, $a, [
				["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
			],
			["ar"], 2, null, ["im_t13n_ar"]
		],
		[3, "bn-t-i0-und", [
				["bn", "\u09ac\u09be\u0982\u09b2\u09be"]
			],
			["bn"], 3, null, ["im_t13n_bn"]
		],
		[4, Xh, [
				[Mh, "\u62fc\u97f3"]
			],
			[Mh], 29, null, ["im_pinyin_zh_hans"]
		],
		[49, Yh, [
				[Mh, "\u53cc\u62fc\uff08\u667a\u80fdABC\uff09"]
			],
			[Mh], 44, [18]
		],
		[50, ai, [
				[Mh, "\u53cc\u62fc\uff08\u5fae\u8f6f\u65b9\u6848\uff09"]
			],
			[Mh], 44, [18]
		],
		[51, Zh, [
				[Mh, "\u53cc\u62fc\uff08\u5c0f\u9e64\uff09"]
			],
			[Mh], 44, [18]
		],
		[52, $h, [
				[Mh, "\u53cc\u62fc\uff08\u62fc\u97f3\u52a0\u52a0\uff09"]
			],
			[Mh], 44, [18]
		],
		[53, bi, [
				[Mh, "\u53cc\u62fc\uff08\u7d2b\u5149\uff09"]
			],
			[Mh], 44, [18]
		],
		[54, ci, [
				[Mh, "\u53cc\u62fc\uff08\u81ea\u7136\u7801\uff09"]
			],
			[Mh], 44, [18]
		],
		[6, "el-t-i0-und", [
				["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
			],
			["el"], 23, null, ["im_t13n_el"]
		],
		[7, "gu-t-i0-und", [
				["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]
			],
			["gu"], 4, null, ["im_t13n_gu"]
		],
		[8, "hi-t-i0-und", [
				["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]
			],
			["hi"], 5, null, ["im_t13n_hi"]
		],
		[9, dd, [
				[bd, "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]
			],
			[bd], 20, null, ["im_t13n_he", "im_t13n_iw"]
		],
		[33, "ja-t-i0", [
			["ja", "\u65e5\u672c\u8a9e"]
		], null, 28],
		[10, ie, [
				["ja", "\u65e5\u672c\u8a9e"]
			],
			["ja"], 28, null, ["im_t13n_ja"]
		],
		[11, "kn-t-i0-und", [
				["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"]
			],
			["kn"], 6, null, ["im_t13n_kn"]
		],
		[12, "ml-t-i0-und", [
				["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]
			],
			["ml"], 7, null, ["im_t13n_ml"]
		],
		[13, "mr-t-i0-und", [
				["mr", "\u092e\u0930\u093e\u0920\u0940"]
			],
			["mr"], 9, null, ["im_t13n_mr"]
		],
		[14, "ne-t-i0-und", [
				["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]
			],
			["ne"], 8, null, ["im_t13n_ne"]
		],
		[15, "or-t-i0-und", [
				["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]
			],
			["or"], 19, null, ["im_t13n_or"]
		],
		[16, gc, [
				["fa", "\u0641\u0627\u0631\u0633\u06cc"]
			],
			["fa"], 14, null, ["im_t13n_fa"]
		],
		[17, "pa-t-i0-und", [
				["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]
			],
			["pa"], 10, null, ["im_t13n_pa"]
		],
		[46, "pl-t-i0-und", [
			["pl", "Polski"]
		], null, 37, null, ["im_t13n_pl"]],
		[18, bg, [
				["ru", "\u0420\u0443\u0441\u0441\u043a\u0438\u0439"]
			],
			["ru"], 24, null, ["im_t13n_ru"]
		],
		[19, "sa-t-i0-und", [
				["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d"]
			],
			["sa"], 15, null, ["im_t13n_sa"]
		],
		[20, "sr-t-i0-und", [
				["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
			],
			["sr"], 22, null, ["im_t13n_sr"]
		],
		[21, "si-t-i0-und", [
				["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]
			],
			["si"], 18, null, ["im_t13n_si"]
		],
		[22, "ta-t-i0-und", [
				[Fg, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]
			],
			[Fg], 11, null, ["im_t13n_ta"]
		],
		[23, "te-t-i0-und", [
				["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]
			],
			["te"], 12, null, ["im_t13n_te"]
		],
		[24, "ti-t-i0-und", [
				["ti", "\u1275\u130d\u122d\u129b"]
			],
			["ti"], 17, null, ["im_t13n_ti"]
		],
		[25, oh, [
				["ur", "\u0627\u0631\u062f\u0648"]
			],
			["ur"], 13, null, ["im_t13n_ur"]
		],
		[31, "zh-t-i0-wubi-1998", [
			[Mh, "\u4e94\u7b14"]
		], null, 30],
		[26, di, [
				[Mh, "\u4e94\u7b14"]
			],
			[Mh], 30, null, ["im_wubi_zh_hans"]
		],
		[28, Vh, [
				[Ph, "\u6ce8\u97f3"]
			],
			[Ph], 31, null, ["im_zhuyin_zh_hant"]
		],
		[32, "zh-hant-t-i0-bopo", [
			[Ph, "\u6ce8\u97f3"]
		], null, 31],
		[27, Uh, [
				[Ph, "\u6f22\u8a9e\u62fc\u97f3"]
			],
			[Ph], 29, null, ["im_pinyin_zh_hant"]
		],
		[30, "vi-t-i0-und", [
				["vi", "Ti\u1ebfng Vi\u1ec7t"]
			],
			["vi"], 21, [18],
			["im_t13n_vi"]
		],
		[34, "be-t-i0-und", [
				["be", "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
			],
			["be"], 26, null, ["im_t13n_be"]
		],
		[35, "bg-t-i0-und", [
				["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]
			],
			["bg"], 27, null, ["im_t13n_bg"]
		],
		[36, "uk-t-i0-und", [
				["uk", "\u0422\u0440\u0430\u043d\u0441\u043b\u0456\u0442\u0435\u0440\u0430\u0446\u0456\u044f"]
			],
			["uk"], 25, null, ["im_t13n_uk"]
		],
		[37, Nb, [
				["de", la]
			],
			["de"], 35, [15, 18]
		],
		[38, ac, [
				["es", "Espa\u00f1ol"]
			],
			["es"], 34, [15, 18]
		],
		[39, pc, [
				["fr", qa]
			],
			["fr"], 36, [15, 18]
		],
		[40, zd, [
				["it", Aa]
			],
			["it"], 39, [15, 18]
		],
		[41, kf, [
				["nl", Da]
			],
			["nl"], 40, [15, 18]
		],
		[42, Rf, [
				[Ef, Ha]
			],
			[Ef], 38, [15, 18]
		],
		[48, Mf, [
			[Ff, Ha]
		], null, 38],
		[43, Sh, [
				[Ph, "\u5009\u9821"]
			],
			[Ph], 32
		],
		[44, Kh, [
				[Nh, "\u5ee3\u6771\u8a71"]
			],
			[Nh], 33
		],
		[60, Jh, [
				[Nh, "\u7cb5\u62fc"]
			],
			[Nh], 33
		],
		[101, "sq-t-k0-und", [
				["sq", "shqip"]
			],
			["sq"], 0, null, ["vkd_sq"]
		],
		[102, ab, [
				["ar", "\u0644\u0648\u062d\u0629 \u0645\u0641\u0627\u062a\u064a\u062d \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
			],
			["ar"], 0, null, ["vkd_ar"]
		],
		[103, sd, [
				["hy", "\u0531\u0580\u0587\u0565\u056c\u0561\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]
			],
			["hy"], 0, null, ["vkd_hy_east"]
		],
		[104, td, [
				["hy", "\u0531\u0580\u0565\u0582\u0574\u057f\u0561\u0570\u0561\u0575\u0565\u0580\u0567\u0576"]
			],
			["hy"], 0, null, ["vkd_hy_west"]
		],
		[105, "eu-t-k0-und", [
				["eu", "euskara"]
			],
			["eu"], 0, null, ["vkd_eu"]
		],
		[106, "be-t-k0-und", [
				["be", "\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
			],
			["be"], 0, null, ["vkd_be"]
		],
		[107, "bn-t-k0-und", [
				["bn", "\u09ac\u09be\u0982\u09b2\u09be (INSCRIPT)"]
			],
			["bn"], 0, null, ["vkd_bn_inscript"]
		],
		[108, pb, [
				["bn", "\u09ac\u09be\u0982\u09b2\u09be (\u09ab\u09cb\u09a8\u09c7\u099f\u09bf\u0995)"]
			],
			["bn"], 0, null, ["vkd_bn_phone"]
		],
		[109, "bs-t-k0-und", [
				["bs", "bosanski"]
			],
			["bs"], 0, null, ["vkd_bs"]
		],
		[110, Kf, [
				[Ef, Ia]
			],
			[Ef], 0, null, ["vkd_pt_br"]
		],
		[111, "bg-t-k0-und", [
				["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a"]
			],
			["bg"], 0, null, ["vkd_bg"]
		],
		[112, mb, [
				["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u043a\u0430)"]
			],
			["bg"], 0, null, ["vkd_bg_phone"]
		],
		[113, "ca-t-k0-und", [
				["ca", "catal\u00e0"]
			],
			["ca"], 0, null, ["vkd_ca"]
		],
		[114, "chr-t-k0-und", [
				["chr", "\u13e3\u13b3\u13a9"]
			],
			["chr"], 0, null, ["vkd_chr"]
		],
		[233, "ckb-t-k0-ar", [
				["ckb", "\u06a9\u0648\u0631\u062f\u06cc (\u062f\u06d5\u0633\u062a\u0646\u0648\u0633\u06cc \u0639\u06d5\u0631\u06d5\u0628\u06cc)"]
			],
			["ckb"], 0, null, ["vkd_ckb_ar"]
		],
		[232, "ckb-t-k0-en", [
				["ckb", "\u06a9\u0648\u0631\u062f\u06cc"]
			],
			["ckb"], 0, null, ["vkd_ckb_en"]
		],
		[115, "hr-t-k0-und", [
				["hr", "Hrvatski"]
			],
			["hr"], 0,
			null, ["vkd_hr"]
		],
		[116, "cs-t-k0-und", [
				["cs", "\u010ce\u0161tina"]
			],
			["cs"], 0, null, ["vkd_cs"]
		],
		[117, Hb, [
				["cs", "\u010ce\u0161tina QWERTZ"]
			],
			["cs"], 0, null, ["vkd_cs_qwertz"]
		],
		[118, "da-t-k0-und", [
				["da", "Dansk"]
			],
			["da"], 0, null, ["vkd_da"]
		],
		[119, Cf, [
				["prs", "\u0641\u0627\u0631\u0633\u06cc \u062f\u0631\u06cc"]
			],
			["fa"], 0, null, ["vkd_prs"]
		],
		[120, "nl-t-k0-und", [
				["nl", Da]
			],
			["nl"], 0, null, ["vkd_nl"]
		],
		[121, gd, [
				["hi", ji]
			],
			["hi"], 0, null, ["vkd_deva_phone"]
		],
		[122, "en-t-k0-und", [
				[q, pa]
			],
			[q], 0, null, ["vkd_en"]
		],
		[123, "et-t-k0-und", [
				["et", "eesti keel"]
			],
			["et"], 0, null, ["vkd_et"]
		],
		[124, kh, [
				["am", "\u130d\u12d5\u12dd"]
			],
			["am"], 0, null, ["vkd_ethi"]
		],
		[125, "fi-t-k0-und", [
				["fi", "Suomi"]
			],
			["fi"], 0, null, ["vkd_fi"]
		],
		[126, "fr-t-k0-und", [
				["fr", qa]
			],
			["fr"], 0, null, ["vkd_fr"]
		],
		[127, "gl-t-k0-und", [
				["gl", "galego"]
			],
			["gl"], 0, null, ["vkd_gl"]
		],
		[128, me, [
				["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e5\u10ec\u10d4\u10e0\u10e2\u10e7)"]
			],
			["ka"], 0, null, ["vkd_ka_qwerty"]
		],
		[129, le, [
				["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8 (\u10e1\u10d0\u10d1\u10d4\u10ed\u10d3\u10d8 \u10db\u10d0\u10dc\u10e5\u10d0\u10dc\u10d0)"]
			],
			["ka"], 0, null, ["vkd_ka_typewriter"]
		],
		[130, "de-t-k0-und", [
				["de", la]
			],
			["de"], 0, null, ["vkd_de"]
		],
		[131, "el-t-k0-und", [
				["el", "\u03b5\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
			],
			["el"], 0, null, ["vkd_el"]
		],
		[132, "gu-t-k0-und", [
				["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (INSCRIPT)"]
			],
			["gu"], 0, null, ["vkd_gu_inscript"]
		],
		[133, Yc, [
				["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0 (\u0aab\u0acb\u0aa8\u0ac7\u0aa4\u0abf\u0a95)"]
			],
			["gu"], 0, null, ["vkd_gu_phone"]
		],
		[134, wf, [
				["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (INSCRIPT)"]
			],
			["pa"], 0, null, ["vkd_guru_inscript"]
		],
		[135, xf, [
				["pa-guru", "\u0a17\u0a41\u0a30\u0a2e\u0a41\u0a16\u0a40 (\u0a2b\u0a4b\u0a28\u0a47\u0a1f\u0a3f\u0a15)"]
			],
			["pa"], 0, null, ["vkd_guru_phone"]
		],
		[136, ed, [
				[bd, "\u05e2\u05b4\u05d1\u05b0\u05e8\u05b4\u05d9\u05ea"]
			],
			[bd], 0, null, ["vkd_he", "vkd_iw"]
		],
		[137, "hi-t-k0-und", [
				["hi", ki]
			],
			["hi"], 0, null, ["vkd_hi"]
		],
		[138, rd, [
				["hu", "magyar nyelv (101)"]
			],
			["hu"], 0, null, ["vkd_hu_101"]
		],
		[139, "is-t-k0-und", [
				["is", "\u00edslenska"]
			],
			["is"], 0, null, ["vkd_is"]
		],
		[140, "it-t-k0-und", [
				["it",
					Aa
				]
			],
			["it"], 0, null, ["vkd_it"]
		],
		[141, "kn-t-k0-und", [
				["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (INSCRIPT)"]
			],
			["kn"], 0, null, ["vkd_kn_inscript"]
		],
		[142, se, [
				["kn", "\u0c95\u0ca8\u0ccd\u0ca8\u0ca1 (\u0cab\u0cca\u0ca8\u0cc6\u0c9f\u0cbf\u0c95\u0ccd)"]
			],
			["kn"], 0, null, ["vkd_kn_phone"]
		],
		[143, "kk-t-k0-und", [
				["kk", "\u049a\u0430\u0437\u0430\u049b"]
			],
			["kk"], 0, null, ["vkd_kk"]
		],
		[144, "km-t-k0-und", [
				["km", "\u17a2\u1780\u17d2\u179f\u179a\u1781\u17d2\u1798\u17c2\u179a NiDA"]
			],
			["km"], 0, null, ["vkd_km"]
		],
		[145, "ko-t-k0-und", [
				["ko",
					"\ud55c\uad6d\uc5b4"
				]
			],
			["ko"], 0, [18],
			["vkd_ko"]
		],
		[146, ve, [
				["ky", "\u041a\u044b\u0440\u0433\u044b\u0437"]
			],
			["ky"], 0, null, ["vkd_ky_cyrl"]
		],
		[147, "lo-t-k0-und", [
				["lo", "\u0e9e\u0eb2\u0eaa\u0eb2\u0ea5\u0eb2\u0ea7"]
			],
			["lo"], 0, null, ["vkd_lo"]
		],
		[148, "lv-t-k0-und", [
				["lv", "latvie\u0161u valoda"]
			],
			["lv"], 0, null, ["vkd_lv"]
		],
		[149, "lt-t-k0-und", [
				["lt", "lietuvi\u0173 kalba"]
			],
			["lt"], 0, null, ["vkd_lt"]
		],
		[150, "mk-t-k0-und", [
				["mk", "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]
			],
			["mk"], 0, null, ["vkd_mk"]
		],
		[151, "ml-t-k0-und", [
				["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (INSCRIPT)"]
			],
			["ml"], 0, null, ["vkd_ml_inscript"]
		],
		[152, Pe, [
				["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02 (\u0d2b\u0d4a\u0d23\u0d31\u0d4d\u0d31\u0d3f\u0d15\u0d4d)"]
			],
			["ml"], 0, null, ["vkd_ml_phone"]
		],
		[246, Se, [
				["mni-Mtei", "\uabc3\uabe4\uabc7\uabe9 \uabc3\uabcc\uabe6\uabdb (\uabd0\uabe3\uabc5\uabe6\uabc7\uabe4\uabdb)"]
			],
			["mni-Mtei"], 0
		],
		[153, "mt-t-k0-und", [
				["mt", "Malti"]
			],
			["mt"], 0, null, ["vkd_mt"]
		],
		[154, "mi-t-k0-und", [
				["mi", "Maori"]
			],
			["mi"], 0,
			null, ["vkd_mi"]
		],
		[155, Qe, [
				["mn", "\u041c\u043e\u043d\u0433\u043e\u043b"]
			],
			["mn"], 0, null, ["vkd_mn_cyrl"]
		],
		[156, "srp-t-k0-und", [
				["sr", "Crnogorski jezik"]
			],
			["sr"], 0, null, ["vkd_srp"]
		],
		[157, "no-t-k0-und", [
				["no", "norsk"]
			],
			["no"], 0, null, ["vkd_no"]
		],
		[158, "or-t-k0-und", [
				["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (INSCRIPT)"]
			],
			["or"], 0, null, ["vkd_or_inscript"]
		],
		[159, uf, [
				["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06 (\u0b2b\u0b4b\u0b28\u0b47\u0b1f\u0b3f\u0b15)"]
			],
			["or"], 0, null, ["vkd_or_phone"]
		],
		[160, Ce, [
				[q, fa]
			],
			["af"], 0,
			null, ["vkd_latn_002"]
		],
		[161, Df, [
				["ps", "\u067e\u069a\u062a\u0648"]
			],
			["ps"], 0, null, ["vkd_ps"]
		],
		[162, hc, [
				["fa", "\u0641\u0627\u0631\u0633\u06cc"]
			],
			["fa"], 0, null, ["vkd_fa"]
		],
		[163, "pl-t-k0-und", [
				["pl", "polski"]
			],
			["pl"], 0, null, ["vkd_pl"]
		],
		[164, Pf, [
				[Ff, Ja]
			],
			[Ff], 0, null, ["vkd_pt_pt"]
		],
		[165, "rom-t-k0-und", [
				["rom", "rromani \u0107hib"]
			],
			["rom"], 0, null, ["vkd_rom"]
		],
		[166, "ro-t-k0-und", [
				["ro", "rom\u00e2n\u0103"]
			],
			["ro"], 0, null, ["vkd_ro"]
		],
		[167, Yf, [
				["ro", "rom\u00e2n\u0103 SR13392 Primary"]
			],
			["ro"], 0, null, ["vkd_ro_sr13392_primary"]
		],
		[168, Xf, [
				["ro", "rom\u00e2n\u0103 SR13392 Secondary"]
			],
			["ro"], 0, null, ["vkd_ro_sr13392_secondary"]
		],
		[169, "ru-t-k0-und", [
				["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430"]
			],
			["ru"], 0, null, ["vkd_ru"]
		],
		[212, dg, [
				["ru", "\u0420\u0443\u0441\u0441\u043a\u0430\u044f \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439)"]
			],
			["ru"], 0
		],
		[242, fg, [
				["sa", ki]
			],
			["sa"], 0
		],
		[170,
			gg, [
				["sa", "\u0938\u0902\u0938\u094d\u0915\u0943\u0924\u092e\u094d (\u092b\u094b\u0928\u0947\u091f\u093f\u0915\u094d)"]
			],
			["sa"], 0, null, ["vkd_sa_phone"]
		],
		[171, ug, [
				["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
			],
			["sr"], 0, null, ["vkd_sr_cyrl"]
		],
		[172, vg, [
				["sr", "Srpski"]
			],
			["sr"], 0, null, ["vkd_sr_latn"]
		],
		[173, "si-t-k0-und", [
				["si", "\u0dc1\u0dd4\u0daf\u0dca\u0db0 \u0dc3\u0dd2\u0d82\u0dc4\u0dbd SLS1134"]
			],
			["si"], 0, null, ["vkd_si"]
		],
		[174, "sk-t-k0-und", [
				["sk", "Slovensk\u00fd jazyk"]
			],
			["sk"], 0, null, ["vkd_sk"]
		],
		[175,
			ng, [
				["sk", "Slovensk\u00fd jazyk - QWERTY"]
			],
			["sk"], 0, null, ["vkd_sk_qwerty"]
		],
		[176, "sl-t-k0-und", [
				["sl", "sloven\u0161\u010dina"]
			],
			["sl"], 0, null, ["vkd_sl"]
		],
		[177, vh, [
				["uzs", "Southern Uzbek"]
			],
			["uzs"], 0, null, ["vkd_uzs"]
		],
		[178, cc, [
				["es", "Espa\u00f1ol"]
			],
			["es"], 0, null, ["vkd_es_es"]
		],
		[179, "sv-t-k0-und", [
				["sv", "Svenska"]
			],
			["sv"], 0, null, ["vkd_sv"]
		],
		[180, Lb, [
				["de", "Deutschsprachige Schweiz"]
			],
			["de"], 0, null, ["vkd_de_ch"]
		],
		[181, Ig, [
				[Fg, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TAMIL99)"]
			],
			[Fg], 0, null, ["vkd_ta_tamil99"]
		],
		[182, "ta-t-k0-und", [
				[Fg, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (INSCRIPT)"]
			],
			[Fg], 0, null, ["vkd_ta_inscript"]
		],
		[183, Kg, [
				[Fg, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (\u0baa\u0bcb\u0ba9\u0bc6\u0b9f\u0bbf\u0b95\u0bcd)"]
			],
			[Fg], 0, null, ["vkd_ta_phone"]
		],
		[205, Jg, [
				[Fg, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (TYPE-WRITER)"]
			],
			[Fg], 0
		],
		[206, Hg, [
				[Fg, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd (ITRANS)"]
			],
			[Fg], 0
		],
		[184, "tt-t-k0-und", [
				["tt", "\u0422\u0430\u0442\u0430\u0440"]
			],
			["tt"], 0, null, ["vkd_tt"]
		],
		[185, "te-t-k0-und", [
				["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (INSCRIPT)"]
			],
			["te"], 0, null, ["vkd_te_inscript"]
		],
		[186, Ng, [
				["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 (\u0c2b\u0c4b\u0c28\u0c46\u0c1f\u0c3f\u0c15\u0c4d)"]
			],
			["te"], 0, null, ["vkd_te_phone"]
		],
		[187, "th-t-k0-und", [
				["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]
			],
			["th"], 0, null, ["vkd_th"]
		],
		[204, Sg, [
				["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (Pattajoti)"]
			],
			["th"], 0
		],
		[203, Tg, [
				["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22 (TIS-820.2538)"]
			],
			["th"], 0
		],
		[188, dh, [
				["tr", "T\u00fcrk\u00e7e - F"]
			],
			["tr"], 0, null, ["vkd_tr_f",
				ch
			]
		],
		[189, fh, [
				["tr", "T\u00fcrk\u00e7e - Q"]
			],
			["tr"], 0, null, ["vkd_tr_q"]
		],
		[190, hh, [
				["ug", "\u0626\u06c7\u064a\u063a\u06c7\u0631\u0686\u06d5"]
			],
			["ug"], 0, null, ["vkd_ug"]
		],
		[191, jh, [
				["uk", "\u0415\u043a\u0440\u0430\u043d\u043d\u0430 \u043a\u043b\u0430\u0432\u0456\u0430\u0442\u0443\u0440\u0430"]
			],
			["uk"], 0, null, ["vkd_uk_101"]
		],
		[192, ph, [
				["ur", "\u0627\u0631\u062f\u0648"]
			],
			["ur"], 0, null, ["vkd_ur"]
		],
		[193, th, [
				["uz", "o\u2018zbek"]
			],
			["uz"], 0, null, ["vkd_uz_latn"]
		],
		[194, sh, [
				["uz", "\u040e\u0437\u0431\u0435\u043a (\u0444\u043e\u043d\u0435\u0442\u0438\u0447\u043d\u0456)"]
			],
			["uz"], 0, null, ["vkd_uz_cyrl_phone"]
		],
		[195, rh, [
				["uz", "\u040e\u0437\u0431\u0435\u043a (\u0420\u043e\u0441\u0456\u0439\u0441\u044c\u043a\u0430)"]
			],
			["uz"], 0, null, ["vkd_uz_cyrl_type"]
		],
		[196, Ah, [
				["vi", "Ti\u1ebfng Vi\u1ec7t TCVN 6064"]
			],
			["vi"], 0, null, ["vkd_vi_tcvn"]
		],
		[197, zh, [
				["vi", "Ti\u1ebfng Vi\u1ec7t Telex"]
			],
			["vi"], 0, null, ["vkd_vi_telex"]
		],
		[198, "vi-t-k0-viqr", [
				["vi", "Ti\u1ebfng Vi\u1ec7t VIQR"]
			],
			["vi"], 0, null, ["vkd_vi_viqr"]
		],
		[208, "vi-t-k0-vni", [
				["vi", "Ti\u1ebfng Vi\u1ec7t VNI"]
			],
			["vi"], 0
		],
		[199, "dz-t-k0-und", [
				["dz", "\u0f62\u0fab\u0f7c\u0f44\u0f0b\u0f41\u0f0b"]
			],
			["dz"], 0, null, ["vkd_dz"]
		],
		[200, Wb, [
				[q, "English Dvorak"]
			],
			[q], 0
		],
		[201, zb, [
				["chr", "\u13e3\u13b3\u13a9 \u13d7\u13a7\u13c1\u13a2\u13cd\u13d7 \u13da\u13c3\u13f4\u13ac"]
			],
			["chr"], 0, null, ["vkd_chr_phone"]
		],
		[202, "my-t-k0-und", [
				["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c"]
			],
			["my"], 0, null, ["vkd_my"]
		],
		[239, "tg-t-k0-und", [
				["tg", "\u0422\u043e\u04b7\u0438\u043a"]
			],
			["tg"], 0, null, ["vkd_tg"]
		],
		[5, Vb, [
				[q, pa]
			],
			[q], 41, [15, 18],
			["im_t13n_en"]
		],
		[29, ee, [
			["ja", "\u65e5\u672c\u8a9e"]
		], null, -1, null, ["im_t13n_ja_hira"]],
		[45, "tr-t-i0-und", [
			["tr", "T\u00fcrk"]
		], null, 42],
		[207, Hh, [
				["yi", "\u05d4\u05e2\u05d1\u05e8\u05e2\u05d9\u05d9 \u05d9\u05d9\u05b4\u05d3\u05d9\u05e9 \u05e7\u05d9\u05d1\u05d0\u05b8\u05e8\u05d3"]
			],
			["yi"], 0
		],
		[256, Ih, [
				["yo", "Nigerian Yoruba"]
			],
			["yo"], 0
		],
		[209, "ne-t-k0-und", [
				["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u091f\u094d\u0930\u092f\u093e\u0921\u093f\u0938\u0928\u0932)"]
			],
			["ne"], 0
		],
		[210, hf, [
				["ne", "\u0928\u0947\u092a\u093e\u0932\u0940 (\u0930\u094b\u092e\u093e\u0928\u093e\u0907\u091c\u094d\u0921)"]
			],
			["ne"], 0
		],
		[211, Xb, [
				[q, Oa]
			],
			["nl"], 0
		],
		[213, "nv-t-k0-und", [
				["nv", ma]
			],
			["nv"], 0
		],
		[234, "nv-t-k0", [
			["nv", ma]
		], null, 0],
		[235, "nv-t-k0-std", [
				["nv", "Din\u00e9 bizaad - Traditional"]
			],
			["nv"], 0
		],
		[401, Wa, [
				["af", "Afrikaans"]
			],
			["af"], 1
		],
		[506, Ya, [
				["am", "\u12a0\u121b\u122d\u129b"]
			],
			["am"], 1
		],
		[464, Za, [
				["ar", "\u0627\u0644\u0639\u0631\u0628\u064a\u0629"]
			],
			["ar"], 1
		],
		[507, db, [
				["as", "\u0985\u09b8\u09ae\u09c0\u09af\u09bc\u09be"]
			],
			["as"], 1
		],
		[487, hb, [
				["az", "az\u0259rbaycan"]
			],
			["az"], 1
		],
		[402, ib, [
				["be", "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0430\u044f"]
			],
			["be"], 1
		],
		[403, kb, [
				["bg", "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438"]
			],
			["bg"], 1
		],
		[489, ob, [
				["bn", "\u09ac\u09be\u0982\u09b2\u09be"]
			],
			["bn"], 1
		],
		[509, qb, [
				["bo", "\u0f56\u0f7c\u0f51\u0f0b\u0f66\u0f90\u0f51\u0f0b"]
			],
			["bo"], 1
		],
		[468, rb, [
				["bs", "bosanski"]
			],
			["bs"], 1
		],
		[404, tb, [
				["ca", "catal\u00e0"]
			],
			["ca"], 1
		],
		[469, ub, [
				["ceb", "Cebuano"]
			],
			["ceb"], 1
		],
		[494, Ab, [
				["co", "Corsican"]
			],
			["co"], 1
		],
		[405, Gb, [
				["cs", "\u010de\u0161tina"]
			],
			["cs"], 1
		],
		[406, Ib, [
				["cy", "Cymraeg"]
			],
			["cy"], 1
		],
		[407, Jb, [
				["da", "dansk"]
			],
			["da"],
			1
		],
		[408, Mb, [
				["de", la]
			],
			["de"], 1
		],
		[455, Tb, [
				["el", "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac"]
			],
			["el"], 1
		],
		[409, Ub, [
				[q, pa]
			],
			[q], 1
		],
		[456, Zb, [
				["eo", "esperanto"]
			],
			["eo"], 1
		],
		[410, $b, [
				["es", "espa\u00f1ol"]
			],
			["es"], 1
		],
		[411, dc, [
				["et", "eesti"]
			],
			["et"], 1
		],
		[412, ec, [
				["eu", "euskara"]
			],
			["eu"], 1
		],
		[465, fc, [
				["fa", "\u0641\u0627\u0631\u0633\u06cc"]
			],
			["fa"], 1
		],
		[413, ic, [
				["fi", "suomi"]
			],
			["fi"], 1
		],
		[414, kc, [
				["fil", "Filipino"]
			],
			["fil"], 1
		],
		[415, oc, [
				["fr", "fran\u00e7ais"]
			],
			["fr"], 1
		],
		[495, sc, [
				["fy", "Frysk"]
			],
			["fy"], 1
		],
		[416, uc, [
				["ga", "Gaeilge"]
			],
			["ga"], 1
		],
		[496, wc, [
				["gd", "G\u00e0idhlig"]
			],
			["gd"], 1
		],
		[417, yc, [
				["gl", "galego"]
			],
			["gl"], 1
		],
		[462, Wc, [
				["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0"]
			],
			["gu"], 1
		],
		[497, $c, [
				["haw", ii]
			],
			["haw"], 1
		],
		[457, cd, [
				[bd, "\u05e2\u05d1\u05e8\u05d9\u05ea"]
			],
			[bd], 1
		],
		[453, fd, [
				["hi", "\u0939\u093f\u0928\u094d\u0926\u0940"]
			],
			["hi"], 1
		],
		[470, kd, [
				["hmn", "Hmong"]
			],
			["hmn"], 1
		],
		[418, md, [
				["hr", "hrvatski"]
			],
			["hr"], 1
		],
		[419, nd, [
				["ht", "Haitian Creole"]
			],
			["ht"], 1
		],
		[420, qd, [
				["hu", "magyar"]
			],
			["hu"], 1
		],
		[504,
			ud, [
				["hy", "\u0570\u0561\u0575\u0565\u0580\u0565\u0576"]
			],
			["hy"], 1
		],
		[421, vd, [
				["id", "Indonesia"]
			],
			["id"], 1
		],
		[422, xd, [
				["is", "\u00edslenska"]
			],
			["is"], 1
		],
		[423, yd, [
				["it", "italiano"]
			],
			["it"], 1
		],
		[424, fe, [
				["ja", "\u65e5\u672c\u8a9e"]
			],
			["ja"], 1
		],
		[458, je, [
				["jv", "Javanese"]
			],
			["jv"], 1
		],
		[505, ke, [
				["ka", "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8"]
			],
			["ka"], 1
		],
		[501, pe, [
				["kk", "\u049b\u0430\u0437\u0430\u049b \u0442\u0456\u043b\u0456"]
			],
			["kk"], 1
		],
		[484, qe, [
				["km", "\u1781\u17d2\u1798\u17c2\u179a"]
			],
			["km"], 1
		],
		[471, re, [
				["kn",
					"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1"
				]
			],
			["kn"], 1
		],
		[425, te, [
				["ko", "\ud55c\uad6d\uc5b4"]
			],
			["ko"], 1
		],
		[477, ue, [
				["ku", "kurd\u00ee"]
			],
			["ku"], 1
		],
		[478, we, [
				["ky", "\u043a\u044b\u0440\u0433\u044b\u0437\u0447\u0430"]
			],
			["ky"], 1
		],
		[426, xe, [
				["la", "Latin"]
			],
			["la"], 1
		],
		[498, Ee, [
				["lb", "L\u00ebtzebuergesch"]
			],
			["lb"], 1
		],
		[483, He, [
				["lo", "\u0ea5\u0eb2\u0ea7"]
			],
			["lo"], 1
		],
		[427, Ie, [
				["lt", "lietuvi\u0173"]
			],
			["lt"], 1
		],
		[428, Ke, [
				["lv", "latvie\u0161u"]
			],
			["lv"], 1
		],
		[479, Le, [
				["mg", "Malagasy"]
			],
			["mg"], 1
		],
		[459, Me, [
				["mi", "Maori"]
			],
			["mi"], 1
		],
		[429, Ne, [
				["mk", "\u043c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"]
			],
			["mk"], 1
		],
		[490, Oe, [
				["ml", "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02"]
			],
			["ml"], 1
		],
		[474, Re, [
				["mn", "\u043c\u043e\u043d\u0433\u043e\u043b"]
			],
			["mn"], 1
		],
		[461, Ye, [
				["mr", "\u092e\u0930\u093e\u0920\u0940"]
			],
			["mr"], 1
		],
		[430, $e, [
				["ms", "Melayu"]
			],
			["ms"], 1
		],
		[467, af, [
				["mt", "Malti"]
			],
			["mt"], 1
		],
		[488, bf, [
				["mul", "Multiple languages"]
			],
			["mul"], 1
		],
		[492, cf, [
				["my", "\u1019\u103c\u1014\u103a\u1019\u102c"]
			],
			["my"], 1
		],
		[431, ff, [
				["nb", "norsk bokm\u00e5l"]
			],
			["nb"], 1
		],
		[485, gf, [
				["ne", "\u0928\u0947\u092a\u093e\u0932\u0940"]
			],
			["ne"], 1
		],
		[432, jf, [
				["nl", Da]
			],
			["nl"], 1
		],
		[434, mf, [
				["nn", "nynorsk"]
			],
			["nn"], 1
		],
		[433, nf, [
				["no", "norsk"]
			],
			["no"], 1
		],
		[480, qf, [
				["ny", "Nyanja"]
			],
			["ny"], 1
		],
		[476, tf, [
				["or", "\u0b13\u0b21\u0b3c\u0b3f\u0b06"]
			],
			["or"], 1
		],
		[463, yf, [
				["pa", "\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40"]
			],
			["pa"], 1
		],
		[435, zf, [
				["pl", "polski"]
			],
			["pl"], 1
		],
		[436, Qf, [
			[Ef, "portugu\u00eas"]
		], null, 1],
		[437, Gf, [
				[Ef, "portugu\u00eas (Brasil)"]
			],
			[Ef], 1
		],
		[438, Lf, [
				[Ff, "portugu\u00eas (Portugal)"]
			],
			[Ff], 1
		],
		[439, Wf, [
				["ro", "rom\u00e2n\u0103"]
			],
			["ro"], 1
		],
		[440, ag, [
				["ru", "\u0440\u0443\u0441\u0441\u043a\u0438\u0439"]
			],
			["ru"], 1
		],
		[491, lg, [
				["si", "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd"]
			],
			["si"], 1
		],
		[441, mg, [
				["sk", "Sloven\u010dina"]
			],
			["sk"], 1
		],
		[442, og, [
				["sl", "sloven\u0161\u010dina"]
			],
			["sl"], 1
		],
		[499, pg, [
				["sm", "Samoan"]
			],
			["sm"], 1
		],
		[500, rg, [
				["sn", "chiShona"]
			],
			["sn"], 1
		],
		[472, sg, [
				["so", "Soomaali"]
			],
			["so"], 1
		],
		[443, tg, [
				["sq", "shqip"]
			],
			["sq"], 1
		],
		[444, wg, [
				["sr", "\u0441\u0440\u043f\u0441\u043a\u0438"]
			],
			["sr"], 1
		],
		[481, zg, [
				["su", "Sundanese"]
			],
			["su"], 1
		],
		[445, Ag, [
				["sv", "svenska"]
			],
			["sv"], 1
		],
		[446, Bg, [
				["sw", "Kiswahili"]
			],
			["sw"], 1
		],
		[473, Gg, [
				[Fg, "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd"]
			],
			[Fg], 1
		],
		[466, Mg, [
				["te", "\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"]
			],
			["te"], 1
		],
		[502, Qg, [
				["tg", "\u0442\u043e\u04b7\u0438\u043a\u04e3"]
			],
			["tg"], 1
		],
		[454, Rg, [
				["th", "\u0e44\u0e17\u0e22"]
			],
			["th"], 1
		],
		[508, Ug, [
				["ti", "\u1275\u130d\u122d\u129b"]
			],
			["ti"], 1
		],
		[447, ah, [
				["tr", "T\u00fcrk\u00e7e"]
			],
			["tr"], 1
		],
		[448, ih, [
				["uk", "\u0443\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430"]
			],
			["uk"], 1
		],
		[486, nh, [
				["ur", "\u0627\u0631\u062f\u0648"]
			],
			["ur"], 1
		],
		[503, uh, [
				["uz", "o\u2018zbek"]
			],
			["uz"], 1
		],
		[449, yh, [
				["vi", "Ti\u1ebfng Vi\u1ec7t"]
			],
			["vi"], 1
		],
		[482, Fh, [
				["xh", "Xhosa"]
			],
			["xh"], 1
		],
		[510, Gh, [
				["yi", "\u05d9\u05d9\u05b4\u05d3\u05d9\u05e9"]
			],
			["yi"], 1
		],
		[450, Wh, [
			[Mh, "\u4e2d\u6587"]
		], null, 1],
		[451, Qh, [
				[Mh, "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]
			],
			[Mh], 1
		],
		[452, Th, [
				[Ph, "\u4e2d\u6587\uff08\u7e41\u9ad4\uff09"]
			],
			[Ph], 1
		],
		[475, ei, [
				["zh-yue", "\u7cb5\u8a9e"]
			],
			["zh-yue"], 1
		],
		[460, fi, [
				["zu", "isiZulu"]
			],
			["zu"],
			1
		],
		[238, "see-t-k0-und", [
				["see", "On\u00f6dowa\u02bcga:\u02bc"]
			],
			["see"], 0
		],
		[214, "ti-t-k0-und", [
				["ti", "\u130d\u12d5\u12dd"]
			],
			["ti"], 0
		],
		[215, "mr-t-k0-und", [
				["mr", ji]
			],
			["mr"], 0
		],
		[241, Ze, [
				["mr", ki]
			],
			["mr"], 0
		],
		[216, "ht-t-k0-und", [
				["ht", qa]
			],
			["ht"], 0
		],
		[47, Hf, [
			[Ef, Ha]
		], null, 38],
		[217, "nl-t-k0-intl", [
			[q, Oa]
		], null, 0],
		[218, rc, [
				[q, Oa]
			],
			["fr"], 0
		],
		[219, "de-t-k0-intl", [
				[q, Oa]
			],
			["de"], 0
		],
		[220, "it-t-k0-intl", [
				[q, Oa]
			],
			["it"], 0
		],
		[221, Jf, [
				[q, Oa]
			],
			[Ef], 0
		],
		[222, Of, [
				[q, Oa]
			],
			[Ff], 0
		],
		[223, "es-t-k0-intl", [
				[q, Oa]
			],
			["es"], 0
		],
		[224, "cy-t-k0-und", [
				[q, fa]
			],
			["cy"], 0
		],
		[225, "ga-t-k0-und", [
				[q, fa]
			],
			["ga"], 0
		],
		[369, vc, [
			[q, "Irish"]
		], null, 0],
		[226, "id-t-k0-und", [
				[q, fa]
			],
			["id"], 0
		],
		[227, "jw-t-k0-und", [
				[q, fa]
			],
			["jw"], 0
		],
		[228, "ms-t-k0-und", [
				[q, fa]
			],
			["ms"], 0
		],
		[229, "sw-t-k0-und", [
				[q, fa]
			],
			["sw"], 0
		],
		[230, "tl-t-k0-und", [
				[q, fa]
			],
			["tl"], 0
		],
		[231, df, [
				["my", "\u1019\u103c\u1014\u103a\u1019\u102c\u1018\u102c\u101e\u102c(\u1019\u103c\u1014\u103a\u1005\u1036)"]
			],
			["my"], 0
		],
		[236, ce, [
				[q, "Nunavik Inuktitut"]
			],
			["iu"], 0
		],
		[237, de, [
				[q, "Nunavut Inuktitut"]
			],
			["iu"], 0
		],
		[245, be, [
				[q, "Inuktitut Unicode"]
			],
			["iu"], 0
		],
		[600, "en-t-i0-voice", [
			[q, pa]
		], null, 43],
		[601, Rh, [
			["zh", "\u4e2d\u6587\uff08\u7b80\u4f53\uff09"]
		], null, 43],
		[240, "lis-t-k0-und", [
				["lis", "\ua4e1\ua4f2\ua4e2\ua4f4"]
			],
			["lis"], 0
		],
		[493, lh, [
				[q, "Emoji & Symbol"]
			],
			["mul"], 1
		],
		[351, Bb, [
			[q, "Corsican"]
		], null, 0],
		[352, tc, [
			[q, "West Frisian"]
		], null, 0],
		[353, xc, [
			[q, "Scots Gaelic"]
		], null, 0],
		[244, "haw-t-k0-und", [
				["haw", ii]
			],
			["haw"], 0
		],
		[354, ad, [
			[q, "Hawaiian"]
		], null, 0],
		[355, Fe, [
			[q, "Luxembourgish"]
		], null, 0],
		[243, "sd-t-k0-und", [
				[q, "Sindhi"]
			],
			["sd"], 0
		],
		[356, qg, [
			[q, "Samoan"]
		], null, 0],
		[358, Ob, [
			["de", la]
		], null, 0],
		[359, bc, [
			["es", "Espa\u00f1ol"]
		], null, 0],
		[360, qc, [
			["fr", qa]
		], null, 0],
		[361, Ad, [
			["it", Aa]
		], null, 0],
		[362, lf, [
			["nl", Da]
		], null, 0],
		[363, Af, [
			["pl", "polski"]
		], null, 0],
		[364, If, [
			[Ef, Ia]
		], null, 0],
		[365, Nf, [
			[Ff, Ja]
		], null, 0],
		[366, bh, [
			["tr", "T\u00fcrk\u00e7e - F"]
		], null, 0],
		[367, eh, [
			["tr", "T\u00fcrk\u00e7e - Q"]
		], null, 0],
		[368, "ku-t-k0-und", [
				["ku", "Kurd\u00ee Bedirxan"]
			],
			["ku"], 0
		],
		[56, "ko-t-i0-und", [
				["ko", "\ud55c\uad6d\uc5b4"]
			], null,
			45
		],
		[58, he, [
			["ja", "\u65e5\u672c\u8a9e\uff08US\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]
		], null, 28],
		[57, ge, [
			["ja", "\u65e5\u672c\u8a9e\uff08\u65e5\u672c\u8a9e\u30ad\u30fc\u30dc\u30fc\u30c9\u7528\uff09"]
		], null, 28],
		[59, Lh, [
			[Ph, "\u5ee3\u6771\u8a71"]
		], null, 33],
		[55, "th-t-i0-und", [
				["th", "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22"]
			],
			["th"], 46, [18]
		],
		[248, "osa-t-k0-und", [
				["osa", "\ud801\udccf\ud801\udcd8\ud801\udcfb\ud801\udcd8\ud801\udcfb\ud801\udcdf \ud801\udcbb\ud801\udcdf"]
			],
			["osa"], 0, null, ["vkd_osa"]
		],
		[247, "ff-t-k0-adlm", [
				["ff_Adlm", "\ud83a\udd06\ud83a\udd35\ud83a\udd24\ud83a\udd22\ud83a\udd2a/\ud83a\udd0a\ud83a\udd35\ud83a\udd24\ud83a\udd2c\ud83a\udd35\ud83a\udd24\ud83a\udd23\ud83a\udd2b"]
			],
			["ff"], 0, null, ["vkd_ff"]
		],
		[249, "ccp-t-k0-und", [
				["ccp", "\ud804\udd0c\ud804\udd0b\ud804\udd34\ud804\udd1f\ud804\udd33\ud804\udd26"]
			],
			["ccp"], 0
		],
		[251, "hi-t-k0-phone", [
			["hi", li]
		], null, 0],
		[252, "mr-t-k0-phone", [
			["mr", li]
		], null, 0],
		[250, Xc, [
			["gu", "\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0(PHONETIC)"]
		], null, 0],
		[253,
			sf, [
				[q, "Ojibwe Left Dot - E Finals"]
			],
			["oj"], 0
		],
		[254, "one-t-k0-und", [
				["one", "On\u028cyote\u0294a\u00b7k\u00e1\u00b7"]
			],
			["one"], 0
		],
		[255, "mez-t-k0-und", [
				["mez", "Oma\u035eeqnome"]
			],
			["mez"], 0
		],
		[257, Vf, [
				["rhg", "\ud803\udd0c\ud803\udd1f\ud803\udd07\ud803\udd25\ud803\udd1d\ud803\udd1a\ud803\udd12\ud803\udd19\ud803\udd1d"]
			],
			["rhg"], 0
		],
		[258, Fb, [
				["crk", "\u14c0\u1426\u1403\u152d\u140d\u140f\u1423"]
			],
			["crk"], 0
		]
	], function (a) {
		var b = new zp(a);
		if (a = up(b, 2)) {
			Dp[a] = b;
			var c = xp(b)[0].ma();
			c && (kE[a] = c)
		}
		D(up(b, 4), function (d) {
			d ==
				Ph ? d = "zh-Hant" : d == Mh && (d = Oh);
			Iz[d] || (Iz[d] = []);
			Iz[d].push(b)
		})
	});
	var Pp = "StopIteration" in A ? A.StopIteration : {
		message: "StopIteration",
		stack: ""
	};
	Op.prototype.next = function () {
		throw Pp;
	};
	Op.prototype.Pb = function () {
		return this
	};
	C(Sp, Op);
	Sp.prototype.next = function () {
		if (this.N) {
			if (!this.B || this.$ && 0 == this.F) throw Pp;
			var a = this.B;
			var b = this.I ? -1 : 1;
			if (this.C == b) {
				var c = this.I ? a.lastChild : a.firstChild;
				c ? Rp(this, c) : Rp(this, a, -1 * b)
			} else(c = this.I ? a.previousSibling : a.nextSibling) ? Rp(this, c) : Rp(this, a.parentNode, -1 * b);
			this.F += this.C * (this.I ? -1 : 1)
		} else this.N = !0;
		a = this.B;
		if (!this.B) throw Pp;
		return a
	};
	Sp.prototype.Dc = function (a) {
		return a.B == this.B && (!this.B || a.C == this.C)
	};
	Tp.prototype.ph = function () {
		return !1
	};
	Tp.prototype.ai = function (a) {
		this.mc() || this.cd();
		return this.ze(a, !0)
	};
	C(Wp, Sp);
	C(Xp, Wp);
	Xp.prototype.J = function () {
		return this.A
	};
	Xp.prototype.S = function () {
		return this.N && (this.B != (this.M ? this.A : this.D) ? !1 : this.M ? this.K ? -1 != this.C : 1 == this.C : !this.ha || 1 != this.C)
	};
	Xp.prototype.next = function () {
		if (this.S()) throw Pp;
		return Xp.O.next.call(this)
	};
	Yp.prototype.Pb = function () {
		return new Xp(this.Ua(), this.Ab(), this.zb(), this.Zb())
	};
	C(aq, Yp);
	y = aq.prototype;
	y.Dd = function () {
		return this.B
	};
	y.Df = function () {
		return this.B.commonAncestorContainer
	};
	y.Ua = function () {
		return this.B.startContainer
	};
	y.Ab = function () {
		return this.B.startOffset
	};
	y.zb = function () {
		return this.B.endContainer
	};
	y.Zb = function () {
		return this.B.endOffset
	};
	y.jb = function (a, b, c) {
		return this.B.compareBoundaryPoints(1 == c ? 1 == b ? A.Range.START_TO_START : A.Range.START_TO_END : 1 == b ? A.Range.END_TO_START : A.Range.END_TO_END, a)
	};
	y.cb = function () {
		return this.B.collapsed
	};
	y.Ng = function () {
		return this.B.toString()
	};
	y.select = function (a) {
		var b = yl(I(this.Ua()));
		this.ce(b.getSelection(), a)
	};
	y.ce = function (a) {
		a.removeAllRanges();
		a.addRange(this.B)
	};
	y.Pg = function () {
		var a = this.B;
		a.extractContents();
		if (a.startContainer.hasChildNodes()) {
			var b = a.startContainer.childNodes[a.startOffset];
			if (b) {
				var c = b.previousSibling;
				"" == am(b) && Il(b);
				c && "" == am(c) && Il(c)
			}
		}
		if (Un) {
			b = this.Ua();
			c = this.Ab();
			var d = this.zb(),
				e = this.Zb(),
				g = b.nextSibling;
			b == d && b.parentNode && 3 == b.nodeType && g && 3 == g.nodeType && (b.nodeValue += g.nodeValue, Il(g), a.setStart(b, c), a.setEnd(d, e))
		}
	};
	y.Og = function (a, b) {
		var c = this.B.cloneRange();
		c.collapse(b);
		c.insertNode(a);
		c.detach();
		return a
	};
	y.collapse = function (a) {
		this.B.collapse(a)
	};
	C(eq, aq);
	eq.prototype.ce = function (a, b) {
		!b || this.cb() ? eq.O.ce.call(this, a, b) : (a.collapse(this.zb(), this.Zb()), a.extend(this.Ua(), this.Ab()))
	};
	C(fq, Yp);
	y = fq.prototype;
	y.Dd = function () {
		return this.B
	};
	y.Df = function () {
		if (!this.I) {
			var a = this.B.text,
				b = this.B.duplicate(),
				c = a.replace(/ +$/, "");
			(c = a.length - c.length) && b.moveEnd(xb, -c);
			c = b.parentElement();
			b = b.htmlText.replace(/(\r\n|\r|\n)+/g, " ").length;
			if (this.cb() && 0 < b) return this.I = c;
			for (; b > c.outerHTML.replace(/(\r\n|\r|\n)+/g, " ").length;) c = c.parentNode;
			for (; 1 == c.childNodes.length && c.innerText == mq(c.firstChild) && bq(c.firstChild);) c = c.firstChild;
			0 == a.length && (c = iq(this, c));
			this.I = c
		}
		return this.I
	};
	y.Ua = function () {
		this.A || (this.A = kq(this, 1), this.cb() && (this.D = this.A));
		return this.A
	};
	y.Ab = function () {
		0 > this.C && (this.C = lq(this, 1), this.cb() && (this.F = this.C));
		return this.C
	};
	y.zb = function () {
		if (this.cb()) return this.Ua();
		this.D || (this.D = kq(this, 0));
		return this.D
	};
	y.Zb = function () {
		if (this.cb()) return this.Ab();
		0 > this.F && (this.F = lq(this, 0), this.cb() && (this.C = this.F));
		return this.F
	};
	y.jb = function (a, b, c) {
		return this.B.compareEndPoints((1 == b ? "Start" : "End") + "To" + (1 == c ? "Start" : "End"), a)
	};
	y.cb = function () {
		return 0 == this.B.compareEndPoints("StartToEnd", this.B)
	};
	y.Ng = function () {
		return this.B.text
	};
	y.select = function () {
		this.B.select()
	};
	y.Pg = function () {
		if (!this.cb() && this.B.htmlText) {
			var a = this.Ua(),
				b = this.zb(),
				c = this.B.text,
				d = this.B.duplicate();
			d.moveStart(xb, 1);
			d.moveStart(xb, -1);
			d.text == c && (this.B = d);
			this.B.text = "";
			hq(this);
			c = this.Ua();
			d = this.Ab();
			try {
				var e = a.nextSibling;
				a == b && a.parentNode && 3 == a.nodeType && e && 3 == e.nodeType && (a.nodeValue += e.nodeValue, Il(e), this.B = gq(c), this.B.move(xb, d), hq(this))
			} catch (g) {}
		}
	};
	y.Og = function (a, b) {
		var c = this.B.duplicate();
		var d = d || J(c.parentElement());
		if (1 != a.nodeType) {
			var e = !0;
			a = d.P(f, null, a)
		}
		c.collapse(b);
		b = a;
		d = d || J(c.parentElement());
		var g = a = b.id;
		a || (a = b.id = "goog_" + WD++);
		c.pasteHTML(b.outerHTML);
		(b = d.G(a)) && (g || b.removeAttribute("id"));
		a = b;
		if (e) {
			c = a.firstChild;
			e = a;
			if ((b = e.parentNode) && 11 != b.nodeType)
				if (e.removeNode) e.removeNode(!1);
				else {
					for (; d = e.firstChild;) b.insertBefore(d, e);
					Il(e)
				}
			a = c
		}
		c = a;
		hq(this);
		return c
	};
	y.collapse = function (a) {
		this.B.collapse(a);
		a ? (this.D = this.A, this.F = this.C) : (this.A = this.D, this.C = this.F)
	};
	C(nq, aq);
	nq.prototype.ce = function (a) {
		a.collapse(this.Ua(), this.Ab());
		this.zb() == this.Ua() && this.Zb() == this.Ab() || a.extend(this.zb(), this.Zb());
		0 == a.rangeCount && a.addRange(this.B)
	};
	C(oq, aq);
	oq.prototype.jb = function (a, b, c) {
		return G("528") ? oq.O.jb.call(this, a, b, c) : this.B.compareBoundaryPoints(1 == c ? 1 == b ? A.Range.START_TO_START : A.Range.END_TO_START : 1 == b ? A.Range.START_TO_END : A.Range.END_TO_END, a)
	};
	oq.prototype.ce = function (a, b) {
		b ? a.setBaseAndExtent(this.zb(), this.Zb(), this.Ua(), this.Ab()) : a.setBaseAndExtent(this.Ua(), this.Ab(), this.zb(), this.Zb())
	};
	C(rq, Tp);
	y = rq.prototype;
	y.Cf = function () {
		return "text"
	};
	y.Ed = function () {
		return vq(this).Dd()
	};
	y.ad = function () {
		return 1
	};
	y.jc = function () {
		return this
	};
	y.Id = function () {
		return vq(this).Df()
	};
	y.bb = function () {
		return this.A || (this.A = vq(this).Ua())
	};
	y.Jb = function () {
		return null != this.C ? this.C : this.C = vq(this).Ab()
	};
	y.Ib = function () {
		return this.D || (this.D = vq(this).zb())
	};
	y.Fc = function () {
		return null != this.B ? this.B : this.B = vq(this).Zb()
	};
	y.ph = function () {
		return this.F
	};
	y.Hd = function (a, b) {
		var c = a.Cf();
		return "text" == c ? $p(vq(this), vq(a), b) : "control" == c ? (a = yq(a), (b ? Bs : Bt)(a, function (d) {
			return this.Mg(d, b)
		}, this)) : !1
	};
	y.Mg = function (a, b) {
		return this.Hd(sq(jq(a), void 0), b)
	};
	y.mc = function () {
		return vq(this).cb()
	};
	y.kc = function () {
		return vq(this).Ng()
	};
	y.Pb = function () {
		return new Xp(this.bb(), this.Jb(), this.Ib(), this.Fc())
	};
	y.select = function () {
		vq(this).select(this.F)
	};
	y.cd = function () {
		vq(this).Pg();
		this.A = this.C = this.D = this.B = null
	};
	y.ze = function (a, b) {
		a = vq(this).Og(a, b);
		this.A = this.C = this.D = this.B = null;
		return a
	};
	y.collapse = function (a) {
		a = this.ph() ? !a : a;
		this.I && this.I.collapse(a);
		a ? (this.D = this.A, this.B = this.C) : (this.A = this.D, this.C = this.B);
		this.F = !1
	};
	C(wq, Tp);
	wq.prototype.Hd = function (a, b) {
		var c = Up(this);
		a = Up(a);
		return (b ? Bs : Bt)(a, function (d) {
			return Bs(c, function (e) {
				return e.Hd(d, b)
			})
		})
	};
	wq.prototype.Mg = function (a, b) {
		return this.Hd(sq(jq(a), void 0), b)
	};
	wq.prototype.ze = function (a, b) {
		b ? Hl(a, this.bb()) : (b = this.Ib(), b.parentNode && b.parentNode.insertBefore(a, b.nextSibling));
		return a
	};
	C(xq, wq);
	y = xq.prototype;
	y.Cf = function () {
		return "control"
	};
	y.Ed = function () {
		return this.B || document.body.createControlRange()
	};
	y.ad = function () {
		return this.B ? this.B.length : 0
	};
	y.jc = function (a) {
		return sq(jq(this.B.item(a)), void 0)
	};
	y.Id = function () {
		return Sl.apply(null, yq(this))
	};
	y.bb = function () {
		return zq(this)[0]
	};
	y.Jb = function () {
		return 0
	};
	y.Ib = function () {
		var a = zq(this),
			b = Ri(a);
		return Ui(a, function (c) {
			return Ol(c, b)
		})
	};
	y.Fc = function () {
		return this.Ib().childNodes.length
	};
	y.mc = function () {
		return !this.B || !this.B.length
	};
	y.kc = function () {
		return ""
	};
	y.Pb = function () {
		return new Aq(this)
	};
	y.select = function () {
		this.B && this.B.select()
	};
	y.cd = function () {
		if (this.B) {
			for (var a = [], b = 0, c = this.B.length; b < c; b++) a.push(this.B.item(b));
			D(a, Il);
			this.collapse(!1)
		}
	};
	y.ai = function (a) {
		a = this.ze(a, !0);
		this.mc() || this.cd();
		return a
	};
	y.collapse = function () {
		this.D = this.A = this.B = null
	};
	C(Aq, Wp);
	Aq.prototype.J = function () {
		return this.A
	};
	Aq.prototype.S = function () {
		return !this.F && !this.M.length
	};
	Aq.prototype.next = function () {
		if (this.S()) throw Pp;
		if (!this.F) {
			var a = this.M.shift();
			Rp(this, a, 1, 1);
			return a
		}
		return Aq.O.next.call(this)
	};
	C(Bq, wq);
	y = Bq.prototype;
	y.Cf = function () {
		return "mutli"
	};
	y.Ed = function () {
		return this.A[0]
	};
	y.ad = function () {
		return this.A.length
	};
	y.jc = function (a) {
		this.D[a] || (this.D[a] = sq(qq(this.A[a]), void 0));
		return this.D[a]
	};
	y.Id = function () {
		if (!this.C) {
			for (var a = [], b = 0, c = this.ad(); b < c; b++) a.push(this.jc(b).Id());
			this.C = Sl.apply(null, a)
		}
		return this.C
	};
	y.bb = function () {
		return Cq(this)[0].bb()
	};
	y.Jb = function () {
		return Cq(this)[0].Jb()
	};
	y.Ib = function () {
		return Ri(Cq(this)).Ib()
	};
	y.Fc = function () {
		return Ri(Cq(this)).Fc()
	};
	y.mc = function () {
		return 0 == this.A.length || 1 == this.A.length && this.jc(0).mc()
	};
	y.kc = function () {
		return kk(Up(this), function (a) {
			return a.kc()
		}).join("")
	};
	y.Pb = function () {
		return new Dq(this)
	};
	y.select = function () {
		var a = yl(I(K ? this.Id() : this.bb())).getSelection();
		a.removeAllRanges();
		for (var b = 0, c = this.ad(); b < c; b++) a.addRange(this.jc(b).Ed())
	};
	y.cd = function () {
		D(Up(this), function (a) {
			a.cd()
		})
	};
	y.collapse = function (a) {
		if (!this.mc()) {
			var b = a ? this.jc(0) : this.jc(this.ad() - 1);
			this.D = [];
			this.C = this.B = null;
			b.collapse(a);
			this.D = [b];
			this.B = [b];
			this.A = [b.Ed()]
		}
	};
	C(Dq, Wp);
	Dq.prototype.J = function () {
		return this.A[0].J()
	};
	Dq.prototype.S = function () {
		return this.A[this.D].S()
	};
	Dq.prototype.next = function () {
		try {
			var a = this.A[this.D],
				b = a.next();
			Rp(this, a.B, a.C, a.F);
			return b
		} catch (c) {
			if (c !== Pp || this.A.length - 1 == this.D) throw c;
			this.D++;
			return this.next()
		}
	};
	C(Kq, bo);
	Kq.prototype.Ga = function (a, b, c, d) {
		var e = I(a);
		var g = e.body;
		e = e.documentElement;
		e = new H(g.scrollLeft || e.scrollLeft, g.scrollTop || e.scrollTop);
		g = this.A.x + e.x;
		e = this.A.y + e.y;
		var h = Mn(a);
		g -= h.x;
		e -= h.y;
		On(new H(g, e), a, b, c, null, null, d)
	};
	y = Nq.prototype;
	y.Mb = function () {
		return this.C
	};
	y.Yd = function (a) {
		var b = vn(this.D);
		a = Jq(this.D, b && a || !b && !a ? this.B : this.A);
		Gq(a, this.F);
		return new Kq(a)
	};
	y.replace = function (a, b) {
		if (this.Nc() && (this.C != a || b)) {
			b = Mq(this);
			var c = b[0],
				d = b[1];
			this.B <= c && this.A > c && this.A <= d ? c = this.A : this.B > c && this.B <= d && this.A > d ? d = this.B : this.B <= c && this.A > d && (c = d = this.A);
			b = a.length - (this.A - this.B);
			this.B > c && this.A <= d ? d += b : c >= this.A && (c += b, d += b);
			var e = this.D.innerHTML;
			this.D.innerHTML = e.slice(0, this.B) + a + e.slice(this.A);
			this.A = this.B + a.length;
			this.C = a;
			a = c;
			c = d;
			if (void 0 !== this.D.selectionStart) this.D.selectionStart = a, this.D.selectionEnd = c;
			else try {
				var g = this.D.createTextRange(),
					h =
					g.text.length;
				g.moveStart(xb, a);
				g.moveEnd(xb, c - h);
				g.select()
			} catch (k) {}
			b && Ur(this.I, this, this.A - b, b)
		}
	};
	y.yh = function (a, b, c) {
		if (this.Nc()) {
			for (var d = this.D.innerHTML, e = this.B - 1, g = 0; 0 <= e && !(++g > b) && !d.charAt(e).match(a);) e--;
			this.B = e + 1;
			if (c) {
				for (e = this.A; e < d.length && !(++g > b) && !d.charAt(e).match(a);) e++;
				this.A = e
			}
			this.C = d.slice(this.B, this.A)
		}
	};
	y.Nc = function () {
		return this.D.innerHTML.slice(this.B, this.A) == this.C
	};
	y.zh = function () {
		return this.B == this.A
	};
	y.sf = function () {
		var a = Mq(this);
		return this.F.A.activeElement == this.D && (a[0] >= this.B && a[0] <= this.A || a[1] >= this.B && a[1] <= this.A)
	};
	y.da = function () {
		delete this.I.C[String(Ji(this))]
	};
	y.Dg = function (a, b) {
		this.B > a && (this.B += b);
		this.A > a && (this.A += b)
	};
	y = Oq.prototype;
	y.Mb = function () {
		return this.Nc() ? this.I : ""
	};
	y.Yd = function (a) {
		var b = vn(Lq(this.M));
		if (!K) {
			var c = Pq(this);
			c.collapse(b && a || !b && !a)
		}
		a = Iq(this.F, c);
		Gq(a, this.F);
		return new Kq(a)
	};
	y.replace = function (a, b) {
		if (this.Nc() && (this.I != a || b)) {
			var c = b = null,
				d = 0,
				e = 0,
				g = this.zh() || this.sf();
			g || (e = Fq(gm(this.F)), b = e.bb(), c = e.Ib(), d = e.Jb(), e = e.Fc());
			var h = 0;
			a = a.replace(" ", "\u00a0");
			if (this.A != this.D || 3 != this.A.nodeType) {
				var k = Pq(this);
				k.cd();
				this.A = this.D = k.bb();
				this.C = this.B = k.Jb()
			} else h = a.length - (this.B - this.C);
			if (3 == this.A.nodeType) k = this.A.data, this.A.data = k.slice(0, this.C) + a + k.slice(this.B), this.D = this.A, this.B = this.C + a.length;
			else if (1 == this.A.nodeType) {
				k = em(this.F, a);
				var l = this.A;
				l.insertBefore(k, l.childNodes[this.B] || null);
				this.A = this.D = k;
				this.C = 0;
				this.B = a.length
			}
			h && (k = this.B - h, Ur(this.M, this, k, h), g || this.D != c || (d > k && (d += h), e > k && (e += h)));
			g ? (k = Pq(this), k.collapse(!1)) : k = uq(b, d, c, e);
			k.select();
			this.I = a
		}
	};
	y.yh = function (a, b, c) {
		if (this.Nc() && this.A == this.D && this.C == this.B) {
			var d = this.A;
			if (3 != d.nodeType && 0 < this.C)
				for (d = d.childNodes[this.C - 1]; d && 3 != d.nodeType;) d = d.lastChild;
			if (d && 3 == d.nodeType) {
				d != this.A && (this.A = this.D = d, this.C = this.B = d.data.length);
				for (var e = this.C - 1, g = 0; d && 3 == d.nodeType;)
					if (0 > e)(d = d.previousSibling) && 3 == d.nodeType && (e = d.data.length - 1);
					else {
						if (++g > b) break;
						if (d.data.charAt(e).match(a)) break;
						this.A = d;
						this.C = e;
						e--
					}
				if (c)
					for (d = this.D, e = this.B; d && 3 == d.nodeType;)
						if (e >= d.data.length || 0 == d.data.length) d =
							d.nextSibling, e = 0;
						else {
							if (++g > b) break;
							if (d.data.charAt(e).match(a)) break;
							this.D = d;
							this.B = e + 1;
							e++
						}
				this.I = Pq(this).kc()
			}
		}
	};
	y.Nc = function () {
		return !(this.A && this.D && this.A.parentNode && this.D.parentNode) || 3 == this.A.nodeType && this.C > this.A.data.length || 3 == this.D.nodeType && this.B > this.D.data.length ? !1 : Pq(this).kc() == this.I
	};
	y.zh = function () {
		return this.A == this.D && this.C == this.B
	};
	y.sf = function () {
		var a = Pq(this),
			b = Fq(gm(this.F));
		return a && b && I(Vp(a)) == I(Vp(b)) ? a.Hd(b, !0) : !1
	};
	y.da = function () {
		delete this.M.C[String(Ji(this))];
		this.A == this.D && 3 == this.A.nodeType && this.A.parentNode && !this.A.data && this.F.yb(this.A);
		this.A = this.D = null;
		this.C = this.B = 0
	};
	y.Dg = function (a, b) {
		this.C <= a && this.B > a ? this.B = this.C = 0 : this.C > a && (this.C += b, this.B += b);
		this.I = Pq(this).kc()
	};
	C(Rq, R);
	y = Rq.prototype;
	y.dd = null;
	y.Xe = null;
	y.$f = null;
	y.Ye = null;
	y.Va = -1;
	y.Kb = -1;
	y.Ef = !1;
	var lE = {
			3: 13,
			12: 144,
			63232: 38,
			63233: 40,
			63234: 37,
			63235: 39,
			63236: 112,
			63237: 113,
			63238: 114,
			63239: 115,
			63240: 116,
			63241: 117,
			63242: 118,
			63243: 119,
			63244: 120,
			63245: 121,
			63246: 122,
			63247: 123,
			63248: 44,
			63272: 46,
			63273: 36,
			63275: 35,
			63276: 33,
			63277: 34,
			63289: 144,
			63302: 45
		},
		mE = {
			Up: 38,
			Down: 40,
			Left: 37,
			Right: 39,
			Enter: 13,
			F1: 112,
			F2: 113,
			F3: 114,
			F4: 115,
			F5: 116,
			F6: 117,
			F7: 118,
			F8: 119,
			F9: 120,
			F10: 121,
			F11: 122,
			F12: 123,
			"U+007F": 46,
			Home: 36,
			End: 35,
			PageUp: 33,
			PageDown: 34,
			Insert: 45
		},
		nE = !xl || G("525"),
		oE = km && P;
	y = Rq.prototype;
	y.Di = function (a) {
		if (xl || Bo)
			if (17 == this.Va && !a.ctrlKey || 18 == this.Va && !a.altKey || km && 91 == this.Va && !a.metaKey) this.Kb = this.Va = -1; - 1 == this.Va && (a.ctrlKey && 17 != a.keyCode ? this.Va = 17 : a.altKey && 18 != a.keyCode ? this.Va = 18 : a.metaKey && 91 != a.keyCode && (this.Va = 91));
		nE && !Co(a.keyCode, this.Va, a.shiftKey, a.ctrlKey, a.altKey, a.metaKey) ? this.handleEvent(a) : (this.Kb = Ao(a.keyCode), oE && (this.Ef = a.altKey))
	};
	y.kj = function (a) {
		this.Kb = this.Va = -1;
		this.Ef = a.altKey
	};
	y.handleEvent = function (a) {
		var b = a.A,
			c = b.altKey;
		if (K && a.type == v) {
			var d = this.Kb;
			var e = 13 != d && 27 != d ? b.keyCode : 0
		} else(xl || Bo) && a.type == v ? (d = this.Kb, e = 0 <= b.charCode && 63232 > b.charCode && zo(d) ? b.charCode : 0) : Zm && !xl ? (d = this.Kb, e = zo(d) ? b.keyCode : 0) : (a.type == v ? (oE && (c = this.Ef), b.keyCode == b.charCode ? 32 > b.keyCode ? (d = b.keyCode, e = 0) : (d = this.Kb, e = b.charCode) : (d = b.keyCode || this.Kb, e = b.charCode || 0)) : (d = b.keyCode || this.Kb, e = b.charCode || 0), km && 63 == e && 224 == d && (d = 191));
		var g = d = Ao(d);
		d ? 63232 <= d && d in lE ? g = lE[d] : 25 == d &&
			a.shiftKey && (g = 9) : b.keyIdentifier && b.keyIdentifier in mE && (g = mE[b.keyIdentifier]);
		P && nE && a.type == v && !Co(g, this.Va, a.shiftKey, a.ctrlKey, c, a.metaKey) || (a = g == this.Va, this.Va = g, b = new Tq(g, e, a, b), b.altKey = c, this.dispatchEvent(b))
	};
	y.G = function () {
		return this.dd
	};
	y.L = function () {
		Rq.O.L.call(this);
		Sq(this)
	};
	C(Tq, mm);
	Uq.prototype.get = function () {
		if (0 < this.B) {
			this.B--;
			var a = this.A;
			this.A = a.next;
			a.next = null
		} else a = this.D();
		return a
	};
	var Yq, Xq = Kj;
	var jr = new Uq(function () {
		return new dr
	}, function (a) {
		a.reset()
	});
	ar.prototype.add = function (a, b) {
		var c = jr.get();
		c.set(a, b);
		this.B ? this.B.next = c : this.A = c;
		this.B = c
	};
	dr.prototype.set = function (a, b) {
		this.Vb = a;
		this.A = b;
		this.next = null
	};
	dr.prototype.reset = function () {
		this.next = this.A = this.Vb = null
	};
	var er, gr = !1,
		br = new ar;
	nr.prototype.reset = function () {
		this.context = this.B = this.D = this.A = null;
		this.C = !1
	};
	var or = new Uq(function () {
		return new nr
	}, function (a) {
		a.reset()
	});
	mr.prototype.then = function (a, b, c) {
		return wr(this, typeof a === t ? a : null, typeof b === t ? b : null, c)
	};
	mr.prototype.$goog_Thenable = !0;
	mr.prototype.cancel = function (a) {
		if (0 == this.A) {
			var b = new vr(a);
			hr(function () {
				qr(this, b)
			}, this)
		}
	};
	mr.prototype.J = function (a) {
		this.A = 0;
		lr(this, 2, a)
	};
	mr.prototype.ha = function (a) {
		this.A = 0;
		lr(this, 3, a)
	};
	mr.prototype.S = function () {
		for (var a; a = rr(this);) sr(this, a, this.A, this.M);
		this.I = !1
	};
	var Ar = Wq;
	C(vr, Pi);
	vr.prototype.name = "cancel";
	C(Br, R);
	y = Br.prototype;
	y.ye = !1;
	y.Yb = null;
	y.Gl = function () {
		if (this.ye) {
			var a = Ni() - this.C;
			0 < a && a < .8 * this.B ? this.Yb = this.A.setTimeout(this.D, this.B - a) : (this.Yb && (this.A.clearTimeout(this.Yb), this.Yb = null), this.dispatchEvent("tick"), this.ye && (this.stop(), this.start()))
		}
	};
	y.start = function () {
		this.ye = !0;
		this.Yb || (this.Yb = this.A.setTimeout(this.D, this.B), this.C = Ni())
	};
	y.stop = function () {
		this.ye = !1;
		this.Yb && (this.A.clearTimeout(this.Yb), this.Yb = null)
	};
	y.L = function () {
		Br.O.L.call(this);
		this.stop();
		delete this.A
	};
	var Kr;
	C(Nr, M);
	y = Nr.prototype;
	y.oa = 0;
	y.L = function () {
		Nr.O.L.call(this);
		this.stop();
		delete this.A;
		delete this.B
	};
	y.start = function (a) {
		this.stop();
		this.oa = Cr(this.D, void 0 !== a ? a : this.C)
	};
	y.stop = function () {
		0 != this.oa && Dr(this.oa);
		this.oa = 0
	};
	y.vi = function () {
		this.oa = 0;
		this.A && this.A.call(this.B)
	};
	Tn && Ln("4") || Qn && G("533") || P && G("2.0") || K && G("10") || Zm && Gj();
	var Or = Di;
	y = Tr.prototype;
	y.ab = function (a) {
		if (0 > a) {
			a = -a;
			var b = Lq(this);
			if (b) {
				var c = "",
					d = this.A.A;
				d.selection && !Zm ? (c = d.selection.createRange(), c.collapse(!0), c.moveEnd("word", -1), c = c.text.length > a ? c.text.slice(0, a) : c.text) : b.selectionEnd ? c = b.value.slice(b.selectionStart, Math.min(b.value.length, b.selectionStart + a)) : (d = gm(this.A).getSelection(), 0 < d.rangeCount && (b = d.getRangeAt(0).endContainer, d = d.getRangeAt(0).endOffset, 3 == b.nodeType && (c = b.nodeValue.slice(d, Math.min(b.nodeValue.length, d + a)))));
				a = c
			} else a = "";
			return a
		}
		b = Lq(this);
		if (!b) return "";
		c = "";
		d = this.A.A;
		d.selection && !Zm ? (c = d.selection.createRange(), c.collapse(!0), c.moveStart("word", -1), c = c.text.length > a ? c.text.slice(-a) : c.text) : b.selectionStart ? c = b.value.slice(Math.max(0, b.selectionStart - a), b.selectionStart) : (d = gm(this.A).getSelection(), 0 < d.rangeCount && (b = d.getRangeAt(0).startContainer, d = d.getRangeAt(0).startOffset, 3 == b.nodeType && (c = b.nodeValue.slice(Math.max(0, d - a), d))));
		return c
	};
	y.ib = function (a, b) {
		var c = Lq(this);
		if (c) {
			var d = c.type && c.type.toUpperCase();
			d = ("EMAIL" == d || "NUMBER" == d) && c.tagName.toUpperCase() == va;
			b = b ? b : 0;
			if (!d && c.tagName.toUpperCase() == va && a.length > b) {
				var e = c.maxLength;
				if (typeof e === pf && 0 <= e && e < c.value.length + a.length - b) return
			}
			this.ee();
			e = {};
			e["fs-input"] = a;
			Ir && "gmail" == op && (Hr(c, oe), Hr(c, v, 0, e));
			if (d) c.value = (b ? c.value.slice(0, -b) : c.value) + a;
			else if (K && !G(9) || K && !G(11) && ("\n" == a || !a && 1 == b)) d = this.A.A.selection.createRange(), 0 < b && (a || !d.text) && d.moveStart(xb, -b), (0 < b || d.text) && d.execCommand(Pb, !1, null), " " != a.charAt(0) && " " != a.charAt(a.length - 1) || !this.I || (b = d.duplicate(), b.moveToElementText(d.parentElement()), e = d.duplicate(), " " == a.charAt(0) && (d.moveStart(xb, -1), b.inRange(d) ? (e = d.text.charAt(0), a = (" " == e ? "\u00a0" : e) + a) : d = e), e = d.duplicate(), " " == a.charAt(a.length - 1) && (d.moveEnd(xb, 1), b.inRange(d) && " " == d.text.charAt(d.text.length - 1) && (a = a.slice(0, a.length - 1) + "\u00a0"), d = e)), d.text = a, d.collapse(!1), d.select();
			else if (this.I) a: {
				d = b;b = gm(this.A);e = b.document;
				b = b.getSelection();b.isCollapsed || (e.execCommand(Pb, !1, null), a || (d = 0));
				if (0 < d) {
					if ((a || 1 < d || K || Zm) && 3 == b.anchorNode.nodeType && 0 < b.rangeCount) {
						var g = b.getRangeAt(0),
							h, k = b.anchorOffset;
						for (h = Math.min(d, k); k >= h;) {
							g.setStart(b.anchorNode, k - h);
							b.addRange(g);
							if (b.toString().length == h) break;
							h++
						}
						h > d && (a = b.toString().slice(0, h - d) + a)
					}
					b.isCollapsed && K || e.execCommand(Pb, !1, null)
				}
				if (a) {
					if (e.queryCommandSupported) {
						if (e.queryCommandSupported("insertText")) {
							e.execCommand("insertText", !1, a);
							break a
						}
						if (e.queryCommandSupported("insertHTML")) {
							a =
								a.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br>").replace(/\u0020/g, "&nbsp;");
							e.execCommand("insertHTML", !1, a);
							break a
						}
					}
					if (3 == b.anchorNode.nodeType) {
						d = b.anchorNode;
						g = b.anchorNode.nodeValue;
						e = b.anchorOffset + a.length;
						k = h = b.anchorOffset;
						for (var l = [" ", "\u00a0"]; 0 < k && E(l, g[--k]););
						for (; h < g.length && E(l, g[h++]););
						if (" " == a.charAt(0) || " " == a.charAt(a.length - 1) || k < h) a = g.slice(k, b.anchorOffset) + a + g.slice(b.anchorOffset, h), a = a.replace(/\u00a0/g, " "), a = a.replace(/^\u0020/g,
							"\u00a0"), a = a.replace(/\u0020{2}/g, " \u00a0"), a = a.replace(/\u0020$/g, "\u00a0");
						d.nodeValue = g.slice(0, k) + a + g.slice(h)
					} else a = a.replace(/ /g, "\u00a0"), d = em(this.A, a), e = b.anchorNode, e.insertBefore(d, e.childNodes[b.anchorOffset] || null), e = a.length;
					a = b.getRangeAt(0);
					a.setStart(d, e);
					a.collapse(!0);
					b.addRange(a)
				}
			}
			else d = this.D, e = d.selectionStart, g = d.selectionEnd, h = d.value.length, e > h && (e = h), g > h && (g = h), !a && e < g && (b = 0), e -= Math.min(e, b), d.value = d.value.slice(0, e) + a + d.value.slice(g), e += a.length, d.setSelectionRange(e,
				e);
			if (c && "1" == c.getAttribute("itaautodir")) {
				b = a = 0;
				d = !1;
				e = this.ab(50).split(UD);
				for (g = 0; g < e.length; g++) h = e[g], SD.test(h) ? (a++, b++) : TD.test(h) ? d = !0 : RD.test(h) ? b++ : VD.test(h) && (d = !0);
				c.dir = -1 == (0 == b ? d ? 1 : 0 : .4 < a / b ? -1 : 1) ? $f : Je
			}
		}
	};
	y.xf = function () {
		var a = Lq(this);
		if (a) {
			var b = J(a),
				c = a.nodeName.toUpperCase();
			if (gl(8) && !gl(9) && a.tagName.toUpperCase() == Na) {
				var d = b.A.selection.createRange();
				c = d.getBoundingClientRect();
				var e = 0,
					g = 0;
				try {
					g = In(a) + 2
				} catch (k) {
					g = 16
				}
				if (vn(a)) {
					for (var h = d.duplicate(); h.boundingHeight <= g && h.htmlText == h.text && (e = d.boundingLeft - h.boundingLeft, 0 != h.moveStart(xb, -1)););
					d = hn(a).x;
					e = Math.max(c.left - e, d)
				} else e = c.left;
				c = new H(e, c.top + g)
			} else c = c == Na || c == va ? Jq(a) : Iq(b);
			g = c.x;
			e = c.y;
			a = Hq(a);
			g = g > a.right ? a.right : g;
			g = g <
				a.left ? a.left : g;
			e = e > a.bottom ? a.bottom : e;
			e = e < a.top ? a.top : e;
			c.x = g;
			c.y = e;
			Gq(c, b);
			return new Kq(c.x, c.y)
		}
		return null
	};
	y.ee = function () {
		var a = Lq(this);
		a && (this.F ? gm(this.A).focus() : a.focus())
	};
	y.Ud = function () {
		var a = Lq(this);
		if (!a) return !0;
		if (typeof a.selectionStart === pf) return a.selectionStart == a.selectionEnd;
		a = Fq(gm(this.A));
		return !!a && a.mc()
	};
	y.Yc = function () {
		if (!Lq(this)) return null;
		var a = null;
		this.I ? a = new Oq(this) : a = new Nq(this);
		return this.C[String(Ji(a))] = a
	};
	y.Qc = function (a, b, c) {
		Ir(Lq(this), a, b, c)
	};
	var Vr = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
	var Zr = {},
		as = ["box-shadow", "z-index", "margin", Bf, "display"];
	var fs;
	z(ds, M);
	ds.prototype.C = function (a) {
		var b = this.B[a.type];
		return b && a.target ? (b = b[Ji(a.target)]) ? Bs(b, function (c) {
			var d = c.listener;
			return typeof d === t ? d.call(c.va, a) : d && d.handleEvent && typeof d.handleEvent === t ? d.handleEvent.call(d, a) : !0
		}) : !0 : !0
	};
	ds.prototype.M = function (a) {
		var b = this.I[a.charCode];
		return b && a.target ? (b = b[Ji(a.target)]) ? Bs(b, function (c) {
			var d = c.listener;
			return typeof d === t ? d.call(c.va, a) : d && d.handleEvent && typeof d.handleEvent === t ? d.handleEvent.call(d, a) : !0
		}) : !0 : !0
	};
	ds.prototype.L = function () {
		N(this.D);
		delete this.B;
		delete this.I;
		delete this.A
	};
	ks.prototype.Dc = function (a, b) {
		return this.listener == a && this.va == b
	};
	var es = {};
	z(qs, R);
	y = qs.prototype;
	y.L = function () {
		R.prototype.L.call(this);
		N(this.A);
		delete this.A;
		this.D = this.C = this.I = null;
		N(this.F);
		delete this.F;
		N(this.B);
		delete this.B
	};
	y.Qc = function (a, b, c) {
		this.A.Qc(a, b, c)
	};
	y.pd = function (a) {
		a instanceof ap && (a.type = jg);
		Fr(a) || this.dispatchEvent(a)
	};
	y.ab = function (a) {
		try {
			return this.A.ab(a)
		} catch (b) {}
		return ""
	};
	y.ib = function (a, b) {
		try {
			this.A.ib(a, b)
		} catch (c) {}
	};
	y.xf = function () {
		try {
			return this.A.xf()
		} catch (a) {}
		return null
	};
	y.ee = function () {
		try {
			this.A.ee()
		} catch (a) {}
	};
	y.Yc = function () {
		try {
			return this.A.Yc()
		} catch (a) {}
		return null
	};
	y.Ud = function () {
		try {
			return this.A.Ud()
		} catch (a) {}
		return !0
	};
	z(ts, O);
	/*
	 Portions of this code are from MochiKit, received by
	 The Closure Authors under the MIT license. All other code is Copyright
	 2005-2009 The Closure Authors. All Rights Reserved.
	*/
	vs.prototype.cancel = function (a) {
		if (this.A) this.D instanceof vs && this.D.cancel();
		else {
			if (this.B) {
				var b = this.B;
				delete this.B;
				a ? b.cancel(a) : (b.S--, 0 >= b.S && b.cancel())
			}
			this.N ? this.N.call(this.K, this) : this.J = !0;
			this.A || (a = new Fs(this), zs(this), xs(this, !1, a))
		}
	};
	vs.prototype.ha = function (a, b) {
		this.M = !1;
		xs(this, a, b)
	};
	vs.prototype.then = function (a, b, c) {
		var d, e, g = new mr(function (h, k) {
			d = h;
			e = k
		});
		As(this, d, function (h) {
			h instanceof Fs ? g.cancel() : e(h)
		});
		return g.then(a, b, c)
	};
	vs.prototype.$goog_Thenable = !0;
	C(ys, Pi);
	ys.prototype.message = "Deferred has already fired";
	ys.prototype.name = "AlreadyCalledError";
	C(Fs, Pi);
	Fs.prototype.message = "Deferred was canceled";
	Fs.prototype.name = "CanceledError";
	Es.prototype.B = function () {
		delete Ds[this.oa];
		throw this.A;
	};
	var Ds = {};
	C(Hs, Pi);
	Ks.prototype.Zc = function (a, b) {
		return b
	};
	Ks.prototype.Sa = function (a) {
		return String(a)
	};
	var Ss = Rj("https://ssl.gstatic.com/inputtools/js/ime/2/%{fileName}.js"),
		Os = {},
		Qs = {},
		Us = {},
		mw = null,
		Qu = null,
		Ls = null;
	Ks.prototype.ga = Jj;
	Ks.prototype.transform = Jj;
	Ks.prototype.ub = Jj;
	Ks.prototype.ha = 0;
	yi("google.elements.ime.loadConfig", function (a, b) {
		var c = new Ks;
		Ts(c, b);
		var d = Us[a];
		d && Ts(c, d);
		Os[a] && (c.state = Os[a].state);
		Os[a] = c;
		pj(Qs, function (e) {
			e[a] && Ts(e[a], b)
		});
		Ms().dispatchEvent(new ts("cfga", a))
	});
	yi("google.elements.ime.overrideConfig", Vs);
	var bt = {
		Wn: "zh-hant-t-i0-array-1992",
		Xn: "zh-hans-t-i0-cangjie-1982",
		Yn: Sh,
		Zn: "zh-hans-t-i0-cangjie-1987",
		$n: "zh-hant-t-i0-cangjie-1987",
		ao: "zh-hant-t-i0-cangjie-1987-x-m0-simplified",
		bo: Kh,
		co: Jh,
		eo: Lh,
		fo: "zh-hant-t-i0-dayi-1988",
		io: Xh,
		jo: Uh,
		ho: "ko-t-i0-und",
		ko: Yh,
		lo: Zh,
		mo: $h,
		no: ai,
		oo: bi,
		po: ci,
		qo: "am-t-i0-und",
		ro: $a,
		so: "be-t-i0-und",
		to: "bn-t-i0-und",
		uo: "bg-t-i0-und",
		vo: kf,
		wo: Vb,
		xo: pc,
		yo: Nb,
		zo: "el-t-i0-und",
		Ao: "gu-t-i0-und",
		Bo: dd,
		Co: "hi-t-i0-und",
		Do: ee,
		Eo: zd,
		Fo: ie,
		Ho: he,
		Go: ge,
		Io: "kn-t-i0-und",
		Jo: "ml-t-i0-und",
		Ko: "mr-t-i0-und",
		Lo: "ne-t-i0-und",
		Mo: "or-t-i0-und",
		No: gc,
		Oo: "pl-t-i0-und",
		Po: Rf,
		Qo: Hf,
		Ro: Mf,
		So: "pa-t-i0-und",
		To: bg,
		Uo: "sa-t-i0-und",
		Vo: "sr-t-i0-und",
		Wo: "si-t-i0-und",
		Xo: ac,
		Yo: "ta-t-i0-und",
		Zo: "te-t-i0-und",
		$o: "th-t-i0-und",
		ap: "ti-t-i0-und",
		bp: "tr-t-i0-und",
		ep: "uk-t-i0-und",
		fp: oh,
		gp: "vi-t-i0-und",
		hp: di,
		ip: Vh,
		jp: "zh-hant-t-i0-bopomofo",
		lp: "sq-t-k0-und",
		mp: ab,
		np: sd,
		op: td,
		pp: "eu-t-k0-und",
		qp: "be-t-k0-und",
		rp: "bn-t-k0-und",
		sp: pb,
		tp: "bs-t-k0-und",
		up: Kf,
		vp: "bg-t-k0-und",
		wp: mb,
		xp: "ca-t-k0-und",
		yp: "ccp-t-k0-und",
		zp: "chr-t-k0-und",
		Ap: zb,
		Cp: "hr-t-k0-und",
		Dp: "cs-t-k0-und",
		Ep: Hb,
		Fp: "da-t-k0-und",
		Gp: Cf,
		Hp: gd,
		Ip: "nl-t-k0-und",
		Jp: "nl-t-k0-intl",
		Kp: "dz-t-k0-und",
		Lp: "en-t-k0-und",
		Mp: Wb,
		Np: "et-t-k0-und",
		Op: kh,
		rs: "ti-ethi-t-k0-und",
		Pp: "fi-t-k0-und",
		Qp: "fr-t-k0-und",
		Sp: rc,
		Tp: "ff-t-k0-adlm",
		Vp: "gl-t-k0-und",
		Xp: me,
		Yp: le,
		Zp: "de-t-k0-und",
		$p: "de-t-k0-intl",
		aq: "el-t-k0-und",
		cq: "gu-t-k0-und",
		eq: Yc,
		bq: Xc,
		fq: wf,
		gq: xf,
		iq: "haw-t-k0-und",
		hq: "ht-t-k0-und",
		kq: ed,
		lq: "hi-t-k0-und",
		mq: "hi-t-k0-phone",
		nq: rd,
		oq: "is-t-k0-und",
		pq: "id-t-k0-und",
		qq: be,
		rq: ce,
		sq: de,
		tq: "ga-t-k0-und",
		uq: vc,
		vq: "it-t-k0-und",
		xq: "it-t-k0-intl",
		yq: "jw-t-k0-und",
		zq: "kn-t-k0-und",
		Aq: se,
		Bq: "kk-t-k0-und",
		Cq: "km-t-k0-und",
		Dq: "ko-t-k0-und",
		Eq: "ku-t-k0-und",
		Fq: ve,
		Gq: "lo-t-k0-und",
		Hq: "lv-t-k0-und",
		Iq: "lis-t-k0-und",
		Jq: "lt-t-k0-und",
		Kq: "mk-t-k0-und",
		Lq: "ms-t-k0-und",
		Mq: "ml-t-k0-und",
		Nq: Pe,
		Oq: "mt-t-k0-und",
		Pq: "mi-t-k0-und",
		Qq: "mr-t-k0-und",
		Rq: Ze,
		Sq: "mr-t-k0-phone",
		Tq: Se,
		Uq: "mez-t-k0-und",
		Vq: Qe,
		Wq: "srp-t-k0-und",
		Xq: "my-t-k0-und",
		Yq: df,
		Zq: "nv-t-k0-und",
		$q: "nv-t-k0-std",
		ar: "ne-t-k0-und",
		br: hf,
		dr: "no-t-k0-und",
		gr: "one-t-k0-und",
		hr: "or-t-k0-und",
		ir: uf,
		jr: "osa-t-k0-und",
		kr: Ce,
		lr: Df,
		mr: hc,
		nr: Fb,
		pr: "pl-t-k0-und",
		rr: Pf,
		tr: Jf,
		vr: Of,
		wr: Vf,
		xr: "rom-t-k0-und",
		yr: "ro-t-k0-und",
		zr: Yf,
		Ar: Xf,
		Br: "ru-t-k0-und",
		Cr: dg,
		Dr: cg,
		Er: eg,
		Hr: gg,
		Gr: fg,
		Jr: "see-t-k0-und",
		Kr: ug,
		Lr: vg,
		Mr: "sd-t-k0-und",
		Nr: "si-t-k0-und",
		Or: "sk-t-k0-und",
		Pr: ng,
		Qr: "sl-t-k0-und",
		Rr: "ckb-t-k0-ar",
		Sr: "ckb-t-k0-en",
		Tr: vh,
		Ur: cc,
		Wr: "es-t-k0-intl",
		Xr: "sw-t-k0-und",
		Yr: "sv-t-k0-und",
		Zr: Lb,
		$r: "tl-t-k0-und",
		bs: "tg-t-k0-und",
		ds: Ig,
		fs: "ta-t-k0-und",
		gs: Hg,
		hs: Kg,
		js: Jg,
		ks: "tt-t-k0-und",
		ls: "te-t-k0-und",
		ms: Ng,
		ns: "th-t-k0-und",
		os: Sg,
		ps: Tg,
		qs: "ti-t-k0-und",
		ts: dh,
		vs: fh,
		xs: hh,
		ys: jh,
		zs: ph,
		As: Xb,
		Bs: sh,
		Cs: rh,
		Ds: th,
		Es: Ah,
		Fs: zh,
		Gs: "vi-t-k0-viqr",
		Hs: "vi-t-k0-vni",
		Is: "cy-t-k0-und",
		Ks: Hh,
		cr: Ih,
		er: sf,
		Wp: Ob,
		Vr: bc,
		Rp: qc,
		wq: Ad,
		Il: lf,
		qr: Af,
		sr: If,
		ur: Nf,
		us: bh,
		ws: eh,
		Bp: Bb,
		jq: ad,
		Fr: qg,
		Ir: xc,
		Js: tc,
		Ls: Fe,
		Jl: Wa,
		Kl: tg,
		Ll: Ya,
		Ml: Za,
		Nl: ud,
		Ol: db,
		Pl: hb,
		Ql: ec,
		Rl: ib,
		Sl: ob,
		Tl: rb,
		Ul: kb,
		Vl: cf,
		Wl: ei,
		Xl: tb,
		Yl: ub,
		Zl: Wh,
		$l: Qh,
		am: Th,
		bm: Ab,
		dm: md,
		fm: Gb,
		gm: Jb,
		hm: jf,
		im: Ub,
		jm: Zb,
		km: dc,
		lm: kc,
		nm: ic,
		om: oc,
		pm: yc,
		qm: ke,
		rm: Mb,
		sm: Tb,
		tm: Wc,
		um: nd,
		vm: $c,
		wm: cd,
		xm: fd,
		ym: kd,
		zm: qd,
		Am: xd,
		Bm: vd,
		Cm: uc,
		Dm: yd,
		Em: fe,
		Fm: je,
		Gm: re,
		Hm: pe,
		Im: qe,
		Jm: te,
		Km: ue,
		Lm: we,
		Mm: He,
		Nm: xe,
		Om: Ke,
		Pm: Ie,
		Qm: Ee,
		Rm: Ne,
		Sm: Le,
		Tm: $e,
		Um: Oe,
		Vm: af,
		Wm: Me,
		Xm: Ye,
		Ym: Re,
		Zm: bf,
		$m: gf,
		an: nf,
		bn: ff,
		cn: mf,
		dn: qf,
		fn: tf,
		gn: fc,
		hn: zf,
		jn: Qf,
		kn: Gf,
		ln: Lf,
		mn: yf,
		nn: Wf,
		on: ag,
		pn: pg,
		qn: wc,
		rn: wg,
		tn: rg,
		un: lg,
		vn: mg,
		wn: og,
		xn: sg,
		yn: $b,
		zn: zg,
		An: Bg,
		Bn: Ag,
		Cn: Qg,
		Dn: Gg,
		En: Mg,
		Fn: Rg,
		Gn: qb,
		Hn: Ug,
		In: ah,
		Jn: ih,
		Ln: nh,
		Mn: uh,
		Nn: yh,
		On: Ib,
		Pn: sc,
		Qn: Fh,
		Rn: Gh,
		Sn: fi,
		Kn: lh,
		ht: "en-t-i0-voice",
		ft: Rh,
		gt: "zh-hant-t-i0-voice",
		jt: "xkb:am:phonetic:arm",
		kt: "xkb:be::fra",
		lt: "xkb:be::ger",
		mt: "xkb:be::nld",
		nt: "xkb:bg::bul",
		ot: "xkb:bg:phonetic:bul",
		qt: "xkb:br::por",
		rt: "xkb:by::bel",
		tt: "xkb:ca::fra",
		st: "xkb:ca:eng:eng",
		ut: "xkb:ca:multix:fra",
		wt: "xkb:ch::ger",
		vt: "xkb:ch:fr:fra",
		xt: "xkb:cz::cze",
		yt: "xkb:cz:qwerty:cze",
		zt: "xkb:de::ger",
		At: "xkb:de:neo:ger",
		Bt: "xkb:dk::dan",
		Ct: "xkb:ee::est",
		Et: "xkb:es::spa",
		Dt: "xkb:es:cat:cat",
		Gt: "xkb:fo::fao",
		Ft: "xkb:fi::fin",
		Ht: "xkb:fr:bepo:fra",
		It: "xkb:fr::fra",
		Jt: "xkb:gb:dvorak:eng",
		Kt: "xkb:gb:extd:eng",
		Lt: "xkb:ge::geo",
		Mt: "xkb:gr::gre",
		Nt: "xkb:hr::scr",
		Ot: "xkb:hu::hun",
		Pt: "xkb:hu:qwerty:hun",
		Qt: "xkb:ie::ga",
		Rt: "xkb:il::heb",
		St: "xkb:is::ice",
		Tt: "xkb:it::ita",
		Ut: "xkb:jp::jpn",
		Vt: "xkb:kz::kaz",
		Wt: "xkb:latam::spa",
		Xt: "xkb:lt::lit",
		Yt: "xkb:lv:apostrophe:lav",
		$t: "xkb:mn::mon",
		Zt: "xkb:mk::mkd",
		au: "xkb:mt::mlt",
		bu: "xkb:no::nob",
		cu: "xkb:pl::pol",
		du: "xkb:pt::por",
		eu: "xkb:ro::rum",
		fu: "xkb:ro:std:rum",
		gu: "xkb:rs::srp",
		iu: "xkb:ru::rus",
		hu: "xkb:ru:phonetic:rus",
		ju: "xkb:se::swe",
		ku: "xkb:si::slv",
		lu: "xkb:sk::slo",
		nu: "xkb:tr::tur",
		mu: "xkb:tr:f:tur",
		ou: "xkb:ua::ukr",
		tu: "xkb:us::eng",
		uu: "xkb:us::fil",
		vu: "xkb:us::ind",
		Cu: "xkb:us::msa",
		pu: "xkb:us:altgr-intl:eng",
		qu: "xkb:us:colemak:eng",
		ru: "xkb:us:dvorak:eng",
		su: "xkb:us:dvp:eng",
		wu: "xkb:us:intl:eng",
		xu: "xkb:us:intl:nld",
		Bu: "xkb:us:intl:por",
		yu: "xkb:us:intl_pc:eng",
		zu: "xkb:us:intl_pc:nld",
		Au: "xkb:us:intl_pc:por",
		Eu: "xkb:us:workman-intl:eng",
		Du: "xkb:us:workman:eng"
	};
	at.prototype.toString = function () {
		return this.code
	};
	var ht = [ab, Cf, ed, Df, hc, vh, hh, ph, Hh],
		gt = [$a, dd, gc, oh],
		kt = {
			arm: "hy",
			bel: "be",
			bul: "bg",
			cat: "ca",
			cze: "cs",
			dan: "da",
			eng: q,
			est: "et",
			fao: "fo",
			fin: "fi",
			fra: "fr",
			geo: "ka",
			ger: "de",
			gre: "el",
			heb: bd,
			hun: "hu",
			ice: "is",
			ind: "id",
			ita: "it",
			jpn: "ja",
			kaz: "kk",
			lav: "lv",
			lit: "lt",
			mlt: "mt",
			mon: "mn",
			msa: "ms",
			nld: "nl",
			nob: "no",
			pol: "pl",
			por: "pt",
			rum: "ro",
			rus: "ru",
			scr: "hr",
			slo: "sk",
			slv: "sl",
			spa: "es",
			srp: "sr",
			swe: "sv",
			tur: "tr",
			ukr: "uk"
		},
		Ws = {
			"xkb:us:intl:por": "pt",
			"xkb:br::por": "pt",
			"xkb:pt::por": "pt"
		},
		dt = {},
		$s = ["bn", "gu", "pa",
			"kn", "ml", "or", "sa", Fg, "te", "ne"
		],
		ft = {
			im_pinyin_zh_hans: Xh,
			im_pinyin_zh_hant: Uh,
			im_t13n_ja: ie,
			"im_t13n_ja-Hira": ee,
			im_wubi_zh_hans: di,
			im_zhuyin_zh_hant: Vh,
			vkd_bg_phone: mb,
			vkd_chr_phone: zb,
			vkd_cs_qwertz: Hb,
			vkd_deva_phone: gd,
			vkd_en_dvorak: Wb,
			vkd_es_es: cc,
			vkd_ethi: kh,
			vkd_gu_phone: Yc,
			vkd_guru_inscript: wf,
			vkd_guru_phone: xf,
			vkd_hu_101: rd,
			vkd_hy_east: sd,
			vkd_hy_west: td,
			vkd_ka_qwerty: me,
			vkd_ka_typewriter: le,
			vkd_ro_sr13392_primary: Yf,
			vkd_ro_sr13392_secondary: Xf,
			vkd_ru_phone: dg,
			vkd_ru_phone_aatseel: cg,
			vkd_ru_phone_yazhert: eg,
			vkd_sk_qwerty: ng,
			vkd_ta_itrans: Hg,
			vkd_ta_tamil99: Ig,
			vkd_ta_typewriter: Jg,
			vkd_th_pattajoti: Sg,
			vkd_th_tis: Tg,
			vkd_tr_f: dh,
			vkd_tr_q: fh,
			vkd_uk_101: jh,
			vkd_us_intl: rc,
			vkd_uz_cyrl_phone: sh,
			vkd_uz_cyrl_type: rh,
			vkd_vi_tcvn: Ah,
			vkd_vi_telex: zh
		},
		Zs = yj(ft),
		Ys = {
			"nl-t-k0-intl": qh,
			"fr-t-k0-intl": qh,
			"de-t-k0-intl": qh,
			"ht-t-k0-und": "fr",
			"id-t-k0-und": De,
			"ga-t-k0-und": De,
			"it-t-k0-intl": qh,
			"jw-t-k0-und": De,
			"mr-t-k0-und": "deva_phone",
			"mr-t-k0-devanaga": "hi",
			"ms-t-k0-und": De,
			"pt-br-t-k0-intl": qh,
			"pt-pt-t-k0-intl": qh,
			"sa-t-k0-devanaga": "hi",
			"es-t-k0-intl": qh,
			"sw-t-k0-und": De,
			"tl-t-k0-und": De,
			"ti-t-k0-und": "ethi",
			"cy-t-k0-und": De
		};
	var mt = 0;
	lt.prototype.cancel = function (a) {
		a && (a.Ig && a.Ig.cancel(), a.oa && rt(a.oa, !1))
	};
	y = st.prototype;
	y.vb = function () {
		return this.D
	};
	y.Ka = function () {
		vt(this);
		for (var a = [], b = 0; b < this.A.length; b++) a.push(this.B[this.A[b]]);
		return a
	};
	y.xb = function () {
		vt(this);
		return this.A.concat()
	};
	y.zd = function (a) {
		for (var b = 0; b < this.A.length; b++) {
			var c = this.A[b];
			if (ut(this.B, c) && this.B[c] == a) return !0
		}
		return !1
	};
	y.Dc = function (a, b) {
		if (this === a) return !0;
		if (this.D != a.vb()) return !1;
		b = b || tt;
		vt(this);
		for (var c, d = 0; c = this.A[d]; d++)
			if (!b(this.get(c), a.get(c))) return !1;
		return !0
	};
	y.get = function (a, b) {
		return ut(this.B, a) ? this.B[a] : b
	};
	y.set = function (a, b) {
		ut(this.B, a) || (this.D++, this.A.push(a), this.C++);
		this.B[a] = b
	};
	y.forEach = function (a, b) {
		for (var c = this.xb(), d = 0; d < c.length; d++) {
			var e = c[d],
				g = this.get(e);
			a.call(b, g, e, this)
		}
	};
	y.Pb = function (a) {
		vt(this);
		var b = 0,
			c = this.C,
			d = this,
			e = new Op;
		e.next = function () {
			if (c != d.C) throw Error("The map has changed since the iterator was created");
			if (b >= d.A.length) throw Pp;
			var g = d.A[b++];
			return a ? g : d.B[g]
		};
		return e
	};
	Dt.prototype.toString = function () {
		var a = [],
			b = this.D;
		b && a.push(Kt(b, pE, !0), ":");
		var c = this.C;
		if (c || "file" == b) a.push("//"), (b = this.S) && a.push(Kt(b, pE, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.M, null != c && a.push(":", String(c));
		if (c = this.I) this.C && "/" != c.charAt(0) && a.push("/"), a.push(Kt(c, "/" == c.charAt(0) ? qE : rE, !0));
		(c = this.B.toString()) && a.push("?", c);
		(c = this.F) && a.push("#", Kt(c, sE));
		return a.join("")
	};
	var pE = /[#\/\?@]/g,
		rE = /[#\?:]/g,
		qE = /[#\?]/g,
		Lt = /[#\?@]/g,
		sE = /#/g;
	y = Gt.prototype;
	y.vb = function () {
		Nt(this);
		return this.B
	};
	y.add = function (a, b) {
		Nt(this);
		this.D = null;
		a = Qt(this, a);
		var c = this.A.get(a);
		c || this.A.set(a, c = []);
		c.push(b);
		this.B += 1;
		return this
	};
	y.zd = function (a) {
		var b = this.Ka();
		return E(b, a)
	};
	y.forEach = function (a, b) {
		Nt(this);
		this.A.forEach(function (c, d) {
			D(c, function (e) {
				a.call(b, e, d, this)
			}, this)
		}, this)
	};
	y.xb = function () {
		Nt(this);
		for (var a = this.A.Ka(), b = this.A.xb(), c = [], d = 0; d < b.length; d++)
			for (var e = a[d], g = 0; g < e.length; g++) c.push(b[d]);
		return c
	};
	y.Ka = function (a) {
		Nt(this);
		var b = [];
		if (typeof a === x) St(this, a) && (b = Zi(b, this.A.get(Qt(this, a))));
		else {
			a = this.A.Ka();
			for (var c = 0; c < a.length; c++) b = Zi(b, a[c])
		}
		return b
	};
	y.set = function (a, b) {
		Nt(this);
		this.D = null;
		a = Qt(this, a);
		St(this, a) && (this.B -= this.A.get(a).length);
		this.A.set(a, [b]);
		this.B += 1;
		return this
	};
	y.get = function (a, b) {
		if (!a) return b;
		a = this.Ka(a);
		return 0 < a.length ? String(a[0]) : b
	};
	y.toString = function () {
		if (this.D) return this.D;
		if (!this.A) return "";
		for (var a = [], b = this.A.xb(), c = 0; c < b.length; c++) {
			var d = b[c],
				e = encodeURIComponent(String(d));
			d = this.Ka(d);
			for (var g = 0; g < d.length; g++) {
				var h = e;
				"" !== d[g] && (h += "=" + encodeURIComponent(String(d[g])));
				a.push(h)
			}
		}
		return this.D = a.join("&")
	};
	z(Tt, M);
	Tt.prototype.L = function () {
		this.A && this.abort(this.B);
		this.A = null
	};
	Tt.prototype.D = function (a, b, c, d) {
		this.B && this.abort(this.B);
		a = this.S + a;
		var e = a + "&" + this.F;
		e != this.C && (Or(), a = Xj(a), this.A = new lt(a, this.F), this.C = e);
		b && Pt(b);
		c = B(c, d);
		this.B = {
			Dl: qt(this.A, b, B(this.M, this, c, !0), B(this.M, this, c, !1)),
			key: this.C
		};
		this.I = Ni()
	};
	Tt.prototype.abort = function (a) {
		a.key == this.C && this.A.cancel(a.Dl)
	};
	Tt.prototype.M = function (a, b, c) {
		b && this.J.push("ql", Ni() - this.I);
		a(b, b ? c : null);
		this.B = null
	};
	z(Vt, R);
	y = Vt.prototype;
	y.Be = function () {
		return !!this.A
	};
	y.Jd = function () {
		return this.D
	};
	y.Vd = function () {
		return Ut(this.Jd())
	};
	y.Ce = function (a, b, c, d) {
		c = void 0 === c ? "" : c;
		if (!this.A) {
			b = (void 0 === b ? "GET" : b).toUpperCase();
			this.B = !0;
			this.A = new XDomainRequest;
			this.A.onload = B(this.Rh, this);
			this.A.onerror = B(this.Sk, this);
			this.A.ontimeout = B(this.yl, this);
			var e = window.location.href,
				g = e.indexOf("://");
			a = a.replace(/^http[s]/, 0 > g ? "N/A" : e.slice(0, g));
			!d && c && (a = a + "?" + c, c = "");
			try {
				this.A.open(b, a)
			} catch (h) {
				Xt(this);
				Wt(this);
				return
			}
			try {
				this.C = !0, this.A.send(c), this.C = !1
			} catch (h) {}
		}
	};
	y.Rh = function () {
		if (this.B)
			if (this.D = 200, this.C) A.setTimeout(B(this.Rh, this), 0);
			else {
				this.dispatchEvent(Tf);
				this.B = !1;
				try {
					this.dispatchEvent(Cb), this.dispatchEvent("success")
				} finally {
					Wt(this)
				}
			}
	};
	y.abort = function () {
		this.A && this.B && (this.B = !1, this.A.abort(), this.dispatchEvent(Cb), this.dispatchEvent("abort"), Wt(this))
	};
	y.L = function () {
		delete this.A;
		this.A = null
	};
	y.yl = function () {
		"undefined" != typeof lu && this.A && (this.dispatchEvent("timeout"), this.abort())
	};
	y.Sk = function () {
		this.B = !1;
		this.A && this.A.abort();
		Xt(this);
		Wt(this)
	};
	y.Bf = function () {
		try {
			return this.A ? this.A.responseText : ""
		} catch (a) {
			return ""
		}
	};
	Zt.prototype.A = null;
	var tE;
	C(bu, Zt);
	tE = new bu;
	C(du, R);
	var uE = /^https?$/i,
		vE = ["POST", "PUT"],
		eu = [];
	y = du.prototype;
	y.oi = function () {
		this.da();
		Yi(eu, this)
	};
	y.Ff = function (a) {
		this.R = a
	};
	y.Ce = function (a, b, c, d) {
		if (this.A) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.K + "; newUri=" + a);
		b = b ? b.toUpperCase() : "GET";
		this.K = a;
		this.S = !1;
		this.B = !0;
		this.A = this.M ? cu(this.M) : cu(tE);
		this.I = this.M ? au(this.M) : au(tE);
		this.A.onreadystatechange = B(this.Uh, this);
		try {
			this.J = !0, this.A.open(b, String(a), !0), this.J = !1
		} catch (g) {
			ku(this);
			return
		}
		a = c || "";
		var e = new st(this.headers);
		d && At(d, function (g, h) {
			e.set(h, g)
		});
		d = Ui(e.xb(), hu);
		c = A.FormData && a instanceof A.FormData;
		!E(vE, b) || d || c ||
			e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
		e.forEach(function (g, h) {
			this.A.setRequestHeader(h, g)
		}, this);
		this.T && (this.A.responseType = this.T);
		"withCredentials" in this.A && this.A.withCredentials !== this.R && (this.A.withCredentials = this.R);
		try {
			nu(this), 0 < this.N && ((this.$ = gu(this.A)) ? (this.A.timeout = this.N, this.A.ontimeout = B(this.Sc, this)) : this.F = Cr(this.Sc, this.N, this)), this.C = !0, this.A.send(a), this.C = !1
		} catch (g) {
			ku(this)
		}
	};
	y.Sc = function () {
		"undefined" != typeof lu && this.A && (this.dispatchEvent("timeout"), this.abort(8))
	};
	y.abort = function () {
		this.A && this.B && (this.B = !1, this.D = !0, this.A.abort(), this.D = !1, this.dispatchEvent(Cb), this.dispatchEvent("abort"), ju(this))
	};
	y.L = function () {
		this.A && (this.B && (this.B = !1, this.D = !0, this.A.abort(), this.D = !1), ju(this, !0));
		du.O.L.call(this)
	};
	y.Uh = function () {
		this.ha || (this.J || this.C || this.D ? mu(this) : this.ql())
	};
	y.ql = function () {
		mu(this)
	};
	y.Be = function () {
		return !!this.A
	};
	y.Vd = function () {
		var a = this.Jd(),
			b;
		if (!(b = Ut(a))) {
			if (a = 0 === a) a = String(this.K).match(Vr)[1] || null, !a && A.self && A.self.location && (a = A.self.location.protocol, a = a.substr(0, a.length - 1)), a = !uE.test(a ? a.toLowerCase() : "");
			b = a
		}
		return b
	};
	y.Jd = function () {
		try {
			return 2 < (this.A ? this.A.readyState : 0) ? this.A.status : -1
		} catch (a) {
			return -1
		}
	};
	y.Bf = function () {
		try {
			return this.A ? this.A.responseText : ""
		} catch (a) {
			return ""
		}
	};
	z(ou, M);
	ou.prototype.L = function () {
		this.B = null;
		this.A.da();
		this.A = null;
		N(this.C)
	};
	ou.prototype.S = function (a, b, c) {
		if (!this.ha) {
			var d = c.target;
			(c = d.Vd() && 0 != d.Jd()) && this.M.push("ql", Ni() - this.I);
			var e = B;
			if (d = c ? d.Bf() : null) {
				d = d.replace(/\s*while\(1\);\s*(.*)/g, "$1");
				try {
					var g = JSON.parse(d)
				} catch (h) {
					g = null
				}
			} else g = null;
			a = e(a, b, c, g);
			this.C.ka(this.A, Cb, this.B);
			this.B = null;
			Cr(a)
		}
	};
	ou.prototype.D = function (a, b, c, d, e, g) {
		a = this.F + a;
		this.A.Be() && (this.A.abort(), this.B || (this.C.ka(this.A, Cb, this.B), this.B = null));
		b && (a = a + "?" + Pt(b).toString());
		b = g && JSON && JSON.stringify ? JSON.stringify(g) : "";
		65536 > b.length && (c && (this.B = B(this.S, this, c, d || null), this.C.H(this.A, Cb, this.B)), this.A.Ce(a, "POST", b, e));
		this.I = Ni()
	};
	ou.prototype.abort = function () {
		this.A.abort()
	};
	z(pu, M);
	y = pu.prototype;
	y.rd = function (a) {
		return E([wb, "cd"], a)
	};
	y.Gh = function (a, b) {
		if (this.rd(a)) {
			switch (a) {
				case wb:
					var c = arguments[1];
					this.D = c;
					if (this.md(c)) {
						if (this.active = arguments[2], this.A && Y && (c = this.A.C)) qu(c, "autocomplete", this.active), qu(c, "autocorrect", this.active), qu(c, gb, this.active)
					} else this.active = !1;
					break;
				case vb:
					var d = arguments[1];
					(c = arguments[2]) ? this.A = d: this.A == d && "translate" != op && (this.A = null);
					this.active && this.A && Y && (d = this.A.C) && (qu(d, "autocomplete", c), qu(d, "autocorrect", c), qu(d, gb, c));
					break;
				case "cd":
					this.A && (c = this.A, c.C && c.C.setAttribute("dir",
						arguments[1]))
			}
			this.qd.apply(this, arguments)
		}
	};
	y.fc = function () {
		return null
	};
	y.handleEvent = function (a, b) {
		this.A = a;
		return this.Qe(b)
	};
	y.Qe = function () {
		return !1
	};
	y.register = function (a) {
		this.A = a
	};
	y.Oc = function (a) {
		this.A == a && (this.A = null)
	};
	y.qd = Jj;
	y.Rd = Ij;
	y.md = Ij;
	z(su, pu);
	y = su.prototype;
	y.fc = function () {
		var a = [];
		D(this.B, function (b) {
			aj(a, b.fc())
		});
		dj(a);
		return a
	};
	y.register = function (a) {
		D(this.B, function (b) {
			b.register(a)
		})
	};
	y.Oc = function (a) {
		D(this.B, function (b) {
			b.Oc(a)
		})
	};
	y.handleEvent = function (a, b) {
		var c = !1,
			d = this.F[b.type];
		d && D(d, function (e) {
			c = c || e.handleEvent(a, b)
		});
		return c
	};
	y.Rd = function (a, b) {
		var c = !1;
		D(this.I, function (d) {
			c = c || d.Rd(a, b)
		});
		return c
	};
	y.qd = function (a, b) {
		var c = $i(arguments);
		this.I = [];
		this.F = {};
		D(this.B, function (d) {
			d.Gh.apply(d, c);
			d.active && (this.I.push(d), D(d.fc(), function (e) {
				this.F[e] = this.F[e] || [];
				this.F[e].push(d)
			}, this))
		}, this)
	};
	y.rd = function (a) {
		for (var b = 0; b < this.B.length; ++b)
			if (this.B[b].rd(a)) return !0;
		return !1
	};
	y.L = function () {
		this.B && D(this.B, function (a) {
			a.da()
		})
	};
	y.md = function () {
		return !0
	};
	z(vu, O);
	wu.prototype.load = function (a) {
		return this.A[a] || null
	};
	var xu = {};
	z(Cu, O);
	Du.prototype.toJSON = function () {
		var a = {};
		a.source = this.source;
		a.target = this.target;
		a.frequency = this.A;
		this.B && (a.normalized_source = this.B);
		this.D && (a.lc = this.D);
		var b = kk(this.C, function (c) {
			switch (c) {
				case 5:
					return 0;
				case 3:
					return 1;
				case 4:
					return 2
			}
			return 3
		}).join(" ");
		b && (a.candidate_type = b);
		return a
	};
	var Fu = {};
	var wE = {},
		Zu = (wE["Content-Type"] = "application/json; charset=UTF-8", wE);
	z(Ru, R);
	Ru.prototype.C = function (a, b, c, d) {
		c && b && Wi(Gu(this.B).B);
		if (c && d[1]) {
			typeof d[0] !== x || this.A.U || (d[0] = a.B, "chext" == op && a.source != d[1][0][0]) || (b = yu(this.B), c = Au(a), b.A[c] = d);
			b = [];
			for (c = 0; c < d[1].length; c++) {
				var e = d[1][c],
					g = Tk(e[0]),
					h = e[1],
					k = e[e.length - 1];
				e = a;
				var l = new zu(e.C, g, e.I, e.F, void 0, e.type);
				l.B = e.B;
				l.context = e.context;
				e = l;
				for (l = 0; l < h.length; l++) {
					var m = this.A.M ? 5 : 0,
						r = g,
						L = "",
						oa = !1,
						lb = "";
					if (k) {
						k.matched_length && (r = g.slice(0, k.matched_length[l]));
						k.annotation && (L = k.annotation[l]);
						if (k.candidate_type) switch (k.candidate_type[l]) {
							case 0:
								m = 5;
								break;
							case 1:
								m = 3;
								break;
							case 2:
								m = 4
						}
						k.is_confident && (oa = !!k.is_confident[l]);
						k.lc && (lb = k.lc[l])
					}
					e.A.push(new tu(r, Tk(h[l]), L, m, oa, lb))
				}
				g = Ju(Gu(this.B), e.source);
				if (0 < g.length)
					for (h = 0; h < e.A.length; h++) {
						if (e.A[h].source != e.source) {
							for (k = 0; k < g.length; k++) e.A.splice(h + k, 0, new tu(e.source, g[k].target, g[k].B, 1));
							break
						}
						for (k = 0; k < g.length; k++)
							if (e.A[h].target == g[k].target) {
								g.splice(k, 1);
								break
							}
					}
				Tu(this, e);
				0 < e.A.length && Uu(this, e);
				b.push(e)
			}
			Su(this, b)
		}
	};
	z(Vu, R);
	y = Vu.prototype;
	y.le = function (a) {
		if (3 == this.status || 2 == this.status) {
			0 > a && (a = 0);
			if (a >= this.C.length) {
				if (this.M) {
					a = Math.ceil(this.C.length / this.B.A);
					this.D = a * this.B.A;
					$u(this, 2 * a);
					return
				}
				a = 0
			}
			this.D = a;
			Yu(this)
		}
	};
	y.Aa = function (a) {
		this.le(this.D + a)
	};
	y.Ba = function (a) {
		this.le((Wu(this) + a) * this.B.A)
	};
	y.bd = function () {
		return ""
	};
	y.hc = function () {
		return ""
	};
	y.wb = function () {
		return []
	};
	y.ic = function () {
		return ""
	};
	y.Wb = function () {
		return ""
	};
	y.reset = function () {
		0 != this.status && this.dispatchEvent("cls");
		this.source = "";
		this.A = 0;
		this.context = "";
		this.D = -1;
		this.C = [];
		this.M = !0;
		this.status = 0;
		this.$ = this.mb = this.S = !1;
		Yu(this)
	};
	y.abort = function () {
		this.reset()
	};
	y.dc = function () {};
	y.lf = function () {};
	y.kf = function () {};
	y.Ma = function (a) {
		0 != a && this.kf(this.A + a)
	};
	y.ud = function () {};
	y.Qa = function () {
		return ""
	};
	y.zf = function () {
		return {}
	};
	y.Kc = function (a) {
		var b = "",
			c = "",
			d = "";
		if (this.B.J) {
			for (var e = 0, g; g = a.A[e]; e++) b = g.C, c += g.source, 0 < g.A.length && (d += g.A[0].target);
			if (c && d) {
				a = this.K;
				c = b + c;
				b += d;
				for (d = 0; d < a.A.length; d++) a.A[d].source == c && (a.A[d].target = b);
				a.B()
			}
		}
	};
	y.L = function () {
		N(this.T);
		N(this.R);
		R.prototype.L.call(this)
	};
	y.ji = function () {
		return !1
	};
	z(av, Vu);
	y = av.prototype;
	y.dc = function (a, b) {
		this.source.length + a.length - b > this.B.I || (a = this.source.slice(0, this.A - b) + a, this.source = a + this.source.slice(this.A), this.A = a.length, this.D = -1, 0 == this.status && this.dispatchEvent("opn"), $u(this))
	};
	y.lf = function (a) {
		var b = this.Wb();
		0 == a.indexOf(b) ? this.source = a.slice(b.length) : (this.source = a, this.F = []);
		this.A = this.source.length;
		this.D = -1;
		$u(this)
	};
	y.kf = function (a) {
		0 > a ? a = 0 : a > this.source.length && (a = this.source.length);
		a != this.A && (this.A = a, this.D = -1, $u(this))
	};
	y.ud = function () {
		if (0 < this.F.length) {
			var a = this.F[this.F.length - 1];
			this.F = this.F.slice(0, -1);
			this.source = a.source + this.source;
			this.A += a.source.length;
			this.I.od("slen");
			this.I.od("tlen");
			this.I.od("ci");
			this.I.od("dur");
			this.I.od(ne)
		} else if (0 < this.source.length && 0 < this.A && (this.source = this.source.slice(0, this.A - 1) + this.source.slice(this.A), this.A--, !this.source)) {
			this.reset();
			return
		}
		this.D = -1;
		$u(this)
	};
	y.Qa = function (a) {
		var b = this.hc();
		if (typeof a === pf) {
			if (a >= this.C.length) return "";
			if (0 > a) return this.I.set(Ta, "cmts"), a = this.wb().join(""), Xu(this, b, a), a;
			this.D = a
		}
		1 == this.status && $u(this);
		if (2 == this.status) return b = this.Wb() + this.source, this.A == this.source.length && (this.I.set(Ta, "cmtd"), Xu(this, b)), b;
		if (3 != this.status || 0 > this.D || this.D >= this.C.length) return "";
		bv(this);
		a = this.C[this.D];
		this.F.push(new uu(a.source, a.target, a.A, a.D, a.type));
		this.source = this.source.slice(a.source.length);
		this.A -= a.source.length;
		0 > this.A && (this.A = 0);
		this.$ = 2 == a.type;
		Yu(this);
		if (this.source) this.D = -1, $u(this);
		else {
			a = this.wb().join("");
			var c = kk(Kl(this.F, function (g) {
					return !!g.A
				}), function (g) {
					return g.A
				}).join(" "),
				d = kk(this.F, function (g) {
					return g.D
				}).join(" "),
				e = kk(this.F, function (g) {
					return g.B
				});
			Iu(Gu(this.J.code), b, a, c, d, e);
			this.I.set(Ta, "cmtt");
			Xu(this, b, a);
			return a
		}
		return ""
	};
	y.reset = function () {
		this.F = [];
		Vu.prototype.reset.call(this)
	};
	y.bd = function () {
		return this.source.slice(0, this.A)
	};
	y.ic = function () {
		var a = 0 == this.A ? this.source : this.source.slice(0, this.A);
		this.B.sb || (a = a.toLowerCase());
		return a
	};
	y.Wb = function () {
		for (var a = /^(zh|yue)/.test(this.J.code), b = /[a-zA-Z]$/.test(this.context), c = "", d = 0; d < this.F.length; d++) {
			var e = this.F[d].target;
			a && b && /^[a-zA-Z]/.test(e) && (e = " " + e);
			b = /[a-zA-Z]$/.test(e);
			c += e
		}
		return c
	};
	y.Kc = function (a) {
		var b = a.A[0];
		if (b && (this.B.D || !this.B.F || this.S || 0 != b.A.length && 2 != b.A[0].type)) {
			var c = 0 < b.A.length;
			if (1 == b.type) c && (this.C = b.A, b = mw.ab(1), " " != b && "\u00a0" != b && (this.C[0].target = " " + this.C[0].target));
			else {
				var d = !1,
					e = !1,
					g = !1;
				c && (c = b.A[0], c.B && (e = 4 == c.type, g = 3 == c.type, d = 5 == c.type));
				c = b.C + b.source;
				this.B.M && !d ? this.dispatchEvent(new vu(c, "")) : Vu.prototype.Kc.call(this, a);
				if (2 != this.status || this.Wb() + this.ic() != c) return;
				this.M = b.D;
				this.C = b.A;
				this.B.M ? (a = e || g || d, this.S ? a && 0 > this.D && (this.D =
					0) : (this.C = [], this.M = !1, this.D = -1, a && (this.C = b.A.slice(0, 1)), d && this.B.J && (this.D = 0))) : this.B.J && 0 > this.D && (this.D = 0)
			}
			this.gi = Ni()
		}
		this.status = 3;
		Yu(this)
	};
	y.wb = function () {
		var a = 0 == this.A ? this.source : this.source.slice(0, this.A),
			b = 0 == this.A ? "" : this.source.slice(this.A);
		if (this.B.yc && a && 0 <= this.D && this.D < this.C.length) {
			var c = this.C[this.D];
			a = c.target + a.slice(c.source.length)
		}
		a = [this.Wb(), a, b];
		0 == this.A && (b = a[1], a[1] = a[2], a[2] = b);
		if (!this.mb)
			for (b = 0; b < a.length; b++) a[b] && (c = this.B.transform(a[b], "")) && (c = c.text, c.length == a[b].length && (a[b] = c));
		return a
	};
	y.hc = function () {
		for (var a = "", b = 0; b < this.F.length; b++) a += this.F[b].source;
		return a + this.source
	};
	y.ji = function () {
		$q(function () {
			var a = mw;
			a.ab(-20).trim() || (this.context = a.ab(20), $u(this, void 0, 1))
		}, this);
		return !1
	};
	y.gi = 0;
	C(dv, R);
	var cv = A.document && A.document.documentElement && !!A.document.documentElement.setCapture && !!A.document.releaseCapture;
	y = dv.prototype;
	y.pb = function (a) {
		this.M = a
	};
	y.L = function () {
		dv.O.L.call(this);
		Jm(this.C, [$g, Te], this.jf, !1, this);
		ao(this.A);
		this.F && this.B.releaseCapture();
		this.C = this.target = null
	};
	y.jf = function (a) {
		var b = a.type == Te;
		!this.M || this.D || b && (!pm(a) || km && a.ctrlKey) ? this.dispatchEvent("earlycancel") : this.dispatchEvent(new iv(xg, this, a.clientX, a.clientY, a)) && (this.D = !0, b && a.preventDefault(), this.fi(), this.clientX = this.$ = a.clientX, this.clientY = this.R = a.clientY, this.screenX = a.screenX, this.screenY = a.screenY, this.deltaX = this.target.offsetLeft, this.deltaY = this.target.offsetTop, this.J = wl(J(this.B).A))
	};
	y.fi = function () {
		var a = this.B,
			b = a.documentElement,
			c = !this.F;
		this.A.H(a, [Zg, Ue], this.bh, {
			capture: c,
			passive: !1
		});
		this.A.H(a, [Yg, We], this.Cc, c);
		this.F ? (b.setCapture(!1), this.A.H(b, "losecapture", this.Cc)) : this.A.H(yl(a), nb, this.Cc);
		this.K && this.A.H(this.K, "scroll", this.Vh, c)
	};
	y.Cc = function (a, b) {
		ao(this.A);
		this.F && this.B.releaseCapture();
		this.D ? (this.D = !1, this.dispatchEvent(new iv("end", this, a.clientX, a.clientY, a, fv(this, this.deltaX), gv(this, this.deltaY), b || a.type == Xg))) : this.dispatchEvent("earlycancel")
	};
	y.bh = function (a) {
		if (this.M) {
			var b = a.clientX - this.clientX,
				c = a.clientY - this.clientY;
			this.clientX = a.clientX;
			this.clientY = a.clientY;
			this.screenX = a.screenX;
			this.screenY = a.screenY;
			if (!this.D) {
				var d = this.$ - this.clientX,
					e = this.R - this.clientY;
				if (0 < d * d + e * e)
					if (this.dispatchEvent(new iv(xg, this, a.clientX, a.clientY, a))) this.D = !0;
					else {
						this.ha || this.Cc(a);
						return
					}
			}
			c = hv(this, b, c);
			b = c.x;
			c = c.y;
			this.D && this.dispatchEvent(new iv("beforedrag", this, a.clientX, a.clientY, a, b, c)) && (jv(this, a, b, c), a.preventDefault())
		}
	};
	y.Vh = function (a) {
		var b = hv(this, 0, 0);
		a.clientX = this.clientX;
		a.clientY = this.clientY;
		jv(this, a, b.x, b.y)
	};
	C(iv, O);
	z(kv, dv);
	kv.prototype.jf = function (a) {
		mv(this, a);
		dv.prototype.jf.call(this, a)
	};
	kv.prototype.fi = function () {
		lv(this, this.B);
		var a = I(this.C);
		a != this.B && lv(this, a);
		this.K && this.A.H(this.K, "scroll", this.Vh, !cv)
	};
	kv.prototype.T = function (a) {
		mv(this, a);
		this.bh(a)
	};
	var nv = null;
	z(pv, O);
	var Gv = {},
		qv = {};
	Ei(sv);
	sv.prototype.If = function (a) {
		return a.tagName == f
	};
	sv.prototype.yf = function (a) {
		a: {
			a = Ip(a);
			for (var b = 0, c = a.length; b < c; b++) {
				var d = a[b];
				if (d = d in qv ? qv[d]() : null) {
					a = d;
					break a
				}
			}
			a = null
		}
		return a
	};
	sv.prototype.Jf = function (a) {
		a = a.G();
		xn(a, !0, P);
		K && (a.hideFocus = !0);
		var b = this.A;
		b && Jr(a, b)
	};
	sv.prototype.Ee = function () {
		return "goog-container"
	};
	var xE;
	Ei(xv);
	var yE = {
		button: "pressed",
		checkbox: yb,
		menuitem: hg,
		menuitemcheckbox: yb,
		menuitemradio: yb,
		radio: yb,
		tab: hg,
		treeitem: hg
	};
	y = xv.prototype;
	y.ed = function () {};
	y.lb = function (a) {
		return a.A.P(f, Ev(this, a).join(" "), a.eb)
	};
	y.Pa = function (a) {
		return a
	};
	y.Fe = function () {
		return !0
	};
	y.Da = function (a, b) {
		b.id && io(a, b.id);
		var c = this.Pa(b);
		c && c.firstChild ? Nv(a, c.firstChild.nextSibling ? $i(c.childNodes) : c.firstChild) : a.eb = null;
		var d = 0,
			e = this.ia(),
			g = this.ia(),
			h = !1,
			k = !1,
			l = !1,
			m = $i(Ip(b));
		D(m, function (L) {
			h || L != e ? k || L != g ? d |= this.we(L) : k = !0 : (h = !0, g == e && (k = !0));
			1 == this.we(L) && Wl(c) && Xl(c) && Vl(c, !1)
		}, this);
		a.qc = d;
		h || (m.push(e), g == e && (k = !0));
		k || m.push(g);
		(a = a.vf) && m.push.apply(m, a);
		if (K && !G("7")) {
			var r = yv(m);
			0 < r.length && (m.push.apply(m, r), l = !0)
		}
		h && k && !a && !l || Jp(b, m.join(" "));
		return b
	};
	y.Ge = function (a) {
		no(a) && this.Tg(a.G(), !0);
		a.isEnabled() && this.Md(a, a.isVisible())
	};
	y.Kf = function (a, b) {
		xn(a, !b, !K && !Zm)
	};
	y.Tg = function (a, b) {
		zv(a, this.ia() + "-rtl", b)
	};
	y.Sg = function (a) {
		var b;
		return Bv(a, 32) && (b = a.G()) ? Wl(b) && Xl(b) : !1
	};
	y.Md = function (a, b) {
		var c;
		if (Bv(a, 32) && (c = a.G())) {
			if (!b && Cv(a, 32)) {
				try {
					c.blur()
				} catch (d) {}
				Cv(a, 32) && a.He(null)
			}(Wl(c) && Xl(c)) != b && Vl(c, b)
		}
	};
	y.Lf = function (a, b, c) {
		var d = a.G();
		if (d) {
			var e = this.Fd(b);
			e && zv(a, e, c);
			this.Ob(d, b, c)
		}
	};
	y.Ob = function (a, b, c) {
		xE || (xE = {
			1: Rb,
			8: hg,
			16: yb,
			64: "expanded"
		});
		b = xE[b];
		var d = a.getAttribute(Zf) || null;
		d && (d = yE[d] || b, b = b == yb || b == hg ? d : b);
		b && X(a, b, c)
	};
	y.fd = function (a, b) {
		var c = this.Pa(a);
		c && (Gl(c), b && (typeof b === x ? Ul(c, b) : (a = function (d) {
			if (d) {
				var e = I(c);
				c.appendChild(typeof d === x ? e.createTextNode(d) : d)
			}
		}, Array.isArray(b) ? D(b, a) : !Fi(b) || "nodeType" in b ? a(b) : D($i(b), a))))
	};
	y.ia = function () {
		return "goog-control"
	};
	y.Fd = function (a) {
		this.A || Fv(this);
		return this.A[a]
	};
	y.we = function (a) {
		this.D || (this.A || Fv(this), this.D = yj(this.A));
		a = parseInt(this.D[a], 10);
		return isNaN(a) ? 0 : a
	};
	C(Hv, U);
	y = Hv.prototype;
	y.eb = null;
	y.qc = 0;
	y.ge = 39;
	y.yd = 255;
	y.Rc = 0;
	y.Ie = !0;
	y.vf = null;
	y.Tf = !0;
	y.Mf = null;
	y.W = function () {
		var a = this.C.lb(this);
		this.D = a;
		Av(this.C, a, this.Nd());
		this.C.Kf(a, !1);
		this.isVisible() || (S(a, !1), a && X(a, hd, !0))
	};
	y.Nd = function () {
		return this.Mf
	};
	y.Bb = function () {
		return this.C.Pa(this.G())
	};
	y.De = function (a) {
		return this.C.Fe(a)
	};
	y.$a = function (a) {
		this.D = a = this.C.Da(this, a);
		Av(this.C, a, this.Nd());
		this.C.Kf(a, !1);
		this.Ie = a.style.display != of
	};
	y.V = function () {
		Hv.O.V.call(this);
		Dv(this.C, this, this.D);
		this.C.Ge(this);
		if (this.ge & -2 && (this.Tf && Jv(this, !0), Bv(this, 32))) {
			var a = this.G();
			if (a) {
				var b = this.J || (this.J = new Rq);
				Qq(b, a);
				jo(this).H(b, ne, this.La).H(a, lc, this.Ji).H(a, nb, this.He)
			}
		}
	};
	y.ta = function () {
		Hv.O.ta.call(this);
		this.J && Sq(this.J);
		this.isVisible() && this.isEnabled() && this.C.Md(this, !1)
	};
	y.L = function () {
		Hv.O.L.call(this);
		this.J && (this.J.da(), delete this.J);
		delete this.C;
		this.N = this.vf = this.eb = null
	};
	y.hd = function (a) {
		this.C.fd(this.G(), a);
		this.eb = a
	};
	y.Hb = function () {
		var a = this.eb;
		if (!a) return "";
		a = typeof a === x ? a : Array.isArray(a) ? kk(a, am).join("") : $l(a);
		return Ik(a)
	};
	y.isVisible = function () {
		return this.Ie
	};
	y.Ea = function (a, b) {
		if (b || this.Ie != a && this.dispatchEvent(a ? "show" : id)) {
			if (b = this.G()) S(b, a), b && X(b, hd, !a);
			this.isEnabled() && this.C.Md(this, a);
			this.Ie = a;
			return !0
		}
		return !1
	};
	y.isEnabled = function () {
		return !Cv(this, 1)
	};
	y.pb = function (a) {
		var b = this.Ha();
		b && typeof b.isEnabled == t && !b.isEnabled() || !Ov(this, 1, !a) || (a || (Qv(this, !1), this.ua(!1)), this.isVisible() && this.C.Md(this, a), Pv(this, 1, !a, !0))
	};
	y.ua = function (a) {
		Ov(this, 2, a) && Pv(this, 2, a)
	};
	y.xg = function (a) {
		Ov(this, 8, a) && Pv(this, 8, a)
	};
	y.wa = function (a) {
		Ov(this, 64, a) && Pv(this, 64, a)
	};
	y.Na = function (a, b) {
		if (this.ea && Cv(this, a) && !b) throw Error(ka);
		!b && Cv(this, a) && Pv(this, a, !1);
		this.ge = b ? this.ge | a : this.ge & ~a
	};
	y.Od = function (a) {
		(!a.relatedTarget || !Ol(this.G(), a.relatedTarget)) && this.dispatchEvent(Yb) && this.isEnabled() && Rv(this, 2) && this.ua(!0)
	};
	y.Uf = function (a) {
		a.relatedTarget && Ol(this.G(), a.relatedTarget) || !this.dispatchEvent("leave") || (Rv(this, 4) && Qv(this, !1), Rv(this, 2) && this.ua(!1))
	};
	y.Qd = Di;
	y.gd = function (a) {
		this.isEnabled() && (Rv(this, 2) && this.ua(!0), !pm(a) || km && a.ctrlKey || (Rv(this, 4) && Qv(this, !0), this.C && this.C.Sg(this) && this.G().focus()));
		!pm(a) || km && a.ctrlKey || a.preventDefault()
	};
	y.rc = function (a) {
		this.isEnabled() && (Rv(this, 2) && this.ua(!0), Cv(this, 4) && this.Nb(a) && Rv(this, 4) && Qv(this, !1))
	};
	y.Zg = function (a) {
		this.isEnabled() && this.Nb(a)
	};
	y.Nb = function (a) {
		if (Rv(this, 16)) {
			var b = !Cv(this, 16);
			Ov(this, 16, b) && Pv(this, 16, b)
		}
		Rv(this, 8) && this.xg(!0);
		Rv(this, 64) && this.wa(!Cv(this, 64));
		b = new O(Ua, this);
		a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.C = a.C);
		return this.dispatchEvent(b)
	};
	y.Ji = function () {
		Rv(this, 32) && Ov(this, 32, !0) && Pv(this, 32, !0)
	};
	y.He = function () {
		Rv(this, 4) && Qv(this, !1);
		Rv(this, 32) && Ov(this, 32, !1) && Pv(this, 32, !1)
	};
	y.La = function (a) {
		return this.isVisible() && this.isEnabled() && this.oc(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
	};
	y.oc = function (a) {
		return 13 == a.keyCode && this.Nb(a)
	};
	if (typeof Hv !== t) throw Error("Invalid component class " + Hv);
	if (typeof xv !== t) throw Error("Invalid renderer class " + xv);
	var zE = Ji(Hv);
	Gv[zE] = xv;
	rv("goog-control", function () {
		return new Hv(null)
	});
	C(Mv, M);
	var Sv = !K || gl(9);
	Mv.prototype.F = function () {
		this.A = !1
	};
	Mv.prototype.I = function () {
		this.A = !0
	};
	Mv.prototype.C = function (a) {
		if (this.A) this.A = !1;
		else {
			var b = a.A,
				c = b.button,
				d = b.type,
				e = Tv(b, Te);
			this.B.gd(new mm(e, a.B));
			e = Tv(b, We);
			this.B.rc(new mm(e, a.B));
			Sv || (b.button = c, b.type = d)
		}
	};
	Mv.prototype.L = function () {
		this.B = null;
		Mv.O.L.call(this)
	};
	C(Z, U);
	y = Z.prototype;
	y.ag = null;
	y.Ic = null;
	y.nc = null;
	y.Pc = null;
	y.$b = !0;
	y.Hc = !0;
	y.Ec = !0;
	y.na = -1;
	y.za = null;
	y.ac = !1;
	y.Eb = !1;
	y.Rb = null;
	y.W = function () {
		var a = this.A,
			b = a.P,
			c = this.nc.Ee(),
			d = [c, this.Pc == ld ? c + "-horizontal" : c + "-vertical"];
		this.isEnabled() || d.push(c + ca);
		this.D = b.call(a, f, d.join(" "))
	};
	y.Bb = function () {
		return this.G()
	};
	y.De = function (a) {
		return this.nc.If(a)
	};
	y.$a = function (a) {
		this.D = wv(this.nc, this, a);
		a.style.display == of && (this.$b = !1)
	};
	y.V = function () {
		Z.O.V.call(this);
		ro(this, function (b) {
			b.ea && Wv(this, b)
		}, this);
		var a = this.G();
		this.nc.Jf(this);
		this.la(this.$b, !0);
		jo(this).H(this, Yb, this.Qf).H(this, jd, this.Gi).H(this, mh, this.Ii).H(this, "open", this.pj).H(this, "close", this.Fi).H(a, Lv.Uc, this.Hi).H(I(a), [Lv.Vc, Lv.vd], this.bj).H(a, [Lv.Uc, Lv.Vc, Lv.vd, w, Ve, Eb], this.Xi);
		this.Ec && Vv(this, !0)
	};
	y.ta = function () {
		this.qb(-1);
		this.za && this.za.wa(!1);
		this.ac = !1;
		Z.O.ta.call(this)
	};
	y.L = function () {
		Z.O.L.call(this);
		this.Ic && (this.Ic.da(), this.Ic = null);
		this.nc = this.za = this.Rb = this.ag = null
	};
	y.Qf = function () {
		return !0
	};
	y.Gi = function (a) {
		var b = so(this, a.target);
		if (-1 < b && b != this.na) {
			var c = Yv(this);
			c && c.ua(!1);
			this.na = b;
			c = Yv(this);
			this.ac && Qv(c, !0);
			this.za && c != this.za && (Bv(c, 64) ? c.wa(!0) : this.za.wa(!1))
		}
		b = this.G();
		null != a.target.G() && X(b, Va, a.target.G().id)
	};
	y.Ii = function (a) {
		a.target == Yv(this) && (this.na = -1);
		this.G().removeAttribute("aria-activedescendant")
	};
	y.pj = function (a) {
		(a = a.target) && a != this.za && a.Ha() == this && (this.za && this.za.wa(!1), this.za = a)
	};
	y.Fi = function (a) {
		a.target == this.za && (this.za = null);
		var b = this.G(),
			c = a.target.G();
		b && Cv(a.target, 2) && c && Mr(b, c)
	};
	y.Hi = function (a) {
		this.Hc && (this.ac = !0);
		var b = Uv(this);
		b && Wl(b) && Xl(b) ? b.focus() : a.preventDefault()
	};
	y.bj = function () {
		this.ac = !1
	};
	y.Xi = function (a) {
		a: {
			var b = a.target;
			if (this.Rb)
				for (var c = this.G(); b && b !== c;) {
					var d = b.id;
					if (d in this.Rb) {
						b = this.Rb[d];
						break a
					}
					b = b.parentNode
				}
			b = null
		}
		if (b) switch (a.type) {
			case Lv.Uc:
				b.gd(a);
				break;
			case Lv.Vc:
			case Lv.vd:
				b.rc(a);
				break;
			case w:
				b.Od(a);
				break;
			case Ve:
				b.Uf(a);
				break;
			case Eb:
				b.Qd(a)
		}
	};
	y.Rg = function () {};
	y.Qg = function () {
		this.qb(-1);
		this.ac = !1;
		this.za && this.za.wa(!1)
	};
	y.La = function (a) {
		return this.isEnabled() && this.isVisible() && (0 != po(this) || this.ag) && this.Ld(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
	};
	y.Ld = function (a) {
		var b = Yv(this);
		if (b && typeof b.La == t && b.La(a) || this.za && this.za != b && typeof this.za.La == t && this.za.La(a)) return !0;
		if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
		switch (a.keyCode) {
			case 27:
				if (this.Ec) Uv(this).blur();
				else return !1;
				break;
			case 36:
				$v(this);
				break;
			case 35:
				aw(this);
				break;
			case 38:
				if (this.Pc == wh) cw(this);
				else return !1;
				break;
			case 37:
				if (this.Pc == ld) no(this) ? bw(this) : cw(this);
				else return !1;
				break;
			case 40:
				if (this.Pc == wh) bw(this);
				else return !1;
				break;
			case 39:
				if (this.Pc == ld) no(this) ?
					cw(this) : bw(this);
				else return !1;
				break;
			default:
				return !1
		}
		return !0
	};
	y.tb = function (a, b) {
		Z.O.tb.call(this, a, b)
	};
	y.Wc = function (a, b, c) {
		a.Rc |= 2;
		a.Rc |= 64;
		!this.Ec && this.Eb || a.Na(32, !1);
		Kv(a, !1);
		var d = a.Ha() == this ? so(this, a) : -1;
		Z.O.Wc.call(this, a, b, c);
		a.ea && this.ea && Wv(this, a);
		a = d; - 1 == a && (a = po(this));
		a == this.na ? this.na = Math.min(po(this) - 1, b) : a > this.na && b <= this.na ? this.na++ : a < this.na && b > this.na && this.na--
	};
	y.Kd = function (a, b) {
		if (a = typeof a === x ? ko(this, a) : a) {
			var c = so(this, a); - 1 != c && (c == this.na ? (a.ua(!1), this.na = -1) : c < this.na && this.na--);
			var d = a.G();
			d && d.id && this.Rb && (c = this.Rb, d = d.id, d in c && delete c[d])
		}
		a = Z.O.Kd.call(this, a, b);
		Kv(a, !0);
		return a
	};
	y.isVisible = function () {
		return this.$b
	};
	y.la = function (a, b) {
		if (b || this.$b != a && this.dispatchEvent(a ? "show" : id)) {
			this.$b = a;
			var c = this.G();
			c && (S(c, a), this.Ec && tv(Uv(this), this.Hc && this.$b), b || this.dispatchEvent(this.$b ? Xa : "afterhide"));
			return !0
		}
		return !1
	};
	y.isEnabled = function () {
		return this.Hc
	};
	y.pb = function (a) {
		this.Hc != a && this.dispatchEvent(a ? "enable" : "disable") && (a ? (this.Hc = !0, ro(this, function (b) {
			b.ki ? delete b.ki : b.pb(!0)
		})) : (ro(this, function (b) {
			b.isEnabled() ? b.pb(!1) : b.ki = !0
		}), this.ac = this.Hc = !1), this.Ec && tv(Uv(this), a && this.$b))
	};
	y.qb = function (a) {
		(a = qo(this, a)) ? a.ua(!0): -1 < this.na && Yv(this).ua(!1)
	};
	y.Fg = function (a) {
		return a.isVisible() && a.isEnabled() && Bv(a, 2)
	};
	z(dw, Z);
	y = dw.prototype;
	y.aa = function (a) {
		Z.prototype.aa.call(this, a)
	};
	y.W = function () {
		Z.prototype.W.call(this);
		var a = this.G();
		Jp(a, "ita-ppe-box");
		Y && V(a, "ita-ppe-box-mobile");
		ov(a);
		a.style.direction = this.model.B.Y ? $f : Je;
		this.la(!1);
		var b = this.B.P(f, "ita-ppe-edit"),
			c = this.B.P(f, "ita-ppe-div");
		this.K = this.B.P(f, "ita-ppe-can-list");
		if (Y) this.N = b, this.B.ya(c, this.K);
		else if (this.model.B.K) {
			this.N = b;
			var d = ew(this);
			fw(this, d.rows[0].cells[0]);
			this.B.ya(c, this.K, d)
		} else d = ew(this), this.N = this.B.P(f, "ita-ppe-div"), this.B.ya(d.rows[0].cells[0], this.N), this.B.ya(b, d), d = ew(this),
			this.B.ya(d.rows[0].cells[0], this.K), fw(this, d.rows[0].cells[1]), this.B.ya(c, d);
		this.C = this.B.P(f, "ita-isv");
		document.body.appendChild(this.C);
		this.B.ya(a, b, c);
		this.model.B.$ || (b.style.display = of )
	};
	y.V = function () {
		Z.prototype.V.call(this);
		this.Eb = !1;
		Xv(this, !1);
		var a = this.G();
		jo(this).H(this.K, p, this.Wi);
		Y ? jo(this).H(this.A.A, p, this.la.bind(this, !1)) : (this.ba = new dv(a), jo(this).H(this.J, p, this.rj).H(this.F, p, this.qj).H(this.J, [w, Ve], B(this.dh, this, this.J)).H(this.F, [w, Ve], B(this.dh, this, this.F)))
	};
	y.Wi = function (a) {
		3 == this.model.status && (a = Vi(this.T, a.target), 0 <= a && this.dispatchEvent(new pv(a)))
	};
	y.rj = function () {
		3 != this.model.status || Kp(this.J, Yd) || this.dispatchEvent("pu")
	};
	y.qj = function () {
		3 != this.model.status || Kp(this.F, Yd) || this.dispatchEvent("pd")
	};
	y.dh = function (a, b) {
		b.type == w ? V(a, "ita-ppe-hov") : W(a, "ita-ppe-hov")
	};
	y.mf = function () {};
	y.la = function (a, b) {
		b = Z.prototype.la.call(this, a, b);
		!a && this.C && (this.C.style.display = of );
		return b
	};
	y.L = function () {
		N(this.ba);
		Z.prototype.L.call(this);
		Il(this.C)
	};
	z(iw, dw);
	iw.prototype.mf = function () {
		var a = this.model.wb();
		this.B.ya(this.N, this.B.P(n, ae, a[0]), a[1], this.B.P(n, Xd), a[2])
	};
	jw.prototype.hb = function (a) {
		if (0 == this.A.status && !this.A.B.D) return !1;
		var b = this.A.bd(),
			c = mw;
		if (this.D) {
			var d = nw(this, !1);
			if (!d) return !1;
			b = d.Mb();
			N(d)
		}
		d = String.fromCharCode(a.charCode);
		var e = 0;
		if (a = this.A.B.transform(b, String.fromCharCode(a.charCode))) d = a.text, e = a.back;
		else if (" " == d) return !1;
		this.D ? (c.ib(d, e), pw(this)) : this.A.dc(d, e);
		return !0
	};
	jw.prototype.wc = function (a) {
		if (!mw.Ud()) return !1;
		this.B = nw(this, !1);
		if (!this.B) return !1;
		var b = this.B.Mb();
		if (b && !b.replace(lw(this.A.B.C), "")) return this.A.dc(b, 0), 1 == this.A.status && $u(this.A), this.A.Qa(), a = String.fromCharCode(a.charCode || a.keyCode), !XD || this.A.B.D || !this.A.B.F || " " != a && "\n" != a ? (Xu(this.A, a, a), !0) : !1;
		this.B.da();
		this.B = null;
		return !1
	};
	z(vw, O);
	z(ww, R);
	y = ww.prototype;
	y.Xd = function () {
		this.A || (this.A = new jw(this.model, this.view))
	};
	y.ug = function (a) {
		if (a.type != v || xw(this) || a.ctrlKey || a.altKey || a.metaKey) return !1;
		var b = mw,
			c = b.ab(20);
		this.model.context = c;
		var d = null;
		if (this.model.B.state & 1 || /^(?:zh|yue)/.test(this.model.J.code)) d = this.model.B.ga(c, String.fromCharCode(a.charCode), this.model.B.state);
		if (d) {
			c = d.text;
			d = d.back;
			if (0 < d) return b.ib(c, d), !0;
			this.A && c.match(this.model.B.S) && this.wc(a) ? b.ib(c, 1) : Xu(this.model, c, c);
			return !0
		}
		return !1
	};
	y.af = function (a) {
		xw(this) && (this.B.push(ne, a.keyCode || a.charCode), this.B.Lc("bsc"));
		return this.A ? tw(this.A) : xw(this) ? (this.model.ud(), !0) : !1
	};
	y.Zd = function (a) {
		this.B.push(ne, a.keyCode || a.charCode);
		return this.A ? (a = this.A, 0 != a.A.status ? (a.A.abort(), a = !0) : a = !1, a) : xw(this) ? (this.model.abort(), !0) : !1
	};
	y.hb = function (a) {
		if (this.A) return this.A.hb(a);
		a = String.fromCharCode(a.charCode);
		var b = 0;
		this.model.B.sb || this.model.source || (this.model.mb = /^[A-Z]/.test(a));
		if (!this.model.mb) {
			var c = this.model.B.transform(this.model.bd(), a);
			if (c) a = c.text, b = c.back;
			else if (" " == a) return !1
		}
		this.model.dc(a, b);
		return !0
	};
	y.Zh = function (a) {
		a.charCode = a.keyCode;
		return this.hb(a)
	};
	y.wc = function (a) {
		if (this.model.mb) return !0;
		this.B.push(ne, a.keyCode || a.charCode);
		if (this.A && !xw(this)) return this.A.wc(a);
		(a = this.model.B.transform(this.model.bd(), "")) && this.model.dc(a.text, a.back);
		$u(this.model);
		return !0
	};
	y.ef = function (a) {
		if (this.model.B.M && 0 == this.model.C.length) return this.model.reset(), !1;
		if (3 == this.model.status) {
			var b = Number(String.fromCharCode(a.charCode));
			if (1 > b || b > this.model.B.A) return !0;
			b = Wu(this.model) * this.model.B.A + b - 1;
			0 <= b && (this.B.push(ne, a.keyCode || a.charCode), this.model.Qa(b), yw(this))
		}
		return !0
	};
	y.Zj = function (a) {
		this.B.push(ne, a.keyCode || a.charCode);
		var b = "",
			c;
		(c = !this.A) || (c = this.A, kw(c) ? (c.A.reset(), c = !0) : c = !1, c = !c);
		c && (b = this.model.Qa(), xw(this) && (b += this.model.Qa(-1)));
		a = c = String.fromCharCode(a.charCode);
		(b = this.model.B.ga(b, c, this.model.B.state)) && 0 == b.back && (a = b.text);
		Xu(this.model, a, a);
		return !0
	};
	y.sd = function (a) {
		var b = String.fromCharCode(a.charCode),
			c = "\t" == b || 9 == a.keyCode,
			d = " " == b || 32 == a.keyCode;
		if (this.A && (3 == this.model.status && 0 > this.model.D || this.model.B.B && !(this.model.S || c && kw(this.A)))) return !1;
		this.B.push(ne, a.keyCode || a.charCode);
		a = "\r" == b || 13 == a.keyCode;
		this.model.B.T && a || !d && !c && !a || 3 == this.model.status && 0 == this.model.C.length || this.model.mb ? this.model.Qa(-1) : this.model.Qa();
		c || yw(this);
		return !0
	};
	y.Yj = function () {
		this.B.push(ne, 0);
		return this.A ? uw(this.A) : !1
	};
	y.ve = function () {
		return []
	};
	y.Pf = function (a) {
		Ol(this.view.G(), a.target) || (this.A ? rw(this.A) : this.model.reset())
	};
	y.Xj = function () {
		Cr(B(function () {
			this.B.hf(this.model.J.code);
			this.B.pe("st");
			if (this.A) {
				var a = this.A;
				if (!a.B) {
					var b = mw;
					b && (a.B = b.Yc())
				}
				a.B && (b = a.B.Yd(!a.A.S && a.A.B.B)) && gw(a.C, b)
			} else(a = mw) && (a = a.xf()) && gw(this.view, a)
		}, this))
	};
	y.Tj = function () {
		if (this.A) {
			var a = this.A;
			N(a.B);
			a.B = null;
			a.F = ""
		}
		this.B.get(Ta) || this.B.set(Ta, "cl");
		this.B.jg("st");
		this.B.report()
	};
	y.Wj = function () {
		if (this.A) {
			var a = this.A;
			if (3 == a.A.status && a.F) {
				for (var b = 0; b < a.A.C.length; b++)
					if (a.A.C[b].target == a.F) {
						a.A.D = b;
						break
					}
				a.F = ""
			}
			a.B && (a.B.Nc() || (a.B.da(), a.B = nw(a, !0)), a.B && (b = a.A.wb().join(""), b != a.B.Mb() && a.B.replace(b)));
			if (!a.A.S && a.A.B.B)
				if (!a.B && 3 == a.A.status && (b = mw) && (a.B = b.Yc()), b = a.C, a = a.B, 3 != b.model.status || 0 == b.model.C.length) b.la(!1);
				else {
					var c = b.model.C[0],
						d = c.target;
					if (c.source == b.model.source && d != b.model.source) {
						if (c = d.length > b.model.source.length) {
							var e = b.model.source;
							c = String(e).toLowerCase();
							e = String(d.substr(0, e.length)).toLowerCase();
							c = 0 == (c < e ? -1 : c == e ? 0 : 1)
						}
						c ? (Ul(b.C, d.slice(b.model.source.length).replace(/\s/g, "\u00a0")), Np(b.C, "ita-isv-red", "ita-isv-grey"), a && (b.R = a.Yd(!0)), b.R.Ga(b.C, 9), b.C.style.display = "block") : d.length == b.model.source.length ? (Ul(b.C, b.model.source), Np(b.C, "ita-isv-grey", "ita-isv-red"), a && (b.R = a.Yd()), b.R.Ga(b.C, 8), b.C.style.display = "block") : b.C.style.display = of
					}
				}
			else hw(a.C)
		} else hw(this.view)
	};
	y.Uj = function (a) {
		if (this.A) {
			var b = this.A,
				c = a.F;
			a = a.A;
			c != a && (b.S[a] = c);
			if (a && b.B && b.A.hc() == c) b.B.replace(a), b.B.da(), b.B = null, b = !0;
			else {
				var d = b.I[c];
				if (d && 0 != d.length) {
					for (var e = 0; e < d.length; ++e) {
						var g = d[e];
						a && g.replace(a);
						g.da()
					}
					delete b.I[c];
					b = !0
				} else b = !1
			}!b && c == a && (c = mw) && (K && !gl(9) ? (c = c.Yc(), c.replace(a), c.da()) : c.ib(a))
		} else(c = mw) && a.A && (this.dispatchEvent(new vw("cmts", a.A)), c.ib(a.A), this.dispatchEvent(new vw("cmte", a.A)))
	};
	y.Vj = function () {
		this.A && qw(this.A)
	};
	y.Of = function (a) {
		this.B.push(ne, 0);
		this.model.Qa(Wu(this.model) * this.model.B.A + a.index);
		yw(this)
	};
	y.Yi = function () {
		this.model.Ba(1)
	};
	y.Zi = function () {
		this.model.Ba(-1)
	};
	y.L = function () {
		N(this.D);
		R.prototype.L.call(this)
	};
	z(zw, ww);
	zw.prototype.hb = function (a) {
		return String.fromCharCode(a.charCode).match(/[0-9]/) && 0 != this.model.B.N && this.model.source.replace(/[0-9]/g, "") ? this.ef(a) : ww.prototype.hb.call(this, a)
	};
	zw.prototype.C = function (a) {
		if (0 < this.model.C.length) return 0 > this.model.D && (this.model.D = 0), a.type = v, a.charCode = a.keyCode, this.sd(a);
		this.model.reset();
		return !1
	};
	zw.prototype.F = function () {
		this.model.Aa(this.model.C.length - 1 - this.model.D)
	};
	zw.prototype.ve = function () {
		function a(l) {
			k.Y && (l = -l);
			h.model.Ba(l)
		}

		function b() {
			return !h.A && !c()
		}

		function c() {
			return e() && k.Ia && k.$ && !h.A
		}

		function d() {
			return !!h.A
		}

		function e() {
			return g() && 0 != h.model.status
		}

		function g() {
			return !k.B || h.model.S
		}
		var h = this,
			k = this.model.B;
		return [
			[p, 0, null, null, d, this.Yj, this],
			[u, 0, 32, null, function () {
				return k.C.test(" ")
			}, this.Zh, this],
			[v, 0, k.C, null, null, this.hb, this],
			[v, 0, /[0-9]/, null, function () {
				return 0 != h.model.status && 0 != k.N && g()
			}, this.ef, this],
			[u, 0, 38, 3, g, this.model.Aa,
				this.model, -1
			],
			[u, 0, 40, 3, g, this.model.Aa, this.model, 1],
			[u, 0, 33, 3, g, this.model.Ba, this.model, -1],
			[u, 0, 37, 3, b, a, void 0, -1],
			[v, 0, k.ca, 3, g, this.model.Ba, this.model, -1],
			[u, 0, 34, 3, g, this.model.Ba, this.model, 1],
			[u, 0, 39, 3, b, a, void 0, 1],
			[v, 0, k.Z, 3, g, this.model.Ba, this.model, 1],
			[v, 0, k.zc, null, e, this.Zj, this],
			[u, 0, 32, null, e, this.sd, this],
			[u, 0, 32, null, function () {
				return k.B && !!h.A
			}, this.model.ji, this.model],
			[u, 0, 13, null, e, this.sd, this],
			[u, 0, 9, 3, d, this.C, this],
			[u, 0, 8, null, null, this.af, this],
			[u, 0, 27, null, e, this.Zd,
				this
			],
			[v, 0, k.S, 0, function () {
				return !!h.A && !k.D
			}, this.wc, this],
			[u, 0, 37, null, c, this.model.Ma, this.model, -1],
			[u, 0, 39, null, c, this.model.Ma, this.model, 1],
			[u, 0, 36, null, c, this.model.Ma, this.model, -999],
			[u, 0, 35, null, c, this.model.Ma, this.model, 999],
			[u, 0, 36, 3, g, this.model.Aa, this.model, -999],
			[u, 0, 35, 3, g, this.F, this]
		]
	};
	z(Aw, R);
	Aw.prototype.push = function (a, b) {
		this.A.push(new uu(a, b || ""));
		this.B()
	};
	Aw.prototype.B = function () {
		if (0 < this.A.length && 2E3 < (new Date).getTime() - this.A[0].timestamp) {
			var a = this.A.pop();
			a.target && this.dispatchEvent(new vu(a.source, a.target));
			this.reset()
		}
	};
	Aw.prototype.reset = function () {
		this.A = []
	};
	z(Bw, Aw);
	Bw.prototype.B = function () {
		for (var a = [], b = 0; b < this.A.length; b++) {
			var c = this.A[b].source,
				d = this.A[b].target;
			d ? this.dispatchEvent(new vu(c, d)) : a.push(this.A[b])
		}
		this.A = a;
		Aw.prototype.B.call(this)
	};
	z(Ew, Vu);
	y = Ew.prototype;
	y.le = function (a) {
		this.F[this.A].A = a;
		Vu.prototype.le.call(this, a)
	};
	y.dc = function (a, b) {
		2 != this.status && 3 != this.status || this.Qa(-1);
		this.source.length + a.length - b > this.B.I || (this.source = this.source.slice(0, this.A - b) + a + this.source.slice(this.A), this.A += a.length - b, 0 == this.status && this.dispatchEvent("opn"), this.status = 1, Yu(this))
	};
	y.lf = function (a) {
		3 == this.status && (this.F = [], this.C = [], this.status = 1);
		this.source = a;
		this.A = this.source.length;
		Yu(this)
	};
	y.kf = function (a) {
		if (2 != this.status) {
			var b = 3 == this.status,
				c = b ? this.F.length - 1 : this.source.length;
			0 > a ? a = 0 : a > c && (a = c);
			a != this.A && (this.A = a, b && Fw(this), Yu(this))
		}
	};
	y.Ah = function () {
		1 != this.status || this.A >= this.source.length || ((this.source = this.source.slice(0, this.A) + this.source.slice(this.A + 1)) ? Yu(this) : this.reset())
	};
	y.ud = function () {
		if (1 == this.status && 0 < this.A) {
			if (this.source = this.source.slice(0, this.A - 1) + this.source.slice(this.A), this.A--, !this.source) {
				this.reset();
				return
			}
		} else 3 == this.status && (this.F = [], this.C = [], this.A = this.source.length, this.status = 1);
		Yu(this)
	};
	y.Qa = function (a) {
		a = a || 0;
		if (0 <= a && a < this.C.length) this.le(a);
		else if (0 > a)
			if (2 == this.status) Xu(this, this.source);
			else return a = this.wb().join(""), Xu(this, this.hc(), a), a;
		return ""
	};
	y.abort = function () {
		3 == this.status ? this.ud() : this.reset()
	};
	y.reset = function () {
		this.F = [];
		Vu.prototype.reset.call(this)
	};
	y.bd = function () {
		return this.source.slice(0, this.A)
	};
	y.Wb = function () {
		return ""
	};
	y.ic = function () {
		var a = "";
		1 == this.status ? a = this.source + "||t:1" : 3 == this.status && (a = kk(this.F, function (b) {
			return b.source.replace(/[,|:]/g, escape)
		}, this).join(","));
		return a
	};
	y.wb = function () {
		if (3 == this.status) {
			for (var a = [], b = 0; b < this.F.length; b++) {
				var c = this.F[b];
				b == this.A ? a.push(0 > this.D || this.D >= this.C.length ? c.source : this.C[this.D].target) : a.push(0 > c.A || c.A >= c.B.length ? c.source : c.B[c.A].target)
			}
			return a
		}
		return [this.source.slice(0, this.A), this.source.slice(this.A)]
	};
	y.hc = function () {
		return this.source
	};
	y.Kc = function (a) {
		Vu.prototype.Kc.call(this, a);
		if (2 == this.status) {
			a = a.A;
			if (0 == a.length) this.status = 0 == this.F.length ? 1 : 3;
			else {
				if (a.length == this.F.length)
					for (var b = 0, c; c = this.F[b]; b++) {
						var d = a[b];
						c.source == d.source && (c.B = d.A, c.D = d.D, 0 > c.A || c.A >= d.A.length) && (c.A = 0)
					} else
						for (this.F = [], this.source = "", b = this.A = 0; c = a[b]; b++) this.source += c.source, d = new Cw(c.source), d.B = c.A, d.D = c.D, d.A = 0, this.F.push(d);
				this.status = 3;
				Fw(this)
			}
			Yu(this)
		}
	};
	y.uf = function () {
		var a = this.F[this.A];
		if (!(2 > a.source.length)) {
			var b = a.source.slice(-1);
			a.source = a.source.slice(0, -1);
			Dw(a);
			(a = this.F[this.A + 1]) ? (a.source = b + a.source, Dw(a)) : (a = new Cw(b), this.F.splice(this.A + 1, 0, a));
			$u(this)
		}
	};
	y.gg = function () {
		if (!(this.A >= this.F.length - 1)) {
			var a = this.F[this.A],
				b = this.F[this.A + 1];
			a.source += b.source.slice(0, 1);
			Dw(a);
			b.source = b.source.slice(1);
			0 == b.source.length ? this.F.splice(this.A + 1, 1) : Dw(b);
			$u(this)
		}
	};
	z(Gw, dw);
	Gw.prototype.mf = function () {
		var a = this.model.wb();
		if (3 == this.model.status) {
			for (var b = [], c = 0; c < a.length; c++) {
				var d = this.B.P(n, ae, a[c]);
				this.model.A != c && V(d, Zd);
				b.push(d)
			}
			this.B.ya(this.N, b)
		} else 2 == this.model.status ? this.B.ya(this.N, a.join("")) : this.B.ya(this.N, a[0], this.B.P(n, Xd), a[1])
	};
	z(Hw, ww);
	y = Hw.prototype;
	y.$j = function () {
		this.model.Aa(this.model.C.length - 1 - this.model.D)
	};
	y.Xd = function () {
		ww.prototype.Xd.call(this);
		this.A.D = !1
	};
	y.hb = function (a) {
		var b = String.fromCharCode(a.charCode);
		return 3 == this.model.status && "0" < b && Number(b) <= this.model.B.A ? !1 : ww.prototype.hb.call(this, a)
	};
	y.Of = function (a) {
		ww.prototype.Of.call(this, a);
		1 == this.model.F.length && this.model.Qa(-1)
	};
	y.ve = function () {
		var a = Iw(this);
		a = a.concat(Jw(this));
		return a = a.concat([
			[u, 0, 38, 3, null, this.model.Aa, this.model, -1],
			[u, 0, 40, 3, null, this.model.Aa, this.model, 1],
			[u, 0, 33, 3, null, this.model.Ba, this.model, -1],
			[u, 0, 34, 3, null, this.model.Ba, this.model, 1],
			[v, 0, /[0-9]/, 3, null, this.ef, this],
			[u, 0, 36, 3, null, this.model.Aa, this.model, -999],
			[u, 0, 35, 3, null, this.$j, this],
			[u, 0, 9, 3, null, this.model.Aa, this.model, 1],
			[u, 0, 32, 3, null, this.model.Aa, this.model, 1],
			[u, 16, 38, 3, null, this.model.Ba, this.model, -1],
			[u, 16, 40, 3, null, this.model.Ba,
				this.model, 1
			],
			[u, 16, 37, 3, null, this.model.uf, this.model],
			[u, 16, 39, 3, null, this.model.gg, this.model],
			[u, 16, 32, 3, null, this.model.Aa, this.model, -1],
			[u, 17, 72, 3, null, this.Zd, this],
			[u, 17, 80, 3, null, this.model.Aa, this.model, -1],
			[u, 17, 78, 3, null, this.model.Aa, this.model, 1],
			[u, 17, 73, 3, null, this.model.uf, this.model],
			[u, 17, 79, 3, null, this.model.gg, this.model],
			[u, 17, 81, 3, null, this.model.uf, this.model],
			[u, 17, 87, 3, null, this.model.gg, this.model]
		])
	};
	z(Kw, Aw);
	Kw.prototype.B = function () {
		for (var a = 0; a < this.A.length && this.A[a].target; a++) this.dispatchEvent(new vu(this.A[a].source, this.A[a].target));
		this.A = this.A.slice(a);
		Aw.prototype.B.call(this)
	};
	var Lw = {
		a: "\u3107",
		b: "\u3116",
		c: "\u310f",
		d: "\u310e",
		e: "\u310d",
		f: "\u3111",
		g: "\u3115",
		h: "\u3118",
		i: "\u311b",
		j: "\u3128",
		k: "\u311c",
		l: "\u3120",
		m: "\u3129",
		n: "\u3119",
		o: "\u311f",
		p: "\u3123",
		q: "\u3106",
		r: "\u3110",
		s: "\u310b",
		t: "\u3114",
		u: "\u3127",
		v: "\u3112",
		w: "\u310a",
		x: "\u310c",
		y: "\u3117",
		z: "\u3108",
		1: "\u3105",
		2: "\u3109",
		3: "\u02c7",
		4: "\u02cb",
		5: "\u3113",
		6: "\u02ca",
		7: "\u02d9",
		8: "\u311a",
		9: "\u311e",
		0: "\u3122",
		"-": "\u3126",
		";": "\u3124",
		",": "\u311d",
		".": "\u3121",
		"/": "\u3125",
		" ": "\u02c9",
		"=": "="
	};
	z(Ow, Vu);
	y = Ow.prototype;
	y.abort = function () {
		3 == this.status ? Pw(this) : 1 == this.status && this.reset()
	};
	y.dc = function (a, b) {
		2 != this.status && 3 != this.status && (this.mb ? " " != a && (this.I = this.source = (this.source + a).slice(0, this.B.I)) : (this.source = this.source.slice(0, this.source.length - b) + a.toLowerCase(), this.I = (a = this.B.transform(this.source, "")) ? a.text : this.source), this.D = -1, this.M = !0, 0 == this.status && this.dispatchEvent("opn"), this.B.X && !this.source.match(this.B.X) ? (this.status = 1, Yu(this)) : $u(this))
	};
	y.lf = function () {};
	y.kf = function (a) {
		1 != this.status || this.source || (0 > a ? a = 0 : a > this.F.length && (a = this.F.length), a != this.A && (this.A = a, Yu(this)))
	};
	y.ud = function () {
		this.source ? (this.I = this.I.slice(0, -1), this.source = this.source.slice(0, -1)) : 0 < this.A && (this.F.splice(this.A - 1, 1), this.A--);
		0 != this.F.length || this.source ? Yu(this) : this.reset()
	};
	y.Qa = function (a) {
		if (3 == this.status) {
			typeof a === pf && 0 <= a && (this.D = a);
			if (0 <= this.D && this.D < this.C.length) {
				var b = this.C[this.D];
				a = b.source;
				b = b.target;
				if (this.N) return Xu(this, a, b), "";
				for (; a && b;) {
					var c = this.F[this.A++];
					if (a.slice(0, c.source.length) != c.source) break;
					c.target = b.charAt(0);
					c.A = !0;
					a = a.slice(c.source.length);
					b = b.slice(1)
				}
			}
			Pw(this);
			return ""
		}
		if (2 == this.status && this.source) {
			Xu(this, this.ic());
			b = a = "";
			for (c = this.A; c < this.F.length; c++) a += this.F[c].source, b += this.F[c].target;
			a && b && Xu(this, a, b);
			return b
		}
		return 1 ==
			this.status ? (a = this.wb().join(""), b = kk(this.F, function (d) {
				return d.source
			}), c = kk(this.F, function (d) {
				return d.target
			}), Iu(Gu(this.J.code), b.join(""), c.join(""), b.join(" ")), Xu(this, this.hc(), a), Yu(this), a) : ""
	};
	y.reset = function () {
		this.F = [];
		this.I = "";
		this.N = !1;
		Vu.prototype.reset.call(this)
	};
	y.ak = function () {
		1 != this.status || this.source || (this.F.splice(this.A, 1), 0 == this.F.length ? this.reset() : Yu(this))
	};
	y.bd = function () {
		return this.source
	};
	y.Wb = function () {
		if (!this.source) {
			for (var a = "", b = 0; b < this.A; b++) a += this.F[b].target;
			return a
		}
		return ""
	};
	y.ic = function () {
		var a = "";
		if (this.source) {
			for (var b = 0; b < this.A; b++) {
				var c = this.F[b];
				a += c.A ? c.target : c.source
			}
			a += this.source
		} else
			for (this.A >= this.F.length && 0 < this.F.length && this.A--, b = this.A; b < this.F.length; b++) a += this.F[b].source;
		return a
	};
	y.zf = function () {
		if ("chext" == op) {
			var a = kk(this.source ? this.F.slice(0, this.A) : this.F.slice(this.A, this.F.length), function (d) {
				var e = {};
				e.source = Mw(d.source);
				d.A && (e.target = d.target);
				return e
			}, this);
			this.source && a.push({
				source: Mw(this.source)
			});
			var b = {};
			b.itc = this.J.code;
			var c = this.ic();
			b.source = Mw(c);
			b.update_all = !0;
			b.append_tokens = a;
			return {
				message: JSON.stringify(b)
			}
		}
		return Vu.prototype.zf.call(this)
	};
	y.wb = function () {
		for (var a = "", b = "", c = 0; c < this.F.length; c++) {
			var d = this.F[c];
			c < this.A ? b += d.target || d.source : a += d.target || d.source
		}
		return [b, this.I, a]
	};
	y.hc = function () {
		return ""
	};
	y.Kc = function (a) {
		Vu.prototype.Kc.call(this, a);
		if (2 == this.status)
			if (a = a.A[0], !a || 0 == a.A.length) this.status = 1, Yu(this);
			else if (a.C + a.source == this.Wb() + this.ic()) {
			if (this.source) {
				a = a.A[0].target;
				if (a.length != this.A + 1) {
					this.status = 1;
					return
				}
				this.F.splice(this.A, 0, new Nw(this.source));
				this.source = this.I = "";
				for (var b = 0, c = 0; c < a.length && b < this.F.length; b++, c++) this.F[b].target = a.charAt(c);
				this.A = b;
				this.status = 1
			} else this.C = a.A, this.M = a.D, this.B.J && 0 > this.D && (this.D = 0), this.status = 3;
			Yu(this)
		}
	};
	z(Rw, dw);
	Rw.prototype.mf = function () {
		var a = this.model.wb();
		this.B.ya(this.N, a[0], this.B.P(n, ae, a[1]), this.B.P(n, Xd), a[2])
	};
	z(Sw, ww);
	y = Sw.prototype;
	y.bk = function () {
		this.model.Aa(this.model.C.length - 1 - this.model.D)
	};
	y.Xd = function () {
		ww.prototype.Xd.call(this);
		this.A.D = !1
	};
	y.ve = function () {
		function a() {
			return !h.K
		}

		function b() {
			return h.K
		}

		function c() {
			return 1 == g.model.status && !g.model.source
		}

		function d() {
			return h.D && (0 == g.model.status || 1 == g.model.status)
		}

		function e() {
			return 0 != g.model.status
		}
		var g = this,
			h = this.model.B;
		return [
			[u, 0, 32, null, d, this.Zh, this],
			[v, 0, h.C, null, d, this.hb, this],
			[u, 0, 38, 3, b, this.model.Aa, this.model, -1],
			[u, 0, 37, 3, a, this.model.Aa, this.model, -1],
			[u, 0, 40, 3, b, this.model.Aa, this.model, 1],
			[u, 0, 39, 3, a, this.model.Aa, this.model, 1],
			[u, 0, 33, 3, null, this.model.Ba,
				this.model, -1
			],
			[u, 0, 37, 3, b, this.model.Ba, this.model, -1],
			[u, 0, 38, 3, a, this.model.Ba, this.model, -1],
			[v, 0, h.ca, 3, null, this.model.Ba, this.model, -1],
			[u, 0, 34, 3, null, this.model.Ba, this.model, 1],
			[u, 0, 39, 3, b, this.model.Ba, this.model, 1],
			[u, 0, 40, 3, a, this.model.Ba, this.model, 1],
			[v, 0, h.Z, 3, null, this.model.Ba, this.model, 1],
			[v, 0, /[0-9]/, 3, function () {
				return 0 != h.N
			}, this.ef, this],
			[u, 0, 13, null, e, this.sd, this],
			[u, 0, 8, 1, null, this.af, this],
			[u, 0, 46, 1, null, this.model.ak, this.model],
			[u, 0, 27, null, e, this.Zd, this],
			[u, 0, 32, null,
				c, this.wc, this
			],
			[u, 0, 40, null, c, this.wc, this],
			[u, 0, 37, 1, null, this.model.Ma, this.model, -1],
			[u, 0, 39, 1, null, this.model.Ma, this.model, 1],
			[u, 0, 36, 1, null, this.model.Ma, this.model, -999],
			[u, 0, 35, 1, null, this.model.Ma, this.model, 999],
			[u, 0, 36, 3, null, this.model.Aa, this.model, -999],
			[u, 0, 35, 3, null, this.bk, this]
		]
	};
	y.hb = function (a) {
		var b = String.fromCharCode(a.charCode);
		if (" " == b && (0 == this.model.status || !this.model.source)) return !1;
		this.model.mb || (a.charCode = b.toLowerCase().charCodeAt(0));
		return ww.prototype.hb.call(this, a)
	};
	y.ug = function (a) {
		return a.type != v || xw(this) || a.ctrlKey || a.altKey || a.metaKey ? !1 : Qw(this.model, String.fromCharCode(a.charCode)) || ww.prototype.ug.call(this, a)
	};
	z(Vw, R);
	y = Vw.prototype;
	y.$i = function (a) {
		this.D && this.D.code == a.A && (N(this.A), this.A = null, this.B = Rs(this.D.code, this.C), a = this.B.F ? new Bw : new Kw, 0 == this.B.ha ? this.A = new zw(a, this.I, this.D, this.B) : 2 == this.B.ha ? this.A = new Sw(a, this.I, this.D, this.B) : 1 == this.B.ha && (this.A = new Hw(a, this.I, this.D, this.B)), this.A && this.A.ra(this), this.B.F && this.A && this.A.Xd(), this.A && (this.F = this.A.ve()))
	};
	y.handleEvent = function (a) {
		if (!(this.A && this.F && mw && this.D)) return !1;
		if (a.type == v) {
			if (this.M) return !0;
			if (void 0 === a.charCode || 0 >= a.charCode) return !1;
			if (P && !a.A.charCode)
				if (13 == a.keyCode) a.charCode = a.keyCode;
				else return !1
		}
		var b = this.A;
		var c = b.ug(a);
		if (c) b = !0;
		else if (this.B.state & 1) {
			for (var d = 0, e; e = this.F[d]; d++)
				if (a.type == e[0]) {
					var g = 0 < a.keyCode && a.keyCode === e[2],
						h = 0 < a.charCode && String.fromCharCode(a.charCode).match(e[2]);
					if (!e[2] || g || h) {
						g = e[1];
						if (typeof g === pf) {
							var k = 0;
							a.shiftKey && (k += 16);
							a.ctrlKey &&
								(k += 17);
							a.altKey && (k += 18);
							a.metaKey && (k += 91);
							if (g != k && (!h || 0 != k && 16 != k)) continue
						}
						if (!e[3] || b.model.status == e[3])
							if (!e[4] || e[4]())
								if (c = e[5].apply(e[6], void 0 != e[7] ? e.slice(7) : [a]), 0 != c) {
									c = !0;
									break
								}
					}
				}
			c || ((a.ctrlKey || a.altKey || a.metaKey) && 17 != a.keyCode && 18 != a.keyCode && 91 != a.keyCode ? (a.type != oe && b.model.reset(), c = !1) : c = b.A ? sw(b.A, a) : a.type == v || 9 == a.keyCode || 46 == a.keyCode || 8 == a.keyCode || 33 <= a.keyCode && 40 >= a.keyCode ? xw(b) : !1);
			b = c
		} else b = !1;
		a.type == u && (this.M = b);
		return b
	};
	y.reset = function (a) {
		this.A && xw(this.A) && (a && this.A.model.Qa(-1), this.A.model.reset())
	};
	y.select = function () {
		this.A && xw(this.A) && this.A.model.Qa()
	};
	y.L = function () {
		N(this.A);
		N(this.S);
		R.prototype.L.call(this)
	};
	var Tw = Uw;
	Vw.prototype.A = null;
	Vw.prototype.F = null;
	Vw.prototype.M = !1;
	C(Ww, R);
	Ww.prototype.L = function () {
		Ww.O.L.call(this);
		this.D && (Km(this.D), this.D = null);
		this.A = this.B = null
	};
	Ww.prototype.C = function () {
		var a = ul(this.B || window);
		ll(a, this.A) || (this.A = a, this.dispatchEvent(Uf))
	};
	z(Xw, kv);
	Xw.prototype.U = function () {
		this.target.style.display.toLowerCase() != of && Zw(this)
	};
	Xw.prototype.L = function () {
		N(this.N);
		kv.prototype.L.call(this)
	};
	z(ax, U);
	y = ax.prototype;
	y.W = function () {
		U.prototype.W.call(this);
		var a = Al("A", {
				"class": "ita-kd-icon-button ita-kd-inputtool-icon ita-kd-mid ita-kd-small"
			}),
			b = Al(n, {
				"class": "ita-kd-img ita-kd-icon ita-kd-icon-span " + this.J + " ita-kd-statusbar-icon"
			});
		a.appendChild(b);
		this.D = a
	};
	y.V = function () {
		U.prototype.V.call(this);
		var a = this.G();
		this.C.H(a, p, this.Ik);
		this.C.H(a, w, this.oj);
		this.C.H(a, Ve, this.nj)
	};
	y.oj = function () {
		var a = this.G();
		a.firstChild && (a.firstChild.style.opacity = "0.9")
	};
	y.nj = function () {
		var a = this.G();
		a.firstChild && (a.firstChild.style.opacity = "")
	};
	y.Ik = function () {
		this.dispatchEvent({
			type: "ecd",
			command: this.F
		})
	};
	y.L = function () {
		N(this.C);
		U.prototype.L.call(this)
	};
	z(cx, U);
	y = cx.prototype;
	y.aa = function (a) {
		U.prototype.aa.call(this, a);
		$w(this.G());
		ov(this.G());
		Zw(this.J);
		Zw(this.F)
	};
	y.W = function () {
		U.prototype.W.call(this);
		var a = this.A,
			b = this.G();
		Lp(b, [Td, "ita-kd-statusbar"]);
		var c = AE.length,
			d = fm(a, c + 2);
		d.cellPadding = "0";
		d.cellSpacing = "0";
		d.border = "0";
		Jp(d, "ita-kd-statusbar-table");
		var e = d.rows[0].cells,
			g = a.P(n, "ita-kd-icon-span ita-kd-img ita-kd-floating-bar-icon");
		this.N = a.P("A", "ita-kd-icon-button ita-kd-left ita-kd-floating-bar", g);
		a.appendChild(e[0], this.N);
		this.C = a.P("A", "ita-kd-icon-button ita-kd-small ita-kd-mid ita-kd-inputtool-icon", a.P(n));
		Xm(this.C, {
			cursor: "move"
		});
		K && V(this.C, "ita-kd-ie");
		a.appendChild(e[1], this.C);
		D(AE, function (h, k) {
			var l = bx(h);
			l.aa(e[k + 2]);
			this.K.H(l, "ecd", this.Vi);
			this.U[h] = l;
			k < c - 1 && (W(l.G(), "ita-kd-mid"), V(l.G(), "ita-kd-right"))
		}, this);
		a.appendChild(b, d)
	};
	y.V = function () {
		U.prototype.V.call(this);
		var a = this.G();
		this.J = new Xw(a, this.C);
		this.F = new Xw(a, this.N);
		a = B(this.B.Lc, this.B, "bdc");
		this.K.H(this.J, xg, a).H(this.F, xg, a)
	};
	y.Vi = function (a) {
		this.R = a.command;
		this.dispatchEvent(a)
	};
	y.L = function () {
		N(this.F);
		N(this.J);
		N(this.K);
		pj(this.U, N);
		U.prototype.L.call(this)
	};
	var AE = [Vg, gh, "pun"];
	z(gx, O);
	z(hx, pu);
	y = hx.prototype;
	y.rh = function (a) {
		this.active && jt(this.D) && (rs(a, "shift", Vg), rs(a, "shift+space", gh), rs(a, "ctrl+.", "pun"))
	};
	y.ii = function (a) {
		ss(a, "shift", Vg);
		ss(a, "shift+space", gh);
		ss(a, "ctrl+.", "pun")
	};
	y.gj = function (a) {
		var b = [a.command];
		aj(b, a.var_args);
		this.qd.apply(this, b)
	};
	y.dj = function (a) {
		var b = 0,
			c = "";
		if (this.A && this.active) {
			switch (a.type) {
				case "opn":
					this.C.dispatchEvent("se");
					b = 1;
					break;
				case "cmts":
					b = 1;
					break;
				case "cmte":
					c = a.data;
					b = 3;
					break;
				case "cls":
					wo.fa().dispatchEvent(bd), b = 3
			}
			b && this.qh != b && (this.A.Qc(b, c), this.qh = b)
		}
	};
	y.rd = function (a) {
		return !!a && E(this.M, a)
	};
	y.md = function (a) {
		return !!a && "im" == a.type
	};
	y.fc = function () {
		return this.S
	};
	y.register = function (a) {
		pu.prototype.register.call(this, a);
		this.I.push(a);
		this.rh(a)
	};
	y.Oc = function (a) {
		pu.prototype.Oc.call(this, a);
		this.B.reset();
		Yi(this.I, a);
		this.ii(a)
	};
	y.Qe = function (a) {
		if (!a || !this.active || Fr(a)) return !1;
		this.A && (mw = this.A);
		var b = Rs(this.D ? this.D.code : "", this.B.C);
		return a.type == Gr ? (Y && !b.D && b.F && D(a.A.data, function (c) {
			if (" " == c || "\n" == c) a.keyCode = a.charCode = c.charCodeAt(0), a.type = u, this.B.handleEvent(a), a.type = v, this.B.handleEvent(a), a.type = oe, this.B.handleEvent(a)
		}, this), !1) : Y && !b.D && b.F && /^key/.test(a.type) ? 32 != a.keyCode && 10 != a.keyCode ? this.B.handleEvent(a) : !1 : this.B.handleEvent(a)
	};
	y.Rd = function (a, b) {
		pu.prototype.Rd.call(this, a, b);
		this.active && this.rb && jt(this.D) && lx(this, b.A);
		return !1
	};
	y.qd = function (a, b, c, d) {
		switch (a) {
			case wb:
				(a = d) && void 0 !== a.ss && (bz = a.ss);
				b = this.D;
				if (!b || !this.md(b)) {
					this.rb && ex(this.rb, null, !1, null);
					break
				}
				this.active && (this.B.D = b, Ps(b.code));
				Y || (this.rb || (this.rb = new cx, this.rb.aa(), this.F.H(this.rb, "ecd", this.gj)), a && void 0 != a.tlang ? jx(this, a) : this.active && (a = ix(this), kx(this, b, a)), ex(this.rb, b, bz && this.active, a), D(this.I, this.active && jt(b) ? this.rh : this.ii, this));
				break;
			case gh:
			case Vg:
			case "pun":
				lx(this, a);
				break;
			case "cm":
				this.B.select();
				break;
			case bd:
			case vb:
				this.B.reset();
				this.D && Rs(this.D.code, this.B.C).B && (b = this.B, a = mx(), b.A && b.A.view && (b = b.A.view, b.C && (b.C.style.cssText = jk(a), b.C.style.display = of )));
				break;
			case "lc":
				Ns(b)
		}
	};
	y.L = function () {
		N(this.F);
		N(this.B);
		N(this.rb);
		pu.prototype.L.call(this)
	};
	y.rb = null;
	y.qh = 0;
	z(nx, O);
	z(ox, R);
	ox.prototype.R = function (a, b, c) {
		b ? c && 1 < c.length ? (this.N.set("pre", a), a = c[1][0], this.B = a[0], a = kk(a[1].slice(0, this.K), function (d) {
			return Tk(d)
		}), 0 < a.length && this.dispatchEvent(new nx(a))) : this.B = "" : (this.B = "", this.dispatchEvent(new O("m")));
		this.J = !1;
		this.I && (px(this, this.I), this.I = null)
	};
	ox.prototype.$ = function (a, b) {
		a && b[1] && (this.N.set("pre", 1), a = kk(b[1][0][1].slice(0, 10), function (c) {
			return " " + Tk(c)
		}), 0 < a.length && this.dispatchEvent(new nx(a, !0)))
	};
	ox.prototype.abort = function () {
		this.B = "";
		this.S.abort(null)
	};
	ox.prototype.L = function () {
		N(this.S);
		this.C = [];
		R.prototype.L.call(this)
	};
	z(ux, O);
	C(vx, M);
	vx.prototype.L = function () {
		pj(this.B, this.A.yb, this.A);
		this.A = this.B = null;
		vx.O.L.call(this)
	};
	z(xx, U);
	y = xx.prototype;
	y.W = function () {
		U.prototype.W.call(this);
		var a = this.A,
			b = a.P(f);
		V(b, "ita-hwt-candidate");
		this.D = b;
		0 == this.B.lastIndexOf(" ", 0) ? a.ya(b, Al(n, {
			style: "color:#bbb;"
		}, "\u23b5"), em(a, this.B)) : a.Ci(b, this.B)
	};
	y.V = function () {
		U.prototype.V.call(this);
		this.F.H(this.G(), p, this.jk).H(this.G(), w, this.kk)
	};
	y.jk = function () {
		this.C && this.dispatchEvent(new ux(this.B))
	};
	y.L = function () {
		N(this.F);
		U.prototype.L.call(this)
	};
	y.kk = function () {
		wx(this.J, this.B, eb)
	};
	z(zx, Z);
	y = zx.prototype;
	y.W = function () {
		Z.prototype.W.call(this);
		this.D = this.A.P(f, "ita-hwt-candidates")
	};
	y.V = function () {
		Xv(this, !1);
		this.Eb = !1
	};
	y.ik = function (a) {
		this.J && (Ax(this), yx(a), this.C = Vi(this.B, a), this.K = hg)
	};
	y.hk = function () {
		this.J && (Ax(this), this.F && 0 < this.B.length && yx(this.B[0]), this.C = 0, this.K = fb)
	};
	y.isEnabled = function () {
		return this.J
	};
	y.L = function () {
		N(this.R);
		Z.prototype.L.call(this)
	};
	z(Fx, O);
	var Nx = {
		"": ",.?!:'\";@".split(""),
		es: ",.\u00bf?\u00a1!:'\"".split(""),
		ja: "\uff0c\u3002\uff1f\uff01\uff1a\u300c\u300d\uff1b".split(""),
		"zh-Hans": "\uff0c\u3002\uff1f\uff01\uff1a\u201c\u201d\uff1b".split(""),
		"zh-Hant": "\uff0c\u3002\uff1f\uff01\uff1a\u300c\u300d\uff1b".split("")
	};
	z(Hx, R);
	y = Hx.prototype;
	y.Ch = function (a) {
		this.A = !0;
		this.dispatchEvent(new Fx("q", Ix(this, a)));
		a.preventDefault()
	};
	y.og = function (a) {
		this.A && (this.A = !1, this.dispatchEvent(new Fx("p", Ix(this, a))), a.preventDefault())
	};
	y.Dh = function (a) {
		this.A && this.dispatchEvent(new Fx("o", Ix(this, a)));
		a.preventDefault()
	};
	y.reset = function () {
		this.A = !1
	};
	y.L = function () {
		N(this.B)
	};
	z(Jx, Z);
	y = Jx.prototype;
	y.W = function () {
		Z.prototype.W.call(this);
		var a = this.A;
		this.B = a.P("CANVAS", "ita-hwt-canvas");
		this.B.style.width = "425px";
		this.B.width = 425 * this.F;
		this.B.style.height = "194px";
		this.B.height = 194 * this.F;
		a.appendChild(this.G(), this.B);
		this.C = this.B.getContext("2d")
	};
	y.V = function () {
		Z.prototype.V.call(this);
		Xv(this, !1);
		this.Eb = !1;
		this.J = new Hx(this.B, this.Z);
		this.X.H(this.J, "q", this.pk).H(this.J, "o", this.qk).H(this.J, "p", this.nk).H(this.B, w, this.lk).H(this.B, Te, jm)
	};
	y.pk = function (a) {
		this.K = [];
		0 == this.N.length && (this.Y = a.A.time);
		Kx(this, a.A);
		a.preventDefault();
		this.R && (yl(this.Z).cancelAnimationFrame(this.R), this.R = 0, this.C.globalAlpha = 1, this.C.globalCompositeOperation = "source-over");
		V(this.G(), Id)
	};
	y.qk = function (a) {
		Kx(this, a.A);
		a.preventDefault()
	};
	y.nk = function (a) {
		this.N.push(this.K);
		a.preventDefault();
		this.dispatchEvent(new O("i"))
	};
	y.reset = function () {
		this.C.clearRect(0, 0, this.B.width, this.B.height);
		this.N = [];
		this.K = [];
		this.J.reset()
	};
	y.L = function () {
		N(this.X);
		Z.prototype.L.call(this)
	};
	y.lk = function () {
		wx(this.ca, "panel", eb)
	};
	z(Ox, Z);
	y = Ox.prototype;
	y.W = function () {
		Z.prototype.W.call(this);
		var a = this.A,
			b = this.G();
		this.C = new Jx(this.xe(), a, this);
		this.C.aa(b);
		this.B = new zx(a, this);
		this.B.aa(b);
		Bx(this.B, this.N, !1);
		this.ca.set("pre", 2)
	};
	y.V = function () {
		Z.prototype.V.call(this);
		Xv(this, !1);
		this.Eb = !1;
		this.va.H(this.C.J, "q", this.sg)
	};
	y.sg = function () {
		Cx(this.B, !1)
	};
	y.reset = function () {
		this.C.reset();
		Bx(this.B, this.N, !1);
		this.ca.set("pre", 2)
	};
	y.xe = function () {
		return document
	};
	y.vc = function () {
		return this.G()
	};
	y.zg = function (a, b) {
		0 != a.length && (Cx(this.B, !1), Bx(this.B, a, b), Cx(this.B, !this.C.J.A))
	};
	y.L = function () {
		N(this.va);
		Z.prototype.L.call(this)
	};
	y.Bh = function () {};
	z(Px, R);
	y = Px.prototype;
	y.yg = function (a) {
		this.view = a;
		this.va.H(this.view, "l", this.cf).H(this.view, "a", this.Ih).H(this.view, "f", this.bf).H(this.view, "i", this.fk).H(this.view, "h", this.ek).H(this.view, "b", this.Nk).H(this.B, "n", this.gk)
	};
	y.uc = function (a) {
		this.A = a
	};
	y.Nk = function () {
		this.$d()
	};
	y.cf = function () {
		this.A && (this.view.B.F ? this.$d() : Rx(this, " "))
	};
	y.Ih = function () {
		Lx(this.view.C) ? this.I ? this.reset() : (Rx(this, "", 1), this.D ? this.D.start(75) : (this.D = new Nr(this.Ih, 300, this), this.D.start())) : ("" != this.B.B && sx(this.B), this.reset())
	};
	y.ek = function () {
		this.D && (this.D.da(), this.D = null)
	};
	y.bf = function (a, b) {
		a = !1;
		this.A && (this.view.B.F ? (this.$d(), a = !0) : b || (Rx(this, "\n"), b = this.A.C, Hr(b, u, 13), Hr(b, v, 13), Hr(b, oe, 13)));
		return a
	};
	y.gk = function (a) {
		this.view.zg(a.A, !0);
		this.dispatchEvent(new O("k"));
		this.I = a.F
	};
	y.fk = function () {
		Qx(this)
	};
	y.$d = function () {
		if (this.A) {
			var a = this.view.B;
			a = new Dx(a.N[a.C], a.K);
			Rx(this, a.text);
			rx(this.B, a.text, a.state);
			this.M.push("ci", this.view.B.C);
			this.M.report();
			this.reset()
		}
	};
	y.reset = function () {
		this.I = !1;
		this.B.abort();
		this.view.reset();
		this.dispatchEvent(new O("j"))
	};
	y.ng = function (a) {
		var b = this.B;
		b.D.itc = a;
		b.M = b.A[a]
	};
	y.handleEvent = function (a) {
		var b = !1;
		return this.view.Z ? !1 : a.type == u ? (8 == a.keyCode || 27 == a.keyCode ? Lx(this.view.C) || ("" != this.B.B && sx(this.B), this.reset(), b = !0) : 37 == a.keyCode || 39 == a.keyCode ? (b = this.view, b.B.isEnabled() && b.B.F ? (b = b.B, b.J && (b.C = 37 == a.keyCode ? Math.max(b.C - 1, 0) : Math.min(b.C + 1, b.B.length - 1), wx(b.T, $l(b.B[b.C].G()), eb), Ax(b), yx(b.B[b.C]), b.K = hg), b = !0) : b = !1) : 13 == a.keyCode ? b = this.bf(a, !0) : 32 == a.keyCode && (this.cf(a), b = !0), this.F = b) : a.type == oe ? this.F = !1 : a.type == v ? this.F : !1
	};
	y.mg = function () {
		this.C || (this.C = !0, this.view.aa())
	};
	y.L = function () {
		N(this.D);
		N(this.va);
		N(this.view);
		R.prototype.L.call(this)
	};
	z(Sx, Z);
	y = Sx.prototype;
	y.W = function () {
		var a = this.A,
			b = a.P(f, "ita-hwt-buttons");
		this.D = b;
		var c = a.P(f, ["ita-hwt-backspace-img", Sd]);
		this.F = a.P(f, [Ed, Kd, Nd, "ita-hwt-backspace"]);
		a.appendChild(this.F, c);
		a.appendChild(b, this.F);
		this.C = a.P(f, [Ed, Kd, Nd, "ita-hwt-space"]);
		a.appendChild(b, this.C);
		this.K = a.P(f, ["ita-hwt-enter-img", "ita-hwt-enter-img-dark", Sd]);
		this.B = a.P(f, [Ed, Kd, Nd, "ita-hwt-enter"]);
		a.appendChild(this.B, this.K);
		a.appendChild(b, this.B)
	};
	y.V = function () {
		Xv(this, !1);
		this.Eb = !1;
		var a = [w, Ve];
		this.R.H(this.C, p, this.ul).H(this.C, a, this.rg).H(this.B, p, this.dk).H(this.B, a, this.rg).H(this.F, Te, this.ck).H(this.F, a, this.rg).H(this.C, w, this.lg).H(this.B, w, this.lg).H(this.F, w, this.lg)
	};
	y.rg = function (a) {
		a.target && (a.type == w ? V(a.target, Md) : W(a.target, Md))
	};
	y.ul = function () {
		this.J && this.dispatchEvent(new O("l"))
	};
	y.ck = function () {
		this.J && this.dispatchEvent(new O("a"))
	};
	y.dk = function () {
		this.J && this.dispatchEvent(new O("f"))
	};
	y.L = function () {
		N(this.R);
		this.A.yb(this.C);
		this.A.yb(this.B);
		this.A.yb(this.F)
	};
	y.lg = function (a) {
		a.target == this.C ? wx(this.N, "Space", eb) : a.target == this.B ? wx(this.N, "Enter", eb) : a.target == this.F && wx(this.N, "Delete", eb)
	};
	z(Ux, Ox);
	y = Ux.prototype;
	y.aa = function (a) {
		Ox.prototype.aa.call(this, a);
		Wx(this)
	};
	y.W = function () {
		Ox.prototype.W.call(this);
		var a = this.A,
			b = this.G(),
			c = vn(a.A.body);
		Lp(b, ["ita-hwt-ime", c ? "ita-hwt-rtl" : "ita-hwt-ltr", "notranslate"]);
		this.X = a.P(f, "ita-hwt-butterbar", Ca);
		b.appendChild(this.X);
		this.T && (V(b, "ita-hwt-ime-st"), this.K = a.P(f, "ita-kd-img ita-hwt-close"), b.appendChild(this.K), this.J = a.P(f, "ita-kd-img ita-hwt-grip"), b.appendChild(this.J));
		this.F = new Sx(this.A, this);
		this.F.aa(b);
		ov(b)
	};
	y.V = function () {
		Ox.prototype.V.call(this);
		this.T && (this.ba = new Xw(this.vc(), this.J), this.va.H(this.ba, xg, this.sk).H(this.ba, "end", this.Rk));
		Xv(this, !1);
		this.Eb = !1;
		var a = [w, Ve, $g],
			b = this.G();
		this.va.H(b, a, this.nl).H(b, Te, jm);
		this.T && this.va.H(this.K, p, this.rk).H(this.J, Kb, this.ll).H(this.J, a, B(this.ni, this, this.J, "ita-hwt-grip-hover"));
		Gx(this.va, this.xe(), B(this.tk, this));
		this.va.H(this.C.J, "p", this.uk);
		this.va.H(this.K, w, this.Eh).H(this.J, w, this.Eh)
	};
	y.sg = function () {
		Ox.prototype.sg.call(this);
		this.F.J = !1
	};
	y.uk = function () {
		this.F.J = !0
	};
	y.xe = function () {
		return I(this.vc())
	};
	y.vc = function () {
		return this.G()
	};
	y.sk = function () {
		V(this.G(), Jd);
		Zw(this.ba)
	};
	y.Rk = function () {
		this.ga = dn(this.vc());
		W(this.G(), Jd)
	};
	y.zg = function (a, b) {
		Ox.prototype.zg.call(this, a, b);
		Tx(this.F, !0)
	};
	y.la = function (a) {
		var b = Ox.prototype.la.call(this, a);
		a && this.ba && Zw(this.ba);
		a ? (V(this.G(), Id), this.dispatchEvent("sp")) : this.dispatchEvent("hp");
		return b
	};
	y.ll = function () {
		this.ba.pb(this.R);
		(this.R = !this.R) ? (this.ga = dn(this.vc()), V(this.G(), Hd)) : (W(this.G(), Hd), Wx(this, this.ga));
		var a = qn(this.G()).width;
		130 < a && (this.F.C.style.width = a - 130 + Sf);
		Mx(this.C, void 0, a);
		this.reset()
	};
	y.reset = function () {
		Ox.prototype.reset.call(this);
		Tx(this.F, !1)
	};
	y.rk = function () {
		this.la(!1);
		this.reset();
		this.dispatchEvent(new O("g"))
	};
	y.tk = function () {
		this.dispatchEvent(new O("h"))
	};
	y.L = function () {
		N(this.ba);
		this.A.yb(this.vc());
		Ox.prototype.L.call(this)
	};
	y.ni = function (a, b, c) {
		c.type == w || c.type == $g ? V(a, b) : W(a, b)
	};
	y.Bh = function (a) {
		Ul(this.F.C, a)
	};
	y.nl = function (a) {
		this.Z = a.type == Ve
	};
	y.Eh = function (a) {
		a.target == this.K ? wx(this.Y, "Close", eb) : a.target == this.J && wx(this.Y, "Grip", eb)
	};
	z(Yx, Px);
	y = Yx.prototype;
	y.yg = function (a) {
		Px.prototype.yg.call(this, a);
		this.view = a
	};
	y.xj = function (a) {
		27 == a.keyCode && this.A && this.handleEvent(a) && (a.stopPropagation(), a.preventDefault())
	};
	y.uc = function (a) {
		Px.prototype.uc.call(this, a);
		a = this.view;
		a.U && (W(a.X, "shown"), a.U = !1)
	};
	y.cf = function (a) {
		Px.prototype.cf.call(this, a);
		this.A || Xx(this.view)
	};
	y.bf = function (a, b) {
		a = Px.prototype.bf.call(this, a, b);
		this.A || Xx(this.view);
		return a
	};
	y.$d = function () {
		Px.prototype.$d.call(this);
		if (this.A) {
			var a = this.A.ab(20),
				b = this.B;
			a && b.M && b.T.D("/predict", tx(b, {
				predict: !0,
				itc: b.M,
				pre_context: a,
				max_num_results: 10
			}), b.$, b)
		} else Xx(this.view)
	};
	y.mg = function () {
		Px.prototype.mg.call(this);
		this.C || Gx(this.va, this.view.xe(), B(this.xj, this))
	};
	y.ng = function (a) {
		Px.prototype.ng.call(this, a);
		this.B.D.app = op
	};
	z($x, pu);
	y = $x.prototype;
	y.Wk = function (a) {
		this.C.dispatchEvent(a)
	};
	y.fc = function () {
		return [u, oe, v]
	};
	y.Qe = function (a) {
		this.B.uc(this.A);
		return Er(a) ? !1 : this.B.handleEvent(a)
	};
	y.rd = function (a) {
		return !!a && E([wb, "cd", vb, "re"], a)
	};
	y.register = function (a) {
		pu.prototype.register.call(this, a);
		this.B.uc(this.A)
	};
	y.Oc = function (a) {
		pu.prototype.Oc.call(this, a);
		this.B.uc(this.A)
	};
	y.md = function (a) {
		return null != a && "hw" == a.type
	};
	y.L = function () {
		N(this.B);
		N(this.F)
	};
	y.qd = function (a, b, c, d) {
		a == wb ? (b = this.D, this.B.uc(this.A), this.active ? (this.B.uc(this.A), Zx(this.B, !0), this.B.ng(b.code), c = this.B, d = b.A, (a = Nx[d]) || (a = Nx[""]), c.view.N != a && (c.S = d, c.view.N = a, c.reset()), c.B.F = "und" == d ? "universal" : d, c = this.B, c.view.Bh(kE[b.code]), c.reset()) : Zx(this.B, !1)) : a == vb ? this.B.uc(this.A) : "re" == a && b && (a = this.B.view, a.vc() && (b.Ga(a.vc(), c, d), a.isVisible() && Zw(a.ba)))
	};
	y.al = function () {
		this.A && this.A.Qc(4)
	};
	y.$k = function (a) {
		this.A && this.A.Qc(6, a.data)
	};
	y.Ok = function () {
		this.C.dispatchEvent("se")
	};
	y.rl = function () {
		this.C.dispatchEvent(bd)
	};
	var Wy = {
			de: Bj(["Y", 90, "Z", 89, "\u00dc", 192, "\u00db", 189, "\u00dd", 187, "\u00ba", 219, "\u00bb", 221, "\u00bf", 220, "\u00cc", 186, "\u00bd", 191]),
			fr: Bj(["Q", 65, "A", 81, "Z", 87, "W", 90, "\u00dd", 219, "\u00ba", 221, "M", 186, "\u00c0", 222, "\u00de", 192, "\u00bc", 77, "\u00be", 188, "\u00bf", 190, "\u00df", 191, "\u00db", 189])
		},
		Vy = {
			59: 186,
			61: 187,
			173: 189
		},
		Sy = {
			126: 192,
			95: 189,
			124: 220,
			58: 186,
			60: 188,
			62: 190,
			63: 191
		};
	z(ay, O);
	dy.prototype.transform = function (a, b, c) {
		if (!this.A) return null;
		a = 0 < b ? a.slice(0, b) + "\u001d" + a.slice(b) + c : a + c;
		if (b = this.A[0].exec(a)) {
			for (var d = this.A[1], e = 1; e < b.length && !b[e]; e++);
			b = d[e][0];
			d = d[e][1];
			e = b.exec(a);
			var g = a.slice(e.index),
				h = -1 < g.search("\u001d") ? 1 : 0;
			c = g.length - h - c.length;
			a = a.replace(b, d).slice(e.index);
			a = a.replace("\u001d", "");
			return {
				back: c,
				Qb: a
			}
		}
		return null
	};
	z(jy, R);
	jy.prototype.M = function (a) {
		if ("hangul" == a.id) ky(this, "ko");
		else {
			var b = new cy(a);
			b.id && (this.B[b.id] = b);
			var c = new fy(a);
			c.id && (this.F[c.id] = c);
			this.A == a.id && (ny(this, this.A), this.A = "");
			this.dispatchEvent(new ay("lld", b.view))
		}
	};
	jy.prototype.L = function () {
		R.prototype.L.call(this);
		Yi(iy, this.C)
	};
	var iy = [];
	yi("google.elements.keyboard.loadme", function () {
		var a = $i(arguments);
		D(iy, function (b) {
			b.apply(void 0, a)
		})
	});
	z(qy, Z);
	y = qy.prototype;
	y.aa = function (a) {
		Z.prototype.aa.call(this, a);
		this.X && (S(this.R, !0), bs(this.G(), this.R));
		ty(this)
	};
	y.W = function () {
		Z.prototype.W.call(this);
		var a = this.A,
			b = this.G();
		b.id = "kbd";
		V(b, "notranslate");
		V(b, "vk-box");
		ov(b);
		K && V(b, "vk-sf-ie");
		this.Fj && V(b, "vk-sf-ff2");
		"translate" == op && Xm(b, "z-index", 2E4);
		var c = Dy(this);
		a.appendChild(b, c);
		this.B.Mc && (this.Sa = Fy(this), a.appendChild(b, this.Sa), S(this.Sa, this.F));
		var d = this.B.Td;
		c = [14, 14, d ? 14 : 13, d ? 13 : 12, 3];
		d = d ? "\u00c01234567890\u00bd\u00bb\b\tQWERTYUIOP\u00db\u00dd\r\u0014ASDFGHJKL\u00ba\u00de\u00dc\r\u0010\u00e2ZXCVBNM\u00bc\u00be\u00bf\u0010\u0111 \u0111" : "\u00c01234567890\u00bd\u00bb\b\tQWERTYUIOP\u00db\u00dd\u00dc\u0014ASDFGHJKL\u00ba\u00de\r\u0010ZXCVBNM\u00bc\u00be\u00bf\u0010\u0111 \u0111";
		var e = 0,
			g = this.A.P(f);
		g.dir = g.style.direction = Je;
		for (var h = 0; 5 > h; ++h) {
			var k = this.A.P(f);
			k.style.whiteSpace = "nowrap";
			for (var l = 0; l < c[h]; ++l) {
				var m = d.charCodeAt(e++);
				m = Ey(this, m);
				this.A.appendChild(k, m)
			}
			this.A.appendChild(g, k)
		}
		this.U = g;
		a.appendChild(b, this.U);
		S(this.U, !this.F);
		this.Zc && (b.style.position = Sa, b.style.width = "1px");
		this.Kg && (b.style.height = "201px", b.style.bottom = "10px", b.style.zIndex = "20001")
	};
	y.V = function () {
		Z.prototype.V.call(this);
		zy(this);
		this.Eb = !1;
		Xv(this, !1);
		this.ba = new Xw(this.X ? this.R : this.G(), this.K);
		this.C.H(this.ba, xg, function () {
			this.Te = !0;
			Zw(this.ba)
		});
		var a = [Te, w, Ve],
			b = this.A.A;
		this.X && (b = I(this.R));
		var c = B(this.qg, this, null);
		this.C.H(b, We, c);
		D($r(b), function (h) {
			this.C.H(h, We, c)
		}, this);
		this.Y && (this.C.H(this.ga, p, this.Wh), this.C.H(this.Y, p, this.Wh));
		this.B.Mc && pj(this.T, function (h, k) {
			this.C.H(h, p, B(this.Fh, this, k));
			this.C.H(h, a, B(this.qg, this, h))
		}, this);
		for (var d in this.J) {
			b =
				this.J[Number(d)];
			d = parseInt(d, 10);
			Fi(b) || (b = [b]);
			for (var e = 0, g = void 0; g = b[e]; ++e) this.C.H(g, p, B(this.Fh, this, d)), this.Zc || this.C.H(g, a, B(this.qg, this, g))
		}
		d = [this.Z, this.qa];
		for (b = 0; b < d.length; b++) d[b] && this.C.H(d[b], p, this.zl);
		d.push(this.ub);
		for (b = 0; b < d.length; b++) d[b] && this.C.H(d[b], a, this.Al);
		this.C.H(this.G(), Te, jm)
	};
	y.ta = function () {
		Z.prototype.ta.call(this);
		ao(this.C)
	};
	y.Fh = function (a) {
		this.dispatchEvent(new O(Ua, {
			keyCode: a
		}))
	};
	y.qg = function (a, b) {
		var c = !1,
			d = !1;
		a && (c = Kp(a, "vk-sf-a"), d = Kp(a, "vk-sf-s"));
		switch (b.type) {
			case w:
				this.N = a;
				c || d || (Yr(a, [Ch, Dh]), V(a.firstChild, Dh));
				break;
			case Ve:
				this.N = null;
				c || d || (Jp(a, Ch), W(a.firstChild, Dh));
				break;
			case Te:
				d || (Yr(a, [Ch, "vk-sf-a"]), this.ca = a);
				break;
			case We:
				this.ca && (Jp(this.ca, Ch), W(this.ca.firstChild, Dh), this.ca = null), this.N && (Yr(this.N, [Ch, Dh]), V(this.N.firstChild, Dh))
		}
	};
	y.Al = function (a) {
		if (a.type == w || a.type == Ve) {
			var b = null,
				c = [this.Z, this.qa, this.ub];
			E(c, a.target) ? b = a.target.firstChild : E(c, a.target.parentElement) && (b = a.target);
			if (b) switch (a.type) {
				case w:
					V(b, "vk-sf-th");
					break;
				case Ve:
					W(b, "vk-sf-th")
			}
		}
	};
	y.zl = function (a) {
		switch (a.target) {
			case this.Z:
			case this.Z.firstChild:
				this.dispatchEvent("kc");
				break;
			case this.qa:
			case this.qa.firstChild:
				this.dispatchEvent("kmi")
		}
	};
	y.Wh = function (a) {
		this.F = this.U.style.display != of ;
		S(this.Sa, this.F);
		S(this.U, !this.F);
		Np(this.F ? this.ga : this.Y, "vk-l-i", "vk-l-a");
		Np(this.F ? this.Y : this.ga, "vk-l-a", "vk-l-i");
		a.preventDefault()
	};
	y.la = function (a) {
		var b = Z.prototype.la.call(this, a, !0);
		this.X && S(this.R, a);
		a && this.ba && Zw(this.ba);
		return b
	};
	y.Ve = function () {
		return this.B.Ve
	};
	y.L = function () {
		N(this.C);
		N(this.ba);
		Z.prototype.L.call(this);
		this.X && Il(this.R)
	};
	var Gy = {
		8: "vk-sf-c8",
		16: "vk-sf-c16",
		20: "vk-sf-c20"
	};
	z(Ky, R);
	y = Ky.prototype;
	y.handleEvent = function (a) {
		if (!this.S || !this.A) return !1;
		var b = !1;
		switch (a.type) {
			case u:
				b = Ry(this, a);
				break;
			case v:
				b = Ty(this, a);
				break;
			case oe:
				a = Oy(a.keyCode);
				b = this.B;
				var c = this.C;
				20 == a && km && xl ? (b &= -9, c &= -9) : 16 == a ? (b &= -258, c &= -258) : 18 == a ? (b &= -515, c &= -515) : 17 == a ? (b &= -517, c &= -517) : 91 == a && (b &= -17, c &= -17);
				this.B != b && (this.B = b, xy(this.A, My(this.B)));
				this.C != c && (this.C = c, vy(this.A, My(this.C)));
				b = this.D[a];
				delete this.D[a]
		}
		return b
	};
	y.focus = function () {
		this.A && Hy(this.A)
	};
	y.el = function () {
		Ny(this, !1)
	};
	y.bl = function (a) {
		if (this.A) {
			this.I && this.I.ee();
			var b = a.target.keyCode;
			if (b) {
				switch (b) {
					case 16:
						this.B & 1 && (this.B |= 256, this.B &= -2);
						this.B ^= 256;
						xy(this.A, My(this.B));
						break;
					case 273:
						this.B & 2 && this.B & 4 && (this.B |= 512, this.B &= -7);
						this.B ^= 512;
						xy(this.A, My(this.B));
						break;
					case 20:
						this.B ^= 8;
						xy(this.A, My(this.B));
						break;
					default:
						Qy(this, b, a.target.charCode, !0)
				}
				this.F.Lc("kcc")
			}
		}
	};
	y.il = function (a) {
		var b = a.A;
		b.title = this.Z[b.id] || b.title;
		a = this.$;
		var c = this.K,
			d = this.N;
		this.N = this.K = this.$ = null;
		var e = !1,
			g = null;
		this.A && (this.T = this.A.isVisible(), e = this.A.Te, this.A.isVisible() && e && (g = this.A, g = dn(g.X ? g.R : g.G())), this.A.da(), this.F.set(Ta, "sw"), this.F.report());
		this.F.wg("lay", b.id);
		this.F.hf("vkd_" + b.id);
		this.A = new qy(b, this.U, this.bg, this.ga);
		this.A.ra(this);
		this.A.aa();
		this.A.Te = e;
		this.A.la(this.T);
		g ? ty(this.A, g) : a && null != c ? (b = this.A, b.G() && (a.Ga(b.G(), c, d), b.isVisible() && Zw(b.ba)),
			this.A.Te = !0) : ty(this.A);
		xy(this.A, My(this.B));
		vy(this.A, My(this.C));
		this.R.H(this.A, Ua, this.bl).H(this.A, ["kc", "kmi"], this.el)
	};
	y.L = function () {
		N(this.A);
		N(this.M);
		N(this.F);
		N(this.R);
		R.prototype.L.call(this)
	};
	var Jy = Uw;
	z(Xy, pu);
	y = Xy.prototype;
	y.rd = function (a) {
		return !!a && E([wb, vb, "cd", "sk", "mk", "ll", "re"], a)
	};
	y.md = function (a) {
		return !!a && a.type == Eh
	};
	y.ij = function (a) {
		(a && 16 == a.keyCode || 17 == a.keyCode || 18 == a.keyCode || 20 == a.keyCode) && this.B.handleEvent(a) && (a.stopPropagation(), a.preventDefault())
	};
	y.register = function (a) {
		pu.prototype.register.call(this, a);
		a && (this.A = a, this.B.I = a)
	};
	y.fc = function () {
		return this.I
	};
	y.Qe = function (a) {
		if (Fr(a)) return !1;
		this.B.I = this.A;
		return this.B.handleEvent(a)
	};
	y.qd = function (a, b, c, d) {
		switch (a) {
			case wb:
				(b = this.D) && b.Lb ? (c = this.B, c.Y = !1, c.X = !1, c = this.active && Yy, this.active && d && void 0 != d.mk && (c = !d.mk), Zy(this, c), Ly(this.B, this.active), ly(this.B.M, b.Lb), this.active && (d = this.B, c = b.Lb, (b = kE[b.code]) && (d.Z[c] = b), ny(d.M, c)), this.B.I = this.A) : (Ly(this.B, !1), Ny(this.B, !1));
				break;
			case vb:
				this.B.I = this.A;
				c ? this.B.focus() : (d = this.B, d.A && Iy(d.A));
				break;
			case "sk":
				Zy(this, b);
				break;
			case "mk":
				this.active && (Ly(this.B, this.active), Zy(this, !b));
				break;
			case "re":
				b && (a = this.B, a.A ?
					(a = a.A, a.G() && (b.Ga(a.G(), c, d), a.isVisible() && Zw(a.ba))) : (a.$ = b, a.K = c, a.N = d || new Qm(0, 0, 0, 0)));
				break;
			case "ll":
				ly(this.B.M, b)
		}
	};
	y.Hk = function (a) {
		this.C.dispatchEvent(a)
	};
	y.gl = function () {
		this.A && this.A.Qc(2)
	};
	y.fl = function (a) {
		this.A && this.A.Qc(5, a.data)
	};
	y.L = function () {
		N(this.F);
		N(this.B);
		pu.prototype.L.call(this)
	};
	z(az, O);
	z(iz, R);
	y = iz.prototype;
	y.handleEvent = function (a, b) {
		(a = this.M[Ji(a)]) && a.dispatchEvent(b);
		return !!a && b.D
	};
	y.fj = function (a, b) {
		var c = !1;
		b instanceof ap ? "tita" == b.A ? (a = this.A.D, c = this.A.active, a && (c ? mz(this, a) : lz(this, a), this.dispatchEvent(new O("tt"))), c = !0) : c = this.A.Rd(a, b) : b.type == lc || b.type == nb ? this.ob(vb, a, b.type == lc) : c = this.A.handleEvent(a, b);
		c && (b.preventDefault(), b.stopPropagation())
	};
	y.Cj = function () {
		var a = this.D.G(ra);
		a && op in this.K && (this.C.H(a, "syc", this.yj), kz(this, "ic"))
	};
	y.yj = function () {
		var a = this.D.G(ra);
		if (a) {
			var b = a.getAttribute("input");
			a = JSON.parse(a.getAttribute("input_stat"));
			(b = b ? et(b) : null) ? lz(this, b, a ? a : void 0): mz(this)
		}
	};
	y.register = function (a) {
		if (Fi(a)) {
			var b = this.A.fc();
			aj(b, [lc, nb]);
			dj(b);
			D(a, function (c) {
				if (!this.M[Ji(c)]) {
					var d = new qs(c);
					this.M[Ji(c)] = d;
					this.A.register(d);
					d.D && (!Sz || d.I.tagName.toUpperCase() == ua || K && !gl(9) ? d.F.H(d.D, b, d.pd, cp) : os(d.D, b, d.pd, d));
					this.I && D(this.I.split(","), function (e) {
						rs(d, e, "tita")
					}, this);
					this.C.H(d, Zi(b, jg), B(this.fj, this, d));
					this.C.H(d, "kc", this.dispatchEvent);
					this.C.H(d, "g", this.dispatchEvent)
				}
			}, this)
		}
	};
	y.ob = function (a, b) {
		this.A.Gh.apply(this.A, arguments)
	};
	y.Gj = function (a) {
		this.F.A.S = !0;
		this.F.A.M = !0;
		if (!this.F.kg(a)) {
			var b = kg + a;
			this.F.wh(a, a);
			this.C.H(this.F, b, this.zj)
		}
	};
	y.zj = function () {
		var a = this.A.D,
			b = this.A.active;
		a && (b ? mz(this, a) : lz(this, a), this.dispatchEvent(new O("tt")))
	};
	y.L = function () {
		this.S.ka("uf", this.Xh, !1, this);
		N(this.A);
		delete this.A;
		N(this.C);
		delete this.C;
		N(this.F);
		delete this.F;
		R.prototype.L.call(this)
	};
	y.Xh = function () {
		var a = this.A.D,
			b = this.A.active;
		a && b && this.ob(wb, a, !0)
	};
	y.oh = !1;
	y.hi = !0;
	var hz = hz || "";
	Ei(nz);
	z(oz, U);
	oz.prototype.W = function () {
		this.B = this.A.P("A", {
			"class": this.K,
			role: sb
		});
		K && V(this.B, "ita-kd-ie");
		this.R && V(this.B, Wd);
		this.C = this.A.P(n, {
			"class": this.N + " ita-kd-icon-span"
		});
		this.A.appendChild(this.B, this.C);
		this.D = this.B
	};
	oz.prototype.V = function () {
		Yn(this.J, this.B, w, function () {
			this.F && (V(this.C, Rd), V(this.B, Qd))
		}, this);
		Yn(this.J, this.B, Ve, function () {
			this.F && (W(this.C, Rd), W(this.B, Qd))
		}, this)
	};
	oz.prototype.L = function () {
		U.prototype.L.call(this);
		N(this.J)
	};
	oz.prototype.pb = function (a) {
		this.F = a
	};
	z(pz, Z);
	pz.prototype.W = function () {
		Z.prototype.W.call(this);
		if (0 != this.B.length) {
			if (1 == this.B.length) V(this.B[0].B, "ita-kd-single");
			else {
				V(this.B[0].B, "ita-kd-left");
				V(this.B[this.B.length - 1].B, "ita-kd-right");
				for (var a = 1; a < this.B.length - 1; a++) V(this.B[a].B, "ita-kd-mid")
			}
			for (a = 0; a < this.B.length; a++) this.A.appendChild(this.G(), this.B[a].B);
			this.Eb = !1;
			Xv(this, !1)
		}
	};
	pz.prototype.L = function () {
		im(this.B)
	};
	z(rz, M);
	rz.prototype.L = function () {
		M.prototype.L.call(this);
		N(this.A)
	};
	z(sz, O);
	z(tz, O);
	tz.prototype.isVisible = function () {
		return this.A
	};
	z(uz, O);
	z(vz, Z);
	y = vz.prototype;
	y.W = function () {
		Z.prototype.W.call(this);
		var a = this.A,
			b = this.C.B,
			c = a.P("UL", {
				"class": "ita-kd-dropdown-menu" + (K && !G(9) ? " ita-kd-ie" : "")
			});
		ov(c);
		if (Y) {
			var d = a.P(f, "ita-kd-dropdown-menu-mobile");
			d.appendChild(c);
			this.D = d
		} else this.D = c;
		var e = this.C.A ? this.C.A.code : "",
			g = this.C.D;
		D(b, function (h) {
			var k = h.code,
				l = this.A.P("LI", {
					"class": Ud,
					style: yg
				});
			l.setAttribute(Lg, "-1");
			Xi(this.X, {
				se: l,
				className: Vd
			});
			var m = this.A.P(n, "ita-kd-checkbox ita-kd-menuitem-span"),
				r = this.A.P(n, {
					"class": "ita-kd-menuitem-inputtool-icon ita-kd-menuitem-span " + Fp(k)
				}),
				L = this.A.P(n, {
					"class": "ita-kd-menuitem-inputtool-name"
				}, kE[k]);
			it(et(k)) ? L.dir = $f : L.dir = Je;
			this.A.ya(l, m, r, L);
			(m = Cp.body) && vn(m) && V(l, "ita-kd-rtl");
			this.J[k] = {
				Xc: l,
				icon: r,
				name: L
			};
			g && e == h.code && V(l, Wd);
			a.appendChild(c, l)
		}, this);
		/^(gmail|kix|trix|punch)/.test(op) && (this.F = wz(this, "Enable personal dictionary", !0), this.R = wz(this, "Disable personal dictionary", !0));
		this.U = wz(this, "Show Keyboard", !0);
		this.T = wz(this, "Hide Keyboard", !0);
		this.ga && (this.N = wz(this, "Input Tools Settings"));
		this.Y = this.A.P(f, {
			"class": "ita-kd-separator"
		});
		a.ya(c, this.Y, this.F, this.R, this.U, this.T, this.N);
		b = g && this.C.A.type == Eh;
		S(this.Y, !!(this.F || b || this.N))
	};
	y.ei = function (a) {
		this.K.dispatchEvent(new sz(a, this.C.A != a || !this.C.D));
		Az(this)
	};
	y.V = function () {
		Z.prototype.V.call(this);
		this.B.H(this.K, "citc", this.Sj);
		var a = this.C.B,
			b = Ll(yz(this));
		D(b, function (c, d) {
			d < a.length && this.B.H(c, p, B(this.ei, this, a[d].code))
		}, this);
		D(this.X, function (c) {
			this.B.H(c.se, w, B(this.mj, this, c.se));
			this.B.H(c.se, Ve, this.rf)
		}, this);
		this.F && this.B.H(this.F, p, B(this.df, this, !0)).H(this.R, p, B(this.df, this, !1)).H(this.K, "psa", this.pl);
		this.N && this.B.H(this.N, p, this.eh);
		this.B.H(this.U, p, B(this.ae, this, !0)).H(this.T, p, B(this.ae, this, !1)).H(this.K, "kmi", this.ae).H(yz(this),
			w, this.Rj).H(yz(this), Ve, function () {
			this.bc = !1
		}).H(yz(this), u, this.Qj);
		P && this.B.H(yz(this), v, function (c) {
			c.stopPropagation();
			c.preventDefault()
		});
		this.Z && this.B.H(this.A.A, p, this.Pj);
		this.B.H(this.K, "ita_l", this.wi)
	};
	y.Rj = function () {
		this.bc = !0;
		yz(this).focus()
	};
	y.focus = function () {
		var a = Ll(yz(this));
		yz(this).focus();
		0 < a.length && (a[0].focus(), xz(this, a[0]))
	};
	y.mj = function (a) {
		this.rf();
		V(a, Vd)
	};
	y.rf = function () {
		for (var a = Ll(yz(this)), b = 0; b < a.length; b++) W(a[b], Vd)
	};
	y.Qj = function (a) {
		var b = Ll(yz(this));
		if (b && 0 != b.length) {
			var c = zz(this),
				d = this.C.B,
				e = c ? Vi(b, c) : -1;
			c = !1;
			if (13 == a.keyCode || 32 == a.keyCode) d[e] ? this.ei(d[e].code, null) : b[e] == this.U ? this.ae(!0) : b[e] == this.T ? this.ae(!1) : b[e] == this.N ? this.eh(null) : b[e] == this.F ? this.df(!0) : b[e] == this.R && this.df(!1), c = !0;
			d = function (g) {
				var h = b.length;
				g += h;
				for (var k = (e + g) % h; k != e; k = (k + g) % h) {
					var l = b[k];
					if ("LI" == l.tagName.toUpperCase() && l.style.display != of ) return l
				}
				return b[e]
			};
			40 == a.keyCode && (xz(this, d(1)), c = !0);
			38 == a.keyCode &&
				(xz(this, d(-1)), c = !0);
			9 == a.keyCode && Az(this);
			c && (a.stopPropagation(), a.preventDefault())
		}
	};
	y.Pj = function () {
		this.bc || Az(this)
	};
	y.eh = function () {
		this.K.dispatchEvent(new O("slc"));
		Az(this)
	};
	y.Sj = function (a) {
		var b = a.currInputToolActive;
		a = a.currInputToolName;
		a || (a = this.C.A.code);
		D(this.C.B, function (c) {
			this.J[c.code] && W(this.J[c.code].Xc, Wd)
		}, this);
		b && this.J[a] && V(this.J[a].Xc, Wd);
		b = !Y && et(a).type == Eh && b;
		Y || (S(this.U, b && !Yy), S(this.T, b && Yy));
		S(this.Y, b || !!this.N)
	};
	y.L = function () {
		Z.prototype.L.call(this);
		N(this.B);
		N(this.ca)
	};
	y.wi = function (a) {
		var b = a.l10n,
			c = vn(yz(this));
		pj(this.J, function (d, e) {
			var g;
			if (e)
				if (g = et(e)) {
					e = null;
					var h = BE[g.code];
					h && (e = c ? h[1] + " \u2190 " + h[0] : h[0] + " \u2192 " + h[1]);
					e || (e = CE[g.code]) && (e = Qz(e));
					e || "hw" != g.type || (e = (e = Qz("HANDWRITE")) ? Pz(b, g.code) + " - " + e : Pz(b, g.code));
					e || (e = Pz(b, g.code), (h = DE[g.code]) && (e += " - " + h), h = EE[g.code], (g = Qz(h)) && (e += " - " + g));
					g = e
				} else g = Qz(e);
			else g = null;
			g && (Ul(d.name, g), sl(d.name, {
				dir: Je
			}))
		}, this)
	};
	y.ae = function (a) {
		var b = !1;
		"boolean" === typeof a && (b = a, this.K.dispatchEvent(new uz("mk", !b)));
		S(this.U, !Y && !b);
		S(this.T, !Y && b);
		Az(this)
	};
	y.df = function (a) {
		Hu = a;
		S(this.F, !a);
		S(this.R, a);
		fz({
			EnableUserDictionary: a
		});
		Az(this)
	};
	y.pl = function (a) {
		a = a.value.EnableUserDictionary;
		void 0 !== a && (S(this.F, !a), S(this.R, a))
	};
	C(Bz, co);
	Bz.prototype.I = function () {
		return this.D
	};
	Bz.prototype.F = function (a) {
		this.D = a
	};
	Bz.prototype.Ga = function (a, b, c, d) {
		var e = Pn(this.A, this.B, a, b, null, c, 10, d, this.C);
		if (e & 496) {
			var g = Cz(e, this.B);
			b = Cz(e, b);
			e = Pn(this.A, g, a, b, null, c, 10, d, this.C);
			e & 496 && (g = Cz(e, g), b = Cz(e, b), Pn(this.A, g, a, b, null, c, this.D, d, this.C))
		}
	};
	z(Dz, uo);
	y = Dz.prototype;
	y.W = function () {
		uo.prototype.W.call(this);
		if (0 != this.C.B.length) {
			var a = this.A,
				b = this.G();
			a.G("itamenu") || (b.id = "itamenu");
			this.T = new pz;
			this.ca = a.P(n, {
				"class": Td
			});
			a.appendChild(b, this.ca);
			if (this.ga) {
				var c = qz(this.T, "ita-kd-icon-button ita-kd-floating-bar", "ita-kd-img ita-kd-floating-bar-icon");
				this.qa = c.B;
				b.style.zIndex = "99"
			}
			b = this.C.D;
			this.C.A && (c = Fp(this.C.A.code), c = qz(this.T, "ita-kd-icon-button ita-kd-inputtool-icon ita-kd-small " + (Y ? "ita-kd-mobile" : ""), c + " ita-kd-icon", b), this.F = c.B, this.Z = c.C,
				this.F.setAttribute(Lg, "0"));
			if (1 < this.C.B.length || 1 == this.C.B.length && (this.C.B[0].type == Eh || this.X)) c = qz(this.T, "ita-kd-icon-button ita-kd-dropdown " + (Y ? "ita-kd-mobile" : ""), "ita-kd-img ita-kd-arrow"), this.K = c.B, this.K.setAttribute(Lg, "0"), this.K.setAttribute("aria-haspopup", "true"), this.K.setAttribute(cb, "Show the Input Tools menu");
			this.T.aa(this.ca);
			this.B = new vz(this.C, this.N, this.X, a);
			this.B.Z = !1;
			this.B.aa();
			Az(this.B);
			hm(this, this.B)
		}
	};
	y.Yh = function () {
		$w(this.G())
	};
	y.Rf = function () {
		this.N.dispatchEvent(new sz(this.C.A.code, !this.C.D));
		Az(this.B)
	};
	y.V = function () {
		uo.prototype.V.call(this);
		this.J.H(this.N, "citc", this.Lj).H(this.N, "itlu", this.Oh);
		this.F && this.J.H(this.F, p, this.Rf).H(this.F, Kb, this.Rf).H(this.F, u, B(this.vh, this, !1));
		this.K && this.J.H(this.K, p, this.$g).H(this.B, "vc", this.cj).H(this.K, u, B(this.vh, this, !0));
		this.qa && (this.ba = new dv(this.G(), this.qa), this.J.H(this.ba, "drag", function () {
			Ez(this);
			this.bi = !1
		}));
		this.B && this.J.H(this.A.A, Te, this.Kj, cp)
	};
	y.vh = function (a, b) {
		if (13 == b.keyCode || 32 == b.keyCode || a && 40 == b.keyCode) b.target == this.K ? this.$g() : b.target == this.F && this.Rf(null), b.stopPropagation(), b.preventDefault()
	};
	y.$g = function () {
		Ez(this);
		var a = this.B;
		a.isVisible() ? Az(a) : (a.la(!0), a.dispatchEvent(new tz(!0)));
		this.B.focus()
	};
	y.$e = function (a, b, c) {
		uo.prototype.$e.call(this, a, b, c);
		Ez(this)
	};
	y.cj = function (a) {
		a.isVisible() ? V(this.K, Wd) : W(this.K, Wd)
	};
	y.Kj = function () {
		this.bc || this.B.bc || Az(this.B)
	};
	y.Lj = function (a) {
		var b = a.currInputToolActive;
		a = a.currInputToolName;
		a || (a = this.C.A.code);
		D(this.C.B, function (c) {
			W(this.Z, Ep(c.code))
		}, this);
		V(this.Z, Ep(a));
		b ? V(this.F, Wd) : W(this.F, Wd);
		switch (this.C.A.type) {
			case "im":
				this.F.setAttribute(cb, b ? "Turn off Input Method" : "Turn on Input Method");
				break;
			case Eh:
				this.F.setAttribute(cb, b ? "Turn off Virtual Keyboard" : "Turn on Virtual Keyboard");
				break;
			case "hw":
				this.F.setAttribute(cb, b ? "Turn off Handwriting" : "Turn on Handwriting")
		}
		this.F.setAttribute("aria-pressed",
			String(b))
	};
	y.Oh = function () {
		ao(this.J);
		var a = this.G();
		N(this.B);
		if (0 < this.C.B.length) {
			if (this.D = null, vo(this, this.X, this.Xc), !this.Xc) {
				this.G().style.position = Sa;
				try {
					this.$e(a, [0, 0])
				} catch (b) {}
			}
		} else this.J.H(this.N, "itlu", B(this.Oh, this));
		this.A.yb(a)
	};
	y.L = function () {
		uo.prototype.L.call(this);
		N(this.ba);
		N(this.T)
	};
	y.lh = function () {
		this.G().style.display = of ;
		this.B && Az(this.B)
	};
	z(Fz, O);
	var Gz = {
		translate: 11,
		kix: 12,
		trix: 13,
		punch: 14,
		gmail: 5
	};
	z(Oz, M);
	y = Oz.prototype;
	y.Qh = function () {
		this.A |= 1;
		window.LanguageDisplays && window.LanguageDisplays.localNames && D(window.LanguageDisplays.localNames, function (a) {
			a = a.split(":");
			this.D[a[1]] = a[0]
		}, this);
		this.notify()
	};
	y.Sh = function () {
		this.A |= 2;
		this.notify()
	};
	y.hl = function () {
		var a = Js(Yj(Mz, {
				langCode: q
			})),
			b = B(this.Qh, this);
		As(a, b, null, void 0)
	};
	y.kl = function () {
		var a = Js(Yj(Nz, {
				langCode: q
			})),
			b = B(this.Sh, this);
		As(a, b, null, void 0)
	};
	y.notify = function () {
		3 == (this.A & 3) && yo(wo.fa(), new Fz(this))
	};
	var Mz = Rj("https://ssl.gstatic.com/inputtools/js/ln/17/%{langCode}.js"),
		Nz = Rj("https://ssl.gstatic.com/inputtools/js/msgs/10/%{langCode}.js");
	Oz.prototype.A = 0;
	var BE = {
			"am-t-i0-und": ["salam", "\u1230\u120b\u121d"],
			"ar-t-i0-und": ["marhaban", "\u0645\u0631\u062d\u0628\u0627"],
			"be-t-i0-und": ["pryvitannie", "\u043f\u0440\u044b\u0432\u0456\u0442\u0430\u043d\u043d\u0435"],
			"bg-t-i0-und": ["zdrasti", "\u0437\u0434\u0440\u0430\u0441\u0442\u0438"],
			"bn-t-i0-und": ["namaskar", "\u09a8\u09ae\u09b8\u09cd\u0995\u09be\u09b0"],
			"el-t-i0-und": ["geia", "\u03b3\u03b5\u03b9\u03b1"],
			"fa-t-i0-und": ["salam", "\u0633\u0644\u0627\u0645"],
			"gu-t-i0-und": [ef, "\u0aa8\u0aae\u0ab8\u0acd\u0aa4\u0ac7"],
			"he-t-i0-und": ["shalom", "\u05e9\u05dc\u05d5\u05dd"],
			"hi-t-i0-und": [ef, "\u0928\u092e\u0938\u094d\u0924\u0947"],
			"ja-t-ja-hira-i0-und": ["konnichiha", "\u3053\u3093\u306b\u3061\u306f"],
			"kn-t-i0-und": ["namaskaram", "\u0ca8\u0cae\u0cb8\u0ccd\u0c95\u0cbe\u0cb0"],
			"ml-t-i0-und": ["namaskar", "\u0d28\u0d2e\u0d38\u0d4d\u0d15\u0d3e\u0d30\u0d02"],
			"mr-t-i0-und": [ef, "\u0928\u092e\u0938\u094d\u0915\u093e\u0930"],
			"ne-t-i0-und": [ef, "\u0928\u092e\u0938\u094d\u0924\u0947"],
			"or-t-i0-und": ["mausam", "\u0b28\u0b2e\u0b38\u0b4d\u0b24\u0b47"],
			"pa-t-i0-und": ["mausam", "\u0a2e\u0a4c\u0a38\u0a2e"],
			"ru-t-i0-und": ["privet", "\u043f\u0440\u0438\u0432\u0435\u0442"],
			"sa-t-i0-und": [ef, "\u0928\u092e\u0938\u094d\u0924\u0947"],
			"sr-t-i0-und": ["zdravo", "\u0437\u0434\u0440\u0430\u0432\u043e"],
			"si-t-i0-und": ["halo", "\u0dc4\u0dbd\u0ddd"],
			"ta-t-i0-und": ["vanakkam", "\u0bb5\u0ba3\u0b95\u0bcd\u0b95\u0bae\u0bcd"],
			"ti-t-i0-und": ["selam", "\u1230\u120b\u121d"],
			"te-t-i0-und": ["emandi", "\u0c0f\u0c2e\u0c02\u0c21\u0c40"],
			"uk-t-i0-und": ["pryvit", "\u043f\u0440\u0438\u0432\u0456\u0442"],
			"ur-t-i0-und": ["salam", "\u0633\u0644\u0627\u0645"],
			"vi-t-i0-und": ["chao", "ch\u00e0o"]
		},
		DE = {
			"bn-t-k0-und": xa,
			"cs-t-k0-qwertz": "QWERTZ",
			"en-t-k0-dvorak": "DVORAK",
			"gu-t-k0-und": xa,
			"hi-t-k0-und": xa,
			"ka-t-k0-legacy": ia,
			"km-t-k0-und": "NiDA",
			"kn-t-k0-und": xa,
			"ml-t-k0-und": xa,
			"ne-t-k0-und": xa,
			"or-t-k0-und": xa,
			"pa-guru-t-k0-und": xa,
			"ru-t-k0-qwerty": "QWERTY",
			"sk-t-k0-qwerty": "QWERTY",
			"ta-t-k0-ta99": "Tamil99",
			"ta-t-k0-und": xa,
			"ta-t-k0-typewriter": "TYPEWRITER",
			"ta-t-k0-itrans": "ITRANS",
			"th-t-k0-pattajoti": "PATTAJOTI",
			"th-t-k0-tis": "TIS",
			"te-t-k0-und": xa,
			"tr-t-k0-und": "Q",
			"tr-t-k0-legacy": "F",
			"uz-cyrl-t-k0-legacy": ia,
			"vi-t-k0-legacy": "Telex",
			"vi-t-k0-viqr": "VIQR",
			"vi-t-k0-und": "TCVN 6064",
			"vi-t-k0-vni": "VNI"
		},
		EE = {
			"de-ch-t-k0-und": "SWISS_GERMAN",
			"hy-hyr-t-k0-und": "EASTERN",
			"hy-hyt-t-k0-und": "WESTERN",
			"ka-t-k0-und": "LATIN",
			"pt-br-t-k0-und": "BRAZILIAN",
			"pt-pt-t-k0-und": "EUROPEAN",
			"ro-t-k0-legacy": "PRIMARY",
			"ro-t-k0-extended": "SECONDARY",
			"sr-cyrl-t-k0-und": "CYRILLIC",
			"sr-latn-t-k0-und": "LATIN",
			"uz-latn-t-k0-und": "LATIN",
			"uz-cyrl-t-k0-und": "CYRILLIC",
			"zh-t-i0-pinyin": "PINYIN",
			"zh-hant-t-i0-pinyin": "PINYIN",
			"bg-t-k0-qwerty": Ga,
			"hi-t-k0-qwerty": Ga,
			"chr-t-und-latn-k0-und": Ga
		},
		CE = {
			"en-us-t-k0-intl": "US_I18N",
			"yue-hant-t-i0-und": "CANTONESE",
			"zh-hant-t-i0-cangjie-1982": "CANGJIE",
			"zh-t-i0-wubi-1986": "WUBI",
			"zh-hant-t-i0-und": "ZHUYIN"
		},
		Lz = ["am", "ar", "bg", "bn", "ca", "cs", "da", "de", "de-AT", "de-CH", "el", "en-GB", "en-IE", "en-IN", "en-SG", "en-ZA", "es", "es-419", "es-AR", "es-BO", "es-CL", "es-CO", "es-CR", "es-DO", "es-EC", "es-GT", "es-HN",
			"es-MX", "es-NI", "es-PA", "es-PE", "es-PR", "es-PY", "es-SV", "es-US", "es-UY", "es-VE", "fa", "fi", "fil", "fr", "fr-CH", "gsw", "gu", bd, "hi", "hr", "hu", "id", "in", "it", "iw", "ja", "kn", "ko", "ln", "lt", "lv", "ml", "mo", "mr", "nb", "ne", "nl", "no", "or", "pa", "pl", Ef, Ff, "pt", "ro", "ru", "si", "sk", "sl", "sr", "sv", "th", "ti", "tr", "uk", "ur", "vi", Mh, Oh, "zh-Hant", Nh, Ph, "zh"
		];
	z(Rz, M);
	Ei(Rz);
	z(Uz, M);
	y = Uz.prototype;
	y.ti = function () {
		bA(this, !1, this.A.A)
	};
	y.addEventListener = function (a, b, c, d) {
		if (!uj(iE, a)) throw Error("Exception in addEventListener: Invalid event type:" + a);
		"boolean" === typeof c ? Xn(this.F, this.B, a, b, c, d || this) : d ? Xn(this.F, this.B, a, b, !1, d || this) : Xn(this.F, this.B, a, b, !1, c || this)
	};
	y.removeEventListener = function (a, b, c) {
		if (!uj(iE, a)) throw Error("Exception in removeEventListener: Invalid event type:" + a);
		this.F.ka(this.B, a, b, !1, c)
	};
	y.vl = function (a) {
		bA(this, a.F, et(a.A))
	};
	y.wl = function (a) {
		a = a.G();
		this.A.C = a;
		E(this.C, a) || (this.C.push(a), this.D.register([a]));
		bA(this, this.A.D, this.A.A)
	};
	y.xl = function (a) {
		a = a.A;
		var b = this.A.A,
			c = this.A.D;
		b && b.type == Eh && c && this.D.ob("sk", a)
	};
	y.ml = function () {
		this.D.ob("mk", !0)
	};
	y.Lh = function () {
		var a = this.A.D;
		this.A.D = !1;
		if (a) {
			if (this.A.A) {
				var b = this.A.A.code;
				mz(this.D, this.A.A)
			} else b = null, mz(this.D);
			Xz(this, b, a)
		}
	};
	y.Jj = function (a) {
		this.A.C = a.target
	};
	y.L = function () {
		M.prototype.L.call(this);
		this.I && (wo.fa(), Yi(xo, this.B), N(this.B));
		delete this.C;
		N(this.D);
		delete this.D;
		N(this.F);
		delete this.F;
		delete this.M
	};
	y.Cl = function () {
		var a = this.A.D,
			b = this.A.A ? this.A.A.code : null;
		b && (this.A.D = !a, Xz(this, b, a))
	};
	y.Tk = function (a) {
		var b = [a.F];
		a.A && aj(b, a.A);
		this.D.ob.apply(this.D, b)
	};
	z(dA, O);
	z(eA, O);
	C(gA, xv);
	Ei(gA);
	y = gA.prototype;
	y.ed = function () {
		return sb
	};
	y.Ob = function (a, b, c) {
		switch (b) {
			case 8:
			case 16:
				X(a, "pressed", c);
				break;
			default:
			case 64:
			case 1:
				gA.O.Ob.call(this, a, b, c)
		}
	};
	y.lb = function (a) {
		var b = gA.O.lb.call(this, a);
		hA(b, a.K);
		var c = a.ma();
		c && this.Gf(b, c);
		Bv(a, 16) && this.Ob(b, 16, Cv(a, 16));
		return b
	};
	y.Da = function (a, b) {
		b = gA.O.Da.call(this, a, b);
		var c = this.ma(b);
		a.qa = c;
		a.K = b.title;
		Bv(a, 16) && this.Ob(b, 16, Cv(a, 16));
		return b
	};
	y.ma = Di;
	y.Gf = Di;
	y.ia = function () {
		return "goog-button"
	};
	C(iA, gA);
	Ei(iA);
	y = iA.prototype;
	y.ed = function () {};
	y.lb = function (a) {
		Kv(a, !1);
		a.yd &= -256;
		a.Na(32, !1);
		return a.A.P(ha, {
			"class": Ev(this, a).join(" "),
			disabled: !a.isEnabled(),
			title: a.K || "",
			value: a.ma() || ""
		}, a.Hb() || "")
	};
	y.Fe = function (a) {
		return a.tagName == ha || a.tagName == va && (a.type == sb || "submit" == a.type || "reset" == a.type)
	};
	y.Da = function (a, b) {
		Kv(a, !1);
		a.yd &= -256;
		a.Na(32, !1);
		if (b.disabled) {
			var c = this.Fd(1);
			V(b, c)
		}
		return iA.O.Da.call(this, a, b)
	};
	y.Ge = function (a) {
		jo(a).H(a.G(), p, a.Nb)
	};
	y.Kf = Di;
	y.Tg = Di;
	y.Sg = function (a) {
		return a.isEnabled()
	};
	y.Md = Di;
	y.Lf = function (a, b, c) {
		iA.O.Lf.call(this, a, b, c);
		(a = a.G()) && 1 == b && (a.disabled = c)
	};
	y.ma = function (a) {
		return a.value
	};
	y.Gf = function (a, b) {
		a && (a.value = b)
	};
	y.Ob = Di;
	C(jA, Hv);
	y = jA.prototype;
	y.ma = function () {
		return this.qa
	};
	y.Hf = function (a) {
		this.qa = a;
		this.C.Gf(this.G(), a)
	};
	y.L = function () {
		jA.O.L.call(this);
		delete this.qa;
		delete this.K
	};
	y.V = function () {
		jA.O.V.call(this);
		if (Bv(this, 32)) {
			var a = this.G();
			a && jo(this).H(a, oe, this.oc)
		}
	};
	y.oc = function (a) {
		return 13 == a.keyCode && a.type == ne || 32 == a.keyCode && a.type == oe ? this.Nb(a) : 32 == a.keyCode
	};
	rv("goog-button", function () {
		return new jA(null)
	});
	C(kA, gA);
	Ei(kA);
	y = kA.prototype;
	y.lb = function (a) {
		var b = Ev(this, a);
		b = a.A.P(f, Ic + b.join(" "), a.eb);
		hA(b, a.K);
		return b
	};
	y.ed = function () {
		return sb
	};
	y.Fe = function (a) {
		return a.tagName == f
	};
	y.Da = function (a, b) {
		V(b, Hc);
		return kA.O.Da.call(this, a, b)
	};
	y.ma = function () {
		return ""
	};
	y.ia = function () {
		return Dc
	};
	rv(Dc, function () {
		return new jA(null, kA.fa())
	});
	z(lA, U);
	y = lA.prototype;
	y.W = function () {
		U.prototype.W.call(this);
		this.J = new U(this.A);
		this.tb(this.J, !0)
	};
	y.V = function () {
		U.prototype.V.call(this);
		V(this.J.G(), "goog-char-picker-grid");
		this.F.H(this.J, Ua, this.Mj)
	};
	y.La = function (a) {
		var b = !1;
		if (37 == a.keyCode) b = sA(this, 0, -1);
		else if (39 == a.keyCode) b = sA(this, 0, 1);
		else if (38 == a.keyCode) b = sA(this, -1, 0);
		else if (40 == a.keyCode) b = sA(this, 1, 0);
		else if (13 == a.keyCode) 0 <= this.C ? (b = this.B[this.C], a = b.ma(), this.dispatchEvent(new dA(a)), b.ua(!0), b.G().focus(), b = !0) : b = !1;
		else if (27 == a.keyCode) 0 <= this.C && (this.B[this.C].ua(!1), this.C = -1);
		else if (9 == a.keyCode)
			for (a = 0; a < this.B.length; a++) this.B[a].ua(!1);
		return b
	};
	y.Jh = function (a) {
		a = a.target;
		for (var b = 0; b < this.B.length; b++) this.B[b].ua(!1);
		mA(this, a)
	};
	y.Kh = function () {
		0 <= this.C && this.B[this.C].ua(!1);
		this.C = -1
	};
	y.Mj = function (a) {
		a = a.target;
		var b = a.ma();
		b && (this.dispatchEvent(new dA(b)), mA(this, a), a.G().focus())
	};
	y.L = function () {
		N(this.F);
		im(this.B);
		N(this.J);
		U.prototype.L.call(this)
	};
	var pA = /[\u0fd5\u5350]/g;
	z(tA, O);
	uA.prototype.A = null;
	wA.prototype.A = "Symbol;Emoji;Punctuation;Number;Format & Whitespace;Modifier;Latin;Other European Scripts;American Scripts;African Scripts;Middle Eastern Scripts;South Asian Scripts;Southeast Asian Scripts;Hangul;Other East Asian Scripts;Han 1-Stroke Radicals;Han 2-Stroke Radicals;Han 3-Stroke Radicals;Han 4-Stroke Radicals;Han 5-Stroke Radicals;Han 6-Stroke Radicals;Han 7-Stroke Radicals;Han 8-Stroke Radicals;Han 9-Stroke Radicals;Han 10-Stroke Radicals;Han 11..17-Stroke Radicals;Han - Other".split(";");
	wA.prototype.B = [
		["Arrows", "Braille", "Control Pictures", "Currency", "Emoticons", "Game Pieces", "Gender and Genealogical", "Geometric Shapes", "Keyboard and UI", "Latin 1 Supplement", "Math", "Math Alphanumeric", "Miscellaneous", "Musical", "Stars/Asterisks", "Subscript", "Superscript", "Technical", "Transport And Map", "Weather and Astrological", "Yijing / Tai Xuan Jing", ta, ja], "People and Emotions;Animals, Plants and Food;Objects;Sports, Celebrations and Activities;Transport, Maps and Signage;Weather, Scenes and Zodiac signs;Enclosed;Marks;Symbols".split(";"), ["ASCII Based", "Dash/Connector", Fa, "Paired", ta, ja],
		["Decimal", "Enclosed/Dotted", "Fractions/Related", Fa, ta, ja],
		["Format", "Variation Selector", "Whitespace", ta, ja],
		["Enclosing", "Nonspacing", "Spacing", ta, ja],
		["Common", "Enclosed", "Flipped/Mirrored", Fa, "Phonetics (IPA)", "Phonetics (X-IPA)", ta, ja], "Armenian;Cyrillic;Georgian;Greek;Historic - Cypriot;Historic - Cyrillic;Historic - Georgian;Historic - Glagolitic;Historic - Gothic;Historic - Greek;Historic - Linear B;Historic - Ogham;Historic - Old Italic;Historic - Runic;Historic - Shavian;Compatibility - Armenian;Compatibility - Greek".split(";"), ["Canadian Aboriginal", "Cherokee", "Historic - Deseret"], "Egyptian Hieroglyphs;Ethiopic;Meroitic Cursive;Meroitic Hieroglyphs;Nko;Tifinagh;Vai;Historic - Bamum;Historic - Coptic;Historic - Nko;Historic - Osmanya".split(";"), "Arabic;Hebrew;Imperial Aramaic;Inscriptional Pahlavi;Inscriptional Parthian;Mandaic;Old South Arabian;Samaritan;Syriac;Historic - Arabic;Historic - Avestan;Historic - Carian;Historic - Cuneiform;Historic - Hebrew;Historic - Lycian;Historic - Lydian;Historic - Old Persian;Historic - Phoenician;Historic - Syriac;Historic - Ugaritic;Compatibility - Arabic;Compatibility - Hebrew".split(";"), ["Bengali", "Chakma", "Devanagari", "Gujarati", "Gurmukhi", "Kannada", "Lepcha", "Limbu", "Malayalam", "Meetei Mayek", "Ol Chiki", "Oriya", "Saurashtra", "Sinhala", "Sora Sompeng", "Tamil", "Telugu", "Thaana", "Tibetan", ta, "Historic - Brahmi", "Historic - Kaithi", "Historic - Kannada", "Historic - Kharoshthi", "Historic - Sharada", "Historic - Syloti Nagri", "Historic - Takri", "Compatibility - Bengali", "Compatibility - Devanagari", "Compatibility - Gurmukhi", "Compatibility - Oriya", "Compatibility - Tibetan"], "Balinese;Batak;Cham;Javanese;Kayah Li;Khmer;Lao;Myanmar;New Tai Lue;Tai Le;Tai Tham;Tai Viet;Thai;Historic - Buginese;Historic - Buhid;Historic - Hanunoo;Historic - Khmer;Historic - Rejang;Historic - Sundanese;Historic - Tagalog;Historic - Tagbanwa".split(";"), [Fa, "\u1100", "\u1102", "\u1103", "\u1105", "\u1106", "\u1107", "\u1109", "\u110b", "\u110c", "\u110e", "\u110f", "\u1110", "\u1111", "\u1112", "\u1159", ta, ja], "Bopomofo;Hiragana;Katakana;Lisu;Miao;Mongolian;Old Turkic;Phags Pa;Yi;Historic - Phags Pa;Compatibility - Bopomofo;Compatibility - Hiragana;Compatibility - Katakana;Compatibility - Phags Pa;Compatibility - Yi".split(";"), ["\u4e00", "\u4e28", "\u4e36", "\u4e3f", "\u4e59", "\u4e85", ja, Ba],
		["\u4e8c", "\u4ea0", "\u4eba", "\u513f", "\u5165", "\u516b", "\u5182", "\u5196",
			"\u51ab", "\u51e0", "\u51f5", "\u5200", "\u529b", "\u52f9", "\u5315", "\u531a", "\u5338", "\u5341", "\u535c", "\u5369", "\u5382", "\u53b6", "\u53c8", "\u8ba0", ja, Ba
		],
		["\u53e3", "\u56d7", "\u571f", "\u58eb", "\u5902", "\u590a", "\u5915", "\u5927", "\u5973", "\u5b50", "\u5b80", "\u5bf8", "\u5c0f", "\u5c22", "\u5c38", "\u5c6e", "\u5c71", "\u5ddb", "\u5de5", "\u5df1", "\u5dfe", "\u5e72", "\u5e7a", "\u5e7f", "\u5ef4", "\u5efe", "\u5f0b", "\u5f13", "\u5f50", "\u5f61", "\u5f73", "\u7e9f", "\u95e8", "\u98de", "\u9963", "\u9a6c", ja, Ba],
		["\u5fc3", "\u6208",
			"\u6236", "\u624b", "\u652f", "\u6534", "\u6587", "\u6597", "\u65a4", "\u65b9", "\u65e0", "\u65e5", "\u66f0", "\u6708", "\u6728", "\u6b20", "\u6b62", "\u6b79", "\u6bb3", "\u6bcb", "\u6bd4", "\u6bdb", "\u6c0f", "\u6c14", "\u6c34", "\u706b", "\u722a", "\u7236", "\u723b", "\u723f", "\u7247", "\u7259", "\u725b", "\u72ac", "\u89c1", "\u8d1d", "\u8f66", "\u97e6", "\u98ce", ja, Ba
		],
		["\u7384", "\u7389", "\u74dc", "\u74e6", "\u7518", "\u751f", "\u7528", "\u7530", "\u758b", "\u7592", "\u7676", "\u767d", "\u76ae", "\u76bf", "\u76ee", "\u77db", "\u77e2", "\u77f3",
			"\u793a", "\u79b8", "\u79be", "\u7a74", "\u7acb", "\u9485", "\u957f", "\u9e1f", "\u9f99", ja, Ba
		],
		["\u7af9", "\u7c73", "\u7cf8", "\u7f36", "\u7f51", "\u7f8a", "\u7fbd", "\u8001", "\u800c", "\u8012", "\u8033", "\u807f", "\u8089", "\u81e3", "\u81ea", "\u81f3", "\u81fc", "\u820c", "\u821b", "\u821f", "\u826e", "\u8272", "\u8278", "\u864d", "\u866b", "\u8840", "\u884c", "\u8863", "\u897e", "\u9875", "\u9f50", ja, Ba],
		["\u5364", "\u898b", "\u89d2", "\u8a00", "\u8c37", "\u8c46", "\u8c55", "\u8c78", "\u8c9d", "\u8d64", "\u8d70", "\u8db3", "\u8eab", "\u8eca",
			"\u8f9b", "\u8fb0", "\u8fb5", "\u9091", "\u9149", "\u91c6", "\u91cc", "\u9f9f", ja, Ba
		],
		["\u91d1", "\u9577", "\u9580", "\u961c", "\u96b6", "\u96b9", "\u96e8", "\u9751", "\u975e", "\u9c7c", "\u9f7f", ja, Ba],
		["\u9762", "\u9769", "\u97cb", "\u97ed", "\u97f3", "\u9801", "\u98a8", "\u98db", "\u98df", "\u9996", "\u9999", ja, Ba],
		["\u99ac", "\u9aa8", "\u9ad8", "\u9adf", "\u9b25", "\u9b2f", "\u9b32", "\u9b3c", ja, Ba],
		["\u9b5a", "\u9ce5", "\u9e75", "\u9e7f", "\u9ea5", "\u9ea6", "\u9ebb", "\u9ec3", "\u9ecd", "\u9ed1", "\u9ef9", "\u9efd", "\u9efe", "\u9f0e", "\u9f13",
			"\u9f20", "\u9f3b", "\u9f4a", "\u9f52", "\u9f8d", "\u9f9c", "\u9fa0", ja, Ba
		],
		["CJK Strokes", "Ideographic Description", Fa, ja, Ba]
	];
	wA.prototype.D = ["2>807AnTMm6e6HDk%`O728F1f4V1PNF2WF1G}58?]514M]Ol1%2l2^3X1U:1Un2Mb>$0MD-(068k11I3706:%MwiZ06 ;oA0FN (j90d3 H3XBMQQ10HB(2106uPM]N:qol202S20#2;.Z0^xM0:91E]J6O6 ;(i1-5W? Q6A06f5#1H2,]4MeEY[W1@3W}891N1GF1GN18N1P%k 2JA0sOc oG90nMcPTFNfFEQE10t2H3kQ7X1sj>$0OW6*F%E (P90UGv771.Uv46%7Y^Y1F2mc]1M+<Z1 9FP1 :3f1En5894WX3:2v+]lEQ?60f2E11OH1P1M]1U11UfCf111MuUmH6Ue6WGGu:26G8:2NO$M:16H8%2V28H211cvg.]4s9AnU#5PNdkX4-1Gc24P1P2:2P2:2P2:2P2:2P2g>50M8V2868G8,8M88mW888E868G8888868GM8k8M8M88,8d1eE8U8d1%46bf$0:;c8%Ef1Ev2:28]BmMbp)02p8071WO6WUw+w0 9G6e:-EGX26G6(k70Ocm,]AWG,8OUmOO68E86uMeU^`Q1t78V686GG6GM8|88k8-58MGs8k8d28M8U8Ok8-UGF28F28#28F28#28F28#28F28#28F28sGd4rLS1H1 1FGW8I(90EHB686WU8l1$Uv4?8En1E8|:29168U8718k8kG8M868688686e686888,148MO8|8E]7wV10k2tN1cYf806813692W]3%68X2f2|O6G86%1P5m6%5$6%468e[E8c11126v1MH2|%F9DuM8E86m8UTN%065j#0M ;DA0k2mO1NM[d3GV5eEms$6ut2WN493@5OA;80sD790UOc$sGk%2MfDE ;OA0v5-3g510E^jW1WV1:l Qq80N1871QC30 XFu6e6^X80O?vE82+Y16T+g1Ug2709+H12F30QjW0PC6 gM90sW#1G6$l7H1!%2N2O?ml1]6? g?i1N6 Q4A0F1mv3}1v8,uUe^zX171 w8A0sf7c2WA0#5A>E1-7 I{)0%4!P7|%4}3A,$0dA (PD0M(ZU16H1-3e!u6".split(" "), "^6A0n2:IE]7Y>X18N1%1-28EOO8871G|%U-5W? I6A0A_X1c8N6eXBt5 ;O906PJG]m1C1Amew)X16:It1]2W68E8X168[8d68MP171P1!1372 2DA0s%76o]W1@3nAN1GF1GN18N1Xzd191N38U9I (DA0v1O]2694t1m72$2>X1d1%DvXUvBN6 Q4A0F1mv4|HAUe98(rX1@2]k Y#90;v308ICU1d2W-3H9EH1-3e!u6 ;5A09M9188:48WE8n5EH2 Y%C0(wV1P7N3[EP1M".split(" "),
		":2M8EG886[6O6f2H6eP16u 14f4gX80c%36%1gu30:26Q3t0XG (s70:<.MOEmEGGG8OEms88Iu3068G6n1! n36f48v2894X1;P80sP26[6]46P16nvMPF6f3c1^F1H76:2,va@1%5M]26;7106G,fh,Gs2Ms06nPcXF6f48v288686 gm808kQT30MnN72v1U8U(%t0Eb(t0 Ig80e91E91686W8$EH1X36P162pw0,12-1G|8F18W86nDE8c8M[6O6X2E8f2886".split(" "), "P4,]A6egh10,HC,1I,fb,%A,%A,%A,%A,%A,%A,%A,%A,XK,%A,X6,PP,X6,Q]10,f3,PR,vB,9F,m,nG,]K,m,A710Ocm,^SZ0,vz,f3,1I,%A,]a,AnQ0,vB,f5,9D,2Q10,5O60, gs90#7%4@1Pvt2g+20,%2s8N1]2,n3N1 9G6eGEoX80Ocm,1IV1%3 ot20cHYc]AE9Ck]Lcvd,^910#1oF10,vh2}1073GMQ:30P2!P1EHVMI2V0,9Ts8^aP0sHn6%JsH2s](#2fg#1wnp0l1;-70? o560EgM10,Yk10EGMo230w6u0}39175n1:aMv2$HCUXI,^E10cnQso,60@8 w.80-2o?30EHVMoSU1?b}#0,".split(" "), ["vF;Z10c12fHf4gh40;920UX2Uf4U8M2n#0Iej0MQi50sY)W9l8bk0AvME", "]=oY506%7E^$zA#LDF1AV1", "fEIH602920,H3P4wB40;#s0", "w-10f4^#206IV10(970ols0", "fEAQ80?P3P4wB40^@s0"],
		["(y80M8E", "%+#5GG,8t1(#60E8718kWm:I,H46v%71WO|oWQ1En1sGk%2MT_t0k", "f!!.M%3M91gz30(C30f1695E8?8l18d2X4N32D40XH", "%?71HP62x60M[F2926^Py0", "n<686"], ":5N2mN2P6}18#28V1Gl1GcG|W68cGs8|GMGMG6G}1GWG6OU8GEOG6H168E11M.s$$6f16%2Mv3P168688uW.128$IN706126H26W6:16m6$6P16Gc916[878QAa06zph0696U8EOP3o2706 ^x90}6^yX1#28F5m-3:6N2 X4X1m6OEWku8WGc88M8H6%1nFmu11916X16H3H1%4P3[8EOmeWW.euWM918HMH6%512]I1Q^+20f+.%2X8]cfBg*10I710P1681H]E^BZ01BE ]N6v16m6P16Gv26W6W6G6H286O6G6m86OE86GUGGEGOEv2s8sG!OEOt2mV38?A570@3%5718}2H9|G@1G72GMG#1GcGsGF1G6m|GcHuO11G6e6O88mOuX18Eo]20}1u62cW0F1v6N1e68M91?H7zSi081s868EG?8E8EGcu8E8UGEw^60t5H193N3v!H1f171QmZ072f9E]96 %8N2%96$uH4H3u:9M%CF28718M868UO?86G68E8868GHOeP1I>70EO6LF80E8GW11OO6918Of26868886OV3WU%2W 1uH1WGeE11G6GO8G868s HZ6uP268691s15P36Al7068H8cHw!Y?20UwdW0#58s:BUbvh0d1g{A06AZW0sH2697 XFX1:A6116v5H6!P3E(o706vtM8E8?86GUGE8O8M8E86W8.U12-2Qd40HBMvE,et8:2Qtq0kg710N2mN2bV)0mWOXnc".split(" "),
		"(W10V3Oc8V3G6W=4 2510-BuNEKuvfE (e10o{20eG@2mMGEJ ]]8E88#18@3P3$wC70@1GcGV3GcGs8888l1888888O#48U8eE8E88OEOUeE8k8eE8E88{l706W ^-+0cG8@386OG 2{h0F4W[872{<g06g^A0-2;;V0M8,8:2 ;Y40V3]3cW2a70V38e ^tB0F48F4 ^l*0V2 ]@MG6OEX7EO71f18GU8E;{(0#6YBt0@5OJE (z)0|8N28t1868N1GF1937B o_50l2 oh*0#28M g|50N7 A;*0N4 oe10g^$0U XG%$$%6Ef26OoN70888888n5G[8uuuuH189Rr:706we708E11EH1EH1EH16".split(" "), ["YP507w]oN6", "wG50t7", ";(*0F7"], ";Y[0}}N9 ;(40l68MGk88MGt38MG@28MGk88MGN18758MG}5el2ON2(;60}1.k8k8k8k8k8k8k8kI8X0cGcGc.k8kDDe0E (L,072m6 ;I,0-2 Q420l3P1MK1?W o_B0}4$3X1 ^th0NO8#2*2 (5i0F7GcY4p0tpzup06 Q210F12$A0}9O6eka1E ^720E g?*0t2G,".split(" "),
		"op10U8,11Gl2m,]1F1O68W-18V6H2l1P774XQ8?^F60g2#0#2YVx06r##0vAry%0U]3[-1f11vV2QG$0V1 oj108G91V2eUC6F1886A?$0 (>+0@18! g!,0t1es ox,0@1Gs ^F20F2eZE Id,0-2 AA20@1X2N1Qt60{w6072 wq10P1O]2[?X2 ^u10UH46%2H7[fD6=Wc1HkG,8M (r,0-4Ok ;Y*0V4 gE=0-@HD@8H1M Qk10^>$0!f35}$0#2:168 ^V*0l2 AA,0N2e Aw*0F3WF1 I7,0d2O ;;10F1868t2v2Eq5%2V2 It*0t28 I!10MA^e1M8V2868G8,8M88mW888E868G8888868GM8k8M8M88,8d1eE8U8d1{W$0-813@Wv1#5G-4v371fAE88FC 2a(08.F18U886868!".split(" "), "gg206:2sG6G@18k8OMOf1n16W@1:*64[E958kG6GE.[6 wH.0F3X1F146EP3F1 (X20-4Ov1X16G718c8k9[6gMf0,DRg0M]4E8l18k[6H1YEg0l1 (*20!8E8@18k868UOv1X16W|fk6*uE958s8E8E:16 gg206fEcW6G@18k8GG693.,GE:v6a*E958UW6GEO%26O QR30s8E8}18,8UO936W,86CA6958k8E8Mu6116 oZ70F392N1OE=3#1 (r60l2H3O|K4|W| ^c30s8E8t3Gf1n16WV1Okw@4053506P5k8E8M.[6 wGj0?eEvI73$W,iOUOMfLs86 ;g70l3m6pc gg206%bsG6G@18k868UO13EWl1PY6CjE958kG6GE$6[6 oni0d4X2|486n4d1 oo30l1O728!8Gk94A+40j@406X6Wc88sv16 2D.0F2u, ;3308cOE8MO6886O6OEO|12]1-1=AX5UOE8M. wF30s8E8}18,8UOX26m6W,$sPA6=LEP5k8E8Mu6116 wq10P1O:5,PPV311_? 2{30|8?GV2888MGE8M8M8M8M8M8|8EH2GUf4s8c8kW6Ii806e,GsL$806f288W6f468ek8E86ec8M8M8M8M8M8|8E. (u70M8MO6jf30M Y^-0#4X1kWt24AE:4N1 26.0}311k=5E94? YZ30 gU,0X1M8E8V291s$!=7E86eMv3EW QT.0N4P1su,48EX4F1 (bi068E8M8}1eMy3OW92U Yv:0-3]1,y271 Yr2068 Yf20s Qz20G93EG Q0306 A|30]4.WWW91we#0M5e#0868$n1.WWW91".split(" "),
		"(C70F4n1kWV2.!KBUP4d1f3! (T70V312MK2F1 Q`i0t392E8sW,GM=4F191$6 2:i0F4P171G,W6q8MP4F1P1 2zi0V3$6)s ;I6073GE8?]2E8UO,m,Hi-2Srl286O g:3068G68GmM8k8E88G68M86.GU11,GMC4Gc86.8c QK40-3:1}1WMOO6uEW71918,W6Iwe0V18,D-e0#192MWE8EGkOMH1|8[M;xe0[ Y%60@3WN2m?O6 2z60t2GU ^@60#4]3,m,mk8c`7,8l2Gn3 ^7j0N48O6GUG8H2686K48EG6e68f2 ;z30N48691c.71*3Gk11! 2>60}1u6xU 2C606.#1 AA60l1O6RE gM60v311 Y%i0}1H2C271 IO70t2H1l1PNsyTE%271 I760718MH36K3E 2C606%3718E86".split(" "), "AzC0M88,8F1X1mWMPqYyh0}1WV42BA06Tis06 ;gj0}}-I (zk0Vr (+i0MAj20}}-I A,i0?2#30Vr A-i0EIS40Vr Y-i0EY]40}}-I w-i0IC60}}-I (-i06^U70Vr ^-i0Q`70}}-I I}r0Vr wqs0Vr 2.i02YA0Vr A.i0Y}A0Vr I.i0(qB0Vr Q.i0 oh40FN^L80d8 oJD0#2]5#2IGs0MX5#2OcGcGcGE".split(" "),
		"AzC0M88,8F1X1mWM]Ht3XAV2I8s06+f(06^`B0M AzC0M88F2X1mWM8#7.H8fD6QCD1T0l065is0U196G6f8wqs0946 AzC0M88F2X1mWM%8N8fD6n8V1I2D1L0l065is0U196:8Egqs0946 oph0l3m6pc 2591F611F4f1d1 gU60?O8,m738t4$t38aEE:4H9 2>,0l6 wU6068AU606e,Gs AzC06e,Gs2qT0-18}}-FO@4DL10 ohi0}4 Ql)0M ^%C0f91MF1^oU1bE$0Ujys06 ^%C0HIPDF1vRF48@7g`r0N18}3r%s06 Ql)0M Ql)0M".split(" "), "ItK0l3]1f7YL10 ;wK0M8! AyK0k8[ ^yK0,8N1^w30 Q#K0sG}2YfL0 Q)K0k (bC0c]R]q8O8f2EgqB2E5Cl1]116$f7fG A(D0t3(rX1V288k8!8k8868|8l188U8718M8N48E88GE8#48MG@3oA20]G2P60;QB0]9^(20^7L0t2".split(" "),
		"^)K0M8N1 (+K0N2 A.K0lww)K0 (gL0V3 IkL0cI870 (kL0}1QyK0 ;mL0#1Yw50 woL0-1 oqL0#4 YvL0-1 QxL0? QyL0}D Y;L0V58@2 ^^L0d2 g{L0U ^{L0t2^IK0 w0M0! g1M0E8s868?QHK0rIK0G ^3M071 A5M0F2 Y7M0t4;XD0 ACM0l1 (DM0V2IS10 Y]a0tD QcC0}1%P8]qG688P1W6G6mO8^pB2F28d292%B6f6%A15P1ODrl1f1E9386H18e11Ee[n16[91e11.G$H1n18611$X2cX5k ;+D0tN8l49H2i40kAsS1uH3v1H788]9@18}2872Gk8E8|8s88E8G-18778@28lF8-6G,8@48#486GF28d28t18t48N3874868-78F58V18}28F48l48lG868d18N18#18!8FN8@98FP8s8}F8N28,8VG8F18tF8}2(s30%U;@101bI-50QE60^{40;X60IhB0}Oo_20d3j%S1".split(" "),
		"IGM0dY8FM8tB ^`M0d6^GJ0 g3N0tZ8}48!Q#I0Ge gCN0%W}1 YlN0k 2mN0| AnN0l1 (oN0-6 wvN07D8}T 2DO0N4 YHO0-Aw]50 QSO0}1 YUO0t1^=H0 AWO0@1 AYO08t4 2dO0E A$K0A#30-W I.O0c8E A:O0| I;O071 Y<O0V78@2 ^{O0s 2$K0oM40U A}O0lAw7H0 (9P0, wAP071 ;BP0s oCP0d5 AIP0d1 wJP0!8s QLP0F7^]G06 (gX0tD wud0t4 obe0 wne0l4 (:e0V5 YeC0#2P=11Wm11686W(uB2}18l58E8EGMP8:5]6]9Lvl1G86:1mP26m6%1me%1E11X1OmEf1692Ge6H1%1Gm8GX3kX4[F1 YAE0@G8V(I!20|I!10E:5fX18EwYR1%1u8Gn3v11B1693P2uO91$8OH2H713vMXG%1%K:6]SG13%2H@vX93tU8F587w8}V8-68tA8dO8db8V38758V28t58F18k8#C8t!8V78V98tU8lT8de8}}V98lB8}B8#387987H8#38NJ8@78U8N18U8kgE10(L10v_X4ngA6109Nn2v2Ac101O1}HSQ*1094^.50N2:BP6Ay10Q<40]5;s20AE20V1H9^j20l1%g-3YY20YU10}zAv10@2;310F1]E72X3}1DeT18".split(" "),
		"oSP0#q Y]P074 o{P0-1 g}P0F)2gF0 ((Q0U (oM0YG40d7(cA0 (;Q0V1YNF0 I=Q071 Y>Q0-1 Q@Q0d3 ;^Q0U ;@L0Y350FOH1os602W80 ;@L0wR5071868k (LR0-2Y070 wOR0}}N4:+IBD0 2TS0@5 2ZS0}1I-D0 AbS0F5 YgS072 oiS0! YjS0k 2kS0t4 (oS0U IpS0-2 AsS0dH8V[ I$T0le;@402[60nI12 A:M0wV70| ^HU0U YIU0M IxK0gl90s gJU0l1 ALU06 QLU0N7 wSU0lJ ;ba0U8? 2Sb0V6 I]b0#4 2Fe0k Aae071 ^SC0HE}2::MGEG.OovB2:8e#4G6G-28}2871]7$65ml1G$mEm6OGOEWE%1eE916Ou6m868W$6m6GU11OE8W91WEWGMmOG6eM$8e6W6mG611Of371136P2}18EH4M ^aE0]uFq8#@^U20U%LEwSS1f7HLfkX2vCH4vM(a10gv10IO10Yg30Hz}}VE8to8-w8@J8-28tK8td8N48FC8E8l68cGNM8V#8#98lK8-A8-A8|8728E8l287N8}}#E8@N8V%8tC88V88-88lC8N18@48t38l`;Y20(>101dYk201)XQ6nUv^Xao940kAi10cv3QF40UHdXG|fe8o^40}}l3YD10c]Ak]7@19YcX4UjUT16".split(" "),
		"QmU0U (mU0#U o@U0, g[U0d4 2{U0k w{U0! g|U0s I}U0N48k8}2 g7V0k A8V0tK ;SV0k o3V0:PV4 ^XV0d1A;A0 gZV0F4 (dV0dL(mA0 QzV0k ^zV0d1 w-S0(@20tT I5W0VBQH40P4;-506 wGW0c((20 IHW0dG (XW0-7 wfW0#1G72Ai70 YOd0@L Ald0 ;-f0#7 IIg0E QkC0}1n.O86n1^?B2V18V3{gl1$f2u6[P1[68$$P1P16926u[[E91$6.u:2UH4|f6O|11X1[E AoG0@:;12071n^kXD6I4R1:4WnB9d[15:49lHkX.1pP5Hw]nf]^H20()109d;u101@]2%KY!10:9f.;(307k8dL8}38@88-98?8V?WdA8}S87Q8748l!8-T8#d8d28lI8FK8#12@30nQI,10w^402B20F22,50-1AQ30}b(F10V49f}3]3".split(" "), ";jW0NY ;,N0YL70;<10}B Q4X0Vc guX0V2 ^wX075 IlV0;G20l4 (*X076 ^;X0? ^<X0c g=X0@2 g@X0-6 Y|X0, ;^O0Y490tP8l5 (UY0k YVY0! IWY0! 2XY0V1 gYY0N1 ;ZY0M IaY077 YhY0M (hY0c QiY0ld8lC8taI!60H1u6. gKP0^OA0U872 ImZ0lg ;2a0| ^3a0}1 ^!L0(K10IAD0tP2@50 (Va071 2Se0l4 oBg06 YmC0l2onC2Wn56XC-28U86G68M8@4jql1MemO68691Em6e6.6GO6n1Oem6P268me$6n19112Eue86WWW:168:4?v6G?%2 o5E0oq10;%10VE8VH91l;P^w0S1Q0101Io3102E20XZoi10n>2;10XUPN18e]1;n30v6m6(L40vHvCX1:8;g10A{30HM}}N@X2#B8F68@D8VI8@(8NQG#L8#68t18tO8#v8Na8##8VC8#^8tt(j10wB30YE30E(870NF13#hfxd1>RT18".split(" "),
		"w4M0(<J0 ^Wa0?8#3 Yda074QB50 oha0#b^R50e A7b0N1 g8b0N1 ;9b073 2Db0N3 YGb0}88V2 gYb0| oZb0}5A(40 wfb0dM I$b0#2 2)b07EwQ4012 2|b0-1 ^}b0U (.O0oFD0@J YKc0tG Abc0NB gmc0c 2nc0U (Ig0 oaC0XE#1X*en1;}B2n5F18E8!jul186X1ev1[.mn1Gn18116P1[8m]111%1n1v1[G92G6un4kX7|v1 QAE0gj40lFu-8etLO#D^DT1PL9,AY30v9]_A^60Yl10;N50Az10oi10(I80F`8M8V58Nh8lCu}}}hml3Glb8N@;820o{80|m-3n3V3u-712#9nwv3+zT16".split(" "), "wVS0(HA0-!o_20GG Ykd0s Ild0V9 Yzd0@D Y<d0E w<d0F4 ^@d0d9 g1e071 w2e0M (Xf0d9 ;Fg0F1 ;qC0!:(IvB2vf71865vl194m.uu14:1]1EWH191$H1m92v1v195X8M QTJ0l8H1F4OV68-5:ssQMR1AQ50Q>U0#88@yP2dcf1798N#8FJQn30@1^;106;y30l8f4@1P1N61OV39B!DzT1E".split(" "),
		"23e0k w3e0-8 oCe0V2 wFe0c ghW06oy70F1 gHe0dA wWe0V3 Qbe0E wbe0@B Qse0E ose0t1 wrC0?f)(AC2N1{gl1f298Ef56n8M ooH0g520-Q8!IHS1:_P32-30ARC0YA40](^b70gd807Y8lBelaW728NG91}Zv1t288-4Iz70d1mt1n1|el1H2N1".split(" "), "Que0VHQY106 I@e0N4 o_e0k I`e0N6 o2f0, g3f0E (3f0, w4f0t2 wsC0s^?C2Ubvl1:9nT ^_J077O#9wM(1gQ10#Y]3};gl60@192l2".split(" "), "Y7f0NQXWPh Qhf0dB87B8l59c w@f0! o[f0V3 2`f08d1 A`f0n1E 2|f0s (|f0, w}f0M IdN0(mI0s8#2 w3g0M 24g08| A4g091E o5g0U 26g071 I7g0V2 w9g0N1 2Bg0c (Bg0}3 AHg0E8s gIg0E ;Ig0c YtC0#12hC2fYt1>yl1692H26ef66P5946H5nE.6 IDK0t9$@9uNDGkoOR1fk^x102.20nDQf301=^N50;g202j30M^>90od80g320to12t!]1-H8F[GN6284075f3@394E8l2.G".split(" "), ["AQC0N28M8d7H%F3", "oxC0|", "AzC0M8|8}1mmWM2iT0o|O065ms0P3MH1", "gMD0F3PB|%CF2[U%8#2Q+r0M", "Q=727K"]
	];
	C(xA, M);
	xA.prototype.L = function () {
		xA.O.L.call(this);
		this.B.da();
		this.A.da()
	};
	xA.prototype.S = function () {
		AA(this, this.B)
	};
	xA.prototype.M = function (a, b) {
		AA(this, this.A);
		a = this.D.has(a) ? this.D.get(a) : null;
		b(a)
	};
	var CA;
	C(EA, R);
	EA.prototype.handleEvent = function (a) {
		var b = new mm(a.A);
		b.type = a.type == mc || a.type == lc ? mc : nc;
		this.dispatchEvent(b)
	};
	EA.prototype.L = function () {
		EA.O.L.call(this);
		Km(this.B);
		Km(this.D);
		delete this.A
	};
	C(FA, bo);
	FA.prototype.Ga = function (a, b, c, d) {
		Pn(en(a), 0, a, b, this.A, c, null, d)
	};
	y = GA.prototype;
	y.vb = function () {
		return this.A.vb()
	};
	y.add = function (a) {
		this.A.set(HA(a), a)
	};
	y.contains = function (a) {
		a = HA(a);
		return ut(this.A.B, a)
	};
	y.Ka = function () {
		return this.A.Ka()
	};
	y.Dc = function (a) {
		return this.vb() == xt(a) && IA(this, a)
	};
	y.Pb = function () {
		return this.A.Pb(!1)
	};
	C(JA, R);
	y = JA.prototype;
	y.gb = null;
	y.Eg = null;
	y.nd = !1;
	y.cg = -1;
	y.jd = Wg;
	y.G = function () {
		return this.gb
	};
	y.gf = function (a) {
		if (this.nd) throw Error("Can not change this state of the popup while showing.");
		this.gb = a
	};
	y.isVisible = function () {
		return this.nd
	};
	y.Ne = Di;
	y.Hg = function (a) {
		this.jd == Wg ? this.Bj() : this.jd == Xe && (this.gb.style.top = "-10000px");
		this.Jc(a)
	};
	y.Bj = function () {
		this.gb.style.visibility = hd;
		S(this.gb, !1)
	};
	y.pg = function () {
		return this.dispatchEvent(jb)
	};
	y.Me = function () {
		this.dispatchEvent("show")
	};
	y.Jc = function (a) {
		this.dispatchEvent({
			type: id,
			target: a
		})
	};
	y.Nh = function (a) {
		a = a.target;
		Ol(this.gb, a) || MA(this, a) || 150 > Ni() - this.cg || KA(this, a)
	};
	y.Mh = function (a) {
		var b = I(this.gb);
		if ("undefined" != typeof document.activeElement) {
			if (a = b.activeElement, !a || Ol(this.gb, a) || "BODY" == a.tagName || MA(this, a)) return
		} else if (a.target != b) return;
		150 > Ni() - this.cg || KA(this)
	};
	y.L = function () {
		JA.O.L.call(this);
		this.B.da();
		N(this.$);
		N(this.N);
		delete this.gb;
		delete this.B;
		delete this.Eg
	};
	C(NA, JA);
	NA.prototype.Ne = function () {
		if (this.U) {
			var a = !this.isVisible() && this.jd != Xe,
				b = this.G();
			a && (b.style.visibility = hd, S(b, !0));
			this.U.Ga(b, 8, this.Sa);
			a && S(b, !1)
		}
	};
	C(QA, NA);
	var WA = [];
	y = QA.prototype;
	y.xa = null;
	y.className = "goog-tooltip";
	y.Af = function () {
		return 0
	};
	y.gf = function (a) {
		var b = this.G();
		b && Il(b);
		QA.O.gf.call(this, a);
		a ? (b = this.D.A.body, b.insertBefore(a, b.lastChild), N(this.M), this.M = new EA(this.G()), hm(this, this.M), Q(this.M, mc, this.Ac, void 0, this), Q(this.M, nc, this.fe, void 0, this)) : (N(this.M), this.M = null)
	};
	y.Se = function (a) {
		if (!this.isVisible()) return !1;
		var b = hn(this.G()),
			c = qn(this.G());
		return b.x <= a.x && a.x <= b.x + c.width && b.y <= a.y && a.y <= b.y + c.height
	};
	y.pg = function () {
		if (!JA.prototype.pg.call(this)) return !1;
		if (this.A)
			for (var a, b = 0; a = WA[b]; b++) Ol(a.G(), this.A) || LA(a, !1);
		Xi(WA, this);
		a = this.G();
		a.className = this.className;
		this.Ac();
		Q(a, w, this.Vf, !1, this);
		Q(a, Ve, this.hh, !1, this);
		ZA(this);
		return !0
	};
	y.Jc = function () {
		Yi(WA, this);
		for (var a = this.G(), b, c = 0; b = WA[c]; c++) b.A && Ol(a, b.A) && LA(b, !1);
		this.qa && this.qa.fe();
		Jm(a, w, this.Vf, !1, this);
		Jm(a, Ve, this.hh, !1, this);
		this.A = void 0;
		0 == TA(this) && (this.X = !1);
		JA.prototype.Jc.call(this)
	};
	y.eg = function (a, b) {
		this.A == a && this.C.contains(this.A) && (this.X || !this.zc ? (LA(this, !1), this.isVisible() || (this.A = a, OA(this, b || new $A(hl(this.I))), LA(this, !0))) : this.A = void 0);
		this.K = void 0
	};
	y.sh = function (a) {
		this.J = void 0;
		if (a == this.A) {
			a = this.D;
			var b;
			a = (b = dm(a.A)) && this.G() && a.contains(this.G(), b);
			null != this.xa && (this.xa == this.G() || this.C.contains(this.xa)) || a || this.S && this.S.xa || LA(this, !1)
		}
	};
	y.Oe = function (a) {
		var b = VA(this, a.target);
		this.xa = b;
		this.Ac();
		b != this.A && (this.A = b, YA(this, b), XA(this), UA(this, a))
	};
	y.kd = function (a) {
		UA(this, a);
		this.X = !0
	};
	y.Vg = function (a) {
		this.xa = a = VA(this, a.target);
		this.X = !0;
		if (this.A != a) {
			this.A = a;
			var b = new aB(this.xa);
			this.Ac();
			YA(this, a, b);
			XA(this)
		}
	};
	y.ld = function (a) {
		var b = VA(this, a.target),
			c = VA(this, a.relatedTarget);
		b != c && (b == this.xa && (this.xa = null), ZA(this), this.X = !1, !this.isVisible() || a.relatedTarget && Ol(this.G(), a.relatedTarget) ? this.A = void 0 : this.fe())
	};
	y.Vf = function () {
		var a = this.G();
		this.xa != a && (this.Ac(), this.xa = a)
	};
	y.hh = function (a) {
		var b = this.G();
		this.xa != b || a.relatedTarget && Ol(b, a.relatedTarget) || (this.xa = null, this.fe())
	};
	y.fe = function () {
		2 == TA(this) && (this.J = Cr(B(this.sh, this, this.A), this.Af()))
	};
	y.Ac = function () {
		this.J && (Dr(this.J), this.J = void 0)
	};
	y.L = function () {
		LA(this, !1);
		ZA(this);
		SA(this);
		this.G() && Il(this.G());
		this.xa = null;
		delete this.D;
		QA.O.L.call(this)
	};
	C($A, FA);
	$A.prototype.Ga = function (a, b, c) {
		b = en(a);
		b = jn(b);
		c = c ? new Qm(c.top + 10, c.right, c.bottom, c.left + 10) : new Qm(10, 0, 0, 10);
		On(this.A, a, 8, c, b, 9) & 496 && On(this.A, a, 8, c, b, 5)
	};
	C(aB, co);
	aB.prototype.Ga = function (a, b, c) {
		var d = new H(10, 0);
		Pn(this.A, this.B, a, b, d, c, 9) & 496 && Pn(this.A, 4, a, 1, d, c, 5)
	};
	C(bB, QA);
	y = bB.prototype;
	y.si = !1;
	y.je = !1;
	y.Me = function () {
		bB.O.Me.call(this);
		this.R = Um(rn(this.G()));
		this.A && (this.Y = Um(rn(this.A)));
		this.je = this.si;
		Q(this.D.A, Ue, this.kd, !1, this)
	};
	y.Jc = function () {
		Jm(this.D.A, Ue, this.kd, !1, this);
		this.Y = this.R = null;
		this.je = !1;
		bB.O.Jc.call(this)
	};
	y.Se = function (a) {
		if (this.T) {
			var b = hn(this.G()),
				c = qn(this.G());
			return b.x - this.T.left <= a.x && a.x <= b.x + c.width + this.T.right && b.y - this.T.top <= a.y && a.y <= b.y + c.height + this.T.bottom
		}
		return bB.O.Se.call(this, a)
	};
	y.sh = function (a) {
		this.J = void 0;
		a != this.A || cB(this, this.I) || this.xa || this.S && this.S.xa || P && 0 == this.I.x && 0 == this.I.y || LA(this, !1)
	};
	y.kd = function (a) {
		var b = this.isVisible();
		if (this.R) {
			var c = wl(this.D.A);
			c = new H(a.clientX + c.x, a.clientY + c.y);
			cB(this, c) ? b = !1 : this.je && (b = Rm(this.R, c) >= Rm(this.R, this.I))
		}
		if (b) {
			if (this.fe(), this.xa = null, b = this.S) b.xa = null
		} else 3 == TA(this) && this.Ac();
		bB.O.kd.call(this, a)
	};
	y.Vf = function () {
		this.xa != this.G() && (this.je = !1, this.xa = this.G())
	};
	y.Af = function () {
		return this.je ? 100 : bB.O.Af.call(this)
	};
	C(dB, bB);
	y = dB.prototype;
	y.L = function () {
		dB.O.L.call(this);
		Jm(this.ga, w, this.ih, !1, this)
	};
	y.Zf = function (a) {
		return a.tagName in this.ca && !!a.getAttribute(this.ca[a.tagName])
	};
	y.ih = function (a) {
		if (a = a.target)
			if (this.Zf(a)) OA(this, null), gB(this, a);
			else if (this.Ia) {
			a: {
				var b = B(this.Zf, this),
					c = this.yc;a && (a = a.parentNode);
				for (var d = 0; a && (null == c || d <= c);) {
					if (b(a)) break a;
					a = a.parentNode;
					d++
				}
				a = null
			}
			a && (OA(this, null), gB(this, a))
		}
	};
	y.Jc = function () {
		dB.O.Jc.call(this);
		null != this.F && hB(this, this.F);
		this.F = null
	};
	y.Oe = function (a) {
		var b = VA(this, a.target);
		b && b != this.A ? gB(this, b) : dB.O.Oe.call(this, a)
	};
	y.ld = function (a) {
		var b = this.A,
			c = TA(this);
		dB.O.ld.call(this, a);
		c == TA(this) || 1 != c && 4 != c || (this.A = b, eB(this))
	};
	y.eg = function (a, b) {
		dB.O.eg.call(this, a, b);
		this.isVisible() ? (a != this.F && hB(this, this.F), this.F = a) : (ZA(this), eB(this))
	};
	C(fB, O);
	z(iB, U);
	iB.prototype.W = function () {
		U.prototype.W.call(this);
		var a = this.A;
		this.N = a.P(f, "goog-char-picker-char-zoom");
		this.C = a.P(f, "goog-char-picker-name");
		this.K = a.P(f, "goog-char-picker-unicode");
		var b = a.P(f, void 0, this.N, this.C, this.K);
		S(b, !1);
		V(b, Ac);
		this.B = new dB({
			DIV: "char"
		}, void 0, a);
		this.B.gf(b);
		this.B.className = Ac
	};
	iB.prototype.V = function () {
		U.prototype.V.call(this);
		var a = vA(this.F.A, ":2%C^O80V1H2s2G40Q%s0");
		this.R = new Set(a);
		this.J.H(this.B, jb, this.T)
	};
	iB.prototype.T = function () {
		var a = this.B;
		a = a.F || a.A;
		var b = a.getAttribute("char");
		b && kB(this, b, a)
	};
	iB.prototype.L = function () {
		N(this.B);
		N(this.J);
		U.prototype.L.call(this)
	};
	C(lB, xv);
	Ei(lB);
	lB.prototype.ia = function () {
		return Lc
	};
	C(mB, Hv);
	rv(Lc, function () {
		return new mB(null)
	});
	C(nB, xv);
	Ei(nB);
	y = nB.prototype;
	y.ed = function () {
		return "menuitem"
	};
	y.lb = function (a) {
		var b = a.A.P(f, Ev(this, a).join(" "), pB(this, a.eb, a.A));
		rB(this, a, b, Bv(a, 8) || Bv(a, 16));
		return b
	};
	y.Pa = function (a) {
		return a && a.firstChild
	};
	y.Da = function (a, b) {
		var c = Ml(b),
			d = oB(this, 2);
		c && Kp(c, d) || b.appendChild(pB(this, b.childNodes, a.A));
		Kp(b, Qc) && (a.Na(16, !0), a && b && rB(this, a, b, !0));
		return nB.O.Da.call(this, a, b)
	};
	y.fd = function (a, b) {
		var c = this.Pa(a),
			d = qB(this, a) ? c.firstChild : null;
		nB.O.fd.call(this, a, b);
		d && !qB(this, a) && c.insertBefore(d, c.firstChild || null)
	};
	y.Fd = function (a) {
		switch (a) {
			case 2:
				return oB(this, 0);
			case 16:
			case 8:
				return Rc;
			default:
				return nB.O.Fd.call(this, a)
		}
	};
	y.we = function (a) {
		var b = oB(this, 0);
		switch (a) {
			case Rc:
				return 16;
			case b:
				return 2;
			default:
				return nB.O.we.call(this, a)
		}
	};
	y.ia = function () {
		return "goog-menuitem"
	};
	C(sB, Hv);
	y = sB.prototype;
	y.ma = function () {
		var a = this.yc;
		return null != a ? a : this.Hb()
	};
	y.Na = function (a, b) {
		sB.O.Na.call(this, a, b);
		switch (a) {
			case 8:
				Cv(this, 16) && !b && Ov(this, 16, !1) && Pv(this, 16, !1);
				(a = this.G()) && this && a && rB(this.C, this, a, b);
				break;
			case 16:
				(a = this.G()) && this && a && rB(this.C, this, a, b)
		}
	};
	y.Hb = function () {
		var a = this.eb;
		return Array.isArray(a) ? (a = kk(a, function (b) {
			return Nl(b) && (Kp(b, "goog-menuitem-accel") || Kp(b, "goog-menuitem-mnemonic-separator")) ? "" : am(b)
		}).join(""), Ik(a)) : sB.O.Hb.call(this)
	};
	y.rc = function (a) {
		var b = this.Ha();
		if (b) {
			var c = b.T;
			b.T = null;
			if (c && typeof a.clientX === pf && il(c, new H(a.clientX, a.clientY))) return
		}
		sB.O.rc.call(this, a)
	};
	y.oc = function (a) {
		return a.keyCode == this.hg && this.Nb(a) ? !0 : sB.O.oc.call(this, a)
	};
	y.Ai = function () {
		return this.hg
	};
	rv("goog-menuitem", function () {
		return new sB(null)
	});
	sB.prototype.Nd = function () {
		return Bv(this, 16) ? "menuitemcheckbox" : Bv(this, 8) ? "menuitemradio" : sB.O.Nd.call(this)
	};
	sB.prototype.Ha = function () {
		return Hv.prototype.Ha.call(this)
	};
	sB.prototype.$c = function () {
		return Hv.prototype.$c.call(this)
	};
	C(tB, xv);
	Ei(tB);
	tB.prototype.lb = function (a) {
		return a.A.P(f, this.ia())
	};
	tB.prototype.Da = function (a, b) {
		b.id && io(a, b.id);
		if ("HR" == b.tagName) {
			var c = b;
			b = this.lb(a);
			Hl(b, c);
			Il(c)
		} else V(b, this.ia());
		return b
	};
	tB.prototype.fd = function () {};
	tB.prototype.ia = function () {
		return Nc
	};
	C(uB, Hv);
	uB.prototype.V = function () {
		uB.O.V.call(this);
		Jr(this.G(), ig)
	};
	rv(Nc, function () {
		return new uB
	});
	C(vB, sv);
	Ei(vB);
	y = vB.prototype;
	y.If = function (a) {
		return "UL" == a.tagName || vB.O.If.call(this, a)
	};
	y.yf = function (a) {
		return "HR" == a.tagName ? new uB : vB.O.yf.call(this, a)
	};
	y.Sb = function (a, b) {
		return Ol(a.G(), b)
	};
	y.Ee = function () {
		return Jc
	};
	y.Jf = function (a) {
		vB.O.Jf.call(this, a);
		X(a.G(), Zc, "true")
	};
	C(wB, uB);
	rv(Nc, function () {
		return new uB
	});
	C(xB, Z);
	y = xB.prototype;
	y.me = !0;
	y.Sb = function (a) {
		if (this.nc.Sb(this, a)) return !0;
		for (var b = 0, c = po(this); b < c; b++) {
			var d = qo(this, b);
			if (typeof d.Sb == t && d.Sb(a)) return !0
		}
		return !1
	};
	y.la = function (a, b, c) {
		(b = xB.O.la.call(this, a, b)) && a && this.ea && this.me && Uv(this).focus();
		a && c && typeof c.clientX === pf ? this.T = new H(c.clientX, c.clientY) : this.T = null;
		return b
	};
	y.Qf = function (a) {
		this.me && Uv(this).focus();
		return xB.O.Qf.call(this, a)
	};
	y.mh = function (a) {
		var b = new RegExp("^" + Vk(a), "i");
		Zv(this, function (c, d) {
			var e = 0 > c ? 0 : c,
				g = !1;
			do {
				++c;
				c == d && (c = 0, g = !0);
				var h = qo(this, c).Hb();
				if (h && h.match(b)) return c
			} while (!g || c != e);
			return this.na
		}, this.na)
	};
	y.Fg = function (a) {
		return a.isEnabled() && a.isVisible() && Bv(a, 2)
	};
	y.$a = function (a) {
		for (var b = this.nc, c = ql(this.A.A, f, b.Ee() + ba, a), d = c.length, e = 0; e < d; e++) vv(b, this, c[e]);
		xB.O.$a.call(this, a)
	};
	y.Ld = function (a) {
		var b = xB.O.Ld.call(this, a);
		b || ro(this, function (c) {
			!b && c.Ai && c.hg == a.keyCode && (this.isEnabled() && this.qb(so(this, c)), b = c.La(a))
		}, this);
		return b
	};
	y.qb = function (a) {
		xB.O.qb.call(this, a);
		(a = qo(this, a)) && mn(a.G(), this.G())
	};
	C(yB, Bz);
	C(zB, gA);
	Ei(zB);
	y = zB.prototype;
	y.lb = function (a) {
		var b = Ev(this, a);
		b = a.A.P(f, Ic + b.join(" "), this.re(a.eb, a.A));
		hA(b, a.K);
		return b
	};
	y.ed = function () {
		return sb
	};
	y.Pa = function (a) {
		return a && a.firstChild && a.firstChild.firstChild
	};
	y.re = function (a, b) {
		return b.P(f, Ic + (this.ia() + "-outer-box"), b.P(f, Ic + (this.ia() + "-inner-box"), a))
	};
	y.Fe = function (a) {
		return a.tagName == f
	};
	y.Da = function (a, b) {
		AB(b, !0);
		AB(b, !1);
		a: {
			var c = a.A.Lg(b);
			var d = this.ia() + "-outer-box";
			if (c && Kp(c, d) && (c = a.A.Lg(c), d = this.ia() + "-inner-box", c && Kp(c, d))) {
				c = !0;
				break a
			}
			c = !1
		}
		c || b.appendChild(this.re(b.childNodes, a.A));
		Lp(b, [Hc, this.ia()]);
		return zB.O.Da.call(this, a, b)
	};
	y.ia = function () {
		return "goog-custom-button"
	};
	C(BB, zB);
	Ei(BB);
	BB.prototype.Pa = function (a) {
		return BB.O.Pa.call(this, a && a.firstChild)
	};
	BB.prototype.Da = function (a, b) {
		var c = ql(document, "*", Jc, b)[0];
		if (c) {
			S(c, !1);
			I(c).body.appendChild(c);
			var d = new xB;
			d.Gc(c);
			a.cc(d)
		}
		return BB.O.Da.call(this, a, b)
	};
	BB.prototype.re = function (a, b) {
		return BB.O.re.call(this, [b.P(f, Ic + (this.ia() + aa), a), b.P(f, Ic + (this.ia() + da), "\u00a0")], b)
	};
	BB.prototype.ia = function () {
		return Kc
	};
	C(CB, nB);
	Ei(CB);
	CB.prototype.lb = function (a) {
		var b = CB.O.lb.call(this, a);
		V(b, Sc);
		EB(this, a, b);
		return b
	};
	CB.prototype.Da = function (a, b) {
		b = CB.O.Da.call(this, a, b);
		V(b, Sc);
		EB(this, a, b);
		var c = ql(document, f, Jc, b);
		if (c.length) {
			var d = new xB(a.A);
			c = c[0];
			S(c, !1);
			a.A.A.body.appendChild(c);
			d.Gc(c);
			a.cc(d, !0)
		}
		return b
	};
	CB.prototype.fd = function (a, b) {
		var c = this.Pa(a),
			d = c && c.lastChild;
		CB.O.fd.call(this, a, b);
		d && c.lastChild != d && Kp(d, Tc) && c.appendChild(d)
	};
	CB.prototype.Ge = function (a) {
		CB.O.Ge.call(this, a);
		var b = a.Bb(),
			c = ql(a.A.A, n, Tc, b)[0];
		DB(a, c);
		c != b.lastChild && b.appendChild(c);
		X(a.G(), Zc, "true")
	};
	C(FB, sB);
	y = FB.prototype;
	y.Bd = null;
	y.Bg = null;
	y.fg = !1;
	y.Ca = null;
	y.te = !1;
	y.V = function () {
		FB.O.V.call(this);
		jo(this).H(this.Ha(), id, this.Th);
		this.Ca && KB(this, this.Ca, !0)
	};
	y.ta = function () {
		jo(this).ka(this.Ha(), id, this.Th);
		this.Ca && (KB(this, this.Ca, !1), this.te || (this.Ca.ta(), Il(this.Ca.G())));
		FB.O.ta.call(this)
	};
	y.L = function () {
		this.Ca && !this.te && this.Ca.da();
		this.Ca = null;
		FB.O.L.call(this)
	};
	y.ua = function (a) {
		FB.O.ua.call(this, a);
		a || (this.Bd && Dr(this.Bd), this.Bd = Cr(this.Tb, 218, this))
	};
	y.Ag = function () {
		var a = this.Ha();
		a && Yv(a) == this && (JB(this, !0), HB(this))
	};
	y.Tb = function () {
		var a = this.Ca;
		a && a.Ha() == this && (JB(this, !1), ro(a, function (b) {
			typeof b.Tb == t && b.Tb()
		}))
	};
	y.Ea = function (a, b) {
		(a = FB.O.Ea.call(this, a, b)) && !this.isVisible() && this.Tb();
		return a
	};
	y.La = function (a) {
		var b = a.keyCode,
			c = no(this) ? 37 : 39,
			d = no(this) ? 39 : 37;
		if (!this.fg) {
			if (!this.isEnabled() || b != c && 13 != b && b != this.hg) return !1;
			this.Ag();
			$v(IB(this));
			GB(this)
		} else if (!IB(this).La(a))
			if (b == d) this.Tb();
			else return !1;
		a.preventDefault();
		return !0
	};
	y.Qk = function () {
		if (this.Ca.Ha() == this) {
			GB(this);
			var a = this.$c();
			a.qb(so(a, this));
			HB(this)
		}
	};
	y.Th = function (a) {
		a.target == this.$c() && (this.Tb(), GB(this))
	};
	y.Od = function (a) {
		this.isEnabled() && (GB(this), this.Bg = Cr(this.Ag, 218, this));
		FB.O.Od.call(this, a)
	};
	y.Nb = function (a) {
		GB(this);
		if (Bv(this, 8) || Bv(this, 16)) return FB.O.Nb.call(this, a);
		this.Ag();
		return !0
	};
	y.cc = function (a, b) {
		var c = this.Ca;
		a != c && (c && (this.Tb(), this.ea && KB(this, c, !1)), this.Ca = a, this.te = !b, a && (lo(a, this), a.la(!1, !0), a.me = !1, Xv(a, !1), this.ea && KB(this, a, !0)))
	};
	y.Sb = function (a) {
		return IB(this).Sb(a)
	};
	rv(Sc, function () {
		return new FB(null)
	});
	C(MB, jA);
	y = MB.prototype;
	y.Ue = !1;
	y.V = function () {
		MB.O.V.call(this);
		RB(this, !0);
		this.B && QB(this, this.B, !0);
		X(this.D, Zc, !!this.B)
	};
	y.ta = function () {
		MB.O.ta.call(this);
		RB(this, !1);
		if (this.B) {
			this.wa(!1);
			this.B.ta();
			QB(this, this.B, !1);
			var a = this.B.G();
			a && Il(a)
		}
	};
	y.L = function () {
		MB.O.L.call(this);
		this.B && (this.B.da(), delete this.B);
		delete this.Zc;
		this.T.da()
	};
	y.gd = function (a) {
		MB.O.gd.call(this, a);
		Cv(this, 4) && (this.wa(!Cv(this, 64), a), this.B && (this.B.ac = Cv(this, 64)))
	};
	y.rc = function (a) {
		MB.O.rc.call(this, a);
		this.B && !Cv(this, 4) && (this.B.ac = !1)
	};
	y.Nb = function () {
		Qv(this, !1);
		return !0
	};
	y.aj = function (a) {
		this.B && this.B.isVisible() && !this.Sb(a.target) && this.wa(!1)
	};
	y.Sb = function (a) {
		return a && Ol(this.G(), a) || this.B && this.B.Sb(a) || !1
	};
	y.oc = function (a) {
		if (32 == a.keyCode) {
			if (a.preventDefault(), a.type != oe) return !0
		} else if (a.type != ne) return !1;
		if (this.B && this.B.isVisible()) {
			var b = 13 == a.keyCode || 32 == a.keyCode,
				c = this.B.La(a);
			return c && this.B && this.B.za instanceof FB || 27 != a.keyCode && !b ? c : (this.wa(!1), !0)
		}
		return 40 == a.keyCode || 38 == a.keyCode || 32 == a.keyCode || 13 == a.keyCode ? (this.wa(!0, a), !0) : !1
	};
	y.Sf = function () {
		this.wa(!1)
	};
	y.lj = function () {
		Cv(this, 4) || this.wa(!1)
	};
	y.He = function (a) {
		this.Ue || this.wa(!1);
		MB.O.He.call(this, a)
	};
	y.cc = function (a) {
		var b = this.B;
		if (a != b && (b && (this.wa(!1), this.ea && QB(this, b, !1), delete this.B), this.ea && X(this.D, Zc, !!a), a)) {
			this.B = a;
			lo(a, this);
			a.la(!1);
			var c = this.Ue;
			(a.me = c) && Xv(a, !0);
			this.ea && QB(this, a, !0)
		}
		return b
	};
	y.Nf = function (a) {
		NB(this).tb(a, !0)
	};
	y.Ea = function (a, b) {
		(a = MB.O.Ea.call(this, a, b)) && !this.isVisible() && this.wa(!1);
		return a
	};
	y.pb = function (a) {
		MB.O.pb.call(this, a);
		this.isEnabled() || this.wa(!1)
	};
	y.wa = function (a, b) {
		MB.O.wa.call(this, a);
		if (this.B && Cv(this, 64) == a) {
			if (a) this.B.ea || this.B.aa(), this.Y = jn(this.G()), this.Ia = rn(this.G()), this.be(), !b || 40 != b.keyCode && 38 != b.keyCode ? this.B.qb(-1) : $v(this.B);
			else {
				Qv(this, !1);
				this.B.ac = !1;
				var c = this.G();
				c && (X(c, Va, ""), X(c, "owns", ""));
				null != this.X && (this.X = void 0, (c = this.B.G()) && pn(c, "", ""))
			}
			this.B.la(a, !1, b);
			this.ha || (b = jo(this), c = a ? b.H : b.ka, c.call(b, this.A.A, Te, this.aj, !0), this.Ue && c.call(b, this.B, nb, this.lj), c.call(b, this.T, "tick", this.Ri), a ? this.T.start() :
				this.T.stop())
		}
		this.B && this.B.G() && this.B.D.removeAttribute(bb)
	};
	y.be = function () {
		if (this.B.ea) {
			var a = this.F;
			this.F.A = this.Zc || this.G();
			var b = this.B.G();
			this.B.isVisible() || (b.style.visibility = hd, S(b, !0));
			!this.X && PB(this) && (this.X = qn(b));
			a.Ga(b, a.B ^ 1, null, this.X);
			this.B.isVisible() || (S(b, !1), b.style.visibility = Bh)
		}
	};
	y.Ri = function () {
		var a = rn(this.G()),
			b = jn(this.G());
		var c = this.Ia;
		(c = !(c == a || c && a && c.left == a.left && c.width == a.width && c.top == a.top && c.height == a.height)) || (c = this.Y, c = !(c == b || c && b && c.top == b.top && c.right == b.right && c.bottom == b.bottom && c.left == b.left));
		if (c) {
			if (c = this.B.ea && b && this.Y) c = this.Y, c = b.right - b.left < c.right - c.left;
			c && (c = this.B.G(), this.B.isVisible() || (c.style.visibility = hd, S(c, !0)), cn(c, new H(0, 0)));
			this.Ia = a;
			this.Y = b;
			this.be()
		}
	};
	y.Pi = function (a) {
		(a = a.target.G()) && SB(this, a)
	};
	y.jj = function (a) {
		Bv(this, 32) && this.G() && this.B && this.B.isVisible() && a.stopPropagation()
	};
	y.Qi = function () {
		if (!Yv(this.B)) {
			var a = this.G();
			X(a, Va, "");
			X(a, "owns", "")
		}
	};
	y.Oi = function (a) {
		if (Cv(this, 64) && a.target instanceof sB) {
			a = a.target;
			var b = a.G();
			a.isVisible() && Cv(a, 2) && null != b && SB(this, b)
		}
	};
	rv(Kc, function () {
		return new MB(null)
	});
	C(TB, kA);
	Ei(TB);
	TB.prototype.lb = function (a) {
		var b = Ev(this, a);
		b = a.A.P(f, Ic + b.join(" "), [UB(this, a.eb, a.A), VB(this, a.A)]);
		hA(b, a.K);
		return b
	};
	TB.prototype.Pa = function (a) {
		return a && a.firstChild
	};
	TB.prototype.Da = function (a, b) {
		var c = ql(document, "*", Jc, b)[0];
		if (c) {
			S(c, !1);
			a.A.A.body.appendChild(c);
			var d = new xB;
			d.Gc(c);
			a.cc(d)
		}
		ql(document, "*", this.ia() + aa, b)[0] || b.appendChild(UB(this, b.childNodes, a.A));
		ql(document, "*", this.ia() + da, b)[0] || b.appendChild(VB(this, a.A));
		return TB.O.Da.call(this, a, b)
	};
	TB.prototype.ia = function () {
		return Ec
	};
	rv(Ec, function () {
		return new MB(null, null, TB.fa())
	});
	C(XB, R);
	XB.prototype.B = null;
	XB.prototype.L = function () {
		XB.O.L.call(this);
		delete this.A;
		this.B = null
	};
	C(bC, MB);
	y = bC.prototype;
	y.pa = null;
	y.V = function () {
		bC.O.V.call(this);
		kC(this);
		hC(this)
	};
	y.$a = function (a) {
		bC.O.$a.call(this, a);
		(a = this.Hb()) ? (this.Z = a, kC(this)) : cC(this) || eC(this, 0)
	};
	y.L = function () {
		bC.O.L.call(this);
		this.pa && (this.pa.da(), this.pa = null);
		this.Z = null
	};
	y.Sf = function (a) {
		dC(this, a.target);
		bC.O.Sf.call(this, a);
		a.stopPropagation();
		this.dispatchEvent(Ua)
	};
	y.Si = function () {
		var a = cC(this);
		bC.O.Hf.call(this, a && a.ma());
		kC(this)
	};
	y.cc = function (a) {
		var b = bC.O.cc.call(this, a);
		a != b && (this.pa && aC(this.pa), a && (this.pa ? ro(a, function (c) {
			gC(c);
			var d = this.pa;
			ZB(d, c, d.A.length)
		}, this) : iC(this, a)));
		return b
	};
	y.Nf = function (a) {
		gC(a);
		bC.O.Nf.call(this, a);
		if (this.pa) {
			var b = this.pa;
			ZB(b, a, b.A.length)
		} else iC(this, NB(this));
		jC(this)
	};
	y.Hf = function (a) {
		if (null != a && this.pa)
			for (var b = 0, c; c = this.pa.A[b] || null; b++)
				if (c && typeof c.ma == t && c.ma() == a) {
					dC(this, c);
					return
				}
		dC(this, null)
	};
	y.ma = function () {
		var a = cC(this);
		return a ? a.ma() : null
	};
	y.wa = function (a, b) {
		bC.O.wa.call(this, a, b);
		Cv(this, 64) ? NB(this).qb(fC(this)) : jC(this)
	};
	rv("goog-select", function () {
		return new bC(null)
	});
	C(nC, bC);
	nC.prototype.W = function () {
		nC.O.W.call(this);
		V(this.G(), "jfk-select")
	};
	nC.prototype.be = function () {
		if (NB(this).ea) {
			var a = this.D,
				b = OB(this) ? 8 : 12,
				c = NB(this).G(),
				d = !1;
			NB(this).isVisible() || (d = !0, c.style.visibility = hd, S(c, !0));
			var e = Math.max(fC(this), 0);
			e = qo(NB(this), e);
			var g = 0;
			if (PB(this)) {
				var h = c.scrollTop;
				c.style.overflowY = Bh;
				c.style.height = fb;
				d || (g = on(e.G()).y - on(a).y, g = h - g)
			}
			d = e ? e.G().offsetTop : 0;
			h = jn(a);
			var k = 0;
			h && (k = jn(c), k = Math.min(Math.max(h.top, k.top + 2), k.bottom - 2) - h.top);
			Pn(a, b, c, OB(this) ? 8 : 12, new H(0, k - d), null, 65 | (PB(this) ? 32 : 132), null);
			PB(this) && (a = on(e.G()).y -
				on(a).y, c.style.overflowY = fb, c.scrollTop = g + a);
			NB(this).isVisible() || (S(c, !1), c.style.visibility = Bh)
		}
	};
	nC.prototype.oc = function (a) {
		var b = nC.O.oc.call(this, a);
		return a.type != ne || !NB(this) || a.altKey || a.ctrlKey || a.metaKey || a.C ? b : Cv(this, 64) || 32 != a.keyCode ? b ? (!Cv(this, 64) || 38 != a.keyCode && 40 != a.keyCode || oC(this), !0) : zo(a.keyCode) ? (a = a.charCode ? String.fromCharCode(a.charCode) : " ", this.R.add(a), b = this.R.A, this.R.B ? pC(this, a, !1) : pC(this, b, 1 < b.length), !0) : !1 : (this.R.C(), b)
	};
	C(mC, M);
	mC.prototype.add = function (a) {
		a == this.A ? this.B = !0 : this.B || (this.A += a);
		this.D.start()
	};
	mC.prototype.C = function () {
		this.A = "";
		this.B = !1
	};
	mC.prototype.B = !1;
	mC.prototype.A = "";
	C(rC, M);
	y = rC.prototype;
	y.Wd = null;
	y.vg = null;
	y.tf = !1;
	y.Ei = function (a) {
		this.tf ? a.preventDefault() : this.Wd = a.target
	};
	y.Yk = function () {
		qC(this)
	};
	y.Lk = function () {
		null != this.vg ? (this.A.G().scrollTop = this.vg, qC(this, !1)) : qC(this, !0)
	};
	y.Xk = function (a) {
		a.target == this.A && (this.Wd = null, this.vg = this.A.G().scrollTop)
	};
	y.L = function () {
		rC.O.L.call(this);
		this.B.da();
		this.Wd = null
	};
	z(tC, U);
	y = tC.prototype;
	y.W = function () {
		U.prototype.W.call(this);
		this.F = new xB(this.A);
		this.F.aa();
		for (var a = this.R.data.A, b = 0; b < this.R.data.A.length; b++) this.F.tb(uC(this, b, a[b]), !0);
		this.N = new nC("", this.F, this.A);
		this.tb(this.N, !0);
		this.C = new xB(this.A);
		this.C.aa();
		this.J = new nC("", this.C, this.A);
		this.tb(this.J, !0)
	};
	y.V = function () {
		U.prototype.V.call(this);
		new rC(this.F);
		new rC(this.C);
		V(this.F.G(), Bc);
		V(this.C.G(), Bc);
		this.U.H(this.N, Ua, jm).H(this.J, Ua, jm).H(this, Ua, this.Nj, !0);
		this.N.be();
		this.J.be()
	};
	y.Nj = function (a) {
		a = a.target;
		a.Ha() == this.F ? (this.F.la(!1), wC(this, a.ma(), 0)) : a.Ha() == this.C && (this.C.la(!1), vC(this, a.ma()))
	};
	y.jl = function (a) {
		wx(this.Y, a, eb)
	};
	y.L = function () {
		N(this.U);
		U.prototype.L.call(this)
	};
	z(xC, O);
	z(yC, tC);
	yC.prototype.W = function () {
		tC.prototype.W.call(this);
		this.B.aa();
		for (var a in FE) {
			var b = FE[a];
			b = uC(this, b, zC[b]);
			this.B.tb(b, !0);
			b.Ea(!1)
		}
		this.Wc(this.K, 0, !0);
		this.K.Ea(!1);
		this.ca = new rC(this.B);
		V(this.B.G(), Bc);
		S(this.B.G(), !1)
	};
	yC.prototype.V = function () {
		tC.prototype.V.call(this);
		this.U.H(this.K, Ua, jm).H(this.B, Ua, this.Z, !0)
	};
	yC.prototype.Z = function (a) {
		a = a.target.ma();
		BC(this, Number(a))
	};
	yC.prototype.L = function () {
		N(this.ca);
		N(this.B);
		N(this.K);
		tC.prototype.L.call(this)
	};
	var FE = {
			Ns: 0,
			Xs: 1,
			Vs: 2
		},
		zC = {
			0: "Categories",
			1: "Search Results",
			2: "Recent characters"
		};
	z(CC, O);
	z(EC, M);
	EC.prototype.L = function () {
		N(this.A);
		M.prototype.L.call(this)
	};
	var DC = Xj(Qj(Rj("//i18n-cloud.appspot.com/csearch")));
	z(FC, U);
	FC.prototype.W = function () {
		U.prototype.W.call(this);
		this.B.aa(this.G())
	};
	FC.prototype.L = function () {
		N(this.B);
		U.prototype.L.call(this)
	};
	z(GC, Z);
	y = GC.prototype;
	y.W = function () {
		Z.prototype.W.call(this);
		var a = this.A;
		this.B.aa(this.G());
		var b = a.P(f, ["ita-cp-backspace-img", Sd]);
		this.C = a.P(f, ["ita-cp-backspace", Ed, Kd]);
		a.appendChild(this.C, b);
		a.appendChild(this.G(), this.C);
		S(this.C, !1)
	};
	y.V = function () {
		Z.prototype.V.call(this);
		Mx(this.B, 257, 295);
		Xv(this, !1);
		this.Eb = !1;
		this.F.H(this.C, Te, this.Ak).H(this.G(), Te, this.ri, !0).H(this.B, "i", this.Bk);
		V(this.G(), Bd);
		var a = this.B;
		a.C.font = 20 * a.F + "px aria,sans-serif";
		a.C.fontWeight = "bold";
		a.C.fillStyle = "#CCC";
		a.C.fillText("Draw a symbol here", 30 * a.F, 120 * a.F)
	};
	y.Bk = function () {
		S(this.C, !0)
	};
	y.ri = function () {
		this.Wf && (this.B.reset(), W(this.G(), Bd), this.Wf = !1)
	};
	y.Ak = function () {
		this.reset();
		this.dispatchEvent(new O("F"))
	};
	y.reset = function () {
		S(this.C, !1);
		this.Wf || this.B.reset()
	};
	y.L = function () {
		N(this.B);
		N(this.F);
		Z.prototype.L.call(this)
	};
	y.Wf = !0;
	var IC;
	C(HC, U);
	y = HC.prototype;
	y.ec = null;
	y.Sd = !1;
	y.W = function () {
		this.D = this.A.P(va, {
			type: "text"
		})
	};
	y.$a = function (a) {
		HC.O.$a.call(this, a);
		this.C || (this.C = a.getAttribute(ye) || "");
		dm(I(a)) == a && (this.Sd = !0, W(this.G(), ze));
		JC() && (this.G().placeholder = this.C);
		X(this.G(), ye, this.C)
	};
	y.V = function () {
		HC.O.V.call(this);
		var a = new T(this);
		a.H(this.G(), lc, this.ah);
		a.H(this.G(), nb, this.Ui);
		JC() ? this.B = a : (P && a.H(this.G(), [v, u, oe], this.ej), a.H(yl(I(this.G())), "load", this.Aj), this.B = a, KC(this));
		MC(this);
		this.G().A = this
	};
	y.ta = function () {
		HC.O.ta.call(this);
		this.B && (this.B.da(), this.B = null);
		this.G().A = null
	};
	y.L = function () {
		HC.O.L.call(this);
		this.B && (this.B.da(), this.B = null)
	};
	y.ah = function () {
		this.Sd = !0;
		W(this.G(), ze);
		if (!JC() && !LC(this) && !this.J) {
			var a = this,
				b = function () {
					a.G() && (a.G().value = "")
				};
			K ? Cr(b, 10) : b()
		}
	};
	y.Ui = function () {
		JC() || (this.B.ka(this.G(), p, this.ah), this.ec = null);
		this.Sd = !1;
		MC(this)
	};
	y.ej = function (a) {
		27 == a.keyCode && (a.type == u ? this.ec = this.G().value : a.type == v ? this.G().value = this.ec : a.type == oe && (this.ec = null), a.preventDefault())
	};
	y.hj = function () {
		LC(this) || (this.G().value = "", Cr(this.Ti, 10, this))
	};
	y.Ti = function () {
		LC(this) || (this.G().value = this.C)
	};
	y.Aj = function () {
		MC(this)
	};
	y.reset = function () {
		LC(this) && (this.G().value = "", null != this.ec && (this.ec = ""), MC(this))
	};
	y.ma = function () {
		return null != this.ec ? this.ec : LC(this) ? this.G().value : ""
	};
	y.pb = function (a) {
		this.G().disabled = !a;
		var b = this.G();
		a ? W(b, Ae) : V(b, Ae)
	};
	y.isEnabled = function () {
		return !this.G().disabled
	};
	y.El = function () {
		!this.G() || LC(this) || this.Sd || (this.G().value = this.C)
	};
	z(NC, U);
	y = NC.prototype;
	y.W = function () {
		U.prototype.W.call(this);
		var a = this.A,
			b = this.G();
		V(b, "ita-cp-search");
		var c = a.P(f, "ita-cp-lens");
		a.appendChild(b, c);
		this.B.aa(b);
		V(this.B.G(), "ita-cp-input");
		X(this.B.G(), ye, La)
	};
	y.V = function () {
		U.prototype.V.call(this);
		this.K = new Rq(this.B.G());
		this.F.H(this.K, ne, this.dl).H(this.C, "tick", this.Dk).H(this.B.G(), lc, this.Ck).H(this.B.G(), nb, this.Mk).H(this.G(), Te, this.ol)
	};
	y.ol = function () {
		this.B.G().focus()
	};
	y.Dk = function () {
		var a = this.B.ma();
		this.J != a && OC(this)
	};
	y.Ck = function () {
		V(this.G(), "ita-cp-focus")
	};
	y.Mk = function () {
		W(this.G(), "ita-cp-focus")
	};
	y.dl = function (a) {
		if (13 == a.keyCode) return this.C.stop(), OC(this), !0;
		this.C.start();
		return !1
	};
	y.focus = function () {
		this.B.G().focus()
	};
	y.reset = function () {
		this.B.reset()
	};
	y.L = function () {
		N(this.B);
		N(this.C);
		N(this.F);
		U.prototype.L.call(this)
	};
	y = PC.prototype;
	y.vb = function () {
		return this.nb.size
	};
	y.Ka = function () {
		return Array.from(this.nb.values())
	};
	y.xb = function () {
		return Array.from(this.nb.keys())
	};
	y.zd = function (a) {
		return this.Ka().some(function (b) {
			return b == a
		})
	};
	y.Dc = function (a, b) {
		var c = this;
		b = void 0 === b ? function (d, e) {
			return d === e
		} : b;
		return this === a ? !0 : this.nb.size != a.vb() ? !1 : this.xb().every(function (d) {
			return b(c.nb.get(d), a.get(d))
		})
	};
	y.get = function (a, b) {
		return this.nb.has(a) ? this.nb.get(a) : b
	};
	y.set = function (a, b) {
		this.nb.set(a, b);
		return this
	};
	y.forEach = function (a, b) {
		var c = this;
		b = void 0 === b ? this : b;
		this.nb.forEach(function (d, e) {
			return a.call(b, d, e, c)
		})
	};
	(function () {
		for (var a = ["ms", "moz", "webkit", "o"], b, c = 0; b = a[c] && !A.requestAnimationFrame; ++c) A.requestAnimationFrame = A[b + "RequestAnimationFrame"], A.cancelAnimationFrame = A[b + "CancelAnimationFrame"] || A[b + "CancelRequestAnimationFrame"];
		if (!A.requestAnimationFrame) {
			var d = 0;
			A.requestAnimationFrame = function (e) {
				var g = (new Date).getTime(),
					h = Math.max(0, 16 - (g - d));
				d = g + h;
				return A.setTimeout(function () {
					e(g + h)
				}, h)
			};
			A.cancelAnimationFrame || (A.cancelAnimationFrame = function (e) {
				clearTimeout(e)
			})
		}
	})();
	var RC = [
			[],
			[]
		],
		SC = 0,
		TC = !1,
		QC = 0;
	var YC = K ? Xj(Qj(Rj('javascript:""'))) : Xj(Qj(Rj("about:blank")));
	K ? Xj(Qj(Rj('javascript:""'))) : Xj(Qj(Rj("javascript:undefined")));
	C(XC, U);
	y = XC.prototype;
	y.wf = null;
	y.Le = !1;
	y.Za = null;
	y.Ja = null;
	y.Cb = null;
	y.nf = !1;
	y.Pd = function () {
		return "goog-modalpopup"
	};
	y.ue = function () {
		return this.Za
	};
	y.W = function () {
		XC.O.W.call(this);
		var a = this.G();
		Lp(a, kj(this.Pd()).split(" "));
		Vl(a, !0);
		S(a, !1);
		ZC(this);
		$C(this)
	};
	y.ci = function () {
		this.nf = !1
	};
	y.De = function (a) {
		return !!a && a.tagName == f
	};
	y.$a = function (a) {
		XC.O.$a.call(this, a);
		Lp(this.G(), kj(this.Pd()).split(" "));
		ZC(this);
		$C(this);
		Vl(this.G(), !0);
		S(this.G(), !1)
	};
	y.V = function () {
		this.Ja && Hl(this.Ja, this.G());
		Hl(this.Za, this.G());
		XC.O.V.call(this);
		var a = this.G();
		a.parentNode && a.parentNode.insertBefore(this.Cb, a.nextSibling);
		this.wf = new EA(this.A.A);
		jo(this).H(this.wf, mc, this.Uk);
		aD(this, !1)
	};
	y.ta = function () {
		this.isVisible() && this.fb(!1);
		N(this.wf);
		XC.O.ta.call(this);
		Il(this.Ja);
		Il(this.Za);
		Il(this.Cb)
	};
	y.fb = function (a) {
		if (a != this.Le)
			if (this.X && this.X.stop(), this.Z && this.Z.stop(), this.U && this.U.stop(), this.Y && this.Y.stop(), this.ea && aD(this, a), a) {
				if (this.dispatchEvent(jb)) {
					try {
						this.T = this.A.A.activeElement
					} catch (e) {}
					this.ff();
					this.Ug();
					jo(this).H(gm(this.A), Uf, this.ff).H(gm(this.A), vf, this.ub);
					bD(this, !0);
					this.focus();
					this.Le = !0;
					this.X && this.Z ? (ym(this.X, "end", this.Ke, !1, this), this.Z.play(), this.X.play()) : this.Ke()
				}
			} else if (this.dispatchEvent("beforehide")) {
			jo(this).ka(gm(this.A), Uf, this.ff).ka(gm(this.A),
				vf, this.ub);
			this.Le = !1;
			this.U && this.Y ? (ym(this.U, "end", this.Je, !1, this), this.Y.play(), this.U.play()) : this.Je();
			a: {
				try {
					var b = this.A,
						c = b.A.body,
						d = b.A.activeElement || c;
					if (!this.T || this.T == c) {
						this.T = null;
						break a
					}(d == c || b.contains(this.G(), d)) && this.T.focus()
				} catch (e) {}
				this.T = null
			}
		}
	};
	y.Ke = function () {
		this.dispatchEvent("show")
	};
	y.Je = function () {
		bD(this, !1);
		this.dispatchEvent(id)
	};
	y.isVisible = function () {
		return this.Le
	};
	y.focus = function () {
		this.Jg()
	};
	y.ff = function () {
		this.Ja && S(this.Ja, !1);
		this.Za && S(this.Za, !1);
		var a = this.A.A,
			b = ul(yl(a) || window || window),
			c = Math.max(b.width, Math.max(a.body.scrollWidth, a.documentElement.scrollWidth));
		a = Math.max(b.height, Math.max(a.body.scrollHeight, a.documentElement.scrollHeight));
		this.Ja && (S(this.Ja, !0), pn(this.Ja, c, a));
		this.Za && (S(this.Za, !0), pn(this.Za, c, a))
	};
	y.Ug = function () {
		var a = yl(this.A.A) || window;
		if ("fixed" == an(this.G(), Bf)) var b = 0,
			c = 0;
		else c = wl(this.A.A), b = c.x, c = c.y;
		var d = qn(this.G());
		a = ul(a || window);
		b = Math.max(b + a.width / 2 - d.width / 2, 0);
		c = Math.max(c + a.height / 2 - d.height / 2, 0);
		cn(this.G(), b, c);
		cn(this.Cb, b, c)
	};
	y.Uk = function (a) {
		this.nf ? this.ci() : a.target == this.Cb && Cr(this.Jg, 0, this)
	};
	y.Jg = function () {
		try {
			K && this.A.A.body.focus(), this.G().focus()
		} catch (a) {}
	};
	y.L = function () {
		N(this.X);
		this.X = null;
		N(this.U);
		this.U = null;
		N(this.Z);
		this.Z = null;
		N(this.Y);
		this.Y = null;
		XC.O.L.call(this)
	};
	C(gD, XC);
	y = gD.prototype;
	y.ig = !0;
	y.ne = .5;
	y.Cg = "";
	y.ba = null;
	y.Wa = null;
	y.Xa = null;
	y.he = null;
	y.Ra = null;
	y.Bc = null;
	y.Fa = null;
	y.Pd = function () {
		return this.F
	};
	y.Bb = function () {
		this.G() || this.aa();
		return this.Bc
	};
	y.ue = function () {
		this.G() || this.aa();
		return gD.O.ue.call(this)
	};
	y.W = function () {
		gD.O.W.call(this);
		var a = this.G(),
			b = this.A;
		this.he = ho(this);
		var c = ho(this) + ".contentEl";
		this.Wa = b.P(f, this.F + "-title", this.Xa = b.P(n, {
			className: this.F + "-title-text",
			id: this.he
		}, this.Cg), this.Ra = b.P(n, this.F + "-title-close"));
		Fl(a, this.Wa, this.Bc = b.P(f, {
			className: this.F + ba,
			id: c
		}), this.Fa = b.P(f, this.F + "-buttons"));
		Jr(this.Xa, "heading");
		Jr(this.Ra, sb);
		Vl(this.Ra, !0);
		X(this.Ra, ye, "Close");
		Jr(a, "dialog");
		X(a, Be, this.he || "");
		S(this.Ra, !0);
		this.B && (a = this.B, a.A = this.Fa, nD(a));
		S(this.Fa, !!this.B);
		hD(this, this.ne)
	};
	y.$a = function (a) {
		gD.O.$a.call(this, a);
		a = this.G();
		var b = this.F + ba;
		this.Bc = ql(document, null, b, a)[0];
		this.Bc || (this.Bc = this.A.P(f, b), a.appendChild(this.Bc));
		b = this.F + "-title";
		var c = this.F + "-title-text",
			d = this.F + "-title-close";
		(this.Wa = ql(document, null, b, a)[0]) ? (this.Xa = ql(document, null, c, this.Wa)[0], this.Ra = ql(document, null, d, this.Wa)[0]) : (this.Wa = this.A.P(f, b), a.insertBefore(this.Wa, this.Bc));
		this.Xa ? (this.Cg = $l(this.Xa), this.Xa.id || (this.Xa.id = ho(this))) : (this.Xa = Al(n, {
			className: c,
			id: ho(this)
		}), this.Wa.appendChild(this.Xa));
		this.he = this.Xa.id;
		X(a, Be, this.he || "");
		this.Ra || (this.Ra = this.A.P(n, d), this.Wa.appendChild(this.Ra));
		S(this.Ra, !0);
		b = this.F + "-buttons";
		if (this.Fa = ql(document, null, b, a)[0]) {
			if (a = this.B = new dD(this.A), (b = this.Fa) && 1 == b.nodeType) {
				a.A = b;
				b = (a.A || document).getElementsByTagName(ha);
				c = 0;
				for (var e, g; d = b[c]; c++)
					if (e = d.name || d.id, g = $l(d) || d.value, e) {
						var h = 0 == c;
						a.set(e, g, h, "cancel" == d.name);
						h && V(d, zc)
					}
			}
		} else this.Fa = this.A.P(f, b), a.appendChild(this.Fa), this.B && (a = this.B, a.A = this.Fa, nD(a)), S(this.Fa, !!this.B);
		hD(this, this.ne)
	};
	y.V = function () {
		gD.O.V.call(this);
		jo(this).H(this.G(), u, this.Ph).H(this.G(), v, this.Ph);
		jo(this).H(this.Fa, p, this.Ki);
		jD(this, !0);
		jo(this).H(this.Ra, p, this.Bl);
		var a = this.G();
		Jr(a, "dialog");
		"" !== this.Xa.id && X(a, Be, this.Xa.id);
		this.ig || iD(this)
	};
	y.ta = function () {
		this.isVisible() && this.fb(!1);
		jD(this, !1);
		gD.O.ta.call(this)
	};
	y.fb = function (a) {
		a != this.isVisible() && (this.ea || this.aa(), gD.O.fb.call(this, a))
	};
	y.Ke = function () {
		gD.O.Ke.call(this);
		this.dispatchEvent(Xa)
	};
	y.Je = function () {
		gD.O.Je.call(this);
		this.dispatchEvent("afterhide")
	};
	y.Fl = function () {
		var a = this.A.A,
			b = ul(yl(a) || window || window),
			c = Math.max(a.body.scrollWidth, b.width);
		a = Math.max(a.body.scrollHeight, b.height);
		var d = qn(this.G());
		"fixed" == an(this.G(), Bf) ? ev(this.ba, new Tm(0, 0, Math.max(0, b.width - d.width), Math.max(0, b.height - d.height))) : ev(this.ba, new Tm(0, 0, c - d.width, a - d.height))
	};
	y.Bl = function () {
		lD(this)
	};
	y.L = function () {
		this.Fa = this.Ra = null;
		gD.O.L.call(this)
	};
	y.Ki = function (a) {
		a: {
			for (a = a.target; null != a && a != this.Fa;) {
				if (a.tagName == ha) break a;
				a = a.parentNode
			}
			a = null
		}
		if (a && !a.disabled) {
			a = a.name;
			var b = this.B.get(a);
			this.dispatchEvent(new kD(a, b)) && this.fb(!1)
		}
	};
	y.Ph = function (a) {
		var b = !1,
			c = !1,
			d = this.B,
			e = a.target;
		if (a.type == u)
			if (27 == a.keyCode) {
				var g = d && d.B;
				e = "SELECT" == e.tagName && !e.disabled;
				g && !e ? (c = !0, b = d.get(g), b = this.dispatchEvent(new kD(g, b))) : e || (b = !0)
			} else {
				if (9 == a.keyCode && a.shiftKey && e == this.G()) {
					this.nf = !0;
					try {
						this.Cb.focus()
					} catch (r) {}
					Cr(this.ci, 0, this)
				}
			}
		else if (13 == a.keyCode) {
			if (e.tagName == ha && !e.disabled) g = e.name;
			else if (e == this.Ra) lD(this);
			else if (d) {
				var h = d.D,
					k;
				if (k = h) a: {
					k = (d.A || document).getElementsByTagName(ha);
					for (var l = 0, m; m = k[l]; l++)
						if (m.name ==
							h || m.id == h) {
							k = m;
							break a
						}
					k = null
				}
				e = (e.tagName == Na || "SELECT" == e.tagName || "A" == e.tagName) && !e.disabled;
				!k || k.disabled || e || (g = h)
			}
			g && d && (c = !0, b = this.dispatchEvent(new kD(g, String(d.get(g)))))
		} else e != this.Ra || 32 != a.keyCode && " " != a.key || lD(this);
		if (b || c) a.stopPropagation(), a.preventDefault();
		b && this.fb(!1)
	};
	C(kD, O);
	C(dD, PC);
	dD.prototype.set = function (a, b, c, d) {
		PC.prototype.set.call(this, a, b);
		c && (this.D = a);
		d && (this.B = a);
		return this
	};
	dD.prototype.G = function () {
		return this.A
	};
	var eD = {
			key: "ok",
			caption: "OK"
		},
		fD = {
			key: "cancel",
			caption: "Cancel"
		},
		GE = {
			key: "yes",
			caption: "Yes"
		},
		HE = {
			key: "no",
			caption: "No"
		},
		IE = {
			key: "save",
			caption: "Save"
		},
		JE = {
			key: "continue",
			caption: "Continue"
		};
	"undefined" != typeof document && (cD(new dD, eD, !0, !0), cD(cD(new dD, eD, !0), fD, !1, !0), cD(cD(new dD, GE, !0), HE, !1, !0), cD(cD(cD(new dD, GE), HE, !0), fD, !1, !0), cD(cD(cD(new dD, JE), IE), fD, !0, !0));
	z(oD, gD);
	y = oD.prototype;
	y.W = function () {
		gD.prototype.W.call(this);
		var a = this.A;
		V(this.G(), "ita-cp-whole-pad");
		this.Cg = ya;
		this.Xa && Ul(this.Xa, ya);
		var b = this.Bb();
		this.C = new yC(a, this);
		this.C.aa(b);
		V(this.C.G(), "ita-cp-menubar");
		var c = a.P(f, ["ita-cp-cell", "ita-cp-left-cell"]);
		a.appendChild(b, c);
		var d = a.appendChild,
			e = this.A;
		this.ca = e.P(f, {
			"class": "ita-cp-charpicker"
		});
		e.appendChild(this.Bb(), this.ca);
		this.J = new FC(this.Fb, e, this);
		this.J.aa(this.ca);
		d.call(a, c, this.ca);
		c = a.P(f, ["ita-cp-cell", "ita-cp-right-cell"]);
		a.appendChild(b,
			c);
		this.K.aa();
		a.appendChild(c, this.K.G());
		b = a.appendChild;
		this.qa = this.A.P(f, {
			"class": "ita-cp-hwt"
		});
		this.N = new GC(this.A, this);
		this.N.aa(this.qa);
		b.call(a, c, this.qa)
	};
	y.V = function () {
		gD.prototype.V.call(this);
		var a = this.G(),
			b = qn(a),
			c = ul(gm(this.A) || window);
		a.style.left = Math.round((c.width - b.width) / 2) + Sf;
		a.style.top = Math.round(c.height - b.height) + Sf;
		this.ga = new Xw(this.G(), this.G());
		this.Sa.H(this.C, "B", this.Pk).H(this, "D", this.Ek).H(this.ga, xg, this.Fk).H(this.G(), u, this.Gk).H(this, "E", this.Zk);
		wC(this.C, 0, 0)
	};
	y.Zk = function (a) {
		if (this.R) {
			var b = this.R,
				c = a.A;
			kB(b, a.value, c);
			OA(b.B, new aB(c));
			gB(b.B, c)
		}
	};
	y.Gk = function (a) {
		var b = !1,
			c = this.J.B;
		a: {
			var d = this.C;
			for (var e = po(d) - 1; 0 <= e; e--) {
				var g = qo(d, e);
				if (g.isVisible()) {
					d = g;
					break a
				}
			}
			d = null
		}
		e = a.target;
		this.G() || this.aa();
		e == this.Ra && 32 == a.keyCode ? (this.dispatchEvent(new O("C")), b = !0) : 9 == a.keyCode && a.target == this.K.B.G() && a.shiftKey ? (nA(c), b = !0) : 9 == a.keyCode && d && a.target == d.G() && !a.shiftKey && (nA(c), b = !0);
		this.A.Cd(a.target, c.G()) == c.G() && (b = c.La(a), 9 == a.keyCode && (a.shiftKey ? d.G().focus() : this.K.focus(), b = !0));
		b && (a.preventDefault(), a.stopPropagation())
	};
	y.Fk = function (a) {
		a = a.A.target;
		var b = this.A.Cd(a, this.J.G());
		if (b == this.J.G()) return !1;
		b = this.A.Cd(a, this.N.G());
		if (b == this.N.G()) return !1;
		b = this.A.Cd(a, this.K.G());
		if (b == this.K.G()) return !1;
		b = this.A.Cd(a, this.C.G());
		return b == this.C.G() ? !1 : !0
	};
	y.Pk = function (a) {
		var b = this.J;
		a = b.C.data.D[a.A][a.F];
		var c = vA(b.C.A, a),
			d = b.C.B;
		d.B.Be() && d.B.abort();
		d.F && Km(d.F);
		var e = B(d.S, d);
		d.F = ym(d.B, Cb, e);
		yA(d, "b88", a, d.B);
		rA(b.B, c)
	};
	y.Ek = function () {
		this.N.reset()
	};
	y.fb = function (a) {
		gD.prototype.fb.call(this, a);
		a ? (this.K.focus(), this.R = new iB, this.R.aa()) : (this.N.reset(), this.K.reset(), N(this.R), this.R = null)
	};
	y.Ug = function () {};
	y.L = function () {
		N(this.J);
		N(this.N);
		N(this.ga);
		N(this.Sa);
		N(this.R);
		gD.prototype.L.call(this)
	};
	z(pD, R);
	y = pD.prototype;
	y.vk = function () {
		sx(this.B);
		px(this.B, null)
	};
	y.xk = function (a) {
		this.D.ee();
		this.D.ib(a.A, a.back);
		a.A && a.A.charCodeAt(0) && !E(this.C, a.A) && this.C.unshift(a.A);
		0 < this.C.length && AC(this.A.C, 2);
		this.Ad && (rx(this.B, a.A, hg), px(this.B, null))
	};
	y.wk = function () {
		this.A.fb(!1)
	};
	y.isVisible = function () {
		return this.A.isVisible()
	};
	y.zk = function (a) {
		this.Ad = !0;
		this.F = a.A;
		BC(this.A.C, 1)
	};
	y.yk = function () {
		rD(this)
	};
	y.tl = function (a) {
		this.Ad = !1;
		if (a.A) {
			var b = B(this.tj, this);
			qt(this.M.A, {
				q: a.A,
				p: "name"
			}, b, void 0)
		} else BC(this.A.C, 0)
	};
	y.tj = function (a) {
		var b = [],
			c;
		for (c in a) b.push(Rr(parseInt(c, 16)));
		this.F = b;
		BC(this.A.C, 1)
	};
	y.Vk = function (a) {
		0 == a.A ? (this.Ad = !1, wC(this.A.C, this.A.C.T, this.A.C.X)) : 1 == a.A ? rA(this.A.J.B, this.F) : 2 == a.A && (this.Ad = !1, rA(this.A.J.B, this.C))
	};
	y.L = function () {
		N(this.I);
		N(this.B);
		N(this.M);
		R.prototype.L.call(this)
	};
	y.Re = !1;
	y.Ad = !1;
	z(sD, M);
	sD.prototype.M = function () {
		V(this.A, Fc)
	};
	sD.prototype.I = function () {
		W(this.A, Fc)
	};
	sD.prototype.C = function () {
		this.B.isVisible() ? W(this.A, Cc) : V(this.A, Cc);
		var a = this.B,
			b = !this.B.isVisible();
		if (b || a.Re) qD(a), a.A.fb(b)
	};
	sD.prototype.L = function () {
		N(this.D)
	};
	Ei(tD);
	var vD = LB || kp || lp;
	z(xD, xB);
	y = xD.prototype;
	y.W = function () {
		xB.prototype.W.call(this);
		this.G().id = ho(this)
	};
	y.Wc = function (a, b, c) {
		this.N && (this.C = b == po(this) ? this.F[b - 1] : this.F[b]);
		xB.prototype.Wc.call(this, a, b, c);
		this.C && (this.C = null, zD(this))
	};
	y.Kd = function (a, b) {
		typeof a === x && (a = ko(this, a));
		var c = so(this, a);
		this.N && (this.C = 0 == c ? this.F[c + 1] : this.F[c]);
		a = xB.prototype.Kd.call(this, a, b);
		this.C && (this.C = null, zD(this));
		return a
	};
	y.Bb = function () {
		var a;
		this.C ? a = this.C : a = xB.prototype.Bb.call(this);
		return a
	};
	y.aa = function (a) {
		xB.prototype.aa.call(this, a);
		zD(this);
		wD(tD.fa(), this.D)
	};
	y.Gc = function (a) {
		xB.prototype.Gc.call(this, void 0 === a ? null : a);
		zD(this);
		wD(tD.fa(), this.D)
	};
	y.la = function (a, b) {
		(a = xB.prototype.la.call(this, a, b)) && this.J && (Dr(this.J), this.J = 0);
		return a
	};
	y.Ld = function (a) {
		var b = xB.prototype.Ld.call(this, a);
		if (b) return b;
		switch (a.keyCode) {
			case 37:
				return Zv(this, B(this.zi, this), this.na), !0;
			case 39:
				return Zv(this, B(this.Bi, this), this.na), !0;
			default:
				return 48 <= a.keyCode && 90 >= a.keyCode ? (BD(this), this.R.push(String.fromCharCode(a.keyCode)), this.mh(this.R.join("")), !0) : !1
		}
	};
	y.mh = function (a) {
		var b = new RegExp("^" + Vk(a), "i"),
			c = this.na; - 1 < c && 1 < a.length && c--;
		Zv(this, function (d, e) {
			var g = 0 > d ? 0 : d,
				h = !1;
			do {
				++d;
				d == e && (d = 0, h = !0);
				var k = qo(this, d).Hb();
				if (k && k.match(b)) return d
			} while (!h || d != g);
			return this.na
		}, c)
	};
	y.zi = function (a, b) {
		a -= this.B;
		var c;
		0 > a && (c = a + b + (Math.ceil(b / this.B) * this.B - b) + this.B);
		return c || a
	};
	y.Bi = function (a, b) {
		a += this.B;
		var c;
		a > b && (c = a - b - (Math.ceil(b / this.B) * this.B - b) - this.B);
		return c || a
	};
	C(CD, sB);
	CD.prototype.Nb = function () {
		return this.dispatchEvent(Ua)
	};
	rv(Qc, function () {
		return new CD(null)
	});
	z(FD, bC);
	FD.prototype.hd = function (a) {
		this.ga && (a = this.Fb ? this.ga : this.ga + " " + a);
		bC.prototype.hd.call(this, a)
	};
	FD.prototype.L = function () {
		Il(this.Sa);
		bC.prototype.L.call(this)
	};
	FD.prototype.La = function (a) {
		var b = bC.prototype.La.call(this, a);
		if (!Cv(this, 64) && 48 <= a.keyCode && 90 >= a.keyCode) {
			GD(this);
			this.U.push(String.fromCharCode(a.keyCode));
			a = this.U.join("");
			var c = new RegExp("^" + Vk(a), "i"),
				d = fC(this),
				e = d; - 1 < e && 1 < a.length && e--;
			var g = this.B ? po(this.B) : 0,
				h = 0 > e ? 0 : e,
				k = !1,
				l = !1;
			do {
				++e;
				e == g && (e = 0, k = !0);
				var m = this.B ? qo(this.B, e) : null;
				if (m instanceof sB && (m = m.Hb()) && m.match(c)) {
					l = !0;
					break
				}
				k && e == h && 3 == a.length && (m = a.split(""), m[1] == m[2] && (c = new RegExp("^" + m[1], "i"), this.U = [m[1]], k = !1))
			} while (!k ||
				e != h);
			l && e != d && eC(this, e)
		}
		return b
	};
	FD.prototype.ma = function () {
		var a = fC(this);
		return -1 != a ? ED(this, a) : ""
	};
	ID.prototype.C = function () {
		var a = this.B.ma();
		a = Jz(a);
		$z(this.A, a);
		"zh-hk" == HD().toLowerCase() && E(a, Kh) ? cA(this.A, Kh) : cA(this.A, a[0]);
		this.D.$h()
	};
	ID.prototype.I = function (a) {
		var b = {},
			c = Kz();
		D(c, function (e) {
			if (0 != Jz(e).length) {
				var g = Pz(a.l10n, e);
				g && (b[g] = e)
			}
		}, this);
		c = sj(b).sort(function (e, g) {
			return e.localeCompare(g)
		});
		var d = kk(c, function (e) {
			return b[e]
		});
		this.B = new FD(this.F, c, 12, d);
		this.B.H(Ua, this.C, !1, this);
		DD(this.B, a.l10n.B);
		this.C()
	};
	var KE = new sD("contenteditable-root", Sb);
	new ID;
	JD("gt-sl");
	JD(Sb, B(KE.C, KE));
}).call(this);