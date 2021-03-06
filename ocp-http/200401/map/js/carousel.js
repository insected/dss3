if (Prototype.Browser.WebKit) {
    Prototype.Browser.WebKitVersion = parseFloat(navigator.userAgent.match(/AppleWebKit\/([\d\.\+]*)/)[1]);
    Prototype.Browser.Safari2 = (Prototype.Browser.WebKitVersion < 420)
}
if (Prototype.Browser.IE) {
    Prototype.Browser.IEVersion = parseFloat(navigator.appVersion.split(";")[1].strip().split(" ")[1]);
    Prototype.Browser.IE6 = Prototype.Browser.IEVersion == 6;
    Prototype.Browser.IE7 = Prototype.Browser.IEVersion == 7
}
Prototype.falseFunction = function() {
    return false
};
Prototype.trueFunction = function() {
    return true
};
var UI = {
    Abstract: {},
    Ajax: {}
};
Object.extend(Class.Methods, {
    extend: Object.extend.methodize(),
    addMethods: Class.Methods.addMethods.wrap(function(a, b) {
        if (!b) {
            return this
        }
        if (!b.hasOwnProperty("methodsAdded")) {
            return a(b)
        }
        var c = b.methodsAdded;
        delete b.methodsAdded;
        a(b);
        c.call(b, this);
        b.methodsAdded = c;
        return this
    }),
    addMethod: function(c, b) {
        var a = {};
        a[c] = b;
        return this.addMethods(a)
    },
    method: function(a) {
        return this.prototype[a].valueOf()
    },
    classMethod: function() {
        $A(arguments).flatten().each(function(a) {
            this[a] = (function() {
                return this[a].apply(this, arguments)
            }).bind(this.prototype)
        }, this);
        return this
    },
    undefMethod: function(a) {
        this.prototype[a] = undefined;
        return this
    },
    removeMethod: function(a) {
        delete this.prototype[a];
        return this
    },
    aliasMethod: function(a, b) {
        this.prototype[a] = this.prototype[b];
        return this
    },
    aliasMethodChain: function(b, a) {
        a = a.camelcase();
        this.aliasMethod(b + "Without" + a, b);
        this.aliasMethod(b, b + "With" + a);
        return this
    }
});
Object.extend(Number.prototype, {
    snap: function(a) {
        return parseInt(a == 1 ? this : (this / a).floor() * a)
    }
});
Object.extend(String.prototype, {
    camelcase: function() {
        var a = this.dasherize().camelize();
        return a.charAt(0).toUpperCase() + a.slice(1)
    },
    makeElement: function() {
        var a = new Element("div");
        a.innerHTML = this;
        return a.down()
    }
});
Object.extend(Array.prototype, {
    empty: function() {
        return !this.length
    },
    extractOptions: function() {
        return this.last().constructor === Object ? this.pop() : {}
    },
    removeAt: function(b) {
        var a = this[b];
        this.splice(b, 1);
        return a
    },
    remove: function(b) {
        var a;
        while ((a = this.indexOf(b)) != -1) {
            this.removeAt(a)
        }
        return b
    },
    insert: function(b) {
        var a = $A(arguments);
        a.shift();
        this.splice.apply(this, [b, 0].concat(a));
        return this
    }
});
Element.addMethods({
    getScrollDimensions: function(a) {
        return {
            width: a.scrollWidth,
            height: a.scrollHeight
        }
    },
    getScrollOffset: function(a) {
        return Element._returnOffset(a.scrollLeft, a.scrollTop)
    },
    setScrollOffset: function(a, b) {
        a = $(a);
        if (arguments.length == 3) {
            b = {
                left: b,
                top: arguments[2]
            }
        }
        a.scrollLeft = b.left;
        a.scrollTop = b.top;
        return a
    },
    getNumStyle: function(a, b) {
        var c = parseFloat($(a).getStyle(b));
        return isNaN(c) ? null : c
    },
    appendText: function(a, b) {
        a = $(a);
        b = String.interpret(b);
        a.appendChild(document.createTextNode(b));
        return a
    }
});
document.whenReady = function(a) {
    if (document.loaded) {
        a.call(document)
    } else {
        document.observe("dom:loaded", a)
    }
};
Object.extend(document.viewport, {
    getScrollOffset: document.viewport.getScrollOffsets,
    setScrollOffset: function(a) {
        Element.setScrollOffset(Prototype.Browser.WebKit ? document.body : document.documentElement, a)
    },
    getScrollDimensions: function() {
        return Element.getScrollDimensions(Prototype.Browser.WebKit ? document.body : document.documentElement)
    }
});
(function() {
    UI.Options = {
        methodsAdded: function(b) {
            b.classMethod($w(" setOptions allOptions optionsGetter optionsSetter optionsAccessor "))
        },
        setOptions: function(b) {
            if (!this.hasOwnProperty("options")) {
                this.options = this.allOptions()
            }
            this.options = Object.extend(this.options, b || {})
        },
        allOptions: function() {
            var c = this.constructor.superclass,
                b = c && c.prototype;
            return (b && b.allOptions) ? Object.extend(b.allOptions(), this.options) : Object.clone(this.options)
        },
        optionsGetter: function() {
            a(this, arguments, false)
        },
        optionsSetter: function() {
            a(this, arguments, true)
        },
        optionsAccessor: function() {
            this.optionsGetter.apply(this, arguments);
            this.optionsSetter.apply(this, arguments)
        }
    };

    function a(c, d, b) {
        d = $A(d).flatten();
        if (d.empty()) {
            d = Object.keys(c.allOptions())
        }
        d.each(function(f) {
            var e = (b ? "set" : "get") + f.camelcase();
            c[e] = c[e] || (b ? function(g) {
                return this.options[f] = g
            } : function() {
                return this.options[f]
            })
        })
    }
})();
UI.Carousel = Class.create(UI.Options, {
    options: {
        direction: "horizontal",
        previousButton: ".previous_button",
        nextButton: ".next_button",
        container: ".container",
        scrollInc: "auto",
        disabledButtonSuffix: "_disabled",
        overButtonSuffix: "_over",
        opacity: 0.5,
        opacityDuration: 0.2,
        movingDuration: 0.4,
        movingDelay: 0.2
    },
    initialize: function(b, a) {
        this.setOptions(a);
        this.element = $(b);
        this.id = this.element.id;
        this.container = this.element.down(this.options.container).firstDescendant();
        this.elements = this.container.childElements();
        this.previousButton = this.options.previousButton == false ? null : this.element.down(this.options.previousButton);
        this.nextButton = this.options.nextButton == false ? null : this.element.down(this.options.nextButton);
        this.posAttribute = (this.options.direction == "horizontal" ? "left" : "top");
        this.dimAttribute = (this.options.direction == "horizontal" ? "width" : "height");
        this.opacity = this.options.opacity;
        this.opacityDuration = this.options.opacityDuration;
        this.movingDuration = this.options.movingDuration;
        this.movingDelay = this.options.movingDelay;
        this.elementSize = this.computeElementSize();
        this.nbVisible = this.currentSize() / this.elementSize;
        var c = this.options.scrollInc;
        if (c == "auto") {
            c = Math.floor(this.nbVisible)
        } [this.previousButton, this.nextButton].each(function(d) {
            if (!d) {
                return
            }
            var e = (d == this.nextButton ? "next_button" : "previous_button") + this.options.overButtonSuffix;
            d.clickHandler = this.scroll.bind(this, (d == this.nextButton ? -1 : 1) * c * this.elementSize);
            d.observe("click", d.clickHandler).observe("mouseover", function() {
                d.addClassName(e)
            }.bind(this)).observe("mouseout", function() {
                d.removeClassName(e)
            }.bind(this))
        }, this);
        this.updateButtons()
    },
    destroy: function($super) {
        [this.previousButton, this.nextButton].each(function(a) {
            if (!a) {
                return
            }
            a.stopObserving("click", a.clickHandler)
        }, this);
        this.element.remove();
        this.fire("destroyed")
    },
    fire: function(b, a) {
        a = a || {};
        a.carousel = this;
        return this.element.fire("carousel:" + b, a)
    },
    observe: function(a, b) {
        this.element.observe("carousel:" + a, b.bind(this));
        return this
    },
    stopObserving: function(a, b) {
        this.element.stopObserving("carousel:" + a, b);
        return this
    },
    checkScroll: function(a, d) {
        if (a > 0) {
            a = 0
        } else {
            var b = this.elements.last().positionedOffset()[this.posAttribute] + this.elementSize;
            var c = this.currentSize();
            if (a + b < c) {
                a += c - (a + b)
            }
            a = Math.min(a, 0)
        }
        if (d) {
            this.container.style[this.posAttribute] = a + "px"
        }
        return a
    },
    scroll: function(d) {
        var c = true;
        if (this.animating) {
            return this
        }
        var b = this.currentPosition() + d;
        b = this.checkScroll(b, false);
        d = b - this.currentPosition();
        if (d != 0) {
            this.animating = true;
            var a = this.currentIndex();
            if (d < 0) {
                a++
            } else {
                a--
            }
            this.fire("scroll:started", {
                nextIndex: a
            });
            var e = this;
            if (e.opacityDuration == 0) {
                e.container.morph(e.posAttribute + ": " + b + "px", {
                    duration: e.movingDuration,
                    delay: e.movingDelay,
                    afterFinish: function() {
                        if (c) {
                            e.animating = false;
                            e.updateButtons().fire("scroll:ended", {
                                shift: d / e.currentSize()
                            });
                            c = false
                        }
                    }
                })
            } else {
                if (e.opacityDuration > 0) {
                    e.container.morph("opacity:" + e.opacity, {
                        duration: e.opacityDuration,
                        afterFinish: function() {
                            if (c) {
                                e.container.morph(e.posAttribute + ": " + b + "px", {
                                    duration: e.movingDuration,
                                    delay: e.movingDelay,
                                    afterFinish: function() {
                                        e.container.morph("opacity:1", {
                                            duration: e.opacityDuration,
                                            afterFinish: function() {
                                                e.animating = false;
                                                e.updateButtons().fire("scroll:ended", {
                                                    shift: d / e.currentSize()
                                                })
                                            }
                                        })
                                    }
                                });
                                c = false
                            }
                        }
                    })
                }
            }
        }
        return this
    },
    scrollTo: function(a) {
        if (this.animating || a < 0 || a > this.elements.length || a == this.currentIndex() || isNaN(parseInt(a))) {
            return this
        }
        return this.scroll((this.currentIndex() - a) * this.elementSize)
    },
    updateButtons: function() {
        if (this.previousButton) {
            this.updatePreviousButton()
        }
        if (this.nextButton) {
            this.updateNextButton()
        }
        return this
    },
    updatePreviousButton: function() {
        var a = this.currentPosition();
        var b = "previous_button" + this.options.disabledButtonSuffix;
        if (this.previousButton.hasClassName(b) && a != 0) {
            this.previousButton.removeClassName(b);
            this.fire("previousButton:enabled")
        }
        if (!this.previousButton.hasClassName(b) && a == 0) {
            this.previousButton.addClassName(b);
            this.fire("previousButton:disabled")
        }
    },
    updateNextButton: function() {
        var a = this.currentLastPosition();
        var b = this.currentSize();
        var c = "next_button" + this.options.disabledButtonSuffix;
        if (this.nextButton.hasClassName(c) && a != b) {
            this.nextButton.removeClassName(c);
            this.fire("nextButton:enabled")
        }
        if (!this.nextButton.hasClassName(c) && a <= b) {
            this.nextButton.addClassName(c);
            this.fire("nextButton:disabled")
        }
    },
    computeElementSize: function() {
        return this.elements.first().getDimensions()[this.dimAttribute]
    },
    currentIndex: function() {
        return -this.currentPosition() / this.elementSize
    },
    currentLastPosition: function() {
        if (this.container.childElements().empty()) {
            return 0
        }
        return this.currentPosition() + this.elements.last().positionedOffset()[this.posAttribute] + this.elementSize
    },
    currentPosition: function() {
        return this.container.getNumStyle(this.posAttribute)
    },
    currentSize: function() {
        return this.container.parentNode.getDimensions()[this.dimAttribute]
    },
    updateSize: function() {
        this.nbVisible = this.currentSize() / this.elementSize;
        var a = this.options.scrollInc;
        if (a == "auto") {
            a = Math.floor(this.nbVisible)
        } [this.previousButton, this.nextButton].each(function(b) {
            if (!b) {
                return
            }
            b.stopObserving("click", b.clickHandler);
            b.clickHandler = this.scroll.bind(this, (b == this.nextButton ? -1 : 1) * a * this.elementSize);
            b.observe("click", b.clickHandler)
        }, this);
        this.checkScroll(this.currentPosition(), true);
        this.updateButtons().fire("sizeUpdated");
        return this
    }
});
UI.Ajax.Carousel = Class.create(UI.Carousel, {
    options: {
        elementSize: -1,
        url: null
    },
    initialize: function($super, b, a) {
        if (!a.url) {
            throw ("url option is required for UI.Ajax.Carousel")
        }
        if (!a.elementSize) {
            throw ("elementSize option is required for UI.Ajax.Carousel")
        }
        $super(b, a);
        this.endIndex = 0;
        this.hasMore = true;
        this.updateHandler = this.update.bind(this);
        this.updateAndScrollHandler = function(e, d, c) {
            this.update(d, c);
            this.scroll(e)
        }.bind(this);
        this.runRequest.bind(this).defer({
            parameters: {
                from: 0,
                to: Math.ceil(this.nbVisible) - 1
            },
            onSuccess: this.updateHandler
        })
    },
    runRequest: function(a) {
        this.requestRunning = true;
        new Ajax.Request(this.options.url, Object.extend({
            method: "GET"
        }, a));
        this.fire("request:started");
        return this
    },
    scroll: function($super, a) {
        if (this.animating || this.requestRunning) {
            return this
        }
        var d = (-a) / this.elementSize;
        if (this.hasMore && d > 0 && this.currentIndex() + this.nbVisible + d - 1 > this.endIndex) {
            var c = this.endIndex + 1;
            var b = Math.ceil(c + this.nbVisible - 1);
            this.runRequest({
                parameters: {
                    from: c,
                    to: b
                },
                onSuccess: this.updateAndScrollHandler.curry(a).bind(this)
            });
            return this
        } else {
            $super(a)
        }
    },
    update: function(b, a) {
        this.requestRunning = false;
        this.fire("request:ended");
        if (!a) {
            a = b.responseJSON
        }
        this.hasMore = a.more;
        this.endIndex = Math.max(this.endIndex, a.to);
        this.elements = this.container.insert({
            bottom: a.html
        }).childElements();
        return this.updateButtons()
    },
    computeElementSize: function() {
        return this.options.elementSize
    },
    updateSize: function($super) {
        var a = this.nbVisible;
        $super();
        if (Math.floor(this.nbVisible) - Math.floor(a) >= 1 && this.hasMore) {
            if (this.currentIndex() + Math.floor(this.nbVisible) >= this.endIndex) {
                var b = Math.floor(this.currentIndex() + Math.floor(this.nbVisible) - this.endIndex);
                this.runRequest({
                    parameters: {
                        from: this.endIndex + 1,
                        to: this.endIndex + b
                    },
                    onSuccess: this.updateHandler
                })
            }
        }
        return this
    },
    updateNextButton: function($super) {
        var a = this.currentLastPosition();
        var b = this.currentSize();
        var c = "next_button" + this.options.disabledButtonSuffix;
        if (this.nextButton.hasClassName(c) && a != b) {
            this.nextButton.removeClassName(c);
            this.fire("nextButton:enabled")
        }
        if (!this.nextButton.hasClassName(c) && a == b && !this.hasMore) {
            this.nextButton.addClassName(c);
            this.fire("nextButton:disabled")
        }
    }
});