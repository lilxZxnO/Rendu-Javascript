/*Un tueur en série nommé Jason est en cavale. Il est caché quelque part en forêt.
Une équipe de choc est présente pour le neutraliser.
Nous avons besoin d’un tueur nommé Jason et qui possède 100 points de vie.
Nous avons besoin de Caractéristiques de personnages avec des noms bien clichés (nerd, sportif, blonde…),
une probabilité de mourir, une de mettre des dégâts et une de mourir en mettant des dégâts (ex: 0.3, 0.5, 0.2)
Nous avons besoin de 5 Survivants avec un nom généré aléatoirement d’un tableau de prénoms et d’une
caractéristique prise de celles disponibles (toujours aléatoire).
Tant que le tueur n’est pas mort ou que les survivants n’ont pas tué Jason :
Le tueur attaque un des survivants :
- soit le survivant meurt
- soit le survivant esquive et inflige 10 points de dégâts
- soit le survivant inflige 15 points de dégâts mais meurt
Les morts seront affichés à la fin
Un message est attendu pour chaque action (Jason a tué X, X a esquivé et a infligé X dmg, Jason est mort,
Les survivants ont gagné mais RIP à X, X, X…*/
/*.splice pour enlever*/


// conditions
class Survivant{
    constructor(name, caracteristiques,probmourir, probdegats,probdegmourir ){
       this.name = name
       this.caracteristiques = caracteristiques
       this.probmourir = probmourir
       this.probdegats = probdegats
       this.probdegmourir = probdegmourir 
       this.mort = false
    }
}
const nomsurvivant = ["joseph", "carl", "andy", "jean","max"]
const arraycarac = ["geek","sportif","int","meneur","bricoleur"]
const probmourir = 0.3
const probdegats = 0.6
const probdegmourir = 0.1

let survivants =[]
for (let i = 0; i < 5 ; i++) {
    let random = Math.floor(Math.random() * nomsurvivant.length)
    survivants.push(new Survivant(nomsurvivant[random],arraycarac[random],0.3,0.6,0.1))
    nomsurvivant.splice(random,1)
    arraycarac.splice(random,1)
}
console.log(survivants)

class Tueur{
    constructor(name,vie){
        this.name = name
        this.vie = vie
        this.mort = false
    }
attaque(survivant){ 
    if(Math.random() < survivant.probmourir){
        survivant.mort = true
        console.log(`${survivant.name} mort`)
    } else if(Math.random() < survivant.probdegats){
        this.vie -= 10
        console.log(`${survivant.name} a infligé 10 points de dégâts`)
    } else if(Math.random() < survivant.probdegmourir){
        this.vie -= 15
        console.log(`${survivant.name} a infligé 15 points de dégâts et meurt`)
        survivant.mort = true
    } 
    if(this.vie <= 0){
        console.log(`${this.name} est mort`)
        this.mort = true
    }
}
}
const tueur = new Tueur("Jason",100)

// jeux


while(!tueur.mort && survivants.some((survivant) => survivant.mort == false)){
    const survivantcible = survivants.find((survivant) => survivant.mort == false)
    tueur.attaque(survivantcible)
    console.log(tueur.vie)
    
}
if(tueur.mort == true){
    const survivantsmort = survivants.filter((survivant) => survivant.mort == true)
    survivantsmort.forEach((survivant) => {
        console.log(`${survivant.name} est mort`)
    })
} else {console.log("les survivants sont morts")
}







    
    

















