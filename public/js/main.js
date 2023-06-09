/* eslint-disable no-unused-expressions */
// eslint-disable-next-line no-unused-expressions
! function(e) {
    "use strict";
    var t = e(window);
    t.on("load", function() {
        var o = e(document),
            a = e("html, body"),
            n = e("body"),
            s = e("#preloader"),
            l = e(".toggle-password"),
            i = e(".user-text-editor"),
            r = e(".js-tilt"),
            c = e(".gallery-carousel"),
            d = e(".recruiting-carousel"),
            p = e(".testimonial-carousel"),
            v = e("#phone"),
            h = e(".cv-input"),
            g = e(".select-container"),
            u = e(".limit-select"),
            f = e(".input-tags"),
            m = e(".lazy"),
            w = e(".case-card"),
            y = e(".qtyBtn"),
            b = e('[data-fancybox="company-detail-gallery"]'),
            x = e("#back-to-top");
        s.delay("500").fadeOut(2e3), e(".search-menu-toggle").on("click", function() {
            e(".mobile-search-form, .body-overlay").addClass("active"), n.css({
                overflow: "hidden"
            })
        }), e(".search-bar-close, .body-overlay").on("click", function() {
            e(".mobile-search-form, .body-overlay").removeClass("active"), n.css({
                overflow: "inherit"
            })
        }), e(".off-canvas-menu-toggle").on("click", function() {
            e(".off-canvas-menu, .body-overlay").addClass("active"), n.css({
                overflow: "hidden"
            })
        }), e(".off-canvas-menu-close, .body-overlay").on("click", function() {
            e(".off-canvas-menu, .body-overlay").removeClass("active"), n.css({
                overflow: "inherit"
            })
        }), e(".user-off-canvas-menu-toggle").on("click", function() {
            e(".user-off-canvas-menu, .body-overlay").addClass("active"), n.css({
                overflow: "hidden"
            })
        }), e(".user-off-canvas-menu-close, .body-overlay").on("click", function() {
            e(".user-off-canvas-menu, .body-overlay").removeClass("active"), n.css({
                overflow: "inherit"
            })
        }), e(".off-canvas-menu-list .sub-menu").parent("li").children("a").append(function() {
            return '<button class="sub-nav-toggler" type="button"><i class="la la-angle-down"></i></button>'
        }), e(".sub-nav-toggler").on("click", function() {
            var t = e(this);
            return t.toggleClass("active"), t.parent().parent().toggleClass("active"), t.parent().parent().siblings().removeClass("active"), t.parent().parent().siblings().children("a").find(".sub-nav-toggler").removeClass("active"), t.parent().parent().children(".sub-menu").slideToggle(), t.parent().parent().siblings().children(".sub-menu").slideUp(), !1
        }), t.on("scroll", function() {
            e(this).scrollTop() > 5 ? (e(".header-area").addClass("fixed-top"), n.css("margin-top", e(".header-area").outerHeight() + "px")) : (e(".header-area").removeClass("fixed-top"), n.css("margin-top", "0")), e(this).scrollTop() >= 300 ? x.show(200) : x.hide(200),
                function() {
                    var t = e(window).scrollTop();
                    if (t >= 100) {
                        var o = e(".page-scroll");
                        o.each(function() {
                            var o = e(this).attr("href");
                            e(o).each(function() {
                                if (e(this).offset().top <= t + 100) {
                                    var a = e(o).attr("id");
                                    // eslint-disable-next-line no-unused-expressions
                                    e(".js-scroll-nav li").removeClass("active"), e(".js-scroll-nav").find("a[href*=\\#" + a + "]").parent().addClass("active")
                                }
                            })
                        })
                    }
                }()
        }), o.on("click", "#back-to-top", function() {
            a.animate({
                scrollTop: 0
            }, 1e3)
        }), e(".page-scroll").on("click", function(t) {
            t.preventDefault();
            var o = e(this.hash);
            a.animate({
                scrollTop: o.offset().top - 20
            }, 600)
        }), e('[data-toggle="tooltip"]').tooltip(), e(".popover-trigger").popover({
            html: !0,
            sanitize: !1,
            content: function() {
                return e(".generic-popover").html()
            }
        }), n.on("click", function(t) {
            e('[data-toggle="popover"]').each(function() {
                e(this).is(t.target) || 0 !== e(this).has(t.target).length || 0 !== e(".popover").has(t.target).length || e(this).popover("hide")
            })
        });
        const C = document.querySelector(".toggle-input"),
            k = document.querySelectorAll(".price-month"),
            L = document.querySelectorAll(".price-year");
        C && C.addEventListener("change", () => {
            C.checked ? (L.forEach(e => e.classList.remove("d-none")), k.forEach(e => e.classList.add("d-none"))) : (L.forEach(e => e.classList.add("d-none")), k.forEach(e => e.classList.remove("d-none")))
        }), l.on("click", function() {
            var t = e(".password-field");
            e(this).toggleClass("active"), "password" === t.attr("type") ? t.attr("type", "text") : t.attr("type", "password")
        }), i.length && i.jqte({
            formats: [
                ["p", "Paragraph"],
                ["h1", "Heading 1"],
                ["h2", "Heading 2"],
                ["h3", "Heading 3"],
                ["h4", "Heading 4"],
                ["h5", "Heading 5"],
                ["h6", "Heading 6"],
                ["pre", "Preformatted"]
            ]
        }), o.on("click", ".login-btn", function() {
            e(".login-form").modal("show"), e(".signup-form, .message-form").modal("hide"), n.addClass("modal--open")
        }), o.on("click", ".signup-btn", function() {
            e(".login-form, .recover-form").modal("hide"), e(".signup-form").modal("show"), n.addClass("modal--open")
        }), o.on("click", ".lost-pass-btn", function() {
            e(".login-form").modal("hide"), e(".recover-form").modal("show"), n.addClass("modal--open")
        }), o.on("click", function(t) {
            !1 == !e(t.target).is(".login-form, .signup-form, .recover-form") && n.removeClass("modal--open")
        }), o.on("click", ".close", function() {
            n.removeClass("modal--open")
        });
        var z = e(".anim-bar");
        o.on("click", ".generic-tabs .nav-link", function() {
            var t = e(this).parent().position(),
                o = e(this).parent().width();
            z.css({
                left: +t.left,
                width: o
            })
        });
        var T = e(".generic-tabs").find(".active").parent("li").width(),
            M = e(".generic-tabs .active").position();
        z.length && z.css({
            left: +M.left,
            width: T
        }), o.on("click", "#delete-terms", function() {
            var t = e("#delete-button");
            e(this).is(":checked") ? t.removeAttr("disabled") : t.attr("disabled", !0)
        }), o.on("click", ".copy-btn", function(t) {
            t.preventDefault();
            var o = e(".copy-input"),
                a = e(".text-success-message");
            o.select(), document.execCommand("copy"), o.blur(), a.addClass("active"), setTimeout(function() {
                a.removeClass("active")
            }, 2e3)
        }), r.length && r.tilt({
            maxTilt: 3,
            scale: 1.02
        }), c.length && c.owlCarousel({
            items: 3,
            loop: !0,
            margin: 15,
            smartSpeed: 800,
            dots: !1,
            nav: !0,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                }
            }
        }), d.length && d.owlCarousel({
            items: 3,
            loop: !1,
            margin: 15,
            smartSpeed: 800,
            dots: !1,
            nav: !0,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                }
            }
        }), p.length && p.owlCarousel({
            items: 1,
            loop: !0,
            margin: 15,
            smartSpeed: 800,
            dots: !1,
            nav: !0,
            navText: ['<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>', '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>']
        }), v.length && v.intlTelInput({
            separateDialCode: !0,
            utilsScript: "js/utils.js"
        }), h.length && h.MultiFile({
            max: 1,
            accept: "pdf, doc, docx, rtf, html, odf, zip"
        }), g.length && g.selectize(), u.length && u.selectize({
            plugins: ["remove_button"],
            maxItems: 5
        }), f.length && f.selectize({
            persist: !1,
            createOnBlur: !0,
            create: !0,
            maxItems: 5,
            plugins: ["remove_button"]
        }), m.length && m.Lazy(), w.on("click", function() {
            e(this).addClass("case-card-is-active"), e(this).siblings().removeClass("case-card-is-active")
        });
        var H, S = document.querySelector("#send-message-btn"),
            q = e(".contact-form"),
            j = e(".contact-success-message");

        function B(e) {
            S.innerHTML = "Send Message", j.fadeIn().removeClass("alert-danger").addClass("alert-success"), j.text(e), setTimeout(function() {
                j.fadeOut()
            }, 3e3), q.find('input:not([type="submit"]), textarea').val("")
        }

        function I(e) {
            S.innerHTML = "Send Message", j.fadeIn().removeClass("alert-success").addClass("alert-danger"), j.text(e.responseText), setTimeout(function() {
                j.fadeOut()
            }, 3e3)
        }
        q.submit(function(t) {
            t.preventDefault(), H = e(this).serialize(), S.innerHTML = "Sending...", setTimeout(function() {
                e.ajax({
                    type: "POST",
                    url: q.attr("action"),
                    data: H
                }).done(B).fail(I)
            }, 2e3)
        }), y.length && y.on("click", function() {
            var t = e(this),
                o = t.parent().find(".qtyInput").val();
            if (t.hasClass("qtyInc")) var a = parseFloat(o) + 1;
            else a = o > 0 ? parseFloat(o) - 1 : 0;
            t.parent().find(".qtyInput").val(a)
        });
        for (var E = document.querySelectorAll(".payment-tab-toggle > input"), V = 0; V < E.length; V++) E[V].addEventListener("change", A);

        function A(e) {
            for (var t = document.querySelectorAll(".payment-tab"), o = 0; o < t.length; o++) t[o].classList.remove("is-active");
            e.target.parentNode.parentNode.classList.add("is-active")
        }
        e(".dropdown-menu.keep-open").on("click", function(e) {
            e.stopPropagation()
        }), b.length && b.fancybox();  
    })
// eslint-disable-next-line no-undef
}(jQuery);

// $(document).ready(function(){
//     $(".newest-post").owlCarousel();
//   });