const botao = document.querySelector('#bottao');

botao.addEventListener('focus', (e) => {
    e.preventDefault();
    // console.log('botao clicado');
    const imagem = document.querySelector('#imagem');
    imagem.style.display = 'flex';
})

botao.addEventListener('blur', (e) => {
    const imagem = document.querySelector('#imagem');
    imagem.style.display = 'none';
})