document.addEventListener("DOMContentLoaded", function() {
  var rules = document.querySelectorAll(".rule");
  var index = 0;
  
  // Exibe a primeira regra
  rules[index].style.display = "block";
  
  var nextButton = document.getElementById("nextButton");
  nextButton.addEventListener("click", function() {
    // Esconde a regra atual
    rules[index].style.display = "none";
    
    // Incrementa o índice e verifica se chegou ao fim das regras
    index++;
    if (index >= rules.length) {
      index = 0; // Volta para a primeira regra se chegou ao fim
    }
    
    // Exibe a próxima regra
    rules[index].style.display = "block";
  });
  
  var prevButton = document.getElementById("backButton");
  prevButton.addEventListener("click", function() {
    // Esconde a regra atual
    rules[index].style.display = "none";
    
    // Decrementa o índice e verifica se chegou ao início das regras
    index--;
    if (index < 0) {
      index = rules.length - 1; // Volta para a última regra se chegou ao início
    }
    
    // Exibe a regra anterior
    rules[index].style.display = "block";
  });
});
