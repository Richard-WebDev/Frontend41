// Seleziono il bottone tramite il suo id e lo salvo nella variabile btn
const btn = document.getElementById("changeColorBtn");

// Aggiunge un evento al bottone: quando viene cliccato
btn.addEventListener("click", () => {

    // Seleziona tutti gli elementi che hanno la classe "square"
    const squares = document.querySelectorAll(".square");

    // Cicla tutti i quadrati trovati
    squares.forEach(square => {

        // Aggiunge o rimuove la classe "special-color"
        // Se la classe non esiste viene aggiunta
        // Se esiste viene rimossa
        square.classList.toggle("special-color");

    });

});