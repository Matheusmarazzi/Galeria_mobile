// função listar imagens
function listar(){
    for (let i = 1; i <= 18; i++) {
        $("#galeria").append('<img src="img/'+i+'.jpg" class="image"/>');
      }
}
// função dar zoom imagem
$(document).on('touchstart','.image',function() {
  $(this).addClass("zoom"); 


});
$(document).on('touchend','.image',function() {
  $(this).removeClass("zoom"); 


});
