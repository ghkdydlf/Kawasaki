$(document).ready(function(){
    function js(){
        var windowwidth = $(window).width();
        if(windowwidth >= 1200){
            
            var $html = $("html");
                page = 1;
                lastPage = $("section").length;

                $html.animate({srcollTop:0},10);

        
            $(window).on("wheel", function(e){

                if($html.is(":animated")) return;

                if(e.originalEvent.deltaY > 0){
                    if(page == lastPage) return;

                    page++;
                }else if(e.originalEvent.deltaY < 0){
                    if(page == 1) return;

                    page--;
                }
                var posTop = (page-1) * $(window).height();

                $html.animate({scrollTop : posTop},1000);
                console.log(lastPage);
            });

            //풀페이지 스크롤
            // $('section').on('mousewheel',function(event,delta){
            //     if(delta > 0){
            //         var prev = $(this).prev().offset().top;
            //         $('html,body').stop().animate({
            //             scrollTop:prev
            //         },1000,'easeInCirc');
            //         console.log('이전 section의 위치값=' + prev);
            //     }else if(delta < 0){
            //         var next = $(this).next().offset().top;
            //         $('html,body').stop().animate({
            //             scrollTop:next
            //         },1000,'easeInCirc');
            //         console.log('이전 section의 위치값=' + next);
            //     }
            // });



            // parallax
            // $(function(){
            //     var win = $('section'),
            //     winInfo =[];

            //     win.each(function(){
            //         var $this = $(this);
            //         winInfo.push($this.offset().top);
            //     });
            //     console.log(winInfo);

            //     $(window).scroll(function(){
            //         var sct = $(this).scrollTop();
            //         console.log(sct);

            //         win.each(function(i){
            //             var $this = $(this);
            //             var $newtop = winInfo[i] - sct;

            //             if(sct > winInfo[i]){
            //                 $newtop *=1.5;
            //             }
            //             $this.css('top',$newtop);
            //         });
            //     });
            // });



            // 서브메뉴
            
            $('.menu li').mouseenter(function(){
                $(this).children('.sub_').stop().fadeIn(500);
            });
            $('.menu li').mouseleave(function(){
                $(this).children('.sub_').stop().fadeOut(500);
            });
            

            //메뉴 전체보기

            $('#hamburger').click(function(){
                
                var display = $('.full').css('display')
                if (display == 'none'){
                    $('.full').show();
                }else{
                    $('.full').hide();
                }
            });


            // 뉴스

            $('#prev,.left').click(function(){
                $('.slide').css({
                    transform:'translateX(0)',
                    transition: '1s'
                })
                $('.left').css('background-color','#69BE28')
                $('.right').css('background-color','#cccccc')
                $('#next').css('display','')
                $('#prev').css({
                    // PointerEvent:'none',
                    // cursor:'none',
                    // color:'#fff'
                    display:'none'
                })
            });
            $('#next,.right').click(function(){
                $('.slide').css({
                    transform:'translateX(-100vw)',
                    transition: '1s'
                })
                $('.right').css('background-color','#69BE28')
                $('.left').css('background-color','#cccccc')
                $('#next').css('display','none')
                $('#prev').css({
                    color:'#055902',
                    display:''
                })
            });
        }else{
            $('#hamburger').click(function(){
                
                var display = $('.full').css('display')
                if (display == 'none'){
                    $('.full').show();
                }else{
                    $('.full').hide();
                }
            });
        }
    }

    js();










});