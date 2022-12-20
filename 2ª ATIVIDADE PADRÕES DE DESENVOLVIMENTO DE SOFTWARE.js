
class Veiculo {
    constructor(modelo, marca, cor, numerorodas){
      this.modelo = modelo
      this.marca = marca
      this.cor = cor
      this.numerorodas = numerorodas
    }

    clone(){

    }
    represent(){

    }

class Carro extends Veiculo {
    
    constructor(modelo, marca, cor, numerorodas, carroceria, sobrealimentação) {
        super(modelo,marca,cor,numerorodas)
        this.carroceria = carroceria
        this.sobrealimentação = sobrealimentação
    }
    clone() {
        const novoCarro = new Carro (this.modelo, this.marca, this.cor, this.numerorodas, this.carroceria, this.sobrealimentação)
        return novoCarro
    }
}

class Avião extends Veiculo {
    constructor(modelo, marca, cor, numerorodas, numeroturbinas, numeropassageiros) {
        super(modelo,marca,cor,numerorodas)
        this.numeroturbinas = numeroturbinas
        this.numeropassageiros = numeropassageiros
    }

    clone(){
        const novoAvião =  new Avião(this.modelo, this.marca, this.cor, this.numerorodas, this.numeroturbinas, this.numeropassageiros)
        return novoAvião
    }
}

const carro = new Carro("MX-5", "MAZDA", "VERMELHO", "4", "CONVERSÍVEL", "TURBO")
const avião = new Avião("777", "BOEING", "BRANCO","12", "9", "368" )


class Aplicação {
    fabrica(){
        for (let i = 0; i < 6; i++) {
            if (i <=3) {
                const novo = avião.clone()
                array.push(novo)
            } else {
                const novo = carro.clone()
                array.push (novo)
            }
        }
    }
}
 
    represent() {
        console.log(array)
        avião.represent()
        carro.represent()

    }   
}

inicioaplicação = new Aplicação()
inicioaplicação.fabrica()
inicioaplicação.represent()
