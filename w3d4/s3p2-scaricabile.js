// Il tuo compito è creare un sito e-commerce per Smartphones. 
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto. 
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata


document.addEventListener("DOMContentLoaded", function(){
    let titoli= [
        "ElectroTech Direct",
        "Il rivenditore Amazon di elettronica numero uno in Italia", 
        "Tecnologia a Portata di Mano con ElectroTech Direct su Amazon!",
        "Esplora l'Universo Tecnologico su ElectroTech Direct con Amazon!",
        "Elettronica di Qualità Garantita su ElectroTech Direct con Amazon!",
    ]
    let titolo = document.querySelector("h1")
let titoloCasuale = titoli[Math.floor(Math.random() * titoli.length)]
titolo.innerHTML = titoloCasuale
})

function modalitaScura(){
let cardColore= document.querySelectorAll('[id^="card"]')
cardColore.forEach(function(cardColore){
let sfondo= cardColore.style.backgroundColor
if (sfondo=== "white"){
    cardColore.style.backgroundColor= "black"
} else{
    cardColore.style.backgroundColor= "white"
}
})
}


document.addEventListener("DOMContentLoaded", function(){
    let indirizzi= [
        "Via Prampolini 1, Reggio Emilia (RE)",
        "Via San Marco 4089/S, Venezia (VE)", 
        "Via Massimo D'Azeglio 2, Ravenna (RA)",
        "Via dei S.d.f. Mameli 10, Casale Monferrato (AL)",
        "Via dell'Anagrafe 1, Sassari (SS)",
    ]
    let indirizzo = document.querySelector("ul li:nth-child(2)");
let indirizzoCasuale = indirizzi[Math.floor(Math.random() * indirizzi.length)]
indirizzo.innerHTML = indirizzoCasuale
})






let links = document.querySelectorAll('a');
links.forEach(function(link) {
     link.style.textDecoration = 'none'

})


function invisibile(){
let immagini= document.querySelectorAll('#card img');
immagini.forEach(function(immagini){
    let modifica= immagini.style.display
    if (modifica=== ''){
        immagini.style.display= 'none'
    } else{
        immagini.style.display= ''
    }
})
}

document.addEventListener("DOMContentLoaded", function(){
    function cambioColore() {
        let colori = ['green', 'blue', 'red','purple'];
        let coloreCasuale = colori[Math.floor(Math.random() * colori.length)];
        let h3 = document.querySelectorAll('h3');
        h3.forEach(function(h3) {
            h3.style.color = coloreCasuale;
        });
    }
    cambioColore();
});
