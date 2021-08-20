document.addEventListener("DOMContentLoaded", ()=>{
const printName=(firstName, lastName)=>{
    return `My name is ${firstName} ${lastName}`
}

console.log('hiii')
let a= printName('Olajumoke', 'Boladale-Lawal')
console.log(a)
document.querySelector('#name').innerText=a

})
