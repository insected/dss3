"use strict";

/**
 * Utility for using OPL.UI framework and RequireJS asynchronously in top-level and non-module code
 * Usage:
 *
 * UX.use((OPL) => {
 *     ...
 * });
 * to make sure OPL and OPL.UI objects are available in scope
 *
 * UX.require(['dependency1', 'dependency2'], function (dependency1, dependency2) {
 *      ...
 * });
 * to use modules in top-level code
 */
var UX = function(UX) {
    var isOplReady = function isOplReady() {
        return "undefined" !== typeof OPL && "undefined" !== typeof OPL.UI;
    };

    var uxFrameworkReady = function uxFrameworkReady(resolve) {
        if ("undefined" === typeof OPL || "undefined" === typeof OPL.UI) {
            document.addEventListener("framework.ready", function() {
                resolve(OPL);
            });
        } else {
            resolve(OPL);
        }
    };

    var oplUiPromise = new Promise(uxFrameworkReady);

    UX.useModules = function(handler) {
        return oplUiPromise.then(function(OPL) {
            if (OPL.UI.isReady.modules) handler(OPL);
            else {
                var listener = function listener() {
                    handler(OPL);
                    document.removeEventListener(OPL.UI.EVENTS.modules.ready, listener);
                };

                document.addEventListener(OPL.UI.EVENTS.modules.ready, listener);
            }
        });
    };

    UX.use = function(handler) {
        return oplUiPromise.then(handler);
    };

    UX.isReady = function() {
        return isOplReady();
    };

    function requireEs6Defaults(module) {
        return module && module.__esModule && module["default"] ? module["default"] : module;
    }

    UX.require = function(deps, callback) {
        return oplUiPromise.then(function() {
            require(deps, function() {
                for (var _len = arguments.length, deps = new Array(_len), _key = 0; _key < _len; _key++) {
                    deps[_key] = arguments[_key];
                }

                callback.apply(void 0, babelHelpers.toConsumableArray(deps.map(function(dep) {
                    return requireEs6Defaults(dep);
                })));
            });
        });
    };

    return UX;
}(UX || {});
//# sourceMappingURL=oraUxUtils.js.map