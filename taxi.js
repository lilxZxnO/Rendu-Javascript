/*Le taxi
John essaie de rentrer chez lui en taxi.
Problème : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux
rouges de chez lui.
À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
Deux possibilités de fin :
- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et
qu’il lui a fallu x changements de taxi pour y arriver
- Sa santé mentale tombe à 0, il explose et donc affiche « explosion »
Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
Nous avons besoin d’une liste de 5 musiques dont Anissa - Wejdene
Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements
64*/


const array = ["Anissa - Wejdene", "XO TOUR LIFE-lil uzi vert","God's plan-Drake","magnolia-Playboi carti","Black an Yellow-Wiz kalifa"]
class Trajet {
    constructor(feuxrouges, radio) {
        this.feuxrouges = feuxrouges
        this.changedetaxi = 0
        this.radio = radio
    }
simulertrajet(cible)
    { 
    for(let i = 0; i <= this.feuxrouges; i++){
        const song = this.radio[Math.floor(Math.random() * this.radio.length)]
        if("Anissa - Wejdene" == song){
            cible.santémentale--
            this.changedetaxi++
            console.log(`il a ecouté ${song} donc il change de taxi il lui reste ${this.feuxrouges - i}`)
            } else{
                console.log(`il a ecouté ${song} donc il change de taxi il lui reste ${this.feuxrouges - i}`)
            }
            if(cible.santémentale == 0){
                console.log(`explosion`)
                break
            }
            if(i == 30)
                console.log(`il est arrivé`)
    
    
    }}
}
class Personnage {
    constructor(name,santémentale) {
        this.name= name
        this.santémentale=santémentale
    }
}

let jhon= new Personnage("jhon",10)

let trajet= new Trajet(30,array)
trajet.simulertrajet(jhon)







   


      



    
   
    
