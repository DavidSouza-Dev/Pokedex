$.ajax({
    url:"16401_1.json",
    method: 'GET',
    dataType:'json',
    headers: {
        'Content-Type': 'application/json',
    },
    success: (resposta) => {
        console.log(resposta);

        $(".linha").append(`<div class="id">ID: ${("000"+ resposta.id).slice(-3)} </div>`);
        $(".linha").append(`<div>${resposta.species.name.toUpperCase()}</div>`);
       /*$(".lista").append(`<img class="pikachu" "height="116" width="116"src=${resposta.sprites.front_default}>`);   
          
        $(".pokedex").append(`<div>TIPO: ${resposta.types[0].type.name}`)
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
$.ajax({
    url:"16401_1.json",
    method: 'GET',
    dataType:'json',
    headers: {
        'Content-Type': 'application/json',
    },
    success: (resposta) => {
        console.log(resposta);

        $(".linha").append(`<div class="id">ID: ${("000"+ resposta.id).slice(-3)} </div><div>${resposta.species.name.toUpperCase()}</div>`);
        
       /*$(".lista").append(`<img class="pikachu" "height="116" width="116"src=${resposta.sprites.front_default}>`);   
          
        $(".pokedex").append(`<div>TIPO: ${resposta.types[0].type.name}`)
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