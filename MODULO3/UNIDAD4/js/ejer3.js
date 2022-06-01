var alumnos = [
    {nombre: 'Juan Gomez', nota: 7}, 
    {nombre: 'Pedro Rodriguez', nota: 4}, 
    {nombre: 'Roxana García', nota: 8}, 
    {nombre: 'Luciano Lopez', nota: 5}, 
    {nombre: 'Fernanda Gimenez', nota: 6}, 
    {nombre: 'Florencia Martinez', nota: 10},
    {nombre: 'Raul Sanchez', nota: 7},
    {nombre: 'Sandra Figueroa', nota: 8}  
  ];

var aprobados = alumnos.filter(alumno => alumno.nota >=7);

//Listener para cargar la tabla con alumnos cuando se carga la página
window.addEventListener("load", function(){
  document.getElementById("alumnos").innerHTML = crearTablaNombreYNota(alumnos);
});

//Listener para cargar la tabla con alumnos aprobados al hacer click en aprobar
document.getElementById("arrow").addEventListener("click", function(){
  document.getElementById("aprobados").innerHTML = crearTablaNombreYNota(aprobados);
});

//Crea una tabla a partir de un array con nombre y nota
function crearTablaNombreYNota(array){
  var tabla = "<table><tr class='head'><td>Nombre</td><td>Nota</td></tr>";
  for (var i of array) {  
    tabla += "<tr><td>" + i.nombre + "</td><td>"+ i.nota +"</td></tr>"; 
  }
  tabla += "</table>";
  return tabla;
}

