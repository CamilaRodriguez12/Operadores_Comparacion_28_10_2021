let myStyle = `font-family:arial;
                color:white;
                font-weight: 500;
                border-radius:15px;
                background:#00A7AF;
                padding: 5px;`;

let numero1 = prompt ( 'Ingrese un número para el primer dato' ) ;
let numero2 = prompt ( 'Ingrese un número para el segúndo dato' ) ;

function Tipos_de_Datos (numero1, numero2, myStyle){ 
    console.group("Funcion Tipos de Datos");
        console.log(`%cEl primer dato es: ${numero1}  %c Tipo de dato: '${typeof(numero1)}'.`,myStyle, myStyle);
        console.log(`%cEl segundo dato es: ${numero2} %c Tipo de dato '${typeof(numero2)}'.`,myStyle,myStyle);
    console.groupEnd();    
}

function Comparacion_Igualdad_1 (numero1, numero2, myStyle){ 
    console.group("Funcion COMPARACIÓN_IGUALDAD_1");
        console.log(`%cEl dato_1 es: '${numero1}' %cEl dato_2 es: '${numero1}'`,myStyle,myStyle);
        console.log(`%c¿El dato_1 es igual al dato_2? : ${numero1 == numero1}`,myStyle );    
    console.groupEnd();    
}

function Comparacion_Igualdad_2 (numero1, numero2, myStyle){ 
    console.group("Funcion COMPARACIÓN_IGUALDAD_2");
        console.log(`%cEl dato_1 es: '${numero1}' %c El dato_2 es: ${numero2}'`, myStyle, myStyle);
        console.log(`%c¿El dato_1 es igual al dato_2? : ${numero1 == numero2}`, myStyle);
    console.groupEnd();    
}

function Comparacion_Identicos (numero1, numero2, myStyle){ 
    console.group("Funcion COMPARACIÓN_IDENTICOS");
        console.log(`%cEl dato_1 es: '${numero1}' %c El dato_2 es: '${numero2}'`, myStyle, myStyle);
        console.log(`%c¿El dato_1 es identico al dato_2? : ${numero1 === numero2}`, myStyle);
    console.groupEnd();   
}

function Comparacion_Diferente (numero1, numero2, myStyle){ 
    console.group("Funcion COMPARACIÓN_DIFERENTE");
        console.log(`%cEl dato_1 es: '${numero1}' %c El dato_2 es: ${numero2}`, myStyle, myStyle);
        console.log(`%c¿El dato_1 es diferente al dato_2? : ${numero1 != numero2}`, myStyle);
    console.groupEnd();    
}

function Comparacion_NO_Identicos (numero1, numero2, myStyle){ 
    console.group("Funcion COMPARACIÓN_NO_IDENTICOS");
        console.log(`%cEl dato_1 es: '${numero1}' %cEl dato_2 es: ${numero2}`, myStyle,myStyle);
        console.log(`%c¿El dato_1 NO es identico al dato_2? : ${numero1 !== numero2}`, myStyle);
    console.groupEnd();    
}

function Comparacion_Mayor (numero1, numero2, myStyle){ 

    console.group("Funcion COMPARACIÓN_MAYOR");
        console.log(`%cEl dato_1 es: '${numero1}' %cEl dato_2 es: ${numero2}`, myStyle, myStyle);
        console.log(`%c¿El dato_1 es mayor al dato_2? : ${numero1 > numero2}`, myStyle);
    console.groupEnd();    
}

function Comparacion_Mayor_Igual (numero1, numero2, myStyle){ 

    console.group("Funcion COMPARACIÓN_MAYOR_IGUAL");
        console.log(`%cEl dato_1 es: '${numero1}' %cEl dato_2 es: ${numero2}`, myStyle, myStyle);
        console.log(`%c¿El dato_1 es mayor o igual al dato_2? : ${numero1 >= numero2}`, myStyle);
    console.groupEnd();    
}

function Comparacion_Menor (numero1, numero2, myStyle){ 

    console.group("Funcion COMPARACIÓN_MENOR");
        console.log(`%cEl dato_1 es: '${numero1}' %c El dato_2 es: ${numero2}`, myStyle, myStyle);
        console.log(`%c¿El dato_1 es menor al dato_2? : ${numero1 < numero2}`, myStyle);
    console.groupEnd();    
}

function Comparacion_Menor_Igual (numero1, numero2, myStyle){ 

    console.group("Funcion COMPARACIÓN_MENOR_IGUAL");
        console.log(`%cEl dato_1 es: '${numero1}' %c El dato_2 es: ${numero2}`, myStyle, myStyle);
        console.log(`%c¿El dato_1 es menor o igual al dato_2? : ${numero1 <= numero2}`, myStyle);
    console.groupEnd();    
}
Tipos_de_Datos(numero1,numero2,myStyle);
Comparacion_Igualdad_1(numero1,numero2,myStyle);
Comparacion_Igualdad_2(numero1,numero2,myStyle);
Comparacion_Identicos(numero1,numero2,myStyle);
Comparacion_NO_Identicos(numero1,numero2,myStyle);
Comparacion_Diferente(numero1,numero2,myStyle);
Comparacion_Mayor(numero1,numero2,myStyle);
Comparacion_Mayor_Igual(numero1,numero2,myStyle);
Comparacion_Menor(numero1,numero2,myStyle);
Comparacion_Menor_Igual(numero1,numero2,myStyle);




