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
    }, 15); // Ajuste a velocidade do typewriting aqui (em milissegundos)
  }

  function resetSelection() {
    // Remove a classe 'selected' de todos os alunos
    alunos.forEach(a => a.classList.remove('selected'));

    // Limpa o intervalo existente, se houver
    clearInterval(typewritingIntervalId);

    selectedTitle.textContent = 'Nossa História';

    // Reseta as informações do título e inicia o efeito de typewriting
    updateInfoWithTypewriting('Lorem ipsum dolor sit amet. Et illum voluptatem in aspernatur voluptatum sit dolorum facilis ut adipisci saepe aut doloribus perspiciatis rem nemo voluptas. Aut totam dolores ut quia voluptatibus aut expedita natus ut quibusdam itaque. Et harum quia aut exercitationem rerum est consectetur nobis ut deleniti inventore.');

    // Reseta a variável do aluno selecionado
    selectedAluno = null;
  }
});
 



document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o carrossel
  var carousel = new bootstrap.Carousel(document.querySelector('#carouselT'), {
      interval: 3000,  // Defina o intervalo desejado em milissegundos
      pause: false,    // Define se deve pausar em hover (false para não pausar)
      ride: 'carousel' // Começa a rotação automática imediatamente
  });
});




// Funções pra trocar os gifs, 1 à 5 de acordo com a ordem na parte "sobre nós"

function hoverImage1(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/giphy.gif';
}

function unhoverImage1(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Caio_Silveira.jpeg';  // Substitua com o caminho correto da imagem estática
}



function hoverImage2(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/giphy.gif';
}

function unhoverImage2(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Pedro_Angert.jpg';  // Substitua com o caminho correto da imagem estática
}



function hoverImage3(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/giphy.gif';
}

function unhoverImage3(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Caio_Henrique.jpeg';  // Substitua com o caminho correto da imagem estática
}



function hoverImage4(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem para o gif na pasta IMG
  image.src = 'IMG/giphy.gif';
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
  image.src = 'IMG/giphy.gif';
}

function unhoverImage5(element) {
  // Obtém a referência para a imagem dentro do elemento
  var image = element.querySelector('img');

  // Troca o src da imagem de volta para a imagem estática
  image.src = 'IMG/Victoria_Fior.png';  // Substitua com o caminho correto da imagem estática
}
