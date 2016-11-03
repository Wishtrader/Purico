
var link = document.querySelector(".contact-link");
var popup = document.querySelector(".contact-bg");
var close = popup.querySelector(".close");
var send = popup.querySelector(".btn");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("contact-bg-show");

});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("contact-bg-show")) {
            popup.classList.remove("contact-bg-show");
            popup.classList.remove("modal-error");
        }
    }
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("contact-bg-show");
    popup.classList.remove("modal-error");
});



$('.check').click(function(e){
  e.preventDefault();
  $(this).addClass('checked');
  retun: false;
});

$('.btn').click(function(e){
  e.preventDefault();
  if($('.check').hasClass('checked'))
    {
      $('#form').html('Message sent');
    }
  else{
    $('#form').append('<br>Yer a bot Harry');
  }f
  retun: false;
});
