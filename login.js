function verificarLogin() {
    const usuario = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;

    if (usuario === 'Arthur' && senha === '102030') {
       window.location.href = 'index.html';
        alert('Login bem-sucedido!');
    } else {
        alert('Usuário ou senha incorretos. Tente novamente.');
    }
}