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
			
			
			
			$("#rectang>div").click(function(){
				const rt=$(this).index();
				$(this).addClass("bk").siblings().removeClass("bk");
				$("#fade-img>div>img").eq(rt).fadeIn().siblings().fadeOut();
			});
			
			
			$(".left").click(function(){
				
					console.log($("#sellermove>div").position().left);
					if($("#sellermove>div").position().left>-500){$("#sellermove>div").stop().animate({left:"-=200px"});}
				});
			$(".right").click(function(){
				
					//console.log($("#sellermove>div").position().left);
					if($("#sellermove>div").position().left<280){$("#sellermove>div").stop().animate({left:"+=200px"});}
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
					
					const newShow=$("#new").offset().top-550;
					const natureShow=$("#nature").offset().top-550;
					if(i>=newShow){
					$("#new").addClass("act");
					}
					if(i>=natureShow){
					$("#nature").addClass("act");
					}
					
			});
				
			setInterval(slide, 3000);
			function slide(){
				$("#downslide>div").stop().animate({top:"-350px" }, 1400, function(){$(this).prepend($(this).children().last()); 
					$(this).css("top","-700px");
			});
			}					
				
			$("#goTop").click(function(){
				$("html,body").stop().animate({scrollTop:0},"fast");
			});
				
			});///////end