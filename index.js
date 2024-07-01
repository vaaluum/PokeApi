function prticion(){

    let result = document.querySelector(".result");
    console.log(result);
    let input = document.querySelector ("#npok").value;
    let html = ``;
    fetch ('https://pokeapi.co/api/v2/pokemon/'+ input)
    .then(response => response.json())
    .then ((data) => {
      result.innerHTML = `<h1>${data.name}</h1><img src="${data.sprites.other.home.front_default}" />`;
    });
}
