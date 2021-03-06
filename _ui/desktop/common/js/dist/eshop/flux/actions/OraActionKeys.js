define(["exports"], function(_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
        value: true
    });
    _exports.default = void 0;

    /**
     * Contants used as action names
     * for Flux architecture
     **/
    var ORA_ACTIONS = {
        // app actions
        SELECT_FILTER: "ChangeFilter",
        SELECT_OFFER: "ChangeOffer",
        SELECT_SERVICE: "SelectService",
        SELECT_SIM: "selectSim",
        GET_SIM_TYPE: "getSimType",
        SELECT_IMEI: "selectImei",
        SELECT_MSISDN: "selectMsisdn",
        SEARCH_MSISDNS: "searchMsisdns",
        REROLL_MSISDNS: "rerollMsisdns",
        RELEASE_MSISDNS: "releaseMsisdns",
        CHANGE_SIM_CARD_NUMBER: "changeSimCardNumber",
        CHANGE_TERMINAL_SERIAL_NUMBER: "changeTerminalSerialNumber",
        CHANGE_EURO_SET_ELEMENT_SERIAL_NUMBER: "changeEuroSetSerialNumber",
        ADD_TO_CART: "addToCart",
        MODIFY_OFFER: "modifyOffer",
        CHANGE_OFFER: "changeOffer",
        REGISTER_PAYMENT_TOOLTIP_CONFIG: "registerPaymentTooltipConfig",
        DO_CHECKOUT_STEP: "doCheckoutStep",
        INVALIDATE_MSISDN: "invalidateMsisdn",
        PAYMENT_METHOD_SELECTED: "paymentMethodSelected",
        PAYMENT_METHOD_UNSELECT: "paymentMethodUnselect",
        DELIVERY_METHOD_SELECTED: "deliveryMethodSelected",
        LOADED_CONSENTS_DOCUMENT: "loadedConsentsDocument",
        GET_OR_CREATE_DOCUMENT: "getOrCreateDocument",
        CHECK_CONSTENT: "checkConsent",
        AGREE_ALL_CONSENTS: "agreeAllConsents",
        CHECK_CONSENT_CHECKBOX: "checkConsentCheckbox",
        CHECK_DISCOUNT_CONSENT_CHECKBOX: "checkDiscountConsentCheckbox",
        REGISTER_CHECKOUT_CONDITION: "registerCheckoutCondition",
        REMOVE_FROM_CART: "removeFromCart",
        REGISTER_SIM_VALIDATION: "registerSimValidation",
        REGISTER_IMEI_VALIDATION: "registerImeiValidation",
        VERIFY_SIM_CARDS_BUTTON_CLICK: "verifySimCardsButtonClick",
        PRINT_CONSENTS_BUTTON_ECARE_FAIL: "printConsentsButtonECareFail",
        PRINT_CONSENTS_BUTTON_CLICK: "printConsentsButtonClick",
        PRINT_REPORT: "printReport",
        CHECK_BENEFIT: "checkBenefit",
        CHECK_ALL_BENEFIT: "checkAllBenefit",
        POST_CODE_CHANGED: "postCodeChanged",
        CREATE_FORM_COURIER_DELIVERY_DATA: "createFormCourierDeliveryData",
        SELECT_DELIVERY_DATA: "selectDeliveryData",
        FORM_COURIER_ROW_CHANGED: "formCourierRowChanged",
        CHANGE_TEXT_AREA_DELIVERY_COURIER: "changeTextAreaDeliveryCourier",
        REGISTER_CV_VALIDATION_POPUP: "registerCvValidationPopup",
        REGISTER_CV_MANUAL_VERIFICATION_REDIRECT_POPUP: "registerManualVerificationRedirectPopup",
        REGISTER_CV_MANUAL_VERIFICATION_EXISTS_POPUP: "registerManualVerificationExistsPopup",
        REGISTER_CV_MANUAL_VERIFICATION_VERIFY_ONLINE_POPUP: "registerManualVerificationVerifyOnlinePopup",
        CV_MANUAL_VERIFICATION_CONTINUE_BUTTON_CLICK: "cvManualVerificationContinueButtonClicked",
        CV_MANUAL_VERIFICATION_RESULT: "cvManualVerificationResult",
        CV_MANUAL_VERIFICATION_RESULT_ERROR: "cvManualVerificationResultError",
        REGISTER_DELIVERY_DATA_COMPONENT: "registerDeliveryDataComponent",
        REGISTER_MINI_CART_COMPONENT: "registerMiniCartComponent",
        GET_DOCUMENT_FROM_ORDER: "getDocumentFromOrder",
        GET_POSES_FOR_POSITION: "getPosesForPosition",
        SELECT_POS_FOR_DELIVERY: "selectPosForDelivery",
        CHANGE_ORDER_COMMENT: "changeOrderComment",
        CHANGE_TELESALES_DATA: "changeTelesalesInfo",
        ASSIST_MODE_STATE: "assistModeState",
        ASSIST_MODE_ENTER: "assistModeEnter",
        ASSIST_MODE_LEAVE: "assistModeLeave",
        EMPLOYEE_LIST_FILTER_CLEAR: "employeeListFilterClear",
        EMPLOYEE_LIST_SEARCH: "employeeListSearch",
        FORM_PHONE_CONTACT_CHANGED: "formPhoneContactChanged",
        DEVICE_LIST_SEARCH: "deviceListSearch",
        DEVICE_LIST_SEARCH_MORE: "deviceListSearchMore",
        CHANGE_DEVICE: "changeDevice",
        SELECT_DEVICE: "selectDevice",
        SELECT_DEVICE_COLOR: "selectDeviceColor",
        GOTO_DEVICE_DETAILS_PAGE: "gotoDeviceDetailsPage",
        INITIALIZE_DISCOUNT_COMPONENT: "initializeDiscountComponent",
        LOYALTY_LENGTH_CHANGE: "loyaltyLengthChange",
        PROCESS_TYPE_CHANGE: "processTypeChange",
        PROPOSITION_FILTER_CHANGE: "propositionFilterChange",
        VERIFY_AND_ORDER_ITEMS_BUTTON_CLICK: "verifyAndOrderItemsButtonClick",
        GET_SAP_FIORI_CORRECTIVE_INVOICE_LINK: "getSapFioriCorrectiveInvoiceLink",
        SAP_FIORI_CORRECTIVE_INVOICE_LINK_READY: "sapFioriCorrectiveInvoiceLinkReady",
        SAP_FIORI_CORRECTIVE_INVOICE_LINK_ERROR: "sapFioriCorrectiveInvoiceLinkError",
        GET_SAP_FIORI_LINKS: "getSapFioriLinks",
        SAP_FIORI_LINKS_READY: "sapFioriLinksReady",
        SAP_FIORI_LINKS_ERROR: "sapFioriLinksError",
        UNLOCK_SALE_IN_SAP_BUTTON_CLICK: "unlockSaleInSapButtonClick",
        CHECK_UNLOCK_SALE_IN_SAP_BUTTON_CLICK: "checkUnlockSaleInSapStatusButtonClick",
        GET_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP: "getPaymentAndFiscalizationDataFromSap",
        CHECK_PAYMENT_STATUS_BUTTON_CLICK: "checkPaymentStatusButtonClick",
        PRINT_ORDER_NUMBER_BUTTON_CLICK: "printOrderNumberButtonClick",
        PRINT_ORDER_INVOICE_BUTTON_CLICK: "printOrderInvoiceButtonClick",
        SELECT_CUSTOMER_ADDITIONAL_DOCUMENT: "selectCustomerAdditionalDocument",
        CHANGE_CUSTOMER_WORK_PHONE_NUMBER: "changeCustomerWorkPhoneNumber",
        CLEAN_VERIFICATION_DATA: "cleanVerificationData",
        CLEAR_VERIFICATION_CACHE: "clearVerificationCache",
        CLEAN_PRE_POST_DATA: "cleanPrePostData",
        CLEAN_RETENTION_DATA: "cleanRetentionData",
        CHECKOUT_SUMMARY_ORDER_RECOVERY: "checkoutSummaryOrderRecovery",
        SELECT_DEVICE_COLOR_FOR_PROPOSITION: "selectDeviceColorForProposition",
        SELECT_MANUFACTUTER_FILTER: "selectManufacturerFilter",
        RETURN_DEVICE_LIST: "returnDeviceList",
        CLEAR_CACHE: "clearCache",
        IS_SIM_POS: "isSimPos",
        IS_TERMINAL_POS: "isTerminalPos",
        // server actions
        LOADED_DEVICE_PARAMETER_FILTER: "loadedDeviceParameterFilter",
        LOADED_FILTERS: "LoadedFilters",
        LOADED_DEVICE_OFFER_FILTER: "loadedDeviceOfferFilter",
        LOADED_DEFAULT_FILTER: "loadedDefaultFilter",
        LOADED_OFFERS: "LoadedOffers",
        LOADED_SERVICES: "LoadedServices",
        LOADED_SIM_CARDS: "loadedSimCards",
        LOADED_SIM_CARD_TYPES: "loadedSimCardTypes",
        VERIFIED_SIM_CARDS: "verifiedSimCards",
        UNLOCKED_SALE_IN_SAP: "unlockSaleInSapDone",
        LOADED_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP: "loadedPaymentAndFiscalizationDataFromSap",
        PAYMENT_STATUS_VERIFIED: "paymentStatusVerified",
        PAYMENT_STATUS_RECOVERY: "paymentStatusRecovery",
        PRINTOUT_DOCUMENT_RESULT: "printoutDocumentResult",
        LOADED_MSISDN_LIST: "loadedMsisdnList",
        CHECK_MSISDN_TYPE: "checkMsisdnType",
        VERIFY_NUMBER: "verifyNumber",
        CHECKED_MSISDN_TYPE: "checkedMsisdnType",
        VERIFIED_NUMBER: "verifiedNumber",
        GET_OFFERS_BY_MSISDN: "getOffersByMsisdn",
        RELEASED_MSISDN_LIST: "releasedMsisdnList",
        RESERVED_MSISDN: "reservedMsisdn",
        CHECKED_MSISDN_RESERVATION: "checkedMsisdnReservation",
        LOADED_CART: "loadedCart",
        LOADED_CAMPAIGN_DATA: "loadedCampaignData",
        LOADED_AVAILABLE_DELIVERY_DATA: "loadDeliveryDataTmp",
        ADDED_TO_CART: "addedToCart",
        CHECKOUT_STEP_DONE: "checkoutStepDone",
        CHECKOUT_STEP_SAVED: "checkoutStepSaved",
        LOADED_DOCUMENTS_LIST: "loadedDocumentsList",
        LOADED_DOCUMENTS_FOR_CART: "loadedDocumentsForCart",
        LOADED_DOCUMENTS_FROM_ORDER: "loadedDocumentsFromOrder",
        CREATING_DOCUMENT: "creatingDocument",
        CREATED_DOCUMENT: "createdDocument",
        LOADED_DOCUMENT: "loadedDocument",
        LOADED_CONSENTS: "loadedConsents",
        LOADED_CART_CONSENTS: "loadedCartConsents",
        LOADED_CONSENTS_BY_TYPE: "loadedConsentsByType",
        BENEFIT_CONSENTS_VERIFIED: "benefitConsentsVerified",
        LOAD_DELIVERY_DATA: "loadDeliveryData",
        REMOVED_FROM_CART: "removedFromCart",
        CHECKED_RESERVE_STATUS: "checkedReserveStatus",
        LOADED_BENEFITS: "loadedBenefits",
        VALIDATED_POST_CODE_CBS: "validatedPostCodeCBS",
        GET_STREETS_CBS: "getStreetsCBS",
        LOADED_ORDER_NUMBER: "loadedOrderNumber",
        LOADED_ORDER_DATA: "loadedOrderData",
        NEAREST_POSES_LOADED: "nearestPosesLoaded",
        GET_DOCUMENT_FROM_ORDER_COMPLETED: "getDocumentFromOrderCompleted",
        ASSIST_MODE_STATE_CHANGED: "assistModeStateChanged",
        ASSIST_MODE_STATE_LOADED: "assistModeStateLoaded",
        EMPLOYEE_LIST_LOADED: "employeeListLoaded",
        LOAD_PHONE_CONTACT_DATA: "loadPhoneContactData",
        CLEAR_CUSTOMER_SESSION: "clearCustomerSession",
        DEVICE_LIST_LOADED: "deviceListLoaded",
        DEVICE_LIST_MORE_LOADED: "deviceListMoreLoaded",
        OPL_CUSTOMER_ACCOUNT: "oplcustomeraccunt",
        OPL_CUSTOMER_ACCOUNT_NEW: "oplcustomeraccuntnew",
        OPL_CUSTOMER_ACCOUNT_EXISTING: "oplcustomeraccuntexisting",
        LOADED_CUSTOMER_ADDITIONAL_DOCUMENTS: "loadedCustomerAdditionalDocuments",
        LOADED_CHANNEL: "loadedChannel",
        ORDER_PAYMENT_OVERRIDE: "orderPaymentOverride",
        ORDER_CANCEL: "orderCancel",
        ORDER_CANCEL_RESPONSE: "orderCancelResponse",
        ORDER_CANCEL_RESPONSE_ERROR: "orderCancelResponseError",
        DOCUMENT_SIGN_CONFIRMATION: "document sign confirmation",
        OFFER_CALCULATED: "offerCalculated",
        CART_CALCULATED: "cartCalculated",
        AVAILABLE_PAYMENT_METHODS: "availablePaymentMethods",
        AVAILABLE_DELIVERY_METHODS: "availableDeliveryMethods",
        SAP_IFS_RESERVATION_DONE: "sapIfsReservationDone",
        // error actions
        ADD_TO_CART_ERROR: "addToCartError",
        RESERVE_MSISDN_ERROR: "reserveMsisdnError",
        CREATE_DOCUMENT_ERROR: "createDocumentError",
        LOAD_DOCUMENT_ERROR: "loadDocumentError",
        OFFER_CALCULATION_ERROR: "offerCalculationError",
        CHECKOUT_STEP_ERROR: "checkoutStepError",
        LOAD_DOCUMENT_FROM_ORDER_ERROR: "loadDcoumentFromOrderError",
        ASSIST_MODE_STATE_ERROR: "assistModeStateError",
        ASSIST_MODE_ENTER_ERROR: "assistModeEnterError",
        ASSIST_MODE_LEAVE_ERROR: "assistModeLeaveError",
        EMPLOYEE_LIST_SEARCH_ERROR: "employeeListSearchError",
        CLEAR_CUSTOMER_SESSION_ERROR: "clearCustomerSessionError",
        DEVICE_LIST_SEARCH_ERROR: "deviceListSearchError",
        CHECK_SERIAL_NUMBERS_ERROR: "checkSerialNumbersError",
        UNLOCK_SALE_IN_SAP_ERROR: "unlockSaleInSapError",
        GET_PAYMENT_AND_FISCALIZATION_DATA_FROM_SAP_ERROR: "getPaymentAndFiscalizationDataFromSapError",
        PAYMENT_STATUS_VERIFICATION_ERROR: "paymentStatusVerificationError",
        PRINT_ORDER_NUMBER_DOCUMENT_ERROR: "printOrderNumberDocumentError",
        PRINT_INVOICE_DOCUMENT_ERROR: "printInvoiceDocumentError",
        GET_OFFERS_ERROR: "getOffersError",
        VERIFY_NUMBER_ERROR: "verifyNumberError",
        GET_SIM_CARD_TYPES_ERROR: "getSimCardTypesError",
        // config actions
        CONFIG_CHECK_MSISDN_RESERVATIONS: "checkMsisdnReservations",
        // page actions
        INITIALIZE: "initialize",
        PAGE_REDIRECT: "PageRedirect",
        LOADED_MNP_DATA: "loadedMNPFormData",
        SELECT_OPERATOR: "selectOperator",
        SELECT_OFFER_TYPE: "selectOfferType",
        SELECT_CONTACT_METHOD: "selectContactMethod",
        SELECT_MIGRATION_MODE: "selectMigrationMode",
        CHANGE_MOBILE_NUMBER: "changeMobileNumber",
        CHANGE_TEMPORAL_NUMBER: "changeTemporalNumber",
        CHOOSE_AGREEMENT_TYPE: "chooseAgreementType",
        CHANGE_BUSINESS_NAME: "changeBusinessName",
        CHANGE_NIP: "changeNip",
        CHANGE_REGON: "changeRegon",
        HEADQUARTERS_ADDRESS: "setIsHeadquartersAddressSame",
        CHANGE_POSTAL_CODE: "changePostalCode",
        CHANGE_CITY: "changeCity",
        CHANGE_STREET: "changeStreet",
        CHANGE_HOUSE_NUMBER: "changeHouseNumber",
        CHANGE_FLAT_NUMBER: "changeFlatNumber",
        CHANGE_DATE: "changeDate",
        CREATE_MNP_DATA: "createMNPData",
        FORM_ROW_CHANGED: "formRowChanged",
        OUT_OF_STOCK_NEXT_STEP: "outOfStockErrorNextStep",
        SAP_RESERVATION_ERROR_NEXT_STEP: "sapReservationErrorNextStep"
    };
    var _default = ORA_ACTIONS;
    _exports.default = _default;
});
//# sourceMappingURL=OraActionKeys.js.map