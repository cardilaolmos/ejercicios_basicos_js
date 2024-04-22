
const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 125 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];

peliculaSmall = [];
peliculaMedium = [];
peliculaLarge = [];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].durationInMinutes < 100) {
        peliculaSmall.push (movies[i].name);
    }

    else if (movies[i].durationInMinutes >100 && movies[i].durationInMinutes<200) {
        peliculaMedium.push (movies[i].name);
    }
    else if (movies[i].durationInMinutes > 200) {
        peliculaLarge.push (movies[i].name);
    }
  }
  
  console.log("Peliculas de menos de 100 minutos: " + peliculaSmall);
  console.log("Peliculas de entre 100 y 200 minutos: " + peliculaMedium);
  console.log("Peliculas de mas de 200 minutos: " + peliculaLarge);
  