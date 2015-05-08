$(document).ready(function() {
    $('.tab').hover(function(){
        $('.tab').css({'width':'360px'});
        $(this)
            .addClass('active')
            .css({'width':'560px', 'backgroundPosition': '-1040px 0'})
            .siblings().css({'backgroundPosition': '-1238px 0'})
            .removeClass('active');
        $(this).find('span.text').addClass('active').removeClass('not_active');
        $(this).siblings().find('span.text').removeClass('active').addClass('not_active');
    });

    $('.add_post .add').click(function () {
        $('#write_post').slideToggle();
    });

    $('.search').keypress(function(e){
        e.preventDefault();
        if(e.keyCode==13){
            $('.main_menu').hide();
            $('.seacrh_items').show();
        }
    });
});;$(function() {





});