const swiper = new Swiper('.mySwiper', {
  loop: true, // faz os slides se repetirem em loop
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000, // tempo em milissegundos entre os slides (3000ms = 3 segundos)
    disableOnInteraction: false, // continua o autoplay mesmo quando o usuário interage com o Swiper
  },
});


let currentPage = 1; // Página inicial
const itemsPerPage = 5; // Número de itens por página
let productsData = []; // Armazena todos os produtos

// Função para carregar os produtos da API
function loadProducts() {
  fetch('https://dummyjson.com/products')
    .then(response => response.json()) // Converte a resposta para JSON
    .then(data => {
      productsData = data.products; // Armazena todos os produtos
      displayProducts(currentPage); // Exibe a primeira página
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}

// Função para exibir os produtos de acordo com a página atual
function displayProducts(page) {
  const produtosContainer = document.getElementById('produtos-container');
  produtosContainer.innerHTML = ''; // Limpa o conteúdo existente

  // Calcula os índices de início e fim dos produtos a serem exibidos
  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const productsToShow = productsData.slice(start, end);

  // Exibe os produtos da página atual
  productsToShow.forEach(produto => {
    const produtoDiv = document.createElement('div');
    produtoDiv.classList.add('produto', 'border-b', 'border-gray-300', 'p-2', 'm-2', 'w-full');

    produtoDiv.innerHTML = `
      <h2 class="text-center text-xl font-bold mb-2">${produto.title}</h2>
      <img src="${produto.thumbnail}" alt="${produto.title}" class="w-1/2 sm:w-2/3 m-auto h-auto mb-2">
      <p class="font-bold px-4">Preço: R$ ${produto.price}</p>
      <p class="text-justify px-4">${produto.description}</p>
    `;

    produtosContainer.appendChild(produtoDiv);
  });

  // Atualiza os botões de navegação
  updatePaginationButtons();
}

// Função para atualizar o estado dos botões de navegação
function updatePaginationButtons() {
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');

  // Se a página for 1, desativa o botão "Anterior"
  prevButton.disabled = currentPage === 1;

  // Se estiver na última página, desativa o botão "Próximo"
  nextButton.disabled = currentPage === Math.ceil(productsData.length / itemsPerPage);
}

// Eventos dos botões de navegação
document.getElementById('prev-button').addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    displayProducts(currentPage);
  }
});

document.getElementById('next-button').addEventListener('click', () => {
  if (currentPage < Math.ceil(productsData.length / itemsPerPage)) {
    currentPage++;
    displayProducts(currentPage);
  }
});

// Carrega os produtos quando a página for carregada
loadProducts();



const resultadoDiv = document.getElementById('testemunhos');
const fragment = document.createDocumentFragment();


const comentarios = [
  "Adorei a facilidade em encontrar o que procurava e a rapidez na entrega! Os produtos são de ótima qualidade e o atendimento ao cliente é impecável.",
  "Fiz minha primeira compra e fiquei impressionado com a variedade de produtos e as promoções. O site é muito intuitivo e a compra foi concluída em poucos cliques.",
  "A experiência de compra foi incrível! Os produtos chegaram antes do prazo e estavam perfeitamente embalados. Recomendo muito!",
  "O site é super completo e os preços são justos. Além disso, o sistema de pagamento é seguro e confiável.",
  "Amei a variedade de produtos e as opções de pagamento. A entrega foi rápida e o produto chegou em perfeito estado.",
];


fetch('https://randomuser.me/api/?results=5&inc=name,picture&nat=br')
  .then(response => response.json())
  .then(data => {
    data.results.forEach((user, index) => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user-testimonial');

      const img = document.createElement('img');
      img.src = user.picture.thumbnail;
      img.alt = `${user.name.first}`;

      const p = document.createElement('span');
      p.textContent = `${user.name.first} ${user.name.last}`;

      const comment = document.createElement('p');
      comment.textContent = comentarios[index]

      userDiv.appendChild(img);
      userDiv.appendChild(p);
      userDiv.appendChild(comment);
      fragment.appendChild(userDiv);
    });

    resultadoDiv.appendChild(fragment)
  })
  .catch(error => {
    resultadoDiv.innerHTML = 'Erro ao buscar os dados: ' + error.message;
  });



  document.addEventListener('DOMContentLoaded', function () {
    // Seleciona o formulário
    const form = document.getElementById('contact-form');
    const status = document.getElementById('status');

    // Adiciona o ouvinte de evento ao formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault();  // Previne o comportamento padrão

        // Coleta os dados do formulário
        const formData = new FormData(form);

        // Configurações do EmailJS
        const serviceID = 'contact_service';
        const templateID = 'contact_form';
        const userID = `${API_KEY}`; // Public Key do EmailJS
        const contactNumber = Math.floor(Math.random() * 1000000); 

        // Monta os dados para o envio
        const data = {
            service_id: serviceID,
            template_id: templateID,
            user_id: userID,
            template_params: {
                'user_name': formData.get('user_name'),
                'user_email': formData.get('user_email'),
                'message': formData.get('message'),
                'contact_number': contactNumber,
                'to_name': 'Dev',
                'from_name': formData.get('user_name'),
            }
        };

        // Usa a Fetch API para enviar os dados
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
                status.textContent = "Email enviado com sucesso!";
                form.reset();  // Limpa o formulário após envio
            } else {
                status.textContent = "Falha ao enviar o email.";
            }
        })
        .catch((error) => {
            console.error('Erro:', error);
            status.textContent = "Erro ao enviar o email.";
        });
    });
});
