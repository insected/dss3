/**
 * Mechanism for composing user actions with context-dependent actions like redirect.
 * Usage example:
 * OraActions.after(OraActions.changeOffer).doAction(OraActions.goto.offerConfigurator)
 * this will cause selecting an offer redirect to the offer configurator.
 **/
let OraMetaActions = (function(OraActions) {
    OraActions._afterActions = OraActions._afterActions || {};

    function createThenable(originalAction) {
        return {
            doAction: function(actions) {
                OraActions._afterActions[originalAction].push(actions);
            }
        };
    }

    OraActions.after = function(action) {
        OraActions._afterActions[action] = OraActions._afterActions[action] || [];
        return createThenable(action);
    };

    OraActions._executeAfter = function(action) {
        if (OraActions._afterActions[action]) {
            OraActions._afterActions[action].forEach(act => act());
        }
    };

    OraActions.unregisterAfter = function(action, actionToRemove) {
        if (OraActions._afterActions[action]) {
            OraActions._afterActions[action] = OraActions._afterActions[action].filter(function(item) {
                return item !== actionToRemove
            });
        }
    };

    return OraActions;
})({});

export default OraMetaActions;