//Fungsi untuk mengambil data pokemon berdasarkan ID menggunakan AJAX jquery
function fetchPokemonData(id) {
  return $.ajax({
    url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
    method: "GET",
    dataType: "json",
  })
    .done(function (pokemonData) {
      displayPokemonCard(pokemonData);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error("Data pokemon tidak dapat diambil", errorThrown);
    });
}

//Fungsi untuk menampilkan kartu pokemon
function displayPokemonCard(pokemonData) {
  const pokemonCard = $("<div></div>").addClass("pokemon-card");

  //Menambahkan kelas berdasarkan tipe pokemon
  pokemonData.types.forEach((type) => {
    pokemonCard.addClass(type.type.name);
  });

  const pokemonNumber = $("<p></p>").text(
    `#${pokemonData.id.toString().padStart(3, "0")}`
  );
  const pokemonName = $("<h3></h3>").text(pokemonData.name);
  const pokemonTypes = $("<p></p>").text(
    `Tipe: ${pokemonData.types.map((type) => type.type.name).join(",")}`
  );

  const pokemonStats = $("<p></p>").text("Statik Pokemon:");
  pokemonData.stats.forEach((stat) => {
    const statInfo = $("<span></span>").text(
      `${stat.stat.name}: ${stat.base_stat}`
    );
    pokemonStats.append(statInfo);
    pokemonStats.append("<br>");
  });
  const pokemonImage = $('<img>')
    .attr("src", pokemonData.sprites.font_default)
    .attr("alt", pokemonData.name);

  pokemonCard.append(pokemonNumber);
  pokemonCard.append(pokemonName);
  pokemonCard.append(pokemonTypes);
  pokemonCard.append(pokemonStats);
  pokemonCard.append(pokemonImage);
  $('#pokedex').append(pokemonCard);
}

// Fungsi untuk menampilkan Pokédex Nasional
function displayNationalPokedex() {
  const pokedex = $("#pokedex");
  pokedex.empty(); // Kosongkan konten yang sudah ada

  const numberOfPokemon = 721; // Pokédex Nasional hanya terdiri dari 721 Pokémon

  // Buat array untuk menyimpan semua promise untuk mengambil data Pokémon
  const pokemonPromises = [];
  for (let i = 1; i <= numberOfPokemon; i++) {
    pokemonPromises.push(fetchPokemonData(i));
  }

  // Tunggu semua promise untuk di-resolve menggunakan when() dari jQuery
  $.when.apply(null, pokemonPromises).done(function () {
    // Setelah semua data diambil, tampilkan kartu Pokémon
    const sortedPokemon = Array.from(arguments).sort((pokemonA, pokemonB) => {
      return pokemonA.id - pokemonB.id; // Mengurutkan berdasarkan nomor indeks Pokémon
    });

    // Menampilkan kartu Pokémon yang telah diurutkan
    sortedPokemon.forEach((pokemonData) => {
      displayPokemonCard(pokemonData);
    });
  });
}

// Panggil fungsi displayNationalPokedex untuk menampilkan Pokédex Nasional ketika halaman dimuat
$(document).ready(function () {
  displayNationalPokedex();
});
