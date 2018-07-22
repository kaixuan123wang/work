/*
* @Author: ASUS
* @Date:   2018-06-24 18:12:11
* @Last Modified by:   lenovo
* @Last Modified time: 2018-06-27 10:36:15
*/
$(function(){
	var show=function(n){
			$('.ad ul').stop(true,false).animate({
    			left:-n*469
    		},1000)
    }
    var n=0;
    var i=0;
    	var timer=null;
    	var m=function(){
    		if(i>=4){
    			i=0;
    		}
    		show(i)
    		i+=1;
    		timer=setTimeout(m,2000);
    	}
    $(function(){
    	$('.ad ul').hover(function(){
    		clearTimeout(timer);
    	},function(){
    		m();
    	}).trigger('mouseleave');
    })
   // choose
    var news_LOL=['赛事速看：剑魔无法无天 SNG轻取BLG','赛事速看：幻翎舞动全场 RNG轻取LGD','WE主场两连败 网友：这样怎么进S8','傅园慧出席RNG开幕式与选手约饭','GEN.G辅助回应李哥：内心受到伤害','集美大学完美大龙运营 2-0夺冠高校联赛','集美大学与南昌理工晋级高校总决赛'];
    var news_DNF=['[F1天王赛] 对话鞠春良：DNF就是我的青春','[F1天王赛] 预见你的热爱：F1年度盛典精彩回顾','[格斗大赛] 11届格斗大赛回顾：杭州南大区16进8，终极攻防战','[格斗大赛] DNF格斗大赛，8进4游走于魔法','[职业联赛] DNF第五届职业联赛总决赛，陈炫成完胜仇冬生夺冠','[职业联赛] 吴琪大战郑忠敏！看谁才是DNF力法第一人','[PVE挑战赛] 竞速之王之争，剑魂VS柔道卓越'];
    var time_LOL=['2018/6/19','2018/6/19','2018/6/19','2018/6/18','2018/6/19','2018/6/17','2018/6/16'];
    var time_DNF=['2018/6/19','2018/6/19','2018/6/18','2018/6/18','2018/6/18','2018/6/17','2018/6/16'];
$('.content2').find('a').eq(0).css('border-bottom', '2px solid #DF0000');
    $('.content3').find('a').eq(0).css('border-bottom', '2px solid #DF0000');
    var n = null;
    $('.content2>a').on('click',function(){
        n=$(this).index();
        if(n==1){
            $(this).css('border-bottom','2px solid #DF0000').siblings().css('border-bottom', '');
            for(var i=0;i<7;i+=1){
                $('.content2>ul>li>a').eq(i).html(news_LOL[i]+"<span>"+time_LOL[i]+"</span>")
            }
            $('.content2>ul>li>a').eq(3).attr({
                href: 'child.html',
                target: '_blank'
            });
        }
        if(n==2){
            $(this).css('border-bottom','2px solid #DF0000').siblings().css('border-bottom', '');
            for(var i=0;i<7;i+=1){
                $('.content2>ul>li>a').eq(i).html(news_DNF[i]+"<span>"+time_DNF[i]+"</span>")
            }
            $('.content2>ul>li>a').eq(3).attr({
                href:'#',
                target:'_self'
            });
        }
    })
    var text_LOL=['LCK夏季赛W5D1:KTvsSKT精彩集锦','Gripex大胡子盲僧 2017精彩操作集锦！','顶级主播秀：UZI均势4杀！无愧世界第一之名！'];
    var text_DNF=['毒奶粉隐藏的使徒！召唤幻月开荒卢克raid','西海岸一区卢克RAID开荒全程红眼视角','国服首杀！跨四冠军团队全服首杀卢克'];
    $('.content3>a').on('click',function(){
        v=$(this).index();
        if(v==1){
            $(this).css('border-bottom','2px solid #DF0000').siblings().css('border-bottom','')
            for(var i=0;i<4;i+=1){
                $('.content3>ul>li>a').eq(i).find('img').attr('src',"images/L-"+(i+1)+".jpg");
                $('.content3>ul>li>a').eq(i).find('span').text(text_LOL[i]);
            } 
        }
        if(v==2){
            $(this).css('border-bottom','2px solid #DF0000').siblings().css('border-bottom','')
            for(var i=0;i<4;i+=1){
                $('.content3>ul>li>a').eq(i).find('img').attr('src',"images/v-"+(i+1)+".jpg");
                $('.content3>ul>li>a').eq(i).find('span').text(text_DNF[i]);
            }
            }
                
    })
})