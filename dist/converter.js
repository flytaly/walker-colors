var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/colord/index.mjs
var r = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t = function(r6) {
  return "string" == typeof r6 ? r6.length > 0 : "number" == typeof r6;
};
var n = function(r6, t6, n6) {
  return void 0 === t6 && (t6 = 0), void 0 === n6 && (n6 = Math.pow(10, t6)), Math.round(n6 * r6) / n6 + 0;
};
var e = function(r6, t6, n6) {
  return void 0 === t6 && (t6 = 0), void 0 === n6 && (n6 = 1), r6 > n6 ? n6 : r6 > t6 ? r6 : t6;
};
var u = function(r6) {
  return (r6 = isFinite(r6) ? r6 % 360 : 0) > 0 ? r6 : r6 + 360;
};
var a = function(r6) {
  return { r: e(r6.r, 0, 255), g: e(r6.g, 0, 255), b: e(r6.b, 0, 255), a: e(r6.a) };
};
var o = function(r6) {
  return { r: n(r6.r), g: n(r6.g), b: n(r6.b), a: n(r6.a, 3) };
};
var i = /^#([0-9a-f]{3,8})$/i;
var s = function(r6) {
  var t6 = r6.toString(16);
  return t6.length < 2 ? "0" + t6 : t6;
};
var h = function(r6) {
  var t6 = r6.r, n6 = r6.g, e6 = r6.b, u6 = r6.a, a6 = Math.max(t6, n6, e6), o6 = a6 - Math.min(t6, n6, e6), i6 = o6 ? a6 === t6 ? (n6 - e6) / o6 : a6 === n6 ? 2 + (e6 - t6) / o6 : 4 + (t6 - n6) / o6 : 0;
  return { h: 60 * (i6 < 0 ? i6 + 6 : i6), s: a6 ? o6 / a6 * 100 : 0, v: a6 / 255 * 100, a: u6 };
};
var b = function(r6) {
  var t6 = r6.h, n6 = r6.s, e6 = r6.v, u6 = r6.a;
  t6 = t6 / 360 * 6, n6 /= 100, e6 /= 100;
  var a6 = Math.floor(t6), o6 = e6 * (1 - n6), i6 = e6 * (1 - (t6 - a6) * n6), s3 = e6 * (1 - (1 - t6 + a6) * n6), h5 = a6 % 6;
  return { r: 255 * [e6, i6, o6, o6, s3, e6][h5], g: 255 * [s3, e6, e6, i6, o6, o6][h5], b: 255 * [o6, o6, s3, e6, e6, i6][h5], a: u6 };
};
var g = function(r6) {
  return { h: u(r6.h), s: e(r6.s, 0, 100), l: e(r6.l, 0, 100), a: e(r6.a) };
};
var d = function(r6) {
  return { h: n(r6.h), s: n(r6.s), l: n(r6.l), a: n(r6.a, 3) };
};
var f = function(r6) {
  return b((n6 = (t6 = r6).s, { h: t6.h, s: (n6 *= ((e6 = t6.l) < 50 ? e6 : 100 - e6) / 100) > 0 ? 2 * n6 / (e6 + n6) * 100 : 0, v: e6 + n6, a: t6.a }));
  var t6, n6, e6;
};
var c = function(r6) {
  return { h: (t6 = h(r6)).h, s: (u6 = (200 - (n6 = t6.s)) * (e6 = t6.v) / 100) > 0 && u6 < 200 ? n6 * e6 / 100 / (u6 <= 100 ? u6 : 200 - u6) * 100 : 0, l: u6 / 2, a: t6.a };
  var t6, n6, e6, u6;
};
var l = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var p = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var v = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var m = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var y = { string: [[function(r6) {
  var t6 = i.exec(r6);
  return t6 ? (r6 = t6[1]).length <= 4 ? { r: parseInt(r6[0] + r6[0], 16), g: parseInt(r6[1] + r6[1], 16), b: parseInt(r6[2] + r6[2], 16), a: 4 === r6.length ? n(parseInt(r6[3] + r6[3], 16) / 255, 2) : 1 } : 6 === r6.length || 8 === r6.length ? { r: parseInt(r6.substr(0, 2), 16), g: parseInt(r6.substr(2, 2), 16), b: parseInt(r6.substr(4, 2), 16), a: 8 === r6.length ? n(parseInt(r6.substr(6, 2), 16) / 255, 2) : 1 } : null : null;
}, "hex"], [function(r6) {
  var t6 = v.exec(r6) || m.exec(r6);
  return t6 ? t6[2] !== t6[4] || t6[4] !== t6[6] ? null : a({ r: Number(t6[1]) / (t6[2] ? 100 / 255 : 1), g: Number(t6[3]) / (t6[4] ? 100 / 255 : 1), b: Number(t6[5]) / (t6[6] ? 100 / 255 : 1), a: void 0 === t6[7] ? 1 : Number(t6[7]) / (t6[8] ? 100 : 1) }) : null;
}, "rgb"], [function(t6) {
  var n6 = l.exec(t6) || p.exec(t6);
  if (!n6) return null;
  var e6, u6, a6 = g({ h: (e6 = n6[1], u6 = n6[2], void 0 === u6 && (u6 = "deg"), Number(e6) * (r[u6] || 1)), s: Number(n6[3]), l: Number(n6[4]), a: void 0 === n6[5] ? 1 : Number(n6[5]) / (n6[6] ? 100 : 1) });
  return f(a6);
}, "hsl"]], object: [[function(r6) {
  var n6 = r6.r, e6 = r6.g, u6 = r6.b, o6 = r6.a, i6 = void 0 === o6 ? 1 : o6;
  return t(n6) && t(e6) && t(u6) ? a({ r: Number(n6), g: Number(e6), b: Number(u6), a: Number(i6) }) : null;
}, "rgb"], [function(r6) {
  var n6 = r6.h, e6 = r6.s, u6 = r6.l, a6 = r6.a, o6 = void 0 === a6 ? 1 : a6;
  if (!t(n6) || !t(e6) || !t(u6)) return null;
  var i6 = g({ h: Number(n6), s: Number(e6), l: Number(u6), a: Number(o6) });
  return f(i6);
}, "hsl"], [function(r6) {
  var n6 = r6.h, a6 = r6.s, o6 = r6.v, i6 = r6.a, s3 = void 0 === i6 ? 1 : i6;
  if (!t(n6) || !t(a6) || !t(o6)) return null;
  var h5 = function(r7) {
    return { h: u(r7.h), s: e(r7.s, 0, 100), v: e(r7.v, 0, 100), a: e(r7.a) };
  }({ h: Number(n6), s: Number(a6), v: Number(o6), a: Number(s3) });
  return b(h5);
}, "hsv"]] };
var N = function(r6, t6) {
  for (var n6 = 0; n6 < t6.length; n6++) {
    var e6 = t6[n6][0](r6);
    if (e6) return [e6, t6[n6][1]];
  }
  return [null, void 0];
};
var x = function(r6) {
  return "string" == typeof r6 ? N(r6.trim(), y.string) : "object" == typeof r6 && null !== r6 ? N(r6, y.object) : [null, void 0];
};
var M = function(r6, t6) {
  var n6 = c(r6);
  return { h: n6.h, s: e(n6.s + 100 * t6, 0, 100), l: n6.l, a: n6.a };
};
var H = function(r6) {
  return (299 * r6.r + 587 * r6.g + 114 * r6.b) / 1e3 / 255;
};
var $ = function(r6, t6) {
  var n6 = c(r6);
  return { h: n6.h, s: n6.s, l: e(n6.l + 100 * t6, 0, 100), a: n6.a };
};
var j = function() {
  function r6(r7) {
    this.parsed = x(r7)[0], this.rgba = this.parsed || { r: 0, g: 0, b: 0, a: 1 };
  }
  return r6.prototype.isValid = function() {
    return null !== this.parsed;
  }, r6.prototype.brightness = function() {
    return n(H(this.rgba), 2);
  }, r6.prototype.isDark = function() {
    return H(this.rgba) < 0.5;
  }, r6.prototype.isLight = function() {
    return H(this.rgba) >= 0.5;
  }, r6.prototype.toHex = function() {
    return r7 = o(this.rgba), t6 = r7.r, e6 = r7.g, u6 = r7.b, i6 = (a6 = r7.a) < 1 ? s(n(255 * a6)) : "", "#" + s(t6) + s(e6) + s(u6) + i6;
    var r7, t6, e6, u6, a6, i6;
  }, r6.prototype.toRgb = function() {
    return o(this.rgba);
  }, r6.prototype.toRgbString = function() {
    return r7 = o(this.rgba), t6 = r7.r, n6 = r7.g, e6 = r7.b, (u6 = r7.a) < 1 ? "rgba(" + t6 + ", " + n6 + ", " + e6 + ", " + u6 + ")" : "rgb(" + t6 + ", " + n6 + ", " + e6 + ")";
    var r7, t6, n6, e6, u6;
  }, r6.prototype.toHsl = function() {
    return d(c(this.rgba));
  }, r6.prototype.toHslString = function() {
    return r7 = d(c(this.rgba)), t6 = r7.h, n6 = r7.s, e6 = r7.l, (u6 = r7.a) < 1 ? "hsla(" + t6 + ", " + n6 + "%, " + e6 + "%, " + u6 + ")" : "hsl(" + t6 + ", " + n6 + "%, " + e6 + "%)";
    var r7, t6, n6, e6, u6;
  }, r6.prototype.toHsv = function() {
    return r7 = h(this.rgba), { h: n(r7.h), s: n(r7.s), v: n(r7.v), a: n(r7.a, 3) };
    var r7;
  }, r6.prototype.invert = function() {
    return w({ r: 255 - (r7 = this.rgba).r, g: 255 - r7.g, b: 255 - r7.b, a: r7.a });
    var r7;
  }, r6.prototype.saturate = function(r7) {
    return void 0 === r7 && (r7 = 0.1), w(M(this.rgba, r7));
  }, r6.prototype.desaturate = function(r7) {
    return void 0 === r7 && (r7 = 0.1), w(M(this.rgba, -r7));
  }, r6.prototype.grayscale = function() {
    return w(M(this.rgba, -1));
  }, r6.prototype.lighten = function(r7) {
    return void 0 === r7 && (r7 = 0.1), w($(this.rgba, r7));
  }, r6.prototype.darken = function(r7) {
    return void 0 === r7 && (r7 = 0.1), w($(this.rgba, -r7));
  }, r6.prototype.rotate = function(r7) {
    return void 0 === r7 && (r7 = 15), this.hue(this.hue() + r7);
  }, r6.prototype.alpha = function(r7) {
    return "number" == typeof r7 ? w({ r: (t6 = this.rgba).r, g: t6.g, b: t6.b, a: r7 }) : n(this.rgba.a, 3);
    var t6;
  }, r6.prototype.hue = function(r7) {
    var t6 = c(this.rgba);
    return "number" == typeof r7 ? w({ h: r7, s: t6.s, l: t6.l, a: t6.a }) : n(t6.h);
  }, r6.prototype.isEqual = function(r7) {
    return this.toHex() === w(r7).toHex();
  }, r6;
}();
var w = function(r6) {
  return r6 instanceof j ? r6 : new j(r6);
};
var S = [];
var k = function(r6) {
  r6.forEach(function(r7) {
    S.indexOf(r7) < 0 && (r7(j, y), S.push(r7));
  });
};

