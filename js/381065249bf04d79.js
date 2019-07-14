
        !function(t,i){t.fn.fixSide=function(e,n){function o(){u||(u=setTimeout(function(){var o=h.offset().left+(r.clientWidth-a.clientWidth),s=r.getBoundingClientRect().top,c=document.body.clientHeight,p=l.parent().height(),b=t(i).height(),g=window.scrollY,w=c-(g+b)<=e;d=a.clientHeight,f=d+n>=b,d>=p||g<=b?l.css({position:"static"}):f||w?s<0&&Math.abs(s)+b-e>d?l.css({position:"fixed",left:o+"px",right:"auto",bottom:e+"px",top:"auto"}):Math.abs(s)+b-e<d&&l.css({position:"static"}):s<0&&l.css({position:"fixed",left:o+"px",right:"auto",top:n+"px",bottom:"auto"}),clearTimeout(u),u=null},20))}var s=/ipod|iphone|ipad|android|blackberry|mobile|webos|windows phone/i.test(navigator.userAgent),c="",l="",a="",d="",r="",h="",f="",u=null;t.browser.ie&&t.browser.version|!0||s||(c=t(i).height(),l=t("#content .aside"),a=l[0],d=a.clientHeight,r=t("#content")[0],h=t("#content .article"),f=d+n>c,i.addEventListener("load",function(){d=a.clientHeight,r=t("#content")[0],f=d+n>=c}),t(i).bind("scroll",o),t(i).bind("resize",function(t){var i=h.offset().left+(r.clientWidth-a.clientWidth);l.css({left:i+"px"})}))}}(jQuery,window);;
        $().fixSide(300, 52);
    ;
$(function(){
    var $actor_list = $('#info .actor a');
    var $actor_attr = $('#info .actor .attrs');

    if ($actor_list.length > 5) {
        $actor_attr.empty();

        $actor_list.each(function(idx){
            if (idx+1 === $actor_list.length) {
                $('<span></span>').prepend($(this)).appendTo($actor_attr);
            } else {
                $('<span> / </span>').prepend($(this)).appendTo($actor_attr);
            }
        });

        $('<a href="javascript:;" class="more-actor" title="更多主演">更多...</a>').on('click', function(){
            $actor_attr.find('span').show();
            $(this).hide();
        }).appendTo($actor_attr);

        $actor_attr.find('span').eq(4).nextAll('span').hide();
    }
})
;
            $(function(){function e(){var e=document.createElement("iframe");$iframe=$(e),$iframe.css({position:"absolute",top:-1e4,left:-1e4}),$iframe.attr("src","../"+subject_id+"/output_card"),$iframe.appendTo($("body")),a.push($iframe)}function t(){for(u.text("引用");a.length>0;){var e=a.pop();e.remove()}}var a=[],o=navigator.userAgent,i=o.indexOf("Chrome")>-1,r=(o.indexOf("MSIE")>-1,o.indexOf("Firefox")>-1),n=o.indexOf("Safari")>-1;i&&n&&(n=!1);var f=$(".output-btn-wrap"),u=$(".download-output-image");i||r?f.css({display:""}):f.remove(),u.click(function(t){t.preventDefault(),u.text("正在生成..."),e()}),window.__output_card={download_image:e,close_iframes:t}});
          ;
                var if_logined='false';
