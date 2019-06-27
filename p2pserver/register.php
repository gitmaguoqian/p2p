<?php
// 设置编码格式
 header('Content-Type: text/html;charset=utf-8');
 header("Access-Control-Allow-Origin:*");
//  echo '<h1>恭喜服务器搭建成功！</h1>'
/* 
1.  接口请求参数
           
2. 处理请求内容

3. 返回结果

*/
// 1 接口请求参数 
   $user= $_POST['user'];
   $pwd= $_POST['pwd'];
//    echo "用户名:{$username},密码：{$password}";
// 2. 处理请求内容
// 2.1 连接数据库
    $link=mysqli_connect('localhost','root','root','p2p',3306);
// 2.2 准备cmd插入数据
    $sql = "insert into t_userinfo(username,password,nickname) values('{$user}','{$pwd}','{$user}')";

// 2.3 综合前面两步
    $result=mysqli_query($link,$sql);
// 3、按照需求封装并返回结果
    // echo '<h1>恭喜注册成功！</h1>'    
    // echo $result;    
    if ($result>0) {
        // 创建关联数组
        $rs=array(
            "success"=>true,
            "message"=>"恭喜，注册成功！"
        );
        // 返回json
        echo json_encode($rs);
    } else {
        $rs=array(
            "success"=>false,
            "message"=>"注册失败！"
        );
        // 返回
        echo json_encode($rs);
    }
    

?>