// node_modules/colord/plugins/cmyk.mjs
var r2 = function(r6) {
  return "string" == typeof r6 ? r6.length > 0 : "number" == typeof r6;
};
var n2 = function(r6, n6, t6) {
  return void 0 === n6 && (n6 = 0), void 0 === t6 && (t6 = Math.pow(10, n6)), Math.round(t6 * r6) / t6 + 0;
};
var t2 = function(r6, n6, t6) {
  return void 0 === n6 && (n6 = 0), void 0 === t6 && (t6 = 1), r6 > t6 ? t6 : r6 > n6 ? r6 : n6;
};
var u2 = function(r6) {
  return { c: t2(r6.c, 0, 100), m: t2(r6.m, 0, 100), y: t2(r6.y, 0, 100), k: t2(r6.k, 0, 100), a: t2(r6.a) };
};
var e2 = function(r6) {
  return { c: n2(r6.c, 2), m: n2(r6.m, 2), y: n2(r6.y, 2), k: n2(r6.k, 2), a: n2(r6.a, 3) };
};
function c2(r6) {
  return { r: n2(255 * (1 - r6.c / 100) * (1 - r6.k / 100)), g: n2(255 * (1 - r6.m / 100) * (1 - r6.k / 100)), b: n2(255 * (1 - r6.y / 100) * (1 - r6.k / 100)), a: r6.a };
}
function i2(r6) {
  var t6 = 1 - Math.max(r6.r / 255, r6.g / 255, r6.b / 255), u6 = (1 - r6.r / 255 - t6) / (1 - t6), e6 = (1 - r6.g / 255 - t6) / (1 - t6), c4 = (1 - r6.b / 255 - t6) / (1 - t6);
  return { c: isNaN(u6) ? 0 : n2(100 * u6), m: isNaN(e6) ? 0 : n2(100 * e6), y: isNaN(c4) ? 0 : n2(100 * c4), k: n2(100 * t6), a: r6.a };
}
function o2(n6) {
  var t6 = n6.c, e6 = n6.m, i6 = n6.y, o6 = n6.k, m3 = n6.a, a6 = void 0 === m3 ? 1 : m3;
  return r2(t6) && r2(e6) && r2(i6) && r2(o6) ? c2(u2({ c: Number(t6), m: Number(e6), y: Number(i6), k: Number(o6), a: Number(a6) })) : null;
}
var m2 = /^device-cmyk\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var a2 = function(r6) {
  var n6 = m2.exec(r6);
  return n6 ? c2(u2({ c: Number(n6[1]) * (n6[2] ? 1 : 100), m: Number(n6[3]) * (n6[4] ? 1 : 100), y: Number(n6[5]) * (n6[6] ? 1 : 100), k: Number(n6[7]) * (n6[8] ? 1 : 100), a: void 0 === n6[9] ? 1 : Number(n6[9]) / (n6[10] ? 100 : 1) })) : null;
};
function cmyk_default(r6, n6) {
  r6.prototype.toCmyk = function() {
    return e2(i2(this.rgba));
  }, r6.prototype.toCmykString = function() {
    return r7 = e2(i2(this.rgba)), n7 = r7.c, t6 = r7.m, u6 = r7.y, c4 = r7.k, (o6 = r7.a) < 1 ? "device-cmyk(" + n7 + "% " + t6 + "% " + u6 + "% " + c4 + "% / " + o6 + ")" : "device-cmyk(" + n7 + "% " + t6 + "% " + u6 + "% " + c4 + "%)";
    var r7, n7, t6, u6, c4, o6;
  }, n6.object.push([o2, "cmyk"]), n6.string.push([a2, "cmyk"]);
}

