	window.onload=function(){
	    var userId="";
	    var _ticket = getCookie("DJ_TICKET");
		
		function getCookie(cookie_name){
			var allcookies = document.cookie;
			var cookie_pos = allcookies.indexOf(cookie_name);
			 
			if (cookie_pos != -1){
				cookie_pos += cookie_name.length + 1; 
				var cookie_end = allcookies.indexOf(";", cookie_pos);
				if (cookie_end == -1){
					cookie_end = allcookies.length;
				}
				var value = unescape(allcookies.substring(cookie_pos, cookie_end)); 
			}
			return value;
		}  
		 alert(_ticket);
	    if(!_ticket){
	        return ;
	    }
		//ert("xixi");
        //当dataType类型为jsonp时，jQuery就会自动在请求链接上增加一个callback的参数
        $.ajax({
            url : "http://www.doujiao.com/user/query/" + _ticket,
            dataType : "json",
            type : "GET",
            success : function(data){
                alert("好啊");
                if(data.status == 200){
                    var _data = JSON.parse(data.data);//jackson
					userId =_data.userId;
					alert(_data.userName);
					alert(_data.userAddress);
                    var html01 ="<span>"+_data.userName+"的帐号</span><span class=\"arrow\"></span>";
					$(".bn-more").html(html01);
					var html02 =_data.userName;
					$(".info_userName").html(html02);
					var html03 = _data.userName + "，这里是你的主页，用来展示你的生活和发现，也是别人认识你的地方。<br>完善你的个人资料，开始全新的豆瓣之旅吧。"
                    $(".guide").html(html03);
					var html04 = "常居:&nbsp;<a href=#>"+_data.userAddress+"</a><br><div class=\"pl\">"+userId+"<br>"+_data.registDate+"加入</div>";
					$(".basic-info").html(html04);
					var html05 =  "<img src=\""+_data.userHeadImage +"\" class=\"userface\" >";
					$("#head_picture").html(html05);
					var html06 = "<img src=\""+_data.userHeadImage +"\">";
					$(".pic").html(html06);
                }

            },
            error : function(){
                alert('index error.');
            }
        });
    }