
    ;(function(){
        window.subject_id = window.subject_id || 25882279;
        "use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var _createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var c=t[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(e,c.key,c)}}return function(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}}(),GalleryTopicsSelection=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={topics:[]},e}return _inherits(t,e),_createClass(t,[{key:"componentDidMount",value:function(){var e=this;$.ajax({url:"../../../https@m.douban.com/rexxar/api/v2/gallery/subject_feed@start=0&subject_id="+window.subject_id+"&ck="+get_cookie("ck"),xhrFields:{withCredentials:!0},success:function(t){e.setState({topics:t.items}),t.total&&(window.has_gallery_topics=!0)}})}},{key:"render",value:function(){var e=this.state.topics;return React.createElement("section",null,React.createElement("a",{href:"new_review@from=gallery-topics-selection&click=close",rel:"nofollow",className:"close_selection"},"跳过"),React.createElement("h1",null,"下面是否有你想写的话题？"),e.length?React.createElement("ul",{className:"gl_topics"},e.map(function(e){return React.createElement("li",{className:"topic"},React.createElement("a",{href:"new_review@from=gallery-topics-selection&click=create&topic_id="+e.topic.id,className:"comment_btn write_review",rel:"nofollow"},React.createElement("img",{src:window.write_icon}),React.createElement("span",null,window.join_label_text)),React.createElement("h2",{className:"topic_name"},e.topic.name),React.createElement("div",{className:"topic_meta"},e.topic.card_subtitle))})):React.createElement("div",null,"加载中"),React.createElement("a",{href:"new_review@from=gallery-topics-selection&click=skip",rel:"nofollow",className:"topics_skip"},React.createElement("span",null,"上面没有我想写的话题，去写影评 ＞ ")))}}]),t}(React.Component);$(function(){window.renderGalleryTopicsSelection=function(){var e=document.getElementById("gallery-topics-selection");ReactDOM.render(React.createElement(GalleryTopicsSelection,null),e)}});;
    })();
