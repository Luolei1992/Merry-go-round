/**
 * Created by jf on 2016/6/29.
 */
window.onload = function () {
    //alert("引用成功");
    var wrap = document.getElementById("wrap");
    var slide = document.getElementById("slide");
    var ul = slide.children[0];
    var lis = ul.children;
    var arrow = document.getElementById("arrow");
    var arrLeft = document.getElementById("arrLeft");
    var arrRight = document.getElementById("arrRight");

    var config = [
        {
            "width": 400,
            "top": 20,
            "left": 50,
            "opacity": 0.2,
            "zIndex": 2
        },//0
        {
            "width": 600,
            "top": 70,
            "left": 0,
            "opacity": 0.8,
            "zIndex": 3
        },//1
        {
            "width": 800,
            "top": 100,
            "left": 200,
            "opacity": 1,
            "zIndex": 4
        },//2
        {
            width: 600,
            top: 70,
            left: 600,
            opacity: 0.8,
            zIndex: 3
        },//3
        {
            "width": 400,
            "top": 20,
            "left": 750,
            "opacity": 0.2,
            "zIndex": 2
        }//4
    ];//其实就是一个配置单 规定了每张图片的大小位置层级透明度

    //1.鼠标经过盒子让箭头 渐渐地 显示
    wrap.onmouseover = function () {
        animate(arrow, {"opacity": 1});
    }
    wrap.onmouseout = function () {
        animate(arrow, {"opacity": 0});
    }

    //2.通过动画函数 把每一个li放到指定位置
    //遍历lis 把每一个li取出来 给他设定位置
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i]);
        }
    }

    assign();


    //3.点击箭头 重新分配位置
    //arr.push(arr.shift());
    arrRight.onclick = function () {
        config.push(config.shift());//把开始的放最后
        assign();
    }
}