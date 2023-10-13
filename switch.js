/*Exercice switch:
- Déclarer trois variables a = 4, b = 4, c = 3
- a sera l’expression de référence
- si a est égal à b, alors faire un console.log(‘égal à b’)
- si a est égal à c, alors faire un console.log(‘égal à c’)
- par défaut, il y a un console.log(‘égal à rien’)
*/

let a = 4
let b = 4
let c = 3

switch (a) {
    case b:
        console.log('égal à b')
        break
    case c:
        console.log('égal à c')
        break
    default:
        console.log('égal à rien')
        break
}