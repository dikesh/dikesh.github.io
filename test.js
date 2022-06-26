var Ia = Object.defineProperty
  , da = Object.defineProperties;
var fa = Object.getOwnPropertyDescriptors;
var ei = Object.getOwnPropertySymbols;
var Ta = Object.prototype.hasOwnProperty
  , La = Object.prototype.propertyIsEnumerable;
var ti = (e, t, n) => t in e ? Ia(e, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : e[t] = n
  , Me = (e, t) => {
    for (var n in t || (t = {}))
      Ta.call(t, n) && ti(e, n, t[n]);
    if (ei)
      for (var n of ei(t))
        La.call(t, n) && ti(e, n, t[n]);
    return e
  }
  , ct = (e, t) => da(e, fa(t));
var Na = (e, t) => () => (t || e((t = {
  exports: {}
}).exports, t),
  t.exports);
var rn = (e, t, n) => new Promise((r, i) => {
  var o = l => {
    try {
      a(n.next(l))
    } catch (E) {
      i(E)
    }
  }
    , S = l => {
      try {
        a(n.throw(l))
      } catch (E) {
        i(E)
      }
    }
    , a = l => l.done ? r(l.value) : Promise.resolve(l.value).then(o, S);
  a((n = n.apply(e, t)).next())
}
);
var Sd = Na(jr => {
  const Ca = function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
      return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
      r(i);
    new MutationObserver(i => {
      for (const o of i)
        if (o.type === "childList")
          for (const S of o.addedNodes)
            S.tagName === "LINK" && S.rel === "modulepreload" && r(S)
    }
    ).observe(document, {
      childList: !0,
      subtree: !0
    });
    function n(i) {
      const o = {};
      return i.integrity && (o.integrity = i.integrity),
        i.referrerpolicy && (o.referrerPolicy = i.referrerpolicy),
        i.crossorigin === "use-credentials" ? o.credentials = "include" : i.crossorigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin",
        o
    }
    function r(i) {
      if (i.ep)
        return;
      i.ep = !0;
      const o = n(i);
      fetch(i.href, o)
    }
  };
  Ca();
  const ge = {};
  function Da(e) {
    ge.context = e
  }
  const ha = (e, t) => e === t
    , Et = Symbol("solid-proxy")
    , vn = {
      equals: ha
    };
  let Ao = Io;
  const Dt = {}
    , qe = 1
    , Un = 2
    , co = {
      owned: null,
      cleanups: null,
      context: null,
      owner: null
    }
    , [va, Ed] = J(!1);
  var oe = null;
  let jt = null
    , le = null
    , Ft = null
    , Ce = null
    , be = null
    , Br = 0;
  function uo(e, t) {
    const n = le
      , r = oe
      , i = e.length === 0 ? co : {
        owned: null,
        cleanups: null,
        context: null,
        owner: t || r
      };
    oe = i,
      le = null;
    try {
      return xn(() => e(() => br(i)), !0)
    } finally {
      le = n,
        oe = r
    }
  }
  function J(e, t) {
    t = t ? Object.assign({}, vn, t) : vn;
    const n = {
      value: e,
      observers: null,
      observerSlots: null,
      pending: Dt,
      comparator: t.equals || void 0
    }
      , r = i => (typeof i == "function" && (i = i(n.pending !== Dt ? n.pending : n.value)),
        Gr(n, i));
    return [Ro.bind(n), r]
  }
  function pn(e, t, n) {
    const r = Fn(e, t, !0, qe);
    Pt(r)
  }
  function H(e, t, n) {
    const r = Fn(e, t, !1, qe);
    Pt(r)
  }
  function se(e, t, n) {
    Ao = Ya;
    const r = Fn(e, t, !1, qe);
    r.user = !0,
      be ? be.push(r) : queueMicrotask(() => Pt(r))
  }
  function Y(e, t, n) {
    n = n ? Object.assign({}, vn, n) : vn;
    const r = Fn(e, t, !0, 0);
    return r.pending = Dt,
      r.observers = null,
      r.observerSlots = null,
      r.comparator = n.equals || void 0,
      Pt(r),
      Ro.bind(r)
  }
  function Kn(e) {
    if (Ft)
      return e();
    let t;
    const n = Ft = [];
    try {
      t = e()
    } finally {
      Ft = null
    }
    return xn(() => {
      for (let r = 0; r < n.length; r += 1) {
        const i = n[r];
        if (i.pending !== Dt) {
          const o = i.pending;
          i.pending = Dt,
            Gr(i, o)
        }
      }
    }
      , !1),
      t
  }
  function Ke(e) {
    let t, n = le;
    return le = null,
      t = e(),
      le = n,
      t
  }
  function xt(e, t, n) {
    const r = Array.isArray(e);
    let i, o = n && n.defer;
    return S => {
      let a;
      if (r) {
        a = Array(e.length);
        for (let E = 0; E < e.length; E++)
          a[E] = e[E]()
      } else
        a = e();
      if (o) {
        o = !1;
        return
      }
      const l = Ke(() => t(a, i, S));
      return i = a,
        l
    }
  }
  function we(e) {
    return oe === null || (oe.cleanups === null ? oe.cleanups = [e] : oe.cleanups.push(e)),
      e
  }
  function Oo() {
    return le
  }
  function Ua() {
    return oe
  }
  function ga(e, t) {
    const n = oe;
    oe = e;
    try {
      return xn(t, !0)
    } finally {
      oe = n
    }
  }
  function ma(e) {
    const t = le
      , n = oe;
    return Promise.resolve().then(() => {
      le = t,
        oe = n;
      let r;
      return Kn(e),
        r ? r.done : void 0
    }
    )
  }
  function Pa() {
    return [va, ma]
  }
  function wn(e) {
    const t = Symbol("context");
    return {
      id: t,
      Provider: Ba(t),
      defaultValue: e
    }
  }
  function st(e) {
    let t;
    return (t = Lo(oe, e.id)) !== void 0 ? t : e.defaultValue
  }
  function Hr(e) {
    const t = Y(e);
    return Y(() => Rr(t()))
  }
  function Ro() {
    const e = jt;
    if (this.sources && (this.state || e)) {
      const t = Ce;
      Ce = null,
        this.state === qe || e ? Pt(this) : gn(this),
        Ce = t
    }
    if (le) {
      const t = this.observers ? this.observers.length : 0;
      le.sources ? (le.sources.push(this),
        le.sourceSlots.push(t)) : (le.sources = [this],
          le.sourceSlots = [t]),
        this.observers ? (this.observers.push(le),
          this.observerSlots.push(le.sources.length - 1)) : (this.observers = [le],
            this.observerSlots = [le.sources.length - 1])
    }
    return this.value
  }
  function Gr(e, t, n) {
    if (Ft)
      return e.pending === Dt && Ft.push(e),
        e.pending = t,
        t;
    if (e.comparator && e.comparator(e.value, t))
      return t;
    let r = !1;
    return e.value = t,
      e.observers && e.observers.length && xn(() => {
        for (let i = 0; i < e.observers.length; i += 1) {
          const o = e.observers[i];
          r && jt.disposed.has(o),
            (r && !o.tState || !r && !o.state) && (o.pure ? Ce.push(o) : be.push(o),
              o.observers && fo(o)),
            r || (o.state = qe)
        }
        if (Ce.length > 1e6)
          throw Ce = [],
          new Error
      }
        , !1),
      t
  }
  function Pt(e) {
    if (!e.fn)
      return;
    br(e);
    const t = oe
      , n = le
      , r = Br;
    le = oe = e,
      Ma(e, e.value, r),
      le = n,
      oe = t
  }
  function Ma(e, t, n) {
    let r;
    try {
      r = e.fn(t)
    } catch (i) {
      To(i)
    }
    (!e.updatedAt || e.updatedAt <= n) && (e.observers && e.observers.length ? Gr(e, r) : e.value = r,
      e.updatedAt = n)
  }
  function Fn(e, t, n, r = qe, i) {
    const o = {
      fn: e,
      state: r,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: t,
      owner: oe,
      context: null,
      pure: n
    };
    return oe === null || oe !== co && (oe.owned ? oe.owned.push(o) : oe.owned = [o]),
      o
  }
  function Wt(e) {
    const t = jt;
    if (e.state === 0 || t)
      return;
    if (e.state === Un || t)
      return gn(e);
    if (e.suspense && Ke(e.suspense.inFallback))
      return e.suspense.effects.push(e);
    const n = [e];
    for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < Br);)
      (e.state || t) && n.push(e);
    for (let r = n.length - 1; r >= 0; r--)
      if (e = n[r],
        e.state === qe || t)
        Pt(e);
      else if (e.state === Un || t) {
        const i = Ce;
        Ce = null,
          gn(e, n[0]),
          Ce = i
      }
  }
  function xn(e, t) {
    if (Ce)
      return e();
    let n = !1;
    t || (Ce = []),
      be ? n = !0 : be = [],
      Br++;
    try {
      return e()
    } catch (r) {
      To(r)
    } finally {
      ya(n)
    }
  }
  function ya(e) {
    Ce && (Io(Ce),
      Ce = null),
      !e && (be.length ? Kn(() => {
        Ao(be),
          be = null
      }
      ) : be = null)
  }
  function Io(e) {
    for (let t = 0; t < e.length; t++)
      Wt(e[t])
  }
  function Ya(e) {
    let t, n = 0;
    for (t = 0; t < e.length; t++) {
      const i = e[t];
      i.user ? e[n++] = i : Wt(i)
    }
    ge.context && Da();
    const r = e.length;
    for (t = 0; t < n; t++)
      Wt(e[t]);
    for (t = r; t < e.length; t++)
      Wt(e[t])
  }
  function gn(e, t) {
    const n = jt;
    e.state = 0;
    for (let r = 0; r < e.sources.length; r += 1) {
      const i = e.sources[r];
      i.sources && (i.state === qe || n ? i !== t && Wt(i) : (i.state === Un || n) && gn(i, t))
    }
  }
  function fo(e) {
    const t = jt;
    for (let n = 0; n < e.observers.length; n += 1) {
      const r = e.observers[n];
      (!r.state || t) && (r.state = Un,
        r.pure ? Ce.push(r) : be.push(r),
        r.observers && fo(r))
    }
  }
  function br(e) {
    let t;
    if (e.sources)
      for (; e.sources.length;) {
        const n = e.sources.pop()
          , r = e.sourceSlots.pop()
          , i = n.observers;
        if (i && i.length) {
          const o = i.pop()
            , S = n.observerSlots.pop();
          r < i.length && (o.sourceSlots[S] = r,
            i[r] = o,
            n.observerSlots[r] = S)
        }
      }
    if (e.owned) {
      for (t = 0; t < e.owned.length; t++)
        br(e.owned[t]);
      e.owned = null
    }
    if (e.cleanups) {
      for (t = 0; t < e.cleanups.length; t++)
        e.cleanups[t]();
      e.cleanups = null
    }
    e.state = 0,
      e.context = null
  }
  function To(e) {
    throw e
  }
  function Lo(e, t) {
    return e ? e.context && e.context[t] !== void 0 ? e.context[t] : Lo(e.owner, t) : void 0
  }
  function Rr(e) {
    if (typeof e == "function" && !e.length)
      return Rr(e());
    if (Array.isArray(e)) {
      const t = [];
      for (let n = 0; n < e.length; n++) {
        const r = Rr(e[n]);
        Array.isArray(r) ? t.push.apply(t, r) : t.push(r)
      }
      return t
    }
    return e
  }
  function Ba(e) {
    return function (n) {
      let r;
      return pn(() => r = Ke(() => (oe.context = {
        [e]: n.value
      },
        Hr(() => n.children)))),
        r
    }
  }
  function g(e, t) {
    return Ke(() => e(t))
  }
  function on() {
    return !0
  }
  const No = {
    get(e, t, n) {
      return t === Et ? n : e.get(t)
    },
    has(e, t) {
      return e.has(t)
    },
    set: on,
    deleteProperty: on,
    getOwnPropertyDescriptor(e, t) {
      return {
        configurable: !0,
        enumerable: !0,
        get() {
          return e.get(t)
        },
        set: on,
        deleteProperty: on
      }
    },
    ownKeys(e) {
      return e.keys()
    }
  };
  function Jn(e) {
    return typeof e == "function" ? e() : e
  }
  function Zt(...e) {
    return new Proxy({
      get(t) {
        for (let n = e.length - 1; n >= 0; n--) {
          const r = Jn(e[n])[t];
          if (r !== void 0)
            return r
        }
      },
      has(t) {
        for (let n = e.length - 1; n >= 0; n--)
          if (t in Jn(e[n]))
            return !0;
        return !1
      },
      keys() {
        const t = [];
        for (let n = 0; n < e.length; n++)
          t.push(...Object.keys(Jn(e[n])));
        return [...new Set(t)]
      }
    }, No)
  }
  function Co(e, ...t) {
    const n = new Set(t.flat())
      , r = Object.getOwnPropertyDescriptors(e)
      , i = t.map(o => {
        const S = {};
        for (let a = 0; a < o.length; a++) {
          const l = o[a];
          Object.defineProperty(S, l, r[l] ? r[l] : {
            get() {
              return e[l]
            },
            set() {
              return !0
            }
          })
        }
        return S
      }
      );
    return i.push(new Proxy({
      get(o) {
        return n.has(o) ? void 0 : e[o]
      },
      has(o) {
        return n.has(o) ? !1 : o in e
      },
      keys() {
        return Object.keys(e).filter(o => !n.has(o))
      }
    }, No)),
      i
  }
  let Ha = 0;
  function Ga() {
    const e = ge.context;
    return e ? `${e.id}${e.count++}` : `cl-${Ha++}`
  }
  function Do(e) {
    let t = !1;
    const n = Y(() => e.when, void 0, {
      equals: (r, i) => t ? r === i : !r == !i
    });
    return Y(() => {
      const r = n();
      if (r) {
        const i = e.children;
        return (t = typeof i == "function" && i.length > 0) ? Ke(() => i(r)) : i
      }
      return e.fallback
    }
    )
  }
  const ba = ["allowfullscreen", "async", "autofocus", "autoplay", "checked", "controls", "default", "disabled", "formnovalidate", "hidden", "indeterminate", "ismap", "loop", "multiple", "muted", "nomodule", "novalidate", "open", "playsinline", "readonly", "required", "reversed", "seamless", "selected"]
    , pa = new Set(["className", "value", "readOnly", "formNoValidate", "isMap", "noModule", "playsInline", ...ba])
    , Ka = new Set(["innerHTML", "textContent", "innerText", "children"])
    , wa = {
      className: "class",
      htmlFor: "for"
    }
    , ni = {
      class: "className",
      formnovalidate: "formNoValidate",
      ismap: "isMap",
      nomodule: "noModule",
      playsinline: "playsInline",
      readonly: "readOnly"
    }
    , Fa = new Set(["beforeinput", "click", "dblclick", "contextmenu", "focusin", "focusout", "input", "keydown", "keyup", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "pointerdown", "pointermove", "pointerout", "pointerover", "pointerup", "touchend", "touchmove", "touchstart"])
    , xa = {
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace"
    };
  function X(e, t) {
    return Y(e, void 0, t ? void 0 : {
      equals: t
    })
  }
  function Wa(e, t, n) {
    let r = n.length
      , i = t.length
      , o = r
      , S = 0
      , a = 0
      , l = t[i - 1].nextSibling
      , E = null;
    for (; S < i || a < o;) {
      if (t[S] === n[a]) {
        S++,
          a++;
        continue
      }
      for (; t[i - 1] === n[o - 1];)
        i--,
          o--;
      if (i === S) {
        const s = o < r ? a ? n[a - 1].nextSibling : n[o - a] : l;
        for (; a < o;)
          e.insertBefore(n[a++], s)
      } else if (o === a)
        for (; S < i;)
          (!E || !E.has(t[S])) && t[S].remove(),
            S++;
      else if (t[S] === n[o - 1] && n[a] === t[i - 1]) {
        const s = t[--i].nextSibling;
        e.insertBefore(n[a++], t[S++].nextSibling),
          e.insertBefore(n[--o], s),
          t[i] = n[o]
      } else {
        if (!E) {
          E = new Map;
          let u = a;
          for (; u < o;)
            E.set(n[u], u++)
        }
        const s = E.get(t[S]);
        if (s != null)
          if (a < s && s < o) {
            let u = S, c = 1, A;
            for (; ++u < i && u < o && !((A = E.get(t[u])) == null || A !== s + c);)
              c++;
            if (c > s - a) {
              const R = t[S];
              for (; a < s;)
                e.insertBefore(n[a++], R)
            } else
              e.replaceChild(n[a++], t[S++])
          } else
            S++;
        else
          t[S++].remove()
      }
    }
  }
  const ri = "_$DX_DELEGATE";
  function _a(e, t, n) {
    let r;
    return uo(i => {
      r = i,
        t === document ? e() : O(t, e(), t.firstChild ? null : void 0, n)
    }
    ),
      () => {
        r(),
          t.textContent = ""
      }
  }
  function y(e, t, n) {
    const r = document.createElement("template");
    r.innerHTML = e;
    let i = r.content.firstChild;
    return n && (i = i.firstChild),
      i
  }
  function Ye(e, t = window.document) {
    const n = t[ri] || (t[ri] = new Set);
    for (let r = 0, i = e.length; r < i; r++) {
      const o = e[r];
      n.has(o) || (n.add(o),
        t.addEventListener(o, Za))
    }
  }
  function M(e, t, n) {
    n == null ? e.removeAttribute(t) : e.setAttribute(t, n)
  }
  function $a(e, t, n, r) {
    r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r)
  }
  function fe(e, t, n, r) {
    r ? Array.isArray(n) ? (e[`$$${t}`] = n[0],
      e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n : Array.isArray(n) ? e.addEventListener(t, i => n[0](n[1], i)) : e.addEventListener(t, n)
  }
  function ye(e, t, n = {}) {
    const r = Object.keys(t || {})
      , i = Object.keys(n);
    let o, S;
    for (o = 0,
      S = i.length; o < S; o++) {
      const a = i[o];
      !a || a === "undefined" || t[a] || (ii(e, a, !1),
        delete n[a])
    }
    for (o = 0,
      S = r.length; o < S; o++) {
      const a = r[o]
        , l = !!t[a];
      !a || a === "undefined" || n[a] === l || !l || (ii(e, a, !0),
        n[a] = l)
    }
    return n
  }
  function ho(e, t, n = {}) {
    const r = e.style
      , i = typeof n == "string";
    if (t == null && i || typeof t == "string")
      return r.cssText = t;
    i && (r.cssText = void 0,
      n = {}),
      t || (t = {});
    let o, S;
    for (S in n)
      t[S] == null && r.removeProperty(S),
        delete n[S];
    for (S in t)
      o = t[S],
        o !== n[S] && (r.setProperty(S, o),
          n[S] = o);
    return n
  }
  function Be(e, t, n, r) {
    typeof t == "function" ? H(i => Si(e, t(), i, n, r)) : Si(e, t, void 0, n, r)
  }
  function O(e, t, n, r) {
    if (n !== void 0 && !r && (r = []),
      typeof t != "function")
      return ht(e, t, r, n);
    H(i => ht(e, t(), i, n), r)
  }
  function ka(e, t, n, r, i = {}, o = !1) {
    t || (t = {});
    for (const S in i)
      if (!(S in t)) {
        if (S === "children")
          continue;
        oi(e, S, null, i[S], n, o)
      }
    for (const S in t) {
      if (S === "children") {
        r || ht(e, t.children);
        continue
      }
      const a = t[S];
      i[S] = oi(e, S, a, i[S], n, o)
    }
  }
  function Va(e) {
    return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase())
  }
  function ii(e, t, n) {
    const r = t.trim().split(/\s+/);
    for (let i = 0, o = r.length; i < o; i++)
      e.classList.toggle(r[i], n)
  }
  function oi(e, t, n, r, i, o) {
    let S, a, l;
    if (t === "style")
      return ho(e, n, r);
    if (t === "classList")
      return ye(e, n, r);
    if (n === r)
      return r;
    if (t === "ref")
      o || n(e);
    else if (t.slice(0, 3) === "on:")
      e.addEventListener(t.slice(3), n);
    else if (t.slice(0, 10) === "oncapture:")
      e.addEventListener(t.slice(10), n, !0);
    else if (t.slice(0, 2) === "on") {
      const E = t.slice(2).toLowerCase()
        , s = Fa.has(E);
      fe(e, E, n, s),
        s && Ye([E])
    } else if ((l = Ka.has(t)) || !i && (ni[t] || (a = pa.has(t))) || (S = e.nodeName.includes("-")))
      S && !a && !l ? e[Va(t)] = n : e[ni[t] || t] = n;
    else {
      const E = i && t.indexOf(":") > -1 && xa[t.split(":")[0]];
      E ? $a(e, E, t, n) : M(e, wa[t] || t, n)
    }
    return n
  }
  function Za(e) {
    const t = `$$${e.type}`;
    let n = e.composedPath && e.composedPath()[0] || e.target;
    for (e.target !== n && Object.defineProperty(e, "target", {
      configurable: !0,
      value: n
    }),
      Object.defineProperty(e, "currentTarget", {
        configurable: !0,
        get() {
          return n || document
        }
      }),
      ge.registry && !ge.done && (ge.done = !0,
        document.querySelectorAll("[id^=pl-]").forEach(r => r.remove())); n !== null;) {
      const r = n[t];
      if (r && !n.disabled) {
        const i = n[`${t}Data`];
        if (i !== void 0 ? r(i, e) : r(e),
          e.cancelBubble)
          return
      }
      n = n.host && n.host !== n && n.host instanceof Node ? n.host : n.parentNode
    }
  }
  function Si(e, t, n = {}, r, i) {
    return t || (t = {}),
      !i && "children" in t && H(() => n.children = ht(e, t.children, n.children)),
      t.ref && t.ref(e),
      H(() => ka(e, t, r, !0, n, !0)),
      n
  }
  function ht(e, t, n, r, i) {
    for (ge.context && !n && (n = [...e.childNodes]); typeof n == "function";)
      n = n();
    if (t === n)
      return n;
    const o = typeof t
      , S = r !== void 0;
    if (e = S && n[0] && n[0].parentNode || e,
      o === "string" || o === "number") {
      if (ge.context)
        return n;
      if (o === "number" && (t = t.toString()),
        S) {
        let a = n[0];
        a && a.nodeType === 3 ? a.data = t : a = document.createTextNode(t),
          n = ut(e, n, r, a)
      } else
        n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t
    } else if (t == null || o === "boolean") {
      if (ge.context)
        return n;
      n = ut(e, n, r)
    } else {
      if (o === "function")
        return H(() => {
          let a = t();
          for (; typeof a == "function";)
            a = a();
          n = ht(e, a, n, r)
        }
        ),
          () => n;
      if (Array.isArray(t)) {
        const a = [];
        if (Ir(a, t, i))
          return H(() => n = ht(e, a, n, r, !0)),
            () => n;
        if (ge.context) {
          for (let l = 0; l < a.length; l++)
            if (a[l].parentNode)
              return n = a
        }
        if (a.length === 0) {
          if (n = ut(e, n, r),
            S)
            return n
        } else
          Array.isArray(n) ? n.length === 0 ? ai(e, a, r) : Wa(e, n, a) : (n && ut(e),
            ai(e, a));
        n = a
      } else if (t instanceof Node) {
        if (ge.context && t.parentNode)
          return n = S ? [t] : t;
        if (Array.isArray(n)) {
          if (S)
            return n = ut(e, n, r, t);
          ut(e, n, null, t)
        } else
          n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
        n = t
      }
    }
    return n
  }
  function Ir(e, t, n) {
    let r = !1;
    for (let i = 0, o = t.length; i < o; i++) {
      let S = t[i], a;
      if (S instanceof Node)
        e.push(S);
      else if (!(S == null || S === !0 || S === !1))
        if (Array.isArray(S))
          r = Ir(e, S) || r;
        else if ((a = typeof S) == "string")
          e.push(document.createTextNode(S));
        else if (a === "function")
          if (n) {
            for (; typeof S == "function";)
              S = S();
            r = Ir(e, Array.isArray(S) ? S : [S]) || r
          } else
            e.push(S),
              r = !0;
        else
          e.push(document.createTextNode(S.toString()))
    }
    return r
  }
  function ai(e, t, n) {
    for (let r = 0, i = t.length; r < i; r++)
      e.insertBefore(t[r], n)
  }
  function ut(e, t, n, r) {
    if (n === void 0)
      return e.textContent = "";
    const i = r || document.createTextNode("");
    if (t.length) {
      let o = !1;
      for (let S = t.length - 1; S >= 0; S--) {
        const a = t[S];
        if (i !== a) {
          const l = a.parentNode === e;
          !o && !S ? l ? e.replaceChild(i, a) : e.insertBefore(i, n) : l && a.remove()
        } else
          o = !0
      }
    } else
      e.insertBefore(i, n);
    return [i]
  }
  function vo(e, t, n) {
    return e.addEventListener(t, n),
      () => e.removeEventListener(t, n)
  }
  function Xa([e, t], n, r) {
    return [n ? () => n(e()) : e, r ? i => t(r(i)) : t]
  }
  function Uo(e, t) {
    const n = document.getElementById(e);
    n ? n.scrollIntoView() : t && window.scrollTo(0, 0)
  }
  function go(e, t, n, r) {
    let i = !1;
    const o = a => typeof a == "string" ? {
      value: a
    } : a
      , S = Xa(J(o(e()), {
        equals: (a, l) => a.value === l.value
      }), void 0, a => (!i && t(a),
        a));
    return n && we(n((a = e()) => {
      i = !0,
        S[1](o(a)),
        i = !1
    }
    )),
    {
      signal: S,
      utils: r
    }
  }
  function Ja(e) {
    if (e) {
      if (Array.isArray(e))
        return {
          signal: e
        }
    } else
      return {
        signal: J({
          value: ""
        })
      };
    return e
  }
  function za() {
    return go(() => ({
      value: window.location.pathname + window.location.search + window.location.hash,
      state: history.state
    }), ({ value: e, replace: t, scroll: n, state: r }) => {
      t ? window.history.replaceState(r, "", e) : window.history.pushState(r, "", e),
        Uo(window.location.hash.slice(1), n)
    }
      , e => vo(window, "popstate", () => e()), {
      go: e => window.history.go(e)
    })
  }
  function Qa() {
    return go(() => window.location.hash.slice(1), ({ value: e, scroll: t }) => {
      window.location.hash = e;
      const n = e.indexOf("#")
        , r = n >= 0 ? e.slice(n + 1) : "";
      Uo(r, t)
    }
      , e => vo(window, "hashchange", () => e()), {
      go: e => window.history.go(e),
      renderPath: e => `#${e}`,
      parsePath: e => {
        const t = e.replace(/^.*?#/, "");
        if (!t.startsWith("/")) {
          const [, n = "/"] = window.location.hash.split("#", 2);
          return `${n}#${t}`
        }
        return t
      }
    })
  }
  const ja = /^(?:[a-z0-9]+:)?\/\//i
    , qa = /^\/+|\/+$|\s+/g;
  function _t(e) {
    const t = e.replace(qa, "");
    return t ? t.startsWith("?") ? t : "/" + t : ""
  }
  function Tn(e, t, n) {
    if (ja.test(t))
      return;
    const r = _t(e)
      , i = n && _t(n);
    let o = "";
    return !i || t.charAt(0) === "/" ? o = r : i.toLowerCase().indexOf(r.toLowerCase()) !== 0 ? o = r + i : o = i,
      o + _t(t) || "/"
  }
  function eE(e, t) {
    if (e == null)
      throw new Error(t);
    return e
  }
  function mo(e, t) {
    return _t(e).replace(/\/*(\*.*)?$/g, "") + _t(t)
  }
  function tE(e) {
    const t = {};
    return e.searchParams.forEach((n, r) => {
      t[r] = n
    }
    ),
      t
  }
  function nE(e, t) {
    const [n, r] = e.split("/*", 2)
      , i = n.split("/").filter(Boolean)
      , o = i.length;
    return S => {
      const a = S.split("/").filter(Boolean)
        , l = a.length - o;
      if (l < 0 || l > 0 && r === void 0 && !t)
        return null;
      const E = {
        path: o ? "" : "/",
        params: {}
      };
      for (let s = 0; s < o; s++) {
        const u = i[s]
          , c = a[s];
        if (u[0] === ":")
          E.params[u.slice(1)] = c;
        else if (u.localeCompare(c, void 0, {
          sensitivity: "base"
        }) !== 0)
          return null;
        E.path += `/${c}`
      }
      return r && (E.params[r] = l ? a.slice(-l).join("/") : ""),
        E
    }
  }
  function rE(e) {
    const [t, n] = e.pattern.split("/*", 2)
      , r = t.split("/").filter(Boolean);
    return r.reduce((i, o) => i + (o.startsWith(":") ? 2 : 3), r.length - (n === void 0 ? 0 : 1))
  }
  function Po(e) {
    const t = new Map
      , n = Ua();
    return new Proxy({}, {
      get(r, i) {
        return t.has(i) || ga(n, () => t.set(i, Y(() => e()[i]))),
          t.get(i)()
      },
      getOwnPropertyDescriptor() {
        return {
          enumerable: !0,
          configurable: !0
        }
      },
      ownKeys() {
        return Reflect.ownKeys(e())
      }
    })
  }
  function iE(e, t) {
    const n = new URLSearchParams(e);
    return Object.entries(t).forEach(([r, i]) => {
      i == null || i === "" ? n.delete(r) : n.set(r, String(i))
    }
    ),
      n.toString()
  }
  const oE = 100
    , Mo = wn()
    , Wn = wn()
    , qt = () => eE(st(Mo), "Make sure your app is wrapped in a <Router />");
  let Xt;
  const pr = () => Xt || st(Wn) || qt().base
    , yo = e => {
      const t = pr();
      return Y(() => t.resolvePath(e()))
    }
    , SE = e => {
      const t = qt();
      return Y(() => {
        const n = e();
        return n !== void 0 ? t.renderPath(n) : n
      }
      )
    }
    , aE = () => qt().navigatorFactory()
    , Yo = () => qt().location
    , Bo = () => {
      const e = Yo()
        , t = aE()
        , n = (r, i) => {
          const o = iE(e.search, r);
          t(o ? `?${o}` : "", ct(Me({
            scroll: !1
          }, i), {
            resolve: !0
          }))
        }
        ;
      return [e.query, n]
    }
    ;
  function EE(e, t = "", n) {
    const { path: r, component: i, data: o, children: S } = e
      , a = !S || Array.isArray(S) && !S.length
      , l = mo(t, r)
      , E = a ? l : l.split("/*", 1)[0];
    return {
      originalPath: r,
      pattern: E,
      element: i ? () => g(i, {}) : () => {
        const { element: s } = e;
        return s === void 0 && n ? g(n, {}) : s
      }
      ,
      preload: e.component ? i.preload : e.preload,
      data: o,
      matcher: nE(E, !a)
    }
  }
  function sE(e, t = 0) {
    return {
      routes: e,
      score: rE(e[e.length - 1]) * 1e4 - t,
      matcher(n) {
        const r = [];
        for (let i = e.length - 1; i >= 0; i--) {
          const o = e[i]
            , S = o.matcher(n);
          if (!S)
            return null;
          r.unshift(ct(Me({}, S), {
            route: o
          }))
        }
        return r
      }
    }
  }
  function Ho(e, t = "", n, r = [], i = []) {
    const o = Array.isArray(e) ? e : [e];
    for (let S = 0, a = o.length; S < a; S++) {
      const l = o[S];
      if (l && typeof l == "object" && l.hasOwnProperty("path")) {
        const E = EE(l, t, n);
        if (r.push(E),
          l.children)
          Ho(l.children, E.pattern, n, r, i);
        else {
          const s = sE([...r], i.length);
          i.push(s)
        }
        r.pop()
      }
    }
    return r.length ? i : i.sort((S, a) => a.score - S.score)
  }
  function lE(e, t) {
    for (let n = 0, r = e.length; n < r; n++) {
      const i = e[n].matcher(t);
      if (i)
        return i
    }
    return []
  }
  function AE(e, t) {
    const n = new URL("http://sar")
      , r = Y(l => {
        const E = e();
        try {
          return new URL(E, n)
        } catch (s) {
          return console.error(`Invalid path ${E}`),
            l
        }
      }
        , n, {
        equals: (l, E) => l.href === E.href
      })
      , i = Y(() => r().pathname)
      , o = Y(() => r().search.slice(1))
      , S = Y(() => r().hash.slice(1))
      , a = Y(() => "");
    return {
      get pathname() {
        return i()
      },
      get search() {
        return o()
      },
      get hash() {
        return S()
      },
      get state() {
        return t()
      },
      get key() {
        return a()
      },
      query: Po(xt(o, () => tE(r())))
    }
  }
  function cE(e, t = "", n, r) {
    const { signal: [i, o], utils: S = {} } = Ja(e)
      , a = S.parsePath || (h => h)
      , l = S.renderPath || (h => h)
      , E = Tn("", t)
      , s = void 0;
    if (E === void 0)
      throw new Error(`${E} is not a valid base path`);
    E && !i().value && o({
      value: E,
      replace: !0,
      scroll: !1
    });
    const [u, c] = Pa()
      , [A, R] = J(i().value)
      , [I, f] = J(i().state)
      , T = AE(A, I)
      , C = []
      , D = {
        pattern: E,
        params: {},
        path: () => E,
        outlet: () => null,
        resolvePath(h) {
          return Tn(E, h)
        }
      };
    if (n)
      try {
        Xt = D,
          D.data = n({
            data: void 0,
            params: {},
            location: T,
            navigate: U(D)
          })
      } finally {
        Xt = void 0
      }
    function L(h, N, B) {
      Ke(() => {
        if (typeof N == "number") {
          N && (S.go ? S.go(N) : console.warn("Router integration does not support relative routing"));
          return
        }
        const { replace: x, resolve: W, scroll: z, state: re } = Me({
          replace: !1,
          resolve: !0,
          scroll: !0
        }, B)
          , te = W ? h.resolvePath(N) : Tn("", N);
        if (te === void 0)
          throw new Error(`Path '${N}' is not a routable path`);
        if (C.length >= oE)
          throw new Error("Too many redirects");
        const Ae = A();
        if (te !== Ae || re !== I()) {
          const ue = C.push({
            value: Ae,
            replace: x,
            scroll: z,
            state: I
          });
          c(() => {
            R(te),
              f(re)
          }
          ).then(() => {
            C.length === ue && d({
              value: te,
              state: re
            })
          }
          )
        }
      }
      )
    }
    function U(h) {
      return h = h || st(Wn) || D,
        (N, B) => L(h, N, B)
    }
    function d(h) {
      const N = C[0];
      N && ((h.value !== N.value || h.state !== N.state) && o(ct(Me({}, h), {
        replace: N.replace,
        scroll: N.scroll
      })),
        C.length = 0)
    }
    H(() => {
      const { value: h, state: N } = i();
      h !== Ke(A) && c(() => {
        R(h),
          f(N)
      }
      )
    }
    );
    {
      let h = function (N) {
        if (N.defaultPrevented || N.button !== 0 || N.metaKey || N.altKey || N.ctrlKey || N.shiftKey)
          return;
        const B = N.composedPath().find(b => b instanceof Node && b.nodeName.toUpperCase() === "A");
        if (!B)
          return;
        const x = B instanceof SVGAElement
          , W = x ? B.href.baseVal : B.href;
        if ((x ? B.target.baseVal : B.target) || !W && !B.hasAttribute("state"))
          return;
        const re = (B.getAttribute("rel") || "").split(/\s+/);
        if (B.hasAttribute("download") || re && re.includes("external"))
          return;
        const te = x ? new URL(W, document.baseURI) : new URL(W);
        if (te.origin !== window.location.origin || E && te.pathname && !te.pathname.toLowerCase().startsWith(E.toLowerCase()))
          return;
        const Ae = a(te.pathname + te.search + te.hash)
          , ue = B.getAttribute("state");
        N.preventDefault(),
          L(D, Ae, {
            resolve: !1,
            replace: B.hasAttribute("replace"),
            scroll: !B.hasAttribute("noscroll"),
            state: ue && JSON.parse(ue)
          })
      };
      var P = h;
      document.addEventListener("click", h),
        we(() => document.removeEventListener("click", h))
    }
    return {
      base: D,
      out: s,
      location: T,
      isRouting: u,
      renderPath: l,
      parsePath: a,
      navigatorFactory: U
    }
  }
  function uE(e, t, n, r) {
    const { base: i, location: o, navigatorFactory: S } = e
      , { pattern: a, element: l, preload: E, data: s } = r().route
      , u = Y(() => r().path)
      , c = Po(() => r().params);
    E && E();
    const A = {
      parent: t,
      pattern: a,
      get child() {
        return n()
      },
      path: u,
      params: c,
      data: t.data,
      outlet: l,
      resolvePath(R) {
        return Tn(i.path(), R, u())
      }
    };
    if (s)
      try {
        Xt = A,
          A.data = s({
            data: t.data,
            params: c,
            location: o,
            navigate: S(A)
          })
      } finally {
        Xt = void 0
      }
    return A
  }
  const OE = y("<a></a>")
    , RE = e => {
      const { source: t, url: n, base: r, data: i, out: o } = e
        , S = t || za()
        , a = cE(S, r, i);
      return g(Mo.Provider, {
        value: a,
        get children() {
          return e.children
        }
      })
    }
    , IE = e => {
      const t = qt()
        , n = pr()
        , r = Y(() => Ho(e.children, mo(n.pattern, e.base || ""), dE))
        , i = Y(() => lE(r(), t.location.pathname));
      t.out && t.out.matches.push(i().map(({ route: l, path: E, params: s }) => ({
        originalPath: l.originalPath,
        pattern: l.pattern,
        path: E,
        params: s
      })));
      const o = [];
      let S;
      const a = Y(xt(i, (l, E, s) => {
        let u = E && l.length === E.length;
        const c = [];
        for (let A = 0, R = l.length; A < R; A++) {
          const I = E && E[A]
            , f = l[A];
          s && I && f.route.pattern === I.route.pattern ? c[A] = s[A] : (u = !1,
            o[A] && o[A](),
            uo(T => {
              o[A] = T,
                c[A] = uE(t, c[A - 1] || n, () => a()[A + 1], () => i()[A])
            }
            ))
        }
        return o.splice(l.length).forEach(A => A()),
          s && u ? s : (S = c[0],
            c)
      }
      ));
      return g(Do, {
        get when() {
          return a() && S
        },
        children: l => g(Wn.Provider, {
          value: l,
          get children() {
            return l.outlet()
          }
        })
      })
    }
    , zn = e => e
    , dE = () => {
      const e = pr();
      return g(Do, {
        get when() {
          return e.child
        },
        children: t => g(Wn.Provider, {
          value: t,
          get children() {
            return t.outlet()
          }
        })
      })
    }
    ;
  function Go(e) {
    const [, t] = Co(e, ["children", "to", "href", "state"])
      , n = SE(() => e.to);
    return (() => {
      const r = OE.cloneNode(!0);
      return Be(r, t, !1, !0),
        O(r, () => e.children),
        H(i => {
          const o = n() || e.href
            , S = JSON.stringify(e.state);
          return o !== i._v$ && M(r, "href", i._v$ = o),
            S !== i._v$2 && M(r, "state", i._v$2 = S),
            i
        }
          , {
            _v$: void 0,
            _v$2: void 0
          }),
        r
    }
    )()
  }
  function fE(e) {
    const t = yo(() => e.href);
    return g(Go, Zt(e, {
      get to() {
        return t()
      }
    }))
  }
  function Ei(e) {
    e = Zt({
      inactiveClass: "inactive",
      activeClass: "active"
    }, e);
    const [, t] = Co(e, ["activeClass", "inactiveClass", "end"])
      , n = Yo()
      , r = yo(() => e.href)
      , i = Y(() => {
        const o = r();
        if (o === void 0)
          return !1;
        const S = o.split(/[?#]/, 1)[0].toLowerCase()
          , a = n.pathname.toLowerCase();
        return e.end ? S === a : a.startsWith(S)
      }
      );
    return g(Go, Zt(t, {
      get to() {
        return r()
      },
      get classList() {
        return {
          [e.inactiveClass]: !i(),
          [e.activeClass]: i()
        }
      },
      get ["aria-current"]() {
        return i() ? "page" : void 0
      }
    }))
  }
  try {
    self["workbox:window:6.5.2"] && _()
  } catch (e) { }
  function dr(e, t) {
    return new Promise(function (n) {
      var r = new MessageChannel;
      r.port1.onmessage = function (i) {
        n(i.data)
      }
        ,
        e.postMessage(t, [r.port2])
    }
    )
  }
  function TE(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      r.enumerable = r.enumerable || !1,
        r.configurable = !0,
        "value" in r && (r.writable = !0),
        Object.defineProperty(e, r.key, r)
    }
  }
  function si(e, t) {
    (t == null || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++)
      r[n] = e[n];
    return r
  }
  function LE(e, t) {
    var n;
    if (typeof Symbol == "undefined" || e[Symbol.iterator] == null) {
      if (Array.isArray(e) || (n = function (i, o) {
        if (i) {
          if (typeof i == "string")
            return si(i, o);
          var S = Object.prototype.toString.call(i).slice(8, -1);
          return S === "Object" && i.constructor && (S = i.constructor.name),
            S === "Map" || S === "Set" ? Array.from(i) : S === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S) ? si(i, o) : void 0
        }
      }(e)) || t && e && typeof e.length == "number") {
        n && (e = n);
        var r = 0;
        return function () {
          return r >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[r++]
          }
        }
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    return (n = e[Symbol.iterator]()).next.bind(n)
  }
  try {
    self["workbox:core:6.5.2"] && _()
  } catch (e) { }
  var Qn = function () {
    var e = this;
    this.promise = new Promise(function (t, n) {
      e.resolve = t,
        e.reject = n
    }
    )
  };
  function jn(e, t) {
    var n = location.href;
    return new URL(e, n).href === new URL(t, n).href
  }
  var Bt = function (e, t) {
    this.type = e,
      Object.assign(this, t)
  };
  function Sn(e, t, n) {
    return n ? t ? t(e) : e : (e && e.then || (e = Promise.resolve(e)),
      t ? e.then(t) : e)
  }
  function NE() { }
  var CE = {
    type: "SKIP_WAITING"
  };
  function li(e, t) {
    if (!t)
      return e && e.then ? e.then(NE) : Promise.resolve()
  }
  var DE = function (e) {
    var t, n;
    function r(a, l) {
      var E, s;
      return l === void 0 && (l = {}),
        (E = e.call(this) || this).nn = {},
        E.tn = 0,
        E.rn = new Qn,
        E.en = new Qn,
        E.on = new Qn,
        E.un = 0,
        E.an = new Set,
        E.cn = function () {
          var u = E.fn
            , c = u.installing;
          E.tn > 0 || !jn(c.scriptURL, E.sn.toString()) || performance.now() > E.un + 6e4 ? (E.vn = c,
            u.removeEventListener("updatefound", E.cn)) : (E.hn = c,
              E.an.add(c),
              E.rn.resolve(c)),
            ++E.tn,
            c.addEventListener("statechange", E.ln)
        }
        ,
        E.ln = function (u) {
          var c = E.fn
            , A = u.target
            , R = A.state
            , I = A === E.vn
            , f = {
              sw: A,
              isExternal: I,
              originalEvent: u
            };
          !I && E.mn && (f.isUpdate = !0),
            E.dispatchEvent(new Bt(R, f)),
            R === "installed" ? E.wn = self.setTimeout(function () {
              R === "installed" && c.waiting === A && E.dispatchEvent(new Bt("waiting", f))
            }, 200) : R === "activating" && (clearTimeout(E.wn),
              I || E.en.resolve(A))
        }
        ,
        E.dn = function (u) {
          var c = E.hn
            , A = c !== navigator.serviceWorker.controller;
          E.dispatchEvent(new Bt("controlling", {
            isExternal: A,
            originalEvent: u,
            sw: c,
            isUpdate: E.mn
          })),
            A || E.on.resolve(c)
        }
        ,
        E.gn = (s = function (u) {
          var c = u.data
            , A = u.ports
            , R = u.source;
          return Sn(E.getSW(), function () {
            E.an.has(R) && E.dispatchEvent(new Bt("message", {
              data: c,
              originalEvent: u,
              ports: A,
              sw: R
            }))
          })
        }
          ,
          function () {
            for (var u = [], c = 0; c < arguments.length; c++)
              u[c] = arguments[c];
            try {
              return Promise.resolve(s.apply(this, u))
            } catch (A) {
              return Promise.reject(A)
            }
          }
        ),
        E.sn = a,
        E.nn = l,
        navigator.serviceWorker.addEventListener("message", E.gn),
        E
    }
    n = e,
      (t = r).prototype = Object.create(n.prototype),
      t.prototype.constructor = t,
      t.__proto__ = n;
    var i, o, S = r.prototype;
    return S.register = function (a) {
      var l = (a === void 0 ? {} : a).immediate
        , E = l !== void 0 && l;
      try {
        var s = this;
        return function (u, c) {
          var A = u();
          return A && A.then ? A.then(c) : c(A)
        }(function () {
          if (!E && document.readyState !== "complete")
            return li(new Promise(function (u) {
              return window.addEventListener("load", u)
            }
            ))
        }, function () {
          return s.mn = Boolean(navigator.serviceWorker.controller),
            s.yn = s.pn(),
            Sn(s.bn(), function (u) {
              s.fn = u,
                s.yn && (s.hn = s.yn,
                  s.en.resolve(s.yn),
                  s.on.resolve(s.yn),
                  s.yn.addEventListener("statechange", s.ln, {
                    once: !0
                  }));
              var c = s.fn.waiting;
              return c && jn(c.scriptURL, s.sn.toString()) && (s.hn = c,
                Promise.resolve().then(function () {
                  s.dispatchEvent(new Bt("waiting", {
                    sw: c,
                    wasWaitingBeforeRegister: !0
                  }))
                }).then(function () { })),
                s.hn && (s.rn.resolve(s.hn),
                  s.an.add(s.hn)),
                s.fn.addEventListener("updatefound", s.cn),
                navigator.serviceWorker.addEventListener("controllerchange", s.dn),
                s.fn
            })
        })
      } catch (u) {
        return Promise.reject(u)
      }
    }
      ,
      S.update = function () {
        try {
          return this.fn ? li(this.fn.update()) : void 0
        } catch (a) {
          return Promise.reject(a)
        }
      }
      ,
      S.getSW = function () {
        return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise
      }
      ,
      S.messageSW = function (a) {
        try {
          return Sn(this.getSW(), function (l) {
            return dr(l, a)
          })
        } catch (l) {
          return Promise.reject(l)
        }
      }
      ,
      S.messageSkipWaiting = function () {
        this.fn && this.fn.waiting && dr(this.fn.waiting, CE)
      }
      ,
      S.pn = function () {
        var a = navigator.serviceWorker.controller;
        return a && jn(a.scriptURL, this.sn.toString()) ? a : void 0
      }
      ,
      S.bn = function () {
        try {
          var a = this;
          return function (l, E) {
            try {
              var s = l()
            } catch (u) {
              return E(u)
            }
            return s && s.then ? s.then(void 0, E) : s
          }(function () {
            return Sn(navigator.serviceWorker.register(a.sn, a.nn), function (l) {
              return a.un = performance.now(),
                l
            })
          }, function (l) {
            throw l
          })
        } catch (l) {
          return Promise.reject(l)
        }
      }
      ,
      i = r,
      (o = [{
        key: "active",
        get: function () {
          return this.en.promise
        }
      }, {
        key: "controlling",
        get: function () {
          return this.on.promise
        }
      }]) && TE(i.prototype, o),
      r
  }(function () {
    function e() {
      this.Pn = new Map
    }
    var t = e.prototype;
    return t.addEventListener = function (n, r) {
      this.Sn(n).add(r)
    }
      ,
      t.removeEventListener = function (n, r) {
        this.Sn(n).delete(r)
      }
      ,
      t.dispatchEvent = function (n) {
        n.target = this;
        for (var r, i = LE(this.Sn(n.type)); !(r = i()).done;)
          (0,
            r.value)(n)
      }
      ,
      t.Sn = function (n) {
        return this.Pn.has(n) || this.Pn.set(n, new Set),
          this.Pn.get(n)
      }
      ,
      e
  }());
  function hE(e = {}) {
    const { immediate: t = !1, onNeedRefresh: n, onOfflineReady: r, onRegistered: i, onRegisterError: o } = e;
    let S, a;
    const l = (E = !0) => rn(this, null, function* () {
      E && (S == null || S.addEventListener("controlling", s => {
        s.isUpdate && window.location.reload()
      }
      )),
        a && a.waiting && (yield dr(a.waiting, {
          type: "SKIP_WAITING"
        }))
    });
    if ("serviceWorker" in navigator) {
      S = new DE("/sw.js", {
        scope: "/",
        type: "classic"
      }),
        S.addEventListener("activated", E => {
          E.isUpdate || r == null || r()
        }
        );
      {
        const E = () => {
          n == null || n()
        }
          ;
        S.addEventListener("waiting", E),
          S.addEventListener("externalwaiting", E)
      }
      S.register({
        immediate: t
      }).then(E => {
        a = E,
          i == null || i(E)
      }
      ).catch(E => {
        o == null || o(E)
      }
      )
    }
    return l
  }
  function Ai(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e)
    }
    )
  }
  const bo = e => {
    let t, n = !0;
    const [r, i] = J()
      , [o, S] = J()
      , a = Hr(() => e.children)
      , l = e.name || "s";
    e = Zt({
      name: l,
      enterActiveClass: l + "-enter-active",
      enterClass: l + "-enter",
      enterToClass: l + "-enter-to",
      exitActiveClass: l + "-exit-active",
      exitClass: l + "-exit",
      exitToClass: l + "-exit-to"
    }, e);
    const { onBeforeEnter: E, onEnter: s, onAfterEnter: u, onBeforeExit: c, onExit: A, onAfterExit: R } = e;
    function I(T, C) {
      if (!n || e.appear) {
        let P = function (h) {
          T && (!h || h.target === T) && (T.removeEventListener("transitionend", P),
            T.removeEventListener("animationend", P),
            T.classList.remove(...U),
            T.classList.remove(...d),
            Kn(() => {
              r() !== T && i(T),
                o() === T && S(void 0)
            }
            ),
            u && u(T),
            e.mode === "inout" && f(T, C))
        };
        var D = P;
        const L = e.enterClass.split(" ")
          , U = e.enterActiveClass.split(" ")
          , d = e.enterToClass.split(" ");
        E && E(T),
          T.classList.add(...L),
          T.classList.add(...U),
          Ai(() => {
            T.classList.remove(...L),
              T.classList.add(...d),
              s && s(T, () => P()),
              (!s || s.length < 2) && (T.addEventListener("transitionend", P),
                T.addEventListener("animationend", P))
          }
          )
      }
      C && !e.mode ? S(T) : i(T)
    }
    function f(T, C) {
      const D = e.exitClass.split(" ")
        , L = e.exitActiveClass.split(" ")
        , U = e.exitToClass.split(" ");
      if (!C.parentNode)
        return d();
      c && c(C),
        C.classList.add(...D),
        C.classList.add(...L),
        Ai(() => {
          C.classList.remove(...D),
            C.classList.add(...U)
        }
        ),
        A && A(C, () => d()),
        (!A || A.length < 2) && (C.addEventListener("transitionend", d),
          C.addEventListener("animationend", d));
      function d(P) {
        (!P || P.target === C) && (C.removeEventListener("transitionend", d),
          C.removeEventListener("animationend", d),
          C.classList.remove(...L),
          C.classList.remove(...U),
          r() === C && i(void 0),
          R && R(C),
          e.mode === "outin" && I(T, C))
      }
    }
    return pn(T => {
      for (t = a(); typeof t == "function";)
        t = t();
      return Ke(() => (t && t !== T && (e.mode !== "outin" ? I(t, T) : n && i(t)),
        T && T !== t && e.mode !== "inout" && f(t, T),
        n = !1,
        t))
    }
    ),
      [r, o]
  }
    , vt = 2
    , po = 2
    , Ue = vt * po
    , Q = 9
    , pe = 5
    , he = {
      year: 24 * 60 * 60 * 1e3 * 365,
      month: 24 * 60 * 60 * 1e3 * 365 / 12,
      day: 24 * 60 * 60 * 1e3,
      hour: 60 * 60 * 1e3,
      minute: 60 * 1e3,
      second: 1e3
    }
    , mn = new Date("01/24/2022")
    , Ko = he.day
    , wo = 1.3
    , Fo = .7
    , vE = .1
    , xo = !!navigator.vibrate
    , UE = ["ipad simulator", "iphone simulator", "ipod simulator", "ipad", "iphone", "ipod"].indexOf(navigator.platform.toLowerCase()) >= 0 || navigator.userAgent.toLowerCase().includes("mac") && "ontouchend" in document
    , ci = "standalone" in window.navigator && window.navigator.standalone === !0;
  /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
  window.matchMedia("(display-mode: standalone)").matches;
  const gE = navigator.share && navigator.canShare && navigator.canShare({
    text: "test share text"
  })
    , mE = navigator.share && navigator.canShare && navigator.canShare({
      text: "test share text",
      files: [new File([new Blob], "test.png", {
        type: "image/png"
      })]
    })
    , ui = 10
    , je = ["win_practice", "win_daily", "streak_practice", "streak_daily", "win_in_9", "win_in_8", "win_in_7", "win_in_6", "win_in_5", "win_in_4", "guess_word_2_same_letter", "guess_word_3_same_letter", "correct_turn_1", "share", "donate", "lose_1_wrong", "lose_2_wrong", "lose_3_wrong", "lose_4_wrong", "play_words"]
    , PE = {
      win_practice: [1, 5, 10, 50, 100, 500, 1e3],
      win_daily: [1, 5, 10, 50, 100, 500, 1e3],
      streak_practice: [5, 10, 50, 100, 500],
      streak_daily: [5, 10, 50, 100, 500],
      win_in_9: [1],
      win_in_8: [1],
      win_in_7: [1],
      win_in_6: [1],
      win_in_5: [1],
      win_in_4: [1],
      guess_word_2_same_letter: [1],
      guess_word_3_same_letter: [1],
      correct_turn_1: [1],
      share: [1],
      donate: [1],
      lose_1_wrong: [1],
      lose_2_wrong: [1],
      lose_3_wrong: [1],
      lose_4_wrong: [1],
      play_words: [50, 100, 200, 300, 500, 1e3, 1e4]
    }
    , ME = {
      win_practice: (e, t) => t.free.history.slice(Ue - 1, Q).reduce((r, i) => r + i, 0),
      win_daily: (e, t) => t.daily.history.slice(Ue - 1, Q).reduce((r, i) => r + i, 0),
      streak_practice: (e, t) => t.free.maxStreak,
      streak_daily: (e, t) => t.daily.maxStreak,
      win_in_9: (e, t) => t.daily.history[8] + t.free.history[8],
      win_in_8: (e, t) => t.daily.history[7] + t.free.history[7],
      win_in_7: (e, t) => t.daily.history[6] + t.free.history[6],
      win_in_6: (e, t) => t.daily.history[5] + t.free.history[5],
      win_in_5: (e, t) => t.daily.history[4] + t.free.history[4],
      win_in_4: (e, t) => t.daily.history[3] + t.free.history[3],
      guess_word_2_same_letter: (e, t) => {
        const n = /\w*(\w)\w*\1\w*/;
        return t.daily.guesses.some(r => r.match(n)) || t.free.guesses.some(r => r.match(n)) ? 1 : t.achievements[e.type].count
      }
      ,
      guess_word_3_same_letter: (e, t) => {
        const n = /\w*(\w)\w*\1\w*\1\w*/;
        return t.daily.guesses.some(r => r.match(n)) || t.free.guesses.some(r => r.match(n)) ? 1 : t.achievements[e.type].count
      }
      ,
      correct_turn_1: (e, t) => t.daily.answersCorrect.indexOf(0) !== -1 || t.free.answersCorrect.indexOf(0) !== -1 ? 1 : t.achievements[e.type].count,
      share: (e, t) => t.shareTime > 0 ? 1 : 0,
      donate: (e, t) => t.donationTime > 0 ? 1 : 0,
      lose_1_wrong: (e, t) => t.daily.history[12] + t.free.history[12],
      lose_2_wrong: (e, t) => t.daily.history[11] + t.free.history[11],
      lose_3_wrong: (e, t) => t.daily.history[10] + t.free.history[10],
      lose_4_wrong: (e, t) => t.daily.history[9] + t.free.history[9],
      play_words: (e, t) => {
        const n = t.free.history.slice(0, Q).reduce((i, o, S) => i + o * (S + 1), 0) + t.daily.history.slice(0, Q).reduce((i, o, S) => i + o * (S + 1), 0)
          , r = t.free.history.slice(Q).reduce((i, o) => i + o * Q, 0) + t.daily.history.slice(Q).reduce((i, o) => i + o * Q, 0);
        return n + r
      }
    };
  var Ht = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
  function yE(e) {
    if (e.__esModule)
      return e;
    var t = Object.defineProperty({}, "__esModule", {
      value: !0
    });
    return Object.keys(e).forEach(function (n) {
      var r = Object.getOwnPropertyDescriptor(e, n);
      Object.defineProperty(t, n, r.get ? r : {
        enumerable: !0,
        get: function () {
          return e[n]
        }
      })
    }),
      t
  }
  var Ze = function (e) {
    e == null && (e = new Date().getTime()),
      this.N = 624,
      this.M = 397,
      this.MATRIX_A = 2567483615,
      this.UPPER_MASK = 2147483648,
      this.LOWER_MASK = 2147483647,
      this.mt = new Array(this.N),
      this.mti = this.N + 1,
      e.constructor == Array ? this.init_by_array(e, e.length) : this.init_seed(e)
  };
  Ze.prototype.init_seed = function (e) {
    for (this.mt[0] = e >>> 0,
      this.mti = 1; this.mti < this.N; this.mti++) {
      var e = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
      this.mt[this.mti] = (((e & 4294901760) >>> 16) * 1812433253 << 16) + (e & 65535) * 1812433253 + this.mti,
        this.mt[this.mti] >>>= 0
    }
  }
    ;
  Ze.prototype.init_by_array = function (e, t) {
    var n, r, i;
    for (this.init_seed(19650218),
      n = 1,
      r = 0,
      i = this.N > t ? this.N : t; i; i--) {
      var o = this.mt[n - 1] ^ this.mt[n - 1] >>> 30;
      this.mt[n] = (this.mt[n] ^ (((o & 4294901760) >>> 16) * 1664525 << 16) + (o & 65535) * 1664525) + e[r] + r,
        this.mt[n] >>>= 0,
        n++,
        r++,
        n >= this.N && (this.mt[0] = this.mt[this.N - 1],
          n = 1),
        r >= t && (r = 0)
    }
    for (i = this.N - 1; i; i--) {
      var o = this.mt[n - 1] ^ this.mt[n - 1] >>> 30;
      this.mt[n] = (this.mt[n] ^ (((o & 4294901760) >>> 16) * 1566083941 << 16) + (o & 65535) * 1566083941) - n,
        this.mt[n] >>>= 0,
        n++,
        n >= this.N && (this.mt[0] = this.mt[this.N - 1],
          n = 1)
    }
    this.mt[0] = 2147483648
  }
    ;
  Ze.prototype.random_int = function () {
    var e, t = new Array(0, this.MATRIX_A);
    if (this.mti >= this.N) {
      var n;
      for (this.mti == this.N + 1 && this.init_seed(5489),
        n = 0; n < this.N - this.M; n++)
        e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK,
          this.mt[n] = this.mt[n + this.M] ^ e >>> 1 ^ t[e & 1];
      for (; n < this.N - 1; n++)
        e = this.mt[n] & this.UPPER_MASK | this.mt[n + 1] & this.LOWER_MASK,
          this.mt[n] = this.mt[n + (this.M - this.N)] ^ e >>> 1 ^ t[e & 1];
      e = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK,
        this.mt[this.N - 1] = this.mt[this.M - 1] ^ e >>> 1 ^ t[e & 1],
        this.mti = 0
    }
    return e = this.mt[this.mti++],
      e ^= e >>> 11,
      e ^= e << 7 & 2636928640,
      e ^= e << 15 & 4022730752,
      e ^= e >>> 18,
      e >>> 0
  }
    ;
  Ze.prototype.random_int31 = function () {
    return this.random_int() >>> 1
  }
    ;
  Ze.prototype.random_incl = function () {
    return this.random_int() * (1 / 4294967295)
  }
    ;
  Ze.prototype.random = function () {
    return this.random_int() * (1 / 4294967296)
  }
    ;
  Ze.prototype.random_excl = function () {
    return (this.random_int() + .5) * (1 / 4294967296)
  }
    ;
  Ze.prototype.random_long = function () {
    var e = this.random_int() >>> 5
      , t = this.random_int() >>> 6;
    return (e * 67108864 + t) * (1 / 9007199254740992)
  }
    ;
  var YE = Ze;
  const Kr = Symbol("store-raw")
    , Pn = Symbol("store-node")
    , BE = Symbol("store-name");
  function Wo(e, t) {
    let n = e[Et];
    if (!n) {
      Object.defineProperty(e, Et, {
        value: n = new Proxy(e, bE)
      });
      const r = Object.keys(e)
        , i = Object.getOwnPropertyDescriptors(e);
      for (let o = 0, S = r.length; o < S; o++) {
        const a = r[o];
        if (i[a].get) {
          const l = i[a].get.bind(n);
          Object.defineProperty(e, a, {
            get: l
          })
        }
      }
    }
    return n
  }
  function Ut(e) {
    return e != null && typeof e == "object" && (e[Et] || !e.__proto__ || e.__proto__ === Object.prototype || Array.isArray(e))
  }
  function Jt(e, t = new Set) {
    let n, r, i, o;
    if (n = e != null && e[Kr])
      return n;
    if (!Ut(e) || t.has(e))
      return e;
    if (Array.isArray(e)) {
      Object.isFrozen(e) ? e = e.slice(0) : t.add(e);
      for (let S = 0, a = e.length; S < a; S++)
        i = e[S],
          (r = Jt(i, t)) !== i && (e[S] = r)
    } else {
      Object.isFrozen(e) ? e = Object.assign({}, e) : t.add(e);
      const S = Object.keys(e)
        , a = Object.getOwnPropertyDescriptors(e);
      for (let l = 0, E = S.length; l < E; l++)
        o = S[l],
          !a[o].get && (i = e[o],
            (r = Jt(i, t)) !== i && (e[o] = r))
    }
    return e
  }
  function Mn(e) {
    let t = e[Pn];
    return t || Object.defineProperty(e, Pn, {
      value: t = {}
    }),
      t
  }
  function HE(e, t) {
    const n = Reflect.getOwnPropertyDescriptor(e, t);
    return !n || n.get || !n.configurable || t === Et || t === Pn || t === BE || (delete n.value,
      delete n.writable,
      n.get = () => e[Et][t]),
      n
  }
  function GE(e) {
    if (Oo()) {
      const t = Mn(e);
      (t._ || (t._ = fr()))()
    }
    return Reflect.ownKeys(e)
  }
  function fr() {
    const [e, t] = J(void 0, {
      equals: !1,
      internal: !0
    });
    return e.$ = t,
      e
  }
  const bE = {
    get(e, t, n) {
      if (t === Kr)
        return e;
      if (t === Et)
        return n;
      const r = e[t];
      if (t === Pn || t === "__proto__")
        return r;
      const i = Ut(r);
      if (Oo() && (typeof r != "function" || e.hasOwnProperty(t))) {
        let o, S;
        i && (o = Mn(r)) && (S = o._ || (o._ = fr()),
          S()),
          o = Mn(e),
          S = o[t] || (o[t] = fr()),
          S()
      }
      return i ? Wo(r) : r
    },
    set() {
      return !0
    },
    deleteProperty() {
      return !0
    },
    ownKeys: GE,
    getOwnPropertyDescriptor: HE
  };
  function yn(e, t, n) {
    if (e[t] === n)
      return;
    const r = Array.isArray(e)
      , i = e.length
      , o = n === void 0
      , S = r || o === t in e;
    o ? delete e[t] : e[t] = n;
    let a = Mn(e), l;
    (l = a[t]) && l.$(),
      r && e.length !== i && (l = a.length) && l.$(),
      S && (l = a._) && l.$()
  }
  function pE(e, t) {
    const n = Object.keys(t);
    for (let r = 0; r < n.length; r += 1) {
      const i = n[r];
      yn(e, i, t[i])
    }
  }
  function wt(e, t, n = []) {
    let r, i = e;
    if (t.length > 1) {
      r = t.shift();
      const S = typeof r
        , a = Array.isArray(e);
      if (Array.isArray(r)) {
        for (let l = 0; l < r.length; l++)
          wt(e, [r[l]].concat(t), n);
        return
      } else if (a && S === "function") {
        for (let l = 0; l < e.length; l++)
          r(e[l], l) && wt(e, [l].concat(t), n);
        return
      } else if (a && S === "object") {
        const { from: l = 0, to: E = e.length - 1, by: s = 1 } = r;
        for (let u = l; u <= E; u += s)
          wt(e, [u].concat(t), n);
        return
      } else if (t.length > 1) {
        wt(e[r], t, [r].concat(n));
        return
      }
      i = e[r],
        n = [r].concat(n)
    }
    let o = t[0];
    typeof o == "function" && (o = o(i, n),
      o === i) || r === void 0 && o == null || (o = Jt(o),
        r === void 0 || Ut(i) && Ut(o) && !Array.isArray(o) ? pE(i, o) : yn(e, r, o))
  }
  function KE(e, t) {
    const n = Jt(e || {})
      , r = Wo(n);
    function i(...o) {
      Kn(() => wt(n, o))
    }
    return [r, i]
  }
  const _o = {
    get(e, t) {
      if (t === Kr)
        return e;
      const n = e[t];
      return Ut(n) ? new Proxy(n, _o) : n
    },
    set(e, t, n) {
      return yn(e, t, Jt(n)),
        !0
    },
    deleteProperty(e, t) {
      return yn(e, t, void 0),
        !0
    }
  };
  function Ie(e) {
    return t => (Ut(t) && e(new Proxy(t, _o)),
      t)
  }
  var Oi = Object.prototype.toString, $o = function (t) {
    var n = Oi.call(t)
      , r = n === "[object Arguments]";
    return r || (r = n !== "[object Array]" && t !== null && typeof t == "object" && typeof t.length == "number" && t.length >= 0 && Oi.call(t.callee) === "[object Function]"),
      r
  }, ko;
  if (!Object.keys) {
    var an = Object.prototype.hasOwnProperty
      , Ri = Object.prototype.toString
      , wE = $o
      , Ii = Object.prototype.propertyIsEnumerable
      , FE = !Ii.call({
        toString: null
      }, "toString")
      , xE = Ii.call(function () { }, "prototype")
      , En = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
      , qn = function (e) {
        var t = e.constructor;
        return t && t.prototype === e
      }
      , WE = {
        $applicationCache: !0,
        $console: !0,
        $external: !0,
        $frame: !0,
        $frameElement: !0,
        $frames: !0,
        $innerHeight: !0,
        $innerWidth: !0,
        $onmozfullscreenchange: !0,
        $onmozfullscreenerror: !0,
        $outerHeight: !0,
        $outerWidth: !0,
        $pageXOffset: !0,
        $pageYOffset: !0,
        $parent: !0,
        $scrollLeft: !0,
        $scrollTop: !0,
        $scrollX: !0,
        $scrollY: !0,
        $self: !0,
        $webkitIndexedDB: !0,
        $webkitStorageInfo: !0,
        $window: !0
      }
      , _E = function () {
        if (typeof window == "undefined")
          return !1;
        for (var e in window)
          try {
            if (!WE["$" + e] && an.call(window, e) && window[e] !== null && typeof window[e] == "object")
              try {
                qn(window[e])
              } catch (t) {
                return !0
              }
          } catch (t) {
            return !0
          }
        return !1
      }()
      , $E = function (e) {
        if (typeof window == "undefined" || !_E)
          return qn(e);
        try {
          return qn(e)
        } catch (t) {
          return !1
        }
      };
    ko = function (t) {
      var n = t !== null && typeof t == "object"
        , r = Ri.call(t) === "[object Function]"
        , i = wE(t)
        , o = n && Ri.call(t) === "[object String]"
        , S = [];
      if (!n && !r && !i)
        throw new TypeError("Object.keys called on a non-object");
      var a = xE && r;
      if (o && t.length > 0 && !an.call(t, 0))
        for (var l = 0; l < t.length; ++l)
          S.push(String(l));
      if (i && t.length > 0)
        for (var E = 0; E < t.length; ++E)
          S.push(String(E));
      else
        for (var s in t)
          !(a && s === "prototype") && an.call(t, s) && S.push(String(s));
      if (FE)
        for (var u = $E(t), c = 0; c < En.length; ++c)
          !(u && En[c] === "constructor") && an.call(t, En[c]) && S.push(En[c]);
      return S
    }
  }
  var kE = ko
    , VE = Array.prototype.slice
    , ZE = $o
    , di = Object.keys
    , Ln = di ? function (t) {
      return di(t)
    }
      : kE
    , fi = Object.keys;
  Ln.shim = function () {
    if (Object.keys) {
      var t = function () {
        var n = Object.keys(arguments);
        return n && n.length === arguments.length
      }(1, 2);
      t || (Object.keys = function (r) {
        return ZE(r) ? fi(VE.call(r)) : fi(r)
      }
      )
    } else
      Object.keys = Ln;
    return Object.keys || Ln
  }
    ;
  var XE = Ln
    , JE = XE
    , zE = typeof Symbol == "function" && typeof Symbol("foo") == "symbol"
    , QE = Object.prototype.toString
    , jE = Array.prototype.concat
    , wr = Object.defineProperty
    , qE = function (e) {
      return typeof e == "function" && QE.call(e) === "[object Function]"
    }
    , es = function () {
      var e = {};
      try {
        wr(e, "x", {
          enumerable: !1,
          value: e
        });
        for (var t in e)
          return !1;
        return e.x === e
      } catch (n) {
        return !1
      }
    }
    , Vo = wr && es()
    , ts = function (e, t, n, r) {
      t in e && (!qE(r) || !r()) || (Vo ? wr(e, t, {
        configurable: !0,
        enumerable: !1,
        value: n,
        writable: !0
      }) : e[t] = n)
    }
    , Zo = function (e, t) {
      var n = arguments.length > 2 ? arguments[2] : {}
        , r = JE(t);
      zE && (r = jE.call(r, Object.getOwnPropertySymbols(t)));
      for (var i = 0; i < r.length; i += 1)
        ts(e, r[i], t[r[i]], n[r[i]])
    };
  Zo.supportsDescriptors = !!Vo;
  var Mt = Zo, yt = {
    exports: {}
  }, ns = "Function.prototype.bind called on incompatible ", er = Array.prototype.slice, rs = Object.prototype.toString, is = "[object Function]", os = function (t) {
    var n = this;
    if (typeof n != "function" || rs.call(n) !== is)
      throw new TypeError(ns + n);
    for (var r = er.call(arguments, 1), i, o = function () {
      if (this instanceof i) {
        var s = n.apply(this, r.concat(er.call(arguments)));
        return Object(s) === s ? s : this
      } else
        return n.apply(t, r.concat(er.call(arguments)))
    }, S = Math.max(0, n.length - r.length), a = [], l = 0; l < S; l++)
      a.push("$" + l);
    if (i = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(o),
      n.prototype) {
      var E = function () { };
      E.prototype = n.prototype,
        i.prototype = new E,
        E.prototype = null
    }
    return i
  }, Ss = os, Fr = Function.prototype.bind || Ss, Xo = function () {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var t = {}
      , n = Symbol("test")
      , r = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(r) !== "[object Symbol]")
      return !1;
    var i = 42;
    t[n] = i;
    for (n in t)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(t).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(t).length !== 0)
      return !1;
    var o = Object.getOwnPropertySymbols(t);
    if (o.length !== 1 || o[0] !== n || !Object.prototype.propertyIsEnumerable.call(t, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var S = Object.getOwnPropertyDescriptor(t, n);
      if (S.value !== i || S.enumerable !== !0)
        return !1
    }
    return !0
  }, Ti = typeof Symbol != "undefined" && Symbol, as = Xo, Jo = function () {
    return typeof Ti != "function" || typeof Symbol != "function" || typeof Ti("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : as()
  }, Es = Fr, zo = Es.call(Function.call, Object.prototype.hasOwnProperty), V, zt = SyntaxError, Qo = Function, Tt = TypeError, tr = function (e) {
    try {
      return Qo('"use strict"; return (' + e + ").constructor;")()
    } catch (t) { }
  }, ot = Object.getOwnPropertyDescriptor;
  if (ot)
    try {
      ot({}, "")
    } catch (e) {
      ot = null
    }
  var nr = function () {
    throw new Tt
  }
    , ss = ot ? function () {
      try {
        return arguments.callee,
          nr
      } catch (e) {
        try {
          return ot(arguments, "callee").get
        } catch (t) {
          return nr
        }
      }
    }() : nr
    , Ot = Jo()
    , Je = Object.getPrototypeOf || function (e) {
      return e.__proto__
    }
    , It = {}
    , ls = typeof Uint8Array == "undefined" ? V : Je(Uint8Array)
    , Lt = {
      "%AggregateError%": typeof AggregateError == "undefined" ? V : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer == "undefined" ? V : ArrayBuffer,
      "%ArrayIteratorPrototype%": Ot ? Je([][Symbol.iterator]()) : V,
      "%AsyncFromSyncIteratorPrototype%": V,
      "%AsyncFunction%": It,
      "%AsyncGenerator%": It,
      "%AsyncGeneratorFunction%": It,
      "%AsyncIteratorPrototype%": It,
      "%Atomics%": typeof Atomics == "undefined" ? V : Atomics,
      "%BigInt%": typeof BigInt == "undefined" ? V : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView == "undefined" ? V : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array == "undefined" ? V : Float32Array,
      "%Float64Array%": typeof Float64Array == "undefined" ? V : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry == "undefined" ? V : FinalizationRegistry,
      "%Function%": Qo,
      "%GeneratorFunction%": It,
      "%Int8Array%": typeof Int8Array == "undefined" ? V : Int8Array,
      "%Int16Array%": typeof Int16Array == "undefined" ? V : Int16Array,
      "%Int32Array%": typeof Int32Array == "undefined" ? V : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": Ot ? Je(Je([][Symbol.iterator]())) : V,
      "%JSON%": typeof JSON == "object" ? JSON : V,
      "%Map%": typeof Map == "undefined" ? V : Map,
      "%MapIteratorPrototype%": typeof Map == "undefined" || !Ot ? V : Je(new Map()[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise == "undefined" ? V : Promise,
      "%Proxy%": typeof Proxy == "undefined" ? V : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect == "undefined" ? V : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set == "undefined" ? V : Set,
      "%SetIteratorPrototype%": typeof Set == "undefined" || !Ot ? V : Je(new Set()[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer == "undefined" ? V : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": Ot ? Je(""[Symbol.iterator]()) : V,
      "%Symbol%": Ot ? Symbol : V,
      "%SyntaxError%": zt,
      "%ThrowTypeError%": ss,
      "%TypedArray%": ls,
      "%TypeError%": Tt,
      "%Uint8Array%": typeof Uint8Array == "undefined" ? V : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray == "undefined" ? V : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array == "undefined" ? V : Uint16Array,
      "%Uint32Array%": typeof Uint32Array == "undefined" ? V : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap == "undefined" ? V : WeakMap,
      "%WeakRef%": typeof WeakRef == "undefined" ? V : WeakRef,
      "%WeakSet%": typeof WeakSet == "undefined" ? V : WeakSet
    }
    , As = function e(t) {
      var n;
      if (t === "%AsyncFunction%")
        n = tr("async function () {}");
      else if (t === "%GeneratorFunction%")
        n = tr("function* () {}");
      else if (t === "%AsyncGeneratorFunction%")
        n = tr("async function* () {}");
      else if (t === "%AsyncGenerator%") {
        var r = e("%AsyncGeneratorFunction%");
        r && (n = r.prototype)
      } else if (t === "%AsyncIteratorPrototype%") {
        var i = e("%AsyncGenerator%");
        i && (n = Je(i.prototype))
      }
      return Lt[t] = n,
        n
    }
    , Li = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    }
    , _n = Fr
    , Yn = zo
    , cs = _n.call(Function.call, Array.prototype.concat)
    , us = _n.call(Function.apply, Array.prototype.splice)
    , Ni = _n.call(Function.call, String.prototype.replace)
    , Bn = _n.call(Function.call, String.prototype.slice)
    , Os = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g
    , Rs = /\\(\\)?/g
    , Is = function (t) {
      var n = Bn(t, 0, 1)
        , r = Bn(t, -1);
      if (n === "%" && r !== "%")
        throw new zt("invalid intrinsic syntax, expected closing `%`");
      if (r === "%" && n !== "%")
        throw new zt("invalid intrinsic syntax, expected opening `%`");
      var i = [];
      return Ni(t, Os, function (o, S, a, l) {
        i[i.length] = a ? Ni(l, Rs, "$1") : S || o
      }),
        i
    }
    , ds = function (t, n) {
      var r = t, i;
      if (Yn(Li, r) && (i = Li[r],
        r = "%" + i[0] + "%"),
        Yn(Lt, r)) {
        var o = Lt[r];
        if (o === It && (o = As(r)),
          typeof o == "undefined" && !n)
          throw new Tt("intrinsic " + t + " exists, but is not available. Please file an issue!");
        return {
          alias: i,
          name: r,
          value: o
        }
      }
      throw new zt("intrinsic " + t + " does not exist!")
    }
    , De = function (t, n) {
      if (typeof t != "string" || t.length === 0)
        throw new Tt("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof n != "boolean")
        throw new Tt('"allowMissing" argument must be a boolean');
      var r = Is(t)
        , i = r.length > 0 ? r[0] : ""
        , o = ds("%" + i + "%", n)
        , S = o.name
        , a = o.value
        , l = !1
        , E = o.alias;
      E && (i = E[0],
        us(r, cs([0, 1], E)));
      for (var s = 1, u = !0; s < r.length; s += 1) {
        var c = r[s]
          , A = Bn(c, 0, 1)
          , R = Bn(c, -1);
        if ((A === '"' || A === "'" || A === "`" || R === '"' || R === "'" || R === "`") && A !== R)
          throw new zt("property names with quotes must have matching quotes");
        if ((c === "constructor" || !u) && (l = !0),
          i += "." + c,
          S = "%" + i + "%",
          Yn(Lt, S))
          a = Lt[S];
        else if (a != null) {
          if (!(c in a)) {
            if (!n)
              throw new Tt("base intrinsic for " + t + " exists, but the property is not available.");
            return
          }
          if (ot && s + 1 >= r.length) {
            var I = ot(a, c);
            u = !!I,
              u && "get" in I && !("originalValue" in I.get) ? a = I.get : a = a[c]
          } else
            u = Yn(a, c),
              a = a[c];
          u && !l && (Lt[S] = a)
        }
      }
      return a
    };
  (function (e) {
    var t = Fr
      , n = De
      , r = n("%Function.prototype.apply%")
      , i = n("%Function.prototype.call%")
      , o = n("%Reflect.apply%", !0) || t.call(i, r)
      , S = n("%Object.getOwnPropertyDescriptor%", !0)
      , a = n("%Object.defineProperty%", !0)
      , l = n("%Math.max%");
    if (a)
      try {
        a({}, "a", {
          value: 1
        })
      } catch (s) {
        a = null
      }
    e.exports = function (u) {
      var c = o(t, i, arguments);
      if (S && a) {
        var A = S(c, "length");
        A.configurable && a(c, "length", {
          value: 1 + l(0, u.length - (arguments.length - 1))
        })
      }
      return c
    }
      ;
    var E = function () {
      return o(t, r, arguments)
    };
    a ? a(e.exports, "apply", {
      value: E
    }) : e.exports.apply = E
  }
  )(yt);
  var jo = De
    , qo = yt.exports
    , fs = qo(jo("String.prototype.indexOf"))
    , lt = function (t, n) {
      var r = jo(t, !!n);
      return typeof r == "function" && fs(t, ".prototype.") > -1 ? qo(r) : r
    }
    , Ts = De
    , Ls = Ts("%TypeError%")
    , Ns = function (t, n) {
      if (t == null)
        throw new Ls(n || "Cannot call method on " + t);
      return t
    }
    , $n = Ns
    , Cs = De
    , eS = Cs("%Array%")
    , Ds = !eS.isArray && lt("Object.prototype.toString")
    , hs = eS.isArray || function (t) {
      return Ds(t) === "[object Array]"
    }
    , tS = De
    , vs = lt
    , Us = tS("%TypeError%")
    , gs = hs
    , ms = tS("%Reflect.apply%", !0) || vs("%Function.prototype.apply%")
    , Ps = function (t, n) {
      var r = arguments.length > 2 ? arguments[2] : [];
      if (!gs(r))
        throw new Us("Assertion failed: optional `argumentsList`, if provided, must be a List");
      return ms(t, n, r)
    }
    , Ms = {}
    , ys = Object.freeze(Object.defineProperty({
      __proto__: null,
      default: Ms
    }, Symbol.toStringTag, {
      value: "Module"
    }))
    , Ys = yE(ys)
    , xr = typeof Map == "function" && Map.prototype
    , rr = Object.getOwnPropertyDescriptor && xr ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null
    , Hn = xr && rr && typeof rr.get == "function" ? rr.get : null
    , Bs = xr && Map.prototype.forEach
    , Wr = typeof Set == "function" && Set.prototype
    , ir = Object.getOwnPropertyDescriptor && Wr ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null
    , Gn = Wr && ir && typeof ir.get == "function" ? ir.get : null
    , Hs = Wr && Set.prototype.forEach
    , Gs = typeof WeakMap == "function" && WeakMap.prototype
    , $t = Gs ? WeakMap.prototype.has : null
    , bs = typeof WeakSet == "function" && WeakSet.prototype
    , kt = bs ? WeakSet.prototype.has : null
    , ps = typeof WeakRef == "function" && WeakRef.prototype
    , Ci = ps ? WeakRef.prototype.deref : null
    , Ks = Boolean.prototype.valueOf
    , ws = Object.prototype.toString
    , Fs = Function.prototype.toString
    , xs = String.prototype.match
    , _r = String.prototype.slice
    , Qe = String.prototype.replace
    , Ws = String.prototype.toUpperCase
    , Di = String.prototype.toLowerCase
    , nS = RegExp.prototype.test
    , hi = Array.prototype.concat
    , Ge = Array.prototype.join
    , _s = Array.prototype.slice
    , vi = Math.floor
    , Tr = typeof BigInt == "function" ? BigInt.prototype.valueOf : null
    , or = Object.getOwnPropertySymbols
    , Lr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null
    , gt = typeof Symbol == "function" && typeof Symbol.iterator == "object"
    , Ne = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === gt ? "object" : "symbol") ? Symbol.toStringTag : null
    , rS = Object.prototype.propertyIsEnumerable
    , Ui = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (e) {
      return e.__proto__
    }
      : null);
  function gi(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e !== e || e && e > -1e3 && e < 1e3 || nS.call(/e/, t))
      return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof e == "number") {
      var r = e < 0 ? -vi(-e) : vi(e);
      if (r !== e) {
        var i = String(r)
          , o = _r.call(t, i.length + 1);
        return Qe.call(i, n, "$&_") + "." + Qe.call(Qe.call(o, /([0-9]{3})/g, "$&_"), /_$/, "")
      }
    }
    return Qe.call(t, n, "$&_")
  }
  var Sr = Ys.custom
    , ar = Sr && oS(Sr) ? Sr : null
    , $s = function e(t, n, r, i) {
      var o = n || {};
      if (ze(o, "quoteStyle") && o.quoteStyle !== "single" && o.quoteStyle !== "double")
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      if (ze(o, "maxStringLength") && (typeof o.maxStringLength == "number" ? o.maxStringLength < 0 && o.maxStringLength !== 1 / 0 : o.maxStringLength !== null))
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      var S = ze(o, "customInspect") ? o.customInspect : !0;
      if (typeof S != "boolean" && S !== "symbol")
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      if (ze(o, "indent") && o.indent !== null && o.indent !== "	" && !(parseInt(o.indent, 10) === o.indent && o.indent > 0))
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      if (ze(o, "numericSeparator") && typeof o.numericSeparator != "boolean")
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      var a = o.numericSeparator;
      if (typeof t == "undefined")
        return "undefined";
      if (t === null)
        return "null";
      if (typeof t == "boolean")
        return t ? "true" : "false";
      if (typeof t == "string")
        return aS(t, o);
      if (typeof t == "number") {
        if (t === 0)
          return 1 / 0 / t > 0 ? "0" : "-0";
        var l = String(t);
        return a ? gi(t, l) : l
      }
      if (typeof t == "bigint") {
        var E = String(t) + "n";
        return a ? gi(t, E) : E
      }
      var s = typeof o.depth == "undefined" ? 5 : o.depth;
      if (typeof r == "undefined" && (r = 0),
        r >= s && s > 0 && typeof t == "object")
        return Nr(t) ? "[Array]" : "[Object]";
      var u = sl(o, r);
      if (typeof i == "undefined")
        i = [];
      else if (SS(i, t) >= 0)
        return "[Circular]";
      function c(z, re, te) {
        if (re && (i = _s.call(i),
          i.push(re)),
          te) {
          var Ae = {
            depth: o.depth
          };
          return ze(o, "quoteStyle") && (Ae.quoteStyle = o.quoteStyle),
            e(z, Ae, r + 1, i)
        }
        return e(z, o, r + 1, i)
      }
      if (typeof t == "function") {
        var A = el(t)
          , R = sn(t, c);
        return "[Function" + (A ? ": " + A : " (anonymous)") + "]" + (R.length > 0 ? " { " + Ge.call(R, ", ") + " }" : "")
      }
      if (oS(t)) {
        var I = gt ? Qe.call(String(t), /^(Symbol\(.*\))_[^)]*$/, "$1") : Lr.call(t);
        return typeof t == "object" && !gt ? Gt(I) : I
      }
      if (Sl(t)) {
        for (var f = "<" + Di.call(String(t.nodeName)), T = t.attributes || [], C = 0; C < T.length; C++)
          f += " " + T[C].name + "=" + iS(ks(T[C].value), "double", o);
        return f += ">",
          t.childNodes && t.childNodes.length && (f += "..."),
          f += "</" + Di.call(String(t.nodeName)) + ">",
          f
      }
      if (Nr(t)) {
        if (t.length === 0)
          return "[]";
        var D = sn(t, c);
        return u && !El(D) ? "[" + Cr(D, u) + "]" : "[ " + Ge.call(D, ", ") + " ]"
      }
      if (Xs(t)) {
        var L = sn(t, c);
        return "cause" in t && !rS.call(t, "cause") ? "{ [" + String(t) + "] " + Ge.call(hi.call("[cause]: " + c(t.cause), L), ", ") + " }" : L.length === 0 ? "[" + String(t) + "]" : "{ [" + String(t) + "] " + Ge.call(L, ", ") + " }"
      }
      if (typeof t == "object" && S) {
        if (ar && typeof t[ar] == "function")
          return t[ar]();
        if (S !== "symbol" && typeof t.inspect == "function")
          return t.inspect()
      }
      if (tl(t)) {
        var U = [];
        return Bs.call(t, function (z, re) {
          U.push(c(re, t, !0) + " => " + c(z, t))
        }),
          mi("Map", Hn.call(t), U, u)
      }
      if (il(t)) {
        var d = [];
        return Hs.call(t, function (z) {
          d.push(c(z, t))
        }),
          mi("Set", Gn.call(t), d, u)
      }
      if (nl(t))
        return Er("WeakMap");
      if (ol(t))
        return Er("WeakSet");
      if (rl(t))
        return Er("WeakRef");
      if (zs(t))
        return Gt(c(Number(t)));
      if (js(t))
        return Gt(c(Tr.call(t)));
      if (Qs(t))
        return Gt(Ks.call(t));
      if (Js(t))
        return Gt(c(String(t)));
      if (!Vs(t) && !Zs(t)) {
        var P = sn(t, c)
          , h = Ui ? Ui(t) === Object.prototype : t instanceof Object || t.constructor === Object
          , N = t instanceof Object ? "" : "null prototype"
          , B = !h && Ne && Object(t) === t && Ne in t ? _r.call(et(t), 8, -1) : N ? "Object" : ""
          , x = h || typeof t.constructor != "function" ? "" : t.constructor.name ? t.constructor.name + " " : ""
          , W = x + (B || N ? "[" + Ge.call(hi.call([], B || [], N || []), ": ") + "] " : "");
        return P.length === 0 ? W + "{}" : u ? W + "{" + Cr(P, u) + "}" : W + "{ " + Ge.call(P, ", ") + " }"
      }
      return String(t)
    };
  function iS(e, t, n) {
    var r = (n.quoteStyle || t) === "double" ? '"' : "'";
    return r + e + r
  }
  function ks(e) {
    return Qe.call(String(e), /"/g, "&quot;")
  }
  function Nr(e) {
    return et(e) === "[object Array]" && (!Ne || !(typeof e == "object" && Ne in e))
  }
  function Vs(e) {
    return et(e) === "[object Date]" && (!Ne || !(typeof e == "object" && Ne in e))
  }
  function Zs(e) {
    return et(e) === "[object RegExp]" && (!Ne || !(typeof e == "object" && Ne in e))
  }
  function Xs(e) {
    return et(e) === "[object Error]" && (!Ne || !(typeof e == "object" && Ne in e))
  }
  function Js(e) {
    return et(e) === "[object String]" && (!Ne || !(typeof e == "object" && Ne in e))
  }
  function zs(e) {
    return et(e) === "[object Number]" && (!Ne || !(typeof e == "object" && Ne in e))
  }
  function Qs(e) {
    return et(e) === "[object Boolean]" && (!Ne || !(typeof e == "object" && Ne in e))
  }
  function oS(e) {
    if (gt)
      return e && typeof e == "object" && e instanceof Symbol;
    if (typeof e == "symbol")
      return !0;
    if (!e || typeof e != "object" || !Lr)
      return !1;
    try {
      return Lr.call(e),
        !0
    } catch (t) { }
    return !1
  }
  function js(e) {
    if (!e || typeof e != "object" || !Tr)
      return !1;
    try {
      return Tr.call(e),
        !0
    } catch (t) { }
    return !1
  }
  var qs = Object.prototype.hasOwnProperty || function (e) {
    return e in this
  }
    ;
  function ze(e, t) {
    return qs.call(e, t)
  }
  function et(e) {
    return ws.call(e)
  }
  function el(e) {
    if (e.name)
      return e.name;
    var t = xs.call(Fs.call(e), /^function\s*([\w$]+)/);
    return t ? t[1] : null
  }
  function SS(e, t) {
    if (e.indexOf)
      return e.indexOf(t);
    for (var n = 0, r = e.length; n < r; n++)
      if (e[n] === t)
        return n;
    return -1
  }
  function tl(e) {
    if (!Hn || !e || typeof e != "object")
      return !1;
    try {
      Hn.call(e);
      try {
        Gn.call(e)
      } catch (t) {
        return !0
      }
      return e instanceof Map
    } catch (t) { }
    return !1
  }
  function nl(e) {
    if (!$t || !e || typeof e != "object")
      return !1;
    try {
      $t.call(e, $t);
      try {
        kt.call(e, kt)
      } catch (t) {
        return !0
      }
      return e instanceof WeakMap
    } catch (t) { }
    return !1
  }
  function rl(e) {
    if (!Ci || !e || typeof e != "object")
      return !1;
    try {
      return Ci.call(e),
        !0
    } catch (t) { }
    return !1
  }
  function il(e) {
    if (!Gn || !e || typeof e != "object")
      return !1;
    try {
      Gn.call(e);
      try {
        Hn.call(e)
      } catch (t) {
        return !0
      }
      return e instanceof Set
    } catch (t) { }
    return !1
  }
  function ol(e) {
    if (!kt || !e || typeof e != "object")
      return !1;
    try {
      kt.call(e, kt);
      try {
        $t.call(e, $t)
      } catch (t) {
        return !0
      }
      return e instanceof WeakSet
    } catch (t) { }
    return !1
  }
  function Sl(e) {
    return !e || typeof e != "object" ? !1 : typeof HTMLElement != "undefined" && e instanceof HTMLElement ? !0 : typeof e.nodeName == "string" && typeof e.getAttribute == "function"
  }
  function aS(e, t) {
    if (e.length > t.maxStringLength) {
      var n = e.length - t.maxStringLength
        , r = "... " + n + " more character" + (n > 1 ? "s" : "");
      return aS(_r.call(e, 0, t.maxStringLength), t) + r
    }
    var i = Qe.call(Qe.call(e, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, al);
    return iS(i, "single", t)
  }
  function al(e) {
    var t = e.charCodeAt(0)
      , n = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[t];
    return n ? "\\" + n : "\\x" + (t < 16 ? "0" : "") + Ws.call(t.toString(16))
  }
  function Gt(e) {
    return "Object(" + e + ")"
  }
  function Er(e) {
    return e + " { ? }"
  }
  function mi(e, t, n, r) {
    var i = r ? Cr(n, r) : Ge.call(n, ", ");
    return e + " (" + t + ") {" + i + "}"
  }
  function El(e) {
    for (var t = 0; t < e.length; t++)
      if (SS(e[t], `
`) >= 0)
        return !1;
    return !0
  }
  function sl(e, t) {
    var n;
    if (e.indent === "	")
      n = "	";
    else if (typeof e.indent == "number" && e.indent > 0)
      n = Ge.call(Array(e.indent + 1), " ");
    else
      return null;
    return {
      base: n,
      prev: Ge.call(Array(t + 1), n)
    }
  }
  function Cr(e, t) {
    if (e.length === 0)
      return "";
    var n = `
` + t.prev + t.base;
    return n + Ge.call(e, "," + n) + `
` + t.prev
  }
  function sn(e, t) {
    var n = Nr(e)
      , r = [];
    if (n) {
      r.length = e.length;
      for (var i = 0; i < e.length; i++)
        r[i] = ze(e, i) ? t(e[i], e) : ""
    }
    var o = typeof or == "function" ? or(e) : [], S;
    if (gt) {
      S = {};
      for (var a = 0; a < o.length; a++)
        S["$" + o[a]] = o[a]
    }
    for (var l in e)
      !ze(e, l) || n && String(Number(l)) === l && l < e.length || gt && S["$" + l] instanceof Symbol || (nS.call(/[^\w$]/, l) ? r.push(t(l, e) + ": " + t(e[l], e)) : r.push(l + ": " + t(e[l], e)));
    if (typeof or == "function")
      for (var E = 0; E < o.length; E++)
        rS.call(e, o[E]) && r.push("[" + t(o[E]) + "]: " + t(e[o[E]], e));
    return r
  }
  var ES = function (t) {
    return typeof t == "string" || typeof t == "symbol"
  }, ll = function (t) {
    if (t === null)
      return "Null";
    if (typeof t == "undefined")
      return "Undefined";
    if (typeof t == "function" || typeof t == "object")
      return "Object";
    if (typeof t == "number")
      return "Number";
    if (typeof t == "boolean")
      return "Boolean";
    if (typeof t == "string")
      return "String"
  }, Al = ll, $r = function (t) {
    return typeof t == "symbol" ? "Symbol" : typeof t == "bigint" ? "BigInt" : Al(t)
  }, cl = De, Pi = cl("%TypeError%"), ul = $s, Ol = ES, Rl = $r, sS = function (t, n) {
    if (Rl(t) !== "Object")
      throw new Pi("Assertion failed: Type(O) is not Object");
    if (!Ol(n))
      throw new Pi("Assertion failed: IsPropertyKey(P) is not true, got " + ul(n));
    return t[n]
  }, Il = De, Mi = Il("%TypeError%"), dl = ES, fl = $r, Tl = function (t, n) {
    if (fl(t) !== "Object")
      throw new Mi("Assertion failed: `O` must be an Object");
    if (!dl(n))
      throw new Mi("Assertion failed: `P` must be a Property Key");
    return n in t
  }, lS = Function.prototype.toString, dt = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Dr, Nn;
  if (typeof dt == "function" && typeof Object.defineProperty == "function")
    try {
      Dr = Object.defineProperty({}, "length", {
        get: function () {
          throw Nn
        }
      }),
        Nn = {},
        dt(function () {
          throw 42
        }, null, Dr)
    } catch (e) {
      e !== Nn && (dt = null)
    }
  else
    dt = null;
  var Ll = /^\s*class\b/
    , hr = function (t) {
      try {
        var n = lS.call(t);
        return Ll.test(n)
      } catch (r) {
        return !1
      }
    }
    , Nl = function (t) {
      try {
        return hr(t) ? !1 : (lS.call(t),
          !0)
      } catch (n) {
        return !1
      }
    }
    , Cl = Object.prototype.toString
    , Dl = "[object Function]"
    , hl = "[object GeneratorFunction]"
    , vl = typeof Symbol == "function" && !!Symbol.toStringTag
    , yi = typeof document == "object" && typeof document.all == "undefined" && document.all !== void 0 ? document.all : {}
    , kr = dt ? function (t) {
      if (t === yi)
        return !0;
      if (!t || typeof t != "function" && typeof t != "object")
        return !1;
      if (typeof t == "function" && !t.prototype)
        return !0;
      try {
        dt(t, null, Dr)
      } catch (n) {
        if (n !== Nn)
          return !1
      }
      return !hr(t)
    }
      : function (t) {
        if (t === yi)
          return !0;
        if (!t || typeof t != "function" && typeof t != "object")
          return !1;
        if (typeof t == "function" && !t.prototype)
          return !0;
        if (vl)
          return Nl(t);
        if (hr(t))
          return !1;
        var n = Cl.call(t);
        return n === Dl || n === hl
      }
    , Ul = kr
    , AS = De
    , gl = AS("%Math%")
    , ml = AS("%Number%")
    , Pl = ml.MAX_SAFE_INTEGER || gl.pow(2, 53) - 1
    , Ml = De
    , yl = Ml("%Math.abs%")
    , Yl = function (t) {
      return yl(t)
    }
    , Bl = Math.floor
    , Hl = function (t) {
      return Bl(t)
    }
    , cS = function (t) {
      return t === null || typeof t != "function" && typeof t != "object"
    }
    , Gl = Object.prototype.toString
    , uS = cS
    , bl = kr
    , Yi = {
      "[[DefaultValue]]": function (e) {
        var t;
        if (arguments.length > 1 ? t = arguments[1] : t = Gl.call(e) === "[object Date]" ? String : Number,
          t === String || t === Number) {
          var n = t === String ? ["toString", "valueOf"] : ["valueOf", "toString"], r, i;
          for (i = 0; i < n.length; ++i)
            if (bl(e[n[i]]) && (r = e[n[i]](),
              uS(r)))
              return r;
          throw new TypeError("No default value")
        }
        throw new TypeError("invalid [[DefaultValue]] hint supplied")
      }
    }
    , pl = function (t) {
      return uS(t) ? t : arguments.length > 1 ? Yi["[[DefaultValue]]"](t, arguments[1]) : Yi["[[DefaultValue]]"](t)
    }
    , Kl = pl
    , wl = Kl
    , Fl = function (t) {
      var n = wl(t, Number);
      if (typeof n != "string")
        return +n;
      var r = n.replace(/^[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+|[ \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u0085]+$/g, "");
      return /^0[ob]|^[+-]0x/.test(r) ? NaN : +r
    }
    , xl = Number.isNaN || function (t) {
      return t !== t
    }
    , Wl = Number.isNaN || function (e) {
      return e !== e
    }
    , _l = Number.isFinite || function (e) {
      return typeof e == "number" && !Wl(e) && e !== 1 / 0 && e !== -1 / 0
    }
    , $l = function (t) {
      return t >= 0 ? 1 : -1
    }
    , kl = Yl
    , Vl = Hl
    , Zl = Fl
    , Xl = xl
    , Jl = _l
    , zl = $l
    , Ql = function (t) {
      var n = Zl(t);
      return Xl(n) ? 0 : n === 0 || !Jl(n) ? n : zl(n) * Vl(kl(n))
    }
    , jl = De
    , ql = jl("RegExp.prototype.test")
    , eA = yt.exports
    , tA = function (t) {
      return eA(ql, t)
    }
    , nA = function (t) {
      return t === null || typeof t != "function" && typeof t != "object"
    }
    , rA = Xo
    , OS = function () {
      return rA() && !!Symbol.toStringTag
    }
    , iA = Date.prototype.getDay
    , oA = function (t) {
      try {
        return iA.call(t),
          !0
      } catch (n) {
        return !1
      }
    }
    , SA = Object.prototype.toString
    , aA = "[object Date]"
    , EA = OS()
    , sA = function (t) {
      return typeof t != "object" || t === null ? !1 : EA ? oA(t) : SA.call(t) === aA
    }
    , vr = {
      exports: {}
    }
    , lA = Object.prototype.toString
    , AA = Jo();
  if (AA) {
    var cA = Symbol.prototype.toString
      , uA = /^Symbol\(.*\)$/
      , OA = function (t) {
        return typeof t.valueOf() != "symbol" ? !1 : uA.test(cA.call(t))
      };
    vr.exports = function (t) {
      if (typeof t == "symbol")
        return !0;
      if (lA.call(t) !== "[object Symbol]")
        return !1;
      try {
        return OA(t)
      } catch (n) {
        return !1
      }
    }
  } else
    vr.exports = function (t) {
      return !1
    }
      ;
  var RA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
    , Ur = cS
    , RS = kr
    , IA = sA
    , Bi = vr.exports
    , dA = function (t, n) {
      if (typeof t == "undefined" || t === null)
        throw new TypeError("Cannot call method on " + t);
      if (typeof n != "string" || n !== "number" && n !== "string")
        throw new TypeError('hint must be "string" or "number"');
      var r = n === "string" ? ["toString", "valueOf"] : ["valueOf", "toString"], i, o, S;
      for (S = 0; S < r.length; ++S)
        if (i = t[r[S]],
          RS(i) && (o = i.call(t),
            Ur(o)))
          return o;
      throw new TypeError("No default value")
    }
    , fA = function (t, n) {
      var r = t[n];
      if (r !== null && typeof r != "undefined") {
        if (!RS(r))
          throw new TypeError(r + " returned for property " + n + " of object " + t + " is not a function");
        return r
      }
    }
    , TA = function (t) {
      if (Ur(t))
        return t;
      var n = "default";
      arguments.length > 1 && (arguments[1] === String ? n = "string" : arguments[1] === Number && (n = "number"));
      var r;
      if (RA && (Symbol.toPrimitive ? r = fA(t, Symbol.toPrimitive) : Bi(t) && (r = Symbol.prototype.valueOf)),
        typeof r != "undefined") {
        var i = r.call(t, n);
        if (Ur(i))
          return i;
        throw new TypeError("unable to convert exotic object to primitive")
      }
      return n === "default" && (IA(t) || Bi(t)) && (n = "string"),
        dA(t, n === "default" ? "number" : n)
    }
    , Hi = TA
    , LA = function (t) {
      return arguments.length > 1 ? Hi(t, arguments[1]) : Hi(t)
    }
    , kn = De
    , Gi = kn("%TypeError%")
    , bi = kn("%Number%")
    , NA = kn("%RegExp%")
    , pi = kn("%parseInt%")
    , IS = lt
    , Vn = tA
    , CA = nA
    , Ki = IS("String.prototype.slice")
    , DA = Vn(/^0b[01]+$/i)
    , hA = Vn(/^0o[0-7]+$/i)
    , vA = Vn(/^[-+]0x[0-9a-f]+$/i)
    , UA = ["\x85", "\u200B", "\uFFFE"].join("")
    , gA = new NA("[" + UA + "]", "g")
    , mA = Vn(gA)
    , wi = [`
\v\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003`, "\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028", "\u2029\uFEFF"].join("")
    , PA = new RegExp("(^[" + wi + "]+)|([" + wi + "]+$)", "g")
    , MA = IS("String.prototype.replace")
    , yA = function (e) {
      return MA(e, PA, "")
    }
    , YA = LA
    , BA = function e(t) {
      var n = CA(t) ? t : YA(t, bi);
      if (typeof n == "symbol")
        throw new Gi("Cannot convert a Symbol value to a number");
      if (typeof n == "bigint")
        throw new Gi("Conversion from 'BigInt' to 'number' is not allowed.");
      if (typeof n == "string") {
        if (DA(n))
          return e(pi(Ki(n, 2), 2));
        if (hA(n))
          return e(pi(Ki(n, 2), 8));
        if (mA(n) || vA(n))
          return NaN;
        var r = yA(n);
        if (r !== n)
          return e(r)
      }
      return bi(n)
    }
    , HA = Ql
    , GA = BA
    , bA = function (t) {
      var n = GA(t);
      return n !== 0 && (n = HA(n)),
        n === 0 ? 0 : n
    }
    , Fi = Pl
    , pA = bA
    , KA = function (t) {
      var n = pA(t);
      return n <= 0 ? 0 : n > Fi ? Fi : n
    }
    , wA = De
    , FA = wA("%TypeError%")
    , xA = sS
    , WA = KA
    , _A = $r
    , $A = function (t) {
      if (_A(t) !== "Object")
        throw new FA("Assertion failed: `obj` must be an Object");
      return WA(xA(t, "length"))
    }
    , kA = De
    , VA = kA("%Object%")
    , ZA = $n
    , XA = function (t) {
      return ZA(t),
        VA(t)
    }
    , dS = De
    , JA = dS("%String%")
    , zA = dS("%TypeError%")
    , fS = function (t) {
      if (typeof t == "symbol")
        throw new zA("Cannot convert a Symbol value to a string");
      return JA(t)
    }
    , QA = String.prototype.valueOf
    , jA = function (t) {
      try {
        return QA.call(t),
          !0
      } catch (n) {
        return !1
      }
    }
    , qA = Object.prototype.toString
    , ec = "[object String]"
    , tc = OS()
    , nc = function (t) {
      return typeof t == "string" ? !0 : typeof t != "object" ? !1 : tc ? jA(t) : qA.call(t) === ec
    }
    , rc = De
    , ic = lt
    , oc = rc("%TypeError%")
    , Sc = Ps
    , ac = sS
    , Ec = Tl
    , sc = Ul
    , lc = $A
    , Ac = XA
    , cc = fS
    , uc = nc
    , Oc = ic("String.prototype.split")
    , xi = Object("a")
    , Rc = xi[0] !== "a" || !(0 in xi)
    , TS = function (t) {
      var n = Ac(this)
        , r = Rc && uc(this) ? Oc(this, "") : n
        , i = lc(r);
      if (!sc(t))
        throw new oc("Array.prototype.forEach callback must be a function");
      var o;
      arguments.length > 1 && (o = arguments[1]);
      for (var S = 0; S < i;) {
        var a = cc(S)
          , l = Ec(r, a);
        if (l) {
          var E = ac(r, a);
          Sc(t, o, [E, S, r])
        }
        S += 1
      }
    }
    , Ic = function (t) {
      var n = !0
        , r = !0
        , i = !1;
      if (typeof t == "function") {
        try {
          t.call("f", function (o, S, a) {
            typeof a != "object" && (n = !1)
          }),
            t.call([null], function () {
              "use strict";
              r = typeof this == "string"
            }, "x")
        } catch (o) {
          i = !0
        }
        return !i && n && r
      }
      return !1
    }
    , dc = Ic
    , fc = TS
    , LS = function () {
      var t = Array.prototype.forEach;
      return dc(t) ? t : fc
    }
    , Tc = Mt
    , Lc = LS
    , Nc = function () {
      var t = Lc();
      return Tc(Array.prototype, {
        forEach: t
      }, {
        forEach: function () {
          return Array.prototype.forEach !== t
        }
      }),
        t
    }
    , Cc = Mt
    , Dc = yt.exports
    , hc = lt
    , vc = $n
    , Uc = TS
    , NS = LS
    , gc = NS()
    , mc = Nc
    , Pc = hc("Array.prototype.slice")
    , Mc = Dc.apply(gc)
    , CS = function (t, n) {
      return vc(t),
        Mc(t, Pc(arguments, 1))
    };
  Cc(CS, {
    getPolyfill: NS,
    implementation: Uc,
    shim: mc
  });
  var yc = CS
    , Yc = $n
    , DS = lt
    , Bc = DS("Object.prototype.propertyIsEnumerable")
    , Hc = DS("Array.prototype.push")
    , hS = function (t) {
      var n = Yc(t)
        , r = [];
      for (var i in n)
        Bc(n, i) && Hc(r, [i, n[i]]);
      return r
    }
    , Gc = hS
    , vS = function () {
      return typeof Object.entries == "function" ? Object.entries : Gc
    }
    , bc = vS
    , pc = Mt
    , Kc = function () {
      var t = bc();
      return pc(Object, {
        entries: t
      }, {
        entries: function () {
          return Object.entries !== t
        }
      }),
        t
    }
    , wc = Mt
    , Fc = yt.exports
    , xc = hS
    , US = vS
    , Wc = Kc
    , gS = Fc(US(), Object);
  wc(gS, {
    getPolyfill: US,
    implementation: xc,
    shim: Wc
  });
  var _c = gS
    , $c = $n
    , kc = fS
    , Vc = lt
    , Wi = Vc("String.prototype.replace")
    , Zc = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/
    , Xc = /[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+$/
    , mS = function () {
      var t = kc($c(this));
      return Wi(Wi(t, Zc, ""), Xc, "")
    }
    , Jc = mS
    , _i = "\u200B"
    , PS = function () {
      return String.prototype.trim && _i.trim() === _i ? String.prototype.trim : Jc
    }
    , zc = Mt
    , Qc = PS
    , jc = function () {
      var t = Qc();
      return zc(String.prototype, {
        trim: t
      }, {
        trim: function () {
          return String.prototype.trim !== t
        }
      }),
        t
    }
    , qc = yt.exports
    , eu = Mt
    , tu = mS
    , MS = PS
    , nu = jc
    , yS = qc(MS());
  eu(yS, {
    getPolyfill: MS,
    implementation: tu,
    shim: nu
  });
  var ru = yS
    , bn = yc
    , Vr = _c
    , YS = zo
    , iu = ru
    , ou = function (t) { }
    , Su = String.prototype.replace
    , BS = String.prototype.split
    , Cn = "||||"
    , sr = function (e) {
      var t = e % 100
        , n = t % 10;
      return t !== 11 && n === 1 ? 0 : 2 <= n && n <= 4 && !(t >= 12 && t <= 14) ? 1 : 2
    }
    , HS = {
      pluralTypes: {
        arabic: function (e) {
          if (e < 3)
            return e;
          var t = e % 100;
          return t >= 3 && t <= 10 ? 3 : t >= 11 ? 4 : 5
        },
        bosnian_serbian: sr,
        chinese: function () {
          return 0
        },
        croatian: sr,
        french: function (e) {
          return e >= 2 ? 1 : 0
        },
        german: function (e) {
          return e !== 1 ? 1 : 0
        },
        russian: sr,
        lithuanian: function (e) {
          return e % 10 === 1 && e % 100 !== 11 ? 0 : e % 10 >= 2 && e % 10 <= 9 && (e % 100 < 11 || e % 100 > 19) ? 1 : 2
        },
        czech: function (e) {
          return e === 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2
        },
        polish: function (e) {
          if (e === 1)
            return 0;
          var t = e % 10;
          return 2 <= t && t <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2
        },
        icelandic: function (e) {
          return e % 10 !== 1 || e % 100 === 11 ? 1 : 0
        },
        slovenian: function (e) {
          var t = e % 100;
          return t === 1 ? 0 : t === 2 ? 1 : t === 3 || t === 4 ? 2 : 3
        }
      },
      pluralTypeToLanguages: {
        arabic: ["ar"],
        bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
        chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
        croatian: ["hr", "hr-HR"],
        german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
        french: ["fr", "tl", "pt-br"],
        russian: ["ru", "ru-RU"],
        lithuanian: ["lt"],
        czech: ["cs", "cs-CZ", "sk"],
        polish: ["pl"],
        icelandic: ["is"],
        slovenian: ["sl-SL"]
      }
    };
  function au(e) {
    var t = {};
    return bn(Vr(e), function (n) {
      var r = n[0]
        , i = n[1];
      bn(i, function (o) {
        t[o] = r
      })
    }),
      t
  }
  function Eu(e, t) {
    var n = au(e.pluralTypeToLanguages);
    return n[t] || n[BS.call(t, /-/, 1)[0]] || n.en
  }
  function su(e, t, n) {
    return e.pluralTypes[t](n)
  }
  function lu() {
    var e = {};
    return function (t, n) {
      var r = e[n];
      return r && !t.pluralTypes[r] && (r = null,
        e[n] = r),
        r || (r = Eu(t, n),
          r && (e[n] = r)),
        r
    }
  }
  function $i(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  }
  function Au(e) {
    var t = e && e.prefix || "%{"
      , n = e && e.suffix || "}";
    if (t === Cn || n === Cn)
      throw new RangeError('"' + Cn + '" token is reserved for pluralization');
    return new RegExp($i(t) + "(.*?)" + $i(n), "g")
  }
  var cu = lu()
    , uu = /%\{(.*?)\}/g;
  function Zr(e, t, n, r, i) {
    if (typeof e != "string")
      throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
    if (t == null)
      return e;
    var o = e
      , S = r || uu
      , a = typeof t == "number" ? {
        smart_count: t
      } : t;
    if (a.smart_count != null && e) {
      var l = i || HS
        , E = BS.call(e, Cn)
        , s = n || "en"
        , u = cu(l, s)
        , c = su(l, u, a.smart_count);
      o = iu(E[c] || E[0])
    }
    return o = Su.call(o, S, function (A, R) {
      return !YS(a, R) || a[R] == null ? A : a[R]
    }),
      o
  }
  function Xe(e) {
    var t = e || {};
    this.phrases = {},
      this.extend(t.phrases || {}),
      this.currentLocale = t.locale || "en";
    var n = t.allowMissing ? Zr : null;
    this.onMissingKey = typeof t.onMissingKey == "function" ? t.onMissingKey : n,
      this.warn = t.warn || ou,
      this.tokenRegex = Au(t.interpolation),
      this.pluralRules = t.pluralRules || HS
  }
  Xe.prototype.locale = function (e) {
    return e && (this.currentLocale = e),
      this.currentLocale
  }
    ;
  Xe.prototype.extend = function (e, t) {
    bn(Vr(e || {}), function (n) {
      var r = n[0]
        , i = n[1]
        , o = t ? t + "." + r : r;
      typeof i == "object" ? this.extend(i, o) : this.phrases[o] = i
    }, this)
  }
    ;
  Xe.prototype.unset = function (e, t) {
    typeof e == "string" ? delete this.phrases[e] : bn(Vr(e || {}), function (n) {
      var r = n[0]
        , i = n[1]
        , o = t ? t + "." + r : r;
      typeof i == "object" ? this.unset(i, o) : delete this.phrases[o]
    }, this)
  }
    ;
  Xe.prototype.clear = function () {
    this.phrases = {}
  }
    ;
  Xe.prototype.replace = function (e) {
    this.clear(),
      this.extend(e)
  }
    ;
  Xe.prototype.t = function (e, t) {
    var n, r, i = t == null ? {} : t;
    if (typeof this.phrases[e] == "string")
      n = this.phrases[e];
    else if (typeof i._ == "string")
      n = i._;
    else if (this.onMissingKey) {
      var o = this.onMissingKey;
      r = o(e, i, this.currentLocale, this.tokenRegex, this.pluralRules)
    } else
      this.warn('Missing translation for key: "' + e + '"'),
        r = e;
    return typeof n == "string" && (r = Zr(n, i, this.currentLocale, this.tokenRegex, this.pluralRules)),
      r
  }
    ;
  Xe.prototype.has = function (e) {
    return YS(this.phrases, e)
  }
    ;
  Xe.transformPhrase = function (t, n, r) {
    return Zr(t, n, r)
  }
    ;
  var Ou = Xe;
  const Ru = {
    appName: "Quordle",
    keywords: "wordle, quordle, game, puzzle, word, words, letters, play, online, guess, brain teaser, dordle",
    description: "Put your skills to the test and solve four Wordles at once! You have 9 guesses to solve all four words. A new Quordle available each day to solve.",
    webAddress: "quordle.com",
    noJs: "You need to enable JavaScript to run this app.",
    error404: "404",
    oops: "Oops!",
    pageNotFound: "Page not found",
    notFoundText: "The page you're looking for doesn't exist.",
    backToDaily: "Back to Daily Quordle",
    close: "Close",
    dictionaryUrl: "https://www.merriam-webster.com/dictionary/%{word}"
  }
    , Iu = {
      aria: {
        openMoreOptions: "Open More Options Dropdown",
        openPage: "Open %{page} Page"
      },
      title: "Quordle",
      daily: "Daily",
      practice: "Practice",
      settings: "Settings",
      dailyStats: "Daily Stats",
      practiceStats: "Practice Stats",
      donate: "Donate",
      patreon: "Patreon",
      help: "Help",
      moreOptions: "More Options",
      achievements: "Achievements"
    }
    , du = {
      keyboardHeight: "Keyboard Height (%{height})",
      gameSize: "Game Size",
      gameFit: "Fit Screen",
      gameSquare: "Always Square Tiles",
      currentSeed: "Current Practice Game Seed",
      gameSeedDescription: "The input field below allows you to set a custom seed for a practice game. This is useful for sharing the same seed between multiple people (so that everyone can play with the same answers).",
      gameSeedInputLabel: "New Practice Game Seed",
      gameSeedInputPlaceholder: "Enter game seed here!",
      startNewPractice: "Start New Practice Game",
      startNewPracticeWarning: "Warning: Starting a new game will count as a loss!",
      copySeedToClipboard: "Copy Game Seed to Clipboard",
      copiedSeedToClipboardAlert: 'Copied practice game seed "%{seed}" to clipboard!',
      resetPractice: "Reset Current Practice",
      resetWarning: "Warning: Resetting will count as a loss!",
      darkMode: "Dark Mode",
      colorblindMode: "Colorblind Mode",
      vibration: "Vibration",
      switchKeys: "Switch Keys (%{example})",
      switchKeysInfo: "Toggle to switch enter and backspace keys on the keyboard. Currently set as %{left} on the left and %{right} on the right.",
      achievementNotifs: "Achievement Notifications"
    }
    , fu = {
      aria: {
        played: "total number of %{mode} games played is %{num}",
        winPercent: "%{mode} win percentage is %{num}%",
        numGames: "%{smart_count} game |||| %{smart_count} games",
        numGuesses: "%{smart_count} guess |||| %{smart_count} guesses",
        numWords: "%{smart_count} word |||| %{smart_count} words",
        currentStreak: "%{mode} current win streak is %{numGames}",
        maxStreak: "%{mode} maximum win streak is %{numGames}",
        winChartBar: "%{numGames} completed in %{numGuesses}",
        winRateRatio: "Win rate ratio. Click to see loss distribution.",
        lossChartBar: "%{numGames} lost with %{numWords} missed"
      },
      dailyStatistics: "Daily Statistics",
      practiceStatistics: "Practice Statistics",
      played: "Played",
      winPercent: "Win %",
      currentStreak: `Current
Streak`,
      maxStreak: `Max
Streak`,
      winDistribution: "Win Distribution",
      winDistExplain: "(total # guesses to complete all 4 words)",
      win: "Win",
      loss: "Loss",
      lossDistribution: "Loss Distribution",
      lossDistExplain: "(# words missed)"
    }
    , Tu = {
      aria: {
        tutorialGuess: "Tutorial guess %{guess}.",
        tutorialGuessBoard: "Tutorial guess %{guess} in game board %{num}.",
        quordlePatrons: "Quordle Patrons"
      },
      tutorial: "Tutorial",
      title: "Guess all four Quordle words in 9 tries.",
      p1: "Each guess must be a valid 5 letter word. Hit the enter button to submit. After each guess, the color of the tiles will change to show how close your guess was to the word.",
      examples: "Examples",
      exampleWord1: "CROWN",
      exampleWord2: "BADGE",
      exampleWord3: "COMFY",
      exampleWord4: "WORLD",
      example1: "The letter C is in the word and in the correct spot.",
      example2: "The letter A is in the word but in the wrong spot.",
      example3: "The letters C, O, M, F, Y are not in the word in any spot. When you type a guess in Quordle, you will guess that word for all four words that you are solving. All four words you are solving will be different.",
      example4Title: "For the guess WORLD:",
      example4b1: "The top left word has none of the letters.",
      example4b2: "The top right word has the R in the wrong spot and the D in the correct spot.",
      example4b3: "The bottom left word has the L in the wrong spot.",
      example4b4: "The bottom right word has the O in the right spot and the D in the wrong spot.",
      final1: "You have 9 guesses to get all 4 words correct. Good luck!",
      final2: "A new Quordle will be available each day!",
      author: "Created by Freddie Meyer",
      supporters: "Supporters",
      patronsThank: "A huge thank you to everyone that supports Quordle and a special thank you to all the Patrons!",
      historyTitle: "History of Quordle",
      history: `It all started on January 29, 2022 when I saw an article mentioning <a href='https://zaratustra.itch.io/dordle' target='_blank' style='text-decoration-line:underline;'>Dordle</a> by Guilherme S. T\xF6ws and we all started playing it as a group. It was a blast to play something more difficult than Wordle, but we still found it uncommon to fail to guess both words in 7 attempts.

The first prototype of Quordle was released on January 30th and linked to the group chat. It was truly horrific code (it even had 2 keyboards \u{1F605}), but I knew that I had to continue the madness.

Over the next few weeks I rewrote the code from scratch, removed the second keyboard, and added the color quadrant keyboard. I even added Google Analytics thinking it would be funny to see the stats for our friend group playing.

At first it was just a few dozen players (there was a group of 20-30 people in Ohio that were playing constantly the first few days). But then Quordle got written about in an article in <a href='https://www.theguardian.com/games/2022/feb/06/worried-about-losing-wordle-here-are-some-alternatives-just-in-case' target='_blank' style='text-decoration-line:underline;'>The Guardian</a> and things exploded quickly from there. Now Quordle has over 2 million players daily and has had over 40 million total players.

A shoutout to our friend that plays relentlessly while indoor cycling. You were the drive to create a better version and your passion made me realize it could be popular outside of our friend group. I am so glad the world has been thoroughly cursed by Quordle and can't wait to see how Quordle strategies evolve!

I deeply appreciate watching everyone enjoy this insane game and couldn't have done it without Guilherme S. T\xF6ws and David Mah. If you have any ideas for Quordle or just want to chat, check out the socials posted above.`,
      twitter: "Twitter",
      github: "Github",
      facebook: "Facebook",
      reddit: "Reddit",
      instagram: "Instagram",
      discord: "Discord",
      twitch: "Twitch"
    }
    , Lu = {
      achievementAndXOthers: "%{achievement} and %{smart_count} other achievement |||| %{achievement} and %{smart_count} other achievements",
      win_practice: "Practice Makes Perfect (%{num})",
      win_practice_desc: "Win %{smart_count} practice game. |||| Win %{smart_count} practice games.",
      win_daily: "Slow and Steady (%{num})",
      win_daily_desc: "Win %{smart_count} daily game. |||| Win %{smart_count} daily games.",
      streak_practice: "Relentless (%{num})",
      streak_practice_desc: "Reach a maximum streak of %{num} in practice.",
      streak_daily: "Unbreakable (%{num})",
      streak_daily_desc: "Reach a maximum streak of %{num} for the daily.",
      win_in_9: "Niner",
      win_in_9_desc: "Win a game in 9 turns.",
      win_in_8: "Par",
      win_in_8_desc: "Win a game in 8 turns.",
      win_in_7: "Birdie",
      win_in_7_desc: "Win a game in 7 turns.",
      win_in_6: "Eagle",
      win_in_6_desc: "Win a game in 6 turns.",
      win_in_5: "Albatross",
      win_in_5_desc: "Win a game in 5 turns.",
      win_in_4: "God Mode",
      win_in_4_desc: "Win a game in 4 turns.",
      guess_word_2_same_letter: "Double or Nothing",
      guess_word_2_same_letter_desc: "Guess a word with 2 of the same letter.",
      guess_word_3_same_letter: "Wooow",
      guess_word_3_same_letter_desc: "Guess a word with 3 of the same letter.",
      correct_turn_1: "One in a Million",
      correct_turn_1_desc: "Guess an answer correctly on turn 1.",
      share: "Spread the Word",
      share_desc: "Share a practice or daily game result.",
      donate: "Spread the Love",
      donate_desc: "Donate to Quordle.",
      lose_1_wrong: "So Close",
      lose_1_wrong_desc: "Lose a game with 1 missed word.",
      lose_2_wrong: "Getting the Hang of It",
      lose_2_wrong_desc: "Lose a game with 2 missed words.",
      lose_3_wrong: "Step It Up",
      lose_3_wrong_desc: "Lose a game with 3 missed words.",
      lose_4_wrong: "Are You Even Trying?",
      lose_4_wrong_desc: "Lose a game with 4 missed words.",
      play_words: "The More the Merrier (%{num})",
      play_words_desc: "Play %{smart_count} word in practice or daily. |||| Play %{smart_count} words in practice or daily."
    }
    , Nu = {
      aria: {
        blank: "Blank",
        tileNever: "'%{letter}' (letter %{column}) is never guessable (board is complete)",
        tileFuture: "'%{letter}' (letter %{column}) is a future guess",
        tileInvalid: "'%{letter}' (letter %{column}) is an invalid guess",
        tilePresent: "'%{letter}' (letter %{column}) is being guessed",
        tileDiff: "'%{letter}' (letter %{column}) is in a different spot",
        tileNone: "'%{letter}' (letter %{column}) is incorrect",
        tileCorrect: "'%{letter}' (letter %{column}) is correct",
        keyboard: "Keyboard",
        keyboardRow: "Keyboard Row %{row}",
        key: "'%{letter}' key. %{info}.",
        keyInfoDelimiter: ". ",
        keyNotGuessed: "Not guessed",
        keyIncorrectAll: "Incorrect in all game boards",
        keyDiff: "Different spot in game board %{board}",
        keyNone: "Incorrect in game board %{board}",
        keyCorrect: "Correct in game board %{board}",
        gameCompleteBanner: "Game complete banner",
        shareBanner: "Game results and share banner",
        shareAnswer: "Answer is %{word} for game board %{board}. %{solved}",
        shareAnswerSolved: "Solved in %{smart_count} guess. |||| Solved in %{smart_count} guesses.",
        shareAnswerUnsolved: "Unsolved.",
        shareAnswerLinkDesc: "Link to word definition"
      },
      dailyQuordleShare: "Daily Quordle %{num}",
      practiceQuordleShare: "Practice Quordle",
      dailyQuordleFoolsShare: "Daily Quordle Fools %{num}!",
      practiceQuordleFoolsShare: "Practice Quordle Fools!",
      hoursDuration: "in %{smart_count} hour |||| in %{smart_count} hours",
      minutesDuration: "in %{smart_count} minute |||| in %{smart_count} minutes",
      secondsDuration: "in %{smart_count} second |||| in %{smart_count} seconds",
      newPractice: "New Practice Game",
      nextDaily: "Next Daily %{duration}",
      dailyResetTimer: "Daily will reset %{duration}",
      complete: "Quordle Complete!",
      soClose: "So Close!",
      betterLuck: "Better Luck Next Time!",
      supportByDonating: "Support by Donating",
      copiedResults: "Copied results to clipboard!",
      errorCopy: "Error copying results to clipboard!",
      share: "Share",
      shareImage: "Share Image",
      saveImage: "Save Image",
      copyClipboard: "Copy to Clipboard",
      enterKey: "Enter Key",
      backspaceKey: "Backspace Key",
      alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      keyboard: `Q W E R T Y U I O P
A S D F G H J K L
bs Z X C V B N M enter`,
      keyboardReversed: `Q W E R T Y U I O P
A S D F G H J K L
enter Z X C V B N M bs`
    };
  var Cu = {
    app: Ru,
    header: Iu,
    settings: du,
    stats: fu,
    tutorial: Tu,
    achievements: Lu,
    game: Nu
  };
  const Du = ct(Me({}, Cu), {
    blacklist: "GYPSY GIPSY MAMMY AGORA SLAVE HUSSY JUNTA JUNTO WELCH MORON",
    wordBank: "ABACK ABASE ABATE ABBEY ABBOT ABHOR ABIDE ABLED ABODE ABORT ABOUT ABOVE ABUSE ABYSS ACORN ACRID ACTOR ACUTE ADAGE ADAPT ADEPT ADMIN ADMIT ADOBE ADOPT ADORE ADORN ADULT AFFIX AFIRE AFOOT AFOUL AFTER AGAIN AGAPE AGATE AGENT AGILE AGING AGLOW AGONY AGORA AGREE AHEAD AIDER AISLE ALARM ALBUM ALERT ALGAE ALIBI ALIEN ALIGN ALIKE ALIVE ALLAY ALLEY ALLOT ALLOW ALLOY ALOFT ALONE ALONG ALOOF ALOUD ALPHA ALTAR ALTER AMASS AMAZE AMBER AMBLE AMEND AMISS AMITY AMONG AMPLE AMPLY AMUSE ANGEL ANGER ANGLE ANGRY ANGST ANIME ANKLE ANNEX ANNOY ANNUL ANODE ANTIC ANVIL AORTA APART APHID APING APNEA APPLE APPLY APRON APTLY ARBOR ARDOR ARENA ARGUE ARISE ARMOR AROMA AROSE ARRAY ARROW ARSON ARTSY ASCOT ASHEN ASIDE ASKEW ASSAY ASSET ATOLL ATONE ATTIC AUDIO AUDIT AUGUR AUNTY AVAIL AVERT AVIAN AVOID AWAIT AWAKE AWARD AWARE AWASH AWFUL AWOKE AXIAL AXIOM AXION AZURE BACON BADGE BADLY BAGEL BAGGY BAKER BALER BALMY BANAL BANJO BARGE BARON BASAL BASIC BASIL BASIN BASIS BASTE BATCH BATHE BATON BATTY BAWDY BAYOU BEACH BEADY BEARD BEAST BEECH BEEFY BEFIT BEGAN BEGAT BEGET BEGIN BEGUN BEING BELCH BELIE BELLE BELLY BELOW BENCH BERET BERRY BERTH BESET BETEL BEVEL BEZEL BIBLE BICEP BIDDY BIGOT BILGE BILLY BINGE BINGO BIOME BIRCH BIRTH BISON BITTY BLACK BLADE BLAME BLAND BLANK BLARE BLAST BLAZE BLEAK BLEAT BLEED BLEEP BLEND BLESS BLIMP BLIND BLINK BLISS BLITZ BLOAT BLOCK BLOKE BLOND BLOOD BLOOM BLOWN BLUER BLUFF BLUNT BLURB BLURT BLUSH BOARD BOAST BOBBY BONEY BONGO BONUS BOOBY BOOST BOOTH BOOTY BOOZE BOOZY BORAX BORNE BOSOM BOSSY BOTCH BOUGH BOULE BOUND BOWEL BOXER BRACE BRAID BRAIN BRAKE BRAND BRASH BRASS BRAVE BRAVO BRAWL BRAWN BREAD BREAK BREED BRIAR BRIBE BRICK BRIDE BRIEF BRINE BRING BRINK BRINY BRISK BROAD BROIL BROKE BROOD BROOK BROOM BROTH BROWN BRUNT BRUSH BRUTE BUDDY BUDGE BUGGY BUGLE BUILD BUILT BULGE BULKY BULLY BUNCH BUNNY BURLY BURNT BURST BUSED BUSHY BUTCH BUTTE BUXOM BUYER BYLAW CABAL CABBY CABIN CABLE CACAO CACHE CACTI CADDY CADET CAGEY CAIRN CAMEL CAMEO CANAL CANDY CANNY CANOE CANON CAPER KAPUT CARAT CARGO CAROL CARRY CARVE CASTE CATCH CATER CATTY CAULK CAUSE CAVIL CEASE CEDAR CELLO CHAFE CHAFF CHAIN CHAIR CHALK CHAMP CHANT CHAOS CHARD CHARM CHART CHASE CHASM CHEAP CHEAT CHECK CHEEK CHEER CHESS CHEST CHICK CHIDE CHIEF CHILD CHILI CHILL CHIME CHINA CHIRP CHOCK CHOIR CHOKE CHORD CHORE CHOSE CHUCK CHUMP CHUNK CHURN CHUTE CIDER CIGAR CINCH CIRCA CIVIC CIVIL CLACK CLAIM CLAMP CLANG CLANK CLASH CLASP CLASS CLEAN CLEAR CLEAT CLEFT CLERK CLICK CLIFF CLIMB CLING CLINK CLOAK CLOCK CLONE CLOSE CLOTH CLOUD CLOUT CLOVE CLOWN CLUCK CLUED CLUMP CLUNG COACH COAST COBRA COCOA COLON COLOR COMET COMFY COMIC COMMA CONCH CONDO CONIC COPSE CORAL CORER CORNY COUCH COUGH COULD COUNT COUPE COURT COVEN COVER COVET COVEY COWER COYLY CRACK CRAFT CRAMP CRANE CRANK CRASH CRASS CRATE CRAVE CRAWL CRAZE CRAZY CREAK CREAM CREDO CREED CREEK CREEP CREME CREPE CREPT CRESS CREST CRICK CRIED CRIER CRIME CRIMP CRISP CROAK CROCK CRONE CRONY CROOK CROSS CROUP CROWD CROWN CRUDE CRUEL CRUMB CRUMP CRUSH CRUST CRYPT CUBIC CUMIN CURIO CURLY CURRY CURSE CURVE CURVY CUTIE CYBER CYCLE CYNIC DADDY DAILY DAIRY DAISY DALLY DANCE DANDY DATUM DAUNT DEALT DEATH DEBAR DEBIT DEBUG DEBUT DECAL DECAY DECOR DECOY DECRY DEFER DEIGN DEITY DELAY DELTA DELVE DEMON DEMUR DENIM DENSE DEPOT DEPTH DERBY DETER DETOX DEUCE DEVIL DIARY DICEY DIGIT DILLY DIMLY DINER DINGO DINGY DIODE DIRGE DIRTY DISCO DITCH DITTO DITTY DIVER DIZZY DODGE DODGY DOGMA DOING DOLLY DONOR DONUT DOPEY DOUBT DOUGH DOWDY DOWEL DOWNY DOWRY DOZEN DRAFT DRAIN DRAKE DRAMA DRANK DRAPE DRAWL DRAWN DREAD DREAM DRESS DRIED DRIER DRIFT DRILL DRINK DRIVE DROIT DROLL DRONE DROOL DROOP DROSS DROVE DROWN DRUID DRUNK DRYER DRYLY DUCHY DULLY DUMMY DUMPY DUNCE DUSKY DUSTY DUTCH DUVET DWARF DWELL DWELT DYING EAGER EAGLE EARLY EARTH EASEL EATEN EATER EBONY ECLAT EDICT EDIFY EERIE EGRET EIGHT EJECT EKING ELATE ELBOW ELDER ELECT ELEGY ELFIN ELIDE ELITE ELOPE ELUDE EMAIL EMBED EMBER EMCEE EMPTY ENACT ENDOW ENEMA ENEMY ENJOY ENNUI ENSUE ENTER ENTRY ENVOY EPOCH EPOXY EQUAL EQUIP ERASE ERECT ERODE ERROR ERUPT ESSAY ESTER ETHER ETHIC ETHOS ETUDE EVADE EVENT EVERY EVICT EVOKE EXACT EXALT EXCEL EXERT EXILE EXIST EXPEL EXTOL EXTRA EXULT EYING FABLE FACET FAINT FAIRY FAITH FALSE FANCY FANNY FARCE FATAL FATTY FAULT FAUNA FAVOR FEAST FECAL FEIGN FELLA FELON FEMME FEMUR FENCE FERAL FERRY FETAL FETCH FETID FETUS FEVER FEWER FIBER FIBRE FICUS FIELD FIEND FIERY FIFTH FIFTY FIGHT FILER FILET FILLY FILMY FILTH FINAL FINCH FINER FIRST FISHY FIXER FIZZY FJORD FLACK FLAIL FLAIR FLAKE FLAKY FLAME FLANK FLARE FLASH FLASK FLECK FLEET FLESH FLICK FLIER FLING FLINT FLIRT FLOAT FLOCK FLOOD FLOOR FLORA FLOSS FLOUR FLOUT FLOWN FLUFF FLUID FLUKE FLUME FLUNG FLUNK FLUSH FLUTE FLYER FOAMY FOCAL FOCUS FOGGY FOIST FOLIO FOLLY FORAY FORCE FORGE FORGO FORTE FORTH FORTY FORUM FOUND FOYER FRAIL FRAME FRANK FRAUD FREAK FREED FREER FRESH FRIAR FRIED FRILL FRISK FRITZ FROCK FROND FRONT FROST FROTH FROWN FROZE FRUIT FUDGE FUGUE FULLY FUNGI FUNKY FUNNY FUROR FURRY FUSSY FUZZY GAFFE GAILY GAMER GAMMA GAMUT GASSY GAUDY GAUGE GAUNT GAUZE GAVEL GAWKY GAYER GAYLY GAZER GECKO GEEKY GEESE GENIE GENRE GHOST GHOUL GIANT GIDDY GIPSY GIRLY GIRTH GIVEN GIVER GLADE GLAND GLARE GLASS GLAZE GLEAM GLEAN GLIDE GLINT GLOAT GLOBE GLOOM GLORY GLOSS GLOVE GLYPH GNASH GNOME GODLY GOING GOLEM GOLLY GONAD GONER GOODY GOOEY GOOFY GOOSE GORGE GOUGE GOURD GRACE GRADE GRAFT GRAIL GRAIN GRAND GRANT GRAPE GRAPH GRASP GRASS GRATE GRAVE GRAVY GRAZE GREAT GREED GREEN GREET GRIEF GRILL GRIME GRIMY GRIND GRIPE GROAN GROIN GROOM GROPE GROSS GROUP GROUT GROVE GROWL GROWN GRUEL GRUFF GRUNT GUARD GUAVA GUESS GUEST GUIDE GUILD GUILE GUILT GUISE GULCH GULLY GUMBO GUMMY GUPPY GUSTO GUSTY GYPSY HABIT HAIRY HALVE HANDY HAPPY HARDY HAREM HARPY HARRY HARSH HASTE HASTY HATCH HATER HAUNT HAUTE HAVEN HAVOC HAZEL HEADY HEARD HEART HEATH HEAVE HEAVY HEDGE HEFTY HEIST HELIX HELLO HENCE HERON HILLY HINGE HIPPO HIPPY HITCH HOARD HOBBY HOIST HOLLY HOMER HONEY HONOR HORDE HORNY HORSE HOTEL HOTLY HOUND HOUSE HOVEL HOVER HOWDY HUMAN HUMID HUMOR HUMPH HUMUS HUNCH HUNKY HURRY HUSKY HUSSY HUTCH HYDRO HYENA HYMEN HYPER ICILY ICING IDEAL IDIOM IDIOT IDLER IDYLL IGLOO ILIAC IMAGE IMBUE IMPEL IMPLY INANE INBOX INCUR INDEX INEPT INERT INFER INGOT INLAY INLET INNER INPUT INTER INTRO IONIC IRATE IRONY ISLET ISSUE ITCHY IVORY JAUNT JAZZY JELLY JERKY JETTY JEWEL JIFFY JOINT JOIST JOKER JOLLY JOUST JUDGE JUICE JUICY JUMBO JUMPY JUNTA JUNTO JUROR KAPPA KARMA KAYAK KEBAB KHAKI KINKY KIOSK KITTY KNACK KNAVE KNEAD KNEED KNEEL KNELT KNIFE KNOCK KNOLL KNOWN KOALA KRILL LABEL LABOR LADEN LADLE LAGER LANCE LANKY LAPEL LAPSE LARGE LARVA LASSO LATCH LATER LATHE LATTE LAUGH LAYER LEACH LEAFY LEAKY LEANT LEAPT LEARN LEASE LEASH LEAST LEAVE LEDGE LEECH LEERY LEFTY LEGAL LEGGY LEMON LEMUR LEPER LEVEL LEVER LIBEL LIEGE LIGHT LIKEN LILAC LIMBO LIMIT LINEN LINER LINGO LIPID LITHE LIVER LIVID LLAMA LOAMY LOATH LOBBY LOCAL LOCUS LODGE LOFTY LOGIC LOGIN LOOPY LOOSE LORRY LOSER LOUSE LOUSY LOVER LOWER LOWLY LOYAL LUCID LUCKY LUMEN LUMPY LUNAR LUNCH LUNGE LUPUS LURCH LURID LUSTY LYING LYMPH LYNCH LYRIC MACAW MACHO MACRO MADAM MADLY MAFIA MAGIC MAGMA MAIZE MAJOR MAKER MAMBO MAMMA MAMMY MANGA MANGE MANGO MANGY MANIA MANIC MANLY MANOR MAPLE MARCH MARRY MARSH MASON MASSE MATCH MATEY MAUVE MAXIM MAYBE MAYOR MEALY MEANT MEATY MECCA MEDAL MEDIA MEDIC MELEE MELON MERCY MERGE MERIT MERRY METAL METER METRO MICRO MIDGE MIDST MIGHT MILKY MIMIC MINCE MINER MINIM MINOR MINTY MINUS MIRTH MISER MISSY MOCHA MODAL MODEL MODEM MOGUL MOIST MOLAR MOLDY MONEY MONTH MOODY MOOSE MORAL MORON MORPH MOSSY MOTEL MOTIF MOTOR MOTTO MOULT MOUND MOUNT MOURN MOUSE MOUTH MOVER MOVIE MOWER MUCKY MUCUS MUDDY MULCH MUMMY MUNCH MURAL MURKY MUSHY MUSIC MUSKY MUSTY MYRRH NADIR NAIVE NANNY NASAL NASTY NATAL NAVAL NAVEL NEEDY NEIGH NERDY NERVE NEVER NEWER NEWLY NICER NICHE NIECE NIGHT NINJA NINNY NINTH NOBLE NOBLY NOISE NOISY NOMAD NOOSE NORTH NOSEY NOTCH NOVEL NUDGE NURSE NUTTY NYLON NYMPH OAKEN OBESE OCCUR OCEAN OCTAL OCTET ODDER ODDLY OFFAL OFFER OFTEN OLDEN OLDER OLIVE OMBRE OMEGA ONION ONSET OPERA OPINE OPIUM OPTIC ORBIT ORDER ORGAN OTHER OTTER OUGHT OUNCE OUTDO OUTER OUTGO OVARY OVATE OVERT OVINE OVOID OWING OWNER OXIDE OZONE PADDY PAGAN PAINT PALER PALSY PANEL PANIC PANSY PAPAL PAPER PARER PARKA PARRY PARSE PARTY PASTA PASTE PASTY PATCH PATIO PATSY PATTY PAUSE PAYEE PAYER PEACE PEACH PEARL PECAN PEDAL PENAL PENCE PENNE PENNY PERCH PERIL PERKY PESKY PESTO PETAL PETTY PHASE PHONE PHONY PHOTO PIANO PICKY PIECE PIETY PIGGY PILOT PINCH PINEY PINKY PINTO PIPER PIQUE PITCH PITHY PIVOT PIXEL PIXIE PIZZA PLACE PLAID PLAIN PLAIT PLANE PLANK PLANT PLATE PLAZA PLEAD PLEAT PLIED PLIER PLUCK PLUMB PLUME PLUMP PLUNK PLUSH POESY POINT POISE POKER POLAR POLKA POLYP POOCH POPPY PORCH POSER POSIT POSSE POUCH POUND POUTY POWER PRANK PRAWN PREEN PRESS PRICE PRICK PRIDE PRIED PRIME PRIMO PRINT PRIOR PRISM PRIVY PRIZE PROBE PRONE PRONG PROOF PROSE PROUD PROVE PROWL PROXY PRUDE PRUNE PSALM PUBIC PUDGY PUFFY PULPY PULSE PUNCH PUPAL PUPIL PUPPY PUREE PURER PURGE PURSE PUSHY PUTTY PYGMY QUACK QUAIL QUAKE QUALM QUARK QUART QUASH QUASI QUEEN QUEER QUELL QUERY QUEST QUEUE QUICK QUIET QUILL QUILT QUIRK QUITE QUOTA QUOTE QUOTH RABBI RABID RACER RADAR RADII RADIO RAINY RAISE RAJAH RALLY RALPH RAMEN RANCH RANDY RANGE RAPID RARER RASPY RATIO RATTY RAVEN RAYON RAZOR REACH REACT READY REALM REARM REBAR REBEL REBUS REBUT RECAP RECUR RECUT REEDY REFER REFIT REGAL REHAB REIGN RELAX RELAY RELIC REMIT RENAL RENEW REPAY REPEL REPLY RERUN RESET RESIN RETCH RETRO RETRY REUSE REVEL REVUE RHINO RHYME RIDER RIDGE RIFLE RIGHT RIGID RIGOR RINSE RIPEN RIPER RISEN RISER RISKY RIVAL RIVER RIVET ROACH ROAST ROBIN ROBOT ROCKY RODEO ROGER ROGUE ROOMY ROOST ROTOR ROUGE ROUGH ROUND ROUSE ROUTE ROVER ROWDY ROWER ROYAL RUDDY RUDER RUGBY RULER RUMBA RUMOR RUPEE RURAL RUSTY SADLY SAFER SAINT SALAD SALLY SALON SALSA SALTY SALVE SALVO SANDY SANER SAPPY SASSY SATIN SATYR SAUCE SAUCY SAUNA SAUTE SAVOR SAVOY SAVVY SCALD SCALE SCALP SCALY SCAMP SCANT SCARE SCARF SCARY SCENE SCENT SCION SCOFF SCOLD SCONE SCOOP SCOPE SCORE SCORN SCOUR SCOUT SCOWL SCRAM SCRAP SCREE SCREW SCRUB SCRUM SCUBA SEDAN SEEDY SEGUE SEIZE SEMEN SENSE SEPIA SERIF SERUM SERVE SETUP SEVEN SEVER SEWER SHACK SHADE SHADY SHAFT SHAKE SHAKY SHALE SHALL SHALT SHAME SHANK SHAPE SHARD SHARE SHARK SHARP SHAVE SHAWL SHEAR SHEEN SHEEP SHEER SHEET SHEIK SHELF SHELL SHIED SHIFT SHINE SHINY SHIRE SHIRK SHIRT SHOAL SHOCK SHONE SHOOK SHOOT SHORE SHORN SHORT SHOUT SHOVE SHOWN SHOWY SHREW SHRUB SHRUG SHUCK SHUNT SHUSH SHYLY SIEGE SIEVE SIGHT SIGMA SILKY SILLY SINCE SINEW SINGE SIREN SISSY SIXTH SIXTY SKATE SKIER SKIFF SKILL SKIMP SKIRT SKULK SKULL SKUNK SLACK SLAIN SLANG SLANT SLASH SLATE SLAVE SLEEK SLEEP SLEET SLEPT SLICE SLICK SLIDE SLIME SLIMY SLING SLINK SLOOP SLOPE SLOSH SLOTH SLUMP SLUNG SLUNK SLURP SLUSH SLYLY SMACK SMALL SMART SMASH SMEAR SMELL SMELT SMILE SMIRK SMITE SMITH SMOCK SMOKE SMOKY SMOTE SNACK SNAIL SNAKE SNAKY SNARE SNARL SNEAK SNEER SNIDE SNIFF SNIPE SNOOP SNORE SNORT SNOUT SNOWY SNUCK SNUFF SOAPY SOBER SOGGY SOLAR SOLID SOLVE SONAR SONIC SOOTH SOOTY SORRY SOUND SOUTH SOWER SPACE SPADE SPANK SPARE SPARK SPASM SPAWN SPEAK SPEAR SPECK SPEED SPELL SPELT SPEND SPENT SPERM SPICE SPICY SPIED SPIEL SPIKE SPIKY SPILL SPILT SPINE SPINY SPIRE SPITE SPLAT SPLIT SPOIL SPOKE SPOOF SPOOK SPOOL SPOON SPORE SPORT SPOUT SPRAY SPREE SPRIG SPUNK SPURN SPURT SQUAD SQUAT SQUIB STACK STAFF STAGE STAID STAIN STAIR STAKE STALE STALK STALL STAMP STAND STANK STARE STARK START STASH STATE STAVE STEAD STEAK STEAL STEAM STEED STEEL STEEP STEER STEIN STERN STICK STIFF STILL STILT STING STINK STINT STOCK STOIC STOKE STOLE STOMP STONE STONY STOOD STOOL STOOP STORE STORK STORM STORY STOUT STOVE STRAP STRAW STRAY STRIP STRUT STUCK STUDY STUFF STUMP STUNG STUNK STUNT STYLE SUAVE SUGAR SUING SUITE SULKY SULLY SUMAC SUNNY SUPER SURER SURGE SURLY SUSHI SWAMI SWAMP SWARM SWASH SWATH SWEAR SWEAT SWEEP SWEET SWELL SWEPT SWIFT SWILL SWINE SWING SWIRL SWISH SWOON SWOOP SWORD SWORE SWORN SWUNG SYNOD SYRUP TABBY TABLE TABOO TACIT TACKY TAFFY TAINT TAKEN TAKER TALLY TALON TAMER TANGO TANGY TAPER TAPIR TARDY TAROT TASTE TASTY TATTY TAUNT TAWNY TEACH TEARY TEASE TEDDY TEETH TEMPO TENET TENOR TENSE TENTH TEPEE TEPID TERRA TERSE TESTY THANK THEFT THEIR THEME THERE THESE THETA THICK THIEF THIGH THING THINK THIRD THONG THORN THOSE THREE THREW THROB THROW THRUM THUMB THUMP THYME TIARA TIBIA TIDAL TIGER TIGHT TILDE TIMER TIMID TIPSY TITAN TITHE TITLE TOAST TODAY TODDY TOKEN TONAL TONGA TONIC TOOTH TOPAZ TOPIC TORCH TORSO TORUS TOTAL TOTEM TOUCH TOUGH TOWEL TOWER TOXIC TOXIN TRACE TRACK TRACT TRADE TRAIL TRAIN TRAIT TRAMP TRASH TRAWL TREAD TREAT TREND TRIAD TRIAL TRIBE TRICE TRICK TRIED TRIPE TRITE TROLL TROOP TROPE TROUT TROVE TRUCE TRUCK TRUER TRULY TRUMP TRUNK TRUSS TRUST TRUTH TRYST TUBAL TUBER TULIP TULLE TUMOR TUNIC TURBO TUTOR TWANG TWEAK TWEED TWEET TWICE TWINE TWIRL TWIST TWIXT TYING UDDER ULCER ULTRA UMBRA UNCLE UNCUT UNDER UNDID UNDUE UNFED UNFIT UNIFY UNION UNITE UNITY UNLIT UNMET UNSET UNTIE UNTIL UNWED UNZIP UPPER UPSET URBAN URINE USAGE USHER USING USUAL USURP UTILE UTTER VAGUE VALET VALID VALOR VALUE VALVE VAPID VAPOR VAULT VAUNT VEGAN VENOM VENUE VERGE VERSE VERSO VERVE VICAR VIDEO VIGIL VIGOR VILLA VINYL VIOLA VIPER VIRAL VIRUS VISIT VISOR VISTA VITAL VIVID VIXEN VOCAL VODKA VOGUE VOICE VOILA VOMIT VOTER VOUCH VOWEL VYING WACKY WAFER WAGER WAGON WAIST WAIVE WALTZ WARTY WASTE WATCH WATER WAVER WAXEN WEARY WEAVE WEDGE WEEDY WEIGH WEIRD WELCH WELSH WENCH WHACK WHALE WHARF WHEAT WHEEL WHELP WHERE WHICH WHIFF WHILE WHINE WHINY WHIRL WHISK WHITE WHOLE WHOOP WHOSE WIDEN WIDER WIDOW WIDTH WIELD WIGHT WILLY WIMPY WINCE WINCH WINDY WISER WISPY WITCH WITTY WOKEN WOMAN WOMEN WOODY WOOER WOOLY WOOZY WORDY WORLD WORRY WORSE WORST WORTH WOULD WOUND WOVEN WRACK WRATH WREAK WRECK WREST WRING WRIST WRITE WRONG WROTE WRUNG WRYLY YACHT YEARN YEAST YIELD YOUNG YOUTH ZEBRA ZESTY ZONAL",
    allowed: "AAHED AALII AARGH AARTI ABACA ABACI ABACS ABAFT ABAKA ABAMP ABAND ABASH ABASK ABAYA ABBAS ABBED ABBES ABCEE ABEAM ABEAR ABELE ABERS ABETS ABIES ABLER ABLES ABLET ABLOW ABMHO ABOHM ABOIL ABOMA ABOON ABORD ABORE ABRAM ABRAY ABRIM ABRIN ABRIS ABSEY ABSIT ABUNA ABUNE ABUTS ABUZZ ABYES ABYSM ACAIS ACARI ACCAS ACCOY ACERB ACERS ACETA ACHAR ACHED ACHES ACHOO ACIDS ACIDY ACING ACINI ACKEE ACKER ACMES ACMIC ACNED ACNES ACOCK ACOLD ACRED ACRES ACROS ACTED ACTIN ACTON ACYLS ADAWS ADAYS ADBOT ADDAX ADDED ADDER ADDIO ADDLE ADEEM ADHAN ADIEU ADIOS ADITS ADMAN ADMEN ADMIX ADOBO ADOWN ADOZE ADRAD ADRED ADSUM ADUKI ADUNC ADUST ADVEW ADYTA ADZED ADZES AECIA AEDES AEGIS AEONS AERIE AEROS AESIR AFALD AFARA AFARS AFEAR AFLAJ AFORE AFRIT AFROS AGAMA AGAMI AGARS AGAST AGAVE AGAZE AGENE AGERS AGGER AGGIE AGGRI AGGRO AGGRY AGHAS AGILA AGIOS AGISM AGIST AGITA AGLEE AGLET AGLEY AGLOO AGLUS AGMAS AGOGE AGONE AGONS AGOOD AGRIA AGRIN AGROS AGUED AGUES AGUNA AGUTI AHEAP AHENT AHIGH AHIND AHING AHINT AHOLD AHULL AHURU AIDAS AIDED AIDES AIDOI AIDOS AIERY AIGAS AIGHT AILED AIMED AIMER AINEE AINGA AIOLI AIRED AIRER AIRNS AIRTH AIRTS AITCH AITUS AIVER AIYEE AIZLE AJIES AJIVA AJUGA AJWAN AKEES AKELA AKENE AKING AKITA AKKAS ALAAP ALACK ALAMO ALAND ALANE ALANG ALANS ALANT ALAPA ALAPS ALARY ALATE ALAYS ALBAS ALBEE ALCID ALCOS ALDEA ALDER ALDOL ALECK ALECS ALEFS ALEFT ALEPH ALEWS ALEYE ALFAS ALGAL ALGAS ALGID ALGIN ALGOR ALGUM ALIAS ALIFS ALINE ALIST ALIYA ALKIE ALKOS ALKYD ALKYL ALLEE ALLEL ALLIS ALLOD ALLYL ALMAH ALMAS ALMEH ALMES ALMUD ALMUG ALODS ALOED ALOES ALOHA ALOIN ALOOS ALOWE ALTHO ALTOS ALULA ALUMS ALURE ALVAR ALWAY AMAHS AMAIN AMATE AMAUT AMBAN AMBIT AMBOS AMBRY AMEBA AMEER AMENE AMENS AMENT AMIAS AMICE AMICI AMIDE AMIDO AMIDS AMIES AMIGA AMIGO AMINE AMINO AMINS AMIRS AMLAS AMMAN AMMON AMMOS AMNIA AMNIC AMNIO AMOKS AMOLE AMORT AMOUR AMOVE AMOWT AMPED AMPUL AMRIT AMUCK AMYLS ANANA ANATA ANCHO ANCLE ANCON ANDRO ANEAR ANELE ANENT ANGAS ANGLO ANIGH ANILE ANILS ANIMA ANIMI ANION ANISE ANKER ANKHS ANKUS ANLAS ANNAL ANNAS ANNAT ANOAS ANOLE ANOMY ANSAE ANTAE ANTAR ANTAS ANTED ANTES ANTIS ANTRA ANTRE ANTSY ANURA ANYON APACE APAGE APAID APAYD APAYS APEAK APEEK APERS APERT APERY APGAR APHIS APIAN APIOL APISH APISM APODE APODS APOOP APORT APPAL APPAY APPEL APPRO APPUI APPUY APRES APSES APSIS APSOS APTED APTER AQUAE AQUAS ARABA ARAKS ARAME ARARS ARBAS ARCED ARCHI ARCOS ARCUS ARDEB ARDRI AREAD AREAE AREAL AREAR AREAS ARECA AREDD AREDE AREFY AREIC ARENE AREPA ARERE ARETE ARETS ARETT ARGAL ARGAN ARGIL ARGLE ARGOL ARGON ARGOT ARGUS ARHAT ARIAS ARIEL ARIKI ARILS ARIOT ARISH ARKED ARLED ARLES ARMED ARMER ARMET ARMIL ARNAS ARNUT AROBA AROHA AROID ARPAS ARPEN ARRAH ARRAS ARRET ARRIS ARROZ ARSED ARSES ARSEY ARSIS ARTAL ARTEL ARTIC ARTIS ARUHE ARUMS ARVAL ARVEE ARVOS ARYLS ASANA ASCON ASCUS ASDIC ASHED ASHES ASHET ASKED ASKER ASKOI ASKOS ASPEN ASPER ASPIC ASPIE ASPIS ASPRO ASSAI ASSAM ASSES ASSEZ ASSOT ASTER ASTIR ASTUN ASURA ASWAY ASWIM ASYLA ATAPS ATAXY ATIGI ATILT ATIMY ATLAS ATMAN ATMAS ATMOS ATOCS ATOKE ATOKS ATOMS ATOMY ATONY ATOPY ATRIA ATRIP ATTAP ATTAR ATUAS AUDAD AUGER AUGHT AULAS AULIC AULOI AULOS AUMIL AUNES AUNTS AURAE AURAL AURAR AURAS AUREI AURES AURIC AURIS AURUM AUTOS AUXIN AVALE AVANT AVAST AVELS AVENS AVERS AVGAS AVINE AVION AVISE AVISO AVIZE AVOWS AVYZE AWARN AWATO AWAVE AWAYS AWDLS AWEEL AWETO AWING AWMRY AWNED AWNER AWOLS AWORK AXELS AXILE AXILS AXING AXITE AXLED AXLES AXMAN AXMEN AXOID AXONE AXONS AYAHS AYAYA AYELP AYGRE AYINS AYONT AYRES AYRIE AZANS AZIDE AZIDO AZINE AZLON AZOIC AZOLE AZONS AZOTE AZOTH AZUKI AZURN AZURY AZYGY AZYME AZYMS BAAED BAALS BABAS BABEL BABES BABKA BABOO BABUL BABUS BACCA BACCO BACCY BACHA BACHS BACKS BADDY BAELS BAFFS BAFFY BAFTS BAGHS BAGIE BAHTS BAHUS BAHUT BAILS BAIRN BAISA BAITH BAITS BAIZA BAIZE BAJAN BAJRA BAJRI BAJUS BAKED BAKEN BAKES BAKRA BALAS BALDS BALDY BALED BALES BALKS BALKY BALLS BALLY BALMS BALOO BALSA BALTI BALUN BALUS BAMBI BANAK BANCO BANCS BANDA BANDH BANDS BANDY BANED BANES BANGS BANIA BANKS BANNS BANTS BANTU BANTY BANYA BAPUS BARBE BARBS BARBY BARCA BARDE BARDO BARDS BARDY BARED BARER BARES BARFI BARFS BARIC BARKS BARKY BARMS BARMY BARNS BARNY BARPS BARRA BARRE BARRO BARRY BARYE BASAN BASED BASEN BASER BASES BASHO BASIJ BASKS BASON BASSE BASSI BASSO BASSY BASTA BASTI BASTO BASTS BATED BATES BATHS BATIK BATTA BATTS BATTU BAUDS BAUKS BAULK BAURS BAVIN BAWDS BAWKS BAWLS BAWNS BAWRS BAWTY BAYED BAYER BAYES BAYLE BAYTS BAZAR BAZOO BEADS BEAKS BEAKY BEALS BEAMS BEAMY BEANO BEANS BEANY BEARE BEARS BEATH BEATS BEATY BEAUS BEAUT BEAUX BEBOP BECAP BECKE BECKS BEDAD BEDEL BEDES BEDEW BEDIM BEDYE BEEDI BEEFS BEEPS BEERS BEERY BEETS BEFOG BEGAD BEGAR BEGEM BEGOT BEGUM BEIGE BEIGY BEINS BEKAH BELAH BELAR BELAY BELEE BELGA BELLS BELON BELTS BEMAD BEMAS BEMIX BEMUD BENDS BENDY BENES BENET BENGA BENIS BENNE BENNI BENNY BENTO BENTS BENTY BEPAT BERAY BERES BERGS BERKO BERKS BERME BERMS BEROB BERYL BESAT BESAW BESEE BESES BESIT BESOM BESOT BESTI BESTS BETAS BETED BETES BETHS BETID BETON BETTA BETTY BEVER BEVOR BEVUE BEVVY BEWET BEWIG BEZES BEZIL BEZZY BHAIS BHAJI BHANG BHATS BHELS BHOOT BHUNA BHUTS BIACH BIALI BIALY BIBBS BIBES BICCY BICES BIDED BIDER BIDES BIDET BIDIS BIDON BIELD BIERS BIFFO BIFFS BIFFY BIFID BIGAE BIGGS BIGGY BIGHA BIGHT BIGLY BIGOS BIJOU BIKED BIKER BIKES BIKIE BILBO BILBY BILED BILES BILGY BILKS BILLS BIMAH BIMAS BIMBO BINAL BINDI BINDS BINER BINES BINGS BINGY BINIT BINKS BINTS BIOGS BIONT BIOTA BIPED BIPOD BIRDS BIRKS BIRLE BIRLS BIROS BIRRS BIRSE BIRSY BISES BISKS BISOM BITCH BITER BITES BITOS BITOU BITSY BITTE BITTS BIVIA BIVVY BIZES BIZZO BIZZY BLABS BLADS BLADY BLAER BLAES BLAFF BLAGS BLAHS BLAIN BLAMS BLART BLASE BLASH BLATE BLATS BLATT BLAUD BLAWN BLAWS BLAYS BLEAR BLEBS BLECH BLEES BLENT BLERT BLEST BLETS BLEYS BLIMY BLING BLINI BLINS BLINY BLIPS BLIST BLITE BLITS BLIVE BLOBS BLOCS BLOGS BLOOK BLOOP BLORE BLOTS BLOWS BLOWY BLUBS BLUDE BLUDS BLUDY BLUED BLUES BLUET BLUEY BLUID BLUME BLUNK BLURS BLYPE BOABS BOAKS BOARS BOART BOATS BOBAC BOBAK BOBAS BOBOL BOBOS BOCCA BOCCE BOCCI BOCHE BOCKS BODED BODES BODGE BODHI BODLE BOEPS BOETS BOEUF BOFFO BOFFS BOGAN BOGEY BOGGY BOGIE BOGLE BOGUE BOGUS BOHEA BOHOS BOILS BOING BOINK BOITE BOKED BOKEH BOKES BOKOS BOLAR BOLAS BOLDS BOLES BOLIX BOLLS BOLOS BOLTS BOLUS BOMAS BOMBE BOMBO BOMBS BONCE BONDS BONED BONER BONES BONGS BONIE BONKS BONNE BONNY BONZA BONZE BOOAI BOOAY BOOBS BOODY BOOED BOOFY BOOGY BOOHS BOOKS BOOKY BOOLS BOOMS BOOMY BOONG BOONS BOORD BOORS BOOSE BOOTS BOPPY BORAK BORAL BORAS BORDE BORDS BORED BOREE BOREL BORER BORES BORGO BORIC BORKS BORMS BORNA BORON BORTS BORTY BORTZ BOSIE BOSKS BOSKY BOSON BOSUN BOTAS BOTEL BOTES BOTHY BOTTE BOTTS BOTTY BOUGE BOUKS BOULT BOUNS BOURD BOURG BOURN BOUSE BOUSY BOUTS BOVID BOWAT BOWED BOWER BOWES BOWET BOWIE BOWLS BOWNE BOWRS BOWSE BOXED BOXEN BOXES BOXLA BOXTY BOYAR BOYAU BOYED BOYFS BOYGS BOYLA BOYOS BOYSY BOZOS BRAAI BRACH BRACK BRACT BRADS BRAES BRAGS BRAIL BRAKS BRAKY BRAME BRANE BRANK BRANS BRANT BRAST BRATS BRAVA BRAVI BRAWS BRAXY BRAYS BRAZA BRAZE BREAM BREDE BREDS BREEM BREER BREES BREID BREIS BREME BRENS BRENT BRERE BRERS BREVE BREWS BREYS BRIER BRIES BRIGS BRIKI BRIKS BRILL BRIMS BRINS BRIOS BRISE BRISS BRITH BRITS BRITT BRIZE BROCH BROCK BRODS BROGH BROGS BROME BROMO BRONC BROND BROOL BROOS BROSE BROSY BROWS BRUGH BRUIN BRUIT BRULE BRUME BRUNG BRUSK BRUST BRUTS BUATS BUAZE BUBAL BUBAS BUBBA BUBBE BUBBY BUBUS BUCHU BUCKO BUCKS BUCKU BUDAS BUDIS BUDOS BUFFA BUFFE BUFFI BUFFO BUFFS BUFFY BUFOS BUFTY BUHLS BUHRS BUIKS BUIST BUKES BULBS BULGY BULKS BULLA BULLS BULSE BUMBO BUMFS BUMPH BUMPS BUMPY BUNAS BUNCE BUNCO BUNDE BUNDH BUNDS BUNDT BUNDU BUNDY BUNGS BUNGY BUNIA BUNJE BUNJY BUNKO BUNKS BUNNS BUNTS BUNTY BUNYA BUOYS BUPPY BURAN BURAS BURBS BURDS BURET BURFI BURGH BURGS BURIN BURKA BURKE BURKS BURLS BURNS BUROO BURPS BURQA BURRO BURRS BURRY BURSA BURSE BUSBY BUSES BUSKS BUSKY BUSSU BUSTI BUSTS BUSTY BUTEO BUTES BUTLE BUTOH BUTTS BUTTY BUTUT BUTYL BUZZY BWANA BWAZI BYDED BYDES BYKED BYKES BYRES BYRLS BYSSI BYTES BYWAY CAAED CABAS CABER CABOB CABOC CABRE CACAS CACKS CACKY CADEE CADES CADGE CADGY CADIE CADIS CADRE CAECA CAESE CAFES CAFFS CAGED CAGER CAGES CAGOT CAHOW CAIDS CAINS CAIRD CAJON CAJUN CAKED CAKES CAKEY CALFS CALID CALIF CALIX CALKS CALLA CALLS CALMS CALMY CALOS CALPA CALPS CALVE CALYX CAMAN CAMAS CAMES CAMIS CAMOS CAMPI CAMPO CAMPS CAMPY CAMUS CANED CANEH CANER CANES CANGS CANID CANNA CANNS CANSO CANST CANTO CANTS CANTY CAPAS CAPED CAPES CAPEX CAPHS CAPIZ CAPLE CAPON CAPOS CAPOT CAPRI CAPUL CARAP CARBO CARBS CARBY CARDI CARDS CARDY CARED CARER CARES CARET CAREX CARKS CARLE CARLS CARNS CARNY CAROB CAROM CARON CARPI CARPS CARRS CARSE CARTA CARTE CARTS CARVY CASAS CASCO CASED CASES CASKS CASKY CASTS CASUS CATES CAUDA CAUKS CAULD CAULS CAUMS CAUPS CAURI CAUSA CAVAS CAVED CAVEL CAVER CAVES CAVIE CAWED CAWKS CAXON CEAZE CEBID CECAL CECUM CEDED CEDER CEDES CEDIS CEIBA CEILI CEILS CELEB CELLA CELLI CELLS CELOM CELTS CENSE CENTO CENTS CENTU CEORL CEPES CERCI CERED CERES CERGE CERIA CERIC CERNE CEROC CEROS CERTS CERTY CESSE CESTA CESTI CETES CETYL CEZVE CHACE CHACK CHACO CHADO CHADS CHAFT CHAIS CHALS CHAMS CHANA CHANG CHANK CHAPE CHAPS CHAPT CHARA CHARE CHARK CHARR CHARS CHARY CHATS CHAVE CHAVS CHAWK CHAWS CHAYA CHAYS CHEEP CHEFS CHEKA CHELA CHELP CHEMO CHEMS CHERE CHERT CHETH CHEVY CHEWS CHEWY CHIAO CHIAS CHIBS CHICA CHICH CHICO CHICS CHIEL CHIKS CHILE CHIMB CHIMO CHIMP CHINE CHING CHINK CHINO CHINS CHIPS CHIRK CHIRL CHIRM CHIRO CHIRR CHIRT CHIRU CHITS CHIVE CHIVS CHIVY CHIZZ CHOCO CHOCS CHODE CHOGS CHOIL CHOKO CHOKY CHOLA CHOLI CHOLO CHOMP CHONS CHOOF CHOOK CHOOM CHOON CHOPS CHOTA CHOTT CHOUT CHOUX CHOWK CHOWS CHUBS CHUFA CHUFF CHUGS CHUMS CHURL CHURR CHUSE CHUTS CHYLE CHYME CHYND CIBOL CIDED CIDES CIELS CIGGY CILIA CILLS CIMAR CIMEX CINCT CINES CINQS CIONS CIPPI CIRCS CIRES CIRLS CIRRI CISCO CISSY CISTS CITAL CITED CITER CITES CIVES CIVET CIVIE CIVVY CLACH CLADE CLADS CLAES CLAGS CLAME CLAMS CLANS CLAPS CLAPT CLARO CLART CLARY CLAST CLATS CLAUT CLAVE CLAVI CLAWS CLAYS CLECK CLEEK CLEEP CLEFS CLEGS CLEIK CLEMS CLEPE CLEPT CLEVE CLEWS CLIED CLIES CLIFT CLIME CLINE CLINT CLIPE CLIPS CLIPT CLITS CLOAM CLODS CLOFF CLOGS CLOKE CLOMB CLOMP CLONK CLONS CLOOP CLOOT CLOPS CLOTE CLOTS CLOUR CLOUS CLOWS CLOYE CLOYS CLOZE CLUBS CLUES CLUEY CLUNK CLYPE CNIDA COACT COADY COALA COALS COALY COAPT COARB COATE COATI COATS COBBS COBBY COBIA COBLE COBZA COCAS COCCI COCCO COCKS COCKY COCOS CODAS CODEC CODED CODEN CODER CODES CODEX CODON COEDS COFFS COGIE COGON COGUE COHAB COHEN COHOE COHOG COHOS COIFS COIGN COILS COINS COIRS COITS COKED COKES COLAS COLBY COLDS COLED COLES COLEY COLIC COLIN COLLS COLLY COLOG COLTS COLZA COMAE COMAL COMAS COMBE COMBI COMBO COMBS COMBY COMER COMES COMIX COMMO COMMS COMMY COMPO COMPS COMPT COMTE COMUS CONED CONES CONEY CONFS CONGA CONGE CONGO CONIA CONIN CONKS CONKY CONNE CONNS CONTE CONTO CONUS CONVO COOCH COOED COOEE COOER COOEY COOFS COOKS COOKY COOLS COOLY COOMB COOMS COOMY COONS COOPS COOPT COOST COOTS COOZE COPAL COPAY COPED COPEN COPER COPES COPPY COPRA COPSY COQUI CORAM CORBE CORBY CORDS CORED CORES COREY CORGI CORIA CORKS CORKY CORMS CORNI CORNO CORNS CORNU CORPS CORSE CORSO COSEC COSED COSES COSET COSEY COSIE COSTA COSTE COSTS COTAN COTED COTES COTHS COTTA COTTS COUDE COUPS COURB COURD COURE COURS COUTA COUTH COVED COVES COVIN COWAL COWAN COWED COWKS COWLS COWPS COWRY COXAE COXAL COXED COXES COXIB COYAU COYED COYER COYPU COZED COZEN COZES COZEY COZIE CRAAL CRABS CRAGS CRAIC CRAIG CRAKE CRAME CRAMS CRANS CRAPE CRAPS CRAPY CRARE CRAWS CRAYS CREDS CREEL CREES CREMS CRENA CREPS CREPY CREWE CREWS CRIAS CRIBS CRIES CRIMS CRINE CRIOS CRIPE CRIPS CRISE CRITH CRITS CROCI CROCS CROFT CROGS CROMB CROME CRONK CRONS CROOL CROON CROPS CRORE CROST CROUT CROWS CROZE CRUCK CRUDO CRUDS CRUDY CRUES CRUET CRUFT CRUNK CRUOR CRURA CRUSE CRUSY CRUVE CRWTH CRYER CTENE CUBBY CUBEB CUBED CUBER CUBES CUBIT CUDDY CUFFO CUFFS CUIFS CUING CUISH CUITS CUKES CULCH CULET CULEX CULLS CULLY CULMS CULPA CULTI CULTS CULTY CUMEC CUNDY CUNEI CUNIT CUNTS CUPEL CUPID CUPPA CUPPY CURAT CURBS CURCH CURDS CURDY CURED CURER CURES CURET CURFS CURIA CURIE CURLI CURLS CURNS CURNY CURRS CURSI CURST CUSEC CUSHY CUSKS CUSPS CUSPY CUSSO CUSUM CUTCH CUTER CUTES CUTEY CUTIN CUTIS CUTTO CUTTY CUTUP CUVEE CUZES CWTCH CYANO CYANS CYCAD CYCAS CYCLO CYDER CYLIX CYMAE CYMAR CYMAS CYMES CYMOL CYSTS CYTES CYTON CZARS DAALS DABBA DACES DACHA DACKS DADAH DADAS DADOS DAFFS DAFFY DAGGA DAGGY DAGOS DAHLS DAIKO DAINE DAINT DAKER DALED DALES DALIS DALLE DALTS DAMAN DAMAR DAMES DAMME DAMNS DAMPS DAMPY DANCY DANGS DANIO DANKS DANNY DANTS DARAF DARBS DARCY DARED DARER DARES DARGA DARGS DARIC DARIS DARKS DARKY DARNS DARRE DARTS DARZI DASHI DASHY DATAL DATED DATER DATES DATOS DATTO DAUBE DAUBS DAUBY DAUDS DAULT DAURS DAUTS DAVEN DAVIT DAWAH DAWDS DAWED DAWEN DAWKS DAWNS DAWTS DAYAN DAYCH DAYNT DAZED DAZER DAZES DEADS DEAIR DEALS DEANS DEARE DEARN DEARS DEARY DEASH DEAVE DEAWS DEAWY DEBAG DEBBY DEBEL DEBES DEBTS DEBUD DEBUR DEBUS DEBYE DECAD DECAF DECAN DECKO DECKS DECOS DEDAL DEEDS DEEDY DEELY DEEMS DEENS DEEPS DEERE DEERS DEETS DEEVE DEEVS DEFAT DEFFO DEFIS DEFOG DEGAS DEGUM DEGUS DEICE DEIDS DEIFY DEILS DEISM DEIST DEKED DEKES DEKKO DELED DELES DELFS DELFT DELIS DELLS DELLY DELOS DELPH DELTS DEMAN DEMES DEMIC DEMIT DEMOB DEMOI DEMOS DEMPT DENAR DENAY DENCH DENES DENET DENIS DENTS DEOXY DERAT DERAY DERED DERES DERIG DERMA DERMS DERNS DERNY DEROS DERRO DERRY DERTH DERVS DESEX DESHI DESIS DESKS DESSE DEVAS DEVEL DEVIS DEVON DEVOS DEVOT DEWAN DEWAR DEWAX DEWED DEXES DEXIE DHABA DHAKS DHALS DHIKR DHOBI DHOLE DHOLL DHOLS DHOTI DHOWS DHUTI DIACT DIALS DIANE DIAZO DIBBS DICED DICER DICES DICHT DICKS DICKY DICOT DICTA DICTS DICTY DIDDY DIDIE DIDOS DIDST DIEBS DIELS DIENE DIETS DIFFS DIGHT DIKAS DIKED DIKER DIKES DIKEY DILDO DILLI DILLS DIMBO DIMER DIMES DIMPS DINAR DINED DINES DINGE DINGS DINIC DINKS DINKY DINNA DINOS DINTS DIOLS DIOTA DIPPY DIPSO DIRAM DIRER DIRKE DIRKS DIRLS DIRTS DISAS DISCI DISCS DISHY DISKS DISME DITAL DITAS DITED DITES DITSY DITTS DITZY DIVAN DIVAS DIVED DIVES DIVIS DIVNA DIVOS DIVOT DIVVY DIWAN DIXIE DIXIT DIYAS DIZEN DJINN DJINS DOABS DOATS DOBBY DOBES DOBIE DOBLA DOBRA DOBRO DOCHT DOCKS DOCOS DOCUS DODDY DODOS DOEKS DOERS DOEST DOETH DOFFS DOGAN DOGES DOGEY DOGGO DOGGY DOGIE DOHYO DOILT DOILY DOITS DOJOS DOLCE DOLCI DOLED DOLES DOLIA DOLLS DOLMA DOLOR DOLOS DOLTS DOMAL DOMED DOMES DOMIC DONAH DONAS DONEE DONER DONGA DONGS DONKO DONNA DONNE DONNY DONSY DOOBS DOOCE DOODY DOOKS DOOLE DOOLS DOOLY DOOMS DOOMY DOONA DOORN DOORS DOOZY DOPAS DOPED DOPER DOPES DORAD DORBA DORBS DOREE DORES DORIC DORIS DORKS DORKY DORMS DORMY DORPS DORRS DORSA DORSE DORTS DORTY DOSAI DOSAS DOSED DOSEH DOSER DOSES DOSHA DOTAL DOTED DOTER DOTES DOTTY DOUAR DOUCE DOUCS DOUKS DOULA DOUMA DOUMS DOUPS DOURA DOUSE DOUTS DOVED DOVEN DOVER DOVES DOVIE DOWAR DOWDS DOWED DOWER DOWIE DOWLE DOWLS DOWLY DOWNA DOWNS DOWPS DOWSE DOWTS DOXED DOXES DOXIE DOYEN DOYLY DOZED DOZER DOZES DRABS DRACK DRACO DRAFF DRAGS DRAIL DRAMS DRANT DRAPS DRATS DRAVE DRAWS DRAYS DREAR DRECK DREED DREER DREES DREGS DREKS DRENT DRERE DREST DREYS DRIBS DRICE DRIES DRILY DRIPS DRIPT DROID DROIL DROKE DROLE DROME DRONY DROOB DROOG DROOK DROPS DROPT DROUK DROWS DRUBS DRUGS DRUMS DRUPE DRUSE DRUSY DRUXY DRYAD DRYAS DSOBO DSOMO DUADS DUALS DUANS DUARS DUBBO DUCAL DUCAT DUCES DUCKS DUCKY DUCTS DUDDY DUDED DUDES DUELS DUETS DUETT DUFFS DUFUS DUING DUITS DUKAS DUKED DUKES DUKKA DULCE DULES DULIA DULLS DULSE DUMAS DUMBO DUMBS DUMKA DUMKY DUMPS DUNAM DUNCH DUNES DUNGS DUNGY DUNKS DUNNO DUNNY DUNSH DUNTS DUOMI DUOMO DUPED DUPER DUPES DUPLE DUPLY DUPPY DURAL DURAS DURED DURES DURGY DURNS DUROC DUROS DUROY DURRA DURRS DURRY DURST DURUM DURZI DUSKS DUSTS DUXES DWAAL DWALE DWALM DWAMS DWANG DWAUM DWEEB DWILE DWINE DYADS DYERS DYKED DYKES DYKEY DYKON DYNEL DYNES DZHOS EAGRE EALED EALES EANED EARDS EARED EARLS EARNS EARNT EARST EASED EASER EASES EASLE EASTS EATHE EAVED EAVES EBBED EBBET EBONS EBOOK ECADS ECHED ECHES ECHOS ECRUS EDEMA EDGED EDGER EDGES EDILE EDITS EDUCE EDUCT EEJIT EENSY EEVEN EEVNS EFFED EGADS EGERS EGEST EGGAR EGGED EGGER EGMAS EHING EIDER EIDOS EIGNE EIKED EIKON EILDS EISEL EJIDO EKKAS ELAIN ELAND ELANS ELCHI ELDIN ELEMI ELFED ELIAD ELINT ELMEN ELOGE ELOGY ELOIN ELOPS ELPEE ELSIN ELUTE ELVAN ELVEN ELVER ELVES EMACS EMBAR EMBAY EMBOG EMBOW EMBOX EMBUS EMEER EMEND EMERG EMERY EMEUS EMICS EMIRS EMITS EMMAS EMMER EMMET EMMEW EMMYS EMOJI EMONG EMOTE EMOVE EMPTS EMULE EMURE EMYDE EMYDS ENARM ENATE ENDED ENDER ENDEW ENDUE ENEWS ENFIX ENIAC ENLIT ENMEW ENNOG ENOKI ENOLS ENORM ENOWS ENROL ENSEW ENSKY ENTIA ENURE ENURN ENVOI ENZYM EORLS EOSIN EPACT EPEES EPHAH EPHAS EPHOD EPHOR EPICS EPODE EPOPT EPRIS EQUES EQUID ERBIA EREVS ERGON ERGOS ERGOT ERHUS ERICA ERICK ERICS ERING ERNED ERNES EROSE ERRED ERSES ERUCT ERUGO ERUVS ERVEN ERVIL ESCAR ESCOT ESILE ESKAR ESKER ESNES ESSES ESTOC ESTOP ESTRO ETAGE ETAPE ETATS ETENS ETHAL ETHNE ETHYL ETICS ETNAS ETTIN ETTLE ETUIS ETWEE ETYMA EUGHS EUKED EUPAD EUROS EUSOL EVENS EVERT EVETS EVHOE EVILS EVITE EVOHE EWERS EWEST EWHOW EWKED EXAMS EXEAT EXECS EXEEM EXEME EXFIL EXIES EXINE EXING EXITS EXODE EXOME EXONS EXPAT EXPOS EXUDE EXULS EXURB EYASS EYERS EYOTS EYRAS EYRES EYRIE EYRIR EZINE FABBY FACED FACER FACES FACIA FACTA FACTS FADDY FADED FADER FADES FADGE FADOS FAENA FAERY FAFFS FAFFY FAGGY FAGIN FAGOT FAIKS FAILS FAINE FAINS FAIRS FAKED FAKER FAKES FAKEY FAKIE FAKIR FALAJ FALLS FAMED FAMES FANAL FANDS FANES FANGA FANGO FANGS FANKS FANON FANOS FANUM FAQIR FARAD FARCI FARCY FARDS FARED FARER FARES FARLE FARLS FARMS FAROS FARRO FARSE FARTS FASCI FASTI FASTS FATED FATES FATLY FATSO FATWA FAUGH FAULD FAUNS FAURD FAUTS FAUVE FAVAS FAVEL FAVER FAVES FAVUS FAWNS FAWNY FAXED FAXES FAYED FAYER FAYNE FAYRE FAZED FAZES FEALS FEARE FEARS FEART FEASE FEATS FEAZE FECES FECHT FECIT FECKS FEDEX FEEBS FEEDS FEELS FEENS FEERS FEESE FEEZE FEHME FEINT FEIST FELCH FELID FELLS FELLY FELTS FELTY FEMAL FEMES FEMMY FENDS FENDY FENIS FENKS FENNY FENTS FEODS FEOFF FERER FERES FERIA FERLY FERMI FERMS FERNS FERNY FESSE FESTA FESTS FESTY FETAS FETED FETES FETOR FETTA FETTS FETWA FEUAR FEUDS FEUED FEYED FEYER FEYLY FEZES FEZZY FIARS FIATS FIBRO FICES FICHE FICHU FICIN FICOS FIDES FIDGE FIDOS FIEFS FIENT FIERE FIERS FIEST FIFED FIFER FIFES FIFIS FIGGY FIGOS FIKED FIKES FILAR FILCH FILED FILES FILII FILKS FILLE FILLO FILLS FILMI FILMS FILOS FILUM FINCA FINDS FINED FINES FINIS FINKS FINNY FINOS FIORD FIQHS FIQUE FIRED FIRER FIRES FIRIE FIRKS FIRMS FIRNS FIRRY FIRTH FISCS FISKS FISTS FISTY FITCH FITLY FITNA FITTE FITTS FIVER FIVES FIXED FIXES FIXIT FJELD FLABS FLAFF FLAGS FLAKS FLAMM FLAMS FLAMY FLANE FLANS FLAPS FLARY FLATS FLAVA FLAWN FLAWS FLAWY FLAXY FLAYS FLEAM FLEAS FLEEK FLEER FLEES FLEGS FLEME FLEUR FLEWS FLEXI FLEXO FLEYS FLICS FLIED FLIES FLIMP FLIMS FLIPS FLIRS FLISK FLITE FLITS FLITT FLOBS FLOCS FLOES FLOGS FLONG FLOPS FLORS FLORY FLOSH FLOTA FLOTE FLOWS FLUBS FLUED FLUES FLUEY FLUKY FLUMP FLUOR FLURR FLUTY FLUYT FLYBY FLYPE FLYTE FOALS FOAMS FOEHN FOGEY FOGIE FOGLE FOGOU FOHNS FOIDS FOILS FOINS FOLDS FOLEY FOLIA FOLIC FOLIE FOLKS FOLKY FOMES FONDA FONDS FONDU FONES FONLY FONTS FOODS FOODY FOOLS FOOTS FOOTY FORAM FORBS FORBY FORDO FORDS FOREL FORES FOREX FORKS FORKY FORME FORMS FORTS FORZA FORZE FOSSA FOSSE FOUAT FOUDS FOUER FOUET FOULE FOULS FOUNT FOURS FOUTH FOVEA FOWLS FOWTH FOXED FOXES FOXIE FOYLE FOYNE FRABS FRACK FRACT FRAGS FRAIM FRANC FRAPE FRAPS FRASS FRATE FRATI FRATS FRAUS FRAYS FREES FREET FREIT FREMD FRENA FREON FRERE FRETS FRIBS FRIER FRIES FRIGS FRISE FRIST FRITH FRITS FRITT FRIZE FRIZZ FROES FROGS FRONS FRORE FRORN FRORY FROSH FROWS FROWY FRUGS FRUMP FRUSH FRUST FRYER FUBAR FUBBY FUBSY FUCKS FUCUS FUDDY FUDGY FUELS FUERO FUFFS FUFFY FUGAL FUGGY FUGIE FUGIO FUGLE FUGLY FUGUS FUJIS FULLS FUMED FUMER FUMES FUMET FUNDI FUNDS FUNDY FUNGO FUNGS FUNKS FURAL FURAN FURCA FURLS FUROL FURRS FURTH FURZE FURZY FUSED FUSEE FUSEL FUSES FUSIL FUSKS FUSTS FUSTY FUTON FUZED FUZEE FUZES FUZIL FYCES FYKED FYKES FYLES FYRDS FYTTE GABBA GABBY GABLE GADDI GADES GADGE GADID GADIS GADJE GADJO GADSO GAFFS GAGED GAGER GAGES GAIDS GAINS GAIRS GAITA GAITS GAITT GAJOS GALAH GALAS GALAX GALEA GALED GALES GALLS GALLY GALOP GALUT GALVO GAMAS GAMAY GAMBA GAMBE GAMBO GAMBS GAMED GAMES GAMEY GAMIC GAMIN GAMME GAMMY GAMPS GANCH GANDY GANEF GANEV GANGS GANJA GANOF GANTS GAOLS GAPED GAPER GAPES GAPOS GAPPY GARBE GARBO GARBS GARDA GARES GARIS GARMS GARNI GARRE GARTH GARUM GASES GASPS GASPY GASTS GATCH GATED GATER GATES GATHS GATOR GAUCH GAUCY GAUDS GAUJE GAULT GAUMS GAUMY GAUPS GAURS GAUSS GAUZY GAVOT GAWCY GAWDS GAWKS GAWPS GAWSY GAYAL GAZAL GAZAR GAZED GAZES GAZON GAZOO GEALS GEANS GEARE GEARS GEATS GEBUR GECKS GEEKS GEEPS GEEST GEIST GEITS GELDS GELEE GELID GELLY GELTS GEMEL GEMMA GEMMY GEMOT GENAL GENAS GENES GENET GENIC GENII GENIP GENNY GENOA GENOM GENRO GENTS GENTY GENUA GENUS GEODE GEOID GERAH GERBE GERES GERLE GERMS GERMY GERNE GESSE GESSO GESTE GESTS GETAS GETUP GEUMS GEYAN GEYER GHAST GHATS GHAUT GHAZI GHEES GHEST GHYLL GIBED GIBEL GIBER GIBES GIBLI GIBUS GIFTS GIGAS GIGHE GIGOT GIGUE GILAS GILDS GILET GILLS GILLY GILPY GILTS GIMEL GIMME GIMPS GIMPY GINCH GINGE GINGS GINKS GINNY GINZO GIPON GIPPO GIPPY GIRDS GIRLS GIRNS GIRON GIROS GIRRS GIRSH GIRTS GISMO GISMS GISTS GITCH GITES GIUST GIVED GIVES GIZMO GLACE GLADS GLADY GLAIK GLAIR GLAMS GLANS GLARY GLAUM GLAUR GLAZY GLEBA GLEBE GLEBY GLEDE GLEDS GLEED GLEEK GLEES GLEET GLEIS GLENS GLENT GLEYS GLIAL GLIAS GLIBS GLIFF GLIFT GLIKE GLIME GLIMS GLISK GLITS GLITZ GLOAM GLOBI GLOBS GLOBY GLODE GLOGG GLOMS GLOOP GLOPS GLOST GLOUT GLOWS GLOZE GLUED GLUER GLUES GLUEY GLUGS GLUME GLUMS GLUON GLUTE GLUTS GNARL GNARR GNARS GNATS GNAWN GNAWS GNOWS GOADS GOAFS GOALS GOARY GOATS GOATY GOBAN GOBAR GOBBI GOBBO GOBBY GOBIS GOBOS GODET GODSO GOELS GOERS GOEST GOETH GOETY GOFER GOFFS GOGGA GOGOS GOIER GOJIS GOLDS GOLDY GOLES GOLFS GOLPE GOLPS GOMBO GOMER GOMPA GONCH GONEF GONGS GONIA GONIF GONKS GONNA GONOF GONYS GONZO GOOBY GOODS GOOFS GOOGS GOOKS GOOKY GOOLD GOOLS GOOLY GOONS GOONY GOOPS GOOPY GOORS GOORY GOOSY GOPAK GOPIK GORAL GORAS GORED GORES GORIS GORMS GORMY GORPS GORSE GORSY GOSHT GOSSE GOTCH GOTHS GOTHY GOTTA GOUCH GOUKS GOURA GOUTS GOUTY GOWAN GOWDS GOWFS GOWKS GOWLS GOWNS GOXES GOYIM GOYLE GRAAL GRABS GRADS GRAFF GRAIP GRAMA GRAME GRAMP GRAMS GRANA GRANS GRAPY GRAVS GRAYS GREBE GREBO GRECE GREEK GREES GREGE GREGO GREIN GRENS GRESE GREVE GREWS GREYS GRICE GRIDE GRIDS GRIFF GRIFT GRIGS GRIKE GRINS GRIOT GRIPS GRIPT GRIPY GRISE GRIST GRISY GRITH GRITS GRIZE GROAT GRODY GROGS GROKS GROMA GRONE GROOF GROSZ GROTS GROUF GROVY GROWS GRRLS GRRRL GRUBS GRUED GRUES GRUFE GRUME GRUMP GRUND GRYCE GRYDE GRYKE GRYPE GRYPT GUACO GUANA GUANO GUANS GUARS GUCKS GUCKY GUDES GUFFS GUGAS GUIDS GUIMP GUIRO GULAG GULAR GULAS GULES GULET GULFS GULFY GULLS GULPH GULPS GULPY GUMMA GUMMI GUMPS GUNDY GUNGE GUNGY GUNKS GUNKY GUNNY GUQIN GURDY GURGE GURLS GURLY GURNS GURRY GURSH GURUS GUSHY GUSLA GUSLE GUSLI GUSSY GUSTS GUTSY GUTTA GUTTY GUYED GUYLE GUYOT GUYSE GWINE GYALS GYANS GYBED GYBES GYELD GYMPS GYNAE GYNIE GYNNY GYNOS GYOZA GYPOS GYPPO GYPPY GYRAL GYRED GYRES GYRON GYROS GYRUS GYTES GYVED GYVES HAAFS HAARS HABLE HABUS HACEK HACKS HADAL HADED HADES HADJI HADST HAEMS HAETS HAFFS HAFIZ HAFTS HAGGS HAHAS HAICK HAIKA HAIKS HAIKU HAILS HAILY HAINS HAINT HAIRS HAITH HAJES HAJIS HAJJI HAKAM HAKAS HAKEA HAKES HAKIM HAKUS HALAL HALED HALER HALES HALFA HALFS HALID HALLO HALLS HALMA HALMS HALON HALOS HALSE HALTS HALVA HALWA HAMAL HAMBA HAMED HAMES HAMMY HAMZA HANAP HANCE HANCH HANDS HANGI HANGS HANKS HANKY HANSA HANSE HANTS HAOLE HAOMA HAPAX HAPLY HAPPI HAPUS HARAM HARDS HARED HARES HARIM HARKS HARLS HARMS HARNS HAROS HARPS HARTS HASHY HASKS HASPS HASTA HATED HATES HATHA HAUDS HAUFS HAUGH HAULD HAULM HAULS HAULT HAUNS HAUSE HAVER HAVES HAWED HAWKS HAWMS HAWSE HAYED HAYER HAYEY HAYLE HAZAN HAZED HAZER HAZES HEADS HEALD HEALS HEAME HEAPS HEAPY HEARE HEARS HEAST HEATS HEBEN HEBES HECHT HECKS HEDER HEDGY HEEDS HEEDY HEELS HEEZE HEFTE HEFTS HEIDS HEIGH HEILS HEIRS HEJAB HEJRA HELED HELES HELIO HELLS HELMS HELOS HELOT HELPS HELVE HEMAL HEMES HEMIC HEMIN HEMPS HEMPY HENCH HENDS HENGE HENNA HENNY HENRY HENTS HEPAR HERBS HERBY HERDS HERES HERLS HERMA HERMS HERNS HEROS HERRY HERSE HERTZ HERYE HESPS HESTS HETES HETHS HEUCH HEUGH HEVEA HEWED HEWER HEWGH HEXAD HEXED HEXER HEXES HEXYL HEYED HIANT HICKS HIDED HIDER HIDES HIEMS HIGHS HIGHT HIJAB HIJRA HIKED HIKER HIKES HIKOI HILAR HILCH HILLO HILLS HILTS HILUM HILUS HIMBO HINAU HINDS HINGS HINKY HINNY HINTS HIOIS HIPLY HIRED HIREE HIRER HIRES HISSY HISTS HITHE HIVED HIVER HIVES HIZEN HOAED HOAGY HOARS HOARY HOAST HOBOS HOCKS HOCUS HODAD HODJA HOERS HOGAN HOGEN HOGGS HOGHS HOHED HOICK HOIED HOIKS HOING HOISE HOKAS HOKED HOKES HOKEY HOKIS HOKKU HOKUM HOLDS HOLED HOLES HOLEY HOLKS HOLLA HOLLO HOLME HOLMS HOLON HOLOS HOLTS HOMAS HOMED HOMES HOMEY HOMIE HOMME HOMOS HONAN HONDA HONDS HONED HONER HONES HONGI HONGS HONKS HONKY HOOCH HOODS HOODY HOOEY HOOFS HOOKA HOOKS HOOKY HOOLY HOONS HOOPS HOORD HOORS HOOSH HOOTS HOOTY HOOVE HOPAK HOPED HOPER HOPES HOPPY HORAH HORAL HORAS HORIS HORKS HORME HORNS HORST HORSY HOSED HOSEL HOSEN HOSER HOSES HOSEY HOSTA HOSTS HOTCH HOTEN HOTTY HOUFF HOUFS HOUGH HOURI HOURS HOUTS HOVEA HOVED HOVEN HOVES HOWBE HOWES HOWFF HOWFS HOWKS HOWLS HOWRE HOWSO HOXED HOXES HOYAS HOYED HOYLE HUBBY HUCKS HUDNA HUDUD HUERS HUFFS HUFFY HUGER HUGGY HUHUS HUIAS HULAS HULES HULKS HULKY HULLO HULLS HULLY HUMAS HUMFS HUMIC HUMPS HUMPY HUNKS HUNTS HURDS HURLS HURLY HURRA HURST HURTS HUSHY HUSKS HUSOS HUTIA HUZZA HUZZY HWYLS HYDRA HYENS HYGGE HYING HYKES HYLAS HYLEG HYLES HYLIC HYMNS HYNDE HYOID HYPED HYPES HYPHA HYPHY HYPOS HYRAX HYSON HYTHE IAMBI IAMBS IBRIK ICERS ICHED ICHES ICHOR ICIER ICKER ICKLE ICONS ICTAL ICTIC ICTUS IDANT IDEAS IDEES IDENT IDLED IDLES IDOLA IDOLS IDYLS IFTAR IGAPO IGGED IGLUS IHRAM IKANS IKATS IKONS ILEAC ILEAL ILEUM ILEUS ILIAD ILIAL ILIUM ILLER ILLTH IMAGO IMAMS IMARI IMAUM IMBAR IMBED IMIDE IMIDO IMIDS IMINE IMINO IMMEW IMMIT IMMIX IMPED IMPIS IMPOT IMPRO IMSHI IMSHY INAPT INARM INBYE INCEL INCLE INCOG INCUS INCUT INDEW INDIA INDIE INDOL INDOW INDRI INDUE INERM INFIX INFOS INFRA INGAN INGLE INION INKED INKER INKLE INNED INNIT INORB INRUN INSET INSPO INTEL INTIL INTIS INTRA INULA INURE INURN INUST INVAR INWIT IODIC IODID IODIN IOTAS IPPON IRADE IRIDS IRING IRKED IROKO IRONE IRONS ISBAS ISHES ISLED ISLES ISNAE ISSEI ISTLE ITEMS ITHER IVIED IVIES IXIAS IXNAY IXORA IXTLE IZARD IZARS IZZAT JAAPS JABOT JACAL JACKS JACKY JADED JADES JAFAS JAFFA JAGAS JAGER JAGGS JAGGY JAGIR JAGRA JAILS JAKER JAKES JAKEY JALAP JALOP JAMBE JAMBO JAMBS JAMBU JAMES JAMMY JAMON JANES JANNS JANNY JANTY JAPAN JAPED JAPER JAPES JARKS JARLS JARPS JARTA JARUL JASEY JASPE JASPS JATOS JAUKS JAUPS JAVAS JAVEL JAWAN JAWED JAXIE JEANS JEATS JEBEL JEDIS JEELS JEELY JEEPS JEERS JEEZE JEFES JEFFS JEHAD JEHUS JELAB JELLO JELLS JEMBE JEMMY JENNY JEONS JERID JERKS JERRY JESSE JESTS JESUS JETES JETON JEUNE JEWED JEWIE JHALA JIAOS JIBBA JIBBS JIBED JIBER JIBES JIFFS JIGGY JIGOT JIHAD JILLS JILTS JIMMY JIMPY JINGO JINKS JINNE JINNI JINNS JIRDS JIRGA JIRRE JISMS JIVED JIVER JIVES JIVEY JNANA JOBED JOBES JOCKO JOCKS JOCKY JOCOS JODEL JOEYS JOHNS JOINS JOKED JOKES JOKEY JOKOL JOLED JOLES JOLLS JOLTS JOLTY JOMON JOMOS JONES JONGS JONTY JOOKS JORAM JORUM JOTAS JOTTY JOTUN JOUAL JOUGS JOUKS JOULE JOURS JOWAR JOWED JOWLS JOWLY JOYED JUBAS JUBES JUCOS JUDAS JUDGY JUDOS JUGAL JUGUM JUJUS JUKED JUKES JUKUS JULEP JUMAR JUMBY JUMPS JUNCO JUNKS JUNKY JUPES JUPON JURAL JURAT JUREL JURES JUSTS JUTES JUTTY JUVES JUVIE KAAMA KABAB KABAR KABOB KACHA KACKS KADAI KADES KADIS KAFIR KAGOS KAGUS KAHAL KAIAK KAIDS KAIES KAIFS KAIKA KAIKS KAILS KAIMS KAING KAINS KAKAS KAKIS KALAM KALES KALIF KALIS KALPA KAMAS KAMES KAMIK KAMIS KAMME KANAE KANAS KANDY KANEH KANES KANGA KANGS KANJI KANTS KANZU KAONS KAPAS KAPHS KAPOK KAPOW KAPUS CAPUT KARAS KARAT KARKS KARNS KAROO KAROS KARRI KARST KARSY KARTS KARZY KASHA KASME KATAL KATAS KATIS KATTI KAUGH KAURI KAURU KAURY KAVAL KAVAS KAWAS KAWAU KAWED KAYLE KAYOS KAZIS KAZOO KBARS KEBAR KEBOB KECKS KEDGE KEDGY KEECH KEEFS KEEKS KEELS KEEMA KEENO KEENS KEEPS KEETS KEEVE KEFIR KEHUA KEIRS KELEP KELIM KELLS KELLY KELPS KELPY KELTS KELTY KEMBO KEMBS KEMPS KEMPT KEMPY KENAF KENCH KENDO KENOS KENTE KENTS KEPIS KERBS KEREL KERFS KERKY KERMA KERNE KERNS KEROS KERRY KERVE KESAR KESTS KETAS KETCH KETES KETOL KEVEL KEVIL KEXES KEYED KEYER KHADI KHAFS KHANS KHAPH KHATS KHAYA KHAZI KHEDA KHETH KHETS KHOJA KHORS KHOUM KHUDS KIAAT KIACK KIANG KIBBE KIBBI KIBEI KIBES KIBLA KICKS KICKY KIDDO KIDDY KIDEL KIDGE KIEFS KIERS KIEVE KIEVS KIGHT KIKES KIKOI KILEY KILIM KILLS KILNS KILOS KILPS KILTS KILTY KIMBO KINAS KINDA KINDS KINDY KINES KINGS KININ KINKS KINOS KIORE KIPES KIPPA KIPPS KIRBY KIRKS KIRNS KIRRI KISAN KISSY KISTS KITED KITER KITES KITHE KITHS KITUL KIVAS KIWIS KLANG KLAPS KLETT KLICK KLIEG KLIKS KLONG KLOOF KLUGE KLUTZ KNAGS KNAPS KNARL KNARS KNAUR KNAWE KNEES KNELL KNISH KNITS KNIVE KNOBS KNOPS KNOSP KNOTS KNOUT KNOWE KNOWS KNUBS KNURL KNURR KNURS KNUTS KOANS KOAPS KOBAN KOBOS KOELS KOFFS KOFTA KOGAL KOHAS KOHEN KOHLS KOINE KOJIS KOKAM KOKAS KOKER KOKRA KOKUM KOLAS KOLOS KOMBU KONBU KONDO KONKS KOOKS KOOKY KOORI KOPEK KOPHS KOPJE KOPPA KORAI KORAS KORAT KORES KORMA KOROS KORUN KORUS KOSES KOTCH KOTOS KOTOW KOURA KRAAL KRABS KRAFT KRAIS KRAIT KRANG KRANS KRANZ KRAUT KRAYS KREEP KRENG KREWE KRONA KRONE KROON KRUBI KRUNK KSARS KUBIE KUDOS KUDUS KUDZU KUFIS KUGEL KUIAS KUKRI KUKUS KULAK KULAN KULAS KULFI KUMIS KUMYS KURIS KURRE KURTA KURUS KUSSO KUTAS KUTCH KUTIS KUTUS KUZUS KVASS KVELL KWELA KYACK KYAKS KYANG KYARS KYATS KYBOS KYDST KYLES KYLIE KYLIN KYLIX KYLOE KYNDE KYNDS KYPES KYRIE KYTES KYTHE LAARI LABDA LABIA LABIS LABRA LACED LACER LACES LACET LACEY LACKS LADDY LADED LADER LADES LAERS LAEVO LAGAN LAHAL LAHAR LAICH LAICS LAIDS LAIGH LAIKA LAIKS LAIRD LAIRS LAIRY LAITH LAITY LAKED LAKER LAKES LAKHS LAKIN LAKSA LALDY LALLS LAMAS LAMBS LAMBY LAMED LAMER LAMES LAMIA LAMMY LAMPS LANAI LANAS LANCH LANDE LANDS LANES LANKS LANTS LAPIN LAPIS LAPJE LARCH LARDS LARDY LAREE LARES LARGO LARIS LARKS LARKY LARNS LARNT LARUM LASED LASER LASES LASSI LASSU LASSY LASTS LATAH LATED LATEN LATEX LATHI LATHS LATHY LATKE LATUS LAUAN LAUCH LAUDS LAUFS LAUND LAURA LAVAL LAVAS LAVED LAVER LAVES LAVRA LAVVY LAWED LAWER LAWIN LAWKS LAWNS LAWNY LAXED LAXER LAXES LAXLY LAYED LAYIN LAYUP LAZAR LAZED LAZES LAZOS LAZZI LAZZO LEADS LEADY LEAFS LEAKS LEAMS LEANS LEANY LEAPS LEARE LEARS LEARY LEATS LEAVY LEAZE LEBEN LECCY LEDES LEDGY LEDUM LEEAR LEEKS LEEPS LEERS LEESE LEETS LEEZE LEFTE LEFTS LEGER LEGES LEGGE LEGGO LEGIT LEHRS LEHUA LEIRS LEISH LEMAN LEMED LEMEL LEMES LEMMA LEMME LENDS LENES LENGS LENIS LENOS LENSE LENTI LENTO LEONE LEPID LEPRA LEPTA LERED LERES LERPS LESBO LESES LESTS LETCH LETHE LETUP LEUCH LEUCO LEUDS LEUGH LEVAS LEVEE LEVES LEVIN LEVIS LEWIS LEXES LEXIS LEZES LEZZA LEZZY LIANA LIANE LIANG LIARD LIARS LIART LIBER LIBRA LIBRI LICHI LICHT LICIT LICKS LIDAR LIDOS LIEFS LIENS LIERS LIEUS LIEVE LIFER LIFES LIFTS LIGAN LIGER LIGGE LIGNE LIKED LIKER LIKES LIKIN LILLS LILOS LILTS LIMAN LIMAS LIMAX LIMBA LIMBI LIMBS LIMBY LIMED LIMEN LIMES LIMEY LIMMA LIMNS LIMOS LIMPA LIMPS LINAC LINCH LINDS LINDY LINED LINES LINEY LINGA LINGS LINGY LININ LINKS LINKY LINNS LINNY LINOS LINTS LINTY LINUM LINUX LIONS LIPAS LIPES LIPIN LIPOS LIPPY LIRAS LIRKS LIROT LISKS LISLE LISPS LISTS LITAI LITAS LITED LITER LITES LITHO LITHS LITRE LIVED LIVEN LIVES LIVOR LIVRE LLANO LOACH LOADS LOAFS LOAMS LOANS LOAST LOAVE LOBAR LOBED LOBES LOBOS LOBUS LOCHE LOCHS LOCIE LOCIS LOCKS LOCOS LOCUM LODEN LODES LOESS LOFTS LOGAN LOGES LOGGY LOGIA LOGIE LOGOI LOGON LOGOS LOHAN LOIDS LOINS LOIPE LOIRS LOKES LOLLS LOLLY LOLOG LOMAS LOMED LOMES LONER LONGA LONGE LONGS LOOBY LOOED LOOEY LOOFA LOOFS LOOIE LOOKS LOOKY LOOMS LOONS LOONY LOOPS LOORD LOOTS LOPED LOPER LOPES LOPPY LORAL LORAN LORDS LORDY LOREL LORES LORIC LORIS LOSED LOSEL LOSEN LOSES LOSSY LOTAH LOTAS LOTES LOTIC LOTOS LOTSA LOTTA LOTTE LOTTO LOTUS LOUED LOUGH LOUIE LOUIS LOUMA LOUND LOUNS LOUPE LOUPS LOURE LOURS LOURY LOUTS LOVAT LOVED LOVES LOVEY LOVIE LOWAN LOWED LOWES LOWND LOWNE LOWNS LOWPS LOWRY LOWSE LOWTS LOXED LOXES LOZEN LUACH LUAUS LUBED LUBES LUBRA LUCES LUCKS LUCRE LUDES LUDIC LUDOS LUFFA LUFFS LUGED LUGER LUGES LULLS LULUS LUMAS LUMBI LUMME LUMMY LUMPS LUNAS LUNES LUNET LUNGI LUNGS LUNKS LUNTS LUPIN LURED LURER LURES LUREX LURGI LURGY LURKS LURRY LURVE LUSER LUSHY LUSKS LUSTS LUSUS LUTEA LUTED LUTER LUTES LUVVY LUXED LUXER LUXES LWEIS LYAMS LYARD LYART LYASE LYCEA LYCEE LYCRA LYMES LYNES LYRES LYSED LYSES LYSIN LYSIS LYSOL LYSSA LYTED LYTES LYTHE LYTIC LYTTA MAAED MAARE MAARS MABES MACAS MACED MACER MACES MACHE MACHI MACHS MACKS MACLE MACON MADGE MADID MADRE MAERL MAFIC MAGES MAGGS MAGOT MAGUS MAHOE MAHUA MAHWA MAIDS MAIKO MAIKS MAILE MAILL MAILS MAIMS MAINS MAIRE MAIRS MAISE MAIST MAKAR MAKES MAKIS MAKOS MALAM MALAR MALAS MALAX MALES MALIC MALIK MALIS MALLS MALMS MALMY MALTS MALTY MALUS MALVA MALWA MAMAS MAMBA MAMEE MAMEY MAMIE MANAS MANAT MANDI MANEB MANED MANEH MANES MANET MANGS MANIS MANKY MANNA MANOS MANSE MANTA MANTO MANTY MANUL MANUS MAPAU MAQUI MARAE MARAH MARAS MARCS MARDY MARES MARGE MARGS MARIA MARID MARKA MARKS MARLE MARLS MARLY MARMS MARON MAROR MARRA MARRI MARSE MARTS MARVY MASAS MASED MASER MASES MASHY MASKS MASSA MASSY MASTS MASTY MASUS MATAI MATED MATER MATES MATHS MATIN MATLO MATTE MATTS MATZA MATZO MAUBY MAUDS MAULS MAUND MAURI MAUSY MAUTS MAUZY MAVEN MAVIE MAVIN MAVIS MAWED MAWKS MAWKY MAWNS MAWRS MAXED MAXES MAXIS MAYAN MAYAS MAYED MAYOS MAYST MAZED MAZER MAZES MAZEY MAZUT MBIRA MEADS MEALS MEANE MEANS MEANY MEARE MEASE MEATH MEATS MEBOS MECHS MECKS MEDII MEDLE MEEDS MEERS MEETS MEFFS MEINS MEINT MEINY MEITH MEKKA MELAS MELBA MELDS MELIC MELIK MELLS MELTS MELTY MEMES MEMOS MENAD MENDS MENED MENES MENGE MENGS MENSA MENSE MENSH MENTA MENTO MENUS MEOUS MEOWS MERCH MERCS MERDE MERED MEREL MERER MERES MERIL MERIS MERKS MERLE MERLS MERSE MESAL MESAS MESEL MESES MESHY MESIC MESNE MESON MESSY MESTO METED METES METHO METHS METIC METIF METIS METOL METRE MEUSE MEVED MEVES MEWED MEWLS MEYNT MEZES MEZZE MEZZO MHORR MIAOU MIAOW MIASM MIAUL MICAS MICHE MICHT MICKS MICKY MICOS MICRA MIDDY MIDGY MIDIS MIENS MIEVE MIFFS MIFFY MIFTY MIGGS MIHAS MIHIS MIKED MIKES MIKRA MIKVA MILCH MILDS MILER MILES MILFS MILIA MILKO MILKS MILLE MILLS MILOR MILOS MILPA MILTS MILTY MILTZ MIMED MIMEO MIMER MIMES MIMSY MINAE MINAR MINAS MINCY MINDS MINED MINES MINGE MINGS MINGY MINIS MINKE MINKS MINNY MINOS MINTS MIRED MIRES MIREX MIRID MIRIN MIRKS MIRKY MIRLY MIROS MIRVS MIRZA MISCH MISDO MISES MISGO MISOS MISSA MISTS MISTY MITCH MITER MITES MITIS MITRE MITTS MIXED MIXEN MIXER MIXES MIXTE MIXUP MIZEN MIZZY MNEME MOANS MOATS MOBBY MOBES MOBEY MOBIE MOBLE MOCHI MOCHS MOCHY MOCKS MODER MODES MODGE MODII MODUS MOERS MOFOS MOGGY MOHEL MOHOS MOHRS MOHUA MOHUR MOILE MOILS MOIRA MOIRE MOITS MOJOS MOKES MOKIS MOKOS MOLAL MOLAS MOLDS MOLED MOLES MOLLA MOLLS MOLLY MOLTO MOLTS MOLYS MOMES MOMMA MOMMY MOMUS MONAD MONAL MONAS MONDE MONDO MONER MONGO MONGS MONIC MONIE MONKS MONOS MONTE MONTY MOOBS MOOCH MOODS MOOED MOOKS MOOLA MOOLI MOOLS MOOLY MOONG MOONS MOONY MOOPS MOORS MOORY MOOTS MOOVE MOPED MOPER MOPES MOPEY MOPPY MOPSY MOPUS MORAE MORAS MORAT MORAY MOREL MORES MORIA MORNE MORNS MORRA MORRO MORSE MORTS MOSED MOSES MOSEY MOSKS MOSSO MOSTE MOSTS MOTED MOTEN MOTES MOTET MOTEY MOTHS MOTHY MOTIS MOTTE MOTTS MOTTY MOTUS MOTZA MOUCH MOUES MOULD MOULS MOUPS MOUST MOUSY MOVED MOVES MOWAS MOWED MOWRA MOXAS MOXIE MOYAS MOYLE MOYLS MOZED MOZES MOZOS MPRET MUCHO MUCIC MUCID MUCIN MUCKS MUCOR MUCRO MUDGE MUDIR MUDRA MUFFS MUFTI MUGGA MUGGS MUGGY MUHLY MUIDS MUILS MUIRS MUIST MUJIK MULCT MULED MULES MULEY MULGA MULIE MULLA MULLS MULSE MULSH MUMMS MUMPS MUMSY MUMUS MUNGA MUNGE MUNGO MUNGS MUNIS MUNTS MUNTU MUONS MURAS MURED MURES MUREX MURID MURKS MURLS MURLY MURRA MURRE MURRI MURRS MURRY MURTI MURVA MUSAR MUSCA MUSED MUSER MUSES MUSET MUSHA MUSIT MUSKS MUSOS MUSSE MUSSY MUSTH MUSTS MUTCH MUTED MUTER MUTES MUTHA MUTIS MUTON MUTTS MUXED MUXES MUZAK MUZZY MVULE MYALL MYLAR MYNAH MYNAS MYOID MYOMA MYOPE MYOPS MYOPY MYSID MYTHI MYTHS MYTHY MYXOS MZEES NAAMS NAANS NABES NABIS NABKS NABLA NABOB NACHE NACHO NACRE NADAS NAEVE NAEVI NAFFS NAGAS NAGGY NAGOR NAHAL NAIAD NAIFS NAIKS NAILS NAIRA NAIRU NAKED NAKER NAKFA NALAS NALED NALLA NAMED NAMER NAMES NAMMA NAMUS NANAS NANCE NANCY NANDU NANNA NANOS NANUA NAPAS NAPED NAPES NAPOO NAPPA NAPPE NAPPY NARAS NARCO NARCS NARDS NARES NARIC NARIS NARKS NARKY NARRE NASHI NATCH NATES NATIS NATTY NAUCH NAUNT NAVAR NAVES NAVEW NAVVY NAWAB NAZES NAZIR NAZIS NDUJA NEAFE NEALS NEAPS NEARS NEATH NEATS NEBEK NEBEL NECKS NEDDY NEEDS NEELD NEELE NEEMB NEEMS NEEPS NEESE NEEZE NEGRO NEGUS NEIFS NEIST NEIVE NELIS NELLY NEMAS NEMNS NEMPT NENES NEONS NEPER NEPIT NERAL NERDS NERKA NERKS NEROL NERTS NERTZ NERVY NESTS NETES NETOP NETTS NETTY NEUKS NEUME NEUMS NEVEL NEVES NEVUS NEWBS NEWED NEWEL NEWIE NEWSY NEWTS NEXTS NEXUS NGAIO NGANA NGATI NGOMA NGWEE NICAD NICHT NICKS NICOL NIDAL NIDED NIDES NIDOR NIDUS NIEFS NIEVE NIFES NIFFS NIFFY NIFTY NIGER NIGHS NIHIL NIKAB NIKAH NIKAU NILLS NIMBI NIMBS NIMPS NINER NINES NINON NIPAS NIPPY NIQAB NIRLS NIRLY NISEI NISSE NISUS NITER NITES NITID NITON NITRE NITRO NITRY NITTY NIVAL NIXED NIXER NIXES NIXIE NIZAM NKOSI NOAHS NOBBY NOCKS NODAL NODDY NODES NODUS NOELS NOGGS NOHOW NOILS NOILY NOINT NOIRS NOLES NOLLS NOLOS NOMAS NOMEN NOMES NOMIC NOMOI NOMOS NONAS NONCE NONES NONET NONGS NONIS NONNY NONYL NOOBS NOOIT NOOKS NOOKY NOONS NOOPS NOPAL NORIA NORIS NORKS NORMA NORMS NOSED NOSER NOSES NOTAL NOTED NOTER NOTES NOTUM NOULD NOULE NOULS NOUNS NOUNY NOUPS NOVAE NOVAS NOVUM NOWAY NOWED NOWLS NOWTS NOWTY NOXAL NOXES NOYAU NOYED NOYES NUBBY NUBIA NUCHA NUDDY NUDER NUDES NUDIE NUDZH NUFFS NUGAE NUKED NUKES NULLA NULLS NUMBS NUMEN NUMMY NUNNY NURDS NURDY NURLS NURRS NUTSO NUTSY NYAFF NYALA NYING NYSSA OAKED OAKER OAKUM OARED OASES OASIS OASTS OATEN OATER OATHS OAVES OBANG OBEAH OBELI OBEYS OBIAS OBIED OBIIT OBITS OBJET OBOES OBOLE OBOLI OBOLS OCCAM OCHER OCHES OCHRE OCHRY OCKER OCREA OCTAD OCTAN OCTAS OCTYL OCULI ODAHS ODALS ODEON ODEUM ODISM ODIST ODIUM ODORS ODOUR ODYLE ODYLS OFAYS OFFED OFFIE OFLAG OFTER OGAMS OGEED OGEES OGGIN OGHAM OGIVE OGLED OGLER OGLES OGMIC OGRES OHIAS OHING OHMIC OHONE OIDIA OILED OILER OINKS OINTS OJIME OKAPI OKAYS OKEHS OKRAS OKTAS OLDIE OLEIC OLEIN OLENT OLEOS OLEUM OLIOS OLLAS OLLAV OLLER OLLIE OLOGY OLPAE OLPES OMASA OMBER OMBUS OMENS OMERS OMITS OMLAH OMOVS OMRAH ONCER ONCES ONCET ONCUS ONELY ONERS ONERY ONIUM ONKUS ONLAY ONNED ONTIC OOBIT OOHED OOMPH OONTS OOPED OORIE OOSES OOTID OOZED OOZES OPAHS OPALS OPENS OPEPE OPING OPPOS OPSIN OPTED OPTER ORACH ORACY ORALS ORANG ORANT ORATE ORBED ORCAS ORCIN ORDOS OREAD ORFES ORGIA ORGIC ORGUE ORIBI ORIEL ORIXA ORLES ORLON ORLOP ORMER ORNIS ORPIN ORRIS ORTHO ORVAL ORZOS OSCAR OSHAC OSIER OSMIC OSMOL OSSIA OSTIA OTAKU OTARY OTTAR OTTOS OUBIT OUCHT OUENS OUIJA OULKS OUMAS OUNDY OUPAS OUPED OUPHE OUPHS OURIE OUSEL OUSTS OUTBY OUTED OUTRE OUTRO OUTTA OUZEL OUZOS OVALS OVELS OVENS OVERS OVIST OVOLI OVOLO OVULE OWCHE OWIES OWLED OWLER OWLET OWNED OWRES OWRIE OWSEN OXBOW OXERS OXEYE OXIDS OXIES OXIME OXIMS OXLIP OXTER OYERS OZEKI OZZIE PAALS PAANS PACAS PACED PACER PACES PACEY PACHA PACKS PACOS PACTA PACTS PADIS PADLE PADMA PADRE PADRI PAEAN PAEDO PAEON PAGED PAGER PAGES PAGLE PAGOD PAGRI PAIKS PAILS PAINS PAIRE PAIRS PAISA PAISE PAKKA PALAS PALAY PALEA PALED PALES PALET PALIS PALKI PALLA PALLS PALLY PALMS PALMY PALPI PALPS PALSA PAMPA PANAX PANCE PANDA PANDS PANDY PANED PANES PANGA PANGS PANIM PANKO PANNE PANNI PANTO PANTS PANTY PAOLI PAOLO PAPAS PAPAW PAPES PAPPI PAPPY PARAE PARAS PARCH PARDI PARDS PARDY PARED PAREN PAREO PARES PAREU PAREV PARGE PARGO PARIS PARKI PARKS PARKY PARLE PARLY PARMA PAROL PARPS PARRA PARRS PARTI PARTS PARVE PARVO PASEO PASES PASHA PASHM PASKA PASPY PASSE PASTS PATED PATEN PATER PATES PATHS PATIN PATKA PATLY PATTE PATUS PAUAS PAULS PAVAN PAVED PAVEN PAVER PAVES PAVID PAVIN PAVIS PAWAS PAWAW PAWED PAWER PAWKS PAWKY PAWLS PAWNS PAXES PAYED PAYOR PAYSD PEAGE PEAGS PEAKS PEAKY PEALS PEANS PEARE PEARS PEART PEASE PEATS PEATY PEAVY PEAZE PEBAS PECHS PECKE PECKS PECKY PEDES PEDIS PEDRO PEECE PEEKS PEELS PEENS PEEOY PEEPE PEEPS PEERS PEERY PEEVE PEGGY PEGHS PEINS PEISE PEIZE PEKAN PEKES PEKIN PEKOE PELAS PELAU PELES PELFS PELLS PELMA PELON PELTA PELTS PENDS PENDU PENED PENES PENGO PENIE PENIS PENKS PENNA PENNI PENTS PEONS PEONY PEPLA PEPOS PEPPY PEPSI PERAI PERCE PERCS PERDU PERDY PEREA PERES PERIS PERKS PERMS PERNS PEROG PERPS PERRY PERSE PERST PERTS PERVE PERVO PERVS PERVY PESOS PESTS PESTY PETAR PETER PETIT PETRE PETRI PETTI PETTO PEWEE PEWIT PEYSE PHAGE PHANG PHARE PHARM PHEER PHENE PHEON PHESE PHIAL PHISH PHIZZ PHLOX PHOCA PHONO PHONS PHOTS PHPHT PHUTS PHYLA PHYLE PIANI PIANS PIBAL PICAL PICAS PICCY PICKS PICOT PICRA PICUL PIEND PIERS PIERT PIETA PIETS PIEZO PIGHT PIGMY PIING PIKAS PIKAU PIKED PIKER PIKES PIKEY PIKIS PIKUL PILAE PILAF PILAO PILAR PILAU PILAW PILCH PILEA PILED PILEI PILER PILES PILIS PILLS PILOW PILUM PILUS PIMAS PIMPS PINAS PINED PINES PINGO PINGS PINKO PINKS PINNA PINNY PINON PINOT PINTA PINTS PINUP PIONS PIONY PIOUS PIOYE PIOYS PIPAL PIPAS PIPED PIPES PIPET PIPIS PIPIT PIPPY PIPUL PIRAI PIRLS PIRNS PIROG PISCO PISES PISKY PISOS PISSY PISTE PITAS PITHS PITON PITOT PITTA PIUMS PIXES PIZED PIZES PLAAS PLACK PLAGE PLANS PLAPS PLASH PLASM PLAST PLATS PLATT PLATY PLAYA PLAYS PLEAS PLEBE PLEBS PLENA PLEON PLESH PLEWS PLICA PLIES PLIMS PLING PLINK PLOAT PLODS PLONG PLONK PLOOK PLOPS PLOTS PLOTZ PLOUK PLOWS PLOYE PLOYS PLUES PLUFF PLUGS PLUMS PLUMY PLUOT PLUTO PLYER POACH POAKA POAKE POBOY POCKS POCKY PODAL PODDY PODEX PODGE PODGY PODIA POEMS POEPS POETS POGEY POGGE POGOS POHED POILU POIND POKAL POKED POKES POKEY POKIE POLED POLER POLES POLEY POLIO POLIS POLJE POLKS POLLS POLLY POLOS POLTS POLYS POMBE POMES POMMY POMOS POMPS PONCE PONCY PONDS PONES PONEY PONGA PONGO PONGS PONGY PONKS PONTS PONTY PONZU POODS POOED POOFS POOFY POOHS POOJA POOKA POOKS POOLS POONS POOPS POOPY POORI POORT POOTS POOVE POOVY POPES POPPA POPSY PORAE PORAL PORED PORER PORES PORGE PORGY PORIN PORKS PORKY PORNO PORNS PORNY PORTA PORTS PORTY POSED POSES POSEY POSHO POSTS POTAE POTCH POTED POTES POTIN POTOO POTSY POTTO POTTS POTTY POUFF POUFS POUKE POUKS POULE POULP POULT POUPE POUPT POURS POUTS POWAN POWIN POWND POWNS POWNY POWRE POXED POXES POYNT POYOU POYSE POZZY PRAAM PRADS PRAHU PRAMS PRANA PRANG PRAOS PRASE PRATE PRATS PRATT PRATY PRAUS PRAYS PREDY PREED PREES PREIF PREMS PREMY PRENT PREON PREOP PREPS PRESA PRESE PREST PREVE PREXY PREYS PRIAL PRICY PRIEF PRIER PRIES PRIGS PRILL PRIMA PRIMI PRIMP PRIMS PRIMY PRINK PRION PRISE PRISS PROAS PROBS PRODS PROEM PROFS PROGS PROIN PROKE PROLE PROLL PROMO PROMS PRONK PROPS PRORE PROSO PROSS PROST PROSY PROTO PROUL PROWS PROYN PRUNT PRUTA PRYER PRYSE PSEUD PSHAW PSION PSOAE PSOAI PSOAS PSORA PSYCH PSYOP PUBCO PUBES PUBIS PUCAN PUCER PUCES PUCKA PUCKS PUDDY PUDGE PUDIC PUDOR PUDSY PUDUS PUERS PUFFA PUFFS PUGGY PUGIL PUHAS PUJAH PUJAS PUKAS PUKED PUKER PUKES PUKEY PUKKA PUKUS PULAO PULAS PULED PULER PULES PULIK PULIS PULKA PULKS PULLI PULLS PULLY PULMO PULPS PULUS PUMAS PUMIE PUMPS PUNAS PUNCE PUNGA PUNGS PUNJI PUNKA PUNKS PUNKY PUNNY PUNTO PUNTS PUNTY PUPAE PUPAS PUPUS PURDA PURED PURES PURIN PURIS PURLS PURPY PURRS PURSY PURTY PUSES PUSLE PUSSY PUTID PUTON PUTTI PUTTO PUTTS PUZEL PWNED PYATS PYETS PYGAL PYINS PYLON PYNED PYNES PYOID PYOTS PYRAL PYRAN PYRES PYREX PYRIC PYROS PYXED PYXES PYXIE PYXIS PZAZZ QADIS QAIDS QAJAQ QANAT QAPIK QIBLA QOPHS QORMA QUADS QUAFF QUAGS QUAIR QUAIS QUAKY QUALE QUANT QUARE QUASS QUATE QUATS QUAYD QUAYS QUBIT QUEAN QUEME QUENA QUERN QUEYN QUEYS QUICH QUIDS QUIFF QUIMS QUINA QUINE QUINO QUINS QUINT QUIPO QUIPS QUIPU QUIRE QUIRT QUIST QUITS QUOAD QUODS QUOIF QUOIN QUOIT QUOLL QUONK QUOPS QURSH QUYTE RABAT RABIC RABIS RACED RACES RACHE RACKS RACON RADGE RADIX RADON RAFFS RAFTS RAGAS RAGDE RAGED RAGEE RAGER RAGES RAGGA RAGGS RAGGY RAGIS RAGUS RAHED RAHUI RAIAS RAIDS RAIKS RAILE RAILS RAINE RAINS RAIRD RAITA RAITS RAJAS RAJES RAKED RAKEE RAKER RAKES RAKIA RAKIS RAKUS RALES RAMAL RAMEE RAMET RAMIE RAMIN RAMIS RAMMY RAMPS RAMUS RANAS RANCE RANDS RANEE RANGA RANGI RANGS RANGY RANID RANIS RANKE RANKS RANTS RAPED RAPER RAPES RAPHE RAPPE RARED RAREE RARES RARKS RASED RASER RASES RASPS RASSE RASTA RATAL RATAN RATAS RATCH RATED RATEL RATER RATES RATHA RATHE RATHS RATOO RATOS RATUS RAUNS RAUPO RAVED RAVEL RAVER RAVES RAVEY RAVIN RAWER RAWIN RAWLY RAWNS RAXED RAXES RAYAH RAYAS RAYED RAYLE RAYNE RAZED RAZEE RAZER RAZES RAZOO READD READS REAIS REAKS REALO REALS REAME REAMS REAMY REANS REAPS REARS REAST REATA REATE REAVE REBBE REBEC REBID REBIT REBOP REBUY RECAL RECCE RECCO RECCY RECIT RECKS RECON RECTA RECTI RECTO REDAN REDDS REDDY REDED REDES REDIA REDID REDIP REDLY REDON REDOS REDOX REDRY REDUB REDUX REDYE REECH REEDE REEDS REEFS REEFY REEKS REEKY REELS REENS REEST REEVE REFED REFEL REFFO REFIS REFIX REFLY REFRY REGAR REGES REGGO REGIE REGMA REGNA REGOS REGUR REHEM REIFS REIFY REIKI REIKS REINK REINS REIRD REIST REIVE REJIG REJON REKED REKES REKEY RELET RELIE RELIT RELLO REMAN REMAP REMEN REMET REMEX REMIX RENAY RENDS RENEY RENGA RENIG RENIN RENNE RENOS RENTE RENTS REOIL REORG REPEG REPIN REPLA REPOS REPOT REPPS REPRO RERAN RERIG RESAT RESAW RESAY RESEE RESES RESEW RESID RESIT RESOD RESOW RESTO RESTS RESTY RESUS RETAG RETAX RETEM RETIA RETIE RETOX REVET REVIE REWAN REWAX REWED REWET REWIN REWON REWTH REXES REZES RHEAS RHEME RHEUM RHIES RHIME RHINE RHODY RHOMB RHONE RHUMB RHYNE RHYTA RIADS RIALS RIANT RIATA RIBAS RIBBY RIBES RICED RICER RICES RICEY RICHT RICIN RICKS RIDES RIDGY RIDIC RIELS RIEMS RIEVE RIFER RIFFS RIFTE RIFTS RIFTY RIGGS RIGOL RILED RILES RILEY RILLE RILLS RIMAE RIMED RIMER RIMES RIMUS RINDS RINDY RINES RINGS RINKS RIOJA RIOTS RIPED RIPES RIPPS RISES RISHI RISKS RISPS RISUS RITES RITTS RITZY RIVAS RIVED RIVEL RIVEN RIVES RIYAL RIZAS ROADS ROAMS ROANS ROARS ROARY ROATE ROBED ROBES ROBLE ROCKS RODED RODES ROGUY ROHES ROIDS ROILS ROILY ROINS ROIST ROJAK ROJIS ROKED ROKER ROKES ROLAG ROLES ROLFS ROLLS ROMAL ROMAN ROMEO ROMPS RONDE RONDO RONEO RONES RONIN RONNE RONTE RONTS ROODS ROOFS ROOFY ROOKS ROOKY ROOMS ROONS ROOPS ROOPY ROOSA ROOSE ROOTS ROOTY ROPED ROPER ROPES ROPEY ROQUE RORAL RORES RORIC RORID RORIE RORTS RORTY ROSED ROSES ROSET ROSHI ROSIN ROSIT ROSTI ROSTS ROTAL ROTAN ROTAS ROTCH ROTED ROTES ROTIS ROTLS ROTON ROTOS ROTTE ROUEN ROUES ROULE ROULS ROUMS ROUPS ROUPY ROUST ROUTH ROUTS ROVED ROVEN ROVES ROWAN ROWED ROWEL ROWEN ROWIE ROWME ROWND ROWTH ROWTS ROYNE ROYST ROZET ROZIT RUANA RUBAI RUBBY RUBEL RUBES RUBIN RUBLE RUBLI RUBUS RUCHE RUCKS RUDAS RUDDS RUDES RUDIE RUDIS RUEDA RUERS RUFFE RUFFS RUGAE RUGAL RUGGY RUING RUINS RUKHS RULED RULES RUMAL RUMBO RUMEN RUMES RUMLY RUMMY RUMPO RUMPS RUMPY RUNCH RUNDS RUNED RUNES RUNGS RUNIC RUNNY RUNTS RUNTY RUPIA RURPS RURUS RUSAS RUSES RUSHY RUSKS RUSMA RUSSE RUSTS RUTHS RUTIN RUTTY RYALS RYBAT RYKED RYKES RYMME RYNDS RYOTS RYPER SAAGS SABAL SABED SABER SABES SABHA SABIN SABIR SABLE SABOT SABRA SABRE SACKS SACRA SADDO SADES SADHE SADHU SADIS SADOS SADZA SAFED SAFES SAGAS SAGER SAGES SAGGY SAGOS SAGUM SAHEB SAHIB SAICE SAICK SAICS SAIDS SAIGA SAILS SAIMS SAINE SAINS SAIRS SAIST SAITH SAJOU SAKAI SAKER SAKES SAKIA SAKIS SAKTI SALAL SALAT SALEP SALES SALET SALIC SALIX SALLE SALMI SALOL SALOP SALPA SALPS SALSE SALTO SALTS SALUE SALUT SAMAN SAMAS SAMBA SAMBO SAMEK SAMEL SAMEN SAMES SAMEY SAMFU SAMMY SAMPI SAMPS SANDS SANED SANES SANGA SANGH SANGO SANGS SANKO SANSA SANTO SANTS SAOLA SAPAN SAPID SAPOR SARAN SARDS SARED SAREE SARGE SARGO SARIN SARIS SARKS SARKY SAROD SAROS SARUS SASER SASIN SASSE SATAI SATAY SATED SATEM SATES SATIS SAUBA SAUCH SAUGH SAULS SAULT SAUNT SAURY SAUTS SAVED SAVER SAVES SAVEY SAVIN SAWAH SAWED SAWER SAXES SAYED SAYER SAYID SAYNE SAYON SAYST SAZES SCABS SCADS SCAFF SCAGS SCAIL SCALA SCALL SCAMS SCAND SCANS SCAPA SCAPE SCAPI SCARP SCARS SCART SCATH SCATS SCATT SCAUD SCAUP SCAUR SCAWS SCEAT SCENA SCEND SCHAV SCHMO SCHUL SCHWA SCLIM SCODY SCOGS SCOOG SCOOT SCOPA SCOPS SCOTS SCOUG SCOUP SCOWP SCOWS SCRAB SCRAE SCRAG SCRAN SCRAT SCRAW SCRAY SCRIM SCRIP SCROB SCROD SCROG SCROW SCUDI SCUDO SCUDS SCUFF SCUFT SCUGS SCULK SCULL SCULP SCULS SCUMS SCUPS SCURF SCURS SCUSE SCUTA SCUTE SCUTS SCUZZ SCYES SDAYN SDEIN SEALS SEAME SEAMS SEAMY SEANS SEARE SEARS SEASE SEATS SEAZE SEBUM SECCO SECHS SECTS SEDER SEDES SEDGE SEDGY SEDUM SEEDS SEEKS SEELD SEELS SEELY SEEMS SEEPS SEEPY SEERS SEFER SEGAR SEGNI SEGNO SEGOL SEGOS SEHRI SEIFS SEILS SEINE SEIRS SEISE SEISM SEITY SEIZA SEKOS SEKTS SELAH SELES SELFS SELLA SELLE SELLS SELVA SEMEE SEMES SEMIE SEMIS SENAS SENDS SENES SENGI SENNA SENOR SENSA SENSI SENTE SENTI SENTS SENVY SENZA SEPAD SEPAL SEPIC SEPOY SEPTA SEPTS SERAC SERAI SERAL SERED SERER SERES SERFS SERGE SERIC SERIN SERKS SERON SEROW SERRA SERRE SERRS SERRY SERVO SESEY SESSA SETAE SETAL SETON SETTS SEWAN SEWAR SEWED SEWEL SEWEN SEWIN SEXED SEXER SEXES SEXTO SEXTS SEYEN SHADS SHAGS SHAHS SHAKO SHAKT SHALM SHALY SHAMA SHAMS SHAND SHANS SHAPS SHARN SHASH SHAUL SHAWM SHAWN SHAWS SHAYA SHAYS SHCHI SHEAF SHEAL SHEAS SHEDS SHEEL SHEND SHENT SHEOL SHERD SHERE SHERO SHETS SHEVA SHEWN SHEWS SHIAI SHIEL SHIER SHIES SHILL SHILY SHIMS SHINS SHIPS SHIRR SHIRS SHISH SHISO SHIST SHITE SHITS SHIUR SHIVA SHIVE SHIVS SHLEP SHLUB SHMEK SHMOE SHOAT SHOED SHOER SHOES SHOGI SHOGS SHOJI SHOJO SHOLA SHOOL SHOON SHOOS SHOPE SHOPS SHORL SHOTE SHOTS SHOTT SHOWD SHOWS SHOYU SHRED SHRIS SHROW SHTIK SHTUM SHTUP SHULE SHULN SHULS SHUNS SHURA SHUTE SHUTS SHWAS SHYER SIALS SIBBS SIBYL SICES SICHT SICKO SICKS SICKY SIDAS SIDED SIDER SIDES SIDHA SIDHE SIDLE SIELD SIENS SIENT SIETH SIEUR SIFTS SIGHS SIGIL SIGLA SIGNA SIGNS SIJOS SIKAS SIKER SIKES SILDS SILED SILEN SILER SILES SILEX SILKS SILLS SILOS SILTS SILTY SILVA SIMAR SIMAS SIMBA SIMIS SIMPS SIMUL SINDS SINED SINES SINGS SINHS SINKS SINKY SINUS SIPED SIPES SIPPY SIRED SIREE SIRES SIRIH SIRIS SIROC SIRRA SIRUP SISAL SISES SISTA SISTS SITAR SITED SITES SITHE SITKA SITUP SITUS SIVER SIXER SIXES SIXMO SIXTE SIZAR SIZED SIZEL SIZER SIZES SKAGS SKAIL SKALD SKANK SKART SKATS SKATT SKAWS SKEAN SKEAR SKEDS SKEED SKEEF SKEEN SKEER SKEES SKEET SKEGG SKEGS SKEIN SKELF SKELL SKELM SKELP SKENE SKENS SKEOS SKEPS SKERS SKETS SKEWS SKIDS SKIED SKIES SKIEY SKIMO SKIMS SKINK SKINS SKINT SKIOS SKIPS SKIRL SKIRR SKITE SKITS SKIVE SKIVY SKLIM SKOAL SKODY SKOFF SKOGS SKOLS SKOOL SKORT SKOSH SKRAN SKRIK SKUAS SKUGS SKYED SKYER SKYEY SKYFS SKYRE SKYRS SKYTE SLABS SLADE SLAES SLAGS SLAID SLAKE SLAMS SLANE SLANK SLAPS SLART SLATS SLATY SLAWS SLAYS SLEBS SLEDS SLEER SLEWS SLEYS SLIER SLILY SLIMS SLIPE SLIPS SLIPT SLISH SLITS SLIVE SLOAN SLOBS SLOES SLOGS SLOID SLOJD SLOMO SLOOM SLOOT SLOPS SLOPY SLORM SLOTS SLOVE SLOWS SLOYD SLUBB SLUBS SLUED SLUES SLUFF SLUGS SLUIT SLUMS SLURB SLURS SLUSE SLUTS SLYER SLYPE SMAAK SMAIK SMALM SMALT SMARM SMAZE SMEEK SMEES SMEIK SMEKE SMERK SMEWS SMIRR SMIRS SMITS SMOGS SMOKO SMOLT SMOOR SMOOT SMORE SMORG SMOUT SMOWT SMUGS SMURS SMUSH SMUTS SNABS SNAFU SNAGS SNAPS SNARF SNARK SNARS SNARY SNASH SNATH SNAWS SNEAD SNEAP SNEBS SNECK SNEDS SNEED SNEES SNELL SNIBS SNICK SNIES SNIFT SNIGS SNIPS SNIPY SNIRT SNITS SNOBS SNODS SNOEK SNOEP SNOGS SNOKE SNOOD SNOOK SNOOL SNOOT SNOTS SNOWK SNOWS SNUBS SNUGS SNUSH SNYES SOAKS SOAPS SOARE SOARS SOAVE SOBAS SOCAS SOCES SOCKO SOCKS SOCLE SODAS SODDY SODIC SODOM SOFAR SOFAS SOFTA SOFTS SOFTY SOGER SOHUR SOILS SOILY SOJAS SOJUS SOKAH SOKEN SOKES SOKOL SOLAH SOLAN SOLAS SOLDE SOLDI SOLDO SOLDS SOLED SOLEI SOLER SOLES SOLON SOLOS SOLUM SOLUS SOMAN SOMAS SONCE SONDE SONES SONGS SONLY SONNE SONNY SONSE SONSY SOOEY SOOKS SOOKY SOOLE SOOLS SOOMS SOOPS SOOTE SOOTS SOPHS SOPHY SOPOR SOPPY SOPRA SORAL SORAS SORBO SORBS SORDA SORDO SORDS SORED SOREE SOREL SORER SORES SOREX SORGO SORNS SORRA SORTA SORTS SORUS SOTHS SOTOL SOUCE SOUCT SOUGH SOUKS SOULS SOUMS SOUPS SOUPY SOURS SOUSE SOUTS SOWAR SOWCE SOWED SOWFF SOWFS SOWLE SOWLS SOWMS SOWND SOWNE SOWPS SOWSE SOWTH SOYAS SOYLE SOYUZ SOZIN SPACY SPADO SPAED SPAER SPAES SPAGS SPAHI SPAIL SPAIN SPAIT SPAKE SPALD SPALE SPALL SPALT SPAMS SPANE SPANG SPANS SPARD SPARS SPART SPATE SPATS SPAUL SPAWL SPAWS SPAYD SPAYS SPAZA SPAZZ SPEAL SPEAN SPEAT SPECS SPECT SPEEL SPEER SPEIL SPEIR SPEKS SPELD SPELK SPEOS SPETS SPEUG SPEWS SPEWY SPIAL SPICA SPICK SPICS SPIDE SPIER SPIES SPIFF SPIFS SPIKS SPILE SPIMS SPINA SPINK SPINS SPIRT SPIRY SPITS SPITZ SPIVS SPLAY SPLOG SPODE SPODS SPOOM SPOOR SPOOT SPORK SPOSH SPOTS SPRAD SPRAG SPRAT SPRED SPREW SPRIT SPROD SPROG SPRUE SPRUG SPUDS SPUED SPUER SPUES SPUGS SPULE SPUME SPUMY SPURS SPUTA SPYAL SPYRE SQUAB SQUAW SQUEG SQUID SQUIT SQUIZ STABS STADE STAGS STAGY STAIG STANE STANG STAPH STAPS STARN STARR STARS STATS STAUN STAWS STAYS STEAN STEAR STEDD STEDE STEDS STEEK STEEM STEEN STEIL STELA STELE STELL STEME STEMS STEND STENO STENS STENT STEPS STEPT STERE STETS STEWS STEWY STEYS STICH STIED STIES STILB STILE STIME STIMS STIMY STIPA STIPE STIRE STIRK STIRP STIRS STIVE STIVY STOAE STOAI STOAS STOAT STOBS STOEP STOGY STOIT STOLN STOMA STOND STONG STONK STONN STOOK STOOR STOPE STOPS STOPT STOSS STOTS STOTT STOUN STOUP STOUR STOWN STOWP STOWS STRAD STRAE STRAG STRAK STREP STREW STRIA STRIG STRIM STROP STROW STROY STRUM STUBS STUDE STUDS STULL STULM STUMM STUMS STUNS STUPA STUPE STURE STURT STYED STYES STYLI STYLO STYME STYMY STYRE STYTE SUBAH SUBAS SUBBY SUBER SUBHA SUCCI SUCKS SUCKY SUCRE SUDDS SUDOR SUDSY SUEDE SUENT SUERS SUETE SUETS SUETY SUGAN SUGHS SUGOS SUHUR SUIDS SUINT SUITS SUJEE SUKHS SUKUK SULCI SULFA SULFO SULKS SULPH SULUS SUMIS SUMMA SUMOS SUMPH SUMPS SUNIS SUNKS SUNNA SUNNS SUNUP SUPES SUPRA SURAH SURAL SURAS SURAT SURDS SURED SURES SURFS SURFY SURGY SURRA SUSED SUSES SUSUS SUTOR SUTRA SUTTA SWABS SWACK SWADS SWAGE SWAGS SWAIL SWAIN SWALE SWALY SWAMY SWANG SWANK SWANS SWAPS SWAPT SWARD SWARE SWARF SWART SWATS SWAYL SWAYS SWEAL SWEDE SWEED SWEEL SWEER SWEES SWEIR SWELT SWERF SWEYS SWIES SWIGS SWILE SWIMS SWINK SWIPE SWIRE SWISS SWITH SWITS SWIVE SWIZZ SWOBS SWOLE SWOLN SWOPS SWOPT SWOTS SWOUN SYBBE SYBIL SYBOE SYBOW SYCEE SYCES SYCON SYENS SYKER SYKES SYLIS SYLPH SYLVA SYMAR SYNCH SYNCS SYNDS SYNED SYNES SYNTH SYPED SYPES SYPHS SYRAH SYREN SYSOP SYTHE SYVER TAALS TAATA TABER TABES TABID TABIS TABLA TABOR TABUN TABUS TACAN TACES TACET TACHE TACHO TACHS TACKS TACOS TACTS TAELS TAFIA TAGGY TAGMA TAHAS TAHRS TAIGA TAIGS TAIKO TAILS TAINS TAIRA TAISH TAITS TAJES TAKAS TAKES TAKHI TAKIN TAKIS TAKKY TALAK TALAQ TALAR TALAS TALCS TALCY TALEA TALER TALES TALKS TALKY TALLS TALMA TALPA TALUK TALUS TAMAL TAMED TAMES TAMIN TAMIS TAMMY TAMPS TANAS TANGA TANGI TANGS TANHS TANKA TANKS TANKY TANNA TANSY TANTI TANTO TANTY TAPAS TAPED TAPEN TAPES TAPET TAPIS TAPPA TAPUS TARAS TARDO TARED TARES TARGA TARGE TARNS TAROC TAROK TAROS TARPS TARRE TARRY TARSI TARTS TARTY TASAR TASED TASER TASES TASKS TASSA TASSE TASSO TATAR TATER TATES TATHS TATIE TATOU TATTS TATUS TAUBE TAULD TAUON TAUPE TAUTS TAVAH TAVAS TAVER TAWAI TAWAS TAWED TAWER TAWIE TAWSE TAWTS TAXED TAXER TAXES TAXIS TAXOL TAXON TAXOR TAXUS TAYRA TAZZA TAZZE TEADE TEADS TEAED TEAKS TEALS TEAMS TEARS TEATS TEAZE TECHS TECHY TECTA TEELS TEEMS TEEND TEENE TEENS TEENY TEERS TEFFS TEGGS TEGUA TEGUS TEHRS TEIID TEILS TEIND TEINS TELAE TELCO TELES TELEX TELIA TELIC TELLS TELLY TELOI TELOS TEMED TEMES TEMPI TEMPS TEMPT TEMSE TENCH TENDS TENDU TENES TENGE TENIA TENNE TENNO TENNY TENON TENTS TENTY TENUE TEPAL TEPAS TEPOY TERAI TERAS TERCE TEREK TERES TERFE TERFS TERGA TERMS TERNE TERNS TERRY TERTS TESLA TESTA TESTE TESTS TETES TETHS TETRA TETRI TEUCH TEUGH TEWED TEWEL TEWIT TEXAS TEXES TEXTS THACK THAGI THAIM THALE THALI THANA THANE THANG THANS THANX THARM THARS THAWS THAWY THEBE THECA THEED THEEK THEES THEGN THEIC THEIN THELF THEMA THENS THEOW THERM THESP THETE THEWS THEWY THIGS THILK THILL THINE THINS THIOL THIRL THOFT THOLE THOLI THORO THORP THOUS THOWL THRAE THRAW THRID THRIP THROE THUDS THUGS THUJA THUNK THURL THUYA THYMI THYMY TIANS TIARS TICAL TICCA TICED TICES TICHY TICKS TICKY TIDDY TIDED TIDES TIERS TIFFS TIFOS TIFTS TIGES TIGON TIKAS TIKES TIKIS TIKKA TILAK TILED TILER TILES TILLS TILLY TILTH TILTS TIMBO TIMED TIMES TIMON TIMPS TINAS TINCT TINDS TINEA TINED TINES TINGE TINGS TINKS TINNY TINTS TINTY TIPIS TIPPY TIRED TIRES TIRLS TIROS TIRRS TITCH TITER TITIS TITRE TITTY TITUP TIYIN TIYNS TIZES TIZZY TOADS TOADY TOAZE TOCKS TOCKY TOCOS TODDE TOEAS TOFFS TOFFY TOFTS TOFUS TOGAE TOGAS TOGED TOGES TOGUE TOHOS TOILE TOILS TOING TOISE TOITS TOKAY TOKED TOKER TOKES TOKOS TOLAN TOLAR TOLAS TOLED TOLES TOLLS TOLLY TOLTS TOLUS TOLYL TOMAN TOMBS TOMES TOMIA TOMMY TOMOS TONDI TONDO TONED TONER TONES TONEY TONGS TONKA TONKS TONNE TONUS TOOLS TOOMS TOONS TOOTS TOPED TOPEE TOPEK TOPER TOPES TOPHE TOPHI TOPHS TOPIS TOPOI TOPOS TOPPY TOQUE TORAH TORAN TORAS TORCS TORES TORIC TORII TOROS TOROT TORRS TORSE TORSI TORSK TORTA TORTE TORTS TOSAS TOSED TOSES TOSHY TOSSY TOTED TOTER TOTES TOTTY TOUKS TOUNS TOURS TOUSE TOUSY TOUTS TOUZE TOUZY TOWED TOWIE TOWNS TOWNY TOWSE TOWSY TOWTS TOWZE TOWZY TOYED TOYER TOYON TOYOS TOZED TOZES TOZIE TRABS TRADS TRAGI TRAIK TRAMS TRANK TRANQ TRANS TRANT TRAPE TRAPS TRAPT TRASS TRATS TRATT TRAVE TRAYF TRAYS TRECK TREED TREEN TREES TREFA TREIF TREKS TREMA TREMS TRESS TREST TRETS TREWS TREYF TREYS TRIAC TRIDE TRIER TRIES TRIFF TRIGO TRIGS TRIKE TRILD TRILL TRIMS TRINE TRINS TRIOL TRIOR TRIOS TRIPS TRIPY TRIST TROAD TROAK TROAT TROCK TRODE TRODS TROGS TROIS TROKE TROMP TRONA TRONC TRONE TRONK TRONS TROOZ TROTH TROTS TROWS TROYS TRUED TRUES TRUGO TRUGS TRULL TRYER TRYKE TRYMA TRYPS TSADE TSADI TSARS TSKED TSUBA TSUBO TUANS TUART TUATH TUBAE TUBAR TUBAS TUBBY TUBED TUBES TUCKS TUFAS TUFFE TUFFS TUFTS TUFTY TUGRA TUILE TUINA TUISM TUKTU TULES TULPA TULSI TUMID TUMMY TUMPS TUMPY TUNAS TUNDS TUNED TUNER TUNES TUNGS TUNNY TUPEK TUPIK TUPLE TUQUE TURDS TURFS TURFY TURKS TURME TURMS TURNS TURNT TURPS TURRS TUSHY TUSKS TUSKY TUTEE TUTTI TUTTY TUTUS TUXES TUYER TWAES TWAIN TWALS TWANK TWATS TWAYS TWEEL TWEEN TWEEP TWEER TWERK TWERP TWIER TWIGS TWILL TWILT TWINK TWINS TWINY TWIRE TWIRP TWITE TWITS TWOER TWYER TYEES TYERS TYIYN TYKES TYLER TYMPS TYNDE TYNED TYNES TYPAL TYPED TYPES TYPEY TYPIC TYPOS TYPPS TYPTO TYRAN TYRED TYRES TYROS TYTHE TZARS UDALS UDONS UGALI UGGED UHLAN UHURU UKASE ULAMA ULANS ULEMA ULMIN ULNAD ULNAE ULNAR ULNAS ULPAN ULVAS ULYIE ULZIE UMAMI UMBEL UMBER UMBLE UMBOS UMBRE UMIAC UMIAK UMIAQ UMMAH UMMAS UMMED UMPED UMPHS UMPIE UMPTY UMRAH UMRAS UNAIS UNAPT UNARM UNARY UNAUS UNBAG UNBAN UNBAR UNBED UNBID UNBOX UNCAP UNCES UNCIA UNCOS UNCOY UNCUS UNDAM UNDEE UNDOS UNDUG UNETH UNFIX UNGAG UNGET UNGOD UNGOT UNGUM UNHAT UNHIP UNICA UNITS UNJAM UNKED UNKET UNKID UNLAW UNLAY UNLED UNLET UNLID UNMAN UNMEW UNMIX UNPAY UNPEG UNPEN UNPIN UNRED UNRID UNRIG UNRIP UNSAW UNSAY UNSEE UNSEW UNSEX UNSOD UNTAX UNTIN UNWET UNWIT UNWON UPBOW UPBYE UPDOS UPDRY UPEND UPJET UPLAY UPLED UPLIT UPPED UPRAN UPRUN UPSEE UPSEY UPTAK UPTER UPTIE URAEI URALI URAOS URARE URARI URASE URATE URBEX URBIA URDEE UREAL UREAS UREDO UREIC URENA URENT URGED URGER URGES URIAL URITE URMAN URNAL URNED URPED URSAE URSID URSON URUBU URVAS USERS USNEA USQUE USURE USURY UTERI UVEAL UVEAS UVULA VACUA VADED VADES VAGAL VAGUS VAILS VAIRE VAIRS VAIRY VAKAS VAKIL VALES VALIS VALSE VAMPS VAMPY VANDA VANED VANES VANGS VANTS VAPED VAPER VAPES VARAN VARAS VARDY VAREC VARES VARIA VARIX VARNA VARUS VARVE VASAL VASES VASTS VASTY VATIC VATUS VAUCH VAUTE VAUTS VAWTE VAXES VEALE VEALS VEALY VEENA VEEPS VEERS VEERY VEGAS VEGES VEGIE VEGOS VEHME VEILS VEILY VEINS VEINY VELAR VELDS VELDT VELES VELLS VELUM VENAE VENAL VENDS VENDU VENEY VENGE VENIN VENTS VENUS VERBS VERRA VERRY VERST VERTS VERTU VESPA VESTA VESTS VETCH VEXED VEXER VEXES VEXIL VEZIR VIALS VIAND VIBES VIBEX VIBEY VICED VICES VICHY VIERS VIEWS VIEWY VIFDA VIFFS VIGAS VIGIA VILDE VILER VILLI VILLS VIMEN VINAL VINAS VINCA VINED VINER VINES VINEW VINIC VINOS VINTS VIOLD VIOLS VIRED VIREO VIRES VIRGA VIRGE VIRID VIRLS VIRTU VISAS VISED VISES VISIE VISNE VISON VISTO VITAE VITAS VITEX VITRO VITTA VIVAS VIVAT VIVDA VIVER VIVES VIZIR VIZOR VLEIS VLIES VLOGS VOARS VOCAB VOCES VODDY VODOU VODUN VOEMA VOGIE VOIDS VOILE VOIPS VOLAE VOLAR VOLED VOLES VOLET VOLKS VOLTA VOLTE VOLTI VOLTS VOLVA VOLVE VOMER VOTED VOTES VOUGE VOULU VOWED VOWER VOXEL VOZHD VRAIC VRILS VROOM VROUS VROUW VROWS VUGGS VUGGY VUGHS VUGHY VULGO VULNS VULVA VUTTY WAACS WACKE WACKO WACKS WADDS WADDY WADED WADER WADES WADGE WADIS WADTS WAFFS WAFTS WAGED WAGES WAGGA WAGYU WAHOO WAIDE WAIFS WAIFT WAILS WAINS WAIRS WAITE WAITS WAKAS WAKED WAKEN WAKER WAKES WAKFS WALDO WALDS WALED WALER WALES WALIE WALIS WALKS WALLA WALLS WALLY WALTY WAMED WAMES WAMUS WANDS WANED WANES WANEY WANGS WANKS WANKY WANLE WANLY WANNA WANTS WANTY WANZE WAQFS WARBS WARBY WARDS WARED WARES WAREZ WARKS WARMS WARNS WARPS WARRE WARST WARTS WASES WASHY WASMS WASPS WASPY WASTS WATAP WATTS WAUFF WAUGH WAUKS WAULK WAULS WAURS WAVED WAVES WAVEY WAWAS WAWES WAWLS WAXED WAXER WAXES WAYED WAZIR WAZOO WEALD WEALS WEAMB WEANS WEARS WEBBY WEBER WECHT WEDEL WEDGY WEEDS WEEKE WEEKS WEELS WEEMS WEENS WEENY WEEPS WEEPY WEEST WEETE WEETS WEFTE WEFTS WEIDS WEILS WEIRS WEISE WEIZE WEKAS WELDS WELKE WELKS WELKT WELLS WELLY WELTS WEMBS WENDS WENGE WENNY WENTS WEROS WERSH WESTS WETAS WETLY WEXED WEXES WHAMO WHAMS WHANG WHAPS WHARE WHATA WHATS WHAUP WHAUR WHEAL WHEAR WHEEN WHEEP WHEFT WHELK WHELM WHENS WHETS WHEWS WHEYS WHIDS WHIFT WHIGS WHILK WHIMS WHINS WHIOS WHIPS WHIPT WHIRR WHIRS WHISH WHISS WHIST WHITS WHITY WHIZZ WHOMP WHOOF WHOOT WHOPS WHORE WHORL WHORT WHOSO WHOWS WHUMP WHUPS WHYDA WICCA WICKS WICKY WIDDY WIDES WIELS WIFED WIFES WIFEY WIFIE WIFTY WIGAN WIGGA WIGGY WIKIS WILCO WILDS WILED WILES WILGA WILIS WILJA WILLS WILTS WIMPS WINDS WINED WINES WINEY WINGE WINGS WINGY WINKS WINNA WINNS WINOS WINZE WIPED WIPER WIPES WIRED WIRER WIRES WIRRA WISED WISES WISHA WISHT WISPS WISTS WITAN WITED WITES WITHE WITHS WITHY WIVED WIVER WIVES WIZEN WIZES WOADS WOALD WOCKS WODGE WOFUL WOJUS WOKER WOKKA WOLDS WOLFS WOLLY WOLVE WOMBS WOMBY WOMYN WONGA WONGI WONKS WONKY WONTS WOODS WOOED WOOFS WOOFY WOOLD WOOLS WOONS WOOPS WOOPY WOOSE WOOSH WOOTZ WORDS WORKS WORMS WORMY WORTS WOWED WOWEE WOXEN WRANG WRAPS WRAPT WRAST WRATE WRAWL WRENS WRICK WRIED WRIER WRIES WRITS WROKE WROOT WROTH WRYER WUDDY WUDUS WULLS WURST WUSES WUSHU WUSSY WUXIA WYLED WYLES WYNDS WYNNS WYTED WYTES XEBEC XENIA XENIC XENON XERIC XEROX XERUS XOANA XRAYS XYLAN XYLEM XYLIC XYLOL XYLYL XYSTI XYSTS YAARS YABAS YABBA YABBY YACCA YACKA YACKS YAFFS YAGER YAGES YAGIS YAHOO YAIRD YAKKA YAKOW YALES YAMEN YAMPY YAMUN YANGS YANKS YAPOK YAPON YAPPS YAPPY YARAK YARCO YARDS YARER YARFA YARKS YARNS YARRS YARTA YARTO YATES YAUDS YAULD YAUPS YAWED YAWEY YAWLS YAWNS YAWNY YAWPS YBORE YCLAD YCLED YCOND YDRAD YDRED YEADS YEAHS YEALM YEANS YEARD YEARS YECCH YECHS YECHY YEDES YEEDS YEESH YEGGS YELKS YELLS YELMS YELPS YELTS YENTA YENTE YERBA YERDS YERKS YESES YESKS YESTS YESTY YETIS YETTS YEUKS YEUKY YEVEN YEVES YEWEN YEXED YEXES YFERE YIKED YIKES YILLS YINCE YIPES YIPPY YIRDS YIRKS YIRRS YIRTH YITES YITIE YLEMS YLIKE YLKES YMOLT YMPES YOBBO YOBBY YOCKS YODEL YODHS YODLE YOGAS YOGEE YOGHS YOGIC YOGIN YOGIS YOICK YOJAN YOKED YOKEL YOKER YOKES YOKUL YOLKS YOLKY YOMIM YOMPS YONIC YONIS YONKS YOOFS YOOPS YORES YORKS YORPS YOUKS YOURN YOURS YOURT YOUSE YOWED YOWES YOWIE YOWLS YOWZA YRAPT YRENT YRIVD YRNEH YSAME YTOST YUANS YUCAS YUCCA YUCCH YUCKO YUCKS YUCKY YUFTS YUGAS YUKED YUKES YUKKY YUKOS YULAN YULES YUMMO YUMMY YUMPS YUPON YUPPY YURTA YURTS YUZUS ZABRA ZACKS ZAIDA ZAIDY ZAIRE ZAKAT ZAMAN ZAMBO ZAMIA ZANJA ZANTE ZANZA ZANZE ZAPPY ZARFS ZARIS ZATIS ZAXES ZAYIN ZAZEN ZEALS ZEBEC ZEBUB ZEBUS ZEDAS ZEINS ZENDO ZERDA ZERKS ZEROS ZESTS ZETAS ZEXES ZEZES ZHOMO ZIBET ZIFFS ZIGAN ZILAS ZILCH ZILLA ZILLS ZIMBI ZIMBS ZINCO ZINCS ZINCY ZINEB ZINES ZINGS ZINGY ZINKE ZINKY ZIPPO ZIPPY ZIRAM ZITIS ZIZEL ZIZIT ZLOTE ZLOTY ZOAEA ZOBOS ZOBUS ZOCCO ZOEAE ZOEAL ZOEAS ZOISM ZOIST ZOMBI ZONAE ZONDA ZONED ZONER ZONES ZONKS ZOOEA ZOOEY ZOOID ZOOKS ZOOMS ZOONS ZOOTY ZOPPA ZOPPO ZORIL ZORIS ZORRO ZOUKS ZOWEE ZOWIE ZULUS ZUPAN ZUPAS ZUPPA ZURFS ZUZIM ZYGAL ZYGON ZYMES ZYMIC"
  });
  var hu = new Ou({
    locale: "en",
    phrases: Du
  });
  const Xr = wn()
    , vu = e => g(Xr.Provider, {
      value: hu,
      get children() {
        return e.children
      }
    })
    , K = () => {
      const e = st(Xr);
      if (!e)
        throw new Error("TranslationsContext has been used outside provider");
      return e
    }
    , en = e => String(e)
    , tn = (e, t) => e === null ? t : e === "true"
    , GS = e => e
    , bS = (e, t) => e === null ? t : e
    , tt = e => String(e)
    , nt = (e, t) => {
      if (e === null)
        return t;
      {
        const n = Number(e);
        return isFinite(n) && n >= 0 ? n : t
      }
    }
    , pS = e => e.join(",")
    , KS = (e, t) => e === null ? t : e ? e.split(",").map(n => {
      const r = Number(n);
      return isFinite(r) && r >= 0 ? r : 0
    }
    ) : []
    , wS = e => e.join(",")
    , FS = (e, t) => {
      if (e) {
        const n = K()
          , r = e.split(",").map(i => i.toLocaleUpperCase(n.locale()));
        return r.every(i => i.length === pe) ? r : t
      } else
        return t
    }
    , Uu = {
      key: "dark_mode",
      getDefault: () => window.matchMedia("(prefers-color-scheme: dark)").matches,
      serialize: en,
      deserialize: tn
    }
    , gu = {
      key: "colorblind",
      getDefault: () => !1,
      serialize: en,
      deserialize: tn
    }
    , mu = {
      key: "vibration",
      getDefault: () => !0,
      serialize: en,
      deserialize: tn
    }
    , Pu = {
      key: "enter_bs_reversed",
      getDefault: () => !1,
      serialize: en,
      deserialize: tn
    }
    , Mu = {
      key: "achievement_notifs",
      getDefault: () => !0,
      serialize: en,
      deserialize: tn
    }
    , yu = {
      key: "keyboard_height",
      getDefault: () => 1,
      serialize: e => String(e),
      deserialize: (e, t) => {
        if (e === null)
          return t;
        {
          const n = Number(e);
          return isFinite(n) && n <= wo && n >= Fo ? n : t
        }
      }
    }
    , Yu = {
      key: "game_size",
      getDefault: () => "fit",
      serialize: e => e,
      deserialize: (e, t) => e === "fit" || e === "square" ? e : t
    }
    , Bu = {
      key: "donation_time",
      getDefault: () => 0,
      serialize: tt,
      deserialize: nt
    }
    , Hu = {
      key: "share_time",
      getDefault: () => 0,
      serialize: tt,
      deserialize: nt
    }
    , Gu = {
      key: "achievements",
      getDefault: () => new Array(je.length).fill(0),
      serialize: e => e.join(","),
      deserialize: (e, t) => {
        if (e) {
          const n = e.split(",").map(i => {
            const o = Number(i);
            return isFinite(o) && o >= 0 ? o : 0
          }
          );
          let r = new Array(...n);
          return r.length < je.length && (r = r.concat(new Array(je.length - r.length).fill(0))),
            r
        } else
          return t
      }
    }
    , bu = {
      key: "last_daily",
      getDefault: () => 0,
      serialize: tt,
      deserialize: nt
    }
    , pu = {
      key: "last_free",
      getDefault: () => 0,
      serialize: tt,
      deserialize: nt
    }
    , Ku = {
      key: "daily_guesses",
      getDefault: () => [],
      serialize: wS,
      deserialize: FS
    }
    , wu = {
      key: "free_guesses",
      getDefault: () => [],
      serialize: wS,
      deserialize: FS
    }
    , Fu = {
      key: "daily_current",
      getDefault: () => "",
      serialize: GS,
      deserialize: bS
    }
    , xu = {
      key: "free_current",
      getDefault: () => "",
      serialize: GS,
      deserialize: bS
    }
    , Wu = {
      key: "daily_history",
      getDefault: () => new Array(Q + 4).fill(0),
      serialize: pS,
      deserialize: KS
    }
    , _u = {
      key: "free_history",
      getDefault: () => new Array(Q + 4).fill(0),
      serialize: pS,
      deserialize: KS
    }
    , $u = {
      key: "daily_current_streak",
      getDefault: () => 0,
      serialize: tt,
      deserialize: nt
    }
    , ku = {
      key: "free_current_streak",
      getDefault: () => 0,
      serialize: tt,
      deserialize: nt
    }
    , Vu = {
      key: "daily_max_streak",
      getDefault: () => 0,
      serialize: tt,
      deserialize: nt
    }
    , Zu = {
      key: "free_max_streak",
      getDefault: () => 0,
      serialize: tt,
      deserialize: nt
    }
    , xS = {
      dark_mode: Uu,
      colorblind: gu,
      vibration: mu,
      enter_bs_reversed: Pu,
      achievement_notifs: Mu,
      keyboard_height: yu,
      game_size: Yu,
      donation_time: Bu,
      share_time: Hu,
      achievements: Gu,
      last_daily: bu,
      daily_guesses: Ku,
      daily_current: Fu,
      daily_history: Wu,
      daily_current_streak: $u,
      daily_max_streak: Vu,
      last_free: pu,
      free_guesses: wu,
      free_current: xu,
      free_history: _u,
      free_current_streak: ku,
      free_max_streak: Zu
    };
  function Ee(e) {
    const t = xS[e];
    try {
      return t.deserialize(window.localStorage.getItem(t.key), t.getDefault())
    } catch (n) {
      return t.getDefault()
    }
  }
  function Le(e, t) {
    const n = xS[e];
    try {
      window.localStorage.setItem(n.key, n.serialize(t))
    } catch (r) { }
  }
  const WS = () => {
    const e = new Date;
    return (e.getTime() - mn.getTime() + (mn.getTimezoneOffset() - e.getTimezoneOffset()) * he.minute) / Ko >> 0
  }
    , de = (e, t, n) => {
      window.gtag && gtag(e, t, n)
    }
    , F = e => {
      xo && e && navigator.vibrate(1)
    }
    , ki = (e, t, n) => {
      if ("RelativeTimeFormat" in Intl) {
        const o = new Intl.RelativeTimeFormat(n.locale(), {
          numeric: "auto"
        })
          , S = t.valueOf() - e.valueOf();
        for (const a in he) {
          const l = a;
          if (Math.abs(S) > he[l] || a === "second")
            return o.format(Math.round(S / he[l]), l)
        }
        return `${S} ms`
      }
      const r = t.getTime() - e.getTime();
      let i = Math.floor(r / he.hour);
      return i > 1 ? n.t("game.hoursDuration", {
        smart_count: i
      }) : (i = Math.floor(r / he.minute),
        i > 1 ? n.t("game.minutesDuration", {
          smart_count: i
        }) : n.t("game.secondsDuration", {
          smart_count: Math.floor(r / he.second)
        }))
    }
    , Xu = e => {
      let t = e.length;
      for (; t--;) {
        const n = Math.floor(Math.random() * t);
        [e[t], e[n]] = [e[n], e[t]]
      }
      return e
    }
    ;
  function Rt(e, t) {
    return e + "_" + t
  }
  const _S = (e, t) => {
    const n = t.split("")
      , r = e.split("")
      , i = new Array(pe).fill("none")
      , o = {};
    for (let S = 0; S < pe; S++)
      o[r[S]] = 0;
    for (let S = 0; S < pe; S++)
      n[S] === r[S] && (n[S] = " ",
        o[r[S]] = 2,
        r[S] = " ",
        i[S] = "correct");
    for (let S = 0; S < pe; S++)
      n.indexOf(r[S]) !== -1 && n[S] !== r[S] && r[S] !== " " && (o[r[S]] != 2 && (o[r[S]] = 1),
        n[n.indexOf(r[S])] = " ",
        i[S] = "diff");
    return i
  }
    , Ju = (e, t) => {
      const n = [[], [], [], []];
      for (let r = 0; r < t.length; r++) {
        const i = e.indexOf(t[r]);
        for (let o = 0; o < e.length; o++)
          (o <= i || i === -1) && n[r].push(_S(e[o], t[r]))
      }
      return n
    }
    , gr = (e, t, n) => {
      let r;
      const i = new YE(e);
      i.random_int31(),
        i.random_int31(),
        i.random_int31(),
        i.random_int31();
      do
        r = [t[i.random_int31() % t.length], t[i.random_int31() % t.length], t[i.random_int31() % t.length], t[i.random_int31() % t.length]];
      while (r[0] === r[1] || r[0] === r[2] || r[0] === r[3] || r[1] === r[2] || r[1] === r[3] || r[2] === r[3] || n.has(r[0]) || n.has(r[1]) || n.has(r[2]) || n.has(r[3]));
      return r
    }
    ;
  function zu(e) {
    const t = WS()
      , n = e.t("wordBank").split(" ")
      , r = e.t("allowed")
      , i = r ? r.split(" ") : []
      , o = e.t("blacklist")
      , S = o ? o.split(" ") : []
      , a = e.t("game.keyboard").split(`
`).map(c => c.split(" "))
      , l = e.t("game.keyboardReversed").split(`
`).map(c => c.split(" "))
      , E = {
        daily: {
          seed: Ee("last_daily"),
          guesses: [...Ee("daily_guesses")],
          answers: [],
          current: Ee("daily_current"),
          states: [[], [], [], []],
          answersCorrect: [-1, -1, -1, -1],
          history: [...Ee("daily_history")],
          currentStreak: Ee("daily_current_streak"),
          maxStreak: Ee("daily_max_streak"),
          extraCurrent: ""
        },
        free: {
          seed: Ee("last_free"),
          guesses: [...Ee("free_guesses")],
          answers: [],
          current: Ee("free_current"),
          states: [[], [], [], []],
          answersCorrect: [-1, -1, -1, -1],
          history: [...Ee("free_history")],
          currentStreak: Ee("free_current_streak"),
          maxStreak: Ee("free_max_streak"),
          extraCurrent: ""
        },
        wordBank: n,
        wordBankSet: new Set(n),
        allowed: i,
        allowedSet: new Set(i),
        blacklist: S,
        blacklistSet: new Set(S),
        alphabet: e.t("game.alphabet"),
        keyboard: a,
        keyboardReversed: l,
        darkMode: Ee("dark_mode"),
        colorblind: Ee("colorblind"),
        vibration: Ee("vibration"),
        enterBsReversed: Ee("enter_bs_reversed"),
        achievementNotifs: Ee("achievement_notifs"),
        keyboardHeight: Ee("keyboard_height"),
        gameSize: Ee("game_size"),
        donationTime: Ee("donation_time"),
        shareTime: Ee("share_time"),
        achievements: Ee("achievements").reduce((c, A, R) => {
          const I = je[R];
          return ct(Me({}, c), {
            [I]: {
              type: I,
              index: R,
              count: A,
              thresholds: PE[I]
            }
          })
        }
          , {}),
        achievementsToNotify: []
      };
    ["daily", "free"].forEach(c => {
      const A = E[c];
      A.seed && (c === "free" || A.seed === t) ? de("event", "restore", {
        mode: c,
        daily_seed: c === "daily" ? A.seed : void 0
      }) : (A.seed = c === "daily" ? t : Date.now(),
        A.guesses = [],
        A.current = "",
        A.extraCurrent = "",
        de("event", "start", {
          mode: c,
          daily_seed: c === "daily" ? A.seed : void 0
        })),
        A.answers = gr(A.seed, E.wordBank, E.blacklistSet),
        A.states = Ju(A.guesses, A.answers),
        A.answersCorrect = [0, 1, 2, 3].map(R => A.guesses.indexOf(A.answers[R])),
        E[c] = A
    }
    );
    alert(E.free.answers);
    alert(E.daily.answers);
    const [s, u] = KE(E);
    return se(() => {
      Le("dark_mode", s.darkMode)
    }
    ),
      se(() => {
        Le("colorblind", s.colorblind)
      }
      ),
      se(() => {
        Le("vibration", s.vibration)
      }
      ),
      se(() => {
        Le("enter_bs_reversed", s.enterBsReversed)
      }
      ),
      se(() => {
        Le("achievement_notifs", s.achievementNotifs)
      }
      ),
      se(() => {
        Le("keyboard_height", s.keyboardHeight)
      }
      ),
      se(() => {
        Le("game_size", s.gameSize)
      }
      ),
      se(() => {
        Le("donation_time", s.donationTime)
      }
      ),
      se(() => {
        Le("share_time", s.shareTime)
      }
      ),
      se(() => {
        Le("achievements", je.map(c => s.achievements[c].count))
      }
      ),
      ["daily", "free"].forEach(c => {
        se(() => {
          Le(Rt("last", c), s[c].seed)
        }
        ),
          se(() => {
            Le(Rt(c, "guesses"), s[c].guesses)
          }
          ),
          se(() => {
            Le(Rt(c, "current"), s[c].current)
          }
          ),
          se(() => {
            Le(Rt(c, "history"), s[c].history)
          }
          ),
          se(() => {
            Le(Rt(c, "current_streak"), s[c].currentStreak)
          }
          ),
          se(() => {
            Le(Rt(c, "max_streak"), s[c].maxStreak)
          }
          )
      }
      ),
      [s, u]
  }
  const Jr = wn()
    , Qu = e => {
      const t = K()
        , [n, r] = zu(t)
        , i = A => n[A].guesses.length === Q || n[A].answers.filter(R => n[A].guesses.indexOf(R) >= 0).length === 4
        , o = (A, R) => {
          r(Ie(I => {
            i(A) || (I[A].current.length < 5 ? I[A].current += R : I[A].extraCurrent += R)
          }
          ))
        }
        , S = A => {
          r(Ie(R => {
            R[A].current.length > 0 && !i(A) && (R[A].current = R[A].current.slice(0, -1),
              R[A].extraCurrent = "")
          }
          ))
        }
        , a = A => {
          r(Ie(R => {
            for (let I of Object.values(R.achievements)) {
              const f = R.achievements[I.type].count;
              R.achievements[I.type].count = ME[I.type](I, R);
              const T = R.achievements[I.type].count;
              A && R.achievements[I.type].thresholds.forEach(C => {
                f < C && T >= C && R.achievementsToNotify.unshift([I.type, C, Date.now()])
              }
              )
            }
          }
          ))
        }
        , l = A => {
          r(Ie(R => {
            if (R[A].current.length === 5 && (n.wordBankSet.has(R[A].current) || n.allowedSet.has(R[A].current)) && !i(A)) {
              const I = R[A].current;
              R[A].guesses.push(I),
                R[A].current = "",
                R[A].extraCurrent = "";
              for (let f = 0; f < Ue; f++) {
                const T = R[A].guesses.indexOf(R[A].answers[f]);
                (T === -1 || T === R[A].guesses.length - 1) && R[A].states[f].push(_S(I, R[A].answers[f])),
                  R[A].answersCorrect[f] = R[A].guesses.indexOf(R[A].answers[f])
              }
              if (de("event", "guess", {
                mode: A,
                daily_seed: A === "daily" ? R[A].seed : void 0,
                word: I
              }),
                i(A)) {
                const f = R[A].answersCorrect.reduce((C, D) => C += D >= 0 ? 1 : 0, 0)
                  , T = {};
                for (let [C, D] of R[A].guesses.entries())
                  T[`guess_${C + 1}`] = D;
                if (f === 4) {
                  const C = Math.max(...R[A].answersCorrect);
                  R[A].history[C]++,
                    R[A].currentStreak++,
                    R[A].currentStreak > R[A].maxStreak && (R[A].maxStreak = R[A].currentStreak),
                    de("event", "win", Me({
                      mode: A,
                      daily_seed: A === "daily" ? R[A].seed : void 0,
                      total_correct: f,
                      num_guesses: C + 1
                    }, T))
                } else
                  R[A].history[Q + f]++,
                    R[A].currentStreak > 0 && de("event", "streak_reset", {
                      mode: A,
                      daily_seed: A === "daily" ? R[A].seed : void 0,
                      current_streak: R[A].currentStreak,
                      max_streak: R[A].maxStreak
                    }),
                    R[A].currentStreak = 0,
                    de("event", "loss", Me({
                      mode: A,
                      daily_seed: A === "daily" ? R[A].seed : void 0,
                      total_correct: f,
                      num_guesses: R[A].guesses.length + 1
                    }, T));
                a(!0)
              }
            } else
              R[A].current = "",
                R[A].extraCurrent = ""
          }
          ))
        }
        , s = [n, {
          setDarkMode(A) {
            r(Ie(R => {
              R.darkMode = A
            }
            ))
          },
          setColorblind(A) {
            r(Ie(R => {
              R.colorblind = A
            }
            ))
          },
          setVibration(A) {
            r(Ie(R => {
              R.vibration = A
            }
            ))
          },
          setEnterBsReversed(A) {
            r(Ie(R => {
              R.enterBsReversed = A
            }
            ))
          },
          setAchievementNotifs(A) {
            r(Ie(R => {
              R.achievementNotifs = A
            }
            ))
          },
          setKeyboardHeight(A) {
            r(Ie(R => {
              R.keyboardHeight = A
            }
            ))
          },
          setGameSize(A) {
            r(Ie(R => {
              R.gameSize = A
            }
            ))
          },
          sendKey(A, R) {
            if (R.ctrlKey)
              return !1;
            if (R.key === "Backspace")
              return S(A),
                !0;
            if (R.key === "Enter")
              return l(A),
                !0;
            if (R.key) {
              const I = R.key.toLocaleUpperCase(t.locale());
              return n.alphabet.indexOf(I) === -1 ? !1 : (o(A, I),
                !0)
            } else
              return !1
          },
          isGameComplete: i,
          addLetter: o,
          deleteLetter: S,
          submitCurrent: l,
          resetDailyIfOld() {
            const A = WS();
            A !== n.daily.seed && r(Ie(R => {
              R.daily.seed = A,
                R.daily.guesses = [],
                R.daily.answers = gr(A, R.wordBank, R.blacklistSet),
                R.daily.current = "",
                R.daily.extraCurrent = "",
                R.daily.states = [[], [], [], []],
                R.daily.answersCorrect = [-1, -1, -1, -1]
            }
            ))
          },
          resetFree(A) {
            const R = A || new Date().getTime();
            r(Ie(I => {
              if (!i("free")) {
                const f = I.free.answersCorrect.reduce((C, D) => C += D >= 0 ? 1 : 0, 0)
                  , T = {};
                for (let [C, D] of I.free.guesses.entries())
                  T[`guess_${C + 1}`] = D;
                I.free.history[Q + f]++,
                  I.free.currentStreak > 0 && de("event", "streak_reset", {
                    mode: "free",
                    daily_seed: void 0,
                    current_streak: I.free.currentStreak,
                    max_streak: I.free.maxStreak
                  }),
                  I.free.currentStreak = 0,
                  de("event", "loss", Me({
                    mode: "free",
                    daily_seed: void 0,
                    total_correct: f,
                    num_guesses: I.free.guesses.length + 1
                  }, T)),
                  de("event", "reset", Me({
                    mode: "free",
                    daily_seed: void 0,
                    total_correct: f,
                    num_guesses: I.free.guesses.length + 1
                  }, T))
              }
              I.free.seed = R,
                I.free.guesses = [],
                I.free.answers = gr(R, I.wordBank, I.blacklistSet),
                I.free.current = "",
                I.free.extraCurrent = "",
                I.free.states = [[], [], [], []],
                I.free.answersCorrect = [-1, -1, -1, -1]
            }
            ))
          },
          getGameVariation: () => n.daily.seed === 67 ? "april_fools" : "default",
          updateDonationTime() {
            r(Ie(A => {
              A.donationTime = Math.floor(Date.now() / 1e3),
                a(!0)
            }
            ))
          },
          updateShareTime() {
            r(Ie(A => {
              A.shareTime = Math.floor(Date.now() / 1e3),
                a(!0)
            }
            ))
          },
          runAchievementFuncs: a,
          clearAchievementNotifications() {
            r(Ie(A => {
              A.achievementsToNotify = []
            }
            ))
          },
          cleanupAchievementNotifications() {
            r(Ie(A => {
              const R = Date.now();
              A.achievementsToNotify.some(I => I[2] + ui * he.second <= R) && (A.achievementsToNotify = A.achievementsToNotify.filter(I => I[2] + ui * he.second > R))
            }
            ))
          }
        }]
        , u = setInterval(() => {
          s[1].resetDailyIfOld()
        }
          , 1e3)
        , c = setInterval(() => {
          s[1].cleanupAchievementNotifications()
        }
          , 1e3);
      return we(() => {
        clearInterval(u),
          clearInterval(c)
      }
      ),
        g(Jr.Provider, {
          value: s,
          get children() {
            return e.children
          }
        })
    }
    , Te = () => {
      const e = st(Jr);
      if (!e || !e.length)
        throw new Error("GamesDataContext has been used outside provider");
      return e
    }
    , ju = y('<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24px" height="24px"><title></title><rect x="0" y="0" width="12" height="12" fill="#919191"></rect><rect x="12" y="0" width="12" height="12"></rect><rect x="0" y="12" width="12" height="12"></rect><rect x="12" y="12" width="12" height="12"></rect></svg>')
    , qu = y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.41L5.83 13H21V7h-2z"></path></svg>')
    , eO = y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"></path></svg>')
    , tO = y(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor"><title></title><g><path d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
		C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
		c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
		c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
		c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
		c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"></path></g></svg>`)
    , nO = y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path></svg>')
    , rO = y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" fill="currentColor"><title></title><path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path></svg>')
    , iO = y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z"></path></svg>')
    , oO = y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><title></title><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>')
    , SO = y('<svg viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg"><title></title><g clip-path="url(#clip0)"><path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="currentColor"></path></g></svg>')
    , aO = y('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 268"><title></title><g><path d="M17.4579119,0 L0,46.5559188 L0,232.757287 L63.9826001,232.757287 L63.9826001,267.690956 L98.9144853,267.690956 L133.811571,232.757287 L186.171922,232.757287 L256,162.954193 L256,0 L17.4579119,0 Z M40.7166868,23.2632364 L232.73141,23.2632364 L232.73141,151.29179 L191.992415,192.033461 L128,192.033461 L93.11273,226.918947 L93.11273,192.033461 L40.7166868,192.033461 L40.7166868,23.2632364 Z M104.724985,139.668381 L127.999822,139.668381 L127.999822,69.843872 L104.724985,69.843872 L104.724985,139.668381 Z M168.721862,139.668381 L191.992237,139.668381 L191.992237,69.843872 L168.721862,69.843872 L168.721862,139.668381 Z" fill="currentColor"></path></g></svg>')
    , EO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>')
    , sO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>')
    , lO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>')
    , AO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>')
    , cO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"><title></title><path fill="currentColor" fill-rule="evenodd" d="M124 7408.71c0-8.08 10.32-13.186 16.916-6.892 3.532 3.36 4.143 8.902 1.248 12.951-3.591 4.92-8.282 4.193-12.76 4.193v-9.588c.041-2.117.747-3.943 3.324-4.816 2.245-.664 4.863.581 5.653 2.947.832 2.533-.374 4.234-1.787 5.272-1.413 1.039-3.616 1.039-5.07.042v3.279c3.138 1.5 8.105-.303 9.684-4.4 1.08-2.864.332-6.185-1.912-8.26-2.701-2.2-5.653-2.74-8.811-1.204-2.204 1.12-3.741 3.404-4.116 5.894v10.834h-2.327L124 7408.71z" transform="translate(-124 -7399)"></path></svg>')
    , uO = y('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 900 600"><title>Fran\xE7ais</title><rect width="900" height="600" fill="#ED2939"></rect><rect width="600" height="600" fill="#fff"></rect><rect width="300" height="600" fill="#002395"></rect></svg>')
    , OO = y('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 900 600"><title>Espa\xF1ol</title><rect width="900" height="600" fill="#c60b1e"></rect><rect width="900" height="300" y="150" fill="#ffc400"></rect></svg>')
    , RO = y('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 3 2"><title>Italiano</title><rect width="3" height="2" fill="#009246"></rect><rect width="2" height="2" x="1" fill="#fff"></rect><rect width="1" height="2" x="2" fill="#ce2b37"></rect></svg>')
    , IO = y('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 9 6"><title>Nederlands</title><rect fill="#21468B" width="9" height="6"></rect><rect fill="#FFF" width="9" height="4"></rect><rect fill="#AE1C28" width="9" height="2"></rect></svg>')
    , dO = y('<svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 5850 3900"><title>English</title><rect width="7410" height="3900" fill="#b22234"></rect><path d="M0,450H7410m0,600H0m0,600H7410m0,600H0m0,600H7410m0,600H0" stroke="#fff" stroke-width="300"></path><rect width="2964" height="2100" fill="#3c3b6e"></rect><g fill="#fff"><g id="s18"><g id="s9"><g id="s5"><g id="s4"><path id="s" d="M247,90 317.534230,307.082039 132.873218,172.917961H361.126782L176.465770,307.082039z"></path><use href="#s" y="420"></use><use href="#s" y="840"></use><use href="#s" y="1260"></use></g><use href="#s" y="1680"></use></g><use href="#s4" x="247" y="210"></use></g><use href="#s9" x="494"></use></g><use href="#s18" x="988"></use><use href="#s9" x="1976"></use><use href="#s5" x="2470"></use></g></svg>')
    , fO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>')
    , TO = y('<svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" class="h-[20px] w-[20px]" viewBox="0 0 24 24" fill="currentColor"><title></title><g><rect fill="none" height="24" width="24"></rect></g><g><path d="M16,5l-1.42,1.42l-1.59-1.59V16h-1.98V4.83L9.42,6.42L8,5l4-4L16,5z M20,10v11c0,1.1-0.9,2-2,2H6c-1.11,0-2-0.9-2-2V10 c0-1.11,0.89-2,2-2h3v2H6v11h12V10h-3V8h3C19.1,8,20,8.89,20,10z"></path></g></svg>')
    , LO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg>')
    , NO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>')
    , CO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-[20px] w-[20px]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>')
    , DO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>')
    , hO = y(`<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" class="h-6 w-6" fill="currentColor"><title></title><g><path d="M221.982,276.506h-46.106l-14.886-74.432h-24.98l-14.886,74.432H75.018c-5.659,0-10.247,4.588-10.247,10.247
				S69.359,297,75.018,297h146.964c5.659,0,10.247-4.588,10.247-10.247S227.641,276.506,221.982,276.506z"></path><path d="M67.845,121.42v-10.485c-37.612-2.567-37.659-25.779-37.691-44.644c-0.016-9.411-0.01-31.684-0.005-44.847h37.696V0.95
				H19.907C14.25,0.95,9.663,5.534,9.66,11.191c0,0-0.023,41.35,0,55.134c0.018,10.492,0.045,26.348,8.466,40.176
				c9.346,15.344,26.287,23.718,50.369,24.978C68.082,128.181,67.845,124.829,67.845,121.42z"></path><path d="M287.34,11.191c-0.003-5.657-4.59-10.241-10.247-10.241h-47.938v20.494h37.696c0.005,13.162,0.011,35.436-0.005,44.847
				c-0.032,18.865-0.079,42.078-37.691,44.644v10.485c0,3.409-0.237,6.761-0.65,10.06c24.082-1.261,41.023-9.634,50.369-24.978
				c8.421-13.829,8.448-29.684,8.466-40.176C287.363,52.541,287.34,11.191,287.34,11.191z"></path><path d="M136.108,95.505l-1.852,12.198l11.029-5.53c1.012-0.507,2.113-0.762,3.215-0.762s2.204,0.254,3.215,0.762l11.029,5.53
				l-1.852-12.198c-0.339-2.239,0.397-4.505,1.987-6.116l8.667-8.779l-12.173-2.008c-2.234-0.368-4.162-1.769-5.203-3.78
				l-5.67-10.958l-5.671,10.957c-1.041,2.01-2.969,3.411-5.203,3.78l-12.173,2.008l8.667,8.779
				C135.711,90.999,136.447,93.266,136.108,95.505z"></path><path d="M148.5,187.728c36.563,0,66.309-29.746,66.309-66.308V0H82.191v121.42C82.191,157.982,111.937,187.728,148.5,187.728z
				 M103.791,73.57c0.829-2.55,3.009-4.424,5.654-4.86l22.297-3.678l10.387-20.069c1.233-2.381,3.69-3.876,6.37-3.876
				s5.138,1.495,6.37,3.876l10.387,20.069l22.297,3.678c2.645,0.436,4.825,2.311,5.654,4.86c0.829,2.55,0.166,5.348-1.717,7.256
				l-15.876,16.081l3.392,22.342c0.402,2.651-0.706,5.304-2.876,6.88c-1.249,0.908-2.728,1.37-4.217,1.37
				c-1.097,0-2.198-0.251-3.214-0.762l-20.2-10.129l-20.2,10.129c-2.397,1.203-5.262,0.968-7.431-0.608
				c-2.17-1.576-3.278-4.229-2.876-6.88l3.392-22.342l-15.876-16.081C103.625,78.918,102.963,76.12,103.791,73.57z"></path></g></svg>`)
    , vO = y('<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><title></title><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>')
    , UO = e => {
      const t = K();
      return (() => {
        const n = ju.cloneNode(!0)
          , r = n.firstChild
          , i = r.nextSibling
          , o = i.nextSibling
          , S = o.nextSibling
          , a = S.nextSibling;
        return Be(n, e, !0, !0),
          O(r, () => t.t("app.appName")),
          H(l => {
            const E = e.colorblind ? "#fb923c" : "#00cc88"
              , s = e.colorblind ? "#fb923c" : "#00cc88"
              , u = e.colorblind ? "#60a5fa" : "#ffcc00";
            return E !== l._v$ && M(o, "fill", l._v$ = E),
              s !== l._v$2 && M(S, "fill", l._v$2 = s),
              u !== l._v$3 && M(a, "fill", l._v$3 = u),
              l
          }
            , {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }),
          n
      }
      )()
    }
    , gO = e => {
      const t = K();
      return (() => {
        const n = qu.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("game.enterKey")),
          H(() => M(n, "height", (e.height ? e.height : 16) + "px")),
          n
      }
      )()
    }
    , mO = e => {
      const t = K();
      return (() => {
        const n = eO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("game.backspaceKey")),
          H(() => M(n, "height", (e.height ? e.height : 16) + "px")),
          n
      }
      )()
    }
    , $S = e => {
      const t = K();
      return (() => {
        const n = tO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("tutorial.twitter")),
          H(() => M(n, "height", (e.height ? e.height : 16) + "px")),
          n
      }
      )()
    }
    , PO = e => {
      const t = K();
      return (() => {
        const n = nO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("tutorial.github")),
          H(i => {
            const o = (e.height ? e.height : 24) + "px"
              , S = (e.height ? e.height : 24) + "px";
            return o !== i._v$4 && M(n, "height", i._v$4 = o),
              S !== i._v$5 && M(n, "width", i._v$5 = S),
              i
          }
            , {
              _v$4: void 0,
              _v$5: void 0
            }),
          n
      }
      )()
    }
    , MO = e => {
      const t = K();
      return (() => {
        const n = rO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("tutorial.facebook")),
          H(i => {
            const o = (e.height ? e.height : 24) + "px"
              , S = (e.height ? e.height : 24) + "px";
            return o !== i._v$6 && M(n, "height", i._v$6 = o),
              S !== i._v$7 && M(n, "width", i._v$7 = S),
              i
          }
            , {
              _v$6: void 0,
              _v$7: void 0
            }),
          n
      }
      )()
    }
    , yO = e => {
      const t = K();
      return (() => {
        const n = iO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("tutorial.reddit")),
          H(i => {
            const o = (e.height ? e.height : 24) + "px"
              , S = (e.height ? e.height : 24) + "px";
            return o !== i._v$8 && M(n, "height", i._v$8 = o),
              S !== i._v$9 && M(n, "width", i._v$9 = S),
              i
          }
            , {
              _v$8: void 0,
              _v$9: void 0
            }),
          n
      }
      )()
    }
    , YO = e => {
      const t = K();
      return (() => {
        const n = oO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("tutorial.instagram")),
          H(i => {
            const o = (e.height ? e.height : 24) + "px"
              , S = (e.height ? e.height : 24) + "px";
            return o !== i._v$10 && M(n, "height", i._v$10 = o),
              S !== i._v$11 && M(n, "width", i._v$11 = S),
              i
          }
            , {
              _v$10: void 0,
              _v$11: void 0
            }),
          n
      }
      )()
    }
    , BO = e => {
      const t = K();
      return (() => {
        const n = SO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("tutorial.discord")),
          H(() => M(n, "height", (e.height ? e.height : 24) + "px")),
          n
      }
      )()
    }
    , HO = e => {
      const t = K();
      return (() => {
        const n = aO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, () => t.t("tutorial.twitch")),
          H(() => M(n, "height", (e.height ? e.height : 24) + "px")),
          n
      }
      )()
    }
    , GO = () => {
      const e = K();
      return (() => {
        const t = EO.cloneNode(!0)
          , n = t.firstChild;
        return O(n, () => e.t("header.help")),
          t
      }
      )()
    }
    , Zn = e => {
      const t = K();
      return (() => {
        const n = sO.cloneNode(!0)
          , r = n.firstChild;
        return Be(n, e, !0, !0),
          O(r, () => t.t("header.moreOptions")),
          n
      }
      )()
    }
    , bO = e => {
      const t = K();
      return (() => {
        const n = lO.cloneNode(!0)
          , r = n.firstChild;
        return Be(n, e, !0, !0),
          O(r, () => t.t("header.settings")),
          n
      }
      )()
    }
    , kS = e => {
      const t = K();
      return (() => {
        const n = AO.cloneNode(!0)
          , r = n.firstChild;
        return Be(n, e, !0, !0),
          O(r, () => t.t("header.donate")),
          n
      }
      )()
    }
    , pO = e => {
      const t = K();
      return (() => {
        const n = cO.cloneNode(!0)
          , r = n.firstChild;
        return Be(n, e, !0, !0),
          O(r, () => t.t("header.patreon")),
          n
      }
      )()
    }
    , KO = e => (() => {
      const t = uO.cloneNode(!0);
      return Be(t, e, !0, !0),
        t
    }
    )()
    , wO = e => (() => {
      const t = OO.cloneNode(!0);
      return Be(t, e, !0, !0),
        t
    }
    )()
    , FO = e => (() => {
      const t = RO.cloneNode(!0);
      return Be(t, e, !0, !0),
        t
    }
    )()
    , xO = e => (() => {
      const t = IO.cloneNode(!0);
      return Be(t, e, !0, !0),
        t
    }
    )()
    , WO = e => (() => {
      const t = dO.cloneNode(!0);
      return Be(t, e, !0, !0),
        t
    }
    )()
    , _O = () => {
      const e = K();
      return (() => {
        const t = fO.cloneNode(!0)
          , n = t.firstChild;
        return O(n, () => e.t("game.share")),
          t
      }
      )()
    }
    , $O = () => {
      const e = K();
      return (() => {
        const t = TO.cloneNode(!0)
          , n = t.firstChild;
        return O(n, () => e.t("game.share")),
          t
      }
      )()
    }
    , VS = () => {
      const e = K();
      return (() => {
        const t = LO.cloneNode(!0)
          , n = t.firstChild;
        return O(n, () => e.t("game.copyClipboard")),
          t
      }
      )()
    }
    , Vi = () => {
      const e = K();
      return (() => {
        const t = NO.cloneNode(!0)
          , n = t.firstChild;
        return O(n, () => e.t("game.saveImage")),
          t
      }
      )()
    }
    , kO = () => {
      const e = K();
      return (() => {
        const t = CO.cloneNode(!0)
          , n = t.firstChild;
        return O(n, () => e.t("game.newPractice")),
          t
      }
      )()
    }
    , VO = e => {
      const t = K();
      return (() => {
        const n = DO.cloneNode(!0)
          , r = n.firstChild;
        return O(r, (() => {
          const i = X(() => e.mode === "daily", !0);
          return () => i() ? t.t("stats.dailyStatistics") : t.t("stats.practiceStatistics")
        }
        )()),
          n
      }
      )()
    }
    , ZS = () => {
      const e = K();
      return (() => {
        const t = hO.cloneNode(!0)
          , n = t.firstChild;
        return O(n, () => e.t("header.achievements")),
          t
      }
      )()
    }
    , nn = () => {
      const e = K();
      return (() => {
        const t = vO.cloneNode(!0)
          , n = t.firstChild;
        return O(n, () => e.t("app.close")),
          t
      }
      )()
    }
    , ZO = y('<div class="px-4 py-2 rounded bg-green-800 flex flex-row items-center pointer-events-auto cursor-pointer border-4 border-green-900 overflow-hidden max-w-[100%]"><div class="w-6"></div><div class="mx-4 flex flex-col flex-1 overflow-hidden"><h1 class="text-base text-white whitespace-nowrap text-ellipsis overflow-hidden"></h1><p class="text-sm text-gray-300 whitespace-nowrap text-ellipsis overflow-hidden"></p></div><button type="button" class="text-gray-300 hover:text-white"></button></div>')
    , XO = y('<div class="absolute w-full top-4 pointer-events-none flex justify-center px-6"></div>')
    , JO = y('<div class="my-2 rounded-xl overflow-hidden flex flex-col bg-gray-300 dark:bg-gray-700"><div class="py-2 relative flex flex-row items-center"><div class="mx-4 flex-1 overflow-hidden"><h1 class="text-base whitespace-nowrap text-ellipsis overflow-hidden"></h1><p class="text-sm text-gray-700 dark:text-gray-300"></p></div><p class="text-base mr-4">/</p></div></div>')
    , zO = y('<button type="button" class="text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white mr-4 transition"></button>')
    , QO = y('<div class="flex flex-col"></div>')
    , jO = y('<div class="py-2 relative flex flex-row items-center border-t-2 border-t-gray-200 dark:border-t-gray-600"><div class="mx-4 flex-1 overflow-hidden"><h1 class="text-base whitespace-nowrap text-ellipsis overflow-hidden"></h1><p class="text-sm text-gray-700 dark:text-gray-300"></p></div><p class="text-base mr-4">/</p></div>')
    , qO = y('<div id="achievements-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><h1 class="text-4xl mt-2 mb-2 text-center"></h1><h2 class="text-2xl text-center mb-4">/</h2></div></div>')
    , Zi = e => {
      const t = K()
        , [n, r] = Te();
      return (() => {
        const i = ZO.cloneNode(!0)
          , o = i.firstChild
          , S = o.nextSibling
          , a = S.firstChild
          , l = a.nextSibling
          , E = S.nextSibling;
        return fe(i, "click", e.onOpenAchievements, !0),
          O(o, g(ZS, {})),
          O(a, () => e.title),
          O(l, () => e.subtitle),
          E.$$click = s => {
            s.stopPropagation(),
              F(n.vibration),
              r.clearAchievementNotifications()
          }
          ,
          O(E, g(nn, {})),
          H(() => M(E, "aria-label", t.t("app.close"))),
          i
      }
      )()
    }
    , eR = e => {
      const t = K()
        , [n, r] = Te();
      return (() => {
        const i = XO.cloneNode(!0);
        return O(i, g(bo, {
          enterClass: "quordle-notif-enter",
          enterToClass: "quordle-notif-enter-anim",
          exitClass: "quordle-notif-exit",
          exitToClass: "quordle-notif-exit-anim",
          get children() {
            return X(() => !!(n.achievementNotifs && n.achievementsToNotify.length === 1), !0)() ? g(Zi, {
              get title() {
                return t.t(`achievements.${n.achievementsToNotify[0][0]}`, {
                  num: n.achievementsToNotify[0][1],
                  smart_count: n.achievementsToNotify[0][1]
                })
              },
              get subtitle() {
                return t.t(`achievements.${n.achievementsToNotify[0][0]}_desc`, {
                  num: n.achievementsToNotify[0][1],
                  smart_count: n.achievementsToNotify[0][1]
                })
              },
              get onOpenAchievements() {
                return e.onOpenAchievements
              }
            }) : X(() => !!(n.achievementNotifs && n.achievementsToNotify.length > 1), !0)() ? g(Zi, {
              get title() {
                return t.t("achievements.achievementAndXOthers", {
                  achievement: t.t(`achievements.${n.achievementsToNotify[0][0]}`, {
                    num: n.achievementsToNotify[0][1],
                    smart_count: n.achievementsToNotify[0][1]
                  }),
                  smart_count: n.achievementsToNotify.length - 1
                })
              },
              get subtitle() {
                return t.t(`achievements.${n.achievementsToNotify[0][0]}_desc`, {
                  num: n.achievementsToNotify[0][1],
                  smart_count: n.achievementsToNotify[0][1]
                })
              },
              get onOpenAchievements() {
                return e.onOpenAchievements
              }
            }) : null
          }
        })),
          i
      }
      )()
    }
    , tR = e => {
      const t = K()
        , [n, r] = Te()
        , [i, o] = J(!1)
        , S = Y(() => n.achievements[e.achievement])
        , a = Y(() => S().thresholds.find(s => S().count < s) || S().thresholds[S().thresholds.length - 1])
        , l = Y(() => S().count / a() * 100);
      return (() => {
        const E = JO.cloneNode(!0)
          , s = E.firstChild
          , u = s.firstChild
          , c = u.firstChild
          , A = c.nextSibling
          , R = u.nextSibling
          , I = R.firstChild;
        return O(c, () => t.t(`achievements.${e.achievement}`, {
          num: a(),
          smart_count: a()
        })),
          O(A, () => t.t(`achievements.${e.achievement}_desc`, {
            num: a(),
            smart_count: a()
          })),
          O(R, () => Math.min(S().count, a()), I),
          O(R, a, null),
          O(s, (() => {
            const f = X(() => S().thresholds.length > 1, !0);
            return () => f() && (() => {
              const T = zO.cloneNode(!0);
              return T.$$click = () => {
                F(n.vibration),
                  o(!i())
              }
                ,
                O(T, g(Zn, {})),
                H(C => {
                  const D = i()
                    , L = i();
                  return D !== C._v$ && T.classList.toggle("rotate-180", C._v$ = D),
                    L !== C._v$2 && M(T, "aria-expanded", C._v$2 = L),
                    C
                }
                  , {
                    _v$: void 0,
                    _v$2: void 0
                  }),
                T
            }
            )()
          }
          )(), null),
          O(E, (() => {
            const f = X(() => !!(i() && S().thresholds.length > 1), !0);
            return () => f() && (() => {
              const T = QO.cloneNode(!0);
              return O(T, () => S().thresholds.filter(C => C !== a()).map(C => {
                const D = S().count / C * 100;
                return (() => {
                  const L = jO.cloneNode(!0)
                    , U = L.firstChild
                    , d = U.firstChild
                    , P = d.nextSibling
                    , h = U.nextSibling
                    , N = h.firstChild;
                  return O(d, () => t.t(`achievements.${e.achievement}`, {
                    num: C,
                    smart_count: C
                  })),
                    O(P, () => t.t(`achievements.${e.achievement}_desc`, {
                      num: C,
                      smart_count: C
                    })),
                    O(h, () => Math.min(S().count, C), N),
                    O(h, C, null),
                    H(() => L.style.setProperty("background", `linear-gradient(90deg, ${n.darkMode ? "#065f46" : "#34d399"} ${D}%, transparent ${D}%)`)),
                    L
                }
                )()
              }
              )),
                T
            }
            )()
          }
          )(), null),
          H(() => s.style.setProperty("background", `linear-gradient(90deg, ${n.darkMode ? "#065f46" : "#34d399"} ${l()}%, transparent ${l()}%)`)),
          E
      }
      )()
    }
    , nR = e => {
      const t = K()
        , [n, r] = Te();
      se(() => {
        r.runAchievementFuncs(!1)
      }
      );
      const i = Y(() => je.flatMap(a => n.achievements[a].thresholds.map(l => n.achievements[a].count >= l)).filter(a => a).length)
        , o = Y(() => je.reduce((S, a) => S + n.achievements[a].thresholds.length, 0));
      return (() => {
        const S = qO.cloneNode(!0)
          , a = S.firstChild
          , l = a.firstChild
          , E = a.nextSibling
          , s = E.firstChild
          , u = s.nextSibling
          , c = u.firstChild;
        return fe(l, "click", e.onCloseAchievements, !0),
          O(l, g(nn, {})),
          O(s, () => t.t("header.achievements")),
          O(u, i, c),
          O(u, o, null),
          O(E, () => je.map(A => g(tR, {
            achievement: A
          })), null),
          H(A => {
            const R = t.t("header.achievements")
              , I = t.t("app.close");
            return R !== A._v$3 && M(S, "aria-label", A._v$3 = R),
              I !== A._v$4 && M(l, "aria-label", A._v$4 = I),
              A
          }
            , {
              _v$3: void 0,
              _v$4: void 0
            }),
          S
      }
      )()
    }
    ;
  Ye(["click"]);
  const rR = y('<button type="button"></button>')
    , iR = y('<div class="px-4 py-2 text-center flex flex-col"><div class="text-3xl pb-2"></div><button type="button" class="mx-auto mt-2 text-base min-h-[40px] text-fuchsia-700 hover:text-white border-2 border-fuchsia-700 hover:bg-fuchsia-800 focus:ring-4 focus:outline-none focus:ring-fuchsia-300 font-medium rounded-lg px-3 text-center dark:border-fuchsia-400 dark:text-fuchsia-400 dark:hover:text-white dark:hover:bg-fuchsia-500 dark:focus:ring-fuchsia-900 transition-colors"><a class="flex flex-row items-center" href="https://www.buymeacoffee.com/quordle" target="_blank"><div class="ml-2"></div></a></button></div>')
    , oR = y('<div class="flex items-center justify-center"><div class="ml-2"></div></div>')
    , SR = y('<div class="text-black dark:text-white text-2xl"></div>')
    , aR = y('<div class="mx-2.5 mt-1 px-4 py-2 text-center bg-rose-700 text-white text-xl rounded"></div>')
    , ER = e => (() => {
      const t = rR.cloneNode(!0);
      return fe(t, "click", e.onClick, !0),
        O(t, () => e.children),
        H(n => {
          const r = `m-auto text-lg min-h-[40px] text-gray-900 bg-gray-300 border border-gray-400 hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 text-center dark:bg-gray-600 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:hover:border-gray-800 dark:focus:ring-gray-900 transition-colors ${e.class}`
            , i = e.ariaLabel;
          return r !== n._v$ && (t.className = n._v$ = r),
            i !== n._v$2 && M(t, "aria-label", n._v$2 = i),
            n
        }
          , {
            _v$: void 0,
            _v$2: void 0
          }),
        t
    }
    )()
    , sR = e => {
      const t = K()
        , [n, r] = Te()
        , i = Y(() => n[e.mode].answersCorrect.reduce((E, s) => E += s >= 0 ? 1 : 0, 0))
        , o = Y(() => new Date(mn.getTime() + (new Date().getTimezoneOffset() - mn.getTimezoneOffset()) * he.minute + (n[e.mode].seed + 1) * Ko))
        , [S, a] = J(new Date)
        , l = setInterval(() => a(new Date), 1e3);
      return we(() => clearInterval(l)),
        Y(() => r.isGameComplete(e.mode) ? (() => {
          const E = iR.cloneNode(!0)
            , s = E.firstChild
            , u = s.nextSibling
            , c = u.firstChild
            , A = c.firstChild;
          return O(s, (() => {
            const R = X(() => i() === 4, !0);
            return () => R() ? t.t("game.complete") : (() => {
              const I = X(() => i() === 3, !0);
              return () => I() ? t.t("game.soClose") : t.t("game.betterLuck")
            }
            )()
          }
          )()),
            O(E, (() => {
              const R = X(() => e.mode === "free", !0);
              return () => R() ? g(ER, {
                onClick: () => {
                  F(n.vibration),
                    r.resetFree()
                }
                ,
                get ariaLabel() {
                  return t.t("game.newPractice")
                },
                get children() {
                  const I = oR.cloneNode(!0)
                    , f = I.firstChild;
                  return O(I, g(kO, {}), f),
                    O(f, () => t.t("game.newPractice")),
                    I
                }
              }) : (() => {
                const I = SR.cloneNode(!0);
                return O(I, () => t.t("game.nextDaily", {
                  duration: ki(S(), o(), t)
                })),
                  I
              }
              )()
            }
            )(), u),
            u.$$click = () => {
              F(n.vibration),
                r.updateDonationTime()
            }
            ,
            O(c, g(kS, {}), A),
            O(A, () => t.t("game.supportByDonating")),
            H(R => {
              const I = t.t("game.aria.gameCompleteBanner")
                , f = {
                  "text-green-600 dark:text-green-500": i() === 4,
                  "text-amber-600 dark:text-amber-400": i() === 3,
                  "text-orange-600 dark:text-orange-500": i() === 2,
                  "text-rose-600": i() <= 1
                }
                , T = t.t("game.supportByDonating");
              return I !== R._v$3 && M(E, "aria-label", R._v$3 = I),
                R._v$4 = ye(s, f, R._v$4),
                T !== R._v$5 && M(u, "aria-label", R._v$5 = T),
                R
            }
              , {
                _v$3: void 0,
                _v$4: void 0,
                _v$5: void 0
              }),
            E
        }
        )() : e.mode === "daily" && o().getTime() - S().getTime() < he.minute * 5 ? (() => {
          const E = aR.cloneNode(!0);
          return O(E, () => t.t("game.dailyResetTimer", {
            duration: ki(S(), o(), t)
          })),
            H(() => E.classList.toggle("animate-pulse", o().getTime() - S().getTime() < he.second * 15)),
            E
        }
        )() : null)
    }
    ;
  Ye(["click"]);
  var XS = {
    exports: {}
  };
  (function (e, t) {
    (function (n, r) {
      r()
    }
    )(Ht, function () {
      function n(E, s) {
        return typeof s == "undefined" ? s = {
          autoBom: !1
        } : typeof s != "object" && (console.warn("Deprecated: Expected third argument to be a object"),
          s = {
            autoBom: !s
          }),
          s.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(E.type) ? new Blob(["\uFEFF", E], {
            type: E.type
          }) : E
      }
      function r(E, s, u) {
        var c = new XMLHttpRequest;
        c.open("GET", E),
          c.responseType = "blob",
          c.onload = function () {
            l(c.response, s, u)
          }
          ,
          c.onerror = function () {
            console.error("could not download file")
          }
          ,
          c.send()
      }
      function i(E) {
        var s = new XMLHttpRequest;
        s.open("HEAD", E, !1);
        try {
          s.send()
        } catch (u) { }
        return 200 <= s.status && 299 >= s.status
      }
      function o(E) {
        try {
          E.dispatchEvent(new MouseEvent("click"))
        } catch (u) {
          var s = document.createEvent("MouseEvents");
          s.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null),
            E.dispatchEvent(s)
        }
      }
      var S = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof Ht == "object" && Ht.global === Ht ? Ht : void 0
        , a = S.navigator && /Macintosh/.test(navigator.userAgent) && /AppleWebKit/.test(navigator.userAgent) && !/Safari/.test(navigator.userAgent)
        , l = S.saveAs || (typeof window != "object" || window !== S ? function () { }
          : "download" in HTMLAnchorElement.prototype && !a ? function (E, s, u) {
            var c = S.URL || S.webkitURL
              , A = document.createElement("a");
            s = s || E.name || "download",
              A.download = s,
              A.rel = "noopener",
              typeof E == "string" ? (A.href = E,
                A.origin === location.origin ? o(A) : i(A.href) ? r(E, s, u) : o(A, A.target = "_blank")) : (A.href = c.createObjectURL(E),
                  setTimeout(function () {
                    c.revokeObjectURL(A.href)
                  }, 4e4),
                  setTimeout(function () {
                    o(A)
                  }, 0))
          }
            : "msSaveOrOpenBlob" in navigator ? function (E, s, u) {
              if (s = s || E.name || "download",
                typeof E != "string")
                navigator.msSaveOrOpenBlob(n(E, u), s);
              else if (i(E))
                r(E, s, u);
              else {
                var c = document.createElement("a");
                c.href = E,
                  c.target = "_blank",
                  setTimeout(function () {
                    o(c)
                  })
              }
            }
              : function (E, s, u, c) {
                if (c = c || open("", "_blank"),
                  c && (c.document.title = c.document.body.innerText = "downloading..."),
                  typeof E == "string")
                  return r(E, s, u);
                var A = E.type === "application/octet-stream"
                  , R = /constructor/i.test(S.HTMLElement) || S.safari
                  , I = /CriOS\/[\d]+/.test(navigator.userAgent);
                if ((I || A && R || a) && typeof FileReader != "undefined") {
                  var f = new FileReader;
                  f.onloadend = function () {
                    var D = f.result;
                    D = I ? D : D.replace(/^data:[^;]*;/, "data:attachment/file;"),
                      c ? c.location.href = D : location = D,
                      c = null
                  }
                    ,
                    f.readAsDataURL(E)
                } else {
                  var T = S.URL || S.webkitURL
                    , C = T.createObjectURL(E);
                  c ? c.location = C : location.href = C,
                    c = null,
                    setTimeout(function () {
                      T.revokeObjectURL(C)
                    }, 4e4)
                }
              }
        );
      S.saveAs = l.saveAs = l,
        e.exports = l
    })
  }
  )(XS);
  var lR = XS.exports
    , AR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACLlBMVEUAAAAvfDEvfDBwmiGKqyBugBtwmSEvfDEvfjIudC56mCpwmSFwmSEvfDFxmyIwfDFvmCEvfDEvfTAvfDFwmSFwmSEvfTFwmSFwmSGqwhy1zxmftSVslyJwmSGftiVwmSGftSQvfDG40hgvfDG30hgufDAvfDAvfTFwmSAvfDKjuSMvfC9xmSAwfDAwfDCftSUvezBvmSG30RietiS30RhwmSFvmSAvfDFvmSEufDEvfDAwfDBwmSFxmSFVjieetSZvmCCgtyRwmyGgtiYwezChtSO1zxopfDC30RhZjya30hixyxwufDFikySDsSJwmSEufDEvfDEvfDJvmSEwezFhkiRfkSZvmSC20Rm30Ri20BhxmiEufDKgtCS40ReftSZWjimxyB2etSW40BijtiRwmCKftCVSjSm41BYzfzNwmSEvfDG30RiftSW1zxk2fy8zfjBfkiWjuiJpliK20BhAhCxGhiugtiRwmCEwfDExfTA8gi5DhSyowCA7gS5MiipKiCpPiilZjyalvCI+hC5jkySmvSFumCE5gS9XjidWjidmlSNrlyGsxB6uxxywyRuyzBpXkSxTjChajyZckCV0pyRhkySiuCOqwx6xyhtTkStIhyqbsyWXsSRtmCGavx2Wux2qyRtHii1+pCiEpydakCZtoyV6qyNtmCKpwR9PjyxmmStZlStvnSqRriaPrSV2nyWQtR5smyqZsSaUryZroSaBryJ/oSJoliKfvx8idSH9AAAAanRSTlMA/PUXBwL4PSAHBPTbz2tGDPnu5tayrI4sDfv5+e7o5N3UyaKTi4aBU1EwLCQaDPDcyLiyspSGeXhrY1xKRkRDPzg1KCcgGBL17ebl4dXKxsC/ube2sKmlpaKenJqThHJxYmFhW1lSOC8U7lHIBQAABMJJREFUWMO9lYVXWzEUxgOjFCYwQebu7u7u7u6SvNRGW9pS2iLt6IoMNhhjMGCwwdzlv1uS916T9BXdzn7ntDkvfd+Xm3uTW/DvSds+d+tIaWbI3Kxb2039lA9ZNQxCmJ7PLcaegJQpqy7kTFqWv7AP/dYpUCV35JA0NrMpHUqsNvW0dFZuzvAc8e303IVkehJMICv5xlcPg0bSN4J8w+SUpMsfgUkZlpXEN0kaRubAAXAo02Bwpr/aWhckjD46e6ekn9tPeafHZiVDBCGUahb0puGwf0SaPDQCOyIsHcoNNsF+E+siXy5EyeYG+XBAPEaMddxgGUzgflM57AwWJlO31Ac9iLGGG5AU1McidTFhDW8RQvdhS6jMF4xAkSaks0Ey8NoeoFqo01VMXiiCETqgCihShHRmc4NcCEMIWe8LeyhGzhYySaljE7GgD1IeIJ3UjLjBWvJDRZDqOQ/JhwVgbaF6r81jhYRyxJnDL4J0Ycud5ZoHInjtkFBIIg+pI+cYEELQsdtcVhTVjq2QgcLOQIR8h5DAQeEuTaQr11EDUiPPL1VDd+CTqluERMZwg1Mw9thuY5sssaEAZETZDuo1bSAQLEMyI3gzmQgDrG7s1bpCyJy08+Kyd8HykA0ZyYsbbCYJI+WxQ069E/UJP8tX2emr1atQ2+S0ob4ZtUiIgGP3IYmyF62v36BkzACcfaGi4uBDWnoXkvG2KoTfZUb96EWAk52CCMUupwe1/2hr/NoRX/OJQil9/sigNwORbKTxzqIoFow7kMqzAqp/ivGHuPJBoKKuJBo9vXGoaLAYabymAjf+qCWgjT42Yoz1CKy8VMPHig4jRAMHbhYSYGnA+JOuF2/cJNFhvbjnUoxt8YcC8vTBilTs8r+O4DB0hGDgx9gnJuC5fgdcUGbiHe6QMQZRXlFNN8btyRLglVtGYYlvWqbgcBwRvlNRJdVYX7AEuDF+jzRKZD09M+uBgHlGqhpBNRExPUtHh1erXxRKlCDCSSCROe8wW9bREG5TtFi+0S5oe/bkhdLKxYEQjLDEppqAzExFpMBNNtP+7tXnGub7SVva5UJOEgBjMZBZrkhYLBaF8xkygqzTqfc9JVPWp+1VeqbgqZa9Cp+T9j7elTg3ehRXV4bdzfECPNYv/SxZv3t/MrGlqtuBKR/1nlGMNFIyJP246UlW9hMxo7n5p9TtjDtI0zNoeaqoVIfdTPv85duADTlJy4lFudyQw3O63uFgY4229stnNv0yWlECC8QjENdjVvZKdfEvPtQLC4z6AgeuYldSXb2s9868OH6dz+v6UuynYYSZ/q0H9UpeXH9W0QjjUjUMwpKs1N71qTv1+q3U9X7cYGFhECbPB9mje93APKARr383djfG9TvIL3tmL+1RP80MZAOW+Eq6DV3PyDDPG2VUp+RtEPr6ZVVfhbFDz/+S+YCzRhYbL8FdRWtE7hraRQkTtgEB06zE9eckNBKaxEY3xlU0DMptIGPOIwUZMyN7zrQUMl5cABLYPV6pIXq/QgfCFWDAtOie2vYy9oAkXBvfgGkFLewArAAD5ybRVWsJnDoODILrE/x6AraAQbFtPP0bIVwCg2T+gTDfwODYsmICnroL/A1pRP6/+QOpnHr2k1gJNwAAAABJRU5ErkJggg=="
    , cR = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAB8lBMVEUAAAD/32X9tQL/4mX+tgP+tQH9tQL9tQL//wD/4mX+tQL/4mX+tQH/42X/tgL/tQP/42P/swD/5mP/4mX+tQL/4mX+tQL+tQL+tQL+tQL/42X+tQH/4mX9tQL9tgL/42X/4mX/uQv/tQL/tgP/4Gb/tAD/42X/32f/4mX/4mX+tQL/4mX/42X+tQP/4mX9tQL9tQL/4mX/tAL/tQP/4mX/tQP/4mT/twT/42X/twD/4GP/sgD/yCb+xib+tQL+tQL+xif/4mX+tAH/4mX9tQL/4mX/4Wb/4mX/42X/4WP/4Gb/tgP/4Gb/uAD/5GL//3/+tQL/4mX/iw3tazH+tAL+iQ/vby3xcSr9hxHubTDzdSb/jQ3+yzH6gRf8qwj9rwX/32H6vlTzgiL2jBv+wBn6pgz/kQv+sQP/31z/1UfyfSX2ex/4fhz2jhr3kxb7hBX8jhD/mQr+ogj/ngj9rQb+rwT8zVv1nUb/0T//qiz1eCP+vBD6nw7+pQb9swT+2GD/3Ff/0VT/zE73rk7/vkDveDf/rzL+xif0iB/3hBz2lhb3mRP/jxH8kg78qAr+qAb7yFr4tVL4tlH2qUz/1kv/1Un2pUf2oUHyiT7xiT74mTf/zTbwdyn+xCP8qR/7jRf6ixT8jBL5og7+uQr7pQr+nAm+IPFtAAAAUHRSTlMABKPry7SRgQH15ta7s3xPIBMN/Pr58+LW0LywlI2GhH52cF4pGxoV5N/bycXEpp2Xc2plWFVUQ0I7MSEK8O3n1rerqamObmhbTUtJMislAkJ++MAAAANFSURBVFjD7ZfnV9pQGIcp4EAU96h7a92rWkf33jcJyBIRaB2AinVba1urVq2je+/xf/bemx0SAn7rqc/H9+T55d73jpNoDvmPSOxMyS+8UnNg/0Q9gcisbz1Qxo2zBEd2U0+s+q0mbA5xGefTYtGrC7ORvbhD7iyyGYZLidHqGSUGrKyRiDWCJb86Kv3IZR0jrCLf+Zjg0HVG4V818sLqxuIG8nkKj6joaSlEZBqqIw/fQKhRWxkp4HY2oYouYsIxQh2jQh96WjNkA+Zeep6LKx2ysy/NJGpLS8L0J+sUZN3DFUbHTpbJdb+BkOPhB6RbrVb7HN7YbwbuAABkAq7pCFneU5TDZYHbyfJxdAzKNKaw4ZcQ8nio/kmS5hvgSZD4NfmEAvNWC8nwAPAUS64NHaHEOxfrTwEBRaJbC3ZfjqHXcMpudgLTQEi88OSm4Ga/eOURyHy/3CFoD0/PAhEtvF9pxGtth2s1T8uPFp7eB0JGzEBKM+d3GJheB1yTwTlGVkfLrt5FptcO3Ouvv0CUaLnp07zFfggIMLtXgDLn6M1rZPu18oO0hO4BnhlfP9y/3mWlgAIccGZg4dMX2SnfhTrG65YPiMMBeqX8Qdq3O5aW/GYgRzIOSFYK8CK9P0hCLBOikfm8vj0+IE7Bn0E+XBeMTdDXTQqBIhtxQAE93kFpwDN0AZAsI8KB2QM20gZbq8cBF1B1nHL4JAET8EFbeMBPGIvLuwAcxQFa9H4KHrf9sIAA5zu58jjFHO0pNqAZBdhhZUayiBQ1yQVM8wHssOCGycMBLai86YKJYsyfKQs3AL4Fy0t0aRiubB0OiKebuCezj2wy15B5i/bRyc7FAUWSF2/7/eMrdIKLeT/0edy7Tngz4CGdxgHFYt8PN49jy0w/+90G9T+zQAG6iQnS1Q9YYIe4QLOCzF9pJlHNRwWZFquTW4UDykTFbQeJ2FfX64qgjygXn4Ags0aRSIpLSE3XsLQBEb9DpHNqVtHNaYyv6NWIaAdRkqWPr7gp84VXEY2bpy3vVvqsOq4i52nbuvsUXDpArVlqdCm4puvYVacvR+KeSi5OrdLEgEmwtwoSUntj/x1p1+dkJem15V3pmkP+Sf4Cz3zAF4yRDX4AAAAASUVORK5CYII=";
  const ve = e => e < 0 ? "\u{1F7E5}" : `${e + 1}\uFE0F\u20E3`
    , ln = (e, t) => {
      let n = "";
      if (!t || t.length === 0)
        return "\u2B1B\u2B1B\u2B1B\u2B1B\u2B1B";
      for (let r = 0; r < t.length; r++)
        e === "default" ? t[r] === "correct" ? n += "\u{1F7E9}" : t[r] === "diff" ? n += "\u{1F7E8}" : t[r] === "none" && (n += "\u2B1C") : e === "april_fools" && (t[r] === "correct" ? n += "\u{1F966}" : t[r] === "diff" ? n += "\u{1F9C0}" : t[r] === "none" && (n += "\u2B1C"));
      return n
    }
    , An = e => e ? e === "correct" ? "#00cc88" : e === "diff" ? "#ffcc00" : e === "none" ? "#e0e0e0" : "#2d2d2d" : "#2d2d2d";
  function bt(e, t, n, r, i, o) {
    const S = {
      tl: o,
      tr: o,
      br: o,
      bl: o
    };
    e.beginPath(),
      e.moveTo(t + S.tl, n),
      e.lineTo(t + r - S.tr, n),
      e.quadraticCurveTo(t + r, n, t + r, n + S.tr),
      e.lineTo(t + r, n + i - S.br),
      e.quadraticCurveTo(t + r, n + i, t + r - S.br, n + i),
      e.lineTo(t + S.bl, n + i),
      e.quadraticCurveTo(t, n + i, t, n + i - S.bl),
      e.lineTo(t, n + S.tl),
      e.quadraticCurveTo(t, n, t + S.tl, n),
      e.closePath(),
      e.fill()
  }
  const cn = (e, t, n, r, i, o, S) => rn(jr, null, function* () {
    if ((o === "correct" || o === "diff") && S === "april_fools") {
      const a = new Image;
      a.width = r,
        a.height = i,
        a.src = o === "correct" ? AR : cR;
      try {
        yield a.decode(),
          e.save(),
          e.clip(),
          e.drawImage(a, t, n, r, i),
          e.restore()
      } catch (l) { }
    }
  })
    , JS = (e, t, n, r) => {
      let i = "";
      e === "daily" ? i = r.t(t === "april_fools" ? "game.dailyQuordleFoolsShare" : "game.dailyQuordleShare", {
        num: n.seed
      }) + `
` + ve(n.answersCorrect[0]) + ve(n.answersCorrect[1]) + `
` + ve(n.answersCorrect[2]) + ve(n.answersCorrect[3]) : i = r.t(t === "april_fools" ? "game.practiceQuordleFoolsShare" : "game.practiceQuordleShare") + `
` + ve(n.answersCorrect[0]) + ve(n.answersCorrect[1]) + (" " + n.answers[0] + " - " + n.answers[1]) + `
` + ve(n.answersCorrect[2]) + ve(n.answersCorrect[3]) + (" " + n.answers[2] + " - " + n.answers[3]),
        i += `
` + r.t("app.webAddress");
      const o = i;
      i += `
`;
      let S = Q - 1;
      n.answersCorrect[0] >= 0 && n.answersCorrect[1] >= 0 && (S = Math.max(n.answersCorrect[0], n.answersCorrect[1]));
      let a = Q - 1;
      n.answersCorrect[2] >= 0 && n.answersCorrect[3] >= 0 && (a = Math.max(n.answersCorrect[2], n.answersCorrect[3]));
      for (let l = 0; l <= S; l++)
        i += ln(t, n.states[0][l]) + " " + ln(t, n.states[1][l]) + `
`;
      i += `
`;
      for (let l = 0; l <= a; l++)
        i += ln(t, n.states[2][l]) + " " + ln(t, n.states[3][l]) + `
`;
      return [i, o]
    }
    , un = (e, t, n, r, i) => rn(jr, null, function* () {
      const [o, S] = JS(e, t, n, i);
      if (de("event", "share", {
        mode: e,
        share_type: r,
        daily_seed: e === "daily" ? n.seed : void 0
      }),
        r === "clipboard")
        navigator.clipboard.writeText(o).then(() => alert(i.t("game.copiedResults"))).catch(a => {
          console.error(a),
            alert(i.t("game.errorCopy"))
        }
        );
      else if (r === "share")
        navigator.share({
          text: o
        }).catch(a => console.error(a));
      else if (r === "image" || r === "image_save") {
        const a = document.createElement("canvas");
        a.style.display = "none";
        let l = Q - 1;
        n.answersCorrect[0] >= 0 && n.answersCorrect[1] >= 0 && (l = Math.max(n.answersCorrect[0], n.answersCorrect[1]));
        let E = Q - 1;
        n.answersCorrect[2] >= 0 && n.answersCorrect[3] >= 0 && (E = Math.max(n.answersCorrect[2], n.answersCorrect[3]));
        const s = 64
          , u = s / 16
          , c = s / 8
          , A = .75
          , R = s / 4;
        a.width = (s + u) * 11 - u,
          a.height = (s + u) * (l + 1 + E + 1 + 4) - u;
        const I = a.getContext("2d");
        if (!I)
          return;
        I.fillStyle = "black",
          I.fillRect(0, 0, a.width, a.height);
        let f = 0
          , T = 0;
        for (let h = 0; h <= l; h++) {
          let N = n.states[0][h];
          for (f = 0; f < pe; f++)
            I.fillStyle = An(N == null ? void 0 : N[f]),
              bt(I, f * (s + u), T * (s + u), s, s, c),
              yield cn(I, f * (s + u), T * (s + u), s, s, N == null ? void 0 : N[f], t);
          for (N = n.states[1][h],
            f = 6; f < pe + 6; f++)
            I.fillStyle = An(N == null ? void 0 : N[f - 6]),
              bt(I, f * (s + u), T * (s + u), s, s, c),
              yield cn(I, f * (s + u), T * (s + u), s, s, N == null ? void 0 : N[f - 6], t);
          T++
        }
        I.font = s * A + "px Arial",
          I.textAlign = "center",
          I.textBaseline = "alphabetic",
          I.fillStyle = "#ffffff";
        const C = e === "daily" ? i.t(t === "april_fools" ? "game.dailyQuordleFoolsShare" : "game.dailyQuordleShare", {
          num: n.seed
        }) : i.t(t === "april_fools" ? "game.practiceQuordleFoolsShare" : "game.practiceQuordleShare");
        let D = I.measureText(C)
          , L = D.actualBoundingBoxAscent;
        I.fillText(C, a.width / 2, T * (s + u) + s - (s - L) / 2, a.width - R * 2),
          T++;
        for (let h = 0; h < 2; h++) {
          for (let N = 0; N < 2; N++) {
            I.fillStyle = n.answersCorrect[N + h * 2] >= 0 ? "#00a6ed" : "#f8312f";
            const B = N * 2 - 1
              , x = a.width / 2 + B * (u / 2) + B * (s / 2);
            if (bt(I, x - s / 2, T * (s + u), s, s, c),
              n.answersCorrect[N + h * 2] >= 0) {
              I.textAlign = "center",
                I.fillStyle = "#ffffff";
              const W = String(n.answersCorrect[N + h * 2] + 1);
              D = I.measureText(W),
                L = D.actualBoundingBoxAscent + D.actualBoundingBoxDescent,
                I.fillText(W, x, T * (s + u) + s - (s - L) / 2, s)
            }
          }
          if (e === "free") {
            I.textAlign = "right",
              I.fillStyle = "#ffffff";
            let N = n.answers[0 + h * 2];
            D = I.measureText(N),
              L = D.actualBoundingBoxAscent + D.actualBoundingBoxDescent,
              I.fillText(N, a.width / 2 - u / 2 - s - R, T * (s + u) + s - (s - L) / 2, a.width / 2 - u - s - R * 2),
              I.textAlign = "left",
              N = n.answers[1 + h * 2],
              D = I.measureText(N),
              L = D.actualBoundingBoxAscent + D.actualBoundingBoxDescent,
              I.fillText(N, a.width / 2 + u / 2 + s + R, T * (s + u) + s - (s - L) / 2, a.width / 2 - u - s - R * 2)
          }
          T++
        }
        I.textAlign = "center",
          I.textBaseline = "middle",
          I.fillStyle = "#ffffff",
          I.fillText(i.t("app.webAddress"), a.width / 2, T * (s + u) + s / 2, a.width),
          T++;
        for (let h = 0; h <= E; h++) {
          f = 0;
          let N = n.states[2][h];
          for (f = 0; f < pe; f++)
            I.fillStyle = An(N == null ? void 0 : N[f]),
              bt(I, f * (s + u), T * (s + u), s, s, c),
              yield cn(I, f * (s + u), T * (s + u), s, s, N == null ? void 0 : N[f], t);
          for (N = n.states[3][h],
            f = 6; f < pe + 6; f++)
            I.fillStyle = An(N == null ? void 0 : N[f - 6]),
              bt(I, f * (s + u), T * (s + u), s, s, c),
              yield cn(I, f * (s + u), T * (s + u), s, s, N == null ? void 0 : N[f - 6], t);
          T++
        }
        const U = yield new Promise(h => a.toBlob(h));
        if (!U)
          return;
        const d = `quordle-${e === "daily" ? "daily" : "practice"}-${n.seed}.png`
          , P = new File([U], d, {
            type: "image/png"
          });
        r === "image" ? navigator.share({
          files: [P],
          text: S
        }).catch(h => console.error(h)) : r === "image_save" && lR.saveAs(P, d)
      }
    })
    , uR = y('<button type="button" class="text-lg min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"></button>')
    , OR = y('<span><a target="_blank"></a></span>')
    , RR = y('<div class="flex flex-col rounded-t-lg text-center px-4 pt-2 pb-4"><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span></div></div><div class="text-2xl flex"><div class="flex flex-1 justify-end items-center"><span class="font-[Arial]"></span></div><div class="flex flex-1 justify-start items-center"><span class="font-[Arial]"></span></div></div><div class="flex items-center justify-center mt-2"></div><textarea class="font-[Courier] w-[100%] text-sm text-black dark:text-white bg-white dark:bg-gray-800 text-center rounded-lg mt-2 resize-none" rows="8" readonly></textarea></div>')
    , lr = y('<div class="flex items-center justify-center"><div class="ml-2"></div></div>')
    , IR = y('<div class="mr-2 inline-flex"></div>')
    , dR = y('<div class="inline-flex" role="group"><button type="button" class="text-lg min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-l-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-r-[1px] border-gray-400 transition-colors"><div class="flex items-center justify-center"><div class="ml-2"></div></div></button><button type="button" class="text-lg min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-r-lg px-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"></button></div>')
    , fR = y('<div class="flex items-center justify-center mt-2"></div>')
    , Ar = e => (() => {
      const t = uR.cloneNode(!0);
      return fe(t, "click", e.onClick, !0),
        O(t, () => e.children),
        H(() => M(t, "aria-label", e.ariaLabel)),
        t
    }
    )()
    , On = e => {
      const t = K()
        , [n] = Te()
        , r = Y(() => n[e.mode].answersCorrect[e.gameIndex])
        , i = Y(() => n[e.mode].answers[e.gameIndex]);
      return (() => {
        const o = OR.cloneNode(!0)
          , S = o.firstChild;
        return O(S, i),
          H(a => {
            const l = {
              "mr-4": e.marginSide === "right",
              "ml-4": e.marginSide === "left",
              "text-green-600 dark:text-green-500": n[e.mode].answersCorrect[e.gameIndex] >= 0,
              "text-rose-600": n[e.mode].answersCorrect[e.gameIndex] < 0
            }
              , E = t.t("game.aria.shareAnswer", {
                word: i(),
                board: e.gameIndex + 1,
                solved: r() >= 0 ? t.t("game.aria.shareAnswerSolved", {
                  smart_count: r() + 1
                }) : t.t("game.aria.shareAnswerUnsolved")
              })
              , s = t.t("app.dictionaryUrl", {
                word: n[e.mode].answers[e.gameIndex]
              })
              , u = t.t("game.aria.shareAnswerLinkDesc");
            return a._v$ = ye(o, l, a._v$),
              E !== a._v$2 && M(o, "aria-label", a._v$2 = E),
              s !== a._v$3 && M(S, "href", a._v$3 = s),
              u !== a._v$4 && M(S, "aria-label", a._v$4 = u),
              a
          }
            , {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0
            }),
          o
      }
      )()
    }
    , TR = e => {
      const t = K()
        , [n, r] = Te()
        , [i, o] = J(void 0)
        , [S, a] = J(!1)
        , l = Y(() => JS(e.mode, r.getGameVariation(), n[e.mode], t)[0]);
      return (() => {
        const E = RR.cloneNode(!0)
          , s = E.firstChild
          , u = s.firstChild
          , c = u.firstChild
          , A = u.nextSibling
          , R = A.firstChild
          , I = s.nextSibling
          , f = I.firstChild
          , T = f.firstChild
          , C = f.nextSibling
          , D = C.firstChild
          , L = I.nextSibling
          , U = L.nextSibling;
        return O(u, g(On, {
          get mode() {
            return e.mode
          },
          gameIndex: 0,
          marginSide: "right"
        }), c),
          O(c, () => ve(n[e.mode].answersCorrect[0])),
          O(R, () => ve(n[e.mode].answersCorrect[1])),
          O(A, g(On, {
            get mode() {
              return e.mode
            },
            gameIndex: 1,
            marginSide: "left"
          }), null),
          O(f, g(On, {
            get mode() {
              return e.mode
            },
            gameIndex: 2,
            marginSide: "right"
          }), T),
          O(T, () => ve(n[e.mode].answersCorrect[2])),
          O(D, () => ve(n[e.mode].answersCorrect[3])),
          O(C, g(On, {
            get mode() {
              return e.mode
            },
            gameIndex: 3,
            marginSide: "left"
          }), null),
          O(L, gE && (() => {
            const d = IR.cloneNode(!0);
            return O(d, g(Ar, {
              onClick: () => {
                F(n.vibration),
                  r.updateShareTime(),
                  un(e.mode, r.getGameVariation(), n[e.mode], "share", t)
              }
              ,
              get ariaLabel() {
                return t.t("game.share")
              },
              get children() {
                const P = lr.cloneNode(!0)
                  , h = P.firstChild;
                return O(P, UE ? g($O, {}) : g(_O, {}), h),
                  O(h, () => t.t("game.share")),
                  P
              }
            })),
              d
          }
          )(), null),
          O(L, mE ? (() => {
            const d = dR.cloneNode(!0)
              , P = d.firstChild
              , h = P.firstChild
              , N = h.firstChild
              , B = P.nextSibling;
            return P.$$click = () => {
              F(n.vibration),
                r.updateShareTime(),
                un(e.mode, r.getGameVariation(), n[e.mode], "image", t)
            }
              ,
              O(h, g($S, {
                height: 16
              }), N),
              O(N, () => t.t("game.shareImage")),
              B.$$click = () => {
                F(n.vibration),
                  r.updateShareTime(),
                  un(e.mode, r.getGameVariation(), n[e.mode], "image_save", t)
              }
              ,
              O(B, g(Vi, {})),
              H(x => {
                const W = t.t("game.shareImage")
                  , z = t.t("game.saveImage");
                return W !== x._v$8 && M(P, "aria-label", x._v$8 = W),
                  z !== x._v$9 && M(B, "aria-label", x._v$9 = z),
                  x
              }
                , {
                  _v$8: void 0,
                  _v$9: void 0
                }),
              d
          }
          )() : g(Ar, {
            onClick: () => {
              F(n.vibration),
                r.updateShareTime(),
                un(e.mode, r.getGameVariation(), n[e.mode], "image_save", t)
            }
            ,
            get ariaLabel() {
              return t.t("game.saveImage")
            },
            get children() {
              const d = lr.cloneNode(!0)
                , P = d.firstChild;
              return O(d, g(Vi, {}), P),
                O(P, () => t.t("game.saveImage")),
                d
            }
          }), null),
          O(E, (() => {
            const d = X(() => !!i(), !0);
            return () => d() && (() => {
              const P = fR.cloneNode(!0);
              return O(P, g(Ar, {
                onClick: () => {
                  F(n.vibration),
                    r.updateShareTime(),
                    de("event", "share", {
                      mode: e.mode,
                      share_type: "clipboard",
                      daily_seed: e.mode === "daily" ? n[e.mode].seed : void 0
                    }),
                    a(!0);
                  const h = i();
                  if (h) {
                    h.select(),
                      document.execCommand("copy");
                    const N = window.getSelection && window.getSelection();
                    N && N.removeAllRanges(),
                      h.blur()
                  }
                  alert(t.t("game.copiedResults"))
                }
                ,
                get ariaLabel() {
                  return t.t("game.copyClipboard")
                },
                get children() {
                  const h = lr.cloneNode(!0)
                    , N = h.firstChild;
                  return O(h, g(VS, {}), N),
                    O(N, () => t.t("game.copyClipboard")),
                    h
                }
              })),
                P
            }
            )()
          }
          )(), U),
          o(U),
          O(U, l),
          H(d => {
            const P = t.t("game.aria.shareBanner")
              , h = {
                "absolute top-[100%]": !S()
              }
              , N = t.t("game.copyClipboard");
            return P !== d._v$5 && M(E, "aria-label", d._v$5 = P),
              d._v$6 = ye(U, h, d._v$6),
              N !== d._v$7 && M(U, "aria-label", d._v$7 = N),
              d
          }
            , {
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0
            }),
          E
      }
      )()
    }
    ;
  Ye(["click"]);
  const LR = y('<div class="quordle-box w-[20%]" role="cell"><div class="quordle-box-content"> </div></div>')
    , zS = e => {
      const [t, n] = J(!1)
        , r = Y(() => e.rowTemporalState === "present" || e.gameSize === "square" ? e.presentTileHeight : e.tileHeight);
      return se(() => {
        if (r() > 0) {
          const i = setTimeout(() => {
            n(!0)
          }
            , 100);
          we(() => clearTimeout(i))
        }
      }
      ),
        (() => {
          const i = LR.cloneNode(!0)
            , o = i.firstChild
            , S = o.firstChild;
          return H(a => {
            const l = {
              "bg-box-correct": e.state === "correct" && !e.colorblind,
              "bg-box-correct-alt": e.state === "correct" && e.colorblind,
              "bg-box-diff": e.state === "diff" && !e.colorblind,
              "bg-box-diff-alt": e.state === "diff" && e.colorblind,
              "bg-gray-200 dark:bg-gray-700": e.state === "none" && e.rowTemporalState === "past",
              "bg-gray-300 dark:bg-gray-600": e.rowTemporalState === "present" && !e.answered,
              "bg-gray-100 dark:bg-gray-900": e.rowTemporalState === "future" || e.rowTemporalState === "never" || e.rowTemporalState === "present" && e.answered,
              "text-black": e.state === "correct" || e.state === "diff",
              "text-rose-600": e.state === "invalid",
              "text-black dark:text-white": e.state === "none",
              "quordle-heartbeat-anim dark:quordle-heartbeat-anim-dark": e.activeCol === e.gameCol && e.rowTemporalState === "present" && !e.answered,
              "quordle-letter-anim": e.letter !== "" && e.rowTemporalState === "present",
              "quordle-box-connected": e.rowTemporalState === "future" || e.rowTemporalState === "never",
              "quordle-box-animate": t()
            }
              , E = r() + "px"
              , s = Math.min(r() * .8, 30) + "px"
              , u = e.ariaLabel
              , c = e.letter;
            return a._v$ = ye(i, l, a._v$),
              E !== a._v$2 && i.style.setProperty("height", a._v$2 = E),
              s !== a._v$3 && i.style.setProperty("font-size", a._v$3 = s),
              u !== a._v$4 && M(i, "aria-label", a._v$4 = u),
              c !== a._v$5 && (S.data = a._v$5 = c),
              a
          }
            , {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0
            }),
            i
        }
        )()
    }
    , NR = e => {
      const t = K()
        , n = e.gameX + e.gameY * vt
        , [r] = Te()
        , i = Y(() => r[e.mode].current.length)
        , o = Y(() => {
          const E = r[e.mode]
            , s = E.current
            , u = E.guesses;
          return e.gameRow <= e.answerIndex || e.answerIndex === -1 && e.gameRow < u.length || e.answerIndex === -1 && e.gameRow === u.length && e.gameCol < s.length
        }
        )
        , S = Y(() => {
          const E = r[e.mode]
            , s = E.guesses
            , u = E.current;
          let c = "";
          if (o())
            e.gameRow < s.length ? c = s[e.gameRow][e.gameCol] : e.gameRow === s.length && (c = u[e.gameCol]);
          else
            return c;
          return c
        }
        )
        , a = Y(() => {
          var A;
          const E = r[e.mode]
            , s = E.guesses
            , u = E.states
            , c = E.current;
          if (o()) {
            if (e.gameRow < s.length)
              return ((A = u[n][e.gameRow]) == null ? void 0 : A[e.gameCol]) || "none";
            if (e.gameRow === s.length && c.length === 5 && !r.allowedSet.has(c) && !r.wordBankSet.has(c))
              return "invalid"
          }
          return "none"
        }
        )
        , l = Y(() => {
          const E = {
            letter: S() ? S() : t.t("game.aria.blank"),
            column: e.gameCol + 1
          };
          return e.answered || e.temporalState === "never" ? t.t("game.aria.tileNever", E) : e.temporalState === "future" ? t.t("game.aria.tileFuture", E) : a() === "invalid" ? t.t("game.aria.tileInvalid", E) : e.temporalState === "present" ? t.t("game.aria.tilePresent", E) : a() === "diff" ? t.t("game.aria.tileDiff", E) : a() === "none" ? t.t("game.aria.tileNone", E) : t.t("game.aria.tileCorrect", E)
        }
        );
      return g(zS, {
        get state() {
          return a()
        },
        get letter() {
          return S()
        },
        get gameRow() {
          return e.gameRow
        },
        get gameCol() {
          return e.gameCol
        },
        get rowTemporalState() {
          return e.temporalState
        },
        get activeCol() {
          return i()
        },
        get colorblind() {
          return r.colorblind
        },
        get currentRow() {
          return r[e.mode].guesses.length
        },
        get tileHeight() {
          return e.tileHeight
        },
        get presentTileHeight() {
          return e.presentTileHeight
        },
        get answered() {
          return e.answered
        },
        get gameSize() {
          return r.gameSize
        },
        get ariaLabel() {
          return l()
        }
      })
    }
    ;
  function CR(e) {
    if (typeof window != "undefined" && window.navigator)
      return !!navigator.userAgent.match(e)
  }
  const QS = CR(/iP(ad|od|hone)/i)
    , DR = typeof window != "undefined" ? QS && "download" in document.createElement("a") : null;
  if (QS && !DR) {
    const e = document.querySelector("html");
    e.style.cursor = "pointer",
      e.style.webkitTapHighlightColor = "rgba(0, 0, 0, 0)"
  }
  const ee = []
    , hR = e => {
      ee.push(e)
    }
    , Xi = e => {
      const t = ee.findIndex(r => r.uniqueId === e);
      if (t === -1)
        return;
      const n = ee[t];
      return ee.splice(t, 1),
        n
    }
    , vR = ["a[href]", "area[href]", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "iframe", "[tabindex]", "[contentEditable=true]"].reduce((e, t, n) => `${e}${n ? "," : ""}${t}:not([tabindex="-1"])`, "")
    , ke = ({ from: e = document.activeElement, stopAtElement: t, ignoreElement: n = [], allowSelectors: r, direction: i = "forwards" }) => {
      const o = e.parentElement
        , S = e
        , a = vR + (r ? "," + r.join(",") : "");
      if (!S)
        return null;
      const l = (I, f = window) => {
        const T = D => D.display === "none" || D.visibility === "hidden";
        if (I.style && T(I.style) || I.hidden)
          return !0;
        const C = f.getComputedStyle(I);
        return !!(!C || T(C))
      }
        , E = (I, f, T) => {
          const C = [];
          let D = I;
          if (l(D))
            return !0;
          for (; D = D.parentElement,
            !(!D || D === f);)
            C.push(D);
          for (const L of C)
            if (l(L, T))
              return !0;
          return !1
        }
        , s = (I, f, T, C) => {
          const D = I.length;
          if (D && l(f))
            return null;
          if (T) {
            for (let L = D - 1; L > -1; L--) {
              const U = I[L];
              if (!n.some(d => d.contains(U)) && !E(U, f, C)) {
                if (U.tagName === "IFRAME") {
                  const d = c(U, T);
                  if (d)
                    return d
                }
                return U
              }
            }
            return null
          }
          for (let L = 0; L < D; L++) {
            const U = I[L];
            if (!n.some(d => d.contains(U)) && !E(U, f, C)) {
              if (U.tagName === "IFRAME") {
                const d = c(U);
                if (d)
                  return d
              }
              return U
            }
          }
          return null
        }
        , u = I => {
          try {
            return I.contentWindow
          } catch (f) {
            return null
          }
        }
        , c = (I, f) => {
          if (!I)
            return null;
          if (I.tagName !== "IFRAME")
            return I;
          const T = u(I)
            , C = T.document;
          if (!T || I.getAttribute("tabindex"))
            return I;
          const L = C.querySelectorAll(a)
            , U = s(L, C.documentElement, f, T);
          return c(U)
        }
        , A = (I, f) => {
          let T = !1;
          const C = I.children
            , D = C.length;
          if (i === "forwards")
            for (let L = 0; L < D; L++) {
              const U = C[L];
              if (T) {
                if (n.some(h => h === U))
                  continue;
                if (U.matches(a)) {
                  if (l(U))
                    continue;
                  const h = c(U);
                  return h || U
                }
                const d = U.querySelectorAll(a)
                  , P = s(d, U);
                if (P)
                  return P;
                continue
              }
              if (U === t)
                return null;
              if (U === f) {
                T = !0;
                continue
              }
            }
          else
            for (let L = D - 1; L >= 0; L--) {
              const U = C[L];
              if (T) {
                if (n.some(h => h === U))
                  continue;
                if (U.matches(a)) {
                  if (l(U))
                    continue;
                  const h = c(U);
                  return h || U
                }
                const d = U.querySelectorAll(a)
                  , P = s(d, U, !0);
                if (P)
                  return P;
                continue
              }
              if (U === t)
                return null;
              if (U === f) {
                T = !0;
                continue
              }
            }
          return f = I,
            I = I.parentElement,
            I ? A(I, f) : null
        }
        ;
      return A(o, S)
    }
    ;
  let cr = !1
    , mr = !1
    , ft = null
    , jS = 0
    , Pr = null
    , Dn = null;
  const p = {
    closeByFocusSentinel: !1,
    closedBySetOpen: !1,
    addedDocumentClick: !1,
    documentClickTimeout: null,
    closedByEvents: !1,
    focusedMenuBtns: new Set
  }
    , mt = e => {
      const t = e.target;
      Ve(ee, n => {
        if (!(n.overlay || n.overlayElement || me(n.menuBtnEls).contains(t) || n.containerEl.contains(t)))
          return n
      }
        , n => {
          const { setOpen: r } = n;
          p.closedByEvents = !0,
            r(!1)
        }
      ),
        p.addedDocumentClick = !1
    }
    , qS = e => {
      const t = ee[ee.length - 1];
      setTimeout(() => {
        const r = e.timeStamp - jS;
        if (!document.hasFocus() && r < 50) {
          Ve(ee, i => i, i => {
            const { setOpen: o } = i;
            p.closedByEvents = !0,
              o(!1)
          }
          );
          return
        }
      }
      );
      const n = r => {
        if (r.overlay || r.overlayEl || !r.closeWhenDocumentBlurs)
          return;
        me(r.menuBtnEls).focus(),
          p.closedByEvents = !0,
          r.setOpen(!1)
      }
        ;
      t.overlay || setTimeout(() => {
        const r = document.activeElement;
        if (!r || r.tagName !== "IFRAME") {
          Ve(ee, i => i, i => n(i));
          return
        }
        Ve(ee, i => {
          const { containerEl: o } = i;
          if (o.contains(r)) {
            Dn = r,
              ra(),
              document.addEventListener("visibilitychange", na);
            return
          }
          return i
        }
          , i => {
            const { setOpen: o } = i;
            p.closedByEvents = !0,
              o(!1)
          }
        )
      }
      )
    }
    , ea = e => {
      const { focusedMenuBtn: t, setOpen: n, menuBtnEls: r, cursorKeys: i, closeWhenEscapeKeyIsPressed: o, focusElementOnClose: S, timeouts: a } = ee[ee.length - 1];
      if (e.key === "Tab" && (jS = e.timeStamp),
        i && gR(e),
        e.key !== "Escape" || !o)
        return;
      const l = me(r)
        , E = Oe({}, {
          inputElement: S,
          type: "focusElementOnClose",
          subType: "escapeKey"
        }) || l;
      E && (E.focus(),
        E === l && ia({
          focusedMenuBtn: t,
          timeouts: a,
          el: E
        })),
        p.closedByEvents = !0,
        n(!1)
    }
    , zr = e => {
      const t = e.target;
      Pr !== t && Ve(ee, n => {
        const { menuPopupEl: r } = n;
        return r.contains(t) ? (Pr = t,
          null) : n
      }
        , n => {
          const { setOpen: r, focusElementOnClose: i, menuBtnEls: o } = n
            , S = me(o);
          p.closedByEvents = !0,
            r(!1);
          const a = Oe({}, {
            inputElement: i,
            type: "focusElementOnClose",
            subType: "scrolling"
          }) || S;
          a && a.focus()
        }
      )
    }
    , UR = e => {
      Pr = null,
        !mr && e && (mr = !1,
          window.addEventListener("wheel", zr, {
            capture: !0,
            passive: !0
          }),
          document.body.addEventListener("touchmove", ta)),
        !ee.length && (document.addEventListener("keydown", ea),
          window.addEventListener("blur", qS))
    }
    , Ji = () => {
      ee.length || (mr = !1,
        p.addedDocumentClick = !1,
        window.clearTimeout(p.documentClickTimeout),
        p.documentClickTimeout = null,
        document.removeEventListener("keydown", ea),
        document.removeEventListener("click", mt),
        window.removeEventListener("blur", qS),
        window.removeEventListener("wheel", zr, {
          capture: !0
        }),
        document.body.removeEventListener("touchmove", ta))
    }
    , ta = () => {
      cr || (cr = !0,
        document.body.addEventListener("touchend", () => {
          cr = !1
        }
          , {
            once: !0
          }),
        window.addEventListener("scroll", zr, {
          capture: !0,
          passive: !0,
          once: !0
        }))
    }
    , gR = e => {
      const t = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"]
        , n = ["ArrowLeft", "ArrowRight"];
      if (!t.includes(e.key) || (e.preventDefault(),
        n.includes(e.key)))
        return;
      const { menuBtnEls: r, menuPopupEl: i, containerEl: o, focusSentinelBeforeEl: S } = ee[ee.length - 1]
        , a = me(r);
      let l = document.activeElement, E;
      e.key === "ArrowDown" ? E = "forwards" : E = "backwards",
        (l === a || l === i || l === o) && (E = "forwards",
          l = S);
      const s = ke({
        from: l,
        direction: E,
        stopAtElement: i
      });
      s && s.focus()
    }
    , na = () => {
      if (document.visibilityState === "visible" && ft != null) {
        ra();
        return
      }
      clearTimeout(ft)
    }
    , ra = () => {
      const t = () => {
        const n = document.activeElement;
        if (!!n) {
          if (Dn === n) {
            ft = window.setTimeout(t, 250);
            return
          }
          Ve(ee, r => {
            const { containerEl: i } = r;
            if (n.tagName === "IFRAME") {
              if (i && !i.contains(n))
                return r;
              Dn = n,
                ft = window.setTimeout(t, 250)
            }
          }
            , r => {
              const { setOpen: i } = r;
              p.closedByEvents = !0,
                i(!1),
                Dn = null,
                ft = null,
                document.removeEventListener("visibilitychange", na)
            }
          )
        }
      }
        ;
      ft = window.setTimeout(t, 250)
    }
    , mR = (e, t) => {
      const { containerEl: n, setOpen: r, onClickDocumentRef: i } = e;
      n.contains(t.target) || (p.closedByEvents = !0,
        r(!1),
        e.prevFocusedEl = null,
        e.addedFocusOutAppEvents = !1,
        document.removeEventListener("click", i))
    }
    , PR = (e, t) => {
      const { containerEl: n, setOpen: r, onFocusFromOutsideAppOrTabRef: i } = e;
      if (!!n) {
        if (n.contains(t.target)) {
          e.addedFocusOutAppEvents = !1,
            e.prevFocusedEl && e.prevFocusedEl.removeEventListener("focus", i),
            e.prevFocusedEl = null;
          return
        }
        e.prevFocusedEl && e.prevFocusedEl.removeEventListener("focus", i),
          e.prevFocusedEl = null,
          p.closedByEvents = !0,
          r(!1),
          e.addedFocusOutAppEvents = !1
      }
    }
    , Mr = e => {
      const { onFocusFromOutsideAppOrTabRef: t, onClickDocumentRef: n } = e;
      !e.prevFocusedEl || (e.prevFocusedEl.removeEventListener("focus", t),
        document.removeEventListener("click", n),
        e.prevFocusedEl = null,
        e.addedFocusOutAppEvents = !1)
    }
    ;
  let Nt = !1;
  const MR = (e, t) => {
    const { timeouts: n, closeWhenMenuButtonIsClicked: r, focusedMenuBtn: i, onClickOutsideMenuButtonRef: o, setOpen: S, open: a } = e
      , l = t.currentTarget;
    if (p.focusedMenuBtns.forEach(E => E.el = null),
      document.removeEventListener("click", o),
      setTimeout(() => {
        document.addEventListener("click", o, {
          once: !0
        })
      }
      ),
      e.menuBtnKeyupTabFired = !1,
      Nt && !a()) {
      Nt = !1;
      return
    }
    if (Nt = !1,
      p.addedDocumentClick = !1,
      document.removeEventListener("click", mt),
      l.focus(),
      i.el = l,
      p.focusedMenuBtns.add(i),
      clearTimeout(n.containerFocusTimeoutId),
      clearTimeout(n.menuButtonBlurTimeoutId),
      n.containerFocusTimeoutId = null,
      a() || (l.addEventListener("focus", e.onFocusMenuButtonRef, {
        once: !0
      }),
        l.addEventListener("keydown", e.onKeydownMenuButtonRef),
        l.addEventListener("blur", e.onBlurMenuButtonRef)),
      !r) {
      S(!0);
      return
    }
    a() && (p.closedByEvents = !0),
      S(!a())
  }
    , yR = (e, t) => {
      const { containerEl: n, focusedMenuBtn: r, overlay: i, setOpen: o, timeouts: S, closeWhenMenuButtonIsClicked: a } = e;
      if (e.menuBtnKeyupTabFired) {
        e.menuBtnKeyupTabFired = !1;
        return
      }
      if (Nt && !a)
        return;
      if (!t.relatedTarget) {
        i || p.addedDocumentClick || (p.addedDocumentClick = !0,
          document.addEventListener("click", mt, {
            once: !0
          }));
        return
      }
      if (Mr(e),
        !n || n.contains(t.relatedTarget))
        return;
      const l = () => {
        p.closedByEvents = !0,
          r.el = null,
          o(!1)
      }
        ;
      S.menuButtonBlurTimeoutId = window.setTimeout(l)
    }
    , YR = (e, t) => {
      const n = t.currentTarget;
      if (!e.open()) {
        Ve(ee, r => {
          if (!r.containerEl.contains(n))
            return r
        }
          , r => {
            p.focusedMenuBtns.forEach(i => i.el = null),
              p.closedByEvents = !0,
              r.setOpen(!1)
          }
        ),
          Nt = !1;
        return
      }
      Nt = !0
    }
    , BR = e => {
      e.focusedMenuBtn.el = null
    }
    , HR = (e, t) => {
      const { containerEl: n, setOpen: r, open: i, onKeydownMenuButtonRef: o, onBlurMenuButtonRef: S, mount: a, focusSentinelBeforeEl: l, focusSentinelAfterEl: E } = e
        , s = t.currentTarget;
      if (t.key !== "Tab" || (p.focusedMenuBtns.forEach(c => c.el = null),
        !i()))
        return;
      if (e.menuBtnKeyupTabFired = !0,
        t.key === "Tab" && t.shiftKey) {
        if (p.closedByEvents = !0,
          !a || s.nextElementSibling !== n) {
          t.preventDefault();
          let c = ke({
            from: s,
            direction: "backwards",
            ignoreElement: [n, l, E]
          });
          c && c.focus()
        }
        r(!1),
          s.removeEventListener("keydown", o),
          s.removeEventListener("blur", S);
        return
      }
      t.preventDefault();
      let u = ke({
        from: l,
        stopAtElement: n
      });
      u ? u.focus() : n.focus(),
        u || (r(!1),
          u = ke({
            from: l
          }),
          u && u.focus()),
        s.removeEventListener("keydown", o),
        s.removeEventListener("blur", S)
    }
    , GR = e => {
      const { closeWhenMenuButtonIsTabbed: t, timeouts: n } = e;
      t || clearTimeout(n.containerFocusTimeoutId)
    }
    , me = e => e.length <= 1 ? e[0] : e.find(t => {
      if (!(!t || yr(t)))
        return t
    }
    )
    , ia = ({ focusedMenuBtn: e, timeouts: t, el: n }) => {
      e.el = n,
        n.addEventListener("blur", r => {
          const i = r.currentTarget;
          p.focusedMenuBtns.add(e),
            setTimeout(() => {
              !i.isConnected || (e.el = null)
            }
            )
        }
          , {
            once: !0
          })
    }
    , oa = (e, t) => {
      !e || !e.menuBtnEls || e.menuBtnEls.forEach(n => {
        n.removeEventListener("focus", e.onFocusMenuButtonRef),
          n.removeEventListener("blur", e.onBlurMenuButtonRef),
          t && (n.removeEventListener("click", e.onClickMenuButtonRef),
            n.removeEventListener("mousedown", e.onMouseDownMenuButtonRef))
      }
      )
    }
    , Ve = (e, t, n) => {
      for (let r = e.length - 1; r >= 0; r--) {
        const i = t(e[r]);
        if (i) {
          n(i);
          continue
        }
        return
      }
    }
    , bR = e => e.replace(/-./g, t => t.toUpperCase()[1])
    , pR = ({ parent: e, matchEl: t }) => {
      if (e === t)
        return !0;
      const n = r => {
        if (!r)
          return !1;
        const i = r.children[0];
        return i === t ? !0 : n(i)
      }
        ;
      return n(e)
    }
    , Oe = (e, { inputElement: t, type: n, subType: r }) => {
      var i;
      if (t === "menuPopup")
        return e.menuPopupEl;
      if (t === "menuButton")
        return me(e.menuBtnEls);
      if (n === "focusElementOnOpen")
        return t === "firstChild" ? ke({
          from: e.focusSentinelBeforeEl,
          stopAtElement: e.containerEl
        }) : typeof t == "string" ? (i = e.containerEl) == null ? void 0 : i.querySelector(t) : t instanceof Element ? t : t();
      if (t == null && n === "menuPopup")
        return e.containerEl ? e.menuPopupEl ? e.menuPopupEl : e.containerEl.children[1] : null;
      if (typeof t == "string" && n === "menuButton" || typeof t == "string")
        return document.querySelector(t);
      if (t instanceof Element)
        return t;
      if (typeof t == "function") {
        const o = t();
        if (o instanceof Element)
          return o;
        if (n === "closeButton")
          return e.containerEl ? e.containerEl.querySelector(o) : null
      }
      if (n === "focusElementOnClose") {
        if (!t)
          return null;
        switch (r) {
          case "tabForwards":
            return Oe(e, {
              inputElement: t.tabForwards
            });
          case "tabBackwards":
            return Oe(e, {
              inputElement: t.tabBackwards
            });
          case "click":
            return Oe(e, {
              inputElement: t.click
            });
          case "escapeKey":
            return Oe(e, {
              inputElement: t.escapeKey
            });
          case "scrolling":
            return Oe(e, {
              inputElement: t.scrolling
            })
        }
      }
      if (t == null)
        return null;
      if (Array.isArray(t))
        return t.map(o => Oe(e, {
          inputElement: o,
          type: n
        }));
      for (const o in t) {
        const S = t[o];
        return Oe(e, {
          inputElement: S
        })
      }
      return null
    }
    , yr = e => e.offsetHeight === 0 && e.offsetWidth === 0
    , KR = e => {
      const { menuPopup: t } = e;
      e.menuPopupAdded || (e.menuPopupEl = Oe(e, {
        inputElement: t,
        type: "menuPopup"
      }),
        e.menuPopupEl && (e.menuPopupAdded = !0,
          e.menuPopupEl.setAttribute("tabindex", "-1")))
    }
    , zi = e => {
      !e.menuPopupEl || !e.menuPopupAdded || (e.menuPopupEl = null,
        e.menuPopupAdded = !1)
    }
    , Qi = e => {
      const { useShadow: t } = e
        , n = e.marker || document.createTextNode("")
        , r = e.mount || document.body;
      function i() {
        if (ge.context) {
          const [l, E] = J(!1);
          return queueMicrotask(() => E(!0)),
            () => l() && e.popupChildren
        } else
          return () => e.popupChildren
      }
      const o = document.createElement("div")
        , S = t && o.attachShadow ? o.attachShadow({
          mode: "open"
        }) : o;
      Object.defineProperty(o, "host", {
        get() {
          return n.parentNode
        }
      }),
        O(S, i());
      const a = e.overlayChildren;
      return a && o.insertAdjacentElement("afterbegin", a),
        r.appendChild(o),
        e.ref && e.ref(o),
        e.onCreate != null && e.onCreate(r, o, n),
        e.stopComponentEventPropagation ? null : n
    }
    , wR = e => {
      let t;
      const [n, r] = J()
        , i = Hr(() => e.children)
        , { onBeforeEnter: o, onEnter: S, onAfterEnter: a, onBeforeExit: l, onExit: E, onAfterExit: s, appendToElement: u } = e;
      function c(f) {
        const T = e.name || "s"
          , C = bR(f) + "Class"
          , D = e[C];
        return D ? D.split(" ") : [`${T}-${f}`]
      }
      const A = f => u ? u === "menuPopup" ? Oe({
        containerEl: f
      }, {
        inputElement: null,
        type: "menuPopup"
      }) : typeof u == "string" ? f.querySelector(u) : u : f;
      function R(f, T) {
        const C = c("enter")
          , D = c("enter-active")
          , L = c("enter-to")
          , U = A(f);
        o && o(U),
          U.classList.add(...C),
          U.classList.add(...D),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              U.classList.remove(...C),
                U.classList.add(...L),
                S && S(U, d),
                (!S || S.length < 2) && (U.addEventListener("transitionend", d, {
                  once: !0
                }),
                  U.addEventListener("animationend", d, {
                    once: !0
                  }))
            }
            )
          }
          );
        function d() {
          U && (U.classList.remove(...D),
            U.classList.remove(...L),
            n() !== f && r(f),
            a && a(U))
        }
        r(f)
      }
      function I(f) {
        const T = c("exit")
          , C = c("exit-active")
          , D = c("exit-to")
          , L = A(f);
        if (!f.parentNode)
          return U();
        l && l(f),
          L.classList.add(...T),
          L.classList.add(...C),
          requestAnimationFrame(() => {
            L.classList.remove(...T),
              L.classList.add(...D)
          }
          ),
          E && E(L, U),
          (!E || E.length < 2) && (L.addEventListener("transitionend", U, {
            once: !0
          }),
            L.addEventListener("animationend", U, {
              once: !0
            }));
        function U() {
          L.classList.remove(...C),
            L.classList.remove(...D),
            n() === f && r(void 0),
            s && s(L)
        }
      }
      return pn(f => {
        for (t = i(); typeof t == "function";)
          t = t();
        return Ke(() => (t && t !== f && R(t),
          f && f !== t && I(f),
          t))
      }
      ),
        [n]
    }
    , ji = (e, { onCleanup: t = !1 } = {}) => {
      document.removeEventListener("click", e.onClickDocumentRef),
        oa(e, t)
    }
    , FR = (e, t) => {
      const { overlay: n, overlayElement: r, open: i, mount: o, setOpen: S, timeouts: a, stopComponentEventPropagation: l, focusedMenuBtn: E } = e
        , s = t.relatedTarget;
      if (!n && !r && !!i() && !p.closedBySetOpen) {
        if (o && l) {
          p.addedDocumentClick || (p.addedDocumentClick = !0,
            document.addEventListener("click", mt, {
              once: !0
            }));
          return
        }
        if (!s) {
          if (ee.find(u => u.overlay))
            return;
          p.addedDocumentClick || (p.addedDocumentClick = !0,
            document.addEventListener("click", mt, {
              once: !0
            }));
          return
        }
        a.containerFocusTimeoutId = window.setTimeout(() => {
          p.closedByEvents = !0,
            S(!1)
        }
        )
      }
    }
    , xR = (e, t) => {
      const { timeouts: n } = e;
      clearTimeout(n.containerFocusTimeoutId),
        clearTimeout(n.menuButtonBlurTimeoutId),
        n.containerFocusTimeoutId = null
    }
    , WR = e => {
      const { focusElementOnOpen: t, focusedMenuBtn: n } = e;
      if (t == null)
        return;
      const r = Oe(e, {
        inputElement: t,
        type: "focusElementOnOpen"
      });
      r && setTimeout(() => {
        r.focus(),
          n.el = null
      }
      )
    }
    , _R = e => {
      const { closeWhenOverlayClicked: t, menuPopupEl: n, focusElementOnClose: r, menuBtnEls: i } = e;
      if (!t) {
        n.focus();
        return
      }
      const o = me(i)
        , S = Oe(e, {
          inputElement: r,
          type: "focusElementOnClose",
          subType: "click"
        }) || o;
      S && S.focus(),
        Ve(ee, a => {
          if (!a.overlayElement)
            return a
        }
          , a => {
            const { setOpen: l } = a;
            p.closedByEvents = !0,
              l(!1)
          }
        ),
        p.closedByEvents = !0,
        e.setOpen(!1)
    }
    , $R = e => {
      const { enableLastFocusSentinel: t, menuBtnEls: n, containerEl: r, focusSentinelAfterEl: i } = e;
      if (t)
        return;
      const S = me(n).nextElementSibling;
      pR({
        parent: S,
        matchEl: r
      }) || i.setAttribute("tabindex", "0")
    }
    , qi = (e, t, n) => {
      const { uniqueId: r, containerEl: i, menuBtnEls: o, focusSentinelBeforeEl: S, trapFocus: a, focusSentinelAfterEl: l, closeWhenMenuButtonIsTabbed: E, focusElementOnClose: s, mount: u, open: c, setOpen: A } = e
        , R = me(o);
      ee.forEach(T => window.clearTimeout(T.timeouts.containerFocusTimeoutId));
      const I = (T, C) => {
        Ve(ee, D => {
          if (C && me(D.menuBtnEls) === T && !D.closeWhenMenuButtonIsTabbed) {
            R.addEventListener("focus", e.onFocusMenuButtonRef, {
              once: !0
            }),
              R.addEventListener("keydown", e.onKeydownMenuButtonRef),
              R.addEventListener("blur", e.onBlurMenuButtonRef, {
                once: !0
              });
            return
          }
          if (D.uniqueId === r || !D.containerEl.contains(T))
            return D
        }
          , D => {
            p.closedByEvents = !0,
              D.setOpen(!1)
          }
        ),
          T && T.focus()
      }
        ;
      if (!c())
        return;
      if (n === i || n === R) {
        ke({
          from: S,
          stopAtElement: i
        }).focus();
        return
      }
      if (t === "before") {
        if (a) {
          ke({
            from: l,
            direction: "backwards",
            stopAtElement: i
          }).focus();
          return
        }
        if (E) {
          p.closedByEvents = !0,
            A(!1),
            R.focus();
          return
        }
        const T = Oe(e, {
          inputElement: s,
          type: "focusElementOnClose",
          subType: "tabBackwards"
        }) || R;
        I(T, !0);
        return
      }
      if (a) {
        ke({
          from: S,
          stopAtElement: i
        }).focus();
        return
      }
      const f = Oe(e, {
        inputElement: s,
        type: "focusElementOnClose",
        subType: "tabForwards"
      }) || ke({
        from: R,
        ignoreElement: [i]
      });
      if (u) {
        I(f);
        return
      }
      f && f.focus(),
        p.closedByEvents = !0,
        A(!1)
    }
    , kR = y('<div role="presentation"></div>')
    , VR = y('<div><div style="position: fixed; top: 0; left: 0; outline: none; pointer-events: none; width: 0; height: 0;" aria-hidden="true"></div><div style="position: fixed; top: 0; left: 0; outline: none; pointer-events: none; width: 0; height: 0;" aria-hidden="true"></div></div>')
    , ZR = e => {
      const t = e.modal || !1
        , { id: n, menuButton: r, menuPopup: i, focusElementOnClose: o, focusElementOnOpen: S, cursorKeys: a = !1, closeWhenMenuButtonIsTabbed: l = !1, closeWhenMenuButtonIsClicked: E = !0, closeWhenScrolling: s = !1, closeWhenDocumentBlurs: u = !1, closeWhenOverlayClicked: c = !0, closeWhenEscapeKeyIsPressed: A = !0, overlay: R = t, overlayElement: I = t, trapFocus: f = t, removeScrollbar: T = t, enableLastFocusSentinel: C = !1, mount: D = t ? "body" : void 0, show: L = !1, onOpen: U } = e
        , d = {
          mount: D,
          addedFocusOutAppEvents: !1,
          closeWhenOverlayClicked: c,
          closeWhenDocumentBlurs: u,
          closeWhenEscapeKeyIsPressed: A,
          closeWhenMenuButtonIsClicked: E,
          closeWhenMenuButtonIsTabbed: l,
          closeWhenScrolling: s,
          cursorKeys: a,
          focusElementOnClose: o,
          focusElementOnOpen: S,
          id: n,
          uniqueId: Ga(),
          menuBtnId: "",
          focusedMenuBtn: {
            el: null
          },
          menuBtnKeyupTabFired: !1,
          menuButton: r,
          timeouts: {
            containerFocusTimeoutId: null,
            menuButtonBlurTimeoutId: null
          },
          upperStackRemovedByFocusOut: !1,
          menuPopup: i,
          closeByDismissEvent: !1,
          menuPopupAdded: !1,
          enableLastFocusSentinel: C,
          overlay: R,
          overlayElement: I,
          removeScrollbar: T,
          trapFocus: f,
          hasFocusSentinels: !!o || R || !!I || f || C,
          open: e.open,
          setOpen: e.setOpen,
          onClickOutsideMenuButtonRef: () => BR(d),
          onClickDocumentRef: v => PR(d, v),
          onClickOverlayRef: () => _R(d),
          onFocusInContainerRef: v => xR(d),
          onFocusOutContainerRef: v => FR(d, v),
          onBlurMenuButtonRef: v => yR(d, v),
          onClickMenuButtonRef: v => MR(d, v),
          onMouseDownMenuButtonRef: v => YR(d, v),
          onFocusFromOutsideAppOrTabRef: v => mR(d, v),
          onFocusMenuButtonRef: () => GR(d),
          onKeydownMenuButtonRef: v => HR(d, v),
          refContainerCb: v => {
            if (I && (v.style.zIndex = "1000",
              t)) {
              v.style.pointerEvents = "none",
                v.style.position = "relative";
              const m = G => {
                G.style.pointerEvents = "all"
              }
                ;
              requestAnimationFrame(() => {
                const G = v.querySelector('[role="dialog"]');
                if (!G) {
                  const w = v.children;
                  if (!w)
                    return;
                  const ie = w[1].firstElementChild;
                  m(ie);
                  return
                }
                m(G)
              }
              )
            }
            e.ref && e.ref(v),
              d.containerEl = v
          }
          ,
          refOverlayCb: v => {
            v.style.position = "fixed",
              v.style.top = "0",
              v.style.left = "0",
              v.style.width = "100%",
              v.style.height = "100%",
              v.style.zIndex = "1000",
              typeof I == "object" && I.ref && I.ref(v),
              d.overlayEl = v
          }
        };
      let P = D ? document.createTextNode("") : null;
      const h = !e.open();
      let N, B, x, W, z, re, te = !1;
      function Ae(v, m) {
        return I && (v = v.nextElementSibling),
          m ? m === "menuPopup" ? Oe({
            containerEl: v
          }, {
            inputElement: null,
            type: "menuPopup"
          }) : typeof m == "string" ? v.querySelector(m) : m : v
      }
      function ue(v, m) {
        if (v === "overlay" && (!e.overlay || !e.overlay.animation))
          return;
        const G = v === "popup" ? e.animation : e.overlay.animation;
        if (!G || !G.appear && !h)
          return;
        te = !1,
          m = Ae(m, G.appendToElement);
        const w = G.name;
        let { onBeforeEnter: Z, onEnter: ie, onAfterEnter: ce, enterActiveClass: ae = w + "-enter-active", enterClass: Fe = w + "-enter", enterToClass: xe = w + "-enter-to", exitActiveClass: We = w + "-exit-active", exitClass: _e = w + "-exit", exitToClass: At = w + "-exit-to" } = G;
        const $e = Fe.split(" ")
          , Xn = ae.split(" ")
          , qr = xe.split(" ")
          , ua = _e.split(" ")
          , Oa = We.split(" ")
          , Ra = At.split(" ");
        v === "popup" ? (m.removeEventListener("transitionend", x),
          m.removeEventListener("animationend", x)) : (m.removeEventListener("transitionend", z),
            m.removeEventListener("animationend", z)),
          Z && Z(m),
          m.classList.remove(...ua, ...Oa, ...Ra),
          m.classList.add(...$e),
          m.classList.add(...Xn),
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              m.classList.remove(...$e),
                m.classList.add(...qr),
                ie && ie(m, Yt),
                (!ie || ie.length < 2) && (v === "popup" ? W = Yt : re = Yt,
                  m.addEventListener("transitionend", Yt, {
                    once: !0
                  }),
                  m.addEventListener("animationend", Yt, {
                    once: !0
                  }))
            }
            )
          }
          );
        function Yt() {
          m && (m.classList.remove(...Xn),
            m.classList.remove(...qr),
            ce && ce(m))
        }
      }
      function b(v, m) {
        if (!e.animation) {
          B == null || B.removeChild(N),
            N = null,
            B = null;
          return
        }
        if (v === "overlay" && (!e.overlay || !e.overlay.animation))
          return;
        const G = v === "popup" ? e.animation : e.overlay.animation;
        te = !0,
          m = Ae(m, G.appendToElement);
        const w = G.name;
        let { onBeforeExit: Z, onExit: ie, onAfterExit: ce, exitActiveClass: ae = w + "-exit-active", exitClass: Fe = w + "-exit", exitToClass: xe = w + "-exit-to" } = G;
        const We = Fe.split(" ")
          , _e = ae.split(" ")
          , At = xe.split(" ");
        if (v === "popup" ? (m.removeEventListener("transitionend", W),
          m.removeEventListener("animationend", W)) : (m.removeEventListener("transitionend", re),
            m.removeEventListener("animationend", re)),
          !m.parentNode)
          return $e();
        Z && Z(m),
          m.classList.add(...We),
          m.classList.add(..._e),
          requestAnimationFrame(() => {
            m.classList.remove(...We),
              m.classList.add(...At)
          }
          ),
          ie && ie(m, $e),
          (!ie || ie.length < 2) && (v === "popup" ? x = $e : z = $e,
            m.addEventListener("transitionend", $e, {
              once: !0
            }),
            m.addEventListener("animationend", $e, {
              once: !0
            }));
        function $e() {
          te = !1,
            B == null || B.removeChild(N),
            p.closedBySetOpen = !1,
            d.menuBtnEls && (R || I) && document.activeElement === document.body && me(d.menuBtnEls).focus(),
            ce && ce(m),
            N = null,
            B = null
        }
      }
      const Re = v => {
        if (!!T && !(ee.length > 1))
          if (v) {
            const m = document.scrollingElement;
            m.style.overflow = "hidden"
          } else {
            const m = document.scrollingElement;
            m.style.overflow = ""
          }
      }
        , Pe = () => {
          var ce;
          const v = document.activeElement;
          if (v !== document.body && d.menuBtnEls.every(ae => v !== ae) && !((ce = d.containerEl) != null && ce.contains(v)))
            return;
          const { menuBtnEls: m, focusedMenuBtn: G, timeouts: w } = d
            , Z = me(m)
            , ie = Oe(d, {
              inputElement: o,
              type: "focusElementOnClose",
              subType: "click"
            }) || Z;
          ie && (ie.focus(),
            ie === Z && ia({
              focusedMenuBtn: G,
              timeouts: w,
              el: ie
            }))
        }
        , $ = () => {
          var m;
          if (p.closedByEvents)
            return;
          const v = document.activeElement;
          if (d.menuBtnEls.every(G => v !== G) && !((m = d.containerEl) != null && m.contains(v))) {
            setTimeout(() => {
              p.closedBySetOpen = !1
            }
            );
            return
          }
          p.closedBySetOpen || (p.addedDocumentClick = !1,
            document.removeEventListener("click", mt),
            p.closedBySetOpen = !0,
            setTimeout(() => {
              p.closedBySetOpen = !1,
                Pe()
            }
            ))
        }
        ;
      se(xt(() => typeof e.menuButton == "function" ? e.menuButton() : e.menuButton, v => {
        if (Array.isArray(v) && !v.length)
          return;
        const { focusedMenuBtn: m } = d
          , G = Oe(d, {
            inputElement: v,
            type: "menuButton"
          });
        if (!G)
          return;
        d.menuBtnEls = Array.isArray(G) ? G : [G],
          d.menuBtnEls.forEach((Z, ie, ce) => {
            m.el && m.el !== Z && (ce.length > 1 ? !yr(Z) : !0) && (m.el = Z,
              Z.focus({
                preventScroll: !0
              }),
              Z.addEventListener("keydown", d.onKeydownMenuButtonRef)),
              Z.setAttribute("type", "button"),
              Z.addEventListener("click", d.onClickMenuButtonRef),
              Z.addEventListener("mousedown", d.onMouseDownMenuButtonRef),
              e.open() && (!d.focusElementOnOpen || d.focusElementOnOpen === "menuButton" || d.focusElementOnOpen === d.menuBtnEls) && !yr(Z) && Z.addEventListener("blur", d.onBlurMenuButtonRef, {
                once: !0
              })
          }
          );
        const w = ee.find(Z => Z.uniqueId === d.uniqueId);
        w && (w.menuBtnEls = d.menuBtnEls),
          we(() => {
            !d || oa(d, !0)
          }
          )
      }
      )),
        L && D && Qi({
          mount: typeof D == "string" ? document.querySelector(D) : D,
          popupChildren: q(e.children),
          overlayChildren: I ? j() : null,
          marker: P,
          onCreate: (v, m) => {
            B = v,
              N = m
          }
        }),
        pn(xt(() => !!e.open(), (v, m) => {
          v !== m && (v || (d.focusSentinelAfterEl && (d.focusSentinelAfterEl.tabIndex = -1),
            $()),
            !(!D || L) && (v ? (B || Qi({
              mount: typeof D == "string" ? document.querySelector(D) : D,
              popupChildren: q(e.children),
              overlayChildren: I ? j() : null,
              marker: P,
              onCreate: (G, w) => {
                B = G,
                  N = w
              }
            }),
              ue("popup", N == null ? void 0 : N.firstElementChild),
              ue("overlay", d.overlayEl)) : (b("popup", N == null ? void 0 : N.firstElementChild),
                b("overlay", d.overlayEl))))
        }
          , {
            defer: h
          })),
        se(xt(() => !!e.open(), (v, m) => {
          v !== m && (v ? (p.closedByEvents = !1,
            KR(d),
            WR(d),
            UR(s),
            hR({
              id: n,
              uniqueId: d.uniqueId,
              open: e.open,
              setOpen: e.setOpen,
              containerEl: d.containerEl,
              menuBtnEls: d.menuBtnEls,
              focusedMenuBtn: d.focusedMenuBtn,
              overlayEl: d.overlayEl,
              menuPopupEl: d.menuPopupEl,
              overlay: R,
              closeWhenDocumentBlurs: u,
              closeWhenEscapeKeyIsPressed: A,
              closeWhenMenuButtonIsTabbed: l,
              overlayElement: I,
              cursorKeys: a,
              focusElementOnClose: o,
              focusSentinelBeforeEl: d.focusSentinelBeforeEl,
              upperStackRemovedByFocusOut: !1,
              detectIfMenuButtonObscured: !1,
              queueRemoval: !1,
              timeouts: d.timeouts
            }),
            Re(v),
            U && U(v, {
              uniqueId: d.uniqueId,
              dismissStack: ee
            }),
            $R(d)) : (p.closedByEvents = !1,
              ji(d),
              Mr(d),
              zi(d),
              Xi(d.uniqueId),
              Ji(),
              Re(v),
              U && U(v, {
                uniqueId: d.uniqueId,
                dismissStack: ee
              })))
        }
          , {
            defer: h
          })),
        we(() => {
          ji(d, {
            onCleanup: !0
          }),
            zi(d),
            Mr(d),
            Xi(d.uniqueId),
            Ji(),
            !L && D && B && !te && (b("popup", N == null ? void 0 : N.firstElementChild),
              b("overlay", d.overlayEl))
        }
        );
      function j() {
        return (() => {
          const v = kR.cloneNode(!0)
            , m = d.refOverlayCb;
          return typeof m == "function" ? m(v) : d.refOverlayCb = v,
            fe(v, "click", d.onClickOverlayRef, !0),
            H(G => {
              const w = typeof e.overlayElement == "object" ? e.overlayElement.class : void 0
                , Z = typeof e.overlayElement == "object" ? e.overlayElement.classList || {} : {};
              return w !== G._v$ && (v.className = G._v$ = w),
                G._v$2 = ye(v, Z, G._v$2),
                G
            }
              , {
                _v$: void 0,
                _v$2: void 0
              }),
            v
        }
        )()
      }
      function q(v) {
        return (() => {
          const m = VR.cloneNode(!0)
            , G = m.firstChild
            , w = G.nextSibling
            , Z = d.refContainerCb;
          typeof Z == "function" ? Z(m) : d.refContainerCb = m,
            fe(m, "focusout", d.onFocusOutContainerRef, !0),
            fe(m, "focusin", d.onFocusInContainerRef, !0);
          const ie = d.focusSentinelBeforeEl;
          typeof ie == "function" ? ie(G) : d.focusSentinelBeforeEl = G,
            G.addEventListener("focus", ae => {
              qi(d, "before", ae.relatedTarget)
            }
            ),
            O(m, v, w);
          const ce = d.focusSentinelAfterEl;
          return typeof ce == "function" ? ce(w) : d.focusSentinelAfterEl = w,
            w.addEventListener("focus", () => {
              qi(d, "after")
            }
            ),
            H(ae => {
              const Fe = d.id
                , xe = e.class
                , We = e.classList || {}
                , _e = e.open() ? "0" : "-1"
                , At = e.open() && d.hasFocusSentinels ? "0" : "-1";
              return Fe !== ae._v$3 && M(m, "id", ae._v$3 = Fe),
                xe !== ae._v$4 && (m.className = ae._v$4 = xe),
                ae._v$5 = ye(m, We, ae._v$5),
                _e !== ae._v$6 && M(G, "tabindex", ae._v$6 = _e),
                At !== ae._v$7 && M(w, "tabindex", ae._v$7 = At),
                ae
            }
              , {
                _v$3: void 0,
                _v$4: void 0,
                _v$5: void 0,
                _v$6: void 0,
                _v$7: void 0
              }),
            m
        }
        )()
      }
      if (D)
        return P;
      if (L)
        return q(e.children);
      let Se = !1;
      const k = Y(() => e.open(), void 0, {
        equals: (v, m) => Se ? v === m : !v == !m
      })
        , ne = Y(() => {
          const v = k();
          if (v) {
            const m = e.children;
            return (Se = typeof m == "function" && m.length > 0) ? Ke(() => m(v)) : q(m)
          }
        }
        );
      return e.animation ? g(wR, Zt(() => e.animation, {
        get name() {
          return e.animation.name
        },
        get enterClass() {
          return e.animation.enterClass
        },
        get enterActiveClass() {
          return e.animation.enterActiveClass
        },
        get enterToClass() {
          return e.animation.enterToClass
        },
        get exitClass() {
          return e.animation.exitClass
        },
        get exitActiveClass() {
          return e.animation.exitActiveClass
        },
        get exitToClass() {
          return e.animation.exitToClass
        },
        get appear() {
          return e.animation.appear
        },
        get children() {
          return ne()
        }
      })) : ne
    }
    ;
  Ye(["click", "focusin", "focusout"]);
  const XR = y('<a class="p-3 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all rounded" target="_blank"></a>')
    , JR = y('<div id="options-dropdown" class="absolute flex flex-col bg-gray-100 dark:bg-gray-800 text-black dark:text-white z-20 right-4 rounded-lg border-2 border-gray-400"><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all my-4" aria-controls="settings-panel"><div class="mr-3 text-black dark:text-white"></div></button><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4" aria-controls="statistics-panel"><div class="mr-3 text-black dark:text-white"></div></button><button type="button" class="flex flex-row-reverse items-center px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4" aria-controls="achievements-panel"><div class="mr-3 text-black dark:text-white"></div></button><button type="button" class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><a class="flex flex-row-reverse items-center" href="https://www.buymeacoffee.com/quordle" target="_blank"><div class="mr-3 text-black dark:text-white"></div></a></button><button type="button" class="px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all mb-4"><a class="flex flex-row-reverse items-center" href="https://www.patreon.com/quordle" target="_blank"><div class="mr-3 text-black dark:text-white"></div></a></button><div class="m-4 flex flex-row-reverse justify-center items-center"></div></div>')
    , zR = y('<nav class="bg-slate-300 dark:bg-gray-900 w-screen border-b-2 border-white dark:border-gray-800"><div class="flex items-center max-w-[550px] m-auto px-4 py-2 relative"><span class="mx-3 text-black dark:text-white"></span><div class="flex flex-grow-0 flex-shrink-1 overflow-auto"></div><div class="flex flex-1 justify-end items-center ml-2"><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white transition-colors" aria-controls="tutorial-panel"></button><button type="button" class="bg-indigo-500 dark:bg-gray-800 p-1 rounded-full text-white hover:text-gray-200 dark:text-gray-400 dark:hover:text-white ml-2 transition" aria-controls="options-dropdown"></button></div></div></nav>')
    , pt = e => (() => {
      const t = XR.cloneNode(!0);
      return fe(t, "click", e.onClick, !0),
        O(t, g(e.iconComponent, {
          class: "h-5 w-auto rounded-sm ring-1 ring-black dark:ring-white"
        })),
        H(n => {
          const r = `https://${e.lang === "en" ? "www" : e.lang}.quordle.com`
            , i = e.ariaLabel;
          return r !== n._v$ && M(t, "href", n._v$ = r),
            i !== n._v$2 && M(t, "aria-label", n._v$2 = i),
            n
        }
          , {
            _v$: void 0,
            _v$2: void 0
          }),
        t
    }
    )()
    , QR = e => {
      const t = K()
        , [n, r] = Te()
        , [i] = Bo()
        , o = Y(() => i.overlay === "tutorial")
        , S = Y(() => i.overlay === "statistics")
        , a = Y(() => i.overlay === "settings")
        , l = Y(() => i.overlay === "achievements")
        , [E, s] = J(!1)
        , [u, c] = J();
      return (() => {
        const A = zR.cloneNode(!0)
          , R = A.firstChild
          , I = R.firstChild
          , f = I.nextSibling
          , T = f.nextSibling
          , C = T.firstChild
          , D = C.nextSibling;
        return O(R, g(UO, {
          get colorblind() {
            return n.colorblind
          }
        }), I),
          O(I, () => t.t("header.title")),
          O(f, g(Ei, {
            href: "/",
            activeClass: "quordle-nav-active",
            class: "quordle-nav",
            onClick: () => F(n.vibration),
            end: !0,
            get children() {
              return t.t("header.daily")
            }
          }), null),
          O(f, g(Ei, {
            href: "/practice",
            activeClass: "quordle-nav-active",
            class: "quordle-nav ml-2",
            onClick: () => F(n.vibration),
            end: !0,
            get children() {
              return t.t("header.practice")
            }
          }), null),
          fe(C, "click", e.onOpenTutorial, !0),
          O(C, g(GO, {})),
          D.$$click = () => F(n.vibration),
          (L => c(L))(D),
          O(D, g(Zn, {})),
          O(R, g(ZR, {
            class: "z-30",
            menuButton: u,
            open: E,
            setOpen: s,
            animation: {
              name: "quordle-fade"
            },
            get children() {
              const L = JR.cloneNode(!0)
                , U = L.firstChild
                , d = U.firstChild
                , P = U.nextSibling
                , h = P.firstChild
                , N = P.nextSibling
                , B = N.firstChild
                , x = N.nextSibling
                , W = x.firstChild
                , z = W.firstChild
                , re = x.nextSibling
                , te = re.firstChild
                , Ae = te.firstChild
                , ue = re.nextSibling;
              return U.$$click = () => {
                s(!1),
                  e.onOpenSettings()
              }
                ,
                O(U, g(bO, {}), d),
                O(d, () => t.t("header.settings")),
                P.$$click = () => {
                  s(!1),
                    e.onOpenStatistics()
                }
                ,
                O(P, g(VO, {
                  get mode() {
                    return e.mode
                  }
                }), h),
                O(h, (() => {
                  const b = X(() => e.mode === "daily", !0);
                  return () => b() ? t.t("header.dailyStats") : t.t("header.practiceStats")
                }
                )()),
                N.$$click = () => {
                  s(!1),
                    e.onOpenAchievements()
                }
                ,
                O(N, g(ZS, {}), B),
                O(B, () => t.t("header.achievements")),
                x.$$click = () => {
                  F(n.vibration),
                    r.updateDonationTime(),
                    s(!1)
                }
                ,
                O(W, g(kS, {}), z),
                O(z, () => t.t("header.donate")),
                re.$$click = () => {
                  F(n.vibration),
                    s(!1)
                }
                ,
                O(te, g(pO, {}), Ae),
                O(Ae, () => t.t("header.patreon")),
                O(ue, (() => {
                  const b = X(() => t.locale() !== "en", !0);
                  return () => b() && g(pt, {
                    lang: "en",
                    ariaLabel: "English Quordle",
                    onClick: () => {
                      F(n.vibration),
                        s(!1)
                    }
                    ,
                    iconComponent: WO
                  })
                }
                )(), null),
                O(ue, (() => {
                  const b = X(() => t.locale() !== "fr", !0);
                  return () => b() && g(pt, {
                    lang: "fr",
                    ariaLabel: "Quordle Fran\xE7ais",
                    onClick: () => {
                      F(n.vibration),
                        s(!1)
                    }
                    ,
                    iconComponent: KO
                  })
                }
                )(), null),
                O(ue, (() => {
                  const b = X(() => t.locale() !== "es", !0);
                  return () => b() && g(pt, {
                    lang: "es",
                    ariaLabel: "Quordle Espa\xF1ol",
                    onClick: () => {
                      F(n.vibration),
                        s(!1)
                    }
                    ,
                    iconComponent: wO
                  })
                }
                )(), null),
                O(ue, (() => {
                  const b = X(() => t.locale() !== "it", !0);
                  return () => b() && g(pt, {
                    lang: "it",
                    ariaLabel: "Quordle Italiano",
                    onClick: () => {
                      F(n.vibration),
                        s(!1)
                    }
                    ,
                    iconComponent: FO
                  })
                }
                )(), null),
                O(ue, (() => {
                  const b = X(() => t.locale() !== "nl", !0);
                  return () => b() && g(pt, {
                    lang: "nl",
                    ariaLabel: "Quordle Nederlands",
                    onClick: () => {
                      F(n.vibration),
                        s(!1)
                    }
                    ,
                    iconComponent: xO
                  })
                }
                )(), null),
                H(b => {
                  var m;
                  const Re = (((m = u()) == null ? void 0 : m.getBoundingClientRect().bottom) || 0) + 12 + "px"
                    , Pe = a()
                    , $ = t.t("header.aria.openPage", {
                      page: t.t("header.settings")
                    })
                    , j = S()
                    , q = t.t("header.aria.openPage", {
                      page: e.mode === "daily" ? t.t("stats.dailyStatistics") : t.t("stats.practiceStatistics")
                    })
                    , Se = l()
                    , k = t.t("header.aria.openPage", {
                      page: t.t("header.achievements")
                    })
                    , ne = t.t("header.donate")
                    , v = t.t("header.patreon");
                  return Re !== b._v$3 && L.style.setProperty("top", b._v$3 = Re),
                    Pe !== b._v$4 && M(U, "aria-expanded", b._v$4 = Pe),
                    $ !== b._v$5 && M(U, "aria-label", b._v$5 = $),
                    j !== b._v$6 && M(P, "aria-expanded", b._v$6 = j),
                    q !== b._v$7 && M(P, "aria-label", b._v$7 = q),
                    Se !== b._v$8 && M(N, "aria-expanded", b._v$8 = Se),
                    k !== b._v$9 && M(N, "aria-label", b._v$9 = k),
                    ne !== b._v$10 && M(x, "aria-label", b._v$10 = ne),
                    v !== b._v$11 && M(re, "aria-label", b._v$11 = v),
                    b
                }
                  , {
                    _v$3: void 0,
                    _v$4: void 0,
                    _v$5: void 0,
                    _v$6: void 0,
                    _v$7: void 0,
                    _v$8: void 0,
                    _v$9: void 0,
                    _v$10: void 0,
                    _v$11: void 0
                  }),
                L
            }
          }), null),
          H(L => {
            const U = o()
              , d = t.t("header.aria.openPage", {
                page: t.t("header.help")
              })
              , P = E()
              , h = E()
              , N = t.t("header.aria.openMoreOptions");
            return U !== L._v$12 && M(C, "aria-expanded", L._v$12 = U),
              d !== L._v$13 && M(C, "aria-label", L._v$13 = d),
              P !== L._v$14 && D.classList.toggle("rotate-180", L._v$14 = P),
              h !== L._v$15 && M(D, "aria-expanded", L._v$15 = h),
              N !== L._v$16 && M(D, "aria-label", L._v$16 = N),
              L
          }
            , {
              _v$12: void 0,
              _v$13: void 0,
              _v$14: void 0,
              _v$15: void 0,
              _v$16: void 0
            }),
          A
      }
      )()
    }
    ;
  Ye(["click"]);
  const jR = y('<button class="quordle-key border-gray-300 dark:border-gray-700" role="cell"><div class="quordle-box-content"></div></button>')
    , qR = y('<div class="w-full flex-col p-1 pb-1.5 bg-blue-200 dark:bg-cyan-900 rounded-t shadow" role="table"></div>')
    , eI = y('<div class="flex w-full justify-center" role="row"></div>')
    , tI = e => {
      const t = K()
        , [n, r] = Te()
        , i = Y(() => {
          if (e.key === "bs" || e.key === "enter")
            return !1;
          const l = n[e.mode].guesses;
          let E = !1;
          for (let s = 0; s < l.length; s++)
            if (l[s].indexOf(e.key) >= 0) {
              E = !0;
              break
            }
          return E
        }
        )
        , o = Y(() => {
          const l = n[e.mode].guesses
            , E = ["none", "none", "none", "none"];
          for (let s = 0; s < E.length; s++) {
            const u = n[e.mode].states[s];
            if (!(n[e.mode].answersCorrect[s] >= 0))
              for (let c = 0; c < u.length; c++)
                for (let A = 0; A < u[c].length; A++)
                  e.key === l[c][A] && (u[c][A] === "correct" || u[c][A] === "diff") && (u[c][A] === "correct" ? E[s] = "correct" : u[c][A] === "diff" && E[s] !== "correct" && (E[s] = "diff"))
          }
          return E
        }
        )
        , S = Y(() => {
          if (!i() || o().every(s => s === "none"))
            return "";
          const l = {
            none: n.darkMode ? "#9ca3af" : "#d1d5db",
            diff: n.colorblind ? "#60a5fa" : "#ffcc00",
            correct: n.colorblind ? "#fb923c" : "#00cc88"
          }
            , E = o().map(s => l[s]);
          return "background: conic-gradient(" + E[1] + " 0deg 90deg, " + E[3] + " 90deg 180deg, " + E[2] + " 180deg 270deg, " + E[0] + " 270deg 360deg);"
        }
        )
        , a = Y(() => e.key === "bs" ? t.t("game.backspaceKey") : e.key === "enter" ? t.t("game.enterKey") : t.t("game.aria.key", {
          letter: e.key,
          info: i() ? o().every(l => l === "none") && i() ? t.t("game.aria.keyIncorrectAll") : o().map((l, E) => l === "diff" ? t.t("game.aria.keyDiff", {
            board: E + 1
          }) : l === "none" ? t.t("game.aria.keyNone", {
            board: E + 1
          }) : t.t("game.aria.keyCorrect", {
            board: E + 1
          })).join(t.t("game.aria.keyInfoDelimiter")) : t.t("game.aria.keyNotGuessed")
        }));
      return (() => {
        const l = jR.cloneNode(!0)
          , E = l.firstChild;
        return fe(l, "focusout", e.onFocusOut, !0),
          fe(l, "focusin", e.onFocusIn, !0),
          l.$$click = () => {
            F(n.vibration),
              r.sendKey(e.mode, new KeyboardEvent("keydown", {
                keyCode: e.key === "enter" ? 13 : e.key === "bs" ? 8 : n.alphabet.indexOf(e.key) + 65,
                key: e.key === "enter" ? "Enter" : e.key === "bs" ? "Backspace" : e.key
              }))
          }
          ,
          O(E, (() => {
            const s = X(() => e.key === "enter", !0);
            return () => s() ? g(gO, {
              get height() {
                return e.fontSize * .8
              }
            }) : (() => {
              const u = X(() => e.key === "bs", !0);
              return () => u() ? g(mO, {
                get height() {
                  return e.fontSize * .8
                }
              }) : e.key
            }
            )()
          }
          )()),
          H(s => {
            const u = {
              "w-[calc(10%-0.25rem)]": e.key !== "enter" && e.key !== "bs" || e.numKeysInRow === 10,
              "w-[calc(15%-0.5rem)]": (e.key === "enter" || e.key === "bs") && e.numKeysInRow === 9,
              "w-[calc(20%-0.5rem)]": (e.key === "enter" || e.key === "bs") && e.numKeysInRow === 8,
              "w-[calc(25%-0.5rem)]": (e.key === "enter" || e.key === "bs") && e.numKeysInRow === 7,
              "text-black dark:text-black border-gray-400": !!S(),
              "text-black dark:text-white bg-white dark:bg-gray-500": !S() && !i(),
              "text-blue-300 dark:text-cyan-600 bg-blue-100 dark:bg-cyan-800 border-blue-200 dark:border-cyan-900": !S() && i()
            }
              , c = "padding-bottom: calc(" + 10 * n.keyboardHeight + "% - 0.25rem);" + S()
              , A = a();
            return s._v$ = ye(l, u, s._v$),
              s._v$2 = ho(l, c, s._v$2),
              A !== s._v$3 && M(l, "aria-label", s._v$3 = A),
              s
          }
            , {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }),
          l
      }
      )()
    }
    , nI = e => {
      const t = K()
        , [n, r] = Te()
        , [i, o] = J()
        , S = a => {
          e.disableInputCapture || i() && a.key === "Enter" || r.sendKey(e.mode, a) && a.preventDefault()
        }
        ;
      return document.addEventListener("keydown", S),
        we(() => document.removeEventListener("keydown", S)),
        (() => {
          const a = qR.cloneNode(!0);
          return O(a, () => (n.enterBsReversed ? n.keyboardReversed : n.keyboard).map((l, E) => (() => {
            const s = eI.cloneNode(!0);
            return O(s, () => l.map((u, c) => g(tI, {
              get mode() {
                return e.mode
              },
              x: c,
              y: E,
              key: u,
              get numKeysInRow() {
                return l.length
              },
              get fontSize() {
                return e.fontSize
              },
              onFocusIn: () => o(u),
              onFocusOut: () => o(void 0)
            }))),
              H(() => M(s, "aria-label", t.t("game.aria.keyboardRow", {
                row: E + 1
              }))),
              s
          }
          )())),
            H(() => M(a, "aria-label", t.t("game.aria.keyboard"))),
            a
        }
        )()
    }
    ;
  Ye(["click", "focusin", "focusout"]);
  var St = [], rI = function () {
    return St.some(function (e) {
      return e.activeTargets.length > 0
    })
  }, iI = function () {
    return St.some(function (e) {
      return e.skippedTargets.length > 0
    })
  }, eo = "ResizeObserver loop completed with undelivered notifications.", oI = function () {
    var e;
    typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
      message: eo
    }) : (e = document.createEvent("Event"),
      e.initEvent("error", !1, !1),
      e.message = eo),
      window.dispatchEvent(e)
  }, Qt;
  (function (e) {
    e.BORDER_BOX = "border-box",
      e.CONTENT_BOX = "content-box",
      e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
  }
  )(Qt || (Qt = {}));
  var at = function (e) {
    return Object.freeze(e)
  }, SI = function () {
    function e(t, n) {
      this.inlineSize = t,
        this.blockSize = n,
        at(this)
    }
    return e
  }(), Sa = function () {
    function e(t, n, r, i) {
      return this.x = t,
        this.y = n,
        this.width = r,
        this.height = i,
        this.top = this.y,
        this.left = this.x,
        this.bottom = this.top + this.height,
        this.right = this.left + this.width,
        at(this)
    }
    return e.prototype.toJSON = function () {
      var t = this
        , n = t.x
        , r = t.y
        , i = t.top
        , o = t.right
        , S = t.bottom
        , a = t.left
        , l = t.width
        , E = t.height;
      return {
        x: n,
        y: r,
        top: i,
        right: o,
        bottom: S,
        left: a,
        width: l,
        height: E
      }
    }
      ,
      e.fromRect = function (t) {
        return new e(t.x, t.y, t.width, t.height)
      }
      ,
      e
  }(), Qr = function (e) {
    return e instanceof SVGElement && "getBBox" in e
  }, aa = function (e) {
    if (Qr(e)) {
      var t = e.getBBox()
        , n = t.width
        , r = t.height;
      return !n && !r
    }
    var i = e
      , o = i.offsetWidth
      , S = i.offsetHeight;
    return !(o || S || e.getClientRects().length)
  }, to = function (e) {
    var t, n;
    if (e instanceof Element)
      return !0;
    var r = (n = (t = e) === null || t === void 0 ? void 0 : t.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
    return !!(r && e instanceof r.Element)
  }, aI = function (e) {
    switch (e.tagName) {
      case "INPUT":
        if (e.type !== "image")
          break;
      case "VIDEO":
      case "AUDIO":
      case "EMBED":
      case "OBJECT":
      case "CANVAS":
      case "IFRAME":
      case "IMG":
        return !0
    }
    return !1
  }, Vt = typeof window != "undefined" ? window : {}, Rn = new WeakMap, no = /auto|scroll/, EI = /^tb|vertical/, sI = /msie|trident/i.test(Vt.navigator && Vt.navigator.userAgent), He = function (e) {
    return parseFloat(e || "0")
  }, Ct = function (e, t, n) {
    return e === void 0 && (e = 0),
      t === void 0 && (t = 0),
      n === void 0 && (n = !1),
      new SI((n ? t : e) || 0, (n ? e : t) || 0)
  }, ro = at({
    devicePixelContentBoxSize: Ct(),
    borderBoxSize: Ct(),
    contentBoxSize: Ct(),
    contentRect: new Sa(0, 0, 0, 0)
  }), Ea = function (e, t) {
    if (t === void 0 && (t = !1),
      Rn.has(e) && !t)
      return Rn.get(e);
    if (aa(e))
      return Rn.set(e, ro),
        ro;
    var n = getComputedStyle(e)
      , r = Qr(e) && e.ownerSVGElement && e.getBBox()
      , i = !sI && n.boxSizing === "border-box"
      , o = EI.test(n.writingMode || "")
      , S = !r && no.test(n.overflowY || "")
      , a = !r && no.test(n.overflowX || "")
      , l = r ? 0 : He(n.paddingTop)
      , E = r ? 0 : He(n.paddingRight)
      , s = r ? 0 : He(n.paddingBottom)
      , u = r ? 0 : He(n.paddingLeft)
      , c = r ? 0 : He(n.borderTopWidth)
      , A = r ? 0 : He(n.borderRightWidth)
      , R = r ? 0 : He(n.borderBottomWidth)
      , I = r ? 0 : He(n.borderLeftWidth)
      , f = u + E
      , T = l + s
      , C = I + A
      , D = c + R
      , L = a ? e.offsetHeight - D - e.clientHeight : 0
      , U = S ? e.offsetWidth - C - e.clientWidth : 0
      , d = i ? f + C : 0
      , P = i ? T + D : 0
      , h = r ? r.width : He(n.width) - d - U
      , N = r ? r.height : He(n.height) - P - L
      , B = h + f + U + C
      , x = N + T + L + D
      , W = at({
        devicePixelContentBoxSize: Ct(Math.round(h * devicePixelRatio), Math.round(N * devicePixelRatio), o),
        borderBoxSize: Ct(B, x, o),
        contentBoxSize: Ct(h, N, o),
        contentRect: new Sa(u, l, h, N)
      });
    return Rn.set(e, W),
      W
  }, sa = function (e, t, n) {
    var r = Ea(e, n)
      , i = r.borderBoxSize
      , o = r.contentBoxSize
      , S = r.devicePixelContentBoxSize;
    switch (t) {
      case Qt.DEVICE_PIXEL_CONTENT_BOX:
        return S;
      case Qt.BORDER_BOX:
        return i;
      default:
        return o
    }
  }, lI = function () {
    function e(t) {
      var n = Ea(t);
      this.target = t,
        this.contentRect = n.contentRect,
        this.borderBoxSize = at([n.borderBoxSize]),
        this.contentBoxSize = at([n.contentBoxSize]),
        this.devicePixelContentBoxSize = at([n.devicePixelContentBoxSize])
    }
    return e
  }(), la = function (e) {
    if (aa(e))
      return 1 / 0;
    for (var t = 0, n = e.parentNode; n;)
      t += 1,
        n = n.parentNode;
    return t
  }, AI = function () {
    var e = 1 / 0
      , t = [];
    St.forEach(function (S) {
      if (S.activeTargets.length !== 0) {
        var a = [];
        S.activeTargets.forEach(function (E) {
          var s = new lI(E.target)
            , u = la(E.target);
          a.push(s),
            E.lastReportedSize = sa(E.target, E.observedBox),
            u < e && (e = u)
        }),
          t.push(function () {
            S.callback.call(S.observer, a, S.observer)
          }),
          S.activeTargets.splice(0, S.activeTargets.length)
      }
    });
    for (var n = 0, r = t; n < r.length; n++) {
      var i = r[n];
      i()
    }
    return e
  }, io = function (e) {
    St.forEach(function (n) {
      n.activeTargets.splice(0, n.activeTargets.length),
        n.skippedTargets.splice(0, n.skippedTargets.length),
        n.observationTargets.forEach(function (i) {
          i.isActive() && (la(i.target) > e ? n.activeTargets.push(i) : n.skippedTargets.push(i))
        })
    })
  }, cI = function () {
    var e = 0;
    for (io(e); rI();)
      e = AI(),
        io(e);
    return iI() && oI(),
      e > 0
  }, ur, Aa = [], uI = function () {
    return Aa.splice(0).forEach(function (e) {
      return e()
    })
  }, OI = function (e) {
    if (!ur) {
      var t = 0
        , n = document.createTextNode("")
        , r = {
          characterData: !0
        };
      new MutationObserver(function () {
        return uI()
      }
      ).observe(n, r),
        ur = function () {
          n.textContent = "" + (t ? t-- : t++)
        }
    }
    Aa.push(e),
      ur()
  }, RI = function (e) {
    OI(function () {
      requestAnimationFrame(e)
    })
  }, hn = 0, II = function () {
    return !!hn
  }, dI = 250, fI = {
    attributes: !0,
    characterData: !0,
    childList: !0,
    subtree: !0
  }, oo = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"], So = function (e) {
    return e === void 0 && (e = 0),
      Date.now() + e
  }, Or = !1, TI = function () {
    function e() {
      var t = this;
      this.stopped = !0,
        this.listener = function () {
          return t.schedule()
        }
    }
    return e.prototype.run = function (t) {
      var n = this;
      if (t === void 0 && (t = dI),
        !Or) {
        Or = !0;
        var r = So(t);
        RI(function () {
          var i = !1;
          try {
            i = cI()
          } finally {
            if (Or = !1,
              t = r - So(),
              !II())
              return;
            i ? n.run(1e3) : t > 0 ? n.run(t) : n.start()
          }
        })
      }
    }
      ,
      e.prototype.schedule = function () {
        this.stop(),
          this.run()
      }
      ,
      e.prototype.observe = function () {
        var t = this
          , n = function () {
            return t.observer && t.observer.observe(document.body, fI)
          };
        document.body ? n() : Vt.addEventListener("DOMContentLoaded", n)
      }
      ,
      e.prototype.start = function () {
        var t = this;
        this.stopped && (this.stopped = !1,
          this.observer = new MutationObserver(this.listener),
          this.observe(),
          oo.forEach(function (n) {
            return Vt.addEventListener(n, t.listener, !0)
          }))
      }
      ,
      e.prototype.stop = function () {
        var t = this;
        this.stopped || (this.observer && this.observer.disconnect(),
          oo.forEach(function (n) {
            return Vt.removeEventListener(n, t.listener, !0)
          }),
          this.stopped = !0)
      }
      ,
      e
  }(), Yr = new TI, ao = function (e) {
    !hn && e > 0 && Yr.start(),
      hn += e,
      !hn && Yr.stop()
  }, LI = function (e) {
    return !Qr(e) && !aI(e) && getComputedStyle(e).display === "inline"
  }, NI = function () {
    function e(t, n) {
      this.target = t,
        this.observedBox = n || Qt.CONTENT_BOX,
        this.lastReportedSize = {
          inlineSize: 0,
          blockSize: 0
        }
    }
    return e.prototype.isActive = function () {
      var t = sa(this.target, this.observedBox, !0);
      return LI(this.target) && (this.lastReportedSize = t),
        this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize
    }
      ,
      e
  }(), CI = function () {
    function e(t, n) {
      this.activeTargets = [],
        this.skippedTargets = [],
        this.observationTargets = [],
        this.observer = t,
        this.callback = n
    }
    return e
  }(), In = new WeakMap, Eo = function (e, t) {
    for (var n = 0; n < e.length; n += 1)
      if (e[n].target === t)
        return n;
    return -1
  }, dn = function () {
    function e() { }
    return e.connect = function (t, n) {
      var r = new CI(t, n);
      In.set(t, r)
    }
      ,
      e.observe = function (t, n, r) {
        var i = In.get(t)
          , o = i.observationTargets.length === 0;
        Eo(i.observationTargets, n) < 0 && (o && St.push(i),
          i.observationTargets.push(new NI(n, r && r.box)),
          ao(1),
          Yr.schedule())
      }
      ,
      e.unobserve = function (t, n) {
        var r = In.get(t)
          , i = Eo(r.observationTargets, n)
          , o = r.observationTargets.length === 1;
        i >= 0 && (o && St.splice(St.indexOf(r), 1),
          r.observationTargets.splice(i, 1),
          ao(-1))
      }
      ,
      e.disconnect = function (t) {
        var n = this
          , r = In.get(t);
        r.observationTargets.slice().forEach(function (i) {
          return n.unobserve(t, i.target)
        }),
          r.activeTargets.splice(0, r.activeTargets.length)
      }
      ,
      e
  }(), DI = function () {
    function e(t) {
      if (arguments.length === 0)
        throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
      if (typeof t != "function")
        throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
      dn.connect(this, t)
    }
    return e.prototype.observe = function (t, n) {
      if (arguments.length === 0)
        throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
      if (!to(t))
        throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
      dn.observe(this, t, n)
    }
      ,
      e.prototype.unobserve = function (t) {
        if (arguments.length === 0)
          throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!to(t))
          throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        dn.unobserve(this, t)
      }
      ,
      e.prototype.disconnect = function () {
        dn.disconnect(this)
      }
      ,
      e.toString = function () {
        return "function ResizeObserver () { [polyfill code] }"
      }
      ,
      e
  }();
  function ca(e) {
    const [t, n] = J([])
      , r = S => n(a => a.concat(S))
      , i = new Map
      , o = new DI(S => {
        if (!!Array.isArray(S))
          for (const a of S) {
            const l = Math.round(a.contentRect.width)
              , E = Math.round(a.contentRect.height)
              , s = i.get(a.target);
            if (!s || s.width !== l || s.height !== E) {
              const u = {
                width: l,
                height: E
              };
              e.onResize(u, a.target),
                i.set(a.target, {
                  width: l,
                  height: E
                })
            }
          }
      }
      );
    return se(S => {
      let a = [];
      if (e.refs) {
        const l = typeof e.refs == "function" ? e.refs() : e.refs;
        Array.isArray(l) ? a = a.concat(l) : a.push(l)
      }
      return a = a.concat(t()),
        S = S || [],
        S.forEach(l => {
          l in a || (o.unobserve(l),
            i.delete(l))
        }
        ),
        a.forEach(l => {
          l in S || o.observe(l)
        }
        ),
        a
    }
    ),
      we(() => o.disconnect()),
      r
  }
  const hI = y('<div class="text-lg mt-6 mb-3 flex items-center justify-center"><div class="text-sm text-right">:</div><input type="number" class="mx-2 text-sm text-center text-black dark:text-white bg-white dark:bg-gray-800" readonly><button class="transition"></button></div>')
    , vI = y('<div class="text-center"><button type="button" class="text-sm min-h-[40px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"><div class="flex items-center justify-center"><div class="ml-2"></div></div></button><div class="text-sm my-4"></div><label for="new_practice_seed" class="text-left block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300"></label><div class="flex flex-row items-center"><input type="text" id="new_practice_seed" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" maxlength="20" inputmode="numeric"><button type="button" class="flex-shrink-0 font-medium rounded-lg text-sm p-2.5 text-center ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:text-gray-400 disabled:bg-gray-300 disabled:dark:text-gray-500 disabled:dark:bg-gray-700 disabled:cursor-not-allowed"></button></div></div>')
    , UI = y('<div class="text-center text-base mt-2"></div>')
    , gI = e => {
      const t = K()
        , [n, r] = Te()
        , [i, o] = J(!1)
        , [S, a] = J()
        , [l, E] = J(0)
        , [s, u] = J(void 0)
        , c = Y(() => {
          const A = l();
          return A === 0 || A === n.free.seed || A < 1e6
        }
        );
      return e.mode !== "free" ? null : [(() => {
        const A = hI.cloneNode(!0)
          , R = A.firstChild
          , I = R.firstChild
          , f = R.nextSibling
          , T = f.nextSibling;
        return O(R, () => t.t("settings.currentSeed"), I),
          u(f),
          T.$$click = () => {
            F(n.vibration),
              o(!i())
          }
          ,
          O(T, g(Zn, {})),
          H(C => {
            const D = n.free.seed
              , L = t.t("settings.currentSeed")
              , U = i();
            return D !== C._v$ && (f.value = C._v$ = D),
              L !== C._v$2 && M(f, "aria-label", C._v$2 = L),
              U !== C._v$3 && T.classList.toggle("rotate-180", C._v$3 = U),
              C
          }
            , {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }),
          A
      }
      )(), X((() => {
        const A = X(() => !!i(), !0);
        return () => A() && (() => {
          const R = vI.cloneNode(!0)
            , I = R.firstChild
            , f = I.firstChild
            , T = f.firstChild
            , C = I.nextSibling
            , D = C.nextSibling
            , L = D.nextSibling
            , U = L.firstChild
            , d = U.nextSibling;
          return I.$$click = () => {
            F(n.vibration);
            const P = s();
            if (P) {
              P.select(),
                document.execCommand("copy");
              const h = window.getSelection && window.getSelection();
              h && h.removeAllRanges(),
                P.blur(),
                alert(t.t("settings.copiedSeedToClipboardAlert", {
                  seed: P.value
                }))
            }
          }
            ,
            O(f, g(VS, {}), T),
            O(T, () => t.t("settings.copySeedToClipboard")),
            O(C, () => t.t("settings.gameSeedDescription")),
            O(D, () => t.t("settings.gameSeedInputLabel")),
            U.$$input = P => {
              const h = S();
              if (h) {
                const N = Number(P.target.value);
                if (N && !Number.isNaN(N) && Number.isFinite(N)) {
                  const B = Math.max(0, Math.min(Math.floor(N), 1e21));
                  E(B),
                    h.value = String(B)
                } else
                  E(0),
                    h.value = ""
              }
            }
            ,
            a(U),
            d.$$click = () => {
              F(n.vibration),
                r.resetFree(l()),
                de("event", "override_free", {
                  seed: l()
                }),
                E(0);
              const P = S();
              P && (P.value = "")
            }
            ,
            O(d, () => t.t("settings.startNewPractice")),
            O(R, (() => {
              const P = X(() => n.free.guesses.length > 0 && !r.isGameComplete(e.mode), !0);
              return () => P() && (() => {
                const h = UI.cloneNode(!0);
                return O(h, () => t.t("settings.startNewPracticeWarning")),
                  h
              }
              )()
            }
            )(), null),
            H(P => {
              const h = t.t("settings.gameSeedInputPlaceholder")
                , N = l() ? l() : ""
                , B = c();
              return h !== P._v$4 && M(U, "placeholder", P._v$4 = h),
                N !== P._v$5 && (U.value = P._v$5 = N),
                B !== P._v$6 && (d.disabled = P._v$6 = B),
                P
            }
              , {
                _v$4: void 0,
                _v$5: void 0,
                _v$6: void 0
              }),
            R
        }
        )()
      }
      )())]
    }
    ;
  Ye(["click", "input"]);
  const mI = y('<div class="flex items-center m-4"><label class="flex items-center cursor-pointer"><div class="relative"><input type="checkbox" class="sr-only"><div class="block bg-gray-500 dark:bg-gray-600 w-14 h-8 rounded-full"></div><div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div></div><div class="ml-3 text-black dark:text-white"></div></label></div>')
    , PI = y('<div id="settings-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><div class="text-4xl mt-2 mb-4 text-center"></div><div class="flex flex-col text-base"><div class="m-4"><label for="keyboardHeightRange"></label><input type="range" class="appearance-none w-full h-2 rounded bg-gray-300 dark:bg-gray-600 cursor-pointer" id="keyboardHeightRange"></div><div class="m-4"><label for="gameSizeSelect" class="block text-black dark:text-white mb-1"></label><div class="relative"><div class="flex items-center text-black dark:text-white absolute top-0 bottom-0 right-3 pointer-events-none"></div><select id="gameSizeSelect" class="bg-gray-50 border border-gray-400 text-black rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 cursor-pointer appearance-none"><option value="fit"></option><option value="square"></option></select></div></div></div></div></div>')
    , MI = y('<div class="text-center mt-6"><button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"></button><div class="text-center text-base"></div></div>')
    , Kt = e => (() => {
      const t = mI.cloneNode(!0)
        , n = t.firstChild
        , r = n.firstChild
        , i = r.firstChild
        , o = i.nextSibling
        , S = o.nextSibling
        , a = r.nextSibling;
      return fe(i, "change", e.onChange),
        fe(i, "click", e.onClick, !0),
        O(a, () => e.text),
        H(l => {
          const E = e.id
            , s = e.id
            , u = e.checked
            , c = e.ariaLabel
            , A = e.checked
            , R = e.checked && !e.colorblind
            , I = e.checked && e.colorblind;
          return E !== l._v$ && M(n, "for", l._v$ = E),
            s !== l._v$2 && M(i, "id", l._v$2 = s),
            u !== l._v$3 && (i.checked = l._v$3 = u),
            c !== l._v$4 && M(i, "aria-label", l._v$4 = c),
            A !== l._v$5 && S.classList.toggle("translate-x-[100%]", l._v$5 = A),
            R !== l._v$6 && S.classList.toggle("bg-box-correct", l._v$6 = R),
            I !== l._v$7 && S.classList.toggle("bg-box-correct-alt", l._v$7 = I),
            l
        }
          , {
            _v$: void 0,
            _v$2: void 0,
            _v$3: void 0,
            _v$4: void 0,
            _v$5: void 0,
            _v$6: void 0,
            _v$7: void 0
          }),
        t
    }
    )()
    , yI = e => {
      const t = K()
        , [n, r] = Te();
      return (() => {
        const i = PI.cloneNode(!0)
          , o = i.firstChild
          , S = o.firstChild
          , a = o.nextSibling
          , l = a.firstChild
          , E = l.nextSibling
          , s = E.firstChild
          , u = s.firstChild
          , c = u.nextSibling
          , A = s.nextSibling
          , R = A.firstChild
          , I = R.nextSibling
          , f = I.firstChild
          , T = f.nextSibling
          , C = T.firstChild
          , D = C.nextSibling;
        return fe(S, "click", e.onCloseSettings, !0),
          O(S, g(nn, {})),
          O(l, () => t.t("header.settings")),
          O(E, g(Kt, {
            id: "toggleDarkMode",
            get text() {
              return t.t("settings.darkMode")
            },
            get checked() {
              return n.darkMode
            },
            get colorblind() {
              return n.colorblind
            },
            onClick: () => F(n.vibration),
            onChange: L => r.setDarkMode(L.currentTarget.checked)
          }), s),
          O(E, g(Kt, {
            id: "toggleColorblind",
            get text() {
              return t.t("settings.colorblindMode")
            },
            get checked() {
              return n.colorblind
            },
            get colorblind() {
              return n.colorblind
            },
            onClick: () => F(n.vibration),
            onChange: L => r.setColorblind(L.currentTarget.checked)
          }), s),
          O(E, xo && g(Kt, {
            id: "toggleVibration",
            get text() {
              return t.t("settings.vibration")
            },
            get checked() {
              return n.vibration
            },
            get colorblind() {
              return n.colorblind
            },
            onClick: () => F(n.vibration),
            onChange: L => r.setVibration(L.currentTarget.checked)
          }), s),
          O(E, g(Kt, {
            id: "toggleEnterBsReversed",
            get text() {
              return t.t("settings.switchKeys", {
                example: `${n.enterBsReversed ? "\u23CE" : "\u232B"} . . . ${n.enterBsReversed ? "\u232B" : "\u23CE"}`
              })
            },
            get checked() {
              return n.enterBsReversed
            },
            get colorblind() {
              return n.colorblind
            },
            onClick: () => F(n.vibration),
            onChange: L => r.setEnterBsReversed(L.currentTarget.checked),
            get ariaLabel() {
              return t.t("settings.switchKeysInfo", {
                left: n.enterBsReversed ? t.t("game.backspaceKey") : t.t("game.enterKey"),
                right: n.enterBsReversed ? t.t("game.enterKey") : t.t("game.backspaceKey")
              })
            }
          }), s),
          O(E, g(Kt, {
            id: "toggleAchievementNotifs",
            get text() {
              return t.t("settings.achievementNotifs")
            },
            get checked() {
              return n.achievementNotifs
            },
            get colorblind() {
              return n.colorblind
            },
            onClick: () => F(n.vibration),
            onChange: L => r.setAchievementNotifs(L.currentTarget.checked),
            get ariaLabel() {
              return t.t("settings.achievementNotifs")
            }
          }), s),
          O(u, () => t.t("settings.keyboardHeight", {
            height: n.keyboardHeight.toFixed(1)
          })),
          c.addEventListener("change", L => r.setKeyboardHeight(Number(L.currentTarget.value))),
          c.$$input = L => r.setKeyboardHeight(Number(L.currentTarget.value)),
          M(c, "min", Fo),
          M(c, "max", wo),
          M(c, "step", vE),
          O(R, () => t.t("settings.gameSize")),
          O(f, g(Zn, {})),
          T.addEventListener("change", L => r.setGameSize(L.currentTarget.value)),
          T.$$click = () => F(n.vibration),
          O(C, () => t.t("settings.gameFit")),
          O(D, () => t.t("settings.gameSquare")),
          O(a, g(gI, {
            get mode() {
              return e.mode
            }
          }), null),
          O(a, (() => {
            const L = X(() => e.mode === "free" && n.free.guesses.length > 0 && !r.isGameComplete(e.mode), !0);
            return () => L() && (() => {
              const U = MI.cloneNode(!0)
                , d = U.firstChild
                , P = d.nextSibling;
              return d.$$click = () => {
                F(n.vibration),
                  r.resetFree()
              }
                ,
                O(d, () => t.t("settings.resetPractice")),
                O(P, () => t.t("settings.resetWarning")),
                U
            }
            )()
          }
          )(), null),
          H(L => {
            const U = t.t("header.settings")
              , d = t.t("app.close")
              , P = !n.colorblind
              , h = n.colorblind
              , N = n.keyboardHeight
              , B = n.gameSize;
            return U !== L._v$8 && M(i, "aria-label", L._v$8 = U),
              d !== L._v$9 && M(S, "aria-label", L._v$9 = d),
              P !== L._v$10 && c.classList.toggle("quordle-range", L._v$10 = P),
              h !== L._v$11 && c.classList.toggle("quordle-range-alt", L._v$11 = h),
              N !== L._v$12 && (c.value = L._v$12 = N),
              B !== L._v$13 && (T.value = L._v$13 = B),
              L
          }
            , {
              _v$8: void 0,
              _v$9: void 0,
              _v$10: void 0,
              _v$11: void 0,
              _v$12: void 0,
              _v$13: void 0
            }),
          i
      }
      )()
    }
    ;
  Ye(["click", "input"]);
  const YI = y('<div id="statistics-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6 mb-8"><h1 class="text-4xl mt-2 mb-4 text-center"></h1><div class="w-full grid grid-cols-4 gap-2"><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 whitespace-pre-line break-words"></span></div><div class="flex flex-col text-center"><span class="text-xl"></span><span class="text-base text-gray-600 dark:text-gray-300 whitespace-pre-line break-words"></span></div></div><h1 class="text-4xl mt-8 text-center"></h1><h2 class="text-lg mb-4 text-center"></h2><div class="text-lg"></div></div></div>')
    , so = y('<div class="flex flex-row mb-1"><div class="mr-2"></div><div class="min-w-min text-right px-2"></div></div>')
    , BI = y('<div class="flex flex-row text-base mt-6 mb-1 px-2"><div class="flex-1"> - </div><div class="flex-1 text-right"> - </div></div>')
    , HI = y('<div class="text-base font-bold flex flex-row items-center cursor-pointer rounded-l-xl rounded-r-xl overflow-hidden" role="button" aria-controls="loss-distribution"><div class="bg-box-correct h-6"></div><div class="bg-rose-600 dark:bg-rose-800 text-right h-6"></div></div>')
    , GI = y('<div id="loss-distribution"><h1 class="text-4xl mt-8 text-center"></h1><h2 class="text-lg mb-4 text-center"></h2><div class="text-lg"></div></div>')
    , bI = [...Array(Q - (Ue - 1)).keys()].map(e => e + (Ue - 1))
    , pI = [...Array(Ue).keys()].map(e => e + Q).reverse()
    , KI = e => {
      const t = K()
        , [n, r] = Te()
        , [i, o] = J(!1)
        , S = Y(() => Math.max(...n[e.mode].history.slice(Ue - 1, Q), 1))
        , a = Y(() => Math.max(...n[e.mode].history.slice(Q), 1))
        , l = Y(() => n[e.mode].history.slice(Ue - 1, Q).reduce((f, T) => f + T, 0))
        , E = Y(() => n[e.mode].history.slice(Q).reduce((f, T) => f + T, 0))
        , s = Y(() => l() + E())
        , u = Y(() => n[e.mode].answersCorrect.reduce((f, T) => f += T >= 0 ? 1 : 0, 0))
        , c = Y(() => Math.max(...n[e.mode].answersCorrect))
        , A = Y(() => r.isGameComplete(e.mode) && u() === Ue)
        , R = Y(() => r.isGameComplete(e.mode) && u() < Ue)
        , I = Y(() => e.mode === "daily" ? t.t("header.daily") : t.t("header.practice"));
      return (() => {
        const f = YI.cloneNode(!0)
          , T = f.firstChild
          , C = T.firstChild
          , D = T.nextSibling
          , L = D.firstChild
          , U = L.nextSibling
          , d = U.firstChild
          , P = d.firstChild
          , h = P.nextSibling
          , N = d.nextSibling
          , B = N.firstChild
          , x = B.nextSibling
          , W = N.nextSibling
          , z = W.firstChild
          , re = z.nextSibling
          , te = W.nextSibling
          , Ae = te.firstChild
          , ue = Ae.nextSibling
          , b = U.nextSibling
          , Re = b.nextSibling
          , Pe = Re.nextSibling;
        return fe(C, "click", e.onCloseStatistics, !0),
          O(C, g(nn, {})),
          O(L, (() => {
            const $ = X(() => e.mode === "daily", !0);
            return () => $() ? t.t("stats.dailyStatistics") : t.t("stats.practiceStatistics")
          }
          )()),
          O(P, () => l() + E()),
          O(h, () => t.t("stats.played")),
          O(B, () => Math.round((s() > 0 ? l() / s() : 0) * 100)),
          O(x, () => t.t("stats.winPercent")),
          O(z, () => n[e.mode].currentStreak),
          O(re, () => t.t("stats.currentStreak")),
          O(Ae, () => n[e.mode].maxStreak),
          O(ue, () => t.t("stats.maxStreak")),
          O(b, () => t.t("stats.winDistribution")),
          O(Re, () => t.t("stats.winDistExplain")),
          O(Pe, () => bI.map($ => (() => {
            const j = so.cloneNode(!0)
              , q = j.firstChild
              , Se = q.nextSibling;
            return O(q, $ + 1),
              O(Se, () => n[e.mode].history[$]),
              H(k => {
                const ne = t.t("stats.aria.winChartBar", {
                  numGames: t.t("stats.aria.numGames", {
                    smart_count: n[e.mode].history[$]
                  }),
                  numGuesses: t.t("stats.aria.numGuesses", {
                    smart_count: $ + 1
                  })
                })
                  , v = {
                    " text-black bg-box-correct": A() && c() === $,
                    "text-black bg-gray-300 dark:text-white dark:bg-gray-700": !(A() && c() === $)
                  }
                  , m = n[e.mode].history[$] / S() * 100 + "%";
                return ne !== k._v$7 && M(j, "aria-label", k._v$7 = ne),
                  k._v$8 = ye(Se, v, k._v$8),
                  m !== k._v$9 && Se.style.setProperty("width", k._v$9 = m),
                  k
              }
                , {
                  _v$7: void 0,
                  _v$8: void 0,
                  _v$9: void 0
                }),
              j
          }
          )())),
          O(D, (() => {
            const $ = X(() => E() > 0, !0);
            return () => $() && [(() => {
              const j = BI.cloneNode(!0)
                , q = j.firstChild
                , Se = q.firstChild
                , k = q.nextSibling
                , ne = k.firstChild;
              return O(q, () => t.t("stats.win"), Se),
                O(q, l, null),
                O(k, E, ne),
                O(k, () => t.t("stats.loss"), null),
                j
            }
            )(), (() => {
              const j = HI.cloneNode(!0)
                , q = j.firstChild
                , Se = q.nextSibling;
              return j.$$click = () => {
                F(n.vibration),
                  o(!i())
              }
                ,
                H(k => {
                  const ne = i()
                    , v = t.t("stats.aria.winRateRatio")
                    , m = l() / s() * 100 + "%"
                    , G = E() / s() * 100 + "%";
                  return ne !== k._v$10 && M(j, "aria-expanded", k._v$10 = ne),
                    v !== k._v$11 && M(j, "aria-label", k._v$11 = v),
                    m !== k._v$12 && q.style.setProperty("width", k._v$12 = m),
                    G !== k._v$13 && Se.style.setProperty("width", k._v$13 = G),
                    k
                }
                  , {
                    _v$10: void 0,
                    _v$11: void 0,
                    _v$12: void 0,
                    _v$13: void 0
                  }),
                j
            }
            )()]
          }
          )(), null),
          O(D, (() => {
            const $ = X(() => !!i(), !0);
            return () => $() && (() => {
              const j = GI.cloneNode(!0)
                , q = j.firstChild
                , Se = q.nextSibling
                , k = Se.nextSibling;
              return O(q, () => t.t("stats.lossDistribution")),
                O(Se, () => t.t("stats.lossDistExplain")),
                O(k, () => pI.map(ne => (() => {
                  const v = so.cloneNode(!0)
                    , m = v.firstChild
                    , G = m.nextSibling;
                  return O(m, Ue - (ne - Q)),
                    O(G, () => n[e.mode].history[ne]),
                    H(w => {
                      const Z = t.t("stats.aria.lossChartBar", {
                        numGames: t.t("stats.aria.numGames", {
                          smart_count: n[e.mode].history[ne]
                        }),
                        numWords: t.t("stats.aria.numWords", {
                          smart_count: Ue - (ne - Q)
                        })
                      })
                        , ie = {
                          "text-white bg-rose-600 dark:bg-rose-800": R() && u() === ne - Q,
                          "text-black bg-gray-300 dark:bg-gray-700 dark:text-white": !(R() && u() === ne - Q)
                        }
                        , ce = n[e.mode].history[ne] / a() * 100 + "%";
                      return Z !== w._v$14 && M(v, "aria-label", w._v$14 = Z),
                        w._v$15 = ye(G, ie, w._v$15),
                        ce !== w._v$16 && G.style.setProperty("width", w._v$16 = ce),
                        w
                    }
                      , {
                        _v$14: void 0,
                        _v$15: void 0,
                        _v$16: void 0
                      }),
                    v
                }
                )())),
                j
            }
            )()
          }
          )(), null),
          H($ => {
            const j = e.mode === "daily" ? t.t("stats.dailyStatistics") : t.t("stats.practiceStatistics")
              , q = t.t("app.close")
              , Se = t.t("stats.aria.played", {
                mode: I(),
                num: l() + E()
              })
              , k = t.t("stats.aria.winPercent", {
                mode: I(),
                num: Math.round((s() > 0 ? l() / s() : 0) * 100)
              })
              , ne = t.t("stats.aria.currentStreak", {
                mode: I(),
                numGames: t.t("stats.aria.numGames", {
                  smart_count: n[e.mode].maxStreak
                })
              })
              , v = t.t("stats.aria.maxStreak", {
                mode: I(),
                numGames: t.t("stats.aria.numGames", {
                  smart_count: n[e.mode].maxStreak
                })
              });
            return j !== $._v$ && M(f, "aria-label", $._v$ = j),
              q !== $._v$2 && M(C, "aria-label", $._v$2 = q),
              Se !== $._v$3 && M(d, "aria-label", $._v$3 = Se),
              k !== $._v$4 && M(N, "aria-label", $._v$4 = k),
              ne !== $._v$5 && M(W, "aria-label", $._v$5 = ne),
              v !== $._v$6 && M(te, "aria-label", $._v$6 = v),
              $
          }
            , {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0
            }),
          f
      }
      )()
    }
    ;
  Ye(["click"]);
  var wI = ["Alejandra P.", "Anna Kalata", "BEVERLY L Cheyney", "Bernadette McDougall", "Beth Secor", "Beth Vargas", "Blane Mall", "Bob Ezrin", "Bob Smith", "Bobby Franklin", "Bryan ", "Bryan Williams", "CJ Blake", "Carol Jones", "Carrie W NM", "Cat", "Charmiane Claxton", "Chris Benton", "Dale Johnson", "Dan Tienes", "David Pattillo", "Deborah Chadwick", "Dorothy Drennen", "Dug Karlson", "Elisabeth Martensen", "Elisabeth Puglisi", "Ellen Lidington", "Eric Johnson", "Eric L. Epps", "Flip Kromer", "Fredrick HAGEMEISTER ", "Greg Webb", "HelenM", "James Ralff", "Jennifer Green", "Jess S", "Jhonny Rodriguez", "Jo Ann Coopwood", "Juliann Rulo", "Julie Gelfuso", "Jun Kwang Han", "June McCallum", "Karsten Rutt", "Kate", "Kelley Armstrong", "Kerin T Huber", "Kevin Eadie", "Kim Kalny", "LadyAdrienne DelaCruz", "Laura Lacanette", "Leah Swiler", "Leanne Haire", "Linda Thomas", "Lori Salganicoff", "Lynn M", "Lynn Pavalon", "Marc Paull", "Marcella Hilhorst", "Marcy Neal", "Margaret Minton", "Margaret Wendels", "Maria Ashot", "Mark Hauser", "Mark Richards", "Mary Douglass Ryan", "Mary Kenny", "Mary Reddaway", "Melissa Whiffin", "Micha\u0142 Bartoszkiewicz", "Molly Bierman", "Nadia Beckett", "Nancy Ellis", "Nicholas Byrne", "Nicole Dawson", "Paul Dzus", "Paula Gibes Smith", "Ralph Warren", "Rama Kocherlakota", "Renata Loewen", "Rob DeSisto", "Robyn Butler-Hall", "RogueWarrior ", "Ruth Kravitz", "S. G.", "Sabina Rogers", "Samantha Weidenbenner", "Sammy Heather", "Sandy Niles", "Sara Widboom", "Sarah Wiley ", "Scott Rush", "Sean G", "Serge Ribot", "Stephanie Porcellino", "Susan Mazze", "Susan Thieme", "Suzanne Maltezos", "Tim Kunin", "Tony", "Trisha Gorrell", "Ty Curtis", "Vonnie Matheny", "ZaftigShady", "doug wheaton", "eggler", "rebecca sadinsky", "rizen"];
  const FI = y('<div class="flex w-[100%]" role="row"></div>')
    , xI = y('<a class="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors" target="_blank"></a>')
    , WI = y('<div id="tutorial-panel" class="w-full h-full overflow-auto"><div class="max-w-[550px] w-full m-auto flex flex-row-reverse pr-4 pt-2"><button type="button" class="bg-white dark:bg-gray-800 p-1 rounded-full text-gray-900 hover:text-black dark:text-gray-400 dark:hover:text-white"></button></div><div class="max-w-[550px] m-auto w-full px-6"><h1 class="text-3xl mt-2 mb-1"></h1><div class="text-base"></div><h2 class="text-3xl mt-4 mb-2"></h2><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="w-[50%] mb-2 pr-1" role="table"></div><div class="text-base mb-6"></div><div class="flex w-[100%] mb-2"><div class="w-[50%] mr-1" role="table"></div><div class="w-[50%] ml-1" role="table"></div></div><div class="flex w-[100%] my-2"><div class="w-[50%] mr-1" role="table"></div><div class="w-[50%] ml-1" role="table"></div></div><div class="text-base"></div><ol class="text-base list-decimal ml-8 mb-6"><li></li><li></li><li></li><li></li></ol><div class="text-base mb-6"></div><div class="text-base mb-8"></div><div class="text-sm mb-2 text-center"></div><div class="flex flex-row items-center justify-between mb-8"></div><h1 class="text-3xl text-center">&#128150; <!> &#128150;</h1><div class="text-base mb-4 text-center"></div><div class="text-sm text-center mb-8"></div><h1 class="text-3xl mb-4 text-center"></h1><div class="text-base mb-6 whitespace-pre-line"></div></div></div>')
    , _I = y('<div class="flex item-center justify-center mb-6"><a title="Crowdin" target="_blank" href="https://crowdin.com/project/quordle" class="inline-flex"><img src="https://badges.crowdin.net/quordle/localized.svg"></a></div>')
    , $I = Xu(wI)
    , rt = e => {
      const t = K();
      return (() => {
        const n = FI.cloneNode(!0);
        return O(n, () => e.word[0].split("").map((r, i) => g(zS, {
          get state() {
            return e.word[1][i]
          },
          letter: r,
          gameRow: 0,
          gameCol: i,
          rowTemporalState: "past",
          activeCol: 0,
          get colorblind() {
            return e.colorblind
          },
          currentRow: 0,
          get tileHeight() {
            return e.tileHeight
          },
          get presentTileHeight() {
            return e.tileHeight
          },
          answered: !1,
          gameSize: "square",
          get ariaLabel() {
            return X(() => e.word[1][i] === "diff", !0)() ? t.t("game.aria.tileDiff", {
              letter: r,
              column: i + 1
            }) : X(() => e.word[1][i] === "none", !0)() ? t.t("game.aria.tileNone", {
              letter: r,
              column: i + 1
            }) : t.t("game.aria.tileCorrect", {
              letter: r,
              column: i + 1
            })
          }
        }))),
          n
      }
      )()
    }
    , it = e => (() => {
      const t = xI.cloneNode(!0);
      return O(t, () => e.children),
        H(() => M(t, "href", e.href)),
        t
    }
    )()
    , kI = e => {
      const t = K()
        , [n] = Te()
        , [r, i] = J(0)
        , o = ca({
          onResize: ({ width: a, height: l }) => {
            const E = parseFloat(getComputedStyle(document.documentElement).fontSize);
            if (a) {
              const s = (a - E * .5 - E * .25 * 10) / 10;
              i(s)
            }
          }
        })
        , S = [[t.t("tutorial.exampleWord1"), ["correct", "none", "none", "none", "none"]], [t.t("tutorial.exampleWord2"), ["none", "diff", "none", "none", "none"]], [t.t("tutorial.exampleWord3"), ["none", "none", "none", "none", "none"]], [t.t("tutorial.exampleWord4"), ["none", "none", "none", "none", "none"]], [t.t("tutorial.exampleWord4"), ["none", "none", "diff", "none", "correct"]], [t.t("tutorial.exampleWord4"), ["none", "none", "none", "diff", "none"]], [t.t("tutorial.exampleWord4"), ["none", "correct", "none", "none", "diff"]]];
      return (() => {
        const a = WI.cloneNode(!0)
          , l = a.firstChild
          , E = l.firstChild
          , s = l.nextSibling
          , u = s.firstChild
          , c = u.nextSibling
          , A = c.nextSibling
          , R = A.nextSibling
          , I = R.nextSibling
          , f = I.nextSibling
          , T = f.nextSibling
          , C = T.nextSibling
          , D = C.nextSibling
          , L = D.nextSibling
          , U = L.firstChild
          , d = U.nextSibling
          , P = L.nextSibling
          , h = P.firstChild
          , N = h.nextSibling
          , B = P.nextSibling
          , x = B.nextSibling
          , W = x.firstChild
          , z = W.nextSibling
          , re = z.nextSibling
          , te = re.nextSibling
          , Ae = x.nextSibling
          , ue = Ae.nextSibling
          , b = ue.nextSibling
          , Re = b.nextSibling
          , Pe = Re.nextSibling
          , $ = Pe.firstChild
          , j = $.nextSibling;
        j.nextSibling;
        const q = Pe.nextSibling
          , Se = q.nextSibling
          , k = Se.nextSibling
          , ne = k.nextSibling;
        return fe(E, "click", e.onCloseTutorial, !0),
          O(E, g(nn, {})),
          o(s),
          O(u, () => t.t("tutorial.title")),
          O(c, () => t.t("tutorial.p1")),
          O(A, () => t.t("tutorial.examples")),
          O(R, g(rt, {
            get word() {
              return S[0]
            },
            get colorblind() {
              return n.colorblind
            },
            get tileHeight() {
              return r()
            }
          })),
          O(I, () => t.t("tutorial.example1")),
          O(f, g(rt, {
            get word() {
              return S[1]
            },
            get colorblind() {
              return n.colorblind
            },
            get tileHeight() {
              return r()
            }
          })),
          O(T, () => t.t("tutorial.example2")),
          O(C, g(rt, {
            get word() {
              return S[2]
            },
            get colorblind() {
              return n.colorblind
            },
            get tileHeight() {
              return r()
            }
          })),
          O(D, () => t.t("tutorial.example3")),
          O(U, g(rt, {
            get word() {
              return S[3]
            },
            get colorblind() {
              return n.colorblind
            },
            get tileHeight() {
              return r()
            }
          })),
          O(d, g(rt, {
            get word() {
              return S[4]
            },
            get colorblind() {
              return n.colorblind
            },
            get tileHeight() {
              return r()
            }
          })),
          O(h, g(rt, {
            get word() {
              return S[5]
            },
            get colorblind() {
              return n.colorblind
            },
            get tileHeight() {
              return r()
            }
          })),
          O(N, g(rt, {
            get word() {
              return S[6]
            },
            get colorblind() {
              return n.colorblind
            },
            get tileHeight() {
              return r()
            }
          })),
          O(B, () => t.t("tutorial.example4Title")),
          O(W, () => t.t("tutorial.example4b1")),
          O(z, () => t.t("tutorial.example4b2")),
          O(re, () => t.t("tutorial.example4b3")),
          O(te, () => t.t("tutorial.example4b4")),
          O(Ae, () => t.t("tutorial.final1")),
          O(ue, () => t.t("tutorial.final2")),
          O(b, () => t.t("tutorial.author")),
          O(Re, g(it, {
            href: "https://twitter.com/quordle",
            get children() {
              return g($S, {
                height: 30
              })
            }
          }), null),
          O(Re, g(it, {
            href: "https://www.facebook.com/quordle",
            get children() {
              return g(MO, {
                height: 40
              })
            }
          }), null),
          O(Re, g(it, {
            href: "https://www.instagram.com/quordlegame/",
            get children() {
              return g(YO, {
                height: 36
              })
            }
          }), null),
          O(Re, g(it, {
            href: "https://www.reddit.com/r/Quordle/",
            get children() {
              return g(yO, {
                height: 36
              })
            }
          }), null),
          O(Re, g(it, {
            href: "https://www.twitch.tv/quordlegame",
            get children() {
              return g(HO, {
                height: 36
              })
            }
          }), null),
          O(Re, g(it, {
            href: "https://discord.gg/F7ZBeA2p2S",
            get children() {
              return g(BO, {
                height: 30
              })
            }
          }), null),
          O(Re, g(it, {
            href: "https://github.com/fireph/quordle",
            get children() {
              return g(PO, {
                height: 40
              })
            }
          }), null),
          O(s, (() => {
            const v = X(() => t.locale() !== "en", !0);
            return () => v() && _I.cloneNode(!0)
          }
          )(), Pe),
          O(Pe, () => t.t("tutorial.supporters"), j),
          O(q, () => t.t("tutorial.patronsThank")),
          O(Se, () => $I.map(v => v.replace(/ /g, "\xA0")).join(", ")),
          O(k, () => t.t("tutorial.historyTitle")),
          H(v => {
            const m = t.t("tutorial.tutorial")
              , G = t.t("app.close")
              , w = t.t("tutorial.aria.tutorialGuess", {
                guess: S[0]
              })
              , Z = t.t("tutorial.aria.tutorialGuess", {
                guess: S[1]
              })
              , ie = t.t("tutorial.aria.tutorialGuess", {
                guess: S[2]
              })
              , ce = t.t("tutorial.aria.tutorialGuessBoard", {
                guess: S[3],
                num: 1
              })
              , ae = t.t("tutorial.aria.tutorialGuessBoard", {
                guess: S[4],
                num: 2
              })
              , Fe = t.t("tutorial.aria.tutorialGuessBoard", {
                guess: S[5],
                num: 3
              })
              , xe = t.t("tutorial.aria.tutorialGuessBoard", {
                guess: S[6],
                num: 4
              })
              , We = t.t("tutorial.aria.quordlePatrons")
              , _e = t.t("tutorial.history");
            return m !== v._v$ && M(a, "aria-label", v._v$ = m),
              G !== v._v$2 && M(E, "aria-label", v._v$2 = G),
              w !== v._v$3 && M(R, "aria-label", v._v$3 = w),
              Z !== v._v$4 && M(f, "aria-label", v._v$4 = Z),
              ie !== v._v$5 && M(C, "aria-label", v._v$5 = ie),
              ce !== v._v$6 && M(U, "aria-label", v._v$6 = ce),
              ae !== v._v$7 && M(d, "aria-label", v._v$7 = ae),
              Fe !== v._v$8 && M(h, "aria-label", v._v$8 = Fe),
              xe !== v._v$9 && M(N, "aria-label", v._v$9 = xe),
              We !== v._v$10 && M(Se, "aria-label", v._v$10 = We),
              _e !== v._v$11 && (ne.innerHTML = v._v$11 = _e),
              v
          }
            , {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0,
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
              _v$8: void 0,
              _v$9: void 0,
              _v$10: void 0,
              _v$11: void 0
            }),
          a
      }
      )()
    }
    ;
  Ye(["click"]);
  const VI = y('<div class="absolute w-full h-full text-black dark:text-white bg-white dark:bg-gray-800 overflow-auto transition-all ease-in-out duration-500"></div>')
    , ZI = y('<div class="flex w-full" role="row"></div>')
    , XI = y('<div class="flex flex-col flex-auto p-1 first:pl-2 last:pr-2" role="table"></div>')
    , JI = y('<div class="w-full absolute flex flex-col overflow-hidden"><div class="max-w-[550px] m-auto w-full"></div><div class="quordle-desktop-scrollbar max-w-[550px] m-auto w-full flex-auto relative"><div class="w-full flex-col" aria-label="Game Boards"></div></div><div class="max-w-[550px] m-auto w-full"></div></div>')
    , zI = y('<div class="flex w-full"></div>')
    , fn = e => g(bo, {
      enterClass: "quordle-exit-page",
      enterToClass: "quordle-enter-page",
      exitClass: "quordle-enter-page",
      exitToClass: "quordle-exit-page",
      get children() {
        return X(() => !!e.open, !0)() && (() => {
          const t = VI.cloneNode(!0);
          return O(t, () => e.children),
            H(() => t.style.setProperty("font-size", e.fontSize + "px")),
            t
        }
        )()
      }
    })
    , QI = [...Array(vt).keys()]
    , jI = [...Array(po).keys()]
    , qI = [...Array(Q).keys()]
    , ed = [...Array(pe).keys()]
    , td = e => {
      const [t, n] = Te()
        , r = e.gameX + e.gameY * vt
        , i = Y(() => {
          const l = t[e.mode]
            , E = l.guesses
            , s = l.answers[r];
          return E.indexOf(s)
        }
        )
        , o = Y(() => i() !== -1 && i() < e.gameRow)
        , S = Y(() => {
          const E = t[e.mode].guesses;
          return e.gameRow === E.length ? n.isGameComplete(e.mode) ? "never" : "present" : o() ? "never" : E.length > e.gameRow ? "past" : "future"
        }
        )
        , a = Y(() => {
          const l = e.gameX + e.gameY * vt
            , E = t[e.mode].guesses
            , s = t[e.mode].current
            , u = E[e.gameRow]
            , c = t[e.mode].states[l][e.gameRow]
            , A = t[e.mode].answersCorrect[l];
          return e.gameRow === A ? `Row ${e.gameRow + 1}. Guess ${u} is correct.` : e.gameRow === E.length && A < 0 ? `Row ${e.gameRow + 1}. Current guess ${s}.` : u && c ? `Row ${e.gameRow + 1}. Guess ${u}. ` : `Row ${e.gameRow + 1}. ` + (e.gameRow > A && A >= 0 ? `Answer already guessed correctly on row ${A + 1}.` : "Future guess.")
        }
        );
      return (() => {
        const l = ZI.cloneNode(!0);
        return O(l, () => ed.map(E => g(NR, {
          get mode() {
            return e.mode
          },
          get gameX() {
            return e.gameX
          },
          get gameY() {
            return e.gameY
          },
          get gameRow() {
            return e.gameRow
          },
          gameCol: E,
          get tileHeight() {
            return e.tileHeight
          },
          get presentTileHeight() {
            return e.presentTileHeight
          },
          get answerIndex() {
            return i()
          },
          get answered() {
            return o()
          },
          get temporalState() {
            return S()
          }
        }))),
          H(E => {
            const s = a()
              , u = S() === "present" && !o() && !!t[e.mode].extraCurrent && t[e.mode].extraCurrent.length > 0 && t[e.mode].extraCurrent.length % 2 === 0
              , c = S() === "present" && !o() && !!t[e.mode].extraCurrent && t[e.mode].extraCurrent.length > 0 && t[e.mode].extraCurrent.length % 2 === 1;
            return s !== E._v$ && M(l, "aria-label", E._v$ = s),
              u !== E._v$2 && l.classList.toggle("quordle-shake-anim-0", E._v$2 = u),
              c !== E._v$3 && l.classList.toggle("quordle-shake-anim-1", E._v$3 = c),
              E
          }
            , {
              _v$: void 0,
              _v$2: void 0,
              _v$3: void 0
            }),
          l
      }
      )()
    }
    , nd = e => (() => {
      const t = XI.cloneNode(!0);
      return O(t, () => qI.map(n => g(td, {
        get mode() {
          return e.mode
        },
        get gameX() {
          return e.gameX
        },
        get gameY() {
          return e.gameY
        },
        gameRow: n,
        get tileHeight() {
          return e.tileHeight
        },
        get presentTileHeight() {
          return e.presentTileHeight
        }
      }))),
        H(() => M(t, "aria-label", `Game Board ${e.gameX + e.gameY * vt + 1}`)),
        t
    }
    )()
    , lo = e => {
      const [t, n] = Te()
        , [r, i] = Bo()
        , [o, S] = J(35)
        , [a, l] = J(0)
        , [E, s] = J(0)
        , [u, c] = J(!1)
        , A = Y(() => r.overlay === "tutorial")
        , R = Y(() => r.overlay === "statistics")
        , I = Y(() => r.overlay === "settings")
        , f = Y(() => r.overlay === "achievements")
        , T = D => {
          (A() || R() || I()) && D.key === "Escape" && i({
            overlay: void 0
          })
        }
        ;
      document.addEventListener("keydown", T),
        we(() => document.removeEventListener("keydown", T));
      const C = ca({
        onResize: ({ width: D, height: L }) => {
          const U = parseFloat(getComputedStyle(document.documentElement).fontSize);
          if (D) {
            S(D / 16);
            const d = (D - 1.5 * U - U * .25 * 10) / 10;
            if (s(d),
              L)
              if (n.isGameComplete(e.mode)) {
                const P = (L - U - U * .25 * 18) / 18;
                c(P < d / 3),
                  l(Math.max(d / 3, Math.min(d, P)))
              } else {
                const P = (L - U - U * .25 * 18 - d * 2) / 16;
                c(P < d / 3),
                  l(Math.max(d / 3, Math.min(d, P)))
              }
          }
        }
      });
      return (() => {
        const D = JI.cloneNode(!0)
          , L = D.firstChild
          , U = L.nextSibling
          , d = U.firstChild
          , P = U.nextSibling;
        return ye(D, {
          "h-full": !ci,
          "h-[calc(100%-25px)] bottom-[25px]": ci
        }),
          O(D, g(QR, {
            get mode() {
              return e.mode
            },
            onOpenTutorial: () => {
              F(t.vibration),
                de("event", "tutorial", {
                  mode: e.mode
                }),
                i({
                  overlay: "tutorial"
                })
            }
            ,
            onOpenStatistics: () => {
              F(t.vibration),
                de("event", "statistics", {
                  mode: e.mode
                }),
                i({
                  overlay: "statistics"
                })
            }
            ,
            onOpenSettings: () => {
              F(t.vibration),
                de("event", "settings", {
                  mode: e.mode
                }),
                i({
                  overlay: "settings"
                })
            }
            ,
            onOpenAchievements: () => {
              F(t.vibration),
                de("event", "achievements", {
                  mode: e.mode
                }),
                i({
                  overlay: "achievements"
                })
            }
          }), L),
          O(L, g(sR, {
            get mode() {
              return e.mode
            }
          })),
          C(U),
          O(d, () => jI.map(h => (() => {
            const N = zI.cloneNode(!0);
            return M(N, "aria-label", `Game Boards Row ${h + 1}`),
              O(N, () => QI.map(B => g(nd, {
                get mode() {
                  return e.mode
                },
                gameX: B,
                gameY: h,
                get tileHeight() {
                  return a()
                },
                get presentTileHeight() {
                  return E()
                }
              }))),
              N
          }
          )())),
          O(U, g(eR, {
            onOpenAchievements: () => {
              F(t.vibration),
                de("event", "achievements", {
                  mode: e.mode
                }),
                i({
                  overlay: "achievements"
                })
            }
          }), null),
          O(P, (() => {
            const h = X(() => !!n.isGameComplete(e.mode), !0);
            return () => h() ? g(TR, {
              get mode() {
                return e.mode
              }
            }) : g(nI, {
              get mode() {
                return e.mode
              },
              get fontSize() {
                return o()
              },
              get disableInputCapture() {
                return A() || R() || I()
              }
            })
          }
          )()),
          O(D, g(fn, {
            get open() {
              return I()
            },
            get fontSize() {
              return o()
            },
            get children() {
              return g(yI, {
                get mode() {
                  return e.mode
                },
                onCloseSettings: () => {
                  F(t.vibration),
                    i({
                      overlay: void 0
                    })
                }
              })
            }
          }), null),
          O(D, g(fn, {
            get open() {
              return R()
            },
            get fontSize() {
              return o()
            },
            get children() {
              return g(KI, {
                get mode() {
                  return e.mode
                },
                onCloseStatistics: () => {
                  F(t.vibration),
                    i({
                      overlay: void 0
                    })
                }
              })
            }
          }), null),
          O(D, g(fn, {
            get open() {
              return A()
            },
            get fontSize() {
              return o()
            },
            get children() {
              return g(kI, {
                onCloseTutorial: () => {
                  F(t.vibration),
                    i({
                      overlay: void 0
                    })
                }
              })
            }
          }), null),
          O(D, g(fn, {
            get open() {
              return f()
            },
            get fontSize() {
              return o()
            },
            get children() {
              return g(nR, {
                onCloseAchievements: () => {
                  F(t.vibration),
                    i({
                      overlay: void 0
                    })
                }
              })
            }
          }), null),
          H(h => {
            const N = o() + "px"
              , B = !A() && !R() && (t.gameSize === "square" || u())
              , x = A() || R() || t.gameSize === "fit" && !u()
              , W = o() + "px"
              , z = o() + "px";
            return N !== h._v$4 && L.style.setProperty("font-size", h._v$4 = N),
              B !== h._v$5 && U.classList.toggle("overflow-auto", h._v$5 = B),
              x !== h._v$6 && U.classList.toggle("overflow-hidden", h._v$6 = x),
              W !== h._v$7 && U.style.setProperty("font-size", h._v$7 = W),
              z !== h._v$8 && P.style.setProperty("font-size", h._v$8 = z),
              h
          }
            , {
              _v$4: void 0,
              _v$5: void 0,
              _v$6: void 0,
              _v$7: void 0,
              _v$8: void 0
            }),
          D
      }
      )()
    }
    , rd = y('<div class="px-5 absolute flex items-center justify-center w-full h-full bg-gradient-to-r from-indigo-600 to-blue-400"><div class="p-10 bg-white rounded-md shadow-xl"><div class="flex flex-col items-center"><h1 class="font-bold text-blue-600 text-9xl"></h1><h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl"><span class="text-red-500"></span> </h6><p class="mb-8 text-center text-gray-500 md:text-lg"></p></div></div></div>')
    , id = e => {
      const t = K();
      return (() => {
        const n = rd.cloneNode(!0)
          , r = n.firstChild
          , i = r.firstChild
          , o = i.firstChild
          , S = o.nextSibling
          , a = S.firstChild;
        a.nextSibling;
        const l = S.nextSibling;
        return O(o, () => t.t("app.error404")),
          O(a, () => t.t("app.oops")),
          O(S, () => t.t("app.pageNotFound"), null),
          O(l, () => t.t("app.notFoundText")),
          O(i, g(fE, {
            href: "/",
            class: "px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100",
            get children() {
              return t.t("app.backToDaily")
            }
          }), null),
          n
      }
      )()
    }
    , od = () => {
      const e = Y(() => st(Jr))
        , t = Y(() => st(Xr));
      return se(() => {
        var r;
        const n = document.querySelector("meta[name=theme-color]");
        (r = e()) != null && r[0].darkMode ? (document.documentElement.classList.add("dark"),
          n == null || n.setAttribute("content", "#111827")) : (document.documentElement.classList.remove("dark"),
            n == null || n.setAttribute("content", "#cbd5e1"))
      }
      ),
        e() && t() ? g(IE, {
          get children() {
            return [g(zn, {
              path: "/",
              get element() {
                return g(lo, {
                  mode: "daily"
                })
              }
            }), g(zn, {
              path: "/practice",
              get element() {
                return g(lo, {
                  mode: "free"
                })
              }
            }), g(zn, {
              path: "/*all",
              get element() {
                return g(id, {})
              }
            })]
          }
        }) : null
    }
    ;
  if ("serviceWorker" in navigator) {
    const e = hE({
      onNeedRefresh() {
        e(!0)
      }
    })
  }
  _a(() => g(RE, {
    get source() {
      return Qa()
    },
    get children() {
      return g(vu, {
        get children() {
          return g(Qu, {
            get children() {
              return g(od, {})
            }
          })
        }
      })
    }
  }), document.getElementById("root"))
}
);
Sd();
//# sourceMappingURL=index.c61158cc.js.map
