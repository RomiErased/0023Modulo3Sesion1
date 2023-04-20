// Arreglo simple (1 Dimensión)
// var colaboradores = [
//     "Juan",
//     "Pedro",
//     "Francisco"
// ]


// let colaboradores = [
//     {
//         rut: "12.345.678-9",
//         nombre: "Juan Fica",
//         activo: true,
//         salario_hora: 5150.65,
//         horas_trabajadas: 38
//     },
//     {
//         rut: "23.345.558-9",
//         nombre: "Andrea Pérez",
//         activo: true,
//         salario_hora: 6150.85,
//         horas_trabajadas: 35
//     },
//     {
//         rut: "15.856.558-9",
//         nombre: "Francisco González",
//         activo: false,
//         salario_hora: 4850.85,
//         horas_trabajadas: 0
//     }
// ]

// for (let index = 0; index < colaboradores.length; index++) {
//     var colaborador = colaboradores[index];
//     console.log("Nombre:", colaborador.nombre, typeof colaborador.nombre);
//     console.log("Salario hora: ",colaborador["salario_hora"], typeof colaborador.salario_hora);
//     console.log("Activo: ", colaborador.activo, typeof colaborador.activo);
//     console.log("------------------------------------------")
// }
// console.log(colaboradores)

//arreglo vacío
let colaboradores = [];

let inputRut = document.querySelector("#txt-rut") //cuando sea este selector debo especificar el simbolo del id-class
let inputNombre = document.querySelector("#txt-nombre")
let inputSalarioHora = document.querySelector("#txt-salario-hora")
let inputHorasTrabajadas = document.querySelector("#txt-horas-trabajadas")
let checkActivo = document.getElementById("check-activo")
    //console.log(checkActivo)

    //funcion con retorno para calcular cuanto se gana en base a las horas trabajadas
function calcularSalario(salarioHora, horasTrabajadas) {
    let salario = salarioHora * horasTrabajadas
    return salario
    }

    //función para agregar a un colaborador al arreglo (desde la info que el usuario ponga en el navegador)
function agregarColaborador(rut, nombre, salario, horas, activo) {
    colaboradores.push({ //push incorpora un nuevo elemento al arreglo y lo pone en la ultima posición
        rut: rut,
        nombre: nombre,
        salario_hora: salario,
        horas_trabajadas: horas,
        activo: activo,
        salario_neto: calcularSalario(salario, horas) //llamado de la función con retorn para calculo de salario
    })
    console.log(colaboradores)
}
    //captura del evento submit del formulario. Con este evento podremos llamar a la función que agrega un nuevo colaborador al arreglo principal
document.getElementById("formulario").addEventListener("submit", function(ev) {
    ev.preventDefault(); //función que detiene el envío de datos del formulario (evento submit)
    //invocar función que agrega un colaborador al arreglo
    agregarColaborador(inputRut.value, inputNombre.value, inputSalarioHora.value, inputHorasTrabajadas.value, checkActivo.checked);
    //console.log(inputRut.value, inputNombre.value)
    //líneas para borrar los valores de los inputs 
    inputRut.value = "" //esto es para que al ingresar los datos, el input se limpie
    inputNombre.value = ""
    inputSalarioHora.value = ""
    inputHorasTrabajadas.value = ""
    checkActivo.checked = false
})