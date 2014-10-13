// or with jQuery
var $container = $('#container');
// initialize Masonry after all images have loaded  
$container.imagesLoaded( function() {
  $container.masonry();
});

$('.container').masonry({
  columnWidth: 0,
  itemSelector: '.item'
});