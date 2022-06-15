import axios from "axios";
//   aixos拦截器的总结：
//  分为：请求拦截器    响应拦截器
//  请求拦截器是在请求服务接口之前调用
//  请求拦截器是在.then()方法执行之前调用

//  请求拦截器通常可以用来设置请求头，实现授权登录的功能
//  响应拦截器通常可以用来做一些未登录时的统一操作
//添加请求拦截器 请求拦截器是你在 请求服务之前做的事情
axios.interceptors.request.use(function(config){
    // 在发送请求之前做些什么
    // console.log(config);
    config.headers.authorization = sessionStorage.getItem('token')
    return config;
},function(error){
    // 对请求错误做些什么
    return Promise.reject(error)
})

//添加响应拦截器
axios.interceptors.response.use(function(response){
    //结论： 只要你调用接口，接口返回数据时，就会走到我这个响应拦截器中；
    // console.log(response);
    if (response.data.status==401) {
        window.location.href='/'
    }
    return response;
},function(error){
    return Promise.reject(error)
}
)
//总结：
//  axios的响应拦截器
//  是用来做接口数据拦截的
//  一般情况下，可以用来拦截用户是否登录；
//  如果没有登录，就直接不让进入接口
// 响应拦截器实在接口返回数据后，进入的响应拦截器


/**
 * @description 将token放到headers中的authorization
 */
const postConfig =  {

            headers: {
                authorization: sessionStorage.getItem('token')
            }
        
    }


    /**
     * @description 获取用户信息
     * @param  playod <boject>
     */
export const getUesrInfoApi = function(playod = {}) {
        return axios.post('/api/user/info', playod, postConfig)
    }
    /**
     * @description 修改用户信息
     * @param  playod <boject>
     */
export const updateUesrInfoApi = function(playod = {}) {
        return axios.post('/api/user/update', playod, postConfig)
    }
    /**
     * @description 获取验证码
     */
export const getCapchaApi = function() {
        return `/api/captcha?` + Math.random();
    }
    /**
     * @description 登录接口
     * @param playod 
     * @param playod.username
     * @param playod.password
     * @param playod.captcha
     */
export const loginApi = function(playod = {}) {
        return axios.post('/api/user/login', playod)
    }
    /**
     * @description 注册接口
     * @param playod 
     * @param playod.username
     * @param playod.password
     * @param playod.email
     * @param playod.phone
     * @param playod.captcha
     */
export const registerApi = function(playod = {}) {
        return axios.post('/api/user/register', playod)
    }
    /**
     * @description 退出登录接口
     * @param  playod 
     */
export const logOutApi = function(playod = {}) {
    return axios.post('/api/user/logout', playod,postConfig)
}
export const questionApi = function(playod = {}) {
    return axios.post('/api/question/list', playod,postConfig)
}
export const deleteQuestionApi = function(playod = {}) {
    return axios.post('/api/question/delete', playod,postConfig)
}
export const updateQuestionApi = function(playod = {}) {
    return axios.post('/api/question/update', playod,postConfig)
}
export const createQuestionApi = function(playod = {}) {
    return axios.post('/api/question/create', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 创建任务
 */
export const createTaskApi = function(playod = {}) {
    return axios.post('/api/task/create', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 编辑任务
 */
export const updateTaskApi = function(playod = {}) {
    return axios.post('/api/task/update', playod,postConfig)
}

/**
 * 
 * @param {} playod 
 * 查询任务列表
 */
 export const queryTaskApi = function(playod = {}) {
    return axios.post('/api/task/list', playod,postConfig)
}

/**
 * 
 * @param {} playod 
 * 发布任务
 */
 export const publishTaskApi = function(playod = {}) {
    return axios.post('/api/task/release', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 任务详情
 */
 export const taskDetailsApi = function(playod = {}) {
    return axios.post('/api/task/detail', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 查询记事簿
 */
export const queryNotepadApi = function(playod = {}) {
    return axios.post('/api/diary/list', playod,postConfig)
}


/**
 * 
 * @param {} playod 
 * 查询用户信息列表
 */
export const queryUserListApi = function(playod = {}) {
    return axios.post('/api/user/list', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 查询分组信息列表
 */
export const queryRuleGroupListApi = function(playod = {}) {
    return axios.post('/api/roleGroup/list', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 查询角色信息列表
 */
export const queryRuleListApi = function(playod = {}) {
    return axios.post('/api/role/list', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 创建角色
 */
export const createRuleApi = function(playod = {}) {
    return axios.post('/api/role/create', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 创建分组
 */
export const createRuleGroupApi = function(playod = {}) {
    return axios.post('/api/roleGroup/create', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 获取评论
 */
export const commentListApi = function(playod = {}) {
    return axios.post('/api/comment/list', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 创建评论
 */
export const createCommentApi = function(playod = {}) {
    return axios.post('/api/comment/create', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 查询权限无限级联
 */
export const getPermissionApi = function(playod = {}) {
    return axios.post('/api/permission/list', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 创建权限
 */
export const createdPermissionApi = function(playod = {}) {
    return axios.post('/api/permission/create', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 删除权限
 */
export const deletePermissionApi = function(playod = {}) {
    return axios.post('/api/permission/delete', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 修改权限
 */
export const updatePermissionApi = function(playod = {}) {
    return axios.post('/api/permission/update', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 获取功能权限列表 
 */
export const getRolepermissionApi = function(playod = {}) {
    return axios.post('/api/rolepermission/list', playod,postConfig)
}
/**
 * 
 * @param {} playod 
 * 创建功能权限
 */
export const createRolepermissionApi = function(playod = {}) {
    return axios.post('/api/rolepermission/create', playod,postConfig)
}