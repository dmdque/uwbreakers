var container = document.querySelector('#container');
console.log('container', container);
var msnry = new Masonry( container, {
  columnWidth: 200,
  //gutter: 10,
  itemSelector: '.item'
});
