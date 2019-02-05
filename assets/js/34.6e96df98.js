(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{289:function(e,r,t){"use strict";t.r(r);var o=t(47),a=Object(o.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"why-we-need-to-deprecate-x-prefix-for-http-headers"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-we-need-to-deprecate-x-prefix-for-http-headers","aria-hidden":"true"}},[e._v("#")]),e._v(" Why we need to deprecate x prefix for HTTP headers?")]),e._v(" "),t("p",[e._v("In June, 2012, Internet Engineering Task Force released a new RFC("),t("a",{attrs:{href:"https://tools.ietf.org/html/rfc6648",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC-6648"),t("OutboundLink")],1),e._v("), recommending deprecation of "),t("code",[e._v("X-")]),e._v(" prefix. As LinkedIn also use this type of prefix, I was interested to read this RFC, and explain to you why we need to deprecate it.")]),e._v(" "),t("h2",{attrs:{id:"x-prefix-background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-prefix-background","aria-hidden":"true"}},[e._v("#")]),e._v(" X- prefix background")]),e._v(" "),t("p",[e._v("HTTP header is used to transmit additional information between client and server.")]),e._v(" "),t("p",[e._v("Some standard HTTP header:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("Authorization")]),e._v(": Often used to transmit OAuth access token or other authorization information. e.g. "),t("code",[e._v("Authorization: Bearer ABCDEFG")])]),e._v(" "),t("li",[t("code",[e._v("Content-Type")]),e._v(": Often used to represent media type in request body. e.g. "),t("code",[e._v("application/x-www-form-urlencoded")]),e._v(" or "),t("code",[e._v("application/json")]),e._v(")")]),e._v(" "),t("li",[t("code",[e._v("User-Agent")]),e._v(": Browser identifier. e.g. "),t("code",[e._v("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3440.84 Safari/537.36")])])]),e._v(" "),t("p",[e._v("If people want to have custom header, "),t("code",[e._v("X-")]),e._v(" prefix is suggested to avoid conflict. This recommendation is raised in 1982 for Email standard("),t("a",{attrs:{href:"https://tools.ietf.org/html/rfc822",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC-822"),t("OutboundLink")],1),e._v(")，working fine for decades。")]),e._v(" "),t("h2",{attrs:{id:"usage-of-x-prefix"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-x-prefix","aria-hidden":"true"}},[e._v("#")]),e._v(" Usage of X- prefix")]),e._v(" "),t("p",[e._v("Among all non-standard HTTP headers, some become very popular:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("X-Forwarded-For")]),e._v(": Mark origin IP of client connecting to server through proxy")]),e._v(" "),t("li",[t("code",[e._v("X-Forwarded-Host")]),e._v(": Mark origin host of client connecting to server through proxy")]),e._v(" "),t("li",[t("code",[e._v("X-Forwarded-Proto")]),e._v(": Mark protocol of client connecting to server through proxy")]),e._v(" "),t("li",[t("code",[e._v("X-Powered-By")]),e._v(": Mark framework, technology, environment, etc.")])]),e._v(" "),t("h2",{attrs:{id:"x-prefix-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#x-prefix-issues","aria-hidden":"true"}},[e._v("#")]),e._v(" X- prefix issues")]),e._v(" "),t("p",[e._v("When these "),t("code",[e._v("X-")]),e._v(" prefix become more and more popular, it's tough to handle it when we need to standardize them. In theory, we should remove the "),t("code",[e._v("X-")]),e._v(" prefix after standardize it, but it will apparently affect existing applications. To avoid backward-compatibility issues, we have to keep it. In summary, the "),t("code",[e._v("X-")]),e._v(" prefix can't identify between standard and non-standard headers anymore.")]),e._v(" "),t("h2",{attrs:{id:"solutions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solutions","aria-hidden":"true"}},[e._v("#")]),e._v(" Solutions")]),e._v(" "),t("ol",[t("li",[e._v("No longer recommend "),t("code",[e._v("X-")]),e._v(" for new custom headers, and no longer use "),t("code",[e._v("X-")]),e._v(" prefix to distinguish standard and non-standard headers")]),e._v(" "),t("li",[e._v("If it's possible for new custom header to be standardized, use a non-used and meaningful header name")]),e._v(" "),t("li",[e._v("If it's not possible for new custom header to be standardized, include organization name (e.g. reverse domain name "),t("code",[e._v("com.example.foo")]),e._v(")")]),e._v(" "),t("li",[e._v("No recommendation to keep/drop for existing custom HTTP headers")]),e._v(" "),t("li",[t("code",[e._v("X-")]),e._v(" prefix can't be used to assume safety of headers")])])])},[],!1,null,null,null);a.options.__file="README.md";r.default=a.exports}}]);