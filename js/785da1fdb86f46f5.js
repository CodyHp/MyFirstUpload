
  $(function(){
  });

  function generate_group_prompt_dialog(dui_config){
    var prompt_dlg = dui.Dialog({
        title: (dui_config.title? dui_config.title: '操作提示'),
        content: (dui_config.content? dui_config.content: '操作内容'),
        width: (dui_config.width? dui_config.width: 400),
        buttons: [
            {text: '去绑定', method: function() { window.location = dui_config.target; } },
            {text: '取消', method: function() { prompt_dlg.close(); } }
        ]
    });
    prompt_dlg.open();
  }

  $('.bind-phone-confirm').click(function(){
    generate_group_prompt_dialog({content: '加入此小组需要绑定手机号', target: '../../accounts/phone/bind@ck=hjfn'});
    return false;
  });

;
 function gtip_win(e) {
   $(e).parent().find('.blocktip').show().blur_hide();
 }
 gtip_win.hide = function(e) {
   $(e).parents('.blocktip').hide();
 }
 Do(function(){var a=['<div class="popup-container hide">','<div class="popup-wrap">','<div class="popup-small">','<a class="close"></a>','<p class="popup-info">为确保你的帐户安全，并依《网络安全法》要求，<br/>操作前请先验证手机号。</p>','<div class="popup-btns">',' <a class="btn" href="javascript:;" target="_blank">前往验证</a>',"</div>","</div>","</div>","</div>"].join("");$("body").delegate(".js-verify-account","click",function(e){var t=$(this),i=t;if(window._USER_ABNORMAL)return e.preventDefault(),void(window.show_abnormal&&window.show_abnormal());var o=$(".popup-container"),r=i.attr("data-is-verified"),n=i.attr("data-verify-url");r&&"false"!=r.toLowerCase()?i.attr("href")&&i.attr("href").length&&(location.href=i.attr("href")):(e.preventDefault(),o.size()<1&&($("body").append(a),o=$(".popup-container")),o.find(".btn").attr("href",n),o.removeClass("hide"))}).delegate(".popup-container .close","click",function(){$(".popup-container").addClass("hide")})});
