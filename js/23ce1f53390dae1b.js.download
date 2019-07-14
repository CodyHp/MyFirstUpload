
    Douban.init_edit_signature = function(o){
        var disp = $('#display',o), form = $('form',o)[0], a = $('a','#edi');
        var error = $('#error', o);
        var show = function(t){
            if(t != undefined){
                disp.text(t);
                if (disp.text() == ''){
                    a.text('添加签名档').addClass('sign-text');
                }else{
                    a.text('编辑').removeClass('sign-text');
                };
            }
            disp.show();
            $(form).hide();
            $('#edi').show();
        }
        show(disp.text());
        if(form.name) $(form).set_len_limit(form.name);
        $(form).submit(function(){
            remote_submit_json(form, function(r){
                if (r.r == '0') {
                    show(r.signature);
                    error.css('display', 'none');
                    disp.css('font-style', 'normal');
                } else {
                    error.text(r.error);
                    error.css('display', 'inline');
                    $('input', 'form').attr('disabled', 0);
                    $(form).css('display', 'inline');
                    $(':input:first', o).focus();
                }
            })
            return false;
        })
        $('.cancel',form).click(function(){
            show();
            error.css('display', 'none');
        });
        $('#edi',o).click(function(){
            if(window._USER_ABNORMAL) {
                window.show_abnormal && window.show_abnormal()
                return
            }
            $('#display,#edi').hide();
            $('input', 'form').attr('disabled', 0);
            $(form).css('display', 'inline');
            $(':input:first', o).focus();
            return false;
        })
    }
;

    

    function show_doulist_remind(){
        var html = "             <div id='doulist-new-function-remind'>                 <div class='title'>你“喜欢”过的在这里</div>                 <div class='desc'>“喜欢”过的内容在“我的收藏”豆列中可以找到</div>                 <button onclick='close_doulist_remind()'>我知道了</button>             </div>         ";
        var dom = document.createElement('DIV');
        dom.innerHTML = html;
        dom = dom.firstElementChild;
        var root = document.getElementById('usr-profile-nav-doulists');
        root = root && root.parentElement;
        if(!root) return;
        root.style.position = "relative";
        root.appendChild(dom);
    }

    function close_doulist_remind(){
        var ele = document.getElementById('doulist-new-function-remind');
        if(!ele) return;
        ele.remove();
        console.log("CALL")
    }

    ;(function(){
        if(
            (localStorage && localStorage.getItem('douban-profile-remind')) ||
            (get_cookie && get_cookie('douban-profile-remind'))
        ) return;
        show_doulist_remind();
        localStorage && localStorage.setItem('douban-profile-remind', '1')
        set_cookie && set_cookie({'douban-profile-remind': 1}, 36500, 'douban.com', '/')
    })();


Do(function() {
    if ($('#remarkMod').length) {
        var $display = $('#remarkDisplay'),
            $editBtn = $('#editRemark'),
            $form = $editBtn.next(),
            $error = $('#remarkError');
        function showResult() {
            $editBtn.show();
            $display.show();
            $form.hide();
            $error.hide();
            updateRemarkBtn();
        }
        function showForm() {
            $editBtn.hide();
            $display.hide();
            $form.css('display', 'inline');
        }
        function showError(tip) {
            $error.text(tip).show();
        }
        function updateRemarkBtn() {
            if ($.trim($display.text()).length) {
                $editBtn.text('编辑');
            } else {
                $editBtn.text('添加备注');
            }
        }

        updateRemarkBtn();

        $editBtn.click(function() {
            showForm();
        });
        $form.submit(function(e) {
            e.preventDefault();
            var url = '/j/contact/remark',
                people = $form.find('.people').val(),
                remark = $form.find('#remarkInput').val();
            remark = $.trim(remark);
            $.postJSON_withck(url, {
                    'people': people,
                    'remark': remark
                }, function(o) {
                    if (o.result === true) {
                        if (!o.msg.length) {
                            $display.text('');
                        } else {
                            $display.text('（备注：' +o.msg+ '）');
                        }
                        showResult();
                    } else {
                        showError(o.msg);
                    }
                }
            )
        });
        $form.find('.cancel').click(function() {
            showResult();
        });
    }
});

;
  Do(function(){var a=['<div class="popup-container hide">','<div class="popup-wrap">','<div class="popup-small">','<a class="close"></a>','<p class="popup-info">为确保你的帐户安全，并依《网络安全法》要求，<br/>操作前请先验证手机号。</p>','<div class="popup-btns">',' <a class="btn" href="javascript:;" target="_blank">前往验证</a>',"</div>","</div>","</div>","</div>"].join("");$("body").delegate(".js-verify-account","click",function(e){var t=$(this),i=t;if(window._USER_ABNORMAL)return e.preventDefault(),void(window.show_abnormal&&window.show_abnormal());var o=$(".popup-container"),r=i.attr("data-is-verified"),n=i.attr("data-verify-url");r&&"false"!=r.toLowerCase()?i.attr("href")&&i.attr("href").length&&(location.href=i.attr("href")):(e.preventDefault(),o.size()<1&&($("body").append(a),o=$(".popup-container")),o.find(".btn").attr("href",n),o.removeClass("hide"))}).delegate(".popup-container .close","click",function(){$(".popup-container").addClass("hide")})});
