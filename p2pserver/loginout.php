<?php
    header("Access-Control-Allow-Origin: http://172.16.12.254:3000");
    header('Access-Control-Allow-Headers:Authorization');
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,Authorization");


    //  清除session数据
    // @$_SESSION['username'];
    unset($_SESSION['username']);

    // 后端重定向页面（等价于在浏览器地址栏输入地址，点回车）
    header("Location: http://172.16.12.254:3000/");  