var ColorControll = {
    setColor: function (link, color) {
//        document.querySelector(link).style.color = color;
        $(link).css('color', color);
    },
    setBackgroundColor: function (link, color) {
//        document.querySelector(link).style.backgroundColor = color;
        $(link).css('backgroundColor', color);
    },
    setBorderColor: function (link, color) {
//        document.querySelector(link).style.borderColor = color;
        $(link).css('borderColor', color);
    }
};
function nightdayhandler(self) {
    var d = new Date();
    var h = d.getHours();
    var day;
    //h >= 18 && h < 22
    if (h >= 18 && h < 22) { //밤 8시 이후에 회색 배경으로 변경
        day = '저녁';
        ColorControll.setColor("#breadcrumb_line", 'white');
        ColorControll.setBackgroundColor("#breadcrumb_line", 'black');
        ColorControll.setBorderColor('body', 'white');
        ColorControll.setBackgroundColor('body', 'dimgray');
        ColorControll.setColor('body', 'white');
        ColorControll.setBackgroundColor('header', 'dimgray');
    } else if (h >= 22 || h < 7) {
        day = '밤';
        ColorControll.setColor("#breadcrumb_line", 'white');
        ColorControll.setBackgroundColor("#breadcrumb_line", 'black');
        ColorControll.setBorderColor('body', 'white');
        ColorControll.setBackgroundColor('body', 'dimgray');
        ColorControll.setColor('body', 'white');
        ColorControll.setBackgroundColor('header', 'dimgray');
    } else {
        day = '낮';
        ColorControll.setBackgroundColor('#breadcrumb_line', "white");
        ColorControll.setBackgroundColor('body', "white");
        ColorControll.setColor('#breadcrumb_line', "gray");
        ColorControll.setColor('body', "black");
    }
    document.writeln("현재[" + day + "]");
}
    window.dataLayer = window.dataLayer || [];
    function gtag() {dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-155254288-1');
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'UA-155254288-1');

/*

//댓글
(function(d, s) {
    var j, e = d.getElementsByTagName(s)[0];
    if (typeof LivereTower === 'function') { return; }
    j = d.createElement(s);
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;
    e.parentNode.insertBefore(j, e);
    })(document, 'script');

//Tawk 시스템
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function() {
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e0d65927e39ea1242a2a0e9/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();
*/
//밤낮 시스템
var d = new Date();
var h = d.getUTCHours()-9;
if (h < 7){
    document.querySelector("#moon").style.top = 110-13*h;  //11시간 
    } else {
        document.querySelector("#moon").style.top = 110-13*7+13*(h-7);  //11시간 
    }
    document.querySelector("#moon").style.right = 1585-130*h;


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
    var totalmoney;
    var pc_money = document.getElementById("pc_total");
    var value0 = document.getElementById("value50000");
    var value1 = document.getElementById("value10000");
    var value2 = document.getElementById("value5000");
    var value3 = document.getElementById("value1000");
    var value4 = document.getElementById("value500");
    var value5 = document.getElementById("value100");
    var value6 = document.getElementById("value50");
    var value7 = document.getElementById("value10");
    var value8 = document.getElementById("value5000set");
    var value9 = document.getElementById("value1000set");
    var value10 = document.getElementById("value500set");
    var value11 = document.getElementById("value100set");
    var value12 = document.getElementById("account1");
    var value13 = document.getElementById("account2");
    var value14 = document.getElementById("account3");
    var value15 = document.getElementById("account4");
    var value16 = document.getElementById("account5");
    var value17 = document.getElementById("account6");
    var value18 = document.getElementById("account7");
    var value19 = document.getElementById("account8");
    var value20 = document.getElementById("account9");
    var value21 = document.getElementById("account10");
    var value22 = document.getElementById("account11");
    var value23 = document.getElementById("account12");
    $(function () {
        $("#value50000").change(function () {
            $(document).ready(function(){
                $("#total50000").val(numberWithCommas(50000*value0.value));
            })
        });
        $("#value10000").change(function () {
            $(document).ready(function(){
                $("#total10000").val(numberWithCommas(10000*value1.value));
            })
        });
        $("#value5000").change(function () {
            $(document).ready(function(){
                $("#total5000").val(numberWithCommas(5000*value2.value));
            })
        });
        $("#value1000").change(function () {
            $(document).ready(function(){
                $("#total1000").val(numberWithCommas(1000*value3.value));
            })
        });
        $("#value500").change(function () {
            $(document).ready(function(){
                $("#total500").val(numberWithCommas(500*value4.value));
            })
        });
        $("#value100").change(function () {
            $(document).ready(function(){
                $("#total100").val(numberWithCommas(100*value5.value));
            })
        });
        $("#value50").change(function () {
            $(document).ready(function(){
                $("#total50").val(numberWithCommas(50*value6.value));
            })
        });
        $("#value10").change(function () {
            $(document).ready(function(){
                $("#total10").val(numberWithCommas(10*value7.value));
            })
        });
        $("#value5000set").change(function () {
            $(document).ready(function(){
                $("#total5000set").val(numberWithCommas(50000*value8.value));
            })
        });
        $("#value1000set").change(function () {
            $(document).ready(function(){
                $("#total1000set").val(numberWithCommas(10000*value9.value));
            })
        });
        $("#value500set").change(function () {
            $(document).ready(function(){
                $("#total500set").val(numberWithCommas(20000*value10.value));
            })
        });
        $("#value100set").change(function () {
            $(document).ready(function(){
                $("#total100set").val(numberWithCommas(5000*value11.value));
            })
        });
        $("input").change(function(){
            $(document).ready(function(){
                totalmoney =
                50000*value0.value
                +10000*value1.value
                +5000*value2.value
                +1000*value3.value
                +500*value4.value
                +100*value5.value
                +50*value6.value
                +10*value7.value
                +50000*value8.value
                +10000*value9.value
                +20000*value10.value
                +5000*value11.value
                +1*value12.value
                +1*value13.value
                +1*value14.value
                +1*value15.value
                +1*value16.value
                +1*value17.value
                +1*value18.value
                +1*value19.value
                +1*value20.value
                +1*value21.value
                +1*value22.value
                +1*value23.value;
                $("#last_total").val(numberWithCommas(totalmoney));
                $("#complate_money").val(numberWithCommas(totalmoney-pc_money.value));
            })
        });
    });
