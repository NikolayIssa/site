$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    $(".firstimg").css({
    transform: 'scale('+(100 + scroll/250)/100+')',
    });

    var scroll = $(window).scrollTop();
    $(".thirdimg").css({
    transform: 'scale('+(100 + scroll/250)/100+')',
    });

    var scroll = $(window).scrollTop();
    $(".secondimg").css({
    transform: 'scale('+(100 + scroll/250)/100+')',
    });
  });

  function before(){
    document.getElementById('cost')
    .innerHTML="500Р";
}
 
function afterr(){
    document.getElementById('cost')
    .innerHTML='650Р';
}

function ChangeForm(){
  document.getElementById('pizzaBebra')
}