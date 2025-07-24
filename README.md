# Website Institucional - Projeto Elas Merecem

## 📖 Sobre o Projeto

Este repositório contém o código-fonte do site institucional para o **Projeto Elas Merecem**, uma iniciativa de psicologia e cuidado mental voltada para mulheres. O site foi desenvolvido como um **site estático**, utilizando HTML, CSS e JavaScript puros para garantir máxima performance, segurança e baixo custo de manutenção.

**🔗 Link para o site ao vivo:** [https://psicologiademulheres.com/](https://psicologiademulheres.com/)

---

## ✨ Principais Funcionalidades

* **Design Responsivo:** Totalmente adaptado para uma experiência de usuário fluida em desktops, tablets e celulares.
* **Quiz Interativo:** Uma ferramenta para ajudar a usuária a descobrir a abordagem terapêutica mais alinhada com seu momento de vida, desenvolvido em JavaScript.
* **Carrossel de Depoimentos:** Uma seção dinâmica para exibir depoimentos de clientes de forma rotativa.
* **FAQ Acordeão:** Uma seção de perguntas frequentes interativa, onde as respostas se expandem ao clique.
* **Integração com WhatsApp:** Formulário de contato e botões de serviço que geram um link direto para o WhatsApp, facilitando o primeiro contato.
* **Animações de Scroll:** Efeitos de fade-in sutis para uma navegação mais agradável.
* **Vídeo Incorporado:** Seção com vídeo de apresentação hospedado no YouTube para otimização de carregamento.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Para a estrutura e semântica do conteúdo.
* **CSS3:** Para toda a estilização, utilizando variáveis (`:root`) para um tema consistente e media queries para responsividade.
* **JavaScript (Vanilla):** Para toda a interatividade do site, sem a necessidade de bibliotecas ou frameworks externos.

---

## 🗂️ Estrutura dos Arquivos

O projeto é organizado da seguinte forma:

```
/
├── assets/
│   └── img/        # Imagens, logos e ícones
├── index.html      # O arquivo principal que contém toda a estrutura do site
├── styles.css      # A folha de estilos principal
├── script.js       # Scripts para funcionalidades gerais (menu, carrossel, formulário)
├── quiz.js         # Lógica exclusiva do Quiz interativo
├── script-faq.js   # Lógica exclusiva do FAQ Acordeão
└── README.md       # Este arquivo de documentação
```

---

## ✏️ Como Atualizar o Conteúdo

Por ser um site estático, **toda e qualquer alteração de conteúdo deve ser feita diretamente no código-fonte**, principalmente no arquivo `index.html`.

* **Para alterar textos:** Encontre a seção correspondente no `index.html` e edite o texto desejado.
* **Para adicionar depoimentos:** Copie a estrutura de um `div class="testemunho-card"` existente, cole-a e altere o conteúdo interno.
* **Para trocar imagens:** Adicione a nova imagem na pasta `assets/img/` e atualize o caminho no atributo `src` da tag `<img>` no `index.html`.
* **Para alterar o vídeo:** Substitua o código do `<iframe>` atual pelo novo código de incorporação do YouTube.

---

## 🚀 Publicação (Deploy)

O site está hospedado na **HostGator**. O processo de atualização (deploy) é manual:

1.  Acesse o **cPanel** da hospedagem.
2.  Navegue até o **Gerenciador de Arquivos**.
3.  Abra a pasta `public_html`.
4.  Faça o upload dos arquivos modificados, substituindo os existentes.

---

## 👤 Desenvolvedora

* **Nome:** [Taís GB]
* **Contato:** [taisgb.com.br]