// node_modules/colord/plugins/hwb.mjs
var r3 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t3 = function(r6) {
  return "string" == typeof r6 ? r6.length > 0 : "number" == typeof r6;
};
var n3 = function(r6, t6, n6) {
  return void 0 === t6 && (t6 = 0), void 0 === n6 && (n6 = Math.pow(10, t6)), Math.round(n6 * r6) / n6 + 0;
};
var u3 = function(r6, t6, n6) {
  return void 0 === t6 && (t6 = 0), void 0 === n6 && (n6 = 1), r6 > n6 ? n6 : r6 > t6 ? r6 : t6;
};
var a3 = function(r6) {
  return { h: (t6 = r6.h, (t6 = isFinite(t6) ? t6 % 360 : 0) > 0 ? t6 : t6 + 360), w: u3(r6.w, 0, 100), b: u3(r6.b, 0, 100), a: u3(r6.a) };
  var t6;
};
var e3 = function(r6) {
  return { h: n3(r6.h), w: n3(r6.w), b: n3(r6.b), a: n3(r6.a, 3) };
};
var b2 = function(r6) {
  return { h: function(r7) {
    var t6 = r7.r, n6 = r7.g, u6 = r7.b, a6 = r7.a, e6 = Math.max(t6, n6, u6), b5 = e6 - Math.min(t6, n6, u6), o6 = b5 ? e6 === t6 ? (n6 - u6) / b5 : e6 === n6 ? 2 + (u6 - t6) / b5 : 4 + (t6 - n6) / b5 : 0;
    return { h: 60 * (o6 < 0 ? o6 + 6 : o6), s: e6 ? b5 / e6 * 100 : 0, v: e6 / 255 * 100, a: a6 };
  }(r6).h, w: Math.min(r6.r, r6.g, r6.b) / 255 * 100, b: 100 - Math.max(r6.r, r6.g, r6.b) / 255 * 100, a: r6.a };
};
var o3 = function(r6) {
  return function(r7) {
    var t6 = r7.h, n6 = r7.s, u6 = r7.v, a6 = r7.a;
    t6 = t6 / 360 * 6, n6 /= 100, u6 /= 100;
    var e6 = Math.floor(t6), b5 = u6 * (1 - n6), o6 = u6 * (1 - (t6 - e6) * n6), i6 = u6 * (1 - (1 - t6 + e6) * n6), h5 = e6 % 6;
    return { r: 255 * [u6, o6, b5, b5, i6, u6][h5], g: 255 * [i6, u6, u6, o6, b5, b5][h5], b: 255 * [b5, b5, i6, u6, u6, o6][h5], a: a6 };
  }({ h: r6.h, s: 100 === r6.b ? 0 : 100 - r6.w / (100 - r6.b) * 100, v: 100 - r6.b, a: r6.a });
};
var i3 = function(r6) {
  var n6 = r6.h, u6 = r6.w, e6 = r6.b, b5 = r6.a, i6 = void 0 === b5 ? 1 : b5;
  if (!t3(n6) || !t3(u6) || !t3(e6)) return null;
  var h5 = a3({ h: Number(n6), w: Number(u6), b: Number(e6), a: Number(i6) });
  return o3(h5);
};
var h2 = /^hwb\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var d2 = function(t6) {
  var n6 = h2.exec(t6);
  if (!n6) return null;
  var u6, e6, b5 = a3({ h: (u6 = n6[1], e6 = n6[2], void 0 === e6 && (e6 = "deg"), Number(u6) * (r3[e6] || 1)), w: Number(n6[3]), b: Number(n6[4]), a: void 0 === n6[5] ? 1 : Number(n6[5]) / (n6[6] ? 100 : 1) });
  return o3(b5);
};
function hwb_default(r6, t6) {
  r6.prototype.toHwb = function() {
    return e3(b2(this.rgba));
  }, r6.prototype.toHwbString = function() {
    return r7 = e3(b2(this.rgba)), t7 = r7.h, n6 = r7.w, u6 = r7.b, (a6 = r7.a) < 1 ? "hwb(" + t7 + " " + n6 + "% " + u6 + "% / " + a6 + ")" : "hwb(" + t7 + " " + n6 + "% " + u6 + "%)";
    var r7, t7, n6, u6, a6;
  }, t6.string.push([d2, "hwb"]), t6.object.push([i3, "hwb"]);
}

