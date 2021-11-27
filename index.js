function verificar() {
    var nome = document.getElementById('pessoa')
    var idade = document.getElementById('idade')
    var cep = document.getElementById('cep').value.replace(/\D/g, '')
    var url = 'https://viacep.com.br/ws/' + cep + '/json/'
    var request = new XMLHttpRequest();
    var resposta = document.getElementById('res')
    var endereco = document.getElementById('log')
    
    request.open('GET', url)
    request.onerror = function (e) {
        resposta.innerHTML = `CEP Inválido`
    }

    request.onload = () => {
        var response = JSON.parse(request.responseText)
        if(response.erro === true) {
            resposta.innerHTML = "CEP NÃO ENCONTRADO"
        } else if(idade.value < 18 || idade.value > 120) {
            resposta.innerHTML = `${nome.value} sua idade está invalidade.`
        } else {
            resposta.innerHTML = `${nome.value}`
            endereco.innerHTML = 
            'Cep: ' + response.cep + '<br>' + 
            'Estado:' + response.uf + '<br>' +
            'Cidade:' + response.localidade + '<br>' +
            'Bairro' + response.bairro + '<br>' +
            'Rua:' + response.logradouro
        }
    }
    request.send()
}
