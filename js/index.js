"use strict";


//---------------------
//linkstart
function Link() {
  this.a = [
    "#0bbb00",
    "#bc1915",
    "#2edcb1",
    "#0c0b0f",
    "#b8b900",
    "#cc10d0",
    "#5c5c5e"
  ];
}
Link.prototype.rand = function(min, max) {
  return Math.random() * (max - min) + min;
};

Link.prototype.bar = function(i) {
  $("body").append(
    '<div class="g" style="transform: rotate(' +
      this.rand(0, 360) +
      'deg);"><div class="b" style="animation-duration:' +
      this.rand(1, 2.2) +
      "s;background-color:" +
      this.a[i % this.a.length] +
      ';"></div></div>'
  );
  setTimeout(function() {
    //$('.g').fadeOut('fast');
    $('.g').remove();
}, 2800);
};
Link.prototype.bars = function() {
  for (let i = 0; i < 100; i++) {
    setTimeout(this.bar.bind(this), i * 5, i);
  }
};
//-------------------------
//粒子
function zparticle(){
	

var app = {

  chars: ['▲','△'],

  init: function () {
    app.container = document.createElement('div');
    app.container.className = 'animation-container';
    document.body.appendChild(app.container);
    window.setInterval(app.add, 100);
  },

  add: function () {
    var element = document.createElement('h6');
    app.container.appendChild(element);
    app.animate(element);
  },

  animate: function (element) {
    var character = app.chars[Math.floor(Math.random() * app.chars.length)];
    var duration = Math.floor(Math.random() * 15) + 1;
    var offset = Math.floor(Math.random() * (100 - duration * 2)) + 3;
    var size = 10 + (15 - duration);
    var rotate = Math.floor(Math.random()*(360-0)+0);
    var rotate2 = Math.floor(Math.random()*(360-0)+0);
    element.style.cssText = 'transform:rotate('+rotate+'deg) rotateX('+rotate2+'deg); '+'right:'+offset+'vw; font-size:'+size+'px;animation-duration:'+duration+'s';
    element.innerHTML = character;
    window.setTimeout(app.remove, duration * 1000, element);
  },

  remove: function (element) {
    element.parentNode.removeChild(element);
  },

};

document.addEventListener('DOMContentLoaded', app.init);
}
//----------------------
function zscreen(){
var sentences = new Array 
('Welcome to','xxxx.com','肥虫汽水摊','一个温馨的个人小站','长期更新笔记','欢迎与我一起探讨',
 '一起进步','Error█▌░▒█...','鸡你太美///','All roads lead to Rome.' , '团长！车已经准备好了！',
 '我以前和你一样也是个冒险家，', '直到我的膝盖中了一箭.','el psy congroo',
 '我只个路过的指挥使.', '世上会有很多出人意料的事，', '比如，你以为我会举个例子.', 'Have a good time');

var timer = 8000;

$(document).ready(function(){

    var total = sentences.length - 1;

    for (var i = 0; i <= total; i++) {

        $('#box').append('<p class="sl" id="textBox'+i+'"></p>');
         
        var max = sentences[i].length - 1;

        for (var j = 0; j <= max; j++) {
            $('#textBox'+i).append('<span style="transition: ' + Math.random()*3 + 's; transition-delay: ' + Math.random() + 's;">' + sentences[i].charAt(j) + '</span>');	 
        };

    }; 

    var maxBox = $('#box > p').length;
    var r = 0;

    $('#textBox' + r).addClass('active');

    setInterval(function(){ 

        $('#textBox' + r).removeClass('active');

        r++;

        if (r == maxBox) {
            r = 0;
        }
   
        setTimeout(function(){ 
            $('#textBox' + r).addClass('active');
        }, 2000);

    }, timer);

});
}