//quand la page est chargée
$(function(){
    setInterval(iconAnimate,2000);
    function iconAnimate(){
        var offset=0;
        /* pour chaque element pourtant portant la class idle, j'ajoute une animation avec intervale, avec un leger decalage*/
        $('.idle').each(function(){
            offset+=100;
            $(this).delay(offset).animate({top:'-8'},'fast').animate({top:'0'},'fast');
        });
    }

    //animation des progressbar
    //pour chaque progress bar
    $( ".progress_bar" ).each(function() {
        //je recupère la valeur de l'attribut pourcent
		var percent = parseInt($( this ).attr("pourcent"));
        //selon la valeur j'assigne a la variable progressColor la couleur
		if(percent<25)
		{
            var progressColor='red';
		}
        //si c'est inférieur à 50%
		else if(percent<70)
		{
            var progressColor='orange';
		}
        else if(percent<=100)
		{
            var progressColor='green';
		}
        $(this).css({backgroundColor: progressColor});
		$(this).animate({width: '+='+percent+'%'}, 1000 );
    });
});
