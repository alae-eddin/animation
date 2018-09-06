$('.message').click(function() {
    $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
});

/* SLIDE MENU JS */

 (function(jQuery) {
	jQuery.fn.clickoutside = function(callback) {
		var outside = 1, self = $(this);
		self.cb = callback;
		this.click(function() {
			outside = 0;
		});
		$(document).click(function() {
			outside && self.cb();
			outside = 1;
		});
        return $(this);
	}
})(jQuery);

$('#menu, .menu').clickoutside(function() {
	$('#menu').removeClass('toggled');
});


$('.menu').click(function() {
    $('#menu').toggleClass('toggled');
    $('body').toggleClass('toggled');
    $('#overlay').fadeIn(200);
});

$('.menu-close').click(function() {
    $('#menu').removeClass('toggled');
    $('body').removeClass('toggled');
    $('#overlay').fadeOut(200);
});

$('#menu, .menu').clickoutside(function() {
    $('#menu').removeClass('toggled');
    $('body').removeClass('toggled');
    $('#overlay').fadeOut(200);

});
