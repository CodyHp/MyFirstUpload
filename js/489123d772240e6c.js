
Do(function(){
  var nav = $('#db-nav-location');
  var inp=$("#inp-query"),label=inp.closest(".nav-search").find("label");inp[0]&&"placeholder"in inp[0]?(label.hide(),inp.attr("placeholder",label.text())):(""!==inp.val()&&label.hide(),inp.parent().click(function(){inp.focus(),label.hide()}).end().focusin(function(){label.hide()}).focusout(function(){""===$.trim(this.value)?label.show():label.hide()}).keydown(function(){label.hide()})),inp.parents("form").submit(function(){if(!$.trim(inp.val()).length)return!1}),nav.find(".lnk-more, .lnk-account").click(function(n){n.preventDefault();var i,e=$(this),t=e.hasClass("lnk-more")?$("#db-productions"):$("#db-usr-setting");t.data("init")||(i=e.offset(),t.css({"margin-left":i.left-$(window).width()/2-t.width()+e.width()+parseInt(e.css("padding-right"),10)+"px",left:"50%",top:i.top+e.height()+"px"}),t.data("init",1),t.hide(),$("body").click(function(n){var i=$(n.target);i.hasClass("lnk-more")||i.hasClass("lnk-account")||i.closest("#db-usr-setting").length||i.closest("#db-productions").length||t.hide()})),"none"===t.css("display")?($(".dropdown").hide(),t.show()):$(".dropdown").hide()});
  function set_viewport(t){$("#meta-viewport").attr("content",t)}var b=$(document.body),list=$("#db-nav-location-list"),lnk=$("#db-nav-location .label");lnk.click(function(t){if(b.toggleClass("locs-shown"),b.hasClass("locs-shown")){var i=lnk.offset();list.css({display:"block",top:i.top+32}),list.css({left:Math.min($(window).width()-list.width()-30,i.left)})}else list.hide();return!1}),b.click(function(){b.removeClass("locs-shown"),list.hide()}),$("#inp-query").focus(function(){set_viewport("width=device-width, initial-scale=1.0, maximum-scale=1.0")}).blur(function(){set_viewport("width=device-width, initial-scale=1.0")});

});
;
    Do(function() {
      var dlg;
      $('body').delegate('.sync-cal', 'click', function(e) {
        e.preventDefault();
        if (dlg) {
          dlg.open();
        } else {
          Do('dialog', function() {
            dlg = dui.Dialog({
              cls: 'win-sync-tip',
              title: '添加活动到 Google 日历',
              width: 380,
              content: $('#html-sync-cal')
            }, true);
            dlg.open();
            dlg.node.delegate('a', 'click', function() {
              dlg.close();
            });
          });
        }
      });
    });
  ;
;Do(function(){
    $('#unfoldDescHook').click(function(e){
        e.preventDefault();
        $('#edesc_s').hide();
        $('#edesc_f').show();
    });
    $('#foldDescHook').click(function(e){
        e.preventDefault();
        $('#edesc_f').hide();
        $('#edesc_s').show();
    })
})
;
  window._pinicon_ = '../../../https@img3.doubanio.com/f/loc/4651279c1fd858d5d271b04beb920c70d8589a4d/pics/loc/pin.png';
  Do.add('amap', {path: '../../../https@img3.doubanio.com/f/loc/9a9abf2cf9c86a7addf9a24c16365519d2d1fc5e/js/loc/lib/amap.js', type: 'js', requires: ['jquery.ui', 'dialog']});
  Do.add('autonavi_map', {path: '../../../https@webapi.amap.com/maps@v=1.3&key=e6d700038f56c774cfbd879adeb4c883', type: 'js'});
  Do('autonavi_map'
      ,'amap'
      ,'../../../https@img3.doubanio.com/f/loc/f0efdfeff706bb195736bbeaa2d3bbd82fd24312/js/loc/event/mods/map.js'
  );
;
Do(function(){var t;$(".member_photo li").hover(function(){$this=$(this),t=setTimeout(function(){$this.find(".member-tip").fadeIn("fast"),clearTimeout(t)},200)},function(){t&&clearTimeout(t),$(this).find(".member-tip").fadeOut("fast")})});

;
    ;(window.DoubanAdSlots = window.DoubanAdSlots || []).push('dale_event_mobile_app_banner')
    window.DoubanAdLoaders = window.DoubanAdLoaders || {}
    window.DoubanAdLoaders['dale_event_mobile_app_banner'] = function(query, parameters) {
        // if is inside douban app, do not display it
        if (/douban/i.test(navigator.userAgent)) {
          return
        }

        // cannot call localStorage.setItem on iOS Safari (private mode)
        // so detect localStorage availability in a try catch
        var isLocalStorageSupported = (function() {
            try {
                var supported = 'localStorage' in window
                if (supported) {
                    localStorage.setItem("storage", "")
                    localStorage.removeItem("storage")
                }
                return supported
            }
            catch(err) { return false }
        })()

        if (!localStorage) { return }

        var q = query || {}
            , unit = q.unit || ''
            , param = parameters || {}
            , html = param.html || ''
            , slot = document.getElementById(unit)
            , key = unit + '_ad_closed_date'
            , closed = false

        if (localStorage.getItem(key) === (new Date).toLocaleDateString()) {
            closed = true
        }
        if (!html || closed) { return }

        if (!slot) { return }
        slot.innerHTML = html

        var ad = document.querySelector('.promotion-app-banner')
          , close = document.querySelector('.js-close-banner')
          , wechat_overlay = document.querySelector('.promotion-wechat-overlay')

        ad.classList.add('shown')
        close.addEventListener('click', function(e) {
            e.stopPropagation()
            isLocalStorageSupported && localStorage.setItem(key, (new Date).toLocaleDateString())
            ad.classList.remove('shown')
        }, false)
        ad.addEventListener('click', function() {
            // show layer for wechat
            if (/MicroMessenger/.test(navigator.userAgent)) {
                wechat_overlay.show()
            } else {
                var href = ad.querySelector('.btn').getAttribute('href');
                document.location.href = href
            }
        }, false)
        wechat_overlay.querySelector('.promotion-wechat-dialog').addEventListener('click', function(e) {
            e.stopPropagation()
        }, false);
        wechat_overlay.addEventListener('click', function() {
            wechat_overlay.hide()
        }, false);
    };
