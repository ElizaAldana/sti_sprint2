let data;
let isTrue = false;
const myForm = document.getElementById("myForm");
const csvFile = document.getElementById("csvFile");

function csvToArray(str, delimiter = ",") {

    const headers = str.slice(0, str.indexOf("\r\n")).split(delimiter);

    const rows = str.slice(str.indexOf("\n") + 1).split("\r\n");

    const arr = rows.map(function (row) {
        const values = row.split(delimiter);
        const el = headers.reduce(function (object, header, index) {
            object[header] = values[index];
            return object;
        }, {});
        return el;
    });

    return arr;
}

myForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const input = csvFile.files[0];
    const reader = new FileReader();

    reader.onload = function (e) {
        const text = e.target.result;
        data = csvToArray(text);
        //document.write(JSON.stringify(data));
        console.log(data);
    };

    reader.readAsText(input);
});


//let A = [1, 3, 5];
//let B = [2, -1, 4];
let ab = [];
let ArrayN = 3;
let total = 0;

const comparar = document.getElementById("comparar");
const persona1 = document.getElementById("persona1");
const persona2 = document.getElementById("persona2");

//Producto punto
comparar.addEventListener("click", function (e) {
    //console.log(persona1.value);
    let A = data[persona1.value];
    let B = data[persona2.value];
    console.log(A.nombres);
    console.log(B.nombres);


    ab[0] = A.dmi * B.dmi;
    ab[1] = A.hamburguesa * B.hamburguesa;
    ab[2] = A.helado * B.helado;
    ab[3] = A.games * B.games;
    ab[4] = A.felicidad * B.felicidad;

    //Esto es el producto punto
    total = ab[0] + ab[1] + ab[2] + ab[3] + ab[4];
    
    console.log("Producto punto:" + total);

    //MagnitudA
    let MagnitudA = Math.hypot(A.dmi, A.felicidad, A.games, A.hamburguesa, A.helado);
    console.log("Magnitud a:" + MagnitudA);

    //MagnitudB
    let MagnitudB = Math.hypot(B.dmi, B.felicidad, B.games, B.hamburguesa, B.helado);
    console.log("Magnitud b:" + MagnitudB);

    let coseno = total / (MagnitudA * MagnitudB);
    console.log("coseno:" + coseno);
});


