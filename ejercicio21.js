const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

  const mayores = []
  const menores = []

  for (const edad of users) {
    if (edad.years>18) {
        mayores.push(edad.name)
    }
    else (menores.push(edad.name));
  }

  console.log("Usuarios mayores de edad: "+(mayores));
  console.log("Usuarios menores de edad: "+(menores));