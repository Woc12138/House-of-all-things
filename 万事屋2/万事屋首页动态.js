/**
 * Created by 1 on 2017/12/8.
 */

//
// //
// window.onload=function() {
//     var jiaClick = document.getElementById('plus-sign');
//     jiaClick.onclick = function() {
//         var homes=window.parent.window.document.getElementById("homeframe");
//         homes.contentWindow.document.getElementById("hidden-show").toggle();
//
//     }
//
// }
// }
//
// $(document).ready(function(){
//   $(".plus-sign").click(function(){
//     $("#hidden-show").css("display","none");
//   });
// });
//
//


//
// window.onload=function()
// {
//         var sign = document.getElementById("icon");
//
//         sign.onclick = function () {
//         var home =  window.top.document.getElementById("homeframe").contentWindow;
//         var box = home.document.getElementById("hidden-show");
//
//         if (box.style.display === "none") {
//             box.style.display = "";
//         }
//         else{
//             box.style.display = "none";
//         }
//     }
//
//
// }



//
//
// function show(str){
// var i=document.getElementById(hidden-show);
// if (i.style.display == "none") {
//    i.style.display = "";
// }
// else{
//    i.style.display = "none";
// }
// }



//


// window.onload=function() {
//    var jiaClick = parent.window.document.frames["navBar.html"].document.getElementById('plus-sign');
//    jiaClick.onclick = function () {
//        var i = document.getElementById("#hidden-show");
//        if (i.style.display === "none") {
//            i.style.display = "";
//}
//        else{
//            i.style.display = "none";
//    }
//
//}
// window.onload=function(){
// var box = window.top.document.getElementById("homeframe").contentWindow.document.getElementById("hidden-show");
//     function divSW() {
//     if( box.style.display === "none") {
//        box.style.display = "block";
//
//     } else {
//         box.style.display = "none";
//     }
// }
// }


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

















