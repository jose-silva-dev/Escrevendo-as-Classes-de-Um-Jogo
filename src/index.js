class heroi{
	constructor(nome, idade, tipo, atacar){
    	this.nome = nome
        this.idade = idade
		this.tipo = ["guerreiro", "mago", "monge", "ninja"]
        this.atacar = atacar
    }
    
    toWarrior(){
    	console.log(`O ${this.tipo[0]} atacou usando ${this.atacar}.`)
    }
    toMage(){
    	console.log(`O ${this.tipo[1]} atacou usando ${this.atacar}.`)
    }
    toMonk(){
    	console.log(`O ${this.tipo[2]} atacou usando ${this.atacar}.`)
    }
    toNinja(){
    	console.log(`O ${this.tipo[3]} atacou usando ${this.atacar}.`)
    }
    
}

let guerreiro = new heroi("Rei Guerreiro", "31", "guerreiro", "espada")
let mago = new heroi("Rei Mago", "31", "mago", "magia")
let monge = new heroi("Rei Monge", "31", "monge", "artes marciais")
let ninja = new heroi("Rei Ninja", "31", "ninja", "shuriken")

guerreiro.toWarrior()
mago.toMage()
monge.toMonk()
ninja.toNinja()