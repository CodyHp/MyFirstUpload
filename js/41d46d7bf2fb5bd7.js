
(function() {
  window.Do=window.Do||function(e){"function"==typeof e&&setTimeout(e,0)},Do.add_js=function(e){var a=document.createElement("script");a.src=e,document.getElementsByTagName("head")[0].appendChild(a)},Do.add_css=function(e,a){var t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},Do.check_js=function e(a,t){var n=a();n?t(n):setTimeout(function(){e(a,t)},33)},Do(function(){function e(a){Do.ISay?Do.ISay.init(a):setTimeout(function(){e(a)},80),$.fn.tagsug||i(tagsug_src)}function a(t){var n=t.target,o=t.type,i=$(n);if("A"==n.tagName){var r=!i.data("action");if(""==n.href.split("http")[0]&&r)return;if(t.preventDefault(),window._USER_ABNORMAL)return void(window.show_abnormal&&window.show_abnormal());if(r)return}return Do.ISay||s.text("正在初始化..."),a=null,"INPUT"==n.tagName||"dragenter"===o?window._USER_ABNORMAL?void(window.show_abnormal&&window.show_abnormal()):void setTimeout(function(){e(n,o)},100):(c.focus(),e(n),void t.stopPropagation())}function t(e){a&&a(e)}function n(e){e=void 0===e?!w.data("opened"):e,w.toggle(e).data("opened",e)}function o(e){if(window._USER_ABNORMAL)return void(window.show_abnormal&&window.show_abnormal());var a=$(e.target),t=(a.attr("href"),a.data("action")),o=a.parents("li"),i=o.hasClass("active");if("commodity"===t)return n(),void e.stopImmediatePropagation();if(n(!1),i&&Do.ISay){switch(t){case"main":c.focus();break;case"share":$("#isay-inp-url").focus()}return void e.stopImmediatePropagation()}t&&!i&&(v.removeClass("active"),o.addClass("active"),v=o)}var i=Do.add_js;i(isay_src);var s=$("#isay-label"),c=$("#isay-cont"),r=$("#db-isay");if(setTimeout(function(){c.val()&&s.hide()},50),$("#isay-upload-inp").one("change",t),c.one("focus dragenter",t),r.one("click",t),location.search){for(var d,l=location.search.substring(1).split("&"),u=0;u<l.length;u++){var f=l[u].split("=");"topic"===f[0]&&(d=decodeURIComponent(f[1]))}if(d){c.val("#"+d+"# ");var m=c[0];m.setSelectionRange?(m.focus(),m.setSelectionRange(m.value.length,m.value.length)):(range=m.createTextRange(),range.collapse(!1),range.select())}}var g=$("#isay-act-field"),p=(g.siblings(".item"),$("#isay-submit"),r.find(".btn-group"),r.find(".isay-links")),v=p.find(".active"),w=p.find(".commodity-link .publish-ways");n(!1),$(document).click(function(e){var a=e.target;w.data("opened")&&(a===w[0]||$.contains(w[0],a)||n(!1))}),p.click(function(e){"A"!==e.target.nodeName&&e.stopImmediatePropagation()}),p.find("a").click(o),g.delegate("a","click",function(e){r.hasClass("share-mode")&&o(e)})});
})();
$('body').one('dragenter', function(){
  $('.ico-pic').click();
});
