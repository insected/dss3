define(["exports", "../modules/core/constants/TransactionProcessTypeEnum"], function(_exports, _TransactionProcessTypeEnum) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;
    _TransactionProcessTypeEnum = babelHelpers.interopRequireDefault(_TransactionProcessTypeEnum);

    var OnlineUtils = function(OnlineUtils) {
        // polyfill for IE
        Math.trunc = Math.trunc || function(x) {
            return isNaN(x) ? NaN : x > 0 ? Math.floor(x) : Math.ceil(x);
        };
        /**
        formating MSISDN from "xxxxxxxxx" to "xxx xxx xxx"
        */


        OnlineUtils.formatMsisdn = function(msisdn) {
            if (!msisdn) {
                return msisdn;
            }

            return msisdn.slice(0, 3) + " " + msisdn.slice(3, 6) + " " + msisdn.slice(6, 9);
        };
        /*
         * Choose correct primary/secondary number for entry summary
         */


        OnlineUtils.sortMsisdnNumbers = function(_ref) {
            var msisdn = _ref.msisdn,
                mnpNumber = _ref.mnpNumber;

            if (mnpNumber && mnpNumber != '' && msisdn) {
                return {
                    primary: mnpNumber,
                    secondary: msisdn
                };
            } else if (mnpNumber && mnpNumber != '' && !msisdn) {
                return {
                    primary: mnpNumber
                };
            } else {
                return {
                    primary: msisdn
                };
            }
        };
        /**
        formating terminal serial number from "XXXXXXXXXXXXXXX"
        */


        OnlineUtils.formatTerminalSerialNumber = function(terminalSerialNumber) {
            if (terminalSerialNumber === undefined) {
                return terminalSerialNumber;
            }

            return terminalSerialNumber.slice(0, 20);
        };
        /**
        return full description in polish for length. Input numbers, and forms of nouns. Output full description
        its simple and stupid but it works (at least now)
         */


        OnlineUtils.inflectNounWithNumber = function(length, zeroForm, oneForm, twoToFourForm, simpleForm) {
            length = Number(length);
            if (length === 0) return " " + zeroForm;
            else if (length === 1) return length + " " + oneForm;
            else if ((length > 20 || length < 10) && length % 10 > 1 && length % 10 < 5) return length + " " + twoToFourForm;
            else return length + " " + simpleForm;
        };
        /**
        return full description in polish for loyalty length. Input numbers. Output full description
        its simple and stupid but it works (at least now)
         */


        OnlineUtils.loyaltyLengthDescriptionFromNumber = function(length) {
            return OnlineUtils.inflectNounWithNumber(length, "czas nieokreślony", "miesiąc", "miesiące", "miesięcy");
        };

        OnlineUtils.noOfPosesDescriptionFromNumber = function(length, isPostoffice) {
            length = length && length > 0 ? length : 0;

            if (isPostoffice) {
                return OnlineUtils.inflectNounWithNumber(length, "0 punktów", "punkt", "punkty", "punktów");
            } else {
                return OnlineUtils.inflectNounWithNumber(length, "0 salonów", "salon", "salony", "salonów");
            }
        };
        /**
         * return short description in polish for loyalty length
         */


        OnlineUtils.shortLoyaltyLengthDescription = function(length) {
            if (length === 0) {
                return "czas nieokreślony";
            } else if (length === 1) {
                return "1 m-c";
            } else {
                return length + " m-" + OnlineUtils.loyaltyLengthDescriptionFromNumber(length).substr(OnlineUtils.loyaltyLengthDescriptionFromNumber(length).length - 2);
            }
        }; // scrolls to page top with jquery


        OnlineUtils.scrollToPageTop = function() {
            $("html, body").animate({
                scrollTop: 0
            }, "slow");
        };
        /**
        returns price without polish currency suffix
        */


        OnlineUtils.cutCurrencyFromPrice = function(formattedPrice) {
            return formattedPrice.replace(/zł/g, '');
        };
        /**
            check if any of nested object is null.
            Usage:
            obj.test.test.test = "TEST"
             OnlineUtils.isNestedObjectNullable(obj,"test.test.test")
            returns "TEST"
             OnlineUtils.isNestedObjectNullable(obj,"test.test2.test","defaultValue")
            returns "defaultValue"
             OnlineUtils.isNestedObjectNullable(obj,"test.test2.test")
            returns undefined
        */


        OnlineUtils.isNestedObjectNullable = function(obj, key, returnValue) {
            return key.split(".").reduce(function(o, x) {
                return typeof o == "undefined" || o === null ? returnValue || o : o[x];
            }, obj) || returnValue;
        };

        OnlineUtils.checkIfModuleInitialized = function(id) {
            return document.getElementById(id) && document.getElementById(id).getAttribute("data-js-initialized");
        };
        /**
         returns title case string
         */


        OnlineUtils.titleCase = function nameToUpper(unformatted) {
            unformatted = unformatted || ""; //return unformatted.toLowerCase().replace(/\b\S/g, (c) =>  c.toUpperCase());

            return unformatted.replace(/[a-zA-ZęółśążźćńĘÓŁŚĄŻŹĆŃ]+/g, function(c) {
                return c.substring(0, 1).toUpperCase() + c.substring(1).toLowerCase();
            });
        };
        /**
         * todo maybe more generic and some return value
         * checks if given string is valid before function invocation
         * if it is valid the func will be called
         * if not nothing will happen
         */


        OnlineUtils.invokeOnPositiveRegExp = function(regex, bundleNo, value, func) {
            if (regex.test(value)) {
                func(bundleNo, value);
            }
        };

        OnlineUtils.getUrlVarsAsMap = function() {
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            var parametersMap = {};
            $.each(hashes, function(id, value) {
                var keyValuePair = value.split("=");
                parametersMap[keyValuePair[0]] = keyValuePair[1];
            });
            return parametersMap;
        };

        OnlineUtils.getUrlVars = function() {
            var vars = [],
                hash;
            var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

            for (var i = 0; i < hashes.length; i++) {
                hash = hashes[i].split('=');
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }

            return vars;
        }; // ToDo as decribed below
        //DOESNT WORK WHEN THIS IS NOT FIRST PARAM IN URL!!! ill change it later if i will not forget about it


        OnlineUtils.changeUrlParameterWithoutReload = function(paramName, newParamValue) {
            var urlParams = window.location.href.split("?")[1];

            function newUrlParams() {
                var newkv = paramName.concat("=").concat(newParamValue);

                if (!urlParams) {
                    return newkv;
                } else {
                    var startIndex = urlParams.indexOf(paramName);

                    if (startIndex !== -1) {
                        var end = urlParams.indexOf("&", startIndex);
                        var oldKV = urlParams.substring(startIndex, end !== -1 ? end : undefined);
                        return urlParams.replace(oldKV, newkv);
                    } else {
                        return urlParams + "&" + newkv;
                    }
                }
            }

            history.pushState({}, "", window.location.href.split("/")[window.location.href.split("/").length - 1].split("?")[0] + "?" + newUrlParams());
        };

        OnlineUtils.resetUrlPathWithoutReload = function() {
            var urlParams = window.location.href.split("?")[1];

            if (window.location.pathname.includes("/sklep")) {
                history.pushState({}, "", "/sklep" + "?" + urlParams);
            } else {
                history.pushState({}, "", "/akcesoria" + "?" + urlParams);
            }
        };

        OnlineUtils.clearUrlParamsWithoutReload = function() {
            history.pushState({}, "", window.location.href.split("/")[window.location.href.split("/").length - 1].split("?")[0] + OnlineUtils.isCanonicalLink() ? "?" : "");
        };

        OnlineUtils.getValueFromUrlOrStorage = function(urlName, storageName) {
            var urlValue = OnlineUtils.getParameterValueFromUrl(urlName);
            var storageValue = OnlineUtils.loadFromSessionStorage(storageName);
            console.log("urlValue", urlValue);
            console.log("storageValue", storageValue);

            if (urlValue != undefined && urlValue != "" && urlValue != "undefined" || storageValue != undefined && storageValue != "" && storageValue != "undefined") {
                return urlValue || storageValue;
            }

            return null;
        };

        OnlineUtils.uniqueHtmlIdFactory = {};

        OnlineUtils.generateUniqeHtmlId = function(prefix) {
            if (prefix == undefined) {
                prefix = "ertfgsadfes_";
            }

            var index = this.uniqueHtmlIdFactory[prefix];

            if (!index) {
                index = 1;
            } else {
                index = index + 1;
            }

            this.uniqueHtmlIdFactory[prefix] = index;
            return prefix + index;
        };

        OnlineUtils.notEmptyString = function(stringValue) {
            return stringValue !== null && stringValue !== "";
        };

        OnlineUtils.checkIfIe8 = function() {
            var undef,
                v = 3,
                div = document.createElement('div'),
                all = div.getElementsByTagName('i');

            while (div.innerHTML = '<!--[if gt IE ' + ++v + ']><i></i><![endif]-->', all[0]) {
                ;
            }

            return (v > 4 ? v : undef) < 9;
        };

        OnlineUtils.scrollToComponent = function(componentId) {
            var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "header";
            if (!!$('#' + componentId).length) $('html, body').animate({
                scrollTop: $('#' + componentId).offset().top - $('#' + header).height()
            }, 'slow');
        }; //if value exist in array remove it else add it


        OnlineUtils.addOrRemoveFromArray = function(value) {
            var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (array.find(function(item) {
                    return item == value;
                })) {
                var index = array.indexOf(value);
                array.splice(index, 1);
                return array;
            } else {
                return array.concat(value);
            }
        };

        OnlineUtils.cloneArray = function(cloned) {
            var newArray = [];
            Object.keys(cloned).forEach(function(key) {
                if (Array.isArray(cloned[key])) {
                    newArray[key] = OnlineUtils.cloneArray(cloned[key]);
                } else newArray[key] = cloned[key];
            });
            return newArray;
        }; //add if array does not contain value


        OnlineUtils.addUniqueIntoArray = function(value) {
            var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

            if (array.find(function(item) {
                    return item == value;
                })) {
                return array;
            } else {
                return array.push(value);
            }
        };

        OnlineUtils.intersectArrays = function(a, b) {
            var t;
            if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter

            return a.filter(function(e) {
                return b.indexOf(e) > -1;
            });
        };

        OnlineUtils.pageHasComponent = function(component) {
            return $('body').find("div[id^='" + component + "']").length > 0;
        };

        OnlineUtils.ifIe8 = OnlineUtils.checkIfIe8(); //bedzie trzeba dodac mozliwosc parametryzowania

        OnlineUtils.pageRedirect = function(url) {
            location.href = url;
        };

        OnlineUtils.removeFromSessionStorage = function(key) {
            sessionStorage.removeItem(key);
        };

        OnlineUtils.saveInSessionStorage = function(key, value) {
            sessionStorage.setItem(key, value);
        };

        OnlineUtils.saveCanonicalValueInSessionStorage = function(key, value) {
            OnlineUtils.saveInSessionStorage(key + "_canonical", value);
        };

        OnlineUtils.loadFromSessionStorage = function(key) {
            return sessionStorage.getItem(key);
        };

        OnlineUtils.removePwaSuflerContextFromSession = function() {
            if (OnlineUtils.getParameterValueFromUrl("isDuet") !== "true") {
                Object.keys(sessionStorage).filter(function(key) {
                    return key.includes("sufler-");
                }).map(function(key) {
                    return sessionStorage.removeItem(key);
                });
            }
        };

        OnlineUtils.getParameterValueFromUrl = function(paramName) {
            if (OnlineUtils.isCanonicalLink() && typeof QUERY_PARAMS !== 'undefined' && QUERY_PARAMS[paramName]) {
                var hiddenUrlValue = QUERY_PARAMS[paramName];
                return hiddenUrlValue;
            } else {
                var urlParam = function urlParam(paramName, w) {
                    w = w || window;
                    var rx = new RegExp("[&|?]".concat(paramName, "=([^&#]+)")),
                        val = w.location.search.match(rx);
                    return !val ? "" : val[1];
                };

                var parameterValue = urlParam(paramName);
                var urlValue = isNaN(parameterValue) ? parameterValue : parameterValue * 1;
                return urlValue;
            }
        };

        OnlineUtils.closest = function(num, arr) {
            var curr = arr[0];
            var diff = Math.abs(num - curr);

            for (var val = 0; val < arr.length; val++) {
                var newdiff = Math.abs(num - arr[val]);

                if (newdiff < diff) {
                    diff = newdiff;
                    curr = arr[val];
                }
            }

            return curr;
        };

        OnlineUtils.setAsLastViewedOfferPage = function() {
            sessionStorage.setItem('LastViewedOfferPage', window.location.pathname);
        };

        OnlineUtils.setLastViewedOfferPage = function(url) {
            sessionStorage.setItem('LastViewedOfferPage', url);
        };

        OnlineUtils.getLastViewedOfferPage = function getLastViewedOfferPage() {
            return sessionStorage.getItem('LastViewedOfferPage');
        };

        OnlineUtils.redirectToAnotherPage = function(url) {
            window.location.assign(url);
        };

        OnlineUtils.formatPrice = function formatPrice(price) {
            if (price != undefined) {
                if (typeof price === 'string') price = parseFloat(price.replace(',', '.'));
                return Number(Math.round(price + 'e2') + 'e-2').toFixed(2).replace(".", ",");
            } else {
                return "";
            }
        };

        OnlineUtils.formatPriceAbsolute = function formatPrice(price) {
            if (price != undefined) {
                // do not round if after comma price is != 00 (for example 367,77)
                if (OnlineUtils.formatPriceDecimals(price) !== "00") {
                    var priceStr = OnlineUtils.formatPrice(price);
                    return priceStr ? priceStr.split(",")[0] : "";
                }

                if (typeof price === 'string') price = price.replace(",", "."); // NaN fix

                return Number(Math.round(price + 'e2') + 'e-2').toFixed().replace(".", ",");
            } else {
                return "";
            }
        };

        OnlineUtils.formatPriceDecimals = function formatPrice(price) {
            var priceStr = OnlineUtils.formatPrice(price);
            return priceStr ? priceStr.split(",")[1] : "";
        };

        OnlineUtils.getPriceFromPaymentsObject = function getPriceFromPaymentsObject(prices, showNet) {
            if (prices == undefined) return "";
            var returns = showNet ? prices.priceNet != undefined && prices.priceNet || prices.originalNetPrice != undefined && prices.originalNetPrice || prices.net != undefined && prices.net : prices.priceGross != undefined && prices.priceGross || prices.originalGrossPrice != undefined && prices.originalGrossPrice || prices.gross != undefined && prices.gross || prices.price != undefined && prices.price;
            returns = returns || 0;;
            return returns;
        };

        OnlineUtils.getPriceAsNumberFromPaymentsObject = function(prices, showNet) {
            return prices && (showNet ? prices.priceNet ? prices.priceNet : prices.originalNetPrice ? prices.originalNetPrice : false : prices.priceGross ? prices.priceGross : prices.originalGrossPrice ? prices.originalGrossPrice : false);
        };

        OnlineUtils.getPaymentsForRole = function getPriceForRole(payments, role) {
            return role && payments && payments.forRole[role] || payments && payments.plain;
        };

        OnlineUtils.transformMsisdn = function transformMsisdn(number) {
            return number.replace(/^(\d{3})(\d{3})(\d{3})$/, function() {
                return arguments[1] + '\xa0' + arguments[2] + '\xa0' + arguments[3];
            });
        };

        var getProcessList = function getProcessList(condition) {
            return {
                isMnp: [_TransactionProcessTypeEnum.default.MNP, _TransactionProcessTypeEnum.default.MNP_TWOSTEP],
                isMigration: [_TransactionProcessTypeEnum.default.MIGRATION_PRE_POST, _TransactionProcessTypeEnum.default.MIGRATION_ZETAFON_POST, _TransactionProcessTypeEnum.default.MIGRATION_NJU_POST_TO_POST, _TransactionProcessTypeEnum.default.MIGRATION_NJU_PRE_TO_POST],
                isAssignment: [_TransactionProcessTypeEnum.default.ASSIGNMENT, _TransactionProcessTypeEnum.default.ASSIGNMENT_DEATH, _TransactionProcessTypeEnum.default.ASSIGNMENT_B2C_B2B, _TransactionProcessTypeEnum.default.ASSIGNMENT_B2C_JDG],
                isMnpApplication: [_TransactionProcessTypeEnum.default.MNP_APPLICATION],
                isMnpApplicationSecondStep: [_TransactionProcessTypeEnum.default.MNP_APPLICATION_SECOND_STEP]
            } [condition];
        };

        OnlineUtils.isMnp = function isMnp(processType) {
            return getProcessList("isMnp").find(function(element) {
                return element === processType;
            });
        };

        OnlineUtils.isMigration = function isMigration(processType) {
            return getProcessList("isMigration").find(function(element) {
                return element === processType;
            });
        };

        OnlineUtils.isAssignment = function isAssignment(processType) {
            return getProcessList("isAssignment").find(function(element) {
                return element === processType;
            });
        };

        OnlineUtils.isAnyAssignmentFromList = function isAnyAssignmentFromList(processTypeList) {
            return processTypeList.some(function(processType) {
                return !!OnlineUtils.isAssignment(processType);
            });
        };

        OnlineUtils.isMnpApplication = function isMnpApplication(processType) {
            return getProcessList("isMnpApplication").find(function(element) {
                return element === processType;
            });
        };

        OnlineUtils.isMnpApplicationSecondStep = function isMnpApplicationSecondStep(processType) {
            return getProcessList("isMnpApplicationSecondStep").find(function(element) {
                return element === processType;
            });
        };

        OnlineUtils.changeOrAddUrlParameter = function(paramName, paramValue) {
            var disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (disabled || OnlineUtils.isCanonicalLink() && typeof QUERY_PARAMS !== 'undefined' && QUERY_PARAMS[paramName] === paramValue || OnlineUtils.isCanonicalLink() && OnlineUtils.loadFromSessionStorage(paramName + "_canonical") === paramValue) {
                return;
            }

            var url = window.location.href;
            var hash = location.hash;
            url = url.replace(hash, '');

            if (url.indexOf(paramName + "=") >= 0) {
                var prefix = url.substring(0, url.indexOf(paramName));
                var suffix = url.substring(url.indexOf(paramName));
                suffix = suffix.substring(suffix.indexOf("=") + 1);
                suffix = suffix.indexOf("&") >= 0 ? suffix.substring(suffix.indexOf("&")) : "";

                if (paramValue === undefined || paramValue === null || paramValue === false || paramValue === "") {
                    if (prefix[prefix.length - 1] === "&") {
                        prefix = prefix.substr(0, prefix.length - 1);
                    }

                    url = prefix + suffix;
                } else {
                    url = prefix + paramName + "=" + paramValue + suffix;
                }
            } else {
                if (paramValue === undefined || paramValue === null || paramValue === false) {
                    return;
                } else if (url.indexOf("?") < 0) url += "?" + paramName + "=" + paramValue;
                else url += "&" + paramName + "=" + paramValue;
            }

            window.history.replaceState({
                path: url
            }, '', url);
        };

        OnlineUtils.updateOgTag = function(tagName, tagValue) {
            var ogTag = $("meta[property='" + tagName + "']");

            if (ogTag.length === 0) {
                $("head").append('<meta property=' + tagName + ' content=' + tagValue + '>');
            } else {
                ogTag.attr("content", tagValue);
            }
        };

        OnlineUtils.getFromSessionStorageAndSetUrlParameter = function(sessionStorageParamName, urlParamName) {
            var value = OnlineUtils.loadFromSessionStorage(sessionStorageParamName);

            if (value) {
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout(urlParamName || sessionStorageParamName, value);
            }

            return value;
        };

        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout = function(paramName, paramValue) {
            var showHiddenQueryParamsName = 'showHiddenQueryParams';
            var showQueryParamsFromUrl = OnlineUtils.getParameterValueFromUrl(showHiddenQueryParamsName);
            var paramsToHide = ["selectedVases"];

            if (showQueryParamsFromUrl == 'true') {
                OnlineUtils.saveInSessionStorage(showHiddenQueryParamsName, true);
                OnlineUtils.removeParameterFromURL(showHiddenQueryParamsName);
            } else if (showQueryParamsFromUrl == 'false') {
                OnlineUtils.removeParameterFromURL(showHiddenQueryParamsName);
                OnlineUtils.removeFromSessionStorage(showHiddenQueryParamsName);
            }

            var showHiddenQueryParams = OnlineUtils.loadFromSessionStorage(showHiddenQueryParamsName) == 'true';
            var disabledOnCheckout = document.getElementById('isCheckoutHidden');

            if (!showHiddenQueryParams && paramsToHide.indexOf(paramName) > -1) {
                OnlineUtils.changeOrAddUrlParameter(paramName, null, false);
                return;
            }

            OnlineUtils.changeOrAddUrlParameter(paramName, paramValue, disabledOnCheckout);
        };

        OnlineUtils.changeOrAddUrlParameterDisabledOnCheckoutParameterLinks = function(paramName, paramValue) {
            if (!OnlineUtils.isCanonicalLink()) {
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout(paramName, paramValue);
            }
        };

        OnlineUtils.changeOrAddUrlParameterDisabledIfNotCanonical = function(paramName, paramValue) {
            if (!OnlineUtils.isCanonicalLink() && !window.location.href.includes("details")) {
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout(paramName, paramValue);
            }
        };

        OnlineUtils.parseOneTimeCostPricesUrlParameter = function() {
            var paramValue = OnlineUtils.getParameterValueFromUrl('oneTimeCost');
            paramValue = paramValue.replace(/%22/g, '"');
            return paramValue && paramValue.substring(1, paramValue.length - 1).split(";").map(function(a) {
                return JSON.parse(a);
            }) || [];
        };

        OnlineUtils.processOneTimeCostPricesUrlParameter = function(newObjects) {
            if (newObjects && newObjects.length === 0) {
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout('oneTimeCost', null);
                return;
            }

            var mappedNewObjects = newObjects && newObjects.map(function(a) {
                return {
                    from: a.from,
                    to: a.to
                };
            });
            var newParamValue = mappedNewObjects && mappedNewObjects.reduce(function(prev, next) {
                return prev + JSON.stringify(next) + ";";
            }, "[");
            newParamValue = newParamValue.substring(0, newParamValue.length - 1) + "]";
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout('oneTimeCost', newParamValue);
        };

        OnlineUtils.setUrlParameters = function(parametersMap) {
            var parameters = "";

            if (window.location.search) {
                parameters += "?";
            }

            $.each(parametersMap, function(key, value) {
                parameters += key + "=" + value + "&";
            });
            parameters.substring(0, parameters.length - 1);
            encodeURI(parameters);
            window.history.replaceState({}, "", parameters);
        };

        OnlineUtils.removeParameterFromURL = function(parameterName) {
            var parametersMap = OnlineUtils.getUrlVarsAsMap();
            console.log(parametersMap);

            if (delete parametersMap[parameterName]) {
                OnlineUtils.setUrlParameters(parametersMap);
            }
        };

        OnlineUtils.splitPrice = function(price) {
            if (!price) {
                return {
                    integerPricePart: "0",
                    fractionPricePart: "00"
                };
            }

            var integerPricePart = Math.trunc(price);
            var fractionPricePart = Number((price - integerPricePart).toFixed(2) * 100).toFixed(0);

            if (fractionPricePart < 10) {
                fractionPricePart = "0" + fractionPricePart;
            }

            return {
                integerPricePart: integerPricePart,
                fractionPricePart: fractionPricePart
            };
        };

        OnlineUtils.saveInSessionStorageAndUrlParameterDisabledOnCheckout = function(key, value) {
            OnlineUtils.saveInSessionStorage(key, value);
            OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout(key, value);
        };

        OnlineUtils.saveInStorageOnCanonicalLinks = function(key, value, defaultValue) {
            OnlineUtils.saveInSessionStorage(key, defaultValue !== undefined ? defaultValue : value);

            if (!OnlineUtils.isCanonicalLink()) {
                OnlineUtils.changeOrAddUrlParameterDisabledOnCheckout(key, value);
            }
        };

        OnlineUtils.getCookie = function(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');

            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];

                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }

                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }

            return "";
        };

        OnlineUtils.odmienRaty = function(rat) {
            if (rat == 1) return "rata";
            if (rat % 10 == 1) return "rat";
            if (rat % 10 == 0) return "rat";
            if (rat >= 2 && rat < 5) return "raty";
            if (rat >= 5 && rat < 22) return "rat";
            if (rat % 10 >= 2 && rat % 10 <= 4) return "raty";
            if (rat % 10 >= 5 && rat % 10 <= 9) return "rat";
        };

        OnlineUtils.extractObject = function(source, prefix) {
            return Object.keys(source || {}).filter(function(d) {
                return d.startsWith(prefix);
            }).reduce(function(result, item, index, array) {
                result[item.replace(prefix, "")] = source[item];
                return result;
            }, {});
        };

        OnlineUtils.immutableRemove = function(array, index) {
            var copy = array.slice();
            copy.splice(index, 1);
            return copy;
        };

        OnlineUtils.toDateStr = function(date) {
            var dd = date.getDate();
            var mm = date.getMonth() + 1;
            var yyyy = date.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }

            return yyyy + "-" + mm + "-" + dd;
        };

        OnlineUtils.getComponentKeyObject = function(component) {
            return component ? {
                component: component
            } : {};
        };

        OnlineUtils.toGrossHardcoded = function(v) {
            return v * 1.23;
        };

        OnlineUtils.stripStringFromHTML = function(originalString) {
            return originalString && originalString.replace(/(<([^>]+)>)/ig, "");
        };

        OnlineUtils.ascendingNumberComparator = function(a, b) {
            return a - b;
        };

        OnlineUtils.isCanonicalLink = function() {
            return window.location.href.includes("/sklep") && !window.location.href.includes("?");
        };

        return OnlineUtils;
    }({});

    var _default = OnlineUtils;
    _exports.default = _default;
});
//# sourceMappingURL=OnlineUtils.js.map