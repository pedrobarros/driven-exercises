function randomNumber(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function startGame() {
  let primeiroDado = 0;
  let segundoDado = 0;
  const numero = randomNumber(2, 12);
  console.log("seu número da sorte é:" + numero);
  console.log("jogando dados...");
  setTimeout(function () {
    primeiroDado = randomNumber(1, 6);
    console.log(`Você tirou ${primeiroDado} no primeiro dado!`);
  }, 2000);

  setTimeout(function () {
    segundoDado = randomNumber(1, 6);
    console.log(`Você tirou ${segundoDado} no segundo dado!`);
  }, 4000);

  if (primeiroDado === segundoDado || primeiroDado + segundoDado === numero) {
    setTimeout(function () {
      console.log("Você ganhou!");
    }, 5000);
  } else {
    setTimeout(function () {
      console.log("Você perdeu");
    }, 5000);
  }
}
startGame();
