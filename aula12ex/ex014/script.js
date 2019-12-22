function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora  = data.getHours()
    msg.innerHTML = `Agora são ${hora}Horas`
    if (hora > 5 && hora <= 12){
        //console.log('BOM DIA!')
        img.src = 'dia.jpg'
        document.body.style.background = '#e2cd9f'
    }else if(hora > 12 && hora < 18){
        //console.log('BOA TARDE!')
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }else if(hora >= 18 && hora < 24){
        //console.log('BOA NOITE!')
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }else{
        //console.log('BOA MADRUGADA')
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}