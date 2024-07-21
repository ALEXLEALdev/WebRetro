class carta{
    constructor(nombre,color,coste){
        this.nombre=nombre;
        this.color=color;
        this.coste=coste;
    }
}

let carta1 = new carta("agumon","rojo",2);

console.log(carta1.nombre);

document.write(carta1.nombre + "<br>");
document.write(carta1.color + "<br>");
document.write(carta1.coste + "<br>");