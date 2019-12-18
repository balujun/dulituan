
var BASE_URL = 'http://localhost:8000';


// 后续的接口地址都基于基地址拼接即可
var LOGIN = BASE_URL + '/admin/login'; //登录接口
var LOGOUT = BASE_URL + '/admin/logout';//退出接口
var GET_USER = BASE_URL + '/admin/getUser';//用户基本信息接口


var GET_CATE = BASE_URL + '/admin/category_search'; // 分类信息获取接口
var DEL_CATE = BASE_URL + '/admin/category_delete'; // 分类信息删除接口