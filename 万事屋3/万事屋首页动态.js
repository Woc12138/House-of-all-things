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

            localStorage.setItem('special_id', 'json[i].all.special_id');  // 存储数据



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
}


/* 用户点击首页中的每一个委托转到这个委托的详细页面  */
window.onload=function() {
    $(".delegate").click(function () {
        $.post("铛铛铛", {
            "special_id":"localStorage.getItem('special_id')"
        },
        function(data){
            if (data.type===0)
                window.location = "/接受委托.html";
            else (data.type===1)
                window.location = "/发布委托.html"
            localStorage.setItem('name', 'data.name');
            localStorage.setItem('date', 'data.date');
            localStorage.setItem('reward', 'data.reward');
            localStorage.setItem('detail', 'data.detail')
        })
    })
}













