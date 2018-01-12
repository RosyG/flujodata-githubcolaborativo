+function () {
    // Elementos
    

    // Evento Click - Agregar
    var addEvent = function (e) {
        e.preventDefault();
        var student = studentAdd();
        result.innerHTML = show(student);
    };

    var showEvent = function (e) {
        e.preventDefault();
        var students = getStudentsList();
        result.innerHTML = listShow(students);
    };

    

    // Manejadores de eventos
    
    
}();
