var alumnos = [
    {
        nombre: 'Juan Gomez',
        nota: 7
    },
    {
        nombre: 'Pedro Rodriguez',
        nota: 4
    },
    {
        nombre: 'Roxana García',
        nota: 8
    },
    {
        nombre: 'Luciano Lopez',
        nota: 5
    },
    {
        nombre: 'Fernanda Gimenez',
        nota: 6
    },
    {
        nombre: 'Florencia Martinez',
        nota: 10
    },
    {
        nombre: 'Raul Sanchez',
        nota: 7
    },
    {
        nombre: 'Sandra Figueroa',
        nota: 8
    }
];

var aprobados = alumnos.filter(item => item.nota >= 7);
var nombresAprobados = [];

for (aprobado of aprobados) {
    if (aprobado.nota >= 7) {
        nombresAprobados.push(aprobado.nombre + ' (' + aprobado.nota + ')')
    }
}

alert(nombresAprobados.join(', '));