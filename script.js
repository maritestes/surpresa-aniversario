let slideIndex = 0;

function moverSlide(n) {
    const slides = document.querySelector(".slides");
    const totalSlides = document.querySelectorAll(".slides img").length;

    slideIndex += n;

    
    if (slideIndex >= totalSlides) {
        slideIndex = 0; 
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1; 
    }


    const offset = -slideIndex * 300; 
    slides.style.transform = `translateX(${offset}px)`; 
}


//mensagens surpresa
function mostrarMensagemSurpresa(element) {
    element.innerHTML = "PARABENS DNV HEHEHEHEHEHEHEHEHEHEHHEHEHEHEHHEHEHEHE";
    setTimeout(() => {
        element.innerHTML = "🎈 Clique ou passe o mouse!";
    }, 2000);
}



function mostrarMensagem() {
    alert("PARABÉNS PRA VOCÊ NESSA DATA QUERIDA, MUITAS FELICIDADES MUITOS ANOS DE VIDA... PRO TARSO É TUDO💋💅 OU NADA👎??? TUDOOO💅💋😜!!!! ENTÃO COMO É QUE É🤨🤨🤨?? É PIQUE🏃‍♂️ É PIQUE🏃‍♂️ É HORA⌚ É HORA⌚ É HORA⌚ RA＞﹏＜ TIM^_~ BUMMMMMMMMM🧨 TARSINHO😜💋 TARSINHO💗🥳");
    iniciarConfetes();
}


//confete
function iniciarConfetes() {
    const canvas = document.getElementById("confetti");
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.parentNode.offsetWidth;
    canvas.height = canvas.parentNode.offsetHeight;

    let confetes = [];


    for (let i = 0; i < 200; i++) {
        confetes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            size: Math.random() * 6 + 3, 
            speedY: Math.random() * 3 + 2,
            speedX: (Math.random() - 0.5) * 2, 
            angle: Math.random() * 360,
            rotationSpeed: Math.random() * 10 - 5 
        });
    }

    function desenharConfetes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        confetes.forEach((confete) => {
            ctx.fillStyle = confete.color;
            ctx.beginPath();
            ctx.save();
            ctx.translate(confete.x, confete.y);
            ctx.rotate((confete.angle * Math.PI) / 180);
            ctx.fillRect(-confete.size / 2, -confete.size / 2, confete.size, confete.size);
            ctx.restore();

            // Atualiza posição e rotação do confete
            confete.y += confete.speedY;
            confete.x += confete.speedX;
            confete.angle += confete.rotationSpeed;

            // Reposiciona confetes que saem da área
            if (confete.y > canvas.height) confete.y = 0;
            if (confete.x > canvas.width) confete.x = 0;
            if (confete.x < 0) confete.x = canvas.width;
        });

        requestAnimationFrame(desenharConfetes);
    }

    desenharConfetes();
}

let presenteEscondido = Math.floor(Math.random() * 5);

function clicarBalao(element) {
    let index = Array.from(element.parentNode.children).indexOf(element);
    if (index === presenteEscondido) {
        alert("🎁 Você encontrou o presente, ebaaa! Mais presente?? Sim! na segunda te entrego. Espero que tenha gostado, fiz com amor pra uma pessoa especial <3");
    } else {
        alert("Nada aqui hein veyr, tenta outro aí 😜");
    }
}
