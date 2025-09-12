  const mensagens = [
      "Você é mais forte do que imagina 💛",
      "Nunca se esqueça:sua vida importa 🌻",
      "Você não está sozinho, estamos juntos 🤝",
      "Acredite: dias melhores virão ⭐",
      "Sempre existe esperança 🌈",
      "Sua vida importa ❤️​",
      "Falar é a melhor solução ", 
      "Peça ajuda, você merece 🗣",
      "A vida sempre vale a pena 🌸",
      "Cuide de si mesmo(a) 😊",
      "A esperança é a luz 🤍",
      "Seu silêncio não precisa ser sua dor 🤗"
    ];

    document.getElementById("btnMensagem").addEventListener("click", () => {
      const aleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
      document.getElementById("mensagem").innerText = aleatoria;
    });
  

