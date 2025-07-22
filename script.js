// Animação de scroll
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animação de fade in
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
}

// Inicializa animações
window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);

// Menu mobile
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Adiciona click handlers aos links de navegação
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Adiciona efeitos de hover aos cards
    const cards = document.querySelectorAll('.step-card, .differential-card, .comparison-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
        
        // Adiciona transição
        card.style.transition = 'all 0.3s ease';
    });

    // Inicializa animações de scroll
    handleScrollAnimations();

    // Menu hamburger
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenu = document.getElementById('close-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    function openMobileMenu() {
        navMenu.classList.add('active');
        menuOverlay.classList.add('active');
        closeMenu.style.display = 'block';
    }
    function closeMobileMenu() {
        navMenu.classList.remove('active');
        menuOverlay.classList.remove('active');
        closeMenu.style.display = 'none';
    }
    if (hamburger && navMenu && closeMenu && menuOverlay) {
        hamburger.addEventListener('click', openMobileMenu);
        closeMenu.addEventListener('click', closeMobileMenu);
        menuOverlay.addEventListener('click', closeMobileMenu);
    }
});

  // --- Início das funções relacionadas ao Formulário de Contato (via WhatsApp) ---
  const contactForm = document.getElementById("contact-form"); // Usa o ID do formulário
  if (contactForm) {
      contactForm.addEventListener("submit", async (event) => { // Mantém 'async'
          event.preventDefault(); // Previne o envio padrão do formulário

          const nome = document.getElementById("nome")?.value.trim();
          const email = document.getElementById("email")?.value.trim();
          const telefone = document.getElementById("telefone")?.value.trim();
          const mensagem = document.getElementById("mensagem")?.value.trim();

          let isValid = true;
          let errorMessage = "";

          // Validações dos campos
          if (!nome) {
              errorMessage += "Nome é obrigatório.\n";
              isValid = false;
          }
          if (!email) {
              errorMessage += "E-mail é obrigatório.\n";
              isValid = false;
          } else if (!isValidEmail(email)) {
              errorMessage += "E-mail inválido.\n";
              isValid = false;
          }
          if (!telefone) {
              errorMessage += "Telefone é obrigatório.\n";
              isValid = false;
          }
          if (!mensagem) {
              errorMessage += "Mensagem é obrigatória.\n";
              isValid = false;
          }

          const submitButton = contactForm.querySelector('button[type="submit"]');
          const originalText = submitButton.textContent;

          if (!isValid) {
              alert("Por favor, corrija os seguintes erros:\n\n" + errorMessage);
              return;
          }

          // Se a validação passar, prepare e abra o link do WhatsApp
          submitButton.textContent = "Abrindo WhatsApp...";
          submitButton.disabled = true;

         
         const numeroWhatsapp = "5524981128603";  // Número de telefone da Thaís
          const mensagemPadrao = `Olá, Thaís! Meu nome é ${nome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Minha mensagem é: ${mensagem}`;
          const mensagemCodificada = encodeURIComponent(mensagemPadrao); // Codifica a mensagem para URL

          const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensagemCodificada}`;

          // Abre o WhatsApp em uma nova aba
          window.open(linkWhatsapp, '_blank');

          // Resetar o formulário e o botão após a tentativa de abertura
          contactForm.reset();
          submitButton.textContent = originalText;
          submitButton.disabled = false;
          alert("O WhatsApp será aberto com sua mensagem pré-preenchida. Por favor, clique em 'Enviar' no aplicativo para finalizar.");
      });
  }

  // Função de validação de e-mail
  function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Formatação do telefone
  const telefoneInput = document.getElementById("telefone");
  if (telefoneInput) {
      telefoneInput.addEventListener("input", (event) => {
          let value = event.target.value.replace(/\D/g, "");
          if (value.length <= 10) {
              value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
          } else {
              value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
          }
          event.target.value = value;
      });
  }

// Efeito parallax na seção hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
}); 