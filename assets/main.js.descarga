$(function(){
    setContentHeight()
    $( window ).resize(function() {
        setContentHeight();
    });
    /*
    ** Navbar
    */
    $('nav .container .menu li a').click(function (event) {
        event.preventDefault();
        if ($('#submenu ' + $(this).attr('href')).attr('style') == 'display: block;') {
            $('#submenu ' + $(this).attr('href')).hide(200);
            return false;
        } else {
            $('#submenu ul').hide(500);
            $('#submenu ' + $(this).attr('href')).show(500);
        }
    });

    $('nav #submenu li a').click(function(event){
        $(this).closest('ul').hide(500);
    })
})

function setContentHeight(){
    const paddingContent = 20;
    var heightContent = $(window).height() - $('header').height() - $('body > nav').height() - $('footer').height() - paddingContent;
    if(($('#container').height() + paddingContent) < heightContent){
        $('#container').css('min-height', heightContent);
    } else{
        if(($('#container article').height() + paddingContent) < heightContent){
            $('#container').css('min-height', heightContent);
        }
    }
}

function loadFunctions(){
    setModal();
}

function setModal(){
    if($('.modal').length){
        $('.modalBtn').unbind().click(function(event){
            event.preventDefault();
            $('.modal-background').show(500);
            $($(this).data('modal')).show(500);
            $('.modal-background').click(function(event){
                $(this).hide();
                $('.modal').hide();
            })
        })
    }
}