
//搜索框
var txt=document.querySelector('.txt');
txt.onfocus=function(){
	txt.placeholder="";
}
txt.onblur=function(){
	txt.placeholder="京东车品节200减100";
}
//主轮播图
var swiper = new Swiper('.main', {
      	autoplay:3000,
    	loop:true,
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
		// autoplayDisableOnInteraction:false,
		speed:500,
        effect: 'slide',
    });
 
//倒计时
var killTimer=document.querySelector('.killTimer');

 spans=killTimer.getElementsByTagName('span');
	function timGo(){
		var nowdate=new Date();
		var enddate=new Date("2017/10/10");

		var nowtime=nowdate.getTime();
		var endtime=enddate.getTime();
		var tim=endtime-nowtime;

		var hours=Math.floor(tim/1000/60/60%24);
		var min=Math.floor(tim/1000/60%60);
		var sec=Math.floor(tim/1000%60);

		spans[0].innerHTML=bl(hours);
		spans[1].innerHTML=":";
		spans[2].innerHTML=bl(min);
		spans[3].innerHTML=":";
		spans[4].innerHTML=bl(sec);
	}
		timGo();
		setInterval(timGo,1000);
		function bl(s){
			return s<10?"0"+s:s;
		}
		
//秒杀touch事件	
var mySwiper = new Swiper('.touch', {
      	slidesPerView : 3,
    });

//副轮播图
var swiper = new Swiper('.vice', {
      	autoplay:3000,
    	loop:true,
        pagination: '.swiper-pagination',
        paginationClickable: '.swiper-pagination',
		// autoplayDisableOnInteraction:false,
		speed:500,
        effect: 'slide',
    });	

//搜索框背景色渐变和小火箭
var headerBgc=document.querySelector("#headerBgc");
var slider=document.querySelector('.slider');
var rocket=document.getElementById('rocket');
window.onscroll=function(){
	    var scroll=document.body.scrollTop;
		var x=(scroll/slider.offsetHeight)<0.9?(scroll/slider.offsetHeight):0.9;
		headerBgc.style.opacity=x;
		scrollTop=document.body.scrollTop||document.documentElement.scrollTop;//获取滚轮离顶部的距离
		if (scrollTop>100) {
			rocket.style.opacity=1;
		}else{
			rocket.style.opacity=0;
		}
		rocket.onclick=function() {
		var t=0;
		var b=document.body.scrollTop||document.documentElement.scrollTop;
		var end=0;

		var c=end-b;
		var d=20;
		
		var timer=setInterval(function(){
			t++;
			if(t>=20){
				clearInterval(timer);
			}
			document.body.scrollTop=Tween.Quart.easeInOut(t,b,c,d);
			},20)
		} 
	}