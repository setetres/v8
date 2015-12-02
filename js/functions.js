$(document).ready(function(){

    window.sr = new scrollReveal({
        easing: 'cubic-bezier(0.19, 1, 0.22, 1)',
        over:   '0.3s',
        move:   '100px',
        enter:  'left',
        viewport: document.getElementById('mirror')
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
                    $('.handle').addClass('back');
                    //$('#main .slide.one').height($('#main .slide.two').height());
                } else {
                    $('.handle').removeClass('back');
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

    // $('.fit-video').fitVids();

    // window resize

    $(window).on('debouncedresize',function(event){
    });

    // window load

    $(window).on('load',function(){
    });

});
