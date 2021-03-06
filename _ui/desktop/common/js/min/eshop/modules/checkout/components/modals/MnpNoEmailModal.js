define(["exports", "react-redux", "react", "eshop/modules/core/components/ui/Modal", "eshop/components/OraCommonComponents", "../../selectors", "eshop/modules/cart/selectors", "../../actions/app"], function(e, t, n, o, r, s, l, a) {
    "use strict";

    function i(n) {
        return function() {
            var e, t = babelHelpers.getPrototypeOf(n);
            if (function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                    } catch (e) {
                        return
                    }
                }()) {
                var r = babelHelpers.getPrototypeOf(this).constructor;
                e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return babelHelpers.possibleConstructorReturn(this, e)
        }
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0, n = babelHelpers.interopRequireWildcard(n), o = babelHelpers.interopRequireDefault(o);
    var u = function(e) {
            babelHelpers.inherits(r, e);
            var t = i(r);

            function r() {
                return babelHelpers.classCallCheck(this, r), t.apply(this, arguments)
            }
            return babelHelpers.createClass(r, [{
                key: "onClose",
                value: function() {
                    this.props.dismiss()
                }
            }, {
                key: "renderInfo",
                value: function() {
                    return n.default.createElement("span", null, this.props.textInfo)
                }
            }, {
                key: "render",
                value: function() {
                    return n.default.createElement(o.default, {
                        showClose: !0,
                        open: this.props.errors && 0 < this.props.errors.length,
                        onClose: this.onClose.bind(this),
                        size: "medium",
                        id: "customer-no-email-modal"
                    }, n.default.createElement("div", {
                        className: "u-padding-all-m u-small-padding-s"
                    }, n.default.createElement("div", {
                        className: "l-row u-spacing-top-m"
                    }, n.default.createElement("div", {
                        className: "l-col l-col-12"
                    }, this.renderInfo()))))
                }
            }]), r
        }(n.Component),
        c = (0, t.connect)(function(e) {
            return {
                errors: (0, s.getMnpNoEmailCheckoutErrors)(e)
            }
        }, function(e) {
            return {
                dismiss: function() {
                    return e((0, a.dismissBackendValidationErrors)())
                },
                action: function() {
                    return e((0, a.gotoCartSummary)())
                }
            }
        })(u);
    e.default = c
});
//# sourceMappingURL=MnpNoEmailModal.js.map