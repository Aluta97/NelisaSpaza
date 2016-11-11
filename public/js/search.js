$(this).attr('visible','true');
  });

  var catCount = $('.results tbody tr[visible="true"]').length;
    $('.counter').text(catCount + ' item');

  if(catCount == '0') {$('.no-result').show();}
    else {$('.no-result').hide();}
      });
});
