$(document).ready(function() {
  var header = $('#fixed-header');
  var form = $('#signup');
  var start = $(form).offset().top;
  
  $.event.add(window, "scroll", function() {
    var p = $(window).scrollTop();
    if(p > start){
      $(header).addClass("visible-header");
    }
    else{
      $(header).removeClass("visible-header");
    }
  });

  $("#show-form").click(function(){
    $(header).addClass("visible-form");
  });



  $('.subsc-form').submit(function(e) {
    e.preventDefault();
    var form = $(this);
    var action = form.attr('action');
    name = $("input[name='name']",form).val();
    email = $("input[name='email']",form).val();
    $.ajax({
      url: action,
      type: 'POST',
      data: {
        name: name,
        email: email
      },
      success: function(data){
        var res = jQuery.parseJSON(data);
        if(res.error) $('.flash-msg > .msg').html(res.data).removeClass("success").addClass("error");
        else $('.flash-msg > .msg').html(res.data).removeClass("error").addClass("success");
        $('.flash-msg').slideDown(150);
      },
      error: function() {
        $('.flash-msg > .msg').html(res.data).removeClass("success").addClass("error");
        $('.flash-msg').slideDown(150);
      }
    });
    return false;
  });


});