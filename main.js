var dolar
var euro
var cad

async function getAPI(){
    var response = await fetch('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_v5q6F12DfvkfVkP9G6G50yDxLBxvo2iLuLYjaF9x&currencies=EUR%2CUSD%2CCAD&base_currency=BRL')
    var data = await (await response.json()).data
    dolar = 1/(data.USD)
    euro = 1/(data.EUR)
    cad = 1/(data.CAD)
}

getAPI()

const valorEnviar = document.getElementById("valor-enviar")
const valorReceber = document.getElementById("valor-receber")
var moedaSelecionada = document.getElementById("receber-options")
var option
const areaCotacao = document.getElementById("cotacao-info")
const valorCotacao = document.getElementById("valor-cotacao")

async function calcularCotacao(){

    option = moedaSelecionada.value
    areaCotacao.style.display = 'flex';
    areaCotacao.style.gap = '1rem'; 

    if (option == "USD"){
        valorReceber.value = (valorEnviar.value / dolar).toFixed(2)
        areaCotacao.innerHTML = `<p><span class="text-highlight">Cotação:</span></p>
                            <p id="valor-cotacao">${option + " " + dolar.toFixed(2)}</p>`
    } else if (option == "EUR"){
        valorReceber.value = (valorEnviar.value / euro).toFixed(2)
        areaCotacao.innerHTML =  `<p><span class="text-highlight">Cotação:</span></p>
                            <p id="valor-cotacao">${option + " " + euro.toFixed(2)}</p>`
    } else if (option == "CAD"){
        valorReceber.value = (valorEnviar.value / cad).toFixed(2)
        areaCotacao.innerHTML = `<p><span class="text-highlight">Cotação:</span></p>
                            <p id="valor-cotacao">${option + " " + cad.toFixed(2)}</p>`
    }
}

document.addEventListener('scroll', () => {
    const header  = document.getElementsByTagName("header")[0]
    
    if (window.scrollY > 0){
        header.classList.add('non-transparent')
    } else {
        header.classList.remove('non-transparent')
    }

})



