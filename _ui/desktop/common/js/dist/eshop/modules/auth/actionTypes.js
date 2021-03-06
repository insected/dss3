define(["exports", "../core/utils/request-actions-creator"], function(_exports, _requestActionsCreator) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.STAY_LOVE_RETENTION_MSISDN = _exports.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED = _exports.IS_PESEL_AND_ADDRESS_VERIFIED = _exports.MARKET_IS_COMPATIBLE = _exports.MARKET_IS_INCOMPATIBLE = _exports.incompatibleMarketCheck = _exports.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG = _exports.SET_SALES_CHANNEL = _exports.SET_ACCOUNT_BY_MSISDN = _exports.SET_SELECTED_BILLING_ACCOUNT_ID = _exports.SET_MOBILE_BILLING_ACCOUNTS = _exports.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B = _exports.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF = _exports.AUTHORIZATION_RETENTION_ALERT_MODAL_ON = _exports.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF = _exports.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON = _exports.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA = _exports.AUTHORIZATION_IS_LOADING_OFF = _exports.AUTHORIZATION_IS_LOADING_ON = _exports.CLEAR_MESSAGE = _exports.SHOW_MESSAGE = _exports.AUTHORIZATION_ADD_TO_CART_AFTER = _exports.AUTHORIZATION_CHOOSE_ACCOUNT_NEW = _exports.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING = _exports.AUTHORIZATION_OMMIT_ACCOUNT_AUTH = _exports.AUTHORIZATION_CHANGE_ACCOUNT_OFF = _exports.AUTHORIZATION_CHANGE_ACCOUNT_ON = _exports.AUTHORIZATION_CHOOSE_ACCOUNT_OFF = _exports.AUTHORIZATION_CHOOSE_ACCOUNT_ON = _exports.AUTHORIZATION_SHOW_SECTION = _exports.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF = _exports.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON = _exports.AUTHORIZATION_MODAL_FOR_PROCESS_OFF = _exports.AUTHORIZATION_MODAL_FOR_PROCESS_ON = _exports.AUTHORIZATION_MSISDN_OR_LOGIN = _exports.DO_SMS_AUTHORIZATION = void 0;
    var DO_SMS_AUTHORIZATION = "authorization/do_sms_authorization";
    _exports.DO_SMS_AUTHORIZATION = DO_SMS_AUTHORIZATION;
    var AUTHORIZATION_MSISDN_OR_LOGIN = "authorization/msisdnOrLogin";
    _exports.AUTHORIZATION_MSISDN_OR_LOGIN = AUTHORIZATION_MSISDN_OR_LOGIN;
    var AUTHORIZATION_MODAL_FOR_PROCESS_ON = "authorization/sms_modal_on";
    _exports.AUTHORIZATION_MODAL_FOR_PROCESS_ON = AUTHORIZATION_MODAL_FOR_PROCESS_ON;
    var AUTHORIZATION_MODAL_FOR_PROCESS_OFF = "authorization/sms_modal_off";
    _exports.AUTHORIZATION_MODAL_FOR_PROCESS_OFF = AUTHORIZATION_MODAL_FOR_PROCESS_OFF;
    var AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON = "authorization/sms_modal_account_on";
    _exports.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON = AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_ON;
    var AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF = "authorization/sms_modal_account_off";
    _exports.AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF = AUTHORIZATION_MODAL_FOR_ACCOUNT_IDENTIFY_OFF;
    var AUTHORIZATION_SHOW_SECTION = "authorization/show_section";
    _exports.AUTHORIZATION_SHOW_SECTION = AUTHORIZATION_SHOW_SECTION;
    var AUTHORIZATION_CHOOSE_ACCOUNT_ON = "authorization/choose_account_on";
    _exports.AUTHORIZATION_CHOOSE_ACCOUNT_ON = AUTHORIZATION_CHOOSE_ACCOUNT_ON;
    var AUTHORIZATION_CHOOSE_ACCOUNT_OFF = "authorization/choose_account_off";
    _exports.AUTHORIZATION_CHOOSE_ACCOUNT_OFF = AUTHORIZATION_CHOOSE_ACCOUNT_OFF;
    var AUTHORIZATION_CHANGE_ACCOUNT_ON = "authorization/choose_change_on";
    _exports.AUTHORIZATION_CHANGE_ACCOUNT_ON = AUTHORIZATION_CHANGE_ACCOUNT_ON;
    var AUTHORIZATION_CHANGE_ACCOUNT_OFF = "authorization/choose_change_off";
    _exports.AUTHORIZATION_CHANGE_ACCOUNT_OFF = AUTHORIZATION_CHANGE_ACCOUNT_OFF;
    var AUTHORIZATION_OMMIT_ACCOUNT_AUTH = "authorization/ommit_account_auth";
    _exports.AUTHORIZATION_OMMIT_ACCOUNT_AUTH = AUTHORIZATION_OMMIT_ACCOUNT_AUTH;
    var AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING = "authorization/choose_account_existing";
    _exports.AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING = AUTHORIZATION_CHOOSE_ACCOUNT_EXISTING;
    var AUTHORIZATION_CHOOSE_ACCOUNT_NEW = "authorization/choose_account_new";
    _exports.AUTHORIZATION_CHOOSE_ACCOUNT_NEW = AUTHORIZATION_CHOOSE_ACCOUNT_NEW;
    var AUTHORIZATION_ADD_TO_CART_AFTER = "authorization/add_to_cart_after";
    _exports.AUTHORIZATION_ADD_TO_CART_AFTER = AUTHORIZATION_ADD_TO_CART_AFTER;
    var SHOW_MESSAGE = "authorization/show_message";
    _exports.SHOW_MESSAGE = SHOW_MESSAGE;
    var CLEAR_MESSAGE = "authorization/clear_message";
    _exports.CLEAR_MESSAGE = CLEAR_MESSAGE;
    var AUTHORIZATION_IS_LOADING_ON = "authorization/loading_on";
    _exports.AUTHORIZATION_IS_LOADING_ON = AUTHORIZATION_IS_LOADING_ON;
    var AUTHORIZATION_IS_LOADING_OFF = "authorization/loading_off";
    _exports.AUTHORIZATION_IS_LOADING_OFF = AUTHORIZATION_IS_LOADING_OFF;
    var AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA = "authorization/set_logged_customer_data";
    _exports.AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA = AUTHORIZATION_SET_LOGGED_CUSTOMER_DATA;
    var AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON = "authorization/logout_confirmation_modal_on";
    _exports.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON = AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_ON;
    var AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF = "authorization/logout_confirmation_modal_off";
    _exports.AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF = AUTHORIZATION_LOGOUT_CONFIRMATION_MODAL_OFF;
    var AUTHORIZATION_RETENTION_ALERT_MODAL_ON = "authorization/retention_alert_modal_on";
    _exports.AUTHORIZATION_RETENTION_ALERT_MODAL_ON = AUTHORIZATION_RETENTION_ALERT_MODAL_ON;
    var AUTHORIZATION_RETENTION_ALERT_MODAL_OFF = "authorization/retention_alert_modal_off";
    _exports.AUTHORIZATION_RETENTION_ALERT_MODAL_OFF = AUTHORIZATION_RETENTION_ALERT_MODAL_OFF;
    var DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B = "authorization/doRegisterBillingAccountPopupB2B";
    _exports.DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B = DO_REGISTER_BILLING_ACCOUNT_POPUP_B2B;
    var SET_MOBILE_BILLING_ACCOUNTS = "authorization/set_mobile_billing_accounts";
    _exports.SET_MOBILE_BILLING_ACCOUNTS = SET_MOBILE_BILLING_ACCOUNTS;
    var SET_SELECTED_BILLING_ACCOUNT_ID = "authorization/set_selected_billing_account_id";
    _exports.SET_SELECTED_BILLING_ACCOUNT_ID = SET_SELECTED_BILLING_ACCOUNT_ID;
    var SET_ACCOUNT_BY_MSISDN = "authorization/set_account_by_msisdn";
    _exports.SET_ACCOUNT_BY_MSISDN = SET_ACCOUNT_BY_MSISDN;
    var SET_SALES_CHANNEL = "authorization/set_sales_channel";
    _exports.SET_SALES_CHANNEL = SET_SALES_CHANNEL;
    var AUTHORIZATION_CLEAR_CART_CHANGED_FLAG = "authorization/clear_cart_changed_flag";
    _exports.AUTHORIZATION_CLEAR_CART_CHANGED_FLAG = AUTHORIZATION_CLEAR_CART_CHANGED_FLAG;
    var INCOMPATIBLE_MARKET_ACTION = "authorization/incompatible_market_action_request";
    var incompatibleMarketCheck = (0, _requestActionsCreator.createRequestActionTypes)(INCOMPATIBLE_MARKET_ACTION);
    _exports.incompatibleMarketCheck = incompatibleMarketCheck;
    var MARKET_IS_INCOMPATIBLE = "authorization/MARKET_IS_INCOMPATIBLE";
    _exports.MARKET_IS_INCOMPATIBLE = MARKET_IS_INCOMPATIBLE;
    var MARKET_IS_COMPATIBLE = "authorization/MARKET_IS_COMPATIBLE";
    _exports.MARKET_IS_COMPATIBLE = MARKET_IS_COMPATIBLE;
    var IS_PESEL_AND_ADDRESS_VERIFIED = "authorization/IS_PESEL_AND_ADDRESS_VERIFIED";
    _exports.IS_PESEL_AND_ADDRESS_VERIFIED = IS_PESEL_AND_ADDRESS_VERIFIED;
    var IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED = "authorization/IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED";
    _exports.IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED = IS_PESEL_AND_ADDRESS_VERIFICATION_ENABLED;
    var STAY_LOVE_RETENTION_MSISDN = "authorization/STAY_LOVE_RETENTION_MSISDN";
    _exports.STAY_LOVE_RETENTION_MSISDN = STAY_LOVE_RETENTION_MSISDN;
});
//# sourceMappingURL=actionTypes.js.map