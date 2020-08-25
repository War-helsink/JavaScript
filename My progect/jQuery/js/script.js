$(document).ready(function () {
    function clickModal(event) {
        $('.overlay').fadeToggle('slow');
        $('.modal').fadeToggle('slow');        
    }
    function clearModal(event) {
        $('.overlay').fadeToggle('slow');
        $('.modal').fadeToggle('slow');
    }

    $('.main_btna:first').click((event) => { clickModal(event);});
    $('.main_btn:first').click((event) => { clickModal(event); });
    $('div.col-sm-7 nav ul li a:eq(1)').click((event) => { clickModal(event); });
    $('.close').click((event) => { clearModal(event);});  
    

});