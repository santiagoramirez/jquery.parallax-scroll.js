/*!
 * parallaxScroll v0.0.0
 * Santiago Ramirez
 */
jQuery.fn.parallaxScroll = function(options) {

    var defaults = {
        startPos : 0,
        endPos : 0,
        moveX : 0,
        moveY : 0,
        offsetX : 0,
        offsetY : 0,
        selector : "",
    };

    var element = this;

    var init = function() {

        jQuery(element).data('parallaxScroll', this);

        for (option in defaults) {
            if (typeof options[option] === 'undefined') {
                options[option] = defaults[option];
            }
        }

        jQuery(options.selector).css("left", "");

        reactX(jQuery(this));
        reactY(jQuery(this));

        jQuery(this).scroll(function() {
            reactX(jQuery(this));
            reactY(jQuery(this));
        });
    }.bind(this)

    var reactX = function(_this) {
        var scrollPos = _this.scrollLeft();
        if (scrollPos >= options.startPos && scrollPos <= options.endPos) {
            var length =  (options.endPos - options.startPos);
            var progress = (scrollPos - options.startPos) / length;
            var pos = Math.round(progress * (options.moveX * 100));
            jQuery(options.selector).css("left", (pos + options.offsetX) + "px");
        }
    }

    var reactY = function(_this) {
        var scrollPos = _this.scrollTop();
        if (scrollPos >= options.startPos && scrollPos <= options.endPos) {
            var length =  (options.endPos - options.startPos);
            var progress = (scrollPos - options.startPos) / length;
            var pos = Math.round(progress * (options.moveY * 100));
            jQuery(options.selector).css("top", (pos + options.offsetY) + "px");
        }
    }

    element.reload = function(options) {
        init();
    }

    init();

    return this;
}
