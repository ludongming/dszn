! function(t, e) {
	"function" == typeof define && define.amd ? define(function() {
		return e(t)
	}) : e(t)
}(this, function(t) {
	var e = function() {
		function e(t) {
			return null == t ? t + "" : W[Y.call(t)] || "object"
		}

		function n(t) {
			return "function" == e(t)
		}

		function r(t) {
			return null != t && t == t.window
		}

		function i(t) {
			return null != t && t.nodeType == t.DOCUMENT_NODE
		}

		function o(t) {
			return "object" == e(t)
		}

		function a(t) {
			return o(t) && !r(t) && Object.getPrototypeOf(t) == Object.prototype
		}

		function s(t) {
			var e = !!t && "length" in t && t.length, n = C.type(t);
			return "function" != n && !r(t) && ("array" == n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
		}

		function u(t) {
			return L.call(t, function(t) {
				return null != t
			})
		}

		function c(t) {
			return t.length > 0 ? C.fn.concat.apply([], t) : t
		}

		function l(t) {
			return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
		}

		function f(t) {
			return t in k ? k[t] : k[t] = RegExp("(^|\\s)" + t + "(\\s|$)")
		}

		function h(t, e) {
			return "number" != typeof e || Z[l(t)] ? e : e + "px"
		}

		function p(t) {
			var e, n;
			return F[t] || ( e = $.createElement(t), $.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && ( n = "block"), F[t] = n), F[t]
		}

		function d(t) {
			return "children" in t ? D.call(t.children) : C.map(t.childNodes, function(t) {
				return 1 == t.nodeType ? t :
				void 0
			})
		}

		function m(t, e) {
			var n, r = t ? t.length : 0;
			for ( n = 0; r > n; n++)
				this[n] = t[n];
			this.length = r, this.selector = e || ""
		}

		function g(t, e, n) {
			for (w in e)n && (a(e[w]) || te(e[w])) ? (a(e[w]) && !a(t[w]) && (t[w] = {}), te(e[w]) && !te(t[w]) && (t[w] = []), g(t[w], e[w], n)) : e[w] !== j && (t[w] = e[w])
		}

		function v(t, e) {
			return null == e ? C(t) : C(t).filter(e)
		}

		function y(t, e, r, i) {
			return n(e) ? e.call(t, r, i) : e
		}

		function x(t, e, n) {
			null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
		}

		function b(t, e) {
			var n = t.className || "", r = n && n.baseVal !== j;
			return e === j ? r ? n.baseVal : n :
			void ( r ? n.baseVal = e : t.className = e)
		}

		function E(t) {
			try {
				return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? C.parseJSON(t) : t) : t
			} catch(e) {
				return t
			}
		}

		function T(t, e) {
			e(t);
			for (var n = 0, r = t.childNodes.length; r > n; n++)
				T(t.childNodes[n], e)
		}

		var j, w, C, S, N, O, P = [], A = P.concat, L = P.filter, D = P.slice, $ = t.document, F = {}, k = {}, Z = {
			"column-count" : 1,
			columns : 1,
			"font-weight" : 1,
			"line-height" : 1,
			opacity : 1,
			"z-index" : 1,
			zoom : 1
		}, M = /^\s*<(\w+|!)[^>]*>/, z = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, q = /^(?:body|html)$/i, _ = /([A-Z])/g, I = ["val", "css", "html", "text", "data", "width", "height", "offset"], H = ["after", "prepend", "before", "append"], V = $.createElement("table"), B = $.createElement("tr"), X = {
			tr : $.createElement("tbody"),
			tbody : V,
			thead : V,
			tfoot : V,
			td : B,
			th : B,
			"*" : $.createElement("div")
		}, U = /complete|loaded|interactive/, J = /^[\w-]*$/, W = {}, Y = W.toString, G = {}, K = $.createElement("div"), Q = {
			tabindex : "tabIndex",
			readonly : "readOnly",
			"for" : "htmlFor",
			"class" : "className",
			maxlength : "maxLength",
			cellspacing : "cellSpacing",
			cellpadding : "cellPadding",
			rowspan : "rowSpan",
			colspan : "colSpan",
			usemap : "useMap",
			frameborder : "frameBorder",
			contenteditable : "contentEditable"
		}, te = Array.isArray ||
		function(t) {
			return t instanceof Array
		};
		return G.matches = function(t, e) {
			if (!e || !t || 1 !== t.nodeType)
				return !1;
			var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
			if (n)
				return n.call(t, e);
			var r, i = t.parentNode, o = !i;
			return o && ( i = K).appendChild(t), r = ~G.qsa(i, e).indexOf(t), o && K.removeChild(t), r
		}, N = function(t) {
			return t.replace(/-+(.)?/g, function(t, e) {
				return e ? e.toUpperCase() : ""
			})
		}, O = function(t) {
			return L.call(t, function(e, n) {
				return t.indexOf(e) == n
			})
		}, G.fragment = function(t, e, n) {
			var r, i, o;
			return z.test(t) && ( r = C($.createElement(RegExp.$1))), r || (t.replace && ( t = t.replace(R, "<$1></$2>")), e === j && ( e = M.test(t) && RegExp.$1), e in X || ( e = "*"), o = X[e], o.innerHTML = "" + t, r = C.each(D.call(o.childNodes), function() {
				o.removeChild(this)
			})), a(n) && ( i = C(r), C.each(n, function(t, e) {
				I.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
			})), r
		}, G.Z = function(t, e) {
			return new m(t, e)
		}, G.isZ = function(t) {
			return t instanceof G.Z
		}, G.init = function(t, e) {
			var r;
			if (!t)
				return G.Z();
			if ("string" == typeof t)
				if ( t = t.trim(), "<" == t[0] && M.test(t))
					r = G.fragment(t, RegExp.$1, e), t = null;
				else {
					if (e !== j)
						return C(e).find(t);
					r = G.qsa($, t)
				}
			else {
				if (n(t))
					return C($).ready(t);
				if (G.isZ(t))
					return t;
				if (te(t))
					r = u(t);
				else if (o(t))
					r = [t], t = null;
				else if (M.test(t))
					r = G.fragment(t.trim(), RegExp.$1, e), t = null;
				else {
					if (e !== j)
						return C(e).find(t);
					r = G.qsa($, t)
				}
			}
			return G.Z(r, t)
		}, C = function(t, e) {
			return G.init(t, e)
		}, C.extend = function(t) {
			var e, n = D.call(arguments, 1);
			return "boolean" == typeof t && ( e = t, t = n.shift()), n.forEach(function(n) {
				g(t, n, e)
			}), t
		}, G.qsa = function(t, e) {
			var n, r = "#" == e[0], i = !r && "." == e[0], o = r || i ? e.slice(1) : e, a = J.test(o);
			return t.getElementById && a && r ? ( n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
		}, C.contains = $.documentElement.contains ? function(t, e) {
			return t !== e && t.contains(e)
		} : function(t, e) {
			for (; e && ( e = e.parentNode); )
				if (e === t)
					return !0;
			return !1
		}, C.type = e, C.isFunction = n, C.isWindow = r, C.isArray = te, C.isPlainObject = a, C.isEmptyObject = function(t) {
			var e;
			for (e in t)
			return !1;
			return !0
		}, C.isNumeric = function(t) {
			var e = +t, n = typeof t;
			return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
		}, C.inArray = function(t, e, n) {
			return P.indexOf.call(e, t, n)
		}, C.camelCase = N, C.trim = function(t) {
			return null == t ? "" : String.prototype.trim.call(t)
		}, C.uuid = 0, C.support = {}, C.expr = {}, C.noop = function() {
		}, C.map = function(t, e) {
			var n, r, i, o = [];
			if (s(t))
				for ( r = 0; r < t.length; r++)
					n = e(t[r], r), null != n && o.push(n);
			else
				for (i in t) n = e(t[i], i), null != n && o.push(n);
			return c(o)
		}, C.each = function(t, e) {
			var n, r;
			if (s(t)) {
				for ( n = 0; n < t.length; n++)
					if (e.call(t[n], n, t[n]) === !1)
						return t
			} else
				for (r in t)
				if (e.call(t[r], r, t[r]) === !1)
					return t;
			return t
		}, C.grep = function(t, e) {
			return L.call(t, e)
		}, t.JSON && (C.parseJSON = JSON.parse), C.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
			W["[object " + e + "]"] = e.toLowerCase()
		}), C.fn = {
			constructor : G.Z,
			length : 0,
			forEach : P.forEach,
			reduce : P.reduce,
			push : P.push,
			sort : P.sort,
			splice : P.splice,
			indexOf : P.indexOf,
			concat : function() {
				var t, e, n = [];
				for ( t = 0; t < arguments.length; t++)
					e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
				return A.apply(G.isZ(this) ? this.toArray() : this, n)
			},
			map : function(t) {
				return C(C.map(this, function(e, n) {
					return t.call(e, n, e)
				}))
			},
			slice : function() {
				return C(D.apply(this, arguments))
			},
			ready : function(t) {
				return U.test($.readyState) && $.body ? t(C) : $.addEventListener("DOMContentLoaded", function() {
					t(C)
				}, !1), this
			},
			get : function(t) {
				return t === j ? D.call(this) : this[0 > t ? t + this.length : t]
			},
			toArray : function() {
				return this.get()
			},
			size : function() {
				return this.length
			},
			remove : function() {
				return this.each(function() {
					null != this.parentNode && this.parentNode.removeChild(this)
				})
			},
			each : function(t) {
				return P.every.call(this, function(e, n) {
					return t.call(e, n, e) !== !1
				}), this
			},
			filter : function(t) {
				return n(t) ? this.not(this.not(t)) : C(L.call(this, function(e) {
					return G.matches(e, t)
				}))
			},
			add : function(t, e) {
				return C(O(this.concat(C(t, e))))
			},
			is : function(t) {
				return this.length > 0 && G.matches(this[0], t)
			},
			not : function(t) {
				var e = [];
				if (n(t) && t.call !== j)
					this.each(function(n) {
						t.call(this, n) || e.push(this)
					});
				else {
					var r = "string" == typeof t ? this.filter(t) : s(t) && n(t.item) ? D.call(t) : C(t);
					this.forEach(function(t) {
						r.indexOf(t) < 0 && e.push(t)
					})
				}
				return C(e)
			},
			has : function(t) {
				return this.filter(function() {
					return o(t) ? C.contains(this, t) : C(this).find(t).size()
				})
			},
			eq : function(t) {
				return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
			},
			first : function() {
				var t = this[0];
				return t && !o(t) ? t : C(t)
			},
			last : function() {
				var t = this[this.length - 1];
				return t && !o(t) ? t : C(t)
			},
			find : function(t) {
				var e, n = this;
				return e = t ? "object" == typeof t ? C(t).filter(function() {
					var t = this;
					return P.some.call(n, function(e) {
						return C.contains(e, t)
					})
				}) : 1 == this.length ? C(G.qsa(this[0], t)) : this.map(function() {
					return G.qsa(this, t)
				}) : C()
			},
			closest : function(t, e) {
				var n = [], r = "object" == typeof t && C(t);
				return this.each(function(o, a) {
					for (; a && !( r ? r.indexOf(a) >= 0 : G.matches(a, t)); )
						a = a !== e && !i(a) && a.parentNode;
					a && n.indexOf(a) < 0 && n.push(a)
				}), C(n)
			},
			parents : function(t) {
				for (var e = [], n = this; n.length > 0; )
					n = C.map(n, function(t) {
						return ( t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) :
						void 0
					});
				return v(e, t)
			},
			parent : function(t) {
				return v(O(this.pluck("parentNode")), t)
			},
			children : function(t) {
				return v(this.map(function() {
					return d(this)
				}), t)
			},
			contents : function() {
				return this.map(function() {
					return this.contentDocument || D.call(this.childNodes)
				})
			},
			siblings : function(t) {
				return v(this.map(function(t, e) {
					return L.call(d(e.parentNode), function(t) {
						return t !== e
					})
				}), t)
			},
			empty : function() {
				return this.each(function() {
					this.innerHTML = ""
				})
			},
			pluck : function(t) {
				return C.map(this, function(e) {
					return e[t]
				})
			},
			show : function() {
				return this.each(function() {
					"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = p(this.nodeName))
				})
			},
			replaceWith : function(t) {
				return this.before(t).remove()
			},
			wrap : function(t) {
				var e = n(t);
				if (this[0] && !e)
					var r = C(t).get(0), i = r.parentNode || this.length > 1;
				return this.each(function(n) {
					C(this).wrapAll( e ? t.call(this, n) : i ? r.cloneNode(!0) : r)
				})
			},
			wrapAll : function(t) {
				if (this[0]) {
					C(this[0]).before( t = C(t));
					for (var e; ( e = t.children()).length; )
						t = e.first();
					C(t).append(this)
				}
				return this
			},
			wrapInner : function(t) {
				var e = n(t);
				return this.each(function(n) {
					var r = C(this), i = r.contents(), o = e ? t.call(this, n) : t;
					i.length ? i.wrapAll(o) : r.append(o)
				})
			},
			unwrap : function() {
				return this.parent().each(function() {
					C(this).replaceWith(C(this).children())
				}), this
			},
			clone : function() {
				return this.map(function() {
					return this.cloneNode(!0)
				})
			},
			hide : function() {
				return this.css("display", "none")
			},
			toggle : function(t) {
				return this.each(function() {
					var e = C(this);
					(t === j ? "none" == e.css("display") : t) ? e.show() : e.hide()
				})
			},
			prev : function(t) {
				return C(this.pluck("previousElementSibling")).filter(t || "*")
			},
			next : function(t) {
				return C(this.pluck("nextElementSibling")).filter(t || "*")
			},
			html : function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = this.innerHTML;
					C(this).empty().append(y(this, t, e, n))
				}) : 0 in this ? this[0].innerHTML : null
			},
			text : function(t) {
				return 0 in arguments ? this.each(function(e) {
					var n = y(this, t, e, this.textContent);
					this.textContent = null == n ? "" : "" + n
				}) : 0 in this ? this.pluck("textContent").join("") : null
			},
			attr : function(t, e) {
				var n;
				return "string" != typeof t || 1 in arguments ? this.each(function(n) {
					if (1 === this.nodeType)
						if (o(t))
							for (w in t)x(this, w, t[w]);
						else
							x(this, t, y(this, e, n, this.getAttribute(t)))
				}) : 0 in this && 1 == this[0].nodeType && null != ( n = this[0].getAttribute(t)) ? n : j
			},
			removeAttr : function(t) {
				return this.each(function() {
					1 === this.nodeType && t.split(" ").forEach(function(t) {
						x(this, t)
					}, this)
				})
			},
			prop : function(t, e) {
				return t = Q[t] || t, 1 in arguments ? this.each(function(n) {
					this[t] = y(this, e, n, this[t])
				}) : this[0] && this[0][t]
			},
			removeProp : function(t) {
				return t = Q[t] || t, this.each(function() {
					delete this[t]
				})
			},
			data : function(t, e) {
				var n = "data-" + t.replace(_, "-$1").toLowerCase(), r = 1 in arguments ? this.attr(n, e) : this.attr(n);
				return null !== r ? E(r) : j
			},
			val : function(t) {
				return 0 in arguments ? (null == t && ( t = ""), this.each(function(e) {
					this.value = y(this, t, e, this.value)
				})) : this[0] && (this[0].multiple ? C(this[0]).find("option").filter(function() {
					return this.selected
				}).pluck("value") : this[0].value)
			},
			offset : function(e) {
				if (e)
					return this.each(function(t) {
						var n = C(this), r = y(this, e, t, n.offset()), i = n.offsetParent().offset(), o = {
							top : r.top - i.top,
							left : r.left - i.left
						};
						"static" == n.css("position") && (o.position = "relative"), n.css(o)
					});
				if (!this.length)
					return null;
				if ($.documentElement !== this[0] && !C.contains($.documentElement, this[0]))
					return {
						top : 0,
						left : 0
					};
				var n = this[0].getBoundingClientRect();
				return {
					left : n.left + t.pageXOffset,
					top : n.top + t.pageYOffset,
					width : Math.round(n.width),
					height : Math.round(n.height)
				}
			},
			css : function(t, n) {
				if (arguments.length < 2) {
					var r = this[0];
					if ("string" == typeof t) {
						if (!r)
							return;
						return r.style[N(t)] || getComputedStyle(r, "").getPropertyValue(t)
					}
					if (te(t)) {
						if (!r)
							return;
						var i = {}, o = getComputedStyle(r, "");
						return C.each(t, function(t, e) {
							i[e] = r.style[N(e)] || o.getPropertyValue(e)
						}), i
					}
				}
				var a = "";
				if ("string" == e(t))
					n || 0 === n ? a = l(t) + ":" + h(t, n) : this.each(function() {
						this.style.removeProperty(l(t))
					});
				else
					for (w in t)t[w] || 0 === t[w] ? a += l(w) + ":" + h(w, t[w]) + ";" : this.each(function() {
						this.style.removeProperty(l(w))
					});
				return this.each(function() {
					this.style.cssText += ";" + a
				})
			},
			index : function(t) {
				return t ? this.indexOf(C(t)[0]) : this.parent().children().indexOf(this[0])
			},
			hasClass : function(t) {
				return t ? P.some.call(this, function(t) {
					return this.test(b(t))
				}, f(t)) : !1
			},
			addClass : function(t) {
				return t ? this.each(function(e) {
					if ("className" in this) {
						S = [];
						var n = b(this), r = y(this, t, e, n);
						r.split(/\s+/g).forEach(function(t) {
							C(this).hasClass(t) || S.push(t)
						}, this), S.length && b(this, n + ( n ? " " : "") + S.join(" "))
					}
				}) : this
			},
			removeClass : function(t) {
				return this.each(function(e) {
					if ("className" in this) {
						if (t === j)
							return b(this, "");
						S = b(this), y(this, t, e, S).split(/\s+/g).forEach(function(t) {
							S = S.replace(f(t), " ")
						}), b(this, S.trim())
					}
				})
			},
			toggleClass : function(t, e) {
				return t ? this.each(function(n) {
					var r = C(this), i = y(this, t, n, b(this));
					i.split(/\s+/g).forEach(function(t) {
						(e === j ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
					})
				}) : this
			},
			scrollTop : function(t) {
				if (this.length) {
					var e = "scrollTop" in this[0];
					return t === j ? e ? this[0].scrollTop : this[0].pageYOffset : this.each( e ? function() {
						this.scrollTop = t
					} : function() {
						this.scrollTo(this.scrollX, t)
					})
				}
			},
			scrollLeft : function(t) {
				if (this.length) {
					var e = "scrollLeft" in this[0];
					return t === j ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each( e ? function() {
						this.scrollLeft = t
					} : function() {
						this.scrollTo(t, this.scrollY)
					})
				}
			},
			position : function() {
				if (this.length) {
					var t = this[0], e = this.offsetParent(), n = this.offset(), r = q.test(e[0].nodeName) ? {
						top : 0,
						left : 0
					} : e.offset();
					return n.top -= parseFloat(C(t).css("margin-top")) || 0, n.left -= parseFloat(C(t).css("margin-left")) || 0, r.top += parseFloat(C(e[0]).css("border-top-width")) || 0, r.left += parseFloat(C(e[0]).css("border-left-width")) || 0, {
						top : n.top - r.top,
						left : n.left - r.left
					}
				}
			},
			offsetParent : function() {
				return this.map(function() {
					for (var t = this.offsetParent || $.body; t && !q.test(t.nodeName) && "static" == C(t).css("position"); )
						t = t.offsetParent;
					return t
				})
			}
		}, C.fn.detach = C.fn.remove, ["width", "height"].forEach(function(t) {
			var e = t.replace(/./, function(t) {
				return t[0].toUpperCase()
			});
			C.fn[t] = function(n) {
				var o, a = this[0];
				return n === j ? r(a) ? a["inner" + e] : i(a) ? a.documentElement["scroll" + e] : ( o = this.offset()) && o[t] : this.each(function(e) {
					a = C(this), a.css(t, y(this, n, e, a[t]()))
				})
			}
		}), H.forEach(function(n, r) {
			var i = r % 2;
			C.fn[n] = function() {
				var n, o, a = C.map(arguments, function(t) {
					var r = [];
					return n = e(t), "array" == n ? (t.forEach(function(t) {
						return t.nodeType !== j ? r.push(t) : C.zepto.isZ(t) ? r = r.concat(t.get()) :
						void ( r = r.concat(G.fragment(t)))
					}), r) : "object" == n || null == t ? t : G.fragment(t)
				}), s = this.length > 1;
				return a.length < 1 ? this : this.each(function(e, n) {
					o = i ? n : n.parentNode, n = 0 == r ? n.nextSibling : 1 == r ? n.firstChild : 2 == r ? n : null;
					var u = C.contains($.documentElement, o);
					a.forEach(function(e) {
						if (s)
							e = e.cloneNode(!0);
						else if (!o)
							return C(e).remove();
						o.insertBefore(e, n), u && T(e, function(e) {
							if (!(null == e.nodeName || "SCRIPT" !== e.nodeName.toUpperCase() || e.type && "text/javascript" !== e.type || e.src)) {
								var n = e.ownerDocument ? e.ownerDocument.defaultView : t;
								n.eval.call(n, e.innerHTML)
							}
						})
					})
				})
			}, C.fn[ i ? n + "To" : "insert" + ( r ? "Before" : "After")] = function(t) {
				return C(t)[n](this), this
			}
		}), G.Z.prototype = m.prototype = C.fn, G.uniq = O, G.deserializeValue = E, C.zepto = G, C
	}();
	return t.Zepto = e,
	void 0 === t.$ && (t.$ = e), function(e) {
		function n(t) {
			return t._zid || (t._zid = p++)
		}

		function r(t, e, r, a) {
			if ( e = i(e), e.ns)
				var s = o(e.ns);
			return (v[n(t)] || []).filter(function(t) {
				return !(!t || e.e && t.e != e.e || e.ns && !s.test(t.ns) || r && n(t.fn) !== n(r) || a && t.sel != a)
			})
		}

		function i(t) {
			var e = ("" + t).split(".");
			return {
				e : e[0],
				ns : e.slice(1).sort().join(" ")
			}
		}

		function o(t) {
			return RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
		}

		function a(t, e) {
			return t.del && !x && t.e in b || !!e
		}

		function s(t) {
			return E[t] || x && b[t] || t
		}

		function u(t, r, o, u, c, f, p) {
			var d = n(t), m = v[d] || (v[d] = []);
			r.split(/\s/).forEach(function(n) {
				if ("ready" == n)
					return e(document).ready(o);
				var r = i(n);
				r.fn = o, r.sel = c, r.e in E && ( o = function(t) {
					var n = t.relatedTarget;
					return !n || n !== this && !e.contains(this, n) ? r.fn.apply(this, arguments) :
					void 0
				}), r.del = f;
				var d = f || o;
				r.proxy = function(e) {
					if ( e = l(e), !e.isImmediatePropagationStopped()) {
						e.data = u;
						var n = d.apply(t, e._args == h ? [e] : [e].concat(e._args));
						return n === !1 && (e.preventDefault(), e.stopPropagation()), n
					}
				}, r.i = m.length, m.push(r), "addEventListener" in t && t.addEventListener(s(r.e), r.proxy, a(r, p))
			})
		}

		function c(t, e, i, o, u) {
			var c = n(t);
			(e || "").split(/\s/).forEach(function(e) {
				r(t, e, i, o).forEach(function(e) {
					delete v[c][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, a(e, u))
				})
			})
		}

		function l(t, n) {
			return (n || !t.isDefaultPrevented) && (n || ( n = t), e.each(C, function(e, r) {
				var i = n[e];
				t[e] = function() {
					return this[r] = T, i && i.apply(n, arguments)
				}, t[r] = j
			}), t.timeStamp || (t.timeStamp = Date.now()), (n.defaultPrevented !== h ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (t.isDefaultPrevented = T)), t
		}

		function f(t) {
			var e, n = {
				originalEvent : t
			};
			for (e in t)w.test(e) || t[e] === h || (n[e] = t[e]);
			return l(n, t)
		}

		var h, p = 1, d = Array.prototype.slice, m = e.isFunction, g = function(t) {
			return "string" == typeof t
		}, v = {}, y = {}, x = "onfocusin" in t, b = {
			focus : "focusin",
			blur : "focusout"
		}, E = {
			mouseenter : "mouseover",
			mouseleave : "mouseout"
		};
		y.click = y.mousedown = y.mouseup = y.mousemove = "MouseEvents", e.event = {
			add : u,
			remove : c
		}, e.proxy = function(t, r) {
			var i = 2 in arguments && d.call(arguments, 2);
			if (m(t)) {
				var o = function() {
					return t.apply(r, i ? i.concat(d.call(arguments)) : arguments)
				};
				return o._zid = n(t), o
			}
			if (g(r))
				return i ? (i.unshift(t[r], t), e.proxy.apply(null, i)) : e.proxy(t[r], t);
			throw new TypeError("expected function")
		}, e.fn.bind = function(t, e, n) {
			return this.on(t, e, n)
		}, e.fn.unbind = function(t, e) {
			return this.off(t, e)
		}, e.fn.one = function(t, e, n, r) {
			return this.on(t, e, n, r, 1)
		};
		var T = function() {
			return !0
		}, j = function() {
			return !1
		}, w = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/, C = {
			preventDefault : "isDefaultPrevented",
			stopImmediatePropagation : "isImmediatePropagationStopped",
			stopPropagation : "isPropagationStopped"
		};
		e.fn.delegate = function(t, e, n) {
			return this.on(e, t, n)
		}, e.fn.undelegate = function(t, e, n) {
			return this.off(e, t, n)
		}, e.fn.live = function(t, n) {
			return e(document.body).delegate(this.selector, t, n), this
		}, e.fn.die = function(t, n) {
			return e(document.body).undelegate(this.selector, t, n), this
		}, e.fn.on = function(t, n, r, i, o) {
			var a, s, l = this;
			return t && !g(t) ? (e.each(t, function(t, e) {
				l.on(t, n, r, e, o)
			}), l) : (g(n) || m(i) || i === !1 || ( i = r, r = n, n = h), (i === h || r === !1) && ( i = r, r = h), i === !1 && ( i = j), l.each(function(l, h) {
				o && ( a = function(t) {
					return c(h, t.type, i), i.apply(this, arguments)
				}), n && ( s = function(t) {
					var r, o = e(t.target).closest(n, h).get(0);
					return o && o !== h ? ( r = e.extend(f(t), {
						currentTarget : o,
						liveFired : h
					}), (a || i).apply(o, [r].concat(d.call(arguments, 1)))) :
					void 0
				}), u(h, t, i, r, n, s || a)
			}))
		}, e.fn.off = function(t, n, r) {
			var i = this;
			return t && !g(t) ? (e.each(t, function(t, e) {
				i.off(t, n, e)
			}), i) : (g(n) || m(r) || r === !1 || ( r = n, n = h), r === !1 && ( r = j), i.each(function() {
				c(this, t, r, n)
			}))
		}, e.fn.trigger = function(t, n) {
			return t = g(t) || e.isPlainObject(t) ? e.Event(t) : l(t), t._args = n, this.each(function() {
				t.type in b && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : e(this).triggerHandler(t, n)
			})
		}, e.fn.triggerHandler = function(t, n) {
			var i, o;
			return this.each(function(a, s) {
				i = f(g(t) ? e.Event(t) : t), i._args = n, i.target = s, e.each(r(s, t.type || t), function(t, e) {
					return o = e.proxy(i), i.isImmediatePropagationStopped() ? !1 :
					void 0
				})
			}), o
		}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(t) {
			e.fn[t] = function(e) {
				return 0 in arguments ? this.bind(t, e) : this.trigger(t)
			}
		}), e.Event = function(t, e) {
			g(t) || ( e = t, t = e.type);
			var n = document.createEvent(y[t] || "Events"), r = !0;
			if (e)
				for (var i in e)"bubbles" == i ? r = !!e[i] : n[i] = e[i];
			return n.initEvent(t, r, !0), l(n)
		}
	}(e), function(e) {
		function n(t, n, r) {
			var i = e.Event(n);
			return e(t).trigger(i, r), !i.isDefaultPrevented()
		}

		function r(t, e, r, i) {
			return t.global ? n(e || b, r, i) :
			void 0
		}

		function i(t) {
			t.global && 0 === e.active++ && r(t, null, "ajaxStart")
		}

		function o(t) {
			t.global && !--e.active && r(t, null, "ajaxStop")
		}

		function a(t, e) {
			var n = e.context;
			return e.beforeSend.call(n, t, e) === !1 || r(e, n, "ajaxBeforeSend", [t, e]) === !1 ? !1 :
			void  r(e, n, "ajaxSend", [t, e])
		}

		function s(t, e, n, i) {
			var o = n.context, a = "success";
			n.success.call(o, t, a, e), i && i.resolveWith(o, [t, a, e]), r(n, o, "ajaxSuccess", [e, n, t]), c(a, e, n)
		}

		function u(t, e, n, i, o) {
			var a = i.context;
			i.error.call(a, n, e, t), o && o.rejectWith(a, [n, e, t]), r(i, a, "ajaxError", [n, i, t || e]), c(e, n, i)
		}

		function c(t, e, n) {
			var i = n.context;
			n.complete.call(i, e, t), r(n, i, "ajaxComplete", [e, n]), o(n)
		}

		function l(t, e, n) {
			if (n.dataFilter == f)
				return t;
			var r = n.context;
			return n.dataFilter.call(r, t, e)
		}

		function f() {
		}

		function h(t) {
			return t && ( t = t.split(";",2)[0]), t && (t == C ? "html" : t == w ? "json" : T.test(t) ? "script" : j.test(t) && "xml") || "text"
		}

		function p(t, e) {
			return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
		}

		function d(t) {
			t.processData && t.data && "string" != e.type(t.data) && (t.data = e.param(t.data, t.traditional)), !t.data || t.type && "GET" != t.type.toUpperCase() && "jsonp" != t.dataType || (t.url = p(t.url, t.data), t.data =
			void 0)
		}

		function m(t, n, r, i) {
			return e.isFunction(n) && ( i = r, r = n, n =
			void 0), e.isFunction(r) || ( i = r, r =
			void 0), {
				url : t,
				data : n,
				success : r,
				dataType : i
			}
		}

		function g(t, n, r, i) {
			var o, a = e.isArray(n), s = e.isPlainObject(n);
			e.each(n, function(n, u) {
				o = e.type(u), i && ( n = r ? i : i + "[" + (s || "object" == o || "array" == o ? n : "") + "]"), !i && a ? t.add(u.name, u.value) : "array" == o || !r && "object" == o ? g(t, u, r, n) : t.add(n, u)
			})
		}

		var v, y, x = +new Date, b = t.document, E = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, T = /^(?:text|application)\/javascript/i, j = /^(?:text|application)\/xml/i, w = "application/json", C = "text/html", S = /^\s*$/, N = b.createElement("a");
		N.href = t.location.href, e.active = 0, e.ajaxJSONP = function(n, r) {
			if (!("type" in n))
				return e.ajax(n);
			var i, o, c = n.jsonpCallback, l = (e.isFunction(c) ? c() : c) || "Zepto" + x++, f = b.createElement("script"), h = t[l], p = function(t) {
				e(f).triggerHandler("error", t || "abort")
			}, d = {
				abort : p
			};
			return r && r.promise(d), e(f).on("load error", function(a, c) {
				clearTimeout(o), e(f).off().remove(), "error" != a.type && i ? s(i[0], d, n, r) : u(null, c || "error", d, n, r), t[l] = h, i && e.isFunction(h) && h(i[0]), h = i =
				void 0
			}), a(d, n) === !1 ? (p("abort"), d) : (t[l] = function() {
				i = arguments
			}, f.src = n.url.replace(/\?(.+)=\?/, "?$1=" + l), b.head.appendChild(f), n.timeout > 0 && ( o = setTimeout(function() {
				p("timeout")
			}, n.timeout)), d)
		}, e.ajaxSettings = {
			type : "GET",
			beforeSend : f,
			success : f,
			error : f,
			complete : f,
			context : null,
			global : !0,
			xhr : function() {
				return new t.XMLHttpRequest
			},
			accepts : {
				script : "text/javascript, application/javascript, application/x-javascript",
				json : w,
				xml : "application/xml, text/xml",
				html : C,
				text : "text/plain"
			},
			crossDomain : !1,
			timeout : 0,
			processData : !0,
			cache : !0,
			dataFilter : f
		}, e.ajax = function(n) {
			var r, o, c = e.extend({}, n || {}), m = e.Deferred && e.Deferred();
			for (v in e.ajaxSettings)
			void 0 === c[v] && (c[v] = e.ajaxSettings[v]);
			i(c), c.crossDomain || ( r = b.createElement("a"), r.href = c.url, r.href = r.href, c.crossDomain = N.protocol + "//" + N.host != r.protocol + "//" + r.host), c.url || (c.url = "" + t.location), ( o = c.url.indexOf("#")) > -1 && (c.url = c.url.slice(0, o)), d(c);
			var g = c.dataType, x = /\?.+=\?/.test(c.url);
			if (x && ( g = "jsonp"), c.cache !== !1 && (n && n.cache === !0 || "script" != g && "jsonp" != g) || (c.url = p(c.url, "_=" + Date.now())), "jsonp" == g)
				return x || (c.url = p(c.url, c.jsonp ? c.jsonp + "=?" : c.jsonp === !1 ? "" : "callback=?")), e.ajaxJSONP(c, m);
			var E, T = c.accepts[g], j = {}, w = function(t, e) {
				j[t.toLowerCase()] = [t, e]
			}, C = /^([\w-]+:)\/\//.test(c.url) ? RegExp.$1 : t.location.protocol, O = c.xhr(), P = O.setRequestHeader;
			if (m && m.promise(O), c.crossDomain || w("X-Requested-With", "XMLHttpRequest"), w("Accept", T || "*/*"), ( T = c.mimeType || T) && (T.indexOf(",") > -1 && ( T = T.split(",",2)[0]), O.overrideMimeType && O.overrideMimeType(T)), (c.contentType || c.contentType !== !1 && c.data && "GET" != c.type.toUpperCase()) && w("Content-Type", c.contentType || "application/x-www-form-urlencoded"), c.headers)
				for (y in c.headers)w(y, c.headers[y]);
			if (O.setRequestHeader = w, O.onreadystatechange = function() {
					if (4 == O.readyState) {
						O.onreadystatechange = f, clearTimeout(E);
						var t, n = !1;
						if (O.status >= 200 && O.status < 300 || 304 == O.status || 0 == O.status && "file:" == C) {
							if ( g = g || h(c.mimeType || O.getResponseHeader("content-type")), "arraybuffer" == O.responseType || "blob" == O.responseType)
								t = O.response;
							else {
								t = O.responseText;
								try {
									t = l(t, g, c), "script" == g ? (1, eval)(t) : "xml" == g ? t = O.responseXML : "json" == g && ( t = S.test(t) ? null : e.parseJSON(t))
								} catch(r) {
									n = r
								}
								if (n)
									return u(n, "parsererror", O, c, m)
							}
							s(t, O, c, m)
						} else
							u(O.statusText || null, O.status ? "error" : "abort", O, c, m)
					}
				}, a(O, c) === !1)
				return O.abort(), u(null, "abort", O, c, m), O;
			var A = "async" in c ? c.async : !0;
			if (O.open(c.type, c.url, A, c.username, c.password), c.xhrFields)
				for (y in c.xhrFields)
				O[y] = c.xhrFields[y];
			for (y in j)
			P.apply(O, j[y]);
			return c.timeout > 0 && ( E = setTimeout(function() {
				O.onreadystatechange = f, O.abort(), u(null, "timeout", O, c, m)
			}, c.timeout)), O.send(c.data ? c.data : null), O
		}, e.get = function() {
			return e.ajax(m.apply(null, arguments))
		}, e.post = function() {
			var t = m.apply(null, arguments);
			return t.type = "POST", e.ajax(t)
		}, e.getJSON = function() {
			var t = m.apply(null, arguments);
			return t.dataType = "json", e.ajax(t)
		}, e.fn.load = function(t, n, r) {
			if (!this.length)
				return this;
			var i, o = this, a = t.split(/\s/), s = m(t, n, r), u = s.success;
			return a.length > 1 && (s.url = a[0], i = a[1]), s.success = function(t) {
				o.html( i ? e("<div>").html(t.replace(E, "")).find(i) : t), u && u.apply(o, arguments)
			}, e.ajax(s), this
		};
		var O = encodeURIComponent;
		e.param = function(t, n) {
			var r = [];
			return r.add = function(t, n) {
				e.isFunction(n) && ( n = n()), null == n && ( n = ""), this.push(O(t) + "=" + O(n))
			}, g(r, t, n), r.join("&").replace(/%20/g, "+")
		}
	}(e), function(t) {
		t.fn.serializeArray = function() {
			var e, n, r = [], i = function(t) {
				return t.forEach ? t.forEach(i) :
				void  r.push({
					name : e,
					value : t
				})
			};
			return this[0] && t.each(this[0].elements, function(r, o) {
				n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && i(t(o).val())
			}), r
		}, t.fn.serialize = function() {
			var t = [];
			return this.serializeArray().forEach(function(e) {
				t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
			}), t.join("&")
		}, t.fn.submit = function(e) {
			if (0 in arguments)
				this.bind("submit", e);
			else if (this.length) {
				var n = t.Event("submit");
				this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
			}
			return this
		}
	}(e), function() {
		try {
			getComputedStyle(
			void 0)
		} catch(e) {
			var n = getComputedStyle;
			t.getComputedStyle = function(t, e) {
				try {
					return n(t, e)
				} catch(r) {
					return null
				}
			}
		}
	}(), e
}), function(t, e) {
	function n(t) {
		return t.replace(/([A-Z])/g, "-$1").toLowerCase()
	}

	function r(t) {
		return i ? i + t : t.toLowerCase()
	}

	var i, o, a, s, u, c, l, f, h, p, d = "", m = {
		Webkit : "webkit",
		Moz : "",
		O : "o"
	}, g = document.createElement("div"), v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i, y = {};
	g.style.transform === e && t.each(m, function(t, n) {
		return g.style[t + "TransitionProperty"] !== e ? ( d = "-" + t.toLowerCase() + "-", i = n, !1) : e
	}), o = d + "transform", y[ a = d + "transition-property"] = y[ s = d + "transition-duration"] = y[ c = d + "transition-delay"] = y[ u = d + "transition-timing-function"] = y[ l = d + "animation-name"] = y[ f = d + "animation-duration"] = y[ p = d + "animation-delay"] = y[ h = d + "animation-timing-function"] = "", t.fx = {
		off : i === e && g.style.transitionProperty === e,
		speeds : {
			_default : 400,
			fast : 200,
			slow : 600
		},
		cssPrefix : d,
		transitionEnd : r("TransitionEnd"),
		animationEnd : r("AnimationEnd")
	}, t.fn.animate = function(n, r, i, o, a) {
		return t.isFunction(r) && ( o = r, i = e, r = e), t.isFunction(i) && ( o = i, i = e), t.isPlainObject(r) && ( i = r.easing, o = r.complete, a = r.delay, r = r.duration), r && ( r = ("number" == typeof r ? r : t.fx.speeds[r] || t.fx.speeds._default) / 1e3), a && ( a = parseFloat(a) / 1e3), this.anim(n, r, i, o, a)
	}, t.fn.anim = function(r, i, d, m, g) {
		var x, b, E, T = {}, j = "", w = this, C = t.fx.transitionEnd, S = !1;
		if (i === e && ( i = t.fx.speeds._default / 1e3), g === e && ( g = 0), t.fx.off && ( i = 0), "string" == typeof r)
			T[l] = r, T[f] = i + "s", T[p] = g + "s", T[h] = d || "linear", C = t.fx.animationEnd;
		else {
			b = [];
			for (x in r)v.test(x) ? j += x + "(" + r[x] + ") " : (T[x] = r[x], b.push(n(x)));
			j && (T[o] = j, b.push(o)), i > 0 && "object" == typeof r && (T[a] = b.join(", "), T[s] = i + "s", T[c] = g + "s", T[u] = d || "linear")
		}
		return E = function(n) {
			if (e !== n) {
				if (n.target !== n.currentTarget)
					return;
				t(n.target).unbind(C, E)
			} else
				t(this).unbind(C, E);
			S = !0, t(this).css(y), m && m.call(this)
		}, i > 0 && (this.bind(C, E), setTimeout(function() {
			S || E.call(w)
		}, 1e3 * (i + g) + 25)), this.size() && this.get(0).clientLeft, this.css(T), i > 0 || setTimeout(function() {
			w.each(function() {
				E.call(this)
			})
		}, 0), this
	}, g = null
}(Zepto), function(t, e) {
	function n(n, r, i, o, a) {
		"function" != typeof r || a || ( a = r, r = e);
		var s = {
			opacity : i
		};
		return o && (s.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(s, r, null, a)
	}

	function r(e, r, i, o) {
		return n(e, r, 0, i, function() {
			a.call(t(this)), o && o.call(this)
		})
	}

	var i = window.document, o = (i.documentElement, t.fn.show), a = t.fn.hide, s = t.fn.toggle;
	t.fn.show = function(t, r) {
		return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", r)
	}, t.fn.hide = function(t, n) {
		return t === e ? a.call(this) : r(this, t, "0,0", n)
	}, t.fn.toggle = function(n, r) {
		return n === e || "boolean" == typeof n ? s.call(this, n) : this.each(function() {
			var e = t(this);
			e["none"==e.css("display")?"show":"hide"](n, r)
		})
	}, t.fn.fadeTo = function(t, e, r) {
		return n(this, t, e, null, r)
	}, t.fn.fadeIn = function(t, e) {
		var n = this.css("opacity");
		return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
	}, t.fn.fadeOut = function(t, e) {
		return r(this, t, null, e)
	}, t.fn.fadeToggle = function(e, n) {
		return this.each(function() {
			var r = t(this);
			r[0==r.css("opacity")||"none"==r.css("display")?"fadeIn":"fadeOut"](e, n)
		})
	}
}(Zepto);
//js模板引擎
var tpl = function(a, d) {
	var c = function(l) {
		var j, h = [], g = [];
		for (j in l) {
			h.push(j);
			g.push(l[j])
		}
		return (new Function(h, c.$)).apply(l, g)
	};
	if (!c.$) {
		var f = a.split("<%");
		c.$ = "var $=''";
		for (var b = 0; b < f.length; b++) {
			var e = f[b].split("%>");
			if (b != 0) {
				c.$ += "=" == e[0].charAt(0) ? "+(" + e[0].substr(1) + ")" : ";" + e[0].replace(/\r\n/g, "") + "$=$"
			}
			c.$ += "+'" + e[e.length - 1].replace(/\'/g, "\\'").replace(/\r\n/g, "\\n").replace(/\n/g, "\\n").replace(/\r/g, "\\n") + "'"
		}
		c.$ += ";return $;"
	}
	return d ? c(d) : c
};
/*selector*/
! function(t) {
	function n(n) {
		return n = t(n), !(!n.width() && !n.height()) && "none" !== n.css("display")
	}

	function e(t, n) {
		t = t.replace(/=#\]/g, '="#"]');
		var e, r, i = s.exec(t);
		if (i && i[2] in o && ( e = o[i[2]], r = i[3], t = i[1], r)) {
			var u = Number(r);
			r = isNaN(u) ? r.replace(/^["']|["']$/g, "") : u
		}
		return n(t, e, r)
	}

	var r = t.zepto, i = r.qsa, u = r.matches, o = t.expr[":"] = {
		visible : function() {
			return n(this) ? this :
			void 0
		},
		hidden : function() {
			return n(this) ?
			void 0 : this
		},
		selected : function() {
			return this.selected ? this :
			void 0
		},
		checked : function() {
			return this.checked ? this :
			void 0
		},
		parent : function() {
			return this.parentNode
		},
		first : function(t) {
			return 0 === t ? this :
			void 0
		},
		last : function(t, n) {
			return t === n.length - 1 ? this :
			void 0
		},
		eq : function(t, n, e) {
			return t === e ? this :
			void 0
		},
		contains : function(n, e, r) {
			return t(this).text().indexOf(r) > -1 ? this :
			void 0
		},
		has : function(t, n, e) {
			return r.qsa(this, e).length ? this :
			void 0
		}
	}, s = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"), c = /^\s*>/, a = "Zepto" + +new Date;
	r.qsa = function(n, u) {
		return e(u, function(e, o, s) {
			try {
				var h;
				!e && o ? e = "*" : c.test(e) && ( h = t(n).addClass(a), e = "." + a + " " + e);
				var f = i(n, e)
			} catch(d) {
				throw console.error("error performing selector: %o", u), d
			} finally {
				h && h.removeClass(a)
			}
			return o ? r.uniq(t.map(f, function(t, n) {
				return o.call(t, n, f, s)
			})) : f
		})
	}, r.matches = function(t, n) {
		return e(n, function(n, e, r) {
			return !(n && !u(t, n) || e && e.call(t, null, r) !== t)
		})
	}
}(Zepto);
/*手势*/
! function(t) {
	function e(t) {
		return "tagName" in t ? t : t.parentNode
	}

	function n(t, e, n, i) {
		var o = Math.abs(t - e), r = Math.abs(n - i);
		return o >= r ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
	}

	function i() {
		d = null, u.last && (u.el.trigger("longTap"), u = {})
	}

	function o() {
		d && clearTimeout(d), d = null
	}

	function r() {
		a && clearTimeout(a), s && clearTimeout(s), c && clearTimeout(c), d && clearTimeout(d), a = s = c = d = null, u = {}
	}

	var a, s, c, d, u = {}, l = 750;
	t(document).ready(function() {
		var f, h;
		t(document.body).bind("touchstart", function(n) {
			f = Date.now(), h = f - (u.last || f), u.el = t(e(n.touches[0].target)), a && clearTimeout(a), u.x1 = n.touches[0].pageX, u.y1 = n.touches[0].pageY, h > 0 && 250 >= h && (u.isDoubleTap = !0), u.last = f, d = setTimeout(i, l)
		}).bind("touchmove", function(t) {
			o(), u.x2 = t.touches[0].pageX, u.y2 = t.touches[0].pageY, Math.abs(u.x1 - u.x2) > 10 && t.preventDefault()
		}).bind("touchend", function() {
			o(), u.x2 && Math.abs(u.x1 - u.x2) > 30 || u.y2 && Math.abs(u.y1 - u.y2) > 30 ? c = setTimeout(function() {
				u.el.trigger("swipe"), u.el.trigger("swipe" + n(u.x1, u.x2, u.y1, u.y2)), u = {}
			}, 0) : "last" in u && ( s = setTimeout(function() {
				var e = t.Event("tap");
				e.cancelTouch = r, u.el.trigger(e), u.isDoubleTap ? (u.el.trigger("doubleTap"), u = {}) : a = setTimeout(function() {
					a = null, u.el.trigger("singleTap"), u = {}
				}, 250)
			}, 0))
		}).bind("touchcancel", r), t(window).bind("scroll", r)
	}), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
		t.fn[e] = function(t) {
			return this.bind(e, t)
		}
	})
}(Zepto);
/*toast,dialog*/
! function(a) {"use strict";
	a.fn.transitionEnd = function(a) {
		function e(f) {
			if (f.target === this)
				for (a.call(this, f), c = 0; c < b.length; c++)
					d.off(b[c], e)
		}

		var c, b = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], d = this;
		if (a)
			for ( c = 0; c < b.length; c++)
				d.on(b[c], e);
		return this
	}, a.support = function() {
		var a = {
			touch : !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch)
		};
		return a
	}(), a.touchEvents = {
		start : a.support.touch ? "touchstart" : "mousedown",
		move : a.support.touch ? "touchmove" : "mousemove",
		end : a.support.touch ? "touchend" : "mouseup"
	}, a.getTouchPosition = function(a) {
		return a = a.originalEvent || a, "touchstart" === a.type || "touchmove" === a.type || "touchend" === a.type ? {
			x : a.targetTouches[0].pageX,
			y : a.targetTouches[0].pageY
		} : {
			x : a.pageX,
			y : a.pageY
		}
	}, a.fn.scrollHeight = function() {
		return this[0].scrollHeight
	}, a.fn.transform = function(a) {
		var b, c;
		for ( b = 0; b < this.length; b++)
			c = this[b].style, c.webkitTransform = c.MsTransform = c.msTransform = c.MozTransform = c.OTransform = c.transform = a;
		return this
	}, a.fn.transition = function(a) {
		var b, c;
		for ("string" != typeof a && (a += "ms"), b = 0; b < this.length; b++)
			c = this[b].style, c.webkitTransitionDuration = c.MsTransitionDuration = c.msTransitionDuration = c.MozTransitionDuration = c.OTransitionDuration = c.transitionDuration = a;
		return this
	}, a.getTranslate = function(a, b) {
		var c, d, e, f;
		return "undefined" == typeof b && ( b = "x"), e = window.getComputedStyle(a, null), window.WebKitCSSMatrix ? f = new WebKitCSSMatrix("none" === e.webkitTransform ? "" : e.webkitTransform) : ( f = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), c = f.toString().split(",")), "x" === b && ( d = window.WebKitCSSMatrix ? f.m41 : 16 === c.length ? parseFloat(c[12]) : parseFloat(c[4])), "y" === b && ( d = window.WebKitCSSMatrix ? f.m42 : 16 === c.length ? parseFloat(c[13]) : parseFloat(c[5])), d || 0
	}, a.requestAnimationFrame = function(a) {
		return window.requestAnimationFrame ? window.requestAnimationFrame(a) : window.webkitRequestAnimationFrame ? window.webkitRequestAnimationFrame(a) : window.mozRequestAnimationFrame ? window.mozRequestAnimationFrame(a) : window.setTimeout(a, 1e3 / 60)
	}, a.cancelAnimationFrame = function(a) {
		return window.cancelAnimationFrame ? window.cancelAnimationFrame(a) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(a) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(a) : window.clearTimeout(a)
	}, a.fn.join = function(a) {
		return this.toArray().join(a)
	}
}($), + function(a) {"use strict";
	var e, c = function(b, c) {
		var e, f;
		c = c || "", a("<div class='weui_mask_transparent'></div>").appendTo(document.body), e = '<div class="weui_toast ' + c + '">' + b + "</div>", f = a(e).appendTo(document.body), f.show(), f.addClass("weui_toast_visible")
	}, d = function() {
		a(".weui_mask_transparent").hide(), a(".weui_toast_visible").removeClass("weui_toast_visible").transitionEnd(function() {
			a(this).remove()
		})
	};
	a.toast = function(a, b) {
		var f;
		"cancel" == b ? f = "weui_toast_cancel" : "forbidden" == b && ( f = "weui_toast_forbidden"), c('<i class="weui_icon_toast"></i><p class="weui_toast_content">' + (a || "已经完成") + "</p>", f), setTimeout(function() {
			d()
		}, e.duration)
	}, a.showLoading = function(a) {
		var d, b = '<div class="weui_loading">';
		for ( d = 0; 12 > d; d++)
			b += '<div class="weui_loading_leaf weui_loading_leaf_' + d + '"></div>';
		b += "</div>", b += '<p class="weui_toast_content">' + (a || "数据加载中") + "</p>", c(b, "weui_loading_toast")
	}, a.hideLoading = function() {
		d()
	}, e = a.toast.prototype.defaults = {
		duration : 2e3
	}
}($), + function(a) {"use strict";
	var b;
	a.modal = function(c) {
		var d, e, f, g;
		c = a.extend({}, b, c), d = c.buttons, e = d.map(function(a) {
			return '<a href="javascript:;" class="weui_btn_dialog ' + (a.className || "") + '">' + a.text + "</a>"
		}).join(""), f = '<div class="weui_dialog"><div class="weui_dialog_hd"><strong class="weui_dialog_title">' + c.title + "</strong></div>" + (c.text ? '<div class="weui_dialog_bd">' + c.text + "</div>" : "") + '<div class="weui_dialog_ft">' + e + "</div>" + "</div>", g = a.openModal(f), g.find(".weui_btn_dialog").each(function(b, e) {
			var f = a(e);
			f.click(function() {
				c.autoClose && a.closeModal(), d[b].onClick && d[b].onClick()
			})
		})
	}, a.openModal = function(b) {
		var d, c = a("<div class='weui_mask'></div>").appendTo(document.body);
		return c.show(), d = a(b).appendTo(document.body), d.show(), c.addClass("weui_mask_visible"), d.addClass("weui_dialog_visible"), d
	}, a.closeModal = function() {
		a(".weui_mask_visible").removeClass("weui_mask_visible").transitionEnd(function() {
			a(this).remove()
		}), a(".weui_dialog_visible").removeClass("weui_dialog_visible").transitionEnd(function() {
			a(this).remove()
		})
	}, a.alert = function(c, d, e) {
		return "function" == typeof d && ( e = arguments[1], d =
		void 0), a.modal({
			text : c,
			title : d,
			buttons : [{
				text : b.buttonOK,
				className : "primary",
				onClick : e
			}]
		})
	}, a.confirm = function(c, d, e, f) {
		return "function" == typeof d && ( f = arguments[2], e = arguments[1], d =
		void 0), a.modal({
			text : c,
			title : d,
			buttons : [{
				text : b.buttonCancel,
				className : "default",
				onClick : f
			}, {
				text : b.buttonOK,
				className : "primary",
				onClick : e
			}]
		})
	}, a.prompt = function(c, d, e, f) {
		return "function" == typeof d && ( f = arguments[2], e = arguments[1], d =
		void 0), a.modal({
			text : "<p class='weui-prompt-text'>" + (c || "") + "</p><input type='text' class='weui_input weui-prompt-input' id='weui-prompt-input'/>",
			title : d,
			buttons : [{
				text : b.buttonCancel,
				className : "default",
				onClick : f
			}, {
				text : b.buttonOK,
				className : "primary",
				onClick : function() {
					e && e(a("#weui-prompt-input").val())
				}
			}]
		})
	}, b = a.modal.prototype.defaults = {
		title : "提示",
		text :
		void 0,
		buttonOK : "确定",
		buttonCancel : "取消",
		buttons : [{
			text : "确定",
			className : "primary"
		}],
		autoClose : !0
	}
}($);
//toptips
+ function($) {"use strict";
	var timeout;
	$.toptips = function(text, duration, type) {
		if (!text)
			return;
		if ( typeof duration === typeof "a") {
			type = duration;
			duration = undefined;
		}
		var duration = duration || 3000;
		var className = type ? type : 'weui_warn';
		var $t = $('.weui_toptips').remove();
		$t = $('<div class="weui_toptips"></div>').appendTo(document.body);
		$t.html(text);
		$t[0].className = 'weui_toptips ' + className
		clearTimeout(timeout);
		if (!$t.hasClass('weui_toptips_visible')) {
			$t.show().width();
			$t.addClass('weui_toptips_visible');
		}
		timeout = setTimeout(function() {
			$t.remove();
		}, duration);
	}
}($);
//actions
+ function($) {"use strict";
	var defaults;
	var show = function(params) {
		var mask = $("<div class='weui_mask weui_actions_mask'></div>").appendTo(document.body);
		var actions = params.actions || [];
		var actionsHtml = actions.map(function(d, i) {
			return '<div class="weui_actionsheet_cell ' + (d.className || "") + '">' + d.text + '</div>';
		}).join("");
		var titleHtml = "";
		if (params.title) {
			titleHtml = '<div class="weui_actionsheet_title">' + params.title + '</div>';
		}
		var tpl = '<div class="weui_actionsheet " id="weui_actionsheet">' + titleHtml + '<div class="weui_actionsheet_menu">' + actionsHtml + '</div>' + '<div class="weui_actionsheet_action">' + '<div class="weui_actionsheet_cell weui_actionsheet_cancel">取消</div>' + '</div>' + '</div>';
		var dialog = $(tpl).appendTo(document.body);
		dialog.find(".weui_actionsheet_menu .weui_actionsheet_cell, .weui_actionsheet_action .weui_actionsheet_cell").each(function(i, e) {
			$(e).click(function() {
				$.closeActions();
				params.onClose && params.onClose();
				if (actions[i] && actions[i].onClick) {
					actions[i].onClick();
				}
			})
		});
		mask.show();
		dialog.show();
		mask.addClass("weui_mask_visible");
		dialog.addClass("weui_actionsheet_toggle");
		$(".weui_mask,.weui_actionsheet").removeAttr("style");
	};
	var hide = function() {
		$(".weui_mask").removeClass("weui_mask_visible").transitionEnd(function() {
			$(this).remove();
		});
		$(".weui_actionsheet").removeClass("weui_actionsheet_toggle").transitionEnd(function() {
			$(this).remove();
		});
	}
	$.actions = function(params) {
		params = $.extend({}, defaults, params);
		show(params);
	}
	$.closeActions = function() {
		hide();
	}
	$(document).on("tap click", ".weui_actions_mask", function() {
		$.closeActions();
	});
	var defaults = $.actions.prototype.defaults = {
		title : undefined,
		onClose : undefined,
	}
}($);
;(function($) {
	$.fn.searchBar = function(options) {
		options = $.extend({
			focusingClass : 'weui_search_focusing',
			searchText : "搜索",
			cancelText : "取消"
		}, options);
		var html = '<div class="weui_search_bar">' + '<form class="weui_search_outer"><div class="weui_search_inner"><i class="weui_icon_search"></i><input type="search" class="weui_search_input" id="weui_search_input" placeholder="' + options.searchText + '" required/>' + '<a href="javascript:" class="weui_icon_clear"></a></div><label for="weui_search_input" class="weui_search_text"><i class="weui_icon_search"></i><span>' + options.searchText + '</span></label></form>' + '<a href="javascript:" class="weui_search_cancel">' + options.cancelText + '</a></div>';
		var $search = $(html);
		this.append($search);
		const $searchBar = this.find('.weui_search_bar');
		const $searchText = this.find('.weui_search_text');
		const $searchInput = this.find('.weui_search_input');
		this.on('focus', '#weui_search_input', function() {
			$searchText.hide();
			$searchBar.addClass(options.focusingClass);
			bindEvent($searchInput, 'onfocus', options);
		}).on('blur', '#weui_search_input', function() {
			$searchBar.removeClass(options.focusingClass);
			!!$(this).val() ? $searchText.hide() : $searchText.show();
			bindEvent($searchInput, 'onblur', options);
		}).on('touchend', '.weui_search_cancel', function() {
			$searchInput.val('');
			bindEvent($searchInput, 'oncancel', options);
		}).on('touchend', '.weui_icon_clear', function(e) {
			e.preventDefault();
			$searchInput.val('');
			if (document.activeElement.id != 'search_input') {
				$searchInput.trigger('focus');
			}
			bindEvent($searchInput, 'onclear', options);
		}).on('input', '.weui_search_input', function() {
			bindEvent($searchInput, 'input', options);
		}).on('submit', '.weui_search_outer', function() {
			if ( typeof (options.onsubmit) == 'function') {
				bindEvent($searchInput, 'onsubmit', options);
				return false;
			}
		});
		function bindEvent(target, event, options) {
			if ( typeof (options[event]) == 'function') {
				var value = $(target).val();
				options[event].call(target, value);
			}
		}

	};
})($);
(function() {
	function _validate($input) {
		var input = $input[0], val = $input.val();
		if (input.tagName == "INPUT" || input.tagName == "TEXTAREA") {
			var reg = input.getAttribute("required") || input.getAttribute("pattern") || "";
			if (!$input.val().length) {
				return "empty";
			} else if (reg) {
				return new RegExp(reg).test(val) ? null : "notMatch";
			} else {
				return null;
			}
		} else if (input.getAttribute("type") == "checkbox" || input.getAttribute("type") == "radio") {
			return input.checked ? null : "empty";
		} else if (val.length) {
			return null;
		}
		return "empty";
	}

	function _showErrorMsg(error) {
		if (error) {
			var $dom = error.$dom, msg = error.msg, tips = $dom.attr(msg + "Tips") || $dom.attr("tips") || $dom.attr("placeholder");
			if (tips)
				$.toptips(tips);
			$dom.parents(".weui_cell").addClass("weui_cell_warn");
		}
	}

	var oldFnForm = $.fn.form;
	$.fn.form = function() {
		return this.each(function(index, ele) {
			var $form = $(ele);
			$form.find("[required]").on("blur", function() {
				var $this = $(this), errorMsg;
				if ($this.val().length < 1)
					return;
				errorMsg = _validate($this);
				if (errorMsg) {
					_showErrorMsg({
						$dom : $this,
						msg : errorMsg
					});
				}
			}).on("focus", function() {
				var $this = $(this);
				$this.parents(".weui_cell").removeClass("weui_cell_warn");
			});
		});
	};
	$.fn.form.noConflict = function() {
		return oldFnForm;
	};
	var oldFnValidate = $.fn.validate;
	$.fn.validate = function(callback) {
		return this.each(function() {
			var $requireds = $(this).find("[required]");
			if ( typeof callback != "function")
				callback = _showErrorMsg;
			for (var i = 0, len = $requireds.length; i < len; ++i) {
				var $dom = $requireds.eq(i), errorMsg = _validate($dom), error = {
					$dom : $dom,
					msg : errorMsg
				};
				if (errorMsg) {
					if (!callback(error))
						_showErrorMsg(error);
					return;
				}
			}
			callback(null);
		});
	};
	$.fn.validate.noConflict = function() {
		return oldFnValidate;
	};
})();
(function($) {
	var oldFnTab = $.fn.tab;
	$.fn.tab = function(options) {
		options = $.extend({
			defaultIndex : 0,
			activeClass : 'weui_bar_item_on',
			onToggle : $.noop
		}, options);
		const $tabbarItems = this.find('.weui_tabbar_item, .weui_navbar_item');
		const $tabBdItems = this.find('.weui_tab_bd_item');
		this.toggle = function(index) {
			const $defaultTabbarItem = $tabbarItems.eq(index);
			$defaultTabbarItem.addClass(options.activeClass).siblings().removeClass(options.activeClass);
			const $defaultTabBdItem = $tabBdItems.eq(index);
			$defaultTabBdItem.show().siblings().hide();
			options.onToggle(index);
		};
		const self = this;
		this.on('click', '.weui_tabbar_item, .weui_navbar_item', function(e) {
			const index = $(this).index();
			self.toggle(index);
		});
		this.toggle(options.defaultIndex);
		return this;
	};
	$.fn.tab.noConflict = function() {
		return oldFnTab;
	};
})($);
$(function() {
	var weixinimg = [];
	var weixinsrc = [];
	weixinimg = $('.weixin');
	for (var i = 0; i < weixinimg.length; i++) {
		weixinsrc[i] = weixinimg[i].src;
	};
	$('.weixin').click(function() {
		var index = $('.weixin').index(this);
		wx.previewImage({
			current : weixinsrc[index],
			urls : weixinsrc
		});
	});
}); 