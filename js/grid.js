function createGrid () {
    if (!$('#grid').length) {
        $('body').append('<div id="grid"></div>');
    }

    $grid = $('#grid').empty();
    var pageWidth = $('.center').width();

    $grid.css({
        width: pageWidth,
        height: "100%",
        position: "fixed",
        margin: "0 auto",
        marginLeft: -$('.center').width()/2,
        top: "0",
        left: "50%",
        zIndex: 1000,
    });

    var colWidth = 60;
    var colSep = 20;
    var colCount = 1;

    for(colLeft=0;colLeft<=pageWidth;colLeft=(colWidth+colSep)*(colCount-1)){
        $grid.append('<span class="col col-'+colCount+'">#'+colCount+'<br/>'+(((colWidth+colSep)*colCount)-colSep)+'px</span>');
        $('.col-'+colCount, $grid).css({
            width: colWidth,
            position: "absolute",
            paddingTop: "10px",
            top: "0",
            left: colLeft,
            bottom: "0",
            background: "#BEF202",
            opacity: 0.5,
            fontFamily: "Courier New",
            fontSize: "11px",
            lineHeight: "22px",
            textAlign: "center",
            color: "#000100"
        });
        colCount++;
    }
}

function createSwitch () {
    $('body').append('<span id="grid-switch">show</span>');
    $('#grid-switch').css({
        position: "fixed",
        zIndex: 1001,
        top: "0",
        right: "0",
        background: "#000100",
        width: "60px",
        fontFamily: "Courier New",
        fontSize: "11px",
        lineHeight: "30px",
        textAlign: "center",
        cursor: "pointer",
        color: "#F2F2F2"
    });

    $('body').delegate('#grid-switch', 'click', function() {
        $(this).text(this.innerHTML == "hide" ? 'show' : 'hide');
        $(this).attr('rel',this.rel == "on" ? 'off' : 'on');
        $($('#grid').is(':visible') ? $('#grid').hide() : $('#grid').show());
        createGrid();
    });
}

$(document).ready(function() {
    createSwitch();
    $(window).resize(function(e) {
        if ($('#grid-switch').attr('rel') == 'on') {
            window.setTimeout(function() {
                createGrid();
            }, 600);
        }
    });
});