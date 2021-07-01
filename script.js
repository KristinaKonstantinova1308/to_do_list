$(function(){
  $('#buttonone').click(function(){
     $('#del').css('display','none');
     var inpText = $('#nameinp').val();
     var areaText = $('textarea').val();    
     $('.left').append('<div class="block">'+'<div class="name">'+inpText+'<input type = "image" src = "https://i.postimg.cc/bNgRt1cR/cross.png" class="cross">'
    	+'<input type = "image" src = "https://i.postimg.cc/RZwbyNj6/arrow.png" class="arrow">'+'</div>'+'<div class="discription">'+areaText+'</div>'+'</div>'); 
     $('#nameinp, textarea').val('');
  });
});
 
     $(document).on('click', '.cross', function(){$(this).parents('.block').remove();
           if($('.block:all').remove()){$('#del').css('display','block');}
     });
     $(document).on('click', '.arrow', function(){
           if($(this).css('transform') == 'none'){$(this).css('transform','rotate(90deg)');}else{$(this).css('transform','none');}
           if($(this).parent().parent().children('.discription').is(':visible')){$(this).parent().parent().children('.discription').hide();}
           else{$(this).parent().parent().children('.discription').show();}
     });