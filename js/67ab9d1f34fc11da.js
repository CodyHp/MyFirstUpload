
        Do(function(){
            // 防止页面没加载完的时候，点击 tab 的切换
            $('#cinemas-section .tab-hd a').bind('click', function(e){
                e.preventDefault();
            })
        });

        Do.ready(
        '../../../../https@img3.doubanio.com/f/shire/45dbd19d76e2601d4b8ac605bf7f1fefc4f34d10/js/lib/jquery.tmpl.min.js',
        '../../../../https@img3.doubanio.com/f/epstein/4db11850d18304c5ffa21d9d8cde8aa433fa128c/js/movie/subject_detail_tip.js',
        '../../../../https@img3.doubanio.com/f/epstein/2796f81f0ac4cc7bcd75368ab12a341ed81449b4/js/movie/hot_cities.js',
        '../../../../https@img3.doubanio.com/f/shire/383a6e43f2108dc69e3ff2681bc4dc6c72a5ffb0/js/ui/dialog.js',
        '../../../../https@img3.doubanio.com/f/epstein/e3e4c0d1b9ccf095c0e6704bf08f3cef62e8b254/js/movie/pop_ticket.js',
        function(){
            var city = '108288',
                cityName = '北京';

            $('.poster img').subjectTip('.list-item');

            var hot = new HotCities({'trigger': '.change-loc'});
            hot.init();

            function _popTicket(event) {
                event.preventDefault();

                var $this = $(this),
                    $list = $this.parents('.list-item'),
                    $chart = $this.parents('.chart-item'),
                    $data = $list.length? $list: $chart,
                    subject = $data.data('subject'),
                    _title = '《' + $data.data('title')  + '》',
                    title = $this.hasClass('ticket-btn')? _title + '选座购票': _title + '查影讯',
                    source = $data.data('category') + '_' + $this.data('source'),
                    data = {
                        title: title,
                        subject: subject,
                        city: city,
                        cityName: cityName,
                        source: source
                    };

                if ($data.data('category') === 'upcoming' && !$this.hasClass('ticket-btn')) {
                    data.title = _title + '影片详情';
                }

                popTicket(data);
            }

            $('body')
                .delegate('#change-location', 'click', function(e) {
                    var pop = top.frames['ticket-popup'],
                        $citiesList = pop.$('#cities-list');

                    $citiesList.toggle();
                })
                .delegate('.ticket-popup .dui-dialog-close', 'click', function(e) {
                    var newCity = $('#change-location').data('changeto'),
                        oldCity = $('#location').data('uid');

                    if (newCity && newCity !== oldCity) {
                        window.location.href = '../' + newCity;
                    }
                })
                .delegate('.more', 'click', function(e) {
                    $.get('../../../blank@from=mov_ticket_index_page_playing_more');
                    $('#nowplaying .hidden').removeClass('hidden');
                    $(this).remove();
                });
        });
    