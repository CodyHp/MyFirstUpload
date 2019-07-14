$(function() {
	$("form[name='form1']").submit(function(){
			return write();
		});
	});
	function write(){
		var text=$("form textarea[name=text]").val();
		var userId="niexuan";	
			$.ajax({
				url:"/userCenter/updateIntro/"+text,
				type:"post",
				data:{
					  "userId":userId,
					  "selfIntroduction":text  
					 },
				dataType:"json",
				success:function(result){
					if(result.status==200){
						alert("添加成功")					
					}else{
						alert(result.message);
					}
				},
				error:function(){
					alert("请求失败！");
				}
			});

	}