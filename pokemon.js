/*Exercice Class:
-Créer une classe Pokemon avec comme paramètres name, attack, defense, hp et luck une fonction
isLucky, et une fonction attackPokemon
-Créer deux instances de Pokémon avec des stats différentes.
- Tant que l'un des deux n'est pas mort
- le premier attaque le second (isLucky + attackPokemon)
- afficher la vie et les dégâts endommagés du second
- si le second est mort, arrêter la boucle
- le second attaque le premier (isLucky + attackPokemon)
- afficher la vie et les dégâts endommagés du premier
- Afficher un message de mort pour le pokemon perdant
Attention
- la formule des dégâts est la suivante: dégâts = att de l'attaquant – def du defenseur
- la luck correspond à la probabilité de toucher l'ennemi (précision en pourcentage)
- générer un nombre aléatoire avec Math.random() (qui retourne un décimal entre 0 et 1)
- si ce nombre est inférieur à luck du Pokemon alors le Pokemon peut attaquer*/

class Pokemon{
    constructor(name,attack,defense,hp,luck){
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }
    isLucky(){
        if(Math.random() < this.luck){
            return true
        } else {
            return false
        }
    }
    attackPokemon(pokemon){
        if(pokemon.isLucky()){
            console.log(`${pokemon.name}esquive`)
        } else {
            pokemon.hp -= this.attack - pokemon.defense
            console.log(`${this.name} inflige 10 points de dégâts à ${pokemon.name}`)
            console.log(`${pokemon.hp}`)
        }
        
    }
}
const pokemon = new Pokemon("zekrom",170,100,150,0.5)
const pokemon2 = new Pokemon("reshiram",160,110,170,0.4)

while(pokemon.hp > 0 && pokemon2.hp > 0){
    pokemon.attackPokemon(pokemon2)
    pokemon2.attackPokemon(pokemon)
}

if(pokemon.hp <= 0){
    console.log(`${pokemon.name} est mort`)
} else {
    console.log(`${pokemon2.name} est mort`)
}
