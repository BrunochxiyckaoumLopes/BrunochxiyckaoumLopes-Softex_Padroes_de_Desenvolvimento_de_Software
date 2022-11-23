class Computer {
    constructor(){

    }
    get hdd(){
        return this.hdd
    }
    get ram(){
        return this.ram
    }
    get cpu(){
        return this.cpu
    }
    get tipo(){
        return this.tipo
    }
    set althdd(newhdd){
        this.hdd = newhdd
    }
    set altram(newram){(
        this.ram = newram
    }
    set altcpu(newcpu){
        this.cpu = newcpu
    }
    
    toString() {
        console.log("Atributos:")
        console.log("Tipo:" this.tipo)
        console.log("HDD:" this.hdd "GB")
        console.log("CPU" this.cpu "GHz")
        console.log("Ram" this.ram "GB")

    CC(tipo){
        let computerproto

        if (tipo === "pc"){
            computerproto = new pc()
        } else if (tipo === "server"){
            computerproto = new server()
        }
            
    }
}

class pc extends Computer{
    constructor(){
        super()
        this.hdd = 512
        this.ram = 4
        this.cpu = 2
        this.tipo = "pc" 
    }
}

class server extends Computer{
    constructor(){
        super()
        this.hdd = 1024
        this.ram = 8
        this.cpu = 4
        this.tipo = "server"
    }
}
