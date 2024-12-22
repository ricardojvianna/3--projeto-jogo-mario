// const mario = document.querySelector(".mario")
// const pipe = document.querySelector(".pipe")
// const restart = document.querySelector(".restart")
// console.log(mario, pipe, restart)

//  Todos os elementos do Html estavam selecionados, mas ele fez de um
//  outro jeito, usando um array e uma aerofunction.

// const [mario, pipe, restart] = [".mario", ".pipe", ".restart"].map(item => {
//     document.querySelector(item)
//  }) 
// -> ele fez assim,  mas deu undefined e ai ele optou por deixar desse 
// abaixo.


const mario = document.querySelector(".mario")

const jump = () => {
    mario.classList.add("jump")
    setTimeout(() => {
        mario.classList.remove("jump")
    }, 500)
    
}

document.addEventListener("keydown", jump)