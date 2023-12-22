const ages = [15, 45, 50, 18, 30, 27];

// Agrega tu edad al array
const miEdad = 24;
ages.push(miEdad);

// Muestra solo las edades mayores a 25
for (let i = 0; i < ages.length; i++) {
    if (ages[i] > 25) {
        alert("Edad mayor a 25 encontrada: " + ages[i]);
    }
}
