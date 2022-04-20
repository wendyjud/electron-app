class Products{
    constructor(){
        this.nombre = document.getElementById("name").value;
        this.precio = document.getElementById("price").value;
        this.descripcion= document.getElementById("description").value;
        this.boton= document.getElementById("registrar").value;
        this.formularioRegistro= document.querySelector(".p-4");
        this.parser= new DOMParser();

        this.agregarEventListeners();
    }
    agregarEventListeners(){

        this.boton.addEventListener('submit', this.agregarProducto.bind(this))
    }
    agregarEventListeners(evento){ 
        evento.preventDefault();
        const nombre=this.nombre.value;
        const precio=this.precio.value;
        const descripcion=this.descripcion.value;

        fetch(nombre, precio, descripcion)
        .then(respuesta => respuesta.text())
        .then(this.extraerContenido)
        
    }
    extraerContenido(contenido){
        return this.parser.parseFromString(contenido, 'text/html');
    }
    
}