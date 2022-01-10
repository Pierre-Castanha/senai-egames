$(document).ready
    let slideAtual=1;
    let listaSlides=["banner-imagem1", "banner-imagem2", "banner-imagem3", "banner-imagem4", "banner-imagem5"];

    setInterval(slide, 1500);

    function slide(){
        console.log("slideAtual:", slideAtual);

        if (slideAtual>0) {
            $ ("#carrossel".removeClass(listaSlides[slideAtual -1]))
        } else if (slideAtual==0){
            $ ("#carrossel".removeClass(listaSlides[(listaSlides.length)-1]))
        }
        $ ("#carrossel").addClass(listaSlides[slideAtual])
        slideAtual++;
        }
})