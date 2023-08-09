class Comment {
    constructor ({
        content,
        studentName,
        studentRole = 'estudiante',
    }) {
        this.content = content;
        this.studentName = studentName;
        this.studentRole = studentRole;
        this.likes = 0;
    }

    publicar () {
        console.log(this.studentName + ' (' + this.studentRole + ')');
        console.log(this.likes + ' likes');
        console.log(this.content);
    }
}



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


//Ventajas de la programacion orientada a objetos
// Ejemplo creando una escuela tipo Platzi

// Creando la clase Estudiante

class Estudiante {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter,
            instagram,
            facebook
        }
        this.approvedCourses = approvedCourses;
        this.learningPat = learningPaths;
    }

    publicarComentario (commentContent) {
        const comment = new Comment({
            content : commentContent,
            studentName: this.name,
        });
        comment.publicar();
    }
}

class FreeStudent  extends Estudiante{
    constructor(props) {
        super(props);
    }

    approveCourse(newCourse) {
        if (newCourse.isFree) {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('Losentimos, ' + this.name + ' ,solo puedes tomar los cursos gratis');
        }
    }
}

class BasicStudent extends Estudiante{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse) {
        if (newCourse.lang !== 'english') {
            this.approvedCourses.push(newCourse);
        } else {
            console.warn('Losentimos, ' + this.name + ' ,no pudes tomar cursos en Ingles');
        }
    }
}

class ExpertStudent extends Estudiante{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse) {
            this.approvedCourses.push(newCourse);
    }
}

class Teacherstudent extends Estudiante{
    constructor(props){
        super(props);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    publicarComentario (commentContent) {
        const comment = new Comment({
            content : commentContent,
            studentName: this.name,
            studentRole: 'profesor'
        });
        comment.publicar();
    }

}


//MODULOS EN JAVASCRIPT

function videoPlay (id){
    const urlSecreta = "https://ultrasecretavideo.com";
    console.log('Se reproduce desde la URL secreta' + id);
}

function videoStop (id) {
    const urlSecreta = "https://ultrasecretavideo.com";
    console.log('Pausamos la URL' + id);
}

 class PlatziClass {
    constructor ({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir () {
        videoPlay(this.videoID);
    }
    
    stop () {
        videoStop(this.videoStop);
    }
}


// Creando la Clase para las clases del curso

class Class {
    constructor ({
        name,

    }){
        this.name = name;
    }
}

const claseMateria1 = new Class ({
    name: 'clase1',
});
const claseMateria2 = new Class ({
    name: 'clase2',
});
const claseMateria3 = new Class ({
    name: 'clase3',
});
const claseMateria4 = new Class ({
    name: 'clase4',
});

//Creando la Clase Cursos para no repetir el nombre
//en todas las escuelas que la tengan en comun.

class Course {
    constructor({
        name,
        clases = [],
        isFree = false,
        lang = 'spanish',
    }) {
        this._name = name;//._ para esconder el atributo
        this.clases = clases;
        this.isFree = isFree;
        this.lang = lang;
    }

    // getters 
    get name() {
        return this._name;
    }

    // setters 
    set name(nuevoName) {
        if (nuevoName === 'Curso Malo'){
            console.error('Este nombre no es posible');
        } else {
            this.name = nuevoName;
        }
    }
}

const cursoProgBasica = new Course ({
    name: ' Curso Gratis de Programacion Basica',
    clases: [
        claseMateria1,
        claseMateria2,
    ],
    isFree: true,
});
const cursoDefinitivoHTML = new Course({
    name: 'Curso Definitivo HTML y CSS',
    clases: [
        claseMateria1,
        claseMateria3,
    ],
});
const cursoPracticoHTML = new Course ({
    name: 'Curso Practico HTML y CSS',
    clases: [
        claseMateria2,
        claseMateria4,
    ],
    lang: 'english',
})




// Creando la Clase de la Ruta de aprendizaje
// Creando las Escuelas con sus cursos

class LearningPath {
    constructor ({
        name,
        courses = [],
    }) {
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new LearningPath({
    name: 'Escuela de Desarrollo Web',
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ],
});

const escuelaData = new LearningPath({
    name: 'Escuela de Data Science',
    courses: [
        cursoProgBasica,
        'Curso DataBusiness',
        'Curso DataViz',
    ],
});

const escuelaGame = new LearningPath({
    name: 'Escuela de Videojuegos',
    courses: [
        cursoProgBasica,
        'Curso de Unity',
        'Curso de Unreal',
    ],
});


// Creando cada estudiante instancia de la Clase Estudiante
// Aqui le agregamos ademas la ruta de aprendizaje

const jairo = new FreeStudent({
    name: 'Jairo',
    username: 'jairo18',
    email: 'jairo18@gamail.com',
    twitter: '@jairo18',
    learningPaths: [
        escuelaWeb,
        escuelaGame,
    ],
});

const miguel = new BasicStudent({
    name: 'Miguel',
    username: 'miguel18',
    email: 'miguel18@gamail.com',
    instagram: '@miguel18',
    learningPaths:[
        escuelaWeb,
        escuelaData,
    ],
});


const freddy = new Teacherstudent({
    name: 'Freddy Vega',
    username: 'freddier',
    email: 'freddier@.com',
    instagram: 'freddier18',
})

//ENCAPSULAMIENTO



