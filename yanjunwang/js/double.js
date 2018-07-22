/*
* @Author: ASUS
* @Date:   2018-06-26 08:17:27
* @Last Modified by:   lenovo
* @Last Modified time: 2018-06-27 08:12:51
*/
$(function(){
	var test_DNF=['枪剑士冒险启程','累计在线得好礼','十周年登录畅享大礼','十周年感恩系列活动','超时空之战序章','飞速直升活动','十周年庆典拼图','稀有装扮震撼登场'];
	var test_LOL=['未来战士皮肤上架','新角色黑潮','信誉的召唤师','阿卡丽的神秘商店','人气周边'];
	// var url_DNF=['','','','','','','',''];  因为命名规范所以不需要建立数组
	// var url_LOL=['images/next-l-1.jpg','images/next-l-2.jpg','images/next-l-3.jpg','images/next-l-4.jpg','images/next-l-5.jpg'];
	var time_DNF=['时间：2018.6.19~2018.8.16','时间：2018.6.19~2018.7.19','时间：2018.6.13~2018.7.5','时间：2018.6.19~2018.8.2','时间：2018.6.19~2018.7.5','时间：2018.6.19~2018.7.5','时间：2018.6.19~2018.7.19','时间：2018.6.19~2018.7.19'];
	var time_LOL=['时间：2018.6.19~2018.7.7','时间：2018.6.19~2018.8.14','时间：2018.6.19~2018.7.8','时间：2018.6.19~2018.8.16','时间：2018.6.19~2018.8.20'];
	var n=null;
	$('.content').find('a').eq(0).css('border-bottom', '2px solid #DF0000');
	$('.content>a').on('click',function(){
		$(this).css('border-bottom','2px solid #DF0000').siblings().css('border-bottom', '');
		n=$(this).index();
		$('.content>ul').text('');
		if(n==1){
			for(var i=0;i<5;i+=1){
				$("<li><a href='#'><img src='images/next-l-"+(i+1)+".jpg'><span>"+time_LOL[i]+"</span><p>"+test_LOL[i]+"</p></a></li>").appendTo('.content>ul');
			}
		}
		if(n==2){
			for(var i=0;i<8;i+=1){
				$("<li class='wb'><a href='#'><img src='images/next-d-"+(i+1)+".jpg'><span>"+time_DNF[i]+"</span><p>"+test_DNF[i]+"</p></a></li>").appendTo('.content>ul');
			}
		}
	});
	$('.content>a').eq(0).trigger('click');
})