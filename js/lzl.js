$(function(){
	 
	var w = $(window).width();
	var h = $(window).height();
	 if(w>639){
		 
			ts = $('.header_top').offset().top;
			 $(window).scroll(function (e) {
				 s = $(document).scrollTop();
		
				 if (s > ts - 0) {
					 $('.header_top').css('position', 'fixed');
					 $('.header_top').css('top', '0px');
					 $('.header_top').css('left', '0');
					 $('.header_top').css('width', '100%');
					 $('.header_top').css('z-index', '3');
					 $('.header_top').css('max-height', '90px');
					 $('.header_top .header_m .logo').css('max-height', '90px');
					 $('.header_top .header_m .logo').css('max-width', '220px');
					 $('.header_top .header_m .menu').css('max-height', '90px');
					 $('.header_top .header_m .menu').css('line-height', '90px');
					 $('.header_top .header_m .ww li').css('max-height', '90px');
					 $('.header_top .header_m .ww li').css('line-height', '90px');
					 $('.banner_top').css('display', 'block');
				 } else {
					 $('.header_top').css('position', '');
					 $('.header_top').css('max-height', '');
					 $('.header_top .header_m .logo').css('max-height', '');
					 $('.header_top .header_m .logo').css('max-width', '');
					 $('.header_top .header_m .menu').css('max-height', '');
					 $('.header_top .header_m .menu').css('line-height', '');
					 $('.header_top .header_m .ww li').css('max-height', '');
					 $('.header_top .header_m .ww li').css('line-height', '');
					 $('.banner_top').css('display', '');
				 }
			 })
		 }else {
		 
			ts = $('.header_top').offset().top;
			 $(window).scroll(function (e) {
				 s = $(document).scrollTop();
		
				 if (s > ts - 0) {
					 $('.header_top').css('position', 'fixed');
					 $('.header_top').css('top', '0px');
					 $('.header_top').css('left', '0');
					 $('.header_top').css('width', '100%');
					 $('.header_top').css('z-index', '3');
					 $('.banner_top').css('display', 'block');
					 $('.header_top .header_m .logo').css('max-height', '');
					 $('.header_top .header_m .logo').css('max-width', '');
					 $('.header_top .header_m .menu').css('max-height', '');
					 $('.header_top .header_m .menu').css('line-height', '');
					 $('.header_top .header_m .ww li').css('max-height', '');
					 $('.header_top .header_m .ww li').css('line-height', '');
				 } else {
					 $('.header_top').css('position', '');
					 $('.banner_top').css('display', '');
				 }
			 })
			 
			 }
	
	var icoorw = ( w - 1200 ) / 2 + 'px';
	$('.header_top .lcolor').css('width',icoorw);
	$('.header .menu').click(function(){
		if($(this).hasClass('active')){
			$(this).find('.iconfont').html('&#xe602;');
			$(this).removeClass('active');
			$(this).next('.nav').animate({ left: "-230px",opacity: "0" });

		}else{
			$(this).find('.iconfont').html('&#xe620;');
			$(this).addClass('active');
			$(this).next('.nav').animate({ left: "0px",opacity: "1" });
		}
	});
	
	$('.tablist a').click(function(){
		$(this).parent('.tablist').find('a').removeClass('active');
		$(this).addClass('active');
		$(this).parent('.tablist').next('.tabbody').find('.tabbodys').hide();
		$(this).parent('.tablist').next('.tabbody').find('.tabbodys').eq($(this).index()).show();
	});
	$('.caseul li:nth-child(3n)').css('margin-right', '0')
	if(w<899){
	$('.caseul li:nth-child(3n)').css('margin-right', '4%');
	$('.caseul li:nth-child(2n)').css('margin-right', '0');
	}
	//$('.productul li').find('.baidiv').css({"opacity": "0"});
	//$('.productul li').mouseover(function(){
//		$(this).find('.baidiv').animate({opacity: "0"},500);
//		
//	}).mouseleave(function(){
//		$(this).find('.baidiv').animate({opacity: "1"},500);
//	});
});
$(window).resize(function() {
	var w = $(window).width();
	var h = $(window).height();
	var icoorw = ( w - 1200 ) / 2 + 'px';
	$('.header_top .lcolor').css('width',icoorw);
	$('.caseul li').css('margin-right', '5%');
	$('.caseul li:nth-child(3n)').css('margin-right', '0');
	if(w<899){
	$('.caseul li').css('margin-right', '4%');
	$('.caseul li:nth-child(2n)').css('margin-right', '0');
	}
});
