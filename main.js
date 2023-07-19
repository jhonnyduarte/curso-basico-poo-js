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

//  CLASES

class Student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = []
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
}

const miguelito = new Student2({
    email: 'miguelito@platzi.com',
    name: 'Miguel',
    age: 45,
}
   
)

miguelito.aprobarCurso('Curso de Ingles B1');