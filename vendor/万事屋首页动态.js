/**
 * Created by 1 on 2017/12/8.
 */

//
//
// // function submitForm() {
//     document.body.setAttribute("style", "overflow-y: hidden; min-height: 0;")
//     var xhr
//     if (window.XMLHttpRequest) {
//         xhr = new XMLHttpRequest();  // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
//     } else {
//         xhr = new ActiveXObject("Microsoft.XMLHTTP");
//
// }


// //封装ajax
// function ajax(){
//
// }
//
//
// //调用ajax
// addEvent(document,'click',function(){
//
// })
// $(document).ready(function(){
//     $(selector).click(function(){
//         window.alert("sdw")
//
// })
//
//
//
// })
window.onload=function() {
    var searchClick = document.getElementById('search-click');
    searchClick.onclick = function () {
        $.post("demo_test.asp",
            {
                content: $("#search-input").val()
            },
            function (data, status) {
                alert("数据：" + data + "\n状态：" + status);

            });
    }
}
// $.get(url)
//         function (data,status) {
//           .data.content
//
//         }
//     };
// }
// $(document).ready(function(){
//   $("button").click(function(){
//     $.get("https://api.github.com/user/emails",function(data,status){
//       alert("数据：" + data + "\n状态：" + status);
//     });
//   });
// });
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
//
// $.get(url)
//         function (data,status) {
//           .data.content
//
//         }
//     };
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
//}
//
//
//
//    }
//
//}

var box = window.top.document.getElementById("homeframe").contentWindow.document.getElementById("hidden-show");

function divSW() {
    if( box.style.display === "none") {
       box.style.display = "block";

    } else {
        box.style.display = "none";

    }
}



$(document).ready(function(){
    .$get("啊啊啊",function(data,status) {
            var i;
            for(i=0,i<=data.length,i++){


            }
    }
    )
}
























