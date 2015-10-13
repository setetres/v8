$(document).ready(function(){

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
    say("☂☔☂☔☂☔☂☔☂☔☂☔☐☒☐☒☐☒☐☑☐☑☐☑♔♚♕♛♖♜♘♞☰☱☲☴☰☱☳☷☶☴☰☴☶☷☳☱☰☴☲☵☲☵☲☰☷☰☷☠ ☠ ☠ ☠ ☠ ☠ ✢✣✤✥✽✻✼❋❊❉✺✹✸✷✶✦➝➞➟➠➩➪➯➱➩➪➯➱",0);

    // fitvids

    $('.fit-video').fitVids();

    // window resize

    $(window).on('debouncedresize',function(event){
    });

});