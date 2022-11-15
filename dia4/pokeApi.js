function getPokemon() {

    let url = "https://pokeapi.co/api/v2/pokemon/" + document.getElementById("nombre").value;

    let param =
    {
        headers: { "Content-type": "application/json; charset= UTF-8" },
        method: "GET"
    }

    fetch(url, param)
        .then(function (data) {
            return data.json()
        })
        .then(function (result) {

            $("#foto").html(``)
            $("#foto").append(`<img src="${result.sprites.front_default}">`)
            $("#foto").append(`<img src="${result.sprites.back_default}">`)
            $("#foto").append(`<img src="${result.sprites.front_shiny}">`)
            $("#foto").append(`<img src="${result.sprites.back_shiny}">`)

            $("#habilidadesTitulo").html(`HABILIDADES`)
            $("#habilidades").html(``);
            for (let i = 0; i < result.abilities.length; i++) {

                $("#habilidades").append(`<tr><td>${result.abilities[i].ability.name}</td></tr>`);

            }

            $("#movimientosTitulo").html(`MOVIMIENTOS`)
            $("#movimientos").html(``);
            for (let i = 0; i < result.moves.length; i++) {

                $("#movimientos").append(`<tr><td>${result.moves[i].move.name}</td></tr>`);

            }



        })
        .catch(function (error) {
            console.log(error)
        })

}