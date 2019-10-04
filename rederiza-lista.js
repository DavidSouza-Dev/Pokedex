renderizaLista();
//renderizaCard();

function renderizaLista(){
    for (var i=1; i<=10; i++){
        
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${i}`,
            method: 'GET',
            dataType:'json',
            headers: {
                'Content-Type': 'application/json',
            },
            async: false,
            success: (resposta) => {
                //console.log(resposta);
                
                //variáveis
                var id = ("000"+ resposta.id).slice(-3);
                var nome = resposta.species.name.toUpperCase();
                var avatar = resposta.sprites.front_default;
                $(".linha").append(`
                    <li id="${id}" value="${resposta.id}">
                        <span>ID: ${id}</span>
                        <a class="pokemon" href="index.html"> ${nome}    
                            <img class="minuatura" "height="40" width="40"src=${avatar}>
                        </a>
                    </li>`);
            
                    /* $(".avatar").append(`<img class="pikachu" "height="116" width="116"src=${resposta.sprites.front_default}>`);    */
                
                /*$(".pokedex").append(`<div>TIPO: ${resposta.types[0].type.name}`)
                $(".pokedex").append(`<div>VERSION: ${resposta.game_indices[4].version.name}</div>`)
                for(var i=0; i<6; i++){
                    $(".status").append(`<div>${resposta.stats[i].stat.name.toUpperCase()}: <div style="width:${resposta.stats[i].base_stat}%; height: 20px; background-color:gray;"></div>`);
                    
                } */
                /* for(var i=0; i<85; i++){
                        var NOMEATAQUE = resposta.moves[i].move.name;
                    if(NOMEATAQUE ==="thunderbolt" ){
                        $(".pokedex").append(`<div>PRINCIPAL ATAQUE: ${NOMEATAQUE}`)
                        }
                    
                    } */
                } 
        }); 
        
    }
}

/* function renderizaCard(){
     $.ajax({
        url:`https://pokeapi.co/api/v2/pokemon/1`,
        method: 'GET',
        dataType:'json',
        headers: {
            'Content-Type': 'application/json',
        },
        success: (resposta) => {
            console.log(resposta);
            var nome = resposta.name.toUpperCase();
            var imagem = resposta.sprites.front_default;
            var altura = resposta.height;
            var peso = resposta.weight;
            

            $(".card").append(`
            <h4>${nome}</h4>`).append(`<img class="pikachu" "height="116" width="116"src=${imagem}>`);

            $(".card").append(`
                    <div class="altura">
                        Height:    ${altura}'
                    </div> 
                    <div class="peso">
                        Weight:    ${peso} lb's
                    </div>
                `);


            for (var i=0; i<resposta.types.length; i++){
                $(".tipo").append(`
                    <div class="nome-tipo">
                        ${resposta.types[i].type.name.toUpperCase()}
                    </div>
                    `) 
            }
            
        
        
        } 
    });  

        
} */
/* var teste = function teste(){
    $(document).ready(function(){
        $(" li").click(function(){

            
        });
    });
} 

console.log(teste); */


$(document).ready(function(){
    $(" li").click(function(){
        $(".card").html("")
        //$(".card").trigger('reset');
        console.log(`${$(this).attr('value')}`);
        var URL = `https://pokeapi.co/api/v2/pokemon/${$(this).attr('value')}`;
        console.log(URL)
        
        $.ajax({
            url:URL,
            method: 'GET',
            dataType:'json',
            headers: {
                'Content-Type': 'application/json',
            },
            success: (resposta) => {
                console.log(resposta);
                var nome = resposta.name.toUpperCase();
                var imagem = resposta.sprites.front_default;
                var altura = resposta.height;
                var peso = resposta.weight;
                
                
                $(".card").append(`
                <h4>${nome}</h4>`).append(`<img class="avatar-card" "height="116" width="116"src=${imagem}>`);

                $(".card").append(`
                        <div class="altura">
                            Height:    ${altura}'
                        </div> 
                        <div class="peso">
                            Weight:    ${peso} lb's
                        </div>
                        <div class="tipo"></div>
                        <div class="maisinfo" value="${$(this).attr('value')}">More <i class="fas fa-angle-double-right"> </i></div>
                    `);

                console.log (resposta.types[0])
                for (var i=0; i<resposta.types.length; i++){
                    console.log (resposta.types[i].type.name.toUpperCase())
                    $(".tipo").append(`
                        
                            <div class="nome-tipo">
                            ${resposta.types[i].type.name.toUpperCase()}
                            </div>
                        
                        `) 
                }
                
            
            
            } 
        });   //fim ajax
    
    
    });//fim li
});//fim listener


$(document).ready(function(){

    $('.maisinfo').click(function(){ 
        console.log("fui clicado");
        $(this).closest('.maisinfo').remove();
    });

    /* $(".avatar").click(function(){
        console.log("fui clicado");
        $(".maisinfo").html("")
        
        console.log("fui clicado");
         var URL = `https://pokeapi.co/api/v2/pokemon/${$(this).attr('value')}`;
        console.log(URL)
        
        $.ajax({
            url:URL,
            method: 'GET',
            dataType:'json',
            headers: {
                'Content-Type': 'application/json',
            },
            success: (resposta) => {
               console.log(resposta)
                
                
                
            
            
            } 
        });    //fim ajax
    
    
    });//fim li*/
});    