;
  ;(function(){var F=8;var B=window.dui||{},e="dui-dialog",x=[],t=null,f=($.browser.msie&&$.browser.version==="6.0")?true:false,D="ontouchstart" in window,d={},r={},E="j_close_dialog",c="dui-dialog",m="dui-dialog-close",a="dui-dialog-shd",q="dui-dialog-content",n="dui-dialog-iframe",j="dui-dialog-msk",p="确定",b="取消",w="提示",l="下载中，请稍候...",i='<div id="{ID}" class="'+c+' {CLS}" style="{CSS_ISHIDE}">                <span class="'+a+'"></span>                <div class="'+q+'">                    {BN_CLOSE}                    {TITLE}                    <div class="bd">{BODY}</div>                </div>            </div>',g='<a href="#" class="'+E+" "+m+'">X</a>',k='<div class="hd"><h3>{TITLE}</h3></div>',y='<iframe class="'+n+'"></iframe>',u='<div class="'+j+'"></div>',o={confirm:{text:p,method:function(G){G.close()}},cancel:{text:b,method:function(G){G.close()}}},C={url:"",nodeId:"",cls:"",content:"",title:w,width:0,height:0,visible:false,modal:false,iframe:false,maxWidth:960,autoupdate:false,cache:true,buttons:[],callback:null,dataType:"text",isStick:false,isHideClose:false,isHideTitle:false},h=function(J,I){var G={},H;for(H in I){if(I.hasOwnProperty(H)){G[H]=J[H]===undefined?I[H]:J[H]}}return G},A=function(L){var I=L.elements,H=0,J,K=[],G={"select-one":function(M){return encodeURIComponent(M.name)+"="+encodeURIComponent(M.options[M.selectedIndex].value)},"select-multiple":function(P){var O=0,N,M=[];for(;N=P.options[O++];){if(N.selected){M.push(encodeURIComponent(P.name)+"="+encodeURIComponent(N.value))}}return M.join("&")},radio:function(M){if(M.checked){return encodeURIComponent(M.name)+"="+encodeURIComponent(M.value)}},checkbox:function(M){if(M.checked){return encodeURIComponent(M.name)+"="+encodeURIComponent(M.value)}}};for(;J=I[H++];){if(G[J.type]){K.push(G[J.type](J))}else{K.push(encodeURIComponent(J.name)+"="+encodeURIComponent(J.value))}}return K.join("&").replace(/\&{2,}/g,"&")},v=function(G){var H=G||{};this.config=h(H,C);this.init()};v.prototype={init:function(){if(!this.config){return}this.render();this.bind();return this},render:function(J){var G=this.config,L=G.nodeId||e+x.length;x.push(L);var I=$("body"),K=I.find("."+j),H=typeof G.content==="object"?$(G.content).html():G.content;I.append(i.replace("{ID}",L).replace("{CSS_ISHIDE}",G.visible?"":"visibility:hidden;top:-999em;left:-999em;").replace("{CLS}",G.cls).replace("{TITLE}",k.replace("{TITLE}",G.title)).replace("{BN_CLOSE}",g).replace("{BODY}",H||J||""));if(G.modal&&!K.length){I.append(u);this.msk=$("."+j)}else{this.msk=K.eq(0)}this.nodeId=L;this.node=$("#"+L);this.title=$(".hd",this.node);this.body=$(".bd",this.node);this.btnClose=$("."+m,this.node);this.shadow=$("."+a,this.node);this.iframe=$("."+n,this.node);this.set(G);return this},bind:function(){var G=this;if(!f){$(window).bind({resize:s(function(){G.updatePosition()},"pos"),scroll:s(function(){G.updatePosition()},"pos")})}G.node.delegate("."+E,"click",function(H){G.close();H.preventDefault()});G.node.find("."+m).bind("click",function(H){G.close();H.preventDefault()});$("body").keypress(function(H){if(H.keyCode===27){G.close()}});return this},updateSize:function(){var I=this.node.width(),J,G=$(window).width(),K=$(window).height(),H=this.config;$(".bd",this.node).css({height:"auto","overflow-x":"visible","overflow-y":"visible"});J=this.node.height();var L=2*F;H.maxWidth=Math.min(H.maxWidth,G-L);if(I>H.maxWidth){I=H.maxWidth;this.node.css("width",I+"px")}if(J>K){$(".bd",this.node).css({height:(K-150)+"px","overflow-x":"hidden","overflow-y":"auto"})}J=this.node.height();this.shadow.width(I);this.shadow.height(J);this.iframe.width(I+L).height(J+L);return this},updatePosition:function(){if(this.config.isStick){return}var G=this.node.width(),I=this.node.height(),J=$(window),H=f?J.scrollTop():0;this.node.css({left:Math.floor(J.width()/2-G/2)+"px",top:Math.floor(J.height()/2-I/2-F)+H+"px"});return this},set:function(L){var N,Q,H,I,G=this.nodeId,O=this.nodeId||O,J=[],K=this,P=function(R){J.push(0);return G+"-"+R+"-"+J.length};if(!L){return this}if(L.width){this.node.css("width",L.width+"px");this.config.width=L.width}if(L.height){this.node.css("height",L.height+"px");this.config.height=L.height}if($.isArray(L.buttons)&&L.buttons[0]){I=$(".ft",this.node);H=[];$(L.buttons).each(function(){var S=arguments[1],R=P("bn");if(typeof S==="string"){S=o[S]}if(!S.text){return}if(S.href){H.push('<a class="'+(S.cls||"")+'" id="'+R+'" href="'+S.href+'">'+S.text+"</a> ")}else{H.push('<span class="bn-flat '+(S.cls||"")+'"><input type="button" id="'+R+'" class="'+O+'-bn" value="'+S.text+'" /></span> ')}r[R]=S.method});if(!I[0]){I=this.body.parent().append('<div class="ft">'+H.join("")+"</div>")}else{I.html(H.join(""))}this.footer=$(".ft",this.node);$(".ft input, .ft a",this.node).click(function(T){var S=this.id&&r[this.id];if(S){var R=S.call(this,K)}if(R){T.preventDefault();if(typeof R=="string"){alert(R)}}})}else{this.footer=$(".ft",this.node);this.footer.html("")}if(typeof L.isHideClose!=="undefined"){if(L.isHideClose){this.btnClose.hide()}else{this.btnClose.show()}this.config.isHideClose=L.isHideClose}if(typeof L.isHideTitle!=="undefined"){if(L.isHideTitle){this.title.hide()}else{this.title.show()}this.config.isHideTitle=L.isHideTitle}if(L.title){this.setTitle(L.title);this.config.title=L.title}if(typeof L.iframe!=="undefined"){if(!L.iframe){this.iframe.hide()}else{if(!this.iframe[0]){this.node.prepend(y);this.iframe=$("."+n,this.node)}else{this.iframe.show()}}this.config.iframe=L.iframe}if(L.content){this.body.html(typeof L.content==="object"?$(L.content).html():L.content);this.config.content=L.content}if(L.url){if(L.cache&&d[L.url]){if(L.dataType==="text"||!L.dataType){this.setContent(d[L.url])}if(L.callback){L.callback(d[L.url],this)}}else{if(L.dataType==="json"){this.setContent(l);if(this.footer){this.footer.hide()}$.getJSON(L.url,function(R){K.footer.show();d[L.url]=R;if(L.callback){L.callback(R,K)}})}else{this.setContent(l);if(this.footer){this.footer.hide()}$.ajax({url:L.url,dataType:L.dataType,success:function(R){d[L.url]=R;if(K.footer){K.footer.show()}K.setContent(R);if(L.callback){L.callback(R,K)}}})}}}var M=L.position;if(M){this.node.css({left:M[0]+"px",top:M[1]+"px"})}if(typeof L.autoupdate==="boolean"){this.config.autoupdate=L.autoupdate}if(typeof L.isStick==="boolean"){if(L.isStick){this.node.css("position","absolute")}else{this.node.css("position","fixed")}this.config.isStick=L.isStick}return this.update()},update:function(){this.updateSize();this.updatePosition();return this},setContent:function(G){this.body.html(G);return this.update()},setTitle:function(G){$("h3",this.title).html(G);return this},submit:function(I){var G=this,H=$("form",this.node);H.submit(function(M){M.preventDefault();var J=this.getAttribute("action",2),K=this.getAttribute("method")||"get",L=A(this);$[K.toLowerCase()](J,L,function(N){if(I){I(N)}},"json")});H.submit()},open:function(){this.node.appendTo("body").css("visibility","visible").show();var H=this,G=this.config,I=H.body[0];H.contentHeight=I.offsetHeight;this.watcher=!G.autoupdate?0:setInterval(function(){if(I.offsetHeight===H.contentHeight){return}H.update();H.contentHeight=I.offsetHeight},100);if(G.modal){this.msk.show().css({height:$(document).height()})}return this},close:function(){this.node.hide();this.msk.hide();this.node.trigger("dialog:close",this);clearInterval(this.watcher);return this}};B.Dialog=function(G,H){if(!H&&t){return G?t.set(G):t}if(!t&&!H){t=new v(G);return t}return new v(G)};window.dui=B;var z={};function s(G,H){return function(){var K=z[H];var J=arguments;var I=this;if(K){clearTimeout(K)}z[H]=setTimeout(function(){G.apply(I,arguments)},300)}}})();
