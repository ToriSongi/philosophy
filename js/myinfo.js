$(document).ready(function(){
			
				$(".upper").on("mouseenter click", function(){
					$(".sub, #black").stop().slideDown();
				});
				
				$(".sub").mouseleave(function(){
					$(".sub, #black").stop().slideUp();
				});
			
			    $("#header-nav button").click(function(){
						$("#phone_ver").stop().slideToggle();
						if($(this).text() == 'close'){
							$(this).text("menu");
							} else {
							$(this).text('close');
							}		
					});
				
				$(".above").on("mouseenter click", function(){
				
					$(this).siblings().stop().slideDown();
					$(this).parent().siblings().children("nav").stop().slideUp();
				});
				$(".under").mouseleave(function(){
					$(this).stop().slideUp();
				});
			
			
			
	
				
			//스크롤 이벤트	
			$(document).scroll(function(){
				const i=$(document).scrollTop();
				console.log(i);
				if(i<150) {
					$("header").removeClass("pink");
					$(".sub>a").removeClass("chan");
					$("#black").removeClass("scrol");
					$("#phone_ver").removeClass("exc");
					$(".above").removeClass("exc1");
					$("#phone_ver>div>nav>a").removeClass("exc2");
					$("header h1 img").css("width","180px");
					$("#search").removeClass("mov");
					}
					if(i>=150) {
					$("header").addClass("pink");
					$(".sub>a").addClass("chan");
					$("#black").addClass("scrol");
					$("#phone_ver").addClass("exc");
					$(".above").addClass("exc1");
					$("#phone_ver>div>nav>a").addClass("exc2");
					$("header h1 img").css("width","90px");
					$(".last").css("border-bottom","none");
					$("#search").addClass("mov");
					}
					if(i<450){
					$("#goTop").css("display","none");
					}
					if(i>=450){
					$("#goTop").css("display","block");}
					
					
			});
				
	
			$("#icons>span").click(function(){
					$("#search").stop().slideDown();				
			});
			$("#close_x").click(function(){
					$("#search").stop().slideUp();				
			});
				
			$("#goTop").click(function(){
				$("html,body").stop().animate({scrollTop:0},"fast");
			});
				
			});///////end