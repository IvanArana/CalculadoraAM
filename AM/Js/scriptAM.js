var cantNum = parseInt(prompt("Ingresa la cantidad de números que deseas operar: "));
var operaciones = [
  { operacion: "suma", valor: 1 },
  { operacion: "resta", valor: 2 },
  { operacion: "multiplicacion", valor: 3 },
  { operacion: "division", valor: 4 }
];

var NumOperandos = {
  operandos: [],
  agregarOperando: function (operando) {
    this.operandos.push(operando);
  }
};

for (var i = 0; i < cantNum; i++) {
    var numero = parseFloat(prompt("Ingresa el número " + (i + 1) + ":"));
    NumOperandos.agregarOperando(numero);
}

var opcionesOperaciones = "Opciones de operaciones:\n";
for (var j = 0; j < operaciones.length; j++) {
    opcionesOperaciones += operaciones[j].valor + ") " + operaciones[j].operacion + "\n";
}

var opcion = prompt(opcionesOperaciones + "Seleccione una opción ingresando el número correspondiente:");

var resultado;
switch (opcion) {
    case "1":
        resultado = NumOperandos.operandos.reduce((a, b) => a + b);
        break;
    case "2":
        resultado = NumOperandos.operandos.reduce((a, b) => a - b);
        break;
    case "3":
        resultado = NumOperandos.operandos.reduce((a, b) => a * b);
        break;
    case "4":
        resultado = NumOperandos.operandos.reduce((a, b) => a / b);
        break;
    default:
        resultado = "Opcion no encontrada";
}

alert("El resultado es: " + resultado);

var respuesta = prompt("¿Desea realizar otra operación? (Sí/No)");
if (respuesta.toLowerCase() === "sí" || respuesta.toLowerCase() === "si") {
    location.reload();
}
