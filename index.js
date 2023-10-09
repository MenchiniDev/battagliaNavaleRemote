document.addEventListener('DOMContentLoaded', () => {
    const board = document.getElementById('board');

    // Genera la griglia di gioco
    for (let i = 0; i < 100; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        board.appendChild(cell);
    }

    // Gestisci il clic sulla griglia
    board.addEventListener('click', (e) => {
        const cell = e.target;
        if (cell.classList.contains('cell') && !cell.classList.contains('clicked')) {
            const index = cell.dataset.index;
            // Simula la presenza di una nave in posizioni casuali (questa è solo una logica di base)
            const isShip = Math.random() < 0.2; // 20% di probabilità
            if (isShip) {
                cell.textContent = 'X'; // Segna una nave
                cell.classList.add('clicked');
            } else {
                cell.style.backgroundColor = '#ecf0f1'; // Acqua
                cell.classList.add('clicked');
            }
        }
    });

    //richiesta HTTP per il proprio codice utente
    // URL del server remoto
// const url = 'http://93.46.108.152:3309/home/pi/phpProgs/id.php';
// //const url = 'http://localhost/C:pweb/tools/XAMPP/htdocs/server/php/id.php';

// fetch(url)
//   .then(response => {
//     // Verifica se la risposta HTTP ha avuto successo (codice 200)
//     if (!response.ok) {
//       throw new Error(`Errore HTTP! Codice: ${response.status}`);
//     }
    
//     // Leggi il corpo della risposta come JSON
//     return response.json();
//   })
//   .then(data => {
//     // Il numero di ritorno è stato ottenuto con successo
//     console.log(`Numero ricevuto: ${data.numero}`);
//     document.getElementById("myId").textContent=data.numero;
//   })
//   .catch(error => {
//     // Gestione degli errori
//     console.error(`Si è verificato un errore: ${error.message}`);
//   });

fetch('http://93.46.108.152:/phpProgs/id.php')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Stampa l'oggetto JSON nella console
    console.log("Numero ricevuto:", data.numero); // Accedi al numero ricevuto dall'oggetto JSON
    document.getElementById("myId").textContent=data.numero;

  })
  .catch(error => {
    console.error('Errore nella richiesta:', error);
  });

  console.log("eccoce");

});
