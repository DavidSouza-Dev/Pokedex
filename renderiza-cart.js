var xhr = new XMLHttpRequest();

xhr.open("GET","https://pokeapi.co/api/v2/pokemon/pikachu");
xhr.addEventListener("load",function(){
    var resposta = xhr.responseText;


/*     console.log(resposta)*/    
    resposta = JSON.parse(resposta)
    console.log(resposta)
    
    $(".pokedex").append(`<img class="pikachu" "height="116" width="116"src=${resposta.sprites.front_default}>`);   
    $(".pokedex").append(`<div>NAME: ${resposta.species.name}</div>`)
    $(".pokedex").append(`<div>TIPO: ${resposta.types[0].type.name}`)
    $(".pokedex").append(`<div>VERSION: ${resposta.game_indices[4].version.name}</div>`)
    for(var i=0; i<6; i++){
        $(".status").append(`<div>${resposta.stats[i].stat.name.toUpperCase()}: <div style="width:${resposta.stats[i].base_stat}%; height: 20px; background-color:gray;"></div>`);
        
    }
    
  for(var i=0; i<85; i++){
        var NOMEATAQUE = resposta.moves[i].move.name;
       if(NOMEATAQUE ==="thunderbolt" ){
        $(".pokedex").append(`<div>PRINCIPAL ATAQUE: ${NOMEATAQUE}`)
        }
    
    }

    

});
   
   
   
xhr.send(); 

