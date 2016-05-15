$(function(){
  console.log("Regular script.js")
  // Dropdown Menu for Services
  $('.dropdown').dropdown()

  // mobile menu responsive on index page
  $('#m_btn').on('click', function(){
    $('#m_menu').sidebar('toggle');
  })


  // fix main menu to page on passing
  $('.main.menu').visibility({
    type: 'fixed'
  });
  $('.overlay').visibility({
    type: 'fixed',
    offset: 80
  });

  // lazy load images
  $('.image').visibility({
    type: 'image',
    transition: 'vertical flip in',
    duration: 500
  });

  // show dropdown on hover
  $('.main.menu  .ui.dropdown').dropdown({
    on: 'hover'
  });

})
