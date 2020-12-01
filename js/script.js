

$(function(){
    $('img').on('click' , function() {

        jQuery('.show').css({
            backgroundImage : `url(${ $(this).attr('src') })` , 
            backgroundSize : 'cover'
        })
        
        $('.show').fadeIn(2000);
        $('.container').addClass('filter')

        $('.show .close').on('click' , function() {
            $('.show').slideUp();
            $('.container').removeClass('filter');
        })
      
    })
})