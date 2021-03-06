import {
    connect
} from "react-redux";
import React, {
    Component
} from "react";
import {
    getFbbServices,
    getSelectedDesignationNumber,
    getSelectedServiceInstanceId
} from "../../selectors";
import {
    setSelectedServiceInstanceIdAction,
    setSelectedDesignationNumberAction,
    gotoFixDispatcher,
    refreshFixCartWithoutFbbCheck,
    requestFBBServiceDataFilteredByWWT
} from "../../actions/app";
import {
    OraButton,
    OraSimpleRadio
} from "eshop/components/OraCommonComponents";
import OraModal from "eshop/modules/core/components/ui/Modal";

class FBBServicesModalView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldClose: false
        };
        this.props.fixInvalid && OPL.UI.on('module.started', (data) => this.onReady(data));
        this.onReady = this.onReady.bind(this);
        this.modalId = "fbbServicesModal";
    }

    componentWillUpdate(nextProps) {
        if (!!this.props.fbbServices && !!nextProps.fbbServices && !!nextProps.fbbServices[0] && nextProps.fbbServices[0].serviceBundles && nextProps.fbbServices[0].serviceBundles[0] && this.props.fbbServices.length != nextProps.fbbServices.length) {
            this.props.selectedDesignationNumberAction(nextProps.fbbServices[0].serviceBundles[0].mainService.designationNumber);
            this.props.selectedServiceInstanceIdAction(nextProps.fbbServices[0].serviceBundles[0].mainService.serviceId);
        }
    }

    onReady(data) {
        if (data.element.id === "react-modal-" + this.modalId + "-trigger") {
            this.props.requestFBBServiceDataFilteredByWWT();
        }
    }

    renderService(serviceBundle) {
        if (serviceBundle.mainService) {
            const serviceId = serviceBundle.mainService.serviceId;
            const hasPots = !!serviceBundle.pots;
            const isConvergent = !!serviceBundle.convergent;
            const {
                potsIcon,
                internetIcon,
                videoIcon,
                voipIcon,
                simIcon,
                pots,
                internet,
                video,
                voip,
                sim,
                servicesSeparator
            } = this.props.descriptions;
            let icons = '';
            let desc = '';
            switch (serviceId) {
                case "PSTN0000":
                    icons += potsIcon;
                    desc += pots;
                    break;
                case "NEOI0000":
                    icons += internetIcon;
                    desc += internet;
                    break;
                case "DUO0000":
                    icons += internetIcon + voipIcon;
                    desc += internet + servicesSeparator + voip;
                    break;
                case "DWIE0000":
                    icons += internetIcon + videoIcon;
                    desc += internet + servicesSeparator + video;
                    break;
                case "TRPL0000":
                    icons += internetIcon + videoIcon + voipIcon;
                    desc += internet + servicesSeparator + video + servicesSeparator + voip;
                    break;
            }
            if ("PSTN0000" !== serviceId && hasPots) {
                icons += potsIcon;
                desc += servicesSeparator + pots;
            }
            if (("NEOI0000" === serviceId || "TRPL0000" === serviceId) && isConvergent) {
                icons += simIcon;
                desc += servicesSeparator + sim;
            }
            if (!isConvergent) {
                desc += ' (' + serviceBundle.displayNumber + ')';
            }
            let labelWithIcons = ({
                __html: (icons + desc)
            });
            return ( <
                p dangerouslySetInnerHTML = {
                    labelWithIcons
                }
                />
            );
        }
    }

    renderFixAddressWithServices(fixAddressWithServices) {
            return ( <
                    div > {
                        fixAddressWithServices.map((service, index) => ( <
                                div key = {
                                    index
                                } > {
                                    this.renderServices(service)
                                } < /div>))
                            } <
                            /div>
                        );
                    }

                    renderServices(service) {
                        return ( < div > {
                                    service.serviceBundles.map((a, subindex) => < span key = {
                                            "subMap-" + subindex
                                        } > {
                                            < OraSimpleRadio {
                                                ...this.getPropsForRadio(this.renderService(a), a)
                                            }
                                            />}<br/ > < /span>)} <
                                            /div>);
                                        }

                                        getPropsForRadio(text, value) {
                                            return {
                                                name: "serviceSelect",
                                                text: text,
                                                value: [this.getDesignationNumber(value), this.getServiceInstanceId(value)],
                                                labelClassName: "o-radio opl-radio u-spacing",
                                                spanClassName: "u-vertical-center",
                                                readOnly: false,
                                                checked: this.getDesignationNumber(value).toString() == this.props.selectedDesignationNumber,
                                                onChange: this.selectRadio.bind(this)
                                            };
                                        }

                                        selectRadio(event) {
                                            this.props.selectedDesignationNumberAction(event.target.value.slice(0, event.target.value.indexOf(',')));
                                            this.props.selectedServiceInstanceIdAction(event.target.value.slice(event.target.value.lastIndexOf(',') + 1));
                                        }

                                        getDesignationNumber(value) {
                                            return !!value && !!value.mainService && value.mainService.designationNumber;
                                        }

                                        getServiceInstanceId(value) {
                                            return !!value && !!value.mainService && value.mainService.cfServiceInstanceId;
                                        }


                                        getButtonProps(main) {
                                            return {
                                                className: "o-btn opl-btn opl-btn--primary u-w-100",
                                                accept: main,
                                                type: main ? "primary" : "secondary",
                                                onClick: this.props.onClickNext.bind(this, this.props.selectedDesignationNumber, this.props.selectedServiceInstanceId)
                                            };
                                        }

                                        render() {
                                            return ( <
                                                OraModal id = {
                                                    this.modalId
                                                }
                                                showClose = {
                                                    true
                                                }
                                                open = {
                                                    this.props.fbbServices && this.props.fbbServices.length > 0
                                                }
                                                size = "narrow" >
                                                <
                                                div className = "u-spacing-l u-spacing-top-l" >
                                                <
                                                span className = "h3" > {
                                                    this.props.descriptions.title || "Zdecyduj czy składane zamówienia ma być rozliczane w ramach faktury dla posiadanego już konta, czy nowego."
                                                } < /span><br/ >
                                                <
                                                /div> <
                                                div className = "u-spacing-l" >
                                                <
                                                span > {
                                                    this.props.descriptions.mainDescription || "Do faktury wskazanego przez ciebie konta, dołączone będą numery umieszczone na koszyku. Dołączenie wybranych numerówdo Twojego istniejącego konta sprawi, że co miesiąc będziesz opłacać tylko jeden rachunek, na którym wyszczególnione będą opłaty za wszystkie numery."
                                                } < /span><br/ >
                                                <
                                                /div>

                                                {
                                                    !!this.props.fbbServices && this.props.fbbServices.length > 0 && this.renderFixAddressWithServices(this.props.fbbServices)
                                                } <
                                                OraSimpleRadio {
                                                    ...this.getPropsForRadio("Zainstaluj nową usługę", "")
                                                }
                                                />

                                                <
                                                div className = "l-row u-padding-top-m" >
                                                <
                                                div className = "l-col l-col-small-12 l-col-medium-8 l-col-8 " >
                                                <
                                                /div> <
                                                div className = "l-col l-col-small-12 l-col-medium-4 l-col-4 " >
                                                <
                                                OraButton {
                                                    ...this.getButtonProps(false)
                                                } > {
                                                    this.props.descriptions.next || "Dalej"
                                                } < /OraButton> <
                                                /div> <
                                                /div>

                                                <
                                                /OraModal>

                                            )
                                        }
                                    }

                                    let mapStateToProps = state => ({
                                        fbbServices: getFbbServices(state),
                                        selectedDesignationNumber: getSelectedDesignationNumber(state),
                                        selectedServiceInstanceId: getSelectedServiceInstanceId(state),
                                    });
                                    let mapDispatchToProps = dispatch => ({
                                        selectedDesignationNumberAction: (designationNumber) => dispatch(setSelectedDesignationNumberAction(designationNumber)),
                                        selectedServiceInstanceIdAction: (serviceInstanceId) => dispatch(setSelectedServiceInstanceIdAction(serviceInstanceId)),
                                        onClickNext: (selectedDesignationNumber, selectedServiceInstanceId) => {
                                            selectedDesignationNumber != "false" ? dispatch(gotoFixDispatcher(selectedDesignationNumber, selectedServiceInstanceId)) : dispatch(refreshFixCartWithoutFbbCheck())
                                        },
                                        requestFBBServiceDataFilteredByWWT: () => dispatch(requestFBBServiceDataFilteredByWWT())
                                    });

                                    const FBBServicesModal = connect(mapStateToProps, mapDispatchToProps)(FBBServicesModalView);
                                    export default FBBServicesModal;