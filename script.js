var arr = [5,8,3,7,10,6,2];
//FUNCIÓN PARA INTERCAMBIAR NÚMEROS EN EL ARREGLO
function swap(arr, leftIndex, rightIndex){ 
    var temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;
}
//FUNCIÓN DE PARTICIÓN
function partition(arr, left, right) { 
    var pivot   = arr[Math.floor((right + left) / 2)], //Determina como pivote el "elemento central" del arreglo
        i       = left, //Puntero izquiero (i)
        j       = right; //Punero derecho (j)
    while (i <= j) {
        while (arr[i] < pivot) { //si item en posición(i) es menor que el pivot, aumenta a la sgte posición
            i++;
        }
        while (arr[j] > pivot) {
            j--; // si item en posición(i) es mayor que el pivot, disminuye a la sgte posición
        }
        if (i <= j) { // Cuando i sea menor o igual que j
            swap(arr, i, j); //Intercambiar ambos elementos
            i++;
            j--;
        }
    }
    return i; 
}
//FUNCIÓN DE ORDENAMIENTO RÁPIDO
//Debemos llamar a esta partición (), en función de eso se divide la matriz en partes:
//quickSort se realiza hasta que se ordenan todos los elementos de la matriz izquierda y la matriz derecha.
function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right); //index retornado de partition ()
        if (left < index - 1) { 
            quickSort(arr, left, index - 1);
        }
        if (index < right) { 
            quickSort(arr, index, right);
        }
    }
    return arr;
}
// Invocación a quickSort ()
var sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); //Imprimirá el arreglo ordenado