// node_modules/colord/plugins/lab.mjs
var a4 = function(a6) {
  return "string" == typeof a6 ? a6.length > 0 : "number" == typeof a6;
};
var t4 = function(a6, t6, o6) {
  return void 0 === t6 && (t6 = 0), void 0 === o6 && (o6 = Math.pow(10, t6)), Math.round(o6 * a6) / o6 + 0;
};
var o4 = function(a6, t6, o6) {
  return void 0 === t6 && (t6 = 0), void 0 === o6 && (o6 = 1), a6 > o6 ? o6 : a6 > t6 ? a6 : t6;
};
var r4 = function(a6) {
  var t6 = a6 / 255;
  return t6 < 0.04045 ? t6 / 12.92 : Math.pow((t6 + 0.055) / 1.055, 2.4);
};
var h3 = function(a6) {
  return 255 * (a6 > 31308e-7 ? 1.055 * Math.pow(a6, 1 / 2.4) - 0.055 : 12.92 * a6);
};
var n4 = 96.422;
var p2 = 100;
var M2 = 82.521;
var u4 = function(a6) {
  var t6, r6, n6 = { x: 0.9555766 * (t6 = a6).x + -0.0230393 * t6.y + 0.0631636 * t6.z, y: -0.0282895 * t6.x + 1.0099416 * t6.y + 0.0210077 * t6.z, z: 0.0122982 * t6.x + -0.020483 * t6.y + 1.3299098 * t6.z };
  return r6 = { r: h3(0.032404542 * n6.x - 0.015371385 * n6.y - 4985314e-9 * n6.z), g: h3(-969266e-8 * n6.x + 0.018760108 * n6.y + 41556e-8 * n6.z), b: h3(556434e-9 * n6.x - 2040259e-9 * n6.y + 0.010572252 * n6.z), a: a6.a }, { r: o4(r6.r, 0, 255), g: o4(r6.g, 0, 255), b: o4(r6.b, 0, 255), a: o4(r6.a) };
};
var e4 = function(a6) {
  var t6 = r4(a6.r), h5 = r4(a6.g), u6 = r4(a6.b);
  return function(a7) {
    return { x: o4(a7.x, 0, n4), y: o4(a7.y, 0, p2), z: o4(a7.z, 0, M2), a: o4(a7.a) };
  }(function(a7) {
    return { x: 1.0478112 * a7.x + 0.0228866 * a7.y + -0.050127 * a7.z, y: 0.0295424 * a7.x + 0.9904844 * a7.y + -0.0170491 * a7.z, z: -92345e-7 * a7.x + 0.0150436 * a7.y + 0.7521316 * a7.z, a: a7.a };
  }({ x: 100 * (0.4124564 * t6 + 0.3575761 * h5 + 0.1804375 * u6), y: 100 * (0.2126729 * t6 + 0.7151522 * h5 + 0.072175 * u6), z: 100 * (0.0193339 * t6 + 0.119192 * h5 + 0.9503041 * u6), a: a6.a }));
};
var w2 = 216 / 24389;
var b3 = 24389 / 27;
var i4 = function(t6) {
  var r6 = t6.l, h5 = t6.a, n6 = t6.b, p4 = t6.alpha, M4 = void 0 === p4 ? 1 : p4;
  if (!a4(r6) || !a4(h5) || !a4(n6)) return null;
  var u6 = function(a6) {
    return { l: o4(a6.l, 0, 400), a: a6.a, b: a6.b, alpha: o4(a6.alpha) };
  }({ l: Number(r6), a: Number(h5), b: Number(n6), alpha: Number(M4) });
  return l2(u6);
};
var l2 = function(a6) {
  var t6 = (a6.l + 16) / 116, o6 = a6.a / 500 + t6, r6 = t6 - a6.b / 200;
  return u4({ x: (Math.pow(o6, 3) > w2 ? Math.pow(o6, 3) : (116 * o6 - 16) / b3) * n4, y: (a6.l > 8 ? Math.pow((a6.l + 16) / 116, 3) : a6.l / b3) * p2, z: (Math.pow(r6, 3) > w2 ? Math.pow(r6, 3) : (116 * r6 - 16) / b3) * M2, a: a6.alpha });
};
function lab_default(a6, r6) {
  a6.prototype.toLab = function() {
    return o6 = e4(this.rgba), h5 = o6.y / p2, u6 = o6.z / M2, r7 = (r7 = o6.x / n4) > w2 ? Math.cbrt(r7) : (b3 * r7 + 16) / 116, a7 = { l: 116 * (h5 = h5 > w2 ? Math.cbrt(h5) : (b3 * h5 + 16) / 116) - 16, a: 500 * (r7 - h5), b: 200 * (h5 - (u6 = u6 > w2 ? Math.cbrt(u6) : (b3 * u6 + 16) / 116)), alpha: o6.a }, { l: t4(a7.l, 2), a: t4(a7.a, 2), b: t4(a7.b, 2), alpha: t4(a7.alpha, 3) };
    var a7, o6, r7, h5, u6;
  }, a6.prototype.delta = function(r7) {
    void 0 === r7 && (r7 = "#FFF");
    var h5 = r7 instanceof a6 ? r7 : new a6(r7), n6 = function(a7, t6) {
      var o6 = a7.l, r8 = a7.a, h6 = a7.b, n7 = t6.l, p4 = t6.a, M4 = t6.b, u6 = 180 / Math.PI, e6 = Math.PI / 180, w3 = Math.pow(Math.pow(r8, 2) + Math.pow(h6, 2), 0.5), b5 = Math.pow(Math.pow(p4, 2) + Math.pow(M4, 2), 0.5), i6 = (o6 + n7) / 2, l4 = Math.pow((w3 + b5) / 2, 7), c4 = 0.5 * (1 - Math.pow(l4 / (l4 + Math.pow(25, 7)), 0.5)), f3 = r8 * (1 + c4), y3 = p4 * (1 + c4), v3 = Math.pow(Math.pow(f3, 2) + Math.pow(h6, 2), 0.5), x3 = Math.pow(Math.pow(y3, 2) + Math.pow(M4, 2), 0.5), z = (v3 + x3) / 2, s3 = 0 === f3 && 0 === h6 ? 0 : Math.atan2(h6, f3) * u6, d4 = 0 === y3 && 0 === M4 ? 0 : Math.atan2(M4, y3) * u6;
      s3 < 0 && (s3 += 360), d4 < 0 && (d4 += 360);
      var g2 = d4 - s3, m3 = Math.abs(d4 - s3);
      m3 > 180 && d4 <= s3 ? g2 += 360 : m3 > 180 && d4 > s3 && (g2 -= 360);
      var N2 = s3 + d4;
      m3 <= 180 ? N2 /= 2 : N2 = (s3 + d4 < 360 ? N2 + 360 : N2 - 360) / 2;
      var F = 1 - 0.17 * Math.cos(e6 * (N2 - 30)) + 0.24 * Math.cos(2 * e6 * N2) + 0.32 * Math.cos(e6 * (3 * N2 + 6)) - 0.2 * Math.cos(e6 * (4 * N2 - 63)), L = n7 - o6, I = x3 - v3, P = 2 * Math.sin(e6 * g2 / 2) * Math.pow(v3 * x3, 0.5), j2 = 1 + 0.015 * Math.pow(i6 - 50, 2) / Math.pow(20 + Math.pow(i6 - 50, 2), 0.5), k2 = 1 + 0.045 * z, q = 1 + 0.015 * z * F, A = 30 * Math.exp(-1 * Math.pow((N2 - 275) / 25, 2)), B = -2 * Math.pow(l4 / (l4 + Math.pow(25, 7)), 0.5) * Math.sin(2 * e6 * A);
      return Math.pow(Math.pow(L / 1 / j2, 2) + Math.pow(I / 1 / k2, 2) + Math.pow(P / 1 / q, 2) + B * I * P / (1 * k2 * 1 * q), 0.5);
    }(this.toLab(), h5.toLab()) / 100;
    return o4(t4(n6, 3));
  }, r6.object.push([i4, "lab"]);
}

