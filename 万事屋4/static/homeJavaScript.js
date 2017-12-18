/**
 * Created by 1 on 2017/12/8.
 */

/* 得到委托数据倒叙排列在页面中 */

window.onload=function() {
    $.get('嘀嘀嘀',
        function (text) {
            var json = JSON.parse(text);
            var html = "";
            for (var i = 0; i < json.length; i++) {
                if (json[i].all.type === 0)
                    var word = "【发布委托】";
                else if (json[i].all.type === 1)
                    word = "【接受委托】";

                html += "<div class='delegate'><p>" + word + "</p></div><div class='dlgt-detail'><p>" + json[i].all.name +
                    "</p></div><div class='deadline'>" + "截止：" + "<span>" + json[i].all.date + "</span></div>";

            localStorage.setItem('special_id[i]', 'json[i].all.special_id');  // 存储数据



            }

            $('.index').html(html);

            async:true
        })

}




/* 将用户搜索的内容post给服务器并返回搜索到的数据  */



window.onload=function() {
    var searchClick = document.getElementById('search-click');

    searchClick.onclick = function () {

        $.post("嗯嗯嗯",
            {
                "search": $("#search-input").val
            },
            function (data) {
                var json = JSON.parse(data);
                var html = "";
                for (var n = 0; n < json.length; n++) {
                    if (json[n].type = 0)
                        var word = "【接受委托】";
                    else if (json[n].type = 1)
                        word = "【发布委托】";

                    html += "<div class='delegate'><p>" + word + "</p></div><div class='dlgt-detail'><p>" + json[n].name +
                        "</p></div><div class='deadline'>" + "截止：" + "<span>" + json[n].date + "</span></div>";
                }
                $('.index').html(html);
                async:true
            })

    }

}



/* 用户点击首页中的每一个委托转到这个委托的详细页面  */
window.onload=function() {
    $(".delegate").click(function () {
        $.post("铛铛铛", {
            "special_id":"localStorage.getItem('special_id')"
        },
        function(data){
            if (data.type===0)
                window.location = "/templates/receiveDelegate.html";
            else (data.type===1)
                window.location = "/templates/sendDelegate.html"
            localStorage.setItem('name', 'data.name');
            localStorage.setItem('date', 'data.date');
            localStorage.setItem('reward', 'data.reward');
            localStorage.setItem('detail', 'data.detail')
        })
    })
}




/*  localstorage存储数据时覆盖 要循环  */
/*  登录 点开键盘 页面崩坏   */
/*  首页数据循环 倒序排列    */
/*  昵称 坂田银时   */
/*  小图标 背景白色   */
/*  输错密码时 提示密码错误显示不出来  */
/*  不能在我的委托取消自己曾发过的 接受委托或发布委托  */
/*  在发布委托和接受委托界面 不能放弃委托和暂停接受  */
/*  搜索功能   */
/*  开发团队 反馈与建议    */
/*  上传图片功能   */
/*  我的委托中 我发布的 接受委托和发布委托 以及 我委托别
    人和接受的委托的页面 不能显示出来 也就不能再次点开这
    些页面来放弃委托和暂停接受    */
/*  由于首页交互有问题导致后面几个页面的交互也没能测试*/
/*  首页点开键盘崩了 估计后面输入接受委托和发布委托的界
    面点开键盘也会崩*/
