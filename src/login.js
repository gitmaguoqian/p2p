$(function () {
  
    $('#login-form')
    .bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '用户名长度必须在6到18位之间'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_]+$/,
                        message: '用户名只能包含大写、小写、数字和下划线'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 18,
                        message: '密码长度必须在6到18位之间'
                    },
                }
            },
            vcode: {
                validators: {
                    callback: {
                        message: '验证码错误',
                        callback: function(value, validator) {
                            // var items = $('#captchaOperation').html().split(' '), sum = parseInt(items[0]) + parseInt(items[2]);
                            // return value == sum;
                            //1,获取全局
                            var currentVCode=window.vcode;
                             console.log(vcode);
                            
                            //2，获取输入
                            var inputVcode=value;
                            // var inputVcode=$('#vcode').val();
                            //  debugger;

                            //3,比较和返回
                            return currentVCode===inputVcode;
                        }
                    }
                }
            }
        }
    })

    // ajax提交（添加事件监听）
    .on('success.form.bv', function(e) {
        
        // 1，阻止表单提交
         e.preventDefault();

        // 收集表单数据
        // var $form = $(e.target);
        // $form.find('#username');
        var username=$('#username').val();
        var password=$('#password').val();

        // 获取BootstrapValidator实例
        // var bv = $form.data('bootstrapValidator');

        // 使用Ajax发送表单数据
        // $.post($form.attr('action'), $form.serialize(), function(result) {
        //     console.log(result);
        // }, 'json');
        // $.post('http://192.168.43.204/login.php',{
        //     username:username,//用户名
        //     password:password //密码
        // },function(result){
        //     console.log(result);
        //     // debugger;
        // },'json');

        // 三、 ajax请求
        $.ajax({
			type: 'post',
            url: 'http://192.168.43.204/login.php',
            data:{
                username:username,//用户名
                password:password //密码
            },
			xhrFields: {
				withCredentials: true//
			},
			crossDomain: true,
			success(res){
                // console.log(res)
                if(res.success){ // 成功
                    // 登录成功，再次从session中去获取用户信息
                    // getUserSession();
                    $.ajax({
                        type: 'get',
                        url: 'http://192.168.43.204/getUserSession.php',
                        xhrFields: {
                            withCredentials: true
                        },
                        crossDomain: true,
                        success(res){
                            var loginUser = res;
                            // console.log(res)
                            if(loginUser){ // 登录成功
                                $('.topLink>ul').html(`
                                    <li class="hello"><a href="http://192.168.43.204/loginout.php">注销！</a></li>
                                    <li><a href="#/login">${loginUser}</a></li>
                                    <li><a href="#/register">快速注册</a></li>
                                    <li><a href="#/borrow_info">新手引导</a></li>
                                    <li><a href="#/realAuth">帮助中心</a></li>
                                `);
                            }else{ // 未登录
                                $('.topLink>ul').html(`
                                    <li class="hello"><a href="#">您好！欢迎来到宜人贷！</a></li>
                                    <li><a href="#/login">登录</a></li>
                                    <!-- <li><a href="">|</a></li> -->
                                    <li><a href="#/register">快速注册</a></li>
                                    <!-- <li><a href="">|</a></li> -->
                                    <li><a href="#/borrow_info">新手引导</a></li>
                                    <!-- <li><a href="">|</a></li> -->
                                    <li><a href="#/realAuth">帮助中心</a></li>
                                `);
                            }

                            location.href="#/"; // 跳转到首页
                        }
                    })

                   

                }else{// 失败
                    alert(res.message);
                }
            }
            
		});

    });
});