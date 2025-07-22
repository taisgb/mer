// ========== FUNÇÕES GERAIS ========== //

// Animação de scroll suave
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animação de fade in ao rolar
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


// ========== MENU MOBILE ========== //

// Verifica se é iOS
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
let scrollPosition = 0;

function openMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeMenu = document.getElementById('close-menu');
    const body = document.body;
    
    // Salva a posição do scroll
    scrollPosition = window.pageYOffset;
    
    navMenu.classList.add('active');
    menuOverlay.classList.add('active');
    closeMenu.style.display = 'block';
    body.style.overflow = 'hidden';
    
    // Tratamento especial para iOS
    if (isIOS) {
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
    }
    body.style.width = '100%';
}

function closeMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const closeMenu = document.getElementById('close-menu');
    const body = document.body;
    
    navMenu.classList.remove('active');
    menuOverlay.classList.remove('active');
    closeMenu.style.display = 'none';
    body.style.overflow = '';
    
    // Tratamento especial para iOS
    if (isIOS) {
        body.style.position = '';
        body.style.top = '';
        window.scrollTo(0, scrollPosition);
    }
    body.style.width = '';
}


// ========== FORMULÁRIO ========== //

// Função de validação de e-mail
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Formatação do telefone
function formatPhoneNumber(event) {
    let value = event.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
        value = value.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
    } else {
        value = value.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }
    event.target.value = value;
}

// ========== INICIALIZAÇÃO ========== //

document.addEventListener('DOMContentLoaded', function() {
    // Configura animações
    window.addEventListener('scroll', handleScrollAnimations);
    window.addEventListener('load', handleScrollAnimations);

    // Configura menu mobile
    const hamburger = document.getElementById('hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenu = document.getElementById('close-menu');
    const menuOverlay = document.getElementById('menu-overlay');

    if (hamburger && navMenu && closeMenu && menuOverlay) {
        hamburger.addEventListener('click', openMobileMenu);
        closeMenu.addEventListener('click', closeMobileMenu);
        menuOverlay.addEventListener('click', closeMobileMenu);
        
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                closeMobileMenu();
                setTimeout(() => {
                    scrollToSection(targetId);
                }, 300);
            });
        }); 
    } 

    // Configura cards com efeito hover
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
        
        card.style.transition = 'all 0.3s ease';
    });

    // Configura formulário de contato
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", async (event) => {
            event.preventDefault();

            const nome = document.getElementById("nome")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const telefone = document.getElementById("telefone")?.value.trim();
            const mensagem = document.getElementById("mensagem")?.value.trim();

            let isValid = true;
            let errorMessage = "";

            if (!nome) errorMessage += "Nome é obrigatório.\n";
            if (!email) {
                errorMessage += "E-mail é obrigatório.\n";
            } else if (!isValidEmail(email)) {
                errorMessage += "E-mail inválido.\n";
            }
            if (!telefone) errorMessage += "Telefone é obrigatório.\n";
            if (!mensagem) errorMessage += "Mensagem é obrigatória.\n";

            isValid = errorMessage === "";

            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;

            if (!isValid) {
                alert("Por favor, corrija os seguintes erros:\n\n" + errorMessage);
                return;
            }

            submitButton.textContent = "Abrindo WhatsApp...";
            submitButton.disabled = true;

            const numeroWhatsapp = "5524981128603";
            const mensagemPadrao = `Olá, Thaís! Meu nome é ${nome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Minha mensagem é: ${mensagem}`;
            const linkWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensagemPadrao)}`;

            window.open(linkWhatsapp, '_blank');

            contactForm.reset();
            submitButton.textContent = originalText;
            submitButton.disabled = false;
            alert("O WhatsApp será aberto com sua mensagem pré-preenchida. Por favor, clique em 'Enviar' no aplicativo para finalizar.");
        });
    }

    // Configura formatação do telefone
    const telefoneInput = document.getElementById("telefone");
    if (telefoneInput) {
        telefoneInput.addEventListener("input", formatPhoneNumber);
    }
});