$(document).ready(function(){

    $(function() {
  new Dragdealer('demo-simple-slider', {
    // Allow page to be opened with the test results directly
    x: window.location.hash == '#runner' ? 1 : 0,
    steps: 2,
    animationCallback: function(x) {
      $('.home').css('margin-left', (-x * 100) + '%');
      $('.info').css('margin-left', (-x * 100) + '%');
      $('.content').css('margin-left', (x * 100) + '%');
      if (x > 0.5) {
        // $('#main .slide.one').height($('#main .slide.two').height());
      } else {
        // $('#main .slide.one').height('auto');
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