;
                var cur_sort = '';
                $('.review_filter a').on('click', function () {
                    var sort = $(this).data('sort');
                    if(sort === cur_sort) return;

                    if(sort === 'follow' && true){
                        window.location.href = '../../../https@www.douban.com/accounts/login@source=movie';
                        return;
                    }

                    if($('.review_filter').data('doing')) return;
                    $('.review_filter').data('doing', true);

                    cur_sort = sort;

                    $('.review_filter a').removeClass('cur');
                    $(this).addClass('cur');

                    $.getJSON('reviews', { sort: sort }, function(res){
                        $('.review-list').remove();
                        $('[href="reviews@sort=follow"]').parent().remove();
                        $('.reviews .review_filter').after(res.html);
                        $('.review_filter').data('doing', false);
                        $('.review_filter').removeData('doing');

                        if(res.count === 0){
                            $('.review-list').html('<span class="no-review">你关注的人还没写过长评</span>');
                        }
                    });
                });
            ;
        Do(function() {
            if (window.__init_review_list) return;
            __init_review_list = true;
                window.is_released = true
                window.txt_released = '该电影还未上映，不能投票噢'
            var _URL_LIBS = '../../../https@img3.doubanio.com/f/zerkalo/ae843e402115c5d933e23bd04c55523a1951bae6/js/review/editor/libs.js';
            var _URL_SETTING_JS = '../../../https@img3.doubanio.com/f/zerkalo/97f440e1da665c7aa2fc1aafdb29da5822fed144/js/review/editor/ng/setting_standalone.js';
            var _URL_SETTING_CSS = '../../../https@img3.doubanio.com/f/zerkalo/43e29c1661d06f69562f25ed0d887bb5a889d225/css/review/editor/ng/setting_standalone.css';
            var _REPORT_DIALOG_JS = '../../../https@img3.doubanio.com/f/shire/a14501790b4a2db257dc5be5e37d820e600703c6/js/report_dialog.js';
            var _REPORT_DIALOG_CSS = '../../../https@img3.doubanio.com/f/shire/b45aa277f8b8df40596b96582dafb1ed0a899a64/css/report_dialog.css';
            !function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=71)}({17:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(35),r=o(i);e.default=r.default},31:function(t,e,n){"use strict";t.exports=function(t){"complete"===document.readyState||"interactive"===document.readyState?t.call():document.attachEvent?document.attachEvent("onreadystatechange",function(){"interactive"===document.readyState&&t.call()}):document.addEventListener&&document.addEventListener("DOMContentLoaded",t)}},33:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){return t.addEventListener?(t.addEventListener(e,n,!1),{remove:function(){t.removeEventListener(e,n,!1)}}):t.attachEvent?(t.attachEvent("on"+e,n),{remove:function(){t.detachEvent("on"+e,n)}}):void 0}},34:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t){arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("undefined"!=typeof t&&null!=t){if(!(this instanceof i))return new i(t);var e=t.getAttribute("data-inited");e||(this.options={el:t,container:t.parentNode,prefetch:Boolean(t.getAttribute("prefetch")),previewUrl:t.getAttribute("src"),originUrl:t.getAttribute("data-original-url")},this._fetchUrl=this.options.originUrl,this.init())}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(33),a=o(r);i.prototype.prefetch=function(t){if(t&&this.options.prefetch){var e=document.createElement("link");e.rel="prefetch",e.href=t;var n=document.getElementsByTagName("link")[0];n.parentNode.insertBefore(e,n)}},i.prototype.play=function(){var t=this.options.el;t.src=this._fetchUrl,this._buttonPlay.style.display="none",this._buttonReload.style.display="none",this._loading.style.display="block"},i.prototype.reload=function(){this._buttonPlay.style.display="none",this._buttonReload.style.display="none",this._loading.style.display="block";var t=this.options.originUrl,e="_r="+Math.random();this._fetchUrl=t.indexOf("?")+1?t+"&"+e:t+"?"+e,this.play()},i.prototype.loaded=function(t){var e=this.options,t=e.el,n=e.container;t.src===this._fetchUrl&&(this._buttonPlay_click.remove(),this._buttonReload_click.remove(),this._img_load_error.remove(),this._img_load.remove(),n.removeChild(this._panel))},i.prototype.notFound=function(){var t=this.options,e=t.el,n=t.previewUrl;e.src=n,this._buttonPlay.style.display="none",this._buttonReload.style.display="block",this._loading.style.display="none"},i.prototype.init=function(){var t=this,e=this.options,n=e.el,o=e.container,i=(e.originUrl,this._panel=document.createElement("div")),r="image-gif-button-play",l="image-gif-loading",s="image-gif-button-reload";i.className="image-gif-panel",i.innerHTML='\n    <div class="image-gif-panel-inner">\n      <a href="javascript:;" class="'+r+'">GIF</a>\n      <a href="javascript:;" class="'+s+'" style="display: none">重新加载</a>\n      <span class="'+l+'" style="display: none;">加载中</span>\n    </div>\n  ',o.appendChild(i),this._buttonPlay=i.getElementsByClassName(r)[0],this._buttonReload=i.getElementsByClassName(s)[0],this._loading=i.getElementsByClassName(l)[0],this.prefetch(this._fetchUrl);var u=function(e){return function(n){n.preventDefault?n.preventDefault():n.returnValue=!1,e.call(t,n.target||n.srcElement,n.loaded?n.loaded/n.total:-1)}};this._buttonPlay_click=(0,a.default)(this._buttonPlay,"click",u(this.play)),this._buttonReload_click=(0,a.default)(this._buttonReload,"click",u(this.reload)),this._img_load=(0,a.default)(n,"load",u(this.loaded)),this._img_load_error=(0,a.default)(n,"error",u(this.notFound)),n.setAttribute("data-inited",!0)},e.default=i},35:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(){r=[];for(var t,e=document.querySelectorAll("img[data-render-type=gif]"),n=0;t=e[n];)r.push((0,c.default)(t)),n++;if("object"===("undefined"==typeof a?"undefined":l(a))&&"preloadNum"in a)for(var o=a.preloadNum;o--;)r[o]&&r[o].play()}Object.defineProperty(e,"__esModule",{value:!0});var r,a,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=n(31),u=o(s),d=n(34),c=o(d);e.default=function(t){a=t,(0,u.default)(i)}},67:function(t,e){},71:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(17),r=o(i);n(67),window._IMAGE_GIF_RENDER=r.default}});
            !function(){function t(t,e){return function(){var i=R[e],o=this;i&&clearTimeout(i),R[e]=setTimeout(function(){t.apply(o,arguments)},300)}}var e=8,i=window.dui||{},o="dui-dialog",n=[],s=null,h=!(!$.browser||!$.browser.msie||"6.0"!==$.browser.version),d=("ontouchstart"in window,{}),a={},c="j_close_dialog",l="dui-dialog",r="dui-dialog-close",u="dui-dialog-shd",f="dui-dialog-content",p="dui-dialog-iframe",m="dui-dialog-msk",g="确定",v="取消",b="提示",w="下载中，请稍候...",y='<div id="{ID}" class="'+l+' {CLS}" style="{CSS_ISHIDE}">                <span class="'+u+'"></span>                <div class="'+f+'">                    {BN_CLOSE}                    {TITLE}                    <div class="bd">{BODY}</div>                </div>            </div>',C='<a href="#" class="'+c+" "+r+'">X</a>',I='<div class="hd"><h3>{TITLE}</h3></div>',k='<iframe class="'+p+'"></iframe>',x='<div class="'+m+'"></div>',T={confirm:{text:g,method:function(t){t.close()}},cancel:{text:v,method:function(t){t.close()}}},S={url:"",nodeId:"",cls:"",content:"",title:b,width:0,height:0,visible:!1,modal:!1,iframe:!1,maxWidth:960,autoupdate:!1,cache:!0,buttons:[],callback:null,dataType:"text",isStick:!1,isHideClose:!1,isHideTitle:!1},H=function(t,e){var i,o={};for(i in e)e.hasOwnProperty(i)&&(o[i]=void 0===t[i]?e[i]:t[i]);return o},D=function(t){for(var e,i=t.elements,o=0,n=[],s={"select-one":function(t){return encodeURIComponent(t.name)+"="+encodeURIComponent(t.options[t.selectedIndex].value)},"select-multiple":function(t){for(var e,i=0,o=[];e=t.options[i++];)e.selected&&o.push(encodeURIComponent(t.name)+"="+encodeURIComponent(e.value));return o.join("&")},radio:function(t){if(t.checked)return encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)},checkbox:function(t){if(t.checked)return encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)}};e=i[o++];)s[e.type]?n.push(s[e.type](e)):n.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value));return n.join("&").replace(/\&{2,}/g,"&")},j=function(t){var e=t||{};this.config=H(e,S),this.init()};j.prototype={init:function(){if(this.config)return this.render(),this.bind(),this},render:function(t){var e=this.config,i=e.nodeId||o+n.length;n.push(i);var s=$("body"),h=s.find("."+m),d="object"==typeof e.content?$(e.content).html():e.content;return s.append(y.replace("{ID}",i).replace("{CSS_ISHIDE}",e.visible?"":"visibility:hidden;top:-999em;left:-999em;").replace("{CLS}",e.cls).replace("{TITLE}",I.replace("{TITLE}",e.title)).replace("{BN_CLOSE}",C).replace("{BODY}",d||t||"")),e.modal&&!h.length?(s.append(x),this.msk=$("."+m)):this.msk=h.eq(0),this.nodeId=i,this.node=$("#"+i),this.title=$(".hd",this.node),this.body=$(".bd",this.node),this.btnClose=$("."+r,this.node),this.shadow=$("."+u,this.node),this.iframe=$("."+p,this.node),this.set(e),this},bind:function(){var e=this;return h||$(window).bind({resize:t(function(){e.updatePosition()},"pos"),scroll:t(function(){e.updatePosition()},"pos")}),e.node.delegate("."+c,"click",function(t){e.close(),t.preventDefault()}),e.node.find("."+r).bind("click",function(t){e.close(),t.preventDefault()}),$("body").keypress(function(t){27===t.keyCode&&e.close()}),this},updateSize:function(){var t,i=this.node.width(),o=$(window).width(),n=$(window).height(),s=this.config;$(".bd",this.node).css({height:"auto","overflow-x":"visible","overflow-y":"visible"}),t=this.node.height();var h=2*e;return s.maxWidth=Math.min(s.maxWidth,o-h),i>s.maxWidth&&(i=s.maxWidth,this.node.css("width",i+"px")),t>n&&$(".bd",this.node).css({height:n-150+"px","overflow-x":"hidden","overflow-y":"auto"}),t=this.node.height(),this.shadow.width(i),this.shadow.height(t),this.iframe.width(i+h).height(t+h),this},updatePosition:function(){if(!this.config.isStick){var t=this.node.width(),i=this.node.height(),o=$(window),n=h?o.scrollTop():0;return this.node.css({left:Math.floor(o.width()/2-t/2)+"px",top:Math.floor(o.height()/2-i/2-e)+n+"px"}),this}},set:function(t){var e,i,o=this.nodeId,n=this.nodeId||n,s=[],h=this,c=function(t){return s.push(0),o+"-"+t+"-"+s.length};if(!t)return this;t.width&&(this.node.css("width",t.width+"px"),this.config.width=t.width),t.height&&(this.node.css("height",t.height+"px"),this.config.height=t.height),$.isArray(t.buttons)&&t.buttons[0]?(i=$(".ft",this.node),e=[],$(t.buttons).each(function(){var t=arguments[1],i=c("bn");"string"==typeof t&&(t=T[t]),t.text&&(t.href?e.push('<a class="'+(t.cls||"")+'" id="'+i+'" href="'+t.href+'">'+t.text+"</a> "):e.push('<span class="bn-flat '+(t.cls||"")+'"><input type="button" id="'+i+'" class="'+n+'-bn" value="'+t.text+'" /></span> '),a[i]=t.method)}),i[0]?i.html(e.join("")):i=this.body.parent().append('<div class="ft">'+e.join("")+"</div>"),this.footer=$(".ft",this.node),$(".ft input, .ft a",this.node).click(function(t){var e=this.id&&a[this.id];if(e)var i=e.call(this,h);i&&(t.preventDefault(),"string"==typeof i&&alert(i))})):(this.footer=$(".ft",this.node),this.footer.html("")),"undefined"!=typeof t.isHideClose&&(t.isHideClose?this.btnClose.hide():this.btnClose.show(),this.config.isHideClose=t.isHideClose),"undefined"!=typeof t.isHideTitle&&(t.isHideTitle?this.title.hide():this.title.show(),this.config.isHideTitle=t.isHideTitle),t.title&&(this.setTitle(t.title),this.config.title=t.title),"undefined"!=typeof t.iframe&&(t.iframe?this.iframe[0]?this.iframe.show():(this.node.prepend(k),this.iframe=$("."+p,this.node)):this.iframe.hide(),this.config.iframe=t.iframe),t.content&&(this.body.html("object"==typeof t.content?$(t.content).html():t.content),this.config.content=t.content),t.url&&(t.cache&&d[t.url]?("text"!==t.dataType&&t.dataType||this.setContent(d[t.url]),t.callback&&t.callback(d[t.url],this)):"json"===t.dataType?(this.setContent(w),this.footer&&this.footer.hide(),$.getJSON(t.url,function(e){h.footer.show(),d[t.url]=e,t.callback&&t.callback(e,h)})):(this.setContent(w),this.footer&&this.footer.hide(),$.ajax({url:t.url,dataType:t.dataType,success:function(e){d[t.url]=e,h.footer&&h.footer.show(),h.setContent(e),t.callback&&t.callback(e,h)}})));var l=t.position;return l&&this.node.css({left:l[0]+"px",top:l[1]+"px"}),"boolean"==typeof t.autoupdate&&(this.config.autoupdate=t.autoupdate),"boolean"==typeof t.isStick&&(t.isStick?this.node.css("position","absolute"):this.node.css("position","fixed"),this.config.isStick=t.isStick),this.update()},update:function(){return this.updateSize(),this.updatePosition(),this},setContent:function(t){return this.body.html(t),this.update()},setTitle:function(t){return $("h3",this.title).html(t),this},submit:function(t){var e=$("form",this.node);e.submit(function(e){e.preventDefault();var i=this.getAttribute("action",2),o=this.getAttribute("method")||"get",n=D(this);$[o.toLowerCase()](i,n,function(e){t&&t(e)},"json")}),e.submit()},open:function(){this.node.appendTo("body").css("visibility","visible").show();var t=this,e=this.config,i=t.body[0];return t.contentHeight=i.offsetHeight,this.watcher=e.autoupdate?setInterval(function(){i.offsetHeight!==t.contentHeight&&(t.update(),t.contentHeight=i.offsetHeight)},100):0,e.modal&&this.msk.show().css({height:$(document).height()}),this},close:function(){return this.node.hide(),this.msk.hide(),this.node.trigger("dialog:close",this),clearInterval(this.watcher),this}},i.Dialog=function(t,e){return!e&&s?t?s.set(t):s:s||e?new j(t):s=new j(t)},window.dui=i;var R={}}();
            "use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),visible=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window;_classCallCheck(this,e),this.container=t,this.containerHeight=t.innerHeight,this.eleList=[],this.lastVisibleEle=null,this.cbs=[],this.__start()}return _createClass(e,[{key:"__start",value:function(){var e=this;this.container.addEventListener("scroll",function(){e.__detect()}),this.container.addEventListener("resize",function(){e.containerHeight=e.container.innerHeight,e.__detect()})}},{key:"__detect",value:function(){var e=this;if(!this.eleList.length&&this.lastVisibleEle){if(null===this.lastVisibleEle)return;return this.cbs.forEach(function(t){return t(e.lastVisibleEle,null)}),void(this.lastVisibleEle=null)}var t=this.eleList.filter(function(t){var i=t.getBoundingClientRect();return i.top<e.containerHeight&&e.containerHeight<i.bottom});if(0===t.length){if(null===this.lastVisibleEle)return;this.cbs.forEach(function(t){return t(e.lastVisibleEle,null)}),this.lastVisibleEle=null}else{if(this.lastVisibleEle===t[0])return;this.cbs.forEach(function(i){return i(e.lastVisibleEle,t[0])}),this.lastVisibleEle=t[0]}}},{key:"onChange",value:function(e){this.cbs.push(e)}},{key:"add",value:function(e){this.eleList.push(e),this.__detect()}},{key:"remove",value:function(e){this.eleList.splice(this.eleList.indexOf(e),1),this.__detect()}}]),e}();Do.ready(function(){"_REVIEW_COPY_OPTIONS"in window||(_REVIEW_COPY_OPTIONS={targetNode:".review-content",handleCopy:function(e,t){var i=t.data();if(i&&i.original){var n=["版权归作者所有，任何形式转载请联系作者。","作者："+i.author+"（来自豆瓣）","来源："+i.url,"\n\n"].join("\r\n");return n+e}}},function(e){if("undefined"!=typeof e){var t=function(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().htmlText.replace(/<br>/gi,"\r\n"):""},i=function(e,t){if(e)try{if(e.setData("Text",t),e.getData("Text").length>0)return}catch(i){if(e.setData("text/plain",t),e.getData("text/plain").length>0)return}var i=$("<div>").css({position:"absolute",left:"-99999px"}).appendTo("body");i.html(t),window.getSelection().selectAllChildren(i[0]),window.setTimeout(function(){i.remove()},200)};$("body").delegate(e.targetNode,"copy cut",function(n){var o=t();if(!(o.length<=42)){var r=e.handleCopy&&e.handleCopy(o,$(this))||null;if(r){n.preventDefault();var s=n.originalEvent.clipboardData||window.clipboardData;i(s,r)}}})}}(window._REVIEW_COPY_OPTIONS))}),function(){function e(e,t,i){var n=$("#r-useful_count-"+t),o=$("#r-useless_count-"+t);n.text(0===e.useful_count?"":e.useful_count),o.text(0===e.useless_count?"":e.useless_count),"useful"===i?(n.prev().attr("src",window.usefuled_icon),o.prev().attr("src",window.useless_icon)):(n.prev().attr("src",window.useful_icon),o.prev().attr("src",window.uselessed_icon))}function t(e,t){$("#review_"+e+"_short").addClass("hidden"),$("#review_"+e+"_full").removeClass("hidden").addClass("loaded"),t&&$("#review_"+e+"_full_content").html(t),$(".review-item#"+e+".action .fold").removeClass("hidden"),l(document),s()}function i(e){$("#review_"+e+"_short").removeClass("hidden"),$("#review_"+e+"_full").addClass("hidden"),$("#"+e).get(0).scrollIntoViewIfNeeded(),$("#review_"+e+"_short").find(".unfold").text("展开"),$("#"+e).find(".action-placeholder").remove(),$("#"+e).find(".action").removeClass("fixed-action"),$("#"+e).find(".action .fold").addClass("hidden")}Element.prototype.scrollIntoViewIfNeeded||(Element.prototype.scrollIntoViewIfNeeded=function(e){e=0===arguments.length||!!e;var t=this.parentNode,i=window.getComputedStyle(t,null),n=parseInt(i.getPropertyValue("border-top-width")),o=parseInt(i.getPropertyValue("border-left-width")),r=this.offsetTop-t.offsetTop<t.scrollTop,s=this.offsetTop-t.offsetTop+this.clientHeight-n>t.scrollTop+t.clientHeight,l=this.offsetLeft-t.offsetLeft<t.scrollLeft,a=this.offsetLeft-t.offsetLeft+this.clientWidth-o>t.scrollLeft+t.clientWidth,c=r&&!s;(r||s)&&e&&(t.scrollTop=this.offsetTop-t.offsetTop-t.clientHeight/2-n+this.clientHeight/2),(l||a)&&e&&(t.scrollLeft=this.offsetLeft-t.offsetLeft-t.clientWidth/2-o+this.clientWidth/2),(r||s||l||a)&&!e&&this.scrollIntoView(c)});var n=new visible,o=window.is_released,r=window.txt_released||"";n.onChange(function(e,t){if(e&&($(e).find(".action").removeClass("fixed-action").css({width:"auto",left:"auto"}),$(e).find(".action-placeholder").remove()),t){$(t).append('<div class="action-placeholder" style="height: 46px;"></div>');var i=$(t).find(".action");i.addClass("fixed-action"),i.css({width:$(t).width()+"px",left:t.getBoundingClientRect().left+"px"})}});var s=function(){return"_IMAGE_GIF_RENDER"in window&&setTimeout(function(){return window._IMAGE_GIF_RENDER()},300)},l=function(){for(var e={useful_count:["有用","/j/review/{REVIEW_ID}/useful"],useless_count:["没用","/j/review/{REVIEW_ID}/useless"],spoiler:["剧透提醒已提交，谢谢","/j/review/{REVIEW_ID}/spoiler"]},t=/disabled/,i=/(\w+_count)/,n=/spoiler/,o=get_cookie("ck"),r=document.querySelectorAll(".main-panel-useful"),s=null,l="",a=function(e){return e&&"true"===e.getAttribute("data-is_owner")},c=function(e){return e&&"true"===e.getAttribute("data-can_vote")},d=function(r){if(o){r.stopPropagation();var s=r.target,d=s.className,h=d.match(i)||d.match(n),v="",w="",_="";if(!d.match(t)){if(h){if(a(r.currentTarget))return alert("不能给自己投票噢");if(!c(r.currentTarget)){var g=r.currentTarget.getAttribute("data-is_tv")?"该剧尚未播出，不能投票噢":"该电影还未上映，不能投票噢";return alert(g)}v=h[0],_=e[v][0],w=e[v][1],l=r.currentTarget.getAttribute("data-rid"),w=w.replace("{REVIEW_ID}",l)}else if(!h||!l)return;var p=$.post(w,{ck:o},function(e){if(0==e.r){if("spoiler"===v)return u();f(e,v)}});p.fail(function(){alert("网络错误")}).always(function(){})}}},u=function(t){var i=document.getElementById(l),n=i.querySelector(".spoiler");n.innerText=e.spoiler[0],n.className=n.className.replace("not-reported","disabled")},f=function(i,n){var o=document.getElementById(l);for(var r in e)if(void 0!==i[r]){var s=e[r][0]+" "+i[r],a=o.querySelector("."+r),c=a.className;(r===n||r!==n&&c.match(t))&&a.classList.toggle("disabled"),a.innerHTML=s}},h=r.length,v=0;v<h;v++)s=r[v],s&&s.addEventListener("click",d,!1)};$("body").delegate(".review-item .action .up","click",function(){if(window._USER_ABNORMAL)return void(show_abnormal&&show_abnormal());var t=$(this).data("rid");return!o&&r?void alert(r):void $.post("../../j/review/"+t+"/useful",{ck:get_cookie("ck")},function(i){e(i,t,"useful")})}),$("body").delegate(".review-item .action .down","click",function(){if(window._USER_ABNORMAL)return void(show_abnormal&&show_abnormal());var t=$(this).data("rid");return!o&&r?void alert(r):void $.post("../../j/review/"+t+"/useless",{ck:get_cookie("ck")},function(i){e(i,t,"useless")})}),$("body").delegate(".review-short","click",function(){var e=this,i=$(this).data("rid");return $(this).data("loaded")?(t(i),void n.add($(this).closest(".review-item").get(0))):void($(this).data("loading")||($(this).data("loading",!0),$(this).find(".unfold").text("加载中..."),$.getJSON("../../j/review/"+i+"/full",{},function(o){t(i,o.body),$(e).data("loading",!1).data("loaded",!0),n.add($(e).closest(".review-item").get(0)),$(e).closest(".review-item").find(".action-btn.up img").attr("src",o.votes.is_useful?window.usefuled_icon:window.useful_icon),$(e).closest(".review-item").find(".action-btn.down img").attr("src",o.votes.is_useless?window.uselessed_icon:window.useless_icon)})))}),$("body").delegate(".action .fold","click",function(){var e=$(this).closest(".review-item").find(".review-short").data("rid");i(e)}),$("body").delegate("a.report","click",function(){var e=$(this).siblings(".review-content").data("url");generate_report_dialog({report_url:e,type:["subject"]})})}();
        });

        window.useful_icon = "../../../https@img3.doubanio.com/f/zerkalo/536fd337139250b5fb3cf9e79cb65c6193f8b20b/pics/up.png";
        window.usefuled_icon = "../../../https@img3.doubanio.com/f/zerkalo/635290bb14771c97270037be21ad50514d57acc3/pics/up-full.png";
        window.useless_icon = "../../../https@img3.doubanio.com/f/zerkalo/68849027911140623cf338c9845893c4566db851/pics/down.png";
        window.uselessed_icon = "../../../https@img3.doubanio.com/f/zerkalo/23cee7343568ca814238f5ef18bf8aadbe959df2/pics/down-full.png";
    