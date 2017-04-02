$(document).ready(()=>{
    $('#jumbo-header-text').addClass('animated fadeInUp');

    $('#jumbo-header-text').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', animateJumboText());
    
    function animateJumboText(){
        $("#jumbo-body-text").addClass('animated slideInLeft');
    }






    $('#nav-name-brand').on('click', (e)=>{
        e.preventDefault();
        floating({
            content: '<img src="assets/img/misc/eyes-moji.svg">',
            number: 5,
            duration: 17
        });
        floating({
            content: '<img src="assets/img/misc/bball-moji.svg">',
            number: 5,
            duration: 10,
            direction: 'reverse',
            size: 2
        });
        floating({});
    })
})