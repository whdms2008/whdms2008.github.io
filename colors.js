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
    if (h >= 20 || h < 6) { //밤 8시 이후에 회색 배경으로 변경
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
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-155254288-1');


        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-155254288-1');


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
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e0d65927e39ea1242a2a0e9/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();

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
    if (h >= 18 && h < 22) { //밤 8시 이후에 회색 배경으로 변경
        day = '저녁';
        ColorControll.setColor("#breadcrumb_line", 'white');
        ColorControll.setBackgroundColor("#breadcrumb_line", 'black');
        ColorControll.setBorderColor('body', 'white');
        ColorControll.setBackgroundColor('body', 'dimgray');
        ColorControll.setColor('body', 'white');
        ColorControll.setBackgroundColor('header', 'dimgray');
    } else if(h >= 22 || h < 7) {
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
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-155254288-1');


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
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/5e0d65927e39ea1242a2a0e9/default';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();

//밤낮 시스템
var d = new Date();
var h = d.getUTCHours()-18;
var i = 15;
if (h < 7){
    document.querySelector("#moon").style.top = 110-13*h;  //11시간 
} else {
    document.querySelector("#moon").style.top = 110-13*7+13*(h-7);  //11시간 
    }
document.querySelector("#moon").style.right = 1585-130*h;
