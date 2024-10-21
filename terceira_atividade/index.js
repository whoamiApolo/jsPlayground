alert("Atividade 3 - Pilha");

const stackContainer = document.querySelector(".stack");
const pushButton = document.getElementById("push");
const popButton = document.getElementById("pop");

let topp = 0; // Variável para controlar o topo da pilha

pushButton.addEventListener("click", () => {
  if (topp === 20) {
    alert("A pilha está cheia! Não é possível adicionar mais elementos.");
    return; // Impede a inserção do elemento
  }

  const newElement = document.createElement("div");
  newElement.classList.add("element");
  newElement.textContent = `Elemento ${topp + 1}`;
  stackContainer.appendChild(newElement);

  // Animação de "empurrar" o novo elemento para o topo
  newElement.style.bottom = `${topp * 12.8}px`;
  topp++;
});

popButton.addEventListener("click", () => {
  if (topp === 0) {
    alert("A pilha está vazia! Não é possível remover mais elementos.");
    return; // Impede a remoção do elemento
  }

  if (topp > 0) {
    const elementToRemove = stackContainer.lastChild;

    popButton.disabled = true;
    // Animação de "remover" o elemento do topo
    elementToRemove.style.left = `${stackContainer.offsetWidth + 10}px`; // Move o elemento para fora da pilha
    setTimeout(() => {
      elementToRemove.remove();
      popButton.disabled = false;
    }, 450); // Remove o elemento após a animação

    topp--;
  }
});





const cities = ["em São Paulo", "no Brasil"];
const cityElement = document.getElementById("city");

let currentIndex = 0;

function changeCity() {
    cityElement.textContent = cities[currentIndex];
    currentIndex = (currentIndex + 1) % cities.length; // Avança para a próxima cidade, voltando ao início se necessário    
}

// Chama a função changeCity a cada 3 segundos (3000 milissegundos)
setInterval(changeCity, 3000);

// Chama a função inicialmente para exibir a primeira cidade
changeCity(); 







const iframe = document.querySelector('.video-player');

iframe.onload = function() {
  iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
};