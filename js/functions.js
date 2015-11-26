$(document).ready(function(){

    $(function() {
        new Dragdealer('drag', {
            x: window.location.hash == '#about' ? 1 : 0,
            steps: 2,
            animationCallback: function(x) {
                $('.about .slides').css('margin-left', (-x * 100) + '%');
                $('.content .slides').css('margin-left', (x * 100) + '%');
                $('.bar .slides').css('margin-left', (-x * 100) + '%');
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

});