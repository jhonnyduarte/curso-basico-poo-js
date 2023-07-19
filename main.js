const natalia = {
    name: 'Natalia;',
    age: 20,
    cursosAprobados: [
        'Curso Definitivo de HTML y CSS',
        'Curso Practico de HTML y CSS',
    ],
    aprobarCurso (nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

natalia.cursosAprobados.push('Curso de Responsive Design');


natalia.name = 'Nath';
natalia.age += 1;

natalia.aprobarCurso('Curso de CSS Grid');

function Student (name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso);
}

const juanita = new Student(
    'Juanita',
    23,
    [
        'Curso de First Mobile',
        'Curso de Fexbox'
    ]
);

juanita.aprobarCurso('Ingles c1');