/* By fadilxcoder */
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item'
});

//layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry();
});  