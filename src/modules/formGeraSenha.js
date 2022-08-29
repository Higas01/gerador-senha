import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qntCaracterias = document.querySelector('#caracterias');
const maiscula = document.querySelector('#maiscula');
const minuscula = document.querySelector('#minuscula');
const numeros = document.querySelector('#numeros');
const simbolos = document.querySelector('#simbolos');
const btnSenha = document.querySelector('.gerar-senha');

export default () => {
    btnSenha.addEventListener('click', () => senhaGerada.innerHTML = gera())
};

const gera = () => {
    const senha = geraSenha(
        qntCaracterias.value,
        maiscula.checked,
        minuscula.checked,
        numeros.checked,
        simbolos.checked,
    )

    return senha || 'Nada selecionado.';

}