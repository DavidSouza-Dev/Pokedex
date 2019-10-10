renderizaLista();

carregaCard(); 
efeitoHover();

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
                    <li id="${id}" value="${resposta.id}" name="${nome}">
                        <span>ID: ${id}</span>
                        <a class="pokemon" href="#"> ${nome}    
                            <img class="minuatura" "height="40" width="40"src=${avatar}>
                        </a>
                    </li>`);
            
                    
                }
                
        }); 
        
    }

    
}


function carregaCard(){
    $(document).ready(function(){
        $(" li").click(function(){
            //limpa div avatar onde está o card
            $(".avatar").html("")
           
            //botão More
            $(".avatar").append(`<div class="maisinfo" value="${$(this).attr('value')}">More <i class="fas fa-angle-double-right"> </i></div>`);
            $(".maisinfo").attr(`value`,`${$(this).attr('value')}`) 
           
            //console.log(`value li: ${$(this).attr('value')}`);

            //carregamento de card a partir do value do li
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
                    
                    
                    $(".avatar").append(`
                    <div class="card">
                        <h4>${nome}</h4>
                        <img class="avatar-card" "height="116" width="116"src=${imagem}>
                    </div>`);

                    $(".card").append(`
                            <div class="altura">
                                Height:    ${altura}'
                            </div> 
                            <div class="peso">
                                Weight:    ${peso} lb's
                            </div>
                            <div class="tipo"></div>
                            
                        `);
                    
                    

                    //console.log (resposta.types[0])
                    for (var i=0; i<resposta.types.length; i++){
                        console.log (resposta.types[i].type.name.toUpperCase())
                        $(".tipo").append(`
                            
                                <div class="nome-tipo">
                                    ${resposta.types[i].type.name.toUpperCase()}
                                </div>
                            
                            `) 
                    }
                    
                    maisInfo();
                
                } 
            });   //fim ajax
        
        
        });//fim li
    });//fim listener
}

//Função que renderiza o Card com mais informações
function maisInfo(){
    $(document).ready(function(){
        $('.maisinfo').click(function(){ 
            console.log("fui clicado");
                $(".avatar").html("")
                $(".card").html("")


            $.ajax({
                url:`https://pokeapi.co/api/v2/pokemon/${$(this).attr('value')}`,
                method: 'GET',
                dataType:'json',
                headers: {
                    'Content-Type': 'application/json',
                },
                success: (resposta) => {
                    console.log(resposta)
                    $(".avatar").append(`
                        <div class="card" >
                            <img class="avatar-card" "height="116" width="116"src=${resposta.sprites.front_default}>
                        </div`);

                    $(".card").css({"padding-top":"0px"}) //aplicando estilo

                    $(".card").append(`
                        <div style="margin-left:-5px; align-self:flex-start; line-height:2em;">
                            NAME: ${resposta.species.name.toUpperCase()}
                        </div>`)
                                    
                    for(var i=0; i<6; i++){
                        $(".card").append(`
                            <div class="stats-name" style="align-self:flex-start; line-height:1em;">
                                ${resposta.stats[i].stat.name.toUpperCase()}: 
                                <div style="width:${resposta.stats[i].base_stat}%; height: 10px; background-color:gray;">
                            </div>`);
                        
                    }
                        
                } 
            });  

        });
    });   
} 

//aplicando estilo Hover
function efeitoHover(){
    $(document).ready(function(){
        $('span').hover(function(){ 
            
            $(this).css({"background-color":"lightgray"})
            $(this).siblings(".pokemon").css({"background-color":"lightgray","transition":"all 0.1s" })   
        }, function(){
            $(this).css({"background-color":"whitesmoke","transition":"all  0.1s" })
            $(this).siblings(".pokemon").css({"background-color":"whitesmoke","transition":"all  0.1s" }) 
        });
    });

    $(document).ready(function(){
        $('.pokemon').hover(function(){ 
            
            $(this).css({"background-color":"lightgray","transition":"all 0.1s" })
            $(this).siblings("span").css({"background-color":"lightgray","transition":"all 0.1s" })   
        }, function(){
            $(this).css({"background-color":"whitesmoke","transition":"all 0.1s" })
            $(this).siblings("span").css({"background-color":"whitesmoke","transition":"all 0.1s" }) 
        });
    });

}