;

;(function() {
  var mask;
  var popup;
  var current = '';
  var init_popup = function() {
    mask = $('<div class="popup-reg-mask"></div>').appendTo('body');
    mask.css('height', $(document).height());
    popup = $('#g-popup-reg');
    popup.find('.lnk-close').click(function(e) {
        e.preventDefault();
        popup.hide();
        mask.hide();
    });

    if ($.browser.msie && ($.browser.version|0) === 6) {
        var win = $(window).scroll((function() {
            var timer;
            var doc = document.body;
            return function() {
                if (timer) {
                    window.clearTimeout(timer);
                }
                timer = window.setTimeout(function() {
                    popup.css({
                      top: (doc.scrollTop + win.height()/2 - popup.height()/2) + 'px'
                    });
                }, 20);
            };
        })()).trigger('scroll');
    }
  };

  var show_popup = function() {
    if (popup) {
      popup.show();
      mask.show();
    } else {
      $('#g-popup-reg').show();
      init_popup();
    }
  };

  Douban.init_show_register = function (e) {
    var node = $(e);
    node.click(function(e) {
      e.preventDefault();
      show_popup();
      if (current !== 'register') {
        popup.find('iframe').attr('src', reg_url);
      }
      current = 'register';
    });
  };

  Douban.init_show_login = function (e) {
    var node = $(e);
    node.click(function(e) {
      e.preventDefault();
      show_popup();
      if (current !== 'login') {
        popup.find('iframe').attr('src', login_url);
      }
      current = 'login';
    });
  };
})();

$(function() {
  var $landingBar = $('#landing-bar');
  var popup_mark = 'g_reg';
  // 有些页面会自动弹注册框
  if (
  'selenium_main_app_window' === window.name ||
  window.POPUP_REG && !window.name) {
      $('#landing-bar').show();
      $('#wrapper').addClass('landing');
  }
  $landingBar.delegate('a', 'click', function(e) {
      // 第三方登录不处理，其他隐藏landing bar
      if ($(this).parent().is('.item')) {
          return;
      }

      e.preventDefault();
      $landingBar.hide();
      if (window.POPUP_REG) {
        window.name = window.name || popup_mark;
      }
  });
});
