// 与用户操作有关的请求
var user = {
    // 设置login方法,用来进行登录请求操作
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGIN,//将地址进行特殊处理,方便后期维护,并且避免修改
            data: {
                user_name: options.data.username,
                password: options.data.password
            },
            success: function (res) {
                if (res.code === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    },


    // 设置logout方法,用来进行退出请求操作
    login: function (options) {
        $.ajax({
            type: 'post',
            url: LOGOUT,
            success: function (res) {
                if (res === 200) {
                    options.success();
                } else {
                    options.fail();
                }
            }
        })
    }
}