// 用来进行文章的接口处理操作
var article = {
    getCate: function (options) {
        // 设置getCate方法，用来进行分类信息获取接口操作
        $.ajax({
            url: GET_CATE,
            success: function (res) {
                // 1.1 检测响应是否成功
                if (res.code === 200) {
                    options.success(res);
                }
            }
        });
    }













}