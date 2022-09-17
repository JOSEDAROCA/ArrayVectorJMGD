import "./styles.css";

//Creo una variabl para capturar los vlores de las casillas
const cells = document.getElementsByTagName("td");
//cells[0]... cells[11]

// Crear una Matriz de 3 filas por 4 columnas
//1 creamos l arrglo (una Matriz es un Arreglo)
const arr: number[][] = new Array(3);
//crear ls arreglos interiores en cada
arr[0] = new Array(3);
arr[1] = new Array(3);
arr[2] = new Array(3);

//Aca armamos un loop que por consola m genera numros random para completar
//las casillas y lo muestro por consola con un console.table
for (let fila: number = 0; fila < arr.length; fila++) {
  for (let columna: number = 0; columna < arr[fila].length; columna++) {
    arr[fila][columna] = Math.round(Math.random() * 100);
  }
}
console.table(arr);

//función para quitar la clase max
function resetMax(): void {
  for (let filas: number = 0; filas < cells.length; filas++) {
    if (cells[filas].classList.contains("max"))
      cells[filas].classList.remove("max");
  }
}

//función para hallar el máximo y marcar la celda
function encontrarMayor(): void {
  let cellIndex: number = 0;
  let cellMax: number = 0;
  let maxNum: number = 0;
  for (let filas: number = 0; filas < arr.length; filas++) {
    for (let columnas: number = 0; columnas < arr[filas].length; columnas++) {
      if (arr[filas][columnas] > maxNum) {
        maxNum = arr[filas][columnas];
        cellMax = cellIndex;
      }
      //console.table({ cellIndex, cellMax });
      cellIndex++;
    }
  }
  cells[cellMax].classList.add("max");
}

//función para llenar el vector
function fillArr(): void {
  resetMax();
  let cellIndex: number = 0;
  /* itera el vector pidiendo valores, según el siguiente patrón:
  vector[fil0][col0], vector[fil0][col1], vector[fil0][col2]... etc. */
  for (let filas: number = 0; filas < arr.length; filas++) {
    for (let columnas: number = 0; columnas < arr[filas].length; columnas++) {
      arr[filas][columnas] = Math.round(Math.random() * 101);
      cells[cellIndex].innerText = arr[filas][columnas].toString();
      cellIndex++;
    }
  }
}

//referencio el botón y agrego listener de evento
const btnFill = document.getElementById("btnFill") as HTMLButtonElement;
btnFill?.addEventListener("click", fillArr);
const btnFind = document.getElementById("btnFind") as HTMLButtonElement;
btnFind?.addEventListener("click", encontrarMayor);
