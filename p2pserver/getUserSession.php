<?php
    header("Access-Control-Allow-Origin: http://192.168.43.204:3000");
    header('Access-Control-Allow-Headers:Authorization');
    header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, Last-Modified, Cache-Control, Expires, Content-Type, X-E4M-With,Authorization");


    //  获取session数据
    echo @$_SESSION['username'];