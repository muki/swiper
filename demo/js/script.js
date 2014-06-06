$(document).ready(function() {
    
    $('.swipe')[0].addEventListener('swr', function() {
        alert('right');
    }, false);
    $('.swipe')[0].addEventListener('swl', function() {
        alert('left');
    }, false);
    
});
