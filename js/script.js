  const nomeInput = document.getElementById('nome');
  const sobrenomeInput = document.getElementById('sobrenome');
  const cpfInput = document.getElementById('cpf');
  const nascimentoInput = document.getElementById('nascimento');
  const emailInput = document.getElementById('email');

  const enviarButton = document.querySelector('#formulario button');

  enviarButton.addEventListener('click', function() {

    const nome = nomeInput.value;
    const sobrenome = sobrenomeInput.value;
    const cpf = cpfInput.value;
    const nascimento = nascimentoInput.value;
    const email = emailInput.value;

    const nomeSpan = document.querySelector('#navegacao span');

    nomeSpan.textContent = `Dados de usuários: ${nome} ${sobrenome}`;
  });

    const params = new URLSearchParams(window.location.search);

    const nome = params.get('nome');
    const sobrenome = params.get('sobrenome');
    const cpf = params.get('cpf');
    const nascimento = params.get('nascimento');
    const email = params.get('email');

    document.getElementById('nomeSpan').textContent = nome;
    document.getElementById('sobrenomeSpan').textContent = sobrenome;
    document.getElementById('cpfSpan').textContent = cpf;
    document.getElementById('nascimento').textContent = nascimento
    document.getElementById('emailSpan').textContent = email;