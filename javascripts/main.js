$(function() {
    // smooth scrolling
    // http://css-tricks.com/snippets/jquery/smooth-scrolling
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    // open external links in new window
    // http://css-tricks.com/snippets/jquery/open-external-links-in-new-window
    $('a').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if (!a.test(this.href)) {
            $(this).click(function(event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, '_blank');
            });
        }
    });
});
