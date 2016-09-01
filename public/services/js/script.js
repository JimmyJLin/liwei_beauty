$(document).ready(function() {

  console.log("Service script.js")

  $("#onHoverLargeClickable").popup()
  $("#onHoverLargeClickableTwo").popup()
  $("#onHoverLargeClickableThree").popup()
  $("#leftandrightpadding").popup()
  $("#leftandrightpaddingTwo").popup()

  $("#onHoverLargeClickable").click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
  })

  $("#onHoverLargeClickableTwo").click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
  })

  $("#onHoverLargeClickableThree").click(function(){
    window.location = $(this).find("a").attr("href");
    return false;
  })


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

  // start rating on portfolio
  $('.ui.rating').rating({initialRating:3, onRate: function(){console.log('thanks', $(this).rating('get rating'))}})

  // accordion
  $('.ui.accordion').accordion()

})
