
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
var subject_id='25958717';
Do.ready("handlebarsjs",function(){var e=$("#comment-tmpl").html(),n=Handlebars.compile(e),t=Handlebars.compile('&gt; <a href="comments@sort=time">更多短评{{num}}条</a>');if_logined="true"===if_logined,Handlebars.registerHelper("content_tmpl",function(e){var n="";return n=e.length>200?['<span class="short">'+e.substring(0,200)+"...</span>",'<span class="hide-item full">'+e+"</span>",'<span class="expand">(<a href="javascript:;">展开</a>)</span>'].join(""):"<span>"+e+"</span>",new Handlebars.SafeString(n)});var a=$("#comments-section");a.delegate(".tab-hd a","click",function(e){e.preventDefault();var n=$(this);return a.find(".tab-hd a").removeClass("on").end().find(".tab").hide().end().find("#"+n.data("id")+"-comments").show(),n.addClass("on"),$.get("../../blank@track-"+n.attr("id")),!1}).delegate("#new-comments-tab","click",function(e){$(this).data("clicked")||($(this).data("clicked",!0),$.get("../../j/subject/"+subject_id+"/comments",function(e){if(1===e.retcode){var a=(e.result,n({comments:e.result.normal,if_logined:if_logined}));$("#new-comments #normal").html(a),e.result.spammed.length>0&&($("#new-comments .fold-bd").append(n({comments:e.result.spammed,if_logined:if_logined})),$("#new-comments .fold-hd").removeClass("hide")),e.result.total_num>4&&$("#new-comments #total-num").html(t({num:e.result.total_num})),load_event_monitor($("#new-comments"))}}))})});
                $(function(){$("body").delegate(".btn-unfold","click",function(e){e.preventDefault();var t=$(e.target),d=t.parent(".fold-hd");d.slideUp().next().slideDown()}),$("body").delegate(".comment-item .expand a","click",function(e){e.preventDefault();var t=$(e.target),d=t.parents("p");$short=d.find(".short"),$hide=d.find(".hide-item"),t.hasClass("isfold")?(t.removeClass("isfold").text("展开"),$short.show(),$hide.hide()):(t.addClass("isfold").text("收起"),$short.hide(),$hide.show())})});
            