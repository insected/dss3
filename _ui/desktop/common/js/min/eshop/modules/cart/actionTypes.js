define(["exports"], function(_) {
    "use strict";
    Object.defineProperty(_, "__esModule", {
        value: !0
    }), _.INVOICE_EMAIL_MAPPING_CHANGE = _.INVOICE_EMAIL_CHANGE = _.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER = _.SELECT_TV_PACKAGES_CHOICE_FILTER = _.LOWER_INSTALLMENTS_SUBMITED = _.LOWER_INSTALLMENTS_MODAL_CLOSE = _.LOWER_INSTALLMENTS_MODAL_OPEN = _.HALT_CART_ERROR = _.HALT_CART_SUCCESS = _.HALT_CART_START = _.KDR_SAVED = _.KDR_SAVING = _.KDR_ERROR = _.KDR_NUMBER_CLEAR = _.KDR_NUMBER_APPROVE = _.KDR_NUMBER_CHANGE = _.KDR_CART_DATA = _.CONFIRMATION_DEATH_CHANGE = _.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE = _.BONUS_MODAL_SHOW_CHANGE = _.VAS_MODAL_SHOW_CHANGE = _.SET_PRICE_VIEW_NET = _.CREATE_NEW_CART = _.VOUCHER_ERROR = _.APPLY_VOUCHER_DONE = _.APPLY_VOUCHER_START = _.FIND_APPLICABLE_PRODUCTS_START = _.FIND_APPLICABLE_PRODUCTS_DONE = _.CLEAR_VOUCHER_DATA = _.CHANGE_VOUCHER_CODE = _.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = _.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = _.SET_MANUAL_STATUS = _.RESOURCE_MODAL_CLOSE = _.RESOURCE_MODAL_OPEN = _.CHANGE_SIMCARD_SUCCESS = _.SET_SIMCARD = _.CHANGE_SIMCARD = _.FETCH_SIM_CARDS = _.SET_MSISDN = _.CHANGE_MSISDN_FAILED = _.CHANGE_MSISDN_SUCCESS = _.CHANGE_MSISDN = _.FETCH_MSISDNS = _.FETCH_BUNDLES_PROCESS_TYPE = _.UPDATED_CART_CONTENTS = _.FETCHING_CONVERGENT_CONFIGURABLES = _.SET_TV_PACKAGES = _.TV_FILTERED_MODAL_VISIBILITY = _.TV_MODAL_VISIBILITY = _.FETCHING_FIX_CONFIGURABLES = _.FETCHING_MOBILE_VASES = _.FETCHED_CART = _.FETCHED_MINI_CART = _.FETCH_CONVERGENT_CONFIGURABLES = _.FETCH_FIX_CONFIGURABLES = _.FETCH_MOBILE_VASES = _.REMOVE_TERMINAL_FROM_CART_BUNDLE = _.REMOVE_FROM_CART = _.FETCH_MINI_CART = _.FETCH_CART = void 0;
    _.FETCH_CART = "cart/fetch";
    _.FETCH_MINI_CART = "cart/mini/fetch";
    _.REMOVE_FROM_CART = "cart/remove";
    _.REMOVE_TERMINAL_FROM_CART_BUNDLE = "cart/terminal/mobile/remove";
    _.FETCH_MOBILE_VASES = "cart/vas/mobile/fetch";
    _.FETCH_FIX_CONFIGURABLES = "cart/vas/fix/fetch";
    _.FETCH_CONVERGENT_CONFIGURABLES = "cart/vas/convergent/fetch";
    _.FETCHED_MINI_CART = "cart/metadata/minicart";
    _.FETCHED_CART = "cart/metadata/cart";
    _.FETCHING_MOBILE_VASES = "cart/metadata/mobile/vas";
    _.FETCHING_FIX_CONFIGURABLES = "cart/metadata/fix/vas";
    _.TV_MODAL_VISIBILITY = "cart/metadata/fix/tvModal/visibility";
    _.TV_FILTERED_MODAL_VISIBILITY = "cart/metadata/fix/tvFilteredModal/visibility";
    _.SET_TV_PACKAGES = "cart/fix/SET_TV_PACKAGES";
    _.FETCHING_CONVERGENT_CONFIGURABLES = "cart/metadata/convergent/vas";
    _.UPDATED_CART_CONTENTS = "cart/metadata/update";
    _.FETCH_BUNDLES_PROCESS_TYPE = "cart/metadata/fetchbundleproccesstype";
    _.FETCH_MSISDNS = "cart/resource/msisdn/fetch";
    _.CHANGE_MSISDN = "cart/resource/msisdn/change";
    _.CHANGE_MSISDN_SUCCESS = "cart/resource/msisdn/change/success";
    _.CHANGE_MSISDN_FAILED = "cart/resource/msisdn/change/failed";
    _.SET_MSISDN = "cart/resource/msisdn/set";
    _.FETCH_SIM_CARDS = "cart/simCard/fetch";
    _.CHANGE_SIMCARD = "cart/resource/simcard/change";
    _.SET_SIMCARD = "cart/resource/simcard/set";
    _.CHANGE_SIMCARD_SUCCESS = "cart/resource/simcard/change/success";
    _.RESOURCE_MODAL_OPEN = "cart/resource/resource/modal/open";
    _.RESOURCE_MODAL_CLOSE = "cart/resource/resource/modal/close";
    _.SET_MANUAL_STATUS = "cart/manual/required";
    _.CHANGE_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = "cart/add/terminal/bundleno/changed";
    _.CLEAR_ADD_TERMINAL_TO_OFFER_BUNDLE_NUMBER = "cart/add/terminal/bundleno/cleared";
    _.CHANGE_VOUCHER_CODE = "cart/voucher/changed";
    _.CLEAR_VOUCHER_DATA = "cart/voucher/clear";
    _.FIND_APPLICABLE_PRODUCTS_DONE = "cart/voucher/find/done";
    _.FIND_APPLICABLE_PRODUCTS_START = "cart/voucher/find/start";
    _.APPLY_VOUCHER_START = "cart/voucher/apply/start";
    _.APPLY_VOUCHER_DONE = "cart/voucher/apply/done";
    _.VOUCHER_ERROR = "cart/voucher/error";
    _.CREATE_NEW_CART = "cart/new";
    _.SET_PRICE_VIEW_NET = "cart/price/view/net";
    _.VAS_MODAL_SHOW_CHANGE = "cart/vas/modal/show/change";
    _.BONUS_MODAL_SHOW_CHANGE = "cart/bonus/modal/show/change";
    _.PAYMENT_PLAN_ASSIGN_VALUE_CHANGE = "cart/paymentPaln/assign/value/change";
    _.CONFIRMATION_DEATH_CHANGE = "cart/assign/certificateDeath/confirm";
    _.KDR_CART_DATA = "cart/kdrData/get";
    _.KDR_NUMBER_CHANGE = "cart/kdrData/number/change";
    _.KDR_NUMBER_APPROVE = "cart/kdrData/number/approve";
    _.KDR_NUMBER_CLEAR = "cart/kdrData/number/clear";
    _.KDR_ERROR = "cart/kdrData/error";
    _.KDR_SAVING = "cart/kdrData/saving";
    _.KDR_SAVED = "cart/kdrData/saved";
    _.HALT_CART_START = "cart/halt/start";
    _.HALT_CART_SUCCESS = "cart/halt/success";
    _.HALT_CART_ERROR = "cart/halt/error";
    _.LOWER_INSTALLMENTS_MODAL_OPEN = "cart/lower/installments/modal/open";
    _.LOWER_INSTALLMENTS_MODAL_CLOSE = "cart/lower/installments/modal/close";
    _.LOWER_INSTALLMENTS_SUBMITED = "cart/lower/installments/submited";
    _.SELECT_TV_PACKAGES_CHOICE_FILTER = "cart/filters/SELECT_TV_PACKAGES_CHOICE_FILTER";
    _.SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER = "cart/filters/SELECT_TV_PACKAGES_LOYALTY_DURATION_CHOICE_FILTER";
    _.INVOICE_EMAIL_CHANGE = "cart/invoiceEmail/email/change";
    _.INVOICE_EMAIL_MAPPING_CHANGE = "cart/invoiceEmail/mappingEmail/change"
});
//# sourceMappingURL=actionTypes.js.map