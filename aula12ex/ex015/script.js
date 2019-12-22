function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                //crianca
                img.setAttribute('src', 'criancaMenino.jpg')
            } else if (idade < 16) {
                //adolescente
                img.setAttribute('src', 'idiotaMenino.jpg')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'jovemMenino.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'idiotaAdulto.jpg')
            } else {
                //velho
                img.setAttribute('src', 'velhoIdiota.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                //crianca
                img.setAttribute('src', 'criancaMenina.jpg')
            } else if (idade < 16) {
                //adolescente
                img.setAttribute('src', 'idiotaMenina.jpg')
            } else if (idade < 22) {
                //jovem
                img.setAttribute('src', 'jovemMenina.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'adultaIdiota.jpg')
            } else {
                //velho
                img.setAttribute('src', 'velhaIdiota.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}