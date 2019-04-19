
var DialogFx = function(ele, opt) {
    this.$element = ele,
        this.defaults = {
            'id': 'somedialog',
            'dialogFx': '0'
        },
        this.options = $.extend({}, this.defaults, opt)
}
DialogFx.prototype = {
    Show: function() {
        $("#" + this.options.id).removeClass("dialog--close");
        $("#" + this.options.id).addClass("dialog--open");
    },
    Hidden: function() {
        $("#" + this.options.id).removeClass("dialog--open");
        $("#" + this.options.id).addClass("dialog--close");
    }
}

$.fn.DialogShow = function(options) {
    var dialogFx = new DialogFx(this, options);
    if(options.dialogFx == "0") {
        return dialogFx.Hidden();
    } else {
 
        return dialogFx.Show();
    }
}

