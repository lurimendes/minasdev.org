function navBarPosition(){$(window).scrollTop()<170?$("header").addClass("on-top"):$("header").removeClass("on-top")}function scrollToElement(a,b){$("html, body").animate({scrollTop:$(a).offset().top-b},1200,"easeInOutCubic")}function validateEmail(a){var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return b.test(a)}$(function(){navBarPosition(),$("header").addClass("show"),$(document).on("scroll",function(){navBarPosition()}),$(".nav-link").on("click",function(a){a.preventDefault();var b=$(this);scrollToElement(b.attr("data-anchor"),b.attr("data-offset"))}),$(".newsletter-form").on("submit",function(){var a=$("#email");return""!==a.val()&&validateEmail(a.val())?void 0:(a.addClass("animate-error"),setTimeout(function(){a.removeClass("animate-error")},300),!1)})});