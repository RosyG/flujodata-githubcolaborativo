+function () {
    // Elementos
    var btnAgregar = document.getElementById("agregar");
    var btnMostrar = document.getElementById("mostrar");
    var btnBuscar = document.getElementById("buscar");
    var btnTopTecnico = document.getElementById("top-tecnico");
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
    btnAgregar.addEventListener("click", addEvent);
    btnMostrar.addEventListener("click", showEvent);
}();
