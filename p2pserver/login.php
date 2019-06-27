<?php
    //  设置响应头
    header('Content-Type:text/html;charset=utf-8');
    // 后端开启跨域访问的大门配置
    header("Access-Control-Allow-Origin:http://192.168.43.204:3000");
    header('Access-Control-Allow-Headers:Authorization');
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,Authorization");
    // echo'<p>服务器搭建成功</p>';
     //后端接受请求步骤
     //1,接受登录用户的“用户名”和“密码”两个参数
     $username=$_POST['username'];
     $password=$_POST['password'];
     //2，去数据库中，查找用户信息是否匹配
        //1),连接数据库
        $conn=mysqli_connect('localhost','root','root','p2p',3306);
        // 2)准备数库
        $sql="select * from t_userinfo where username='{$username}'and password='{$password}'";
        // 3)发送sql
        $result=mysqli_query($conn,$sql);
       // var_dump($result);
      //3，获取返回的结果集
        /**
         * $user=mysqli_fetch_assoc($rs);
         * echo json_encode(array{
         *            "sucess"=>true,
         *             "message"=>"恭喜，登录成功！"
         *       })
         */
    
         if(mysqli_num_rows($result)==1){
            //  echo "恭喜登录成功！"
            // 新增的代码
            $_SESSION['username'] = $username; // 把用户名放入session
             //封装结果对象
             $rsObj=array(
                 "success"=>true,
                 "message"=>"恭喜登录成功！"
             );
             // 把php的结果对象，转成json字符串对象
            echo json_encode($rsObj);
         }else{
            //  echo "登录失败！"
            // 封装结果对象
            $rsObj=array(
                "success"=>false,
                "message"=>"对不起，登录失败！"
            );
            // 把php的结果对象，转成json字符串对象
            echo json_encode($rsObj);
         }





?>