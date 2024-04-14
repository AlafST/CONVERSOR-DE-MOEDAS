const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectToConvert = document.querySelector(".currency-select-to-convert")

async function convertValues () {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,GBP-BRL,ARS-BRL,CHF-BRL,JPY-BRL").then(response => response.json())
   
    const realToday = 1.00
    const bitcoinToday = data.BTCBRL.high
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high       
    const francoSuicoToday = data.CHFBRL.high
    const ieneToday = data.JPYBRL.high
    const libraToday = data.GBPBRL.high
    const pesoArgentinoToday = data.ARSBRL.high
   
      // Adicionando a conversão de Real para todas as moedas.
      
    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)
    }
   
    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }
    
    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }
    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    } 
    
    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / francoSuicoToday)
    }

    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday)
    }
    
    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoArgentinoToday)
    }

    // Adicionando a conversão de todas as moedas para Real.

    if (currencySelectToConvert.value == "BRL" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
   
    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday)
    }

    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue *francoSuicoToday)
    }

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue *ieneToday)
    }

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue *libraToday)
    }

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AS", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue *pesoArgentinoToday)
    }
    
    // Adicinando conversão Bitcoin para toda as noedas.

    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * bitcoinToday / realToday)
    }
   
    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * bitcoinToday / dolarToday)
    }

    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * bitcoinToday / euroToday)
    }

    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * bitcoinToday / francoSuicoToday)
    }
    
    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * bitcoinToday / ieneToday)
    }

    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * bitcoinToday / libraToday)
    }

    if (currencySelectToConvert.value == "BTC" && currencySelect.value == "Peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * bitcoinToday / pesoArgentinoToday)
    }

    // Adicionando a conversão de Dolar para todas as moedas.

    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday / realToday)
    }

    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * dolarToday / bitcoinToday)
    }

    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    
    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * dolarToday / euroToday)
    }

    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * dolarToday / francoSuicoToday)
    }

    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * dolarToday / ieneToday)
    }

    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * dolarToday / libraToday)
    }

    if (currencySelectToConvert.value == "USD" && currencySelect.value == "Peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * dolarToday / pesoArgentinoToday)
    }

    // Conversão de Euro para todas as moedas.

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday / realToday)
    }

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * euroToday / bitcoinToday)
    }

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * euroToday / dolarToday)
    }

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * euroToday / francoSuicoToday)
    }

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * euroToday / ieneToday)
    }

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * euroToday / libraToday)
    }

    if (currencySelectToConvert.value == "EUR" && currencySelect.value == "Peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * euroToday / pesoArgentinoToday)
    }

    // Conversão de Franco suiço para todas as moedas.

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * francoSuicoToday / realToday)
    }

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * francoSuicoToday / bitcoinToday)
    }

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * francoSuicoToday / dolarToday)
    }

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * francoSuicoToday / euroToday)
    }

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * francoSuicoToday / ieneToday)
    }

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * francoSuicoToday / libraToday)
    }

    if (currencySelectToConvert.value == "CHF" && currencySelect.value == "Peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * francoSuicoToday / pesoArgentinoToday)
    }

    // conversão de Iene para todas as moedas.

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * ieneToday / realToday)
    }

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * ieneToday /bitcoinToday)
    }

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * ieneToday / dolarToday)
    }

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * ieneToday / euroToday)
    }

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * ieneToday / francoSuicoToday)
    }

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * ieneToday / libraToday)
    }

    if (currencySelectToConvert.value == "JPY" && currencySelect.value == "Peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * ieneToday / pesoArgentinoToday)
    }

    // conversão de Libra para todas as moedas.

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday / realToday)
    }

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * libraToday / bitcoinToday)
    }

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * libraToday / dolarToday)
    }

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * libraToday / euroToday)
    }

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * libraToday / francoSuicoToday)
    }

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * libraToday / ieneToday)
    }

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencySelectToConvert.value == "GBP" && currencySelect.value == "Peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue * libraToday / pesoArgentinoToday)
    }

    // Conversão de todas as moedas para Peso Argentino.

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Real") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * pesoArgentinoToday / realToday)
    }

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Bitcoin") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * pesoArgentinoToday / bitcoinToday)
    }

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Dolar") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * pesoArgentinoToday / dolarToday)
    }

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Euro") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * pesoArgentinoToday / euroToday)
    }

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Franco") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ch-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * pesoArgentinoToday / francoSuicoToday)
    }

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Iene") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue * pesoArgentinoToday / ieneToday)
    }

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Libra") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * pesoArgentinoToday / libraToday)
    }

    if (currencySelectToConvert.value == "ARS" && currencySelect.value == "Peso") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
    }

    }


