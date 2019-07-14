
    /* 图片大小判定 */
    function validate(a) {
        var file = a.value;
        if (!/.(gif|jpg|jpeg|png|GIF|JPG|png)$/.test(file)) {
            alert("图片类型必须是.gif,jpeg,jpg,png中的一种");
            return;
        } else {
            var image = new Image();
            image.src = file;
            var height = image.height;
            var width = image.width;
            var filesize = image.filesize;
            /*alert(height+"x.."+width);*/
            if (width != 300 && height != 300 && filesize > 32768) {
                alert('请上传300*300像素 或者大小32k的图片');
                return;
            }
        }


    }

    /* 本地上传 */
    function getFileUrl(sourceId) {
        var url;
        if (navigator.userAgent.indexOf("MSIE") >= 1) { // IE
            url = document.getElementById(sourceId).value;
        } else if (navigator.userAgent.indexOf("Firefox") > 0) { // Firefox
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        } else if (navigator.userAgent.indexOf("Chrome") > 0) { // Chrome
            url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
        }
        return url;
    }

    function preImg(sourceId, targetId) {
        var url = getFileUrl(sourceId);
        var imgPre = document.getElementById(targetId);
        imgPre.src = url;
    }

    $("#imgOne").change(function () {
        var formData = new FormData();
        formData.append("pic", document.getElementById("imgOne").files[0]);
        $.ajax({
            type: "POST", // 数据提交类型
            url: "http://www.doujiao.com/userCenter/uploadImg", // 发送地址
            data: formData, //发送数据
            async: true, // 是否异步
            processData: false, //processData 默认为false，当设置为true的时候,jquery ajax 提交的时候不会序列化 data，而是直接使用data
            contentType: false, //
            success:function (data) {
                if(data.error==0){
                    alert(data.error);
                    alert(data.url);
                    document.getElementById("imgInput").value=data.url;
                    document.getElementById("photo").src=data.url;
                }
            }
        });
    });

