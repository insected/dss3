define(["exports", "../core/utils/request-actions-creator"], function(_exports, _requestActionsCreator) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.SAVE_WWT_ADDITIONAL_DATA = _exports.SHOW_ONLY_FTTH = _exports.ALL_MIGRATION_OFFERS_FETCHED = _exports.NEXT_MIGRATION_OFFER_FETCH_ERROR = _exports.NEXT_MIGRATION_OFFER_FETCHED = _exports.NEXT_MIGRATION_OFFER_FETCHING = _exports.ALL_MIGRATION_OFFERS_FETCHING = _exports.MIGRATION_OFFERS_FETCH_ERROR = _exports.MIGRATION_OFFERS_FETCHED = _exports.MIGRATION_OFFERS_FETCHING = _exports.CLOSE_WWT_ZIP_MODAL = _exports.OPEN_WWT_ZIP_MODAL = _exports.FILL_MISSING_ZIP_CODE = _exports.SAVE_WWT_ADDRESS_NO_ZIP = _exports.SET_AVAILABLE_BUNDLE_TYPES = _exports.SET_MAGNUM_STORE = _exports.SET_LOYALTY_PERIOD = _exports.SET_MOBILE_TRANSACTION = _exports.SET_FIX_VOIP_TRANSACTION = _exports.SET_FIX_BROADBAND_TRANSACTION = _exports.SET_PROPOSITION_COMPONENT_PK = _exports.SET_KNA_NUMBER = _exports.SELECT_DEVICE_VARIANT = _exports.SELECT_PROPOSITION = _exports.SHOW_FORCE_SEARCH_MODAL_ACTION = _exports.CUSTOMER_SEARCHED = _exports.fetchDocumentsList = _exports.fetchPropositionList = _exports.fetchPossibleTransactions = _exports.fetchDeviceList = void 0;
    var FETCH_DEVICE_LIST = "magnum/FETCH_DEVICE_LIST";
    var fetchDeviceList = (0, _requestActionsCreator.createRequestActionTypes)(FETCH_DEVICE_LIST);
    _exports.fetchDeviceList = fetchDeviceList;
    var FETCH_POSSIBLE_TRANSACTIONS = "magnum/fetchPossibleTransactions";
    var fetchPossibleTransactions = (0, _requestActionsCreator.createRequestActionTypes)(FETCH_POSSIBLE_TRANSACTIONS);
    _exports.fetchPossibleTransactions = fetchPossibleTransactions;
    var FETCH_PROPOSITION_LIST = "magnum/FETCH_PROPOSITION_LIST";
    var fetchPropositionList = (0, _requestActionsCreator.createRequestActionTypes)(FETCH_PROPOSITION_LIST);
    _exports.fetchPropositionList = fetchPropositionList;
    var FETCH_DOCUMENTS_LIST = "magnum/FETCH_DOCUMENTS_LIST";
    var fetchDocumentsList = (0, _requestActionsCreator.createRequestActionTypes)(FETCH_DOCUMENTS_LIST);
    _exports.fetchDocumentsList = fetchDocumentsList;
    var CUSTOMER_SEARCHED = "magnum/customerSearched";
    _exports.CUSTOMER_SEARCHED = CUSTOMER_SEARCHED;
    var SHOW_FORCE_SEARCH_MODAL_ACTION = "SHOW_FORCE_SEARCH_MODAL_ACTION";
    _exports.SHOW_FORCE_SEARCH_MODAL_ACTION = SHOW_FORCE_SEARCH_MODAL_ACTION;
    var SELECT_PROPOSITION = "magnum/propositions/selectProposition";
    _exports.SELECT_PROPOSITION = SELECT_PROPOSITION;
    var SELECT_DEVICE_VARIANT = "magnum/propositions/selectDeviceVariant";
    _exports.SELECT_DEVICE_VARIANT = SELECT_DEVICE_VARIANT;
    var SET_KNA_NUMBER = "magnum/propositions/setKnaNumber";
    _exports.SET_KNA_NUMBER = SET_KNA_NUMBER;
    var SET_PROPOSITION_COMPONENT_PK = "magnum/propositions/setPropositionComponentPk";
    _exports.SET_PROPOSITION_COMPONENT_PK = SET_PROPOSITION_COMPONENT_PK;
    var SET_FIX_BROADBAND_TRANSACTION = "magnum/propositions/setFixBroadbandTransaction";
    _exports.SET_FIX_BROADBAND_TRANSACTION = SET_FIX_BROADBAND_TRANSACTION;
    var SET_FIX_VOIP_TRANSACTION = "magnum/propositions/setFixVoipTransaction";
    _exports.SET_FIX_VOIP_TRANSACTION = SET_FIX_VOIP_TRANSACTION;
    var SET_MOBILE_TRANSACTION = "magnum/propositions/setMobileTransaction";
    _exports.SET_MOBILE_TRANSACTION = SET_MOBILE_TRANSACTION;
    var SET_LOYALTY_PERIOD = "magnum/propositions/setLoyaltyPeriod";
    _exports.SET_LOYALTY_PERIOD = SET_LOYALTY_PERIOD;
    var SET_MAGNUM_STORE = "magnum/setStore";
    _exports.SET_MAGNUM_STORE = SET_MAGNUM_STORE;
    var SET_AVAILABLE_BUNDLE_TYPES = "magnum/setAvailableBundleTypes";
    _exports.SET_AVAILABLE_BUNDLE_TYPES = SET_AVAILABLE_BUNDLE_TYPES;
    var SAVE_WWT_ADDRESS_NO_ZIP = "SAVE_WWT_ADDRESS_NO_ZIP";
    _exports.SAVE_WWT_ADDRESS_NO_ZIP = SAVE_WWT_ADDRESS_NO_ZIP;
    var FILL_MISSING_ZIP_CODE = "FILL_MISSING_ZIP_CODE";
    _exports.FILL_MISSING_ZIP_CODE = FILL_MISSING_ZIP_CODE;
    var OPEN_WWT_ZIP_MODAL = "OPEN_WWT_ZIP_MODAL";
    _exports.OPEN_WWT_ZIP_MODAL = OPEN_WWT_ZIP_MODAL;
    var CLOSE_WWT_ZIP_MODAL = "CLOSE_WWT_ZIP_MODAL";
    _exports.CLOSE_WWT_ZIP_MODAL = CLOSE_WWT_ZIP_MODAL;
    var MIGRATION_OFFERS_FETCHING = "MIGRATION_OFFERS_FETCHING";
    _exports.MIGRATION_OFFERS_FETCHING = MIGRATION_OFFERS_FETCHING;
    var MIGRATION_OFFERS_FETCHED = "MIGRATION_OFFERS_FETCHED";
    _exports.MIGRATION_OFFERS_FETCHED = MIGRATION_OFFERS_FETCHED;
    var MIGRATION_OFFERS_FETCH_ERROR = "MIGRATION_OFFERS_FETCH_ERROR";
    _exports.MIGRATION_OFFERS_FETCH_ERROR = MIGRATION_OFFERS_FETCH_ERROR;
    var ALL_MIGRATION_OFFERS_FETCHING = "ALL_MIGRATION_OFFERS_FETCHING";
    _exports.ALL_MIGRATION_OFFERS_FETCHING = ALL_MIGRATION_OFFERS_FETCHING;
    var NEXT_MIGRATION_OFFER_FETCHING = "NEXT_MIGRATION_OFFER_FETCHING";
    _exports.NEXT_MIGRATION_OFFER_FETCHING = NEXT_MIGRATION_OFFER_FETCHING;
    var NEXT_MIGRATION_OFFER_FETCHED = "NEXT_MIGRATION_OFFER_FETCHED";
    _exports.NEXT_MIGRATION_OFFER_FETCHED = NEXT_MIGRATION_OFFER_FETCHED;
    var NEXT_MIGRATION_OFFER_FETCH_ERROR = "NEXT_MIGRATION_OFFER_FETCH_ERROR";
    _exports.NEXT_MIGRATION_OFFER_FETCH_ERROR = NEXT_MIGRATION_OFFER_FETCH_ERROR;
    var ALL_MIGRATION_OFFERS_FETCHED = "ALL_MIGRATION_OFFERS_FETCHED";
    _exports.ALL_MIGRATION_OFFERS_FETCHED = ALL_MIGRATION_OFFERS_FETCHED;
    var SHOW_ONLY_FTTH = "SHOW_ONLY_FTTH";
    _exports.SHOW_ONLY_FTTH = SHOW_ONLY_FTTH;
    var SAVE_WWT_ADDITIONAL_DATA = "SAVE_WWT_ADDITIONAL_DATA";
    _exports.SAVE_WWT_ADDITIONAL_DATA = SAVE_WWT_ADDITIONAL_DATA;
});
//# sourceMappingURL=actionTypes.js.map