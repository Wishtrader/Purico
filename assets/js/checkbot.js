/ by @nodws
// You can use double click just in case bots get clever
$('.checkbot').click(function(e){
  e.preventDefault();
  $(this).addClass('checkedbot');
  retun: false;
});

$('.submit').click(function(e){
  e.preventDefault();
  if($('.checkbot').hasClass('checkedbot'))
    {
      $('#formbot').html('Message sent');
    }
  else{
    $('#formbot').append('<br>Yer a bot Harry');
  }
  retun: false;
});