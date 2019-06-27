// 选项卡脚本
$(function () {
    $('#myTab li:eq(1) a').tab('show');

    // 二、导航栏的效果
    // 激活当前样式 hover实现菜单栏选中效果
    $(".el-links li a").on("click",function () {
        // console.log(1);
        // 为当前点击添加激活样式
        var li=$(this).parent();
        // 为当前点击父级添加样式
        li.addClass("active");
        // 清除父级兄弟姐妹的样式
        li.siblings().removeClass("active");
    });
});

//一、SPAN页面加载逻辑
$(function () {
    // 定义一个函数，能够根据hash地址，动态加载页面
    function loadPage() {
        //  console.log('hash地址：',location.hash);
        //2，整理hash地址，与html片段的地址关系  key：value
        var routerObj = {
            "/": "/views/home/home.html",
            "/invest": "/views/invest/invest.html",
            "/borrow": "/views/borrow/borrow.html",
            "/information": "/views/information/information.html",
            "/login": "/views/login/login.html",
            "/personal": "/views/personal/personal.html",
            "/borrow2": '/views/borrow2/borrow2.html',
            "/borrow_info": "/views/borrow_info/borrow_info.html",
            "/bidrequestlist": "/views/bidrequestlist/bidrequestlist.html",
            "/borrowlist": "/views/borrowlist/borrowlist.html",
            "/register": "/views/register/register.html",
            "/userInfo": "/views/userInfo/userInfo.html",
            "/recharge": "/views/recharge/recharge.html",
            "/borrowBidReturnList": "/views/borrowBidReturnList/borrowBidReturnList.html",
            "/borrowApply": "/views/borrowApply/borrowApply.html",
            "/realAuth":"/views/realAuth/realAuth.html",
        };
        //3，获取hash地址
        var hash = location.hash.substr(1);
        //  debugger;
        //4，根据hash地址，获取html片段地址
        var pagePath = routerObj[hash];
        // 6.根据确定的地址，默认加载首页
        if (pagePath) {
            $('#root').load(pagePath);
        } else {
            $('#root').load('/views/home/home.html');
        }

    };
    // 1,对整个应用，添加hashchange的监听
    window.addEventListener("hashchange", loadPage);
    loadPage();


});



