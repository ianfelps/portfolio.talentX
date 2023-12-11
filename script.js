document.addEventListener('DOMContentLoaded', function () {
  const alunos = document.querySelectorAll('.aluno');
  const selectedTitle = document.getElementById('selectedTitle');
  const selectedInfo = document.getElementById('selectedInfo');

  let selectedAluno = null;
  let typewritingIntervalId = null;

  alunos.forEach(aluno => {
    aluno.addEventListener('click', function () {
      if (selectedAluno === this) {
        // Se o mesmo aluno for clicado novamente, desfaz a seleção
        resetSelection();
      } else {

        scrollToSection();

        // Remove a classe 'selected' de todos os alunos
        alunos.forEach(a => a.classList.remove('selected'));

        // Adiciona a classe 'selected' ao aluno clicado
        this.classList.add('selected');

        // Limpa o intervalo existente, se houver
        clearInterval(typewritingIntervalId);

        // Atualiza as informações do título e inicia o efeito de typewriting
        selectedTitle.textContent = this.querySelector('h2').textContent;
        updateInfoWithTypewriting(this.querySelector('p').textContent);

        // Armazena o aluno selecionado
        selectedAluno = this;
      }
    });
  });

  function updateInfoWithTypewriting(text) {
    // Reseta o conteúdo do parágrafo
    selectedInfo.textContent = '';

    // Adiciona a primeira letra imediatamente
    selectedInfo.textContent += text[0];

    // Cria um intervalo para simular o efeito de typewriting
    let index = 1;
    typewritingIntervalId = setInterval(function () {
      selectedInfo.textContent += text[index];
      index++;

      // Quando todo o texto foi adicionado, limpa o intervalo
      if (index === text.length) {
        clearInterval(typewritingIntervalId);
      }
    }, 20); // Ajuste a velocidade do typewriting aqui (em milissegundos)
  }

  function resetSelection() {
    // Remove a classe 'selected' de todos os alunos
    alunos.forEach(a => a.classList.remove('selected'));

    // Limpa o intervalo existente, se houver
    clearInterval(typewritingIntervalId);

    selectedTitle.textContent = 'Nossa História';

    // Reseta as informações do título e inicia o efeito de typewriting
    updateInfoWithTypewriting('Somos uma equipe dinâmica que desafia as barreiras da distância ao trabalhar remotamente na maior parte do tempo. Conectados virtualmente, encontramos na tecnologia a ponte para colaboração efetiva e inovação. O que torna nossa jornada ainda mais única é o fato de que formamos nossa equipe de uma maneira inesperada, e, surpreendentemente, nos demos extraordinariamente bem. Cada membro contribui com sua expertise, consolidando nossa força coletiva em um ambiente digital que inspira crescimento, aprendizado e conquistas compartilhadas. Fique a vontade para selecionar e saber mais sobre cada um dos integrantes do projeto.');

    // Reseta a variável do aluno selecionado
    selectedAluno = null;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o carrossel
  var carousel = new bootstrap.Carousel(document.querySelector('#myCarousel'), {
    interval: 60000,  // Defina o intervalo desejado em milissegundos
    pause: false,    // Define se deve pausar em hover (false para não pausar)
    ride: 'carousel' // Começa a rotação automática imediatamente
  });
});

// Funções pra trocar os gifs, 1 à 5 de acordo com a ordem na parte "sobre nós"
function hoverImage0(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/giphy.gif';
}

function unhoverImage0(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/aws.svg';  // Substitua com o caminho correto da imagem estática
}

function hoverImage1(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/Caio_Silveira.gif';
}

function unhoverImage1(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Caio_Silveira.png';  // Substitua com o caminho correto da imagem estática
}



function hoverImage2(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/Pedro_Angert.gif';
}

function unhoverImage2(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Pedro_Angert.png';  // Substitua com o caminho correto da imagem estática
}



function hoverImage3(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/Caio_Henrique.gif';
}

function unhoverImage3(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Caio_Henrique.png';  // Substitua com o caminho correto da imagem estática
}



function hoverImage4(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/Ian_Alves.gif';
}

function unhoverImage4(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Ian_Alves.png';  // Substitua com o caminho correto da imagem estática
}



function hoverImage5(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/Victoria_Fior.gif';
}

function unhoverImage5(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Victoria_Fior.png';  // Substitua com o caminho correto da imagem estática
}

function scrollToSection() {
        var elementoAlvo = document.getElementById("selectedTitle");
        
        // Obtém as coordenadas do elemento na tela
        var retangulo = elementoAlvo.getBoundingClientRect();

        // Verifica se o elemento está visível na tela
        if (
            retangulo.top >= 0 &&
            retangulo.left >= 0 &&
            retangulo.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            retangulo.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            // A seção alvo já está na tela, não é necessário rolar
            console.log("A seção já está visível na tela.");
        } else {
            // A seção alvo não está na tela, rola até ela
            elementoAlvo.scrollIntoView({ behavior: 'smooth' });
        }
    }

document.addEventListener('DOMContentLoaded', function () {
  var elements = document.querySelectorAll('.fade-in');

  function fadeInOnScroll() {
    elements.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add('active');
      }
    });
  }

  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Executar a função no carregamento da página e no evento de rolagem
  fadeInOnScroll();
  window.addEventListener('scroll', fadeInOnScroll);
});

document.addEventListener('DOMContentLoaded', function () {
  var scrollToTopBtn = document.getElementById('scrollToTopBtn');

  window.addEventListener('scroll', function () {
    // Mostra ou oculta o botão dependendo da posição do scroll
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  // Adiciona um listener para rolar suavemente ao topo
  scrollToTopBtn.addEventListener('click', function () {
    document.body.scrollTop = 0; // Para browsers da web
    document.documentElement.scrollTop = 0; // Para browsers modernos
  });
});