// node_modules/colord/plugins/lch.mjs
var r5 = { grad: 0.9, turn: 360, rad: 360 / (2 * Math.PI) };
var t5 = function(r6) {
  return "string" == typeof r6 ? r6.length > 0 : "number" == typeof r6;
};
var a5 = function(r6, t6, a6) {
  return void 0 === t6 && (t6 = 0), void 0 === a6 && (a6 = Math.pow(10, t6)), Math.round(a6 * r6) / a6 + 0;
};
var n5 = function(r6, t6, a6) {
  return void 0 === t6 && (t6 = 0), void 0 === a6 && (a6 = 1), r6 > a6 ? a6 : r6 > t6 ? r6 : t6;
};
var u5 = function(r6) {
  var t6 = r6 / 255;
  return t6 < 0.04045 ? t6 / 12.92 : Math.pow((t6 + 0.055) / 1.055, 2.4);
};
var h4 = function(r6) {
  return 255 * (r6 > 31308e-7 ? 1.055 * Math.pow(r6, 1 / 2.4) - 0.055 : 12.92 * r6);
};
var o5 = 96.422;
var e5 = 100;
var c3 = 82.521;
var i5 = function(r6) {
  var t6, a6, u6 = { x: 0.9555766 * (t6 = r6).x + -0.0230393 * t6.y + 0.0631636 * t6.z, y: -0.0282895 * t6.x + 1.0099416 * t6.y + 0.0210077 * t6.z, z: 0.0122982 * t6.x + -0.020483 * t6.y + 1.3299098 * t6.z };
  return a6 = { r: h4(0.032404542 * u6.x - 0.015371385 * u6.y - 4985314e-9 * u6.z), g: h4(-969266e-8 * u6.x + 0.018760108 * u6.y + 41556e-8 * u6.z), b: h4(556434e-9 * u6.x - 2040259e-9 * u6.y + 0.010572252 * u6.z), a: r6.a }, { r: n5(a6.r, 0, 255), g: n5(a6.g, 0, 255), b: n5(a6.b, 0, 255), a: n5(a6.a) };
};
var l3 = function(r6) {
  var t6 = u5(r6.r), a6 = u5(r6.g), h5 = u5(r6.b);
  return function(r7) {
    return { x: n5(r7.x, 0, o5), y: n5(r7.y, 0, e5), z: n5(r7.z, 0, c3), a: n5(r7.a) };
  }(function(r7) {
    return { x: 1.0478112 * r7.x + 0.0228866 * r7.y + -0.050127 * r7.z, y: 0.0295424 * r7.x + 0.9904844 * r7.y + -0.0170491 * r7.z, z: -92345e-7 * r7.x + 0.0150436 * r7.y + 0.7521316 * r7.z, a: r7.a };
  }({ x: 100 * (0.4124564 * t6 + 0.3575761 * a6 + 0.1804375 * h5), y: 100 * (0.2126729 * t6 + 0.7151522 * a6 + 0.072175 * h5), z: 100 * (0.0193339 * t6 + 0.119192 * a6 + 0.9503041 * h5), a: r6.a }));
};
var f2 = 216 / 24389;
var b4 = 24389 / 27;
var d3 = function(r6) {
  return { l: n5(r6.l, 0, 100), c: r6.c, h: (t6 = r6.h, (t6 = isFinite(t6) ? t6 % 360 : 0) > 0 ? t6 : t6 + 360), a: r6.a };
  var t6;
};
var p3 = function(r6) {
  return { l: a5(r6.l, 2), c: a5(r6.c, 2), h: a5(r6.h, 2), a: a5(r6.a, 3) };
};
var v2 = function(r6) {
  var a6 = r6.l, n6 = r6.c, u6 = r6.h, h5 = r6.a, o6 = void 0 === h5 ? 1 : h5;
  if (!t5(a6) || !t5(n6) || !t5(u6)) return null;
  var e6 = d3({ l: Number(a6), c: Number(n6), h: Number(u6), a: Number(o6) });
  return M3(e6);
};
var y2 = function(r6) {
  var t6 = function(r7) {
    var t7 = l3(r7), a6 = t7.x / o5, n7 = t7.y / e5, u7 = t7.z / c3;
    return a6 = a6 > f2 ? Math.cbrt(a6) : (b4 * a6 + 16) / 116, { l: 116 * (n7 = n7 > f2 ? Math.cbrt(n7) : (b4 * n7 + 16) / 116) - 16, a: 500 * (a6 - n7), b: 200 * (n7 - (u7 = u7 > f2 ? Math.cbrt(u7) : (b4 * u7 + 16) / 116)), alpha: t7.a };
  }(r6), n6 = a5(t6.a, 3), u6 = a5(t6.b, 3), h5 = Math.atan2(u6, n6) / Math.PI * 180;
  return { l: t6.l, c: Math.sqrt(n6 * n6 + u6 * u6), h: h5 < 0 ? h5 + 360 : h5, a: t6.alpha };
};
var M3 = function(r6) {
  return t6 = { l: r6.l, a: r6.c * Math.cos(r6.h * Math.PI / 180), b: r6.c * Math.sin(r6.h * Math.PI / 180), alpha: r6.a }, n6 = t6.a / 500 + (a6 = (t6.l + 16) / 116), u6 = a6 - t6.b / 200, i5({ x: (Math.pow(n6, 3) > f2 ? Math.pow(n6, 3) : (116 * n6 - 16) / b4) * o5, y: (t6.l > 8 ? Math.pow((t6.l + 16) / 116, 3) : t6.l / b4) * e5, z: (Math.pow(u6, 3) > f2 ? Math.pow(u6, 3) : (116 * u6 - 16) / b4) * c3, a: t6.alpha });
  var t6, a6, n6, u6;
};
var x2 = /^lch\(\s*([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)\s+([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;
var s2 = function(t6) {
  var a6 = x2.exec(t6);
  if (!a6) return null;
  var n6, u6, h5 = d3({ l: Number(a6[1]), c: Number(a6[2]), h: (n6 = a6[3], u6 = a6[4], void 0 === u6 && (u6 = "deg"), Number(n6) * (r5[u6] || 1)), a: void 0 === a6[5] ? 1 : Number(a6[5]) / (a6[6] ? 100 : 1) });
  return M3(h5);
};
function lch_default(r6, t6) {
  r6.prototype.toLch = function() {
    return p3(y2(this.rgba));
  }, r6.prototype.toLchString = function() {
    return r7 = p3(y2(this.rgba)), t7 = r7.l, a6 = r7.c, n6 = r7.h, (u6 = r7.a) < 1 ? "lch(" + t7 + "% " + a6 + " " + n6 + " / " + u6 + ")" : "lch(" + t7 + "% " + a6 + " " + n6 + ")";
    var r7, t7, a6, n6, u6;
  }, t6.string.push([s2, "lch"]), t6.object.push([v2, "lch"]);
}

// node_modules/colord/plugins/names.mjs
function names_default(e6, f3) {
  var a6 = { white: "#ffffff", bisque: "#ffe4c4", blue: "#0000ff", cadetblue: "#5f9ea0", chartreuse: "#7fff00", chocolate: "#d2691e", coral: "#ff7f50", antiquewhite: "#faebd7", aqua: "#00ffff", azure: "#f0ffff", whitesmoke: "#f5f5f5", papayawhip: "#ffefd5", plum: "#dda0dd", blanchedalmond: "#ffebcd", black: "#000000", gold: "#ffd700", goldenrod: "#daa520", gainsboro: "#dcdcdc", cornsilk: "#fff8dc", cornflowerblue: "#6495ed", burlywood: "#deb887", aquamarine: "#7fffd4", beige: "#f5f5dc", crimson: "#dc143c", cyan: "#00ffff", darkblue: "#00008b", darkcyan: "#008b8b", darkgoldenrod: "#b8860b", darkkhaki: "#bdb76b", darkgray: "#a9a9a9", darkgreen: "#006400", darkgrey: "#a9a9a9", peachpuff: "#ffdab9", darkmagenta: "#8b008b", darkred: "#8b0000", darkorchid: "#9932cc", darkorange: "#ff8c00", darkslateblue: "#483d8b", gray: "#808080", darkslategray: "#2f4f4f", darkslategrey: "#2f4f4f", deeppink: "#ff1493", deepskyblue: "#00bfff", wheat: "#f5deb3", firebrick: "#b22222", floralwhite: "#fffaf0", ghostwhite: "#f8f8ff", darkviolet: "#9400d3", magenta: "#ff00ff", green: "#008000", dodgerblue: "#1e90ff", grey: "#808080", honeydew: "#f0fff0", hotpink: "#ff69b4", blueviolet: "#8a2be2", forestgreen: "#228b22", lawngreen: "#7cfc00", indianred: "#cd5c5c", indigo: "#4b0082", fuchsia: "#ff00ff", brown: "#a52a2a", maroon: "#800000", mediumblue: "#0000cd", lightcoral: "#f08080", darkturquoise: "#00ced1", lightcyan: "#e0ffff", ivory: "#fffff0", lightyellow: "#ffffe0", lightsalmon: "#ffa07a", lightseagreen: "#20b2aa", linen: "#faf0e6", mediumaquamarine: "#66cdaa", lemonchiffon: "#fffacd", lime: "#00ff00", khaki: "#f0e68c", mediumseagreen: "#3cb371", limegreen: "#32cd32", mediumspringgreen: "#00fa9a", lightskyblue: "#87cefa", lightblue: "#add8e6", midnightblue: "#191970", lightpink: "#ffb6c1", mistyrose: "#ffe4e1", moccasin: "#ffe4b5", mintcream: "#f5fffa", lightslategray: "#778899", lightslategrey: "#778899", navajowhite: "#ffdead", navy: "#000080", mediumvioletred: "#c71585", powderblue: "#b0e0e6", palegoldenrod: "#eee8aa", oldlace: "#fdf5e6", paleturquoise: "#afeeee", mediumturquoise: "#48d1cc", mediumorchid: "#ba55d3", rebeccapurple: "#663399", lightsteelblue: "#b0c4de", mediumslateblue: "#7b68ee", thistle: "#d8bfd8", tan: "#d2b48c", orchid: "#da70d6", mediumpurple: "#9370db", purple: "#800080", pink: "#ffc0cb", skyblue: "#87ceeb", springgreen: "#00ff7f", palegreen: "#98fb98", red: "#ff0000", yellow: "#ffff00", slateblue: "#6a5acd", lavenderblush: "#fff0f5", peru: "#cd853f", palevioletred: "#db7093", violet: "#ee82ee", teal: "#008080", slategray: "#708090", slategrey: "#708090", aliceblue: "#f0f8ff", darkseagreen: "#8fbc8f", darkolivegreen: "#556b2f", greenyellow: "#adff2f", seagreen: "#2e8b57", seashell: "#fff5ee", tomato: "#ff6347", silver: "#c0c0c0", sienna: "#a0522d", lavender: "#e6e6fa", lightgreen: "#90ee90", orange: "#ffa500", orangered: "#ff4500", steelblue: "#4682b4", royalblue: "#4169e1", turquoise: "#40e0d0", yellowgreen: "#9acd32", salmon: "#fa8072", saddlebrown: "#8b4513", sandybrown: "#f4a460", rosybrown: "#bc8f8f", darksalmon: "#e9967a", lightgoldenrodyellow: "#fafad2", snow: "#fffafa", lightgrey: "#d3d3d3", lightgray: "#d3d3d3", dimgray: "#696969", dimgrey: "#696969", olivedrab: "#6b8e23", olive: "#808000" }, r6 = {};
  for (var d4 in a6) r6[a6[d4]] = d4;
  var l4 = {};
  e6.prototype.toName = function(f4) {
    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
    var d5, i6, n6 = r6[this.toHex()];
    if (n6) return n6;
    if (null == f4 ? void 0 : f4.closest) {
      var o6 = this.toRgb(), t6 = 1 / 0, b5 = "black";
      if (!l4.length) for (var c4 in a6) l4[c4] = new e6(a6[c4]).toRgb();
      for (var g2 in a6) {
        var u6 = (d5 = o6, i6 = l4[g2], Math.pow(d5.r - i6.r, 2) + Math.pow(d5.g - i6.g, 2) + Math.pow(d5.b - i6.b, 2));
        u6 < t6 && (t6 = u6, b5 = g2);
      }
      return b5;
    }
  };
  f3.string.push([function(f4) {
    var r7 = f4.toLowerCase(), d5 = "transparent" === r7 ? "#0000" : a6[r7];
    return d5 ? new e6(d5).toRgb() : null;
  }, "name"]);
}

// image.ts
var import_promises = __toESM(require("node:fs/promises"));
var import_node_path = __toESM(require("node:path"));
function generateSVG(color, width, height) {
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${color}"/>
</svg>
`;
}
async function saveIfNotExists(name, data) {
  const dir = process.env.TMPDIR || "/tmp";
  const fullPath = import_node_path.default.join(dir, name);
  try {
    await import_promises.default.access(fullPath, import_promises.default.constants.F_OK);
    return fullPath;
  } catch (err) {
  }
  try {
    await import_promises.default.writeFile(fullPath, data);
    return fullPath;
  } catch (err) {
  }
  return "";
}

// converter.ts
k([names_default, cmyk_default, hwb_default, lab_default, lch_default]);
var OUTPUTS = [
  "HEX",
  //
  "RGB",
  "HSL",
  "Closest CSS Name",
  "HWB",
  "CMYK",
  "LCH"
];
var convFns = {
  HEX: (c4) => c4.toHex(),
  RGB: (c4) => c4.toRgbString(),
  HSL: (c4) => c4.toHslString(),
  "Closest CSS Name": (c4) => c4.toName({ closest: true }),
  HWB: (c4) => c4.toHwbString(),
  CMYK: (c4) => c4.toCmykString(),
  LCH: (c4) => c4.toLchString()
};
function printEntries(entries) {
  console.log(JSON.stringify(entries));
}
async function convert(input2) {
  if (!input2) {
    return [];
  }
  const col = w(input2);
  if (!col.isValid()) {
    return [{ label: "incorrect format", searchable: input2 }];
  }
  const svg = generateSVG(col.toHex(), 100, 100);
  const imagePath = await saveIfNotExists(`walker-colors_${col.toHex().slice(1)}.svg`, svg);
  let entries = [];
  for (const format of OUTPUTS) {
    const fn = convFns[format];
    const converted = fn(col);
    if (!converted) continue;
    const entry = {
      label: converted,
      sub: format,
      searchable: input2,
      exec: `wl-copy '${converted}'`,
      icon: imagePath
    };
    entries.push(entry);
  }
  return entries;
}
var args = process.argv.slice(2);
var input = args[0];
if (!input) {
  printEntries([]);
  process.exit();
}
convert(input).then(printEntries);
