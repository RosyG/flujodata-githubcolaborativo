var students = [];
/*var objStudent = {};*/

function getStudentsList() {
    // TO DO: Retornar la lista de estudiantes
    return students;

}

function studentAdd() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var name = prompt("Ingresa en nombre de la estudiante:");
    var techPoints = parseInt(prompt("Ingresa puntos téctnicos"));
    var hsePoints = parseInt(prompt("Ingresa puntos de HSE"));
    var objStudent = {
      "name" : name,
      "techPoints" : techPoints,
      "hsePoints" : hsePoints,
    }
    /*objStudent["name"] = name;
    objStudent["techPoints"] = techPoints;
    objStudent["hsePoints"] = hsePoints;*/
    console.log(objStudent);

    students.push(objStudent);
    console.log(students);
    return objStudent;

}

function show(student) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
    var result = "";
    result += "<div class='row'>";
    result += "<div class='col m12'>";
    result += "<div class='card blue-grey darken-1'>";
    result += "<div class='card-content white-text'>";
    result += "<p><strong>Nombre:</strong> " + estudiante.nombre + "</p>";
    result += "<p><strong>Puntos Técnicos:</strong> " + estudiante.puntajeTecnico + "</p>";
    result += "<p><strong>Puntos HSE:</strong> " + estudiante.puntajeHse + "</p>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    result += "</div>";
    return result;
}

function listShow(students) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
  // Retornar el template de todos los estudiantes

}

function search(studentName, students) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS

}

function topTech(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor

}

function topHSE(students) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
