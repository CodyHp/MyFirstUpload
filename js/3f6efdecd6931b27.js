
    !function() {
      var _URL_LIBS = '../../../https@img3.doubanio.com/f/zerkalo/ae843e402115c5d933e23bd04c55523a1951bae6/js/review/editor/libs.js';
      var _URL_SETTING_JS = '../../../https@img3.doubanio.com/f/zerkalo/97f440e1da665c7aa2fc1aafdb29da5822fed144/js/review/editor/ng/setting_standalone.js';
      var _URL_SETTING_CSS = '../../../https@img3.doubanio.com/f/zerkalo/43e29c1661d06f69562f25ed0d887bb5a889d225/css/review/editor/ng/setting_standalone.css';
      var _REPORT_DIALOG_JS = '../../../https@img3.doubanio.com/f/shire/a14501790b4a2db257dc5be5e37d820e600703c6/js/report_dialog.js';
      var _REPORT_DIALOG_CSS = '../../../https@img3.doubanio.com/f/shire/b45aa277f8b8df40596b96582dafb1ed0a899a64/css/report_dialog.css';
      "use strict";Do.global(_URL_LIBS),Do.ready(_URL_SETTING_CSS,_URL_SETTING_JS,_REPORT_DIALOG_JS,_REPORT_DIALOG_CSS,function(){var i=function(i){var e,o,a=i+"=",n=document.cookie.split(";");for(e=0;e<n.length;e++){for(o=n[e];" "==o.charAt(0);)o=o.substring(1,o.length);if(0===o.indexOf(a))return o.substring(a.length,o.length).replace(/\"/g,"")}return null};$("body").delegate(".review-footer-action-setting a[data-rid]","click",function(e){e.preventDefault(),console.log("!!!!");var o=$(this).data();if(window._USER_ABNORMAL)return void(window.show_abnormal&&window.show_abnormal());var a={review_id:o.rid,setting:{rating:o.rating,is_original:o.original,is_spoiler:o.spoiler,is_accept_reward:o.donate,is_open_reward:o.openDonate},subjectTitle:o.subjectTitle,displayRating:o.displayRating,displaySpoiler:o.displaySpoiler,onSubmit:function(e){var n={ck:i("ck")};n["review[original]"]=e.is_original?"on":"",n["review[donate]"]=e.is_accept_reward?"on":"",a.displayRating&&(n["review[rating]"]=e.rating),a.displaySpoiler&&(n["review[spoiler]"]=e.is_spoiler?"on":""),$.post(o.url,n,function(i){self.location.reload()})}};globalReviewSetting.open(a)})}),function(){!function(){var i=['<div class="popup-container hide">','<div class="popup-wrap">','<div class="popup-small">','<a class="close"></a>','<p class="popup-info">你的帐号存在安全风险<br/>写评论前请先输入验证码以证明是本人使用</p>','<div class="popup-btns">',' <a class="btn" href="javascript:;">前往验证</a>',"</div>","</div>","</div>","</div>"].join("");$("body").delegate("a.create-review, .top-tab .btn","click",function(e){e.preventDefault();var o=$(this),a=o;if(o.hasClass("cls_abnormal")&&window._USER_ABNORMAL)return void(show_abnormal&&show_abnormal());o.attr("href")||(a=o.find("a"));var n=$("div.popup-container"),t=a.attr("data-isverify"),r=a.attr("data-verify-url");if(t&&"false"!=t.toLowerCase())if($(".topic-block").length){var l=document.createElement("div");l.id="gallery-topics-selection",document.body.appendChild(l),window.renderGalleryTopicsSelection()}else location.href=a.attr("href");else n.size()<1&&($("body").append(i),n=$("div.popup-container")),n.find(".btn").attr("href",r),n.removeClass("hide")}).on("click","div.popup-container .close",function(){$("div.popup-container").addClass("hide")})}(),$("body").delegate(".review-footer-action-remove a","click",function(i){if(i.preventDefault(),window._USER_ABNORMAL)return void(window.show_abnormal&&window.show_abnormal());if(confirm("真的就删了吗?")){var e=$(this).data(),o=$('<form action="'+e.url+'" method="POST"><input type="hidden" name="ck" value="'+get_cookie("ck")+'"/></form>').appendTo("body");o[0].submit()}})}();
    }();
  ;
  ;Do = (typeof Do === 'undefined')? $ : Do
  ;Do(function() {
    function generate_report_dialog(e){"undefined"==typeof dui?$.getScript("../../js/ui/dialog.js",function(){_generate_report_dialog(e)}):_generate_report_dialog(e)}function _generate_report_dialog(e){function t(e){return e.test(location.pathname)}function o(e){return e.test(location.pathname)}var i="8",n=e.type||"";n||(n="content",o(/^\/(subject|game|app)\/\w+/)||t(/movie|music|book/)?n="subject":o(/^\/people\/\w+\/?$/)?n="account":o(/^\/people\/\w+\/status\/\w+\/?$/)&&(n="comment")),n=n instanceof Array?n.join(","):n;var r='<span class="up">举报已提交</span>',a="../../../https@help.douban.com/help/ask",d="/j/misc/report_form?type="+n,l="../../misc/audit_report",p='<span>为了便于工作人员进行受理，请您通过<a target="_blank" href="'+a+'">豆瓣帮助中心</a>详细描述内容</span>',c="<h3>提交详细信息</h3>",u=e.report_url?e.report_url:location.href,s=e.reason?e.reason:0,f="#report_value input[type=radio]:checked",h=dui.Dialog({title:e.title?e.title:"选择举报原因",url:e.url?e.url:d,width:e.width?e.width:380,cls:e.cls?e.cls:"report-dialog"});h.report_url=u,h.is_report_dlg_singleton||(h.body.delegate(".btn-report","click",function(){if(s=$(f).val(),"other"==s)h.node.find(".hd").html(c),h.node.find(".bd").html(p),h.update(),h.body.delegate(".bd a","click",function(){h.close()});else{var e="",t="",o=$(".victim-form .victim-msg").hide();if(s===i&&(e=$("#report_value .victim-input").val()||"",e?e.length>100&&(t="被冒充帐号 id 最多不能超过 100 个字符"):t="被冒充帐号 id 不能为空",t))return o.text(t).show(),void h.update();$.post_withck(l,{url:h.report_url,reason:s,extra_msg:e},function(){h.node.find(".hd").hide(),h.node.find(".bd").html(r),h.update(),setTimeout(function(){h.close()},1e3)})}}),h.is_report_dlg_singleton=!0),h.open(),h.body.delegate("input[type=radio]","click",function(){var e=$(f).val();e===i?h.node.find(".victim-form").show():h.node.find(".victim-form").hide(),h.update()}),h.node.find(".hd").show(),h.update()}
    $(function() {
  function show_abnormal() {
    var content ='', 
      is_readonly = _USER_ABNORMAL.readonly || false, 
      is_abnormal = _USER_ABNORMAL.abnormal || false, 
      is_verify = _USER_ABNORMAL.verify || false;
    if(is_readonly) {
      content = `根据社区指导原则，${_USER_ABNORMAL.readonly.message}。如有疑问，请发邮件至help@douban.com`

      var dlg_abnormal = dui.Dialog({
                            title: '用户提示',
                            width: 380,
                            content: content
                          })
      dlg_abnormal.open().update()
      return
    }else if(is_abnormal) {
      location.href = '../../../https@accounts.douban.com/passport/abnormal@redir=' + location.href
      return
      // content = '_25E6_25A3_2580_25E6_25B5_258B_25E5_2588_25B0_25E4_25BD_25A0_25E7_259A_2584_25E5_25B8_2590_25E5_258F0441122DDA'
    }else if(is_verify) {
      location.href = '../../../https@accounts.douban.com/passport/verify@redir=' + location.href
      return
      // content = '_25E6_25A0_25B9_25E6_258D_25AE_25E7_25A4_25BE_25E5_258C_25BA_25E6_258C_2587_25E5_25AF_25BC_25E5_258E00D5609D25'
    }
  }

  window.show_abnormal = show_abnormal
  
  if(window._USER_ABNORMAL) {
    $('.cls_abnormal, .show_abnormal', document).unbind().bind('click', function(e) {
      e.preventDefault()
      show_abnormal()
      return
    })
// 去除搜索框的限制
    $('input, textarea').not('.nav-search input').removeAttr('disabled').removeAttr('readonly').unbind().bind('click', function(e) {
      e.preventDefault()
      var $el = $(this)
      $el.attr('readonly', 'readonly')
      show_abnormal()
      return
    })
  }
})

    var DOUBAN=location.protocol+"//www.douban.com",AUDIT_URL=DOUBAN+"/misc/audit_report",reportUrl=DOUBAN+"/review/"+reviewObj.REVIEW_ID,reason=0,reqData={ck:get_cookie("ck")},handleReport=function(e){var t=e.target,r=t.className,o=t.getAttribute("data-cid"),n="",a=/report_review|report_comment/,c=r.match(a);if(r.indexOf("cls_abnormal")>-1)return void window.show_abnormal();if(c){e.preventDefault(),n=c[0],reportUrl+=o?"@comment_id="+o:"",reqData=Object.assign({},reqData,{url:reportUrl,reason:reason});var i="subject";"report_comment"===n&&(i=["subject","comment"]),generate_report_dialog({report_url:reportUrl,type:i})}},commentList=document.querySelectorAll(".comment-list")[0]||null,linkReport=document.getElementById("link-report");commentList?commentList.addEventListener("click",handleReport,!1):"",linkReport?linkReport.addEventListener("click",handleReport,!1):"";
  })
  ;
                !function(e,t,i){function r(e,n){this.config=i.extend(!0,{},a,e);var o=r.serializeOpenGraph();this.pageInfo=i.extend({title:o.title||t.title,url:o.url||t.location.href,pic:("array"===i.type(o.image)?o.image[0]:o.image)||"",desc:o.description||"",site:o.site_name||""},n)}var a={weibo:{appkey:""},douban:{},qq:{},qzone:{}};r.serializeOpenGraph=function(){var e={};i('meta[property^="og:"]').each(function(t,r){r=i(r);var a=r.attr("property").replace(/^og\:/,"");e[a]=r.attr("content")});var t=i('meta[property="og:image"]');return t.length>1&&(e.image=t.map(function(e,t){return i(t).attr("content")}).toArray()),e},r.prototype={constructor:r,set:function(e,t){var r={};r[e]=t,i.extend(this.config,r)},get:function(e){var t=i.extend({},this.pageInfo,this.config[e]);return{douban:{url:"https://www.douban.com/share/service/?"+i.param({href:t.url,name:t.title,image:t.pic,text:t.desc})},weibo:{url:"http://v.t.sina.com.cn/share/share.php?"+i.param({appkey:t.appkey,url:t.url,title:t.title,pic:t.pic})},qq:{url:"http://connect.qq.com/widget/shareqq/index.html?"+i.param({url:t.url,desc:t.title,pics:t.pic,site:t.site})},qzone:{url:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?"+i.param({url:t.url,title:t.title,summary:t.desc,pics:t.pic})}}[e]},openInNewWindow:function(t,r){r=r||{};var a=r.width||500,n=r.height||360,o=i.extend({},{width:a,height:n,toolbar:0,location:0,resizable:1,scrollbars:"yes",left:r.left||(screen.width-a)/2,top:r.top||(screen.height-n)/2},r);e.open(t,"SocialSharing",i.param(o).replace(/&/g,","))}},window.SocialSharing=r}(window,document,jQuery);

            ;
            $(function(){function a(a,i){a.find(".sharing-wechat-qrcode").html('<img src="../../../https@img3.doubanio.com/dae/qrgen/v2/'+encodeURIComponent(i)+'.png" alt="扫描二维码" />')}var i=$(document),e={weibo:"bshare_sina",qq:"bshare_qqim",qzone:"bshare_qzone"},n={qq:{width:800,height:600},qzone:{width:800,height:600}};i.delegate(".sharing-indicator","click",function(){var i=$(this).closest(".sharing"),e=i.find(".sharing-layer");if(e.hasClass("is-hidden")){var n=i.data("target").url;e.removeClass("is-hidden"),a(e,n)}else e.addClass("is-hidden")}),$("body").bind("click",function(a){if(!$(a.target).hasClass("sharing-indicator")){var i=$(".sharing-layer");i.hasClass("is-hidden")||$(a.target).closest(".sharing-layer").length||i.addClass("is-hidden")}}),$(".sharing-layer").bind("click",function(a){return $(a.target).closest(".sharing-list").length?void $(".sharing-layer").addClass("is-hidden"):void a.stopPropagation()}),i.delegate("[data-share]","click",function(){var a=$(this),i=a.data("share"),s=$(this).closest(".sharing"),t=s.data("target")||{},r=new SocialSharing({weibo:{appkey:"3015934887"}},t),d="../../../https@www.douban.com/link2@type=redir&vendor="+e[i]+"&url="+encodeURIComponent(r.get(i).url);r.openInNewWindow(d,n[i])})});
        ;
   ;!function(){function t(t,e){return function(){var i=R[e],o=this;i&&clearTimeout(i),R[e]=setTimeout(function(){t.apply(o,arguments)},300)}}var e=8,i=window.dui||{},o="dui-dialog",n=[],s=null,h=!(!$.browser||!$.browser.msie||"6.0"!==$.browser.version),d=("ontouchstart"in window,{}),a={},c="j_close_dialog",l="dui-dialog",r="dui-dialog-close",u="dui-dialog-shd",f="dui-dialog-content",p="dui-dialog-iframe",m="dui-dialog-msk",g="确定",v="取消",b="提示",w="下载中，请稍候...",y='<div id="{ID}" class="'+l+' {CLS}" style="{CSS_ISHIDE}">                <span class="'+u+'"></span>                <div class="'+f+'">                    {BN_CLOSE}                    {TITLE}                    <div class="bd">{BODY}</div>                </div>            </div>',C='<a href="#" class="'+c+" "+r+'">X</a>',I='<div class="hd"><h3>{TITLE}</h3></div>',k='<iframe class="'+p+'"></iframe>',x='<div class="'+m+'"></div>',T={confirm:{text:g,method:function(t){t.close()}},cancel:{text:v,method:function(t){t.close()}}},S={url:"",nodeId:"",cls:"",content:"",title:b,width:0,height:0,visible:!1,modal:!1,iframe:!1,maxWidth:960,autoupdate:!1,cache:!0,buttons:[],callback:null,dataType:"text",isStick:!1,isHideClose:!1,isHideTitle:!1},H=function(t,e){var i,o={};for(i in e)e.hasOwnProperty(i)&&(o[i]=void 0===t[i]?e[i]:t[i]);return o},D=function(t){for(var e,i=t.elements,o=0,n=[],s={"select-one":function(t){return encodeURIComponent(t.name)+"="+encodeURIComponent(t.options[t.selectedIndex].value)},"select-multiple":function(t){for(var e,i=0,o=[];e=t.options[i++];)e.selected&&o.push(encodeURIComponent(t.name)+"="+encodeURIComponent(e.value));return o.join("&")},radio:function(t){if(t.checked)return encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)},checkbox:function(t){if(t.checked)return encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)}};e=i[o++];)s[e.type]?n.push(s[e.type](e)):n.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value));return n.join("&").replace(/\&{2,}/g,"&")},j=function(t){var e=t||{};this.config=H(e,S),this.init()};j.prototype={init:function(){if(this.config)return this.render(),this.bind(),this},render:function(t){var e=this.config,i=e.nodeId||o+n.length;n.push(i);var s=$("body"),h=s.find("."+m),d="object"==typeof e.content?$(e.content).html():e.content;return s.append(y.replace("{ID}",i).replace("{CSS_ISHIDE}",e.visible?"":"visibility:hidden;top:-999em;left:-999em;").replace("{CLS}",e.cls).replace("{TITLE}",I.replace("{TITLE}",e.title)).replace("{BN_CLOSE}",C).replace("{BODY}",d||t||"")),e.modal&&!h.length?(s.append(x),this.msk=$("."+m)):this.msk=h.eq(0),this.nodeId=i,this.node=$("#"+i),this.title=$(".hd",this.node),this.body=$(".bd",this.node),this.btnClose=$("."+r,this.node),this.shadow=$("."+u,this.node),this.iframe=$("."+p,this.node),this.set(e),this},bind:function(){var e=this;return h||$(window).bind({resize:t(function(){e.updatePosition()},"pos"),scroll:t(function(){e.updatePosition()},"pos")}),e.node.delegate("."+c,"click",function(t){e.close(),t.preventDefault()}),e.node.find("."+r).bind("click",function(t){e.close(),t.preventDefault()}),$("body").keypress(function(t){27===t.keyCode&&e.close()}),this},updateSize:function(){var t,i=this.node.width(),o=$(window).width(),n=$(window).height(),s=this.config;$(".bd",this.node).eq(0).css({height:"auto","overflow-x":"visible","overflow-y":"visible"}),t=this.node.height();var h=2*e;return s.maxWidth=Math.min(s.maxWidth,o-h),i>s.maxWidth&&(i=s.maxWidth,this.node.css("width",i+"px")),t>n&&$(".bd",this.node).eq(0).css({height:n-150+"px","overflow-x":"hidden","overflow-y":"auto"}),t=this.node.height(),this.shadow.width(i),this.shadow.height(t),this.iframe.width(i+h).height(t+h),this},updatePosition:function(){if(!this.config.isStick){var t=this.node.width(),i=this.node.height(),o=$(window),n=h?o.scrollTop():0;return this.node.css({left:Math.floor(o.width()/2-t/2)+"px",top:Math.floor(o.height()/2-i/2-e)+n+"px"}),this}},set:function(t){var e,i,o=this.nodeId,n=this.nodeId||n,s=[],h=this,c=function(t){return s.push(0),o+"-"+t+"-"+s.length};if(!t)return this;t.width&&(this.node.css("width",t.width+"px"),this.config.width=t.width),t.height&&(this.node.css("height",t.height+"px"),this.config.height=t.height),$.isArray(t.buttons)&&t.buttons[0]?(i=$(".ft",this.node),e=[],$(t.buttons).each(function(){var t=arguments[1],i=c("bn");"string"==typeof t&&(t=T[t]),t.text&&(t.href?e.push('<a class="'+(t.cls||"")+'" id="'+i+'" href="'+t.href+'">'+t.text+"</a> "):e.push('<span class="bn-flat '+(t.cls||"")+'"><input type="button" id="'+i+'" class="'+n+'-bn" value="'+t.text+'" /></span> '),a[i]=t.method)}),i[0]?i.html(e.join("")):i=this.body.parent().append('<div class="ft">'+e.join("")+"</div>"),this.footer=$(".ft",this.node),$(".ft input, .ft a",this.node).click(function(t){var e=this.id&&a[this.id];if(e)var i=e.call(this,h);i&&(t.preventDefault(),"string"==typeof i&&alert(i))})):(this.footer=$(".ft",this.node),this.footer.html("")),"undefined"!=typeof t.isHideClose&&(t.isHideClose?this.btnClose.hide():this.btnClose.show(),this.config.isHideClose=t.isHideClose),"undefined"!=typeof t.isHideTitle&&(t.isHideTitle?this.title.hide():this.title.show(),this.config.isHideTitle=t.isHideTitle),t.title&&(this.setTitle(t.title),this.config.title=t.title),"undefined"!=typeof t.iframe&&(t.iframe?this.iframe[0]?this.iframe.show():(this.node.prepend(k),this.iframe=$("."+p,this.node)):this.iframe.hide(),this.config.iframe=t.iframe),t.content&&(this.body.html("object"==typeof t.content?$(t.content).html():t.content),this.config.content=t.content),t.url&&(t.cache&&d[t.url]?("text"!==t.dataType&&t.dataType||this.setContent(d[t.url]),t.callback&&t.callback(d[t.url],this)):"json"===t.dataType?(this.setContent(w),this.footer&&this.footer.hide(),$.getJSON(t.url,function(e){h.footer.show(),d[t.url]=e,t.callback&&t.callback(e,h)})):(this.setContent(w),this.footer&&this.footer.hide(),$.ajax({url:t.url,dataType:t.dataType,success:function(e){d[t.url]=e,h.footer&&h.footer.show(),h.setContent(e),t.callback&&t.callback(e,h)}})));var l=t.position;return l&&this.node.css({left:l[0]+"px",top:l[1]+"px"}),"boolean"==typeof t.autoupdate&&(this.config.autoupdate=t.autoupdate),"boolean"==typeof t.isStick&&(t.isStick?this.node.css("position","absolute"):this.node.css("position","fixed"),this.config.isStick=t.isStick),this.update()},update:function(){return this.updateSize(),this.updatePosition(),this},setContent:function(t){return this.body.html(t),this.update()},setTitle:function(t){return $("h3",this.title).html(t),this},submit:function(t){var e=$("form",this.node);e.submit(function(e){e.preventDefault();var i=this.getAttribute("action",2),o=this.getAttribute("method")||"get",n=D(this);$[o.toLowerCase()](i,n,function(e){t&&t(e)},"json")}),e.submit()},open:function(){this.node.appendTo("body").css("visibility","visible").show();var t=this,e=this.config,i=t.body[0];return t.contentHeight=i.offsetHeight,this.watcher=e.autoupdate?setInterval(function(){i.offsetHeight!==t.contentHeight&&(t.update(),t.contentHeight=i.offsetHeight)},100):0,e.modal&&this.msk.show().css({height:$(document).height()}),this},close:function(){return this.node.hide(),this.msk.hide(),this.node.trigger("dialog:close",this),clearInterval(this.watcher),this}},i.Dialog=function(t,e){return!e&&s?t?s.set(t):s:s||e?new j(t):s=new j(t)},window.dui=i;var R={}}();
  ;
    ; Do(function(){
        var HTTPS_DB='../../../https@www.douban.com';
var SOURCE='movie';
var account_pop = {
  open: function (type, ref) {
    if (ref) {
      referrer = '@referrer=' + encodeURIComponent(ref)
    } else {
      referrer = '@referrer=' + window.location.href
    }

    var title = '',
      url = '',
      height = 382
    if (type === 'reg') {
      title = '用户注册'
      url = '../../../https@accounts.douban.com/popup/login@source=' + SOURCE + '#popup_register'
      height = 480
    } else if (type === 'login') {
      title = '用户登录'
      url = '../../../https@accounts.douban.com/popup/login@source=' + SOURCE
    }

    // var origin = document.location.protocol + '//' + document.location.hostname
    var origin = document.origin
    var dialog = dui.Dialog({
        width: 478,
        title: title,
        height: height,
        cls: 'account_pop',
        isHideTitle: true,
        modal: true,
        content: "<iframe scrolling='no' frameborder='0' width='478' height='" + height + "' src='" + url + "' name='" + origin + "'></iframe>"
      }, true),
      node = dialog.node
    node.off()

    node.on('click', '.dui-dialog-close', function () {
      var $body = $('body')
      $body.find('#login_msk').hide()
      $body.find('.account_pop').remove()
    })

    // for mobile
    if ($(window).width() < 478) {
      var m_url = ''
      if (type === 'reg') {
        m_url = HTTPS_DB + '/accounts/register' + referrer
      } else if (type === 'login') {
        m_url = HTTPS_DB + '/accounts/login' + referrer
      }

      window.location.href = m_url
    } else {
      // for desktop
      dialog.open()
    }

    window.addEventListener('message', function (e) {
      if (e.origin === '../../../https@accounts.douban.com') {
        node.find('iframe').css('height', e.data)
        node.height(e.data)
        dialog.update()
      }
    }, false)
  }
}

if (Douban && Douban.init_show_login) {
  Douban.init_show_login = function (o) {
    var node = $(o)
    node.click(function () {
      var ref = node.data('ref') || ''
      account_pop.open('login', ref)
      return false
    })
  }
}

Do(function () {
  // movie ticket / biz
  $(document).on('click', '.pop_register', function (e) {
    e.preventDefault()
    var ref = $(this).data('ref') || ''
    account_pop.open('reg', ref)
    return false
  })

  $(document).on('click', '.pop_login', function (e) {
    e.preventDefault()
    var ref = $(this).data('ref') || ''
    account_pop.open('login', ref)
    return false
  })
})

    });
  