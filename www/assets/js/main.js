
jQuery(document).ready(function(){

    $('.icon-menu').click(function(){
        $('.navSp').toggleClass('active');
        $('.navSp').stop().slideToggle();
        $(this).toggleClass('is-active');
    });

    $('.navigation .hasChild').click(function(e) {
      // e.preventDefault();
      $(this).next('.childNavBox').stop().slideToggle();
      $(this).toggleClass('nav-change');
    });

    $('.navSp .linkSp').click(function(e)
    {
     // e.preventDefault();
     $(this).next('ul.subMenu').stop().slideToggle();
     $(this).toggleClass('nav-change');
    });


    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
        ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top + (-120)
            }, 1000, function() {
            // Callback after animation
            });
        }
        }
    });

    var topBtn = $('.pageTop');
    topBtn.hide();
    $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
        topBtn.fadeIn();
      } else {
        topBtn.fadeOut();
      }
    });
    topBtn.click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 500);
      return false;
    });

    
    if (window.matchMedia("(min-width: 1025px)").matches) {
			function init() {
				// スクロールして何ピクセルでアニメーションさせるか
				var px_change = 120;

				// スクロールのイベントハンドラを登録
				window.addEventListener('scroll', function (e) {
					// 変化するポイントまでスクロールしたらクラスを追加
					if ($(window).scrollTop() > px_change) {
						$("#header").addClass("scroll");
						// 変化するポイント以前であればクラスを削除
					} else if ($(".header").hasClass("fixed")) {
						$("#header").removeClass("scroll");
					}
				});
			}
			window.onload = init();
    }


    $(window).load(function() {
			$(window).scroll(function () {
			scrollHeight = $(document).height();
			scrollPosition = $(window).height() + $(window).scrollTop();
			footHeight = $("#mainContent .btnBox").innerHeight();

			if ( scrollHeight - (400) - scrollPosition <= footHeight ) {
				$(".fixedBtn").css({"position":"absolute", "bottom": "0", "left":"0"});
			} else {
				$(".fixedBtn").css({"position":"fixed", "bottom": "15px", "left":"calc(50% - 198px)"});
			}

			});
		});
    



});



