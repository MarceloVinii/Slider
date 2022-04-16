let totalSlides = document.querySelectorAll('.slider-item').length // pegando tudo que estiver dentro de slider-item
let currentSlide = 0 // para começar no slide que estiver na posição 0

let sliderWidth = document.querySelector('.slider').clientWidth

// Calculo para pegar o tamanho da tela e multiplicar pelo total da variavel totalSlides
document.querySelector('.slider-width').style.width = `${
  sliderWidth * totalSlides
}px`

// Pegando a altura do slider e jogando na altura do slider-controls
document.querySelector('.slider-controls').style.width = `${sliderWidth}px`

// Pegando a altura do slider e jogando na altura do slider-controls
document.querySelector('.slider-controls').style.height = `${
  document.querySelector('.slider').clientHeight
}px`

// função para voltar o slide
function goPrev() {
  currentSlide--
  // Verifica se o slide que está na tela é o primeiro, ou seja, que é o 0, se estiver ele pega o totalSlides que vai ser 6 e colocando o -1 volta para o ultimo.
  if (currentSlide < 0) {
    currentSlide = totalSlides - 1
  }

  updateMargin()
}

// função para passar para o proximo slide
function goNext() {
  currentSlide++
  // verifica se o proximo slide existe
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0
  }

  updateMargin()
}

// função que pega o pega o currentSlide e faz com que seja do tamanho da tela
function updateMargin() {
  let sliderItemWidth = document.querySelector('.slider-item').clientWidth
  let newMargin = currentSlide * sliderItemWidth
  document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`
}

setInterval(goNext, 5000)
