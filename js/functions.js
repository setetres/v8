$(document).ready(function(){

    var letter = document.getElementById("letter");
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
    say("☂☔☂☔☂☔☂☔☂☔☐☒☐☒☐☒☐☑☐☑☐☑♔♚♕♛♖♜♘♞☰☱☲☴☰☱☳☷☶☴☰☴☶☷☳☱☰☴☲☵☲☵☲☰☷☰☷✢✣✤✥✽✻✼❋❊❉✺✹✸✷✶✦➝➞➟➠➩➪➯➱➩➪➯➱",0);

    $('.fit-video').fitVids();

    $(window).on('debouncedresize',function(event){
    });

});