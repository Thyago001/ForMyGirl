
<script src="https://cdn.jsdelivr.net/npm/luxon@3.4.4/build/global/luxon.min.js"></script>

<script>
const flipCardInner = document.getElementById("flip-card-inner");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");
const magicButton = document.getElementById("magic-button");
const loveMessage = document.getElementById("love-message");

// Dados das imagens e mensagens
const cards = [
    { img: "img/1.jpg", text: "Sob o céu cúmplice daquele dia, nossos olhares se encontravam entre risos e passos desajeitados. O mundo ao nosso redor parecia distante, como se estivéssemos vivendo o início de uma história que prometia ser eterna." },
    { img: "img/2.jpg", text: "No balanço suave do ônibus, nossos ombros se tocavam, e cada instante parecia mais doce. O mundo passava pela janela, mas a única paisagem que importava era o brilho dos seus olhos ao lado meu." },
    { img: "img/3.jpg", text: "Com o vento dançando entre os fios do seu cabelo, nossos corações viajavam ao ritmo da estrada. Cada quilômetro percorrido era uma contagem para mais momentos de felicidade ao seu lado." },
    { img: "img/4.jpg", text: "Sob o abraço do mar e o calor do sol, sua presença fazia tudo ao redor parecer poesia. Cada onda que quebrava parecia sussurrar o quanto eu te amo, enquanto nossos passos juntos marcavam a areia da eternidade." },
    { img: "img/5.jpg", text: "Entre laços familiares e sorrisos acolhedores, você brilhou como a estrela mais encantadora do céu daquela noite. Ali, eu soube que apresentar você ao meu mundo era a certeza de que o amor tinha um nome: Elaine." },
    { img: "img/6.jpg", text: "O dia era seu, mas o presente era meu por poder celebrar você. O brilho da sua felicidade fazia cada vela acesa parecer pálida diante da luz que você traz à minha vida." },
    { img: "img/7.jpg", text: "Meu coração batia mais forte, mas minha convicção era firme. Ao olhar para você e para sua família, senti que estava tocando o sagrado, como se Deus abençoasse cada palavra que dizia naquele espaço." },
    { img: "img/8.jpg", text: "Caminhando entre corredores de sonhos, seus passos firmes ao meu lado eram a prova de que, juntos, nenhum objetivo era grande demais. Em cada olhar trocado, enxergávamos o futuro que construiríamos." },
];

let currentCardIndex = 0;

const backgroundMusic = document.getElementById("background-music");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(error => {
            console.error("Erro ao tentar tocar a música:", error);
        });
    } else {
        backgroundMusic.pause();
    }
});

function updateCard() {
    const currentCard = cards[currentCardIndex];
    document.querySelector(".flip-card-front img").src = currentCard.img;
    document.querySelector(".flip-card-back .card-text").textContent = currentCard.text;
}

function flipCard() {
    flipCardInner.style.transform =
        flipCardInner.style.transform === "rotateY(180deg)" ? "rotateY(0deg)" : "rotateY(180deg)";
}

function nextCard() {
    currentCardIndex = (currentCardIndex + 1) % cards.length;
    flipCardInner.style.transform = "rotateY(0deg)";
    updateCard();
    updateIndicators();
}

function prevCard() {
    currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
    flipCardInner.style.transform = "rotateY(0deg)";
    updateCard();
    updateIndicators();
}

// 💖 Função atualizada com Luxon
function atualizarContador() {
    const { DateTime } = luxon;

    const dataInicio = DateTime.fromISO("2024-07-11T00:00:00");
    const agora = DateTime.now();

    const diferenca = agora.diff(dataInicio, ["years", "months", "days", "hours", "minutes", "seconds"]).toObject();

    document.getElementById("anos").innerText = Math.floor(diferenca.years);
    document.getElementById("meses").innerText = Math.floor(diferenca.months);
    document.getElementById("dias").innerText = Math.floor(diferenca.days);
    document.getElementById("horas").innerText = Math.floor(diferenca.hours);
    document.getElementById("minutos").innerText = Math.floor(diferenca.minutes);
    document.getElementById("segundos").innerText = Math.floor(diferenca.seconds);
}

setInterval(atualizarContador, 1000);
atualizarContador();

// Event listeners
flipCardInner.addEventListener("click", flipCard);
nextButton.addEventListener("click", nextCard);
prevButton.addEventListener("click", prevCard);

// Inicializa com o primeiro card
updateCard();

// Criar indicadores
const indicators = document.getElementById("indicators");
cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("indicator");
    dot.addEventListener("click", () => showImage(i));
    indicators.appendChild(dot);
});

function showImage(index) {
    currentCardIndex = index;
    flipCardInner.style.transform = "rotateY(0deg)";
    updateCard();
    updateIndicators();
}

function updateIndicators() {
    const dots = indicators.querySelectorAll("span");
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentCardIndex);
    });
}

const loveMessages = [
    "Eu te amo mil milhões!!",
    "Que bom né!!",
    "Meu neném!!",
    "Te amo mais que o civic!!",
    "Amo seu sorriso!!",
    "Amo seu cheiro!!",
    "Amo seu cabelo!!",
    "Amo você por completa!!"
];

magicButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    loveMessage.textContent = loveMessages[randomIndex];
    loveMessage.style.display = "block";
});
</script>
