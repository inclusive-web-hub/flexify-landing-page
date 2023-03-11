;(function ($) {
  "use strict"
  function validate_form() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll(".needs-validation")
    // Loop over them and prevent submission
    Array.prototype.slice
      .call(forms)
      .forEach(function (
        /** @type {{ addEventListener: (arg0: string, arg1: (event: any) => void, arg2: boolean) => void; checkValidity: () => any; classList: { add: (arg0: string) => void; }; }} */ form
      ) {
        form.addEventListener(
          "submit",
          function (
            /** @type {{ preventDefault: () => void; stopPropagation: () => void; }} */ event
          ) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add("was-validated")
          },
          false
        )
      })
  }
  var move_selector = function () {
    $(window).on(
      "load scroll resize",
      function (/** @type {{ stopImmediatePropagation: () => void; }} */ e) {
        if (matchMedia("only screen and (max-width: 991px)").matches) {
          setTimeout(function () {
            var topMenu = $(".mainnav ul > li"),
              offset = 40,
              topMenuHeight = topMenu.outerHeight() + offset,
              // All list items
              menuItems = topMenu.find('a[href*="#"]'),
              // Anchors corresponding to menu items
              scrollItems = menuItems.map(function () {
                var href = $(this).attr("href"),
                  id = href.substring(href.indexOf("#")),
                  item = $(id)
                if (item.length) {
                  return item
                }
              })
            // Get container scroll position
            var fromTop = $(this).scrollTop() + topMenuHeight
            // Get id of current scroll item
            var cur = scrollItems.map(function () {
              if ($(this).offset().top < fromTop) return this
            })
            // Get the id of the current element
            cur = cur[cur.length - 1]
            var id = cur && cur.length ? cur[0].id : ""

            menuItems.parent().siblings().children().removeClass("active")
            if (id) {
              e.stopImmediatePropagation()
              menuItems
                .parent()
                .end()
                .filter("[href*='#" + id + "']")
                .addClass("active")
                .next("ul")
                .slideToggle(300)
            }
          }, 100)
        } else {
          setTimeout(function () {
            var topMenu = $(".mainnav ul > li"),
              offset = 40,
              topMenuHeight = topMenu.outerHeight() + offset,
              // All list items
              menuItems = topMenu.find('a[href*="#"]'),
              // Anchors corresponding to menu items
              scrollItems = menuItems.map(function () {
                var href = $(this).attr("href"),
                  id = href.substring(href.indexOf("#")),
                  item = $(id)
                if (item.length) {
                  return item
                }
              })
            // Get container scroll position
            var fromTop = $(this).scrollTop() + topMenuHeight
            // Get id of current scroll item
            var cur = scrollItems.map(function () {
              if ($(this).offset().top < fromTop) return this
            })

            // Get the id of the current element
            cur = cur[cur.length - 1]
            var id = cur && cur.length ? cur[0].id : ""

            menuItems.parent().siblings().children().removeClass("active")
            if (id) {
              e.stopImmediatePropagation()
              menuItems
                .parent()
                .end()
                .filter("[href*='#" + id + "']")
                .addClass("active")
                .next("ul")
                .slideToggle(300)
            }
          }, 100)
        }
      }
    )
  }
  var before_after_effect = function () {
    $(".twentytwenty-container").twentytwenty({
      default_offset_pct: 0.25, // How much of the before image is visible when the page loads
      orientation: "horizontal", // Orientation of the before and after images ('horizontal' or 'vertical')t a custom after label
      no_overlay: true, //Do not show the overlay with before and after
      move_slider_on_hover: true, // Move slider on mouse hover?
      move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
      click_to_move: false, // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
    })
  }
  var tilt_effect = function () {
    $(".tilt-effect").tilt({
      maxTilt: 10,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      speed: 500,
      transition: true,
    })
  }
  var header_sticky = function () {
    if ($("div").hasClass("counter-scroll")) {
      $(window).on("load scroll resize", function (/** @type {any} */ e) {
        var header = $("#header")
        if ($(window).scrollTop() > 0) {
          header.addClass("header-shadow")
        } else if ($(window).scrollTop() == 0) {
          header.removeClass("header-shadow")
        }
      })
    }
  }
  var responsiveMenu = function () {
    var menuType = "desktop"

    $(window).on("load resize", function () {
      var currMenuType = "desktop"

      if (matchMedia("only screen and (max-width: 991px)").matches) {
        currMenuType = "mobile"
      }

      if (currMenuType !== menuType) {
        menuType = currMenuType

        if (currMenuType === "mobile") {
          var $mobileMenu = $("#mainnav").attr("id", "mainnav-mobi")
          var hasChildMenu = $("#mainnav-mobi").find("li:has(ul)")

          $("#header").after($mobileMenu)
          hasChildMenu.children("ul").hide()
          if (hasChildMenu.find(">span").length == 0) {
            hasChildMenu
              .children("a")
              .after(
                '<span class="btn-submenu"><i class="fa fa-angle-down" aria-hidden="true"></i></span>'
              )
          }
          $(".btn-menu").removeClass("active")
        } else {
          var $desktopMenu = $("#mainnav-mobi")
            .attr("id", "mainnav")
            .removeAttr("style")
          $desktopMenu.find(".sub-menu").removeAttr("style")
          $("#header").find(".nav-wrap").append($desktopMenu)

          $("#mobile-menu-overlay, #mainnav-mobi, #mainnav").removeClass(
            "active"
          )
          $(".btn-submenu").remove()
          $(".logo-mobi").remove()
        }
      }
    })

    $(".btn-menu").on("click", function () {
      var header = $("#header")
      var offset = 0
      if (typeof header.data("offset") != "undefined") {
        offset = header.data("offset")
      }

      $(this).toggleClass("active")
      $(this)
        .closest(".header")
        .siblings(".mainnav, #mobile-menu-overlay")
        .toggleClass("active")
    })

    $(document).on(
      "click",
      "#mainnav-mobi li .btn-submenu",
      function (/** @type {{ stopImmediatePropagation: () => void; }} */ e) {
        $(this).toggleClass("active").next("ul").slideToggle(300)
        e.stopImmediatePropagation()
      }
    )

    $(document).on("click", "#mobile-menu-overlay", function () {
      $(this).toggleClass("active")
      $(this).siblings(".mainnav").toggleClass("active")
    })

    $(document).on("click", "#mainnav-mobi li a", function () {
      if ($(this).hasClass("click-model")) {
        $("#mobile-menu-overlay, #mainnav-mobi, #mainnav").toggleClass("active")
      }
    })

    $(document).on(
      "click",
      ".scroll-down li a",
      function (/** @type {{ stopImmediatePropagation: () => void; }} */ e) {
        $(this).toggleClass("active").next("ul").slideToggle(300)
        e.stopImmediatePropagation()
      }
    )

    $(document).on("click", ".scroll-down li a", function () {
      if ($(this).hasClass("click-model")) {
        $(".mouse-wrapper").toggleClass("active")
      }
    })
  }

  var goTop = function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $("#scroll-top").addClass("show")
      } else {
        $("#scroll-top").removeClass("show")
      }
    })

    $("#scroll-top").on("click", function () {
      $("html, body").animate({ scrollTop: 0 }, 1000, "easeInOutExpo")
      return false
    })
  }

  var onepage_nav = function () {
    $(".mainnav > ul > li > a").on(
      "click",
      function (/** @type {{ preventDefault: () => void; }} */ e) {
        var anchor = $(this).attr("href").split("#")[1]
        var headerHeight = 0
        headerHeight = $(".header").height()
        if (anchor) {
          if ($("#" + anchor).length > 0) {
            if ($(".header-shadow").length > 0) {
              headerHeight = headerHeight
            } else {
              headerHeight = 0
            }
            var target = $("#" + anchor).offset().top - headerHeight
            $("html,body").animate({ scrollTop: target }, 1000, "easeInOutExpo")
          }
        }

        e.preventDefault()
      }
    )

    $(".scroll-down > ul > li > a").on(
      "click",
      function (/** @type {{ preventDefault: () => void; }} */ e) {
        var anchor = $(this).attr("href").split("#")[1]
        var headerHeight = 0
        headerHeight = $(".header").height()
        if (anchor) {
          if ($("#" + anchor).length > 0) {
            if ($(".header-shadow").length > 0) {
              headerHeight = headerHeight
            } else {
              headerHeight = 0
            }
            var target = $("#" + anchor).offset().top - headerHeight
            $("html,body").animate({ scrollTop: target }, 1000, "easeInOutExpo")
          }
        }

        e.preventDefault()
      }
    )

    $(".mainnav ul > li > a").on("click", function () {
      $(this)
        .addClass("active")
        .parent()
        .siblings()
        .children()
        .removeClass("active")
    })
  }
  // Dom Ready
  $(function () {
    move_selector()
    validate_form()
    header_sticky()
    responsiveMenu()
    goTop()
    onepage_nav()
    tilt_effect()
    before_after_effect()
  })
})(jQuery)
