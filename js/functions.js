$(document).ready(function(){

    window.sr = new scrollReveal({
        easing: 'ease-in-out',
        over:   '0.3s',
        move:   '100px',
        enter:   'left'
    });

    $(function() {
        new Dragdealer('drag', {
            x: window.location.hash == '#about' ? 1 : 0,
            steps: 2,
            animationCallback: function(x) {
                $('.bar .slides').css('margin-left', (-x * 100) + '%');
                $('.about .slides').css('margin-left', (-x * 100) + '%');
                $('.content .slides').css('margin-left', (x * 100) + '%');
                if (x > 0.5) {
                    $('#blink').addClass('back');
                    //$('#main .slide.one').height($('#main .slide.two').height());
                } else {
                    $('#blink').removeClass('back');
                    //$('#main .slide.one').height('auto');
                }
            }
        });
    });

    // blink

    var letter = document.getElementById("blink");
    var cyclical = true;

    function say(string, index){
        if(index < string.length){
            setTimeout(function(){
                letter.innerHTML = string[index];
                say(string,++index);
            },100);
            } else if(cyclical){
            say(string, 0);
        }
    }
    say("☂☔☂☔☂☔☂☔☂☔☂☔☐☒☐☒☐☒☐☑☐☑☐☑♔♚♕♛♖♜♘♞☰☱☲☴☰☱☳☷☶☴☰☴☶☷☳☱☰☴☲☵☲☵☲☰☷☰☷☠ ☠ ☠ ☠ ☠ ☠ 73✢✣✤✥✽✻✼❋❊❉✺✹✸✷✶✦➝➞➟➠➩➪➯➱➩➪➯➱",0);

    // fitvids

    $('.fit-video').fitVids();

    // window resize

    $(window).on('debouncedresize',function(event){
    });

    // window load

    $(window).on('load',function(){
        // setTimeout(function(){
        //     $('.projects > li').each(function(delay) {
        //         // $(this).animate({opacity: 0, 'left': '0'}, 0).delay(delay * 73).css({'pointer-events': 'all'}).animate({opacity: 1, 'left': '+=10px'}, 150, 'easeOutExpo');
        //         // $(this).stop().delay(delay * 100).addClass({
        //         //     opacity: 1
        //         // }, 300);
        //         $(this).stop().delay(delay * 100).animate({
        //             left: '+=50px',
        //             opacity: '1'
        //         });
        //     });
        // },500);
    });

});