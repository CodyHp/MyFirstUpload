 window.onload=function(){
			  
			  $.ajax({
			      url : "http://www.doujiao.com/movies/query" ,
			      dataType : "json",
			      type : "GET",
			      success : function(data){
			          	   
			                  if(data!=null){
			  						
			  						 $.each(data,function(index,movie){
			  							  var movieId=movie.movieId;
			  							  var movieName=movie.movieName;
			  							  var movieImage=movie.movieImage;
			  							  var movieScore=movie.movieScore;
			  							 		 
										//$("#screening-bd").append("<div class=\"\"> <img src=\"C:\Users\TEDU\Desktop\187.jpg\"/></div>")
										$(".ui-slide-content").append(	"<li class=\"ui-slide-item\" ><ul class=\"\"><li class=\"poster\"><a onclick=\"moreurl(this, {from:'mv_a_pst'})\" href=\"www.doujiao.com/movie_info.html?movieId=\"+"+movieId+"><img src=\""+movieImage+"\" alt=\""+movieName+"\" rel=\"nofollow\" class=\"\" /></a></li><li class=\"title\"><a onclick=\"moreurl(this, {from:'mv_a_tl'})\" href=\"www.doujiao.com/movie_info.html?movieId=\"+"+movieId+" class=\"\">"+movieName+"</a></li><li class=\"rating\"><span class=\"rating-star allstar40\"></span><span class=\"subject-rate\">"+movieScore+"</span></li><li class=\"ticket_btn\"></li></ul>"
																	//" <li class=\"ui-slide-content\"> <a onclick=\"moreurl(this, {from:'mv_a_pst'})\" href=\"www.doujiao.com/movie_info.html?movieId=\"+"+movieId+"><img src=\""+movieImage+"\" alt=\""+movieName+"\" rel=\"nofollow\" class=\"\" /> </a> </li> <li class=\"title\"> <a onclick=\"moreurl(this, {from:'mv_a_tl'})\"href=\"www.doujiao.com/movie_info.html?movieId=\"+"+movieId+" class=\"\">"+movieName+"</a> </li><li class=\"rating\"><span class=\"rating-star allstar35\"></span><span class=\"subject-rate\">"+movieScore+"</span></li> "
																	
															);	
															
										 
			  						 })
									 
									 alert("执行完毕了")
									 
			           }
			                 else{
			                      alert("失败");
			                  }
			      },
			  		   error:function () {
			  		        alert("发送失败");
			  		    }
			  });
			  
			  //名字回显
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
			  
			  //当dataType类型为jsonp时，jQuery就会自动在请求链接上增加一个callback的参数
			  $.ajax({
			      url : "/user/query/" + _ticket,
			      dataType : "json",
			      type : "GET",
			      success : function(data){
			           alert("好啊");
			          if(data.status == 200){
			              var _data = JSON.parse(data.data);//jackson
			              var html ="<a href=\"center.html\"><font color="+"white"+">"+_data.userName+"</font></a>"+" <a href=\"javascript:void(0)\" class=\"link-logout\" onclick='logout()'>[退出]</a>";
			              userId=_data.userId;
			              $(".top-nav-info").html(html);
			          }
			  
			      },
			      error : function(){
			          alert('index error.');
			      }
			  });
		  }
	 
	 //  $.ajax({
	 //     url : "http://www.doujiao.com/queryMovie/query" ,
	 //     dataType : "json",
	 //     type : "GET",
	 //     success : function(data){
	 //         	   alert("我执行了只是没数据而已")
	 //                 if(data!=null){
		// 				 alert("我也执行了")
		// 				 $.each(data,function(index,movie){
		// 					 var movieId=movie.movieId;
		// 					 var movieName=movie.movieName;
		// 					 var movieImage=movie.movieImage;
		// 					 var movieScore=movie.movieScore;
		// 					 alert(movieId);
		// 					 alert(movieName);
		// 					 alert(movieImage)
		// 					 alert(movieScore)
		// 					 $("#top-nav-appintro").append(
		// 						"<ul class=\"ui-slide-content\" data-slide-index=\"1\" data-index-max="13">   
		// 								<li class="poster">
		// 								    <a onclick="moreurl(this, {from:'mv_a_pst'})" href="www.doujiao.com/movie_info.html?movieId="+movieId>
		// 								        <img src='"movieImage"' alt='"movieName"' rel="nofollow" class="" />
		// 								    </a>
		// 								</li>
		// 								<li class="title">
		// 								    <a onclick="moreurl(this, {from:'mv_a_tl'})" href="www.doujiao.com/movie_info.html?movieId="+movieId class=""></a>
		// 								</li>
		// 						  </ul>"		           							           
		// 					 );	
		// 				 })
	 //              
	 //                else{
	 //                     alert("失败");
	 //                 }
	 //     },
		//    error:function () {
		//         alert("发送失败");
		//     }
	 // });
		
   //          }
			// }
			// 