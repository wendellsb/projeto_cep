function verificar() {
    var nome = document.getElementById('pessoa')
    var idade = document.getElementById('idade')
    var cep = document.getElementById('cep')
    var resposta = document.getElementById('res')
    var endereco = document.getElementById('log')
    
    var estado = ''
    var cidade = ''
    var bairro = ''
    var rua = ''

    if (idade.value < 18 || idade.value > 120)
        resposta.innerHTML = `${nome.value} sua idade está invalidade.`
    else {
        resposta.innerHTML = `${nome.value} seu endereço é`
        endereco.innerHTML = 
        `Cep:  ${cep.value}<br>
        Estado:<br>
        Cidade:<br>
        Bairro<br>
        Rua:`

    }
}
