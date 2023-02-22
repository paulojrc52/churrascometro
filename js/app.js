const container = document.querySelector('.container')
const formSimulator = document.querySelector('#formSimulator')
const inputAdultos = document.querySelector('#adultos')
const inputCriancas = document.querySelector('#criancas')
const inputHrs = document.querySelector('#duracao')

const buttonForm = document.querySelector('#buttonForm')
const buttonRefresh = document.querySelector('#buttonRefresh')

function bindEvents() {
  buttonForm.onclick = calcular
}

function resultado({ carne, cerveja, refrigerante }) {
  const result = `
    <div class="resultado">
      <article>
        <h2>Olá, <span>para o churrasco</span>...</h2>
        <p>
          Você vai precisar de <span>${carne/1000}kg</span> de carne, 
          de pelo menos <span>${Math.ceil(cerveja / 355)}</span> latas de cerveja e <span>${Math.ceil(refrigerante / 2000)}</span> garrafas de
          refrigerante ou suco de 2L.
        </p>
      </article>
      <button onClick="window.location.reload()" id="buttonRefresh">Calcular Novamente</button>
    </div>
  `
    return result
}

function changeContent(result) {
  formSimulator.remove()
  container.innerHTML += resultado(result)
}

function carnPP (duracao) {
  if (duracao >= 6) {
    return 650
  }

  return 400
}

function cervejaPP (duracao) {
  if (duracao >= 6) {
    return 2000
  }

  return 1200
}

function refrigerantePP (duracao) {
  if (duracao >= 6) {
    return 1500
  }

  return 1000
}


function calcular(e) {
  e.preventDefault()
  let qntAdultos = Number(inputAdultos.value)
  let qntCrianças = Number(inputCriancas.value)
  let horas = Number(inputHrs.value)

  const result = {
    carne: carnPP(horas) * qntAdultos + (carnPP(horas) / 2 * qntCrianças),
    cerveja: cervejaPP(horas) * qntAdultos,
    refrigerante: refrigerantePP(horas) * qntAdultos + (refrigerantePP(horas) / 2 * qntCrianças),

  } 

  changeContent(result)
    
}

bindEvents()
