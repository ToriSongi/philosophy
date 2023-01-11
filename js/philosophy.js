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
			
			/*//스와이프
			$("#sellermove").swiperight(function(){
			$(this).stop().animate({left:"+=160px"});
			});
			$("#sellermove").swipeleft(function(){
			$(this).stop().animate({left:"-=160px"});
			});*/
				
				
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
					
					const newShow=$("#new").offset().top-550;
					const natureShow=$("#nature").offset().top-550;
					if(i>=newShow){
					$("#new").addClass("act");
					}
					if(i>=natureShow){
					$("#nature").addClass("act");
					}
					
			});
			
			$("#icons>span").click(function(){
					$("#search").stop().slideDown();				
			});
			$("#close_x").click(function(){
					$("#search").stop().slideUp();				
			});
			
			setInterval(slide, 3000);
			function slide(){
				$("#downslide>div").stop().animate({top:"-350px" }, 1400, function(){$(this).prepend($(this).children().last()); 
					$(this).css("top","-700px");
			});
			}					
				
		
			//순차적으로 이미지가 커지는 이벤트
			let scale=setInterval(sns, 5800);
			function sns(){
				$("#recomm>div>div>img").each(function(e){
					var icons=$(this);
					setTimeout(function(){
					icons.addClass("toBig");}, e*1000+200);
					setTimeout(function(){
					icons.removeClass("toBig");}, e*1000+950);	
					});
				}
				
			
			
			
			let c=0;
			$("#click").click(function(){
				c++;
				if(c==1){$("#preview1+div").slideDown();
				//console.log(c);
				}
				else{
					$("#preview1+div").slideUp(); 
					c=0; } //console.log(c);
			});
			
			/*$("#click").click(function(){
				let c=0;
				c++;
				if(c==odd){$("#preview1+div").slideDown();
				
				}
				else{
					$("#preview1+div").slideUp(); 
					}
			});*/
			
			$("#step2>div:first-of-type>p, #step2>div:last-of-type>img").mouseenter(function(){
				const stp=$(this).index();
			 $("#step2>div:last-of-type>img").eq(stp).css("z-index","1").stop().animate({top:"85px"}).siblings().css({"filter":"grayscale(100%)"});
			 $("#step2>div:first-of-type>p").eq(stp).css("fontSize","2.5rem");
			});
			
			$("#step2>div:first-of-type>p, #step2>div:last-of-type>img").mouseleave(function(){
				const stp=$(this).index();
			$("#step2>div:last-of-type>img").css("z-index","0").stop().animate({top:"170px"}).siblings().css({"filter":"grayscale(0%)"});
			 $("#step2>div:first-of-type>p").eq(stp).css("fontSize","1.5rem");
			});
			
			$("#step3>div:nth-of-type(2)>p, #step3>div:nth-of-type(3)>img").mouseenter(function(){
				const st3=$(this).index();
			 $("#step3>div:nth-of-type(3)>img").eq(st3).css("z-index","1").stop().animate({top:"-30px"}).siblings().css({"filter":"grayscale(100%)","top":"40px"});
			  $("#step3>div:nth-of-type(2)>p").eq(st3).css("fontSize","2.5rem");
			});
			
			$("#step3>div:nth-of-type(2)>p, #step3>div:nth-of-type(3)>img").mouseleave(function(){
				const st3=$(this).index();
			 $("#step3>div:nth-of-type(3)>img").eq(st3).css("z-index","0").stop().animate({top:"40px"}).siblings().css({"filter":"grayscale(0%)","top":"40px"});
			  $("#step3>div:nth-of-type(2)>p").eq(st3).css("fontSize","1.5rem");
			});
			
});///////end