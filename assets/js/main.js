//quand la page est chargée
$(function(){
    //on appelle à intervale régulier la fonction qui animte les icones
    setInterval(iconAnimate,2000);
    function iconAnimate(){
        //la variable offset permet de créer un décalage dans les animations
        var offset=0;
        /* pour chaque element pourtant portant la class idle, j'ajoute une animation avec intervale, avec un leger decalage*/
        $('.idle').each(function(){
            offset+=100;
            $(this).delay(offset).animate({top:'-8'},'fast').animate({top:'0'},'fast');
        });
    }
    // je met à jour les animations
    updateAnimations();
    //smooth scroll lorsque je clique sur un lien
    $('a').click(function(){
        // j'anime le html et le body et je scroll vers l'ancre href
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
});
//si je scrolle
$(window).scroll(function(){
    //je met à jour les animations
    updateAnimations();
});
//cette fonction met à jour les animations se déclenchant à
//l'apparition sur l'écran
function updateAnimations(){
    //animation des progressbars
    $( ".progress_bar" ).each(function() {
        if ( isInViewport($(this)) ){
            //je recupère la valeur de l'attribut pourcent
            var percent = parseInt($( this ).attr("pourcent"));
            //selon la valeur de la compétence j'assigne a la variable progressColor la couleur
            if(percent<25)	{ var progressColor='red'; }
            else if(percent<70)	{ var progressColor='orange'; }
            else if(percent<=100) { var progressColor='green'; }
            //on change la couleur et on anime la barre de progression
            $(this).css({backgroundColor: progressColor});
            // $(this).stop();
            $(this).animate({'width': percent+'%'}, 1000);
        }else{
            $(this).stop();
            $(this).css('width','1%');
        }
    });
    //apparition du texte
    $.each($('p:not(.nofade), li, h2, h3, h4, img:not(.nofade)'),function(){
        if ( isInViewport($(this)) ){
            $(this).animate({'opacity' : 1}, 750);
        }else{
            $(this).stop();
            $(this).css('opacity' , '.2');
        }
    });
}
//cette fonction vérifie que l'élément qui appelle la fonction est visible à l'écran
function isInViewport(element){
    var windowTop = $(window).scrollTop();
    var windowBottom = windowTop + $(window).innerHeight();
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    return ( (elementBottom >= windowTop && elementBottom <= windowBottom)  ||  (elementTop >= windowTop && elementTop <= windowBottom) );
}
