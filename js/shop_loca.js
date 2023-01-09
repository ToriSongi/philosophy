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
					
					}
					if(i>=150) {
					$("header").addClass("pink");
					$(".sub>a").addClass("chan");
					$("#black").addClass("scrol");
					$("#phone_ver").addClass("exc");
					$(".above").addClass("exc1");
					$("#phone_ver>div>nav>a").addClass("exc2");
					$("header h1 img").css("width","90px");
					}
					if(i<450){
					$("#goTop").css("display","none");
					}
					if(i>=450){
					$("#goTop").css("display","block");}
					
					/*const part2=$("#part2").offset().top-600;
					const part3=$("#part3").offset().top-600;
					const part4=$("#part4").offset().top-600;
					const part5=$("#part5").offset().top-600;
					const part6=$("#part6").offset().top-600;
					
					if(i>= part2){
					$("#part2>div").addClass("act");
					}
					if(i>= part3){
					$("#part3>div").addClass("act");
					}
					if(i>= part4){
					$("#part4>div").addClass("act");
					}
					if(i>= part5){
					$("#part5>div").addClass("act");
					}
					if(i>= part6){
					$("#part6>div").addClass("act");
					}*/
					
					
			});
				
							
				
			$("#goTop").click(function(){
				$("html,body").stop().animate({scrollTop:0},"fast");
			});
				
			});///////end