$(document).ready(function() {
    $(".show-menu").click(function() {
        $(".main-menu").toggleClass("menu-open"), $(".white-screen").toggleClass("display")
    }), $("html").click(function() {
        $(".main-menu").removeClass("menu-open"), $(".tcon").removeClass("tcon-transform"), $(".white-screen").removeClass("display")
    }), $(".main-menu").click(function(n) {
        n.stopPropagation()
    }), $(".show-menu").click(function(n) {
        n.stopPropagation()
    })
})

$(document).ready(function() {
    $(".parallax").scrolly({
        bgParallax: !0
    })
})

(new WOW).init(), $(window).load(function() {
    var n = 0,
        o = 0,
        e = [1, 2, 3, 4, 5],
        a = $(".intro-bg");
    setInterval(function() {
        o = Math.floor(10 * Math.random()) % e.length, n = o === n ? o - 1 : o, a.fadeOut(500, function() {
            a.css("background-image", "url(../img/portafolio00" + e[n] + ".jpg)"), a.fadeIn(500)
        }), n == e.length && (n = 0)
    }, 3500)
});