function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    const currencyNameToConverter = document.querySelector(".currency")
    const currencyImageToConverter = document.querySelector(".currency-img-to-convert")

    // Seletor de converte "De"

    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "R$ Real Brasileiro"
        currencyImage.src = "assets/Real1.jpg"
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "₿ Bitcoin"
        currencyImage.src = "assets/Bitcoin1.jpg"
    }

    if (currencySelect.value == "Dolar") {
        currencyName.innerHTML = "US$ Dólar americano"
        currencyImage.src = "./assets/Dollar1.jpg"
    }

    if (currencySelect.value == "Euro") {
        currencyName.innerHTML = "€ Euro"
        currencyImage.src = "assets/Euro1.jpg"
    }
    
    if (currencySelect.value == "Franco") {
        currencyName.innerHTML = "$ Franco Suiço"
        currencyImage.src = "assets/Franco suiço1.jpg"
    }
    
    if (currencySelect.value == "Iene") {
        currencyName.innerHTML = "¥ Iene"
        currencyImage.src = "assets/Iene1.jpg"
    }
    
     if (currencySelect.value == "Libra") {
        currencyName.innerHTML = "£ libra"
        currencyImage.src = "assets/Libra1.jpg"
    }

    if (currencySelect.value == "Peso") {
        currencyName.innerHTML = "$ Peso Argentino"
        currencyImage.src = "assets/Peso Argentino1.jpg"
    }

    // Seletor de de conversor "Para"

    if (currencySelectToConvert.value == "BRL") {
        currencyNameToConverter.innerHTML = "R$ Real Brasileiro"
        currencyImageToConverter.src = "assets/Real1.jpg"
    }

    if (currencySelectToConvert.value == "BTC") {
        currencyNameToConverter.innerHTML = "₿ Bitcoin"
        currencyImageToConverter.src = "assets/Bitcoin1.jpg"
    }

    if (currencySelectToConvert.value == "USD") {
        currencyNameToConverter.innerHTML = "US$ Dólar americano"
        currencyImageToConverter.src = "./assets/Dollar1.jpg"
    }

    if (currencySelectToConvert.value == "EUR") {
        currencyNameToConverter.innerHTML = "€ Euro"
        currencyImageToConverter.src = "assets/Euro1.jpg"
    }
    
    if (currencySelectToConvert.value == "CHF") {
        currencyNameToConverter.innerHTML = "$ Franco Suiço"
        currencyImageToConverter.src = "assets/Franco suiço1.jpg"
    }

    if (currencySelectToConvert.value == "JPY") {
        currencyNameToConverter.innerHTML = "¥ Iene"
        currencyImageToConverter.src = "assets/Iene1.jpg"
    }

    if (currencySelectToConvert.value == "GBP") {
        currencyNameToConverter.innerHTML = "£ libra"
        currencyImageToConverter.src = "assets/Libra1.jpg"
    }

    if (currencySelectToConvert.value == "ARS") {
        currencyNameToConverter.innerHTML = "$ Peso Argentino"
        currencyImageToConverter.src = "assets/Peso Argentino1.jpg"
    }

     convertValues()

    }
     
    

currencySelect.addEventListener("change", changeCurrency) 
convertButton.addEventListener("click", convertValues)
currencySelectToConvert.addEventListener("change", changeCurrency)