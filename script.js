// const mario = document.querySelector(".mario")
// const pipe = document.querySelector(".pipe")
// const restart = document.querySelector(".restart")
// console.log(mario, pipe, restart)

//  Todos os elementos do Html estavam selecionados, mas ele fez de um
//  outro jeito, usando um array e uma aerofunction.

// const [mario, pipe, restart] = [".mario", ".pipe", ".restart"].map(item => {
//     return document.querySelector(item)
//  }) 
// -> ele fez assim,  mas deu undefined e ai ele optou por deixar desse 
// abaixo. O erro foi não ter colocado o return ali antes do document, agora corrigido
// funcionou esse jeito de selecionar os elementos com o map.


const mario = document.querySelector(".mario")
const pipe = document.querySelector(".pipe")
const restart = document.querySelector(".restart")

const jump = () => {
    mario.classList.add("jump")
    setTimeout(() => {
        mario.classList.remove("jump")
    }, 500)
    
} 

// aqui vai observar a posição que o pipe está em pixels, em relação ao eixo x
// porque se ele e o mario, estiverem na mesma posição, quer dizer que eles 
// trombaram, sendo que ele deveria ser pulado.

const loop = setInterval(()=> {
    // const pipePosition = pipe.offsetLeft, está pegando os pxls que vão de
    // -80px até o outro lado da tela que é 0 .
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "")
    // aqui ele está pegando a posição do style Mario.bottom, e o replace está tirando o px do número
    // para poder fazer o if ali embaixo.
   //  colocando o + na frente da string ele converte ela para numero
    
    console.log(typeof marioPosition) // aqui ele mostra a posição do Mario em string

    if (pipePosition <= 100 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`
        // aqui ele está freiando o tubo na distância de 100px do lado esquerdo.

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`
        // aqui ele está parando o Mario, caso ele encoste na posição do pipe.

        mario.src = "./assets/game-over.png"
        mario.style.width = "80px"
        mario.style.marginLeft = "23px"

        clearInterval(loop)
        // ele para de executar o loop, quando o mario bate no pipe.

    }

},10)
//  aqui ele observa a posição do pipe, a cada 10 milisegundos

restart.addEventListener('click', () => {
    location.reload(true)
})
//quando clicado no botão restart, aciona a função e à pagina(location) é reiniciada


document.addEventListener("keydown", jump)
// toda tecla que for pressionada ele aciona a função jump, fazendo ele pular.