var subject_id='24860289';
Do.ready("handlebarsjs",function(){var e=$("#comment-tmpl").html(),n=Handlebars.compile(e),t=Handlebars.compile('&gt; <a href="comments@sort=time">更多短评{{num}}条</a>');if_logined="true"===if_logined,Handlebars.registerHelper("content_tmpl",function(e){var n="";return n=e.length>200?['<span class="short">'+e.substring(0,200)+"...</span>",'<span class="hide-item full">'+e+"</span>",'<span class="expand">(<a href="javascript:;">展开</a>)</span>'].join(""):"<span>"+e+"</span>",new Handlebars.SafeString(n)});var a=$("#comments-section");a.delegate(".tab-hd a","click",function(e){e.preventDefault();var n=$(this);return a.find(".tab-hd a").removeClass("on").end().find(".tab").hide().end().find("#"+n.data("id")+"-comments").show(),n.addClass("on"),$.get("../../blank@track-"+n.attr("id")),!1}).delegate("#new-comments-tab","click",function(e){$(this).data("clicked")||($(this).data("clicked",!0),$.get("../../j/subject/"+subject_id+"/comments",function(e){if(1===e.retcode){var a=(e.result,n({comments:e.result.normal,if_logined:if_logined}));$("#new-comments #normal").html(a),e.result.spammed.length>0&&($("#new-comments .fold-bd").append(n({comments:e.result.spammed,if_logined:if_logined})),$("#new-comments .fold-hd").removeClass("hide")),e.result.total_num>4&&$("#new-comments #total-num").html(t({num:e.result.total_num})),load_event_monitor($("#new-comments"))}}))})});
                $(function(){$("body").delegate(".btn-unfold","click",function(e){e.preventDefault();var t=$(e.target),d=t.parent(".fold-hd");d.slideUp().next().slideDown()}),$("body").delegate(".comment-item .expand a","click",function(e){e.preventDefault();var t=$(e.target),d=t.parents("p");$short=d.find(".short"),$hide=d.find(".hide-item"),t.hasClass("isfold")?(t.removeClass("isfold").text("展开"),$short.show(),$hide.hide()):(t.addClass("isfold").text("收起"),$short.hide(),$hide.show())})});
            ;
        if (!Do.ready) {
            !function(){var t,e,n=document,r=window,i=window.__external_files_loaded=window.__external_files_loaded||{},o=window.__external_files_loading=window.__external_files_loading||{},a=function(t){return t.constructor===Array},s={autoLoad:!0,coreLib:["../../../https@img3.doubanio.com/js/jquery.min.js"],mods:{}},c=n.getElementsByTagName("script"),d=c[c.length-1],u=[],l=!1,f=[],h=function(t,e,r,a,s){var d=c[0];if(t){if(i[t])return o[t]=!1,void(a&&a(t,s));if(o[t])return void setTimeout(function(){h(t,e,r,a,s)},1);o[t]=!0;var u,l=e||t.toLowerCase().split(/\./).pop().replace(/[\?#].*/,"");if("js"===l?(u=n.createElement("script"),u.setAttribute("type","text/javascript"),u.setAttribute("src",t),u.setAttribute("async",!0)):"css"===l&&(u=n.createElement("link"),u.setAttribute("type","text/css"),u.setAttribute("rel","stylesheet"),u.setAttribute("href",t),i[t]=!0),u){if(r&&(u.charset=r),"css"===l)return d.parentNode.insertBefore(u,d),void(a&&a(t,s));u.onload=u.onreadystatechange=function(){this.readyState&&"loaded"!==this.readyState&&"complete"!==this.readyState||(i[this.getAttribute("src")]=!0,a&&a(this.getAttribute("src"),s),u.onload=u.onreadystatechange=null)},d.parentNode.insertBefore(u,d)}}},p=function(t){if(t&&a(t)){for(var e,n=0,r=[],i=s.mods,o=[],c={},d=function(t){var e,n,r=0;if(c[t])return o;if(c[t]=!0,i[t].requires){for(n=i[t].requires;"undefined"!=typeof(e=n[r++]);)i[e]?(d(e),o.push(e)):o.push(e);return o}return o};"undefined"!=typeof(e=t[n++]);)i[e]&&i[e].requires&&i[e].requires[0]&&(o=[],c={},r=r.concat(d(e))),r.push(e);return r}},y=function(){l=!0,u.length>0&&(e.apply(this,u),u=[])},m=function(){n.addEventListener?n.removeEventListener("DOMContentLoaded",m,!1):n.attachEvent&&n.detachEvent("onreadystatechange",m),y()},v=function(){if(!l){try{n.documentElement.doScroll("left")}catch(t){return r.setTimeout(v,1)}y()}},g=function(){if("complete"===n.readyState)return r.setTimeout(y,1);var t=!1;if(n.addEventListener)n.addEventListener("DOMContentLoaded",m,!1),r.addEventListener("load",y,!1);else if(n.attachEvent){n.attachEvent("onreadystatechange",m),r.attachEvent("onload",y);try{t=null===r.frameElement}catch(t){}document.documentElement.doScroll&&t&&v()}},E=function(t){t&&a(t)&&(this.queue=t,this.current=null)};E.prototype={_interval:10,start:function(){return this.current=this.next(),this.current?void this.run():void(this.end=!0)},run:function(){var t,e=this,n=this.current;return"function"==typeof n?(n(),void this.start()):void("string"==typeof n&&(s.mods[n]?(t=s.mods[n],h(t.path,t.type,t.charset,function(t){e.start()},e)):/\.js|\.css/i.test(n)?h(n,"","",function(t,e){e.start()},e):this.start()))},next:function(){return this.queue.shift()}},t=d.getAttribute("data-cfg-autoload"),"string"==typeof t&&(s.autoLoad="true"===t.toLowerCase()),t=d.getAttribute("data-cfg-corelib"),"string"==typeof t&&(s.coreLib=t.split(",")),e=function(){var t,e=[].slice.call(arguments);f.length>0&&(e=f.concat(e)),s.autoLoad&&(e=s.coreLib.concat(e)),t=new E(p(e)),t.start()},e.add=function(t,e){t&&e&&e.path&&(s.mods[t]=e)},e.delay=function(){var t=[].slice.call(arguments),n=t.shift();r.setTimeout(function(){e.apply(this,t)},n)},e.global=function(){var t=[].slice.call(arguments);f=f.concat(t)},e.ready=function(){var t=[].slice.call(arguments);return l?e.apply(this,t):void(u=u.concat(t))},e.css=function(t){var e=n.getElementById("do-inline-css");e||(e=n.createElement("style"),e.type="text/css",e.id="do-inline-css",n.getElementsByTagName("head")[0].appendChild(e)),e.styleSheet?e.styleSheet.cssText=e.styleSheet.cssText+t:e.appendChild(n.createTextNode(t))},s.autoLoad&&e(s.coreLib),e.define=e.add,e._config=s,e._mods=s.mods,this.Do=e,g()}();

        }
        Do.ready(
            '../../../https@img3.doubanio.com/f/movie/b2a06a0332fc1526f4caaf8c76c2717d24da408d/js/movie/lib/jsrender.min.js',
            function(){
                $(document).on('click', '.cross span', function(e) {
                    var $this = $(this);
                    var $dialog = $this.parents('#tv-play-source');
                    $dialog.remove();
                });
                $('body').bind('click', function(e) {
                    var $this = $(e.target),
                        $source = $('.play-source');
                    if (!$this.is('.playBtn') && !$this.parents('.play-source').length) {
                        $source.remove();
                    }
                });
                var sources = {};
                sources[1] = [
                            {play_link: "../../../www.douban.com/link2/@url=http_253A_252F_252Fv.qq.com_252Fx_252Fcover_252Fl6uoshirvkk7xfl.html%3Fptag%3Ddouban.movie&subtype=1&type=online-video", ep: "1"},
                ];
                $('.playBtn').click(function(e){
                    $('.play-source').remove();

                    var height, width, tmpl, cn, source;
                    var $dialog = $('#tv-play-source');
                    var $this = $(this);
                    source = $this.data('source');
                    if(!source)return;
                    cn = $this.data('cn');

                    tmpl = $.templates('#episode-tmpl');
                    $dialog = $(tmpl.render({playlist: sources[source], cn: cn}));

                    $dialog.hide();
                    $('body').append($dialog);
                    width = $dialog.outerWidth();

                    $dialog.css({
                        marginLeft: -width / 2,
                        top: $this.offset().top + $this.outerHeight()
                    }).show();
                });
            });
    ;
        ;/*
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);

        Douban&&Douban.init_vote_comment&&(Douban.init_vote_comment=function(o){var t=$(o).prev().prev(),n=$(o).prev().val();$(o).click(function(){$.postJSON_withck("../../j/comment/vote",{id:n},function(o){0===o.r&&o.count?t.text(o.count):1===o.r&&alert(o.msg)})})}),$(".a_vote_comment").hover(function(){$(".pop").hide(),$(this).next(".pop").show()},function(){$(".pop").hide()});
        $(function(){
            var UA = navigator.userAgent.toLowerCase();
            isSafari = /safari/.test(UA)
            $("#season").live('change', function(){
                var subjectId = $(this).val();
                if (subjectId.length){
                    window.location = "../" + subjectId + "/";
                    // fix null state bug in Safari
                    if (isSafari) {
                        window.history.pushState &&
                          window.history.pushState(null, document.title, window.location.href)
                    }
                }
            });
            $("#season").val("24860289")

            $(window).hashchange();
            if(window.location.href.indexOf('suggest')>0 && window.location.href.indexOf("?")>0){
                if(window.history.pushState){
                    window.history.pushState(null, document.title, window.location.href.substring(0,window.location.href.indexOf("?")));
                }
            }

            $('.indent .a_show_full').click(function(){
                $.get('../../blank@expand');
            });

            $('body').on('click', 'a.write_review', function(e) {
                e.preventDefault();
                if(window._USER_ABNORMAL) {
                    show_abnormal && show_abnormal()
                }else {
                    location.href = $(this).attr('href')
                }
            })
        });
    