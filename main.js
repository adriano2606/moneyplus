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

var valorEnviar = document.getElementById("valor-enviar")
var valorReceber = document.getElementById("valor-receber")
var moedaSelecionada = document.getElementById("receber-options")
const areaCotacao = document.getElementById("cotacao-info")
const flag = document.getElementsByClassName('country')[1]

function exibirImgPais(moedaAtual){
    if (moedaAtual == "USD") {
        flag.classList.remove('ca', 'eu')
        flag.classList.add("us")
    } else if (moedaAtual == "EUR"){
        flag.classList.remove('ca', 'us')
        flag.classList.add("eu")
    } else if(moedaAtual == "CAD"){
        flag.classList.remove("us", "eu")
        flag.classList.add("ca")
    }
}

function exibirCotacao(moeda){
    areaCotacao.style.display = 'flex';
    areaCotacao.style.gap = '1rem'; 
    if (moeda == "USD"){
    areaCotacao.innerHTML = `<p><span class="text-highlight">Cotação:</span></p>
                                <p id="valor-cotacao">${moeda + " " + dolar.toFixed(2)}</p>`
    } else if (moeda == "EUR"){
            areaCotacao.innerHTML = `<p><span class="text-highlight">Cotação:</span></p>
                                <p id="valor-cotacao">${moeda + " " + euro.toFixed(2)}</p>`
    } else if (moeda == "CAD"){
                    areaCotacao.innerHTML = `<p><span class="text-highlight">Cotação:</span></p>
                                <p id="valor-cotacao">${moeda + " " + cad.toFixed(2)}</p>`
    }
}

function exibirValoReceber(moeda){
    valorReceber.value = Number(valorEnviar.value / moeda).toFixed(1)
}

function calcularCotacao(){

    var option = moedaSelecionada.value

    if (option == "USD"){
        exibirCotacao(option)
        exibirValoReceber(dolar)
        exibirImgPais(option)                  
    } else if (option == "EUR"){
        exibirCotacao(option)
        exibirValoReceber(euro)
        exibirImgPais(option) 
    } else if (option == "CAD"){
        exibirCotacao(option)
        exibirValoReceber(cad)
        exibirImgPais(option) 
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



