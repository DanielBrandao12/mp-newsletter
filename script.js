
    const form = document.getElementById('contact-form');
    const message = document.getElementById('message');
    const loadingIcon = document.getElementById('submit-icon');
    const checkIcon = document.getElementById('submit-check');
    const button = document.getElementById('submit-btn');
    const buttonText = document.getElementById('submit-text');
  
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  
    checkIcon.classList.add('hidden');
    loadingIcon.classList.remove('animate-spin');
    loadingIcon.classList.add('hidden');
    buttonText.classList.remove('hidden');
    button.classList.remove('text-base', 'font-semibold');
    button.classList.add('text-2xl', 'font-bold');
  
    message.textContent = "Enviando...";
    buttonText.classList.add('hidden');
    loadingIcon.classList.remove('hidden');
    loadingIcon.classList.add('animate-spin');
  
    setTimeout(() => {
      message.textContent = "Formulário enviado com sucesso!";
      form.reset();
  
      loadingIcon.classList.remove('animate-spin');
      loadingIcon.classList.add('hidden');
  
      checkIcon.classList.remove('hidden');
      buttonText.innerText = "Inscrição concluída";
      buttonText.classList.remove('hidden');
  
      button.classList.remove('text-2xl', 'font-bold');
      button.classList.add('text-base', 'font-semibold');
    }, 2000);
  });
  
