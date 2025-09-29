Class padre{
    constructor(nombre,apellido){ 
        this.nombre=nombre
        this.apellido=apellido
    } 
}

class madre{
    constructor(nombre){
        this.nombre=nombre
    }
}
class hijo extends madre{
    constructor(nombre,apellido,año){
        super(nombre)
        this.padre=new this.padre(nombre,apellido)
        this.año=año
}
nombrecompleto(){
    console.log("mi nombre es "+this.nombre+"  "+this.padre.apellido)
     }
}
let gabriel = new hijo("gabriel","sanchez","cuarto")
gabriel.nombrecompleto()
