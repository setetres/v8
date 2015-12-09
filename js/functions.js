$(document).ready(function(){

    // target blank

    $('a[rel=external]').attr('target', '_blank');

    // hover

    $(".project-list > li").each(function(i) {
        if (i != 0) {
            $("#hover").clone().attr("id", "hover" + i).appendTo($(this).parent());
        }
        $(this).data("hover", i);
    }).mouseenter(function() {
        $("#hover" + $(this).data("hover"))[0].play();
    });
    $("#hover").attr("id", "hover0");

    // drag!

    $(function() {
        new Dragdealer('drag', {
            steps: 2,
            animationCallback: function(x) {
                $('.bar .slides').css('margin-left', (-x * 100) + '%');
                $('.about .slides').css('margin-left', (-x * 100) + '%');
                // $('.content .slides').css('margin-left', (x * 100) + '%');
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

    // window resize

    $(window).on('debouncedresize',function(event){
    });

    // window load

    $(window).on('load',function(){
    });

});
