const rock = 1
const paper= 2
const scissor = 3

let shiftMachine = 0
let shiftUser = 0

let countUser = 0
let countMachine = 0

const btnrock = document.getElementById('rock')
const btnpaper = document.getElementById('paper')
const btnscissor = document.getElementById('scissor')
const result = document.getElementById('result')

const getRamdoNumber = (min, max) => (Math.round() * (min - max) + min)

btnrock.addEventListener('click', chooserock)

function chooserock () {
    document.getElementById('shift-user').textContent = 'usuario elegio piedra'
    document.getElementById('shift-cpu').textContent = chooseCpu()
    console.log(Math.ramdom())
    shiftUser = rock
    result.textContent = validateWinner()

}


btnpaper.addEventListener('click', choosepaper)

function choosepaper () {
    document.getElementById('shift-user').textContent = 'usuario elegio papel'
    shiftUser = paper
    result.textContent = validateWinner()
}


btnscissor.addEventListener('click', choosescissor)

function choosescissor () {
    document.getElementById('shift-user').textContent = 'usuario elegio tijeras'
    shiftUser = scissor
    result.textContent = validateWinner()
}

function chooseCpu() {
let shiftCpu = getRamdomumber (1,3)
if (shiftCpu === rock) {
    shiftMachine = rock
    return "la maquina eligio piedra"
} else if (shiftCpu === paper){
    shiftMachine = paper
    return 'la maquina eligio papel'
} else{
    shiftMachine = scissor
    return 'la maquina eligio tijeras'
}
}

function validateWinner() {
    if (shiftUser === shiftMachine) {
        return 'empate'
    } else if ((shiftUser === rock && shiftMachine === scissor) || (shiftUser === paper && shiftMachine === rock) || (shiftUser === scissor && shiftMachine === paper)){
        countUser ++
        return'usuario gana'
    } else {
        return'maquina gana'
    }
}

//agregar el contador//

function countwiner() {
    if(countUser == 3) {
        alert ("el ganador del juego es el usuario")
        countMachine= 0
        countUser= 0
    } else if (countMachine == 3) {
        alert("el ganador del juego es la maquina")
        countMachine= 0
        countUser= 0

}

}
