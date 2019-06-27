$(function () {
    $('#myForm')
        .bootstrapValidator({
        // 全局信息提示
        message: 'This value is not valid',
        // 反馈的图标
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',//正确提示
            invalid: 'glyphicon glyphicon-remove',//错误提示
            validating: 'glyphicon glyphicon-refresh'//加载中 
        },
        fields: {
            user: {
                message: '用户名验证失败',//统一错误
                // 验证规则
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
            pwd: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 20,
                        message: '密码长度必须在6到20位之间'
                    },
                    regexp: {
                        regexp: /^(\w){6,20}$/,
                        message: '只能输入6-20个字母、数字、下划线'
                    }
                    
                }
            },
            repwd: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'pwd',
                        message: '两次输入密码不一致'
                    },
                    different: {
                        field: 'user',
                        message: '密码不能与用户名相同'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    emailAddress: {
                        message: '邮箱地址格式有误'
                    }
                }
            },
            tel: {
                validators: {
                    notEmpty: {
                        message: '电话不能为空'
                    },
                    regexp: {
                        regexp: /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/,
                        message: '请输入正确手机号码！'
                    }
                    
                }
            }
        },
        submitHandler: function (validator, form, submitButton) {
            alert("submit");
        }
    })
        .on('success.form.bv',function (e) {
            // 重要：阻止表单提交
            e.preventDefault();

            // 获取表单实例,以便获取表单内容值
            // var $form = $(e.target);
            var user = $('#user').val();
            var pwd = $('#pwd').val();

            // 发动ajax的post请求
            // $.post($form.attr('action'), $form.serialize(), function(result) {
            //     console.log(result);
            // }, 'json');
            $.post('http://192.168.43.204/register.php', {
                user: user, // 用户名信息
                pwd: pwd  // 密码信息
            }, function(result) {
                // console.log(result);
                // 条件判断
                if (result.success) {
                    // 弹出信息 并跳转到登录
                    alert(result.message);
                    location.href="/#/login";
                } else {
                    alert(result.message);
                }
            }, 'json');
        })

});